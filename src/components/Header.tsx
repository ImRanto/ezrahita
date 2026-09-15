import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Menu, Users, X } from "lucide-react";
import Brand from "./Brand";
import { navItems } from "../nav";

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed z-30 inset-x-0 top-0 transition-[background,color,box-shadow,padding] duration-200 ${
        scrolled
          ? "text-ink bg-white/95 shadow-[0_1px_0_rgba(11,31,58,0.08)] backdrop-blur-xl"
          : "text-white"
      }`}
    >
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto flex items-center justify-between min-h-[78px] gap-[30px]">
        <Brand />

        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-6 ml-auto"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative text-xs font-semibold transition-opacity duration-200 ${
                location === href
                  ? "opacity-100 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-coral"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="hidden lg:inline-flex items-center gap-2 py-2.5 px-[15px] border border-current rounded-full text-xs font-bold opacity-95 cursor-pointer transition duration-200 ease-out-smooth hover:opacity-100 active:scale-[0.97]"
        >
          <Users size={14} /> Espace membre
        </button>

        <button
          className="lg:hidden grid w-[42px] h-[42px] place-items-center text-current bg-transparent"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navigation mobile"
          className="lg:hidden absolute top-[78px] right-[18px] left-[18px] grid gap-1 p-3 border border-line rounded-2xl text-ink bg-white shadow-[0_20px_45px_rgba(11,31,58,0.22)]"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="py-[13px] px-3 rounded-[9px] text-[13px] font-bold hover:bg-mist hover:text-cobalt"
            >
              {label}
            </Link>
          ))}
          <button
            type="button"
            className="mt-[5px] py-[13px] px-3 rounded-[9px] text-[13px] font-bold text-center text-white bg-cobalt inline-flex items-center justify-center gap-2 cursor-pointer transition duration-200 ease-out-smooth active:scale-[0.97]"
          >
            Espace membre <ArrowRight size={14} />
          </button>
        </nav>
      )}
    </header>
  );
}
