import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Siderische Astrologie erklärt | AstroMaster Wiki",
  description:
    "Was ist siderische Astrologie? Erfahre den Unterschied zu tropischer Astrologie, warum 86% ein falsches Zeichen haben und was Präzession bedeutet.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen tropischer und siderischer Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tropische Astrologie orientiert sich an den Jahreszeiten und fixiert den Frühlingspunkt auf 0° Widder. Siderische Astrologie orientiert sich an den tatsächlichen Sternpositionen am Himmel. Durch die Präzession der Erdachse haben sich diese beiden Systeme um etwa 24° verschoben.",
      },
    },
    {
      "@type": "Question",
      name: "Stimmt mein Sternzeichen wirklich nicht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei etwa 86% der Menschen weicht das siderische (astronomisch korrekte) Sternzeichen vom tropischen ab. Die Verschiebung beträgt aktuell rund 24°, was bedeutet, dass die meisten Menschen im siderischen System ein Zeichen zurückrutschen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist das Lahiri-Ayanamsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Lahiri-Ayanamsa ist der international anerkannte Korrekturwert, der den Unterschied zwischen tropischem und siderischem Tierkreis berechnet. Er beträgt aktuell etwa 24,17° und wird von der indischen Regierung offiziell verwendet.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist Ophiuchus — das 13. Sternzeichen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ophiuchus (Schlangenträger) ist ein astronomisches Sternbild, durch das die Sonne zwischen Skorpion und Schütze zieht (ca. 30. November bis 17. Dezember). Die westliche Astrologie ignoriert es, weil sie nur 12 gleichgroße Zeichen verwendet.",
      },
    },
    {
      "@type": "Question",
      name: "Welches System verwenden die meisten Astrologen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der westlichen Welt dominiert die tropische Astrologie. In Indien und Südostasien ist die siderische Astrologie (Jyotish/Vedische Astrologie) seit Jahrtausenden Standard. AstroMaster verwendet das siderische System mit dem Lahiri-Ayanamsa für astronomische Genauigkeit.",
      },
    },
  ],
};

export default function SiderischeAstrologiePage() {
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
