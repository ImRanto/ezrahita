import { useState } from "react";
import { Heart } from "lucide-react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import FilterPills from "../components/FilterPills";
import Lightbox from "../components/Lightbox";
import Button from "../components/Button";
import { albums, gallery } from "../data";

const ALL_ALBUMS = "Tous les albums";
const PHOTOS_PER_PAGE = 18;
const LIKED_PHOTOS_KEY = "ezrahita-liked-photos";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [album, setAlbum] = useState(ALL_ALBUMS);
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);
  const [likedPhotos, setLikedPhotos] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(LIKED_PHOTOS_KEY) || "[]"));
    } catch {
      return new Set();
    }
  });
  const filtered = album === ALL_ALBUMS ? gallery : gallery.filter((item) => item.album === album);
  const visibleItems = filtered.slice(0, visibleCount);
  const totalLikes = gallery.filter((item) => likedPhotos.has(item.id)).length;
  const current = lightbox === null ? null : filtered[lightbox];

  const move = (direction) => {
    if (lightbox === null) return;
    setLightbox((lightbox + direction + filtered.length) % filtered.length);
  };

  const toggleLike = (photoId) => {
    const nextLikedPhotos = new Set(likedPhotos);
    if (nextLikedPhotos.has(photoId)) {
      nextLikedPhotos.delete(photoId);
    } else {
      nextLikedPhotos.add(photoId);
    }
    setLikedPhotos(nextLikedPhotos);
    try {
      localStorage.setItem(LIKED_PHOTOS_KEY, JSON.stringify([...nextLikedPhotos]));
    } catch {
      // The like still works for this visit when storage is unavailable.
    }
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

            <div className="flex justify-end mb-4 text-xs font-semibold text-ink/60" aria-live="polite">
              {totalLikes} {totalLikes === 1 ? "like" : "likes"} sur cet appareil
            </div>

            <div className="grid grid-cols-3 gap-3">
              {visibleItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative h-[210px] sm:h-[280px] overflow-hidden rounded-[3px_16px_3px_16px]"
                >
                  <button
                    type="button"
                    onClick={() => setLightbox(index)}
                    aria-label={`Ouvrir ${item.caption}`}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-300 ease-out-smooth group-hover:scale-[1.06] group-hover:brightness-[0.7]"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleLike(item.id)}
                    aria-label={likedPhotos.has(item.id) ? "Retirer le j'aime" : "Aimer cette photo"}
                    aria-pressed={likedPhotos.has(item.id)}
                    className="absolute z-10 right-3 bottom-3 inline-flex items-center gap-1.5 min-w-12 h-9 px-2.5 rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                  >
                    <Heart size={16} className={likedPhotos.has(item.id) ? "fill-[#ff8b88] text-[#ff8b88]" : ""} />
                    <span className="text-xs font-semibold">{likedPhotos.has(item.id) ? 1 : 0}</span>
                  </button>
                </div>
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
            liked={likedPhotos.has(current.id)}
            onToggleLike={() => toggleLike(current.id)}
          />
        )}
      </main>
    </Layout>
  );
}
