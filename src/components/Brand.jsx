import { Link } from "wouter";

/**
 * The "Ezrahita" logo mark + wordmark, used in the header and footer.
 */
export default function Brand({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="Ezrahita, accueil"
      className={`inline-flex items-center gap-[11px] text-[15px] font-bold tracking-[-0.02em] whitespace-nowrap ${className}`}
    >
      <span className="grid place-items-center w-[35px] h-[35px] rounded-[11px_11px_11px_3px] bg-coral text-white -rotate-[4deg]">
        <img
          src="/ame-logo.png"
          alt="AME"
          className="w-full h-full object-cover rounded-[inherit] rotate-[4deg]"
        />
      </span>
      Ezrahita
    </Link>
  );
}
