import type { Metadata } from "next";
import ArchivOverview from "./ArchivOverview";

export const metadata: Metadata = {
  title: "Das Sternarchiv — Kosmisches Wissen | AstroMaster",
  description:
    "Dein Wissensportal für siderische Astrologie, Numerologie, ägyptische Dekane, Human Design, Chakren und Elementar-Analyse. Entdecke, lerne, verstehe.",
};

export default function ArchivPage() {
  return <ArchivOverview />;
}
