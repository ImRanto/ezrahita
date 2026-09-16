import { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import FilterPills from "../components/FilterPills";
import Lightbox from "../components/Lightbox";
import Button from "../components/Button";
import { albums, gallery } from "../data";

const ALL_ALBUMS = "Tous les albums";
const PHOTOS_PER_PAGE = 18;

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [album, setAlbum] = useState(ALL_ALBUMS);
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);
  const filtered = album === ALL_ALBUMS ? gallery : gallery.filter((item) => item.album === album);
  const visibleItems = filtered.slice(0, visibleCount);
  const current = lightbox === null ? null : filtered[lightbox];

  const move = (direction) => {
    if (lightbox === null) return;
    setLightbox((lightbox + direction + filtered.length) % filtered.length);
  };

  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="En images"
          title={
            <>
              Les moments
              <br />
              <span className="text-[#ffb5b1]">entre les notes.</span>
            </>
          }
          text="Un aperçu des répétitions, des concerts et de la vie qui s'invente autour de la musique."
        />
        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <FilterPills
              options={[ALL_ALBUMS, ...albums.map((item) => item.title)]}
              active={album}
              onChange={(nextAlbum) => {
                setAlbum(nextAlbum);
                setVisibleCount(PHOTOS_PER_PAGE);
                setLightbox(null);
              }}
            />

            <div className="grid grid-cols-3 gap-3">
              {visibleItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setLightbox(index)}
                  aria-label={`Ouvrir ${item.caption}`}
                  className="group relative h-[170px] sm:h-[220px] overflow-hidden rounded-[3px_16px_3px_16px] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-300 ease-out-smooth group-hover:scale-[1.06] group-hover:brightness-[0.7]"
                  />
                </button>
              ))}
            </div>

            {visibleCount < filtered.length && (
              <div className="flex justify-center mt-10">
                <Button type="button" variant="ghost" onClick={() => setVisibleCount((count) => count + PHOTOS_PER_PAGE)}>
                  Afficher la suite des photos
                </Button>
              </div>
            )}
          </div>
        </section>

        {current && (
          <Lightbox
            item={current}
            index={lightbox}
            total={filtered.length}
            onClose={() => setLightbox(null)}
            onMove={move}
          />
        )}
      </main>
    </Layout>
  );
}
