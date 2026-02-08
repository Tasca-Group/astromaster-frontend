export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.astro-masters.com";

export const PRICES = {
  normal: 39,
  pro: 89,
} as const;

export const PRODUCT_FEATURES = {
  normal: [
    "Siderischer System-Check",
    "Sonne, Mond & Aszendent",
    "Lebenszahl & Numerologie",
    "Elementar-Analyse",
    "Kosmische Signatur",
    "12-15 Seiten PDF",
  ],
  pro: [
    "Alles aus der Normal-Version",
    "Alle Planeten & 12 Haeuser",
    "Aegyptischer Waechter & Dekan",
    "Human Design Typ & Strategie",
    "Aspekte & Nakshatras",
    "Ma'at-Synthese & Journaling",
    "50-60 Seiten PDF",
  ],
} as const;
