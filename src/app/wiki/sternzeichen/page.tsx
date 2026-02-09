import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 12 Sternzeichen — Eigenschaften, Elemente & Herrscher | AstroMaster Wiki",
  description:
    "Alle 12 Sternzeichen im Überblick: Eigenschaften, Elemente, Qualitäten und Herrscherplaneten. Mit tropischen und siderischen Datumsbereichen.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Sternzeichen gibt es?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es gibt 12 Sternzeichen: Widder, Stier, Zwillinge, Krebs, Löwe, Jungfrau, Waage, Skorpion, Schütze, Steinbock, Wassermann und Fische. Sie teilen den 360°-Tierkreis in gleich große Abschnitte von je 30 Grad.",
      },
    },
    {
      "@type": "Question",
      name: "Was sind die vier Elemente in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die vier Elemente sind Feuer (Widder, Löwe, Schütze), Erde (Stier, Jungfrau, Steinbock), Luft (Zwillinge, Waage, Wassermann) und Wasser (Krebs, Skorpion, Fische). Jedes Element beschreibt eine grundlegende Lebensenergie.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeuten die drei Qualitäten Kardinal, Fix und Veränderlich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kardinale Zeichen (Widder, Krebs, Waage, Steinbock) sind Initiator und starten Neues. Fixe Zeichen (Stier, Löwe, Skorpion, Wassermann) sind beständig und vertiefen. Veränderliche Zeichen (Zwillinge, Jungfrau, Schütze, Fische) sind anpassungsfähig und vermitteln.",
      },
    },
    {
      "@type": "Question",
      name: "Unterscheiden sich die siderischen und tropischen Sternzeichen-Daten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, durch die Präzession der Erdachse verschieben sich die siderischen Datumsbereiche um etwa 24 Tage nach hinten. Ein tropischer Löwe (23. Juli bis 22. August) ist siderisch vom 17. August bis 16. September. Bei 86% der Menschen ändert sich dadurch das Sonnenzeichen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist ein Herrscherplanet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jedes Sternzeichen wird von einem Planeten regiert, der seine Energie besonders gut zum Ausdruck bringt. Zum Beispiel herrscht Mars über Widder (Tatkraft), Venus über Stier und Waage (Schönheit, Harmonie) und der Mond über Krebs (Emotionen).",
      },
    },
  ],
};

export default function SternzeichenPage() {
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
