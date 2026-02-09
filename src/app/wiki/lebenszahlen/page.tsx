import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Alle Lebenszahlen (1-9) — Bedeutung & Lebensweg | AstroMaster Wiki",
  description:
    "Die 9 Lebenszahlen der Numerologie im Detail: Bedeutung, Stärken, Herausforderungen, Beruf und Beziehung. Finde heraus, was deine Lebenszahl über deinen Lebensweg verrät.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Lebenszahl ist die beste?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keine Lebenszahl ist besser oder schlechter als eine andere. Jede der neun Zahlen beschreibt einen eigenen Archetyp mit einzigartigen Stärken und Herausforderungen. Die 1 ist nicht wertvoller als die 9 — sie beschreibt lediglich einen anderen Lebensweg und andere Kernqualitäten.",
      },
    },
    {
      "@type": "Question",
      name: "Wie berechne ich meine Lebenszahl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Addiere alle einzelnen Ziffern deines Geburtsdatums und reduziere das Ergebnis durch wiederholte Quersummenbildung auf eine einstellige Zahl (1-9). Beispiel: 15.03.1990 → 1+5+0+3+1+9+9+0 = 28 → 2+8 = 10 → 1+0 = 1. Ausnahme: Die Meisterzahlen 11, 22 und 33 werden nicht weiter reduziert.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich mehrere Lebenszahlen haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, jeder Mensch hat genau eine Lebenszahl. Sie ergibt sich eindeutig aus dem Geburtsdatum. Allerdings gibt es in der Numerologie weitere Zahlen wie die Namenszahl oder die Herzenszahl, die zusätzliche Aspekte der Persönlichkeit beleuchten.",
      },
    },
    {
      "@type": "Question",
      name: "Passen bestimmte Lebenszahlen besser zusammen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Numerologie gibt es Zahlen-Kompatibilitäten: Die 1 harmoniert oft mit der 5 und 7, die 2 mit der 4 und 8, die 3 mit der 6 und 9. Allerdings sind das Tendenzen, keine Regeln. Jede Zahlenkombination kann funktionieren, wenn beide Partner ihre Stärken und Unterschiede verstehen.",
      },
    },
    {
      "@type": "Question",
      name: "Beeinflusst die Lebenszahl die Berufswahl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Lebenszahl beschreibt Kernstärken und natürliche Talente, die sich auch im Beruf zeigen. Die 1 eignet sich für Führungspositionen, die 3 für kreative Berufe, die 8 für Unternehmertum. Das sind jedoch Tendenzen — die Lebenszahl determiniert nicht deine Karriere, sondern zeigt, in welchen Bereichen du natürlich aufblühst.",
      },
    },
  ],
};

export default function LebenszahlenPage() {
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
