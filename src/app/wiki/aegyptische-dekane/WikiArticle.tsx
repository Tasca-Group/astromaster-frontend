"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-sind", title: "Was sind die ägyptischen Dekane?" },
  { id: "dekansystem", title: "Das Dekansystem" },
  { id: "gottheiten-tabelle", title: "Welcher Gott beschützt dich?" },
  { id: "wichtigste-gottheiten", title: "Die wichtigsten Gottheiten" },
  { id: "geschichte", title: "4.000 Jahre kosmische Weisheit" },
  { id: "dekane-vs-sternzeichen", title: "Dekane vs. Sternzeichen" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/numerologie", label: "Numerologie" },
  { href: "/wiki/human-design", label: "Human Design" },
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
];

const dekanTabelle = [
  { zeitraum: "21. März – 30. März", dekan: "1. Dekan Widder", gottheit: "Khnum", beschreibung: "Schöpfergott, Former des Lebens" },
  { zeitraum: "31. März – 9. April", dekan: "2. Dekan Widder", gottheit: "Anubis", beschreibung: "Hüter der Schwelle, Transformation" },
  { zeitraum: "10. April – 19. April", dekan: "3. Dekan Widder", gottheit: "Thoth", beschreibung: "Gott der Weisheit und des Wissens" },
  { zeitraum: "20. April – 30. April", dekan: "1. Dekan Stier", gottheit: "Isis", beschreibung: "Große Mutter, Magie und Heilung" },
  { zeitraum: "1. Mai – 10. Mai", dekan: "2. Dekan Stier", gottheit: "Osiris", beschreibung: "Herr der Unterwelt, Wiedergeburt" },
  { zeitraum: "11. Mai – 20. Mai", dekan: "3. Dekan Stier", gottheit: "Hathor", beschreibung: "Göttin der Liebe und Schönheit" },
  { zeitraum: "21. Mai – 31. Mai", dekan: "1. Dekan Zwillinge", gottheit: "Seth", beschreibung: "Gott des Chaos, Wandlung" },
  { zeitraum: "21. Juni – 1. Juli", dekan: "1. Dekan Krebs", gottheit: "Sothis", beschreibung: "Stern Sirius, kosmische Erneuerung" },
  { zeitraum: "23. Juli – 2. Aug.", dekan: "1. Dekan Löwe", gottheit: "Ra", beschreibung: "Sonnengott, Lebenskraft" },
  { zeitraum: "23. Aug. – 2. Sep.", dekan: "1. Dekan Jungfrau", gottheit: "Ma'at", beschreibung: "Göttin der Wahrheit und Ordnung" },
  { zeitraum: "23. Okt. – 2. Nov.", dekan: "1. Dekan Skorpion", gottheit: "Sekhmet", beschreibung: "Löwengöttin, Schutz und Heilung" },
  { zeitraum: "22. Nov. – 1. Dez.", dekan: "1. Dekan Schütze", gottheit: "Horus", beschreibung: "Himmelsgott, Königtum" },
  { zeitraum: "22. Dez. – 31. Dez.", dekan: "1. Dekan Steinbock", gottheit: "Bastet", beschreibung: "Katzengöttin, Freude und Schutz" },
];

