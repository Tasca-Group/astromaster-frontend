import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Die 10 Planeten in der Astrologie | AstroMaster Wiki",
  description:
    "Sonne, Mond, Merkur bis Pluto — die Bedeutung aller 10 Planeten in der Astrologie. Persönliche, soziale und transpersonale Planeten erklärt.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Planeten gibt es in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Astrologie werden 10 Himmelskörper als Planeten bezeichnet: Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun und Pluto. Sonne und Mond werden als Luminare (Lichter) bezeichnet, gelten aber astrologisch als Planeten.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen persönlichen und transpersonalen Planeten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Persönliche Planeten (Sonne, Mond, Merkur, Venus, Mars) bewegen sich schnell und prägen die individuelle Persönlichkeit. Soziale Planeten (Jupiter, Saturn) wirken auf gesellschaftlicher Ebene. Transpersonale Planeten (Uranus, Neptun, Pluto) bewegen sich sehr langsam und betreffen ganze Generationen.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet es, wenn ein Planet rückläufig ist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein rückläufiger (retrograder) Planet bewegt sich scheinbar rückwärts am Himmel — eine optische Täuschung durch die unterschiedlichen Umlaufgeschwindigkeiten. In der Astrologie steht Rückläufigkeit für Reflexion, Verzögerung und die Aufforderung, innezuhalten und vergangene Themen zu überprüfen.",
      },
    },
    {
      "@type": "Question",
      name: "Warum gelten Sonne und Mond als Planeten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Astronomisch ist die Sonne ein Stern und der Mond ein Satellit. In der Astrologie werden sie jedoch traditionell als Planeten geführt, weil sie sich aus irdischer Perspektive wie Planeten durch den Tierkreis bewegen und die stärkste Wirkung auf das individuelle Horoskop haben.",
      },
    },
  ],
};

export default function PlanetenPage() {
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
