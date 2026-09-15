import { Link } from "wouter";
import type { ButtonHTMLAttributes, ComponentType, ReactNode } from "react";

const VARIANTS = {
  primary:
    "text-white bg-cobalt shadow-[0_8px_20px_rgba(29,78,216,0.18)] hover:bg-cobalt-dark hover:shadow-[0_12px_28px_rgba(29,78,216,0.24)]",
  ghost:
    "text-ink border border-line bg-white/70 hover:border-cobalt hover:text-cobalt hover:bg-white",
  light: "text-ink bg-white hover:bg-[#f0f4ff]",
  coral: "text-white bg-coral hover:bg-[#c93d3d]",
  outline: "text-white border border-white/35 hover:bg-white/10",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: keyof typeof VARIANTS;
  children?: ReactNode;
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
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2.5 min-h-[48px] px-5 rounded-full text-[13px] font-bold transition-transform duration-[180ms] ease-out-smooth active:scale-[0.97] ${VARIANTS[variant]} ${className}`;

  if (href) {
    const RouterLink = Link as unknown as ComponentType<{
      href: string;
      className: string;
      children: ReactNode;
    }>;
    return (
      <RouterLink href={href} className={classes}>
        {children}
      </RouterLink>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
