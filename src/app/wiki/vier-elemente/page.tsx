import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 4 Elemente im Detail \u2014 Feuer, Erde, Luft & Wasser | AstroMaster Wiki",
  description:
    "Feuer, Erde, Luft und Wasser: Erfahre alles \u00fcber die vier Elemente in der Astrologie \u2014 Qualit\u00e4ten, zugeordnete Sternzeichen, St\u00e4rken, Schatten und Wechselwirkungen.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was sind die 4 Elemente in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die vier Elemente sind Feuer, Erde, Luft und Wasser. Jedes Element umfasst drei Tierkreiszeichen: Feuer (Widder, L\u00f6we, Sch\u00fctze), Erde (Stier, Jungfrau, Steinbock), Luft (Zwillinge, Waage, Wassermann) und Wasser (Krebs, Skorpion, Fische). Sie beschreiben grundlegende Energieformen und Pers\u00f6nlichkeitsqualit\u00e4ten.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Elemente passen gut zusammen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Feuer und Luft harmonieren gut, weil Luft das Feuer anf\u00e4cht und n\u00e4hrt. Erde und Wasser bilden ebenfalls ein starkes Paar, da Wasser die Erde fruchtbar macht. Feuer und Wasser sowie Erde und Luft stehen in Spannung zueinander, was aber auch Wachstum erm\u00f6glicht.",
      },
    },
    {
      "@type": "Question",
      name: "Wie finde ich mein dominantes Element heraus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dein dominantes Element wird bestimmt, indem gez\u00e4hlt wird, in welchen Elementen deine Planeten (Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun, Pluto) stehen. Das Element mit den meisten Planeten ist dein dominantes Element. AstroMaster berechnet das automatisch.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich mein Element durch mein Verhalten \u00e4ndern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dein Geburtselement \u00e4ndert sich nie \u2014 es ist durch dein Geburtschart festgelegt. Aber du kannst unterrepr\u00e4sentierte Elemente durch bewusste Aktivit\u00e4ten st\u00e4rken: Feuer durch Sport und kreative Projekte, Erde durch Natur und Routinen, Luft durch Lesen und Gespr\u00e4che, Wasser durch Meditation und K\u00f6rperarbeit.",
      },
    },
    {
      "@type": "Question",
      name: "Verwendet AstroMaster tropische oder siderische Elemente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstroMaster berechnet die Element-Verteilung basierend auf den siderischen Positionen deiner Planeten. Das ist der USP von AstroMaster: Die siderischen Positionen entsprechen den tats\u00e4chlichen astronomischen Positionen der Sterne und k\u00f6nnen von den tropischen Positionen abweichen.",
      },
    },
  ],
};

export default function VierElementePage() {
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
