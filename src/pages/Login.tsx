import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import AuthShell from "../components/AuthShell";
import Brand from "../components/Brand";
import Button from "../components/Button";
import BackLink from "../components/BackLink";
import FormField from "../components/FormField";

export default function Login() {
  const [, setLocation] = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setLocation("/member/dashboard"), 600);
  };

  return (
    <AuthShell>
      <div className="w-[min(440px,100%)] p-[35px] rounded-[22px] bg-white shadow-[0_20px_60px_rgba(11,31,58,0.1)] text-left">
        <Brand />
        <div className="eyebrow mt-[55px]">Espace membre</div>
        <h1 className="mt-3.5 mb-3 font-serif text-[clamp(3rem,10vw,5rem)]">
          Bienvenue
          <br />
          <span className="text-coral">chez vous.</span>
        </h1>
        <p className="text-muted text-[13px] leading-[1.7]">
          Connectez-vous pour retrouver vos partitions, les répétitions et les nouvelles de la
          chorale.
        </p>
        <form onSubmit={submit}>
          <FormField label="Email" id="email" type="email" required placeholder="vous@exemple.com" />
          <FormField label="Mot de passe" id="password" type="password" required placeholder="••••••••" />
          <Button type="submit" variant="primary" className="w-full">
            {submitted ? "Connexion..." : "Se connecter"} <ArrowRight size={15} />
          </Button>
        </form>
        <BackLink href="/" className="mt-[25px]">
          Retour au site public
        </BackLink>
      </div>
    </AuthShell>
  );
}
