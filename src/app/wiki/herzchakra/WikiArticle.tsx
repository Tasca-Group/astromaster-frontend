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
  { href: "/wiki/solarplexuschakra", label: "Solarplexuschakra" },
  { href: "/wiki/halschakra", label: "Halschakra" },
];

const faqItems = [
  {
    question: "Warum ist das Herzchakra das wichtigste Chakra?",
    answer:
      "Das Herzchakra nimmt eine besondere Stellung ein, weil es als viertes von sieben Chakren genau in der Mitte liegt und die Br\u00fccke zwischen den unteren (physischen) und oberen (spirituellen) Chakren bildet. Es verbindet K\u00f6rper und Geist, Materie und Bewusstsein, Erde und Himmel. Ohne ein offenes Herz k\u00f6nnen die h\u00f6heren Chakren nicht vollst\u00e4ndig aktiviert werden. Das Herz ist das Zentrum, in dem alle Energien zusammenflie\u00dfen.",
  },
  {
    question: "Wie \u00f6ffne ich mein Herzchakra nach einer Trennung?",
    answer:
      "Nach einer Trennung ist das Herzchakra oft durch Schmerz und Entt\u00e4uschung verschlossen. Hilfreiche Praktiken sind: Liebende-G\u00fcte-Meditation (Metta), herz\u00f6ffnende Yoga-Posen wie Kobra und Kamel, ein Dankbarkeits-Tagebuch, bewusstes Vergeben (auch sich selbst) und Zeit in der gr\u00fcnen Natur. Wichtig: Heilung braucht Zeit, erlaube dir den Prozess und dr\u00e4nge dich nicht zu fr\u00fch, wieder zu \u00f6ffnen.",
  },
  {
    question: "Was hat Venus mit dem Herzchakra zu tun?",
    answer:
      "Venus ist der Herrscherplanet des Herzchakras und steht in der Astrologie f\u00fcr Liebe, Harmonie, Sch\u00f6nheit und Beziehungen \u2014 genau die Kernthemen des vierten Chakras. Die Luftzeichen, besonders Waage (von Venus regiert), haben eine nat\u00fcrliche Affinit\u00e4t zum Herzchakra. Die Venus-Position in deinem siderischen Horoskop zeigt, wie du liebst, was du in Beziehungen brauchst und wo deine Herzensthemen liegen.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Herzchakra (Anahata)"
      subtitle="Das vierte Chakra \u2014 Bedingungslose Liebe, Mitgef\u00fchl, Vergebung."
      breadcrumb="Chakren > Herzchakra"
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
            borderLeft: "4px solid #22C55E",
            backgroundColor: "rgba(34, 197, 94, 0.05)",
          }}
        >
          <p className="text-sm font-medium" style={{ color: "#22C55E" }}>
            Sanskrit: Anahata (&bdquo;Unversehrt&ldquo;) | Position: Brustmitte, H\u00f6he des Herzens | Farbe: Gr\u00fcn | Element: Luft | Planet: Venus | Mantra: YAM
          </p>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          Anahata bedeutet im Sanskrit &bdquo;unversehrt&ldquo;, &bdquo;unber\u00fchrt&ldquo; oder &bdquo;ungeschlagen&ldquo;. Der Name verweist auf den inneren Klang, der ohne \u00e4u\u00dferen Ansto\u00df entsteht \u2014 das &bdquo;unstruck sound&ldquo;, der universelle Herzschlag, der vor allen anderen Kl\u00e4ngen existiert. Es ist der Klang der reinen Liebe, die keiner Ursache und keines Anlasses bedarf, um zu existieren. Sie ist einfach da, unversehrt und unzerst\u00f6rbar, unabh\u00e4ngig von \u00e4u\u00dferen Umst\u00e4nden.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Herzchakra wird traditionell als zw\u00f6lfbl\u00e4ttriger Lotus dargestellt. Die zw\u00f6lf Bl\u00e4tter symbolisieren die zw\u00f6lf g\u00f6ttlichen Qualit\u00e4ten des Herzens: Freude, Frieden, Liebe, Harmonie, Klarheit, Mitgef\u00fchl, Reinheit, Einheit, Verst\u00e4ndnis, Vergebung, Geduld und Sanftmut. Im Zentrum des Lotus befindet sich ein sechszackiger Stern \u2014 gebildet aus zwei ineinander verschr\u00e4nkten Dreiecken, die die Vereinigung von Shiva (Bewusstsein, nach oben zeigend) und Shakti (Energie, nach unten zeigend) symbolisieren.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Anahata nimmt eine absolut einzigartige Position im Chakra-System ein: Es ist das vierte von sieben Chakren und bildet damit die exakte Mitte. Es ist die Br\u00fccke zwischen den drei unteren Chakren (Wurzel, Sakral, Solarplexus), die mit der physischen und emotionalen Welt verbunden sind, und den drei oberen Chakren (Hals, Stirn, Krone), die mit der spirituellen und geistigen Welt verbunden sind. Ohne ein offenes Herz bleibt die Verbindung zwischen K\u00f6rper und Geist, zwischen Erde und Himmel, unterbrochen.
        </p>
      </section>

      {/* Section 2: Position und Farbe */}
      <section id="position-farbe" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Position und Farbe
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Herzchakra befindet sich in der Brustmitte, auf H\u00f6he des Herzens, direkt hinter dem Brustbein (Sternum). Es ist nicht identisch mit dem physischen Herzen, das leicht links versetzt schl\u00e4gt, sondern liegt genau im Zentrum des Brustkorbs. Dieser Bereich wird in vielen Traditionen als der Sitz der Seele betrachtet \u2014 nicht umsonst legen Menschen instinktiv die Hand auf die Brust, wenn sie Liebe, Dankbarkeit oder Ber\u00fchrung empfinden.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die prim\u00e4re Farbe des Herzchakras ist Gr\u00fcn \u2014 die Farbe der Natur, des Wachstums und der Erneuerung. Gr\u00fcn liegt genau in der Mitte des sichtbaren Lichtspektrums, so wie das Herzchakra in der Mitte des Chakra-Systems liegt. Es ist die Farbe des Fr\u00fchlings, der Wiesen und der W\u00e4lder \u2014 Orte, an denen wir uns nat\u00fcrlich friedlich und verbunden f\u00fchlen. Als sekund\u00e4re Farbe wird dem Herzchakra manchmal Rosa zugeordnet, das die sanfte, bedingungslose Qualit\u00e4t der Herzliebe repr\u00e4sentiert.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Wenn du Herzschmerz, Einsamkeit oder emotionale Verschlossenheit sp\u00fcrst, kann die Visualisierung eines smaragdgr\u00fcnen Lichts in deiner Brustmitte helfen, das Herz sanft zu \u00f6ffnen. Stell dir vor, wie dieses gr\u00fcne Licht wie eine leuchtende Kugel in deiner Brust pulsiert und mit jedem Atemzug w\u00e4chst, bis es deinen gesamten K\u00f6rper und schlie\u00dflich den Raum um dich herum in sanftes Gr\u00fcn h\u00fcllt.
        </p>
      </section>

      {/* Section 3: Kernthemen */}
      <section id="kernthemen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Kernthemen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Herzchakra ist das Zentrum der Liebe in all ihren Formen \u2014 von der romantischen Liebe \u00fcber die Elternliebe bis hin zur universellen, bedingungslosen Liebe zu allen Wesen:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span style={{ color: "#22C55E" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Bedingungslose Liebe</strong> \u2014 Die F\u00e4higkeit, ohne Erwartungen, Bedingungen oder Gegenleistung zu lieben. Liebe als Zustand des Seins, nicht als Transaktion.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#22C55E" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Mitgef\u00fchl und Empathie</strong> \u2014 Die F\u00e4higkeit, den Schmerz anderer zu sp\u00fcren und ihnen mit offenem Herzen zu begegnen, ohne dich selbst darin zu verlieren.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#22C55E" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Vergebung und Heilung</strong> \u2014 Die Kraft, Verletzungen loszulassen, sowohl anderen als auch dir selbst zu vergeben und dadurch emotionale Wunden zu heilen.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#22C55E" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Selbstliebe</strong> \u2014 Die grundlegende Annahme und Wertsch\u00e4tzung deiner selbst, mit all deinen St\u00e4rken und Schw\u00e4chen. Selbstliebe ist das Fundament jeder gesunden Beziehung.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#22C55E" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Verbindung und Einheit</strong> \u2014 Das Gef\u00fchl, mit allen Wesen verbunden zu sein, die Erkenntnis, dass Trennung eine Illusion ist und dass Liebe die grundlegende Kraft des Universums ist.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Ausf\u00fchrliche Beschreibung */}
      <section id="beschreibung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Ausf\u00fchrliche Beschreibung
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Herzchakra ist etwas Besonderes, weil es die Br\u00fccke zwischen den unteren physischen und den oberen spirituellen Chakren bildet. Die unteren drei Chakren \u2014 Wurzel (Sicherheit), Sakral (Emotionen) und Solarplexus (Wille) \u2014 sind nach innen und unten gerichtet, auf das pers\u00f6nliche \u00dcberleben und die individuelle Identit\u00e4t. Die oberen drei Chakren \u2014 Hals (Ausdruck), Stirn (Intuition) und Krone (Spiritualit\u00e4t) \u2014 sind nach au\u00dfen und oben gerichtet, auf Verbindung und Transzendenz. Das Herz ist der Punkt, an dem beide Str\u00f6me aufeinandertreffen und sich vereinen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Herzchakra entwickelt sich prim\u00e4r zwischen dem 4. und 7. Lebensjahr, in der Phase, in der Kinder beginnen, tiefere Freundschaften zu schlie\u00dfen, Empathie zu entwickeln und zu verstehen, dass andere Menschen eigene Gef\u00fchle haben. Erfahrungen von Liebe, Akzeptanz und Geborgenheit in dieser Phase n\u00e4hren das Herzchakra, w\u00e4hrend Zur\u00fcckweisung, emotionale Vernachl\u00e4ssigung oder der Verlust einer Bezugsperson tiefe Wunden hinterlassen k\u00f6nnen. Auch sp\u00e4tere Verluste \u2014 Trennungen, Trauer, Verrat \u2014 k\u00f6nnen das Herzchakra verschlie\u00dfen, als Schutzreaktion gegen weiteren Schmerz.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Paradoxon des Herzchakras ist, dass seine Verletzlichkeit gleichzeitig seine gr\u00f6\u00dfte St\u00e4rke ist. Ein geschlossenes Herz sch\u00fctzt vor Schmerz, aber es sch\u00fctzt auch vor Freude, Verbindung und Liebe. Die wahre Arbeit am Herzchakra besteht nicht darin, es zu verh\u00e4rten, sondern es so zu st\u00e4rken, dass es offen bleiben kann \u2014 auch angesichts von Schmerz. Ein offenes Herz bedeutet nicht, naiv oder grenzenlos zu sein. Es bedeutet, die F\u00e4higkeit zu haben, voll zu lieben und voll zu f\u00fchlen, w\u00e4hrend man gleichzeitig gesunde Grenzen h\u00e4lt. Genau wie der Name &bdquo;Anahata&ldquo; sagt: unversehrt, unzerst\u00f6rbar, unabh\u00e4ngig von \u00e4u\u00dferen Umst\u00e4nden.
        </p>
      </section>

      {/* Section 5: Zeichen f\u00fcr Blockade */}
      <section id="blockade" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Zeichen f\u00fcr Blockade
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein blockiertes Herzchakra \u00e4u\u00dfert sich entweder als verschlossenes Herz (Angst vor N\u00e4he) oder als \u00fcberm\u00e4\u00dfig offenes Herz ohne Grenzen (Co-Abh\u00e4ngigkeit). Beide Extreme zeigen eine Dysbalance im vierten Chakra:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Bindungsangst</strong> \u2014 Die Angst, sich emotional auf einen anderen Menschen einzulassen, aus Furcht vor Verletzung, Verlust oder Zur\u00fcckweisung. Ein Schutzmechanismus, der zu Isolation f\u00fchrt.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Eifersucht und Besitzdenken</strong> \u2014 Das Gef\u00fchl, den geliebten Menschen kontrollieren und besitzen zu m\u00fcssen, aus Angst, ihn zu verlieren. Eifersucht ist oft ein Zeichen mangelnder Selbstliebe.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Co-Abh\u00e4ngigkeit</strong> \u2014 Die Tendenz, sich selbst in Beziehungen vollst\u00e4ndig aufzugeben, den eigenen Wert an die Best\u00e4tigung des Partners zu kn\u00fcpfen und Grenzen nicht setzen zu k\u00f6nnen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Herzprobleme</strong> \u2014 Herzrasen, Herzklopfen, Bluthochdruck oder Engegef\u00fchl in der Brust k\u00f6nnen physische Manifestationen eines blockierten Herzchakras sein.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Lungenprobleme</strong> \u2014 Asthma, Atemprobleme und chronische Bronchitis stehen energetisch mit dem Herzchakra in Verbindung, da Lunge und Herz denselben Brustraum teilen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Unf\u00e4higkeit zu vergeben</strong> \u2014 Alten Groll und Bitterkeit festzuhalten, die wie Gift wirken und das Herz verh\u00e4rten. Nicht vergeben zu k\u00f6nnen schadet vor allem dir selbst.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Bitterkeit und Zynismus</strong> \u2014 Das Gef\u00fchl, dass Liebe eine L\u00fcge ist, dass man niemandem vertrauen kann und dass die Welt ein kalter Ort ist. Eine Schutzreaktion eines tief verletzten Herzens.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Einsamkeit trotz Gesellschaft</strong> \u2014 Von Menschen umgeben sein, aber sich innerlich isoliert und unverbunden f\u00fchlen. Eine unsichtbare Mauer um das Herz, die N\u00e4he verhindert.
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
          Ein ausgeglichenes Herzchakra zeigt sich als warme, offene Pr\u00e4senz \u2014 Menschen mit einem starken Anahata strahlen eine nat\u00fcrliche W\u00e4rme aus, die andere anzieht. Hier sind die Zeichen eines gesunden Herzchakras:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Tiefes Mitgef\u00fchl</strong> \u2014 Du kannst den Schmerz anderer sp\u00fcren und ihnen mit echtem Mitgef\u00fchl begegnen, ohne dich selbst darin zu verlieren oder \u00fcberw\u00e4ltigen zu lassen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gesunde Grenzen</strong> \u2014 Du kannst offen und liebevoll sein und gleichzeitig klare Grenzen setzen. Du wei\u00dft, wo du aufh\u00f6rst und der andere anf\u00e4ngt.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Tiefe Selbstliebe</strong> \u2014 Du akzeptierst und wertsch\u00e4tzt dich selbst mit all deinen Fehlern und Unvollkommenheiten. Du behandelst dich so, wie du einen guten Freund behandeln w\u00fcrdest.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">F\u00e4higkeit zu vergeben</strong> \u2014 Du kannst Verletzungen loslassen, ohne sie zu vergessen. Vergeben bedeutet nicht, das Verhalten zu billigen, sondern dich von der Last des Grolls zu befreien.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Emotionale Heilung</strong> \u2014 Du bist f\u00e4hig, alte Wunden zu heilen und aus schmerzhaften Erfahrungen zu wachsen, statt dich von ihnen definieren zu lassen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Herz\u00f6ffnung und Dankbarkeit</strong> \u2014 Du f\u00fchlst regelm\u00e4\u00dfig tiefe Dankbarkeit, Freude und ein Gef\u00fchl der Verbundenheit mit dem Leben und allen Wesen.
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
          Das Herzchakra \u00f6ffnet sich durch Liebe, Natur, Dankbarkeit und bewusstes \u00d6ffnen des Brustbereichs. Der Schl\u00fcssel liegt in der Bereitschaft, verletzlich zu sein und trotzdem zu lieben:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#22C55E" }}>
              Herz\u00f6ffnende Yoga-Posen
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Kobra (Bhujangasana), Kamel (Ustrasana), Br\u00fccke (Setu Bandhasana), Fisch (Matsyasana) und die R\u00e4dchen-Haltung (Chakrasana) \u00f6ffnen den Brustkorb und dehnen den Herzbereich. Bei diesen R\u00fcckbeugen ist der Brustraum weit und ungesch\u00fctzt \u2014 eine k\u00f6rperliche \u00dcbung in Verletzlichkeit und Offenheit. Halte jede Pose mindestens f\u00fcnf tiefe Atemz\u00fcge.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#22C55E" }}>
              Gr\u00fcne Natur und Parks
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Verbringe regelm\u00e4\u00dfig Zeit in gr\u00fcner Natur: Wald, Park, Wiese oder Garten. Die Farbe Gr\u00fcn harmonisiert das Herzchakra auf nat\u00fcrliche Weise. Umarme einen Baum (ja, wirklich \u2014 es funktioniert), lege dich ins Gras und sp\u00fcre die lebendige Energie der Natur in deinem Herzen. Waldbaden (Shinrin-yoku) ist eine wissenschaftlich best\u00e4tigte Methode zur Stressreduktion und Herzöffnung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#22C55E" }}>
              Dankbarkeits-Tagebuch
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Schreibe jeden Abend drei Dinge auf, f\u00fcr die du dankbar bist. Dankbarkeit ist eine der schnellsten Methoden, das Herzchakra zu \u00f6ffnen. Mit der Zeit wirst du bemerken, dass sich deine Wahrnehmung ver\u00e4ndert: Du siehst mehr Gutes in der Welt, weil dein Herz darauf trainiert wird, es zu erkennen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#22C55E" }}>
              Gr\u00fcne Lebensmittel
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Spinat, Brokkoli, Avocado, Gr\u00fcnkohl, Matcha, Gurke, Kiwi und gr\u00fcne \u00c4pfel n\u00e4hren das Herzchakra. Gr\u00fcner Tee, besonders Matcha, verbindet die erdende Qualit\u00e4t mit der herz\u00f6ffnenden Wirkung. Bereite dein Essen mit Liebe zu und iss bewusst \u2014 jede Mahlzeit kann ein Akt der Selbstf\u00fcrsorge sein.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#22C55E" }}>
              Liebende-G\u00fcte-Meditation (Metta) und YAM Mantra
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Setze dich bequem hin, lege eine Hand auf dein Herz und wiederhole innerlich: &bdquo;M\u00f6ge ich gl\u00fccklich sein. M\u00f6ge ich gesund sein. M\u00f6ge ich in Frieden sein.&ldquo; Erweitere diese W\u00fcnsche dann auf einen geliebten Menschen, dann auf eine neutrale Person, dann auf einen schwierigen Menschen und schlie\u00dflich auf alle Wesen. Kombiniere die Meditation mit dem Chanten des Bija-Mantras &bdquo;YAM&ldquo; (ausgesprochen wie &bdquo;JAAM&ldquo;), das direkt im Herzraum vibriert.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#22C55E" }}>
              Bewusst vergeben
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Schreibe einen Brief an jemanden, dem du vergeben m\u00f6chtest \u2014 du musst den Brief nicht abschicken. Schreibe alles auf, was dich verletzt hat, und lass am Ende bewusst los. Vergebung ist kein einmaliger Akt, sondern ein Prozess. Manchmal musst du dieselbe Verletzung mehrfach vergeben, bevor sie wirklich geheilt ist. Vergiss nicht: Auch dir selbst zu vergeben ist Teil der Herzchakra-Arbeit.
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
          Die folgenden Edelsteine sind die traditionellen Begleiter des Herzchakras und unterst\u00fctzen seine \u00d6ffnung und Heilung:
        </p>
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Rosenquarz</strong> \u2014 Der bekannteste Herzstein \u00fcberhaupt. Sein sanftes Rosa steht f\u00fcr bedingungslose Liebe, Selbstliebe und Sanftmut. Rosenquarz \u00f6ffnet das Herz auf die zarteste Weise und ist ideal f\u00fcr Menschen, die nach Verletzungen wieder lernen m\u00f6chten zu vertrauen. Lege ihn nachts neben dein Bett.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gr\u00fcner Aventurin</strong> \u2014 Der Stein der M\u00f6glichkeiten und des Gl\u00fccks. Er st\u00e4rkt Optimismus, Mitgef\u00fchl und emotionale Ausgeglichenheit. Gr\u00fcner Aventurin hilft, alte emotionale Muster zu l\u00f6sen und das Herz f\u00fcr neue Erfahrungen zu \u00f6ffnen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Jade</strong> \u2014 Seit Jahrtausenden in Asien als &bdquo;Stein des Himmels&ldquo; verehrt. Jade steht f\u00fcr Weisheit, Harmonie und inneren Frieden. Sie f\u00f6rdert die emotionale Reife und hilft, Herz und Verstand in Einklang zu bringen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Malachit</strong> \u2014 Ein kraftvoller Transformationsstein mit intensiv gr\u00fcner Farbe. Malachit bringt verborgene Gef\u00fchle an die Oberfl\u00e4che und unterst\u00fctzt die emotionale Entgiftung. Er ist besonders hilfreich, wenn alte Schmerzen gel\u00f6st werden m\u00fcssen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Smaragd</strong> \u2014 Der k\u00f6nigliche Herzstein, der seit der Antike mit Liebe, Treue und Erneuerung verbunden wird. Smaragd st\u00e4rkt die F\u00e4higkeit zur echten Partnerschaft und f\u00f6rdert die bedingungslose Liebe auf h\u00f6chster Ebene.
            </p>
          </div>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Farben f\u00fcr den Alltag:</strong> Umgebe dich mit Gr\u00fcn und Rosa: Zimmerpflanzen, gr\u00fcne Kleidung, rosa Kerzen oder Blumen. Jede Farbe, die an Natur, Wachstum und Fr\u00fchling erinnert, n\u00e4hrt das Herzchakra. Auch das bewusste Betrachten von gr\u00fcner Natur \u2014 ein Blick aus dem Fenster auf B\u00e4ume, ein Spaziergang im Park \u2014 kann das Herz in Sekundenschnelle beruhigen und \u00f6ffnen.
        </p>
      </section>

      {/* Section 9: Verbindung zu Sternzeichen und Elementen */}
      <section id="verbindung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Verbindung zu Sternzeichen und Elementen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Venus als Herrscherplanet des Herzchakras steht in der Astrologie f\u00fcr Liebe, Harmonie, Sch\u00f6nheit und die F\u00e4higkeit, tiefe Beziehungen einzugehen. Venus zeigt, wie wir lieben, was wir in Partnerschaften suchen und wie wir Sch\u00f6nheit wahrnehmen. Diese Qualit\u00e4ten sind das Herzst\u00fcck des Anahata: die F\u00e4higkeit, offen zu lieben, Harmonie zu schaffen und Sch\u00f6nheit in allem zu sehen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Luftzeichen \u2014 Zwillinge, Waage und Wassermann \u2014 haben eine nat\u00fcrliche Affinit\u00e4t zum Herzchakra, dessen Element Luft ist. Besonders Waage, direkt von Venus regiert, verk\u00f6rpert die Herzchakra-Themen in Reinform: Harmonie, Beziehungen, \u00c4sthetik und das Streben nach Gleichgewicht. Zwillinge bringen die kommunikative Dimension der Herzens-Verbindung ein, und Wassermann repr\u00e4sentiert die universelle, humanit\u00e4re Liebe, die \u00fcber pers\u00f6nliche Beziehungen hinausgeht.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Position von Venus in deinem siderischen Geburtshoroskop gibt tiefe Einblicke in den Zustand und die Potenziale deines Herzchakras. In welchem Zeichen steht deine Venus? In welchem Haus? Welche Aspekte bildet sie zu anderen Planeten? Diese Informationen zeigen, wie du liebst, was dich in Beziehungen herausfordert und wo dein gr\u00f6\u00dftes Heilungspotenzial liegt. In der siderischen Astrologie, die AstroMaster verwendet, kann deine Venus in einem ganz anderen Zeichen stehen als im tropischen System \u2014 was v\u00f6llig neue Perspektiven auf dein Liebesleben er\u00f6ffnen kann.
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
