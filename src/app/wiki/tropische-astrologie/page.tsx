import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Tropische Astrologie erklärt | AstroMaster Wiki",
  description:
    "Was ist tropische Astrologie? Erfahre, wie das westliche Standardsystem funktioniert, warum es auf Jahreszeiten basiert und welche Rolle die Präzession spielt.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist tropische Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tropische Astrologie ist das in der westlichen Welt verbreitete Sternzeichen-System. Es basiert auf den Jahreszeiten und fixiert den Frühlingspunkt auf 0° Widder, unabhängig davon, wo die Sterne tatsächlich stehen.",
      },
    },
    {
      "@type": "Question",
      name: "Warum stimmt mein tropisches Sternzeichen nicht mit den Sternen überein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durch die Präzession der Erdachse hat sich der tropische Tierkreis um etwa 24° von den tatsächlichen Sternpositionen entfernt. Das bedeutet, dass die Sonne am 21. März nicht mehr im Sternbild Widder steht, sondern in den Fischen.",
      },
    },
    {
      "@type": "Question",
      name: "Wann wurde die tropische Astrologie entwickelt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die tropische Astrologie wurde im antiken Griechenland formalisiert, insbesondere durch Claudius Ptolemäus im 2. Jahrhundert n. Chr. Sein Werk Tetrabiblos legte den Grundstein für das jahreszeitenbasierte System.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen tropischer und siderischer Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tropische Astrologie orientiert sich an den Jahreszeiten und dem Frühlingspunkt, siderische Astrologie an den tatsächlichen Sternpositionen. Durch die Präzession weichen die beiden Systeme heute um etwa 24° voneinander ab.",
      },
    },
  ],
};

export default function TropischeAstrologiePage() {
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
