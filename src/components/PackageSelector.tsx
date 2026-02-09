"use client";

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

interface Props {
  selected: "normal" | "pro";
  onSelect: (v: "normal" | "pro") => void;
}

export default function PackageSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-center mb-2">
        Wähle dein Paket
      </h2>
      <p className="text-muted text-center mb-8">
        Beide Versionen basieren auf deinen echten Sternpositionen.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {(["normal", "pro"] as const).map((version) => {
          const isSelected = selected === version;
          const isPro = version === "pro";
          const features = PRODUCT_FEATURES[version];
          const bonuses = BONUSES[version];
          const price = PRICES[version];

          return (
            <button
              key={version}
              onClick={() => onSelect(version)}
              className={`relative p-6 sm:p-8 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                isSelected
                  ? "border-gold bg-card"
                  : "border-border bg-card opacity-60 hover:opacity-80"
              }`}
            >
              {isSelected && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-bg text-xs font-bold">
                  &#10003;
                </span>
              )}

              {isPro && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bg text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  Beliebteste Wahl
                </span>
              )}

              <h3 className="text-xl font-semibold">
                {isPro ? "Pro" : "Standard"}
              </h3>
              <p className="text-muted text-sm mt-1">
                {isPro ? "50-60" : "12-15"} Seiten PDF
              </p>

              <div className="mt-4 mb-4">
                <span className={`text-3xl font-bold ${isPro ? "text-gold" : ""}`}>
                  {price}&euro;
                </span>
                <span className="text-muted text-sm ml-1">pro Person</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Add-Ons */}
              <div className="pt-3 border-t border-border/30">
                <p className="text-xs text-gold uppercase tracking-wider mb-2">
                  Inklusive:
                </p>
                <ul className="space-y-1.5">
                  {bonuses.map((bonus) => (
                    <li key={bonus} className="flex items-start gap-2 text-xs">
                      <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                      <span className="text-muted">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
