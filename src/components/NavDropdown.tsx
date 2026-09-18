import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";

/**
 * Entrée de navbar avec panneau déroulant enrichi : liens avec descriptions,
 * en-tête de panneau, action footer optionnelle, animations d'entrée
 * échelonnées. S'ouvre au survol (desktop) mais aussi au clic / Entrée /
 * Espace / flèches (clavier et tactile), et se ferme avec Échap ou un clic
 * extérieur.
 */
export default function NavDropdown({ label, items, footer = null }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  // Fermeture au clic extérieur et avec Échap.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Se referme après une navigation (choix d'une page du panneau).
  useEffect(() => setOpen(false), [location]);

  const groupActive = items.some(({ href }) => location === href);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
            rootRef.current?.querySelector("a")?.focus();
          }
        }}
        className={`relative inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-200 ${
          groupActive
            ? "opacity-100 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-coral after:scale-x-100"
            : "opacity-80 hover:opacity-100 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-coral after:scale-x-0 after:origin-left after:transition-transform after:duration-200"
        }`}
      >
        {label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-[13px] transition-all duration-200 ease-out-smooth ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="relative">
          {/* Petite flèche de liaison entre la barre et le panneau */}
          <span
            aria-hidden="true"
            className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 border-l border-t border-line bg-white rounded-[2px]"
          />
          <div className="overflow-hidden w-[260px] border border-line rounded-2xl bg-white shadow-[0_24px_50px_-12px_rgba(11,31,58,0.25)]">
            <div className="px-4 pt-3.5 pb-2.5 border-b border-line/70 bg-mist/60">
              <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-coral">
                {label}
              </span>
            </div>

            <div className="grid gap-0.5 p-2">
              {items.map(({ label: itemLabel, href, description }, index) => (
                <Link
                  key={href}
                  href={href}
                  style={{ transitionDelay: open ? `${60 + index * 40}ms` : "0ms" }}
                  className={`group/item grid gap-0.5 py-2.5 px-3 rounded-[10px] transition-colors duration-150 hover:bg-mist ${
                    location === href ? "bg-mist" : ""
                  } ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  } transition-[opacity,transform,background-color] duration-200 ease-out-smooth`}
                >
                  <span
                    className={`text-[12.5px] font-bold leading-tight transition-colors duration-150 ${
                      location === href
                        ? "text-cobalt"
                        : "text-ink group-hover/item:text-cobalt"
                    }`}
                  >
                    {itemLabel}
                  </span>
                  <span className="text-[10.5px] leading-snug text-muted">
                    {description}
                  </span>
                </Link>
              ))}
            </div>

            {footer && (
              <Link
                href={footer[1]}
                className="flex items-center justify-between gap-2 py-2.5 px-4 border-t border-line/70 text-[11px] font-bold text-cobalt transition-colors duration-150 hover:bg-mist hover:text-coral"
              >
                {footer[0]}
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 ease-out-smooth group-hover:translate-x-0.5"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
