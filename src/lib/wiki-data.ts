export interface WikiArticle {
  title: string;
  href: string;
  description: string;
  tags: string[];
  sections: string[];
  hasContent: boolean; // true = full content, false = placeholder
}

export interface WikiCategory {
  id: string;
  title: string;
  icon: string;
  articles: WikiArticle[];
}

export const WIKI_CATEGORIES: WikiCategory[] = [
  {
    id: "astrologie",
    title: "Astrologie",
    icon: "/images/icons/siderisch.svg",
    articles: [
      {
        title: "Siderische Astrologie",
        href: "/wiki/siderische-astrologie",
        description: "Das astronomisch korrekte Sternzeichen-System mit Lahiri-Ayanamsa.",
        tags: ["Astrologie", "Siderisch", "Vedisch", "Anfänger"],
        sections: ["Was ist siderische Astrologie?", "Tropisch vs. Siderisch", "Die 13 siderischen Zeichen", "Ayanamsa erklärt", "Ophiuchus", "Geschichte", "Berechnung", "FAQ"],
        hasContent: true,
      },
      {
        title: "Tropische Astrologie",
        href: "/wiki/tropische-astrologie",
        description: "Das westliche Standardsystem — und warum es astronomisch nicht mehr stimmt.",
        tags: ["Astrologie", "Tropisch", "Westlich", "Anfänger"],
        sections: ["Was ist tropische Astrologie?", "Ursprung und Geschichte", "Die Jahreszeiten-Logik", "Kritik: Präzession", "Tropisch vs. Siderisch"],
        hasContent: false,
      },
      {
        title: "Die 12 Sternzeichen",
        href: "/wiki/sternzeichen",
        description: "Alle Sternzeichen im Überblick — Eigenschaften, Elemente, Herrscher.",
        tags: ["Astrologie", "Sternzeichen", "Anfänger"],
        sections: ["Übersicht aller Zeichen", "Die Elemente", "Die Qualitäten", "Herrscherplaneten", "Siderisch vs. Tropisch"],
        hasContent: false,
      },
      {
        title: "Planeten in der Astrologie",
        href: "/wiki/planeten",
        description: "Die 10 Planeten und ihre Bedeutung in deinem Geburtshoroskop.",
        tags: ["Astrologie", "Planeten", "Fortgeschritten"],
        sections: ["Die persönlichen Planeten", "Die sozialen Planeten", "Die transpersonalen Planeten", "Planeten in Zeichen", "Retrograde Planeten"],
        hasContent: false,
      },
      {
        title: "Die 12 Häuser",
        href: "/wiki/haeuser",
        description: "Die 12 astrologischen Häuser — deine Lebensbereiche im Horoskop.",
        tags: ["Astrologie", "Häuser", "Fortgeschritten"],
        sections: ["Was sind Häuser?", "Die 12 Häuser im Überblick", "Häusersysteme", "Planeten in Häusern", "Leere Häuser"],
        hasContent: false,
      },
      {
        title: "Aspekte erklärt",
        href: "/wiki/aspekte",
        description: "Konjunktion, Trigon, Quadrat — wie Planeten miteinander kommunizieren.",
        tags: ["Astrologie", "Aspekte", "Fortgeschritten"],
        sections: ["Was sind Aspekte?", "Die 5 Hauptaspekte", "Harmonische vs. Spannungsaspekte", "Orbis und Exaktheit", "Aspekte deuten"],
        hasContent: false,
      },
      {
        title: "Aszendent, Mond & Sonne",
        href: "/wiki/aszendent-mond-sonne",
        description: "Die drei wichtigsten Positionen in deinem Chart — einfach erklärt.",
        tags: ["Astrologie", "Anfänger", "Aszendent", "Mond", "Sonne"],
        sections: ["Die große Drei", "Das Sonnenzeichen", "Das Mondzeichen", "Der Aszendent", "Zusammenspiel"],
        hasContent: false,
      },
      {
        title: "Was ist Präzession?",
        href: "/wiki/praezession",
        description: "Warum sich der Sternenhimmel verschiebt — und was das für dein Zeichen bedeutet.",
        tags: ["Astrologie", "Wissenschaft", "Präzession", "Anfänger"],
        sections: ["Das Phänomen", "24 Grad Verschiebung", "Auswirkung auf Sternzeichen", "Geschichte der Entdeckung", "Siderisch als Lösung"],
        hasContent: false,
      },
    ],
  },
  {
    id: "numerologie",
    title: "Numerologie",
    icon: "/images/icons/numerologie.svg",
    articles: [
      {
        title: "Numerologie Grundlagen",
        href: "/wiki/numerologie",
        description: "Was deine Geburtszahlen über deinen Lebensweg verraten.",
        tags: ["Numerologie", "Anfänger", "Lebenszahl"],
        sections: ["Was ist Numerologie?", "Die Lebenszahl berechnen", "Die 9 Lebenszahlen", "Meisterzahlen", "Geschichte", "FAQ"],
        hasContent: true,
      },
      {
        title: "Alle Lebenszahlen (1-9)",
        href: "/wiki/lebenszahlen",
        description: "Die Bedeutung jeder Lebenszahl — Stärken, Herausforderungen, Lebensweg.",
        tags: ["Numerologie", "Lebenszahl", "Anfänger"],
        sections: ["Lebenszahl 1", "Lebenszahl 2", "Lebenszahl 3", "Lebenszahl 4", "Lebenszahl 5", "Lebenszahl 6", "Lebenszahl 7", "Lebenszahl 8", "Lebenszahl 9"],
        hasContent: false,
      },
      {
        title: "Meisterzahlen (11, 22, 33)",
        href: "/wiki/meisterzahlen",
        description: "Die seltenen Meisterzahlen und ihre besondere spirituelle Bedeutung.",
        tags: ["Numerologie", "Meisterzahlen", "Fortgeschritten"],
        sections: ["Was sind Meisterzahlen?", "Meisterzahl 11", "Meisterzahl 22", "Meisterzahl 33", "Erkennung und Deutung"],
        hasContent: false,
      },
    ],
  },
  {
    id: "aegyptisch",
    title: "Ägyptische Mystik",
    icon: "/images/icons/dekane.svg",
    articles: [
      {
        title: "Ägyptische Dekane",
        href: "/wiki/aegyptische-dekane",
        description: "4.000 Jahre alte Weisheit — dein kosmischer Wächter aus dem Alten Ägypten.",
        tags: ["Ägypten", "Dekane", "Mystik", "Anfänger"],
        sections: ["Was sind Dekane?", "Die 36 Dekane", "Ägyptische Gottheiten", "Dekan-System erklärt", "Geschichte", "FAQ"],
        hasContent: true,
      },
      {
        title: "Die Gottheiten",
        href: "/wiki/gottheiten",
        description: "Die 36 ägyptischen Götter und ihre Zuordnung zu den Dekanen.",
        tags: ["Ägypten", "Götter", "Mystik"],
        sections: ["Übersicht der Gottheiten", "Die Sonnengötter", "Die Mondgötter", "Zuordnung nach Dekaden", "Bedeutung heute"],
        hasContent: false,
      },
      {
        title: "Das Dekansystem erklärt",
        href: "/wiki/dekansystem",
        description: "Wie das Dekansystem funktioniert — von der Astronomie zur Mythologie.",
        tags: ["Ägypten", "Dekane", "Fortgeschritten"],
        sections: ["Aufbau des Systems", "10-Grad-Einteilung", "Verbindung zur Astrologie", "Historischer Kontext", "Moderne Anwendung"],
        hasContent: false,
      },
    ],
  },
  {
    id: "human-design",
    title: "Human Design",
    icon: "/images/icons/human-design.svg",
    articles: [
      {
        title: "Human Design Grundlagen",
        href: "/wiki/human-design",
        description: "Dein energetischer Bauplan für authentische Entscheidungen.",
        tags: ["Human Design", "Anfänger", "Energie"],
        sections: ["Was ist Human Design?", "Die 5 Typen", "Strategie & Autorität", "Die 9 Zentren", "Geschichte", "FAQ"],
        hasContent: true,
      },
      {
        title: "Die 5 Typen",
        href: "/wiki/human-design-typen",
        description: "Generator, Manifestor, Projektor, Reflektor, MG — welcher bist du?",
        tags: ["Human Design", "Typen", "Anfänger"],
        sections: ["Generator", "Manifestierender Generator", "Projektor", "Manifestor", "Reflektor", "Deinen Typ leben"],
        hasContent: false,
      },
      {
        title: "Die 9 Zentren",
        href: "/wiki/human-design-zentren",
        description: "Die Energiezentren in deinem Bodygraph — definiert oder offen?",
        tags: ["Human Design", "Zentren", "Fortgeschritten"],
        sections: ["Überblick der Zentren", "Kopfzentrum", "Ajna", "Kehle", "G-Zentrum", "Herz", "Milz", "Sakral", "Emotionen", "Wurzel"],
        hasContent: false,
      },
      {
        title: "Strategie & Autorität",
        href: "/wiki/strategie-autoritaet",
        description: "Wie du laut deinem Design richtig Entscheidungen triffst.",
        tags: ["Human Design", "Strategie", "Autorität", "Fortgeschritten"],
        sections: ["Was ist Strategie?", "Was ist Autorität?", "Die 7 Autoritäten", "Strategie nach Typ", "Praxis-Tipps"],
        hasContent: false,
      },
    ],
  },
  {
    id: "elemente",
    title: "Elementenlehre",
    icon: "/images/icons/tropisch.svg",
    articles: [
      {
        title: "Elementar-Analyse",
        href: "/wiki/elementar-analyse",
        description: "Die Balance der Elemente in deinem Chart zeigt deine natürlichen Stärken.",
        tags: ["Elemente", "Anfänger", "Feuer", "Erde", "Luft", "Wasser"],
        sections: ["Was sind die Elemente?", "Feuer", "Erde", "Luft", "Wasser", "Element-Balance", "Elemente und Sternzeichen", "FAQ"],
        hasContent: true,
      },
      {
        title: "Die 4 Elemente im Detail",
        href: "/wiki/vier-elemente",
        description: "Feuer, Erde, Luft und Wasser — ihre Qualitäten und Entsprechungen.",
        tags: ["Elemente", "Feuer", "Erde", "Luft", "Wasser"],
        sections: ["Feuer-Element", "Erde-Element", "Luft-Element", "Wasser-Element", "Wechselwirkungen"],
        hasContent: false,
      },
      {
        title: "Element-Balance",
        href: "/wiki/element-balance",
        description: "Was es bedeutet, wenn ein Element dominiert — oder fehlt.",
        tags: ["Elemente", "Balance", "Fortgeschritten"],
        sections: ["Element-Verteilung lesen", "Dominantes Element", "Fehlendes Element", "Balance herstellen", "Praktische Tipps"],
        hasContent: false,
      },
    ],
  },
  {
    id: "chakren",
    title: "Chakren",
    icon: "/images/icons/human-design.svg",
    articles: [
      {
        title: "Was sind Chakren?",
        href: "/wiki/chakren",
        description: "Einführung in das Chakra-System — Ursprung, Bedeutung und Praxis.",
        tags: ["Chakren", "Anfänger", "Spiritualität", "Energie"],
        sections: ["Was sind Chakren?", "Ursprung", "Die 7 Hauptchakren", "Chakren und der Körper", "Blockierte vs. offene Chakren", "Chakren und Human Design", "FAQ"],
        hasContent: false, // will be true after step 2
      },
      {
        title: "Die 7 Hauptchakren",
        href: "/wiki/sieben-chakren",
        description: "Alle 7 Chakren im Überblick — Position, Farbe, Thema, Element.",
        tags: ["Chakren", "Anfänger", "Übersicht"],
        sections: ["Wurzelchakra", "Sakralchakra", "Solarplexuschakra", "Herzchakra", "Halschakra", "Stirnchakra", "Kronenchakra"],
        hasContent: false,
      },
      {
        title: "Wurzelchakra (Muladhara)",
        href: "/wiki/wurzelchakra",
        description: "Das erste Chakra — Sicherheit, Erdung, Überleben.",
        tags: ["Chakren", "Wurzelchakra", "Muladhara", "Erdung"],
        sections: ["Sanskrit-Name", "Position und Farbe", "Kernthemen", "Beschreibung", "Blockade", "Balance", "Übungen", "Edelsteine"],
        hasContent: false,
      },
      {
        title: "Sakralchakra (Svadhisthana)",
        href: "/wiki/sakralchakra",
        description: "Das zweite Chakra — Kreativität, Emotionen, Sexualität.",
        tags: ["Chakren", "Sakralchakra", "Svadhisthana", "Kreativität"],
        sections: ["Sanskrit-Name", "Position und Farbe", "Kernthemen", "Beschreibung", "Blockade", "Balance", "Übungen", "Edelsteine"],
        hasContent: false,
      },
      {
        title: "Solarplexuschakra (Manipura)",
        href: "/wiki/solarplexuschakra",
        description: "Das dritte Chakra — Willenskraft, Selbstvertrauen, Transformation.",
        tags: ["Chakren", "Solarplexuschakra", "Manipura", "Willenskraft"],
        sections: ["Sanskrit-Name", "Position und Farbe", "Kernthemen", "Beschreibung", "Blockade", "Balance", "Übungen", "Edelsteine"],
        hasContent: false,
      },
      {
        title: "Herzchakra (Anahata)",
        href: "/wiki/herzchakra",
        description: "Das vierte Chakra — Liebe, Mitgefühl, Heilung.",
        tags: ["Chakren", "Herzchakra", "Anahata", "Liebe"],
        sections: ["Sanskrit-Name", "Position und Farbe", "Kernthemen", "Beschreibung", "Blockade", "Balance", "Übungen", "Edelsteine"],
        hasContent: false,
      },
      {
        title: "Halschakra (Vishuddha)",
        href: "/wiki/halschakra",
        description: "Das fünfte Chakra — Kommunikation, Ausdruck, Wahrheit.",
        tags: ["Chakren", "Halschakra", "Vishuddha", "Kommunikation"],
        sections: ["Sanskrit-Name", "Position und Farbe", "Kernthemen", "Beschreibung", "Blockade", "Balance", "Übungen", "Edelsteine"],
        hasContent: false,
      },
      {
        title: "Stirnchakra (Ajna)",
        href: "/wiki/stirnchakra",
        description: "Das sechste Chakra — Intuition, Weisheit, inneres Sehen.",
        tags: ["Chakren", "Stirnchakra", "Ajna", "Intuition", "Drittes Auge"],
        sections: ["Sanskrit-Name", "Position und Farbe", "Kernthemen", "Beschreibung", "Blockade", "Balance", "Übungen", "Edelsteine"],
        hasContent: false,
      },
      {
        title: "Kronenchakra (Sahasrara)",
        href: "/wiki/kronenchakra",
        description: "Das siebte Chakra — Spiritualität, Erleuchtung, kosmisches Bewusstsein.",
        tags: ["Chakren", "Kronenchakra", "Sahasrara", "Spiritualität"],
        sections: ["Sanskrit-Name", "Position und Farbe", "Kernthemen", "Beschreibung", "Blockade", "Balance", "Übungen", "Edelsteine"],
        hasContent: false,
      },
    ],
  },
];

// Flat list of all articles for search
export function getAllArticles(): WikiArticle[] {
  return WIKI_CATEGORIES.flatMap((cat) => cat.articles);
}

// Get all unique tags
export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const cat of WIKI_CATEGORIES) {
    for (const article of cat.articles) {
      for (const tag of article.tags) {
        tags.add(tag);
      }
    }
  }
  return Array.from(tags).sort();
}

// Search articles by query (searches title, description, sections, tags)
export function searchArticles(query: string): WikiArticle[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  return getAllArticles()
    .map((article) => {
      const searchable = [
        article.title,
        article.description,
        ...article.sections,
        ...article.tags,
      ]
        .join(" ")
        .toLowerCase();

      let score = 0;
      for (const word of words) {
        if (searchable.includes(word)) score++;
        if (article.title.toLowerCase().includes(word)) score += 3;
        if (article.tags.some((t) => t.toLowerCase().includes(word))) score += 2;
      }
      return { article, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.article);
}

// Get articles by tag
export function getArticlesByTag(tag: string): WikiArticle[] {
  return getAllArticles().filter((a) =>
    a.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
