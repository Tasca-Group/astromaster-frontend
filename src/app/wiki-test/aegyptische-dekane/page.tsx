import type { Metadata } from "next";
import Script from "next/script";
import WikiArticle from "./WikiArticle";

export const metadata: Metadata = {
  title: "Ägyptische Dekane erklärt | AstroMaster Wiki",
  description:
    "Was sind ägyptische Dekane? Erfahre, wie 36 Gottheiten den Tierkreis bewachen, welcher Gott dich seit deiner Geburt begleitet und was das älteste Dekansystem bedeutet.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist ein ägyptischer Dekan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Dekan ist ein 10°-Abschnitt des Tierkreises. Da der Tierkreis 360° umfasst, ergeben sich 36 Dekane — jeder bewacht von einer altägyptischen Gottheit mit eigenen Qualitäten und Energien.",
      },
    },
    {
      "@type": "Question",
      name: "Woher weiß ich, welcher Dekan meiner ist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dein Dekan wird durch dein Geburtsdatum bestimmt. Jedes Sternzeichen enthält drei Dekane zu je 10°. AstroMaster berechnet deinen exakten Dekan und die zugehörige ägyptische Schutzgottheit automatisch.",
      },
    },
    {
      "@type": "Question",
      name: "Sind die ägyptischen Dekane wissenschaftlich belegt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die ägyptischen Dekane sind ein historisch-kulturelles System, das vor über 4.000 Jahren in Ägypten entwickelt wurde. Sie dienten zur Zeitmessung und spirituellen Orientierung. Es handelt sich nicht um Naturwissenschaft, sondern um ein archetypisches Deutungssystem.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Dekanen und Sternzeichen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sternzeichen umfassen jeweils 30° des Tierkreises, Dekane nur 10°. Jedes Sternzeichen wird in drei Dekane unterteilt, die feinere Persönlichkeitsmerkmale beschreiben. Das Sternzeichen ist das Kapitel, der Dekan ist der spezifische Absatz.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist Sothis — der 37. Dekan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sothis ist der 37. Dekan im AstroMaster-System, benannt nach dem altägyptischen Namen für den Stern Sirius. Sirius war für die Ägypter der heiligste Stern am Himmel, dessen Aufgang die Nilflut und das neue Jahr ankündigte.",
      },
    },
  ],
};

export default function AegyptischeDekanePage() {
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
