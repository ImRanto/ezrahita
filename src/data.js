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
// Les dimensions passées à `scene()` sont conservées dans les appels pour
// documenter le ratio d'origine ; elles sont ignorées, le fichier local étant
// servi tel quel.

const scene = (name) => `/images/scenes/${name}.jpg`;
const portrait = (name) => `/images/members/${name}.jpg`;

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
  { id: "1", day: "14", month: "Nov", date: "14 novembre 2026", type: "Concert", title: "Concert de fin d'année", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Notre grand concert annuel réunissant l'ensemble du répertoire travaillé cette année.", image: scene("event-concert-1", 900, 600) },
  { id: "2", day: "02", month: "Déc", date: "2 décembre 2026", type: "Atelier", title: "Atelier découverte du chant choral", location: "Salle paroissiale, Analakely", description: "Une matinée ouverte à toutes et tous pour découvrir les bases du chant en chœur.", image: scene("event-atelier-1", 900, 600) },
  { id: "3", day: "24", month: "Déc", date: "24 décembre 2026", type: "Célébration", title: "Veillée de Noël en chants", location: "Cathédrale d'Andohalo", description: "Une veillée toute en chants de Noël, en collaboration avec les chorales voisines.", image: scene("event-noel-1", 900, 600) },
  { id: "4", day: "18", month: "Jan", date: "18 janvier 2027", type: "Festival", title: "Festival des chœurs de Madagascar", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Ezrahita participe à ce grand rassemblement de chorales venues de tout le pays.", image: scene("event-festival-1", 900, 600) },
  { id: "5", day: "07", month: "Fév", date: "7 février 2027", type: "Communauté", title: "Journée portes ouvertes", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Venez rencontrer les choristes, visiter nos locaux et assister à une répétition ouverte.", image: scene("event-portes-1", 900, 600) },
  { id: "6", day: "21", month: "Mar", date: "21 mars 2027", type: "Rencontre", title: "Rencontre inter-chorales", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Un moment d'échange musical avec deux autres ensembles vocaux de la capitale.", image: scene("event-rencontre-1", 900, 600) },
  { id: "7", day: "09", month: "Mai", date: "9 mai 2027", type: "Concert", title: "Concert de printemps", location: "FJKM Ambohimanandray Filadelfia, Antananarivo", description: "Un programme tout en légèreté pour célébrer l'arrivée des beaux jours.", image: scene("event-concert-2", 900, 600) },
];

export const news = [
  { id: "1", category: "Annonces", date: "3 septembre 2026", title: "Ezrahita ouvre ses portes pour la nouvelle saison", excerpt: "Les auditions pour rejoindre le chœur reprennent dès le mois d'octobre, toutes voix confondues.", image: scene("news-annonce-1", 1200, 900) },
  { id: "2", category: "Répertoire", date: "22 août 2026", title: "Un nouveau répertoire malgache à l'étude", excerpt: "Le chœur se lance dans l'apprentissage de trois polyphonies traditionnelles revisitées.", image: scene("news-repertoire-1", 900, 700) },
  { id: "3", category: "Portraits", date: "10 août 2026", title: "Rencontre avec Fara, soprano depuis dix ans", excerpt: "Portrait d'une choriste fidèle qui a vu grandir Ezrahita au fil des saisons.", image: scene("news-portrait-1", 900, 700) },
  { id: "4", category: "Coulisses", date: "28 juillet 2026", title: "Dans les coulisses de la dernière répétition", excerpt: "Un après-midi ordinaire, entre gammes, fous rires et mise au point des nuances.", image: scene("news-coulisses-1", 900, 700) },
  { id: "5", category: "Concerts", date: "15 juillet 2026", title: "Retour sur le concert d'été", excerpt: "Salle comble pour notre concert annuel : merci à toutes celles et ceux qui étaient présents.", image: scene("news-concert-1", 900, 700) },
  { id: "6", category: "Activités", date: "2 juillet 2026", title: "Un stage vocal d'une semaine cet été", excerpt: "Retour sur notre stage intensif consacré à la respiration et à la justesse collective.", image: scene("news-activite-1", 900, 700) },
  { id: "7", category: "Communauté", date: "19 juin 2026", title: "Ezrahita s'associe à une chorale scolaire", excerpt: "Un partenariat est né avec une école du quartier pour initier les enfants au chant choral.", image: scene("news-communaute-1", 900, 700) },
  { id: "8", category: "Annonces", date: "5 juin 2026", title: "Nouveaux horaires de répétition dès septembre", excerpt: "Les répétitions passent au mercredi soir pour permettre à plus de monde de nous rejoindre.", image: scene("news-annonce-2", 900, 700) },
  { id: "9", category: "Portraits", date: "24 mai 2026", title: "Trois questions à notre chef de chœur", excerpt: "Hery revient sur douze années à la tête d'Ezrahita et sur ce qui fait, selon lui, un bon chœur.", image: scene("news-portrait-2", 900, 700) },
];

export const albums = [
  { title: "Concerts" },
  { title: "Répétitions" },
  { title: "Coulisses" },
  { title: "Événements" },
];

export const gallery = [
  { id: "1", image: scene("gal-1", 900, 1100), caption: "Concert de fin d'année", album: "Concerts" },
  { id: "2", image: scene("gal-2", 900, 700), caption: "Répétition du samedi", album: "Répétitions" },
  { id: "3", image: scene("gal-3", 900, 700), caption: "Avant le lever de rideau", album: "Coulisses" },
  { id: "4", image: scene("gal-4", 900, 700), caption: "Veillée de Noël", album: "Événements" },
  { id: "5", image: scene("gal-5", 900, 700), caption: "Travail des nuances", album: "Répétitions" },
  { id: "6", image: scene("gal-6", 900, 700), caption: "Festival des chœurs", album: "Événements" },
  { id: "7", image: scene("gal-7", 900, 700), caption: "Dernières notes accordées", album: "Coulisses" },
  { id: "8", image: scene("gal-8", 900, 700), caption: "Concert de printemps", album: "Concerts" },
  { id: "9", image: scene("gal-9", 900, 700), caption: "Portrait de pupitre", album: "Coulisses" },
  { id: "10", image: scene("gal-10", 900, 700), caption: "Journée portes ouvertes", album: "Événements" },
  { id: "11", image: scene("gal-11", 900, 700), caption: "Répétition générale", album: "Répétitions" },
  { id: "12", image: scene("gal-12", 900, 700), caption: "Salut final", album: "Concerts" },
];

export const getMember = (id) => members.find((m) => m.id === id);
export const getEvent = (id) => events.find((e) => e.id === id);
export const getNews = (id) => news.find((n) => n.id === id);
