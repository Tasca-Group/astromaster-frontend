"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-sind-aspekte", title: "Was sind Aspekte?" },
  { id: "hauptaspekte", title: "Die 5 Hauptaspekte" },
  { id: "harmonisch-vs-spannung", title: "Harmonische vs. Spannungsaspekte" },
  { id: "orbis", title: "Orbis und Exaktheit" },
  { id: "aspekte-deuten", title: "Aspekte deuten" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/planeten", label: "Die 10 Planeten" },
  { href: "/wiki/haeuser", label: "Die 12 Häuser" },
  { href: "/wiki/sternzeichen", label: "Die 12 Sternzeichen" },
  { href: "/wiki/aszendent-mond-sonne", label: "Aszendent, Mond & Sonne" },
];

const faqItems = [
  {
    question: "Was sind Aspekte in der Astrologie?",
    answer:
      "Aspekte sind Winkelbeziehungen zwischen zwei Planeten im Horoskop. Sie zeigen, wie die Planetenenergien miteinander interagieren — ob sie sich unterstützen, herausfordern oder verstärken. Die fünf Hauptaspekte sind Konjunktion (0°), Sextil (60°), Quadrat (90°), Trigon (120°) und Opposition (180°).",
  },
  {
    question: "Was ist ein Orbis bei Aspekten?",
    answer:
      "Der Orbis ist die Toleranz, innerhalb derer ein Aspekt als wirksam gilt. Ein exaktes Trigon wäre genau 120°, aber auch bei 117° oder 123° spricht man noch von einem Trigon. Der übliche Orbis beträgt 6-10° für Hauptaspekte, wobei Aspekte mit Sonne und Mond einen größeren Orbis erhalten.",
  },
  {
    question: "Was ist der Unterschied zwischen harmonischen und Spannungsaspekten?",
    answer:
      "Harmonische Aspekte (Trigon, Sextil) zeigen Bereiche, in denen Energien leicht und unterstützend fließen — natürliche Talente und mühelose Stärken. Spannungsaspekte (Quadrat, Opposition) zeigen Bereiche der Herausforderung, die zur Entwicklung und zum Wachstum führen. Beide sind gleich wichtig.",
  },
  {
    question: "Was ist eine Konjunktion?",
    answer:
      "Eine Konjunktion entsteht, wenn zwei Planeten am gleichen Punkt des Tierkreises stehen (0° Abstand). Sie ist der stärkste aller Aspekte und verschmilzt die Energien beider Planeten zu einer einzigen Kraft. Sie ist weder rein harmonisch noch rein herausfordernd — das hängt von den beteiligten Planeten ab.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Aspekte in der Astrologie"
      subtitle="Aspekte sind die Gespräche zwischen den Planeten — sie zeigen, wie die kosmischen Kräfte in deinem Horoskop zusammenwirken, sich herausfordern und gemeinsam dein einzigartiges Lebensmuster weben."
      breadcrumb="Aspekte"
      sections={sections}
      ctaText="Entdecke die Aspekte in deinem persönlichen Geburtshoroskop"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="was-sind-aspekte" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was sind Aspekte?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wenn du in ein Geburtshoroskop schaust, siehst du Planeten, die an verschiedenen Stellen
          des Tierkreises stehen. Die Winkel zwischen diesen Planeten heißen <em>Aspekte</em>. Sie
          sind das Herzstück der astrologischen Deutung, denn sie zeigen, wie die verschiedenen
          Teile deiner Persönlichkeit miteinander kommunizieren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Stell dir jeden Planeten als einen Schauspieler auf einer Bühne vor. Zeichen und Häuser
          bestimmen den Charakter und die Szene — aber die Aspekte bestimmen die Beziehungen
          zwischen den Schauspielern. Sind sie Verbündete? Rivalen? Gleichgültig? Die Aspekte
          geben Antwort.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Mathematisch betrachtet ist ein Aspekt einfach die Gradzahl zwischen zwei Planeten auf
          dem 360°-Tierkreis. Nicht jeder Winkel ist ein Aspekt — nur bestimmte Winkel, die auf
          der Teilung des Kreises durch ganze Zahlen basieren (360° / 1 = 360° = Konjunktion,
          360° / 2 = 180° = Opposition, 360° / 3 = 120° = Trigon, 360° / 4 = 90° = Quadrat,
          360° / 6 = 60° = Sextil).
        </p>
      </section>

      {/* Section 2 */}
      <section id="hauptaspekte" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 5 Hauptaspekte
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          In der klassischen Astrologie gibt es fünf Hauptaspekte — auch Ptolemäische Aspekte
          genannt, weil sie bereits von Claudius Ptolemäus im 2. Jahrhundert beschrieben wurden.
          Sie bilden das Fundament jeder Horoskop-Deutung.
        </p>

        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gold font-light">0°</span>
              <div>
                <p className="font-medium">Konjunktion</p>
                <p className="text-xs text-muted">Verschmelzung — Intensität — Konzentration</p>
              </div>
            </div>
            <p className="text-base text-muted/90 leading-[1.7]">
              Die Konjunktion ist der stärkste aller Aspekte. Zwei Planeten stehen am selben Punkt
              des Tierkreises und verschmelzen ihre Energien zu einer einzigen Kraft. Eine
              Sonne-Mars-Konjunktion erzeugt beispielsweise einen Menschen mit enorm gebündelter
              Willenskraft und Tatkraft. Die Konjunktion ist weder rein harmonisch noch rein
              spannungsvoll — ihr Charakter hängt von den beteiligten Planeten ab. Venus und
              Jupiter verschmelzen zu Glück und Fülle, Mars und Saturn können Frustration durch
              gebremsten Antrieb erzeugen.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gold font-light">60°</span>
              <div>
                <p className="font-medium">Sextil</p>
                <p className="text-xs text-muted">Chancen — Talent — Zusammenarbeit</p>
              </div>
            </div>
            <p className="text-base text-muted/90 leading-[1.7]">
              Das Sextil verbindet zwei Planeten, die 60° auseinander stehen — typischerweise in
              kompatiblen Elementen (Feuer/Luft oder Erde/Wasser). Es zeigt Bereiche natürlicher
              Begabung und Gelegenheiten, die genutzt werden können, aber nicht müssen. Das Sextil
              ist ein einladender Aspekt: Die Energien arbeiten gut zusammen und bieten Potenzial,
              das sich mit etwas Eigeninitiative entfaltet. Es ist sanfter als das Trigon und
              fordert aktive Beteiligung.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gold font-light">90°</span>
              <div>
                <p className="font-medium">Quadrat</p>
                <p className="text-xs text-muted">Spannung — Herausforderung — Wachstum</p>
              </div>
            </div>
            <p className="text-base text-muted/90 leading-[1.7]">
              Das Quadrat ist der klassische Spannungsaspekt. Zwei Planeten stehen im rechten
              Winkel zueinander — ihre Energien kollidieren und fordern einander heraus. Ein
              Mond-Saturn-Quadrat kann emotionale Zurückhaltung und das Gefühl beschreiben, die
              eigenen Bedürfnisse unterdrücken zu müssen. Quadrate sind unangenehm, aber sie
              sind der Motor der Entwicklung. Sie erzeugen die Reibung, die nötig ist, um über
              sich hinauszuwachsen. Die größten Leistungen entstehen oft aus den größten inneren
              Spannungen.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gold font-light">120°</span>
              <div>
                <p className="font-medium">Trigon</p>
                <p className="text-xs text-muted">Harmonie — Fluss — natürliches Talent</p>
              </div>
            </div>
            <p className="text-base text-muted/90 leading-[1.7]">
              Das Trigon verbindet zwei Planeten in Zeichen desselben Elements — Feuer mit Feuer,
              Erde mit Erde, Luft mit Luft, Wasser mit Wasser. Es ist der harmonischste aller
              Aspekte und zeigt Bereiche, in denen alles mühelos fließt. Ein Venus-Jupiter-Trigon
              beschreibt einen Menschen, dem Liebe, Großzügigkeit und gesellschaftliches Glück
              leicht zufallen. Die Schattenseite des Trigons: Wo alles leicht fällt, fehlt manchmal
              der Antrieb zur Weiterentwicklung. Trigone zeigen Geschenke, die man pflegen sollte.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gold font-light">180°</span>
              <div>
                <p className="font-medium">Opposition</p>
                <p className="text-xs text-muted">Polarität — Bewusstwerdung — Balance</p>
              </div>
            </div>
            <p className="text-base text-muted/90 leading-[1.7]">
              Die Opposition stellt zwei Planeten einander direkt gegenüber — wie zwei Menschen,
              die sich in die Augen schauen. Sie erzeugt ein Spannungsfeld zwischen zwei Polen,
              die integriert werden wollen. Eine Sonne-Mond-Opposition zeigt den Konflikt zwischen
              bewusster Identität (Sonne) und emotionalen Bedürfnissen (Mond). Oppositionen
              spiegeln sich oft in Beziehungen wider: Was du in dir nicht integrierst, begegnet
              dir im Gegenüber. Die Aufgabe ist nicht, eine Seite zu wählen, sondern beide Pole
              in Balance zu bringen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="harmonisch-vs-spannung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Harmonische vs. Spannungsaspekte
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Eine häufige Vereinfachung unterteilt Aspekte in &quot;gute&quot; (Trigon, Sextil) und &quot;schlechte&quot;
          (Quadrat, Opposition). Diese Einteilung ist irreführend. Beide Kategorien sind gleich
          wichtig — und ein Horoskop, das nur harmonische Aspekte enthält, wäre keineswegs ideal.
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Merkmal</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Harmonisch (Trigon, Sextil)</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Spannend (Quadrat, Opposition)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted">Energiefluss</td>
                <td className="px-4 py-3">Leicht, unterstützend</td>
                <td className="px-4 py-3">Reibungsvoll, herausfordernd</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Wirkung</td>
                <td className="px-4 py-3">Natürliche Talente, Geschenke</td>
                <td className="px-4 py-3">Wachstum, Durchbrüche</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted">Gefahr</td>
                <td className="px-4 py-3">Bequemlichkeit, ungenutztes Potenzial</td>
                <td className="px-4 py-3">Erschöpfung, innere Konflikte</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Lebenslektion</td>
                <td className="px-4 py-3">Pflege deine Gaben</td>
                <td className="px-4 py-3">Wachse über dich hinaus</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          In der Praxis sind es oft die Spannungsaspekte, die die größten Leistungen hervorbringen.
          Viele berühmte Künstler, Wissenschaftler und Führungspersönlichkeiten haben Horoskope
          mit zahlreichen Quadraten und Oppositionen. Die Spannung erzeugt den Antrieb, etwas zu
          verändern — und genau das führt zu außergewöhnlichen Ergebnissen.
        </p>
      </section>

      {/* Section 4 */}
      <section id="orbis" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Orbis und Exaktheit
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein exaktes Trigon würde bedeuten, dass zwei Planeten <em>genau</em> 120° voneinander
          entfernt sind. In der Praxis kommt das selten vor. Deshalb arbeitet die Astrologie
          mit dem Konzept des <strong className="text-white">Orbis</strong> — einer Toleranzzone, innerhalb
          derer ein Aspekt als wirksam gilt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die gängigsten Orbis-Werte für Hauptaspekte:
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Aspekt</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Exakter Winkel</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Üblicher Orbis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="bg-card">
                <td className="px-4 py-3">Konjunktion</td>
                <td className="px-4 py-3 text-muted">0°</td>
                <td className="px-4 py-3 text-muted">8-10°</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3">Sextil</td>
                <td className="px-4 py-3 text-muted">60°</td>
                <td className="px-4 py-3 text-muted">4-6°</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3">Quadrat</td>
                <td className="px-4 py-3 text-muted">90°</td>
                <td className="px-4 py-3 text-muted">7-8°</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3">Trigon</td>
                <td className="px-4 py-3 text-muted">120°</td>
                <td className="px-4 py-3 text-muted">7-8°</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3">Opposition</td>
                <td className="px-4 py-3 text-muted">180°</td>
                <td className="px-4 py-3 text-muted">8-10°</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Je enger der Orbis — je näher der tatsächliche Winkel am exakten Aspekt liegt — desto
          stärker wirkt der Aspekt. Ein Trigon mit 1° Orbis ist deutlich spürbarer als eines mit
          7° Orbis. Aspekte mit den Luminaren (Sonne und Mond) erhalten üblicherweise einen
          etwas größeren Orbis als Aspekte zwischen anderen Planeten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          AstroMaster verwendet in der Pro-Analyse standardmäßig Orbis-Werte von 8° für
          Konjunktionen und Oppositionen, 6° für Trigone und Quadrate und 4° für Sextile.
          Diese Werte entsprechen dem internationalen Standard und liefern eine ausgewogene
          Anzahl von Aspekten für eine umfassende Deutung.
        </p>
      </section>

      {/* Section 5 */}
      <section id="aspekte-deuten" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Aspekte deuten — eine Anleitung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Um einen Aspekt zu deuten, brauchst du drei Informationen: die beiden beteiligten
          Planeten und die Art des Aspekts. Die Planeten liefern das <em>Thema</em>, der Aspekt
          beschreibt die <em>Dynamik</em> zwischen ihnen.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Deutungsformel</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            <strong className="text-white">Planet A</strong> (Energie/Thema) steht in einem
            <strong className="text-white"> [Aspekt]</strong> (Dynamik) zu
            <strong className="text-white"> Planet B</strong> (Energie/Thema)<br /><br />
            Beispiel: <strong className="text-gold">Venus</strong> (Liebe, Werte) steht im
            <strong className="text-gold"> Quadrat</strong> (Spannung) zu
            <strong className="text-gold"> Saturn</strong> (Disziplin, Begrenzung)<br />
            Deutung: Spannung zwischen dem Bedürfnis nach Liebe und Nähe und der Angst vor
            Verletzlichkeit. Kann sich als Zurückhaltung in der Liebe, hohe Ansprüche an
            Beziehungen oder späte Partnerfindung zeigen.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Fortgeschrittene Deutung berücksichtigt zusätzlich die Zeichen und Häuser der
          beteiligten Planeten. Ein Mond-Pluto-Quadrat wirkt anders, wenn der Mond im Krebs
          und Pluto im Widder steht, als wenn der Mond in den Zwillingen und Pluto im Steinbock
          steht. Das Zeichen modifiziert die Qualität, das Haus bestimmt den Lebensbereich.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die AstroMaster Pro-Analyse listet alle relevanten Aspekte in deinem Horoskop auf und
          deutet sie im Kontext deines gesamten Charts. So erhältst du kein isoliertes
          Aspekt-Kochbuch, sondern eine integrierte Analyse, die zeigt, wie alle Teile
          zusammenwirken.
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
