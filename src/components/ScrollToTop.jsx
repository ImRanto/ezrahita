import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Bouton flottant « revenir en haut ». Il apparaît une fois que le visiteur a
 * dépassé VISIBLE_AFTER, et l'anneau qui l'entoure se remplit au rythme de la
 * progression de lecture.
 *
 * SIZE et RADIUS doivent rester cohérents avec les classes de taille
 * (`w-[52px] h-[52px]`) et le `viewBox` du SVG ci-dessous.
 */
const VISIBLE_AFTER = 640;
const SIZE = 52;
const RADIUS = 25;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let max = 0;

    // `scrollHeight` déclenche un recalcul de la mise en page : on ne le lit
    // qu'au montage et quand la hauteur du document change, pas à chaque frame.
    const measure = () => {
      max = document.documentElement.scrollHeight - window.innerHeight;
    };

    // La lecture du scroll est regroupée dans une frame : l'événement `scroll`
    // en émet beaucoup plus que le navigateur n'affiche d'images.
    const read = () => {
      frame = 0;
      const top = window.scrollY;
      setVisible(top > VISIBLE_AFTER);
      setProgress(max > 0 ? Math.min(top / max, 1) : 0);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };

    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    read();

    const observer = new ResizeObserver(onResize);
    observer.observe(document.documentElement);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const backToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={backToTop}
      aria-label="Revenir en haut de la page"
      title="Revenir en haut"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed z-20 right-[22px] bottom-[22px] grid place-items-center w-[52px] h-[52px] rounded-full text-ink bg-white/90 backdrop-blur-md shadow-[0_10px_28px_rgba(11,31,58,0.16)] transition-all duration-[400ms] ease-out-smooth hover:-translate-y-1 hover:text-cobalt hover:shadow-[0_18px_36px_rgba(29,78,216,0.24)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full -rotate-90"
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth="1.5"
          className="stroke-line transition-colors duration-300 group-hover:stroke-[#b8c8ef]"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="stroke-cobalt transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>
      <ArrowUp
        size={18}
        className="relative transition-transform duration-300 ease-out-smooth group-hover:-translate-y-0.5"
      />
    </button>
  );
}
