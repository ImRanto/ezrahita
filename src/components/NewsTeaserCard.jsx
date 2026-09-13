import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NewsTeaserCard({ article }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className="group block overflow-hidden border border-line rounded-2xl bg-white transition-all duration-300 ease-out-smooth hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(11,31,58,0.1)]"
    >
      <div className="relative h-[205px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[550ms] ease-out-smooth group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-5">
        <div className="text-coral text-[10px] font-extrabold uppercase tracking-[0.12em]">
          {article.category} · {article.date}
        </div>
        <h3 className="mt-[9px] mb-[11px] font-serif text-[27px] leading-[0.95] font-semibold">
          {article.title}
        </h3>
        <p className="mt-[13px] mb-4 text-muted text-xs leading-[1.55]">{article.excerpt}</p>
        <span className="text-link">
          Lire l'article <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
