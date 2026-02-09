"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-ist", title: "Was ist Human Design?" },
  { id: "5-typen", title: "Die 5 Typen" },
  { id: "strategie-autoritaet", title: "Strategie und Autorität" },
  { id: "9-zentren", title: "Die 9 Zentren" },
  { id: "profile-kreuze", title: "Profile und Inkarnationskreuze" },
  { id: "entstehung", title: "Wie Human Design entstand" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki-test/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki-test/numerologie", label: "Numerologie" },
  { href: "/wiki-test/aegyptische-dekane", label: "Ägyptische Dekane" },
  { href: "/wiki-test/elementar-analyse", label: "Elementar-Analyse" },
];

const zentrenData = [
  {
    zentrum: "Kopf",
    thema: "Inspiration & Druck",
    definiert: "Konstanter mentaler Druck, inspiriert andere",
    offen: "Offen für Inspiration von außen, kann überwältigt werden",
  },
  {
    zentrum: "Ajna",
    thema: "Konzeptualisierung",
    definiert: "Feste Denkweise, zuverlässige Analyse",
    offen: "Flexibles Denken, kann verschiedene Perspektiven einnehmen",
  },
  {
    zentrum: "Kehle",
    thema: "Kommunikation & Manifestation",
    definiert: "Konsistente Art sich auszudrücken",
    offen: "Variable Kommunikation, kann verschiedene Stimmen annehmen",
  },
  {
    zentrum: "G-Zentrum (Selbst)",
    thema: "Identität & Richtung",
    definiert: "Festes Gefühl von Identität und Richtung",
    offen: "Sucht nach Identität, flexibel in Rollen",
  },
  {
    zentrum: "Herz/Ego",
    thema: "Willenskraft & Wert",
    definiert: "Starke Willenskraft, kann Versprechen halten",
    offen: "Muss keine Versprechen machen, Selbstwert lernen",
  },
  {
    zentrum: "Milz",
    thema: "Intuition & Gesundheit",
    definiert: "Spontane Intuition, starkes Immunsystem",
    offen: "Muss auf Gesundheit achten, hält an Ungesundem fest",
  },
  {
    zentrum: "Sakral",
    thema: "Lebenskraft & Sexualität",
    definiert: "Nachhaltige Arbeitskraft, Generators",
    offen: "Keine eigene Workforce, braucht Pausen",
  },
  {
    zentrum: "Emotionen (Solar Plexus)",
    thema: "Gefühle & Wellen",
    definiert: "Emotionale Wellen, braucht Zeit für Klarheit",
    offen: "Empfänglich für Emotionen anderer, empathisch",
  },
  {
    zentrum: "Wurzel",
    thema: "Druck & Antrieb",
    definiert: "Konstanter Antrieb, kann unter Druck arbeiten",
    offen: "Verstärkt Stress, muss Druck loslassen",
  },
];

