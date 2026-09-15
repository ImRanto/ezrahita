import { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import FilterPills from "../components/FilterPills";
import NewsCard from "../components/NewsCard";
import NewsTeaserCard from "../components/NewsTeaserCard";
import { news } from "../data";

const categories = [
  "Toutes",
  "Activités",
  "Annonces",
  "Répertoire",
  "Coulisses",
  "Concerts",
  "Portraits",
  "Communauté",
];

export default function News() {
  const [filter, setFilter] = useState("Toutes");
  const filtered = filter === "Toutes" ? news : news.filter((article) => article.category === filter);

  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="Le journal du chœur"
          title={
            <>
              Les histoires
              <br />
              <span className="text-[#ffb5b1]">qui résonnent.</span>
            </>
          }
          text="Actualités, portraits et coulisses : entrez dans la vie de notre communauté."
        />
        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <FilterPills options={categories} active={filter} onChange={setFilter} />

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
              {filtered.slice(0, 1).map((article) => (
                <NewsCard article={article} key={article.id} />
              ))}
              <div className="grid gap-5">
                {filtered.slice(1, 3).map((article) => (
                  <NewsCard article={article} small key={article.id} />
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {filtered.slice(3).map((article) => (
                <NewsTeaserCard article={article} key={article.id} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
