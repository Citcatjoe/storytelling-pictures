"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

// ---------------------------------------------------------------------------
// 🎬 ImmersiveStory — format "image first"
//
// Un fond d'écran fixe (plein viewport) qui cross-fade + léger Ken Burns
// au fil du scroll, et des sections de texte qui défilent à l'avant-plan.
//
// Chaque <StorySection> déclare son image de fond: quand la section atteint
// le centre du viewport, l'arrière-plan transitionne vers cette image.
// Implémentation 100% native (IntersectionObserver), zéro dépendance.
//
// Usage:
//   <ImmersiveStory>
//     <StorySection image="images/placeholders/x.jpg" align="left" variant="panel">
//       <p>…</p>
//     </StorySection>
//   </ImmersiveStory>
// ---------------------------------------------------------------------------

type BackgroundConfig = {
  /** Chemin de l'image (relatif à /public), ex: "images/placeholders/stromae_2014_a.jpg" */
  src: string;
  /** object-position desktop, ex: "center 20%" ou "70% center" (défaut: "50% 50%") */
  position?: string;
  /** object-position mobile — permet de recadrer l'image sur petit écran (défaut: position desktop) */
  positionMobile?: string;
};

type RegisterFn = (el: HTMLElement, bg: BackgroundConfig) => () => void;

const StoryContext = createContext<RegisterFn | null>(null);

const bgKey = (bg: BackgroundConfig) =>
  `${bg.src}|${bg.position ?? ""}|${bg.positionMobile ?? ""}`;

// ---------------------------------------------------------------------------
// Conteneur principal: gère le fond fixe + l'observation du scroll
// ---------------------------------------------------------------------------

interface ImmersiveStoryProps {
  children: ReactNode;
  className?: string;
  /** Opacité du voile global posé sur les images (lisibilité). 0 = aucun voile. */
  scrim?: "none" | "light" | "medium";
}

