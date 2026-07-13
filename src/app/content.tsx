import type { Metadata, Viewport } from "next";
import { STORY, ABSOLUTE_SOCIAL_URL } from "@/config/variables";
import { Header } from "@/components/Header";
import { Credits } from "@/components/Credits";
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

        <ImmersiveStory scrim="light">

          {/* ==============================================
              HERO — titre + chapô
              ============================================== */}
          <StorySection
            id="hero"
            image="images/placeholders/stephan_eicher_2019_a.jpg"
            imagePosition="center 35%"
            imagePositionMobile="center 35%"
            align="left"
            variant="plain"
            height="short"
            width="wide"
            vAlign="bottom"
            veil
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
              Pendant près de neuf heures, L&rsquo;illustré a suivi Naïka dans les coulisses
              de sa première au Montreux Jazz Festival. Derrière les paillettes, le portrait
              d&rsquo;une chanteuse mondiale en quête d&rsquo;un chez-soi. Rencontre intime avec
              la jeune artiste franco-haïtienne aux millions d&rsquo;écoutes.
            </p>

            <div className="story-hero__footer">
              <span className="story-hero__byline">
                <span className="story-hero__flag">Interview exclusive</span>
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
            image="images/placeholders/noir_desir_2022_b.jpg"
            imagePosition="center 30%"
            imagePositionMobile="55% 30%"
            align="left"
          >
            <p className={P}>
              Le crépuscule enveloppe Montreux. Derrière un rideau noir, un autre soleil
              s&rsquo;apprête à se lever. Des cris de joie s&rsquo;échappent de la loge voisine.
              Les musiciens de la chanteuse brésilienne Liniker vivent les dernières minutes
              d&rsquo;Argentine-Égypte avec la passion du football. À quelques mètres de là,
              un tout autre rituel se joue.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/noir_desir_2022_x.jpg"
            imagePosition="left center"
            imagePositionMobile="20% center"
            align="right"
          >
            <p className={P}>
              Naïka ferme les yeux. Les voix s&rsquo;éteignent d&rsquo;elles-mêmes. Une brève
              prière avec les siens. Lorsqu&rsquo;elle les rouvre, son visage s&rsquo;éclaire.
              La native de Miami aux lèvres carmin nous attrape la main dans un «check» furtif
              avant de s&rsquo;éloigner vers la scène, d&rsquo;où la clameur se fait de plus
              en plus forte.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/stromae_2014_c.jpg"
            imagePosition="center 25%"
            imagePositionMobile="center 25%"
            align="left"
          >
            <p className={P}>
              Juste avant de se présenter à ses fans, deux membres de son équipe ajustent encore
              sa tenue jaune. Une main défroisse un pan de jupe. Une autre replace délicatement
              une manchette. Ça y est! Le long manteau glisse de ses épaules. Son bustier
              constellé de strass s&rsquo;embrase sous les projecteurs. De longues bandes de
              tissu dansent autour de jambes interminables tandis que d&rsquo;impressionnantes
              bottes frangées remontent jusqu&rsquo;aux cuisses.
            </p>
          </StorySection>

          {/* ==============================================
              CHAPITRE — Dans les coulisses d'une star
              ============================================== */}
          <StorySection
            id="coulisses"
            image="images/placeholders/charles_trenet_1989_b.jpg"
            imagePosition="center center"
            imagePositionMobile="40% center"
            align="center"
            width="wide"
            height="tall"
          >
            <StoryKicker>Chapitre 1</StoryKicker>
            <StoryHeading>Dans les coulisses d&rsquo;une star</StoryHeading>
            <p className={`${P} md:text-left`}>
              Plus tôt dans l&rsquo;après-midi, à 15h20, la même femme foulait cette scène en
              jean bleu, blouse blanche presque transparente, tongs aux pieds et queue-de-cheval.
              Le Montreux Jazz Lab était alors vide. Les musiciens répétaient. Seuls les échos
              du soundcheck répondaient au clapotis du Léman. Pendant près de neuf heures ce
              mardi 7 juillet, du premier accord jusqu&rsquo;à son retour en loge après le
              concert, L&rsquo;illustré a suivi en exclusivité Naïka dans les coulisses de sa
              première au Montreux Jazz Festival. À 31 ans, Naïka est un joyau de la pop
              cosmopolite. Plus de trois millions d&rsquo;auditeurs mensuels sur Spotify et
              1,3 million d&rsquo;abonnés sur Instagram. Un premier album, Eclesia, et un tube,
              One Track Mind, hymne féministe aux accents caribéens devenu viral qui lui a
              offert une renommée internationale. En français, en anglais comme en créole
              haïtien, elle chante une identité à l&rsquo;image de son parcours: multiple.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/ravi_shankar_2005_a.jpg"
            imagePosition="center 30%"
            imagePositionMobile="75% 30%"
            align="left"
          >
            <p className={P}>
              Au cœur de l&rsquo;après-midi, cette célébrité mondiale déambule sur les quais
              comme n&rsquo;importe quelle festivalière. Mais son nom la précède.
              «C&rsquo;est Naïka…» Le murmure passe d&rsquo;une oreille à l&rsquo;autre avant
              de s&rsquo;évanouir. Les regards s&rsquo;illuminent. Personne ne s&rsquo;approche.
              Ni téléphone tendu. Ni autographe réclamé. Seulement cette élégante retenue dont
              le public suisse semble avoir le secret.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/jamel_debbouze_2004_x.jpg"
            imagePosition="center 30%"
            imagePositionMobile="70% 30%"
            align="left"
          >
            <p className={P}>
              L&rsquo;après-midi s&rsquo;écoule au rythme des interviews. Radio et presse
              écrite. Blick lui fait découvrir le thé froid Migros, saveur pêche ou citron.
              Les deux journalistes courent ensuite lui acheter un carac «pour du réconfort
              après l&rsquo;effort». Elle éclate de rire, remercie, puis disparaît déjà vers un
              autre rendez-vous. À chaque entretien revient la même question. Qui est Naïka?
              Pour elle, Eclesia est une manière d&rsquo;offrir au public les différentes
              facettes d&rsquo;une femme qui a appris à ne plus choisir entre ses langues,
              ses cultures et les pays qui l&rsquo;ont construite.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/stephan_eicher_2019_b.jpg"
            imagePosition="center center"
            imagePositionMobile="45% center"
            align="right"
          >
            <p className={P}>
              Sa loge n&rsquo;a rien de spectaculaire: des miroirs cerclés d&rsquo;ampoules,
              des portants de costumes, un canapé, un fauteuil, un frigo et des flight-cases
              empilés contre les murs. Pourtant, cette pièce impersonnelle devient peu à peu
              une maison de fortune. La porte s&rsquo;ouvre. «Salut!» Matthieu Jaton vient
              saluer l&rsquo;étoile avant son concert. Une accolade, quelques mots, des
              remerciements. Puis le directeur du Montreux Jazz Festival s&rsquo;éclipse aussi
              discrètement qu&rsquo;il est arrivé. Autour de Naïka, une dizaine de personnes
              poursuivent leurs préparatifs. Ou plutôt… veillent sur elle.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/stromae_2014_a.jpg"
            imagePosition="center 40%"
            imagePositionMobile="60% 40%"
            align="center"
          >
            <p className={P}>
              Marta, sa manageuse, anticipe le moindre besoin. Raf orchestre les déplacements
              avec un calme désarmant. Plus loin, Lorr et Mateus peaufinent une dernière fois
              la scénographie pendant que Lucas affine les lumières. Dans un coin de la loge,
              Alix fait rebondir distraitement ses baguettes sur sa cuisse, Émile gratte des
              accords, Sami pianote machinalement sur un clavier éteint. Clément plaisante avec
              Tibo. Noémie, caméra à la main, immortalise ces instants que le public ne peut
              vivre qu&rsquo;à bonne distance.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/joan_baez_1982_a.jpg"
            imagePosition="center 30%"
            imagePositionMobile="35% 30%"
            align="right"
          >
            <p className={P}>
              Ici, personne n&rsquo;a l&rsquo;air de diriger. Pourtant, chacun connaît sa place.
              Le repas arrive, la concentration cède la place aux rires. Un steak bien cuit.
              Du riz. Naïka observe son assiette. «Je ne veux pas voir le sang de l&rsquo;animal.
              J&rsquo;aime la viande comme un pneu!» Elle aperçoit des carottes. «Lorr sait
              pourtant que je n&rsquo;aime pas les légumes…» Noémie pouffe: «C&rsquo;est moi!
              Je pensais que ça te ferait du bien.»
            </p>
          </StorySection>

          {/* ==============================================
              CHAPITRE — À la recherche de son chez-soi
              ============================================== */}
          <StorySection
            id="chez-soi"
            image="images/placeholders/ravi_shankar_2005_c.jpg"
            imagePosition="left center"
            imagePositionMobile="15% center"
            align="right"
            width="wide"
            height="tall"
          >
            <StoryKicker>Chapitre 2</StoryKicker>
            <StoryHeading>À la recherche de son chez-soi</StoryHeading>
            <p className={P}>
              Une maquilleuse s&rsquo;approche. «Tu veux des paillettes?» Les yeux de Naïka
              brillent. «Bien sûr! On est à Montreux.» Cette «hypersensible» aux hautes
              murailles ne tarde pourtant pas à se confier à nous. Son soutien à la Palestine,
              explique-t-elle, naît de l&rsquo;effroi que lui inspire la violence du monde.
              Une phrase revient presque sans qu&rsquo;elle y pense. «Chez moi, ce sont les
              autres.» Sa mère haïtienne d&rsquo;origine libanaise et palestino-syrienne lui a
              transmis le goût de la mode. Créatrice de vêtements, elle l&rsquo;emmenait chaque
              jour après l&rsquo;école dans sa boutique. Les tissus devenaient des terrains de
              jeu, les cabines d&rsquo;essayage des coulisses avant l&rsquo;heure. Plus loin
              encore, en Haïti, ses grands-parents tenaient un magasin de tissus. Entre les
              rouleaux d&rsquo;étoffe, la petite fille découpait, assemblait, imaginait des
              costumes avant d&rsquo;organiser des défilés et de petits concerts devant toute
              la famille.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/paul_simon_1991.jpg"
            imagePosition="center 25%"
            imagePositionMobile="center 25%"
            align="center"
          >
            <p className={P}>
              Son père, un Français né et élevé à Madagascar, parlait un autre langage: celui
              des chiffres. Ancien professionnel de la finance, il a quitté son métier lorsque
              la musique a commencé à prendre toute la place. Aujourd&rsquo;hui, il veille sur
              les comptes de sa fille. «Il a le plus grand cœur que je connaisse», souffle-t-elle.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/stromae_2014_f.jpg"
            imagePosition="center 30%"
            imagePositionMobile="60% 30%"
            align="left"
          >
            <p className={P}>
              La trentaine entamée, les rêves sont restés ceux de l&rsquo;enfant qu&rsquo;elle
              était. «Je veux gagner un Grammy.» La réponse fuse avec une simplicité désarmante.
              Puis viennent les autres envies: le cinéma, une griffe en hommage à sa mère, une
              fondation pour Haïti. Lorsqu&rsquo;on dévie la discussion vers sa vie privée et
              qu&rsquo;on lui demande si elle partage sa vie avec quelqu&rsquo;un, elle botte
              en touche: «Aujourd&rsquo;hui, mon couple, c&rsquo;est ma carrière.»
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/stromae_2014_e.jpg"
            imagePosition="center 40%"
            imagePositionMobile="30% 40%"
            align="right"
          >
            <p className={P}>
              Casablanca il y a deux jours. Montreux aujourd&rsquo;hui. Paris dès demain.
              Les semaines finissent par se confondre. «J&rsquo;avoue que je ne sais même pas
              quel jour on est…» Son ton se fait plus discret. Elle lâche: «Un jour,
              j&rsquo;aimerais fonder une famille. Mais je ne sais même pas où je vivrai.»
              Elle qui enchaîne désormais les concerts à guichets fermés aux quatre coins du
              monde ignore dans quel pays elle bâtira son foyer.
            </p>
          </StorySection>

          {/* ==============================================
              CHAPITRE — Avant le succès, la galère
              ============================================== */}
          <StorySection
            id="galere"
            image="images/placeholders/mano_negra_1989.jpg"
            imagePosition="center 30%"
            imagePositionMobile="center 30%"
            align="center"
            width="wide"
            height="tall"
          >
            <StoryKicker>Chapitre 3</StoryKicker>
            <StoryHeading>Avant le succès, la galère</StoryHeading>
            <p className={`${P} md:text-left`}>
              Avant les salles combles, il y eut les bars presque vides. Les mariages.
              Les casinos. Les soirées d&rsquo;entreprise. Un soir, à Los Angeles, elles
              étaient deux dans le public. Ses deux colocataires. «On était plus nombreux sur
              scène que dans la salle.» Elle en rit aujourd&rsquo;hui. Ce soir-là pourtant,
              elle a chanté comme si une foule immense se dressait devant elle. Sur son
              avant-bras, trois lettres résument cette époque. DIY. Do It Yourself, autrement
              dit «fais-le toi-même». Elle tourne ses clips, fabrique ses décors, imagine ses
              costumes. Pour sa première tournée, elle peint pendant trois jours l&rsquo;immense
              toile qui lui servira de fond de scène. «Traverser toutes ces étapes, ça
              m&rsquo;a rendue plus forte et plus déterminée», appuie-t-elle.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/jamel_debbouze_2004_a.jpg"
            imagePosition="center 30%"
            imagePositionMobile="30% 30%"
            align="right"
          >
            <p className={P}>
              Le déclic? Son titre Sauce, sorti en 2021, est repéré par Apple qui
              l&rsquo;utilise dans une publicité pour l&rsquo;iPhone 12. Cette visibilité la
              fait décoller. L&rsquo;argent gagné grâce au géant lui permet d&rsquo;investir
              dans son projet. Des millions d&rsquo;écoutes plus tard, quand on lui demande ce
              qui a changé sa vie, elle ne cite ni la marque à la pomme ni Spotify, mais son
              équipe. Le noyau dur l&rsquo;accompagne partout depuis les bancs de la Berklee
              College of Music, à Boston.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/noir_desir_2022_a.jpg"
            imagePosition="center 30%"
            imagePositionMobile="45% 30%"
            align="left"
          >
            <p className={P}>
              «Si on ne s&rsquo;aimait pas, ce métier serait insupportable de sauter
              constamment d&rsquo;un endroit à un autre.» Les mots résonnent encore
              lorsqu&rsquo;un régisseur annonce que le concert de Liniker touche à sa fin.
              La loge se vide presque d&rsquo;un seul mouvement. Les musiciens rejoignent
              leurs instruments. Les derniers réglages s&rsquo;enchaînent. On entend des
              vocalises puis le silence s&rsquo;installe. Le noir se fait.
            </p>
          </StorySection>

          <StorySection
            image="images/placeholders/stromae_2014_d.jpg"
            imagePosition="center 35%"
            imagePositionMobile="70% 35%"
            align="left"
          >
            <p className={P}>
              Derrière son micro fleuri, il ne reste plus que Naïka. Les premières notes
              résonnent. Le Lab, plein à craquer, chavire avec elle. Une bonne heure passe.
              Les applaudissements s&rsquo;éteignent à leur tour. Le manteau jaune retrouve le
              dossier d&rsquo;une chaise. Les bottes vertigineuses sont retirées. Marta
              l&rsquo;enlace et lui amène un drapeau rouge à croix blanche ainsi qu&rsquo;une
              montagne de photos à dédicacer. Les conversations reprennent exactement là où
              elles s&rsquo;étaient arrêtées. Comme si les 2000 spectateurs n&rsquo;avaient
              été qu&rsquo;une parenthèse.
            </p>
          </StorySection>

          {/* ==============================================
              ÉPILOGUE
              ============================================== */}
          <StorySection
            id="epilogue"
            image="images/placeholders/joan_baez_1982_x.jpg"
            imagePosition="left center"
            imagePositionMobile="15% center"
            align="right"
          >
            <p className={P}>
              Après une courte nuit, plusieurs jours de repos. Avant un autre avion. Une autre
              scène. Une autre ville. «J&rsquo;ai tellement de chance... Mais si je ne
              m&rsquo;arrête jamais, je finirai par casser», glisse-t-elle. Dehors, la nuit a
              repris ses droits sur la Perle de la Riviera. Les festivaliers quittent
              progressivement les quais. Le soleil qui étincelait une poignée d&rsquo;heures
              plus tôt sous les spots s&rsquo;est éteint. Pas celui de Naïka. Celui-là ne se
              lève ni dans un ciel, ni sur une scène. Il éclaire les visages qui
              s&rsquo;engouffrent avec elle dans les aéroports, l&rsquo;attendent et
              l&rsquo;accueillent, chaque soir, au retour des applaudissements. Elle rêve
              d&rsquo;un jour poser ses valises. Sa vie lui apprend, chaque matin, à les
              refaire. Pour l&rsquo;instant, Naïka a fait son choix.
            </p>
          </StorySection>

        </ImmersiveStory>

        {/* ==============================================
            CRÉDITS (effet glass, dans l'ambiance du format)
            ============================================== */}
        <div className="relative z-10 px-4 pb-16">
          <Credits theme="glass" items={STORY.credits.filter(credit => credit.inCredits)} />

          <div className="story-glass p-4 mt-6 w-full max-w-[672px] mx-auto">
            <p className="font-mono text-xs text-white/60">
              Images d&rsquo;illustration provisoires (placeholders) — à remplacer par la
              série photo de l&rsquo;interview.
            </p>
          </div>
        </div>

      </article>
    </>
  );
}
