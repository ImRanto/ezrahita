import { Link } from "wouter";

/**
 * The "Ezrahita" logo mark + wordmark, used in the header and footer.
 */
export default function Brand({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="Ezrahita, accueil"
      className={`inline-flex items-center gap-3 text-[17px] font-bold tracking-[-0.02em] whitespace-nowrap ${className}`}
    >
      <img
        src="/ame-logo.png"
        alt="Logo Ezrahita"
        className="w-[78px] h-[78px] p-1 object-contain rounded-[12px] bg-white shadow-[0_5px_16px_rgba(11,31,58,0.24)]"
      />
    </Link>
  );
}
