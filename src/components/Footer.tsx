import { MapPin, MessageCircle, Youtube } from "lucide-react";
import Brand from "./Brand";
import { footerNavItems } from "../nav";
import { venue } from "../data";
const socialLinks = [
  { label: "YouTube", icon: Youtube, href: "http://www.youtube.com/@ezrahita" },
  { label: "Message", icon: MessageCircle, href: "#social" },
];

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-[17px] text-white text-[11px] font-bold uppercase tracking-[0.14em]">
        {title}
      </h3>
      <div className="grid gap-[11px]">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-[70px] pb-[26px] text-white bg-[#07182d]">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr] gap-x-[22px] gap-y-[34px] lg:gap-[40px] pb-[62px]">
          <div className="col-span-2 lg:col-span-1">
            <Brand />
            <p className="max-w-[220px] mt-5 text-white/55 font-serif text-[25px] leading-[0.9]">
              Une voix
              <br />
              Une communauté
              <br />
              Une passion
            </p>
          </div>

          <FooterColumn title="Navigation">
            {footerNavItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-white/56 text-xs transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noreferrer"
              title="Voir sur Google Maps"
              className="group inline-flex items-start gap-1.5 text-white/56 text-xs transition-colors hover:text-white"
            >
              <span className="underline decoration-white/25 underline-offset-[3px] transition-colors group-hover:decoration-white/70">
                FJKM Ambohimanandray Filadelfia
              </span>
            </a>
            <span className="text-white/56 text-xs">Antananarivo, Madagascar</span>
            <a
              href="mailto:contact@ezrahita.mg"
              className="text-white/56 text-xs transition-colors hover:text-white"
            >
              contact@ezrahita.mg
            </a>
            <a
              href="tel:+261000000000"
              className="text-white/56 text-xs transition-colors hover:text-white"
            >
              +261 XX XX XXX XX
            </a>
          </FooterColumn>

          <FooterColumn title="Suivez-nous">
            <a href="https://www.facebook.com/AntokoMpihiraEzrahita" target="_blank" rel="noreferrer" className="text-white/56 text-xs transition-colors hover:text-white" >
              Facebook
            </a>
            <a
              href="http://www.youtube.com/@ezrahita"
              target="_blank"
              rel="noreferrer"
              className="text-white/56 text-xs transition-colors hover:text-white"
            >
              YouTube
            </a>
            <div className="flex gap-[9px] mt-1" id="social">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "YouTube" ? "_blank" : undefined}
                  rel={label === "YouTube" ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid place-items-center w-[30px] h-[30px] border border-white/20 rounded-full text-white transition-colors hover:border-coral hover:bg-coral"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[15px] pt-6 border-t border-white/[0.11] text-white/40 text-[10px]">
          <span>© 2026 Ezrahita. Tous droits réservés.</span>
          <span>Fait de voix, de souffle et de liens.</span>
        </div>
      </div>
    </footer>
  );
}
