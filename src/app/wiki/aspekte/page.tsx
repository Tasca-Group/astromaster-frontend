import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Aspekte in der Astrologie — Konjunktion, Trigon, Quadrat | AstroMaster Wiki",
  description:
    "Was sind Aspekte? Die 5 Hauptaspekte erklärt: Konjunktion, Sextil, Quadrat, Trigon und Opposition. Harmonische und Spannungsaspekte, Orbis und Deutung.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was sind Aspekte in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aspekte sind Winkelbeziehungen zwischen zwei Planeten im Horoskop. Sie zeigen, wie die Planetenenergien miteinander interagieren — ob sie sich unterstützen, herausfordern oder verstärken. Die fünf Hauptaspekte sind Konjunktion (0°), Sextil (60°), Quadrat (90°), Trigon (120°) und Opposition (180°).",
      },
    },
    {
      "@type": "Question",
      name: "Was ist ein Orbis bei Aspekten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Orbis ist die Toleranz, innerhalb derer ein Aspekt als wirksam gilt. Ein exaktes Trigon wäre genau 120°, aber auch bei 117° oder 123° spricht man noch von einem Trigon. Der übliche Orbis beträgt 6-10° für Hauptaspekte, wobei Aspekte mit Sonne und Mond einen größeren Orbis erhalten.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen harmonischen und Spannungsaspekten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harmonische Aspekte (Trigon, Sextil) zeigen Bereiche, in denen Energien leicht und unterstützend fließen — natürliche Talente und Leichtigkeit. Spannungsaspekte (Quadrat, Opposition) zeigen Bereiche der Herausforderung und des Wachstums — sie erzeugen die Reibung, die zur Entwicklung führt.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist eine Konjunktion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Konjunktion entsteht, wenn zwei Planeten am gleichen Punkt des Tierkreises stehen (0° Abstand). Sie ist der stärkste aller Aspekte und verschmilzt die Energien beider Planeten zu einer einzigen Kraft. Je nach beteiligten Planeten kann eine Konjunktion harmonisch oder herausfordernd sein.",
      },
    },
  ],
};

export default function AspektePage() {
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
