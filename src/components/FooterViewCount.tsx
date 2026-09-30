import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const counterUrl = (import.meta as any).env.VITE_GOATCOUNTER_COUNTER_URL;

export default function FooterViewCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!counterUrl) return undefined;

    let active = true;

    const updateCount = () => {
      fetch(counterUrl, { cache: "no-store" })
        .then((response) => {
          if (!response.ok) throw new Error("Counter request failed");
          return response.json();
        })
        .then((data) => {
          if (active && Number.isFinite(Number(data.count))) {
            setCount(Number(data.count));
          }
        })
        .catch(() => {
          if (active) setCount(null);
        });
    };

    updateCount();
    const intervalId = window.setInterval(updateCount, 60_000);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5" aria-label="Nombre de vues du site">
      <Eye size={14} aria-hidden="true" />
      <span>{count === null ? "—" : new Intl.NumberFormat("fr-FR").format(count)}</span>
      <span>vues</span>
    </span>
  );
}