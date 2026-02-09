"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-ist", title: "Was ist siderische Astrologie?" },
  { id: "tropisch-vs-siderisch", title: "Tropisch vs. Siderisch" },
  { id: "praezession", title: "Präzession" },
  { id: "lahiri", title: "Lahiri-Ayanamsa" },
  { id: "86-prozent", title: "86% falsches Zeichen" },
  { id: "13-zeichen", title: "Die 13 Sternzeichen" },
  { id: "tabelle", title: "Datumstabelle" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki-test/numerologie", label: "Numerologie" },
  { href: "/wiki-test/aegyptische-dekane", label: "Ägyptische Dekane" },
  { href: "/wiki-test/human-design", label: "Human Design" },
  { href: "/wiki-test/elementar-analyse", label: "Elementar-Analyse" },
];

const siderischeZeichen = [
  { zeichen: "Widder", von: "14. April", bis: "14. Mai" },
  { zeichen: "Stier", von: "15. Mai", bis: "14. Juni" },
  { zeichen: "Zwillinge", von: "15. Juni", bis: "16. Juli" },
  { zeichen: "Krebs", von: "17. Juli", bis: "16. August" },
  { zeichen: "Löwe", von: "17. August", bis: "16. September" },
  { zeichen: "Jungfrau", von: "17. September", bis: "16. Oktober" },
  { zeichen: "Waage", von: "17. Oktober", bis: "15. November" },
  { zeichen: "Skorpion", von: "16. November", bis: "29. November" },
  { zeichen: "Ophiuchus", von: "30. November", bis: "17. Dezember" },
  { zeichen: "Schütze", von: "18. Dezember", bis: "18. Januar" },
  { zeichen: "Steinbock", von: "19. Januar", bis: "15. Februar" },
  { zeichen: "Wassermann", von: "16. Februar", bis: "13. März" },
  { zeichen: "Fische", von: "14. März", bis: "13. April" },
];

