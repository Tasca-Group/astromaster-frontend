"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "phaenomen", title: "Das Phänomen" },
  { id: "verschiebung", title: "24 Grad Verschiebung" },
  { id: "auswirkung", title: "Auswirkung auf Sternzeichen" },
  { id: "geschichte", title: "Geschichte der Entdeckung" },
  { id: "siderisch", title: "Siderisch als Lösung" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/tropische-astrologie", label: "Tropische Astrologie" },
  { href: "/wiki/sternzeichen", label: "Die 12 Sternzeichen" },
  { href: "/wiki/aszendent-mond-sonne", label: "Aszendent, Mond & Sonne" },
];

const faqItems = [
  {
    question: "Was ist Präzession einfach erklärt?",
    answer:
      "Präzession ist die langsame Kreiselbewegung der Erdachse. Wie ein sich drehender Kreisel, dessen Achse langsam einen Kegel beschreibt, taumelt auch die Erde — in einem Zyklus von etwa 25.772 Jahren. Dadurch verschiebt sich der Sternenhimmel langsam, was Auswirkungen auf die Astrologie hat.",
  },
  {
    question: "Wie groß ist die aktuelle Verschiebung durch Präzession?",
    answer:
      "Die aktuelle Verschiebung beträgt etwa 24 Grad (genauer: 24,17° nach dem Lahiri-Ayanamsa, Stand 2026). Das entspricht fast einem ganzen Sternzeichen, da jedes Zeichen 30° umfasst. Bei 86% der Menschen ändert sich dadurch das siderische Zeichen gegenüber dem tropischen.",
  },
  {
    question: "Wer hat die Präzession entdeckt?",
    answer:
      "Die Präzession wurde um 130 v. Chr. vom griechischen Astronomen Hipparch von Nicäa entdeckt. Er verglich seine Sternbeobachtungen mit älteren babylonischen und ägyptischen Aufzeichnungen und stellte fest, dass sich die Positionen der Fixsterne systematisch verschoben hatten.",
  },
  {
    question: "Warum ignoriert die tropische Astrologie die Präzession?",
    answer:
      "Die tropische Astrologie koppelt den Tierkreis bewusst an die Jahreszeiten statt an die Sterne. Ptolemäus argumentierte im 2. Jahrhundert, dass die astrologische Wirkung von der Sonne-Erde-Beziehung ausgeht. Die siderische Astrologie hält dagegen, dass der Tierkreis an die tatsächlichen Sternpositionen gebunden sein sollte.",
  },
  {
    question: "Was ist das Ayanamsa?",
    answer:
      "Das Ayanamsa ist der Winkelwert, um den sich der tropische Tierkreis vom siderischen entfernt hat — also die Summe der aufgelaufenen Präzession. Das bekannteste ist das Lahiri-Ayanamsa (aktuell ca. 24,17°), das von der indischen Regierung offiziell als Standard für astronomische Berechnungen verwendet wird.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Was ist Präzession?"
      subtitle="Die Erde taumelt wie ein Kreisel — und verschiebt damit langsam den gesamten Sternenhimmel. Dieses astronomische Phänomen ist der Grund, warum dein Sternzeichen möglicherweise nicht mit den Sternen übereinstimmt."
      breadcrumb="Präzession"
      sections={sections}
      ctaText="Finde heraus, ob die Präzession dein Sternzeichen verschoben hat"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="phaenomen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Phänomen — warum die Erde taumelt
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Stell dir einen Kinderkreisel vor, der sich schnell dreht. Wenn du ihn genau
          beobachtest, siehst du, dass seine Drehachse nicht starr bleibt, sondern langsam
          einen Kegel beschreibt — sie &quot;taumelt&quot;. Genau das macht auch die Erde. Ihre
          Rotationsachse ist nicht fix im Raum, sondern beschreibt langsam einen Kreis.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Diese Taumelbewegung heißt <strong className="text-white">axiale Präzession</strong> oder
          &quot;Präzession der Äquinoktien&quot;. Sie wird durch die Gravitationskräfte von Sonne und
          Mond verursacht, die auf die leichte Abplattung der Erde an den Polen einwirken.
          Da die Erde kein perfekter Ball ist, sondern am Äquator etwas dicker, üben Sonne
          und Mond ein Drehmoment aus, das die Achse langsam verschiebt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Geschwindigkeit dieser Taumelbewegung ist extrem langsam: Die Erdachse braucht
          etwa <strong className="text-white">25.772 Jahre</strong>, um einen vollständigen Kreis zu
          beschreiben. Dieser Zeitraum wird das <em>Platonische Jahr</em> oder der <em>Große
          Zyklus</em> genannt. Pro Jahr verschiebt sich die Position um etwa 50,3 Bogensekunden
          — unmerklich im menschlichen Zeitmaßstab, aber gewaltig über Jahrhunderte und
          Jahrtausende.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Präzession ist kein esoterisches Konzept. Sie ist ein physikalisch messbares und
          von der gesamten Astronomie bestätigtes Phänomen. Die NASA, die ESA, das Jet Propulsion
          Laboratory und jede Sternwarte der Welt berücksichtigen die Präzession in ihren
          Berechnungen. Ohne sie wären Satellitennavigation, Weltraummissionen und präzise
          Sternkataloge unmöglich.
        </p>
      </section>

      {/* Section 2 */}
      <section id="verschiebung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          24 Grad Verschiebung — die Rechnung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Vor etwa 2.500 Jahren — zur Blütezeit der babylonischen und griechischen Astronomie
          — standen tropischer und siderischer Tierkreis noch annähernd in Deckung. Der
          Frühlingspunkt lag tatsächlich am Beginn des Sternbilds Widder, und die Sternzeichen-
          Daten stimmten mit den Sternbildern überein.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Seitdem hat sich die Erdachse weitergedreht. Bei einer Rate von etwa 1° alle 72 Jahre
          ergibt sich nach 2.500 Jahren eine Gesamtverschiebung von rund <strong className="text-white">24
          Grad</strong> (genauer: 24,17° nach dem Lahiri-Ayanamsa, Stand 2026).
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Die Mathematik dahinter</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Vollständiger Kreis: 360°<br />
            Platonisches Jahr: 25.772 Jahre<br />
            Verschiebung pro Jahr: 360° / 25.772 = <strong className="text-white">0,01396° pro Jahr</strong> (= 50,3 Bogensekunden)<br />
            Verschiebung pro Jahrhundert: ~1,396°<br />
            Verschiebung seit ~250 v. Chr.: ~2.276 Jahre × 0,01396° = <strong className="text-gold">~24,17°</strong>
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Was bedeuten 24° konkret? Da jedes Sternzeichen 30° umfasst, entsprechen 24° einer
          Verschiebung von fast einem ganzen Zeichen. In der Praxis heißt das: Wenn du tropisch
          ein bestimmtes Zeichen bist, bist du siderisch höchstwahrscheinlich das Zeichen davor.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Verschiebung geht weiter: In etwa 400 Jahren wird das Ayanamsa 30° erreichen —
          eine volle Zeichenlänge. Und in etwa 25.772 Jahren ab dem Referenzpunkt wird der Kreis
          geschlossen sein und tropischer und siderischer Tierkreis wieder übereinstimmen.
        </p>
      </section>

      {/* Section 3 */}
      <section id="auswirkung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Auswirkung auf dein Sternzeichen
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die praktische Konsequenz der Präzession ist dramatisch: Bei den meisten Menschen
          stimmt das tropische Sternzeichen (das aus Zeitschriften und Apps bekannte) nicht
          mehr mit dem tatsächlichen Sternbild überein, in dem die Sonne am Tag der Geburt
          stand.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Konkretes Beispiel</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            <strong className="text-white">Geburtsdatum:</strong> 5. August<br />
            <strong className="text-white">Tropisches Zeichen:</strong> Löwe (23. Juli – 22. August)<br />
            <strong className="text-white">Realität am Himmel:</strong> Am 5. August steht die Sonne im
            Sternbild Krebs (siderisch: 17. Juli – 16. August)<br />
            <strong className="text-gold">Ergebnis:</strong> Tropisch Löwe, astronomisch (siderisch) Krebs.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Über alle 12 Zeichen gemittelt weicht das siderische Zeichen bei etwa <strong className="text-white">86%
          der Menschen</strong> vom tropischen ab. Nur wer in den letzten 5-6 Tagen eines tropischen
          Zeichens geboren ist, behält sein Zeichen auch im siderischen System.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das betrifft nicht nur die Sonne. Auch Mond, Aszendent und alle anderen Planeten
          verschieben sich um die gleichen 24°. Dein gesamtes Geburtshoroskop sieht siderisch
          anders aus als tropisch — mit möglicherweise anderen Zeichen für jeden Planeten und
          andere Häuser-Zuordnungen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Das bedeutet nicht, dass deine bisherige Zeichenbeschreibung &quot;falsch&quot; ist — es
          bedeutet, dass es eine zweite Perspektive gibt, die auf den tatsächlichen
          Sternpositionen basiert. Viele Menschen berichten, dass die siderische Beschreibung
          überraschend treffend ist, manchmal sogar treffender als die tropische.
        </p>
      </section>

      {/* Section 4 */}
      <section id="geschichte" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Geschichte der Entdeckung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Entdeckung der Präzession ist eine der großen Leistungen der antiken Astronomie.
          Der griechische Astronom <strong className="text-white">Hipparch von Nicäa</strong> bemerkte
          um 130 v. Chr. bei der Erstellung seines Sternkatalogs, dass sich die Positionen
          der Fixsterne systematisch von früheren Aufzeichnungen unterschieden.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Hipparch verglich seine eigenen Beobachtungen mit den rund 170 Jahre älteren
          Aufzeichnungen der alexandrinischen Astronomen Timocharis und Aristyllos. Er stellte
          fest, dass sich der Stern Spica (Alpha Virginis) um etwa 2° verschoben hatte. Aus
          dieser Beobachtung schloss er, dass sich der gesamte Sternenhimmel relativ zum
          Frühlingspunkt verschiebt — mit einer Rate von mindestens 1° pro Jahrhundert.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Hipparchs Entdeckung war bemerkenswert präzise für seine Zeit, aber sie löste eine
          Debatte aus, die bis heute andauert: Soll die Astrologie den Tierkreis an die
          Jahreszeiten koppeln (tropisch) oder an die Sterne (siderisch)?
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Im 2. Jahrhundert n. Chr. entschied sich <strong className="text-white">Claudius
          Ptolemäus</strong> in seinem Werk <em>Tetrabiblos</em> für die Jahreszeiten-Kopplung. Er
          argumentierte, dass die &quot;Kraft&quot; der Zeichen von den Jahreszeiten und nicht von den
          Sternen ausgehe. Diese Entscheidung prägte die gesamte westliche Astrologie für die
          nächsten 2.000 Jahre.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In Indien hingegen behielten die vedischen Astronomen den Bezug zu den Sternen bei.
          Der indische Mathematiker und Astronom <strong className="text-white">Aryabhata</strong> (476-550
          n. Chr.) berechnete die Präzession auf 46,3 Bogensekunden pro Jahr — erstaunlich nahe
          am modernen Wert von 50,3 Bogensekunden.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die physikalische Erklärung der Präzession lieferte schließlich <strong className="text-white">Isaac
          Newton</strong> im Jahr 1687 in seinen <em>Principia Mathematica</em>. Er zeigte, dass die
          Gravitationskräfte von Sonne und Mond auf die abgeplattete Erde das Drehmoment
          erzeugen, das die Achse taumeln lässt.
        </p>
      </section>

      {/* Section 5 */}
      <section id="siderisch" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Siderische Astrologie als Lösung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die siderische Astrologie löst das Präzessionsproblem, indem sie den Tierkreis an die
          tatsächlichen Sternpositionen koppelt statt an die Jahreszeiten. Sie verwendet einen
          Korrekturwert — das sogenannte <strong className="text-white">Ayanamsa</strong> — um die
          aufgelaufene Verschiebung zu kompensieren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das bekannteste und am weitesten verbreitete Ayanamsa ist das <strong className="text-white">Lahiri-Ayanamsa</strong>,
          benannt nach dem indischen Astronomen Nirmala Chandra Lahiri. Es wurde 1955 vom Indian
          Calendar Reform Committee als offizieller Standard festgelegt und wird von der indischen
          Regierung für alle astronomischen und astrologischen Berechnungen verwendet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In der Praxis ist die Korrektur einfach: Um vom tropischen zum siderischen Zeichen zu
          gelangen, wird der Ayanamsa-Wert (aktuell ~24,17°) von jeder Planetenposition abgezogen.
          So ergibt sich ein Horoskop, das auf den echten Sternpositionen basiert.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Warum AstroMaster siderisch rechnet</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            AstroMaster verwendet das siderische System mit dem Lahiri-Ayanamsa, weil es die
            astronomisch korrekte Perspektive bietet. Die Berechnungen basieren auf der Swiss
            Ephemeris — den präzisesten astronomischen Tabellen, die auch von professionellen
            Sternwarten genutzt werden. Zusätzlich zeigt der &quot;System-Check&quot; beiden Zeichen im
            Vergleich, damit du die tropische und siderische Beschreibung selbst gegenüberstellen
            kannst.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Es gibt verschiedene Ayanamsa-Systeme, die sich minimal unterscheiden — Lahiri, Raman,
          Krishnamurti und andere. Die Differenzen betragen typischerweise weniger als 1°, was
          nur in Grenzfällen zu unterschiedlichen Zeichen führt. Lahiri ist der internationale
          Standard und die sicherste Wahl.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Präzession ist der Schlüssel zum Verständnis des Unterschieds zwischen tropischer
          und siderischer Astrologie. Wer sie versteht, versteht, warum über eine Milliarde
          Menschen in der vedischen Tradition ein anderes Sternzeichensystem verwenden als der
          Westen — und warum dieses System astronomisch näher an der beobachtbaren Realität liegt.
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
