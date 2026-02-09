"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "sanskrit-name", title: "Sanskrit & Name" },
  { id: "position-farbe", title: "Position & Farbe" },
  { id: "kernthemen", title: "Kernthemen" },
  { id: "beschreibung", title: "Beschreibung" },
  { id: "blockade", title: "Blockade-Anzeichen" },
  { id: "balance", title: "Balance-Zeichen" },
  { id: "uebungen", title: "Übungen & Praxis" },
  { id: "edelsteine", title: "Edelsteine" },
  { id: "verbindung", title: "Astrologische Verbindung" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/chakren", label: "Was sind Chakren?" },
  { href: "/wiki/stirnchakra", label: "Stirnchakra (Ajna)" },
  { href: "/wiki/sieben-chakren", label: "Die 7 Hauptchakren" },
];

const faqItems = [
  {
    question: "Wie öffne ich mein Kronenchakra?",
    answer:
      "Das Kronenchakra lässt sich nicht öffnen wie eine Tür — es entfaltet sich von selbst, wenn die sechs darunterliegenden Chakren in Balance sind. Stille Meditation, Dankbarkeitspraxis, Dienst an anderen und das Verbringen von Zeit in der Natur können den Prozess unterstützen. Erzwingen lässt sich die Öffnung nicht; sie geschieht durch Hingabe und Loslassen.",
  },
  {
    question: "Ist es gefährlich, das Kronenchakra zu öffnen?",
    answer:
      "Eine erzwungene oder verfrühte Öffnung des Kronenchakras — etwa durch intensive Atemtechniken ohne Vorbereitung — kann zu Desorientierung, Dissoziation oder psychischem Ungleichgewicht führen. Deshalb betonen alle seriösen Traditionen die Wichtigkeit einer soliden Basis: Erst wenn die unteren Chakren stabil und geerdet sind, ist eine sichere Entfaltung des Kronenchakras möglich.",
  },
  {
    question: "Kann jeder Mensch Erleuchtung erfahren?",
    answer:
      "Nach den meisten spirituellen Traditionen hat jeder Mensch das Potenzial zur Erleuchtung. Es geht jedoch nicht um ein Ziel, das man erreicht, sondern um einen fortlaufenden Prozess der Bewusstwerdung. Schon kleine Momente der Stille, Verbundenheit und des Staunens über das Leben sind Berührungen mit der Kronenchakra-Energie. Vollständige Erleuchtung ist selten, aber Glückseligkeit und innerer Frieden sind für jeden zugänglich.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Kronenchakra (Sahasrara)"
      subtitle="Das siebte Chakra — Spiritualität, Erleuchtung, kosmisches Bewusstsein."
      breadcrumb="Chakren > Kronenchakra"
      sections={sections}
      ctaText="Entdecke, wie Uranus und die Sonne dein Kronenchakra beeinflussen — Jetzt Gratis-Check starten"
      ctaHref="/check"
      relatedTopics={relatedTopics}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {["Kronenchakra", "Sahasrara", "Erleuchtung", "Spiritualität", "7. Chakra"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#A855F7" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          <div><span className="text-muted">Sanskrit:</span> <span className="font-medium">Sahasrara (&bdquo;Tausendfach&ldquo;)</span></div>
          <div><span className="text-muted">Position:</span> <span className="font-medium">Scheitel des Kopfes</span></div>
          <div><span className="text-muted">Farbe:</span> <span className="font-medium">Violett / Weiß</span></div>
          <div><span className="text-muted">Element:</span> <span className="font-medium">Kosmisches Bewusstsein</span></div>
          <div><span className="text-muted">Planet:</span> <span className="font-medium">Uranus / Sonne</span></div>
          <div><span className="text-muted">Mantra:</span> <span className="font-medium">Stille (oder OM)</span></div>
        </div>
      </div>

      {/* Section 1: Sanskrit & Name */}
      <section id="sanskrit-name" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Sanskrit & Name</h2>
        <p className="text-muted leading-relaxed mb-4">
          Sahasrara stammt aus dem Sanskrit und bedeutet &bdquo;tausendfach&ldquo; oder &bdquo;tausendblättrig&ldquo;. Der Name bezieht sich auf den tausendblättrigen Lotus, der seit Jahrtausenden als Symbol dieses Chakras dient. Die tausend Blütenblätter repräsentieren die Unendlichkeit — die grenzenlose Entfaltung des Bewusstseins, die möglich wird, wenn alle Energiezentren in Harmonie schwingen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Im Westen ist es als Kronenchakra, Scheitelchakra oder einfach als siebtes Chakra bekannt. Der Begriff &bdquo;Krone&ldquo; verweist auf seine Position am Scheitel des Kopfes und auf die Vorstellung einer &bdquo;Krone des Lichts&ldquo;, die in vielen Traditionen als Heiligenschein oder Aureole dargestellt wird — von christlichen Heiligenbildern bis zu buddhistischen Ikonographien.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Anders als die sechs darunterliegenden Chakren, die jeweils einem bestimmten Element, einer Drüse und spezifischen Lebensthemen zugeordnet sind, transzendiert Sahasrara alle Zuordnungen. Es ist das Chakra jenseits der Dualität — der Punkt, an dem das individuelle Bewusstsein sich mit dem universellen verbindet. In den Upanishaden wird es als der Ort beschrieben, an dem Atman (die individuelle Seele) Brahman (das universelle Bewusstsein) erkennt.
        </p>
      </section>

      {/* Section 2: Position & Farbe */}
      <section id="position-farbe" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Position & Farbe</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Kronenchakra befindet sich am Scheitel des Kopfes — genau dort, wo bei Neugeborenen die Fontanelle noch weich und offen ist. Diese anatomische Parallele ist bemerkenswert: Die Fontanelle ist buchstäblich eine Öffnung zum Himmel, die sich im Laufe des Wachstums schließt. In der Chakra-Tradition wird die Arbeit mit Sahasrara als ein &bdquo;Wiederöffnen&ldquo; dieser Verbindung verstanden.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die zugeordneten Farben sind Violett und Weiß. Violett als Mischung von Rot (Wurzelchakra) und Blau (Halschakra) symbolisiert die Vereinigung aller Chakra-Energien. Weiß enthält alle Farben des Spektrums und steht für Reinheit, Klarheit und die Gesamtheit des Lichts. In fortgeschrittenen Meditationsstadien wird Sahasrara oft als strahlendes weißes oder goldenes Licht wahrgenommen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das zugeordnete Element ist kosmisches Bewusstsein — jenseits der klassischen Elemente Erde, Wasser, Feuer, Luft und Äther. Die körperliche Entsprechung ist die Hypophyse (Hirnanhangsdrüse), die als &bdquo;Meisterdrüse&ldquo; das gesamte endokrine System reguliert. Auch die Großhirnrinde und das zentrale Nervensystem als Ganzes werden mit Sahasrara assoziiert.
        </p>
      </section>

      {/* Section 3: Kernthemen */}
      <section id="kernthemen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Kernthemen</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Kronenchakra umfasst die höchsten Aspekte des menschlichen Bewusstseins. Seine Kernthemen gehen über das Persönliche hinaus und berühren das Universelle:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Spiritualität</strong> — Die direkte Erfahrung einer Dimension jenseits des Materiellen. Nicht als Glaube, sondern als lebendige Erkenntnis.</li>
          <li><strong className="text-white">Erleuchtung</strong> — Der Zustand des Erwachens, in dem die Illusion der Getrenntheit aufgelöst wird. Nicht als einmaliges Ereignis, sondern als wachsendes Bewusstsein.</li>
          <li><strong className="text-white">Kosmisches Bewusstsein</strong> — Die Wahrnehmung, dass alles miteinander verbunden ist. Die Erfahrung der Einheit in der Vielfalt.</li>
          <li><strong className="text-white">Einheit</strong> — Das Erkennen, dass die Trennung zwischen &bdquo;Ich&ldquo; und &bdquo;Welt&ldquo;, zwischen Beobachter und Beobachtetem, eine Illusion des Verstandes ist.</li>
          <li><strong className="text-white">Transzendenz</strong> — Die Fähigkeit, über die Begrenzungen des Ego, der Zeit und des Raumes hinauszugehen.</li>
          <li><strong className="text-white">Verbindung zum Göttlichen</strong> — Wie auch immer du das Göttliche definierst — Gott, das Universum, die Quelle, das Tao — Sahasrara ist der Punkt der Verbindung.</li>
          <li><strong className="text-white">Innerer Frieden</strong> — Eine tiefe Gelassenheit, die nicht von äußeren Umständen abhängt. Das Wissen, dass alles gut ist, so wie es ist.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Wichtig: Kronenchakra-Themen lassen sich nicht erzwingen oder intellektuell verstehen. Sie werden erfahren — in Momenten der Stille, der Hingabe und des Loslassens.
        </p>
      </section>

      {/* Section 4: Beschreibung */}
      <section id="beschreibung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Das Kronenchakra verstehen</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Kronenchakra ist das höchste Energiezentrum und bildet den Abschluss der Chakra-Reise. Sahasrara bedeutet &bdquo;tausendfach&ldquo; und wird als tausendblättriger Lotus dargestellt — ein Symbol für die unendliche Entfaltung des Bewusstseins. Während die anderen Chakren sich mit spezifischen Lebensbereichen befassen — Sicherheit, Kreativität, Willenskraft, Liebe, Ausdruck, Intuition — geht es hier um die Erfahrung der Einheit mit allem, was ist.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Dies ist kein intellektuelles Verstehen, sondern ein direktes Erleben. Du kannst tausend Bücher über Erleuchtung lesen, ohne sie zu erfahren. Und du kannst sie in einem einzigen Moment der Stille berühren. Ein offenes Kronenchakra zeigt sich nicht als dramatische Erleuchtung mit Blitz und Donner, sondern als tiefes, stilles Wissen, dass du Teil von etwas Größerem bist.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Es ist die Verbindung zwischen dem Persönlichen und dem Universellen. Stell dir vor, ein Tropfen erkennt, dass er der Ozean ist — nicht nur ein Teil davon, sondern in seinem Wesen identisch mit dem Ganzen. Das ist die Erfahrung des Kronenchakras. Es bedeutet nicht, dass das Persönliche aufhört zu existieren, sondern dass es in einen größeren Zusammenhang eingebettet wird.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Interessanterweise ist das Kronenchakra kein Ziel, das man &bdquo;erreicht&ldquo;. Es ist eher wie das Aufwachen aus einem Traum — du realisierst, dass die Verbindung immer da war. Die Arbeit an den sechs darunterliegenden Chakren entfernt die Schleier, die diese Erkenntnis verdecken: die Angst des Wurzelchakras, die Anhaftung des Sakralchakras, das Ego des Solarplexus, die Verschlossenheit des Herzens, die Unehrlichkeit der Kehle und die Illusion des Verstandes.
        </p>
      </section>

      {/* Section 5: Blockade-Anzeichen */}
      <section id="blockade" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Anzeichen einer Blockade</h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein blockiertes Kronenchakra zeigt sich als Gefühl der Getrenntheit — von sich selbst, von anderen und vom Leben als Ganzes. Die Blockade kann sich als spirituelle Leere oder als übertriebene Fixierung auf das Materielle manifestieren.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Körperliche Anzeichen:</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Chronische Erschöpfung und Antriebslosigkeit</li>
          <li>Schlafstörungen, insbesondere Ein- und Durchschlafprobleme</li>
          <li>Lichtempfindlichkeit und häufige Kopfschmerzen am Scheitel</li>
          <li>Neurologische Beschwerden und Nervosität</li>
          <li>Schwäche des Immunsystems</li>
          <li>Störungen des Hormonhaushalts (Hypophyse)</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Emotionale und mentale Anzeichen (Unteraktivität):</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Spirituelle Leere und das Gefühl der Sinnlosigkeit</li>
          <li>Zynismus und Skepsis gegenüber allem Nicht-Materiellen</li>
          <li>Existenzielle Depression und das Gefühl, dass &bdquo;da doch noch mehr sein muss&ldquo;</li>
          <li>Gefühl der Isolation und Getrenntheit von der Welt</li>
          <li>Übermäßiger Materialismus als Kompensation</li>
          <li>Verschlossenheit gegenüber Spiritualität und tieferen Fragen</li>
          <li>Angst vor dem Tod und vor dem Unbekannten</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Anzeichen bei Überaktivität:</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Spirituelle Arroganz und Überlegenheitsgefühl</li>
          <li>Dissoziation und fehlende Erdung</li>
          <li>Vernachlässigung des Körpers und irdischer Bedürfnisse</li>
          <li>Sucht nach spirituellen Erfahrungen (&bdquo;Spiritual Bypassing&ldquo;)</li>
          <li>Ablehnung der materiellen Welt und sozialer Rückzug</li>
        </ul>
      </section>

      {/* Section 6: Balance-Zeichen */}
      <section id="balance" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Zeichen der Balance</h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein ausgeglichenes Kronenchakra zeigt sich nicht in ekstatischen Zuständen, sondern in einer tiefen, stillen Verbundenheit mit dem Leben. Es ist eine Qualität des Seins, nicht des Tuns. Folgende Zeichen deuten auf ein gesundes Sahasrara hin:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Tiefes Gefühl der Verbundenheit mit allem</strong> — Du spürst, dass du Teil eines größeren Ganzen bist. Nicht als Idee, sondern als lebendige Erfahrung.</li>
          <li><strong className="text-white">Innerer Frieden und Gelassenheit</strong> — Eine Ruhe, die nicht von äußeren Umständen abhängt. Du bist gelassen, auch wenn das Leben stürmisch ist.</li>
          <li><strong className="text-white">Spirituelles Bewusstsein ohne Dogma</strong> — Du hast einen Zugang zur spirituellen Dimension, ohne dich an starre Glaubenssysteme zu klammern.</li>
          <li><strong className="text-white">Dankbarkeit und Staunen</strong> — Du nimmst die Schönheit und das Wunder des Lebens wahr, auch in alltäglichen Momenten.</li>
          <li><strong className="text-white">Weisheit und Mitgefühl</strong> — Deine Erfahrungen haben dich weise gemacht, und diese Weisheit drückt sich als Mitgefühl für andere aus.</li>
          <li><strong className="text-white">Akzeptanz des Lebens wie es ist</strong> — Du kämpfst nicht gegen die Realität, sondern nimmst sie an — ohne Resignation, sondern mit aktivem Vertrauen.</li>
          <li><strong className="text-white">Demut</strong> — Je mehr du erkennst, desto mehr erkennst du, wie wenig du weißt. Wahre Erleuchtung geht Hand in Hand mit Demut.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Menschen mit einem balancierten Kronenchakra strahlen eine besondere Ruhe aus. Sie sind präsent, aufmerksam und mitfühlend. Sie suchen nicht nach Erleuchtung — sie leben sie, Moment für Moment.
        </p>
      </section>

      {/* Section 7: Übungen & Praxis */}
      <section id="uebungen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Übungen & Praxis</h2>
        <p className="text-muted leading-relaxed mb-4">
          Die Praxis für das Kronenchakra unterscheidet sich grundlegend von der für andere Chakren. Hier geht es weniger um spezifische Techniken als um ein Loslassen — ein Öffnen für das, was jenseits des Bekannten liegt:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Stille Meditation</strong> — Einfach sitzen und sein. Kein Mantra, kein Fokus, keine Technik. Erlaube deinen Gedanken zu kommen und zu gehen, ohne ihnen zu folgen. Dies ist die reinste Form der Kronenchakra-Praxis.</li>
          <li><strong className="text-white">Gebet oder Kontemplation</strong> — Nicht als Bitten, sondern als Gespräch mit dem Universellen. Sprich aus dem Herzen, ohne Worte zu planen. Oder sitze einfach in der Gegenwart dessen, was größer ist als du.</li>
          <li><strong className="text-white">Violettes/weißes Licht am Scheitel visualisieren</strong> — Stelle dir ein strahlendes violettes oder reinweißes Licht vor, das vom Scheitel deines Kopfes nach oben strömt und sich mit dem kosmischen Licht verbindet.</li>
          <li><strong className="text-white">Yoga: Kopfstand</strong> — Sirsasana (nur für Fortgeschrittene!) bringt Energie direkt zum Kronenchakra. Für Anfänger ist Savasana (Totenstellung) ebenso wirksam, wenn sie bewusst praktiziert wird.</li>
          <li><strong className="text-white">Savasana bewusst praktizieren</strong> — Liege auf dem Rücken und lasse alles los — Körper, Gedanken, Identität. Erlaube dir, einfach zu existieren, ohne etwas sein zu müssen.</li>
          <li><strong className="text-white">Fasten oder reduzierter Konsum</strong> — Gelegentliches Fasten oder bewusstes Reduzieren von Konsum (Medien, Essen, Ablenkung) schafft Raum für subtilere Wahrnehmungen.</li>
          <li><strong className="text-white">In der Natur meditieren</strong> — Setze dich unter einen alten Baum, an einen Fluss oder auf einen Berg. Die Natur ist der größte Lehrer für Kronenchakra-Qualitäten: Stille, Präsenz, zyklisches Sein.</li>
          <li><strong className="text-white">Dankbarkeitspraxis</strong> — Notiere jeden Abend drei Dinge, für die du dankbar bist. Dankbarkeit öffnet das Herz und das Kronenchakra gleichermaßen.</li>
          <li><strong className="text-white">Dienst an anderen (Seva)</strong> — Selbstloses Dienen — ohne Erwartung von Gegenleistung — ist eine der kraftvollsten Kronenchakra-Praktiken. Es löst das Ego auf und offenbart die Verbundenheit mit allen Wesen.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Die wichtigste Lektion des Kronenchakras: Du musst nichts tun, um erleuchtet zu werden. Du musst nur aufhören, das zu sein, was du nicht bist. Loslassen ist die Praxis. Stille ist der Weg.
        </p>
      </section>

      {/* Section 8: Edelsteine */}
      <section id="edelsteine" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Edelsteine für das Kronenchakra</h2>
        <p className="text-muted leading-relaxed mb-4">
          Die Edelsteine des Kronenchakras sind überwiegend klar, weiß oder violett — Farben, die Reinheit, Transformation und Transzendenz symbolisieren:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Klarer Quarz (Bergkristall)</strong> — Der &bdquo;Meisterheiler&ldquo; unter den Edelsteinen. Reinigt, verstärkt und programmiert Energie. Klarer Quarz bringt Klarheit auf allen Ebenen und ist der universellste Stein für spirituelle Arbeit. Er verstärkt die Wirkung aller anderen Steine.</li>
          <li><strong className="text-white">Amethyst</strong> — Der Stein der spirituellen Transformation. Amethyst unterstützt die Verbindung zur höheren Ebene, beruhigt den Geist und schützt vor negativen Einflüssen. Sein Name kommt vom griechischen &bdquo;amethystos&ldquo; (nicht berauscht) — er hilft, nüchtern und klar zu bleiben auf dem spirituellen Weg.</li>
          <li><strong className="text-white">Selenit</strong> — Benannt nach Selene, der griechischen Mondgöttin. Selenit hat eine außergewöhnlich hohe Schwingung und reinigt andere Steine und Räume. Er fördert die Verbindung zum höheren Selbst und zu spirituellen Führern.</li>
          <li><strong className="text-white">Diamant</strong> — Der härteste und reinste aller Edelsteine. Steht für unvergängliche Klarheit, Stärke und Reinheit. Im Buddhismus ist &bdquo;Vajra&ldquo; (Diamant) das Symbol für die unzerstörbare Natur des erwachten Geistes.</li>
          <li><strong className="text-white">Lepidolith</strong> — Der &bdquo;Stein des Übergangs&ldquo;. Enthält natürliches Lithium und wirkt ausgleichend auf den Geist. Unterstützt spirituelle Transformation, hilft beim Loslassen alter Muster und bringt Akzeptanz und Frieden.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Tipp: Lege einen klaren Quarz oder Amethyst beim Meditieren auf den Scheitel. Oder stelle einen Selenit-Stab neben dein Bett, um die Kronenchakra-Energie auch im Schlaf zu fördern.
        </p>
      </section>

      {/* Section 9: Astrologische Verbindung */}
      <section id="verbindung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Astrologische Verbindung</h2>
        <p className="text-muted leading-relaxed mb-4">
          Dem Kronenchakra werden Uranus und die Sonne als planetarische Herrscher zugeordnet. Diese Kombination mag überraschen, doch sie spiegelt die zwei Wege zur Kronenchakra-Erfahrung wider.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Uranus</strong> steht für plötzliche Bewusstseinssprünge, Revolution und die Befreiung von alten Strukturen. Er ist der Planet des Unerwarteten — jener blitzartigen Momente, in denen sich die Wahrnehmung fundamental verschiebt. Uranus regiert Wassermann, das Zeichen des universellen Bewusstseins und der Menschlichkeit. Im Kontext des Kronenchakras repräsentiert Uranus die plötzliche Erkenntnis, den &bdquo;Aha-Moment&ldquo; der Erleuchtung.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Die Sonne</strong> — auf den ersten Blick ein persönlicher, irdischer Planet — steht im Kontext des Kronenchakras für das höchste Selbst, die innerste Essenz des Seins. So wie die physische Sonne das Zentrum unseres Sonnensystems ist und alles beleuchtet, ist das Kronenchakra das Zentrum unseres spirituellen Seins. Die Sonne im Geburtshoroskop zeigt deinen Wesenskern — und das Kronenchakra ist der Ort, an dem dieser Wesenskern seine Verbindung zum Universellen erkennt.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Kronenchakra transzendiert letztlich alle astrologischen Zuordnungen — es ist der Punkt, an dem alle Systeme zusammenfließen. Numerologie, tropische und siderische Astrologie, ägyptische Dekane und Human Design — all diese Systeme sind wie verschiedene Karten desselben Territoriums. Am Kronenchakra erkennst du das Territorium selbst.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Dennoch kann die Position von Uranus und den transpersonalen Planeten (Neptun, Pluto) in deinem siderischen Chart Hinweise auf deinen spirituellen Weg geben. Starke Uranus-Aspekte deuten auf einen plötzlichen, revolutionären spirituellen Weg hin, während starke Neptun-Aspekte einen sanfteren, mystischen Pfad nahelegen.
        </p>
      </section>

      {/* Section 10: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Häufige Fragen</h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
