import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-[70px] md:py-[98px] text-white bg-cobalt">
      <div className="absolute -right-[30px] -bottom-[180px] w-[480px] h-[480px] border border-white/[0.16] rounded-full" />
      <div className="relative z-[1] w-[min(1180px,calc(100%-48px))] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div>
          <div className="eyebrow text-[#ffb5b1]">Venez nous rencontrer</div>
          <h2 className="max-w-[680px] mt-3.5 font-serif text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.85] tracking-[-0.045em]">
            Envie de découvrir notre univers&nbsp;?
          </h2>
          <p className="max-w-[430px] mt-5 text-white/70 text-sm leading-[1.6]">
            Suivez nos activités, découvrez nos événements et partagez notre passion pour la musique.
          </p>
        </div>
        <div className="flex flex-wrap justify-start lg:justify-end gap-2.5">
          <Button href="/events" variant="light">
            Découvrir nos événements <ArrowRight size={15} />
          </Button>
          <Button href="/contact" variant="outline">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
