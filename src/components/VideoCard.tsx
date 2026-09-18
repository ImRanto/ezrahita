import { Link } from "wouter";
import { Play } from "lucide-react";

export default function VideoCard({ video, small = false }) {
  return (
    <Link
      href={`/videos/${video.id}`}
      className={`group relative block overflow-hidden rounded-[20px] bg-ink text-white ${
        small ? "min-h-[230px]" : "min-h-[420px] md:min-h-[480px]"
      }`}
    >
      <img
        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
        alt={video.title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[550ms] ease-out-smooth group-hover:scale-[1.06] ${
          small ? "opacity-55" : "opacity-[0.62]"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          small
            ? "bg-[linear-gradient(0deg,rgba(11,31,58,0.94),rgba(11,31,58,0.04))]"
            : "bg-[linear-gradient(0deg,rgba(11,31,58,0.96),rgba(11,31,58,0.05)_70%)]"
        }`}
      />
      <span className="absolute z-[1] top-5 left-5 grid place-items-center w-11 h-11 rounded-full text-white bg-coral shadow-[0_8px_20px_rgba(232,75,75,0.3)]">
        <Play size={17} fill="currentColor" />
      </span>
      <div
        className={`absolute z-[1] ${
          small ? "right-5 bottom-[18px] left-5" : "right-5 bottom-6 left-5 md:right-8 md:bottom-7 md:left-8"
        }`}
      >
        <div className="flex items-center gap-2.5 text-coral text-[10px] font-extrabold uppercase tracking-[0.13em] before:content-[''] before:w-5 before:h-px before:bg-current">
          {video.category} · {video.date}
        </div>
        <h3
          className={`font-semibold leading-[0.9] ${
            small
              ? "mt-2.5 font-serif text-[29px]"
              : "max-w-[650px] mt-[14px] mb-2.5 font-serif text-[clamp(2.5rem,5vw,4.7rem)] leading-[0.86] tracking-[-0.035em]"
          }`}
        >
          {video.title}
        </h3>
        {!small && <p className="max-w-[580px] m-0 text-white/72 text-[13px] leading-[1.6]">{video.description}</p>}
      </div>
    </Link>
  );
}
