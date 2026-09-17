import { useState } from "react";
import { Clock3, MapPin, MessageCircle, Send } from "lucide-react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import FormField from "../components/FormField";
import Toast from "../components/Toast";
import { contactEmail, venue } from "../data";

const contactItems = [
  {
    icon: MapPin,
    title: "Nous trouver",
    detail: `${venue.name}, ${venue.city}`,
    href: venue.mapUrl,
  },
  { icon: MessageCircle, title: "Nous écrire", detail: contactEmail },
  { icon: Clock3, title: "Répétitions", detail: "Chaque samedi, 18h30" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4500);
  };

  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="Parlons-nous"
          title={
            <>
              Une question,
              <br />
              <span className="text-[#ffb5b1]">une envie, un mot.</span>
            </>
          }
          text="Vous souhaitez nous rejoindre, proposer un projet ou simplement nous écrire ? Nous serons heureux de vous lire."
        />
        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid lg:grid-cols-[0.78fr_1.22fr] items-start gap-10 lg:gap-20">
            <div>
              <div className="eyebrow">Nous contacter</div>
              <h2 className="mt-[18px] mb-[25px] font-serif text-[clamp(2.6rem,5vw,5.3rem)] leading-[0.86] tracking-[-0.05em] font-semibold">
                La porte est <span className="text-coral">ouverte.</span>
              </h2>
              <p className="max-w-[370px] text-muted leading-[1.7]">
                La musique commence souvent par une conversation. Écrivez-nous, nous vous
                répondrons avec plaisir.
              </p>
              <div className="grid gap-[19px] mt-[35px]">
                {contactItems.map(({ icon: Icon, title, detail, href }) => (
                  <div key={title} className="flex gap-[13px] items-start">
                    <div className="grid place-items-center w-[35px] h-[35px] rounded-[10px] text-cobalt bg-[#eef3ff] shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <strong className="block mb-1 text-xs">{title}</strong>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          title="Voir sur Google Maps"
                          className="text-muted text-xs underline decoration-line underline-offset-[3px] transition-colors hover:text-cobalt hover:decoration-cobalt"
                        >
                          {detail}
                        </a>
                      ) : (
                        <span className="text-muted text-xs">{detail}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={submit}
              className="p-[22px] sm:p-[33px] border border-line rounded-[22px] bg-white shadow-[0_17px_50px_rgba(11,31,58,0.07)]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Nom" id="name" required placeholder="Votre nom" />
                <FormField label="Email" id="email" type="email" required placeholder="vous@exemple.com" />
              </div>
              <FormField label="Sujet" id="subject" as="select" defaultValue="rejoindre">
                <option value="rejoindre">Rejoindre la chorale</option>
                <option value="evenement">À propos d'un événement</option>
                <option value="projet">Proposer un projet</option>
                <option value="autre">Autre message</option>
              </FormField>
              <FormField
                label="Message"
                id="message"
                as="textarea"
                required
                placeholder="Écrivez votre message ici..."
              />
              <Button type="submit" variant="primary">
                Envoyer le message <Send size={15} />
              </Button>
            </form>
          </div>
        </section>
      </main>

      {sent && <Toast>Votre message a bien été préparé.</Toast>}
    </Layout>
  );
}
