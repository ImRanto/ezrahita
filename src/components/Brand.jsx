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
      <span className="grid place-items-center w-[42px] h-[42px] rounded-[11px_11px_11px_3px] bg-coral text-white shadow-[0_4px_12px_rgba(11,31,58,0.18)] -rotate-[4deg]">
        <img
          src="/ame-logo.png"
          alt="AME"
          className="w-full h-full p-1 object-contain rounded-[inherit] rotate-[4deg]"
        />
      </span>
      Ezrahita
    </Link>
  );
}
