import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Lightbox({ item, index, total, onClose, onMove }) {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-label="Galerie photo"
      onClick={onClose}
      className="fixed z-[80] inset-0 grid place-items-center p-[30px] bg-[rgba(5,15,29,0.92)] backdrop-blur-md"
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-[25px] right-[25px] grid place-items-center w-11 h-11 border border-white/35 rounded-full text-white bg-white/10"
      >
        <X size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMove(-1);
        }}
        aria-label="Photo précédente"
        className="absolute left-[10px] sm:left-[25px] grid place-items-center w-11 h-11 border border-white/35 rounded-full text-white bg-white/10"
      >
        <ChevronLeft size={22} />
      </button>
      <img
        src={item.image}
        alt={item.caption}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[min(100%,1100px)] max-h-[82vh] object-contain rounded"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMove(1);
        }}
        aria-label="Photo suivante"
        className="absolute right-[10px] sm:right-[25px] grid place-items-center w-11 h-11 border border-white/35 rounded-full text-white bg-white/10"
      >
        <ChevronRight size={22} />
      </button>
      <div className="absolute bottom-6 text-white/70 text-xs">
        {item.caption} · {index + 1} / {total}
      </div>
    </div>
  );
}