export function ImmersiveStory({ children, className = "", scrim = "light" }: ImmersiveStoryProps) {
  const [backgrounds, setBackgrounds] = useState<BackgroundConfig[]>([]);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [mountedKeys, setMountedKeys] = useState<Set<string>>(() => new Set());
  const sectionsRef = useRef(new Map<HTMLElement, BackgroundConfig>());
  const backgroundsRef = useRef<BackgroundConfig[]>([]);
  const activeKeyRef = useRef<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Active une image: cross-fade + montage progressif (image courante,
  // précédente et suivante — la suivante est ainsi préchargée à l'avance)
  const activate = useCallback((key: string) => {
    activeKeyRef.current = key;
    setActiveKey(key);
    setMountedKeys((prev) => {
      const next = new Set(prev);
      next.add(key);
      const list = backgroundsRef.current;
      const idx = list.findIndex((b) => bgKey(b) === key);
      if (idx >= 0 && list[idx + 1]) next.add(bgKey(list[idx + 1]));
      if (idx > 0) next.add(bgKey(list[idx - 1]));
      return next.size === prev.size ? prev : next;
    });
  }, []);

  const register = useCallback<RegisterFn>((el, bg) => {
    sectionsRef.current.set(el, bg);

    // Liste ordonnée (ordre du document) des images uniques
    const key = bgKey(bg);
    if (!backgroundsRef.current.some((b) => bgKey(b) === key)) {
      backgroundsRef.current = [...backgroundsRef.current, bg];
      setBackgrounds(backgroundsRef.current);
    }

    // Observer unique: déclenche quand une section traverse la bande
    // centrale du viewport (10% de hauteur autour du centre)
    if (!observerRef.current && typeof window !== "undefined") {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const cfg = sectionsRef.current.get(entry.target as HTMLElement);
              if (cfg) activate(bgKey(cfg));
            }
          }
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
    }
    observerRef.current?.observe(el);

    // La première section enregistrée devient le fond initial
    if (activeKeyRef.current === null) activate(key);

    return () => {
      sectionsRef.current.delete(el);
      observerRef.current?.unobserve(el);
    };
  }, [activate]);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  const scrimClass =
    scrim === "none"
      ? null
      : scrim === "medium"
      ? "bg-gradient-to-b from-black/50 via-black/25 to-black/60"
      : "bg-gradient-to-b from-black/40 via-black/10 to-black/50";

  return (
    <StoryContext.Provider value={register}>
      {/* ===== Arrière-plan fixe ===== */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black" aria-hidden="true">
        {backgrounds.map((bg) => {
          const key = bgKey(bg);
          if (!mountedKeys.has(key)) return null;
          const isActive = key === activeKey;
          return (
            <img
              key={key}
              src={bg.src}
              alt=""
              draggable={false}
              decoding="async"
              className={`story-bg-img absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                isActive ? "opacity-100 story-bg-active" : "opacity-0"
              }`}
              style={
                {
                  "--bg-pos": bg.position ?? "50% 50%",
                  "--bg-pos-m": bg.positionMobile ?? bg.position ?? "50% 50%",
                } as CSSProperties
              }
            />
          );
        })}
        {scrimClass && <div className={`absolute inset-0 ${scrimClass}`} />}
      </div>

      {/* ===== Contenu à l'avant-plan ===== */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </StoryContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// StorySection — un "moment" de la story lié à une image de fond
// ---------------------------------------------------------------------------

interface StorySectionProps {
  /** Image de fond associée à cette section */
  image: string;
  /** object-position desktop, ex: "center 20%" / "70% center" */
  imagePosition?: string;
  /** object-position mobile — pour recadrer le sujet sur petit écran */
  imagePositionMobile?: string;
  /** Position du bloc texte en desktop (mobile: toujours centré) */
  align?: "left" | "center" | "right";
  /** Habillage du bloc texte: "glass" (défaut) ou "plain" (texte nu, ex: hero) */
  variant?: "glass" | "plain";
  /** Hauteur de la section = espace de respiration entre les blocs */
  height?: "short" | "normal" | "tall";
  /** Largeur max du bloc texte */
  width?: "narrow" | "medium" | "wide";
  /** Alignement du texte à l'intérieur du bloc (défaut: left, ou center si align="center") */
  textAlign?: "left" | "center" | "right";
  /** Ancrage vertical du bloc texte dans la section */
  vAlign?: "center" | "bottom";
  /**
   * Voile local dégradé: transparent en haut, dense au pied. Contrairement au scrim global
   * — qui est fixe et ternit toutes les images de la story — il défile avec la section.
   * L'image respire en haut pendant que le texte posé bas garde sa lisibilité.
   */
  veil?: boolean;
  id?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

const HEIGHT_CLASSES: Record<NonNullable<StorySectionProps["height"]>, string> = {
  short: "min-h-[100svh]",
  normal: "min-h-[150vh]",
  tall: "min-h-[200vh]",
};

const V_ALIGN_CLASSES: Record<NonNullable<StorySectionProps["vAlign"]>, string> = {
  center: "justify-center",
  bottom: "justify-end",
};

const WIDTH_CLASSES: Record<NonNullable<StorySectionProps["width"]>, string> = {
  narrow: "max-w-md",
  medium: "max-w-xl",
  wide: "max-w-2xl",
};

const ALIGN_CLASSES: Record<NonNullable<StorySectionProps["align"]>, string> = {
  left: "md:justify-start",
  center: "md:justify-center",
  right: "md:justify-end",
};

export function StorySection({
  image,
  imagePosition,
  imagePositionMobile,
  align = "center",
  variant = "glass",
  height = "normal",
  width = "medium",
  textAlign,
  vAlign = "center",
  veil = false,
  id,
  className = "",
  contentClassName = "",
  children,
}: StorySectionProps) {
  const register = useContext(StoryContext);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!register || !ref.current) return;
    return register(ref.current, {
      src: image,
      position: imagePosition,
      positionMobile: imagePositionMobile,
    });
  }, [register, image, imagePosition, imagePositionMobile]);

  const resolvedTextAlign = textAlign ?? (align === "center" ? "center" : "left");

  const variantClasses =
    variant === "glass" ? "story-glass p-6 md:p-9" : "story-text-shadow";

  return (
    <section
      id={id}
      ref={ref}
      className={`relative flex flex-col px-5 py-24 md:px-[7%] ${V_ALIGN_CLASSES[vAlign]} ${HEIGHT_CLASSES[height]} ${className}`}
    >
      {veil && <div className="story-veil pointer-events-none" aria-hidden="true" />}
      <div className={`relative flex w-full max-w-screen-2xl mx-auto justify-center ${ALIGN_CLASSES[align]}`}>
        <div
          className={`w-full text-white ${WIDTH_CLASSES[width]} ${variantClasses} text-${resolvedTextAlign} ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Petits éléments d'habillage réutilisables
// ---------------------------------------------------------------------------

/** Surtitre / étiquette (ex: «Interview exclusive») */
export function StoryKicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/80 mb-4 ${className}`}>
      {children}
    </p>
  );
}

/** Intertitre de chapitre */
export function StoryHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-5xl font-bold leading-tight mb-6 ${className}`}>
      {children}
    </h2>
  );
}

/**
 * Repère de scroll. Vit dans le flux du bloc texte (et non en absolute au centre du
 * viewport), pour se poser au bout de la ligne de signature sans jamais la heurter.
 */
export function ScrollCue({ label = "Faites défiler" }: { label?: string }) {
  return (
    <span className="story-cue">
      <span>{label}</span>
      <svg
        className="story-cue__arrow"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </span>
  );
}
