import { useEffect, useState } from "react";
import { useLocation } from "wouter";

/**
 * Loader plein écran affiché au premier chargement du site et à chaque
 * changement de page. Placé une seule fois dans `App.tsx`, il couvre
 * automatiquement toutes les routes.
 *
 * MIN_DISPLAY garantit que l'animation reste lisible (pas de flash à chaque
 * clic), puis l'overlay disparaît en fondu (FADE_MS = durée de la transition
 * `duration-300` ci-dessous — garder les deux cohérents).
 */
const MIN_DISPLAY = 500;
const FADE_MS = 300;

export default function PageLoader() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  // À chaque navigation : on ré-affiche l'overlay, puis fondu de sortie.
  useEffect(() => {
    setVisible(true);
    setLeaving(false);

    const fadeTimer = window.setTimeout(() => setLeaving(true), MIN_DISPLAY);
    const hideTimer = window.setTimeout(
      () => setVisible(false),
      MIN_DISPLAY + FADE_MS
    );

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [location]);

  // Pendant le chargement, on bloque le scroll pour ne pas voir la page
  // se construire derrière l'overlay.
  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Chargement de la page"
      className={`fixed inset-0 z-[100] grid place-items-center bg-white transition-opacity duration-300 ease-out-smooth ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center animate-loader-pop">
        <img
          src="/ame-logo.png"
          alt=""
          aria-hidden="true"
          className="w-[56px] h-[56px] p-1.5 object-contain rounded-[12px] bg-white shadow-[0_6px_20px_rgba(11,31,58,0.16)] animate-float"
        />
        <span className="mt-4 text-[17px] font-bold tracking-[-0.02em] text-ink">
          Ezrahita
        </span>

        <div className="relative mt-5 w-[128px] h-[3px] rounded-full bg-line overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-cobalt animate-loader-slide" />
        </div>

        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
          Chargement
        </span>
      </div>
    </div>
  );
}
