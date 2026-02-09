import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Wurzelchakra (Muladhara) erkl\u00e4rt | AstroMaster Wiki",
  description:
    "Das Wurzelchakra (Muladhara) \u2014 Sicherheit, Erdung, \u00dcberleben. Erfahre alles \u00fcber das erste Chakra: Sanskrit-Bedeutung, Blockaden, Balance, \u00dcbungen, Edelsteine und die Verbindung zur Astrologie.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie merke ich, ob mein Wurzelchakra blockiert ist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typische Anzeichen f\u00fcr ein blockiertes Wurzelchakra sind chronische Angst und Unsicherheit, Existenz\u00e4ngste, Schlafst\u00f6rungen, R\u00fccken- und Knieschmerzen sowie ein allgemeines Gef\u00fchl der Entwurzelung. Auch \u00fcberm\u00e4\u00dfiger Materialismus oder Geiz k\u00f6nnen auf eine Blockade im ersten Chakra hinweisen. K\u00f6rperlich \u00e4u\u00dfert sich das oft als Immunschw\u00e4che oder Probleme mit Z\u00e4hnen und Knochen.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Yoga-\u00dcbungen st\u00e4rken das Wurzelchakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Besonders erdende Yoga-Posen sind ideal f\u00fcr das Wurzelchakra: Krieger I (Virabhadrasana I), Baum (Vrksasana), Garland Pose (Malasana) und Berg (Tadasana). Alle stehenden Posen, die Stabilit\u00e4t und Erdung erfordern, aktivieren das Muladhara. Wichtig ist dabei, die F\u00fc\u00dfe bewusst in den Boden zu dr\u00fccken und die Verbindung zur Erde zu sp\u00fcren.",
      },
    },
    {
      "@type": "Question",
      name: "Was hat das Wurzelchakra mit meinem Sternzeichen zu tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dem Wurzelchakra wird traditionell der Planet Saturn zugeordnet, der f\u00fcr Struktur, Disziplin und Verantwortung steht. Die Erdzeichen Stier, Jungfrau und Steinbock haben eine nat\u00fcrliche Affinit\u00e4t zum Wurzelchakra. Besonders Steinbock, der von Saturn regiert wird, spiegelt die Themen Sicherheit und Stabilit\u00e4t wider. In der siderischen Astrologie k\u00f6nnen sich diese Zuordnungen verschieben.",
      },
    },
  ],
};

export default function WurzelchakraPage() {
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
