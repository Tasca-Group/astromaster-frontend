import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Sakralchakra (Svadhisthana) erkl\u00e4rt | AstroMaster Wiki",
  description:
    "Das Sakralchakra (Svadhisthana) \u2014 Kreativit\u00e4t, Emotionen, Sinnlichkeit. Erfahre alles \u00fcber das zweite Chakra: Sanskrit-Bedeutung, Blockaden, Balance, \u00dcbungen, Edelsteine und die Verbindung zur Astrologie.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie erkenne ich ein blockiertes Sakralchakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typische Anzeichen f\u00fcr ein blockiertes Sakralchakra sind emotionale Taubheit, Schuldgef\u00fchle rund um Genuss und Sexualit\u00e4t, Kreativit\u00e4tsblockaden, Suchtverhalten und das Gef\u00fchl, das Leben sei grau und freudlos. K\u00f6rperlich k\u00f6nnen Menstruationsbeschwerden, Nierenprobleme oder Probleme im unteren R\u00fccken auftreten.",
      },
    },
    {
      "@type": "Question",
      name: "Welche \u00dcbungen helfen beim Sakralchakra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "H\u00fcft\u00f6ffnende Yoga-Posen wie der Schmetterling (Baddha Konasana) und die Taube (Eka Pada Rajakapotasana) sind besonders wirksam. Auch Tanzen, flie\u00dfende Bewegungen, Zeit am Wasser und kreatives Schaffen ohne Bewertung aktivieren das Svadhisthana. Das Chanten des Mantras VAM unterst\u00fctzt den Prozess.",
      },
    },
    {
      "@type": "Question",
      name: "Was hat der Mond mit dem Sakralchakra zu tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Mond ist der Herrscherplanet des Sakralchakras. Er regiert die Gef\u00fchlswelt, die Intuition und den nat\u00fcrlichen Rhythmus des Lebens \u2014 genau wie das Wasser, das Element des zweiten Chakras. Die Wasserzeichen Krebs, Skorpion und Fische haben eine besonders starke Verbindung zum Sakralchakra. Der Mondstand in deinem Geburtshoroskop gibt Aufschluss \u00fcber deine emotionale Grundstruktur.",
      },
    },
  ],
};

export default function SakralchakraPage() {
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
