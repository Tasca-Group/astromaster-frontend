import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Numerologie erklärt | AstroMaster Wiki",
  description:
    "Was ist Numerologie? Erfahre, wie du deine Lebenszahl berechnest, was die Zahlen 1-9 bedeuten und welche Kraft Meisterzahlen 11, 22 und 33 haben.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist eine Lebenszahl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Lebenszahl (auch Schicksalszahl genannt) ist die wichtigste Zahl in der Numerologie. Sie wird aus dem vollständigen Geburtsdatum berechnet, indem alle Ziffern so lange addiert werden, bis eine einstellige Zahl (1-9) oder eine Meisterzahl (11, 22, 33) entsteht. Sie beschreibt deine Kernpersönlichkeit und deinen Lebensweg.",
      },
    },
    {
      "@type": "Question",
      name: "Kann sich meine Lebenszahl ändern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein, deine Lebenszahl ändert sich nie. Sie basiert auf deinem Geburtsdatum, das sich nicht verändert. Die Lebenszahl ist wie ein kosmischer Fingerabdruck — einmal berechnet, bleibt sie dein gesamtes Leben lang gleich.",
      },
    },
    {
      "@type": "Question",
      name: "Was sind Meisterzahlen in der Numerologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meisterzahlen sind die Zahlen 11, 22 und 33. Sie werden bei der Berechnung der Lebenszahl nicht weiter reduziert, weil ihnen eine besondere spirituelle Bedeutung zugeschrieben wird. Die 11 steht für Intuition, die 22 für den Meisterbaumeister und die 33 für den Meisterlehrer.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Numerologie wissenschaftlich belegt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Numerologie ist ein symbolisches Deutungssystem, keine exakte Naturwissenschaft. Die mathematische Berechnung der Lebenszahl ist objektiv und reproduzierbar, die Interpretation der Zahlen basiert jedoch auf jahrtausendealter Überlieferung und Erfahrungswissen, nicht auf empirischen Studien.",
      },
    },
    {
      "@type": "Question",
      name: "Wie genau ist die Berechnung der Lebenszahl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die mathematische Berechnung ist exakt — sie folgt einer eindeutigen Formel (Quersumme des Geburtsdatums). Es gibt keine Ungenauigkeiten oder Interpretationsspielräume bei der Zahl selbst. Die Deutung der Lebenszahl hingegen variiert je nach Tradition und Schule.",
      },
    },
  ],
};

export default function NumerologiePage() {
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
