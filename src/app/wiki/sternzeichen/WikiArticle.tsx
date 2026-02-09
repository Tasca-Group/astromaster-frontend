"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "uebersicht", title: "Übersicht aller Zeichen" },
  { id: "elemente", title: "Die Elemente" },
  { id: "qualitaeten", title: "Die Qualitäten" },
  { id: "herrscher", title: "Herrscherplaneten" },
  { id: "siderisch-vs-tropisch", title: "Siderisch vs. Tropisch" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/tropische-astrologie", label: "Tropische Astrologie" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/planeten", label: "Die 10 Planeten" },
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
];

const zeichenDaten = [
  { zeichen: "Widder", tropisch: "21.03. – 19.04.", siderisch: "14.04. – 14.05.", element: "Feuer", qualitaet: "Kardinal", herrscher: "Mars", stichworte: "Tatkraft, Mut, Pioniergeist" },
  { zeichen: "Stier", tropisch: "20.04. – 20.05.", siderisch: "15.05. – 14.06.", element: "Erde", qualitaet: "Fix", herrscher: "Venus", stichworte: "Beständigkeit, Genuss, Sicherheit" },
  { zeichen: "Zwillinge", tropisch: "21.05. – 20.06.", siderisch: "15.06. – 16.07.", element: "Luft", qualitaet: "Veränderlich", herrscher: "Merkur", stichworte: "Kommunikation, Neugier, Vielseitigkeit" },
  { zeichen: "Krebs", tropisch: "21.06. – 22.07.", siderisch: "17.07. – 16.08.", element: "Wasser", qualitaet: "Kardinal", herrscher: "Mond", stichworte: "Fürsorge, Intuition, Geborgenheit" },
  { zeichen: "Löwe", tropisch: "23.07. – 22.08.", siderisch: "17.08. – 16.09.", element: "Feuer", qualitaet: "Fix", herrscher: "Sonne", stichworte: "Selbstausdruck, Großzügigkeit, Führung" },
  { zeichen: "Jungfrau", tropisch: "23.08. – 22.09.", siderisch: "17.09. – 16.10.", element: "Erde", qualitaet: "Veränderlich", herrscher: "Merkur", stichworte: "Analyse, Dienst, Perfektion" },
  { zeichen: "Waage", tropisch: "23.09. – 22.10.", siderisch: "17.10. – 15.11.", element: "Luft", qualitaet: "Kardinal", herrscher: "Venus", stichworte: "Harmonie, Gerechtigkeit, Ästhetik" },
  { zeichen: "Skorpion", tropisch: "23.10. – 21.11.", siderisch: "16.11. – 15.12.", element: "Wasser", qualitaet: "Fix", herrscher: "Pluto / Mars", stichworte: "Tiefgang, Transformation, Intensität" },
  { zeichen: "Schütze", tropisch: "22.11. – 21.12.", siderisch: "16.12. – 13.01.", element: "Feuer", qualitaet: "Veränderlich", herrscher: "Jupiter", stichworte: "Freiheit, Weisheit, Abenteuer" },
  { zeichen: "Steinbock", tropisch: "22.12. – 19.01.", siderisch: "14.01. – 12.02.", element: "Erde", qualitaet: "Kardinal", herrscher: "Saturn", stichworte: "Disziplin, Ambition, Verantwortung" },
  { zeichen: "Wassermann", tropisch: "20.01. – 18.02.", siderisch: "13.02. – 13.03.", element: "Luft", qualitaet: "Fix", herrscher: "Uranus / Saturn", stichworte: "Innovation, Freiheit, Humanität" },
  { zeichen: "Fische", tropisch: "19.02. – 20.03.", siderisch: "14.03. – 13.04.", element: "Wasser", qualitaet: "Veränderlich", herrscher: "Neptun / Jupiter", stichworte: "Empathie, Spiritualität, Kreativität" },
];

