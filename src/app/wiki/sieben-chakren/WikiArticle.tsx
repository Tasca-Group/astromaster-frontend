"use client";

import Link from "next/link";
import WikiLayout, { type WikiSection } from "@/components/WikiLayout";

const sections: WikiSection[] = [
  { id: "wurzelchakra", title: "1. Wurzelchakra" },
  { id: "sakralchakra", title: "2. Sakralchakra" },
  { id: "solarplexuschakra", title: "3. Solarplexuschakra" },
  { id: "herzchakra", title: "4. Herzchakra" },
  { id: "halschakra", title: "5. Halschakra" },
  { id: "stirnchakra", title: "6. Stirnchakra" },
  { id: "kronenchakra", title: "7. Kronenchakra" },
];

const relatedTopics = [
  { href: "/wiki/chakren", label: "Was sind Chakren?" },
  { href: "/wiki/human-design", label: "Human Design" },
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 7 Hauptchakren"
      subtitle="Alle 7 Chakren im Überblick — Position, Farbe, Thema, Element."
      breadcrumb="Die 7 Hauptchakren"
      sections={sections}
      ctaText="Entdecke deine Energiezentren — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Wurzelchakra */}
      <section id="wurzelchakra" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          1. Wurzelchakra (Muladhara)
        </h2>
        <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#EF4444" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><span className="text-muted">Sanskrit:</span> <span className="text-white">Muladhara (&bdquo;Wurzelstütze&ldquo;)</span></div>
            <div><span className="text-muted">Position:</span> <span className="text-white">Basis der Wirbelsäule</span></div>
            <div><span className="text-muted">Farbe:</span> <span className="text-white" style={{ color: "#EF4444" }}>Rot</span></div>
            <div><span className="text-muted">Element:</span> <span className="text-white">Erde</span></div>
            <div><span className="text-muted">Planet:</span> <span className="text-white">Saturn</span></div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das erste Chakra ist das Fundament deines Energiesystems. Es verbindet dich mit der physischen Welt und regiert deine grundlegendsten Bedürfnisse: Sicherheit, Überleben, Nahrung und Obdach. Ein starkes Wurzelchakra gibt dir das Gefühl, geerdet und stabil zu sein — egal was im Außen passiert. Menschen mit einem ausbalancierten Wurzelchakra strahlen eine ruhige Präsenz aus und fühlen sich im Körper zuhause.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Balance</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Gefühl der Sicherheit, Vertrauen ins Leben, körperliche Vitalität, finanzielle Stabilität
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Blockade</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Existenzängste, Rastlosigkeit, Rückenschmerzen, Materialismus oder Geiz
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">
          <Link href="/wiki/wurzelchakra" className="hover:underline">
            &rarr; Ausführlicher Artikel: Wurzelchakra
          </Link>
        </p>
      </section>

      {/* Section 2: Sakralchakra */}
      <section id="sakralchakra" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          2. Sakralchakra (Svadhisthana)
        </h2>
        <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#F97316" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><span className="text-muted">Sanskrit:</span> <span className="text-white">Svadhisthana (&bdquo;Süße, eigener Platz&ldquo;)</span></div>
            <div><span className="text-muted">Position:</span> <span className="text-white">Unterbauch, ca. 5 cm unter dem Nabel</span></div>
            <div><span className="text-muted">Farbe:</span> <span className="text-white" style={{ color: "#F97316" }}>Orange</span></div>
            <div><span className="text-muted">Element:</span> <span className="text-white">Wasser</span></div>
            <div><span className="text-muted">Planet:</span> <span className="text-white">Mond</span></div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das zweite Chakra ist das Zentrum deiner Kreativität, Sinnlichkeit und emotionalen Intelligenz. Es steuert deine Fähigkeit, Freude zu empfinden, Nähe zuzulassen und kreativ zu sein. Wasser ist sein Element — es geht um Fließen, Loslassen und die Fähigkeit, sich dem Strom des Lebens anzuvertrauen. Ein offenes Sakralchakra zeigt sich in Lebensfreude, gesunder Sexualität und kreativer Ausdruckskraft.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Balance</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Kreativität, emotionale Offenheit, Genussfähigkeit, gesunde Beziehungen
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Blockade</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Emotionale Taubheit, Schuldgefühle, Suchtverhalten, Kreativitätsblockaden
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">
          <Link href="/wiki/sakralchakra" className="hover:underline">
            &rarr; Ausführlicher Artikel: Sakralchakra
          </Link>
        </p>
      </section>

      {/* Section 3: Solarplexuschakra */}
      <section id="solarplexuschakra" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          3. Solarplexuschakra (Manipura)
        </h2>
        <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#EAB308" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><span className="text-muted">Sanskrit:</span> <span className="text-white">Manipura (&bdquo;Juwelenstadt&ldquo;)</span></div>
            <div><span className="text-muted">Position:</span> <span className="text-white">Oberbauch/Magenregion</span></div>
            <div><span className="text-muted">Farbe:</span> <span className="text-white" style={{ color: "#EAB308" }}>Gelb</span></div>
            <div><span className="text-muted">Element:</span> <span className="text-white">Feuer</span></div>
            <div><span className="text-muted">Planet:</span> <span className="text-white">Mars/Sonne</span></div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das dritte Chakra ist dein persönliches Kraftzentrum. Hier sitzt dein Selbstvertrauen, dein Wille und deine Fähigkeit zur Transformation. Wie ein inneres Feuer verbrennt es Zweifel und treibt dich an. Menschen mit einem starken Solarplexuschakra kennen ihren Wert, setzen Grenzen und verfolgen ihre Ziele mit Entschlossenheit, ohne andere zu dominieren.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Balance</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Selbstvertrauen, innere Stärke, gesunder Ehrgeiz, Entscheidungsfreude
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Blockade</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Machtlosigkeit, Kontrollsucht, Verdauungsprobleme, geringes Selbstwertgefühl
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">
          <Link href="/wiki/solarplexuschakra" className="hover:underline">
            &rarr; Ausführlicher Artikel: Solarplexuschakra
          </Link>
        </p>
      </section>

      {/* Section 4: Herzchakra */}
      <section id="herzchakra" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          4. Herzchakra (Anahata)
        </h2>
        <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#22C55E" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><span className="text-muted">Sanskrit:</span> <span className="text-white">Anahata (&bdquo;Unversehrt&ldquo;)</span></div>
            <div><span className="text-muted">Position:</span> <span className="text-white">Brustmitte</span></div>
            <div><span className="text-muted">Farbe:</span> <span className="text-white" style={{ color: "#22C55E" }}>Grün</span></div>
            <div><span className="text-muted">Element:</span> <span className="text-white">Luft</span></div>
            <div><span className="text-muted">Planet:</span> <span className="text-white">Venus</span></div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Herzchakra ist die Brücke zwischen den unteren (körperlichen) und oberen (spirituellen) Chakren. Es ist das Zentrum bedingungsloser Liebe, des Mitgefühls und der Vergebung. Anahata bedeutet &bdquo;unversehrt&ldquo; — eine Erinnerung daran, dass dein innerstes Wesen immer heil ist, ungeachtet äußerer Verletzungen. Ein offenes Herzchakra ermöglicht tiefe Verbindungen zu anderen Menschen und zu dir selbst.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Balance</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Mitgefühl, Empathie, Selbstliebe, Fähigkeit zu vergeben, emotionale Heilung
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Blockade</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Bindungsangst, Eifersucht, Herzprobleme, Unfähigkeit zu vergeben, Einsamkeit
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">
          <Link href="/wiki/herzchakra" className="hover:underline">
            &rarr; Ausführlicher Artikel: Herzchakra
          </Link>
        </p>
      </section>

      {/* Section 5: Halschakra */}
      <section id="halschakra" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          5. Halschakra (Vishuddha)
        </h2>
        <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#38BDF8" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><span className="text-muted">Sanskrit:</span> <span className="text-white">Vishuddha (&bdquo;Reinigung&ldquo;)</span></div>
            <div><span className="text-muted">Position:</span> <span className="text-white">Kehle</span></div>
            <div><span className="text-muted">Farbe:</span> <span className="text-white" style={{ color: "#38BDF8" }}>Hellblau</span></div>
            <div><span className="text-muted">Element:</span> <span className="text-white">Äther/Raum</span></div>
            <div><span className="text-muted">Planet:</span> <span className="text-white">Merkur</span></div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das fünfte Chakra ist das Zentrum der Kommunikation, des authentischen Selbstausdrucks und der Wahrheit. Es geht nicht nur um gesprochene Worte, sondern um jede Form des Ausdrucks — Schreiben, Singen, Kunst, Körpersprache. Vishuddha bedeutet &bdquo;Reinigung&ldquo; und erinnert daran, dass wahre Kommunikation Klarheit und Ehrlichkeit erfordert. Ein offenes Halschakra ermöglicht es dir, deine Wahrheit ohne Angst auszusprechen.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Balance</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Klarer Ausdruck, aktives Zuhören, Kreativität, Authentizität
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Blockade</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Halsschmerzen, Angst vor Ablehnung, Lügen, Unfähigkeit sich auszudrücken
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">
          <Link href="/wiki/halschakra" className="hover:underline">
            &rarr; Ausführlicher Artikel: Halschakra
          </Link>
        </p>
      </section>

      {/* Section 6: Stirnchakra */}
      <section id="stirnchakra" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          6. Stirnchakra (Ajna)
        </h2>
        <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#6366F1" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><span className="text-muted">Sanskrit:</span> <span className="text-white">Ajna (&bdquo;Wahrnehmen, Befehlen&ldquo;)</span></div>
            <div><span className="text-muted">Position:</span> <span className="text-white">Zwischen den Augenbrauen</span></div>
            <div><span className="text-muted">Farbe:</span> <span className="text-white" style={{ color: "#6366F1" }}>Indigo</span></div>
            <div><span className="text-muted">Element:</span> <span className="text-white">Licht</span></div>
            <div><span className="text-muted">Planet:</span> <span className="text-white">Jupiter/Neptun</span></div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das sechste Chakra, oft als &bdquo;Drittes Auge&ldquo; bezeichnet, ist das Zentrum der Intuition, Weisheit und inneren Sicht. Es verbindet den rationalen Verstand mit der intuitiven Wahrnehmung und ermöglicht tiefere Einsichten jenseits der fünf Sinne. Im Human Design entspricht es dem Ajna-Zentrum — dem Zentrum der mentalen Verarbeitung. Ein offenes Stirnchakra zeigt sich in klarer Intuition, gutem Urteilsvermögen und der Fähigkeit, das größere Bild zu sehen.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Balance</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Starke Intuition, klares Denken, Vorstellungskraft, innere Weisheit
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Blockade</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Kopfschmerzen, Konzentrationsprobleme, Verwirrung, Überintellektualisierung
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">
          <Link href="/wiki/stirnchakra" className="hover:underline">
            &rarr; Ausführlicher Artikel: Stirnchakra
          </Link>
        </p>
      </section>

      {/* Section 7: Kronenchakra */}
      <section id="kronenchakra" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          7. Kronenchakra (Sahasrara)
        </h2>
        <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#A855F7" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><span className="text-muted">Sanskrit:</span> <span className="text-white">Sahasrara (&bdquo;Tausendfach&ldquo;)</span></div>
            <div><span className="text-muted">Position:</span> <span className="text-white">Scheitel des Kopfes</span></div>
            <div><span className="text-muted">Farbe:</span> <span className="text-white" style={{ color: "#A855F7" }}>Violett/Weiß</span></div>
            <div><span className="text-muted">Element:</span> <span className="text-white">Kosmisches Bewusstsein</span></div>
            <div><span className="text-muted">Planet:</span> <span className="text-white">Uranus/Sonne</span></div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das siebte und höchste Chakra ist deine Verbindung zum Universellen, zum Göttlichen, zum Ganzen. Es transzendiert das Persönliche und öffnet den Zugang zu höherem Bewusstsein und spiritueller Erfahrung. Sahasrara wird als tausendblättriger Lotus dargestellt — ein Symbol für die unendliche Entfaltung des Bewusstseins. Ein offenes Kronenchakra zeigt sich nicht als Erleuchtung im dramatischen Sinne, sondern als tiefes Gefühl der Verbundenheit mit allem, was ist.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Balance</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Spirituelles Bewusstsein, Demut, Gefühl der Einheit, innerer Frieden
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-2">Zeichen für Blockade</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Spirituelle Leere, Zynismus, Depression, Gefühl der Isolation
            </p>
          </div>
        </div>
        <p className="text-sm text-gold">
          <Link href="/wiki/kronenchakra" className="hover:underline">
            &rarr; Ausführlicher Artikel: Kronenchakra
          </Link>
        </p>
      </section>

      {/* Chakra Visualization */}
      <div className="p-8 rounded-2xl bg-card border border-border text-center">
        <p className="text-muted text-sm mb-4">Chakra-Visualisierung</p>
        <div className="relative mx-auto w-24 h-80">
          {[
            { color: "#A855F7", top: "2%" },
            { color: "#6366F1", top: "12%" },
            { color: "#38BDF8", top: "28%" },
            { color: "#22C55E", top: "42%" },
            { color: "#EAB308", top: "55%" },
            { color: "#F97316", top: "68%" },
            { color: "#EF4444", top: "85%" },
          ].map((c, i) => (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
              style={{ backgroundColor: c.color, top: c.top, opacity: 0.8 }}
            />
          ))}
          <div
            className="absolute inset-0 border-2 border-border/30 rounded-full"
            style={{ width: "2px", left: "50%", transform: "translateX(-50%)" }}
          />
        </div>
      </div>
    </WikiLayout>
  );
}
