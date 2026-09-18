import { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import FilterPills from "../components/FilterPills";
import VideoCard from "../components/VideoCard";
import { videos } from "../data";

const periodOptions = ["Toutes", "Anciens", "Récents"];
const groupOptions = ["Tous", "Ezrahita", "TAME"];

export default function Videos() {
  const [periodFilter, setPeriodFilter] = useState("Toutes");
  const [groupFilter, setGroupFilter] = useState("Tous");
  const filtered = videos.filter(
    (video) =>
      (periodFilter === "Toutes" ||
        (periodFilter === "Anciens" && video.period === "Ancien") ||
        (periodFilter === "Récents" && video.period === "Récent")) &&
      (groupFilter === "Tous" || video.group === groupFilter)
  );

  const selectGroup = (nextGroup) => {
    setGroupFilter(nextGroup);
    if (nextGroup === "Tous") setPeriodFilter("Toutes");
  };

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
                <div className="mb-[35px] p-1.5 md:p-2 border border-cobalt/35 rounded-[50px] bg-mist">
                  <div>
                    <span className="block mb-1 text-center text-muted text-[10px] font-bold uppercase tracking-[0.14em]">
                      Groupe
                    </span>
                    <FilterPills
                      options={groupOptions}
                      active={groupFilter}
                      onChange={selectGroup}
                      className="mb-0 justify-center"
                      compact
                    />
                  </div>
                  {groupFilter !== "Tous" && (
                    <div className="w-full max-w-[560px] mx-auto mt-1.5 pt-1 border-t border-cobalt/20">
                      <span className="block mb-1 text-center text-muted text-[10px] font-bold uppercase tracking-[0.14em]">
                        Époque
                      </span>
                      <FilterPills
                        options={periodOptions}
                        active={periodFilter}
                        onChange={setPeriodFilter}
                        className="mb-0 justify-center"
                        compact
                      />
                    </div>
                  )}
                </div>
                {filtered.length > 0 ? (
                  <>
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
                  <div className="grid place-items-center min-h-[260px] text-center">
                    <div>
                      <p className="eyebrow">Bientôt disponible</p>
                      <h2 className="mt-3 font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[0.9] font-semibold">
                        Les clips arrivent bientôt.
                      </h2>
                      <p className="max-w-[430px] mt-4 text-muted text-sm leading-[1.7]">
                        De nouveau clips seront disponibles bientôt, rester avec nous.
                      </p>
                    </div>
                  </div>
                )}
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
