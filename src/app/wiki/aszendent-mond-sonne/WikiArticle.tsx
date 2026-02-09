"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "grosse-drei", title: "Die große Drei" },
  { id: "sonnenzeichen", title: "Das Sonnenzeichen" },
  { id: "mondzeichen", title: "Das Mondzeichen" },
  { id: "aszendent", title: "Der Aszendent" },
  { id: "zusammenspiel", title: "Zusammenspiel" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/sternzeichen", label: "Die 12 Sternzeichen" },
  { href: "/wiki/planeten", label: "Die 10 Planeten" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/haeuser", label: "Die 12 Häuser" },
];

const faqItems = [
  {
    question: "Was ist die große Drei in der Astrologie?",
    answer:
      "Die große Drei (Big Three) sind die drei wichtigsten Positionen in deinem Geburtshoroskop: Sonnenzeichen (Kern-Identität), Mondzeichen (Emotionen und Innenwelt) und Aszendent (äußere Wirkung und erster Eindruck). Zusammen ergeben sie ein viel vollständigeres Bild als das Sonnenzeichen allein.",
  },
  {
    question: "Wie finde ich meinen Aszendenten heraus?",
    answer:
      "Für den Aszendenten brauchst du deine exakte Geburtszeit und deinen Geburtsort. Der Aszendent ist das Zeichen, das zum Zeitpunkt deiner Geburt am östlichen Horizont aufging. Er wechselt etwa alle zwei Stunden, weshalb die genaue Uhrzeit entscheidend ist. AstroMaster berechnet deinen Aszendenten auf die Bogensekunde genau.",
  },
  {
    question: "Was ist der Unterschied zwischen Sonnenzeichen und Mondzeichen?",
    answer:
      "Das Sonnenzeichen zeigt dein bewusstes Ich — wer du sein willst, deine Lebensrichtung und dein Kernwesen. Das Mondzeichen zeigt dein emotionales Ich — deine Bedürfnisse, Instinkte und wer du bist, wenn du dich unbeobachtet fühlst. Die Sonne ist der Tag, der Mond ist die Nacht deiner Persönlichkeit.",
  },
  {
    question: "Warum kennen die meisten Menschen nur ihr Sonnenzeichen?",
    answer:
      "Das Sonnenzeichen lässt sich allein aus dem Geburtsdatum bestimmen — man braucht weder Geburtszeit noch -ort. Zeitungshoroskope verwenden deshalb nur das Sonnenzeichen, weil es für jeden einfach zugänglich ist. Für Mond und Aszendent sind die exakte Uhrzeit und der Ort erforderlich.",
  },
  {
    question: "Kann mein Aszendent ein anderes Zeichen sein als meine Sonne?",
    answer:
      "Ja, und das ist sogar der Normalfall. Sonne, Mond und Aszendent sind bei den meisten Menschen drei verschiedene Zeichen. Das erklärt, warum sich viele nicht vollständig mit der Beschreibung ihres Sonnenzeichens identifizieren — sie sind eben viel mehr als nur ein Zeichen.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Aszendent, Mond & Sonne"
      subtitle="Die drei wichtigsten Positionen in deinem Horoskop bilden zusammen ein dreidimensionales Porträt deiner Persönlichkeit — weit jenseits dessen, was dein Sonnenzeichen allein verraten kann."
      breadcrumb="Aszendent, Mond & Sonne"
      sections={sections}
      ctaText="Entdecke deine große Drei — siderisch berechnet mit dem Gratis-Check"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="grosse-drei" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die große Drei — warum ein Zeichen nicht reicht
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wenn jemand fragt &quot;Was bist du für ein Sternzeichen?&quot;, dann meint er das Sonnenzeichen.
          Aber die Astrologie hat eine unbequeme Wahrheit: Dein Sonnenzeichen allein erfasst nur
          einen Bruchteil deiner Persönlichkeit. Es ist, als würde man einen Menschen nur nach
          seiner Augenfarbe beschreiben — es stimmt, aber es fehlt fast alles.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Deshalb sprechen Astrologen von der <strong className="text-white">&quot;großen Drei&quot;</strong> (englisch:
          Big Three) — den drei mächtigsten Positionen in deinem Geburtshoroskop. Sie bilden
          zusammen ein dreidimensionales Bild deiner Persönlichkeit:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border text-center">
            <p className="text-gold text-2xl mb-2">Sonne</p>
            <p className="text-sm text-muted">Dein Kern</p>
            <p className="text-xs text-muted/70 mt-2">Wer du bist</p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border text-center">
            <p className="text-gold text-2xl mb-2">Mond</p>
            <p className="text-sm text-muted">Deine Seele</p>
            <p className="text-xs text-muted/70 mt-2">Wie du fühlst</p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border text-center">
            <p className="text-gold text-2xl mb-2">Aszendent</p>
            <p className="text-sm text-muted">Deine Maske</p>
            <p className="text-xs text-muted/70 mt-2">Wie du wirkst</p>
          </div>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Das Zusammenspiel dieser drei Positionen erklärt, warum sich zwei Menschen mit dem
          gleichen Sonnenzeichen so unterschiedlich verhalten können. Ein Löwe mit Mond im
          Skorpion und Aszendent im Steinbock wirkt völlig anders als ein Löwe mit Mond im
          Wassermann und Aszendent im Schützen — obwohl beide &quot;Löwen&quot; sind.
        </p>
      </section>

      {/* Section 2 */}
      <section id="sonnenzeichen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Sonnenzeichen — dein Kern
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Sonne steht im Zentrum unseres Sonnensystems, und genauso steht das Sonnenzeichen
          im Zentrum deines Horoskops. Es repräsentiert dein <em>Kern-Ich</em> — die grundlegende
          Lebensenergie, die dich antreibt, dein Potenzial und die Richtung, in die dein Leben
          wachsen will.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Sonnenzeichen zeigt:
        </p>
        <ul className="list-disc list-inside text-base text-muted/90 leading-[1.7] mb-4 space-y-1 pl-2">
          <li>Deine grundlegende Identität und dein Selbstbild</li>
          <li>Deine Lebensrichtung und woran du wachsen willst</li>
          <li>Deinen Willen und dein kreatives Potenzial</li>
          <li>Die Art von Person, die du im Laufe des Lebens werden willst</li>
        </ul>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Sonnenzeichen ist der bekannteste Teil des Horoskops, weil es sich allein aus dem
          Geburtsdatum bestimmen lässt — keine Uhrzeit, kein Ort nötig. Deshalb verwenden
          Zeitungshoroskope ausschließlich das Sonnenzeichen. Es ist die zugänglichste, aber
          auch die oberflächlichste Ebene der Astrologie.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Wichtig zu wissen</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            In der siderischen Astrologie kann dein Sonnenzeichen ein anderes sein als das
            tropische. Durch die Präzession der Erdachse hat sich der tropische Tierkreis um
            ~24° verschoben. Bei 86% der Menschen ändert sich dadurch das Sonnenzeichen. Der
            AstroMaster Gratis-Check zeigt dir beide Zeichen im Vergleich.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="mondzeichen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Mondzeichen — deine emotionale Landkarte
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wenn die Sonne der Tag ist, ist der Mond die Nacht. Das Mondzeichen repräsentiert
          deine emotionale Welt — die Ebene, die unter der Oberfläche liegt und die du oft nur
          im privaten Raum zeigst. Der Mond zeigt, was du <em>brauchst</em>, um dich sicher zu
          fühlen, und wie du emotional auf die Welt reagierst.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Mondzeichen zeigt:
        </p>
        <ul className="list-disc list-inside text-base text-muted/90 leading-[1.7] mb-4 space-y-1 pl-2">
          <li>Deine emotionalen Bedürfnisse und Reaktionsmuster</li>
          <li>Wie du Geborgenheit und Sicherheit erlebst</li>
          <li>Deine Intuition und unbewussten Instinkte</li>
          <li>Deine Beziehung zur Mutter und zu weiblichen Archetypen</li>
          <li>Was dich tröstet und was dich triggert</li>
        </ul>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der Mond wechselt alle 2,5 Tage das Zeichen und ist damit der schnellste aller
          astrologischen &quot;Planeten&quot;. Das bedeutet: Zwei Menschen, die am gleichen Tag geboren
          sind, können unterschiedliche Mondzeichen haben — besonders wenn einer morgens und
          der andere abends geboren wurde.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Viele Menschen identifizieren sich stärker mit ihrem Mondzeichen als mit ihrem
          Sonnenzeichen — besonders in emotionalen Situationen. Ein Löwe-Sonne mit Krebs-Mond
          mag nach außen selbstbewusst und strahlend wirken, fühlt sich innerlich aber zutiefst
          sensibel, fürsorglich und schutzbedürftig. Das Mondzeichen erklärt die &quot;andere Seite&quot;,
          die das Sonnenzeichen allein nicht einfangen kann.
        </p>
      </section>

      {/* Section 4 */}
      <section id="aszendent" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Der Aszendent — dein erster Eindruck
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der Aszendent (abgekürzt ASC oder AC) ist das Sternzeichen, das zum exakten Zeitpunkt
          deiner Geburt am östlichen Horizont aufging. Er ist der Startpunkt deines gesamten
          Häuser-Systems und damit eines der individuellsten Elemente deines Horoskops.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der Aszendent zeigt:
        </p>
        <ul className="list-disc list-inside text-base text-muted/90 leading-[1.7] mb-4 space-y-1 pl-2">
          <li>Deinen ersten Eindruck und wie andere dich wahrnehmen</li>
          <li>Dein äußeres Erscheinungsbild und deine Ausstrahlung</li>
          <li>Deine automatische Reaktion auf neue Situationen</li>
          <li>Die &quot;Maske&quot; oder Fassade, die du der Welt zeigst</li>
          <li>Deinen Lebensstil und deine Art, die Welt zu navigieren</li>
        </ul>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der Aszendent wechselt etwa alle zwei Stunden das Zeichen — deshalb ist die exakte
          Geburtszeit so wichtig. Schon 15 Minuten Unterschied können den Aszendenten verändern
          und damit das gesamte Häuser-System verschieben. Ein Zwilling mit Aszendent Jungfrau
          wirkt organisiert, analytisch und zurückhaltend, während ein Zwilling mit Aszendent
          Widder impulsiv, energisch und direkt auftritt.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Warum der Aszendent so wichtig ist</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            In der vedischen (siderischen) Astrologie wird der Aszendent sogar als wichtiger
            angesehen als das Sonnenzeichen. Der Grund: Der Aszendent bestimmt das gesamte
            Häuser-System und damit die Bühne, auf der sich alle Planetenenergien entfalten.
            Er ist der persönlichste Punkt im Horoskop — einzigartig für deinen Geburtsmoment
            an deinem Geburtsort.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="zusammenspiel" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Zusammenspiel — ein vollständiges Bild
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die wahre Kraft der großen Drei liegt nicht in den einzelnen Positionen, sondern in
          ihrem Zusammenspiel. Jede der drei Positionen beleuchtet eine andere Dimension deiner
          Persönlichkeit, und erst ihr Zusammenklang ergibt das vollständige Bild.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Beispiel: Sonne Widder, Mond Fische, Aszendent Steinbock</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            <strong className="text-white">Äußere Wirkung (ASC Steinbock):</strong> Wirkt seriös,
            kontrolliert, zielstrebig. Menschen nehmen diese Person als ruhig, strukturiert und
            verantwortungsbewusst wahr.<br /><br />
            <strong className="text-white">Kern-Identität (Sonne Widder):</strong> Innerlich von Tatkraft
            und Pioniergeist angetrieben. Will Neues beginnen, die Führung übernehmen und
            Hindernisse durchbrechen.<br /><br />
            <strong className="text-white">Emotionale Welt (Mond Fische):</strong> Im Innersten zutiefst
            empathisch, intuitiv und verträumt. Braucht Rückzug, kreative Ausdrucksformen und
            emotionale Tiefe, um sich genährt zu fühlen.<br /><br />
            <strong className="text-white">Zusammenfassung:</strong> Ein Mensch, der nach außen
            diszipliniert und kontrolliert wirkt (Steinbock), der bewusst nach Durchbruch und
            Tatkraft strebt (Widder), aber dessen Seele nach Mitgefühl, Kunst und spiritueller
            Verbindung hungert (Fische). Die drei Schichten ergänzen sich und erzeugen eine
            komplexe, vielschichtige Persönlichkeit.
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Besonders aufschlussreich ist es, wenn die drei Zeichen verschiedenen Elementen
          angehören. Ein Mensch mit Feuer-Sonne, Wasser-Mond und Erde-Aszendent vereint drei
          sehr unterschiedliche Energien — was innere Komplexität und Vielseitigkeit bedeutet.
          Wenn alle drei im selben Element stehen, ist die Persönlichkeit besonders kohärent,
          aber möglicherweise einseitiger.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          AstroMaster berechnet alle drei Positionen — siderisch, also basierend auf den
          tatsächlichen Sternpositionen. In der Pro-Analyse erhältst du eine detaillierte
          Deutung jeder einzelnen Position und ihres Zusammenspiels in deinem einzigartigen
          kosmischen Porträt.
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
