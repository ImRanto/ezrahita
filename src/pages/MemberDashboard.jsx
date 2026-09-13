import { ArrowRight } from "lucide-react";
import AuthShell from "../components/AuthShell.jsx";
import Button from "../components/Button.jsx";

export default function MemberDashboard() {
  return (
    <AuthShell>
      <div>
        <div className="eyebrow">Espace membre</div>
        <h1 className="font-serif text-[clamp(3.3rem,8vw,7rem)]">
          Bonjour,
          <br />
          <span className="text-cobalt">choriste.</span>
        </h1>
        <p className="text-muted">Votre espace membre est prêt pour la prochaine étape.</p>
        <Button href="/" variant="primary" className="mt-4">
          Retour au site public <ArrowRight size={15} />
        </Button>
      </div>
    </AuthShell>
  );
}
