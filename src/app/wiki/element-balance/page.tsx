import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Element-Balance \u2014 Dominanz & Mangel | AstroMaster Wiki",
  description:
    "Was bedeutet ein dominantes oder fehlendes Element in deinem Geburtschart? Erfahre, wie du deine Element-Verteilung liest und Balance herstellst.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Element-Dominanz in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Element-Dominanz bedeutet, dass die Mehrheit deiner Planeten in Zeichen eines bestimmten Elements steht. Wenn zum Beispiel vier oder mehr deiner zehn Planeten in Feuer-Zeichen stehen, bist du Feuer-dominant. Das pr\u00e4gt deine Grundenergie, dein Temperament und deine nat\u00fcrlichen Tendenzen.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn mir ein Element komplett fehlt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein fehlendes Element ist keine Schw\u00e4che, sondern ein Entwicklungsfeld. Du hast in diesem Bereich keine nat\u00fcrliche Ausstattung und musst die Qualit\u00e4ten bewusst kultivieren. Oft zeigt sich eine besondere Faszination f\u00fcr das fehlende Element. Du wirst magnetisch von Menschen angezogen, die es stark haben.",
      },
    },
    {
      "@type": "Question",
      name: "Wie kann ich fehlende Elemente ausgleichen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fehlendes Feuer st\u00e4rkst du durch Sport, kreative Projekte und Risikobereitschaft. Fehlende Erde durch Routinen, K\u00f6rperarbeit und Natur. Fehlende Luft durch Lesen, neue Bekanntschaften und intellektuelle Herausforderungen. Fehlendes Wasser durch Meditation, Journaling und bewussten Zugang zu deinen Gef\u00fchlen.",
      },
    },
    {
      "@type": "Question",
      name: "Z\u00e4hlen alle Planeten gleich bei der Element-Balance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, nicht alle Planeten haben das gleiche Gewicht. Sonne und Mond als die beiden Lichter haben den st\u00e4rksten Einfluss auf deine Pers\u00f6nlichkeit. Die pers\u00f6nlichen Planeten (Merkur, Venus, Mars) pr\u00e4gen den Alltag, w\u00e4hrend die \u00e4u\u00dferen Planeten (Jupiter bis Pluto) eher generationsbedingte Muster zeigen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann sich meine Element-Balance im Laufe des Lebens \u00e4ndern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deine Geburtschart-Balance \u00e4ndert sich nie. Aber Transite (aktuelle Planetenbewegungen) k\u00f6nnen vor\u00fcbergehend andere Elemente aktivieren. Au\u00dferdem kannst du durch bewusste Lebensf\u00fchrung die Qualit\u00e4ten unterrepr\u00e4sentierter Elemente st\u00e4rken \u2014 das ver\u00e4ndert nicht dein Chart, aber dein gelebtes Erleben.",
      },
    },
  ],
};

export default function ElementBalancePage() {
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
