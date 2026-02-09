import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Das Dekansystem erklärt — Von der Astronomie zur Mythologie | AstroMaster Wiki",
  description:
    "Wie funktioniert das ägyptische Dekansystem? 36 Dekane zu je 10° teilen den Tierkreis in fein differenzierte Abschnitte. Erfahre die Geschichte, Mathematik und moderne Anwendung.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist ein Dekan in der Astrologie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Dekan ist ein 10°-Abschnitt des Tierkreises. Da der Tierkreis 360° umfasst, ergeben sich 36 Dekane. Jedes Sternzeichen (30°) enthält genau drei Dekane. Das System stammt aus dem alten Ägypten und ist über 4.000 Jahre alt. Im ägyptischen Dekansystem wird jeder Dekan von einer Gottheit bewacht.",
      },
    },
    {
      "@type": "Question",
      name: "Warum teilt man den Tierkreis in 10-Grad-Abschnitte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die 10-Grad-Einteilung hat astronomische Ursprünge: Die alten Ägypter beobachteten, dass eine bestimmte Sterngruppe (Dekan) jeweils 10 Tage lang als Leitstern am Morgenhimmel erschien, bevor die nächste Gruppe übernahm. Diese 10-Tage-Zyklen bildeten die Grundlage des ägyptischen Kalenders und des Dekansystems.",
      },
    },
    {
      "@type": "Question",
      name: "Wie alt ist das Dekansystem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das Dekansystem ist über 4.000 Jahre alt. Die frühesten Darstellungen finden sich auf ägyptischen Särgen des Mittleren Reichs (ca. 2100 v. Chr.). Das berühmteste Monument ist die Decke des Dendera-Tempels (ca. 50 v. Chr.), die alle 36 Dekane zeigt. Das System wurde von den Griechen und Arabern übernommen und lebt bis heute in der Astrologie fort.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Dekanen und Häusern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dekane und Häuser sind verschiedene Einteilungssysteme. Dekane teilen die Ekliptik (den Tierkreis) in 36 Abschnitte zu je 10° — sie sind fix und für alle gleich. Häuser teilen den Himmel basierend auf der Geburtszeit und dem Geburtsort in 12 Abschnitte — sie sind individuell und ändern sich mit jeder Geburtsminute. Beide Systeme ergänzen sich.",
      },
    },
    {
      "@type": "Question",
      name: "Wie nutzt AstroMaster das Dekansystem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstroMaster berechnet aus deinem Geburtsdatum, in welchem der 36 (bzw. 37 mit Sothis) Dekane die Sonne bei deiner Geburt stand. Diesem Dekan ist eine ägyptische Gottheit zugeordnet, die als dein kosmischer Wächter gilt. Die Analyse beschreibt die Qualitäten dieser Gottheit und wie sie sich in deiner Persönlichkeit zeigen.",
      },
    },
  ],
};

export default function DekansystemPage() {
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
