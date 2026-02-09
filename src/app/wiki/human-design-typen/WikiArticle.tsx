"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "generator", title: "Generator" },
  { id: "manifestierender-generator", title: "Manifestierender Generator" },
  { id: "projektor", title: "Projektor" },
  { id: "manifestor", title: "Manifestor" },
  { id: "reflektor", title: "Reflektor" },
  { id: "deinen-typ-leben", title: "Deinen Typ leben" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/human-design", label: "Human Design Grundlagen" },
  { href: "/wiki/human-design-zentren", label: "Die 9 Zentren" },
  { href: "/wiki/strategie-autoritaet", label: "Strategie & Autorit\u00e4t" },
];

const faqItems = [
  {
    question: "Welcher Human Design Typ bin ich?",
    answer:
      "Dein Typ wird durch die definierten Zentren und Kan\u00e4le in deinem BodyGraph bestimmt. Es gibt f\u00fcnf Typen: Generator, Manifestierender Generator, Projektor, Manifestor und Reflektor. F\u00fcr die Berechnung brauchst du dein exaktes Geburtsdatum, deine Geburtszeit und deinen Geburtsort. AstroMaster berechnet deinen Typ automatisch in der Pro-Analyse.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Generator und Manifestierendem Generator?",
    answer:
      "Beide haben ein definiertes Sakralzentrum, aber der Manifestierende Generator hat zus\u00e4tzlich eine direkte oder indirekte Verbindung vom Sakral (oder einem Motor) zur Kehle. Das gibt ihm die F\u00e4higkeit, schneller zu manifestieren und mehrere Projekte gleichzeitig zu verfolgen. Generatoren arbeiten eher schrittweise und fokussiert auf eine Sache.",
  },
  {
    question: "Was bedeutet das Nicht-Selbst-Thema?",
    answer:
      "Das Nicht-Selbst-Thema ist das Gef\u00fchl, das entsteht, wenn du nicht im Einklang mit deinem Typ lebst. F\u00fcr Generatoren ist es Frustration, f\u00fcr Manifestoren Wut, f\u00fcr Projektoren Bitterkeit, f\u00fcr Manifestierende Generatoren eine Mischung aus Frustration und Wut, und f\u00fcr Reflektoren Entt\u00e4uschung. Diese Gef\u00fchle sind Wegweiser \u2014 sie zeigen dir, dass du vom Kurs abgekommen bist.",
  },
  {
    question: "Kann ich meinen Human Design Typ \u00e4ndern?",
    answer:
      "Nein, dein Typ ist bei der Geburt festgelegt und bleibt dein ganzes Leben lang gleich. Was sich ver\u00e4ndert, ist dein Verst\u00e4ndnis und deine F\u00e4higkeit, im Einklang mit deinem Design zu leben. Diesen Prozess nennt man Dekonditionierung \u2014 das Abl\u00f6sen von angelernten Verhaltensmustern, die nicht deiner wahren Natur entsprechen.",
  },
  {
    question: "Warum sind Reflektoren so selten?",
    answer:
      "Reflektoren haben kein einziges definiertes Zentrum \u2014 das bedeutet, alle 36 Kan\u00e4le m\u00fcssen offen sein. Statistisch ist das extrem selten und betrifft nur etwa 1% der Bev\u00f6lkerung. Reflektoren dienen als Spiegel der Gesellschaft und zeigen durch ihre Offenheit, wie es einer Gemeinschaft wirklich geht.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 5 Human Design Typen"
      subtitle="Generator, Manifestierender Generator, Projektor, Manifestor und Reflektor \u2014 jeder Mensch geh\u00f6rt zu einem der f\u00fcnf Grundtypen. Dein Typ bestimmt, wie du mit der Welt interagierst und welche Strategie dich in den Flow bringt."
      breadcrumb="Human Design Typen"
      sections={sections}
      ctaText="Entdecke deinen Human Design Typ \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Generator */}
      <section id="generator" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Generator
        </h2>
        <div className="p-4 rounded-xl bg-[#E8A838]/5 border border-[#E8A838]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#E8A838" }}>
            ~37% der Bev&ouml;lkerung &bull; Strategie: Reagieren &bull; Signatur:
            Befriedigung &bull; Nicht-Selbst: Frustration
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Generatoren sind die Lebenskraft der Menschheit. Mit ihrem definierten
          Sakralzentrum verf&uuml;gen sie &uuml;ber eine nachhaltige, kraftvolle Energie,
          die sie Tag f&uuml;r Tag antreibt \u2014 vorausgesetzt, sie investieren diese
          Energie in Dinge, die sie wirklich befriedigen. Ihre Aura ist offen und
          umh&uuml;llend: Sie zieht das Leben buchst&auml;blich zu sich heran. Menschen in
          der N&auml;he eines Generators sp&uuml;ren dessen warme, einladende Pr&auml;senz.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Strategie des Generators lautet: <strong className="text-white">Warten, um zu reagieren.</strong> Das
          bedeutet nicht passives Herumsitzen, sondern eine aufmerksame Pr&auml;senz im
          Leben. Der Generator wartet auf Impulse von au&szlig;en \u2014 ein Gespr&auml;ch, ein
          Angebot, eine Gelegenheit \u2014 und sp&uuml;rt dann in seinen Bauch hinein: Sagt
          das Sakral &bdquo;Uh-huh&ldquo; (Ja) oder &bdquo;Uh-uh&ldquo; (Nein)? Diese k&ouml;rperliche Reaktion ist
          zuverl&auml;ssiger als jede mentale Analyse.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wenn Generatoren auf ihr sakrales Bauchgef&uuml;hl h&ouml;ren und nur das tun,
          was sich richtig anf&uuml;hlt, erleben sie tiefe Befriedigung \u2014 das ist ihre
          Signatur. Sie werden zu Meistern in ihrem Fach und strahlen eine
          magnetische Zufriedenheit aus, die andere inspiriert. Im Gegensatz dazu
          entsteht Frustration, wenn ein Generator initiiert statt reagiert, oder
          wenn er in einem Job feststeckt, den sein Sakral nicht bejaht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Der K&ouml;rper des Generators ist wie ein Akku: Morgens voll aufgeladen, abends
          leer \u2014 und dann braucht er Schlaf, um sich wieder aufzuladen. Anders als
          Nicht-Sakral-Typen kann ein Generator stundenlang durcharbeiten, ohne
          m&uuml;de zu werden, solange die Arbeit sein Sakral befriedigt. Ein Generator,
          der seinen Rhythmus ehrt, wird zur unstoppbaren Naturgewalt.
        </p>
      </section>

      {/* Section 2: Manifestierender Generator */}
      <section id="manifestierender-generator" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Manifestierender Generator
        </h2>
        <div className="p-4 rounded-xl bg-[#D4764E]/5 border border-[#D4764E]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#D4764E" }}>
            ~33% der Bev&ouml;lkerung &bull; Strategie: Reagieren, dann informieren &bull;
            Signatur: Befriedigung &bull; Nicht-Selbst: Frustration &amp; Wut
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Manifestierende Generatoren (MG) sind die Multi-Talente der Menschheit.
          Sie vereinen die nachhaltige Sakral-Energie des Generators mit der
          Manifestations-Geschwindigkeit des Manifestors. Sie bilden mit etwa 33%
          den zweitgr&ouml;&szlig;ten Anteil der Bev&ouml;lkerung und sind leicht daran zu
          erkennen, dass sie mehrere Dinge gleichzeitig verfolgen, schnell arbeiten
          und oft scheinbar chaotische Lebenswege haben.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ihre Strategie ist zweistufig: <strong className="text-white">Erst reagieren, dann informieren.</strong> Wie
          Generatoren warten MGs auf Impulse von au&szlig;en und pr&uuml;fen ihr sakrales
          Bauchgef&uuml;hl. Aber bevor sie dann losmarschieren \u2014 und MGs sind schnell im
          Losmarschieren \u2014 sollten sie ihr Umfeld informieren. Das reduziert
          Widerstand und sorgt daf&uuml;r, dass niemand &uuml;berrannt wird.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Der Weg eines MG ist selten linear. Sie springen von Interesse zu
          Interesse, probieren Dinge aus und lassen sie wieder fallen \u2014 und das ist
          korrekt. Jeder scheinbare &bdquo;Abweg&ldquo; liefert Puzzleteile, die sich sp&auml;ter zu
          einem einzigartigen Gesamtbild zusammenf&uuml;gen. Der MG-Weg sieht von au&szlig;en
          wie ein Zickzack aus, ist aber intern eine perfekte Spirale.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Ihre Aura ist offen und umh&uuml;llend wie die des Generators, aber mit einem
          zus&auml;tzlichen Manifestor-Impuls. MGs sp&uuml;ren oft ein inneres Beschleunigen:
          Sobald das Sakral antwortet, wollen sie sofort handeln. Die gr&ouml;&szlig;te Falle
          f&uuml;r MGs ist es, etwas zu beginnen, ohne vorher das sakrale &bdquo;Uh-huh&ldquo;
          abzuwarten. Dann entsteht die doppelte Frustration-und-Wut-Dynamik ihres
          Nicht-Selbst-Themas.
        </p>
      </section>

      {/* Section 3: Projektor */}
      <section id="projektor" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Projektor
        </h2>
        <div className="p-4 rounded-xl bg-[#6A9EC8]/5 border border-[#6A9EC8]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#6A9EC8" }}>
            ~20% der Bev&ouml;lkerung &bull; Strategie: Auf Einladung warten &bull;
            Signatur: Erfolg &bull; Nicht-Selbst: Bitterkeit
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Projektoren sind die Guides, Berater und F&uuml;hrungspers&ouml;nlichkeiten der
          neuen Zeit. Mit etwa 20% der Bev&ouml;lkerung stellen sie eine wachsende
          Gruppe dar, deren Rolle immer wichtiger wird. Projektoren haben kein
          definiertes Sakralzentrum \u2014 sie verf&uuml;gen also nicht &uuml;ber die konstante
          Arbeitsenergie eines Generators. Daf&uuml;r haben sie etwas, das kein anderer
          Typ hat: eine fokussierte, durchdringende Aura, die tief in andere
          Menschen hineinblicken kann.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Strategie des Projektors lautet: <strong className="text-white">Auf die Einladung warten.</strong> Das ist f&uuml;r
          viele Projektoren die gr&ouml;&szlig;te Herausforderung, denn sie sehen so klar, was
          andere besser machen k&ouml;nnten. Aber ungebetene Ratschl&auml;ge erzeugen
          Widerstand. Erst wenn ein Projektor eingeladen wird \u2014 zur Arbeit, in eine
          Beziehung, zu einem Projekt \u2014 wird seine Weisheit geh&ouml;rt und gesch&auml;tzt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wenn Projektoren erkannt und eingeladen werden, erleben sie ihren
          Signaturzustand: Erfolg. Nicht der Erfolg im konventionellen Sinn von
          Leistung und Geld, sondern das Gef&uuml;hl, gesehen und wertgesch&auml;tzt zu
          werden f&uuml;r das, was sie am besten k&ouml;nnen \u2014 andere f&uuml;hren und leiten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im Nicht-Selbst entwickeln Projektoren Bitterkeit. Wenn sie immer wieder
          &uuml;bergangen, nicht erkannt oder als &bdquo;faul&ldquo; abgestempelt werden, entsteht ein
          tiefer Groll. Projektoren brauchen Ruhezeiten, m&uuml;ssen ihre Energie
          schonend einsetzen und d&uuml;rfen sich nicht im Generator-Rhythmus der
          9-to-5-Welt aufreiben. Ihr Energie-Management ist der Schl&uuml;ssel.
        </p>
      </section>

      {/* Section 4: Manifestor */}
      <section id="manifestor" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Manifestor
        </h2>
        <div className="p-4 rounded-xl bg-[#C45C5C]/5 border border-[#C45C5C]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#C45C5C" }}>
            ~8% der Bev&ouml;lkerung &bull; Strategie: Informieren &bull; Signatur: Frieden
            &bull; Nicht-Selbst: Wut
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Manifestoren sind die Initiatoren der Menschheit. Sie sind der einzige
          Typ, der daf&uuml;r designt ist, Dinge eigenst&auml;ndig in Gang zu setzen, ohne
          auf &auml;u&szlig;ere Impulse zu warten. Mit etwa 8% der Bev&ouml;lkerung sind sie
          relativ selten. Historisch waren Manifestoren die K&ouml;nige, Krieger und
          revolution&auml;ren F&uuml;hrer \u2014 Menschen, die die Welt durch ihren Willen formten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ihre Aura ist geschlossen und abweisend \u2014 aber das ist kein Makel,
          sondern ein nat&uuml;rlicher Schutzmechanismus. Die geschlossene Aura erlaubt
          es dem Manifestor, unabh&auml;ngig und ohne &auml;u&szlig;ere Beeinflussung zu handeln.
          Andere Menschen sp&uuml;ren diese Aura und treten instinktiv zur&uuml;ck, was dem
          Manifestor den Raum gibt, den er braucht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Strategie des Manifestors ist: <strong className="text-white">Informieren, bevor du handelst.</strong> Nicht um
          Erlaubnis bitten \u2014 das w&uuml;rde gegen seine Natur gehen \u2014 sondern
          informieren. Wenn ein Manifestor einfach losmarschiert, ohne sein Umfeld
          einzuweihen, erzeugt er Widerstand, Kontrolle und Konflikte. Informieren
          ist die Br&uuml;cke, die den Manifestor mit seiner Umwelt verbindet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im korrekt gelebten Zustand erlebt der Manifestor Frieden. Nicht Frieden
          im Sinne von Stillstand, sondern die tiefe Ruhe eines Menschen, der
          wei&szlig;, dass er seinen Impuls frei leben darf. Im Nicht-Selbst wird aus
          dieser Kraft Wut \u2014 eine Wut, die entsteht, wenn der Manifestor kontrolliert,
          eingeschr&auml;nkt oder in ein Regelwerk gezw&auml;ngt wird. Viele Manifestoren
          erlebten als Kinder, dass ihre Initiative bestraft wurde, und trugen
          diese Wut ins Erwachsenenleben.
        </p>
      </section>

      {/* Section 5: Reflektor */}
      <section id="reflektor" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Reflektor
        </h2>
        <div className="p-4 rounded-xl bg-[#9B7ED8]/5 border border-[#9B7ED8]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#9B7ED8" }}>
            ~1% der Bev&ouml;lkerung &bull; Strategie: Mondzyklus abwarten &bull;
            Signatur: &Uuml;berraschung &bull; Nicht-Selbst: Entt&auml;uschung
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Reflektoren sind die seltensten und ungew&ouml;hnlichsten Menschen im Human
          Design. Mit nur etwa 1% der Bev&ouml;lkerung sind sie ein seltenes Ph&auml;nomen.
          Ihr Markenzeichen: Kein einziges Zentrum ist definiert. Das bedeutet, sie
          haben keine feste, verl&auml;ssliche Energiequelle. Stattdessen nehmen sie die
          Energien ihrer Umgebung auf, verst&auml;rken sie und spiegeln sie zur&uuml;ck. Sie
          sind buchst&auml;blich ein Spiegel der Gesellschaft.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Aura eines Reflektors ist resistent und ausw&auml;hlend \u2014 sie tastet die
          Umgebung ab und nimmt selektiv Energien auf. Deshalb ist die Umgebung f&uuml;r
          Reflektoren wichtiger als f&uuml;r jeden anderen Typ. Ein Reflektor in einem
          toxischen Umfeld wird krank; in einem gesunden, liebevollen Umfeld
          bl&uuml;ht er auf wie kein anderer. Reflektoren sind das ultimative Barometer
          f&uuml;r die Gesundheit einer Gemeinschaft.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ihre Strategie ist einzigartig: <strong className="text-white">Einen ganzen Mondzyklus (ca. 28 Tage) abwarten,</strong> bevor
          wichtige Entscheidungen getroffen werden. W&auml;hrend dieser 28 Tage
          durchl&auml;uft der Mond alle 64 Tore und aktiviert verschiedene Teile ihres
          offenen Charts. Erst wenn sie alle Perspektiven durchlebt haben, k&ouml;nnen
          sie eine klare Entscheidung treffen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im korrekt gelebten Zustand erleben Reflektoren &Uuml;berraschung \u2014 das
          Staunen &uuml;ber die unendliche Vielfalt des Lebens, die durch sie
          hindurchflie&szlig;t. Kein Tag ist gleich, und genau das ist die Magie. Im
          Nicht-Selbst entsteht Entt&auml;uschung, wenn Reflektoren versuchen, wie
          andere Typen zu leben \u2014 konsistent, definiert und vorhersagbar. Das sind
          sie nicht, und das m&uuml;ssen sie auch nicht sein. Ihre St&auml;rke liegt in ihrer
          einzigartigen F&auml;higkeit, die Welt durch unendlich viele Perspektiven zu
          sehen.
        </p>
      </section>

      {/* Section 6: Deinen Typ leben */}
      <section id="deinen-typ-leben" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Deinen Typ leben \u2014 Praktische Tipps
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Deinen Typ zu kennen ist der erste Schritt. Ihn zu leben ist der
          eigentliche Weg. Human Design nennt diesen Prozess
          &bdquo;Dekonditionierung&ldquo; \u2014 das schrittweise Abl&ouml;sen von angelernten
          Verhaltensmustern, die nicht deiner wahren Natur entsprechen. Hier sind
          praktische Tipps f&uuml;r jeden Typ:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Tipps f&uuml;r Generatoren
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              &Uuml;be, auf dein sakrales Bauchgef&uuml;hl zu h&ouml;ren. Stelle dir im Alltag
              bewusst Ja/Nein-Fragen und achte auf die k&ouml;rperliche Reaktion.
              Vermeide es, Dinge aus Pflichtgef&uuml;hl zu tun, die dein Sakral nicht
              bejaht. Gehe abends erst ins Bett, wenn du k&ouml;rperlich ersch&ouml;pft bist
              \u2014 das hilft beim Einschlafen. Erlaube dir, Meisterschaft in dem zu
              entwickeln, was dich wirklich befriedigt.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Tipps f&uuml;r Manifestierende Generatoren
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Erlaube dir den nicht-linearen Weg. Du musst nicht bei einer Sache
              bleiben, wenn dein Sakral nicht mehr antwortet. Informiere dein
              Umfeld, bevor du Richtungswechsel machst. &Uuml;be Geduld: Warte das
              sakrale Signal ab, bevor du loslegst. Hab keine Angst davor,
              Dinge fallenzulassen \u2014 jede Erfahrung f&uuml;gt sich sp&auml;ter zu deinem
              einzigartigen Mosaik zusammen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Tipps f&uuml;r Projektoren
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Investiere in dein Wissen und deine F&auml;higkeiten \u2014 werde ein Experte
              in deinem Bereich. Warte auf echte Einladungen, besonders bei den
              gro&szlig;en Lebensentscheidungen (Beruf, Beziehung, Wohnort). Plane
              Ruhezeiten ein und h&ouml;re auf, dich mit der Arbeitskapazit&auml;t von
              Generatoren zu vergleichen. Lege dich vor dem Einschlafen hin und
              lass die fremde Energie aus deinen offenen Zentren abflie&szlig;en.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Tipps f&uuml;r Manifestoren
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              &Uuml;be das Informieren als t&auml;gliche Praxis. Es geht nicht um
              Erlaubnis, sondern um Transparenz. Erlaube dir, allein zu sein,
              wenn du es brauchst \u2014 deine geschlossene Aura braucht Raum.
              Achte auf deinen Energiezyklus: Manifestoren haben intensive
              Initiations-Phasen, gefolgt von Ruhephasen. Beide sind wichtig.
              Lass dich nicht davon abbringen, deinem inneren Impuls zu folgen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Tipps f&uuml;r Reflektoren
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              W&auml;hle deine Umgebung bewusst \u2014 sie beeinflusst dich st&auml;rker als
              jeden anderen Typ. Gib dir bei wichtigen Entscheidungen immer
              mindestens 28 Tage. F&uuml;hre ein Mond-Tagebuch, um deine
              energetischen Zyklen kennenzulernen. Umgib dich mit Menschen,
              die sich gut anf&uuml;hlen \u2014 du nimmst ihre Energie auf und
              verst&auml;rkst sie. Feiere deine Einzigartigkeit: Kein Tag ist
              wie der andere, und genau das ist deine Gabe.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          H&auml;ufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
