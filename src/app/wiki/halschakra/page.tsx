import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Halschakra (Vishuddha) — Kommunikation & Wahrheit | AstroMaster Wiki",
  description:
    "Das Halschakra (Vishuddha) ist das fünfte Chakra und das Zentrum authentischer Kommunikation, kreativen Ausdrucks und innerer Wahrheit. Erfahre alles über Blockaden, Balance, Übungen und die astrologische Verbindung zu Merkur.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie erkenne ich ein blockiertes Halschakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein blockiertes Halschakra zeigt sich h\u00e4ufig durch Schwierigkeiten, sich auszudr\u00fccken, Angst vor \u00f6ffentlichem Sprechen, chronische Halsschmerzen, Schilddr\u00fcsenprobleme oder das Gef\u00fchl, nicht geh\u00f6rt zu werden. Auch \u00fcberm\u00e4\u00dfiges Reden ohne Substanz oder die Neigung zu l\u00fcgen k\u00f6nnen Hinweise auf ein Ungleichgewicht im f\u00fcnften Chakra sein.",
      },
    },
    {
      "@type": "Question",
      name: "Welche \u00dcbungen helfen, das Halschakra zu \u00f6ffnen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Singen, Summen und das Chanten des Mantras HAM sind besonders wirksam. Auch Journaling, kreatives Schreiben, Halschakra-Yoga (Schulterstand, Pflug, Fisch-Pose) und bewusstes Schweigen f\u00fcr 10 Minuten t\u00e4glich k\u00f6nnen das Halschakra st\u00e4rken. Blaue Lebensmittel wie Blaubeeren unterst\u00fctzen zus\u00e4tzlich.",
      },
    },
    {
      "@type": "Question",
      name: "Was hat das Halschakra mit Astrologie zu tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Halschakra wird dem Planeten Merkur zugeordnet, der in der Astrologie f\u00fcr Kommunikation, Lernen und geistigen Austausch steht. Die Sternzeichen Zwillinge und Jungfrau, beide von Merkur regiert, haben eine nat\u00fcrliche Affinit\u00e4t zum Halschakra. In der siderischen Astrologie kann sich die Position deines Merkur verschieben, was deine Kommunikationsart beeinflusst.",
      },
    },
  ],
};

export default function HalschakraPage() {
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
