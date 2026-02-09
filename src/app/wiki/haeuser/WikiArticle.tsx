"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-sind-haeuser", title: "Was sind Häuser?" },
  { id: "ueberblick", title: "Die 12 Häuser im Überblick" },
  { id: "haeusersysteme", title: "Häusersysteme" },
  { id: "planeten-in-haeusern", title: "Planeten in Häusern" },
  { id: "leere-haeuser", title: "Leere Häuser" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/planeten", label: "Die 10 Planeten" },
  { href: "/wiki/sternzeichen", label: "Die 12 Sternzeichen" },
  { href: "/wiki/aszendent-mond-sonne", label: "Aszendent, Mond & Sonne" },
  { href: "/wiki/aspekte", label: "Aspekte erklärt" },
];

const haeuserDaten = [
  { nummer: 1, name: "Haus des Selbst", zeichen: "Widder", planet: "Mars", thema: "Identität, Erscheinungsbild, erster Eindruck, Körper" },
  { nummer: 2, name: "Haus des Besitzes", zeichen: "Stier", planet: "Venus", thema: "Geld, Werte, Ressourcen, Selbstwert" },
  { nummer: 3, name: "Haus der Kommunikation", zeichen: "Zwillinge", planet: "Merkur", thema: "Denken, Lernen, Geschwister, Nachbarschaft" },
  { nummer: 4, name: "Haus des Zuhauses", zeichen: "Krebs", planet: "Mond", thema: "Familie, Wurzeln, Herkunft, innere Sicherheit" },
  { nummer: 5, name: "Haus der Kreativität", zeichen: "Löwe", planet: "Sonne", thema: "Kreativität, Kinder, Romantik, Freude, Spiel" },
  { nummer: 6, name: "Haus des Dienstes", zeichen: "Jungfrau", planet: "Merkur", thema: "Gesundheit, Arbeit, Alltag, Routinen, Dienst" },
  { nummer: 7, name: "Haus der Partnerschaft", zeichen: "Waage", planet: "Venus", thema: "Beziehungen, Ehe, Verträge, offene Feinde" },
  { nummer: 8, name: "Haus der Transformation", zeichen: "Skorpion", planet: "Pluto", thema: "Tod, Wiedergeburt, Sexualität, Erbschaften, Krisen" },
  { nummer: 9, name: "Haus der Philosophie", zeichen: "Schütze", planet: "Jupiter", thema: "Reisen, Bildung, Glaube, Weisheit, Recht" },
  { nummer: 10, name: "Haus der Berufung", zeichen: "Steinbock", planet: "Saturn", thema: "Karriere, öffentliches Ansehen, Lebenswerk, Status" },
  { nummer: 11, name: "Haus der Gemeinschaft", zeichen: "Wassermann", planet: "Uranus", thema: "Freundschaften, Gruppen, Ideale, Zukunftsvisionen" },
  { nummer: 12, name: "Haus des Unbewussten", zeichen: "Fische", planet: "Neptun", thema: "Spiritualität, Rückzug, verborgene Feinde, Karma" },
];

