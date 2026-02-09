import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Was ist Präzession? — Warum sich der Himmel verschiebt | AstroMaster Wiki",
  description:
    "Die Präzession der Erdachse erklärt: Warum sich die Sternbilder verschieben, was das für dein Sternzeichen bedeutet und wie die siderische Astrologie das korrigiert.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Präzession einfach erklärt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Präzession ist die langsame Kreiselbewegung der Erdachse. Wie ein sich drehender Kreisel, dessen Achse langsam einen Kegel beschreibt, taumelt auch die Erde — in einem Zyklus von etwa 25.772 Jahren. Dadurch verschiebt sich der Blick auf die Sternbilder langsam, was Auswirkungen auf die Astrologie hat.",
      },
    },
    {
      "@type": "Question",
      name: "Wie groß ist die aktuelle Verschiebung durch Präzession?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die aktuelle Verschiebung beträgt etwa 24 Grad (genauer: 24,17° nach dem Lahiri-Ayanamsa, Stand 2026). Das entspricht fast einem ganzen Sternzeichen, da jedes Zeichen 30° umfasst. Bei 86% der Menschen ändert sich dadurch das siderische Zeichen gegenüber dem tropischen.",
      },
    },
    {
      "@type": "Question",
      name: "Wer hat die Präzession entdeckt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Präzession wurde um 130 v. Chr. vom griechischen Astronomen Hipparch von Nicäa entdeckt. Er verglich seine Sternbeobachtungen mit älteren Aufzeichnungen und stellte fest, dass sich die Positionen der Sterne systematisch verschoben hatten.",
      },
    },
    {
      "@type": "Question",
      name: "Warum ignoriert die tropische Astrologie die Präzession?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die tropische Astrologie koppelt den Tierkreis bewusst an die Jahreszeiten statt an die Sterne. Ihre Vertreter argumentieren, dass die astrologische Wirkung von der Sonne-Erde-Beziehung ausgeht, nicht von den Sternbildern. Die siderische Astrologie hält dagegen, dass der Tierkreis an die tatsächlichen Sterne gebunden sein sollte.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist das Ayanamsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Ayanamsa ist der Winkelwert, um den sich der tropische Tierkreis vom siderischen entfernt hat — also die Summe der Präzession seit dem Referenzpunkt. Das bekannteste ist das Lahiri-Ayanamsa (ca. 24,17°), das von der indischen Regierung als Standard verwendet wird.",
      },
    },
  ],
};

export default function PraezessionPage() {
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
