import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 5 Human Design Typen | AstroMaster Wiki",
  description:
    "Generator, Manifestierender Generator, Projektor, Manifestor und Reflektor: Erfahre alles \u00fcber die 5 Human Design Typen, ihre Strategie, Signatur und Aura.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welcher Human Design Typ bin ich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dein Human Design Typ wird durch die definierten Zentren und Kan\u00e4le in deinem BodyGraph bestimmt. Es gibt f\u00fcnf Typen: Generator (~37%), Manifestierender Generator (~33%), Projektor (~20%), Manifestor (~8%) und Reflektor (~1%). F\u00fcr die Bestimmung brauchst du dein exaktes Geburtsdatum, deine Geburtszeit und deinen Geburtsort.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Generator und Manifestierendem Generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beide haben ein definiertes Sakralzentrum, aber der Manifestierende Generator hat zus\u00e4tzlich eine direkte oder indirekte Verbindung zur Kehle. Das gibt ihm die F\u00e4higkeit, schneller zu manifestieren und mehrere Dinge gleichzeitig zu verfolgen. Generatoren arbeiten eher linear und fokussiert.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet Nicht-Selbst-Thema im Human Design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Nicht-Selbst-Thema ist das Gef\u00fchl, das entsteht, wenn du nicht im Einklang mit deinem Typ lebst. F\u00fcr Generatoren ist es Frustration, f\u00fcr Manifestoren Wut, f\u00fcr Projektoren Bitterkeit, f\u00fcr Manifestierende Generatoren Frustration und Wut, und f\u00fcr Reflektoren Entt\u00e4uschung.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich meinen Human Design Typ \u00e4ndern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, dein Human Design Typ ist bei der Geburt festgelegt und bleibt dein ganzes Leben lang gleich. Was sich ver\u00e4ndert, ist dein Verst\u00e4ndnis und deine F\u00e4higkeit, im Einklang mit deinem Design zu leben \u2014 das nennt man Dekonditionierung.",
      },
    },
    {
      "@type": "Question",
      name: "Warum sind Reflektoren so selten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reflektoren machen nur ca. 1% der Bev\u00f6lkerung aus, weil sie kein einziges definiertes Zentrum haben. Daf\u00fcr m\u00fcssen alle 36 Kan\u00e4le im BodyGraph offen sein, was statistisch sehr selten vorkommt. Sie sind die offensten und empf\u00e4nglichsten Menschen und dienen als Spiegel der Gesellschaft.",
      },
    },
  ],
};

export default function HumanDesignTypenPage() {
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
