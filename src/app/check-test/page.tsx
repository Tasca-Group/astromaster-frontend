"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GratisCheckForm from "@/components/GratisCheckForm";
import OrderFlow from "@/components/OrderFlow";
import { gratisCheck, type GratisCheckResponse } from "@/lib/api";

const ZEICHEN_SVG: Record<string, string> = {
  "Widder": "widder",
  "Stier": "stier",
  "Zwillinge": "zwillinge",
  "Krebs": "krebs",
  "Löwe": "loewe",
  "Jungfrau": "jungfrau",
  "Waage": "waage",
  "Skorpion": "skorpion",
  "Schütze": "schuetze",
  "Steinbock": "steinbock",
  "Wassermann": "wassermann",
  "Fische": "fische",
};

function ZodiacIcon({ zeichen, className = "" }: { zeichen: string; className?: string }) {
  const file = ZEICHEN_SVG[zeichen];
  if (!file) return null;
  return (
    <Image
      src={`/images/sternzeichen/${file}.svg`}
      alt={zeichen}
      width={48}
      height={48}
      className={className}
    />
  );
}

export default function CheckTestPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GratisCheckResponse | null>(null);
  const [geburtsdatum, setGeburtsdatum] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(datum: string) {
    setLoading(true);
    setError("");
    setResult(null);
    setGeburtsdatum(datum);

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
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Kostenlos
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em]">
            Dein wahrer System-Check
          </h1>
          <p className="mt-4 text-lg text-muted max-w-md mx-auto leading-relaxed">
            Gib dein Geburtsdatum ein und erfahre in Sekunden,
            ob dein Sternzeichen wirklich stimmt.
          </p>
        </motion.div>

        {!result ? (
          <>
            <div className="max-w-md mx-auto">
              <GratisCheckForm onSubmit={handleSubmit} loading={loading} />
            </div>

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
            {/* Result Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl mx-auto mb-16"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
                <p className="text-sm text-muted text-center mb-6">
                  Dein Geburtsdatum: {geburtsdatum}
                </p>

                <div className="flex items-center justify-center gap-4 sm:gap-8">
                  {/* Tropisch */}
                  <div className="flex-1 text-center flex flex-col items-center">
                    <p className="text-xs text-muted uppercase tracking-wider mb-2">Tropisch</p>
                    <ZodiacIcon zeichen={result.tropisch} className="opacity-40 mb-2" />
                    <p className="text-xl sm:text-2xl font-bold text-muted/60">{result.tropisch}</p>
                    <p className="text-xs text-muted mt-1">Westlich</p>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0">
                    {result.abweichung ? (
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                        <span className="text-gold text-lg">&ne;</span>
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                        <span className="text-green-400 text-lg">=</span>
                      </div>
                    )}
                  </div>

                  {/* Siderisch */}
                  <div className="flex-1 text-center flex flex-col items-center">
                    <p className="text-xs text-gold uppercase tracking-wider mb-2">Siderisch</p>
                    <ZodiacIcon zeichen={result.siderisch} className="mb-2" />
                    <p className="text-xl sm:text-2xl font-bold text-gold">{result.siderisch}</p>
                    <p className="text-xs text-muted mt-1">Astronomisch</p>
                  </div>
                </div>

                {/* Verdict */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  {result.abweichung ? (
                    <p className="text-lg">
                      Dein Sternzeichen ist <span className="text-gold font-semibold">nicht {result.tropisch}</span>,
                      sondern <span className="text-gold font-semibold">{result.siderisch}</span>.
                    </p>
                  ) : (
                    <p className="text-lg">
                      Dein Sternzeichen <span className="text-green-400 font-semibold">stimmt</span> &mdash;
                      du bist tatsächlich {result.siderisch}.
                    </p>
                  )}
                </div>
              </div>

              {/* Ophiuchus */}
              {result.ophiuchus && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mt-4 p-5 rounded-2xl bg-gold/5 border border-gold/20"
                >
                  <p className="font-semibold text-gold mb-1">Ophiuchus entdeckt</p>
                  <p className="text-sm text-muted">
                    Deine Sonne steht im Bereich von Ophiuchus (Schlangenträger) &mdash;
                    einem 13. Sternbild, das in der westlichen Astrologie ignoriert wird.
                    In deiner vollen Analyse erfährst du mehr.
                  </p>
                </motion.div>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={handleReset}
                  className="text-muted hover:text-white text-sm transition-colors"
                >
                  &larr; Neuen Check starten
                </button>
              </div>
            </motion.div>

            {/* Order Flow */}
            <OrderFlow prefillGeburtsdatum={geburtsdatum} />
          </>
        )}
      </div>
    </section>
  );
}
