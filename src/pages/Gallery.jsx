import { useState } from "react";
import Layout from "../components/Layout.jsx";
import PageHero from "../components/PageHero.jsx";
import FilterPills from "../components/FilterPills.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { albums, gallery } from "../data.js";

const ALL_ALBUMS = "Tous les albums";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [album, setAlbum] = useState(ALL_ALBUMS);
  const filtered = album === ALL_ALBUMS ? gallery : gallery.filter((item) => item.album === album);
  const current = lightbox === null ? null : filtered[lightbox];

  const move = (direction) => {
    if (lightbox === null) return;
    setLightbox((lightbox + direction + filtered.length) % filtered.length);
  };

  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="En images"
          title={
            <>
              Les moments
              <br />
              <span className="text-[#ffb5b1]">entre les notes.</span>
            </>
          }
          text="Un aperçu des répétitions, des concerts et de la vie qui s'invente autour de la musique."
        />
        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <FilterPills
              options={[ALL_ALBUMS, ...albums.map((item) => item.title)]}
              active={album}
              onChange={setAlbum}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setLightbox(index)}
                  aria-label={`Ouvrir ${item.caption}`}
                  className="group relative h-[170px] sm:h-[220px] overflow-hidden rounded-[3px_16px_3px_16px] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-300 ease-out-smooth group-hover:scale-[1.06] group-hover:brightness-[0.7]"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {current && (
          <Lightbox
            item={current}
            index={lightbox}
            total={filtered.length}
            onClose={() => setLightbox(null)}
            onMove={move}
          />
        )}
      </main>
    </Layout>
  );
}
