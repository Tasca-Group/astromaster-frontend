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
  { href: "/wiki/halschakra", label: "Halschakra (Vishuddha)" },
  { href: "/wiki/kronenchakra", label: "Kronenchakra (Sahasrara)" },
];

const faqItems = [
  {
    question: "Ist das Dritte Auge real?",
    answer:
      "Das Dritte Auge ist kein physisches Organ im wörtlichen Sinne, wird aber in der Anatomie mit der Zirbeldrüse (Epiphyse) in Verbindung gebracht, die tatsächlich lichtempfindliche Zellen enthält. In der spirituellen Tradition bezeichnet es die Fähigkeit zur erweiterten Wahrnehmung — Intuition, inneres Sehen und die Erkenntnis tieferer Zusammenhänge jenseits der fünf Sinne.",
  },
  {
    question: "Wie kann ich mein Stirnchakra öffnen?",
    answer:
      "Die wirksamsten Methoden sind regelmäßige Meditation mit Fokus auf den Punkt zwischen den Augenbrauen, Visualisierungsübungen, das Chanten des Mantras OM und das Führen eines Traumtagebuchs. Auch die Reduktion von Bildschirmzeit und das Beobachten des Nachthimmels können helfen, die intuitive Wahrnehmung zu schärfen.",
  },
  {
    question: "Gibt es eine Verbindung zwischen dem Stirnchakra und übersinnlichen Fähigkeiten?",
    answer:
      "In der yogischen Tradition gilt das geöffnete Ajna-Chakra als Quelle erweiterter Wahrnehmung — darunter Hellsehen, Präkognition und Telepathie. Moderne Interpreten sehen es eher als geschulte Intuition: die Fähigkeit, subtile Muster und Zusammenhänge wahrzunehmen, die dem Alltagsbewusstsein entgehen. Wichtig ist, die Entwicklung des Stirnchakras als schrittweisen Prozess zu sehen, nicht als plötzlichen Übergang zu übersinnlichen Kräften.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Stirnchakra (Ajna)"
      subtitle="Das sechste Chakra — Intuition, inneres Sehen, Weisheit."
      breadcrumb="Chakren > Stirnchakra"
      sections={sections}
      ctaText="Entdecke, wie Jupiter und Neptun dein Stirnchakra beeinflussen — Jetzt Gratis-Check starten"
      ctaHref="/check"
      relatedTopics={relatedTopics}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {["Stirnchakra", "Ajna", "Drittes Auge", "Intuition", "6. Chakra"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#6366F1" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          <div><span className="text-muted">Sanskrit:</span> <span className="font-medium">Ajna (&bdquo;Wahrnehmen&ldquo;)</span></div>
          <div><span className="text-muted">Position:</span> <span className="font-medium">Zwischen den Augenbrauen</span></div>
          <div><span className="text-muted">Farbe:</span> <span className="font-medium">Indigo</span></div>
          <div><span className="text-muted">Element:</span> <span className="font-medium">Licht</span></div>
          <div><span className="text-muted">Planet:</span> <span className="font-medium">Jupiter / Neptun</span></div>
          <div><span className="text-muted">Mantra:</span> <span className="font-medium">OM</span></div>
        </div>
      </div>

      {/* Section 1: Sanskrit & Name */}
      <section id="sanskrit-name" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Sanskrit & Name</h2>
        <p className="text-muted leading-relaxed mb-4">
          Ajna stammt aus dem Sanskrit und trägt eine doppelte Bedeutung: &bdquo;wahrnehmen&ldquo; und &bdquo;befehlen&ldquo;. Diese Dualität verweist auf die zwei Aspekte des sechsten Chakras — einerseits die Fähigkeit, über die physischen Sinne hinaus wahrzunehmen, andererseits die Kraft, durch klare Intention die Realität mitzugestalten.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Im Westen ist das sechste Chakra vor allem als &bdquo;Drittes Auge&ldquo; bekannt — ein Begriff, der aus der hinduistischen Tradition stammt, wo Shiva oft mit einem dritten Auge auf der Stirn dargestellt wird, das für kosmische Wahrnehmung steht. In der buddhistischen Tradition wird Ajna mit dem &bdquo;Urna&ldquo; assoziiert, dem Punkt zwischen Buddhas Augenbrauen, der für erleuchtetes Sehen steht.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Symbol des Stirnchakras ist ein zweiblättriger Lotus — die geringste Blütenzahl aller Chakra-Lotusblüten. Die zwei Blätter repräsentieren die zwei Hauptenergiekanäle Ida (lunar, intuitiv) und Pingala (solar, analytisch), die sich an diesem Punkt vereinen. Diese Verschmelzung von Dualität zu Einheit ist das Wesen von Ajna.
        </p>
      </section>

      {/* Section 2: Position & Farbe */}
      <section id="position-farbe" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Position & Farbe</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Stirnchakra befindet sich zwischen den Augenbrauen, leicht oberhalb der Nasenwurzel — am sogenannten &bdquo;Dritten Auge&ldquo;-Punkt. In der hinduistischen Tradition ist dies die Stelle, an der der Bindi getragen wird. Anatomisch liegt es im Bereich der Zirbeldrüse (Epiphyse), die interessanterweise tatsächlich lichtempfindliche Zellen enthält und oft als biologisches &bdquo;Drittes Auge&ldquo; bezeichnet wird.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die zugeordnete Farbe ist Indigo — ein tiefes, sattes Blau mit violetten Untertönen. Indigo steht für Tiefe, Weisheit und die Nacht, in der das innere Licht am hellsten leuchtet. Es ist die Farbe des Nachthimmels kurz vor der völligen Dunkelheit — ein Symbol dafür, dass wahres Sehen erst beginnt, wenn die äußeren Augen schließen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das zugeordnete Element ist Licht — nicht physisches Licht im elektromagnetischen Sinne, sondern das innere Licht der Erkenntnis und Wahrnehmung. Die körperlichen Entsprechungen umfassen die Zirbeldrüse, die Augen, das Gehirn (insbesondere die Hirnanhangdrüse), die Stirnhöhlen und das zentrale Nervensystem. Die Zirbeldrüse produziert Melatonin und reguliert den Schlaf-Wach-Rhythmus — eine interessante Parallele zur Verbindung des Stirnchakras mit Träumen und Visionen.
        </p>
      </section>

      {/* Section 3: Kernthemen */}
      <section id="kernthemen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Kernthemen</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Stirnchakra ist das Zentrum der höheren Wahrnehmung. Seine Kernthemen verbinden analytisches Denken mit intuitiver Erkenntnis:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Intuition</strong> — Die Fähigkeit, Dinge zu wissen, ohne sie rational erklären zu können. Das &bdquo;Bauchgefühl&ldquo;, das über den Verstand hinausgeht.</li>
          <li><strong className="text-white">Inneres Sehen</strong> — Visualisierung, Vorstellungskraft und die Fähigkeit, innere Bilder zu empfangen und zu deuten.</li>
          <li><strong className="text-white">Weisheit</strong> — Nicht bloßes Wissen, sondern die tiefe Erkenntnis, die aus der Integration von Erfahrung und Intuition entsteht.</li>
          <li><strong className="text-white">Vorstellungskraft</strong> — Die kreative Kraft, sich Möglichkeiten vorzustellen, die noch nicht existieren — die Grundlage jeder Innovation und Veränderung.</li>
          <li><strong className="text-white">Klarheit</strong> — Die Fähigkeit, durch Verwirrung und Illusion hindurchzusehen und die wesentliche Wahrheit einer Situation zu erkennen.</li>
          <li><strong className="text-white">Unterscheidungsvermögen</strong> — Viveka im Sanskrit — die Fähigkeit, zwischen dem Realen und dem Illusorischen zu unterscheiden.</li>
          <li><strong className="text-white">Das Dritte Auge</strong> — Die Gesamtheit der erweiterten Wahrnehmung, die über die fünf physischen Sinne hinausgeht.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Ein offenes Stirnchakra ermöglicht es dir, das größere Bild zu sehen — die Zusammenhänge, die anderen verborgen bleiben. Es verbindet das analytische Denken des Ajna-Zentrums im Human Design mit der intuitiven Wahrnehmung der spirituellen Tradition.
        </p>
      </section>

      {/* Section 4: Beschreibung */}
      <section id="beschreibung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Das Stirnchakra verstehen</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Stirnchakra ist das berühmte &bdquo;Dritte Auge&ldquo; — das Zentrum der Intuition und des inneren Wissens. Hier treffen sich zwei große Energiekanäle (Ida und Pingala) und verschmelzen zu einem. Diese Verschmelzung ist mehr als eine anatomische Beschreibung — sie symbolisiert die Integration aller Gegensätze: männlich und weiblich, Logik und Intuition, Verstand und Gefühl.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Ajna bedeutet &bdquo;wahrnehmen&ldquo; und &bdquo;befehlen&ldquo; — es geht um die Fähigkeit, über die physischen Sinne hinauszusehen und die tiefere Wahrheit der Dinge zu erkennen. Im Alltag zeigt sich das als jene Momente, in denen du &bdquo;einfach weißt&ldquo;, dass etwas stimmt oder nicht stimmt — noch bevor der Verstand es analysiert hat. Es ist das Erkennen von Mustern, die unsichtbaren Fäden zwischen scheinbar unzusammenhängenden Ereignissen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Im Human Design entspricht das Ajna-Zentrum der mentalen Verarbeitung — der Art, wie du Informationen aufnimmst und verarbeitest. Ein definiertes Ajna bedeutet eine konsistente Art des Denkens, ein offenes Ajna eine flexible, vielseitige mentale Verarbeitung. Die Chakra-Tradition geht jedoch über die mentale Ebene hinaus: Ein offenes Stirnchakra verbindet analytisches Denken mit intuitiver Wahrnehmung und erschafft so ein ganzheitliches Erkennen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Verbindung zur Zirbeldrüse ist besonders faszinierend. Dieses erbsengroße Organ im Zentrum des Gehirns produziert nicht nur Melatonin, sondern enthält Kristalle und lichtempfindliche Zellen. Der französische Philosoph Descartes nannte sie den &bdquo;Sitz der Seele&ldquo;. In vielen Traditionen wird die Aktivierung der Zirbeldrüse als Schlüssel zur erweiterten Wahrnehmung gesehen.
        </p>
      </section>

      {/* Section 5: Blockade-Anzeichen */}
      <section id="blockade" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Anzeichen einer Blockade</h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein blockiertes Stirnchakra zeigt sich in der Unfähigkeit, über das Offensichtliche hinauszusehen. Die Blockade kann sich als mentale Enge, fehlende Kreativität oder als Abkapselung von der eigenen Intuition manifestieren.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Körperliche Anzeichen:</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Kopfschmerzen und Migräne, besonders im Stirnbereich</li>
          <li>Konzentrationsprobleme und geistige Erschöpfung</li>
          <li>Augenprobleme und Sehstörungen</li>
          <li>Schlafstörungen und Albträume</li>
          <li>Schwindel und Gleichgewichtsstörungen</li>
          <li>Stirnhöhlenentzündungen</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Emotionale und mentale Anzeichen (Unteraktivität):</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Verwirrung und Unentschlossenheit im Alltag</li>
          <li>Fehlende Vorstellungskraft und Kreativität</li>
          <li>Verleugnung der eigenen Intuition (&bdquo;Das bilde ich mir nur ein&ldquo;)</li>
          <li>Schwierigkeit, das größere Bild zu sehen</li>
          <li>Übermäßiger Materialismus und Rationalismus</li>
          <li>Angst vor dem Unbekannten und vor Veränderung</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Anzeichen bei Überaktivität:</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Übermäßiges Grübeln und Gedankenkarussell</li>
          <li>Dogmatismus und Besserwisserei</li>
          <li>Flucht in Fantasiewelten und Realitätsverlust</li>
          <li>Übertriebene Beschäftigung mit dem Übersinnlichen</li>
          <li>Kopflastigkeit und fehlender Kontakt zum Körper</li>
        </ul>
      </section>

      {/* Section 6: Balance-Zeichen */}
      <section id="balance" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Zeichen der Balance</h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein ausgeglichenes Stirnchakra zeigt sich in einer harmonischen Verbindung zwischen Verstand und Intuition. Du denkst klar und nimmst gleichzeitig die subtilen Ebenen der Realität wahr. Folgende Zeichen deuten auf ein gesundes Ajna hin:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Starke Intuition und inneres Wissen</strong> — Du vertraust deiner inneren Stimme und sie erweist sich als zuverlässig. Du weißt oft intuitiv, was richtig ist.</li>
          <li><strong className="text-white">Klarheit im Denken</strong> — Dein Geist ist klar und fokussiert. Du kannst komplexe Zusammenhänge schnell erfassen und durchdringen.</li>
          <li><strong className="text-white">Lebhafte Vorstellungskraft</strong> — Du kannst dir Dinge plastisch vorstellen, Szenarien durchspielen und kreative Lösungen visualisieren.</li>
          <li><strong className="text-white">Gutes Urteilsvermögen</strong> — Du triffst weise Entscheidungen, die sowohl logische als auch intuitive Faktoren berücksichtigen.</li>
          <li><strong className="text-white">Fähigkeit, das größere Bild zu sehen</strong> — Du erkennst Muster und Zusammenhänge, die anderen verborgen bleiben.</li>
          <li><strong className="text-white">Balance zwischen Logik und Intuition</strong> — Du nutzt beide Hemisphären deines Gehirns harmonisch und lässt dich weder von reiner Rationalität noch von blinder Intuition leiten.</li>
          <li><strong className="text-white">Luzide Träume</strong> — Du hast lebhafte, bedeutungsvolle Träume und kannst dich an sie erinnern. Manche Menschen mit aktivem Stirnchakra erleben luzides Träumen.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Menschen mit einem balancierten Stirnchakra sind oft Visionäre, Strategen, Therapeuten, Forscher oder Künstler. Sie haben die Gabe, unter die Oberfläche zu blicken und das Wesentliche zu erkennen.
        </p>
      </section>

      {/* Section 7: Übungen & Praxis */}
      <section id="uebungen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Übungen & Praxis</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Stirnchakra reagiert besonders auf Übungen, die Stille, Konzentration und innere Schau fördern. Anders als bei den unteren Chakren, die von Bewegung profitieren, braucht Ajna vor allem Ruhe und Fokus:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Meditation mit Fokus auf den Punkt zwischen den Augenbrauen</strong> — Schließe die Augen und richte deinen inneren Blick sanft nach oben zur Stirnmitte. Nicht angestrengt, sondern entspannt. Beobachte, was erscheint — Farben, Formen, Bilder.</li>
          <li><strong className="text-white">Visualisierungsübungen</strong> — Stelle dir eine Kerzenflamme, eine Lotusblüte oder ein indigo-farbenes Licht an deiner Stirn vor. Je detaillierter du visualisieren kannst, desto aktiver wird dein Drittes Auge.</li>
          <li><strong className="text-white">Traumtagebuch führen</strong> — Lege Stift und Papier neben dein Bett und schreibe direkt nach dem Aufwachen deine Träume auf. Mit der Zeit werden sie lebhafter und bedeutungsvoller.</li>
          <li><strong className="text-white">Indigo-Meditation</strong> — Visualisiere ein strahlendes indigo-farbenes Licht, das von deiner Stirnmitte ausgeht und deinen gesamten Kopf einhüllt. Atme Indigo ein, atme Unklarheit aus.</li>
          <li><strong className="text-white">Yoga</strong> — Kindhaltung (Balasana) mit der Stirn auf dem Boden, Adler-Pose (Garudasana) für Fokus, und umgekehrte Haltungen wie der Hund (Adho Mukha Svanasana).</li>
          <li><strong className="text-white">OM Mantra</strong> — Chante OM langsam und bewusst. Spüre, wie die Vibration sich im Kopf ausbreitet. OM ist das Ur-Mantra und resoniert direkt mit dem Stirnchakra.</li>
          <li><strong className="text-white">Reduktion von Bildschirmzeit</strong> — Übermäßige Bildschirmnutzung überstimuliert die physischen Augen und schwächt das innere Sehen. Plane tägliche bildschirmfreie Zeiten ein.</li>
          <li><strong className="text-white">Nachthimmel beobachten</strong> — Gehe nachts hinaus und betrachte die Sterne. Das weite Blickfeld und die Dunkelheit aktivieren die Zirbeldrüse und öffnen die intuitive Wahrnehmung.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Wichtig: Die Öffnung des Stirnchakras ist ein schrittweiser Prozess. Geduld und regelmäßige Praxis sind entscheidender als intensive Einzelsitzungen. Beginne mit 5-10 Minuten täglicher Meditation und steigere langsam.
        </p>
      </section>

      {/* Section 8: Edelsteine */}
      <section id="edelsteine" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Edelsteine für das Stirnchakra</h2>
        <p className="text-muted leading-relaxed mb-4">
          Die Edelsteine des Stirnchakras zeichnen sich durch tiefe Blau- und Violetttöne aus. Sie unterstützen Klarheit, Intuition und spirituelle Wahrnehmung:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Amethyst</strong> — Der klassische Stein der spirituellen Klarheit und Transformation. Amethyst beruhigt den Geist, fördert die Meditation und schützt vor negativen Energien. Er ist der vielseitigste Stein für das Stirnchakra.</li>
          <li><strong className="text-white">Lapislazuli</strong> — Der &bdquo;Stein der Weisheit&ldquo;, seit dem alten Ägypten verehrt. Fördert intellektuelle Erkenntnis, innere Wahrheit und die Verbindung zum höheren Selbst. Besonders kraftvoll für visionäre Arbeit.</li>
          <li><strong className="text-white">Fluorit</strong> — Der &bdquo;Stein der mentalen Klarheit&ldquo;. Ordnet chaotische Gedanken, stärkt die Konzentration und hilft bei der Unterscheidung zwischen eigenen und fremden Gedanken. Besonders hilfreich für Kopfarbeiter und Studierende.</li>
          <li><strong className="text-white">Iolith</strong> — Der &bdquo;Stein der Vision&ldquo;, auch &bdquo;Wikingerkompass&ldquo; genannt, weil die Wikinger ihn zur Navigation nutzten. Fördert innere Visionen, Traumarbeit und die Fähigkeit, den eigenen Weg zu finden.</li>
          <li><strong className="text-white">Saphir</strong> — Der königliche Stein der Wahrheit und Weisheit. Beruhigt den Geist, vertieft die Meditation und stärkt die intuitive Wahrnehmung. In vielen Kulturen als Stein der Propheten und Seher verehrt.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Tipp: Lege einen Amethyst oder Lapislazuli beim Meditieren auf die Stirnmitte. Alternativ kannst du den Stein unter dein Kopfkissen legen, um die Traumarbeit zu intensivieren.
        </p>
      </section>

      {/* Section 9: Astrologische Verbindung */}
      <section id="verbindung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Astrologische Verbindung</h2>
        <p className="text-muted leading-relaxed mb-4">
          Dem Stirnchakra werden zwei planetarische Herrscher zugeordnet: Jupiter und Neptun. Beide stehen für die Erweiterung des Bewusstseins über das Alltägliche hinaus, jedoch auf unterschiedliche Weise.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Jupiter</strong> — der &bdquo;große Wohltäter&ldquo; — steht für Expansion, Optimismus, Weisheit und die Suche nach höherer Wahrheit. Er regiert das Sternzeichen Schütze, das für seine philosophische Natur und seinen Wissensdurst bekannt ist. Jupiter im Geburtshoroskop zeigt, wie und wo du nach Sinn und tieferer Bedeutung suchst. Im Kontext des Stirnchakras repräsentiert Jupiter die Weisheit, die aus Erfahrung und Studium entsteht.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Neptun</strong> — der Planet der Spiritualität, Träume und Transzendenz — regiert Fische und steht für intuitive Wahrnehmung, mystische Erfahrung und die Auflösung von Grenzen. Neptun im Geburtshoroskop zeigt, wie du Zugang zu deiner Intuition und deinem spirituellen Wesen findest. Er repräsentiert die mystische Seite des Stirnchakras — das direkte Erkennen jenseits des Intellekts.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In der siderischen Astrologie können sich die Positionen von Jupiter und Neptun um etwa 24 Grad verschieben. Das bedeutet, dass dein tatsächlicher Zugang zu Weisheit und Intuition anders sein kann, als die tropische Astrologie nahelegt. Die Position von Jupiter und Neptun in deinem siderischen Chart zeigt, wie du Weisheit und Intuition am besten einsetzen kannst.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Auch die Aspekte (Winkelbeziehungen) zwischen Jupiter, Neptun und persönlichen Planeten geben Aufschluss über die Stärke deines Dritten Auges. Ein harmonischer Jupiter-Neptun-Aspekt deutet auf eine natürliche Begabung für intuitive Wahrnehmung hin.
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
