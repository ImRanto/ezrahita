export const VOICE_ICON_STYLES = {
  "1er": "text-cobalt bg-[#eef3ff]",
  "2e": "text-coral bg-coral-soft",
  "3e": "text-[#7b61c9] bg-[#f0edff]",
  Basse: "text-[#197c66] bg-[#e5f8f0]",
};

export default function VoiceIcon({ voice, className = "mb-[55px]" }) {
  return (
    <div
      className={`grid place-items-center w-11 h-11 rounded-[13px] text-[23px] ${VOICE_ICON_STYLES[voice.id]} ${className}`}
    >
      {voice.icon}
    </div>
  );
}
