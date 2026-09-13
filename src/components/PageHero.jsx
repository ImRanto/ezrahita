export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="pt-[150px] pb-[75px] md:pt-[180px] md:pb-[90px] text-white bg-ink">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="eyebrow text-[#ffb5b1]">{eyebrow}</div>
        <h1 className="font-serif text-[clamp(3rem,7vw,5.8rem)] leading-[0.92] tracking-[-0.035em] mt-[18px] font-semibold">
          {title}
        </h1>
        <p className="max-w-[520px] mt-[25px] text-white/65 leading-[1.7]">{text}</p>
      </div>
    </section>
  );
}
