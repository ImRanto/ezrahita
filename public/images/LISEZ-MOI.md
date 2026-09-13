# Images du site Ezrahita

Toutes les photos du site sont servies depuis ce dossier.

## Règle d'or

`public/` est la racine statique du site : **le mot `public` ne figure jamais
dans les chemins**. Le fichier `public/images/hero.jpg` est appelé
`/images/hero.jpg` dans le code.

## Remplacer une photo

Écrase simplement le fichier en gardant **exactement le même nom** (majuscules
et minuscules comprises) : aucun changement de code n'est nécessaire.

- Format conseillé : JPEG ou WebP, ~150–300 Ko par image.
- Garde des proportions proches de celles d'origine pour éviter les recadrages.
- Les images actuelles sont des visuels de démonstration libres de droit
  (picsum.photos / pravatar.cc) : elles sont là pour que le site s'affiche en
  attendant les vraies photos.

## Contenu des fichiers

| Fichier | Utilisé pour |
| --- | --- |
| `hero.jpg` | Image de fond du haut de la page d'accueil |
| `home-chorale.jpg` | Photo « Une communauté réunie par la musique » (accueil) |
| `about-chorale.jpg` | Photo de la page « Notre chorale » |
| `voices-rehearsal.jpg` | Photo de la page « Les pupitres » |
| `scenes/event-*.jpg` | Visuels des événements (agenda + page événement) |
| `scenes/news-*.jpg` | Visuels des actualités (journal + page article) |
| `scenes/gal-*.jpg` | Photos de la galerie (vignettes + visionneuse) |
| `members/*.jpg` | Portraits des choristes (fiches membres) |

### Événements — `scenes/`

`event-concert-1`, `event-atelier-1`, `event-noel-1`, `event-festival-1`,
`event-portes-1`, `event-rencontre-1`, `event-concert-2`

### Actualités — `scenes/`

`news-annonce-1`, `news-repertoire-1`, `news-portrait-1`, `news-coulisses-1`,
`news-concert-1`, `news-activite-1`, `news-communaute-1`, `news-annonce-2`,
`news-portrait-2`

### Galerie — `scenes/`

`gal-1` à `gal-12`

### Choristes — `members/`

`01-hery`, `02-fara`, `03-tojo`, `04-mialy`, `05-landry`, `06-sitraka`,
`07-ando`, `08-fenosoa`, `09-zo`, `10-vony`, `11-tahiry`, `12-nomena`

Le numéro en préfixe est l'id du choriste dans `src/data.js` : il évite les
collisions si deux choristes portent le même prénom.

## Remarque

Le logo `ame-logo.png` est resté à la racine de `public/` (et non dans
`images/`) car il sert aussi de favicon à `index.html`.
