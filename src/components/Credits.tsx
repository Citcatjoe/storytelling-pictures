interface CreditItem {
  name: string;
  produces: string;
  link?: string;
}

interface CreditsProps {
  items: CreditItem[];
  /** "light" (défaut): bloc gris clair historique. "glass": effet verre sur fond sombre. */
  theme?: "light" | "glass";
}

interface GroupedCredit {
  produces: string;
  people: { name: string; link?: string }[];
}

export function Credits({ items, theme = "light" }: CreditsProps) {
  if (!items || items.length === 0) return null;

  const glass = theme === "glass";

  // Regrouper les crédits qui partagent le même label "produces"
  const groupedItems = items.reduce<GroupedCredit[]>((acc, current) => {
    const existing = acc.find(item => item.produces === current.produces);
    const person = { name: current.name, link: current.link };
    if (existing) {
      existing.people.push(person);
    } else {
      acc.push({
        produces: current.produces,
        people: [person]
      });
    }
    return acc;
  }, []);

  return (
    <>
      {/* Mention: même gouttière que le filet et la box ci-dessous (max-w-[672px]
          mx-auto), sans quoi elle s'étalait sur toute la largeur du conteneur.
          Échelle réduite: elle accompagne les crédits, elle ne les annonce pas.
          En thème glass elle reste en revanche assez opaque (75%): contrairement
          à la box, elle n'a ni verre ni voile derrière elle — c'est du texte nu
          sur l'image de fond, qui peut être claire. La discrétion se joue donc
          sur l'échelle, pas sur l'opacité. */}
      <p
        className={`w-full max-w-[672px] mx-auto text-sm md:text-lg leading-relaxed font-light ${
          glass ? "text-white/85" : "text-gray-500"
        }`}
      >
        <span className="font-bold">Un article de «L'illustré» n°29</span><br></br><br></br>
        Cet article a été publié initialement dans le <a href="https://www.illustre.ch/" target="_blank" className="underline">n°29 de «L'illustré»</a>, paru en kiosque le 16 juillet 2026.
      </p>
      <hr className={`w-full max-w-[672px] mx-auto mt-6 md:mt-14 ${glass ? "border-white/15" : "border-gray-200"}`} />
      <div className={`w-full max-w-[672px] mx-auto mt-8 md:mt-16 text-lg p-8 ${glass ? "story-glass text-white" : "bg-gray-50"}`}>
        {groupedItems.map((group, idx) => (
          <div key={idx} className={idx === groupedItems.length - 1 ? "" : "mb-4"}>
            <div className={`font-bold ${glass ? "text-white" : "text-black"}`}>{group.produces}</div>
            {group.people.map((person, pIdx) => (
              <div key={pIdx} className={glass ? "text-white/70" : "text-gray-700"}>
                {person.link ? (
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline underline-offset-2 transition-colors ${glass ? "hover:text-white" : "hover:text-accent2"}`}
                  >
                    {person.name}
                  </a>
                ) : (
                  person.name
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
