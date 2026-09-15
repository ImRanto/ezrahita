import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function BackLink({ href, children, className = "mb-[38px]" }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 text-cobalt text-xs font-bold ${className}`}>
      <ArrowLeft size={15} /> {children}
    </Link>
  );
}
