"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-ist", title: "Was ist tropische Astrologie?" },
  { id: "ursprung", title: "Ursprung und Geschichte" },
  { id: "jahreszeiten", title: "Die Jahreszeiten-Logik" },
  { id: "kritik", title: "Kritik: Präzession" },
  { id: "tropisch-vs-siderisch", title: "Tropisch vs. Siderisch" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/praezession", label: "Was ist Präzession?" },
  { href: "/wiki/sternzeichen", label: "Die 12 Sternzeichen" },
  { href: "/wiki/aszendent-mond-sonne", label: "Aszendent, Mond & Sonne" },
];

const faqItems = [
  {
    question: "Was ist tropische Astrologie?",
    answer:
      "Tropische Astrologie ist das in der westlichen Welt verbreitete Sternzeichen-System. Es basiert auf den Jahreszeiten und fixiert den Frühlingspunkt auf 0° Widder, unabhängig davon, wo die Sterne tatsächlich stehen. Es wurde im antiken Griechenland formalisiert und ist seit dem Mittelalter der Standard in Europa und Amerika.",
  },
  {
    question: "Warum stimmt mein tropisches Sternzeichen nicht mit den Sternen überein?",
    answer:
      "Durch die Präzession der Erdachse hat sich der tropische Tierkreis um etwa 24° von den tatsächlichen Sternpositionen entfernt. Das bedeutet, dass die Sonne am 21. März nicht mehr im Sternbild Widder steht, sondern in den Fischen. Bei etwa 86% der Menschen weicht das siderische Zeichen deshalb vom tropischen ab.",
  },
  {
    question: "Wann wurde die tropische Astrologie entwickelt?",
    answer:
      "Die tropische Astrologie wurde im antiken Griechenland formalisiert, insbesondere durch Claudius Ptolemäus im 2. Jahrhundert n. Chr. Sein Werk Tetrabiblos legte den Grundstein für das jahreszeitenbasierte System, das sich über das Römische Reich und das Mittelalter in der gesamten westlichen Welt verbreitete.",
  },
  {
    question: "Was ist der Unterschied zwischen tropischer und siderischer Astrologie?",
    answer:
      "Tropische Astrologie orientiert sich an den Jahreszeiten und dem Frühlingspunkt, siderische Astrologie an den tatsächlichen Sternpositionen. Durch die Präzession weichen die beiden Systeme heute um etwa 24° voneinander ab. AstroMaster verwendet das siderische System, weil es astronomisch korrekt ist.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Tropische Astrologie"
      subtitle="Das westliche Standardsystem der Astrologie basiert auf Jahreszeiten statt auf Sternen. Seit über 2.000 Jahren prägt es unser Bild der Sternzeichen — doch astronomisch betrachtet hat es sich längst von der Realität entfernt."
      breadcrumb="Tropische Astrologie"
      sections={sections}
      ctaText="Finde heraus, ob dein tropisches Zeichen mit den Sternen übereinstimmt"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="was-ist" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ist tropische Astrologie?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Tropische Astrologie (von griechisch <em>tropos</em> = Wendung, Sonnenwende) ist das
          astrologische System, das in der westlichen Welt als Standard gilt. Wenn du in einer
          Zeitschrift dein Horoskop liest, in einer App dein Sternzeichen nachschlägst oder
          jemand fragt &quot;Was bist du für ein Zeichen?&quot; — dann ist damit fast immer die tropische
          Astrologie gemeint.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das System teilt den Tierkreis in 12 gleich große Abschnitte von je 30 Grad auf. Der
          Startpunkt ist der Frühlingspunkt — der Moment, in dem die Sonne den Himmelsäquator
          von Süd nach Nord überquert, typischerweise am 20. oder 21. März. Dieser Punkt wird als
          0° Widder definiert, und von dort aus folgen die restlichen 11 Zeichen in fester Reihenfolge.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Das Besondere an diesem System: Es orientiert sich nicht an den Sternen, sondern an der
          Beziehung zwischen Sonne und Erde — genauer gesagt, an den Jahreszeiten. Der
          Frühlingspunkt markiert den astronomischen Frühlingsbeginn auf der Nordhalbkugel,
          unabhängig davon, welches Sternbild zu diesem Zeitpunkt am Himmel steht.
        </p>
      </section>

      {/* Section 2 */}
      <section id="ursprung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Ursprung und Geschichte
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Wurzeln der tropischen Astrologie liegen in Mesopotamien und dem alten Babylon.
          Bereits um 700 v. Chr. beobachteten babylonische Priesterastronomen den Lauf der
          Planeten durch die Sternbilder und entwickelten den Tierkreis als Ordnungssystem.
          Zu jener Zeit stimmten die Sternbilder noch weitgehend mit den Jahreszeiten überein
          — der Frühlingspunkt lag tatsächlich im Sternbild Widder.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die entscheidende Weichenstellung erfolgte im antiken Griechenland. Der Astronom
          Hipparch von Nicäa entdeckte um 130 v. Chr. die Präzession der Erdachse und
          bemerkte, dass sich die Sternbilder langsam verschieben. Trotz dieser Entdeckung
          entschied sich die griechische Tradition, den Tierkreis an die Jahreszeiten zu
          koppeln — ein Schritt, der die tropische Astrologie begründete.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Im 2. Jahrhundert n. Chr. verfasste <strong className="text-white">Claudius Ptolemäus</strong> sein
          einflussreiches Werk <em>Tetrabiblos</em>, das die tropische Astrologie systematisch
          kodifizierte. Ptolemäus argumentierte, dass die astrologische Wirkung nicht von den
          Sternen selbst, sondern von der Beziehung zwischen Sonne und Erde — also von den
          Jahreszeiten — ausgehe. Diese Begründung wurde zum Fundament der westlichen Astrologie.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Über das Römische Reich, die arabische Welt und das europäische Mittelalter verbreitete
          sich die tropische Astrologie in der gesamten westlichen Hemisphäre. Bis heute ist sie
          das dominante System in Europa, Nord- und Südamerika sowie Australien.
        </p>
      </section>

      {/* Section 3 */}
      <section id="jahreszeiten" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die Jahreszeiten-Logik
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Grundidee der tropischen Astrologie ist elegant: Jedes Sternzeichen entspricht
          einer Phase im Jahreszyklus der Natur. Widder markiert den explosiven Neubeginn des
          Frühlings, Krebs die nährende Fülle des Sommers, Waage den Ausgleich des Herbstes und
          Steinbock die stille Disziplin des Winters.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Diese Zuordnung hat eine tiefe symbolische Logik: Wer im Frühling geboren wird, trägt
          die Energie des Aufbruchs in sich. Wer im Herbst geboren wird, spiegelt die Qualität
          der Ernte und des Loslassens wider. Die vier Jahreszeiten entsprechen den vier Elementen
          — Feuer (Frühling), Erde (Sommer), Luft (Herbst) und Wasser (Winter).
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Jahreszeit</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Zeichen</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Element</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Qualität</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted" rowSpan={3}>Frühling</td>
                <td className="px-4 py-3">Widder</td>
                <td className="px-4 py-3">Feuer</td>
                <td className="px-4 py-3">Kardinal</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3">Stier</td>
                <td className="px-4 py-3">Erde</td>
                <td className="px-4 py-3">Fix</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3">Zwillinge</td>
                <td className="px-4 py-3">Luft</td>
                <td className="px-4 py-3">Veränderlich</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted" rowSpan={3}>Sommer</td>
                <td className="px-4 py-3">Krebs</td>
                <td className="px-4 py-3">Wasser</td>
                <td className="px-4 py-3">Kardinal</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3">Löwe</td>
                <td className="px-4 py-3">Feuer</td>
                <td className="px-4 py-3">Fix</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3">Jungfrau</td>
                <td className="px-4 py-3">Erde</td>
                <td className="px-4 py-3">Veränderlich</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted" rowSpan={3}>Herbst</td>
                <td className="px-4 py-3">Waage</td>
                <td className="px-4 py-3">Luft</td>
                <td className="px-4 py-3">Kardinal</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3">Skorpion</td>
                <td className="px-4 py-3">Wasser</td>
                <td className="px-4 py-3">Fix</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3">Schütze</td>
                <td className="px-4 py-3">Feuer</td>
                <td className="px-4 py-3">Veränderlich</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted" rowSpan={3}>Winter</td>
                <td className="px-4 py-3">Steinbock</td>
                <td className="px-4 py-3">Erde</td>
                <td className="px-4 py-3">Kardinal</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3">Wassermann</td>
                <td className="px-4 py-3">Luft</td>
                <td className="px-4 py-3">Fix</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3">Fische</td>
                <td className="px-4 py-3">Wasser</td>
                <td className="px-4 py-3">Veränderlich</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Kritiker weisen darauf hin, dass diese Jahreszeitenlogik auf der Nordhalbkugel basiert.
          Auf der Südhalbkugel ist der März kein Frühling, sondern Herbst — was die symbolische
          Grundlage der tropischen Astrologie in Frage stellt. Ein Widder, der im australischen
          Herbst geboren wird, trägt demnach eine andere jahreszeitliche Energie als einer, der
          im europäischen Frühling zur Welt kommt.
        </p>
      </section>

      {/* Section 4 */}
      <section id="kritik" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Kritik: Die Präzession
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der größte Kritikpunkt an der tropischen Astrologie ist die Präzession der Erdachse.
          Die Erde rotiert nicht perfekt gleichmäßig, sondern taumelt wie ein Kreisel. Diese
          Taumelbewegung verschiebt den Frühlingspunkt langsam durch die Sternbilder — in einem
          Zyklus von etwa 25.772 Jahren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Als die Babylonier vor rund 2.500 Jahren den Tierkreis definierten, stand die Sonne
          am Frühlingspunkt tatsächlich im Sternbild Widder. Seitdem hat sich die Erdachse so
          weit gedreht, dass der Frühlingspunkt heute im Sternbild Fische liegt — eine
          Verschiebung von etwa <strong className="text-white">24 Grad</strong>.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Was bedeutet das konkret?</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Wenn du tropisch ein Löwe bist (23. Juli bis 22. August), dann stand die Sonne am Tag
            deiner Geburt <em>nicht</em> im Sternbild Löwe, sondern höchstwahrscheinlich noch im
            Sternbild Krebs. Bei etwa 86% aller Menschen weicht das tropische Sternzeichen vom
            astronomisch beobachtbaren Zeichen ab.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die tropische Astrologie ignoriert dieses Problem bewusst. Ihre Vertreter argumentieren,
          dass die Sternzeichen symbolische Archetypen seien, die an die Jahreszeiten und nicht an
          die Sterne gebunden sind. Die siderische Astrologie hingegen korrigiert die Verschiebung
          durch das sogenannte Ayanamsa — einen Korrekturwert, der die Differenz zwischen
          tropischem und siderischem Tierkreis ausgleicht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Objektiv betrachtet ist die Präzession kein esoterisches Konzept, sondern ein messbar
          bestätigtes astronomisches Phänomen. Jede Sternwarte, die NASA und die ESA berücksichtigen
          die Präzession in ihren Berechnungen. Die Frage, ob Astrologie an Jahreszeiten oder an
          Sterne gekoppelt sein sollte, bleibt Gegenstand der Debatte.
        </p>
      </section>

      {/* Section 5 */}
      <section id="tropisch-vs-siderisch" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Tropisch vs. Siderisch — der Vergleich
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Beide Systeme verwenden die gleichen 12 Zeichen mit den gleichen Bedeutungen und
          Eigenschaften. Ein Löwe ist ein Löwe — egal ob tropisch oder siderisch. Der Unterschied
          liegt ausschließlich darin, <em>wann</em> ein Zeichen beginnt und endet.
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Merkmal</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Tropisch</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Siderisch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted">Bezugspunkt</td>
                <td className="px-4 py-3">Frühlingspunkt (Jahreszeiten)</td>
                <td className="px-4 py-3">Tatsächliche Sternpositionen</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Begründer</td>
                <td className="px-4 py-3">Ptolemäus (2. Jh. n. Chr.)</td>
                <td className="px-4 py-3">Vedische Tradition (3.000+ v. Chr.)</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted">Verbreitung</td>
                <td className="px-4 py-3">Europa, Amerika, Australien</td>
                <td className="px-4 py-3">Indien, Südostasien</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Präzession</td>
                <td className="px-4 py-3">Wird ignoriert</td>
                <td className="px-4 py-3">Wird korrigiert (Ayanamsa)</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted">Astronomische Genauigkeit</td>
                <td className="px-4 py-3 text-muted">Nein</td>
                <td className="px-4 py-3 text-gold">Ja</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Zeichen</td>
                <td className="px-4 py-3">12 (je 30°)</td>
                <td className="px-4 py-3">12 (je 30°) + Ophiuchus optional</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          AstroMaster nutzt die siderische Astrologie als Referenzsystem, weil sie astronomisch
          korrekt ist. Gleichzeitig zeigen wir dir beide Systeme im Vergleich — den sogenannten
          &quot;System-Check&quot;. So kannst du selbst entscheiden, welche Beschreibung besser zu dir passt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die tropische Astrologie hat ihren Wert als symbolisches System nicht verloren. Sie
          funktioniert auf einer psychologisch-archetypischen Ebene und bietet vielen Menschen
          echte Orientierung. Das Wissen um die siderische Perspektive ergänzt dieses Bild — es
          ersetzt es nicht, sondern vertieft es.
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
