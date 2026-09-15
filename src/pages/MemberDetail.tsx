import { useRoute } from "wouter";
import Layout from "../components/Layout";
import BackLink from "../components/BackLink";
import NotFound from "./NotFound";
import { getMember } from "../data";

export default function MemberDetail() {
  const [, params] = useRoute<{ id: string }>("/members/:id");
  const member = getMember(params ? params.id : "");
  if (!member) return <NotFound />;

  const restOfName = member.name.split(" ").slice(1).join(" ");

  return (
    <Layout>
      <main className="pt-[150px] pb-[90px] md:pt-[160px] md:pb-[110px]">
        <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
          <BackLink href="/members">Retour aux membres</BackLink>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] items-center gap-[45px] lg:gap-[90px]">
            <div className="h-[430px] lg:h-[600px] overflow-hidden rounded-[4px_50px_4px_50px]">
              <img
                src={member.image}
                alt={`Portrait de ${member.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="eyebrow">Membre de la chorale</div>
              <h1 className="mt-[14px] mb-2 font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.78] tracking-[-0.06em] font-semibold">
                {member.firstName}
                <br />
                <span className="text-coral">{restOfName}</span>
              </h1>
              <div className="text-coral text-sm font-bold">{member.role}</div>
              <p className="max-w-[440px] my-7 text-muted leading-[1.8]">{member.bio}</p>
              <div className="flex gap-7 pt-[22px] border-t border-line">
                <div>
                  <strong className="block text-ink font-serif text-[28px]">{member.joined}</strong>
                  <span className="text-muted text-[10px] uppercase tracking-[0.1em]">Année d'entrée</span>
                </div>
                <div>
                  <strong className="block text-ink font-serif text-[28px]">{member.voice}</strong>
                  <span className="text-muted text-[10px] uppercase tracking-[0.1em]">Voix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
