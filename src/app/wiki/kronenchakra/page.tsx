import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Kronenchakra (Sahasrara) — Spiritualität & Erleuchtung | AstroMaster Wiki",
  description:
    "Das Kronenchakra (Sahasrara) ist das siebte und höchste Chakra — das Zentrum spirituellen Bewusstseins, kosmischer Verbundenheit und inneren Friedens. Erfahre alles über Blockaden, Balance, Übungen und die astrologische Verbindung zu Uranus und Sonne.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie \u00f6ffne ich mein Kronenchakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Kronenchakra l\u00e4sst sich nicht \u00f6ffnen wie eine T\u00fcr \u2014 es entfaltet sich von selbst, wenn die sechs darunterliegenden Chakren in Balance sind. Stille Meditation, Dankbarkeitspraxis, Dienst an anderen und das Verbringen von Zeit in der Natur k\u00f6nnen den Prozess unterst\u00fctzen. Erzwingen l\u00e4sst sich die \u00d6ffnung nicht; sie geschieht durch Hingabe und Loslassen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist es gef\u00e4hrlich, das Kronenchakra zu \u00f6ffnen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine erzwungene oder verfrühte Öffnung des Kronenchakras — etwa durch intensive Atemtechniken ohne Vorbereitung — kann zu Desorientierung, Dissoziation oder psychischem Ungleichgewicht f\u00fchren. Deshalb betonen alle seri\u00f6sen Traditionen die Wichtigkeit einer soliden Basis: Erst wenn die unteren Chakren stabil und geerdet sind, ist eine sichere Entfaltung des Kronenchakras m\u00f6glich.",
      },
    },
    {
      "@type": "Question",
      name: "Kann jeder Mensch Erleuchtung erfahren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach den meisten spirituellen Traditionen hat jeder Mensch das Potenzial zur Erleuchtung. Es geht jedoch nicht um ein Ziel, das man \u00aberreicht\u00bb, sondern um einen fortlaufenden Prozess der Bewusstwerdung. Schon kleine Momente der Stille, Verbundenheit und des Staunens \u00fcber das Leben sind Berührungen mit der Kronenchakra-Energie. Vollst\u00e4ndige Erleuchtung ist selten, aber Gl\u00fcckseligkeit und innerer Frieden sind f\u00fcr jeden zug\u00e4nglich.",
      },
    },
  ],
};

export default function KronenchakraPage() {
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
