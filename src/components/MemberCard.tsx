import { Link } from "wouter";
import { ArrowRight, Music2 } from "lucide-react";
import { memberRoleLabel } from "../data";

export default function MemberCard({ member }) {
  return (
    <Link
      href={`/members/${member.id}`}
      className="group relative block overflow-hidden rounded-[4px_28px_4px_28px] bg-white"
    >
      <div className="relative h-[285px] sm:h-[355px] overflow-hidden bg-[#dfe6f1]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(11,31,58,0.62)] opacity-80 [background:linear-gradient(180deg,transparent_52%,rgba(11,31,58,0.62))]" />
        <img
          src={member.image}
          alt={`Portrait de ${member.name}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[550ms] ease-out-smooth group-hover:scale-[1.06] group-hover:saturate-[1.08]"
        />
        {member.category === "Musicien" && (
          <span className="absolute z-[1] top-[18px] left-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-white/90 backdrop-blur-sm text-ink text-[10px] font-bold uppercase tracking-[0.12em]">
            <Music2 size={12} className="text-cobalt" /> Musicien
          </span>
        )}
        <div className="absolute z-[1] inset-x-5 bottom-[18px] flex items-end justify-between text-white">
          <div>
            <h3 className="m-0 font-serif text-[29px] font-semibold leading-[0.9]">{member.name}</h3>
            <p className="mt-2 mb-0 text-white/74 text-[11px]">
              {memberRoleLabel(member)}
              {member.joined ? ` · depuis ${member.joined}` : ""}
            </p>
          </div>
          <span className="grid place-items-center w-[35px] h-[35px] border border-white/50 rounded-full transition-colors duration-200 group-hover:text-ink group-hover:bg-white">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
