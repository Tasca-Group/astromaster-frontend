import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Strategie & Autorit\u00e4t im Human Design | AstroMaster Wiki",
  description:
    "Was ist Strategie und Autorit\u00e4t im Human Design? Erfahre alles \u00fcber die 7 Autorit\u00e4ten (Emotional, Sakral, Milz, Ego, Selbstprojiziert, Mental, Lunar) und die richtige Strategie f\u00fcr jeden Typ.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist eine Strategie im Human Design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deine Strategie im Human Design beschreibt, wie du am besten mit der Welt interagierst. Sie wird durch deinen Typ bestimmt: Generatoren und Manifestierende Generatoren reagieren, Projektoren warten auf Einladungen, Manifestoren informieren und Reflektoren warten einen Mondzyklus ab.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist eine Autorit\u00e4t im Human Design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deine Autorit\u00e4t ist dein innerer Entscheidungskompass. Sie sagt dir, welche Entscheidungen richtig f\u00fcr dich sind. Es gibt sieben Autorit\u00e4ten: Emotionale, Sakrale, Milz-, Ego/Herz-, Selbstprojizierte, Mentale/Umwelt- und Lunare Autorit\u00e4t. Jede nutzt einen anderen k\u00f6rperlichen Mechanismus.",
      },
    },
    {
      "@type": "Question",
      name: "Wie finde ich meine Autorit\u00e4t heraus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deine Autorit\u00e4t wird durch die Hierarchie der definierten Zentren in deinem BodyGraph bestimmt. Wenn dein Emotionalzentrum definiert ist, hast du immer emotionale Autorit\u00e4t, unabh\u00e4ngig von anderen Definitionen. Ist es offen, pr\u00fcft man das Sakral, dann die Milz, usw. AstroMaster berechnet deine Autorit\u00e4t automatisch.",
      },
    },
    {
      "@type": "Question",
      name: "Kann der Verstand gute Entscheidungen treffen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Im Human Design ist der Verstand ein hervorragender Beobachter und Berater f\u00fcr andere, aber kein zuverl\u00e4ssiges Entscheidungsinstrument f\u00fcr dich selbst. Dein K\u00f6rper (durch Sakral, Milz, Emotionen etc.) wei\u00df besser als dein Kopf, was richtig f\u00fcr dich ist. Der Verstand rationalisiert nachtr\u00e4glich.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert Dekonditionierung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ra Uru Hu sprach von einem Sieben-Jahres-Zyklus f\u00fcr die vollst\u00e4ndige Dekonditionierung. Das ist die Zeit, die der K\u00f6rper braucht, um alle Zellen zu erneuern. In der Praxis merkst du erste Ver\u00e4nderungen aber schon nach wenigen Wochen konsequenter Anwendung deiner Strategie und Autorit\u00e4t.",
      },
    },
  ],
};

export default function StrategieAutoritaetPage() {
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
