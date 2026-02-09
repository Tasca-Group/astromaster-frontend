"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "uebersicht", title: "Übersicht der Gottheiten" },
  { id: "sonnengoetter", title: "Die Sonnengötter" },
  { id: "mondgoetter", title: "Die Mondgötter" },
  { id: "zuordnung", title: "Zuordnung nach Dekaden" },
  { id: "bedeutung-heute", title: "Bedeutung heute" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/aegyptische-dekane", label: "Ägyptische Dekane" },
  { href: "/wiki/dekansystem", label: "Das Dekansystem" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
];

const sonnenGottheiten = [
  {
    name: "Ra",
    domäne: "Sonne, Schöpfung, Lebenskraft",
    symbol: "Sonnenscheibe mit Uräus-Schlange",
    beschreibung:
      "Ra ist der oberste Sonnengott und Schöpfer aller Dinge. Er fährt jeden Tag in seiner Barke über den Himmel und bringt Licht und Wärme in die Welt. Am Abend tritt er seine Reise durch die Unterwelt an, um am Morgen wiedergeboren zu werden. Menschen unter dem Schutz von Ra tragen eine innere Sonne in sich — Lebensfreude, Führungskraft und schöpferische Energie sind ihre Kernqualitäten.",
  },
  {
    name: "Horus",
    domäne: "Himmel, Königtum, Gerechtigkeit",
    symbol: "Falkenkopf, Auge des Horus",
    beschreibung:
      "Horus ist der falkenköpfige Himmelsgott, dessen Augen Sonne und Mond darstellen. Als Sohn von Isis und Osiris kämpfte er gegen Seth um das Erbe seines Vaters — ein Mythos, der den ewigen Kampf zwischen Ordnung und Chaos symbolisiert. Horus-Geborene besitzen strategisches Denken, einen weiten Blick und den unbeugsamen Willen, für das Richtige einzustehen.",
  },
  {
    name: "Sekhmet",
    domäne: "Krieg, Heilung, Schutz",
    symbol: "Löwenkopf mit Sonnenscheibe",
    beschreibung:
      "Sekhmet ist die löwenköpfige Kriegsgöttin und gleichzeitig eine mächtige Heilerin. Ihr Name bedeutet 'Die Mächtige'. Sie verkörpert die zerstörerische Kraft der Sonne, die sowohl vernichten als auch heilen kann. Sekhmet-Geborene tragen eine duale Natur in sich — sie können mit wilder Entschlossenheit kämpfen und mit tiefer Zärtlichkeit heilen.",
  },
  {
    name: "Atum",
    domäne: "Untergehende Sonne, Vollendung",
    symbol: "Doppelkrone, Schlange",
    beschreibung:
      "Atum ist der Gott der untergehenden Sonne und der Vollendung. Er steht am Anfang und am Ende aller Schöpfung — der Urschöpfer, der aus dem Nichts das Alles erschuf. Atum-Geborene haben ein tiefes Verständnis für Zyklen und Übergänge. Sie wissen instinktiv, dass jedes Ende einen neuen Anfang in sich trägt.",
  },
  {
    name: "Khepri",
    domäne: "Aufgehende Sonne, Erneuerung",
    symbol: "Skarabäus-Käfer",
    beschreibung:
      "Khepri ist der Gott der Morgensonne, dargestellt als Skarabäus-Käfer, der die Sonne über den Horizont rollt. Er symbolisiert Erneuerung, Transformation und den ewigen Neubeginn. Khepri-Geborene sind Meister der Neuerfindung — sie können sich immer wieder häuten und aus Krisen gestärkt hervorgehen.",
  },
];

const mondGottheiten = [
  {
    name: "Thoth",
    domäne: "Weisheit, Schrift, Mond",
    symbol: "Ibiskopf, Schreibtafel",
    beschreibung:
      "Thoth ist der ibisköpfige Gott der Weisheit, des Schreibens und des Mondes. Er gilt als Erfinder der Hieroglyphen und Hüter allen kosmischen Wissens. Bei der Totenwägung protokolliert er das Urteil von Ma'at. Thoth-Geborene zeichnen sich durch einen scharfen Verstand, unstillbare Wissbegier und die Gabe der Kommunikation aus. Für sie ist Wissen die höchste Form der Macht.",
  },
  {
    name: "Isis",
    domäne: "Magie, Mutterschaft, Heilung",
    symbol: "Thronzeichen, Geierflügel",
    beschreibung:
      "Isis ist die Große Mutter, Meisterin der Magie und Beschützerin der Lebenden und Toten. Sie sammelte die verstreuten Teile ihres ermordeten Gatten Osiris und setzte ihn wieder zusammen — ein Akt, der ihre unbeugsame Liebe und ihre magische Kraft zeigt. Isis-Geborene besitzen ein tiefes intuitives Wissen und die Fähigkeit, andere emotional und spirituell zu heilen.",
  },
  {
    name: "Khonsu",
    domäne: "Mond, Zeit, Jugend",
    symbol: "Mondsichel und Vollmond",
    beschreibung:
      "Khonsu ist der Mondgott, Sohn von Amun und Mut. Sein Name bedeutet 'Der Wanderer', was die nächtliche Reise des Mondes über den Himmel beschreibt. Khonsu galt als Beschützer gegen Krankheit und böse Geister. Khonsu-Geborene haben eine natürliche Verbindung zu den Zyklen der Zeit — sie spüren den Rhythmus von Ebbe und Flut in ihrem eigenen Leben.",
  },
  {
    name: "Hathor",
    domäne: "Liebe, Schönheit, Musik, Fruchtbarkeit",
    symbol: "Kuhgehörn mit Sonnenscheibe",
    beschreibung:
      "Hathor ist die Göttin der Liebe, Schönheit, Musik und Lebensfreude. Sie wird als Frau mit Kuhgehörn dargestellt und galt als Beschützerin der Frauen und als Göttin des Tanzes. Hathor-Geborene strahlen eine natürliche Anmut aus und verstehen es, Schönheit in allem zu finden. Sie bringen Freude, Sinnlichkeit und Harmonie in ihre Umgebung.",
  },
  {
    name: "Nephthys",
    domäne: "Nacht, Trauer, Schutz der Toten",
    symbol: "Tempelzeichen auf dem Kopf",
    beschreibung:
      "Nephthys ist die Schwester von Isis und Göttin der Nacht, der Trauer und des Übergangs. Sie steht an der Seite der Verstorbenen und begleitet sie in die nächste Welt. Nephthys-Geborene besitzen ein tiefes Verständnis für die dunklen Seiten des Lebens — nicht als Bedrohung, sondern als notwendigen Teil des Ganzen. Sie finden Stärke in der Stille.",
  },
];

const dekanZuordnung = [
  { zeichen: "Widder", dekan1: "Khnum", dekan2: "Anubis", dekan3: "Thoth" },
  { zeichen: "Stier", dekan1: "Isis", dekan2: "Osiris", dekan3: "Hathor" },
  { zeichen: "Zwillinge", dekan1: "Seth", dekan2: "Shu", dekan3: "Tefnut" },
  { zeichen: "Krebs", dekan1: "Sothis", dekan2: "Hapi", dekan3: "Khepri" },
  { zeichen: "Löwe", dekan1: "Ra", dekan2: "Sekhmet", dekan3: "Atum" },
  { zeichen: "Jungfrau", dekan1: "Ma'at", dekan2: "Nephthys", dekan3: "Renenutet" },
  { zeichen: "Waage", dekan1: "Ptah", dekan2: "Hathor", dekan3: "Anubis" },
  { zeichen: "Skorpion", dekan1: "Sekhmet", dekan2: "Serket", dekan3: "Osiris" },
  { zeichen: "Schütze", dekan1: "Horus", dekan2: "Nefertem", dekan3: "Thoth" },
  { zeichen: "Steinbock", dekan1: "Bastet", dekan2: "Sobek", dekan3: "Khnum" },
  { zeichen: "Wassermann", dekan1: "Nut", dekan2: "Geb", dekan3: "Amun" },
  { zeichen: "Fische", dekan1: "Khonsu", dekan2: "Isis", dekan3: "Sothis" },
];

const faqItems = [
  {
    question: "Wie viele ägyptische Gottheiten gibt es im Dekansystem?",
    answer:
      "Im klassischen Dekansystem gibt es 36 Gottheiten — eine für jeden der 36 Dekane (10°-Abschnitte) des Tierkreises. AstroMaster ergänzt einen 37. Dekan (Sothis/Sirius). Manche Gottheiten erscheinen in mehreren Dekanen, da die ägyptische Tradition verschiedene Aspekte derselben Gottheit unterschied.",
  },
  {
    question: "Welche ägyptische Gottheit beschützt mich?",
    answer:
      "Deine Schutzgottheit wird durch deinen Geburts-Dekan bestimmt — den 10°-Abschnitt des Tierkreises, in dem die Sonne zum Zeitpunkt deiner Geburt stand. AstroMaster berechnet deinen exakten Dekan und die zugehörige Gottheit automatisch aus deinem Geburtsdatum.",
  },
  {
    question: "Was ist der Unterschied zwischen Sonnengöttern und Mondgöttern?",
    answer:
      "Sonnengötter wie Ra und Horus stehen für aktive, nach außen gerichtete Qualitäten wie Führung, Tatkraft und Durchsetzungsvermögen. Mondgötter wie Thoth und Khonsu repräsentieren reflektierende, innere Qualitäten wie Weisheit, Intuition und emotionale Tiefe. Beide Gruppen sind gleich wertvoll und ergänzen sich.",
  },
  {
    question: "Stimmen die Gottheiten-Zuordnungen mit historischen Quellen überein?",
    answer:
      "Die Zuordnung basiert auf historischen Quellen wie den Dekan-Listen des Dendera-Tempels, Särgen des Mittleren Reichs und hellenistischen Texten. AstroMaster verwendet eine rekonstruierte Version, die archäologische Funde mit der späteren griechisch-ägyptischen Tradition verbindet.",
  },
  {
    question: "Kann ich mehrere Schutzgottheiten haben?",
    answer:
      "In der Dekan-Tradition hat jeder Mensch eine primäre Schutzgottheit (Sonnen-Dekan). In einer erweiterten Deutung können auch der Mond-Dekan und der Aszendent-Dekan weitere Gottheiten zuordnen, die sekundäre Einflüsse beschreiben.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 36 ägyptischen Gottheiten"
      subtitle="Seit über 4.000 Jahren bewachen 36 ägyptische Gottheiten den Tierkreis. Jeder der 36 Dekane steht unter dem Schutz eines mächtigen Gottes oder einer Göttin mit einzigartigen Qualitäten."
      breadcrumb="Ägyptische Gottheiten"
      sections={sections}
      ctaText="Entdecke deine Schutzgottheit — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Übersicht */}
      <section id="uebersicht" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Übersicht der Gottheiten
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das ägyptische Pantheon umfasst Hunderte von Gottheiten, doch im Dekansystem spielen 36 von ihnen eine besondere Rolle. Jede dieser Gottheiten bewacht einen 10°-Abschnitt des Tierkreises und verleiht den in diesem Abschnitt Geborenen spezifische Qualitäten, Stärken und Herausforderungen. Die Gottheiten sind keine abstrakten Symbole — sie sind archetypische Kräfte, die seit Jahrtausenden das menschliche Verständnis von Persönlichkeit und Schicksal prägen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die ägyptischen Priester teilten ihre Gottheiten in verschiedene Kategorien ein: Sonnengötter, die mit der aktiven, nach außen gerichteten Lebenskraft verbunden sind. Mondgötter, die für Reflexion, Intuition und inneres Wissen stehen. Und Sternengötter, die spezifische kosmische Kräfte verkörpern. Diese Einteilung findet sich auch im Dekansystem wieder — jeder Dekan wird von einer Gottheit bewacht, deren solare, lunare oder stellare Natur den Grundcharakter des Dekans bestimmt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Besonders faszinierend ist, dass manche Gottheiten in mehreren Dekanen erscheinen — allerdings in verschiedenen Aspekten. Sekhmet beispielsweise bewacht sowohl einen Dekan im Löwen als auch einen im Skorpion. Im Löwen zeigt sie ihren schützenden, kriegerischen Aspekt, im Skorpion ihre heilende, transformative Seite. Die alten Ägypter verstanden ihre Götter als vielschichtige Wesen mit unterschiedlichen Gesichtern.
        </p>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Die 10 wichtigsten Dekan-Gottheiten</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            <strong className="text-white">Ra</strong> (Sonne, Schöpfung) — <strong className="text-white">Isis</strong> (Magie, Heilung) — <strong className="text-white">Osiris</strong> (Wiedergeburt) — <strong className="text-white">Thoth</strong> (Weisheit) — <strong className="text-white">Anubis</strong> (Transformation) — <strong className="text-white">Hathor</strong> (Liebe) — <strong className="text-white">Horus</strong> (Gerechtigkeit) — <strong className="text-white">Bastet</strong> (Freude) — <strong className="text-white">Sekhmet</strong> (Schutz) — <strong className="text-white">Ma&apos;at</strong> (Wahrheit)
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im Folgenden stellen wir die wichtigsten Gottheiten des Dekansystems vor, gegliedert nach ihrer solaren und lunaren Zugehörigkeit. Jede Gottheit wird mit ihrer Domäne, ihrem Symbol und den Qualitäten beschrieben, die sie den unter ihrem Schutz Geborenen verleiht.
        </p>
      </section>

      {/* Section 2: Sonnengötter */}
      <section id="sonnengoetter" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die Sonnengötter
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die solaren Gottheiten repräsentieren aktive, nach außen gerichtete Lebenskraft. Sie stehen für Führung, Schöpferkraft, Mut und die Fähigkeit, Licht in die Dunkelheit zu bringen. Menschen unter dem Schutz eines Sonnengottes zeichnen sich durch Tatkraft, natürliche Autorität und eine strahlende Ausstrahlung aus.
        </p>

        <div className="space-y-4 mb-6">
          {sonnenGottheiten.map((g) => (
            <div key={g.name} className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-lg font-semibold text-gold">{g.name}</h3>
                <span className="text-xs text-muted">({g.domäne})</span>
              </div>
              <p className="text-xs text-muted/70 mb-3">Symbol: {g.symbol}</p>
              <p className="text-sm text-muted/90 leading-relaxed">{g.beschreibung}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Mondgötter */}
      <section id="mondgoetter" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die Mondgötter
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die lunaren Gottheiten verkörpern die reflektierende, innere Seite des Lebens. Sie stehen für Weisheit, Intuition, emotionale Tiefe und die Fähigkeit, in der Stille Kraft zu finden. Menschen unter dem Schutz eines Mondgottes besitzen oft eine ausgeprägte Sensibilität, Kreativität und ein natürliches Gespür für verborgene Zusammenhänge.
        </p>

        <div className="space-y-4 mb-6">
          {mondGottheiten.map((g) => (
            <div key={g.name} className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-lg font-semibold text-gold">{g.name}</h3>
                <span className="text-xs text-muted">({g.domäne})</span>
              </div>
              <p className="text-xs text-muted/70 mb-3">Symbol: {g.symbol}</p>
              <p className="text-sm text-muted/90 leading-relaxed">{g.beschreibung}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Zuordnung nach Dekaden */}
      <section id="zuordnung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Zuordnung nach Dekaden
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die folgende Tabelle zeigt die vollständige Zuordnung der Gottheiten zu den 36 Dekanen des Tierkreises. Jedes der 12 Sternzeichen enthält drei Dekane, die jeweils von einer eigenen Gottheit bewacht werden. So entsteht ein fein differenziertes Profil, das weit über die einfache Sternzeichen-Zuordnung hinausgeht.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Zeichen</th>
                <th className="text-left px-4 py-3 text-gold font-medium">1. Dekan (0-10°)</th>
                <th className="text-left px-4 py-3 text-gold font-medium">2. Dekan (10-20°)</th>
                <th className="text-left px-4 py-3 text-gold font-medium">3. Dekan (20-30°)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {dekanZuordnung.map((z, i) => (
                <tr
                  key={z.zeichen}
                  className={i % 2 === 0 ? "bg-card" : "bg-card/50"}
                >
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{z.zeichen}</td>
                  <td className="px-4 py-3 text-gold">{z.dekan1}</td>
                  <td className="px-4 py-3 text-gold">{z.dekan2}</td>
                  <td className="px-4 py-3 text-gold">{z.dekan3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Zuordnung folgt einer uralten Tradition, die in Tempeldecken, Särgen und Papyri überliefert ist. Beachte, dass manche Gottheiten in verschiedenen Dekanen erscheinen — beispielsweise Anubis im 2. Dekan des Widders und im 3. Dekan der Waage. In jedem Dekan zeigt die Gottheit jedoch einen anderen Aspekt ihrer Kraft.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Reihenfolge der Gottheiten ist nicht zufällig: Sie folgt einem inneren Rhythmus, der den Jahresverlauf mit mythologischen Themen verwebt. Vom Schöpfungsakt (Khnum im ersten Dekan des Widders) über den Tod und die Wiedergeburt (Osiris im Stier und Skorpion) bis zur kosmischen Vollendung (Sothis in den Fischen) erzählt das Dekansystem eine zusammenhängende Geschichte des Lebens.
        </p>
      </section>

      {/* Section 5: Bedeutung heute */}
      <section id="bedeutung-heute" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Bedeutung heute
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die ägyptischen Gottheiten des Dekansystems sind keine Relikte einer vergangenen Zeit — sie sind archetypische Kräfte, die auch heute noch als Spiegel der menschlichen Psyche dienen können. Jede Gottheit verkörpert eine bestimmte Kombination von Qualitäten, Stärken und Herausforderungen, die sich in der Persönlichkeit der unter ihrem Schutz Geborenen widerspiegeln.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In der modernen Anwendung geht es nicht darum, wörtlich an ägyptische Götter zu glauben. Es geht darum, die archetypischen Muster zu erkennen, die sie repräsentieren. Wenn jemand unter dem Schutz von Ra steht, bedeutet das nicht, dass der Sonnengott persönlich über ihn wacht. Es bedeutet, dass die Qualitäten, die Ra symbolisiert — Lebenskraft, Führungsstärke, Schöpfergeist — in der Persönlichkeit dieses Menschen besonders ausgeprägt sein können.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Dekansystem mit seinen 36 Gottheiten bietet dabei eine bemerkenswerte Differenzierung. Während das Sternzeichen-System die Menschheit in 12 Gruppen einteilt, differenziert das Dekansystem in 36 Archetypen. Zwei Löwe-Geborene, die nach dem Sternzeichen identisch wären, können völlig verschiedene Gottheiten haben: Der eine steht unter Ra (strahlende Führungskraft), die andere unter Sekhmet (wilde Schutzkraft) und der dritte unter Atum (weise Vollendung).
        </p>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Die AstroMaster-Integration</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            AstroMaster berechnet deinen persönlichen Dekan und die zugehörige Schutzgottheit automatisch aus deinem Geburtsdatum. In der Pro-Analyse erhältst du eine ausführliche Deutung deiner Gottheit im Kontext deines gesamten kosmischen Profils — wie sie mit deinem siderischen Sternzeichen, deiner Lebenszahl und deinem Human-Design-Typ zusammenwirkt.
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Renaissance des Dekansystems in der modernen Astrologie zeigt, dass das Bedürfnis nach tieferer Differenzierung wächst. Menschen wollen nicht nur wissen, dass sie Stier oder Jungfrau sind — sie wollen verstehen, was sie innerhalb ihres Zeichens einzigartig macht. Die ägyptischen Gottheiten bieten genau diesen Schlüssel: eine jahrtausendealte Sprache für die feinen Unterschiede zwischen Menschen, die auf den ersten Blick ähnlich wirken.
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
