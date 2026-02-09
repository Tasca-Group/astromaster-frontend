"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { GratisCheckResponse } from "@/lib/api";
import { PRICES } from "@/lib/constants";

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

interface Props {
  result: GratisCheckResponse;
  geburtsdatum: string;
}

export default function CheckResult({ result, geburtsdatum }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto"
    >
      {/* Result Card */}
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

      {/* Ophiuchus Box */}
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

      {/* Upsell */}
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <Link
          href="/checkout?version=normal"
          className="block p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors text-center"
        >
          <p className="text-sm text-muted mb-1">Normal-Analyse</p>
          <p className="text-2xl font-bold">{PRICES.normal}&euro;</p>
          <p className="text-sm text-muted mt-1">12-15 Seiten PDF</p>
          <span className="inline-block mt-4 text-gold text-sm font-medium">
            Jetzt bestellen &rarr;
          </span>
        </Link>
        <Link
          href="/checkout?version=pro"
          className="block p-6 rounded-2xl bg-card border border-gold/40 hover:border-gold transition-colors text-center relative"
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bg text-xs font-semibold px-3 py-1 rounded-full">
            Beliebteste Wahl
          </span>
          <p className="text-sm text-muted mb-1">Pro-Analyse</p>
          <p className="text-2xl font-bold text-gold">{PRICES.pro}&euro;</p>
          <p className="text-sm text-muted mt-1">50-60 Seiten PDF</p>
          <span className="inline-block mt-4 text-gold text-sm font-medium">
            Jetzt bestellen &rarr;
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
