import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Stirnchakra (Ajna) — Drittes Auge & Intuition | AstroMaster Wiki",
  description:
    "Das Stirnchakra (Ajna) ist das sechste Chakra und das berühmte Dritte Auge. Erfahre alles über Intuition, inneres Sehen, Blockaden, Übungen und die astrologische Verbindung zu Jupiter und Neptun.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist das Dritte Auge real?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Dritte Auge ist kein physisches Organ im w\u00f6rtlichen Sinne, wird aber in der Anatomie mit der Zirbeldr\u00fcse (Epiphyse) in Verbindung gebracht, die tats\u00e4chlich lichtempfindliche Zellen enth\u00e4lt. In der spirituellen Tradition bezeichnet es die F\u00e4higkeit zur erweiterten Wahrnehmung \u2014 Intuition, inneres Sehen und die Erkenntnis tieferer Zusammenh\u00e4nge jenseits der f\u00fcnf Sinne.",
      },
    },
    {
      "@type": "Question",
      name: "Wie kann ich mein Stirnchakra \u00f6ffnen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die wirksamsten Methoden sind regelm\u00e4\u00dfige Meditation mit Fokus auf den Punkt zwischen den Augenbrauen, Visualisierungs\u00fcbungen, das Chanten des Mantras OM und das F\u00fchren eines Traumtagebuchs. Auch die Reduktion von Bildschirmzeit und das Beobachten des Nachthimmels k\u00f6nnen helfen, die intuitive Wahrnehmung zu sch\u00e4rfen.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es eine Verbindung zwischen dem Stirnchakra und \u00fcbersinnlichen F\u00e4higkeiten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der yogischen Tradition gilt das ge\u00f6ffnete Ajna-Chakra als Quelle erweiterter Wahrnehmung \u2014 darunter Hellsehen, Pr\u00e4kognition und Telepathie. Moderne Interpreten sehen es eher als geschulte Intuition: die F\u00e4higkeit, subtile Muster und Zusammenh\u00e4nge wahrzunehmen, die dem Alltagsbewusstsein entgehen. Wichtig ist, die Entwicklung des Stirnchakras als schrittweisen Prozess zu sehen, nicht als pl\u00f6tzlichen \u00dcbergang zu \u00fcbersinnlichen Kr\u00e4ften.",
      },
    },
  ],
};

export default function StirnchakraPage() {
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
