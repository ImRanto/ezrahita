import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import StatStrip from "../components/StatStrip";
import SectionHeading from "../components/SectionHeading";
import MemberCard from "../components/MemberCard";
import EventCard from "../components/EventCard";
import NewsCard from "../components/NewsCard";
import Cta from "../components/Cta";
import Button from "../components/Button";
import VoiceIcon from "../components/VoiceIcon";
import { events, gallery, members, news, voices } from "../data";

const values = [
  ["♫", "Passion", "La musique nous rassemble et nous met en mouvement."],
  ["✦", "Fraternité", "Une communauté fondée sur le partage et l'écoute."],
  ["↗", "Engagement", "Grandir ensemble et contribuer à notre quartier."],
  ["◎", "Excellence", "Chercher à progresser, sans jamais perdre la joie."],
];

function Hero() {
  return (
    <section
      className="relative isolate flex items-center min-h-[700px] md:min-h-[760px] pt-[135px] md:pt-[150px] pb-24 text-white bg-ink
        before:content-[''] before:absolute before:-z-20 before:inset-0 before:bg-[linear-gradient(90deg,rgba(8,25,48,0.92)_0%,rgba(8,25,48,0.68)_44%,rgba(8,25,48,0.28)_100%),url('/images/hero.jpg')] before:bg-cover before:bg-center
        after:content-[''] after:absolute after:-z-10 after:inset-0 after:pointer-events-none after:bg-[radial-gradient(circle_at_80%_30%,rgba(232,75,75,0.22),transparent_31%),linear-gradient(0deg,rgba(8,25,48,0.42),transparent_30%)]"
    >
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid md:grid-cols-[minmax(0,1fr)_290px] md:items-end gap-10 md:gap-20">
        <Reveal className="max-w-[720px]">
          <div className="inline-flex gap-2.5 items-center mb-[26px] text-[#ffd8d6] text-[11px] font-bold tracking-[0.18em] before:content-[''] before:w-[30px] before:h-px before:bg-coral">
            UNE VOIX · UNE COMMUNAUTÉ · UNE PASSION
          </div>
          <h1 className="font-serif text-[clamp(3.6rem,14vw,9.4rem)] font-semibold tracking-[-0.065em] leading-[0.82] md:leading-[0.79] m-0">
            Chanter
            <br />
            <em className="not-italic text-[#ffb5b1]">ensemble,</em>
            <br />
            aller plus loin.
          </h1>
          <p className="max-w-[480px] my-[30px] md:my-[34px] text-white/72 text-sm md:text-base leading-[1.7]">
            Découvrez la chorale Ezrahita, ses membres, ses activités et les moments qui font vivre
            notre communauté.
          </p>
          <div className="flex flex-wrap gap-3 sm:flex-row sm:gap-3 grid-cols-1 sm:grid-cols-none">
            <Button href="/about" variant="primary" className="w-full sm:w-auto">
              Découvrir la chorale <ArrowRight size={16} />
            </Button>
            <Button href="/events" variant="light" className="w-full sm:w-auto">
              Voir nos événements
            </Button>
          </div>
        </Reveal>

        <div className="hidden md:block self-end p-5 border border-white/[0.22] rounded-[18px] bg-white/10 backdrop-blur-md animate-float">
          <p className="m-0 mb-[14px] text-white/68 text-xs leading-[1.6]">
            Depuis Antananarivo, nous faisons de chaque répétition un espace de rencontre.
          </p>
          <strong className="block text-white font-serif text-[30px] font-semibold leading-none">
            48 voix
          </strong>
          <small className="block mt-2 text-[#ffb5b1] text-[10px] tracking-[0.12em] uppercase">
            et une même direction
          </small>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2.5 text-white/55 text-[10px] tracking-[0.16em] uppercase after:content-[''] after:w-[50px] after:h-px after:bg-white/35">
        Défiler pour découvrir
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <StatStrip />

        <section className="section py-[78px] md:py-[116px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid lg:grid-cols-[0.92fr_1.08fr] items-center gap-[50px] lg:gap-[90px]">
            <Reveal className="relative min-h-[410px] lg:min-h-[520px] after:content-[''] after:absolute after:-right-[18px] after:-bottom-[18px] after:w-[55%] after:h-[55%] after:border after:border-coral after:rounded-[0_0_30px_0] after:-z-10">
              <img
                src="/images/hero1.jpg"
                alt="Chorale en concert"
                loading="lazy"
                className="w-[86%] h-[410px] lg:h-[520px] object-cover rounded-[3px_42px_3px_42px] saturate-[0.86]"
              />
              <div className="absolute right-0 bottom-12 grid place-items-center w-[130px] h-[130px] rounded-full text-white bg-coral text-center shadow-[0_15px_30px_rgba(232,75,75,0.23)]">
                <div>
                  <Sparkles size={20} className="mx-auto mb-1" />
                  <span className="font-serif text-[22px] leading-[0.9] block">
                    65 ans
                    <br />
                    de voix
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="eyebrow">Notre chorale</div>
              <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.9] tracking-[-0.035em] font-semibold mt-4">
                Une communauté <em className="not-italic text-coral">réunie</em> par la musique.
              </h2>
              <div className="w-[68px] h-1 my-[30px] bg-gradient-to-r from-cobalt to-coral" />
              <p className="max-w-[500px] text-muted text-[15px] leading-[1.8]">
                Ezrahita est une aventure humaine avant d'être un ensemble musical. Nous nous
                retrouvons pour apprendre, écouter et construire quelque chose qui nous dépasse :
                un son commun, vivant et généreux.
              </p>
              <p className="max-w-[500px] text-muted text-[15px] leading-[1.8] mt-4">
                À Antananarivo, chaque voix compte. La nôtre s'écrit à plusieurs.
              </p>
              <Link href="/about" className="text-link mt-6 inline-flex">
                Notre histoire <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="py-[78px] md:py-[116px] bg-mist">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <SectionHeading
              eyebrow="Nos voix"
              title={
                <>
                  Chaque timbre a
                  <br />
                  <span className="text-cobalt">sa place.</span>
                </>
              }
              text="Quatre pupitres, une seule respiration. Découvrez les voix qui composent notre chœur."
              action={
                <Link href="/voices" className="text-link">
                  Découvrir nos voix <ArrowRight size={15} />
                </Link>
              }
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {voices.map((voice) => (
                <Link
                  href={`/members?voice=${voice.id}`}
                  key={voice.id}
                  className="group min-h-[270px] p-[25px] border border-line rounded-2xl bg-white transition-all duration-300 ease-out-smooth hover:-translate-y-1.5 hover:border-[#b8c8ef] hover:shadow-[0_16px_35px_rgba(11,31,58,0.08)] block"
                >
                  <VoiceIcon voice={voice} />
                  <h3 className="m-0 font-serif text-[29px] leading-none font-semibold">{voice.title}</h3>
                  <p className="min-h-[48px] my-[11px] text-muted text-xs leading-[1.55]">
                    {voice.description}
                  </p>
                  <span className="text-cobalt text-[11px] font-bold tracking-[0.1em] uppercase inline-flex items-center gap-1.5">
                    {voice.count} membres <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section py-[78px] md:py-[116px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <SectionHeading
              eyebrow="La communauté"
              title={
                <>
                  Des visages,
                  <br />
                  <span className="text-coral">des histoires.</span>
                </>
              }
              text="Chaque membre du groupe donnent leur souffle, leur écoute et leur énergie à notre aventure."
              action={
                <Link href="/members" className="text-link">
                  Voir tous les membres <ArrowRight size={15} />
                </Link>
              }
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {members.slice(0, 6).map((member) => (
                <MemberCard member={member} key={member.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-[78px] md:py-[116px] bg-mist">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <SectionHeading
              eyebrow="À l'agenda"
              title={
                <>
                  Les prochains
                  <br />
                  <span className="text-cobalt">rendez-vous.</span>
                </>
              }
              text="Concerts, ateliers et rencontres : la musique se vit aussi en dehors des répétitions."
              action={
                <Link href="/events" className="text-link">
                  Tout l'agenda <ArrowRight size={15} />
                </Link>
              }
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.slice(0, 3).map((event) => (
                <EventCard event={event} key={event.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="section py-[78px] md:py-[116px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <SectionHeading
              eyebrow="Le journal du chœur"
              title={
                <>
                  Ce qui fait
                  <br />
                  <span className="text-coral">vibrer</span> la chorale.
                </>
              }
              text="Les nouvelles de notre communauté, les coulisses de nos projets et les portraits de celles et ceux qui chantent."
              action={
                <Link href="/news" className="text-link">
                  Toutes les actualités <ArrowRight size={15} />
                </Link>
              }
            />
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
              <NewsCard article={news[0]} />
              <div className="grid gap-5">
                <NewsCard article={news[1]} small />
                <NewsCard article={news[2]} small />
              </div>
            </div>
          </div>
        </section>

        <section className="py-[78px] md:py-[116px] bg-mist">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <SectionHeading
              eyebrow="En images"
              title={
                <>
                  Un chœur,
                  <br />
                  <span className="text-cobalt">des instants.</span>
                </>
              }
              action={
                <Link href="/gallery" className="text-link">
                  Ouvrir la galerie <ArrowRight size={15} />
                </Link>
              }
            />
            <div className="grid grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr] grid-rows-3 lg:grid-rows-2 gap-3 h-[520px] lg:h-[432px]">
              {gallery.slice(0, 5).map((item, index) => (
                <Link
                  href="/gallery"
                  key={item.id}
                  className={`group relative overflow-hidden rounded-[3px_18px_3px_18px] bg-ink block after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(0deg,rgba(11,31,58,0.45),transparent_60%)] after:pointer-events-none ${
                    index === 0 ? "row-span-2 col-span-2 lg:col-span-1" : ""
                  } ${index === 3 ? "col-span-2 lg:col-span-1" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-[550ms] ease-out-smooth group-hover:scale-[1.07] group-hover:brightness-[0.78]"
                  />
                  <figcaption className="absolute z-[1] bottom-3.5 left-4 text-white font-serif text-[19px]">
                    {item.caption}
                  </figcaption>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-[78px] md:py-[116px] text-white bg-ink before:content-[''] before:absolute before:right-[-10%] before:top-[-35%] before:w-[55%] before:h-[120%] before:border before:border-white/10 before:rounded-full before:-rotate-[20deg]">
          <div className="relative w-[min(1180px,calc(100%-48px))] mx-auto grid lg:grid-cols-[1.1fr_repeat(4,1fr)] gap-4">
            <div className="col-span-2 lg:col-span-1 mb-2">
              <div className="eyebrow">Ce qui nous rassemble</div>
              <h2 className="max-w-[300px] mt-[18px] font-serif text-[clamp(2.6rem,5vw,5rem)] leading-[0.85] tracking-[-0.04em] font-semibold">
                Plus qu'une chorale.
                <br />
                <span className="text-[#ffb5b1]">Une communauté.</span>
              </h2>
            </div>
            {values.map(([icon, title, text]) => (
              <div key={title} className="py-5 px-[18px] border-l border-white/[0.18]">
                <div className="grid place-items-center w-[37px] h-[37px] mb-14 rounded-full text-white bg-coral text-base">
                  {icon}
                </div>
                <h3 className="m-0 mb-2.5 font-serif text-2xl font-semibold">{title}</h3>
                <p className="m-0 text-white/57 text-[11px] leading-[1.6]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Cta />
      </main>
    </Layout>
  );
}
