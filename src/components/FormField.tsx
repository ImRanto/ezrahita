import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const fieldClasses =
  "w-full py-[13px] px-[14px] border border-line rounded-[10px] outline-none text-ink bg-[#fbfcfe] text-xs resize-y focus:border-cobalt focus:shadow-[0_0_0_3px_rgba(29,78,216,0.1)]";

type FormFieldProps = {
  label: ReactNode;
  id: string;
  as?: "input" | "textarea" | "select";
  children?: ReactNode;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
  | SelectHTMLAttributes<HTMLSelectElement>
);

export default function FormField({ label, id, as = "input", children, ...rest }: FormFieldProps) {
  const Tag = as as "input" | "textarea" | "select";
  return (
    <div className="grid gap-2 mb-[18px]">
      <label htmlFor={id} className="text-ink-soft text-[11px] font-bold">
        {label}
      </label>
      <Tag id={id} name={id} className={fieldClasses} {...(rest as Record<string, unknown>)}>
        {children}
      </Tag>
    </div>
  );
}
