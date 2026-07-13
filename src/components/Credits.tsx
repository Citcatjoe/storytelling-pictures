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
      <hr className={`w-full max-w-[672px] mx-auto mt-16 ${glass ? "border-white/15" : "border-gray-200"}`} />
      <div className={`w-full max-w-[672px] mx-auto mt-16 text-lg p-8 ${glass ? "story-glass text-white" : "bg-gray-50"}`}>
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
