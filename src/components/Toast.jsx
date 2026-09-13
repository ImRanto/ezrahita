import { Check } from "lucide-react";

export default function Toast({ children }) {
  return (
    <div className="fixed z-[100] right-[22px] bottom-[22px] flex items-center gap-2.5 max-w-[calc(100%-44px)] py-[14px] px-[18px] rounded-xl text-white bg-ink shadow-[0_15px_40px_rgba(11,31,58,0.22)] text-xs animate-toast-in">
      <Check size={16} color="#7ee2ac" /> {children}
    </div>
  );
}
