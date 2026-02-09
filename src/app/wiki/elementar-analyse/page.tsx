import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Elementar-Analyse erkl\u00e4rt | AstroMaster Wiki",
  description:
    "Die vier Elemente Feuer, Erde, Luft und Wasser in der Astrologie. Erfahre, welches Element dich dominiert und wie die Element-Balance dein Chart pr\u00e4gt.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist mein Element in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dein Element wird nicht nur durch dein Sonnenzeichen bestimmt, sondern durch die Verteilung aller zehn Planeten (Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun, Pluto) auf die vier Elemente Feuer, Erde, Luft und Wasser. Das Element, in dem die meisten Planeten stehen, ist dein dominantes Element.",
      },
    },
    {
      "@type": "Question",
      name: "Kann man mehrere dominante Elemente haben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, es kommt h\u00e4ufig vor, dass zwei Elemente \u00e4hnlich stark vertreten sind. In diesem Fall spricht man von einer Doppel-Dominanz. Das erzeugt eine spannende innere Dynamik, weil beide Element-Energien gleichzeitig wirken und sich gegenseitig beeinflussen.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn ein Element in meinem Chart komplett fehlt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein komplett fehlendes Element ist selten, aber m\u00f6glich. Es zeigt ein Entwicklungsfeld an \u2014 eine Energie, die dir nicht nat\u00fcrlich zur Verf\u00fcgung steht und die du bewusst kultivieren darfst. Menschen mit fehlendem Element entwickeln oft eine besondere Faszination f\u00fcr genau diese Qualit\u00e4t.",
      },
    },
    {
      "@type": "Question",
      name: "\u00c4ndern sich meine Elemente im Laufe des Lebens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dein Geburtschart und damit deine Grund-Element-Verteilung sind fix und \u00e4ndern sich nie. Allerdings aktivieren Transite (aktuelle Planetenbewegungen) unterschiedliche Elemente zu verschiedenen Zeiten. So kann ein Feuer-dominanter Mensch in einer Phase mit vielen Wasser-Transiten eine intensivere emotionale Phase erleben.",
      },
    },
    {
      "@type": "Question",
      name: "Wie berechnet AstroMaster die Element-Balance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstroMaster z\u00e4hlt alle zehn Planeten (Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun, Pluto) und ordnet sie dem Element ihres jeweiligen siderischen Zeichens zu. Sonne und Mond erhalten dabei eine st\u00e4rkere Gewichtung. Das Ergebnis zeigt die prozentuale Verteilung \u00fcber alle vier Elemente.",
      },
    },
  ],
};

export default function ElementarAnalysePage() {
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
