import { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import FilterPills from "../components/FilterPills";
import VideoCard from "../components/VideoCard";
import { videos } from "../data";

const categories = ["Toutes", ...new Set(videos.map((video) => video.category))];

export default function Videos() {
  const [filter, setFilter] = useState("Toutes");
  const filtered = filter === "Toutes" ? videos : videos.filter((video) => video.category === filter);

  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="Les vidéos du chœur"
          title={
            <>
              Nos voix
              <br />
              <span className="text-[#ffb5b1]">en mouvement.</span>
            </>
          }
          text="Clips, concerts et souvenirs en vidéo : retrouvez les moments qui font vivre Ezrahita."
        />
        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            {videos.length > 0 ? (
              <>
                <FilterPills options={categories} active={filter} onChange={setFilter} />
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
                  {filtered.slice(0, 1).map((video) => (
                    <VideoCard video={video} key={video.id} />
                  ))}
                  <div className="grid gap-5">
                    {filtered.slice(1, 3).map((video) => (
                      <VideoCard video={video} small key={video.id} />
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                  {filtered.slice(3).map((video) => (
                    <VideoCard video={video} small key={video.id} />
                  ))}
                </div>
              </>
            ) : (
              <div className="grid place-items-center min-h-[300px] text-center">
                <div>
                  <p className="eyebrow">Bientôt disponible</p>
                  <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.9] font-semibold">
                    Les vidéos arrivent.
                  </h2>
                  <p className="max-w-[430px] mt-4 text-muted text-sm leading-[1.7]">
                    Les clips et concerts d'Ezrahita seront bientôt disponibles ici.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
