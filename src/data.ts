const scene = (name, _width, _height) => `/images/Album/Evenement/${name}.jpg`;
const repetition = (name, _width, _height) => `/images/Album/Repetition/${name}.jpg`;
const portrait = (name) => `/images/members/${name}.jpg`;
const musicianPortrait = (name) => `/images/members/Musicien/${name}-m.jpg`;
const concert = (name, _width, _height) => `/images/Album/Concert/${name}.jpg`;
const Atelier = (name, _width, _height) => `/images/Album/Atelier/${name}.jpg`;

export const stats = [
  { label: "Choristes actifs", value: 48, suffix: "" },
  { label: "Concerts par an", value: 1, suffix: "+" },
  { label: "Années d'existence", value: 65, suffix: "" },
  { label: "Répétitions", value: 98, suffix: "%" },
];

export const voices = [
  {
    id: "1er",
    icon: "✦",
    title: "Premières voix",
    description: "Sopranos : elles portent la mélodie et l'éclat du chœur vers les aigus.",
    count: 14,
  },
  {
    id: "2e",
    icon: "♫",
    title: "Deuxièmes voix",
    description: "Altos : elles enrichissent l'harmonie et donnent de la profondeur au chant.",
    count: 13,
  },
  {
    id: "3e",
    icon: "◎",
    title: "Troisièmes voix",
    description: "Ténors : ils apportent clarté, énergie et relief à l'ensemble vocal.",
    count: 11,
  },
  {
    id: "Basse",
    icon: "↗",
    title: "Basses",
    description: "Elles posent les fondations harmoniques et le souffle grave du chœur.",
    count: 10,
  },
];

