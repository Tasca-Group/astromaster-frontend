import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Human Design erklärt | AstroMaster Wiki",
  description:
    "Was ist Human Design? Erfahre alles über die 5 Typen, Strategie, Autorität, die 9 Zentren und wie dein energetischer Bauplan dein Leben beeinflusst.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist ein Human Design Chart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Human Design Chart (BodyGraph) ist deine energetische Blaupause, berechnet aus deinem exakten Geburtsdatum, deiner Geburtszeit und deinem Geburtsort. Es zeigt neun Zentren, Kanäle und Tore, die bestimmen, wie du Energie aufnimmst, verarbeitest und ausdrückst.",
      },
    },
    {
      "@type": "Question",
      name: "Welcher Human Design Typ bin ich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dein Human Design Typ wird durch die definierten Zentren und Kanäle in deinem BodyGraph bestimmt. Es gibt fünf Typen: Manifestor, Generator, Manifestierender Generator, Projektor und Reflektor. Jeder Typ hat eine eigene Strategie und Aura.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich meine genaue Geburtszeit für Human Design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, die genaue Geburtszeit ist bei Human Design besonders wichtig. Schon wenige Minuten Unterschied können die Tor- und Kanal-Definitionen verändern und damit deinen Typ, dein Profil oder deine Autorität beeinflussen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Human Design eine Religion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, Human Design ist keine Religion und kein Glaubenssystem. Es ist ein praktisches Werkzeug zur Selbsterkenntnis, das Elemente aus Astrologie, I Ging, Kabbala und dem Chakra-System kombiniert. Es geht darum, deine eigene Natur zu verstehen und bessere Entscheidungen zu treffen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann sich mein Human Design Typ ändern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, dein Human Design ist bei der Geburt festgelegt und ändert sich nicht im Laufe deines Lebens. Dein Typ, dein Profil und deine Autorität bleiben immer gleich. Was sich verändert, ist dein Verständnis und deine Fähigkeit, im Einklang mit deinem Design zu leben.",
      },
    },
  ],
};

export default function HumanDesignPage() {
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