const gottheiten = [
  {
    name: "Ra",
    beschreibung:
      "Ra ist der mächtige Sonnengott und Herrscher über den Himmel. Er verkörpert Lebenskraft, Führungsstärke und schöpferische Energie. Menschen unter dem Schutz von Ra tragen ein inneres Feuer in sich — sie sind geborene Anführer mit einer natürlichen Ausstrahlung, die andere inspiriert. Ra steht für den Mut, den eigenen Weg zu gehen und das Licht auch in dunklen Zeiten zu finden.",
  },
  {
    name: "Isis",
    beschreibung:
      "Isis ist die Große Mutter, Meisterin der Magie und Beschützerin der Lebenden und Toten. Sie vereint Mitgefühl mit außergewöhnlicher Stärke. Wer unter ihrem Schutz steht, besitzt ein tiefes intuitives Wissen und die Fähigkeit, andere zu heilen — emotional wie spirituell. Isis lehrt, dass wahre Macht in der Hingabe und in der Liebe liegt.",
  },
  {
    name: "Thoth",
    beschreibung:
      "Thoth ist der Gott der Weisheit, des Schreibens und des Mondes. Er gilt als Erfinder der Hieroglyphen und Hüter des kosmischen Wissens. Menschen unter Thoths Einfluss zeichnen sich durch einen scharfen Verstand, Wissbegier und die Gabe der Kommunikation aus. Thoth erinnert daran, dass Wissen die höchste Form der Macht ist.",
  },
  {
    name: "Anubis",
    beschreibung:
      "Anubis ist der schakalköpfige Hüter der Schwelle zwischen den Welten. Er begleitet Seelen durch Übergänge und Transformationen. Wer unter seinem Schutz geboren ist, besitzt eine besondere Fähigkeit, Veränderungen zu navigieren und aus Krisen gestärkt hervorzugehen. Anubis lehrt, dass jedes Ende einen neuen Anfang in sich trägt.",
  },
  {
    name: "Osiris",
    beschreibung:
      "Osiris ist der Herr der Unterwelt und Symbol für Tod und Wiedergeburt. Er steht für die ewigen Zyklen des Lebens — Vergehen und Neubeginn. Menschen unter seinem Schutz verstehen intuitiv, dass Loslassen notwendig ist, um zu wachsen. Osiris verkörpert Resilienz und die Fähigkeit, sich immer wieder neu zu erfinden.",
  },
  {
    name: "Horus",
    beschreibung:
      "Horus ist der falkenköpfige Himmelsgott, dessen Augen Sonne und Mond sind. Er steht für Vision, Königtum und den Kampf für Gerechtigkeit. Menschen unter seinem Schutz besitzen einen weiten Blick — sie erkennen das große Bild und handeln mit strategischer Klarheit. Das Auge des Horus ist bis heute ein Symbol für Schutz und Erkenntnis.",
  },
  {
    name: "Ma'at",
    beschreibung:
      "Ma'at ist die Göttin der Wahrheit, Gerechtigkeit und kosmischen Ordnung. Ihre Feder wiegt die Herzen der Verstorbenen gegen die Wahrheit. Wer unter ihrem Schutz steht, hat ein ausgeprägtes Gerechtigkeitsempfinden und strebt nach Harmonie und Balance in allen Lebensbereichen. Ma'at lehrt, dass innere Ordnung äußeren Frieden erschafft.",
  },
  {
    name: "Bastet",
    beschreibung:
      "Bastet ist die Katzengöttin, die Freude, Schutz und weibliche Anmut verkörpert. Sie vereint sanfte Eleganz mit wilder Schutzkraft — zärtlich zu den Ihren, furchtlos gegenüber Bedrohungen. Menschen unter ihrem Schutz strahlen eine natürliche Grazie aus und wissen, wie man das Leben in vollen Zügen genießt, ohne die eigenen Grenzen zu vergessen.",
  },
];

