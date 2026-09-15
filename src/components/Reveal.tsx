export default function Reveal({ children, className = "" }) {
  return <div className={`animate-reveal ${className}`}>{children}</div>;
}
