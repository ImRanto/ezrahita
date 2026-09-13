import { Link } from "wouter";

const VARIANTS = {
  primary:
    "text-white bg-cobalt shadow-[0_8px_20px_rgba(29,78,216,0.18)] hover:bg-cobalt-dark hover:shadow-[0_12px_28px_rgba(29,78,216,0.24)]",
  ghost:
    "text-ink border border-line bg-white/70 hover:border-cobalt hover:text-cobalt hover:bg-white",
  light: "text-ink bg-white hover:bg-[#f0f4ff]",
  coral: "text-white bg-coral hover:bg-[#c93d3d]",
  outline: "text-white border border-white/35 hover:bg-white/10",
};

/**
 * Pill-shaped call-to-action button. Renders a wouter <Link> when `href`
 * is provided, otherwise a native <button>.
 */
export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2.5 min-h-[48px] px-5 rounded-full text-[13px] font-bold transition-transform duration-[180ms] ease-out-smooth active:scale-[0.97] ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
