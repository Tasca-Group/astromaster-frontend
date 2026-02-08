"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BestaetigungPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Checkmark */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-gold text-3xl"
            >
              &#10003;
            </motion.span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Vielen Dank!</h1>
          <p className="text-lg text-muted mb-8">
            Deine Bestellung ist eingegangen. Du erhaeltst deine kosmische Analyse
            innerhalb von 24 Stunden per Email.
          </p>

          {/* Progress Steps */}
          <div className="p-6 rounded-2xl bg-card border border-border mb-8">
            <div className="space-y-4">
              {[
                { label: "Bestellung eingegangen", done: true },
                { label: "Berechnung laeuft", done: false, active: true },
                { label: "PDF wird erstellt", done: false },
                { label: "Email versendet", done: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs ${
                      step.done
                        ? "bg-gold text-bg"
                        : step.active
                        ? "border-2 border-gold"
                        : "border border-border"
                    }`}
                  >
                    {step.done && "\u2713"}
                    {step.active && (
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                    )}
                  </div>
                  <span
                    className={
                      step.done
                        ? "text-white"
                        : step.active
                        ? "text-gold"
                        : "text-muted"
                    }
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="text-muted hover:text-white text-sm transition-colors"
          >
            &larr; Zurueck zur Startseite
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
