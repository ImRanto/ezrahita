export default function SectionHeading({ eyebrow, title, text, action }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-[30px] md:mb-[46px]">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="font-serif text-[clamp(2.7rem,5vw,4.6rem)] tracking-[-0.035em] leading-[0.92] mt-4 font-semibold">
          {title}
        </h2>
      </div>
      {text && (
        <p className="max-w-[350px] mt-[18px] md:mt-0 text-muted leading-[1.7] m-0">{text}</p>
      )}
      {action}
    </div>
  );
}
