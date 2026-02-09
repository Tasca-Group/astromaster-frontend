import type { Metadata } from "next";
import WikiOverview from "./WikiOverview";

export const metadata: Metadata = {
  title: "AstroMaster Wiki — Kosmisches Wissen",
  description:
    "Dein Wissensportal für siderische Astrologie, Numerologie, ägyptische Dekane, Human Design, Chakren und Elementar-Analyse. Suche, entdecke, verstehe.",
};

export default function WikiPage() {
  return <WikiOverview />;
}
