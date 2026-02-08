"use client";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

const faqItems = [
  {
    question: "Was ist siderische Astrologie?",
    answer:
      "Siderische Astrologie berechnet die Planetenpositionen anhand der tatsächlichen Sternbilder am Himmel. Im Gegensatz zur tropischen (westlichen) Astrologie berücksichtigt sie die Präzession der Erdachse \u2014 eine langsame Kreiselbewegung, die dazu führt, dass sich die Sternbilder über Jahrhunderte verschieben.",
  },
  {
    question: "Warum stimmt mein Sternzeichen nicht?",
    answer:
      "Vor ca. 2.000 Jahren lagen tropische und siderische Zeichen noch übereinander. Durch die Präzession hat sich der Frühlingspunkt um ca. 24 Grad verschoben. Deshalb zeigt dein westliches Horoskop ein anderes Zeichen als die Sterne tatsächlich anzeigen. Bei 86% der Menschen weicht das siderische Zeichen vom tropischen ab.",
  },
  {
    question: "Was ist der Lahiri-Ayanamsa?",
    answer:
      "Der Lahiri-Ayanamsa ist der international anerkannte Standard zur Berechnung der Differenz zwischen tropischem und siderischem Tierkreis. Er wird von der indischen Regierung offiziell verwendet und gilt als die präziseste Methode.",
  },
  {
    question: "Brauche ich meine genaue Geburtszeit?",
    answer:
      "Für den kostenlosen Gratis-Check reicht dein Geburtsdatum. Für die volle Analyse mit Mond, Aszendent und Human Design ist die genaue Geburtszeit wichtig. Du findest sie auf deiner Geburtsurkunde oder beim Standesamt deines Geburtsortes.",
  },
  {
    question: "Wie genau sind die Berechnungen?",
    answer:
      "Wir nutzen die Swiss Ephemeris \u2014 die weltweit präziseste astronomische Datenbank, die auch von Observatorien und der NASA verwendet wird. Die Berechnungen sind auf Bogenminuten genau.",
  },
  {
    question: "Was beinhaltet die Normal-Analyse?",
    answer:
      "Die Normal-Analyse (39\u20AC) umfasst: Siderischer System-Check, Sonne, Mond & Aszendent, Lebenszahl & Numerologie, Elementar-Analyse und deine Kosmische Signatur. 12-15 Seiten als PDF.",
  },
  {
    question: "Was beinhaltet die Pro-Analyse?",
    answer:
      "Die Pro-Analyse (89\u20AC) enthält alles aus der Normal-Version plus: alle Planeten & 12 Häuser, Ägyptischer Wächter & Dekan, Human Design Typ & Strategie, Aspekte & Nakshatras, Ma'at-Synthese und Journaling-Impulse. 50-60 Seiten als PDF.",
  },
  {
    question: "Wie erhalte ich meine Analyse?",
    answer:
      "Nach der Bestellung wird deine Analyse automatisch berechnet und als PDF per Email zugesendet. In der Regel dauert dies wenige Minuten.",
  },
  {
    question: "Gibt es eine Geld-zurück-Garantie?",
    answer:
      "Ja, wir bieten eine 14-tägige Geld-zurück-Garantie. Wenn du mit deiner Analyse nicht zufrieden bist, erstatten wir den vollen Kaufpreis.",
  },
  {
    question: "Was ist Human Design?",
    answer:
      "Human Design ist ein System, das Astrologie, I Ging, Kabbala und Quantenphysik verbindet. Es berechnet deinen energetischen Typ, deine Strategie und innere Autorität \u2014 praktische Werkzeuge für bessere Entscheidungen im Alltag.",
  },
  {
    question: "Was sind Ägyptische Dekane?",
    answer:
      "Die Ägyptischen Dekane sind ein 4.000 Jahre altes System aus dem Alten Ägypten. Jedes Sternzeichen wird in drei Dekane (je 10 Grad) unterteilt, die jeweils einem göttlichen Wächter zugeordnet sind. In der Pro-Analyse erfährst du deinen persönlichen Wächter.",
  },
  {
    question: "Werden meine Daten gespeichert?",
    answer:
      "Deine Geburtsdaten werden ausschließlich zur Berechnung deiner Analyse verwendet. Wir speichern keine IP-Adressen im Klartext (nur als anonymisierter Hash) und geben keine Daten an Dritte weiter. Alle Daten werden auf Servern in Deutschland verarbeitet.",
  },
];

export default function FAQPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Häufige Fragen
          </h1>
          <p className="mt-4 text-lg text-muted">
            Alles, was du über AstroMaster wissen musst.
          </p>
        </motion.div>

        <FAQAccordion items={faqItems} />

        <div className="mt-16 text-center">
          <p className="text-muted mb-4">Noch Fragen?</p>
          <Link
            href="/check"
            className="inline-block bg-gold hover:bg-gold-hover text-bg font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Kostenloser Check &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
