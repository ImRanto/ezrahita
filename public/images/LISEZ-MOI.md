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

## Carte des fichiers

| Fichier | Utilisation | Où c'est utilisé dans le code |
| --- | --- | --- |
| `hero.jpg` | Image de fond du hero (accueil) | `src/pages/Home.tsx` (CSS `background-image`) |
| `hero1.jpg` | Photo « chorale en concert » (accueil) | `src/pages/Home.tsx` (`<img>`) |
| `hero2.jpg` | Photo « chorale sur scène » (à propos) | `src/pages/About.tsx` (`<img>`) |
| `voices-rehearsal.jpg` | Photo de répétition (pupitres) | `src/pages/Voices.tsx` (`<img>`) |
| `about-chorale.jpg` | Photo « à propos » (non utilisée en code) | — |
| `home-chorale.jpg` | Photo accueil (non utilisée en code) | — |
| `ame-logo.png` | Logo du site + favicon | `src/components/Brand.tsx` + `index.html` |

## Album Evenement

Dossier : `Album/Evenement/`

Photos numérotées `scene-1.jpg` à `scene-126.jpg`.

Utilisées pour :
- Les **événements** (agenda) → `src/data.ts`, fonction `scene()`
- Les **actualités** (journal) → `src/data.ts`, fonction `scene()`
- La **galerie** → `src/data.ts`, boucle `Array.from()`

Pour changer une image d'événement ou d'actu, remplace le fichier
`scene-{numéro}.jpg` correspondant dans ce dossier.

## Album Repetition

Dossier : `Album/Repetition/`

Photos numérotées `repetition-1.jpg` à `repetition-12.jpg`.

Utilisées pour la **galerie** (album « Répétition »).

## Portraits des choristes

Dossier : `members/`

Fichiers `Prenom.jpg` (ex. `Setra.jpg`, `Arisoa.jpg`).

Le nom du fichier correspond au prénom passé à la fonction `portrait()` dans
`src/data.ts` (tableau `members`, membres avec `category: "Choriste"`).
Pour changer un portrait, remplace simplement le fichier du même nom.

## Portraits des musiciens

Dossier : `members/Musicien/`

| Fichier | Musicien |
| --- | --- |
| `Be-m.jpg` | Be |
| `Fitahiana-m.jpg` | Fitahiana |
| `Kiki-m.jpg` | Kiki |
| `Ranto-m.jpg` | Ranto |
| `Setra-m.jpg` | Setra |

Le suffixe `-m` distingue le portrait « musicien » du portrait « choriste » du
même nom. Ces fichiers sont appelés par la fonction `musicianPortrait()` dans
`src/data.ts` (membres avec `category: "Musicien"`).

La page `/membres` propose une pilule « Musiciens » pour afficher uniquement
cette catégorie.

## Remarque technique

Le logo `ame-logo.png` est resté à la racine de `public/` (et non dans
`images/`) car il sert aussi de favicon dans `index.html`.
