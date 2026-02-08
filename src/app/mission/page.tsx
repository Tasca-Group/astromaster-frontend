"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

export default function MissionPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Unsere Mission
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Warum AstroMaster existiert
          </h1>
        </motion.div>

        <div className="space-y-12">
          <AnimateOnScroll>
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-4">Das Problem</h2>
              <p className="text-muted leading-relaxed">
                Milliarden von Menschen weltweit lesen taeglich ihr Horoskop. Was die
                wenigsten wissen: Die westliche Astrologie basiert auf einem 2.000
                Jahre alten System, das die Praezession der Erdachse ignoriert. Die
                Sterne haben sich seitdem um ca. 24 Grad verschoben. Das bedeutet:
                86% aller Menschen haben ein anderes Sternzeichen als sie glauben.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-4">Unsere Loesung</h2>
              <p className="text-muted leading-relaxed">
                AstroMaster nutzt siderische Astrologie mit dem Lahiri-Ayanamsa &mdash;
                dem internationalen Standard fuer astronomisch korrekte Berechnungen.
                Dazu kombinieren wir 4 weitere Systeme: Numerologie, Aegyptische
                Dekane, Human Design und Elementar-Analyse. Das Ergebnis ist das
                umfassendste kosmische Profil, das du je gesehen hast.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-4">Unser Versprechen</h2>
              <p className="text-muted leading-relaxed">
                Keine Esoterik-Floskeln. Keine vagen Aussagen, die auf jeden zutreffen.
                Wir berechnen dein Profil auf Basis der Swiss Ephemeris &mdash; der
                gleichen Datenbank, die auch von Observatorien weltweit genutzt wird.
                Jedes Ergebnis ist individuell und auf deine exakten Geburtsdaten
                zugeschnitten.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <div className="mt-16 text-center">
            <Link
              href="/check"
              className="inline-block bg-gold hover:bg-gold-hover text-bg font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Kostenloser Check &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
