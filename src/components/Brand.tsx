import { Link } from "wouter";

/**
 * The "Ezrahita" logo mark + wordmark, used in the header and footer.
 */
export default function Brand({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="Ezrahita, accueil"
      className={`inline-flex items-center gap-[11px] text-[16px] font-bold tracking-[-0.02em] whitespace-nowrap ${className}`}
    >
      <img
        src="/public/65eme.jpg"
        alt="Logo Ezrahita"
        className="w-[52px] h-[52px] p-1 object-contain rounded-[10px] bg-white shadow-[0_4px_12px_rgba(11,31,58,0.22)]"
      />
      Ezrahita
    </Link>
  );
}
