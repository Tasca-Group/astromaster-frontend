"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "aufbau", title: "Aufbau des Systems" },
  { id: "zehn-grad", title: "10-Grad-Einteilung" },
  { id: "verbindung-astrologie", title: "Verbindung zur Astrologie" },
  { id: "historischer-kontext", title: "Historischer Kontext" },
  { id: "moderne-anwendung", title: "Moderne Anwendung" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/aegyptische-dekane", label: "Ägyptische Dekane" },
  { href: "/wiki/gottheiten", label: "Die 36 Gottheiten" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/praezession", label: "Präzession" },
];

const faqItems = [
  {
    question: "Was ist ein Dekan in der Astrologie?",
    answer:
      "Ein Dekan ist ein 10°-Abschnitt des Tierkreises. Da der Tierkreis 360° umfasst, ergeben sich 36 Dekane. Jedes Sternzeichen (30°) enthält genau drei Dekane. Das System stammt aus dem alten Ägypten und ist über 4.000 Jahre alt. Im ägyptischen Dekansystem wird jeder Dekan von einer Gottheit bewacht.",
  },
  {
    question: "Warum teilt man den Tierkreis in 10-Grad-Abschnitte?",
    answer:
      "Die 10-Grad-Einteilung hat astronomische Ursprünge: Die alten Ägypter beobachteten, dass eine bestimmte Sterngruppe jeweils 10 Tage lang als Leitstern am Morgenhimmel erschien, bevor die nächste Gruppe übernahm. Diese 10-Tage-Zyklen bildeten die Grundlage des ägyptischen Kalenders und des Dekansystems.",
  },
  {
    question: "Wie alt ist das Dekansystem?",
    answer:
      "Das Dekansystem ist über 4.000 Jahre alt. Die frühesten Darstellungen finden sich auf ägyptischen Särgen des Mittleren Reichs (ca. 2100 v. Chr.). Das berühmteste Monument ist die Decke des Dendera-Tempels (ca. 50 v. Chr.), die alle 36 Dekane zeigt.",
  },
  {
    question: "Was ist der Unterschied zwischen Dekanen und Häusern?",
    answer:
      "Dekane teilen die Ekliptik in 36 feste Abschnitte zu je 10°, die für alle gleich sind. Häuser teilen den Himmel basierend auf Geburtszeit und -ort in 12 individuelle Abschnitte. Beide Systeme ergänzen sich: Die Dekane beschreiben archetypische Qualitäten, die Häuser beschreiben individuelle Lebensbereiche.",
  },
  {
    question: "Wie nutzt AstroMaster das Dekansystem?",
    answer:
      "AstroMaster berechnet aus deinem Geburtsdatum, in welchem der 36 (bzw. 37 mit Sothis) Dekane die Sonne bei deiner Geburt stand. Diesem Dekan ist eine ägyptische Gottheit zugeordnet, die als dein kosmischer Wächter gilt. Die Analyse beschreibt die Qualitäten dieser Gottheit und wie sie sich in deiner Persönlichkeit zeigen.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Das Dekansystem erklärt"
      subtitle="Von der Astronomie zur Mythologie: Wie die alten Ägypter den Tierkreis in 36 Dekane teilten und damit eines der ältesten und präzisesten Persönlichkeitssysteme der Menschheit schufen."
      breadcrumb="Dekansystem"
      sections={sections}
      ctaText="Finde deinen Dekan — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Aufbau des Systems */}
      <section id="aufbau" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Aufbau des Systems
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Dekansystem ist eines der ältesten und gleichzeitig elegantesten Systeme der Menschheitsgeschichte, um die Persönlichkeit eines Menschen anhand seiner Geburtsposition am Himmel zu beschreiben. Die Grundidee ist bestechend einfach: Der gesamte Tierkreis von 360° wird in 36 gleich große Abschnitte zu je 10° aufgeteilt — die sogenannten Dekane (aus dem Griechischen <em>dekanoi</em>, abgeleitet vom ägyptischen Wort für eine Gruppe von zehn).
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Da jedes der 12 Sternzeichen einen Bogen von 30° am Himmel einnimmt, enthält jedes Zeichen exakt drei Dekane. Der erste Dekan eines Zeichens umfasst die Grade 0° bis 10°, der zweite Dekan 10° bis 20° und der dritte Dekan 20° bis 30°. Diese dreifache Unterteilung bedeutet: Zwei Menschen, die nach dem gewöhnlichen Horoskop dasselbe Sternzeichen haben, können dennoch in verschiedenen Dekanen geboren sein — und damit unter dem Einfluss verschiedener Kräfte stehen.
        </p>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Die Mathematik des Dekansystems</p>
          <div className="grid grid-cols-2 gap-4 text-base text-muted/90">
            <div>
              <p className="text-white font-medium mb-1">360°</p>
              <p className="text-sm">Gesamter Tierkreis</p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">36 Dekane</p>
              <p className="text-sm">360° / 10° = 36</p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">3 Dekane pro Zeichen</p>
              <p className="text-sm">30° / 10° = 3</p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">ca. 10 Tage pro Dekan</p>
              <p className="text-sm">365 Tage / 36 = ~10,1</p>
            </div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das System hat eine bemerkenswerte Eigenschaft: Es verbindet astronomische Präzision mit mythologischer Tiefe. Jeder der 36 Dekane ist nicht nur ein Gradbereich am Himmel, sondern steht unter dem Schutz einer bestimmten ägyptischen Gottheit. Diese Gottheit verleiht dem Dekan seine spezifische Qualität — seine Stärken, Herausforderungen und Lebensthemen. So wird aus einer simplen geometrischen Einteilung ein reichhaltiges System zur Persönlichkeitsanalyse.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          AstroMaster geht einen Schritt weiter und integriert einen 37. Dekan: Sothis, benannt nach dem altägyptischen Namen für den Stern Sirius. Dieser zusätzliche Dekan fängt besondere Geburtskonstellationen auf, die mit dem heiligsten Stern der ägyptischen Tradition verbunden sind — dem Stern, dessen Aufgang die Nilflut und damit den Beginn des neuen Jahres ankündigte.
        </p>
      </section>

      {/* Section 2: 10-Grad-Einteilung */}
      <section id="zehn-grad" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 10-Grad-Einteilung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Wahl von genau 10° als Dekangröße war kein Zufall. Sie hat ihren Ursprung in der praktischen Himmelsbeobachtung der alten Ägypter. Die Priester-Astronomen bemerkten, dass bestimmte Sterngruppen (die späteren Dekane) jeweils etwa 10 Tage lang als erste Sterne am östlichen Horizont erschienen, kurz bevor die Sonne aufging — der sogenannte heliakische Aufgang. Dann übernahm die nächste Sterngruppe diese Rolle.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Dieser 10-Tage-Rhythmus wurde zur Grundlage des ägyptischen Kalenders: 36 Dekane zu je 10 Tagen ergeben 360 Tage, plus 5 Zusatztage (die Epagomenen), die den Geburtstagen der Götter Osiris, Isis, Seth, Nephthys und Horus gewidmet waren. Der ägyptische Kalender und das Dekansystem waren also untrennbar miteinander verwoben — die Dekane waren Sternuhren, Kalendermarker und spirituelle Symbole in einem.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 10-Grad-Einteilung löst dabei ein fundamentales Problem der einfachen Sternzeichen-Astrologie: die fehlende Differenzierung. Wenn man nur 12 Sternzeichen verwendet, fallen rund 8% aller Menschen in dieselbe Kategorie. Das Dekansystem verdreifacht die Auflösung auf 36 Kategorien — jeder Dekan umfasst nur noch etwa 2,8% der Bevölkerung. Das Ergebnis ist ein deutlich feineres und persönlicheres Profil.
        </p>
        <div className="p-5 rounded-xl bg-card border border-border mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Beispiel: Die drei Dekane des Löwen</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold text-lg">1.</span>
              <div>
                <p className="text-white font-medium">Ra-Dekan (0°-10° Löwe)</p>
                <p className="text-sm text-muted/90">23. Juli bis ca. 2. August. Sonnengott Ra verleiht strahlende Führungskraft, Schöpfergeist und eine natürliche königliche Ausstrahlung. Der reinste Ausdruck der Löwe-Energie.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold text-lg">2.</span>
              <div>
                <p className="text-white font-medium">Sekhmet-Dekan (10°-20° Löwe)</p>
                <p className="text-sm text-muted/90">ca. 3. August bis 12. August. Die Löwengöttin Sekhmet fügt dem Löwen wilde Schutzkraft, Heilungsfähigkeit und eine intensive, manchmal explosive Energie hinzu.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold text-lg">3.</span>
              <div>
                <p className="text-white font-medium">Atum-Dekan (20°-30° Löwe)</p>
                <p className="text-sm text-muted/90">ca. 13. August bis 22. August. Atum, der Gott der Vollendung, gibt diesem Dekan Weisheit, Reife und ein tiefes Verständnis für Lebenszyklen — der Löwe als weiser König.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7]">
          Dieses Beispiel zeigt, wie stark sich die drei Dekane eines einzigen Zeichens unterscheiden können. Alle drei sind Löwen, aber der Ra-Löwe strahlt, der Sekhmet-Löwe kämpft und der Atum-Löwe reflektiert. Das Dekansystem macht diese Nuancen sichtbar, die im 12-Zeichen-System verborgen bleiben.
        </p>
      </section>

      {/* Section 3: Verbindung zur Astrologie */}
      <section id="verbindung-astrologie" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Verbindung zur Astrologie
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Dekansystem ist kein Konkurrenz-System zur Astrologie — es ist eine Verfeinerung. In der klassischen Astrologie beschreibt das Sternzeichen (Sonnenzeichen) die Grundenergie eines Menschen: Ein Widder ist impulsiv und mutig, ein Stier beständig und sinnlich, ein Zwilling neugierig und kommunikativ. Das Dekansystem fügt eine zweite Schicht hinzu: Welche spezifische Nuance der Grundenergie dominiert?
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In der hellenistischen Astrologie, die das ägyptische Dekansystem übernahm und weiterentwickelte, wurde jedem Dekan zusätzlich ein Planet als &quot;Mitherrscher&quot; zugeordnet. Der erste Dekan eines Zeichens wird vom Zeichen-Herrscher selbst regiert, der zweite und dritte Dekan von den Herrschern der beiden anderen Zeichen desselben Elements. So erhält beispielsweise der zweite Dekan des Löwen (Feuerzeichen) Jupiter als Mitherrscher, weil Jupiter den Schützen regiert — das nächste Feuerzeichen im Tierkreis.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Diese Verschränkung von Dekanen und Planeten schafft ein reichhaltiges Geflecht von Einflüssen. Ein Mensch, der im zweiten Dekan des Löwen geboren ist, trägt nicht nur die Grundenergie des Löwen und den Schutz von Sekhmet, sondern auch den expansiven, optimistischen Einfluss des Jupiters. All diese Schichten ergeben zusammen ein differenziertes und nuanciertes Persönlichkeitsbild.
        </p>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Dekane und die vier Elemente</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Da jedes Element (Feuer, Erde, Luft, Wasser) drei Sternzeichen umfasst und jedes Zeichen drei Dekane hat, gibt es insgesamt 9 Dekane pro Element. Diese 9 Dekane bilden einen inneren Kreis innerhalb des Elements — sie zeigen, wie sich die elementare Grundenergie in verschiedenen Facetten und Intensitätsstufen ausdrückt.
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im AstroMaster-System werden die ägyptischen Dekane mit der siderischen Astrologie, der Numerologie und Human Design kombiniert. Das Dekansystem ergänzt dabei die anderen Module auf einzigartige Weise: Während die Astrologie die kosmischen Positionen beschreibt und die Numerologie die Zahlenqualitäten, bringt das Dekansystem die archetypische Kraft einer uralten Mythologie ein — eine Gottheit als persönlichen Schutzpatron.
        </p>
      </section>

      {/* Section 4: Historischer Kontext */}
      <section id="historischer-kontext" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Historischer Kontext
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Geschichte des Dekansystems beginnt vor über 4.000 Jahren in den Tempeln und Grabkammern des alten Ägyptens. Die frühesten bekannten Darstellungen stammen aus dem Mittleren Reich (ca. 2100-1800 v. Chr.) und finden sich auf den Innenseiten von Holzsärgen. Diese sogenannten Diagonalsternuhren zeigen Listen von 36 Sternen oder Sterngruppen, die zur Zeitmessung in der Nacht dienten. Jede Stunde der Nacht war einem bestimmten Dekan-Stern zugeordnet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Priester-Astronomen von Heliopolis und Theben beobachteten den Nachthimmel mit außerordentlicher Präzision. Sie bemerkten, dass bestimmte Sterne jeweils 10 Tage lang als erste am östlichen Horizont erschienen, bevor sie für etwa 70 Tage unsichtbar wurden. Diese 36 Sterngruppen — die Dekane — bildeten die Basis eines astronomischen Kalenders, der unabhängig vom Nil-Pegel funktionierte und eine erstaunliche Genauigkeit aufwies.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Von besonderer Bedeutung war der Stern Sirius (ägyptisch: Sopdet, griechisch: Sothis). Sein heliakischer Aufgang — das erste Erscheinen am Morgenhimmel nach etwa 70 Tagen Unsichtbarkeit — markierte den Beginn des ägyptischen Neujahrs und kündigte die jährliche Nilflut an, von der das Überleben des gesamten Landes abhing. Sirius war daher der heiligste aller Dekan-Sterne und wurde mit Isis gleichgesetzt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das berühmteste archäologische Zeugnis des Dekansystems ist die Decke des Dendera-Tempels in Oberägypten. Der kreisförmige Tierkreis von Dendera (das Original befindet sich heute im Louvre in Paris) stammt aus der späten Ptolemäerzeit (ca. 50 v. Chr.) und zeigt alle 36 Dekane zusammen mit den 12 Sternzeichen und den Planeten. Dieses Monument belegt, dass das Dekansystem über mehr als zwei Jahrtausende hinweg lebendig blieb und sich mit der griechischen Astrologie verwoben hatte.
        </p>
        <div className="p-5 rounded-xl bg-card border border-border mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Zeitleiste des Dekansystems</p>
          <div className="space-y-3 text-sm text-muted/90">
            <div className="flex gap-4">
              <span className="text-gold font-medium shrink-0 w-28">ca. 2100 v. Chr.</span>
              <span>Erste Diagonalsternuhren auf Särgen (Mittleres Reich)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-medium shrink-0 w-28">ca. 1280 v. Chr.</span>
              <span>Astronomische Deckenmalerei im Grab von Seti I. (Tal der Könige)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-medium shrink-0 w-28">ca. 300 v. Chr.</span>
              <span>Griechen übernehmen das Dekansystem in die hellenistische Astrologie</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-medium shrink-0 w-28">ca. 50 v. Chr.</span>
              <span>Tierkreis von Dendera mit allen 36 Dekanen</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-medium shrink-0 w-28">ca. 1000 n. Chr.</span>
              <span>Arabische Astronomen tradieren das Dekansystem im Picatrix</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-medium shrink-0 w-28">21. Jahrhundert</span>
              <span>Renaissance des Dekansystems in der modernen Astrologie</span>
            </div>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7]">
          Nach dem Untergang des Pharaonenreichs verschwand das Dekansystem nicht. Die Griechen übernahmen es und integrierten es in ihr eigenes astrologisches System. Der Begriff &quot;Dekan&quot; selbst ist griechisch. Von dort gelangte das Wissen über die arabische Astronomie des Mittelalters nach Europa, wo es in alchemistischen und astrologischen Werken weiterlebte. Im 20. und 21. Jahrhundert erlebt das Dekansystem eine bemerkenswerte Renaissance — angetrieben von dem Bedürfnis nach tieferer und differenzierterer Persönlichkeitsanalyse, die über die einfache 12-Zeichen-Astrologie hinausgeht.
        </p>
      </section>

      {/* Section 5: Moderne Anwendung */}
      <section id="moderne-anwendung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Moderne Anwendung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In der modernen Astrologie erlebt das Dekansystem eine beeindruckende Wiederentdeckung. Immer mehr Astrologen erkennen, dass die dreifache Unterteilung jedes Zeichens eine Tiefe bietet, die das einfache 12-Zeichen-Modell nicht erreichen kann. Die Frage ist nicht mehr nur &quot;Welches Sternzeichen bist du?&quot;, sondern &quot;In welchem Dekan bist du geboren — und welche archetypische Kraft begleitet dich?&quot;
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die moderne Anwendung des Dekansystems unterscheidet sich jedoch von der antiken Praxis. Während die ägyptischen Priester die Dekane primär zur Zeitmessung und für rituelle Zwecke nutzten, verwenden moderne Systeme wie AstroMaster die Dekane als Werkzeug zur Persönlichkeitsanalyse. Die ägyptischen Gottheiten dienen dabei als archetypische Linsen — sie helfen, die feinen Unterschiede innerhalb eines Sternzeichens zu benennen und zu verstehen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein praktisches Beispiel: Zwei Freundinnen, beide im Zeichen Stier geboren, wundern sich, warum sie trotz desselben Sternzeichens so unterschiedlich sind. Die eine ist fürsorglich, intuitiv und emotional — sie ist im ersten Dekan geboren, unter dem Schutz von Isis. Die andere ist sinnlich, kunstvoll und lebensfroh — sie gehört zum dritten Dekan, bewacht von Hathor. Das Dekansystem erklärt, was die Standard-Astrologie nicht erklären kann: die Vielfalt innerhalb eines Zeichens.
        </p>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Wie AstroMaster das Dekansystem nutzt</p>
          <p className="text-base text-muted/90 leading-[1.7] mb-3">
            AstroMaster integriert das ägyptische Dekansystem als eines von fünf Analyse-Modulen. Die Berechnung erfolgt automatisch aus dem Geburtsdatum:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted/90">
            <li>Die exakte Sonnenposition (in Grad) zum Zeitpunkt der Geburt wird berechnet</li>
            <li>Aus der Gradposition wird der zugehörige Dekan bestimmt (welcher 10°-Abschnitt)</li>
            <li>Die ägyptische Schutzgottheit wird zugeordnet</li>
            <li>Die Qualitäten der Gottheit werden im Kontext des Gesamtprofils gedeutet</li>
          </ol>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die besondere Stärke des Dekansystems in der modernen Anwendung liegt in seiner Kombination mit anderen Systemen. Wenn die siderische Astrologie zeigt, dass jemand Sonne im Löwen hat, und das Dekansystem verrät, dass es der Sekhmet-Dekan ist, und die Numerologie eine Lebenszahl 8 ergibt — dann entsteht ein reichhaltiges, mehrschichtiges Bild: ein Mensch mit löwenhafter Strahlkraft (Sternzeichen), wilder Schutzkraft (Dekan) und materieller Manifestationsstärke (Lebenszahl). Diese Kombination ist einzigartig und weit aussagekräftiger als jedes einzelne System für sich.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Das Dekansystem beweist, dass antikes Wissen und moderne Analyse sich nicht widersprechen müssen. Die ägyptischen Priester haben vor 4.000 Jahren ein System geschaffen, das in seiner mathematischen Eleganz und archetypischen Tiefe bis heute Bestand hat. AstroMaster macht dieses Wissen zugänglich — berechnet in Millisekunden, was einst stundenlange Himmelsbeobachtung erforderte, und verbunden mit einem Netzwerk aus vier weiteren Analyse-Systemen, die zusammen ein umfassendes Persönlichkeitsprofil ergeben.
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
