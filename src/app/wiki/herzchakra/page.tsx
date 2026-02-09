import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Herzchakra (Anahata) erkl\u00e4rt | AstroMaster Wiki",
  description:
    "Das Herzchakra (Anahata) \u2014 Bedingungslose Liebe, Mitgef\u00fchl, Vergebung. Erfahre alles \u00fcber das vierte Chakra: Sanskrit-Bedeutung, Blockaden, Balance, \u00dcbungen, Edelsteine und die Verbindung zur Astrologie.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Warum ist das Herzchakra das wichtigste Chakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Herzchakra nimmt eine besondere Stellung ein, weil es als viertes von sieben Chakren genau in der Mitte liegt und die Br\u00fccke zwischen den unteren (physischen) und oberen (spirituellen) Chakren bildet. Es verbindet K\u00f6rper und Geist, Materie und Bewusstsein, Erde und Himmel. Ohne ein offenes Herz k\u00f6nnen die h\u00f6heren Chakren nicht vollst\u00e4ndig aktiviert werden.",
      },
    },
    {
      "@type": "Question",
      name: "Wie \u00f6ffne ich mein Herzchakra nach einer Trennung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach einer Trennung ist das Herzchakra oft durch Schmerz und Enttäuschung verschlossen. Hilfreiche Praktiken sind: Liebende-G\u00fcte-Meditation (Metta), herz\u00f6ffnende Yoga-Posen wie Kobra und Kamel, ein Dankbarkeits-Tagebuch, bewusstes Vergeben (auch sich selbst) und Zeit in der gr\u00fcnen Natur. Wichtig: Heilung braucht Zeit, erlaube dir den Prozess.",
      },
    },
    {
      "@type": "Question",
      name: "Was hat Venus mit dem Herzchakra zu tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Venus ist der Herrscherplanet des Herzchakras und steht in der Astrologie f\u00fcr Liebe, Harmonie, Sch\u00f6nheit und Beziehungen \u2014 genau die Kernthemen des vierten Chakras. Die Luftzeichen, besonders Waage (von Venus regiert), haben eine nat\u00fcrliche Affinit\u00e4t zum Herzchakra. Die Venus-Position in deinem siderischen Horoskop zeigt, wie du liebst und was du in Beziehungen brauchst.",
      },
    },
  ],
};

export default function HerzchakraPage() {
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
