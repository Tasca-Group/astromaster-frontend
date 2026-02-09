import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 12 astrologischen Häuser | AstroMaster Wiki",
  description:
    "Was sind die 12 Häuser in der Astrologie? Erfahre, welcher Lebensbereich zu welchem Haus gehört, wie Häusersysteme funktionieren und was leere Häuser bedeuten.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was sind die 12 Häuser in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die 12 Häuser teilen den Himmel zum Zeitpunkt deiner Geburt in 12 Lebensbereiche auf. Das 1. Haus steht für das Selbst, das 7. für Beziehungen, das 10. für Beruf und Berufung. Jedes Haus beschreibt einen spezifischen Bereich deines Lebens.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet ein leeres Haus im Horoskop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein leeres Haus (ohne Planeten) bedeutet nicht, dass der Lebensbereich unwichtig ist. Es zeigt, dass dort keine besondere Spannung oder Herausforderung liegt. Der Hausherrscher — der Planet, der das Zeichen an der Häuserspitze regiert — gibt weitere Hinweise.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Häusern und Sternzeichen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sternzeichen beschreiben Qualitäten und Eigenschaften (das Wie), Häuser beschreiben Lebensbereiche (das Wo). Ein Planet im Zeichen Löwe drückt sich kreativ und großzügig aus. Derselbe Planet im 10. Haus manifestiert sich im Beruf und in der Öffentlichkeit.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist das Häusersystem Placidus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Placidus ist das am weitesten verbreitete Häusersystem in der westlichen Astrologie. Es berechnet die Häusergrenzen auf Basis der Dauer, die ein Grad der Ekliptik braucht, um vom Aszendenten zum MC zu wandern. Es funktioniert gut in gemäßigten Breiten, hat aber Probleme in Polnähe.",
      },
    },
  ],
};

export default function HaeuserPage() {
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