export const members = [
  { id: "1", category: "Choriste", firstName: "Mamy", name: "President", role: "President 65ème", joined: "2024", voice: "Basse", image: portrait("Mamy"), bio: "Mamy est le président du 65ème depuis 2026, apportant sa vision et son leadership pour guider Ezrahita vers de nouveaux sommets." },
  { id: "2", category: "Choriste", firstName: "Arisoa", name: "Arisoa", role: "Choeur", joined: "2025", voice: "1er", image: portrait("Arisoa"), bio: "Arisoa est une des nouvelle recrue de la 1ere voix." },
  { id: "3", category: "Choriste", firstName: "Setra", name: "Setra", role: "Choriste, pupitre basse", joined: "2010", voice: "Basse", image: portrait("Setra"), bio: "Un des element clé et musicien du groupe." },
  { id: "4", category: "Choriste", firstName: "Rinoh", name: "Rinoh", role: "Tenor", joined: "2010", voice: "Basse", image: portrait("Rinoh"), bio: "Rinoh fait partie du groupe depuis plusieurs années et apporte sa touche personnelle au répertoire." },
  { id: "5", category: "Choriste", firstName: "Rinah", name: "Rinah", role: "Choeur du premiere voix", joined: "2010", voice: "1er", image: portrait("Rinah"), bio: "Rinah est une des membres actives du chœur , jonglant entre Responsable des chants, 1er voix, chef de Choeur et  Soliste du groupe." },
  { id: "6", category: "Choriste", firstName: "Natacha", name: "Natacha", role: "Choriste, 1ère voix", joined: "2007", voice: "1er", image: portrait("Natacha"), bio: "Une des responsables du chant et chef de Choeur TAME." },
  { id: "7", category: "Choriste", firstName: "Kanto", name: "Kanto", role: "1er voix ,soliste", joined: "2007", voice: "1e", image: portrait("Kanto"), bio: "Soliste et premiere voix active" },
  { id: "8", category: "Choriste", firstName: "Jacky", name: "Jacky", role: "Basse", joined: "2000", voice: "Basse", image: portrait("Jacky"), bio: "un des plus anciens membres du groupe integrant encore le groupe et occupe la position de basse." },
  { id: "9", category: "Choriste", firstName: "Benet", name: "Benet", role: "Tenor", joined: "2000", voice: "3e", image: portrait("Benet"), bio: "Un père pour les jeunes integrant la position Tenor, un des anciens." },
  { id: "10", category: "Choriste", firstName: "Tsiky", name: "Tsiky", role: "Tenor , soliste du groupe", joined: "2012", voice: "3e", image: portrait("Tsiky"), bio: "Tsiky , comme dis son prenom est un des comédient du groupe , mais aussi un element clé du Tenor occupant une place parmis les solistes." },
  { id: "11", category: "Choriste", firstName: "Prisca", name: "Prisca", role: "Pupitre 1er voix", joined: "2017", voice: "1er", image: portrait("Prisca"), bio: "Premier voix ayant beaucoup d'energie ,toujour prete pour aider et faisant partie des solistes." },
  { id: "12", category: "Choriste", firstName: "Ranto", name: "Ranto", role: "nouvelle recrue Tenor", joined: "2024", voice: "3e", image: portrait("ranto"), bio: "Nouveau parmis les Tenors , mais deja intégré au groupe." },
  { id: "13", category: "Choriste", firstName: "Tiavina", name: "Tiavina", role: "nouvelle recrue 2eme voix", joined: "2024", voice: "2e", image: portrait("Tiavina"), bio: "Nouvelle recrue du 2eme voix." },
  { id: "14", category: "Choriste", firstName: "Liantsoa", name: "Liantsoa", role: "Pupitre 2eme voix", joined: "2012", voice: "2e", image: portrait("Liantsoa"), bio: "Une des plus active parmis les 2eme voix" },
  { id: "15", category: "Choriste", firstName: "Mireille", name: "Mireille", role: "2eme Voix active", joined: "2012", voice: "2e", image: portrait("Mireille"), bio: "Une des plus active parmis les 2eme voix." },
  // --- Musiciens (portraits dans public/images/members/Musicien/) ---
  // `instrument` est volontairement vide : à compléter quand l'info sera disponible,
  // la carte affichera alors « Musicien · <instrument> ».
  { id: "16", category: "Musicien", firstName: "Be", name: "Be", role: "Musicien", instrument: "", voice: "", image: musicianPortrait("Be"), bio: "Be accompagne le chœur lors des grandes célébrations et veille au rythme de l'ensemble." },
  { id: "17", category: "Musicien", firstName: "Fitahiana", name: "Fitahiana", role: "Musicien", instrument: "", voice: "", image: musicianPortrait("Fitahiana"), bio: "Fitahiana met son oreille musicale au service du groupe, entre accompagnement et arrangements." },
  { id: "18", category: "Musicien", firstName: "Kiki", name: "Kiki", role: "Musicien", instrument: "", voice: "", image: musicianPortrait("Kiki"), bio: "Kiki complète l'ensemble et veille à l'équilibre sonore pendant les concerts." },
  { id: "19", category: "Musicien", firstName: "Ranto", name: "Ranto", role: "Musicien", joined: "2024", instrument: "", voice: "", image: musicianPortrait("Ranto"), bio: "Ranto chante parmi les ténors et accompagne le groupe sur scène." },
  { id: "20", category: "Musicien", firstName: "Setra", name: "Setra", role: "Musicien", joined: "2010", instrument: "", voice: "", image: musicianPortrait("Setra"), bio: "Setra accompagne le chœur depuis 2010 et compte parmi les musiciens historiques du groupe." },
];

