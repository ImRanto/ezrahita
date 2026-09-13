import { ArrowRight, Music2 } from "lucide-react";
import Layout from "../components/Layout.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Cta from "../components/Cta.jsx";
import Button from "../components/Button.jsx";

const method = [
  ["01", "Écouter", "Avant de chercher sa note, apprendre à entendre celle de l'autre."],
  ["02", "Respirer", "Trouver le souffle commun qui donne à chaque phrase sa direction."],
  ["03", "Partager", "Faire circuler l'énergie, les connaissances et la joie de chanter."],
  ["04", "Rayonner", "Porter une musique généreuse au-delà des murs de la répétition."],
];

export default function About() {
  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="Notre chorale"
          title={
            <>
              Une histoire de
              <br />
              <span className="text-[#ffb5b1]">voix liées.</span>
            </>
          }
          text="Depuis 2014, nous faisons de la musique un espace de rencontre, d'exigence et de joie."
        />

        <section className="py-[78px] md:py-[116px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid lg:grid-cols-[0.92fr_1.08fr] items-center gap-[50px] lg:gap-[90px]">
            <div className="relative min-h-[410px] lg:min-h-[520px]">
              <img
                src="https://picsum.photos/seed/ezrahita-about-1/1200/1200"
                alt="Chorale sur scène"
                className="w-[86%] h-[410px] lg:h-[520px] object-cover rounded-[3px_42px_3px_42px] saturate-[0.86]"
              />
              <div className="absolute right-0 bottom-12 grid place-items-center w-[130px] h-[130px] rounded-full text-white bg-coral text-center shadow-[0_15px_30px_rgba(232,75,75,0.23)]">
                <div>
                  <Music2 size={20} className="mx-auto mb-1" />
                  <span className="font-serif text-[22px] leading-[0.9] block">
                    2014
                    <br />
                    la première note
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="eyebrow">Notre histoire</div>
              <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.9] tracking-[-0.035em] font-semibold mt-4">
                Une voix devient plus forte quand elle est <em className="not-italic text-coral">partagée.</em>
              </h2>
              <div className="w-[68px] h-1 my-[30px] bg-gradient-to-r from-cobalt to-coral" />
              <p className="max-w-[500px] text-muted text-[15px] leading-[1.8]">
                Ezrahita est née d'une envie simple : réunir des chanteurs d'Antananarivo autour
                d'un répertoire ouvert, exigeant et profondément humain.
              </p>
              <p className="max-w-[500px] text-muted text-[15px] leading-[1.8] mt-4">
                Au fil des années, notre groupe s'est agrandi sans perdre son intimité. Nous
                chantons dans des salles de concert, des lieux de quartier, des écoles et des
                cérémonies — partout où une voix peut créer un lien.
              </p>
              <Button href="/contact" variant="primary" className="mt-[30px]">
                Chanter avec nous <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-[78px] md:py-[116px] bg-mist">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <SectionHeading
              eyebrow="Notre manière de faire"
              title={
                <>
                  Apprendre,
                  <br />
                  <span className="text-coral">écouter, transmettre.</span>
                </>
              }
              text="La qualité musicale est notre exigence. La bienveillance est notre méthode."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-ink">
              {method.map(([num, title, text]) => (
                <div key={num} className="p-5 border border-line rounded-2xl bg-white">
                  <div className="grid place-items-center w-11 h-11 mb-14 rounded-[13px] text-cobalt bg-[#eef3ff] font-serif text-xl">
                    {num}
                  </div>
                  <h3 className="m-0 mb-2.5 font-serif text-2xl font-semibold">{title}</h3>
                  <p className="m-0 text-muted text-[11px] leading-[1.6]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </main>
    </Layout>
  );
}
