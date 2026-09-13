# Ezrahita — site de la chorale

Reconstruction du site en **React + Vite + Tailwind CSS**, en composants réutilisables et 100% responsive.

## Stack

- [Vite](https://vitejs.dev/) — bundler / dev server
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) — tout le style est en classes utilitaires (aucun CSS custom, hormis les polices et 2 helpers dans `src/index.css`)
- [wouter](https://github.com/molefrog/wouter) — routing léger
- [lucide-react](https://lucide.dev/) — icônes

## Démarrer

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
```

## Structure

```
src/
  components/   composants réutilisables (Header, Footer, cartes, boutons, formulaires…)
  pages/        une page par route
  data.js       données de démonstration (membres, événements, actualités, galerie…)
  nav.js        éléments de navigation partagés
  App.jsx       déclaration des routes (wouter)
  index.css     directives Tailwind + polices + quelques helpers (.eyebrow, .text-link)
```

## Design

Palette et typographies reprises du site d'origine :

- Couleurs : `ink` (bleu nuit), `cobalt`, `coral`, `mist`, `muted`, `line` — définies dans `tailwind.config.js`
- Polices : *Cormorant Garamond* (titres) et *DM Sans* (texte courant)

## Pages

Accueil, Notre chorale, Membres (+ fiche membre), Activités (pupitres), Événements (+ fiche événement),
Actualités (+ article), Galerie (avec visionneuse), Contact, Espace membre (connexion + tableau de bord).
