"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "sanskrit-name", title: "Sanskrit-Name und Bedeutung" },
  { id: "position-farbe", title: "Position und Farbe" },
  { id: "kernthemen", title: "Kernthemen" },
  { id: "beschreibung", title: "Ausf\u00fchrliche Beschreibung" },
  { id: "blockade", title: "Zeichen f\u00fcr Blockade" },
  { id: "balance", title: "Zeichen f\u00fcr Balance" },
  { id: "uebungen", title: "\u00dcbungen zur Aktivierung" },
  { id: "edelsteine", title: "Edelsteine und Farben" },
  { id: "verbindung", title: "Verbindung zu Sternzeichen" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/chakren", label: "Chakren \u00dcbersicht" },
  { href: "/wiki/sieben-chakren", label: "Die 7 Hauptchakren" },
  { href: "/wiki/sakralchakra", label: "Sakralchakra" },
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
];

const faqItems = [
  {
    question: "Wie merke ich, ob mein Wurzelchakra blockiert ist?",
    answer:
      "Typische Anzeichen f\u00fcr ein blockiertes Wurzelchakra sind chronische Angst und Unsicherheit, Existenz\u00e4ngste, Schlafst\u00f6rungen, R\u00fccken- und Knieschmerzen sowie ein allgemeines Gef\u00fchl der Entwurzelung. Auch \u00fcberm\u00e4\u00dfiger Materialismus oder Geiz k\u00f6nnen auf eine Blockade im ersten Chakra hinweisen. K\u00f6rperlich \u00e4u\u00dfert sich das oft als Immunschw\u00e4che oder Probleme mit Z\u00e4hnen und Knochen.",
  },
  {
    question: "Welche Yoga-\u00dcbungen st\u00e4rken das Wurzelchakra?",
    answer:
      "Besonders erdende Yoga-Posen sind ideal f\u00fcr das Wurzelchakra: Krieger I (Virabhadrasana I), Baum (Vrksasana), Garland Pose (Malasana) und Berg (Tadasana). Alle stehenden Posen, die Stabilit\u00e4t und Erdung erfordern, aktivieren das Muladhara. Wichtig ist dabei, die F\u00fc\u00dfe bewusst in den Boden zu dr\u00fccken und die Verbindung zur Erde zu sp\u00fcren.",
  },
  {
    question: "Was hat das Wurzelchakra mit meinem Sternzeichen zu tun?",
    answer:
      "Dem Wurzelchakra wird traditionell der Planet Saturn zugeordnet, der f\u00fcr Struktur, Disziplin und Verantwortung steht. Die Erdzeichen Stier, Jungfrau und Steinbock haben eine nat\u00fcrliche Affinit\u00e4t zum Wurzelchakra. Besonders Steinbock, der von Saturn regiert wird, spiegelt die Themen Sicherheit und Stabilit\u00e4t wider. In der siderischen Astrologie k\u00f6nnen sich diese Zuordnungen verschieben.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Wurzelchakra (Muladhara)"
      subtitle="Das erste Chakra \u2014 Sicherheit, Erdung, \u00dcberleben."
      breadcrumb="Chakren > Wurzelchakra"
      sections={sections}
      ctaText="Entdecke dein kosmisches Profil \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Sanskrit-Name und Bedeutung */}
      <section id="sanskrit-name" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Sanskrit-Name und Bedeutung
        </h2>
        <div
          className="p-4 rounded-xl mb-6"
          style={{
            borderLeft: "4px solid #EF4444",
            backgroundColor: "rgba(239, 68, 68, 0.05)",
          }}
        >
          <p className="text-sm font-medium" style={{ color: "#EF4444" }}>
            Sanskrit: Muladhara (&bdquo;Wurzelst\u00fctze&ldquo;) | Position: Basis der Wirbels\u00e4ule, Perineum | Farbe: Rot | Element: Erde | Planet: Saturn | Mantra: LAM
          </p>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          Muladhara setzt sich aus den Sanskrit-W\u00f6rtern &bdquo;Mula&ldquo; (Wurzel) und &bdquo;Adhara&ldquo; (St\u00fctze/Basis) zusammen. Es ist das Fundament des gesamten Chakra-Systems \u2014 wie die Wurzeln eines Baumes, die ihm Halt und Nahrung geben. Ohne ein stabiles Wurzelchakra fehlt dem gesamten Energiesystem die Grundlage, \u00e4hnlich wie ein Haus ohne Fundament bei der ersten Ersch\u00fctterung ins Wanken ger\u00e4t.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In der Kundalini-Tradition ruht hier die Schlangenkraft (Kundalini Shakti), die darauf wartet, geweckt zu werden und durch alle Chakren aufzusteigen. Diese schlafende Energie wird als zusammengerollte Schlange am Fuße der Wirbels\u00e4ule visualisiert. Wenn sie durch spirituelle Praxis erwacht, steigt sie durch die Sushumna-Nadi (den zentralen Energiekanal) nach oben und aktiviert dabei nacheinander alle sieben Hauptchakren.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Wurzelchakra wird als vierbl\u00e4ttriger Lotus dargestellt, dessen Bl\u00e4tter die vier Aspekte des Bewusstseins symbolisieren: Geist (Manas), Intellekt (Buddhi), Bewusstsein (Chitta) und Ego (Ahamkara). Diese vier Bl\u00e4tter stehen auch f\u00fcr die vier grundlegenden Lebensbereiche, die vom Wurzelchakra regiert werden: physische Sicherheit, emotionale Stabilit\u00e4t, materielle Versorgung und soziale Zugeh\u00f6rigkeit. Die Zahl Vier spiegelt zudem die vier Himmelsrichtungen und die vier Elemente wider \u2014 ein Zeichen daf\u00fcr, dass das Muladhara uns in alle Richtungen der physischen Welt verankert.
        </p>
      </section>

      {/* Section 2: Position und Farbe */}
      <section id="position-farbe" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Position und Farbe
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Wurzelchakra befindet sich an der Basis der Wirbels\u00e4ule, im Bereich des Perineums \u2014 dem Punkt zwischen Anus und Geschlechtsorganen. Es ist das am tiefsten gelegene Chakra und bildet die energetische Verbindung zwischen deinem K\u00f6rper und der Erde. In manchen Traditionen wird seine Lage auch mit dem Stei\u00dfbein (Coccyx) assoziiert, dem untersten Punkt der Wirbels\u00e4ule.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Seine Farbe ist ein tiefes Rot \u2014 die Farbe der Lebenskraft, des Blutes und der physischen Energie. Rot ist die langsamste Schwingungsfrequenz im sichtbaren Lichtspektrum und steht f\u00fcr das Fundamentale, Physische, Erdgebundene. Es ist kein Zufall, dass Rot seit Jahrtausenden mit Kraft, Lebenskraft und \u00dcberleben assoziiert wird: Es ist die Farbe des Blutes, die uns am Leben h\u00e4lt, und des Feuers, das uns w\u00e4rmt.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Wenn du dich unsicher oder entwurzelt f\u00fchlst, kann die Visualisierung eines warmen roten Lichts an der Basis deiner Wirbels\u00e4ule helfen, dich zu erden. Stell dir vor, wie dieses rote Licht wie eine gl\u00fchende Kugel pulsiert und mit jedem Atemzug st\u00e4rker wird. Diese einfache Visualisierung kann in Momenten der Angst oder Unsicherheit ein sofortiges Gef\u00fchl der Stabilit\u00e4t erzeugen.
        </p>
      </section>

      {/* Section 3: Kernthemen */}
      <section id="kernthemen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Kernthemen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Wurzelchakra regiert die grundlegendsten Aspekte deiner Existenz. Es ist das Chakra des \u00dcberlebens, der Sicherheit und der Verbindung zur physischen Welt. Hier sind die zentralen Themen, die es beeinflusst:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span style={{ color: "#EF4444" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Physisches \u00dcberleben und materielle Sicherheit</strong> \u2014 Das Grundbed\u00fcrfnis nach Nahrung, Obdach, Gesundheit und finanzieller Stabilit\u00e4t. Alles, was dein physisches \u00dcberleben sicherstellt, wird vom Wurzelchakra regiert.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EF4444" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Erdung und K\u00f6rperbewusstsein</strong> \u2014 Die F\u00e4higkeit, pr\u00e4sent im eigenen K\u00f6rper zu sein, sich verbunden mit der Erde zu f\u00fchlen und die physische Realit\u00e4t bewusst wahrzunehmen.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EF4444" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Zugeh\u00f6rigkeit zu Familie und Stamm</strong> \u2014 Das Gef\u00fchl, Teil einer Gemeinschaft zu sein, famili\u00e4re Bindungen und das kollektive \u00dcberlebensged\u00e4chtnis, das \u00fcber Generationen weitergegeben wird.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EF4444" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Urvertrauen und Stabilit\u00e4t</strong> \u2014 Das tiefe, unbewusste Vertrauen, dass das Leben dich tr\u00e4gt, dass du sicher bist und dass f\u00fcr dich gesorgt ist. Dieses Urvertrauen wird in den ersten Lebensjahren gepr\u00e4gt.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EF4444" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Verbindung zur physischen Welt</strong> \u2014 Die bewusste Beziehung zur Materie, zur Natur und zum eigenen K\u00f6rper als Tempel der Seele.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Ausf\u00fchrliche Beschreibung */}
      <section id="beschreibung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Ausf\u00fchrliche Beschreibung
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Wurzelchakra bildet das Fundament deines gesamten Energiesystems und deiner Pers\u00f6nlichkeit. Es ist das Chakra, das sich als erstes entwickelt \u2014 in den ersten Lebensmonaten und -jahren, wenn ein S\u00e4ugling lernt, ob die Welt ein sicherer Ort ist. Die Erfahrungen dieser fr\u00fchen Lebensphase pr\u00e4gen das Wurzelchakra f\u00fcr das gesamte Leben: Wurde das Kind gen\u00e4hrt, geh\u00e4lt und besch\u00fctzt? Oder erlebte es Hunger, Vernachl\u00e4ssigung oder Unsicherheit? Diese Urerfahrungen bilden das Muster, nach dem das Wurzelchakra f\u00fcr den Rest des Lebens arbeitet.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Familienmuster und generationale Traumata sind eng mit dem Wurzelchakra verbunden. Wenn deine Eltern oder Gro\u00dfeltern Krieg, Vertreibung oder extreme Armut erlebt haben, kann diese Energie \u00fcber Generationen weitergegeben werden \u2014 selbst wenn du selbst in Sicherheit aufgewachsen bist. Dieses Ph\u00e4nomen, das in der Psychologie als transgenerationales Trauma bekannt ist, zeigt sich h\u00e4ufig als unerklärliche Existenzangst, \u00fcberm\u00e4\u00dfiges Sicherheitsbed\u00fcrfnis oder die F\u00e4higkeit, nie wirklich \u201eanzukommen\u201c. Die bewusste Arbeit mit dem Wurzelchakra kann helfen, diese alten Muster zu erkennen und zu heilen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Es ist bemerkenswert, dass Kulturen weltweit \u00e4hnliche Konzepte der erdenden Energie kennen. Die chinesische Medizin spricht vom &bdquo;Dan Tien&ldquo; im Unterbauch, die japanische Tradition vom &bdquo;Hara&ldquo;, und indigene V\u00f6lker auf jedem Kontinent praktizieren Rituale der Erdverbindung. Diese universelle \u00dcbereinstimmung deutet darauf hin, dass das Bed\u00fcrfnis nach Erdung und Verwurzelung ein fundamentaler Aspekt des Menschseins ist \u2014 unabh\u00e4ngig von Kultur, Religion oder Epoche. Das Wurzelchakra ist die vedische Sprache f\u00fcr ein zutiefst menschliches Bed\u00fcrfnis: den festen Boden unter den F\u00fc\u00dfen.
        </p>
      </section>

      {/* Section 5: Zeichen f\u00fcr Blockade */}
      <section id="blockade" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Zeichen f\u00fcr Blockade
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein blockiertes oder unteraktives Wurzelchakra \u00e4u\u00dfert sich auf vielf\u00e4ltige Weise \u2014 sowohl emotional als auch k\u00f6rperlich. Wenn das Fundament wackelt, sp\u00fcrst du es im gesamten System. Hier sind die h\u00e4ufigsten Anzeichen:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Chronische Angst und Unsicherheit</strong> \u2014 Ein st\u00e4ndiges Gef\u00fchl der Bedrohung, auch wenn objektiv keine Gefahr besteht.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Existenz\u00e4ngste</strong> \u2014 Sorgen um Geld, Wohnung, Job und die grundlegende Versorgung, die nicht nachlassen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Misstrauen gegen\u00fcber dem Leben</strong> \u2014 Das Gef\u00fchl, dass das Universum es nicht gut mit dir meint und du alles allein schaffen musst.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Geiz oder exzessiver Materialismus</strong> \u2014 Entweder krampfhaftes Festhalten an Besitz oder zwanghaftes Konsumieren als Ersatz f\u00fcr innere Sicherheit.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Essst\u00f6rungen</strong> \u2014 Sowohl Unter- als auch \u00dcbergewicht k\u00f6nnen auf Wurzelchakra-Themen hinweisen, da Essen die grundlegendste Form der Selbstversorgung ist.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">R\u00fccken- und Knieschmerzen</strong> \u2014 K\u00f6rperliche Beschwerden im unteren R\u00fccken, den Beinen und Knien sind klassische Wurzelchakra-Symptome.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Immunschw\u00e4che</strong> \u2014 H\u00e4ufige Erk\u00e4ltungen und Infekte, da das Wurzelchakra die Grundvitalit\u00e4t des K\u00f6rpers beeinflusst.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Probleme mit Z\u00e4hnen und Knochen</strong> \u2014 Z\u00e4hne und Knochen repr\u00e4sentieren Struktur und Stabilit\u00e4t im K\u00f6rper.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Schlafst\u00f6rungen</strong> \u2014 Einschlaf- oder Durchschlafprobleme, da der K\u00f6rper nicht genug Sicherheit sp\u00fcrt, um loszulassen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Rastlosigkeit und Unf\u00e4higkeit stillzusitzen</strong> \u2014 St\u00e4ndiger Bewegungsdrang als unbewusster Versuch, dem Gef\u00fchl der Unsicherheit zu entkommen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Zeichen f\u00fcr Balance */}
      <section id="balance" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Zeichen f\u00fcr Balance
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein ausgeglichenes Wurzelchakra zeigt sich in einem tiefen Gef\u00fchl der Sicherheit und Gelassenheit. Du sp\u00fcrst, dass du getragen wirst \u2014 nicht von \u00e4u\u00dferen Umst\u00e4nden, sondern von einer inneren Gewissheit. Hier sind die Zeichen eines gesunden Muladhara:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Tiefes Gef\u00fchl der Sicherheit und Geborgenheit</strong> \u2014 Du f\u00fchlst dich sicher in deinem K\u00f6rper und in der Welt, auch in unsicheren Zeiten.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Vertrauen ins Leben und in den eigenen Weg</strong> \u2014 Die \u00dcberzeugung, dass alles seinen Sinn hat und dass f\u00fcr dich gesorgt ist.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gesunde Beziehung zu Geld und materiellen Dingen</strong> \u2014 Weder Geiz noch Verschwendung, sondern ein nat\u00fcrlicher Fluss von Geben und Nehmen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">K\u00f6rperliche Vitalit\u00e4t und Energie</strong> \u2014 Du f\u00fchlst dich lebendig, kraftvoll und im Einklang mit deinem K\u00f6rper.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Guter Schlaf und starkes Immunsystem</strong> \u2014 Dein K\u00f6rper regeneriert sich effektiv, weil er sich sicher genug f\u00fchlt, um vollst\u00e4ndig loszulassen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">F\u00e4higkeit, geerdet zu bleiben in Krisenzeiten</strong> \u2014 Auch wenn \u00e4u\u00dferlich alles wackelt, beh\u00e4ltst du deine innere Stabilit\u00e4t.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gef\u00fchl der Zugeh\u00f6rigkeit</strong> \u2014 Du f\u00fchlst dich verbunden mit deiner Familie, deiner Gemeinschaft und der Erde.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: \u00dcbungen zur Aktivierung */}
      <section id="uebungen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          \u00dcbungen zur Aktivierung
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Wurzelchakra l\u00e4sst sich durch k\u00f6rperliche, mentale und sensorische Praktiken st\u00e4rken. Der Schl\u00fcssel liegt in der bewussten Verbindung mit der Erde und dem eigenen K\u00f6rper:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EF4444" }}>
              Erdungsmeditation
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Stehe barfu\u00df auf der Erde \u2014 auf Gras, Sand oder Waldboden. Schlie\u00dfe die Augen und visualisiere, wie aus deinen F\u00fc\u00dfen Wurzeln in den Boden wachsen, tiefer und tiefer, bis sie den Erdkern erreichen. Sp\u00fcre, wie die Erde dich tr\u00e4gt und n\u00e4hrt. Atme zehn tiefe Atemz\u00fcge und lass mit jedem Ausatmen Angst und Anspannung in die Erde flie\u00dfen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EF4444" }}>
              Yoga-Posen f\u00fcr das Wurzelchakra
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Krieger I (Virabhadrasana I) f\u00fcr Kraft und Standfestigkeit, Baum (Vrksasana) f\u00fcr Balance und Verwurzelung, Malasana (Garland Pose) f\u00fcr die \u00d6ffnung des Beckenbodens und Berg (Tadasana) f\u00fcr bewusstes Stehen. Halte jede Pose mindestens f\u00fcnf Atemz\u00fcge und sp\u00fcre den Kontakt deiner F\u00fc\u00dfe mit dem Boden.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EF4444" }}>
              Stampfende Bewegungen und Tanzen
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Rhythmisches Stampfen, afrikanischer Tanz oder jede Form von erdverbundenem Tanzen aktiviert das Wurzelchakra kraftvoll. Die Vibrationen, die durch das Stampfen entstehen, resonieren mit der Frequenz des Muladhara. Schon f\u00fcnf Minuten bewusstes Stampfen k\u00f6nnen ein Gef\u00fchl tiefer Erdung erzeugen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EF4444" }}>
              Rote Lebensmittel und Ern\u00e4hrung
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Rote Lebensmittel n\u00e4hren das Wurzelchakra: Rote Bete, Granat\u00e4pfel, Tomaten, Erdbeeren, rote Paprika und Radieschen. Auch Wurzelgem\u00fcse wie Karotten, Kartoffeln und Ingwer st\u00e4rken die Erdverbindung. Iss bewusst und mit Dankbarkeit \u2014 das Essen selbst wird zur Erdungs\u00fcbung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EF4444" }}>
              LAM Mantra und Naturverbindung
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Chante das Bija-Mantra &bdquo;LAM&ldquo; (ausgesprochen wie &bdquo;LAAM&ldquo;) in einem tiefen Brustton. Sp\u00fcre, wie die Vibration im Beckenboden resoniert. Kombiniere das Chanten mit Zeit in der Natur: Waldspazierg\u00e4nge, Gartenarbeit oder einfach auf einer Wiese sitzen. Die Natur ist der direkteste Weg zur Erdung.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Edelsteine und Farben */}
      <section id="edelsteine" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Edelsteine und Farben
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Bestimmte Edelsteine und Farben resonieren mit der Frequenz des Wurzelchakras und k\u00f6nnen seine Energie st\u00e4rken und harmonisieren:
        </p>
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Roter Jaspis</strong> \u2014 Der klassische Erdungsstein. Er st\u00e4rkt die Verbindung zur Erde, f\u00f6rdert Stabilit\u00e4t und gibt in stressigen Zeiten Halt. Ideal als Taschenbegleiter oder Meditationsstein.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Granat</strong> \u2014 Der Stein der Lebenskraft. Er aktiviert die Kundalini-Energie, st\u00e4rkt die Vitalit\u00e4t und f\u00f6rdert Mut und Durchhalteverm\u00f6gen. Besonders hilfreich bei Ersch\u00f6pfung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">H\u00e4matit</strong> \u2014 Der Schutz- und Erdungsstein. Sein metallischer Glanz und sein Gewicht erinnern daran, dass Erdung auch Schutz bedeutet. Er hilft, negative Energien abzuwehren und klare Grenzen zu setzen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Schwarzer Turmalin</strong> \u2014 Der m\u00e4chtigste Reinigungsstein. Er absorbiert negative Energien und elektromagnetische Strahlung. Besonders empfehlenswert f\u00fcr empfindliche Menschen, die viel fremde Energie aufnehmen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Obsidian</strong> \u2014 Der Stein der Wahrheit und des Schutzes. Er hilft, unbewusste Muster und Blockaden zu erkennen, und sch\u00fctzt gleichzeitig vor negativen Einfl\u00fcssen. Besonders kraftvoll in Kombination mit Meditationsarbeit.
            </p>
          </div>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Farben f\u00fcr den Alltag:</strong> Trage Rot oder platziere rote Akzente in deiner Umgebung, um das Wurzelchakra zu st\u00e4rken. Auch erdige Braunt\u00f6ne, tiefes Schwarz und warmes Terrakotta unterst\u00fctzen die Erdung. Eine rote Socke, ein roter Schal oder rote Blumen auf dem Schreibtisch k\u00f6nnen subtile, aber wirksame Erinnerungen an deine Verwurzelung sein.
        </p>
      </section>

      {/* Section 9: Verbindung zu Sternzeichen und Elementen */}
      <section id="verbindung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Verbindung zu Sternzeichen und Elementen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Saturn als Herrscherplanet des Wurzelchakras steht f\u00fcr Struktur, Disziplin und Verantwortung \u2014 genau die Qualit\u00e4ten, die das erste Chakra verk\u00f6rpert. Saturn lehrt uns, Fundamente zu bauen, Geduld zu haben und langfristig zu denken. Er ist der kosmische Baumeister, der Stabilit\u00e4t vor Schnelligkeit stellt. Diese Saturn-Energie ist das astrologische \u00c4quivalent eines tiefen, starken Wurzelsystems.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Erdzeichen \u2014 Stier, Jungfrau und Steinbock \u2014 haben eine nat\u00fcrliche Affinit\u00e4t zum Wurzelchakra. Sie versp\u00fcren intuitiv das Bed\u00fcrfnis nach Sicherheit, Struktur und materieller Stabilit\u00e4t. Besonders Steinbock, der von Saturn regiert wird, spiegelt die Themen des Wurzelchakras direkt wider: Sicherheit, Struktur, Verantwortung und das langsame, beharrliche Wachstum, das durch Ausdauer und Disziplin entsteht.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Doch auch Menschen mit wenig Erde in ihrem Chart oder einem herausgeforderten Saturn k\u00f6nnen ein starkes Wurzelchakra entwickeln \u2014 es erfordert nur bewusstere Arbeit. In der siderischen Astrologie verschieben sich die Zeichenzuordnungen gegen\u00fcber dem tropischen System um etwa 24 Grad. Das bedeutet, dass dein tropisch bestimmtes Element m\u00f6glicherweise nicht dein tats\u00e4chliches, astronomisch korrektes Element ist \u2014 ein weiterer Grund, dein echtes kosmisches Profil zu kennen und zu verstehen, wie es sich auf dein Energiesystem auswirkt.
        </p>
      </section>

      {/* Section 10: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          H\u00e4ufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
