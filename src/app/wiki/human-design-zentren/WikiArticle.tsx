"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "ueberblick", title: "\u00dcberblick der Zentren" },
  { id: "kopfzentrum", title: "Kopfzentrum" },
  { id: "ajna", title: "Ajna" },
  { id: "kehle", title: "Kehle" },
  { id: "g-zentrum", title: "G-Zentrum" },
  { id: "herz", title: "Herz/Ego" },
  { id: "milz", title: "Milz" },
  { id: "sakral", title: "Sakral" },
  { id: "emotionen", title: "Emotionen" },
  { id: "wurzel", title: "Wurzel" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/human-design", label: "Human Design Grundlagen" },
  { href: "/wiki/human-design-typen", label: "Die 5 Typen" },
  { href: "/wiki/strategie-autoritaet", label: "Strategie & Autorit\u00e4t" },
];

const faqItems = [
  {
    question: "Was bedeutet es, wenn ein Zentrum definiert ist?",
    answer:
      "Ein definiertes Zentrum (farbig im BodyGraph) bedeutet, dass du eine konsistente, verl\u00e4ssliche Energie in diesem Bereich hast. Du strahlst diese Energie nach au\u00dfen aus und beeinflusst andere damit. Definierte Zentren sind deine feste Grundausstattung \u2014 sie arbeiten immer gleich, unabh\u00e4ngig davon, wer in deiner N\u00e4he ist.",
  },
  {
    question: "Ist ein offenes Zentrum eine Schw\u00e4che?",
    answer:
      "Nein, ein offenes Zentrum ist keine Schw\u00e4che. Es ist ein Bereich, in dem du die Energie anderer aufnimmst, verst\u00e4rkst und dadurch eine tiefe Weisheit entwickeln kannst. Die Herausforderung besteht darin, die aufgenommene Energie nicht mit deiner eigenen zu verwechseln. Offene Zentren sind deine Lernfelder und Quellen profunder Erkenntnis.",
  },
  {
    question: "Wie viele Zentren kann man definiert haben?",
    answer:
      "Es gibt neun Zentren im BodyGraph. Theoretisch k\u00f6nnen alle definiert oder alle offen sein. Reflektoren haben kein einziges definiertes Zentrum. Die meisten Menschen haben zwischen drei und sechs definierte Zentren. Die Anzahl allein sagt nichts \u00fcber Qualit\u00e4t aus \u2014 es geht darum, die eigene Konfiguration zu verstehen.",
  },
  {
    question: "Welches Zentrum bestimmt meinen Typ?",
    answer:
      "Das Sakralzentrum spielt die Hauptrolle. Ist es definiert, bist du Generator oder Manifestierender Generator. Ist es offen, bist du Projektor, Manifestor oder Reflektor. Zus\u00e4tzlich bestimmt die Verbindung von Motorzentren (Sakral, Herz, Emotionen, Wurzel) zur Kehle, ob du ein Manifestor bist.",
  },
  {
    question: "K\u00f6nnen sich meine Zentren ver\u00e4ndern?",
    answer:
      "Deine definierten Zentren im Geburtschart sind fix und \u00e4ndern sich nie. Allerdings k\u00f6nnen Planeten-Transite deine offenen Zentren vor\u00fcbergehend aktivieren. Das erkl\u00e4rt, warum du an manchen Tagen Energien sp\u00fcrst, die sonst nicht da sind. Die Grundstruktur deines BodyGraphs bleibt aber immer gleich.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 9 Zentren im Human Design"
      subtitle="Die neun Zentren im BodyGraph sind die Energiezentren deines K\u00f6rpers. Jedes verarbeitet eine bestimmte Art von Lebensenergie \u2014 und ob es definiert oder offen ist, ver\u00e4ndert grundlegend, wie du die Welt erlebst."
      breadcrumb="Human Design Zentren"
      sections={sections}
      ctaText="Entdecke deine definierten Zentren \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: \u00dcberblick */}
      <section id="ueberblick" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          &Uuml;berblick der 9 Zentren
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die neun Zentren im Human Design BodyGraph stammen urspr&uuml;nglich aus dem
          hinduistischen Chakra-System, wurden aber um zwei zus&auml;tzliche Zentren
          erweitert. Sie bilden die energetische Infrastruktur deines K&ouml;rpers.
          Jedes Zentrum hat ein spezifisches Thema und verarbeitet eine bestimmte
          Art von Energie \u2014 von Inspiration (Kopf) &uuml;ber Kommunikation (Kehle) bis
          hin zu Antrieb und Stress (Wurzel).
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein Zentrum kann zwei Zust&auml;nde haben: <strong className="text-white">Definiert</strong> (farbig im
          BodyGraph) bedeutet, dass du in diesem Bereich eine konsistente,
          verl&auml;ssliche Energie hast. Du strahlst diese Energie nach au&szlig;en aus.
          <strong className="text-white"> Offen/Undefiniert</strong> (wei&szlig;) bedeutet, dass du hier keine eigene
          feste Energie hast, sondern die Energie deiner Umgebung aufnimmst und
          verst&auml;rkst.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die offenen Zentren sind gleichzeitig deine verwundbarsten und
          weisesten Bereiche. Hier lernst du am meisten &uuml;ber das Leben und andere
          Menschen \u2014 aber hier wirst du auch am st&auml;rksten konditioniert. Die
          gro&szlig;e Aufgabe im Human Design ist es, in den offenen Zentren zu
          erkennen: &bdquo;Das bin nicht ich, das ist die Energie meiner Umgebung.&ldquo;
        </p>
      </section>

      {/* Section 2: Kopfzentrum */}
      <section id="kopfzentrum" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Kopfzentrum \u2014 Inspiration &amp; Druck
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Ganz oben im BodyGraph &bull; Druckzentrum &bull; Tore: 61, 63, 64
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Kopfzentrum ist das obere der beiden Druckzentren im BodyGraph.
          Es erzeugt den Druck, Fragen zu stellen und Antworten zu suchen. Seine
          Funktion ist reine Inspiration \u2014 es l&ouml;st den mentalen Prozess aus, aber
          es verarbeitet keine Gedanken selbst. Das ist die Aufgabe des Ajna.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast einen konstanten mentalen
          Druck und eine stetige Quelle der Inspiration. Du bist jemand, der
          andere zum Nachdenken bringt und Fragen aufwirft, die den Status quo
          hinterfragen. Die Herausforderung: Nicht jede Frage muss sofort
          beantwortet werden. Lerne, den Druck zu genie&szlig;en, ohne ihm zwanghaft
          nachzugeben.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du bist offen f&uuml;r die Inspirationen
          und Fragen anderer. Dir kommen die besten Ideen in Gegenwart
          inspirierender Menschen. Die Falle: Du kannst vom mentalen Druck anderer
          &uuml;berw&auml;ltigt werden und versuchst, Fragen zu beantworten, die nicht deine
          sind. Lerne zu erkennen: &bdquo;Das ist nicht mein Gedanke, das ist die Energie
          meines Gegen&uuml;bers.&ldquo;
        </p>
      </section>

      {/* Section 3: Ajna */}
      <section id="ajna" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Ajna \u2014 Konzeptualisierung
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Unter dem Kopf &bull; Bewusstseinszentrum &bull; Tore: 4, 11, 17, 24, 43, 47
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Ajna-Zentrum ist das Verarbeitungszentrum des Geistes. Hier werden
          die Inspirationen des Kopfzentrums in Konzepte, Meinungen und
          &Uuml;berzeugungen umgewandelt. Es ist der analytische Verstand, der
          Informationen sortiert, vergleicht und in Zusammenh&auml;nge einordnet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast eine feste, zuverl&auml;ssige
          Denkweise. Deine mentalen Prozesse sind konsistent \u2014 du analysierst und
          konzeptualisierst auf eine bestimmte Art. Du bist gut darin, deine
          Gedanken klar zu strukturieren und auszudr&uuml;cken. Die Herausforderung:
          Flexibilit&auml;t. Andere Denkweisen k&ouml;nnen gleichwertig sein.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du hast keine feste Denkweise und
          kannst verschiedene Perspektiven einnehmen. Du bist in der Lage, die
          Gedanken anderer zu verstehen und wiederzugeben \u2014 oft besser, als sie
          es selbst k&ouml;nnen. Die Falle: Du versuchst, dich auf eine Meinung
          festzulegen, um sicher zu wirken. Deine Gabe ist es, mental flexibel
          zu bleiben und Dinge aus vielen Winkeln zu sehen.
        </p>
      </section>

      {/* Section 4: Kehle */}
      <section id="kehle" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Kehle \u2014 Ausdruck &amp; Manifestation
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Mitte des oberen BodyGraph &bull; Manifestationszentrum &bull; Tore: 8, 12, 16, 20, 23, 31, 33, 35, 45, 56, 62
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Kehlzentrum ist das Zentrum der Kommunikation und Manifestation.
          Es ist der Ort, an dem Energie zur Handlung oder zum Ausdruck wird. Im
          Human Design geschieht nichts in der materiellen Welt, ohne durch die
          Kehle zu flie&szlig;en. Sprechen, Handeln, Erschaffen \u2014 alles geht durch
          dieses zentrale Tor.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast eine konsistente Art, dich
          auszudr&uuml;cken und Dinge in die Welt zu bringen. Deine Stimme hat eine
          bestimmte Qualit&auml;t \u2014 ob f&uuml;hrend, lehrend, beschreibend oder inspirierend,
          h&auml;ngt von den verbundenen Toren und Kan&auml;len ab. Du ziehst Aufmerksamkeit
          auf nat&uuml;rliche Weise an.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du kannst verschiedene
          Kommunikationsstile annehmen und passt deine Stimme an dein Gegen&uuml;ber an.
          Du hast die Gabe, in vielen &bdquo;Sprachen&ldquo; zu kommunizieren. Die Falle:
          Du versuchst, Aufmerksamkeit durch Reden zu erzwingen, oder sprichst aus
          dem Druck anderer heraus. Warte, bis du eingeladen oder gefragt wirst \u2014
          dann flie&szlig;en die richtigen Worte.
        </p>
      </section>

      {/* Section 5: G-Zentrum */}
      <section id="g-zentrum" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          G-Zentrum \u2014 Identit&auml;t &amp; Richtung
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Zentral im BodyGraph &bull; Identit&auml;tszentrum &bull; Tore: 1, 2, 7, 10, 13, 15, 25, 46
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das G-Zentrum (auch Selbst-Zentrum genannt) ist das Zentrum der
          Identit&auml;t, der Liebe und der Lebensrichtung. Es ist der magnetische
          Monopol \u2014 der Punkt in deinem K&ouml;rper, der dich auf deinem Lebensweg h&auml;lt
          und bestimmt, wohin du gehst und wen du dabei anziehst. Es ist das Herz
          deines gesamten BodyGraphs.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast ein festes Gef&uuml;hl von
          Identit&auml;t und Richtung. Du wei&szlig;t, wer du bist, und dein innerer Kompass
          zeigt dir zuverl&auml;ssig den Weg. Du hast eine konsistente Art zu lieben
          und wirst von anderen als stabil und zentriert wahrgenommen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Deine Identit&auml;t ist flexibel und
          wandelbar. Du erlebst dich je nach Umgebung und Menschen anders \u2014 und
          das ist korrekt. Du bist hier, um viele Facetten des Menschseins zu
          erkunden. Die Falle: Du suchst verzweifelt nach einer festen Identit&auml;t
          und klammerst dich an Rollen oder Beziehungen, die dir Stabilit&auml;t
          versprechen. Deine Gabe ist die Wandelbarkeit.
        </p>
      </section>

      {/* Section 6: Herz/Ego */}
      <section id="herz" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Herz/Ego \u2014 Willenskraft &amp; Wert
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Rechts neben dem G-Zentrum &bull; Motorzentrum &bull; Tore: 21, 26, 40, 51
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Herz- oder Ego-Zentrum ist eines der vier Motorzentren im
          BodyGraph. Es ist der Sitz der Willenskraft, des Selbstwerts und des
          materiellen Antriebs. Dieses Zentrum steuert deine F&auml;higkeit,
          Versprechen einzuhalten, Ziele durch reinen Willen zu erreichen und
          deinen eigenen Wert zu erkennen. Nur etwa 30% der Menschen haben dieses
          Zentrum definiert.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast eine nat&uuml;rliche
          Willenskraft und kannst Dinge durch pure Entschlossenheit
          durchziehen. Du hast ein gesundes Ego und kannst dich selbst gut
          behaupten. Dein Wort hat Gewicht \u2014 wenn du etwas versprichst, hast du
          die Kraft, es einzuhalten. Wichtig: Die Willenskraft muss sich
          regenerieren. &Uuml;bernutzung f&uuml;hrt zu Herzproblemen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du hast keine konstante Willenskraft
          und solltest keine Versprechen machen, die du nicht halten kannst.
          Dein Selbstwert schwankt \u2014 an manchen Tagen f&uuml;hlst du dich gro&szlig;artig,
          an anderen wertlos. Die Falle: Du versuchst, deinen Wert durch
          Leistung, Geld oder Status zu beweisen. Deine Gabe: Du kannst den
          wahren Wert anderer Menschen erkennen und lernst, dass Wert nicht
          verdient werden muss.
        </p>
      </section>

      {/* Section 7: Milz */}
      <section id="milz" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Milz \u2014 Intuition &amp; Immunsystem
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Links im unteren BodyGraph &bull; Bewusstseinszentrum &bull; Tore: 18, 28, 32, 44, 48, 50, 57
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Milzzentrum ist das &auml;lteste Bewusstseinszentrum im K&ouml;rper. Es ist
          der Sitz der k&ouml;rperlichen Intuition, des Immunsystems und des
          &Uuml;berlebensinstinkts. Die Milz spricht leise und nur einmal \u2014 ein
          blitzschnelles K&ouml;rpergef&uuml;hl, das sagt: sicher oder unsicher, gesund
          oder ungesund. Es ist die Stimme deines K&ouml;rpers im Jetzt-Moment.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast eine spontane, zuverl&auml;ssige
          Intuition und ein starkes Immunsystem. Du sp&uuml;rst im Moment, was
          richtig und was falsch ist. Deine k&ouml;rperliche Wahrnehmung ist scharf.
          Du wei&szlig;t instinktiv, wem du vertrauen kannst und welche Situation
          gef&auml;hrlich ist. Wichtig: Diese Impulse kommen nicht zur&uuml;ck \u2014 handle im
          Moment.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du bist besonders empf&auml;nglich f&uuml;r die
          Gesundheitsenergien anderer. Du kannst sp&uuml;ren, wenn jemand krank wird,
          bevor es sichtbar wird. Die Falle: Du h&auml;ltst an Menschen, Orten oder
          Gewohnheiten fest, die nicht gut f&uuml;r dich sind, weil du ihre Energie
          verst&auml;rkst und f&uuml;r deine eigene h&auml;ltst. Deine Gabe: Tiefe Weisheit
          dar&uuml;ber, was wirklich gesund und was ungesund ist.
        </p>
      </section>

      {/* Section 8: Sakral */}
      <section id="sakral" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Sakral \u2014 Lebenskraft &amp; Arbeit
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Untere Mitte des BodyGraph &bull; Motorzentrum &bull; Tore: 3, 5, 9, 14, 27, 29, 34, 42, 59
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Sakralzentrum ist das m&auml;chtigste Motorzentrum im BodyGraph und der
          Schl&uuml;ssel zur Unterscheidung zwischen Generatoren und Nicht-Generatoren.
          Es ist der Sitz der Lebensenergie, der Schaffenskraft und der
          Sexualit&auml;t. Etwa 70% der Menschheit hat ein definiertes Sakral \u2014 die
          Generatoren und Manifestierenden Generatoren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast eine nachhaltige, kraftvolle
          Arbeitsenergie, die sich jeden Tag neu aufbaut. Dein Sakral antwortet
          in Echtzeit mit einem k&ouml;rperlichen Bauchgef&uuml;hl: Ein warmes &bdquo;Uh-huh&ldquo; f&uuml;r
          Ja und ein zusammenziehendes &bdquo;Uh-uh&ldquo; f&uuml;r Nein. Dieses Bauchgef&uuml;hl ist dein
          zuverl&auml;ssigster Navigator. Wichtig: Nutze die Sakral-Energie bis zum
          Abend auf, damit du erholsam schlafen kannst.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du hast keine eigene, nachhaltige
          Arbeitsenergie, nimmst aber die Sakral-Energie von Generatoren in
          deiner N&auml;he auf und verst&auml;rkst sie. Das kann sich wie Superpower
          anf&uuml;hlen \u2014 aber es ist nicht deine eigene. Die Falle: Du arbeitest
          &uuml;ber deine Grenzen hinaus, weil du die verst&auml;rkte Energie f&uuml;r deine
          eigene h&auml;ltst. Deine Gabe: Du wei&szlig;t genau, wer die richtige Arbeit
          tut und wer nicht \u2014 weil du sp&uuml;rst, wessen Sakral leuchtet.
        </p>
      </section>

      {/* Section 9: Emotionen */}
      <section id="emotionen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Emotionen (Solar Plexus) \u2014 Emotionale Welle
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Rechts unten im BodyGraph &bull; Motor- &amp; Bewusstseinszentrum &bull; Tore: 6, 22, 30, 36, 37, 49, 55
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Emotionalzentrum (Solar Plexus) ist das einzige Zentrum im
          BodyGraph, das gleichzeitig Motorzentrum und Bewusstseinszentrum ist.
          Es ist der Sitz der emotionalen Welle \u2014 eines nat&uuml;rlichen Auf und Ab
          zwischen Hoffnung und Schmerz, Begeisterung und Melancholie. Etwa 50%
          der Menschheit hat dieses Zentrum definiert.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du erlebst eine konstante emotionale
          Welle \u2014 Hochs und Tiefs, die in Zyklen kommen. Es gibt f&uuml;r dich keine
          Wahrheit im Jetzt-Moment, weil deine Gef&uuml;hle sich st&auml;ndig ver&auml;ndern.
          Triff keine wichtigen Entscheidungen im emotionalen Hoch oder Tief.
          Warte auf emotionale Klarheit \u2014 einen Moment relativer Ruhe, in dem du
          dich sicher f&uuml;hlst. Du beeinflusst die emotionale Atmosph&auml;re jedes
          Raumes, den du betrittst.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du hast keine eigene emotionale Welle,
          nimmst aber die Emotionen deiner Umgebung auf und verst&auml;rkst sie.
          Du bist der emotionale Seismograph deines Umfelds \u2014 du sp&uuml;rst
          Stimmungen, bevor ein Wort gesprochen wird. Die Falle: Du verwechselst
          die Gef&uuml;hle anderer mit deinen eigenen und vermeidest Konflikte um
          jeden Preis. Deine Gabe: Du lernst, emotionale Weisheit zu entwickeln
          und genau zu sp&uuml;ren, wie es anderen wirklich geht.
        </p>
      </section>

      {/* Section 10: Wurzel */}
      <section id="wurzel" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Wurzel \u2014 Antrieb &amp; Stress
        </h2>
        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-6">
          <p className="text-sm font-medium text-gold">
            Position: Ganz unten im BodyGraph &bull; Druck- &amp; Motorzentrum &bull; Tore: 19, 38, 39, 41, 52, 53, 54, 58, 60
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Wurzelzentrum ist das untere Druckzentrum und gleichzeitig ein
          Motorzentrum. Es erzeugt den Antrieb, Dinge zu erledigen, sich
          weiterzuentwickeln und Hindernisse zu &uuml;berwinden. Dieser Druck kann
          als gesunde Motivation erlebt werden oder als Stress \u2014 das h&auml;ngt davon
          ab, ob du im Einklang mit deinem Design lebst.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Definiert:</strong> Du hast einen konstanten inneren
          Antrieb und die F&auml;higkeit, unter Druck zu arbeiten. Stress ist f&uuml;r dich
          ein nat&uuml;rlicher Zustand \u2014 er motiviert dich, statt dich zu l&auml;hmen.
          Du hast eine stetige, verl&auml;ssliche Energie, die dich in Bewegung h&auml;lt.
          Die Herausforderung: Du kannst andere unter Druck setzen, ohne es zu
          merken.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Offen:</strong> Du nimmst den Adrenalin-Druck deiner
          Umgebung auf und verst&auml;rkst ihn. Das kann sich anf&uuml;hlen, als m&uuml;sstest
          du alles sofort erledigen. Die Falle: Du hetzt von Aufgabe zu Aufgabe,
          nur um den Druck loszuwerden \u2014 aber der Druck kommt nicht von dir. Deine
          Gabe: Du lernst tiefe Weisheit &uuml;ber den Umgang mit Stress und kannst
          unterscheiden, welcher Druck gesund und welcher toxisch ist.
        </p>
      </section>

      {/* Section 11: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          H&auml;ufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
