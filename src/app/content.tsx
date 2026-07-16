import type { Metadata, Viewport } from "next";
import { STORY, ABSOLUTE_SOCIAL_URL } from "@/config/variables";
import { Header } from "@/components/Header";
import { Credits } from "@/components/Credits";
import { ReadingProgress } from "@/components/ReadingProgress";
import { VerticalVideo } from "@/components/VerticalVideo";
import {
  ImmersiveStory,
  StorySection,
  StoryKicker,
  StoryHeading,
  ScrollCue,
} from "@/components/ImmersiveStory";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: STORY.metaTitle || STORY.title,
  description: STORY.description,
  authors: [{ name: STORY.author }],

  openGraph: {
    title: STORY.ogTitle || STORY.title,
    siteName: STORY.siteName,
    url: STORY.url,
    description: STORY.description,
    type: "article",
    images: [
      {
        url: ABSOLUTE_SOCIAL_URL,
        width: 1200,
        height: 630,
        alt: STORY.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: STORY.twitterHandle,
    title: STORY.ogTitle || STORY.title,
    description: STORY.description,
    images: [ABSOLUTE_SOCIAL_URL],
  },

  alternates: {
    canonical: STORY.url,
  },

  icons: {
    icon: [
      { url: `${STORY.faviconBaseUrl}/favicon-48x48.png`, sizes: '48x48', type: 'image/png' },
    ],
    shortcut: [`${STORY.faviconBaseUrl}/favicon.ico`],
    apple: [
      { url: `${STORY.faviconBaseUrl}/apple-touch-icon.png`, sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: `${STORY.faviconBaseUrl}/safari-pinned-tab.svg`, color: '#5bbad5' },
    ],
  },

  other: {
    "msapplication-TileColor": STORY.themeColor,
    "image_src": ABSOLUTE_SOCIAL_URL,
  },
};

// Classe commune des paragraphes de la story
const P = "text-base md:text-lg leading-relaxed font-light mb-6 last:mb-0";

export default function Content() {
  // Construction du JSON-LD pour Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": STORY.title,
    "image": ABSOLUTE_SOCIAL_URL,
    "author": {
      "@type": "Person",
      "name": STORY.author
    },
    "publisher": {
      "@type": "Organization",
      "name": STORY.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${STORY.faviconBaseUrl}/favicon-48x48.png`
      }
    },
    "datePublished": STORY.publicationDate,
    "description": STORY.description
  };

  return (
    <>
      {/* Le body réserve `pt-16` (2xl: `pt-24`) sous le header fixe. Ici le header flotte
          au-dessus d'une image déjà plein écran (`fixed inset-0`): ce padding ne dégage rien,
          il ne fait que pousser le contenu vers le bas — le hero en 100svh déborde alors du
          viewport et son pied glisse hors de l'écran. On le neutralise pour ce format. */}
      <article className="relative min-h-screen bg-black text-white -mt-16 2xl:-mt-24">
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header theme="dark" />
        <ReadingProgress />

        <ImmersiveStory scrim="none">

          {/* ==============================================
              HERO — titre + chapô
              ============================================== */}
          {/* Naïka est cadrée à droite, le halo de projecteur en bas à gauche: le bloc
              de texte se pose dans le vide de l'image, sans jamais couvrir le sujet.
              En mobile, le crop est massif (portrait sur une photo 3:2) — on décale
              donc vers elle pour ne pas garder que du fond bleu. */}
          <StorySection
            id="hero"
            image="images/naika/_F2_1047.webp"
            imagePosition="center 38%"
            imagePositionMobile="68% 35%"
            align="left"
            height="short"
            width="wide"
            vAlign="bottom"
          >
            <h1 className="story-hero__title">
              <span className="story-hero__name-mask">
                <span className="story-hero__name">{STORY.heroName}</span>
              </span>
              <span
                className="story-hero__tagline"
                dangerouslySetInnerHTML={{ __html: STORY.heroTagline }}
              />
            </h1>

            <div className="story-hero__rule" aria-hidden="true" />

            <p className="story-hero__lede">
              Pendant près de neuf heures, Blick a suivi Naïka dans les coulisses de sa première au Montreux Jazz Festival. Derrière les paillettes, le portrait d’une chanteuse en quête d’un chez-soi. Rencontre intime avec la jeune artiste franco-haïtienne aux millions d’écoutes.
            </p>

            <div className="story-hero__footer">
              <span className="story-hero__byline">
                <span className="story-hero__flag">Rencontre exclusive</span>
                <span className="story-hero__sep" aria-hidden="true" />
                <span>
                  {STORY.author} · {STORY.publicationDisplayDate}
                </span>
              </span>
              <ScrollCue />
            </div>
          </StorySection>

          {/* ==============================================
              OUVERTURE — le crépuscule, la loge
              ============================================== */}
          <StorySection
            image="images/naika/_F3_5615.webp"
            imagePosition="70% 60%"
            imagePositionMobile="60% 55%"
            align="left"
            veil="left"
            veilStr={1}
          >
            <p className={P}>
              Le crépuscule enveloppe Montreux. Derrière un rideau noir, un autre soleil s’apprête à se lever. Des cris de joie s’échappent de la loge voisine. Les musiciens de la chanteuse brésilienne Liniker vivent les dernières minutes d’Argentine-Egypte avec la passion du football. A quelques mètres de là, un tout autre rituel se joue.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F2_1040.webp"
            imagePosition="left 35%"
            imagePositionMobile="56% 35%"
            align="left"
          >
            <p className={P}>
              Naïka ferme les yeux. Les voix s’éteignent d’elles-mêmes. Une brève prière avec les siens. Lorsqu’elle les rouvre, son visage s’éclaire. La native de Miami aux lèvres carmin accroche nos doigts dans un check furtif avant de s’éloigner vers la scène, d’où la clameur se fait de plus en plus forte.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F2_0021.webp"
            imagePosition="left 30%"
            imagePositionMobile="55% 30%"
            align="left"
            veil="left"
          >
            <p className={P}>
              Juste avant de se présenter à ses fans, deux membres de son équipe ajustent encore sa tenue jaune. Une main défroisse un pan de jupe. Une autre replace délicatement une manchette. Ça y est! Le long manteau tombe de ses épaules. Son bustier constellé de strass s’embrase sous les projecteurs. De longues bandes de tissu dansent autour de jambes interminables tandis que d’impressionnantes bottes frangées remontent jusqu’aux cuisses.
            </p>
          </StorySection>

          {/* ==============================================
              CHAPITRE — Dans les coulisses d'une star
              ============================================== */}
          <StorySection
            id="coulisses"
            image="images/naika/_F3_4504.webp"
            imagePosition="left bottom"
            imagePositionMobile="46% bottom"
            align="left"
            width="wide"
            veil="left"
          >
            {/* <StoryKicker>Chapitre 1</StoryKicker> */}
            <StoryHeading>Dans les coulisses d’une star</StoryHeading>
            <p className={P}>
              Plus tôt dans l’après-midi, à 15 h 20, elle foulait cette scène en jean bleu, blouse blanche quasi transparente, une longue tresse dans le dos et des tongs aux pieds. Le Montreux Jazz Lab était alors vide. Les musiciens répétaient. Seuls les échos du soundcheck répondaient au clapotis du Léman. Pendant près de neuf heures, ce mardi 7 juillet, du premier accord jusqu’à son retour en loge après le concert, L’illustré a suivi en exclusivité Naïka dans les coulisses de sa première au Montreux Jazz Festival.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_4543.webp"
            imagePosition="center 35%"
            imagePositionMobile="65% 35%"
            align="left"
            veil="left"
          >
            <p className={P}>
              A 31 ans, Naïka est un joyau de la pop cosmopolite. Plus de 3,3 millions d’auditrices et d’auditeurs mensuels sur Spotify et 1,3 million de followers sur Instagram. Un premier album, Eclesia, et un tube, One Track Mind, hymne féministe aux accents caribéens devenu viral qui lui a offert une renommée internationale. En français, en anglais comme en créole haïtien, elle chante une identité à l’image de son parcours: multiple. Bien avant de chercher un chez-soi, Naïka a grandi sans véritable port d’attache. Entre Paris, la Guadeloupe, le Kenya, l’Afrique du Sud et le Vanuatu, elle passe son enfance dans un perpétuel ailleurs avant de revenir à Miami à l’adolescence.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_4626.webp"
            imagePosition="left 35%"
            imagePositionMobile="53% 35%"
            align="left"
            veil="left"
          >
            <p className={P}>
              Au cœur de l’après-midi, cette célébrité mondiale déambule sur les quais comme n’importe quelle festivalière. Mais son nom la précède. «C’est Naïka...» Le murmure court d’une oreille à l’autre avant de s’évanouir. Les regards s’illuminent. Personne ne s’approche. Ni téléphone tendu. Ni autographe réclamé. Seulement cette élégante retenue dont le public suisse semble avoir le secret.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_4686.webp"
            imagePosition="left 35%"
            imagePositionMobile="62% 35%"
            align="left"
            veil="left"
          >
            <p className={P}>
             L’après-midi s’écoule au rythme des interviews. Radio et presse écrite. Blick lui fait découvrir le thé froid Migros, saveur pêche ou citron. Les deux journalistes filent ensuite lui acheter un carac «pour du réconfort après l’effort». Elle éclate de rire, remercie, puis disparaît déjà vers un autre rendez-vous. A chaque entretien, la même question ressurgit. Qui est Naïka? Pour elle, Eclesia est une manière de dévoiler les différentes facettes d’une femme qui a appris à ne plus choisir entre ses langues, ses cultures et les pays qui l’ont construite.
            </p>
          </StorySection>

          {/* ==============================================
              VIDÉO — la foule filme, extrait vertical
              ============================================== */}
          <StorySection
            image="images/naika/_F3_6028.jpg"
            imagePosition="center 40%"
            imagePositionMobile="center 40%"
            align="center"
          >
            <VerticalVideo
              videoSrc="https://cdn.jwplayer.com/manifests/JvMjkvQm.m3u8"
              poster="images/naika/vignette.png"
            />
          </StorySection>

          <StorySection
            image="images/naika/_F3_4896.webp"
            imagePosition="center 35%"
            imagePositionMobile="80% 35%"
            align="left"
            veil="left"
            veilStr={1}
          >
            <p className={P}>
              Sa loge n’a rien de spectaculaire: des miroirs cerclés d’ampoules, des portants de costumes, un canapé, un fauteuil, un frigo et des flight-cases empilés contre les murs. Pourtant, cette pièce impersonnelle devient peu à peu une maison de fortune. La porte s’ouvre. «Salut!» Mathieu Jaton vient saluer l’étoile avant son concert. Une accolade, quelques mots, des remerciements. Puis le directeur du Montreux Jazz Festival s’éclipse aussi discrètement qu’il est arrivé. Autour de Naïka, une dizaine de personnes poursuivent leurs préparatifs. Ou plutôt... veillent sur elle.
            </p>
          </StorySection>

          <StorySection
           image="images/naika/_F3_4896.webp"
            imagePosition="center 35%"
            imagePositionMobile="80% 35%"
            align="left"
            veil="left"
          >
            <p className={P}>
             Marta, sa manageuse, anticipe le moindre besoin. Raf orchestre les déplacements avec un calme désarmant. Plus loin, Lorr et Mateus peaufinent une dernière fois la scénographie pendant que Lucas affine les lumières. Dans un coin de la loge, Alix fait rebondir distraitement ses baguettes sur sa cuisse, Emile gratte des accords, Sami pianote machinalement sur un clavier éteint. Clément plaisante avec Tibo. Noémie, caméra à la main, immortalise ces instants que le public ne peut vivre qu’à bonne distance.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_5206.webp"
            imagePosition="center 30%"
            imagePositionMobile="78% 30%"
            align="left"
            veil="left"
          >
            <p className={P}>
              Ici, personne n’a l’air de diriger. Pourtant, chacun connaît sa place. Le repas arrive, la concentration cède la place aux rires. Un steak bien cuit. Du riz. Naïka observe son assiette. «Je ne veux pas voir le sang de l’animal. J’aime la viande comme un pneu!» Elle aperçoit des carottes. «Lorr sait pourtant que je n’aime pas les légumes...» Noémie pouffe: «C’est moi! Je pensais que ça te ferait du bien.»
            </p>
          </StorySection>

          {/* ==============================================
              CHAPITRE — À la recherche de son chez-soi
              ============================================== */}
          <StorySection
            id="chez-soi"
            image="images/naika/_F3_5427.webp"
            imagePosition="center 30%"
            imagePositionMobile="65% 30%"
            align="left"
            width="wide"
            veil="left"
          >
            {/* <StoryKicker>Chapitre 2</StoryKicker> */}
            <StoryHeading>À la recherche de son chez-soi</StoryHeading>
            <p className={P}>
             Une maquilleuse s’approche. «Tu veux des paillettes?» Les yeux de Naïka brillent. «Bien sûr! On est à Montreux.» Cette «hypersensible» aux hautes murailles ne tarde pourtant pas à se confier à nous. Son soutien à la Palestine, explique-t-elle, naît de l’effroi que lui inspire la violence du monde. Une phrase s’impose sans qu’elle y pense: «Chez moi, ce sont les autres.» Sa mère haïtienne d’origine libanaise et palestino-syrienne lui a transmis le goût de la mode. 
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F2_9839.webp"
            imagePosition="left center"
            imagePositionMobile="58% 30%"
            align="left"
            veil="left"
          >
            <p className={P}>
              Créatrice de vêtements, elle l’emmenait chaque jour après l’école dans sa boutique. Les tissus devenaient des terrains de jeu, les cabines d’essayage des coulisses avant l’heure. Plus loin encore, en Haïti, ses grands-parents tenaient un magasin de tissus. Entre les rouleaux d’étoffe, la petite fille découpait, assemblait, imaginait des costumes avant d’organiser des défilés et de petits concerts devant toute la famille.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_5478.webp"
            imagePosition="center 30%"
            imagePositionMobile="40% 30%"
            align="left"
            veil="left"
            veilStr={1}
          >
            <p className={P}>
              Son père, un Français né et élevé à Madagascar, parlait un autre langage: celui des chiffres. Ancien professionnel de la finance, il a quitté son métier lorsque la musique a commencé à prendre toute la place. Aujourd’hui, il veille sur les comptes de sa fille. «Il a le plus grand cœur que je connaisse», souffle-t-elle.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F2_0419.webp"
            imagePosition="right 35%"
            imagePositionMobile="41% 35%"
            align="right"
            veil="right"
          >
            <p className={P}>
              La trentaine entamée, les rêves sont restés ceux de l’enfant qu’elle était. «Je veux gagner un Grammy.» L’aveu fuse avec une simplicité désarmante. Puis viennent les autres envies: le cinéma, une griffe en hommage à sa mère, une fondation pour Haïti. Lorsqu’on oriente la discussion vers sa sphère privée et qu’on lui demande si elle partage sa vie avec quelqu’un, elle botte en touche: «Aujourd’hui, mon couple, c’est ma carrière.»
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_6045.webp"
            imagePosition="right top"
            imagePositionMobile="87% 35%"
            align="left"
            veil="left"
          >
            <p className={P}>
              Casablanca il y a deux jours. Montreux aujourd’hui. Paris dès demain.
              Les semaines finissent par se confondre. «J’avoue que je ne sais même pas
              quel jour on est…» Son ton se fait plus discret. Elle lâche: «Un jour,
              j’aimerais fonder une famille. Mais je ne sais même pas où je vivrai.»
              Elle qui enchaîne désormais les concerts à guichets fermés aux quatre coins du
              monde ignore dans quel pays elle bâtira son foyer.
            </p>
          </StorySection>

          {/* ==============================================
              CHAPITRE — Avant le succès, la galère
              ============================================== */}
          <StorySection
            id="galere"
            image="images/naika/_F3_5951.webp"
            imagePosition="right 50%"
            imagePositionMobile="30% 50%"
            align="right"
            veil="right"
            width="wide"
          >
            {/* <StoryKicker>Chapitre 3</StoryKicker> */}
            <StoryHeading>Avant le succès, la galère</StoryHeading>
            <p className={P}>
             Casablanca il y a deux jours. Montreux aujourd’hui. Paris dès demain. Les semaines finissent par se confondre. «J’avoue que je ne sais même pas quel jour on est...» Son ton se fait plus discret. Elle lâche: «Un jour, j’aimerais fonder une famille. Mais je ne sais même pas où je vivrai.» Elle qui enchaîne désormais les concerts à guichets fermés aux quatre coins du monde ignore dans quel pays elle bâtira son foyer.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_5877.webp"
            imagePosition="right 30%"
            imagePositionMobile="35% 30%"
            align="right"
            veil="right"
          >
            <p className={P}>
             Avant les salles combles, il y eut les bars presque vides. Les mariages. Les casinos. Les soirées d’entreprise. Un soir, à Los Angeles, elles étaient deux dans le public. Ses deux colocataires. «On était plus nombreux sur scène que dans la salle.» Elle en rit aujourd’hui. Ce soir-là pourtant, elle a chanté comme si une foule immense se dressait devant elle. Sur son avant-bras, trois lettres résument cette époque. «DIY». Do it yourself, autrement dit «fais-le toi-même». Elle tourne ses clips, fabrique ses décors, imagine ses costumes. Pour sa première tournée, elle peint pendant trois jours la vaste toile qui servira d’écrin à son univers. «Franchir toutes ces étapes, ça m’a rendue plus forte et plus déterminée», appuie-t-elle.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_6215.webp"
            imagePosition="left 35%"
            imagePositionMobile="70% 35%"
            align="left"
            veil="left"
          >
            <p className={P}>
              Le déclic? Son titre Sauce, sorti en 2021, est repéré par Apple qui l’utilise dans une publicité pour l’iPhone 12. Cette visibilité la fait décoller. L’argent gagné grâce au géant lui permet d’investir dans son projet. Des millions d’écoutes plus tard, quand on lui demande ce qui a changé son destin, elle ne cite ni la marque à la pomme ni Spotify, mais sa garde rapprochée. Un noyau dur qui l’accompagne partout depuis les bancs du Berklee College of Music, à Boston.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_6177.webp"
            imagePosition="center 45%"
            imagePositionMobile="52% 45%"
            align="left"
            veil="left"
          >
            <p className={P}>
              «Si on ne s’aimait pas, ce métier serait insupportable de sauter constamment d’un endroit à un autre.» Les mots flottent encore lorsqu’un régisseur annonce que le concert de Liniker touche à sa fin. La loge se vide d’un seul mouvement. Les musiciens rejoignent leurs instruments. Les derniers réglages s’enchaînent. On entend des vocalises puis le silence s’installe. Le noir se fait.
            </p>
          </StorySection>

          <StorySection
            image="images/naika/_F3_5917.webp"
            imagePosition="right 30%"
            imagePositionMobile="35% 30%"
            align="right"
            veil="right"
          >
            <p className={P}>
              Derrière son micro habillé de fleurs tropicales, il ne reste plus que Naïka. Les premières notes résonnent. Le Lab, plein à craquer, chavire avec elle. Une bonne heure passe. Les applaudissements s’éteignent à leur tour. Le manteau jaune retrouve le dossier d’une chaise. Les bottes vertigineuses sont retirées. Marta l’enlace et lui apporte un drapeau rouge à croix blanche ainsi qu’une montagne de photos et de vinyles à dédicacer. Les conversations reprennent exactement là où elles s’étaient arrêtées. Comme si les 2000 spectateurs n’avaient été qu’une parenthèse.
            </p>
          </StorySection>

          {/* ==============================================
              ÉPILOGUE
              ============================================== */}
          <StorySection
            id="epilogue"
            image="images/naika/_F3_6438.webp"
            imagePosition="center 40%"
            imagePositionMobile="55% 45%"
            align="right"
            veil="right"
          >
            <p className={P}>
             Après une courte nuit, plusieurs jours de repos. Avant un autre avion. Une autre affiche. Une autre ville. «J’ai tellement de chance... Mais si je ne m’arrête jamais, je finirai par casser», glisse-t-elle. Dehors, la nuit a repris ses droits sur la perle de la Riviera. Le soleil qui étincelait, une poignée d’heures plus tôt, sous les spots, s’est éteint. Pas celui de Naïka. Celui-là ne se lève ni dans un ciel ni sur une scène. Il éclaire les visages familiers qui s’engouffrent avec elle dans les aéroports, traversent les halls d’hôtel et l’accueillent chaque soir, au retour des applaudissements. Elle rêve d’un jour poser ses valises. Sa vie lui apprend, chaque matin, à les refaire.
            </p>
          </StorySection>

          {/* ==============================================
              SORTIE — dernier fond, tenu jusqu'aux crédits
              ============================================== */}
          <StorySection
            id="sortie"
            image="images/naika/IL29_NAIKA_MJF_1__F2_9759-FINAL.webp"
            imagePosition="right 35%"
            imagePositionMobile="56% 30%"
            align="center"
            height="short"
          >
            <></>
          </StorySection>

        </ImmersiveStory>

        {/* ==============================================
            CRÉDITS (effet glass, dans l'ambiance du format)
            ============================================== */}
        <div className="relative z-10 px-4 pb-16">
          <Credits theme="glass" items={STORY.credits.filter(credit => credit.inCredits)} />
        </div>

      </article>
    </>
  );
}
