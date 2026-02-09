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
  { href: "/wiki/herzchakra", label: "Herzchakra (Anahata)" },
  { href: "/wiki/stirnchakra", label: "Stirnchakra (Ajna)" },
];

const faqItems = [
  {
    question: "Wie erkenne ich ein blockiertes Halschakra?",
    answer:
      "Ein blockiertes Halschakra zeigt sich häufig durch Schwierigkeiten, sich auszudrücken, Angst vor öffentlichem Sprechen, chronische Halsschmerzen, Schilddrüsenprobleme oder das Gefühl, nicht gehört zu werden. Auch übermäßiges Reden ohne Substanz oder die Neigung zu lügen können Hinweise auf ein Ungleichgewicht im fünften Chakra sein.",
  },
  {
    question: "Welche Übungen helfen, das Halschakra zu öffnen?",
    answer:
      "Singen, Summen und das Chanten des Mantras HAM sind besonders wirksam. Auch Journaling, kreatives Schreiben, Halschakra-Yoga (Schulterstand, Pflug, Fisch-Pose) und bewusstes Schweigen für 10 Minuten täglich können das Halschakra stärken. Blaue Lebensmittel wie Blaubeeren unterstützen zusätzlich.",
  },
  {
    question: "Was hat das Halschakra mit Astrologie zu tun?",
    answer:
      "Das Halschakra wird dem Planeten Merkur zugeordnet, der in der Astrologie für Kommunikation, Lernen und geistigen Austausch steht. Die Sternzeichen Zwillinge und Jungfrau, beide von Merkur regiert, haben eine natürliche Affinität zum Halschakra. In der siderischen Astrologie kann sich die Position deines Merkur verschieben, was deine Kommunikationsart beeinflusst.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Halschakra (Vishuddha)"
      subtitle="Das fünfte Chakra — Kommunikation, Ausdruck, Wahrheit."
      breadcrumb="Chakren > Halschakra"
      sections={sections}
      ctaText="Entdecke, wie Merkur dein Halschakra beeinflusst — Jetzt Gratis-Check starten"
      ctaHref="/check"
      relatedTopics={relatedTopics}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {["Halschakra", "Vishuddha", "Kommunikation", "Merkur", "5. Chakra"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Info Box */}
      <div className="p-4 rounded-xl bg-card border-l-4 mb-6" style={{ borderColor: "#38BDF8" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          <div><span className="text-muted">Sanskrit:</span> <span className="font-medium">Vishuddha (&bdquo;Reinigung&ldquo;)</span></div>
          <div><span className="text-muted">Position:</span> <span className="font-medium">Kehle</span></div>
          <div><span className="text-muted">Farbe:</span> <span className="font-medium">Hellblau</span></div>
          <div><span className="text-muted">Element:</span> <span className="font-medium">Äther / Raum</span></div>
          <div><span className="text-muted">Planet:</span> <span className="font-medium">Merkur</span></div>
          <div><span className="text-muted">Mantra:</span> <span className="font-medium">HAM</span></div>
        </div>
      </div>

      {/* Section 1: Sanskrit & Name */}
      <section id="sanskrit-name" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Sanskrit & Name</h2>
        <p className="text-muted leading-relaxed mb-4">
          Der Name Vishuddha stammt aus dem Sanskrit und bedeutet wörtlich &bdquo;Reinigung&ldquo; oder &bdquo;besonders rein&ldquo;. Er setzt sich zusammen aus &bdquo;visha&ldquo; (Gift, Unreinheit) und &bdquo;shuddhi&ldquo; (Reinigung). Diese Etymologie verweist auf die zentrale Funktion des fünften Chakras: die Reinigung unserer Kommunikation von Ego, Angst und Manipulation.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Im Westen ist es als Halschakra oder Kehlchakra bekannt. Im tantrischen Hinduismus wird es mit einem sechzehnblättrigen Lotus dargestellt — jedes Blatt repräsentiert einen der sechzehn Sanskrit-Vokale, was die tiefe Verbindung zwischen diesem Chakra und dem Klang (Nada) unterstreicht.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In der vedischen Tradition gilt Vishuddha als das Tor zwischen der physischen und der geistigen Welt. Unterhalb dieses Chakras befinden sich die vier &bdquo;irdischen&ldquo; Energiezentren, darüber die beiden &bdquo;himmlischen&ldquo;. Das Halschakra ist somit die Brücke, die Materie und Geist, Fühlen und Denken verbindet.
        </p>
      </section>

      {/* Section 2: Position & Farbe */}
      <section id="position-farbe" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Position & Farbe</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Halschakra befindet sich im Bereich der Kehle, genauer gesagt auf Höhe des Kehlkopfes und der Schilddrüse. Es strahlt nach vorne und hinten aus und umfasst energetisch den gesamten Hals- und Nackenbereich, einschließlich Kiefer, Mund, Zunge und Ohren.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die zugeordnete Farbe ist Hellblau — ein klares, reines Blau, das an einen wolkenlosen Himmel erinnert. Diese Farbe symbolisiert Klarheit, Weite und die Unendlichkeit des Raumes (Äther), dem Element des Halschakras. In der Farbtherapie wird Hellblau als beruhigend und kommunikationsfördernd angesehen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die körperlichen Entsprechungen umfassen die Schilddrüse und Nebenschilddrüse (als endokrine Drüsen), die Stimmbänder, den Kehlkopf, die Luftröhre, den Nacken, die Halswirbelsäule und den Kiefer. Beschwerden in diesen Bereichen können auf ein Ungleichgewicht im Halschakra hindeuten.
        </p>
      </section>

      {/* Section 3: Kernthemen */}
      <section id="kernthemen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Kernthemen</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Halschakra steht im Zentrum all dessen, was mit authentischem Ausdruck zu tun hat. Seine Kernthemen sind vielfältig und berühren jeden Aspekt der menschlichen Kommunikation:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Authentische Kommunikation</strong> — Die Fähigkeit, das auszusprechen, was du wirklich denkst und fühlst, ohne Angst vor Ablehnung oder Verurteilung.</li>
          <li><strong className="text-white">Selbstausdruck</strong> — Nicht nur durch Worte, sondern durch jede kreative Form: Schreiben, Singen, Malen, Tanzen, Musizieren.</li>
          <li><strong className="text-white">Wahrheit sprechen</strong> — Der Mut, ehrlich zu sein — zu dir selbst und zu anderen. Auch unangenehme Wahrheiten liebevoll auszusprechen.</li>
          <li><strong className="text-white">Kreativität durch Sprache</strong> — Die Kraft des gesprochenen und geschriebenen Wortes als schöpferisches Werkzeug.</li>
          <li><strong className="text-white">Aktives Zuhören</strong> — Kommunikation ist keine Einbahnstraße. Das Halschakra umfasst auch die Fähigkeit, wirklich zu hören.</li>
          <li><strong className="text-white">Ehrlichkeit</strong> — Integrität zwischen dem, was du denkst, fühlst, sagst und tust.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Wenn das Halschakra in Balance ist, hast du eine klare Stimme — im wörtlichen wie im übertragenen Sinne. Du weißt, wer du bist, und kannst das authentisch nach außen tragen.
        </p>
      </section>

      {/* Section 4: Beschreibung */}
      <section id="beschreibung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Das Halschakra verstehen</h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Halschakra ist die Brücke zwischen Herz und Geist. Was du im Herzen fühlst und im Kopf denkst, findet hier seinen Ausdruck. Vishuddha bedeutet &bdquo;Reinigung&ldquo; — wahre Kommunikation erfordert, dass wir unsere Worte von Ego, Angst und Manipulation reinigen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Es geht nicht nur um Sprechen, sondern um jede Form authentischen Ausdrucks: Schreiben, Singen, Malen, Tanzen. Jeder Mensch hat eine einzigartige kreative Stimme, die durch das Halschakra zum Ausdruck kommt. Wenn du jemals das Gefühl hattest, dass deine Worte &bdquo;nicht rauskommen&ldquo; oder dass du dich hinter einer Maske versteckst, war dein Halschakra wahrscheinlich blockiert.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Auch das Zuhören ist ein wesentlicher Aspekt des Halschakras — die Fähigkeit, wirklich zu hören, was andere und deine eigene innere Stimme sagen. In unserer lauten, schnellen Welt wird das Zuhören oft unterschätzt, doch es ist genauso wichtig wie das Sprechen. Wahre Kommunikation entsteht erst, wenn beide Richtungen offen sind.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Element des Halschakras ist Äther (Akasha) — der Raum, in dem Klang sich bewegen kann. Ohne Raum kein Klang, ohne Stille keine Worte. Diese Verbindung zum Äther macht das Halschakra auch zum Tor zur feinstofflichen Kommunikation: Telepathie, Channeling und das Empfangen intuitiver Botschaften werden traditionell mit dem fünften Chakra in Verbindung gebracht.
        </p>
      </section>

      {/* Section 5: Blockade-Anzeichen */}
      <section id="blockade" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Anzeichen einer Blockade</h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein blockiertes oder unausgeglichenes Halschakra kann sich auf körperlicher, emotionaler und mentaler Ebene zeigen. Die Blockade kann in zwei Richtungen auftreten: als Mangel (Unteraktivität) oder als Überschuss (Überaktivität).
        </p>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Körperliche Anzeichen:</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Chronische Halsschmerzen und häufige Erkältungen</li>
          <li>Schilddrüsenprobleme (Über- oder Unterfunktion)</li>
          <li>Stimmprobleme, Heiserkeit oder Stimmverlust</li>
          <li>Kieferverspannungen (TMJ) und Zähneknirschen</li>
          <li>Nackenprobleme und Nackenschmerzen</li>
          <li>Schwierigkeiten beim Schlucken</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Emotionale und mentale Anzeichen (Unteraktivität):</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Angst vor öffentlichem Sprechen oder vor Konfrontation</li>
          <li>Unfähigkeit, sich auszudrücken oder für sich einzustehen</li>
          <li>Gefühl, nicht gehört oder verstanden zu werden</li>
          <li>Schüchternheit und Zurückhaltung in Gesprächen</li>
          <li>Unterdrückte Kreativität und künstlerischer Ausdruck</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Anzeichen bei Überaktivität:</strong>
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-1">
          <li>Übermäßiges Reden ohne Substanz oder Zuhören</li>
          <li>Lügen, Übertreiben oder Manipulieren durch Worte</li>
          <li>Klatsch und Tratsch</li>
          <li>Arrogante oder verletzende Kommunikation</li>
          <li>Unfähigkeit, Geheimnisse zu bewahren</li>
        </ul>
      </section>

      {/* Section 6: Balance-Zeichen */}
      <section id="balance" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Zeichen der Balance</h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein ausgeglichenes Halschakra zeigt sich in einer harmonischen Beziehung zu deiner eigenen Stimme und deinem Ausdruck. Du kommunizierst klar, ehrlich und mitfühlend. Folgende Zeichen deuten auf ein gesundes Vishuddha hin:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Klare und ehrliche Kommunikation</strong> — Du sagst, was du meinst, und meinst, was du sagst. Ohne Umwege, ohne Manipulation.</li>
          <li><strong className="text-white">Aktives Zuhören</strong> — Du hörst anderen wirklich zu, ohne sofort zu urteilen oder deine Antwort vorzubereiten.</li>
          <li><strong className="text-white">Kreativität im Ausdruck</strong> — Du findest natürliche Wege, dich kreativ auszudrücken, sei es durch Schreiben, Singen, Kunst oder andere Formen.</li>
          <li><strong className="text-white">Fähigkeit, Nein zu sagen</strong> — Du kannst Grenzen setzen und sie klar kommunizieren, ohne dich schuldig zu fühlen.</li>
          <li><strong className="text-white">Authentizität</strong> — Du zeigst dich so, wie du bist. Deine Worte stimmen mit deinen Taten überein.</li>
          <li><strong className="text-white">Gute Beziehung zur eigenen Stimme</strong> — Du sprichst gerne, hast eine klare Stimme und fühlst dich wohl damit, gehört zu werden.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Menschen mit einem balancierten Halschakra sind oft exzellente Kommunikatoren, Lehrer, Redner, Schriftsteller oder Musiker. Sie haben die Gabe, komplexe Gedanken einfach und verständlich zu vermitteln.
        </p>
      </section>

      {/* Section 7: Übungen & Praxis */}
      <section id="uebungen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Übungen & Praxis</h2>
        <p className="text-muted leading-relaxed mb-4">
          Es gibt zahlreiche Wege, das Halschakra zu stärken und ins Gleichgewicht zu bringen. Die wirksamsten Übungen nutzen die natürliche Verbindung dieses Chakras zu Klang, Ausdruck und dem Element Äther:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Singen und Summen</strong> — Die einfachste und wirksamste Übung. Singe unter der Dusche, im Auto oder wo immer du dich wohlfühlst. Die Vibration des Klangs aktiviert das Halschakra direkt.</li>
          <li><strong className="text-white">Journaling und kreatives Schreiben</strong> — Schreibe jeden Morgen drei Seiten frei von der Hand (Morning Pages). Keine Zensur, kein Nachdenken — einfach schreiben lassen.</li>
          <li><strong className="text-white">Halschakra-Yoga</strong> — Schulterstand (Sarvangasana), Pflug (Halasana) und Fisch-Pose (Matsyasana) öffnen den Halsbereich und stimulieren die Schilddrüse.</li>
          <li><strong className="text-white">Blaue Lebensmittel</strong> — Blaubeeren, Brombeeren, Holunderbeeren und blaue Trauben nähren das Halschakra auf energetischer Ebene.</li>
          <li><strong className="text-white">HAM Mantra chanten</strong> — Setze dich aufrecht hin, atme tief ein und chante beim Ausatmen lang und resonant &bdquo;HAAAAMM&ldquo;. Spüre die Vibration in der Kehle. Wiederhole 5-10 Minuten.</li>
          <li><strong className="text-white">Bewusstes Schweigen</strong> — Nimm dir jeden Tag 10 Minuten vollkommene Stille. Kein Sprechen, kein Lesen, kein Bildschirm. Höre in die Stille hinein.</li>
          <li><strong className="text-white">Nacken-Dehnungen und Kopfkreisen</strong> — Sanfte Nackenrotationen und seitliche Dehnungen lösen physische Spannungen im Halschakra-Bereich.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Beginne mit einer Übung, die dich anspricht, und praktiziere sie mindestens 21 Tage lang. Konsistenz ist wichtiger als Intensität — fünf Minuten tägliches Singen bewirkt mehr als eine Stunde einmal im Monat.
        </p>
      </section>

      {/* Section 8: Edelsteine */}
      <section id="edelsteine" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Edelsteine für das Halschakra</h2>
        <p className="text-muted leading-relaxed mb-4">
          Bestimmte Edelsteine resonieren besonders stark mit der Energie des Halschakras. Sie können als Schmuck getragen, bei der Meditation auf die Kehle gelegt oder einfach in der Nähe aufbewahrt werden:
        </p>
        <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
          <li><strong className="text-white">Aquamarin</strong> — Der &bdquo;Stein der klaren Kommunikation&ldquo;. Fördert mutige, ehrliche Worte und hilft, schwierige Wahrheiten sanft auszusprechen. Besonders hilfreich für Menschen, die Angst vor öffentlichem Sprechen haben.</li>
          <li><strong className="text-white">Blauer Topas</strong> — Unterstützt die Verbindung zwischen Gedanken und Worten. Fördert Wahrheit und Aufrichtigkeit in der Kommunikation. Wird traditionell mit Weisheit und Verständigung assoziiert.</li>
          <li><strong className="text-white">Lapislazuli</strong> — Der &bdquo;Stein der Weisheit&ldquo; und des Ausdrucks. Seit dem alten Ägypten als Stein der Könige verehrt. Stärkt die Fähigkeit, tiefe Wahrheiten auszusprechen, und fördert intellektuelle Klarheit.</li>
          <li><strong className="text-white">Sodalith</strong> — Fördert innere Wahrheit und Selbstvertrauen im Ausdruck. Hilft bei der Harmonisierung von Logik und Intuition und unterstützt die sachliche Kommunikation.</li>
          <li><strong className="text-white">Türkis</strong> — Einer der ältesten Schutzsteine der Menschheit. Fördert Heilung und offene Kommunikation. Besonders wirksam für die Ausdrucksfähigkeit und den kreativen Selbstausdruck.</li>
        </ul>
        <p className="text-muted leading-relaxed mb-4">
          Tipp: Trage einen Halschakra-Stein als Kette nah an der Kehle. Die Nähe zum Chakra verstärkt die energetische Wirkung.
        </p>
      </section>

      {/* Section 9: Astrologische Verbindung */}
      <section id="verbindung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Astrologische Verbindung</h2>
        <p className="text-muted leading-relaxed mb-4">
          Merkur als planetarischer Herrscher des Halschakras steht für Kommunikation, Lernen, Austausch und die Fähigkeit, Ideen zu vermitteln — genau die Kernqualitäten von Vishuddha. In der Mythologie ist Merkur (griechisch: Hermes) der Götterbote, der zwischen den Welten vermittelt, so wie das Halschakra zwischen Herz und Kopf vermittelt.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Sternzeichen Zwillinge und Jungfrau, beide von Merkur regiert, haben eine natürliche Affinität zum fünften Chakra. Zwillinge drückt die kommunikative, vielseitige Seite Merkurs aus — das Sprechen, Schreiben und der Informationsaustausch. Jungfrau drückt die analytische Seite aus — das präzise Wort, die durchdachte Formulierung, die dienende Kommunikation.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In der siderischen Astrologie kann sich dein Merkur-Zeichen um etwa 24 Grad verschieben. Das bedeutet, dass dein tatsächlicher kosmischer Kommunikationsstil von dem abweichen kann, was die tropische Astrologie dir zuschreibt. Ein tropischer Merkur in Zwillinge kann siderisch im Stier stehen — statt schneller, vielseitiger Kommunikation wäre dann bedachte, sinnliche Ausdrucksfähigkeit dein wahres Talent.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Der Gratis-Check von AstroMaster zeigt dir, ob dein siderisches Sonnenzeichen vom tropischen abweicht. Die vollständige Analyse enthält auch deine Merkur-Position — und damit den Schlüssel zu deinem authentischen Kommunikationsstil.
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
