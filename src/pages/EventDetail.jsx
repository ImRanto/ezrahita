import { useRoute } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import Layout from "../components/Layout.jsx";
import BackLink from "../components/BackLink.jsx";
import Button from "../components/Button.jsx";
import NotFound from "./NotFound.jsx";
import { getEvent } from "../data.js";

export default function EventDetail() {
  const [, params] = useRoute("/events/:id");
  const event = getEvent(params?.id || "");
  if (!event) return <NotFound />;

  return (
    <Layout>
      <main className="pt-[150px] pb-[90px] md:pt-[160px] md:pb-[110px]">
        <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
          <BackLink href="/events">Retour aux événements</BackLink>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[45vh] md:h-[min(62vh,650px)] object-cover rounded-[4px_40px_4px_40px]"
          />
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6 lg:gap-20 mt-10 md:mt-[52px]">
            <div>
              <div className="eyebrow">
                {event.type} · {event.date}
              </div>
              <h1 className="mt-3 font-serif text-[clamp(3.2rem,6vw,6.5rem)] leading-[0.83] tracking-[-0.05em] font-semibold">
                {event.title}
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-5 text-muted text-[11px]">
                <MapPin size={15} /> {event.location}
              </div>
              <p className="m-0 text-muted text-[15px] leading-[1.8]">{event.description}</p>
              <p className="mt-[18px] text-muted text-[15px] leading-[1.8]">
                Venez partager un moment de musique, de rencontres et d'émotions avec les voix
                d'Ezrahita. L'entrée est ouverte à toutes et tous.
              </p>
              <Button href="/contact" variant="primary" className="mt-[30px]">
                Nous écrire <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
