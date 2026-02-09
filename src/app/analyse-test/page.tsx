"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCardTest from "@/components/ProductCardTest";
import StyleSelector from "@/components/StyleSelector";
import FAQAccordion from "@/components/FAQAccordion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { PRICES, PRODUCT_FEATURES } from "@/lib/constants";

const BONUSES = {
  normal: [
    "Digitales Zertifikat deiner Geburtssterne (PDF)",
    "Elemente-Guide mit Tipps für deinen Alltag",
  ],
  pro: [
    "Alles aus Standard",
    "30-Tage Integrations-Journal (PDF)",
    "Personalisiertes Kosmisches Siegel (Grafik)",
    "Ma'at-Synthese-Guide",
  ],
} as const;

const faqItems = [
  {
    question: "Was ist der Unterschied zwischen tropischer und siderischer Astrologie?",
    answer:
      "Die tropische Astrologie (westliches Horoskop) basiert auf den Jahreszeiten. Die siderische Astrologie basiert auf den tatsächlichen Sternpositionen. Durch die Präzession der Erdachse haben sich diese um ca. 24 Grad verschoben \u2014 deshalb stimmen die meisten Sternzeichen nicht mehr.",
  },
  {
    question: "Wie lange dauert es, bis ich meine Analyse erhalte?",
    answer:
      "Deine Analyse wird automatisch berechnet und als PDF per Email zugesendet. In der Regel erhältst du sie innerhalb weniger Minuten nach der Bestellung.",
  },
  {
    question: "Brauche ich meine genaue Geburtszeit?",
    answer:
      "Ja, für eine präzise Berechnung von Mond, Aszendent und Human Design ist die Geburtszeit wichtig. Falls du sie nicht kennst, kannst du beim Standesamt deines Geburtsortes nachfragen.",
  },
  {
    question: "Was unterscheidet die Normal- von der Pro-Version?",
    answer:
      "Die Normal-Version umfasst die wichtigsten Berechnungen: Sonne, Mond, Aszendent, Lebenszahl und Elementar-Analyse (12-15 Seiten). Die Pro-Version geht deutlich tiefer: alle Planeten, 12 Häuser, Ägyptische Dekane, Human Design, Aspekte, Nakshatras und eine umfassende Ma'at-Synthese (50-60 Seiten).",
  },
  {
    question: "Ist die Berechnung wissenschaftlich fundiert?",
    answer:
      "Die siderische Berechnung basiert auf dem Lahiri-Ayanamsa, dem international anerkannten Standard für astronomisch korrekte Sternpositionen. Wir nutzen die Swiss Ephemeris \u2014 die gleiche Datenbank, die auch von Observatorien verwendet wird.",
  },
  {
    question: "Kann ich die Analyse als Geschenk bestellen?",
    answer:
      "Ja! Du kannst die Geburtsdaten einer anderen Person eingeben und die PDF-Analyse wird an deine Email-Adresse gesendet. Perfekt als Geschenk.",
  },
];

export default function AnalyseTestPage() {
  const [designStyle, setDesignStyle] = useState<"dark" | "light">("dark");

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Deine Analyse
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Wähle dein Profil
          </h1>
          <p className="mt-4 text-lg text-muted max-w-lg mx-auto">
            5 Systeme. 1 PDF. Die Wahrheit über dein kosmisches Profil.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-24">
          <AnimateOnScroll>
            <ProductCardTest
              version="normal"
              title="Normal"
              price={PRICES.normal}
              pages="12-15 Seiten PDF"
              features={PRODUCT_FEATURES.normal}
              bonuses={BONUSES.normal}
              designParam={designStyle}
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <ProductCardTest
              version="pro"
              title="Pro"
              price={PRICES.pro}
              pages="50-60 Seiten PDF"
              features={PRODUCT_FEATURES.pro}
              bonuses={BONUSES.pro}
              highlighted
              badge="Beliebteste Wahl"
              designParam={designStyle}
            />
          </AnimateOnScroll>
        </div>

        {/* Style Selector */}
        <AnimateOnScroll>
          <div className="mb-24">
            <StyleSelector selected={designStyle} onSelect={setDesignStyle} />
          </div>
        </AnimateOnScroll>

        {/* FAQ */}
        <AnimateOnScroll>
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Häufige Fragen
            </h2>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <FAQAccordion items={faqItems} />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
