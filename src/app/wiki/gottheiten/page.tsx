import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 36 ägyptischen Gottheiten der Dekane | AstroMaster Wiki",
  description:
    "Alle 36 ägyptischen Gottheiten im Dekansystem: Ra, Isis, Osiris, Thoth, Anubis, Hathor, Horus, Bastet, Sekhmet, Ma'at und weitere. Erfahre, welcher Gott dich beschützt.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie viele ägyptische Gottheiten gibt es im Dekansystem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Im klassischen Dekansystem gibt es 36 Gottheiten — eine für jeden der 36 Dekane (10°-Abschnitte) des Tierkreises. AstroMaster ergänzt einen 37. Dekan (Sothis/Sirius) für besondere Geburtskonstellationen. Manche Gottheiten erscheinen in mehreren Dekanen, da die ägyptische Tradition verschiedene Aspekte derselben Gottheit unterschied.",
      },
    },
    {
      "@type": "Question",
      name: "Welche ägyptische Gottheit beschützt mich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deine Schutzgottheit wird durch deinen Geburts-Dekan bestimmt — den 10°-Abschnitt des Tierkreises, in dem die Sonne zum Zeitpunkt deiner Geburt stand. AstroMaster berechnet deinen exakten Dekan und die zugehörige Gottheit automatisch aus deinem Geburtsdatum.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Sonnengöttern und Mondgöttern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die ägyptischen Gottheiten werden traditionell in solare (sonnenbezogene) und lunare (mondbezogene) Gruppen eingeteilt. Sonnengötter wie Ra und Horus stehen für aktive, nach außen gerichtete Qualitäten wie Führung und Tatkraft. Mondgötter wie Thoth und Khonsu repräsentieren reflektierende, innere Qualitäten wie Weisheit und Intuition.",
      },
    },
    {
      "@type": "Question",
      name: "Stimmen die Gottheiten-Zuordnungen mit historischen Quellen überein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Zuordnung der Gottheiten zu den Dekanen basiert auf historischen Quellen wie den Dekan-Listen aus Tempeln (z.B. Dendera), Särgen des Mittleren Reichs und hellenistischen Texten. AstroMaster verwendet eine rekonstruierte Version, die archäologische Funde mit der späteren griechisch-ägyptischen Tradition verbindet.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich mehrere Schutzgottheiten haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Dekan-Tradition hat jeder Mensch eine primäre Schutzgottheit, die durch den Sonnen-Dekan bestimmt wird. In einer erweiterten Deutung können jedoch auch der Mond-Dekan und der Aszendent-Dekan weitere Gottheiten zuordnen, die sekundäre Einflüsse beschreiben. Die Pro-Analyse von AstroMaster berücksichtigt den primären Dekan.",
      },
    },
  ],
};

export default function GottheitenPage() {
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
