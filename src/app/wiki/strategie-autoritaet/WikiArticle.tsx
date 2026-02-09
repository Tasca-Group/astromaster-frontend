"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-ist-strategie", title: "Was ist Strategie?" },
  { id: "was-ist-autoritaet", title: "Was ist Autorit\u00e4t?" },
  { id: "die-7-autoritaeten", title: "Die 7 Autorit\u00e4ten" },
  { id: "strategie-nach-typ", title: "Strategie nach Typ" },
  { id: "praxis-tipps", title: "Praxis-Tipps" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/human-design", label: "Human Design Grundlagen" },
  { href: "/wiki/human-design-typen", label: "Die 5 Typen" },
  { href: "/wiki/human-design-zentren", label: "Die 9 Zentren" },
];

const faqItems = [
  {
    question: "Was ist eine Strategie im Human Design?",
    answer:
      "Deine Strategie beschreibt, wie du am besten mit der Welt interagierst. Sie wird durch deinen Typ bestimmt: Generatoren und Manifestierende Generatoren reagieren auf Impulse, Projektoren warten auf Einladungen, Manifestoren informieren ihr Umfeld und Reflektoren warten einen ganzen Mondzyklus ab. Die Strategie reduziert Widerstand und bringt dich in den Flow.",
  },
  {
    question: "Wie finde ich meine Autorit\u00e4t heraus?",
    answer:
      "Deine Autorit\u00e4t wird durch die Hierarchie der definierten Zentren bestimmt. An oberster Stelle steht das Emotionalzentrum \u2014 ist es definiert, hast du immer emotionale Autorit\u00e4t. Ist es offen, pr\u00fcft man das n\u00e4chste Zentrum: Sakral, dann Milz, dann Herz, dann G-Zentrum zur Kehle (Selbstprojiziert), dann Umwelt-Autorit\u00e4t. Reflektoren haben lunare Autorit\u00e4t. AstroMaster berechnet deine Autorit\u00e4t automatisch.",
  },
  {
    question: "Kann der Verstand gute Entscheidungen treffen?",
    answer:
      "Im Human Design ist der Verstand ein hervorragender Beobachter und Berater f\u00fcr andere, aber kein zuverl\u00e4ssiges Entscheidungsinstrument f\u00fcr dich selbst. Er ist darauf konditioniert, rationalisierte Gr\u00fcnde f\u00fcr Entscheidungen zu finden. Dein K\u00f6rper \u2014 durch Sakral, Milz, Emotionen oder andere Mechanismen \u2014 wei\u00df besser, was richtig ist.",
  },
  {
    question: "Wie lange dauert Dekonditionierung?",
    answer:
      "Ra Uru Hu sprach von einem Sieben-Jahres-Zyklus, weil der K\u00f6rper etwa sieben Jahre braucht, um alle Zellen zu erneuern. In der Praxis sp\u00fcrst du erste Verl\u00e4nderungen aber schon nach Wochen oder Monaten, wenn du konsequent deine Strategie und Autorit\u00e4t anwendest. Es ist ein gradueller Prozess \u2014 kein Schalter, den man umlegt.",
  },
  {
    question:
      "Was passiert, wenn ich meine Strategie ignoriere?",
    answer:
      "Wenn du deine Strategie ignorierst, landest du in deinem Nicht-Selbst-Thema: Frustration (Generator/MG), Wut (Manifestor), Bitterkeit (Projektor) oder Entt\u00e4uschung (Reflektor). Das sind keine negativen Gef\u00fchle, die du unterdr\u00fccken solltest \u2014 sie sind Wegweiser, die dir zeigen, dass du vom Kurs abgekommen bist.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Strategie & Autorit\u00e4t"
      subtitle="Strategie und Autorit\u00e4t sind die zwei wichtigsten praktischen Werkzeuge im Human Design. Sie beantworten die Fragen: Wie interagiere ich korrekt mit der Welt? Und wie treffe ich die richtigen Entscheidungen f\u00fcr mich?"
      breadcrumb="Strategie & Autorit\u00e4t"
      sections={sections}
      ctaText="Entdecke deine Strategie & Autorit\u00e4t \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Was ist Strategie? */}
      <section id="was-ist-strategie" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ist Strategie im Human Design?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Deine Strategie ist dein Navigationsger&auml;t f&uuml;r den Alltag. Sie
          beschreibt, <em>wie</em> du am besten mit der Welt interagierst, damit
          du weniger Widerstand erlebst und mehr im Flow bist. Die Strategie wird
          nicht individuell berechnet \u2014 sie ist direkt an deinen Typ gekn&uuml;pft.
          Jeder der f&uuml;nf Typen hat eine eigene Strategie, die bestimmt, ob du
          initiieren, reagieren, warten oder informieren sollst.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Strategie ist wie eine Bedienungsanleitung f&uuml;r deine Aura. Wenn
          du sie befolgst, &ouml;ffnen sich T&uuml;ren, die vorher verschlossen waren. Die
          richtigen Menschen, Gelegenheiten und Umst&auml;nde finden ihren Weg zu dir.
          Wenn du sie ignorierst, st&ouml;&szlig;t du auf Widerstand, Konflikte und
          Misserfolge \u2014 nicht weil du etwas falsch machst, sondern weil du
          gegen deine nat&uuml;rliche Mechanik arbeitest.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Wichtig zu verstehen: Die Strategie ist kein moralisches Gebot. Es
          geht nicht darum, was du tun &bdquo;solltest&ldquo;, sondern darum, was f&uuml;r dich
          am effektivsten funktioniert. Ein Generator, der initiiert statt
          reagiert, <em>kann</em> Erfolg haben \u2014 aber er bezahlt daf&uuml;r mit Frustration
          und dem Gef&uuml;hl, dass alles ein Kampf ist. Die Strategie beschreibt den
          Weg des geringsten Widerstands.
        </p>
      </section>

      {/* Section 2: Was ist Autorit\u00e4t? */}
      <section id="was-ist-autoritaet" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ist Autorit&auml;t im Human Design?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          W&auml;hrend die Strategie bestimmt, <em>wie</em> du mit der Welt
          interagierst, ist die Autorit&auml;t dein innerer Entscheidungskompass.
          Sie sagt dir, <em>welche</em> Entscheidungen richtig f&uuml;r dich sind.
          Die revolution&auml;re Erkenntnis im Human Design: Nicht der Verstand
          trifft die besten Entscheidungen, sondern dein K&ouml;rper.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Dein Verstand ist ein brillanter Analytiker, Beobachter und Berater
          \u2014 aber f&uuml;r <em>andere</em>. F&uuml;r dich selbst ist er zu stark von
          Konditionierung, &Auml;ngsten und gesellschaftlichen Erwartungen gepr&auml;gt,
          um zuverl&auml;ssig zu sein. Deine Autorit&auml;t hingegen ist ein k&ouml;rperlicher
          Mechanismus, der nicht l&uuml;gen kann. Er ist dein pers&ouml;nliches
          Wahrheitssignal.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Autorit&auml;t wird durch die Hierarchie der definierten Zentren
          bestimmt. An oberster Stelle steht das Emotionalzentrum. Ist es
          definiert, &uuml;berschreibt es alle anderen \u2014 du hast emotionale
          Autorit&auml;t. Ist es offen, geht man zum n&auml;chsten Zentrum in der
          Hierarchie: Sakral, Milz, Herz, G-Zentrum (Selbstprojiziert),
          Umwelt-Autorit&auml;t oder Lunare Autorit&auml;t (f&uuml;r Reflektoren).
        </p>
      </section>

      {/* Section 3: Die 7 Autorit&auml;ten */}
      <section id="die-7-autoritaeten" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 7 Autorit&auml;ten im Detail
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Jede Autorit&auml;t nutzt einen anderen k&ouml;rperlichen Mechanismus, um
          Entscheidungen zu treffen. Hier sind alle sieben im Detail:
        </p>

        <div className="space-y-6 my-6">
          {/* Emotionale Autorit&auml;t */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              1. Emotionale Autorit&auml;t
            </h3>
            <div className="p-3 rounded-lg bg-gold/5 border border-gold/10 mb-4">
              <p className="text-xs text-gold">
                H&auml;ufigste Autorit&auml;t &bull; ~50% der Menschen &bull; Definiertes Emotionalzentrum
              </p>
            </div>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Wenn dein Emotionalzentrum (Solar Plexus) definiert ist, hast du
              immer emotionale Autorit&auml;t \u2014 egal, welche anderen Zentren definiert
              sind. Du erlebst eine emotionale Welle: Hochs und Tiefs, Hoffnung und
              Schmerz, Begeisterung und N&uuml;chternheit. Diese Welle ist dein
              Entscheidungsinstrument.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Wie du sie nutzt:</strong> Triff niemals wichtige
              Entscheidungen im emotionalen Hoch oder Tief. Warte, bis die Welle
              sich beruhigt und du einen Moment relativer Klarheit erreichst.
              Schlafe mindestens eine Nacht dar&uuml;ber. Bei gro&szlig;en Entscheidungen:
              mehrere Wellenzyklen durchlaufen. Das Gef&uuml;hl der Klarheit ist nicht
              100% \u2014 aber irgendwann wird es klar genug, und dann handelst du.
            </p>
          </div>

          {/* Sakrale Autorit&auml;t */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              2. Sakrale Autorit&auml;t
            </h3>
            <div className="p-3 rounded-lg bg-gold/5 border border-gold/10 mb-4">
              <p className="text-xs text-gold">
                Nur f&uuml;r Generatoren &bull; Definiertes Sakral, offene Emotionen &bull; Echtzeit-Antwort
              </p>
            </div>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Die sakrale Autorit&auml;t ist f&uuml;r Generatoren (und MGs) mit offenem
              Emotionalzentrum. Dein Sakral antwortet in Echtzeit mit einem
              k&ouml;rperlichen Bauchgef&uuml;hl. Es ist kein Gedanke \u2014 es ist ein
              physisches Signal, das vom Unterbauch kommt.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Wie du sie nutzt:</strong> Stelle dir Ja/Nein-Fragen
              und achte auf die k&ouml;rperliche Reaktion. Ein warmes, nach oben
              ziehendes Gef&uuml;hl bedeutet Ja. Ein zusammenziehendes, ablehnendes
              Gef&uuml;hl bedeutet Nein. Wichtig: Das Sakral braucht eine Frage oder
              einen Impuls, auf den es reagieren kann. Es antwortet nicht auf
              Wunschdenken oder mentale Analysen. &Uuml;be im Alltag: Lass andere
              dir Ja/Nein-Fragen stellen und sp&uuml;re in deinen Bauch.
            </p>
          </div>

          {/* Milz-Autorit&auml;t */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              3. Milz-Autorit&auml;t
            </h3>
            <div className="p-3 rounded-lg bg-gold/5 border border-gold/10 mb-4">
              <p className="text-xs text-gold">
                F&uuml;r Projektoren &amp; Manifestoren &bull; Definierte Milz, offene Emotionen &amp; Sakral &bull; Spontan
              </p>
            </div>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Die Milz-Autorit&auml;t ist die &auml;lteste und spontanste aller
              Autorit&auml;ten. Sie spricht leise und nur einmal \u2014 ein blitzschnelles
              K&ouml;rpergef&uuml;hl im Moment, das sagt: sicher oder unsicher, richtig
              oder falsch, gesund oder ungesund. Es ist dein
              &Uuml;berlebensinstinkt in seiner reinsten Form.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Wie du sie nutzt:</strong> Vertraue dem allerersten
              Impuls. Die Milz spricht im Jetzt-Moment und wiederholt sich nicht.
              Wenn du einen spontanen &bdquo;Nein&ldquo;-Impuls sp&uuml;rst \u2014 folge ihm, auch wenn
              dein Verstand Gegenargumente hat. Die Milz sch&uuml;tzt dich vor Gefahr
              und f&uuml;hrt dich zu dem, was gesund f&uuml;r dich ist. Die Herausforderung:
              Lerne, diese leise Stimme von der lauten Stimme des Verstandes zu
              unterscheiden.
            </p>
          </div>

          {/* Ego/Herz-Autorit&auml;t */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              4. Ego/Herz-Autorit&auml;t
            </h3>
            <div className="p-3 rounded-lg bg-gold/5 border border-gold/10 mb-4">
              <p className="text-xs text-gold">
                Selten &bull; Nur bestimmte Manifestoren &amp; Projektoren &bull; Definiertes Herz, offene Emotionen/Sakral/Milz
              </p>
            </div>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Die Ego-Autorit&auml;t ist eine der seltensten Autorit&auml;ten. Dein
              Herzzentrum \u2014 der Sitz der Willenskraft \u2014 ist dein
              Entscheidungsinstrument. Es geht um die Frage: &bdquo;Will ich das
              wirklich?&ldquo; und &bdquo;Habe ich die Kraft daf&uuml;r?&ldquo;
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Wie du sie nutzt:</strong> H&ouml;re auf dein Herz im
              w&ouml;rtlichen Sinne. Sp&uuml;rst du einen starken Willen, etwas zu tun?
              F&uuml;hlt es sich an, als k&ouml;nntest du dich voll und ganz
              verpflichten? Dann ist es richtig. Wenn dein Herz nicht dabei ist,
              lass es. Ego-Autorit&auml;t bedeutet auch, dass es in Ordnung ist,
              eigenn&uuml;tzig zu entscheiden \u2014 dein Herz wei&szlig;, was das Beste
              f&uuml;r dich ist.
            </p>
          </div>

          {/* Selbstprojizierte Autorit&auml;t */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              5. Selbstprojizierte Autorit&auml;t
            </h3>
            <div className="p-3 rounded-lg bg-gold/5 border border-gold/10 mb-4">
              <p className="text-xs text-gold">
                Nur f&uuml;r Projektoren &bull; G-Zentrum direkt zur Kehle verbunden &bull; Wahrheit durch Sprechen
              </p>
            </div>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Projektoren mit einer direkten Verbindung vom G-Zentrum (Identit&auml;t)
              zur Kehle haben die selbstprojizierte Autorit&auml;t. Du findest deine
              Wahrheit, indem du &uuml;ber Dinge sprichst \u2014 nicht indem du dar&uuml;ber
              nachdenkst.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Wie du sie nutzt:</strong> Sprich &uuml;ber die
              anstehende Entscheidung mit einer vertrauensw&uuml;rdigen Person. Aber
              nicht, um deren Rat zu bekommen \u2014 sondern um dir selbst zuzuh&ouml;ren.
              Achte auf den Klang deiner Stimme und die Worte, die spontan kommen.
              Dort liegt deine Wahrheit. Wenn du sagst &bdquo;Ich will das&ldquo; und es sich
              in deinem Zentrum wahr anf&uuml;hlt, folge dem. Wenn deine Worte leer
              klingen, ist es nicht richtig.
            </p>
          </div>

          {/* Mentale/Umwelt-Autorit&auml;t */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              6. Mentale/Umwelt-Autorit&auml;t
            </h3>
            <div className="p-3 rounded-lg bg-gold/5 border border-gold/10 mb-4">
              <p className="text-xs text-gold">
                Selten &bull; Nur f&uuml;r Projektoren ohne innere Autorit&auml;t &bull; Klarheit durch Umgebung
              </p>
            </div>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Die mentale oder Umwelt-Autorit&auml;t betrifft Projektoren, die keine
              innere Autorit&auml;t haben \u2014 weder emotional, noch sakral, noch Milz,
              noch Ego, noch Selbstprojiziert. Du hast keine innere k&ouml;rperliche
              Referenz und findest Klarheit stattdessen &uuml;ber deine Umgebung.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Wie du sie nutzt:</strong> Sprich Entscheidungen mit
              verschiedenen Menschen durch und beobachte, wie du dich in
              verschiedenen Umgebungen f&uuml;hlst. Manche R&auml;ume bringen Klarheit,
              andere verst&auml;rken die Verwirrung. Geh an den Ort, der sich richtig
              anf&uuml;hlt, und lass die Antwort zu dir kommen. Dein Verstand ist
              nicht dein Feind, aber auch nicht dein Entscheider \u2014 er ist ein
              Diskussionspartner, der verschiedene Perspektiven beleuchtet.
            </p>
          </div>

          {/* Lunare Autorit&auml;t */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-medium text-gold mb-3">
              7. Lunare Autorit&auml;t
            </h3>
            <div className="p-3 rounded-lg bg-gold/5 border border-gold/10 mb-4">
              <p className="text-xs text-gold">
                Nur f&uuml;r Reflektoren &bull; Keine definierten Zentren &bull; 28-Tage-Zyklus
              </p>
            </div>
            <p className="text-base text-muted/90 leading-[1.7] mb-4">
              Die lunare Autorit&auml;t ist exklusiv f&uuml;r Reflektoren. Da du kein
              einziges definiertes Zentrum hast, gibt es keinen festen inneren
              Referenzpunkt. Dein Entscheidungsmechanismus ist der Mond, der in
              ca. 28 Tagen alle 64 Tore durchl&auml;uft und verschiedene Teile deines
              Charts aktiviert.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Wie du sie nutzt:</strong> Gib dir f&uuml;r wichtige
              Entscheidungen einen ganzen Mondzyklus Zeit. F&uuml;hre ein
              Mond-Tagebuch, in dem du t&auml;glich notierst, wie du dich f&uuml;hlst
              und was du &uuml;ber die Entscheidung denkst. Nach 28 Tagen hast du
              alle Perspektiven durchlebt und kannst eine klare Entscheidung
              treffen. F&uuml;r kleine Alltagsentscheidungen: Achte auf dein
              k&ouml;rperliches Wohlbefinden an dem jeweiligen Tag.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Strategie nach Typ */}
      <section id="strategie-nach-typ" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Strategie nach Typ
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Jeder der f&uuml;nf Typen hat eine spezifische Strategie, die beschreibt,
          wie er am besten mit der Welt interagiert. Hier ist ein &Uuml;berblick mit
          konkreten Beispielen f&uuml;r den Alltag:
        </p>

        <div className="overflow-x-auto rounded-xl border border-border mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Typ</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Strategie</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Signatur</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Nicht-Selbst</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium text-white">Generator</td>
                <td className="px-4 py-3 text-muted">Warten, um zu reagieren</td>
                <td className="px-4 py-3 text-muted">Befriedigung</td>
                <td className="px-4 py-3 text-muted">Frustration</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 font-medium text-white">Manifest. Generator</td>
                <td className="px-4 py-3 text-muted">Reagieren, dann informieren</td>
                <td className="px-4 py-3 text-muted">Befriedigung</td>
                <td className="px-4 py-3 text-muted">Frustration &amp; Wut</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium text-white">Projektor</td>
                <td className="px-4 py-3 text-muted">Auf Einladung warten</td>
                <td className="px-4 py-3 text-muted">Erfolg</td>
                <td className="px-4 py-3 text-muted">Bitterkeit</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 font-medium text-white">Manifestor</td>
                <td className="px-4 py-3 text-muted">Informieren</td>
                <td className="px-4 py-3 text-muted">Frieden</td>
                <td className="px-4 py-3 text-muted">Wut</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium text-white">Reflektor</td>
                <td className="px-4 py-3 text-muted">Mondzyklus abwarten</td>
                <td className="px-4 py-3 text-muted">&Uuml;berraschung</td>
                <td className="px-4 py-3 text-muted">Entt&auml;uschung</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Generator &amp; MG \u2014 Reagieren:</strong> Das bedeutet
          nicht, passiv zu sein. Du bist aktiv in der Welt unterwegs, stellst
          dich Situationen aus und wartest auf das sakrale &bdquo;Uh-huh&ldquo;. Ein Jobangebot,
          eine Einladung zum Abendessen, ein Buch, das dir ins Auge f&auml;llt \u2014 das
          sind alles Impulse, auf die dein Sakral reagieren kann.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Projektor \u2014 Einladung:</strong> Nicht jeder
          Kaffee-Plausch muss eine formelle Einladung sein. Die Strategie bezieht
          sich auf die gro&szlig;en Lebensentscheidungen: Beruf, Beziehung, Wohnort.
          Im Alltag reicht Anerkennung \u2014 wenn jemand dich sieht, deine Meinung
          sch&auml;tzt und nach deinem Input fragt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Manifestor \u2014 Informieren:</strong> Informieren ist
          nicht um Erlaubnis bitten. Es ist eine kurze Mitteilung: &bdquo;Hey, ich plane
          Folgendes&ldquo;. Dein Umfeld f&uuml;hlt sich einbezogen, und du beh&auml;ltst deine
          Unabh&auml;ngigkeit. Ein einfacher Satz kann den Unterschied zwischen
          Widerstand und Unterst&uuml;tzung machen.
        </p>
      </section>

      {/* Section 5: Praxis-Tipps */}
      <section id="praxis-tipps" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Praxis-Tipps f&uuml;r den Alltag
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Strategie und Autorit&auml;t im Alltag zu leben ist ein Prozess. Hier sind
          konkrete Tipps, um den Einstieg zu erleichtern:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Beginne mit kleinen Entscheidungen
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              &Uuml;be deine Autorit&auml;t zuerst an kleinen, risikolosen Entscheidungen.
              Was m&ouml;chte ich essen? Will ich diesen Anruf annehmen? Soll ich auf
              diese Nachricht antworten? Je mehr du die kleinen Signale deines
              K&ouml;rpers wahrnimmst, desto klarer werden sie bei gro&szlig;en Entscheidungen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Beobachte dein Nicht-Selbst-Thema
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Frustration, Wut, Bitterkeit oder Entt&auml;uschung sind keine Fehler
              \u2014 sie sind Navigationshilfen. Wenn du eines dieser Gef&uuml;hle sp&uuml;rst,
              frage dich: Habe ich meine Strategie verletzt? Habe ich initiiert
              statt reagiert? Ungebeten beraten? Gehandelt, ohne zu informieren?
              Diese Reflexion ist der erste Schritt zur Korrektur.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              F&uuml;hre ein Experiment-Tagebuch
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Schreibe t&auml;glich auf: Wann habe ich meine Strategie befolgt? Wann
              nicht? Was war das Ergebnis? Nach ein paar Wochen wirst du klare
              Muster erkennen. Human Design nennt sich selbst ein &bdquo;Experiment&ldquo;
              \u2014 du musst nichts glauben, du musst es nur ausprobieren und
              beobachten, was passiert.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Sei geduldig mit dir selbst
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Dekonditionierung braucht Zeit. Du hast jahrelang anders gelebt \u2014
              diese Muster l&ouml;sen sich nicht &uuml;ber Nacht auf. Es ist v&ouml;llig normal,
              immer wieder in alte Gewohnheiten zur&uuml;ckzufallen. Der Unterschied
              ist: Jetzt erkennst du es. Und mit jedem Erkennen wird es leichter,
              im n&auml;chsten Moment die korrekte Entscheidung zu treffen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          H&auml;ufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
