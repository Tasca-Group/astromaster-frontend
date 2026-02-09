import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Was sind Chakren? | AstroMaster Wiki",
  description:
    "Was sind Chakren? Erfahre alles über das Chakra-System — Ursprung, die 7 Hauptchakren, ihre Bedeutung für Körper und Geist, und die Verbindung zu Human Design.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sind Chakren wissenschaftlich bewiesen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chakren sind nicht im naturwissenschaftlichen Sinne nachgewiesen. Sie stammen aus jahrtausendealter spiritueller Tradition und werden in der Komplementärmedizin genutzt. Viele Menschen berichten von positiven Erfahrungen mit Chakrenarbeit, auch wenn die Wissenschaft dies bisher nicht erklären kann.",
      },
    },
    {
      "@type": "Question",
      name: "Kann man Chakren spüren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mit Übung ja. Viele Menschen nehmen Chakren als Wärme, Kribbeln oder ein Pulsieren an den entsprechenden Körperstellen wahr. Meditation und Achtsamkeitspraxis können die Wahrnehmung der Energiezentren schärfen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie öffne ich meine Chakren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durch Meditation, Yoga, Atemübungen, Mantras, Visualisierung und bewusstes Arbeiten mit den Themen des jeweiligen Chakras. Es gibt auch Ansätze über Farben, Edelsteine und Klang. Wichtig ist regelmäßige Praxis.",
      },
    },
    {
      "@type": "Question",
      name: "Was hat das mit Astrologie zu tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jedem Chakra werden traditionell bestimmte Planeten und Sternzeichen zugeordnet. Das Wurzelchakra wird mit Saturn, das Herzchakra mit Venus verbunden. Die Analyse deines Geburtshoroskops kann Hinweise auf Chakra-Stärken und -Blockaden geben.",
      },
    },
  ],
};

export default function ChakrenPage() {
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