const faqItems = [
  {
    question: "Was ist der Unterschied zwischen tropischer und siderischer Astrologie?",
    answer:
      "Tropische Astrologie orientiert sich an den Jahreszeiten und fixiert den Frühlingspunkt auf 0° Widder. Siderische Astrologie orientiert sich an den tatsächlichen Sternpositionen am Himmel. Durch die Präzession der Erdachse haben sich diese beiden Systeme um etwa 24° verschoben — weshalb die meisten Menschen siderisch ein anderes Zeichen haben.",
  },
  {
    question: "Stimmt mein Sternzeichen wirklich nicht?",
    answer:
      "Bei etwa 86% der Menschen weicht das siderische Sternzeichen vom tropischen ab. Die Verschiebung beträgt aktuell rund 24°, was bedeutet, dass die meisten Menschen im siderischen System ein Zeichen zurückrutschen. Nur wer in den letzten Tagen eines Zeichens geboren ist, behält sein tropisches Zeichen.",
  },
  {
    question: "Was ist das Lahiri-Ayanamsa?",
    answer:
      "Das Lahiri-Ayanamsa ist der international anerkannte Korrekturwert, der den Unterschied zwischen tropischem und siderischem Tierkreis berechnet. Er beträgt aktuell etwa 24,17° und wird von der indischen Regierung offiziell verwendet. AstroMaster nutzt diesen Standard für maximale Genauigkeit.",
  },
  {
    question: "Was ist Ophiuchus — das 13. Sternzeichen?",
    answer:
      "Ophiuchus (Schlangenträger) ist ein astronomisches Sternbild, durch das die Sonne zwischen Skorpion und Schütze zieht (ca. 30. November bis 17. Dezember). Die westliche Astrologie ignoriert es, weil sie nur 12 gleichgroße Zeichen à 30° verwendet. In der siderischen Astrologie kann es als Zusatzinformation berücksichtigt werden.",
  },
  {
    question: "Welches System verwenden die meisten Astrologen?",
    answer:
      "In der westlichen Welt dominiert die tropische Astrologie. In Indien und Südostasien ist die siderische Astrologie (Jyotish/Vedische Astrologie) seit Jahrtausenden Standard und wird von über einer Milliarde Menschen konsultiert. AstroMaster verwendet das siderische System mit dem Lahiri-Ayanamsa für astronomische Genauigkeit.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Siderische Astrologie"
      subtitle="Das astronomisch korrekte Sternzeichen-System basiert auf den tatsächlichen Positionen der Sterne am Himmel — nicht auf einem 2.000 Jahre alten Kalender. Erfahre, warum dein Sternzeichen vermutlich ein anderes ist, als du denkst."
      breadcrumb="Siderische Astrologie"
      sections={sections}
      ctaText="Entdecke dein siderisches Sternzeichen — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="was-ist" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ist siderische Astrologie?
        </h2>
        {/* <!-- BILD: Sternenhimmel mit markierten Sternbildern des Tierkreises --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Siderische Astrologie (von lateinisch <em>sidus</em> = Stern) ist ein Sternzeichen-System, das sich an den echten, beobachtbaren Positionen der Sterne am Himmel orientiert. Im Gegensatz zur tropischen Astrologie, die in der westlichen Welt verbreitet ist, berücksichtigt die siderische Astrologie die tatsächliche Verschiebung der Erdachse — die sogenannte Präzession.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das bedeutet: Wenn die Sonne am Tag deiner Geburt im Sternbild Löwe stand, bist du siderisch ein Löwe. Die tropische Astrologie würde dich möglicherweise als Jungfrau bezeichnen, weil sie einen starren Kalender verwendet, der sich seit 2.000 Jahren nicht mehr an die tatsächlichen Sternpositionen angepasst hat.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die siderische Astrologie ist das ältere der beiden Systeme und wird in der vedischen Tradition (Jyotish) seit über 5.000 Jahren praktiziert. In Indien, Nepal und weiten Teilen Südostasiens ist sie der Standard — konsultiert von über einer Milliarde Menschen.
        </p>
      </section>

      {/* Section 2 */}
      <section id="tropisch-vs-siderisch" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Tropisch vs. Siderisch — der entscheidende Unterschied
        </h2>
        {/* <!-- BILD: Vergleichsdiagramm tropischer vs. siderischer Tierkreis mit Verschiebung --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der fundamentale Unterschied liegt im Bezugspunkt. Die tropische Astrologie fixiert den Beginn des Tierkreises auf den Frühlingspunkt — den Moment, an dem die Sonne den Himmelsäquator überquert (ca. 20./21. März). Dieser Punkt wird als 0° Widder definiert, unabhängig davon, wo die Sterne tatsächlich stehen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die siderische Astrologie hingegen orientiert sich an den echten Sternbildern. Da sich die Erdachse in einem Zyklus von etwa 25.772 Jahren langsam dreht (Präzession), wandert der Frühlingspunkt durch die Sternbilder. Aktuell hat sich der tropische Tierkreis um etwa 24° von den tatsächlichen Sternbildern entfernt.
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
                <td className="px-4 py-3">Jahreszeiten</td>
                <td className="px-4 py-3">Sternpositionen</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Frühlingspunkt</td>
                <td className="px-4 py-3">Fix bei 0° Widder</td>
                <td className="px-4 py-3">Wandert (aktuell in Fische)</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted">Verschiebung</td>
                <td className="px-4 py-3">Keine Korrektur</td>
                <td className="px-4 py-3">~24° Ayanamsa-Korrektur</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Verbreitung</td>
                <td className="px-4 py-3">Westliche Welt</td>
                <td className="px-4 py-3">Indien, Südostasien</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 text-muted">Zeichen</td>
                <td className="px-4 py-3">12 (je 30°)</td>
                <td className="px-4 py-3">12 (je 30°) + Ophiuchus</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 text-muted">Astronomisch korrekt</td>
                <td className="px-4 py-3 text-muted">Nein</td>
                <td className="px-4 py-3 text-gold">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Beide Systeme verwenden die gleichen 12 Zeichen mit den gleichen Bedeutungen. Der einzige Unterschied ist, <em>wann</em> ein Zeichen beginnt und endet. Im tropischen System ist ein Löwe zum Beispiel vom 23. Juli bis 22. August geboren — im siderischen System vom 17. August bis 16. September.
        </p>
      </section>

      {/* Section 3 */}
      <section id="praezession" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ist Präzession und warum ist sie wichtig?
        </h2>
        {/* <!-- BILD: Animation/Diagramm der Erdachsen-Präzession (Kreisel-Effekt) --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Präzession beschreibt die langsame Kreiselbewegung der Erdachse. Wie ein sich drehender Kreisel, dessen Achse langsam einen Kreis beschreibt, taumelt auch die Erdachse — allerdings in einem Zyklus von etwa 25.772 Jahren (das sogenannte Platonische Jahr).
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Diese Taumelbewegung wurde bereits um 130 v. Chr. vom griechischen Astronomen Hipparch entdeckt. Er bemerkte, dass die Sterne sich im Vergleich zu früheren Aufzeichnungen leicht verschoben hatten. Seitdem hat sich die Verschiebung auf etwa 24° aufaddiert.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Konkret bedeutet das: Als die Babylonier vor rund 2.500 Jahren den tropischen Tierkreis definierten, stimmten tropische und siderische Positionen noch überein. Seitdem hat sich die Erdachse so weit gedreht, dass die Sonne am 21. März nicht mehr im Sternbild Widder steht (wie der tropische Tierkreis behauptet), sondern im Sternbild Fische.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Präzession ist kein esoterisches Konzept — sie ist ein messbares, astronomisches Phänomen, das von der NASA, der ESA und allen Sternwarten der Welt bestätigt wird. Die siderische Astrologie ist das einzige astrologische System, das diese Verschiebung berücksichtigt.
        </p>
      </section>

      {/* Section 4 */}
      <section id="lahiri" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Lahiri-Ayanamsa erklärt
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ayanamsa (Sanskrit: <em>ayana</em> = Sonnenwende, <em>amsa</em> = Teil) ist der Winkel, um den sich der tropische Tierkreis vom siderischen entfernt hat. Es gibt verschiedene Ayanamsa-Systeme, die sich minimal unterscheiden. Das bekannteste und am weitesten verbreitete ist das Lahiri-Ayanamsa.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Benannt nach dem indischen Astronomen Nirmala Chandra Lahiri, wurde dieses System 1955 vom Indian Calendar Reform Committee als offizieller Standard festgelegt. Es wird von der indischen Regierung für die Berechnung religiöser Feiertage und astrologischer Konstellationen verwendet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der aktuelle Lahiri-Ayanamsa-Wert beträgt etwa <strong className="text-white">24,17°</strong> (Stand 2026). Das bedeutet: Um vom tropischen zum siderischen Zeichen zu gelangen, werden 24,17° von jeder Planetenposition abgezogen.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Rechenbeispiel</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Tropische Sonnenposition: 5° Jungfrau (= 155° absolut)<br />
            Lahiri-Ayanamsa: 24,17°<br />
            Siderische Position: 155° - 24,17° = 130,83° = <strong className="text-gold">10,83° Löwe</strong><br />
            Ergebnis: Tropisch Jungfrau, siderisch Löwe.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          AstroMaster verwendet das Lahiri-Ayanamsa in Kombination mit den Swiss Ephemeris — den präzisesten astronomischen Berechnungstabellen, die auch von professionellen Sternwarten genutzt werden. So ist jede Berechnung auf die Bogensekunde genau.
        </p>
      </section>

      {/* Section 5 */}
      <section id="86-prozent" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Warum 86% der Menschen ein falsches Zeichen haben
        </h2>
        {/* <!-- BILD: Infografik mit Prozentbalken oder Kreisdiagramm --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Verschiebung von etwa 24° bedeutet, dass bei den meisten Sternzeichen fast der gesamte Zeitraum in das vorherige siderische Zeichen fällt. Nur wer in den letzten 5-6 Tagen eines tropischen Zeichens geboren ist, behält sein Zeichen auch im siderischen System.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein Beispiel: Der tropische Löwe reicht vom 23. Juli bis 22. August. Der siderische Löwe beginnt aber erst am 17. August. Das bedeutet: Wer zwischen dem 23. Juli und dem 16. August geboren ist (25 von 31 Tagen = 81%), ist tropisch Löwe, aber siderisch Krebs.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Über alle 12 Zeichen gemittelt ergibt sich eine Abweichungsrate von etwa 86%. Das heißt: Nur rund 14% der Menschen haben siderisch das gleiche Sonnenzeichen wie tropisch.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Das bedeutet nicht, dass du dich jahrelang falsch identifiziert hast — es bedeutet, dass es eine zweite, astronomisch fundierte Perspektive gibt, die dir neue Einsichten über deine Persönlichkeit geben kann.
        </p>
      </section>

      {/* Section 6 */}
      <section id="13-zeichen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 13 siderischen Sternzeichen
        </h2>
        {/* <!-- BILD: Ekliptik mit allen 13 Sternbildern markiert --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die siderische Astrologie arbeitet mit den gleichen 12 Tierkreiszeichen wie die tropische — Widder, Stier, Zwillinge, Krebs, Löwe, Jungfrau, Waage, Skorpion, Schütze, Steinbock, Wassermann und Fische. Jedes Zeichen umfasst exakt 30° des 360°-Tierkreises.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Zusätzlich gibt es ein 13. Sternbild: <strong className="text-gold">Ophiuchus</strong> (der Schlangenträger). Die Sonne durchquert dieses Sternbild zwischen dem 30. November und dem 17. Dezember. In der tropischen Astrologie wird Ophiuchus komplett ignoriert, weil das System strikt auf 12 gleich große Abschnitte aufgeteilt ist.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In der siderischen Tradition wird Ophiuchus als Zusatzinformation behandelt, nicht als Ersatz. Wenn deine Sonne in der Ophiuchus-Zone steht (etwa 240° bis 266° ekliptische Länge), bist du offiziell weiterhin Skorpion oder Schütze — aber mit dem besonderen Einfluss des Schlangenträgers.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Ophiuchus wird mit Heilung, Transformation und dem Streben nach Weisheit assoziiert. In der griechischen Mythologie ist er Asklepios, der Gott der Heilkunst, der sogar Tote wiedererwecken konnte.
        </p>
      </section>

      {/* Section 7: Tabelle */}
      <section id="tabelle" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Alle siderischen Sternzeichen mit Datumsbereichen
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die folgende Tabelle zeigt die ungefähren Datumsbereiche der siderischen Sternzeichen (basierend auf dem Lahiri-Ayanamsa, Stand 2026). Da der Ayanamsa-Wert sich jedes Jahr minimal verändert, können die Übergangstage um 1-2 Tage abweichen.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Sternzeichen</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Von</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Bis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {siderischeZeichen.map((z, i) => (
                <tr
                  key={z.zeichen}
                  className={`${i % 2 === 0 ? "bg-card" : "bg-card/50"} ${
                    z.zeichen === "Ophiuchus" ? "text-gold" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium">{z.zeichen}</td>
                  <td className="px-4 py-3 text-muted">{z.von}</td>
                  <td className="px-4 py-3 text-muted">{z.bis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted mt-3">
          Hinweis: Diese Daten sind Näherungswerte. Für eine exakte Bestimmung deines siderischen Sternzeichens nutze unseren Gratis-Check, der auf die Bogensekunde genau rechnet.
        </p>
      </section>

      {/* Section 8: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Häufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
