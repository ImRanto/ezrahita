const fieldClasses =
  "w-full py-[13px] px-[14px] border border-line rounded-[10px] outline-none text-ink bg-[#fbfcfe] text-xs resize-y focus:border-cobalt focus:shadow-[0_0_0_3px_rgba(29,78,216,0.1)]";

export default function FormField({ label, id, as = "input", children, ...rest }) {
  const Tag = as;
  return (
    <div className="grid gap-2 mb-[18px]">
      <label htmlFor={id} className="text-ink-soft text-[11px] font-bold">
        {label}
      </label>
      <Tag id={id} name={id} className={fieldClasses} {...rest}>
        {children}
      </Tag>
    </div>
  );
}
