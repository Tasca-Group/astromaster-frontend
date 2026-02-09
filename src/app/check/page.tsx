"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GratisCheckFormExtended, { type CheckFormData } from "@/components/GratisCheckFormExtended";
import OrderFlow from "@/components/OrderFlow";
import { gratisCheckExtended, type GratisCheckExtendedResponse, type ZeichenVergleich } from "@/lib/api";

const ZEICHEN_SVG: Record<string, string> = {
  Widder: "widder",
  Stier: "stier",
  Zwillinge: "zwillinge",
  Krebs: "krebs",
  "Löwe": "loewe",
  Jungfrau: "jungfrau",
  Waage: "waage",
  Skorpion: "skorpion",
  "Schütze": "schuetze",
  Steinbock: "steinbock",
  Wassermann: "wassermann",
  Fische: "fische",
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

/* ─── Result Card for a single Zeichen (Sonne/Mond/Aszendent) ─── */
function ZeichenCard({
  icon,
  label,
  data,
  wikiLink,
  wikiText,
  delay,
}: {
  icon: string;
  label: string;
  data: ZeichenVergleich;
  wikiLink: string;
  wikiText: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-card border border-[rgba(201,169,97,0.15)]"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-lg">{icon}</span>
        <span className="text-xs text-gold uppercase tracking-[0.15em] font-medium">
          {label}
        </span>
      </div>

      {/* Comparison */}
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {/* Tropisch */}
        <div className="flex-1 text-center flex flex-col items-center">
          <p className="text-[10px] text-muted uppercase tracking-wider mb-2">Tropisch</p>
          <ZodiacIcon zeichen={data.tropisch} className="opacity-40 mb-1.5" />
          <p className="text-lg font-semibold text-muted/60">{data.tropisch}</p>
        </div>

        {/* Indicator */}
        <div className="shrink-0">
          {data.abweichung ? (
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <span className="text-gold text-sm">&ne;</span>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/30 flex items-center justify-center">
              <span className="text-[#4CAF50] text-sm">=</span>
            </div>
          )}
        </div>

        {/* Siderisch */}
        <div className="flex-1 text-center flex flex-col items-center">
          <p className="text-[10px] text-gold uppercase tracking-wider mb-2">Siderisch</p>
          <ZodiacIcon zeichen={data.siderisch} className="mb-1.5" />
          <p className="text-lg font-semibold text-gold">{data.siderisch}</p>
        </div>
      </div>

      {/* Verdict */}
      <div className="mt-5 pt-4 border-t border-border/50">
        {data.abweichung ? (
          <p className="text-sm text-muted">
            <span className="text-gold">&#9888;</span>{" "}
            <span className="text-gold font-medium">Abweichung</span> &mdash;{" "}
            Dein wahres Zeichen ist{" "}
            <span className="text-gold font-semibold">{data.siderisch}</span>, nicht{" "}
            {data.tropisch}!
          </p>
        ) : (
          <p className="text-sm text-muted">
            <span className="text-[#4CAF50]">&#10003;</span>{" "}
            <span className="text-[#4CAF50] font-medium">&Uuml;bereinstimmung</span> &mdash;{" "}
            Aber wie sieht es bei deinen Planeten, H&auml;usern und Aspekten aus?
            Die volle Analyse deckt alles auf.
          </p>
        )}
      </div>

      {/* Wiki Link */}
      <div className="mt-3">
        <Link
          href={wikiLink}
          className="text-gold text-xs hover:underline"
        >
          {wikiText} &rarr;
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Upsell Teaser Cards ─── */
function UpsellTeaser() {
  const teasers = [
    {
      title: "10 Planeten",
      desc: "Merkur, Venus, Mars, Jupiter... alle in siderischen Positionen berechnet.",
      label: "In der Pro-Analyse",
    },
    {
      title: "12 H\u00e4user",
      desc: "Dein Lebensbereich-Chart \u2014 wo spielen sich deine Themen ab?",
      label: "In der Pro-Analyse",
    },
    {
      title: "Human Design",
      desc: "Dein energetischer Typ, Strategie und Autorit\u00e4t.",
      label: "In beiden Analysen",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12"
    >
      <p className="text-xs text-gold uppercase tracking-[0.2em] text-center mb-2">
        Du hast gerade die Spitze des Eisbergs gesehen
      </p>
      <p className="text-center text-muted text-sm mb-8">
        Die volle Analyse enth&auml;lt deutlich mehr.
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        {teasers.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            className="p-5 rounded-xl bg-card border border-border text-center"
          >
            <p className="font-semibold mb-2">{t.title}</p>
            <p className="text-xs text-muted leading-relaxed mb-3">{t.desc}</p>
            <span className="inline-block text-[10px] text-gold uppercase tracking-wider px-2 py-1 rounded-full bg-gold/5 border border-gold/20">
              {t.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function CheckPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GratisCheckExtendedResponse | null>(null);
  const [formData, setFormData] = useState<CheckFormData | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(data: CheckFormData) {
    setLoading(true);
    setError("");
    setResult(null);
    setFormData(data);

    const minDelay = new Promise((r) => setTimeout(r, 2000));

    try {
      const [res] = await Promise.all([gratisCheckExtended(data), minDelay]);
      // Backend may return basic format (tropisch/siderisch) without extended fields
      // Normalize: construct sonne from basic fields if missing
      if (!res.sonne) {
        res.sonne = {
          tropisch: res.tropisch,
          siderisch: res.siderisch,
          abweichung: res.abweichung,
        };
      }
      if (res.hat_uhrzeit === undefined) {
        res.hat_uhrzeit = false;
      }
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setResult(null);
    setFormData(null);
    setError("");
  }

  // Count deviations for summary
  const zeichen: { label: string; data: ZeichenVergleich | null }[] = result
    ? [
        { label: "Sonne", data: result.sonne },
        { label: "Mond", data: result.mond },
        { label: "Aszendent", data: result.aszendent },
      ].filter((z) => z.data !== null)
    : [];
  const totalZeichen = zeichen.length;
  const abweichungen = zeichen.filter((z) => z.data?.abweichung).length;

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
              <GratisCheckFormExtended onSubmit={handleSubmit} loading={loading} />
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
                    Berechne siderische Positionen...
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
            {/* Result Cards */}
            <div className="w-full max-w-xl mx-auto space-y-4">
              {/* Info */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-muted text-center mb-6"
              >
                Geburtsdatum: {formData?.geburtsdatum}
                {formData?.geburtszeit && <> &middot; {formData.geburtszeit} Uhr</>}
                {formData?.geburtsort && <> &middot; {formData.geburtsort}</>}
              </motion.p>

              {/* Sonne — always */}
              <ZeichenCard
                icon="&#9737;"
                label="Deine Sonne"
                data={result.sonne}
                wikiLink="/wiki/siderische-astrologie"
                wikiText="Was bedeutet das?"
                delay={0}
              />

              {/* Mond — only if returned by API */}
              {result.mond && (
                <ZeichenCard
                  icon="&#9789;"
                  label="Dein Mond"
                  data={result.mond}
                  wikiLink="/wiki/siderische-astrologie"
                  wikiText="Was sagt der Mond über dich?"
                  delay={0.5}
                />
              )}

              {/* Aszendent — only with time */}
              <AnimatePresence>
                {result.aszendent && (
                  <ZeichenCard
                    icon="&uarr;"
                    label="Dein Aszendent"
                    data={result.aszendent}
                    wikiLink="/wiki/siderische-astrologie"
                    wikiText="Was bedeutet der Aszendent?"
                    delay={1.0}
                  />
                )}
              </AnimatePresence>

              {/* Ophiuchus */}
              {result.ophiuchus && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.4 }}
                  className="p-5 rounded-2xl bg-gold/5 border border-gold/20"
                >
                  <p className="font-semibold text-gold mb-1">Ophiuchus entdeckt</p>
                  <p className="text-sm text-muted">
                    Deine Sonne steht im Bereich von Ophiuchus (Schlangentr&auml;ger) &mdash;
                    einem 13. Sternbild, das in der westlichen Astrologie ignoriert wird.
                  </p>
                </motion.div>
              )}

              {/* Summary Counter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: result.aszendent ? 1.5 : 1.0, duration: 0.5 }}
                className="p-5 rounded-2xl bg-card border border-border text-center"
              >
                {abweichungen > 0 ? (
                  <>
                    <p className="text-2xl font-bold text-gold mb-2">
                      {abweichungen} von {totalZeichen} Zeichen stimmen NICHT &uuml;berein!
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      Dein kosmisches Profil weicht deutlich vom tropischen System ab.
                      Die volle Analyse zeigt dir alle Planeten, H&auml;user und Aspekte &mdash;
                      und was sie wirklich &uuml;ber dich sagen.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-2xl font-bold text-[#4CAF50] mb-2">
                      Alle {totalZeichen} Zeichen stimmen &uuml;berein!
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      Das ist selten! Aber wusstest du, dass deine Planeten, H&auml;user
                      und Aspekte trotzdem komplett anders sein k&ouml;nnen?
                      Die volle Analyse zeigt dir das komplette Bild.
                    </p>
                  </>
                )}
              </motion.div>

              {/* Reset */}
              <div className="text-center pt-2">
                <button
                  onClick={handleReset}
                  className="text-muted hover:text-white text-sm transition-colors"
                >
                  &larr; Neuen Check starten
                </button>
              </div>
            </div>

            {/* Upsell Teaser */}
            <div className="max-w-xl mx-auto">
              <UpsellTeaser />
            </div>

            {/* Order Flow */}
            <div className="mt-16">
              <OrderFlow
                prefillGeburtsdatum={formData?.geburtsdatum}
                prefillGeburtszeit={formData?.geburtszeit}
                prefillGeburtsort={formData?.geburtsort}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
