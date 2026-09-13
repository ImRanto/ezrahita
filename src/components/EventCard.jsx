import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group block overflow-hidden border border-line rounded-2xl bg-white transition-all duration-300 ease-out-smooth hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(11,31,58,0.1)]"
    >
      <div className="relative h-[205px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[550ms] ease-out-smooth group-hover:scale-[1.06]"
        />
        <div className="absolute top-[14px] left-[14px] grid place-items-center w-[58px] h-[63px] rounded-[10px] text-ink bg-white shadow-[0_7px_16px_rgba(11,31,58,0.12)]">
          <strong className="font-serif text-[28px] leading-[0.75] font-semibold">{event.day}</strong>
          <small className="mt-1 text-coral text-[9px] font-extrabold tracking-[0.12em]">{event.month}</small>
        </div>
      </div>
      <div className="p-5">
        <div className="text-coral text-[10px] font-extrabold uppercase tracking-[0.12em]">{event.type}</div>
        <h3 className="mt-[9px] mb-[11px] font-serif text-[27px] leading-[0.95] font-semibold">{event.title}</h3>
        <div className="flex items-center gap-1.5 text-muted text-[11px]">
          <MapPin size={13} /> {event.location}
        </div>
        <p className="mt-[13px] mb-4 text-muted text-xs leading-[1.55]">{event.description}</p>
        <span className="text-link">
          Voir l'événement <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
