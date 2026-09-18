import { Users, Clock } from "lucide-react";

function Pill({ label, active, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`py-[7px] px-[14px] rounded-full text-[11px] font-bold leading-none whitespace-nowrap transition-colors duration-150 ${
        active
          ? "bg-cobalt text-white shadow-[0_3px_10px_rgba(29,78,216,0.28)]"
          : "text-muted hover:text-cobalt hover:bg-[#eef3ff]"
      }`}
    >
      {label}
    </button>
  );
}

function GroupLabel({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 pl-3 pr-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
      {icon}
      {children}
    </span>
  );
}

export default function FilterBar({
  groupOptions,
  activeGroup,
  onGroupChange,
  periodOptions,
  activePeriod,
  onPeriodChange,
}) {
  const showPeriod = activeGroup !== "Tous";

  return (
    <div className="inline-flex max-w-full flex-wrap items-center justify-center rounded-full border border-line bg-white p-1.5 shadow-[0_10px_30px_-18px_rgba(11,31,58,0.35)]">
      <div className="flex flex-wrap items-center gap-1">
        <GroupLabel icon={<Users size={12} className="text-cobalt" />}>
          Groupe
        </GroupLabel>
        {groupOptions.map((option) => (
          <Pill
            key={option}
            label={option}
            active={activeGroup === option}
            onClick={() => onGroupChange(option)}
          />
        ))}
      </div>
      {showPeriod && (
        <div className="flex flex-wrap items-center gap-1 mt-1 md:mt-0 md:ml-1.5 md:border-l md:border-line md:pl-1.5">
          <GroupLabel icon={<Clock size={12} className="text-cobalt" />}>
            Époque
          </GroupLabel>
          {periodOptions.map((option) => (
            <Pill
              key={option}
              label={option}
              active={activePeriod === option}
              onClick={() => onPeriodChange(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
