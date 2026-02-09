"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "4-elemente", title: "Die 4 Elemente in der Astrologie" },
  { id: "feuer", title: "Feuer-Zeichen" },
  { id: "erde", title: "Erde-Zeichen" },
  { id: "luft", title: "Luft-Zeichen" },
  { id: "wasser", title: "Wasser-Zeichen" },
  { id: "balance", title: "Element-Balance" },
  { id: "dominantes-element", title: "Dein dominantes Element" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki/numerologie", label: "Numerologie" },
  { href: "/wiki/aegyptische-dekane", label: "\u00c4gyptische Dekane" },
  { href: "/wiki/human-design", label: "Human Design" },
];

const faqItems = [
  {
    question: "Was ist mein Element in der Astrologie?",
    answer:
      "Dein Element wird nicht nur durch dein Sonnenzeichen bestimmt, sondern durch die Verteilung aller zehn Planeten (Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun, Pluto) auf die vier Elemente Feuer, Erde, Luft und Wasser. Das Element, in dem die meisten Planeten stehen, ist dein dominantes Element. Ein tropischer Widder kann zum Beispiel trotzdem Wasser-dominant sein, wenn viele seiner Planeten in Krebs, Skorpion oder Fische stehen.",
  },
  {
    question: "Kann man mehrere dominante Elemente haben?",
    answer:
      "Ja, es kommt h\u00e4ufig vor, dass zwei Elemente \u00e4hnlich stark vertreten sind. In diesem Fall spricht man von einer Doppel-Dominanz. Zum Beispiel k\u00f6nnte jemand vier Planeten in Feuer-Zeichen und vier in Erde-Zeichen haben. Das erzeugt eine spannende innere Dynamik \u2014 die Feuer-Energie dr\u00e4ngt nach vorne, w\u00e4hrend die Erde-Energie Struktur und Geduld einfordert.",
  },
  {
    question: "Was passiert, wenn ein Element in meinem Chart komplett fehlt?",
    answer:
      "Ein komplett fehlendes Element ist selten, aber m\u00f6glich. Es zeigt ein Entwicklungsfeld an \u2014 eine Energie, die dir nicht nat\u00fcrlich zur Verf\u00fcgung steht und die du bewusst kultivieren darfst. Menschen mit fehlendem Wasser-Element m\u00fcssen zum Beispiel emotionale Intelligenz aktiver entwickeln. Oft zeigt sich eine besondere Faszination f\u00fcr genau die Qualit\u00e4ten des fehlenden Elements.",
  },
  {
    question: "\u00c4ndern sich meine Elemente im Laufe des Lebens?",
    answer:
      "Dein Geburtschart und damit deine Grund-Element-Verteilung sind fix und \u00e4ndern sich nie. Allerdings aktivieren Transite (aktuelle Planetenbewegungen) unterschiedliche Elemente zu verschiedenen Zeiten. So kann ein Feuer-dominanter Mensch in einer Phase mit vielen Wasser-Transiten eine intensivere emotionale Phase erleben. Dein Grundtemperament bleibt aber immer das gleiche.",
  },
  {
    question: "Wie berechnet AstroMaster die Element-Balance?",
    answer:
      "AstroMaster z\u00e4hlt alle zehn Planeten (Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun, Pluto) und ordnet sie dem Element ihres jeweiligen siderischen Zeichens zu. Sonne und Mond erhalten dabei eine st\u00e4rkere Gewichtung, weil sie die pr\u00e4gendsten Kr\u00e4fte im Chart sind. Das Ergebnis zeigt deine prozentuale Verteilung \u00fcber alle vier Elemente \u2014 inklusive einer Einsch\u00e4tzung, welche St\u00e4rken und Schatten daraus entstehen.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Elementar-Analyse"
      subtitle="Feuer, Erde, Luft und Wasser \u2014 die vier Elemente formen die Grundenergie deines Geburtscharts. Erfahre, welches Element dich dominiert, wo deine nat\u00fcrlichen St\u00e4rken liegen und welche Schatten du kennen solltest."
      breadcrumb="Elementar-Analyse"
      sections={sections}
      ctaText="Entdecke deine Element-Balance \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="4-elemente" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 4 Elemente in der Astrologie
        </h2>
        {/* <!-- BILD: \u00dcbersicht der vier Elemente mit Farben und Symbolen --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Seit den fr\u00fchesten Tagen der Astrologie bilden die vier Elemente \u2014 Feuer, Erde, Luft und Wasser \u2014 das
          Fundament jeder Pers\u00f6nlichkeitsanalyse. Sie sind keine abstrakten Konzepte, sondern beschreiben die
          fundamentalen Energieformen, die in jedem Menschen wirken. Jedes der zw\u00f6lf Tierkreiszeichen geh\u00f6rt
          zu genau einem Element, sodass jeweils drei Zeichen eine Element-Gruppe bilden: Widder, L\u00f6we und
          Sch\u00fctze geh\u00f6ren zum Feuer; Stier, Jungfrau und Steinbock zur Erde; Zwillinge, Waage und Wassermann
          zur Luft; Krebs, Skorpion und Fische zum Wasser.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Was viele nicht wissen: Dein Element wird nicht allein durch dein Sonnenzeichen bestimmt. In deinem
          Geburtschart befinden sich zehn Planeten, und jeder steht in einem bestimmten Zeichen \u2014 und damit
          in einem bestimmten Element. Die Verteilung dieser Planeten \u00fcber die vier Elemente ergibt deine
          pers\u00f6nliche Element-Balance. Ein Mensch mit Sonne im Widder (Feuer) kann trotzdem Wasser-dominant
          sein, wenn Mond, Venus, Mars und Jupiter in Wasser-Zeichen stehen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Element-Balance offenbart grundlegende Pers\u00f6nlichkeitstendenzen: Wie du Entscheidungen triffst,
          wie du mit Emotionen umgehst, wie du kommunizierst und was dir Energie gibt oder raubt. Ein
          Feuer-dominanter Mensch reagiert impulsiv und begeistert sich schnell, w\u00e4hrend ein Erde-dominanter
          Mensch gr\u00fcndlich abw\u00e4gt und langfristig plant. Luft-dominante Menschen leben im Kopf, Wasser-dominante
          im Gef\u00fchl.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Das Ziel der Elementar-Analyse ist es, deine nat\u00fcrliche Energieverteilung sichtbar zu machen \u2014
          damit du verstehst, warum bestimmte Lebensbereiche dir leichtfallen und andere dich herausfordern.
          Kein Element ist besser oder schlechter als ein anderes. Jedes hat seine St\u00e4rken und seine Schatten.
          Die Kunst liegt in der bewussten Balance.
        </p>
      </section>

      {/* Section 2 */}
      <section id="feuer" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Feuer-Zeichen: Widder, L\u00f6we, Sch\u00fctze
        </h2>
        <div className="p-4 rounded-xl bg-[#FF6B35]/5 border border-[#FF6B35]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#FF6B35" }}>
            Element Feuer \u2014 Energie, Leidenschaft, Willenskraft
          </p>
        </div>
        {/* <!-- BILD: Feuer-Symbol oder stilisierte Flamme in #FF6B35 --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Feuer ist die Energie des Antriebs, der Leidenschaft und der Sch\u00f6pferkraft. Menschen mit starker
          Feuer-Betonung sind von Natur aus enthusiastisch, mutig und inspirierend. Sie gehen voran, wo andere
          z\u00f6gern, und stecken ihr Umfeld mit ihrer Begeisterung an. Feuer-Energie ist spontan, direkt und
          zukunftsorientiert \u2014 sie will erschaffen, erleben und bewegen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die <strong className="text-white">St\u00e4rken</strong> des Feuer-Elements sind Leidenschaft, Tatendrang,
          Spontanit\u00e4t, Mut, Charisma und die F\u00e4higkeit, andere zu inspirieren. Feuer-Menschen sind geborene
          F\u00fchrungspers\u00f6nlichkeiten und Pioniere. Ihre <strong className="text-white">Schatten</strong> zeigen sich
          als Ungeduld, Aggressivit\u00e4t, Egozentrismus, Burnout-Neigung und die Tendenz, andere zu
          \u00fcberrollen. Feuer verbrennt, wenn es nicht kontrolliert wird.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jedes der drei Feuer-Zeichen dr\u00fcckt diese Energie auf seine eigene Weise aus:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#FF6B35" }}>
              Widder \u2014 Der Funke
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Widder ist das initierende Feuer \u2014 der erste Funke, der eine Explosion ausl\u00f6st. Er steht f\u00fcr
              puren Pioniermut, den Drang, Neues zu beginnen, und den Instinkt, sofort zu handeln. Widder fragt
              nicht um Erlaubnis, er marschiert los. Seine Energie ist roh, direkt und unerschrocken. Er ist
              der Krieger des Tierkreises, der Hindernisse als Einladung sieht.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#FF6B35" }}>
              L\u00f6we \u2014 Die Flamme
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              L\u00f6we ist das bewahrende Feuer \u2014 die stetige Flamme, die w\u00e4rmt und leuchtet. Er steht f\u00fcr
              Kreativit\u00e4t, Selbstausdruck und nat\u00fcrliche F\u00fchrungsqualit\u00e4t. W\u00e4hrend Widder den Funken z\u00fcndet,
              h\u00e4lt L\u00f6we das Feuer am Brennen. Seine Energie ist gro\u00dfz\u00fcgig, warm und magnetisch. Er will
              gesehen werden, nicht aus Eitelkeit, sondern weil Selbstausdruck sein Lebenselixier ist.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#FF6B35" }}>
              Sch\u00fctze \u2014 Das Lagerfeuer
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Sch\u00fctze ist das expansive Feuer \u2014 das Lagerfeuer, um das sich Menschen versammeln, um
              Geschichten zu h\u00f6ren. Er steht f\u00fcr Weisheit, Abenteuer und den Drang nach Freiheit. Sch\u00fctze
              will die Welt verstehen, bereisen und den Horizont erweitern. Seine Energie ist optimistisch,
              philosophisch und grenzenlos. Er ist der Vision\u00e4r, der immer den n\u00e4chsten Gipfel sieht.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="erde" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Erde-Zeichen: Stier, Jungfrau, Steinbock
        </h2>
        <div className="p-4 rounded-xl bg-[#8B7355]/5 border border-[#8B7355]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#8B7355" }}>
            Element Erde \u2014 Stabilit\u00e4t, Struktur, Sinnlichkeit
          </p>
        </div>
        {/* <!-- BILD: Erde-Symbol oder stilisierter Berg/Kristall in #8B7355 --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Erde ist die Energie der Manifestation, der Zuverl\u00e4ssigkeit und der materiellen Welt. Menschen mit
          starker Erde-Betonung sind geerdet, praktisch und geduldig. Sie bauen langfristig auf, sch\u00e4tzen
          Qualit\u00e4t \u00fcber Quantit\u00e4t und bringen Ideen in die physische Realit\u00e4t. Erde-Energie ist sinnlich,
          beharrlich und produktiv \u2014 sie will formen, erschaffen und bewahren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die <strong className="text-white">St\u00e4rken</strong> des Erde-Elements sind Zuverl\u00e4ssigkeit, Geduld,
          praktischer Verstand, Sinnlichkeit, Ausdauer und die F\u00e4higkeit, dauerhafte Strukturen zu schaffen.
          Erde-Menschen sind das R\u00fcckgrat jeder Gemeinschaft. Ihre <strong className="text-white">Schatten</strong> zeigen
          sich als Sturheit, Materialismus, Rigididit\u00e4t, Angst vor Ver\u00e4nderung und die Tendenz, andere
          kontrollieren zu wollen. Erde erstarrt, wenn sie sich nicht bewegt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jedes der drei Erde-Zeichen dr\u00fcckt diese Energie auf seine eigene Weise aus:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#8B7355" }}>
              Stier \u2014 Die fruchtbare Erde
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Stier ist die n\u00e4hrende Erde \u2014 der fruchtbare Boden, auf dem alles gedeiht. Er steht f\u00fcr
              Sinnlichkeit, Stabilit\u00e4t und die Liebe zu Sch\u00f6nheit und Komfort. Stier genie\u00dft das Leben mit
              allen Sinnen: gutes Essen, sch\u00f6ne Musik, weiche Stoffe. Seine Energie ist warm, verl\u00e4sslich und
              best\u00e4ndig. Er baut Sicherheit auf \u2014 nicht aus Angst, sondern weil er wei\u00df, dass gute Dinge
              Zeit brauchen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#8B7355" }}>
              Jungfrau \u2014 Der gepfl\u00fcgte Acker
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Jungfrau ist die geordnete Erde \u2014 der gepfl\u00fcgte Acker, auf dem jedes Samenkorn seinen Platz hat.
              Sie steht f\u00fcr Analyse, Dienst am N\u00e4chsten und Liebe zum Detail. Jungfrau sieht, was andere
              \u00fcbersehen, und optimiert unerm\u00fcdlich. Ihre Energie ist pr\u00e4zise, hilfsbereit und bescheiden.
              Sie will nicht gl\u00e4nzen, sondern n\u00fctzlich sein \u2014 und macht die Welt im Stillen besser.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#8B7355" }}>
              Steinbock \u2014 Der Bergfels
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Steinbock ist die h\u00e4rteste Erde \u2014 der Bergfels, der Jahrtausende \u00fcberdauert. Er steht f\u00fcr
              Ambition, Disziplin und den Bau dauerhafter Strukturen. Steinbock denkt in Jahrzehnten, nicht
              in Tagen. Seine Energie ist ausdauernd, fokussiert und strategisch. Er erklimmt den Berg nicht,
              weil er muss, sondern weil er wei\u00df, dass die Aussicht von oben alles ver\u00e4ndert.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="luft" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Luft-Zeichen: Zwillinge, Waage, Wassermann
        </h2>
        <div className="p-4 rounded-xl bg-[#87CEEB]/5 border border-[#87CEEB]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#87CEEB" }}>
            Element Luft \u2014 Intellekt, Kommunikation, Verbindung
          </p>
        </div>
        {/* <!-- BILD: Luft-Symbol oder stilisierte Wolken/Wind in #87CEEB --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Luft ist die Energie des Denkens, der Kommunikation und der sozialen Verbindung. Menschen mit starker
          Luft-Betonung sind intellektuell neugierig, gesellig und objektiv. Sie leben in der Welt der Ideen,
          sehen Zusammenh\u00e4nge, die anderen verborgen bleiben, und vermitteln zwischen verschiedenen
          Perspektiven. Luft-Energie ist leicht, beweglich und anpassungsf\u00e4hig \u2014 sie will verstehen,
          verbinden und kommunizieren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die <strong className="text-white">St\u00e4rken</strong> des Luft-Elements sind Intellekt, Kommunikationsf\u00e4higkeit,
          Objektivit\u00e4t, Neugier, Anpassungsf\u00e4higkeit und die F\u00e4higkeit, Menschen zusammenzubringen.
          Luft-Menschen sind die Denker und Vermittler der Gesellschaft. Ihre <strong className="text-white">Schatten</strong> zeigen
          sich als Oberfl\u00e4chlichkeit, emotionale Distanz, \u00dcberanalyse, Unentschlossenheit und die Tendenz,
          Gef\u00fchle zu rationalisieren statt zu f\u00fchlen. Luft verweht, wenn sie keinen Anker findet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jedes der drei Luft-Zeichen dr\u00fcckt diese Energie auf seine eigene Weise aus:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#87CEEB" }}>
              Zwillinge \u2014 Die Brise
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Zwillinge ist die spielerische Luft \u2014 die leichte Brise, die \u00fcberall gleichzeitig zu sein scheint.
              Sie stehen f\u00fcr Neugier, Kommunikation und Vielseitigkeit. Zwillinge wollen alles wissen, alles
              ausprobieren und alles erz\u00e4hlen. Ihre Energie ist schnell, geistreich und unterhaltsam. Sie sind
              die Geschichtenerz\u00e4hler des Tierkreises, die jede Unterhaltung beleben und Informationen wie
              Schmetterlinge von Blume zu Blume tragen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#87CEEB" }}>
              Waage \u2014 Der Ausgleich
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Waage ist die harmonisierende Luft \u2014 der sanfte Wind, der alles ins Gleichgewicht bringt. Sie
              steht f\u00fcr \u00c4sthetik, Diplomatie und die Kunst der Beziehung. Waage sieht beide Seiten jeder
              Medaille und strebt nach Fairness und Sch\u00f6nheit. Ihre Energie ist ausgleichend, charmant und
              beziehungsorientiert. Sie erinnert uns daran, dass wahre Intelligenz auch bedeutet, den
              Standpunkt des anderen einzunehmen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#87CEEB" }}>
              Wassermann \u2014 Der Sturm
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Wassermann ist die revolution\u00e4re Luft \u2014 der Sturm, der alte Strukturen hinwegfegt. Er steht f\u00fcr
              Innovation, Humanit\u00e4t und unkonventionelles Denken. Wassermann denkt in Systemen und
              Zukunftsvisionen, nicht in Traditionen. Seine Energie ist elektrisch, vorsorgend und
              visi\u00f6n\u00e4r. Er ist der Erfinder des Tierkreises, der heute schon sieht, was die Welt morgen
              braucht \u2014 und den Mut hat, daf\u00fcr einzustehen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="wasser" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Wasser-Zeichen: Krebs, Skorpion, Fische
        </h2>
        <div className="p-4 rounded-xl bg-[#4169E1]/5 border border-[#4169E1]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#4169E1" }}>
            Element Wasser \u2014 Emotion, Intuition, Tiefe
          </p>
        </div>
        {/* <!-- BILD: Wasser-Symbol oder stilisierte Wellen in #4169E1 --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wasser ist die Energie der Emotion, der Intuition und der seelischen Tiefe. Menschen mit starker
          Wasser-Betonung sind empathisch, intuitiv und emotional intelligent. Sie sp\u00fcren, was andere denken,
          bevor ein Wort gesprochen wird, und navigieren durch die Welt mit einem inneren Kompass, der
          unsichtbar, aber unfehlbar ist. Wasser-Energie ist tief, n\u00e4hrend und heilend \u2014 sie will f\u00fchlen,
          verbinden und transformieren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die <strong className="text-white">St\u00e4rken</strong> des Wasser-Elements sind emotionale Tiefe, Empathie,
          Intuition, F\u00fcrsorge, Heilungsf\u00e4higkeit und der Zugang zu unbewussten Ebenen. Wasser-Menschen sind
          die Heiler und Besch\u00fctzer der Gesellschaft. Ihre <strong className="text-white">Schatten</strong> zeigen
          sich als Launenhaftigkeit, Manipulation, Realit\u00e4tsflucht, \u00dcberempfindlichkeit und die Tendenz
          zu Co-Abh\u00e4ngigkeit. Wasser ertrinkt, wenn es keine Ufer findet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jedes der drei Wasser-Zeichen dr\u00fcckt diese Energie auf seine eigene Weise aus:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#4169E1" }}>
              Krebs \u2014 Die Quelle
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Krebs ist das n\u00e4hrende Wasser \u2014 die klare Quelle, die alles Leben speist. Er steht f\u00fcr
              F\u00fcrsorge, emotionale Tiefe und die Kraft der Familie. Krebs sch\u00fctzt, was ihm heilig ist,
              mit einer Intensit\u00e4t, die \u00fcberrascht. Seine Energie ist warm, m\u00fctterlich und intuitiv. Er
              sp\u00fcrt die Stimmung eines Raumes, bevor er ihn betritt, und schafft \u00fcberall dort Geborgenheit,
              wo er sich niederlasst.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#4169E1" }}>
              Skorpion \u2014 Der Ozean
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Skorpion ist das tiefe Wasser \u2014 der Ozean, dessen wahre Tiefe niemand kennt. Er steht f\u00fcr
              Transformation, Intensit\u00e4t und die F\u00e4higkeit, unter jede Oberfl\u00e4che zu blicken. Skorpion
              kennt keine halben Sachen \u2014 er liebt leidenschaftlich, hasst heftig und transformiert
              alles, was er ber\u00fchrt. Seine Energie ist magnetisch, durchdringend und unbeirrbar. Er ist
              der Ph\u00f6nix des Tierkreises, der durch Zerst\u00f6rung hindurch neue Wahrheit findet.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium mb-3" style={{ color: "#4169E1" }}>
              Fische \u2014 Der Nebel
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Fische ist das grenzenlose Wasser \u2014 der Nebel, der alle Grenzen aufl\u00f6st. Sie stehen f\u00fcr
              Mystik, Mitgef\u00fchl und die Verbindung zum Unsichtbaren. Fische nehmen die Gef\u00fchle anderer
              auf wie ein Schwamm und verwandeln Schmerz in Kunst. Ihre Energie ist tr\u00e4umerisch,
              spirituell und k\u00fcnstlerisch. Sie erinnern uns daran, dass die Realit\u00e4t gr\u00f6\u00dfer ist als das,
              was die Augen sehen k\u00f6nnen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="balance" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Element-Balance: Wenn Elemente zu stark oder zu schwach sind
        </h2>
        {/* <!-- BILD: Waage oder Kreisdiagramm mit vier Elementen in Balance --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die wenigsten Menschen haben eine gleichm\u00e4\u00dfige Verteilung \u00fcber alle vier Elemente. Meistens
          dominieren ein oder zwei Elemente, w\u00e4hrend andere schw\u00e4cher ausgepr\u00e4gt sind. Diese Ungleichgewichte
          sind nicht negativ \u2014 sie machen dich einzigartig. Aber sie erkl\u00e4ren, warum dir bestimmte Dinge
          leichtfallen und andere sich wie Schwimmen gegen den Strom anf\u00fchlen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein \u00dcberschuss an einem Element verst\u00e4rkt sowohl seine St\u00e4rken als auch seine Schatten. Ein Mangel
          zeigt sich als blinder Fleck \u2014 eine Qualit\u00e4t, die dir nicht selbstverst\u00e4ndlich zur Verf\u00fcgung steht
          und die du bewusst entwickeln musst. Hier ein \u00dcberblick \u00fcber die Auswirkungen:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#FF6B35" }}>Zu viel Feuer</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Burnout-Gefahr, aggressive Durchsetzung, Unf\u00e4higkeit zur Ruhe, Konflikte durch Impulsivit\u00e4t,
              st\u00e4ndige Rastlosigkeit und das Gef\u00fchl, nie genug zu tun.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#FF6B35" }}>Zu wenig Feuer</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Motivationsmangel, Passivit\u00e4t, depressive Tendenzen, Schwierigkeiten, Dinge zu initiieren,
              fehlendes Selbstvertrauen und das Gef\u00fchl, unsichtbar zu sein.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#8B7355" }}>Zu viel Erde</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Starrheit, Materialismus, Angst vor Ver\u00e4nderung, \u00fcberm\u00e4\u00dfiges Kontrollbed\u00fcrfnis,
              emotionale Verschlossenheit und das Festhalten an Dingen, die l\u00e4ngst losgelassen werden sollten.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#8B7355" }}>Zu wenig Erde</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Fehlende Erdung, Unpraktischkeit, finanzielles Chaos, Schwierigkeiten, Dinge abzuschlie\u00dfen,
              mangelnde K\u00f6rperwahrnehmung und das Gef\u00fchl, nirgendwo richtig anzukommen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#87CEEB" }}>Zu viel Luft</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              \u00dcberanalyse, Angst durch Gedankenspiralen, emotionale Abkopplung, Entscheidungsunf\u00e4higkeit,
              Nervosit\u00e4t und das Gef\u00fchl, im Kopf gefangen zu sein.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#87CEEB" }}>Zu wenig Luft</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Engstirnigkeit, Kommunikationsprobleme, soziale Isolation, Schwierigkeiten mit abstraktem
              Denken, mangelnde Objektivit\u00e4t und das Festfahren in subjektiven Sichtweisen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#4169E1" }}>Zu viel Wasser</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Emotionale \u00dcberflutung, Co-Abh\u00e4ngigkeit, Opfermentalit\u00e4t, Grenzlosigkeit, Stimmungsschwankungen
              und das Gef\u00fchl, in den Gef\u00fchlen anderer zu ertrinken.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#4169E1" }}>Zu wenig Wasser</h3>
            <p className="text-sm text-muted/90 leading-[1.6]">
              Emotionale K\u00e4lte, Abgetrenntheit von Gef\u00fchlen, Beziehungsschwierigkeiten, mangelnde Empathie,
              Schwierigkeiten beim Trauern und das Gef\u00fchl, innerlich leer zu sein.
            </p>
          </div>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Die gute Nachricht: Bewusstsein ist der erste Schritt zur Balance. Wenn du wei\u00dft, welches Element
          bei dir zu stark oder zu schwach ist, kannst du gezielt gegensteuern \u2014 durch Aktivit\u00e4ten,
          Beziehungen und Gewohnheiten, die das unterrepr\u00e4sentierte Element st\u00e4rken. Ein Mensch mit wenig
          Erde kann zum Beispiel durch regelm\u00e4\u00dfige Routinen, K\u00f6rperarbeit und Naturzeit seine Erdung
          bewusst aufbauen.
        </p>
      </section>

      {/* Section 7 */}
      <section id="dominantes-element" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Dein dominantes Element bestimmen
        </h2>
        {/* <!-- BILD: Beispiel einer Element-Verteilung als Balkendiagramm --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Dein dominantes Element wird bestimmt, indem gez\u00e4hlt wird, wie viele deiner zehn Planeten (Sonne,
          Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun, Pluto) in Zeichen der jeweiligen
          Elemente stehen. Steht deine Sonne in einem Feuer-Zeichen, dein Mond in einem Wasser-Zeichen und
          dein Merkur in einem Erde-Zeichen, erh\u00e4lt jedes dieser Elemente einen Punkt. Das Element mit den
          meisten Punkten ist dein dominantes Element.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Dabei sind nicht alle Planeten gleich gewichtig. Sonne und Mond \u2014 die beiden Lichter \u2014 haben den
          gr\u00f6\u00dften Einfluss auf deine Pers\u00f6nlichkeit und erhalten deshalb eine st\u00e4rkere Gewichtung in der
          Berechnung. Ein Mensch mit Sonne und Mond in Wasser-Zeichen wird die Wasser-Qualit\u00e4ten deutlich
          st\u00e4rker sp\u00fcren als jemand, der nur Uranus und Neptun im Wasser hat. Die pers\u00f6nlichen Planeten
          (Sonne, Mond, Merkur, Venus, Mars) pr\u00e4gen das Alltagserleben, w\u00e4hrend die \u00e4u\u00dferen Planeten
          (Jupiter bis Pluto) eher generationsbedingte und tiefere Muster zeigen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          AstroMaster berechnet deine Element-Balance automatisch und zeigt dir \u00fcbersichtlich, wie die vier
          Elemente in deinem Chart verteilt sind. Du siehst auf einen Blick, welches Element dich dominiert,
          welches unterrepr\u00e4sentiert ist und welche Dynamiken sich daraus f\u00fcr dein Leben ergeben. Diese
          Information ist ein Schl\u00fcssel zum Verst\u00e4ndnis deiner nat\u00fcrlichen St\u00e4rken \u2014 und deiner
          Wachstumsfelder.
        </p>
      </section>

      {/* Section 8: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          H\u00e4ufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
