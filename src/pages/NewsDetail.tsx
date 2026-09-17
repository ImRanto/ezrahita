import { useRoute } from "wouter";
import { ArrowRight } from "lucide-react";
import Layout from "../components/Layout";
import BackLink from "../components/BackLink";
import Button from "../components/Button";
import NotFound from "./NotFound";
import { getNews } from "../data";
import { usePageMeta } from "../seo";

export default function NewsDetail() {
  const [, params] = useRoute<{ id: string }>("/news/:id");
  const article = getNews(params ? params.id : "");

  usePageMeta(
    article
      ? { title: article.title, description: article.excerpt }
      : { title: "Article introuvable" }
  );

  if (!article) return <NotFound />;

  return (
    <Layout>
      <main className="pt-[150px] pb-[90px] md:pt-[160px] md:pb-[110px]">
        <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
          <BackLink href="/news">Retour aux actualités</BackLink>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[45vh] md:h-[min(62vh,620px)] object-cover rounded-[4px_40px_4px_40px]"
          />
          <article className="max-w-[780px] mx-auto mt-[60px]">
            <div className="eyebrow">
              {article.category} · {article.date}
            </div>
            <h1 className="mt-3.5 mb-5 font-serif text-[clamp(3.3rem,6vw,6.5rem)] leading-[0.83] tracking-[-0.055em] font-semibold">
              {article.title}
            </h1>
            <p className="text-muted text-[17px] leading-[1.8]">{article.excerpt}</p>
            <p className="text-ink-soft text-[15px] leading-[1.9] mt-6">
              Il y a des moments où une saison prend une autre dimension. Une répétition, une
              rencontre, une partition qui s'ouvre au bon moment. Chez Ezrahita, nous aimons
              raconter ces instants qui ne se voient pas toujours depuis la salle, mais qui font
              toute la musique.
            </p>
            <p className="text-ink-soft text-[15px] leading-[1.9] mt-6">
              Retrouvez-nous lors de nos prochains rendez-vous pour partager la suite de cette
              histoire. La porte est toujours ouverte à celles et ceux qui aiment écouter, chanter
              et faire communauté.
            </p>
            <Button href="/events" variant="primary" className="mt-[30px]">
              Voir les prochains événements <ArrowRight size={15} />
            </Button>
          </article>
        </div>
      </main>
    </Layout>
  );
}
