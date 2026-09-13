import { stats } from "../data.js";

// Per-item border classes that reproduce the desktop 4-col / mobile 2-col
// grid divider lines (right border between columns, bottom border between
// mobile rows, no trailing border on the last column of each row).
const BORDER_CLASSES = [
  "border-r border-b md:border-b-0 border-line",
  "border-b md:border-r md:border-b-0 border-line",
  "border-r border-line",
  "border-line",
];

export default function StatStrip() {
  return (
    <div className="relative z-[2] w-[min(1180px,calc(100%-48px))] mx-auto -mt-[25px] md:-mt-[42px]">
      <div className="grid grid-cols-2 md:grid-cols-4 rounded-[20px] overflow-hidden bg-white shadow-[0_16px_50px_rgba(11,31,58,0.12)]">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`py-[22px] px-5 md:py-[27px] md:px-8 ${BORDER_CLASSES[index]}`}>
            <div className="text-cobalt font-serif text-[38px] md:text-[45px] leading-[0.9] tracking-[-0.04em]">
              {stat.value}
              {stat.suffix}
            </div>
            <div className="mt-[7px] text-muted text-[11px] font-bold uppercase tracking-[0.12em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
