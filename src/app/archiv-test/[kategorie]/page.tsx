import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WIKI_CATEGORIES } from "@/lib/wiki-data";
import CategoryOverview from "./CategoryOverview";

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  astrologie: {
    title: "Astrologie — Sternarchiv | AstroMaster",
    description: "Alles über siderische und tropische Astrologie, Sternzeichen, Planeten, Häuser und Aspekte.",
  },
  numerologie: {
    title: "Numerologie — Sternarchiv | AstroMaster",
    description: "Lebenszahlen, Meisterzahlen und die Kraft der Zahlen in deinem Leben.",
  },
  aegyptisch: {
    title: "Ägyptische Mystik — Sternarchiv | AstroMaster",
    description: "Die 36 Dekane, ägyptische Gottheiten und das Dekansystem — 4.000 Jahre alte Weisheit.",
  },
  "human-design": {
    title: "Human Design — Sternarchiv | AstroMaster",
    description: "Die 5 Typen, 9 Zentren, Strategie und Autorität in deinem Bodygraph.",
  },
  elemente: {
    title: "Elementenlehre — Sternarchiv | AstroMaster",
    description: "Feuer, Erde, Luft und Wasser — die Balance der Elemente in deinem Chart.",
  },
  chakren: {
    title: "Chakren — Sternarchiv | AstroMaster",
    description: "Die 7 Hauptchakren, ihre Bedeutung, Blockaden und Heilung.",
  },
};

export function generateStaticParams() {
  return WIKI_CATEGORIES.map((cat) => ({ kategorie: cat.id }));
}

export function generateMetadata({ params }: { params: { kategorie: string } }): Metadata {
  const meta = CATEGORY_META[params.kategorie];
  if (!meta) return { title: "Sternarchiv | AstroMaster" };
  return { title: meta.title, description: meta.description };
}

export default function KategoriePage({ params }: { params: { kategorie: string } }) {
  const category = WIKI_CATEGORIES.find((c) => c.id === params.kategorie);
  if (!category) notFound();

  return <CategoryOverview category={category} />;
}
