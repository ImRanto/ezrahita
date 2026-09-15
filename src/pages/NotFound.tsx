import { ArrowRight } from "lucide-react";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <Layout>
      <main className="min-h-[75vh] grid place-items-center text-center py-[150px] px-6">
        <div>
          <div className="eyebrow justify-center">Partition introuvable</div>
          <h1 className="m-0 font-serif text-[7rem] leading-[0.8]">404</h1>
          <p className="text-muted">Cette page n'a pas encore trouvé sa note.</p>
          <Button href="/" variant="primary" className="mt-6">
            Retour à l'accueil <ArrowRight size={15} />
          </Button>
        </div>
      </main>
    </Layout>
  );
}
