// ---------------------------------------------------------------------------
// 📝 CONFIGURATION DE LA STORY
// C'est le SEUL fichier à modifier pour configurer une nouvelle story.
// ---------------------------------------------------------------------------

type Credit = {
  name: string;
  produces: string;
  inCredits: boolean;
  isAuthor?: boolean;
  job?: string;
  img?: string | null;
  link?: string;
};

export const STORY = {
  // Infos générales
  title: "Naïka, le nouveau joyau de la pop cosmopolite",
  metaTitle: "Montreux Jazz: dans les coulisses de Naïka, joyau de la pop cosmopolite",
  ogTitle: "Naïka, le nouveau joyau de la pop cosmopolite",
  titleDisplay: "Naïka,<br>le nouveau joyau<br>de la pop cosmopolite",

  // Hero "affiche" de l'ImmersiveStory: le nom porte l'affiche, la tagline le sous-titre.
  // À garder cohérent avec `title`. `titleDisplay` reste la version d'un seul bloc,
  // utilisée par les héros du catalogue (Hero, Hero2).
  heroName: "Naïka",
  heroTagline: "le nouveau joyau<br>de la pop cosmopolite",

  description: "Pendant près de neuf heures, L'illustré a suivi Naïka dans les coulisses de sa première au Montreux Jazz Festival. Rencontre intime avec la chanteuse franco-haïtienne aux millions d'écoutes.",
  author: "L'illustré",
  publicationDate: "2026-07-09", // Format YYYY-MM-DD (utile pour Schema.org)
  publicationDisplayDate: "9 juillet 2026",

  // URLs
  // L'URL finale où sera hébergé le projet (Important pour le SEO Facebook/Twitter)
  url: "https://storytelling.blick.ch/fr/2026/naika-montreux-jazz-festival/",

  // Nom de l'image dans le dossier 'public' (ex: "social.jpg")
  socialImageFilename: "images/social.jpg",

  // Crédits de fin d'article
  credits: <Credit[]>[
    { name: "L'illustré", produces: "Production", inCredits: true },
    { name: "L'illustré", isAuthor: true, inCredits: true, job: "Journaliste", produces: "Texte", img: null },
    { name: "À compléter", isAuthor: false, inCredits: true, job: "Photographe", produces: "Photos", img: null },
    { name: "César Greppin", isAuthor: false, inCredits: true, job: "Développement", produces: "Format web", img: "cesar-greppin.jpg" }
  ],

  // Esthétique
  themeColor: "#000000", // Couleur de la barre au dessus du navigateur (mobile)
  logoColor: "#000000", // Couleur du logo Blick dans le header

  // Technique (ne touchez pas si vous n'avez pas besoin)
  siteName: "Blick.ch/fr",
  twitterHandle: "@Blick_fr",
  faviconBaseUrl: "https://storytelling.blick.ch/fr/__is_embed_somewhere/favicon",
};

// Helper calculé automatiquement (ne pas toucher)
export const ABSOLUTE_SOCIAL_URL = `${STORY.url.replace(/\/$/, "")}/${STORY.socialImageFilename}`;
