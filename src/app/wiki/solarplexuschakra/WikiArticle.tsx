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
  { href: "/wiki/sakralchakra", label: "Sakralchakra" },
  { href: "/wiki/herzchakra", label: "Herzchakra" },
];

const faqItems = [
  {
    question: "Wie st\u00e4rke ich mein Solarplexuschakra im Alltag?",
    answer:
      "Das Solarplexuschakra l\u00e4sst sich im Alltag auf vielf\u00e4ltige Weise st\u00e4rken: Core-\u00dcbungen und Planks kr\u00e4ftigen den K\u00f6rperbereich direkt, die Feueratmung (Kapalabhati) aktiviert die innere Kraft, und das Journaling \u00fcber pers\u00f6nliche St\u00e4rken und Erfolge baut Selbstvertrauen auf. Auch gelbe Lebensmittel wie Bananen, Ingwer und Kurkuma sowie der Sonnengruss am Morgen n\u00e4hren das dritte Chakra.",
  },
  {
    question: "Was bedeutet ein \u00fcberaktives Solarplexuschakra?",
    answer:
      "Ein \u00fcberaktives Solarplexuschakra zeigt sich als Kontrollsucht, Perfektionismus, Wutausbr\u00fcche, Dominanzverhalten und die Tendenz, andere zu manipulieren oder zu \u00fcberrollen. K\u00f6rperlich k\u00f6nnen Magengeschw\u00fcre, S\u00e4ureprobleme und Verdauungsst\u00f6rungen auftreten. Die Balance liegt zwischen gesunder Durchsetzungskraft und der F\u00e4higkeit, auch Kontrolle abzugeben und anderen Raum zu lassen.",
  },
  {
    question: "Welche Verbindung hat das Solarplexuschakra zur Astrologie?",
    answer:
      "Dem Solarplexuschakra werden Mars und Sonne als Herrscherplaneten zugeordnet. Mars steht f\u00fcr Willenskraft und Durchsetzung, die Sonne f\u00fcr Selbstbewusstsein und Identit\u00e4t. Die Feuerzeichen Widder, L\u00f6we und Sch\u00fctze haben eine nat\u00fcrliche Affinit\u00e4t zum dritten Chakra. In der siderischen Astrologie k\u00f6nnen die tats\u00e4chlichen Positionen deiner Planeten von den tropischen Werten abweichen.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Solarplexuschakra (Manipura)"
      subtitle="Das dritte Chakra \u2014 Willenskraft, Selbstvertrauen, pers\u00f6nliche Macht."
      breadcrumb="Chakren > Solarplexuschakra"
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
            borderLeft: "4px solid #EAB308",
            backgroundColor: "rgba(234, 179, 8, 0.05)",
          }}
        >
          <p className="text-sm font-medium" style={{ color: "#EAB308" }}>
            Sanskrit: Manipura (&bdquo;Juwelenstadt&ldquo;) | Position: Oberbauch, Magenregion | Farbe: Gelb | Element: Feuer | Planet: Mars / Sonne | Mantra: RAM
          </p>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          Manipura stammt aus den Sanskrit-W\u00f6rtern &bdquo;Mani&ldquo; (Juwel, Edelstein) und &bdquo;Pura&ldquo; (Stadt, Ort). W\u00f6rtlich \u00fcbersetzt bedeutet es &bdquo;Stadt der Juwelen&ldquo; oder &bdquo;Juwelenstadt&ldquo;. Dieser poetische Name verweist auf das strahlende, leuchtende Wesen dieses Chakras \u2014 es ist das innere Feuer, das wie eine Sonne in deinem Kern brennt und dein gesamtes Sein mit Energie, Willenskraft und Selbstvertrauen durchstrahlt.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In der tantrischen Tradition wird das Solarplexuschakra als zehnbl\u00e4ttriger Lotus dargestellt. Die zehn Bl\u00e4tter symbolisieren zehn Lebensenergien (Pranas), die vom Manipura aus im gesamten K\u00f6rper verteilt werden. Als Sitz des Verdauungsfeuers (Agni) verwandelt es Nahrung in Energie, Erfahrungen in Weisheit und Herausforderungen in Wachstum. Es ist das Chakra der Transformation \u2014 alles, was in dein Leben kommt, wird hier verarbeitet und in nutzbare Kraft umgewandelt.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Manipura ist auch eng mit dem Konzept des &bdquo;inneren Gurus&ldquo; verbunden: der inneren Stimme, die dir sagt, wer du bist und was du im Leben willst. Wenn dieses Chakra stark und klar ist, kennst du deine Identit\u00e4t, stehst zu deinen Entscheidungen und l\u00e4sst dich nicht von anderen aus deiner Mitte bringen. Es ist das Zentrum deiner pers\u00f6nlichen Macht \u2014 nicht im Sinne von Macht \u00fcber andere, sondern im Sinne von Selbstbestimmung und Souver\u00e4nit\u00e4t.
        </p>
      </section>

      {/* Section 2: Position und Farbe */}
      <section id="position-farbe" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Position und Farbe
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Solarplexuschakra befindet sich im Oberbauch, in der Magenregion, oberhalb des Nabels und unterhalb des Brustbeins. Der Name &bdquo;Solarplexus&ldquo; stammt aus der Anatomie und bezeichnet das gr\u00f6\u00dfte vegetative Nervengeflecht des K\u00f6rpers \u2014 ein Netzwerk aus Nervenfasern, das die Verdauungsorgane steuert. Es ist kein Zufall, dass wir &bdquo;Bauchgef\u00fchl&ldquo; sagen: Dieser K\u00f6rperbereich reagiert unmittelbar auf Stress, Angst und Freude.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Farbe des Solarplexuschakras ist ein strahlendes Gelb \u2014 die Farbe der Sonne, des Lichts und der Klarheit. Gelb ist die Farbe mit der h\u00f6chsten Leuchtkraft im sichtbaren Spektrum und steht f\u00fcr Intellekt, Optimismus und Energie. Es ist die Farbe des Morgens, wenn die Sonne aufgeht und die Welt in goldenes Licht taucht. Diese sonnige Qualit\u00e4t spiegelt das Wesen des Manipura wider: Es ist das Zentrum deiner Ausstrahlung und deiner inneren Sonne.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Wenn du dich kraftlos, unsicher oder fremdbestimmt f\u00fchlst, kann die Visualisierung einer strahlend gelben Sonne in deiner Magenregion helfen, dein inneres Feuer wieder zu entfachen. Stell dir vor, wie diese Sonne mit jedem Atemzug gr\u00f6\u00dfer und w\u00e4rmer wird und ihren goldenen Schein in deinen gesamten K\u00f6rper sendet.
        </p>
      </section>

      {/* Section 3: Kernthemen */}
      <section id="kernthemen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Kernthemen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Solarplexuschakra ist das Zentrum deiner pers\u00f6nlichen Macht, deines Willens und deiner Identit\u00e4t. Es bestimmt, wie du dich in der Welt behauptest und wie du mit Herausforderungen umgehst:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span style={{ color: "#EAB308" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Willenskraft und Entschlossenheit</strong> \u2014 Die F\u00e4higkeit, Entscheidungen zu treffen und sie durchzuziehen, auch wenn es unbequem wird. Das innere Feuer, das dich antreibt.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EAB308" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Selbstvertrauen und Selbstwert</strong> \u2014 Das tiefe Wissen um den eigenen Wert, unabh\u00e4ngig von \u00e4u\u00dferer Best\u00e4tigung oder Leistung. Das Gef\u00fchl, genug zu sein.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EAB308" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Pers\u00f6nliche Macht und Souver\u00e4nit\u00e4t</strong> \u2014 Die F\u00e4higkeit, das eigene Leben bewusst zu gestalten, Verantwortung zu \u00fcbernehmen und sich nicht als Opfer der Umst\u00e4nde zu sehen.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EAB308" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Transformation und Verdauung</strong> \u2014 Sowohl die physische Verdauung von Nahrung als auch die emotionale Verarbeitung von Erfahrungen. Das Manipura ist das innere Feuer, das alles transformiert.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#EAB308" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Identit\u00e4t und Individualit\u00e4t</strong> \u2014 Das klare Bewusstsein dar\u00fcber, wer du bist, was du willst und wof\u00fcr du stehst. Die F\u00e4higkeit, dich von Erwartungen anderer zu l\u00f6sen.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Ausf\u00fchrliche Beschreibung */}
      <section id="beschreibung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Ausf\u00fchrliche Beschreibung
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Solarplexuschakra entwickelt sich prim\u00e4r zwischen dem 18. Lebensmonat und dem 4. Lebensjahr \u2014 in der Phase, die in der Psychologie als &bdquo;Autonomiephase&ldquo; oder umgangssprachlich als &bdquo;Trotzphase&ldquo; bekannt ist. Es ist die Zeit, in der ein Kind beginnt, seinen eigenen Willen zu entdecken und &bdquo;Nein&ldquo; zu sagen. Wie die Umgebung auf diese nat\u00fcrliche Willensbildung reagiert, pr\u00e4gt das Solarplexuschakra f\u00fcr das gesamte Leben. Wurde der Wille des Kindes respektiert und in gesunde Bahnen gelenkt, entwickelt sich ein starkes, ausgeglichenes drittes Chakra. Wurde er gebrochen, bestraft oder l\u00e4cherlich gemacht, entstehen tiefe Blockaden im Bereich Selbstvertrauen und Selbstbehauptung.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Manipura ist das Chakra der Transformation. Wie das Verdauungsfeuer Nahrung in Energie umwandelt, so transformiert das Solarplexuschakra Lebenserfahrungen in Weisheit und Reife. Jede Herausforderung, die du meisterst, jede Angst, die du \u00fcberwindest, und jede Entscheidung, die du bewusst triffst, st\u00e4rkt dein inneres Feuer. Deshalb f\u00fchlen sich Menschen mit einem starken dritten Chakra h\u00e4ufig wie &bdquo;Stehaufm\u00e4nnchen&ldquo; \u2014 sie fallen hin, stehen auf und gehen weiter, weil ihr inneres Feuer sie antreibt.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In der modernen Gesellschaft wird das Solarplexuschakra auf besondere Weise herausgefordert. Einerseits werden wir st\u00e4ndig aufgefordert, mehr zu leisten, uns zu beweisen und unseren Wert durch Erfolge zu definieren \u2014 das kann zu einem \u00fcberaktiven Manipura f\u00fchren mit Kontrollsucht und Burnout. Andererseits f\u00fchlen sich viele Menschen machtlos gegen\u00fcber globalen Krisen, politischen Systemen und wirtschaftlichen Strukturen \u2014 was das Solarplexuschakra schw\u00e4cht und ein Gef\u00fchl der Hilflosigkeit erzeugt. Die Kunst liegt darin, die eigene pers\u00f6nliche Macht bewusst und verantwortungsvoll zu leben, ohne andere zu dominieren oder sich selbst zu verlieren.
        </p>
      </section>

      {/* Section 5: Zeichen f\u00fcr Blockade */}
      <section id="blockade" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Zeichen f\u00fcr Blockade
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein blockiertes oder unausgeglichenes Solarplexuschakra kann sich sowohl als Unteraktivit\u00e4t (zu wenig Feuer) als auch als \u00dcberaktivit\u00e4t (zu viel Feuer) \u00e4u\u00dfern. Beide Extreme zeigen eine Dysbalance im dritten Chakra:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Geringes Selbstwertgef\u00fchl</strong> \u2014 Das st\u00e4ndige Gef\u00fchl, nicht gut genug zu sein, sich beweisen zu m\u00fcssen oder den Anforderungen des Lebens nicht gewachsen zu sein.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Machtlosigkeit und Opfermentalit\u00e4t</strong> \u2014 Das Gef\u00fchl, dem Leben ausgeliefert zu sein, keine Kontrolle \u00fcber die eigene Situation zu haben und immer den Umst\u00e4nden die Schuld zu geben.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Kontrollsucht und Dominanz</strong> \u2014 Der Zwang, alles und jeden kontrollieren zu m\u00fcssen, \u00dcberheblichkeit und die Unfähigkeit, Aufgaben zu delegieren oder Schwäche zu zeigen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Verdauungsprobleme</strong> \u2014 Magenschmerzen, Sodbrennen, Bl\u00e4hungen, Reizdarmsyndrom und andere Verdauungsst\u00f6rungen sind klassische Zeichen eines gestörten Manipura.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Magengeschw\u00fcre</strong> \u2014 Die Redewendung &bdquo;etwas liegt mir im Magen&ldquo; ist w\u00f6rtlich zu nehmen: Unverarbeitete Konflikte und unterdr\u00fcckter \u00c4rger manifestieren sich im Magenbereich.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Perfektionismus</strong> \u2014 Der Zwang, alles perfekt machen zu m\u00fcssen, aus Angst, bei Fehlern den eigenen Wert zu verlieren. Perfektionismus ist oft eine Maske f\u00fcr tiefe Unsicherheit.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Wutausbr\u00fcche</strong> \u2014 Unkontrollierte Wut, die pl\u00f6tzlich ausbricht, oft als Folge von l\u00e4nger unterdr\u00fccktem \u00c4rger und dem Gef\u00fchl, nicht geh\u00f6rt zu werden.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Entscheidungsunf\u00e4higkeit</strong> \u2014 Die Angst, falsche Entscheidungen zu treffen, f\u00fchrt dazu, gar keine Entscheidungen mehr zu treffen und in einer L\u00e4hmung zu verharren.
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
          Ein ausgeglichenes Solarplexuschakra zeigt sich als ruhige, innere St\u00e4rke \u2014 nicht als laute Dominanz, sondern als stille Gewissheit. Du wei\u00dft, wer du bist, und musst es niemandem beweisen:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gesundes Selbstvertrauen</strong> \u2014 Ein ruhiges, stabiles Wissen um den eigenen Wert, das nicht von \u00e4u\u00dferer Best\u00e4tigung abh\u00e4ngt. Du wei\u00dft, was du kannst, und akzeptierst, was du nicht kannst.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Entscheidungsfreude</strong> \u2014 Du triffst Entscheidungen z\u00fcgig und stehst zu ihnen, auch wenn sie sich als falsch herausstellen. Fehler sind Lernchancen, keine Katastrophen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Innere St\u00e4rke und Resilienz</strong> \u2014 Du l\u00e4sst dich von R\u00fcckschl\u00e4gen nicht umwerfen, sondern nutzt sie als Treibstoff f\u00fcr Wachstum. Dein inneres Feuer brennt stetig.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gute Verdauung</strong> \u2014 Dein K\u00f6rper verarbeitet Nahrung effektiv und dein Stoffwechsel funktioniert harmonisch. Das Verdauungsfeuer brennt optimal.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Durchsetzungskraft ohne Aggression</strong> \u2014 Du kannst f\u00fcr dich einstehen, Grenzen setzen und deine Meinung vertreten, ohne andere zu verletzen oder zu dominieren.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Verantwortungsbewusstsein</strong> \u2014 Du \u00fcbernimmst Verantwortung f\u00fcr dein Leben, deine Entscheidungen und ihre Konsequenzen, ohne andere daf\u00fcr verantwortlich zu machen.
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
          Das Solarplexuschakra wird durch Feuer-Elemente aktiviert: W\u00e4rme, Bewegung, Willens\u00fcbungen und alles, was dein inneres Feuer entfacht:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EAB308" }}>
              Core-\u00dcbungen und Planks
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Planks, Sit-ups, Crunches und Bootshaltung (Navasana) kr\u00e4ftigen die Bauchmuskulatur und aktivieren das Solarplexuschakra direkt. Halte die Plank-Position und sp\u00fcre, wie dein inneres Feuer mit jeder Sekunde st\u00e4rker wird. Die k\u00f6rperliche Anstrengung \u00fcbertr\u00e4gt sich auf die mentale St\u00e4rke.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EAB308" }}>
              Kapalabhati-Atemtechnik (Feueratem)
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Setze dich aufrecht hin und atme kr\u00e4ftig durch die Nase aus, wobei du den Bauch ruckartig nach innen ziehst. Die Einatmung geschieht passiv. Wiederhole dies 20-30 Mal in schneller Folge. Kapalabhati erw\u00e4rmt den K\u00f6rper, reinigt die Energiekan\u00e4le und entfacht das Verdauungsfeuer. Drei Runden morgens auf n\u00fcchternen Magen sind ideal.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EAB308" }}>
              Gelbe Lebensmittel und Gew\u00fcrze
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Bananen, Ingwer, Kurkuma, Zitronen, Ananas, Mais und gelbe Paprika n\u00e4hren das dritte Chakra. Besonders Ingwer und Kurkuma mit ihrer w\u00e4rmenden Wirkung st\u00e4rken das Verdauungsfeuer. Ein Glas warmes Wasser mit Ingwer und Zitrone am Morgen ist ein einfaches, aber kraftvolles Manipura-Ritual.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EAB308" }}>
              Sonnengruss am Morgen
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Der Sonnengruss (Surya Namaskar) ist die Yoga-Sequenz des Solarplexuschakras. Praktiziere ihn morgens bei Sonnenaufgang, idealerweise im Freien. Die Kombination aus Bewegung, Atmung und Sonnenenergie ist eine der wirksamsten Methoden, das Manipura zu aktivieren und den Tag mit Kraft zu beginnen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#EAB308" }}>
              Journaling und RAM Mantra
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Schreibe t\u00e4glich drei pers\u00f6nliche St\u00e4rken oder Erfolge auf \u2014 egal wie klein. Diese Praxis trainiert das Gehirn, den Fokus auf die eigene Kraft zu legen statt auf Mangel. Kombiniere das Journaling mit dem Chanten des Bija-Mantras &bdquo;RAM&ldquo; (ausgesprochen wie &bdquo;RAAM&ldquo;), das im Bauchraum vibriert und das innere Feuer n\u00e4hrt.
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
          Die folgenden Edelsteine resonieren mit der Frequenz des Solarplexuschakras und unterst\u00fctzen seine St\u00e4rkung:
        </p>
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Citrin</strong> \u2014 Der &bdquo;Sonnendelstein&ldquo; und wichtigste Solarplexus-Kristall. Er f\u00f6rdert Selbstvertrauen, Optimismus und Durchsetzungskraft. Citrin wird auch &bdquo;Kaufmannsstein&ldquo; genannt, da er Wohlstand und Erfolg anziehen soll. Ideal als Schmuck oder auf dem Schreibtisch.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Tigerauge</strong> \u2014 Der Stein der Willenskraft und des Mutes. Seine goldbraunen Streifen erinnern an das Auge eines Tigers: fokussiert, entschlossen, furchtlos. Tigerauge hilft bei Entscheidungen und st\u00e4rkt die innere \u00dcberzeugung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Bernstein</strong> \u2014 Uraltes, versteinertes Baumharz, das die Energie der Sonne gespeichert hat. Bernstein w\u00e4rmt, sch\u00fctzt und l\u00f6st Blockaden im Energiefluss. Er ist seit Jahrtausenden als Heil- und Schutzstein bekannt.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Pyrit</strong> \u2014 Auch &bdquo;Katzengold&ldquo; genannt, steht Pyrit f\u00fcr F\u00fclle, Willenskraft und Schutz. Sein metallischer Glanz erinnert an Gold und symbolisiert den inneren Reichtum und die unzer\u00f6rbare St\u00e4rke des Manipura.
            </p>
          </div>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Farben f\u00fcr den Alltag:</strong> Bringe Gelb in dein Leben: gelbe Kleidung, Sonnenblumen, goldene Accessoires oder ein gelbes Notizbuch f\u00fcr dein St\u00e4rken-Journaling. Auch warmes Gold und helles Senfgelb aktivieren das dritte Chakra. Sonnenlicht ist die nat\u00fcrlichste und st\u00e4rkste Quelle der Manipura-Energie \u2014 verbringe t\u00e4glich mindestens 15 Minuten im Sonnenlicht.
        </p>
      </section>

      {/* Section 9: Verbindung zu Sternzeichen und Elementen */}
      <section id="verbindung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Verbindung zu Sternzeichen und Elementen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Dem Solarplexuschakra werden gleich zwei Himmelsk\u00f6rper zugeordnet: Mars und Sonne. Mars steht f\u00fcr Willenskraft, Kampfgeist und die F\u00e4higkeit, f\u00fcr sich einzustehen. Die Sonne repr\u00e4sentiert Identit\u00e4t, Selbstbewusstsein und die strahlende Kraft der Pers\u00f6nlichkeit. Zusammen bilden sie die astrologische Signatur des Manipura: die Kraft, sich selbst zu kennen und den eigenen Weg mit Entschlossenheit zu gehen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Feuerzeichen \u2014 Widder, L\u00f6we und Sch\u00fctze \u2014 haben eine nat\u00fcrliche Affinit\u00e4t zum Solarplexuschakra. Widder, direkt von Mars regiert, verk\u00f6rpert den rohen Willen und die Pionierkraft des dritten Chakras. L\u00f6we, von der Sonne regiert, repr\u00e4sentiert das strahlende Selbstbewusstsein und die kreative Macht des Manipura. Sch\u00fctze bringt die expansive, vison\u00e4re Dimension ein: den Glauben an sich selbst und die eigene Mission.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Position von Mars und Sonne in deinem siderischen Geburtshoroskop gibt wichtige Hinweise auf den Zustand deines Solarplexuschakras. Ein starker Mars deutet auf nat\u00fcrliche Willenskraft und Durchsetzungsf\u00e4higkeit hin, w\u00e4hrend ein herausgeforderter Mars auf Bereiche hinweisen kann, in denen bewusste Arbeit am dritten Chakra hilfreich ist. In der siderischen Astrologie verschieben sich die Planetenpositionen gegen\u00fcber dem tropischen System \u2014 entdecke dein echtes Profil, um zu verstehen, wie deine pers\u00f6nliche Kraft wirklich aufgestellt ist.
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
