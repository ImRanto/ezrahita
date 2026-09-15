export default function FilterPills({ options, active, onChange, getLabel = (o) => o }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-[35px]">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`py-[11px] px-[15px] border rounded-full text-[11px] font-bold transition-colors duration-150 ${
            active === option
              ? "border-cobalt text-cobalt bg-[#eef3ff]"
              : "border-line text-muted bg-white hover:border-cobalt hover:text-cobalt hover:bg-[#eef3ff]"
          }`}
        >
          {getLabel(option)}
        </button>
      ))}
    </div>
  );
}
