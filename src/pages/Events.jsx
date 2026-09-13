import { useState } from "react";
import Layout from "../components/Layout.jsx";
import PageHero from "../components/PageHero.jsx";
import FilterPills from "../components/FilterPills.jsx";
import EventCard from "../components/EventCard.jsx";
import { events } from "../data.js";

const options = ["Tous", "Concert", "Atelier", "Célébration", "Festival", "Communauté", "Rencontre"];

export default function Events() {
  const [filter, setFilter] = useState("Tous");
  const filtered = filter === "Tous" ? events : events.filter((event) => event.type === filter);

  return (
    <Layout>
      <main>
        <PageHero
          eyebrow="À l'agenda"
          title={
            <>
              Des moments
              <br />
              <span className="text-[#ffb5b1]">à vivre ensemble.</span>
            </>
          }
          text="Concerts, ateliers, rencontres : retrouvez tous les rendez-vous d'Ezrahita."
        />
        <section className="py-[55px] md:py-[76px] pb-[85px] md:pb-[120px]">
          <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
            <FilterPills options={options} active={filter} onChange={setFilter} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((event) => (
                <EventCard event={event} key={event.id} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
