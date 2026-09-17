// Génère les tailles réduites des icônes à partir de public/icon-512.png.
//
// Pourquoi ce script : Chrome headless ne peut pas produire d'image plus petite
// que ~500 px de large, donc `tools/icon.html` est rendu en 512 px par Chrome
// puis redimensionné ici, sans aucune dépendance externe.
//
// Usage :
//   node tools/make-icons.mjs
//
// Pour tout régénérer après un changement de logo :
//   chrome --headless=new --window-size=512,512 --screenshot=public/icon-512.png tools/icon.html
//   node tools/make-icons.mjs

import fs from "node:fs";
import zlib from "node:zlib";

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

const crc32 = (buf) => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const readPng = (file) => {
  const buf = fs.readFileSync(file);
  if (buf.toString("ascii", 1, 4) !== "PNG") throw new Error(`${file} n'est pas un PNG`);

  let width = 0;
  let height = 0;
  let channels = 4;
  const idat = [];

  for (let off = 8; off < buf.length; ) {
    const length = buf.readUInt32BE(off);
    const type = buf.toString("ascii", off + 4, off + 8);
    const data = buf.subarray(off + 8, off + 8 + length);

    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      if (data[8] !== 8) throw new Error("seul le 8 bits par canal est géré");
      if (data[12] !== 0) throw new Error("les PNG entrelacés ne sont pas gérés");
      channels = data[9] === 6 ? 4 : data[9] === 2 ? 3 : 1;
    } else if (type === "IDAT") {
      idat.push(data);
    } else if (type === "IEND") {
      break;
    }

    off += 12 + length;
  }

  const stride = width * channels;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const pixels = Buffer.alloc(height * stride);

  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)];
    const line = raw.subarray(y * (stride + 1) + 1, y * (stride + 1) + 1 + stride);
    const row = y * stride;
    const prevRow = y > 0 ? row - stride : -1;

    for (let x = 0; x < stride; x++) {
      const left = x >= channels ? pixels[row + x - channels] : 0;
      const up = prevRow >= 0 ? pixels[prevRow + x] : 0;
      const upLeft = prevRow >= 0 && x >= channels ? pixels[prevRow + x - channels] : 0;
      let value = line[x];

      if (filter === 1) value += left;
      else if (filter === 2) value += up;
      else if (filter === 3) value += (left + up) >> 1;
      else if (filter === 4) {
        const pa = Math.abs(up - upLeft);
        const pb = Math.abs(left - upLeft);
        const pc = Math.abs(left + up - 2 * upLeft);
        value += pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft;
      }

      pixels[row + x] = value & 0xff;
    }
  }

  return { width, height, channels, pixels };
};

// Moyenne des pixels sources couverts par chaque pixel de sortie (box filter).
const resize = ({ width, height, channels, pixels }, outWidth, outHeight) => {
  const out = Buffer.alloc(outWidth * outHeight * channels);
  const ratioX = width / outWidth;
  const ratioY = height / outHeight;

  for (let y = 0; y < outHeight; y++) {
    const sourceY0 = Math.floor(y * ratioY);
    const sourceY1 = Math.min(height, Math.ceil((y + 1) * ratioY));

    for (let x = 0; x < outWidth; x++) {
      const sourceX0 = Math.floor(x * ratioX);
      const sourceX1 = Math.min(width, Math.ceil((x + 1) * ratioX));
      let red = 0;
      let green = 0;
      let blue = 0;
      let alpha = 0;
      let count = 0;

      for (let sourceY = sourceY0; sourceY < sourceY1; sourceY++) {
        for (let sourceX = sourceX0; sourceX < sourceX1; sourceX++) {
          const index = (sourceY * width + sourceX) * channels;
          red += pixels[index];
          green += pixels[index + 1];
          blue += pixels[index + 2];
          if (channels === 4) alpha += pixels[index + 3];
          count++;
        }
      }

      const target = (y * outWidth + x) * channels;
      out[target] = Math.round(red / count);
      out[target + 1] = Math.round(green / count);
      out[target + 2] = Math.round(blue / count);
      if (channels === 4) out[target + 3] = Math.round(alpha / count);
    }
  }

  return { width: outWidth, height: outHeight, channels, pixels: out };
};

const chunk = (type, data) => {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
};

const writePng = (file, { width, height, channels, pixels }) => {
  const stride = width * channels;
  const raw = Buffer.alloc((stride + 1) * height);

  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0;
    pixels.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = channels === 4 ? 6 : 2;
  header[10] = 0;
  header[11] = 0;
  header[12] = 0;

  fs.writeFileSync(
    file,
    Buffer.concat([
      Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
      chunk("IHDR", header),
      chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
      chunk("IEND", Buffer.alloc(0)),
    ])
  );
};

const describe = ({ width, height, channels, pixels }, file) => {
  let nonWhite = 0;
  for (let i = 0; i < width * height; i++) {
    const index = i * channels;
    if (pixels[index] < 240 || pixels[index + 1] < 240 || pixels[index + 2] < 240) nonWhite++;
  }

  console.log(
    `${file} → ${width}x${height}, ${Math.round(
      fs.statSync(file).size / 1024
    )} Ko, ${Math.round((nonWhite / (width * height)) * 100)}% de pixels non blancs`
  );
};

const source = readPng("public/icon-512.png");

for (const [size, file] of [
  [512, "public/icon-512.png"],
  [192, "public/icon-192.png"],
  [180, "public/apple-touch-icon.png"],
]) {
  if (size === 512) {
    describe(source, file);
    continue;
  }

  writePng(file, resize(source, size, size));
  describe(readPng(file), file);
}
