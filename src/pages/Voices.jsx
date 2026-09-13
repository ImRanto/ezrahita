import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Layout from "../components/Layout.jsx";
import PageHero from "../components/PageHero.jsx";
import VoiceIcon from "../components/VoiceIcon.jsx";
import { voices } from "../data.js";

export default function Voices() {
  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="Les pupitres"
          title={
            <>
              La musique
              <br />
              <span className="text-[#ffb5b1]">en quatre voix.</span>
            </>
          }
          text="Chaque pupitre porte une couleur. Ensemble, ils donnent à la chorale son relief, sa chaleur et son mouvement."
        />

        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {voices.map((voice) => (
                <div key={voice.id} className="min-h-[270px] p-[25px] border border-line rounded-2xl bg-white transition-all duration-300 ease-out-smooth hover:-translate-y-1.5 hover:border-[#b8c8ef] hover:shadow-[0_16px_35px_rgba(11,31,58,0.08)]">
                  <VoiceIcon voice={voice} />
                  <h3 className="m-0 font-serif text-[29px] leading-none font-semibold">{voice.title}</h3>
                  <p className="min-h-[48px] my-[11px] text-muted text-xs leading-[1.55]">{voice.description}</p>
                  <span className="text-cobalt text-[11px] font-bold tracking-[0.1em] uppercase">
                    {voice.count} membres
                  </span>
                  <div className="h-[5px] mt-[22px] rounded-full bg-[#edf0f5]">
                    <div
                      className={`h-full rounded-full ${voice.id === "2e" ? "bg-coral" : "bg-cobalt"}`}
                      style={{ width: `${(voice.count / 15) * 100}%` }}
                    />
                  </div>
                  <Link href={`/members?voice=${voice.id}`} className="text-link mt-[22px]">
                    Voir les membres <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[78px] md:py-[116px] bg-mist">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid lg:grid-cols-[0.92fr_1.08fr] items-center gap-[50px] lg:gap-[90px]">
            <div>
              <div className="eyebrow">Une même respiration</div>
              <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.9] tracking-[-0.035em] font-semibold mt-4">
                Le chœur commence là où les voix <em className="not-italic text-coral">s'écoutent.</em>
              </h2>
              <p className="max-w-[500px] text-muted text-[15px] leading-[1.8] mt-6">
                Nos répétitions sont un temps de travail, mais aussi un espace où l'on apprend à
                faire confiance. Le résultat n'est pas la somme des voix : c'est ce qui naît entre
                elles.
              </p>
            </div>
            <div className="relative min-h-[410px] lg:min-h-[520px]">
              <img
                src="https://picsum.photos/seed/ezrahita-voices/1200/1200"
                alt="Répétition de chorale"
                className="w-[86%] h-[410px] lg:h-[520px] object-cover rounded-[3px_42px_3px_42px] saturate-[0.86]"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
