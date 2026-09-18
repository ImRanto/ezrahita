import { useRoute } from "wouter";
import Layout from "../components/Layout";
import BackLink from "../components/BackLink";
import NotFound from "./NotFound";
import { getVideo } from "../data";

export default function VideoDetail() {
  const [, params] = useRoute<{ id: string }>("/videos/:id");
  const video = getVideo(params ? params.id : "");
  if (!video) return <NotFound />;

  return (
    <Layout>
      <main className="pt-[150px] pb-[90px] md:pt-[160px] md:pb-[110px]">
        <div className="w-[min(1000px,calc(100%-48px))] mx-auto">
          <BackLink href="/videos">Retour aux vidéos</BackLink>
          <div className="overflow-hidden rounded-[4px_40px_4px_40px] bg-ink">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <article className="max-w-[780px] mx-auto mt-[50px]">
            <div className="eyebrow">
              {video.category} · {video.date}
            </div>
            <h1 className="mt-3.5 mb-5 font-serif text-[clamp(3.3rem,6vw,6.5rem)] leading-[0.83] tracking-[-0.055em] font-semibold">
              {video.title}
            </h1>
            <p className="text-muted text-[17px] leading-[1.8]">{video.description}</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