const faqItems = [
  {
    question: "Welche Sternzeichen gibt es?",
    answer:
      "Es gibt 12 Sternzeichen: Widder, Stier, Zwillinge, Krebs, Löwe, Jungfrau, Waage, Skorpion, Schütze, Steinbock, Wassermann und Fische. Sie teilen den 360°-Tierkreis in gleich große Abschnitte von je 30 Grad. In der siderischen Astrologie gibt es zusätzlich Ophiuchus als optionales 13. Zeichen.",
  },
  {
    question: "Was sind die vier Elemente in der Astrologie?",
    answer:
      "Die vier Elemente sind Feuer (Widder, Löwe, Schütze), Erde (Stier, Jungfrau, Steinbock), Luft (Zwillinge, Waage, Wassermann) und Wasser (Krebs, Skorpion, Fische). Jedes Element beschreibt eine grundlegende Lebensenergie und Herangehensweise an die Welt.",
  },
  {
    question: "Was bedeuten die drei Qualitäten Kardinal, Fix und Veränderlich?",
    answer:
      "Kardinale Zeichen (Widder, Krebs, Waage, Steinbock) sind Initiatoren und starten Neues. Fixe Zeichen (Stier, Löwe, Skorpion, Wassermann) sind beständig und vertiefen, was begonnen wurde. Veränderliche Zeichen (Zwillinge, Jungfrau, Schütze, Fische) sind anpassungsfähig und bereiten den Übergang vor.",
  },
  {
    question: "Unterscheiden sich die siderischen und tropischen Sternzeichen-Daten?",
    answer:
      "Ja, durch die Präzession der Erdachse verschieben sich die siderischen Datumsbereiche um etwa 24 Tage nach hinten. Ein tropischer Löwe (23. Juli bis 22. August) ist siderisch vom 17. August bis 16. September. Bei 86% der Menschen ändert sich dadurch das Sonnenzeichen.",
  },
  {
    question: "Was ist ein Herrscherplanet?",
    answer:
      "Jedes Sternzeichen wird von einem Planeten regiert, der seine Energie besonders gut zum Ausdruck bringt. Mars herrscht über Widder (Tatkraft), Venus über Stier und Waage (Schönheit, Harmonie) und der Mond über Krebs (Emotionen). Der Herrscherplanet gibt dem Zeichen seine Grundfärbung.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 12 Sternzeichen"
      subtitle="Eigenschaften, Elemente, Qualitäten und Herrscherplaneten — ein vollständiger Überblick über alle Tierkreiszeichen mit tropischen und siderischen Datumsbereichen."
      breadcrumb="Die 12 Sternzeichen"
      sections={sections}
      ctaText="Entdecke dein wahres Sternzeichen — tropisch und siderisch im Vergleich"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="uebersicht" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Übersicht aller 12 Sternzeichen
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der Tierkreis — auch Zodiak genannt — ist ein imaginärer Gürtel am Himmel, der den
          scheinbaren Pfad der Sonne im Laufe eines Jahres nachzeichnet. Er wird in 12 gleich
          große Abschnitte von je 30° unterteilt, die wir als Sternzeichen kennen. Jedes Zeichen
          hat einzigartige Eigenschaften, ein zugehöriges Element, eine Qualität und einen
          Herrscherplaneten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die folgende Tabelle zeigt alle 12 Zeichen mit ihren tropischen <em>und</em> siderischen
          Datumsbereichen. Die Differenz zwischen beiden Systemen entsteht durch die Präzession
          der Erdachse und beträgt aktuell etwa 24 Tage.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-3 py-3 text-gold font-medium">Zeichen</th>
                <th className="text-left px-3 py-3 text-gold font-medium">Tropisch</th>
                <th className="text-left px-3 py-3 text-gold font-medium">Siderisch</th>
                <th className="text-left px-3 py-3 text-gold font-medium">Element</th>
                <th className="text-left px-3 py-3 text-gold font-medium">Stichworte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {zeichenDaten.map((z, i) => (
                <tr key={z.zeichen} className={i % 2 === 0 ? "bg-card" : "bg-card/50"}>
                  <td className="px-3 py-3 font-medium whitespace-nowrap">{z.zeichen}</td>
                  <td className="px-3 py-3 text-muted whitespace-nowrap">{z.tropisch}</td>
                  <td className="px-3 py-3 text-muted whitespace-nowrap">{z.siderisch}</td>
                  <td className="px-3 py-3 text-muted">{z.element}</td>
                  <td className="px-3 py-3 text-muted">{z.stichworte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted mt-3">
          Hinweis: Die siderischen Daten basieren auf dem Lahiri-Ayanamsa (Stand 2026) und können
          um 1-2 Tage abweichen. Für eine exakte Bestimmung nutze unseren Gratis-Check.
        </p>
      </section>

      {/* Section 2 */}
      <section id="elemente" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die vier Elemente
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jedes Sternzeichen gehört zu einem der vier Elemente: Feuer, Erde, Luft oder Wasser.
          Die Elemente beschreiben die grundlegende Lebensenergie eines Zeichens und wie es sich
          der Welt nähert. Je drei Zeichen bilden ein Element-Trigon — sie teilen eine verwandte
          Grundschwingung, auch wenn sie sich in der Qualität unterscheiden.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Feuer</p>
            <p className="font-medium mb-2">Widder, Löwe, Schütze</p>
            <p className="text-sm text-muted/90 leading-relaxed">
              Feuerzeichen sind aktiv, dynamisch und leidenschaftlich. Sie handeln impulsiv,
              inspirieren andere und suchen nach Selbstausdruck. Feuer steht für Willenskraft,
              Enthusiasmus und den Drang, die Welt zu formen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Erde</p>
            <p className="font-medium mb-2">Stier, Jungfrau, Steinbock</p>
            <p className="text-sm text-muted/90 leading-relaxed">
              Erdzeichen sind praktisch, zuverlässig und körperbewusst. Sie bauen, manifestieren
              und schaffen bleibende Strukturen. Erde steht für Beständigkeit, Geduld und den
              Sinn für das Materielle.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Luft</p>
            <p className="font-medium mb-2">Zwillinge, Waage, Wassermann</p>
            <p className="text-sm text-muted/90 leading-relaxed">
              Luftzeichen sind intellektuell, kommunikativ und sozial. Sie denken, vernetzen
              und schaffen Verbindungen zwischen Ideen und Menschen. Luft steht für Verstand,
              Objektivität und den Austausch von Gedanken.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Wasser</p>
            <p className="font-medium mb-2">Krebs, Skorpion, Fische</p>
            <p className="text-sm text-muted/90 leading-relaxed">
              Wasserzeichen sind emotional, intuitiv und tiefgründig. Sie fühlen intensiv,
              erkennen verborgene Strömungen und navigieren die Welt über Instinkt. Wasser
              steht für Empathie, Heilung und die Kraft des Unbewussten.
            </p>
          </div>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Die Elementverteilung in deinem gesamten Geburtshoroskop — nicht nur das Sonnenzeichen,
          sondern auch Mond, Aszendent und alle Planeten — zeigt dir, welche Energien in deinem
          Leben besonders stark oder schwach ausgeprägt sind.
        </p>
      </section>

      {/* Section 3 */}
      <section id="qualitaeten" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die drei Qualitäten (Modalitäten)
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Neben den Elementen wird jedes Sternzeichen einer von drei Qualitäten — auch Modalitäten
          oder Kreuze genannt — zugeordnet. Sie beschreiben, <em>wie</em> ein Zeichen seine Energie
          einsetzt: als Initiator, als Bewahrer oder als Verwandler.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-3 uppercase tracking-wider">Kardinal — Die Initiatoren</p>
          <p className="font-medium mb-2">Widder, Krebs, Waage, Steinbock</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Kardinale Zeichen starten jede Jahreszeit und tragen die Energie des Neubeginns.
            Sie ergreifen die Initiative, setzen Impulse und eröffnen neue Kapitel. Sie sind
            Führungspersönlichkeiten und Wegbereiter — manchmal ungeduldig, aber immer in Bewegung.
          </p>
        </div>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-3 uppercase tracking-wider">Fix — Die Bewahrer</p>
          <p className="font-medium mb-2">Stier, Löwe, Skorpion, Wassermann</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Fixe Zeichen stehen in der Mitte jeder Jahreszeit, wenn die Energie am stabilsten ist.
            Sie vertiefen, festigen und bewahren, was die kardinalen Zeichen begonnen haben. Ihre
            Stärke liegt in Ausdauer und Beständigkeit — ihre Herausforderung in Sturheit und
            Widerstand gegen Veränderung.
          </p>
        </div>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-3 uppercase tracking-wider">Veränderlich — Die Verwandler</p>
          <p className="font-medium mb-2">Zwillinge, Jungfrau, Schütze, Fische</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Veränderliche Zeichen schließen jede Jahreszeit ab und bereiten den Übergang zur
            nächsten vor. Sie sind anpassungsfähig, flexibel und vielseitig. Sie vermitteln,
            analysieren und lösen auf, was nicht mehr gebraucht wird. Ihre Herausforderung liegt
            darin, bei all der Flexibilität nicht den eigenen Standpunkt zu verlieren.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="herrscher" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die Herrscherplaneten
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jedes Sternzeichen hat einen Herrscherplaneten — einen Himmelskörper, der die Energie
          des Zeichens am reinsten verkörpert. Der Herrscher gibt dem Zeichen seine Grundfärbung
          und beeinflusst, wie sich die Zeichenqualitäten im Leben manifestieren.
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Zeichen</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Herrscher</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Prinzip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {zeichenDaten.map((z, i) => (
                <tr key={z.zeichen} className={i % 2 === 0 ? "bg-card" : "bg-card/50"}>
                  <td className="px-4 py-3 font-medium">{z.zeichen}</td>
                  <td className="px-4 py-3">{z.herrscher}</td>
                  <td className="px-4 py-3 text-muted">{z.stichworte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In der klassischen Astrologie hatten nur die sieben mit bloßem Auge sichtbaren
          Himmelskörper — Sonne, Mond, Merkur, Venus, Mars, Jupiter und Saturn — Herrschaften.
          Seit der Entdeckung von Uranus (1781), Neptun (1846) und Pluto (1930) wurden die
          Herrschaften neu verteilt. Die äußeren Planeten Uranus, Neptun und Pluto teilen sich
          ihre Zeichen mit den klassischen Herrschern.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Stellung deines Herrscherplaneten in deinem Geburtshoroskop ist besonders aufschlussreich.
          Wenn dein Sonnenzeichen zum Beispiel Widder ist, sagt die Position von Mars in deinem
          Chart besonders viel über deine persönliche Art der Tatkraft und Durchsetzung aus.
        </p>
      </section>

      {/* Section 5 */}
      <section id="siderisch-vs-tropisch" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Siderisch vs. Tropisch — Welches ist dein wahres Zeichen?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die wichtigste Erkenntnis beim Studium der Sternzeichen: Es gibt zwei verschiedene
          Systeme, die dir möglicherweise unterschiedliche Zeichen zuweisen. Die tropische
          Astrologie — das westliche Standardsystem — basiert auf den Jahreszeiten. Die siderische
          Astrologie orientiert sich an den tatsächlichen Sternpositionen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Durch die Präzession der Erdachse (eine langsame Taumelbewegung über 25.772 Jahre) hat
          sich der tropische Tierkreis um etwa 24° von den echten Sternbildern entfernt. Das
          bedeutet: Wenn du tropisch ein Löwe bist (geboren zwischen 23. Juli und 22. August),
          stand die Sonne am Tag deiner Geburt wahrscheinlich im Sternbild Krebs.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Beispiel</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Geburtsdatum: 5. August<br />
            Tropisches Zeichen: Löwe (23. Juli – 22. August)<br />
            Siderisches Zeichen: <strong className="text-gold">Krebs</strong> (17. Juli – 16. August)<br />
            Die Sonne stand am 5. August tatsächlich im Sternbild Krebs, nicht im Löwen.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          AstroMaster zeigt dir beide Zeichen im Vergleich — den sogenannten System-Check. So
          kannst du beide Beschreibungen lesen und selbst erfahren, welches System dich besser
          erfasst. Viele Menschen berichten, dass die siderische Beschreibung überraschend
          treffend ist.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Wichtig: Die Bedeutungen und Eigenschaften der Zeichen sind in beiden Systemen identisch.
          Ein Krebs ist ein Krebs, ob tropisch oder siderisch. Was sich ändert, ist lediglich
          die Zuordnung — welchem Zeichen du auf Basis der tatsächlichen Himmelspositionen
          zugeordnet wirst.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Häufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
