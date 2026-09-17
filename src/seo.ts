import { useEffect } from "react";

// ⚠️ Un seul endroit à changer le jour de la mise en ligne du domaine définitif.
// Cette URL est aussi présente dans index.html (og:url, canonical), public/robots.txt
// et public/sitemap.xml : pensez à mettre les quatre à jour en même temps.
export const SITE_URL = "https://ezrahita.mg";

export const SITE_NAME = "Antoko Mpihira Ezrahita (AME)";
export const SITE_NAME_SHORT = "Antoko Mpihira Ezrahita";

export const DEFAULT_TITLE = `${SITE_NAME_SHORT} — Chorale d'Antananarivo`;

export const DEFAULT_DESCRIPTION =
  "Antoko Mpihira Ezrahita (AME) est une chorale d'Antananarivo : ses membres, ses musiciens, ses concerts, ses activités et ses actualités.";

export const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

const setMeta = (key, content, attribute = "name") => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

/**
 * Donne à chaque page publique son propre titre et sa propre description.
 * Sans cela, les 14 routes du site partagent un unique titre, ce qui pénalise
 * le référencement et l'historique du navigateur.
 *
 * @param {{ title?: string, description?: string }} meta
 *   `title` est le titre de la page, le nom du site est ajouté automatiquement.
 */
export function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    const pageTitle = title ? `${title} — ${SITE_NAME_SHORT}` : DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${window.location.pathname}`;

    document.title = pageTitle;

    setMeta("description", pageDescription);
    setMeta("og:title", pageTitle, "property");
    setMeta("og:description", pageDescription, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setCanonical(url);
  }, [title, description]);
}
