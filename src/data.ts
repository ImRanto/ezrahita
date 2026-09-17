// Données de démonstration pour le site de la chorale Ezrahita.
//
// Toutes les images sont servies en local depuis `public/images`. On les
// référence toujours depuis la racine du site (`/images/...`) : le dossier
// `public` ne figure jamais dans le chemin, Vite le copie tel quel dans
// `dist/`. Voir `public/images/LISEZ-MOI.md` pour la liste des fichiers.
//
// Pour remplacer une photo, écraser simplement le fichier en gardant le même
// nom : aucun changement de code n'est nécessaire.
//
// Les appels gardent les dimensions d'origine (`scene("gal-1", 900, 1100)`) pour
// documenter le ratio attendu. Elles sont volontairement ignorées : le fichier
// local est servi tel quel, sans recadrage.
const scene = (name, _width, _height) => `/images/Album/Evenement/${name}.jpg`;
const repetition = (name, _width, _height) => `/images/Album/Repetition/${name}.jpg`;
// Le préfixe numérique de `name` doit correspondre au champ `id` du membre
// (ex. membre `id: "1"` -> `portrait("01-hery")`).
const portrait = (name) => `/images/members/${name}.jpg`;
const concert = (name, _width, _height) => `/images/Album/Concert/${name}.jpg`;
const Atelier = (name, _width, _height) => `/images/Album/Atelier/${name}.jpg`;
const Affiche = (name , _width, _height) => `/images/Album/Affiche/${name}.jpg`;

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
  { id: "1", firstName: "Hery", name: "Hery Randrianasolo", role: "Chef de chœur", joined: "2014", voice: "Basse", image: portrait("01-hery"), bio: "Fondateur d'Ezrahita, Hery dirige le chœur depuis sa création en 2014 avec une exigence toujours portée par la joie de transmettre." },
  { id: "2", firstName: "Fara", name: "Fara Andriamampianina", role: "Soprano soliste", joined: "2015", voice: "1er", image: portrait("02-fara"), bio: "Fara accompagne les premières voix depuis près de dix ans et prête régulièrement sa voix aux solos des grandes célébrations." },
  { id: "3", firstName: "Tojo", name: "Tojo Rakotomalala", role: "Choriste, pupitre ténor", joined: "2017", voice: "3e", image: portrait("03-tojo"), bio: "Arrivé par curiosité, Tojo est resté pour la fraternité du groupe et l'exigence musicale du répertoire." },
  { id: "4", firstName: "Mialy", name: "Mialy Rasolofoniaina", role: "Responsable des partitions", joined: "2016", voice: "2e", image: portrait("04-mialy"), bio: "Mialy organise le répertoire et veille à ce que chaque voix reçoive ses partitions à temps pour les répétitions." },
  { id: "5", firstName: "Landry", name: "Landry Ravelomanana", role: "Choriste, pupitre basse", joined: "2018", voice: "Basse", image: portrait("05-landry"), bio: "Landry a rejoint le pupitre des basses après plusieurs années de chant en solo, séduit par la puissance du collectif." },
  { id: "6", firstName: "Sitraka", name: "Sitraka Andriatsitohaina", role: "Choriste, pupitre soprano", joined: "2019", voice: "1er", image: portrait("06-sitraka"), bio: "Étudiante en musicologie, Sitraka apporte une oreille précise et une grande curiosité pour les répertoires variés." },
  { id: "7", firstName: "Ando", name: "Ando Rakotoarisoa", role: "Trésorier & choriste", joined: "2015", voice: "3e", image: portrait("07-ando"), bio: "Ando jongle entre les chiffres de l'association et les répétitions du mercredi, toujours avec le sourire." },
  { id: "8", firstName: "Fenosoa", name: "Fenosoa Rabemananjara", role: "Choriste, pupitre alto", joined: "2020", voice: "2e", image: portrait("08-fenosoa"), bio: "Fenosoa a découvert le chant choral à l'université et n'a plus jamais quitté un pupitre depuis." },
  { id: "9", firstName: "Zo", name: "Zo Andrianasolo", role: "Chargé de communication", joined: "2021", voice: "Basse", image: portrait("09-zo"), bio: "Zo raconte les coulisses d'Ezrahita sur les réseaux et prépare les visuels de chaque événement." },
  { id: "10", firstName: "Vony", name: "Vony Ranaivoson", role: "Choriste, pupitre soprano", joined: "2019", voice: "1er", image: portrait("10-vony"), bio: "Vony aime particulièrement le répertoire sacré et les polyphonies malgaches traditionnelles." },
  { id: "11", firstName: "Tahiry", name: "Tahiry Rasamimanana", role: "Choriste, pupitre ténor", joined: "2022", voice: "3e", image: portrait("11-tahiry"), bio: "Nouvelle recrue pleine d'énergie, Tahiry s'est vite intégré au pupitre des ténors." },
  { id: "12", firstName: "Nomena", name: "Nomena Razafindrakoto", role: "Choriste, pupitre alto", joined: "2017", voice: "2e", image: portrait("12-nomena"), bio: "Nomena partage son temps entre le chœur et l'enseignement de la musique aux enfants du quartier." },
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

export const getMember = (id) => members.find((m) => m.id === id);
export const getEvent = (id) => events.find((e) => e.id === id);
export const getNews = (id) => news.find((n) => n.id === id);
