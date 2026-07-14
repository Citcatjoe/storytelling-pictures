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
  //
  // 5 champs "titre" ci-dessous, chacun avec un rôle et un usage précis:
  //
  // - title: le titre "de référence". Sert de repli (fallback) partout où
  //   metaTitle/ogTitle ne sont pas définis, et c'est LUI (jamais metaTitle)
  //   qu'utilisent le JSON-LD (headline), le partage par e-mail/Twitter du
  //   Header, et l'alt de l'image sociale. À garder toujours renseigné.
  // - metaTitle: surcharge SEO. Affiché dans l'onglet du navigateur (<title>)
  //   et le résultat Google — peut différer de `title` pour placer des
  //   mots-clés (ex: "Montreux Jazz" ici) sans alourdir le titre éditorial.
  //   Laisser vide pour retomber sur `title`.
  // - ogTitle: surcharge réseaux sociaux. Titre affiché dans la carte de
  //   partage Facebook/Twitter/LinkedIn (Open Graph + Twitter Card). Laisser
  //   vide pour retomber sur `title`.
  // - titleDisplay: UNIQUEMENT pour les héros du catalogue (composants
  //   Hero/Hero2, non utilisés par cette page) — version un seul bloc avec
  //   des <br> pour forcer les retours à la ligne. Sans effet ici.
  // - heroName / heroTagline ci-dessous: ce que le hero RÉELLEMENT affiché
  //   sur cette page (ImmersiveStory) utilise.
  title: "Naïka, le nouveau joyau de la pop cosmopolite",
  metaTitle: "Naïka: interview exclusive au Montreux Jazz Festival",
  ogTitle: "Rencontre avec Naïka au Montreux Jazz Festival",
  titleDisplay: "Naïka,<br>le nouveau joyau<br>de la pop cosmopolite",

  // Hero "affiche" de l'ImmersiveStory (le vrai hero de cette page): heroName
  // porte l'affiche (gros nom en majuscules), heroTagline le sous-titre juste
  // en dessous (accepte le HTML, notamment <br>). À garder cohérent avec
  // `title` ci-dessus, mais ce sont ces deux champs-ci, pas `titleDisplay`,
  // qui pilotent ce que le lecteur voit à l'ouverture.
  heroName: "Naïka",
  heroTagline: "le nouveau joyau<br>de la pop cosmopolite",

  description: "Neuf heures en coulisses avec Naïka avant sa première au Montreux Jazz Festival. Rencontre avec la chanteuse franco-haïtienne aux millions d'écoutes.",
  author: "Antoine Hürlimann",
  publicationDate: "2026-07-17", // Format YYYY-MM-DD (utile pour Schema.org)
  publicationDisplayDate: "17 juillet 2026",

  // URLs
  // L'URL finale où sera hébergé le projet (Important pour le SEO Facebook/Twitter)
  url: "https://storytelling.blick.ch/fr/2026/naika-montreux-jazz-festival/",

  // Nom de l'image dans le dossier 'public' (ex: "social.jpg")
  socialImageFilename: "images/social.jpg",

  // Recadrages additionnels de la même photo (mêmes sujet/cadrage), pour le
  // tableau "image" du JSON-LD: Google recommande plusieurs ratios (16:9/1.91:1,
  // 4:3, 1:1) pour maximiser les formats de carte sur Discover.
  socialImageFilename4x3: "images/social-4x3.jpg",
  socialImageFilenameSquare: "images/social-1x1.jpg",

  // Crédits de fin d'article
  credits: <Credit[]>[
    { name: "Blick Suisse romande", produces: "Production", inCredits: true },
    { name: "Antoine Hürlimann", isAuthor: true, inCredits: true, job: "Journaliste", produces: "Texte", img: null },
    { name: "Valentin Flauraud", isAuthor: false, inCredits: true, job: "Photographe", produces: "Photos", img: null },
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

// Helpers calculés automatiquement (ne pas toucher)
const STORY_BASE_URL = STORY.url.replace(/\/$/, "");
export const ABSOLUTE_SOCIAL_URL = `${STORY_BASE_URL}/${STORY.socialImageFilename}`;
export const ABSOLUTE_SOCIAL_URL_4X3 = `${STORY_BASE_URL}/${STORY.socialImageFilename4x3}`;
export const ABSOLUTE_SOCIAL_URL_SQUARE = `${STORY_BASE_URL}/${STORY.socialImageFilenameSquare}`;