const faqItems = [
  {
    question: "Was ist ein ägyptischer Dekan?",
    answer:
      "Ein Dekan ist ein 10°-Abschnitt des Tierkreises. Da der Tierkreis 360° umfasst, ergeben sich 36 Dekane — jeder bewacht von einer altägyptischen Gottheit mit eigenen Qualitäten und Energien. Das Dekansystem ist über 4.000 Jahre alt und stammt aus dem alten Ägypten.",
  },
  {
    question: "Woher weiß ich, welcher Dekan meiner ist?",
    answer:
      "Dein Dekan wird durch dein genaues Geburtsdatum bestimmt. Jedes Sternzeichen enthält drei Dekane zu je 10°. AstroMaster berechnet deinen exakten Dekan und die zugehörige ägyptische Schutzgottheit automatisch — du brauchst nur dein Geburtsdatum einzugeben.",
  },
  {
    question: "Sind die ägyptischen Dekane wissenschaftlich belegt?",
    answer:
      "Die ägyptischen Dekane sind ein historisch-kulturelles System, das vor über 4.000 Jahren zur Zeitmessung und spirituellen Orientierung entwickelt wurde. Archäologische Funde wie die Decke des Dendera-Tempels belegen ihre Existenz. Es handelt sich nicht um Naturwissenschaft, sondern um ein archetypisches Deutungssystem mit tiefer kultureller Bedeutung.",
  },
  {
    question: "Was ist der Unterschied zwischen Dekanen und Sternzeichen?",
    answer:
      "Sternzeichen umfassen jeweils 30° des Tierkreises, Dekane nur 10°. Jedes Sternzeichen wird in drei Dekane unterteilt, die feinere und spezifischere Persönlichkeitsmerkmale beschreiben. Wenn das Sternzeichen das Kapitel eines Buches ist, dann ist der Dekan der konkrete Absatz, der deine Geschichte erzählt.",
  },
  {
    question: "Was ist Sothis — der 37. Dekan?",
    answer:
      "Sothis ist der 37. Dekan im AstroMaster-System, benannt nach dem altägyptischen Namen für den Stern Sirius. Sirius war für die Ägypter der heiligste Stern am Himmel — sein Aufgang kündigte die Nilflut und damit das neue Jahr an. Der Sothis-Dekan steht für kosmische Erneuerung, Zyklen und Neuanfänge.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Ägyptische Dekane"
      subtitle="Das älteste astrologische Detailsystem der Menschheitsgeschichte teilt den Tierkreis in 36 Dekane — jeder bewacht von einer altägyptischen Gottheit. Erfahre, welcher Gott dich seit deiner Geburt begleitet."
      breadcrumb="Ägyptische Dekane"
      sections={sections}
      ctaText="Entdecke deinen kosmischen Wächter — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="was-sind" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was sind die ägyptischen Dekane?
        </h2>
        {/* <!-- BILD: Ägyptischer Tierkreis mit 36 Dekanen und Gottheiten --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die ägyptischen Dekane sind eines der ältesten astrologischen Systeme der Menschheit. Sie unterteilen den Tierkreis von 360° in 36 Abschnitte zu je 10° — die sogenannten Dekane (von griechisch <em>dekanoi</em>, Zehnergruppen). Jeder dieser 36 Dekane wird von einer altägyptischen Gottheit bewacht, die dem Abschnitt seine spezifische Energie, Qualität und Bedeutung verleiht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das System entstand vor über 4.000 Jahren im alten Ägypten, etwa um 2100 v. Chr. Ursprünglich dienten die Dekane als Sternuhren: Die ägyptischen Priester beobachteten, welche Sterngruppe (Dekan) kurz vor Sonnenaufgang am Horizont erschien, und leiteten daraus die Nachtstunde ab. Zehn Tage lang war jeweils derselbe Dekan der Leitstein — daher der Name. Aus dieser astronomischen Zeitmessung entwickelte sich ein tiefgreifendes spirituelles Deutungssystem.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jeder Dekan repräsentiert nicht nur einen Zeitraum, sondern eine kosmische Kraft. Die zugeordnete Gottheit beschreibt archetypische Qualitäten: Schöpferkraft, Weisheit, Schutz, Transformation oder Lebensfreude. Wer in einem bestimmten Dekan geboren ist, steht nach ägyptischer Überlieferung unter dem besonderen Schutz und Einfluss dieser Gottheit.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Was die ägyptischen Dekane so faszinierend macht, ist ihre Präzision: Während ein Sternzeichen alle Menschen eines 30-Tage-Zeitraums zusammenfasst, differenziert das Dekansystem in drei verschiedene Gottheiten pro Zeichen. Zwei Menschen, die beide im Zeichen Stier geboren sind, können völlig unterschiedliche Schutzgottheiten haben — und damit unterschiedliche Stärken, Herausforderungen und Lebenswege.
        </p>
      </section>

      {/* Section 2 */}
      <section id="dekansystem" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Dekansystem
        </h2>
        {/* <!-- BILD: Diagramm des Tierkreises unterteilt in 36 Segmente à 10° --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Mathematik hinter dem Dekansystem ist elegant und einfach: Der Tierkreis umfasst 360°. Teilt man ihn in Abschnitte von je 10°, erhält man exakt 36 Dekane. Da jedes der 12 Sternzeichen einen Bogen von 30° abdeckt, enthält jedes Zeichen genau drei Dekane. Der erste Dekan umfasst 0°–10° des Zeichens, der zweite 10°–20° und der dritte 20°–30°.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jeder dieser 36 Dekane ist einer bestimmten ägyptischen Gottheit zugeordnet. Die Zuordnung folgt einer uralten Tradition, die in Tempeldecken, Särgen und Papyri überliefert ist. Der erste Dekan des Widders beispielsweise gehört dem Schöpfergott Khnum, der das Leben auf seiner Töpferscheibe formt. Der zweite Dekan des Widders steht unter dem Schutz von Anubis, dem Hüter der Schwelle. Und der dritte Dekan gehört Thoth, dem Gott der Weisheit.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          AstroMaster geht einen Schritt weiter und integriert einen <strong className="text-gold">37. Dekan: Sothis</strong>. Sothis ist der altägyptische Name für den Stern Sirius, den hellsten Stern am Nachthimmel. Für die Ägypter war Sirius von überragender Bedeutung: Sein heliakischer Aufgang (das erste Erscheinen am Morgenhimmel nach einer Phase der Unsichtbarkeit) kündigte die jährliche Nilflut an — das wichtigste Ereignis im ägyptischen Kalender, von dem die Ernte und damit das Überleben abhing.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Dein persönlicher Dekan wird durch dein exaktes Geburtsdatum bestimmt. Je nachdem, in welchem 10°-Abschnitt des Tierkreises die Sonne zum Zeitpunkt deiner Geburt stand, wirst du einem der 36 (oder 37) Dekane zugeordnet. Dieser Dekan verrät, welche ägyptische Gottheit dein kosmischer Wächter ist — und welche Qualitäten sie dir mitgegeben hat.
        </p>
      </section>

      {/* Section 3 */}
      <section id="gottheiten-tabelle" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Welcher Gott beschützt dich?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die folgende Tabelle zeigt einen Auszug aus den 36 Dekanen mit ihren zugeordneten Gottheiten. Jeder Dekan umfasst einen Zeitraum von etwa 10 Tagen und wird von einer spezifischen ägyptischen Gottheit bewacht.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Zeitraum</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Dekan</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Gottheit</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Kurzbeschreibung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {dekanTabelle.map((d, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-card" : "bg-card/50"}
                >
                  <td className="px-4 py-3 text-muted whitespace-nowrap">{d.zeitraum}</td>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{d.dekan}</td>
                  <td className="px-4 py-3 text-gold font-medium">{d.gottheit}</td>
                  <td className="px-4 py-3 text-muted">{d.beschreibung}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted mt-3">
          Dies ist ein Auszug. In deiner vollständigen AstroMaster-Analyse erhältst du eine detaillierte Deutung deines persönlichen Dekans.
        </p>
      </section>

      {/* Section 4 */}
      <section id="wichtigste-gottheiten" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die wichtigsten Gottheiten
        </h2>
        {/* <!-- BILD: Collage der 8 Gottheiten in ägyptischem Stil --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die 36 Dekane werden von einer Vielzahl ägyptischer Gottheiten bewacht. Hier sind acht der bedeutendsten Schutzgötter im Dekansystem — jeder mit einzigartigen Qualitäten, die sich im Charakter der unter ihrem Schutz Geborenen widerspiegeln.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {gottheiten.map((g) => (
            <div
              key={g.name}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-gold mb-2">{g.name}</h3>
              <p className="text-sm text-muted/90 leading-relaxed">
                {g.beschreibung}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section id="geschichte" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          4.000 Jahre kosmische Weisheit
        </h2>
        {/* <!-- BILD: Foto oder Illustration der Decke des Dendera-Tempels mit Dekanen --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die frühesten Darstellungen der Dekane finden sich auf den Innenseiten ägyptischer Särge aus dem Mittleren Reich (ca. 2100–1800 v. Chr.). Diese sogenannten Diagonalsternuhren zeigen Listen von 36 Sternen oder Sterngruppen, die zur Zeitmessung in der Nacht dienten. Im Grab von Pharao Seti I. (ca. 1280 v. Chr.) im Tal der Könige sind die Dekane in einer astronomischen Deckenmalerei verewigt — eines der eindrucksvollsten Zeugnisse altägyptischer Astronomie.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das berühmteste Dekan-Monument ist die Decke des Dendera-Tempels in Oberägypten. Der kreisförmige Tierkreis von Dendera (heute im Louvre, Paris) zeigt alle 36 Dekane zusammen mit den Sternbildern und Planeten. Er stammt aus der späten Ptolemäerzeit (ca. 50 v. Chr.) und belegt, dass das Dekansystem über zwei Jahrtausende hinweg lebendig blieb. Besonders bemerkenswert ist die Rolle des Sterns Sirius (ägyptisch: Sopdet/Sothis) — sein heliakischer Aufgang markierte den Beginn des ägyptischen Neujahrs und der Nilflut, die das Land fruchtbar machte.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Nach dem Untergang des Pharaonenreichs verschwand das Dekansystem keineswegs. Die Griechen übernahmen es in der hellenistischen Periode und integrierten es in ihre eigene Astrologie — der Begriff &bdquo;Dekan&ldquo; selbst ist griechischen Ursprungs. Von dort gelangte das Wissen in die arabische Astronomie des Mittelalters und wurde in Werken wie dem <em>Picatrix</em> weitergetragen. Heute erlebt das Dekansystem eine Renaissance: Moderne Astrologen erkennen, dass die dreifache Unterteilung jedes Zeichens eine Tiefe und Differenzierung bietet, die das einfache 12-Zeichen-System nicht erreichen kann.
        </p>
      </section>

      {/* Section 6 */}
      <section id="dekane-vs-sternzeichen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Dekane vs. Sternzeichen
        </h2>
        {/* <!-- BILD: Vergleichsgrafik: 12 Sternzeichen vs. 36 Dekane als Kreisdiagramm --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Sternzeichen und Dekane sind keine konkurrierenden Systeme — sie ergänzen sich. Ein Sternzeichen umfasst 30° des Tierkreises und beschreibt die grundlegenden Charaktereigenschaften eines Zeitraums von etwa 30 Tagen. Ein Dekan umfasst nur 10° und damit etwa 10 Tage. Das bedeutet: Drei verschiedene Dekane teilen sich ein Sternzeichen, und jeder bringt eine eigene Nuance, eine eigene Gottheit und eigene Qualitäten mit.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Stell dir vor, dein Sternzeichen ist ein Buch-Kapitel und der Dekan ist der spezifische Absatz, der deine Geschichte erzählt. Zwei Menschen können beide Stier sein, aber wenn die eine im ersten Dekan (Isis) und der andere im dritten Dekan (Hathor) geboren ist, werden sie sehr unterschiedliche Stärken und Herausforderungen erleben. Der Stier-Isis-Dekan betont Fürsorge, Magie und intuitives Wissen, während der Stier-Hathor-Dekan Sinnlichkeit, Schönheit und Lebensfreude hervorhebt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Genau deshalb ist das Dekansystem so wertvoll: Es erklärt, warum sich Menschen mit dem gleichen Sternzeichen oft so unterschiedlich fühlen. Die Standard-Astrologie mit ihren 12 Zeichen ordnet die gesamte Menschheit in 12 Kategorien ein. Die ägyptischen Dekane verdreifachen diese Differenzierung auf 36 — und AstroMaster geht mit dem Sothis-Dekan sogar auf 37. Das Ergebnis ist ein deutlich feineres und persönlicheres Profil.
        </p>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Häufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
