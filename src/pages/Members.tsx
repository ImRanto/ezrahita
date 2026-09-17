import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import MemberCard from "../components/MemberCard";
import { members } from "../data";

const voiceOptions = ["Toutes", "1er", "2e", "3e", "Basse"];

// `value` doit correspondre exactement au champ `category` défini dans src/data.ts,
// `label` est ce que l'on affiche (pluriel).
const categoryOptions = [
  { value: "Tous", label: "Tous" },
  { value: "Choriste", label: "Choristes" },
  { value: "Musicien", label: "Musiciens" },
];

const normalizeCategory = (value) =>
  categoryOptions.find(
    (option) =>
      option.value.toLowerCase() === String(value).toLowerCase() ||
      option.label.toLowerCase() === String(value).toLowerCase()
  )?.value || "Tous";

export default function Members() {
  const params = new URLSearchParams(window.location.search);
  const initialVoice = params.get("voice") || "Toutes";
  const [query, setQuery] = useState("");
  const [voice, setVoice] = useState(initialVoice);
  const [category, setCategory] = useState(() => normalizeCategory(params.get("category") || "Tous"));

  const isMusicians = category === "Musicien";

  const counts = useMemo(
    () =>
      members.reduce(
        (acc, member) => {
          acc[member.category] = (acc[member.category] || 0) + 1;
          return acc;
        },
        { Tous: members.length }
      ),
    []
  );

  const filtered = useMemo(
    () =>
      members.filter(
        (member) =>
          `${member.name} ${member.role} ${member.instrument || ""}`
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          (category === "Tous" || member.category === category) &&
          // Les musiciens ne sont rattachés à aucun pupitre.
          (isMusicians || voice === "Toutes" || member.voice === voice)
      ),
    [query, voice, category]
  );

  const selectCategory = (next) => {
    setCategory(next);
    if (next === "Musicien") setVoice("Toutes");
  };

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
            <div className="mb-[35px] space-y-3.5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-muted text-[10px] font-bold uppercase tracking-[0.14em]">
                  Catégorie
                </span>
                <div
                  role="group"
                  aria-label="Filtrer par catégorie"
                  className="inline-flex flex-wrap items-center gap-1 p-1 border border-line rounded-full bg-mist"
                >
                  {categoryOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => selectCategory(option.value)}
                      aria-pressed={category === option.value}
                      className={`inline-flex items-center gap-1.5 py-[9px] px-[15px] rounded-full text-[11px] font-bold transition-all duration-200 ease-out-smooth ${
                        category === option.value
                          ? "bg-white text-cobalt shadow-[0_1px_3px_rgba(11,31,58,0.12)]"
                          : "text-muted hover:text-cobalt"
                      }`}
                    >
                      {option.label}
                      <span
                        className={`text-[10px] ${
                          category === option.value ? "text-cobalt/60" : "text-muted/70"
                        }`}
                      >
                        {counts[option.value] ?? 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
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
                    disabled={isMusicians}
                    className={`py-[11px] px-[15px] border rounded-full text-[11px] font-bold transition-colors duration-150 ${
                      isMusicians
                        ? "border-line text-muted/50 bg-white cursor-not-allowed opacity-50"
                        : voice === item
                          ? "border-cobalt text-cobalt bg-[#eef3ff]"
                          : "border-line text-muted bg-white hover:border-cobalt hover:text-cobalt hover:bg-[#eef3ff]"
                    }`}
                  >
                    {item === "Toutes" ? item : `${item} voix`}
                  </button>
                ))}
              </div>

              {isMusicians && (
                <p className="text-muted text-[11px] italic">
                  Les musiciens accompagnent le chœur : ils ne sont pas rattachés à un pupitre.
                </p>
              )}
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