const faqItems = [
  {
    question: "Was ist ein Human Design Chart?",
    answer:
      "Ein Human Design Chart — auch BodyGraph genannt — ist deine energetische Blaupause, berechnet aus deinem exakten Geburtsdatum, deiner Geburtszeit und deinem Geburtsort. Es zeigt neun Zentren, Kanäle und Tore, die bestimmen, wie du Energie aufnimmst, verarbeitest und ausdrückst. Kein Chart gleicht dem anderen.",
  },
  {
    question: "Welcher Human Design Typ bin ich?",
    answer:
      "Dein Typ wird durch die definierten Zentren und Kanäle in deinem BodyGraph bestimmt. Es gibt fünf Typen: Manifestor, Generator, Manifestierender Generator, Projektor und Reflektor. Um deinen Typ zu erfahren, brauchst du dein exaktes Geburtsdatum, deine Geburtszeit und deinen Geburtsort.",
  },
  {
    question: "Brauche ich meine genaue Geburtszeit?",
    answer:
      "Ja, die genaue Geburtszeit ist bei Human Design besonders wichtig. Schon wenige Minuten Unterschied können die Tor- und Kanal-Definitionen verändern und damit deinen Typ, dein Profil oder deine Autorität beeinflussen. Am besten schaust du in deiner Geburtsurkunde oder fragst im Standesamt nach.",
  },
  {
    question: "Ist Human Design eine Religion?",
    answer:
      "Nein, Human Design ist keine Religion und kein Glaubenssystem. Es ist ein praktisches Werkzeug zur Selbsterkenntnis, das Elemente aus Astrologie, I Ging, Kabbala und dem Chakra-System kombiniert. Du musst an nichts glauben — du kannst es einfach ausprobieren und beobachten, ob es in deinem Alltag funktioniert.",
  },
  {
    question: "Kann sich mein Typ ändern?",
    answer:
      "Nein, dein Human Design ist bei der Geburt festgelegt und ändert sich nicht im Laufe deines Lebens. Dein Typ, dein Profil und deine Autorität bleiben immer gleich. Was sich verändert, ist dein Verständnis und deine Fähigkeit, im Einklang mit deinem Design zu leben — das nennt man Dekonditionierung.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Human Design"
      subtitle="Human Design kombiniert Astrologie, I Ging, Kabbala und das Chakra-System zu einem einzigartigen Werkzeug für Selbsterkenntnis. Erfahre, wie dein energetischer Bauplan deine Entscheidungen und Beziehungen beeinflusst."
      breadcrumb="Human Design"
      sections={sections}
      ctaText="Entdecke deinen Human Design Typ — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Was ist Human Design? */}
      <section id="was-ist" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ist Human Design?
        </h2>
        {/* <!-- BILD: Human Design BodyGraph mit markierten Zentren und Kanälen --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Human Design ist ein Synthese-System, das 1987 von Ra Uru Hu (bürgerlich Robert Alan Krakower) empfangen wurde. Es vereint vier uralte Weisheitssysteme zu einem einzigen, praktischen Werkzeug: die westliche Astrologie, das chinesische I Ging (Buch der Wandlungen), das Hindu-Brahmanische Chakra-System und den kabbalistischen Lebensbaum. Das Ergebnis ist eine erstaunlich detaillierte Karte deiner energetischen Struktur.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Dein Human Design Chart — der sogenannte BodyGraph — wird aus deinem exakten Geburtsdatum, deiner Geburtszeit und deinem Geburtsort berechnet. Zusätzlich fließen die Planetenpositionen von 88 Tagen vor deiner Geburt ein (der sogenannte Design-Zeitpunkt). Diese beiden Berechnungen ergeben zusammen deine einzigartige energetische Blaupause mit neun Zentren, 36 Kanälen und 64 Toren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Anders als viele andere Systeme geht es bei Human Design nicht darum, dir zu sagen, wer du sein sollst. Es zeigt dir, wer du bereits bist — wie du dafür designt bist, mit der Welt zu interagieren, Entscheidungen zu treffen und deine Energie zu nutzen. Es ist ein Werkzeug der Selbsterkenntnis, kein Glaubenssystem.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Grundidee ist radikal einfach: Jeder Mensch hat eine einzigartige energetische Struktur, und wenn du im Einklang mit dieser Struktur lebst, erlebst du weniger Widerstand und mehr Leichtigkeit. Human Design gibt dir konkrete, praktische Werkzeuge dafür — angefangen bei deinem Typ und deiner Strategie.
        </p>
      </section>

      {/* Section 2: Die 5 Typen */}
      <section id="5-typen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 5 Typen im Human Design
        </h2>
        {/* <!-- BILD: Übersicht der 5 Typen als Icons oder Silhouetten --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Dein Typ ist die grundlegendste Information in deinem Human Design. Er bestimmt, wie deine Aura funktioniert und wie du am besten mit der Welt interagierst. Es gibt fünf Typen, jeder mit einer eigenen Strategie und einem eigenen Lebensthema.
        </p>

        <div className="space-y-6 my-6">
          {/* Manifestor */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              Manifestor <span className="text-sm font-normal text-muted">(~9% der Bevölkerung)</span>
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Manifestoren sind die Initiatoren der Menschheit. Sie sind die einzigen Typen, die dafür designt sind, Dinge unabhängig in Gang zu setzen, ohne auf äußere Impulse zu warten. Ihre Aura ist geschlossen und abweisend — nicht im negativen Sinne, sondern als natürlicher Schutzmechanismus, der ihnen erlaubt, ungestört zu handeln.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Strategie:</strong> Informieren, bevor du handelst. Manifestoren erzeugen Widerstand, wenn sie einfach losmarschieren, ohne andere einzuweihen. Informieren baut Brücken und reduziert Konflikte.{" "}
              <strong className="text-white">Lebensthema:</strong> Frieden (wenn korrekt gelebt) oder Wut (wenn im Nicht-Selbst).
            </p>
          </div>

          {/* Generator */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              Generator <span className="text-sm font-normal text-muted">(~37% der Bevölkerung)</span>
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Generatoren sind die Lebenskraft der Welt. Sie haben ein definiertes Sakralzentrum, das ihnen nachhaltige, kraftvolle Energie für Arbeit gibt, die sie lieben. Ihre Aura ist offen und umhüllend — sie zieht das Leben buchstäblich zu sich hin. Generatoren sind hier, um Meisterschaft in dem zu entwickeln, was sie wirklich befriedigt.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Strategie:</strong> Warten, um zu reagieren. Generatoren sind nicht dafür designt, Dinge zu initiieren, sondern auf Impulse aus dem Leben zu reagieren. Ihr sakrales Bauchgefühl (ein körperliches &bdquo;Uh-huh&ldquo; oder &bdquo;Uh-uh&ldquo;) zeigt ihnen den Weg.{" "}
              <strong className="text-white">Lebensthema:</strong> Befriedigung (wenn korrekt gelebt) oder Frustration.
            </p>
          </div>

          {/* Manifestierender Generator */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              Manifestierender Generator <span className="text-sm font-normal text-muted">(~33% der Bevölkerung)</span>
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Manifestierende Generatoren (MG) sind die Multi-Talente und Multitasker der Menschheit. Sie kombinieren die nachhaltige Sakralkraft des Generators mit der Initiationsfähigkeit des Manifestors. Sie sind schnell, effizient und oft in mehreren Bereichen gleichzeitig aktiv. Ihr Weg ist selten linear — sie springen, probieren aus und finden so ihren Pfad.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Strategie:</strong> Warten, um zu reagieren, dann informieren, bevor du handelst. MGs haben den gleichen sakralen Reaktionsmechanismus wie Generatoren, aber die Geschwindigkeit eines Manifestors.{" "}
              <strong className="text-white">Lebensthema:</strong> Befriedigung (wenn korrekt gelebt) oder Frustration und Wut.
            </p>
          </div>

          {/* Projektor */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              Projektor <span className="text-sm font-normal text-muted">(~20% der Bevölkerung)</span>
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Projektoren sind die Guides, Berater und Manager der Menschheit. Sie haben kein definiertes Sakralzentrum und damit keine konstante Arbeitsenergie — dafür haben sie die einzigartige Fähigkeit, tief in andere Menschen hineinzusehen und deren Energien zu lesen. Ihre fokussierte, absorbierende Aura macht sie zu natürlichen Führungskräften.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Strategie:</strong> Auf die Einladung warten. Projektoren werden erst gehört und anerkannt, wenn sie eingeladen werden. Ungebetene Ratschläge erzeugen Widerstand.{" "}
              <strong className="text-white">Lebensthema:</strong> Erfolg (wenn korrekt gelebt) oder Bitterkeit.
            </p>
          </div>

          {/* Reflektor */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              Reflektor <span className="text-sm font-normal text-muted">(~1% der Bevölkerung)</span>
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Reflektoren sind die seltensten Typen und die Spiegel der Gesellschaft. Sie haben kein einziges definiertes Zentrum — das macht sie zu den offensten und empfänglichsten Menschen überhaupt. Sie nehmen die Energien ihrer Umgebung auf und spiegeln sie zurück, was sie zu außergewöhnlich feinfühligen Beobachtern macht. Ihre Gesundheit und ihr Wohlbefinden hängen stark von ihrem Umfeld ab.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Strategie:</strong> Einen ganzen Mondzyklus (28 Tage) abwarten, bevor große Entscheidungen getroffen werden. Da Reflektoren tief mit dem Mond verbunden sind, durchlaufen sie jeden Monat alle möglichen Energiekonfigurationen.{" "}
              <strong className="text-white">Lebensthema:</strong> Überraschung (wenn korrekt gelebt) oder Enttäuschung.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Strategie und Autorität */}
      <section id="strategie-autoritaet" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Strategie und Autorität — dein innerer Kompass
        </h2>
        {/* <!-- BILD: Kompass-Illustration oder Entscheidungsbaum --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Strategie und Autorität sind die beiden wichtigsten praktischen Werkzeuge im Human Design. Deine Strategie — bestimmt durch deinen Typ — beschreibt, <em>wie</em> du am besten mit der Welt interagierst. Sie ist dein Navigationsgerät für den Alltag: Soll ich initiieren? Reagieren? Warten? Informieren? Die richtige Strategie reduziert Widerstand und bringt dich in den Flow.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Deine Autorität hingegen ist dein innerer Entscheidungskompass. Sie sagt dir, <em>welche</em> Entscheidungen richtig für dich sind. Nicht der Verstand trifft die besten Entscheidungen — sondern dein Körper. Human Design identifiziert sieben verschiedene Autoritäten, die jeweils eine eigene Art der inneren Wahrnehmung beschreiben.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Das Zusammenspiel von Strategie und Autorität ist der Schlüssel zu einem Leben im Einklang mit deinem Design. Wenn du deine Strategie befolgst, kommen die richtigen Gelegenheiten zu dir. Und wenn du deine Autorität nutzt, erkennst du, welche davon wirklich für dich bestimmt sind.
        </p>

        <h3 className="text-lg font-semibold text-gold mb-4">
          Die 7 Autoritäten
        </h3>
        <div className="space-y-3 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-1">Emotionale Autorität</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Die häufigste Autorität. Du hast ein definiertes Emotionalzentrum und erlebst emotionale Wellen — Hochs und Tiefs. Triff keine Entscheidungen im emotionalen Hoch oder Tief. Warte auf emotionale Klarheit, die sich wie ein ruhiges Wissen anfühlt. Es gibt keine Wahrheit im Jetzt für dich.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-1">Sakrale Autorität</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Nur für Generatoren mit undefiniertem Emotionalzentrum. Dein Sakralzentrum antwortet in Echtzeit mit einem körperlichen Bauchgefühl: ein &bdquo;Uh-huh&ldquo; (Ja) oder &bdquo;Uh-uh&ldquo; (Nein). Stelle dir Ja/Nein-Fragen und achte auf die spontane körperliche Reaktion.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-1">Milz-Autorität</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Spontanes, intuitives Wissen im Moment. Die Milz spricht leise und nur einmal — ein blitzschnelles Körpergefühl, das sagt: sicher oder unsicher, gesund oder ungesund. Verbunden mit dem Überlebensinstinkt. Du musst im Moment handeln, diese Impulse kommen nicht zurück.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-1">Herz/Ego-Autorität</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Selten, nur bei bestimmten Manifestoren und Projektoren. Dein Herzzentrum gibt dir die Willenskraft, Dinge durchzuziehen. Die Frage ist: Will ich das wirklich? Habe ich die Energie dafür? Folge dem, wozu dein Herz sich verpflichten kann.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-1">Selbst-projizierte Autorität</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Nur für Projektoren mit direkter Verbindung vom G-Zentrum zur Kehle. Du findest deine Wahrheit, indem du über deine Entscheidungen sprichst — nicht mit dem Kopf denkst, sondern hörst, was aus dir herauskommt. Rede mit vertrauenswürdigen Menschen und höre dir selbst zu.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-1">Mentale/Umwelt-Autorität</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Für Projektoren ohne innere Autorität. Dein Verstand ist nicht dein Entscheidungsinstrument, aber du kannst Klarheit finden, indem du Dinge mit verschiedenen Menschen durchsprichst und die Resonanz in verschiedenen Umgebungen spürst. Die richtige Umgebung bringt Klarheit.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="font-medium text-white mb-1">Lunare Autorität</p>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Ausschließlich für Reflektoren. Da du keine definierten Zentren hast, brauchst du einen kompletten Mondzyklus (ca. 28 Tage), um eine wichtige Entscheidung zu treffen. In dieser Zeit durchläuft der Mond alle 64 Tore und aktiviert verschiedene Teile deines Charts — so bekommst du alle Perspektiven.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Die 9 Zentren */}
      <section id="9-zentren" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 9 Zentren im Human Design
        </h2>
        {/* <!-- BILD: BodyGraph-Diagramm mit beschrifteten 9 Zentren --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die neun Zentren im BodyGraph entsprechen den sieben Chakren des hinduistischen Systems, erweitert um zwei zusätzliche Zentren. Jedes Zentrum verarbeitet eine bestimmte Art von Energie. Ein Zentrum kann <strong className="text-white">definiert</strong> (farbig, konsistent) oder <strong className="text-white">offen/undefiniert</strong> (weiß, empfänglich) sein.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Definierte Zentren sind deine feste, verlässliche Energie — sie arbeiten konsistent und strahlen nach außen. Offene Zentren sind Bereiche, in denen du die Energie anderer Menschen aufnimmst und verstärkst. Sie sind deine größte Weisheitsquelle, aber auch die Bereiche, in denen du am leichtesten konditioniert wirst.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Zentrum</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Thema</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Definiert</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Offen (undefiniert)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {zentrenData.map((z, i) => (
                <tr
                  key={z.zentrum}
                  className={i % 2 === 0 ? "bg-card" : "bg-card/50"}
                >
                  <td className="px-4 py-3 font-medium text-white">{z.zentrum}</td>
                  <td className="px-4 py-3 text-gold">{z.thema}</td>
                  <td className="px-4 py-3 text-muted">{z.definiert}</td>
                  <td className="px-4 py-3 text-muted">{z.offen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted mt-3">
          Hinweis: Ob ein Zentrum definiert oder offen ist, hängt von den aktivierten Kanälen in deinem individuellen BodyGraph ab.
        </p>
      </section>

      {/* Section 5: Profile und Inkarnationskreuze */}
      <section id="profile-kreuze" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Profile und Inkarnationskreuze
        </h2>
        {/* <!-- BILD: Profil-Kombinationen als Diagramm oder Tabelle --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Dein Profil ist wie dein Kostüm auf der Lebensbühne — es beschreibt, <em>wie</em> du deine Lebensrolle verkörperst. Es besteht aus zwei Zahlen (z.B. 3/5), die sich aus den Linien deiner bewussten und unbewussten Sonnenposition ableiten. Es gibt sechs Linien, und jede hat einen eigenen Archetyp: Linie 1 (der Forscher), Linie 2 (der Eremit), Linie 3 (der Experimentierer), Linie 4 (der Netzwerker), Linie 5 (der Ketzer/Retter) und Linie 6 (das Vorbild).
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Aus diesen sechs Linien ergeben sich 12 mögliche Profil-Kombinationen: 1/3, 1/4, 2/4, 2/5, 3/5, 3/6, 4/6, 4/1, 5/1, 5/2, 6/2 und 6/3. Die erste Zahl repräsentiert deine bewusste Seite — die Rolle, die du kennst und aktiv spielst. Die zweite Zahl ist deine unbewusste Seite — eine Qualität, die andere an dir sehen, bevor du sie selbst erkennst.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Das <strong className="text-gold">Inkarnationskreuz</strong> ist das tiefste Thema in deinem Human Design — es beschreibt deinen Lebenssinn, deine übergeordnete Bestimmung. Es wird aus den Torpositionen deiner Sonne und Erde berechnet, sowohl zum Geburtszeitpunkt als auch 88 Tage davor (dem Design-Zeitpunkt). Es gibt 192 Grundkreuze, die in drei Kategorien fallen: das Rechte Kreuz (persönliches Schicksal), das Linke Kreuz (transpersonales Schicksal) und das Juxtaposition-Kreuz (fixiertes Schicksal). Dein Inkarnationskreuz entfaltet sich über dein gesamtes Leben und wird oft erst mit zunehmender Reife spürbar.
        </p>
      </section>

      {/* Section 6: Wie Human Design entstand */}
      <section id="entstehung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Wie Human Design entstand
        </h2>
        {/* <!-- BILD: Historische Zeitleiste oder Porträt-Illustration von Ra Uru Hu --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Im Januar 1987 hatte der kanadische Physiker und Medienproduzent Robert Alan Krakower auf der spanischen Insel Ibiza eine mystische Erfahrung, die acht Tage und acht Nächte andauerte. In dieser Zeit empfing er — nach eigener Aussage von einer Stimme, die er schlicht &bdquo;die Stimme&ldquo; nannte — das gesamte Human Design System in einer einzigen, ununterbrochenen Offenbarung. Er nahm den Namen Ra Uru Hu an und widmete den Rest seines Lebens der Erforschung und Verbreitung dieses Systems.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Was Human Design von vielen anderen Systemen unterscheidet, ist seine Verbindung zur modernen Physik — insbesondere zur Neutrino-Forschung. Human Design postuliert, dass Neutrinos (subatomare Teilchen, die in gigantischen Mengen von den Sternen ausgesendet werden und praktisch alles durchdringen) eine infinitesimal kleine Masse haben und dadurch Informationen tragen. Diese Neutrinos, so die Theorie, programmieren zum Zeitpunkt der Geburt die 64 Tore im BodyGraph. Interessanterweise wurde 1998 — elf Jahre nach der Offenbarung — tatsächlich wissenschaftlich bestätigt, dass Neutrinos eine Masse besitzen, was zuvor bezweifelt wurde.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Ra Uru Hu lehrte und entwickelte das System über 25 Jahre lang, bis zu seinem Tod im März 2011. Heute wird Human Design weltweit von Millionen Menschen genutzt und von zahlreichen Lehrern weitergetragen. Es hat sich besonders in den letzten Jahren durch soziale Medien rasant verbreitet und findet Anwendung in Bereichen wie Persönlichkeitsentwicklung, Beziehungsberatung, Business-Coaching und Gesundheitsoptimierung.
        </p>
      </section>

      {/* Section 7: Häufige Fragen */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Häufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