export const events = [
  { id: "1", day: "14", month: "Nov", date: "14 Novembre 2024", type: "Concert", title: "Concert de fin d'année", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Notre grand concert annuel réunissant l'ensemble du répertoire travaillé cette année.", image: concert("concert-21", 900, 600) },
  { id: "2", day: "01", month: "Mar", date: "1 Mars 2026", type: "Atelier", title: "Atelier de debat avec le General Désiré RAMAKAVELO", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Un Apres-Midi ouvert à toutes et tous pour découvrir le secret d'une relation durable.", image: Atelier("atelier-13", 900, 600) },
  { id: "3", day: "24", month: "Déc", date: "24 Décembre 2025", type: "Célébration", title: "Veillée de Noël", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Une veillée toute ensemble, accompagné d'un diner speciale", image: scene("scene-123", 900, 600) },
  { id: "4", day: "21", month: "Nov", date: "21 Novembre 2025", type: "Célébration", title: "Une sortie apres concert", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Ezrahita fait une sortie de détente apres grand concert comme chaque année.", image: scene("scene-135", 900, 600) },
  { id: "5", day: "06", month: "Avr", date: "6 Avril 2026", type: "Communauté", title: "Lundi de Pâque", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Retour en Image de notre sortie Pâque.", image: scene("scene-8", 900, 600) },
  { id: "6", day: "21", month: "Mar", date: "21 mars 2026", type: "Communauté", title: "Tournoi de Foot", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Un moment d'échange sportif.", image: scene("scene-21", 900, 600) },
  { id: "7", day: "09", month: "Mai", date: "9 mai 2026", type: "Festival", title: "Dejeuner Dansante", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Un programme tout en légèreté pour célébrer l'arrivée des beaux jours.", image: scene("scene-74", 900, 600) },
  { id: "8", day: "14", month: "Janv", date: "14 janvier 2025", type: "Atelier", title: "Gaming party", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Ezrahita et ses jeunes talentueux de jeu video.", image: Atelier("atelier-14", 900, 600) },
  { id: "9", day: "05", month: "Avr", date: "05 Avril 2025", type: "Concert", title: "Concert de Pâque", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Célébration du dimanche de Pâque.", image: concert("concert-27", 900, 600) },
];

export const news = [
  { id: "1", category: "Annonces", date: "3 septembre 2026", title: "Ezrahita ouvre ses portes pour la nouvelle saison", excerpt: "Les auditions pour rejoindre le chœur reprennent dès le mois d'octobre, toutes voix confondues.", image: scene("scene-104", 1200, 900) },
  { id: "2", category: "Répertoire", date: "23 Mai 2026", title: "un tournoi de foot inter-groupe", excerpt: "Le chœur se lance dans l'oraganisation d'un tournoi de foot inter-groupe a fin d'agrandir sa communauté.", image: scene("scene-37", 900, 700) },
  { id: "3", category: "Portraits", date: "10 août 2026", title: "Retrouvaille avec les Maintimolaly du groupe", excerpt: "Retrouvaille , fou rire et reprise des répétitions pour les anciens du groupe", image: repetition("repetition-4", 900, 700) },
  { id: "4", category: "Coulisses", date: "28 juillet 2026", title: "Dans les coulisses de la dernière répétition", excerpt: "Un après-midi ordinaire, entre gammes, fous rires et mise au point des nuances.", image: repetition("repetition-13", 900, 700) },
  { id: "5", category: "Concerts", date: "15 juillet 2026", title: "Retour sur le concert d'été", excerpt: "Salle comble pour notre concert annuel : merci à toutes celles et ceux qui étaient présents.", image: concert("concert-38", 900, 700) },
  { id: "6", category: "Activités", date: "2 juillet 2026", title: "Un stage vocal d'une semaine cet été", excerpt: "Retour sur notre stage intensif consacré à la respiration et à la justesse collective.", image: repetition("repetition-6", 900, 700) },
  { id: "7", category: "Communauté", date: "19 juin 2026", title: "Ezrahita et compagnie", excerpt: "Le groupe et ses jeunes s'amusant pour n'en faire qu'un ensemble a fin de garantir l'amour qu'ils partagent entre eux.", image: scene("scene-7", 900, 700) },
  { id: "8", category: "Annonces", date: "5 juin 2026", title: "Nouveaux horaires de répétition dès septembre", excerpt: "Les répétitions passent au mercredi soir pour permettre à plus de monde de nous rejoindre.", image: repetition("repetition-9", 900, 700) },
  { id: "9", category: "Portraits", date: "24 mai 2026", title: "Le Retour du Chef de chœur Hery", excerpt: "Hery revient sur douze années à la tête d'Ezrahita et sur ce qui fait, selon lui, un bon chœur.", image: scene("scene-56", 900, 700) },
];

const createGalleryAlbum = (folder, prefix, count, album, caption) =>
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      id: `${prefix}-${number}`,
      image: `/images/Album/${folder}/${prefix}-${number}.jpg`,
      caption,
      album,
    };
  });

export const gallery = [
  ...createGalleryAlbum("Atelier", "atelier", 18, "Atelier", "Atelier"),
  ...createGalleryAlbum("Concert", "concert", 42, "Concert", "Concert"),
  ...createGalleryAlbum("Evenement", "scene", 136, "Evenement", "Sortie"),
  ...createGalleryAlbum("Repetition", "repetition", 20, "Repetition", "Répétition"),
];

export const albums = [...new Set(gallery.map((item) => item.album))]
  .sort((first, second) => first.localeCompare(second, "fr"))
  .map((title) => ({ title }));

// Libellé affiché pour un membre : « Musicien · Piano » si l'instrument est renseigné.
export const memberRoleLabel = (member) =>
  member.instrument ? `${member.role} · ${member.instrument}` : member.role;

export const getMember = (id) => members.find((m) => m.id === id);
export const getEvent = (id) => events.find((e) => e.id === id);
export const getNews = (id) => news.find((n) => n.id === id);
