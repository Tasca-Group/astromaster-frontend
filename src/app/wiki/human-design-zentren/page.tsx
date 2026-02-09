import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 9 Zentren im Human Design Bodygraph | AstroMaster Wiki",
  description:
    "Kopf, Ajna, Kehle, G-Zentrum, Herz, Milz, Sakral, Emotionen und Wurzel: Erfahre, was jedes Zentrum bedeutet und was definiert vs. offen f\u00fcr dich hei\u00dft.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was bedeutet es, wenn ein Zentrum definiert ist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein definiertes Zentrum (farbig im BodyGraph) bedeutet, dass du eine konsistente, verl\u00e4ssliche Energie in diesem Bereich hast. Du strahlst diese Energie nach au\u00dfen aus und beeinflusst damit andere. Definierte Zentren sind deine feste Grundausstattung \u2014 sie funktionieren immer gleich, unabh\u00e4ngig von deiner Umgebung.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet ein offenes Zentrum im Human Design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein offenes Zentrum (wei\u00df im BodyGraph) bedeutet, dass du in diesem Bereich keine eigene, feste Energie hast. Stattdessen nimmst du die Energie anderer Menschen auf und verst\u00e4rkst sie. Offene Zentren sind deine gr\u00f6\u00dften Weisheitsquellen, aber auch die Bereiche, in denen du am leichtesten konditioniert wirst.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viele Zentren kann man definiert haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es gibt neun Zentren im BodyGraph, und theoretisch k\u00f6nnen alle neun definiert oder alle neun offen sein. Die meisten Menschen haben eine Mischung. Reflektoren haben kein einziges definiertes Zentrum, w\u00e4hrend manche Manifestoren oder Generatoren bis zu sechs oder sieben definierte Zentren haben k\u00f6nnen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist ein offenes Zentrum eine Schw\u00e4che?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, ein offenes Zentrum ist keine Schw\u00e4che. Es ist ein Bereich, in dem du die Energie anderer aufnimmst, verst\u00e4rkst und dadurch eine enorme Weisheit entwickeln kannst. Die Herausforderung besteht darin, die aufgenommene Energie nicht mit deiner eigenen zu verwechseln. Offene Zentren sind deine Lernfelder und Quellen tiefer Erkenntnis.",
      },
    },
    {
      "@type": "Question",
      name: "Welches Zentrum bestimmt meinen Human Design Typ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Sakralzentrum spielt die entscheidende Rolle. Ist es definiert, bist du ein Generator oder Manifestierender Generator. Ist es offen, bist du Projektor, Manifestor oder Reflektor. Zus\u00e4tzlich bestimmt die Verbindung von Motorzentren zur Kehle, ob du ein Manifestor bist, und das Fehlen aller Definitionen macht dich zum Reflektor.",
      },
    },
  ],
};

export default function HumanDesignZentrenPage() {
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
