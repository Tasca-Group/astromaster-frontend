import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Meisterzahlen 11, 22 & 33 — Seltene spirituelle Kraft | AstroMaster Wiki",
  description:
    "Was sind Meisterzahlen? Erfahre, warum die Zahlen 11, 22 und 33 nicht reduziert werden, welche besondere Kraft sie tragen und wie du erkennst, ob du eine Meisterzahl hast.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Warum werden Meisterzahlen nicht weiter reduziert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meisterzahlen (11, 22, 33) werden in der Numerologie nicht auf eine einstellige Zahl reduziert, weil ihnen ein besonders hohes energetisches Potenzial zugeschrieben wird. Sie tragen die Schwingung ihrer Basiszahl (2, 4, 6) auf einer verstärkten, höheren Oktave und gelten als Zeichen eines besonderen Lebensauftrags.",
      },
    },
    {
      "@type": "Question",
      name: "Wie selten sind Meisterzahlen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Etwa 10% aller Menschen tragen die Meisterzahl 11, deutlich weniger die 22 und nur sehr wenige die 33. Die 33 ist die seltenste Meisterzahl, weil das Geburtsdatum eine ganz bestimmte Ziffernkombination erfordern muss, um auf 33 zu kommen, bevor weiter reduziert wird.",
      },
    },
    {
      "@type": "Question",
      name: "Kann eine Meisterzahl auch belastend sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Meisterzahlen tragen ein höheres Potenzial, aber auch größere innere Spannung. Viele Menschen mit Meisterzahlen berichten von dem Gefühl, anders zu sein, von intensiven emotionalen Phasen und dem Druck, ihrem besonderen Potenzial gerecht zu werden. Die Meisterzahl ist Geschenk und Herausforderung zugleich.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Meisterzahlen über 33?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der klassischen Numerologie werden nur 11, 22 und 33 als Meisterzahlen anerkannt. Einige moderne Schulen zählen auch 44, 55 und höhere Doppelzahlen dazu, aber das ist nicht allgemein akzeptiert. AstroMaster arbeitet mit dem etablierten System der drei Meisterzahlen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie erkenne ich, ob ich eine Meisterzahl habe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berechne die Quersumme deines Geburtsdatums Schritt für Schritt. Wenn in einem Zwischenschritt die Zahl 11, 22 oder 33 erscheint, hast du eine Meisterzahl — sie wird dann nicht weiter reduziert. Beispiel: 29.11.1990 ergibt 2+9+1+1+1+9+9+0 = 32, dann 3+2 = 5 (keine Meisterzahl). Aber 29.09.1989 ergibt 2+9+0+9+1+9+8+9 = 47, dann 4+7 = 11 (Meisterzahl!).",
      },
    },
  ],
};

export default function MeisterzahlenPage() {
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
