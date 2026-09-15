import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import MemberCard from "../components/MemberCard";
import { members } from "../data";

const voiceOptions = ["Toutes", "1er", "2e", "3e", "Basse"];

export default function Members() {
  const params = new URLSearchParams(window.location.search);
  const initialVoice = params.get("voice") || "Toutes";
  const [query, setQuery] = useState("");
  const [voice, setVoice] = useState(initialVoice);

  const filtered = useMemo(
    () =>
      members.filter(
        (member) =>
          `${member.name} ${member.role}`.toLowerCase().includes(query.toLowerCase()) &&
          (voice === "Toutes" || member.voice === voice)
      ),
    [query, voice]
  );

  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="La communauté"
          title={
            <>
              Les visages
              <br />
              <span className="text-[#ffb5b1]">du chœur.</span>
            </>
          }
          text="48 personnalités, 48 manières d'écouter, d'apprendre et de faire résonner la même histoire."
        />
        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <div className="flex flex-wrap items-center gap-2.5 mb-[35px]">
              <div className="relative flex-1 min-w-[260px] max-w-[360px]">
                <Search size={16} className="absolute top-1/2 left-[15px] -translate-y-1/2 text-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher un membre..."
                  aria-label="Rechercher un membre"
                  className="w-full h-[45px] pl-[43px] pr-4 border border-line rounded-full outline-none text-ink bg-white text-xs focus:border-cobalt focus:shadow-[0_0_0_3px_rgba(29,78,216,0.1)]"
                />
              </div>
              {voiceOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setVoice(item)}
                  className={`py-[11px] px-[15px] border rounded-full text-[11px] font-bold transition-colors duration-150 ${
                    voice === item
                      ? "border-cobalt text-cobalt bg-[#eef3ff]"
                      : "border-line text-muted bg-white hover:border-cobalt hover:text-cobalt hover:bg-[#eef3ff]"
                  }`}
                >
                  {item === "Toutes" ? item : `${item} voix`}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((member) => (
                <MemberCard member={member} key={member.id} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="grid place-items-center text-center min-h-[300px]">
                <div>
                  <Search size={28} className="mx-auto text-muted" />
                  <p className="mt-3 text-muted">Aucun membre ne correspond à votre recherche.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
