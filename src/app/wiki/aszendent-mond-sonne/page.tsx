import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Aszendent, Mond & Sonne — Die große Drei | AstroMaster Wiki",
  description:
    "Die drei wichtigsten Positionen in deinem Horoskop: Sonnenzeichen, Mondzeichen und Aszendent. Warum die große Drei ein vollständigeres Bild deiner Persönlichkeit zeichnen.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist die große Drei in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die große Drei (Big Three) sind die drei wichtigsten Positionen in deinem Geburtshoroskop: Sonnenzeichen (Kern-Identität), Mondzeichen (Emotionen und Innenwelt) und Aszendent (äußere Wirkung und erster Eindruck). Zusammen ergeben sie ein viel vollständigeres Bild als das Sonnenzeichen allein.",
      },
    },
    {
      "@type": "Question",
      name: "Wie finde ich meinen Aszendenten heraus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für den Aszendenten brauchst du deine exakte Geburtszeit und deinen Geburtsort. Der Aszendent ist das Sternzeichen, das zum Zeitpunkt deiner Geburt am östlichen Horizont aufging. Er wechselt etwa alle zwei Stunden, weshalb die genaue Uhrzeit so wichtig ist.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Sonnenzeichen und Mondzeichen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Sonnenzeichen zeigt dein bewusstes Ich, deinen Kern und deine Lebensrichtung — wer du sein willst. Das Mondzeichen zeigt dein emotionales Ich, deine Bedürfnisse und Instinkte — wer du bist, wenn du dich unbeobachtet fühlst. Die Sonne ist der Tag, der Mond ist die Nacht.",
      },
    },
    {
      "@type": "Question",
      name: "Warum kennen die meisten Menschen nur ihr Sonnenzeichen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Sonnenzeichen lässt sich allein aus dem Geburtsdatum bestimmen — man braucht weder Geburtszeit noch -ort. Zeitungshoroskope verwenden deshalb nur das Sonnenzeichen. Für Mond und Aszendent sind die exakte Uhrzeit und der Ort nötig, was eine professionelle Berechnung erfordert.",
      },
    },
    {
      "@type": "Question",
      name: "Kann mein Aszendent ein anderes Zeichen sein als meine Sonne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, und das ist sogar der Normalfall. Sonne, Mond und Aszendent sind bei den meisten Menschen drei verschiedene Zeichen. Das erklärt, warum sich viele nicht vollständig mit der Beschreibung ihres Sonnenzeichens identifizieren.",
      },
    },
  ],
};

export default function AszendentMondSonnePage() {
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
