"use client";

import { useEffect, useRef } from "react";

/**
 * Indicateur d'avancement de lecture: une ligne "or de scène" de 5px ancrée au
 * bas du viewport, dont la largeur suit la position de scroll dans le document
 * (0% en haut de la page, 100% en bas). scaleX plutôt que width: on anime une
 * transform (compositor), pas une propriété de layout.
 */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;

    const update = () => {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    update();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 h-[5px]" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-[var(--color-scene)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
