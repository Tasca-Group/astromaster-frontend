import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 7 Hauptchakren im Detail | AstroMaster Wiki",
  description:
    "Die 7 Hauptchakren erklärt — Wurzelchakra bis Kronenchakra. Position, Farbe, Element, Thema und Zeichen für Balance oder Blockade. Alles auf einen Blick.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist das Wurzelchakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Wurzelchakra (Muladhara) ist das erste Chakra an der Basis der Wirbelsäule. Es ist mit der Farbe Rot und dem Element Erde verbunden und regiert Sicherheit, Überleben und Erdung.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist das Herzchakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Herzchakra (Anahata) ist das vierte Chakra in der Brustmitte. Es ist mit der Farbe Grün und dem Element Luft verbunden und ist das Zentrum bedingungsloser Liebe, des Mitgefühls und der Vergebung.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist das Kronenchakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Kronenchakra (Sahasrara) ist das siebte und höchste Chakra am Scheitel des Kopfes. Es ist mit der Farbe Violett/Weiß verbunden und repräsentiert die Verbindung zum Universellen, zum höheren Bewusstsein und zur spirituellen Erfahrung.",
      },
    },
    {
      "@type": "Question",
      name: "Welches Chakra ist für Kommunikation zuständig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Halschakra (Vishuddha) ist das fünfte Chakra und das Zentrum der Kommunikation, des authentischen Selbstausdrucks und der Wahrheit. Es sitzt an der Kehle und ist mit der Farbe Hellblau verbunden.",
      },
    },
  ],
};

export default function SiebenChakrenPage() {
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
