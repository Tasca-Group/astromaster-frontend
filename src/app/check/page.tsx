"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GratisCheckForm from "@/components/GratisCheckForm";
import CheckResult from "@/components/CheckResult";
import { gratisCheck, type GratisCheckResponse } from "@/lib/api";

export default function CheckPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GratisCheckResponse | null>(null);
  const [geburtsdatum, setGeburtsdatum] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(datum: string) {
    setLoading(true);
    setError("");
    setResult(null);
    setGeburtsdatum(datum);

    // Minimum loading time for effect
    const minDelay = new Promise((r) => setTimeout(r, 2000));

    try {
      const [res] = await Promise.all([gratisCheck(datum), minDelay]);
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setResult(null);
    setGeburtsdatum("");
    setError("");
  }

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Kostenlos
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Dein wahrer System-Check
          </h1>
          <p className="mt-4 text-lg text-muted max-w-md mx-auto">
            Gib dein Geburtsdatum ein und erfahre in Sekunden,
            ob dein Sternzeichen wirklich stimmt.
          </p>
        </motion.div>

        {!result ? (
          <>
            <GratisCheckForm onSubmit={handleSubmit} loading={loading} />

            {/* Loading animation */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-center"
              >
                <div className="inline-flex flex-col items-center gap-4">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-gold rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted">
                    Berechne siderische Position...
                  </p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-red-400 text-center"
              >
                {error}
              </motion.p>
            )}
          </>
        ) : (
          <>
            <CheckResult result={result} geburtsdatum={geburtsdatum} />
            <div className="mt-8 text-center">
              <button
                onClick={handleReset}
                className="text-muted hover:text-white text-sm transition-colors"
              >
                &larr; Neuen Check starten
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