const faqItems = [
  {
    question: "Was sind die 12 Häuser in der Astrologie?",
    answer:
      "Die 12 Häuser teilen den Himmel zum Zeitpunkt deiner Geburt in 12 Lebensbereiche auf. Das 1. Haus steht für das Selbst und den Aszendenten, das 7. für Beziehungen, das 10. für Beruf und Berufung. Jedes Haus beschreibt einen spezifischen Bereich deines Lebens, in dem sich die Planetenenergien entfalten.",
  },
  {
    question: "Was bedeutet ein leeres Haus im Horoskop?",
    answer:
      "Ein leeres Haus (ohne Planeten) bedeutet nicht, dass der Lebensbereich unwichtig oder problematisch ist. Es zeigt, dass dort keine besondere kosmische Spannung oder Herausforderung liegt — der Bereich läuft eher unkompliziert. Der Hausherrscher gibt weitere Hinweise über die Dynamik dieses Hauses.",
  },
  {
    question: "Was ist der Unterschied zwischen Häusern und Sternzeichen?",
    answer:
      "Sternzeichen beschreiben Qualitäten und Eigenschaften (das Wie), Häuser beschreiben Lebensbereiche (das Wo). Ein Planet im Zeichen Löwe drückt sich kreativ und großzügig aus. Derselbe Planet im 10. Haus manifestiert sich konkret im Beruf und in der Öffentlichkeit.",
  },
  {
    question: "Was ist das Häusersystem Placidus?",
    answer:
      "Placidus ist das am weitesten verbreitete Häusersystem in der westlichen Astrologie. Es berechnet die Häusergrenzen auf Basis der Zeit, die ein Grad der Ekliptik braucht, um vom Aszendenten zum MC zu wandern. Es funktioniert gut in gemäßigten Breiten, hat aber Probleme nahe der Pole.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 12 astrologischen Häuser"
      subtitle="Wenn Planeten die Akteure deines Lebens sind und Zeichen ihren Charakter beschreiben, dann sind die Häuser die Bühne — die konkreten Lebensbereiche, in denen das kosmische Drama stattfindet."
      breadcrumb="Die 12 Häuser"
      sections={sections}
      ctaText="Entdecke, welche Planeten in welchen Häusern deines Charts stehen"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="was-sind-haeuser" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was sind Häuser?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die astrologischen Häuser sind eines der drei Grundelemente jedes Geburtshoroskops —
          neben Planeten und Zeichen. Während Planeten die <em>Energien</em> repräsentieren (Was?)
          und Zeichen den <em>Stil</em> beschreiben (Wie?), zeigen Häuser den <em>Lebensbereich</em>,
          in dem sich diese Energien manifestieren (Wo?).
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Stell dir den Himmel zum Zeitpunkt deiner Geburt als eine 360-Grad-Kugel vor. Diese
          Kugel wird — ausgehend vom Aszendenten (dem Punkt am östlichen Horizont) — in 12
          Abschnitte geteilt. Jeder Abschnitt ist ein Haus und repräsentiert einen bestimmten
          Lebensbereich: Identität, Finanzen, Kommunikation, Familie, Kreativität, Gesundheit,
          Beziehungen, Transformation, Philosophie, Karriere, Gemeinschaft und Spiritualität.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der entscheidende Unterschied zu Zeichen und Planeten: Die Häuser sind <em>ortsbezogen</em>.
          Zwei Menschen, die am gleichen Tag geboren wurden, aber an verschiedenen Orten, haben
          dieselben Planetenpositionen in denselben Zeichen — aber unterschiedliche Häuser. Deshalb
          ist die exakte Geburtszeit und der Geburtsort so wichtig für eine vollständige Analyse.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Das 1. Haus beginnt immer am Aszendenten und markiert den Ausgangspunkt. Von dort
          geht es gegen den Uhrzeigersinn weiter: Das 4. Haus liegt am tiefsten Punkt (Imum
          Coeli), das 7. Haus am Deszendenten (gegenüber dem Aszendenten) und das 10. Haus
          am höchsten Punkt (Medium Coeli oder MC). Diese vier Punkte — die sogenannten Achsen
          — sind die mächtigsten Stellen im Horoskop.
        </p>
      </section>

      {/* Section 2 */}
      <section id="ueberblick" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 12 Häuser im Überblick
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Jedes Haus hat ein &quot;natürliches Zeichen&quot; und einen &quot;natürlichen Herrscher&quot; — das
          Zeichen und der Planet, die von Natur aus mit den Themen des Hauses resonieren. In
          deinem persönlichen Horoskop können aber ganz andere Zeichen an den Häuserspitzen
          stehen, was die Deutung individualisiert.
        </p>

        <div className="space-y-4">
          {haeuserDaten.map((h) => (
            <div key={h.nummer} className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-gold font-medium text-lg">{h.nummer}.</span>
                <span className="font-medium">{h.name}</span>
                <span className="text-xs text-muted ml-auto">
                  {h.zeichen} / {h.planet}
                </span>
              </div>
              <p className="text-sm text-muted/90 leading-relaxed">{h.thema}</p>
            </div>
          ))}
        </div>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Die vier Quadranten</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            <strong className="text-white">1. Quadrant (Häuser 1-3):</strong> Das Selbst — Identität, Ressourcen, Denken<br />
            <strong className="text-white">2. Quadrant (Häuser 4-6):</strong> Das Private — Familie, Kreativität, Alltag<br />
            <strong className="text-white">3. Quadrant (Häuser 7-9):</strong> Das Gegenüber — Beziehungen, Krisen, Horizonterweiterung<br />
            <strong className="text-white">4. Quadrant (Häuser 10-12):</strong> Die Welt — Berufung, Gemeinschaft, Spiritualität
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="haeusersysteme" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Häusersysteme — verschiedene Berechnungsmethoden
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Es gibt verschiedene Methoden, die 12 Häuser zu berechnen. Sie unterscheiden sich darin,
          wie sie den Raum zwischen den vier Achspunkten (ASC, IC, DSC, MC) aufteilen. Die drei
          bekanntesten Systeme sind:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Placidus</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Das am weitesten verbreitete System in der westlichen Astrologie. Es berechnet die
              Häusergrenzen basierend auf der zeitlichen Teilung — wie lange ein Grad der Ekliptik
              braucht, um vom Aszendenten zum MC zu wandern. Placidus erzeugt ungleich große
              Häuser und funktioniert am besten in gemäßigten Breiten (20°-60° Nord/Süd). In
              Polnähe können einzelne Zeichen komplett übersprungen werden.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Koch</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Ähnlich wie Placidus, aber die Berechnung basiert auf der Geburtsortbreite und
              der Dauer, die der Aszendent braucht, um zum MC zu gelangen. Koch ist in Deutschland
              und Mitteleuropa populär und liefert oft etwas andere Häuserspitzen als Placidus,
              besonders für die Zwischen-Häuser (2, 3, 5, 6, 8, 9, 11, 12).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Ganzes Zeichen (Whole Sign)</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Das älteste und einfachste System: Das Zeichen des Aszendenten wird komplett zum
              1. Haus, das nächste Zeichen zum 2. Haus und so weiter. Jedes Haus umfasst exakt
              ein Zeichen (30°). Dieses System erlebt derzeit eine Renaissance, besonders in der
              hellenistischen Astrologie, und vermeidet die Probleme der anderen Systeme in Polnähe.
            </p>
          </div>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          AstroMaster verwendet standardmäßig das Placidus-System, da es am verbreitetsten ist
          und die meisten Vergleichsdaten liefert. Für die Deutung der Häuser gilt: Die Unterschiede
          zwischen den Systemen sind meist klein und betreffen vor allem die Zwischenhäuser.
          Aszendent und MC sind in allen Systemen identisch.
        </p>
      </section>

      {/* Section 4 */}
      <section id="planeten-in-haeusern" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Planeten in Häusern
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wenn ein Planet in einem Haus steht, bringt er seine spezifische Energie in diesen
          Lebensbereich ein. Das kann diesen Bereich beleben, herausfordern oder intensivieren.
          Je mehr Planeten in einem Haus stehen, desto mehr Aufmerksamkeit erfordert dieser
          Lebensbereich.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Einige Beispiele: Die Sonne im 10. Haus deutet auf eine starke Karriereorientierung und
          das Bedürfnis nach öffentlicher Anerkennung hin. Der Mond im 4. Haus zeigt eine tiefe
          Verbindung zur Familie und zum Zuhause. Mars im 7. Haus bringt Leidenschaft, aber auch
          Konflikte in Partnerschaften.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Stellium — Planeten-Konzentration</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Wenn drei oder mehr Planeten in einem einzigen Haus stehen, spricht man von einem
            <strong className="text-white"> Stellium</strong>. Ein Stellium konzentriert enorme Energie auf
            einen Lebensbereich und macht diesen zum zentralen Thema des gesamten Horoskops.
            Menschen mit einem Stellium im 10. Haus sind oft extrem karrierefokussiert, ein
            Stellium im 5. Haus deutet auf außergewöhnliche kreative Begabung hin.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Die Kombination von Planet, Zeichen und Haus bildet die vollständige Deutung.
          Mars (Tatkraft) im Zeichen Steinbock (diszipliniert) im 2. Haus (Finanzen) könnte
          zum Beispiel auf einen Menschen hindeuten, der sehr diszipliniert und strategisch
          Vermögen aufbaut.
        </p>
      </section>

      {/* Section 5 */}
      <section id="leere-haeuser" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Leere Häuser — kein Grund zur Sorge
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Da es 10 Planeten, aber 12 Häuser gibt, hat jeder Mensch mindestens zwei leere Häuser
          in seinem Horoskop — die meisten sogar mehr. Ein leeres Haus bedeutet <em>nicht</em>, dass
          der entsprechende Lebensbereich leer, problematisch oder unbedeutend ist.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein leeres Haus zeigt vielmehr, dass dieser Bereich keine besondere kosmische Spannung
          oder Herausforderung birgt. Die Themen dieses Hauses laufen eher &quot;im Hintergrund&quot; —
          sie erfordern weniger bewusste Aufmerksamkeit als die Häuser, in denen Planeten stehen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Um mehr über ein leeres Haus zu erfahren, schaut man auf den <strong className="text-white">Hausherrscher</strong>:
          den Planeten, der das Zeichen an der Häuserspitze regiert. Wenn zum Beispiel das leere
          7. Haus die Häuserspitze im Zeichen Löwe hat, ist die Sonne der Hausherrscher. Die
          Position der Sonne in deinem Chart verrät dann, wie sich die Beziehungsthemen des 7.
          Hauses in deinem Leben entfalten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Mach dir also keine Sorgen, wenn bestimmte Häuser leer sind. Ein leeres 7. Haus bedeutet
          nicht, dass du keine Beziehung haben wirst. Ein leeres 2. Haus bedeutet nicht, dass du
          kein Geld verdienen wirst. Es bedeutet lediglich, dass diese Bereiche nicht die
          Hauptbühne deines kosmischen Dramas sind.
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
