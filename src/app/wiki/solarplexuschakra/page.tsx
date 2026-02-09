import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Solarplexuschakra (Manipura) erkl\u00e4rt | AstroMaster Wiki",
  description:
    "Das Solarplexuschakra (Manipura) \u2014 Willenskraft, Selbstvertrauen, pers\u00f6nliche Macht. Erfahre alles \u00fcber das dritte Chakra: Sanskrit-Bedeutung, Blockaden, Balance, \u00dcbungen, Edelsteine und die Verbindung zur Astrologie.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie st\u00e4rke ich mein Solarplexuschakra im Alltag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Solarplexuschakra l\u00e4sst sich im Alltag auf vielf\u00e4ltige Weise st\u00e4rken: Core-\u00dcbungen und Planks kr\u00e4ftigen den K\u00f6rperbereich direkt, die Feueratmung (Kapalabhati) aktiviert die innere Kraft, und das Journaling \u00fcber pers\u00f6nliche St\u00e4rken und Erfolge baut Selbstvertrauen auf. Auch gelbe Lebensmittel wie Bananen, Ingwer und Kurkuma sowie der Sonnengruss am Morgen n\u00e4hren das dritte Chakra.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet ein \u00fcberaktives Solarplexuschakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein \u00fcberaktives Solarplexuschakra zeigt sich als Kontrollsucht, Perfektionismus, Wutausbr\u00fcche, Dominanzverhalten und die Tendenz, andere zu manipulieren oder zu \u00fcberrollen. K\u00f6rperlich k\u00f6nnen Magengeschw\u00fcre, S\u00e4ureprobleme und Verdauungsst\u00f6rungen auftreten. Die Balance liegt zwischen gesunder Durchsetzungskraft und der F\u00e4higkeit, auch Kontrolle abzugeben.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Verbindung hat das Solarplexuschakra zur Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dem Solarplexuschakra werden Mars und Sonne als Herrscherplaneten zugeordnet. Mars steht f\u00fcr Willenskraft und Durchsetzung, die Sonne f\u00fcr Selbstbewusstsein und Identit\u00e4t. Die Feuerzeichen Widder, L\u00f6we und Sch\u00fctze haben eine nat\u00fcrliche Affinit\u00e4t zum dritten Chakra. In der siderischen Astrologie k\u00f6nnen die tats\u00e4chlichen Positionen von deinen tropischen Werten abweichen.",
      },
    },
  ],
};

export default function SolarplexuschakraPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WikiArticle />
    </>
  );
}
