/**
 * Structure de la navigation principale.
 *
 * `navItems` décrit la barre desktop : chaque entrée est soit un lien simple
 * `[label, href]`, soit un groupe déroulant `{ label, items, footer? }` dont
 * les items portent une description affichée dans le panneau.
 * `flatNavItems` liste tous les liens à plat, utilisée par le menu mobile.
 */
export const navItems = [
  ["Accueil", "/"],
  {
    label: "Le chœur",
    items: [
      {
        label: "Notre chorale",
        href: "/about",
        description: "Notre histoire et notre mission",
      },
      {
        label: "Membres",
        href: "/members",
        description: "Choristes et musiciens du groupe",
      },
    ],
    footer: ["Nous rejoindre", "/contact"],
  },
  ["Activités", "/voices"],
  ["Événements", "/events"],
  ["Actualités", "/news"],
  {
    label: "Médias",
    items: [
      {
        label: "Vidéos",
        href: "/videos",
        description: "Clips et concerts en vidéo",
      },
      {
        label: "Galerie",
        href: "/gallery",
        description: "Les moments en photos",
      },
    ],
  },
];

export const flatNavItems = navItems.flatMap((item) =>
  Array.isArray(item) ? [item] : item.items.map(({ label, href }) => [label, href])
);

export const footerNavItems = [
  ["Accueil", "/"],
  ["Notre chorale", "/about"],
  ["Membres", "/members"],
  ["Événements", "/events"],
  ["Actualités", "/news"],
  ["Vidéos", "/videos"],
  ["Galerie", "/gallery"],
];
