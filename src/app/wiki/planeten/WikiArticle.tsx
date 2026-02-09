"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "persoenliche", title: "Die persönlichen Planeten" },
  { id: "soziale", title: "Die sozialen Planeten" },
  { id: "transpersonale", title: "Die transpersonalen Planeten" },
  { id: "planeten-in-zeichen", title: "Planeten in Zeichen" },
  { id: "retrograde", title: "Retrograde Planeten" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/sternzeichen", label: "Die 12 Sternzeichen" },
  { href: "/wiki/haeuser", label: "Die 12 Häuser" },
  { href: "/wiki/aspekte", label: "Aspekte erklärt" },
  { href: "/wiki/aszendent-mond-sonne", label: "Aszendent, Mond & Sonne" },
];

const faqItems = [
  {
    question: "Welche Planeten gibt es in der Astrologie?",
    answer:
      "In der Astrologie werden 10 Himmelskörper als Planeten bezeichnet: Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun und Pluto. Sonne und Mond werden als Luminare (Lichter) bezeichnet, gelten aber astrologisch als Planeten.",
  },
  {
    question: "Was ist der Unterschied zwischen persönlichen und transpersonalen Planeten?",
    answer:
      "Persönliche Planeten (Sonne, Mond, Merkur, Venus, Mars) bewegen sich schnell und prägen die individuelle Persönlichkeit. Soziale Planeten (Jupiter, Saturn) wirken auf gesellschaftlicher Ebene. Transpersonale Planeten (Uranus, Neptun, Pluto) bewegen sich sehr langsam und betreffen ganze Generationen.",
  },
  {
    question: "Was bedeutet es, wenn ein Planet rückläufig ist?",
    answer:
      "Ein rückläufiger (retrograder) Planet bewegt sich scheinbar rückwärts am Himmel — eine optische Täuschung durch die unterschiedlichen Umlaufgeschwindigkeiten. In der Astrologie steht Rückläufigkeit für Reflexion, Verzögerung und die Aufforderung, innezuhalten und vergangene Themen zu überprüfen.",
  },
  {
    question: "Warum gelten Sonne und Mond als Planeten?",
    answer:
      "Astronomisch ist die Sonne ein Stern und der Mond ein Satellit. In der Astrologie werden sie jedoch traditionell als Planeten geführt, weil sie sich aus irdischer Perspektive wie Planeten durch den Tierkreis bewegen und die stärkste Wirkung auf das individuelle Horoskop haben.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 10 Planeten in der Astrologie"
      subtitle="Jeder Planet steht für eine bestimmte Lebensenergie — von der Sonne als Kern deiner Identität bis zu Pluto als Kraft der Transformation. Verstehe die kosmischen Akteure in deinem Geburtshoroskop."
      breadcrumb="Die 10 Planeten"
      sections={sections}
      ctaText="Entdecke, wo deine Planeten stehen — siderisch berechnet"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="persoenliche" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die persönlichen Planeten
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die persönlichen Planeten bewegen sich relativ schnell durch den Tierkreis und prägen
          deine individuelle Persönlichkeit am stärksten. Sie verändern ihre Position innerhalb
          von Tagen bis Monaten und unterscheiden dich damit deutlich von Menschen, die nur wenige
          Wochen vor oder nach dir geboren wurden.
        </p>

        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Sonne</p>
            <p className="text-xs text-muted mb-3">Herrscher von Löwe | Umlaufzeit: 1 Jahr</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Die Sonne ist das Zentrum deines Horoskops — sie repräsentiert dein Kern-Ich, deinen
              Willen und deine grundlegende Lebensenergie. Dein Sonnenzeichen ist das, was die
              meisten Menschen als &quot;ihr Sternzeichen&quot; kennen. Die Sonne zeigt, wer du im Kern bist,
              was dich antreibt und wohin dein Lebensweg dich führt. Sie steht für Vitalität,
              Selbstbewusstsein und den kreativen Funken, der dich einzigartig macht.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Mond</p>
            <p className="text-xs text-muted mb-3">Herrscher von Krebs | Umlaufzeit: 28 Tage</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Der Mond ist die zweite große Kraft in deinem Horoskop und repräsentiert deine
              emotionale Welt, deine Bedürfnisse und dein Unterbewusstsein. Während die Sonne
              zeigt, wer du sein willst, zeigt der Mond, wer du bist, wenn niemand hinschaut.
              Er steht für Geborgenheit, Instinkt, Erinnerungen und die Art, wie du Nähe und
              Intimität erlebst. Der Mond wechselt alle 2,5 Tage das Zeichen und ist damit der
              schnellste aller astrologischen Planeten.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Merkur</p>
            <p className="text-xs text-muted mb-3">Herrscher von Zwillinge &amp; Jungfrau | Umlaufzeit: 88 Tage</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Merkur ist der Planet der Kommunikation, des Denkens und des Lernens. Er zeigt,
              wie du Informationen verarbeitest, dich ausdrückst und mit anderen in Austausch
              trittst. Merkur beeinflusst deinen Kommunikationsstil, deine analytischen
              Fähigkeiten und die Art, wie du Entscheidungen triffst. Als sonnennächster Planet
              ist er nie weiter als ein Zeichen von deiner Sonne entfernt.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Venus</p>
            <p className="text-xs text-muted mb-3">Herrscher von Stier &amp; Waage | Umlaufzeit: 225 Tage</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Venus ist der Planet der Liebe, Schönheit und Werte. Sie zeigt, was du schön findest,
              wie du liebst und geliebt werden möchtest und wofür du Geld ausgibst. Venus
              beeinflusst dein ästhetisches Empfinden, deine Beziehungsmuster und dein
              Harmoniebedürfnis. In der Partnerschaftsastrologie ist Venus einer der wichtigsten
              Indikatoren für Anziehung und Kompatibilität.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Mars</p>
            <p className="text-xs text-muted mb-3">Herrscher von Widder (klassisch: Skorpion) | Umlaufzeit: 687 Tage</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Mars ist der Planet der Tatkraft, Durchsetzung und Sexualität. Er zeigt, wie du
              handelst, kämpfst und deine Ziele verfolgst. Mars repräsentiert deinen Antrieb,
              deinen Umgang mit Wut und Konflikten und die Art, wie du physische Energie einsetzt.
              Er ist der aktivste aller Planeten und steht für den Willen, Hindernisse zu
              überwinden und Neues zu erobern.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="soziale" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die sozialen Planeten
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Jupiter und Saturn bilden die Brücke zwischen dem Persönlichen und dem Kollektiven.
          Sie bewegen sich langsamer als die persönlichen Planeten und bleiben mehrere Monate
          bis Jahre in einem Zeichen. Sie prägen weniger die individuelle Persönlichkeit als
          die Art, wie du dich in der Gesellschaft positionierst.
        </p>

        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Jupiter</p>
            <p className="text-xs text-muted mb-3">Herrscher von Schütze (klassisch: Fische) | Umlaufzeit: 12 Jahre</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Jupiter ist der größte Planet unseres Sonnensystems und in der Astrologie der
              &quot;Große Wohltäter&quot;. Er steht für Wachstum, Fülle, Weisheit und Glück. Jupiter
              zeigt, wo du expandierst, wo du Glück hast und welche Lebensphilosophie dich
              leitet. Er bleibt etwa ein Jahr in jedem Zeichen und markiert damit Jahresphasen
              des Wachstums. Jupiter steht auch für Großzügigkeit, Optimismus und den Glauben
              an das Gute — aber in seiner Schattenseite auch für Übertreibung und Maßlosigkeit.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Saturn</p>
            <p className="text-xs text-muted mb-3">Herrscher von Steinbock (klassisch: Wassermann) | Umlaufzeit: 29 Jahre</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Saturn ist der &quot;Große Lehrer&quot; und steht für Struktur, Disziplin, Verantwortung und
              die Grenzen der Realität. Er zeigt, wo du reifen musst, wo Prüfungen auf dich
              warten und wo du langfristig die größte Meisterschaft erlangen kannst. Saturn
              bleibt etwa 2,5 Jahre in jedem Zeichen. Die berühmte &quot;Saturn-Rückkehr&quot; um das
              29. Lebensjahr markiert den Eintritt ins Erwachsensein — eine Phase, in der
              viele Menschen grundlegende Lebensentscheidungen treffen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="transpersonale" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die transpersonalen Planeten
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die äußeren Planeten Uranus, Neptun und Pluto bewegen sich so langsam, dass sie über
          Jahre oder sogar Jahrzehnte in einem einzigen Zeichen verweilen. Sie wirken weniger auf
          die individuelle Persönlichkeit als auf ganze Generationen. Ihre Haus-Position in
          deinem Chart ist daher aussagekräftiger als ihr Zeichen.
        </p>

        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Uranus</p>
            <p className="text-xs text-muted mb-3">Herrscher von Wassermann | Umlaufzeit: 84 Jahre</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Uranus ist der Planet der Revolution, Innovation und plötzlichen Veränderung. Er
              bricht Strukturen auf, fordert Freiheit und bringt das Unerwartete. Uranus bleibt
              etwa 7 Jahre in einem Zeichen und prägt damit eine generationelle Haltung zur
              Veränderung. Individuell zeigt die Haus-Position von Uranus, in welchem Lebensbereich
              du am unkonventionellsten bist und wo Durchbrüche auf dich warten.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Neptun</p>
            <p className="text-xs text-muted mb-3">Herrscher von Fische | Umlaufzeit: 165 Jahre</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Neptun ist der Planet der Spiritualität, Illusion und Transzendenz. Er steht für
              Träume, Intuition, Mitgefühl und die Auflösung von Grenzen. Neptun bleibt etwa
              14 Jahre in einem Zeichen und prägt generationelle Sehnsüchte und Ideale. Er zeigt,
              wo du am empfänglichsten für höhere Wahrheiten bist — aber auch, wo Täuschung und
              Selbsttäuschung lauern. Neptun ist eng mit Kunst, Musik und mystischen Erfahrungen
              verbunden.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-sm text-gold mb-2 uppercase tracking-wider">Pluto</p>
            <p className="text-xs text-muted mb-3">Herrscher von Skorpion | Umlaufzeit: 248 Jahre</p>
            <p className="text-base text-muted/90 leading-[1.7]">
              Pluto ist der Planet der Transformation, Macht und Wiedergeburt. Er steht für
              tiefgreifende Wandlung, das Sterben des Alten und die Auferstehung des Neuen.
              Pluto bleibt zwischen 12 und 31 Jahren in einem Zeichen (wegen seiner elliptischen
              Bahn) und definiert die tiefsten Themen ganzer Generationen. Individuell zeigt Pluto,
              wo du die intensivsten Transformationen durchlebst und wo verborgene Kräfte schlummern,
              die dein Leben von Grund auf verändern können.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="planeten-in-zeichen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Planeten in Zeichen — die Kombination
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die eigentliche Tiefe der Astrologie entsteht durch die Kombination von Planet und
          Zeichen. Jeder Planet repräsentiert ein <em>Was</em> — eine Lebensenergie oder ein Thema.
          Das Zeichen, in dem der Planet steht, beschreibt das <em>Wie</em> — die Art und Weise,
          wie diese Energie zum Ausdruck kommt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein Beispiel: Venus steht für Liebe und Beziehungen (das Was). Venus im Widder liebt
          leidenschaftlich und erobernd, Venus im Stier liebt sinnlich und beständig, Venus
          in den Zwillingen liebt spielerisch und kommunikativ. Der Planet bleibt derselbe,
          aber das Zeichen färbt seine Ausdrucksweise.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Faustregel</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            <strong className="text-white">Planet</strong> = Was wird ausgedrückt? (Thema, Energie)<br />
            <strong className="text-white">Zeichen</strong> = Wie wird es ausgedrückt? (Stil, Qualität)<br />
            <strong className="text-white">Haus</strong> = Wo wird es ausgedrückt? (Lebensbereich)
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          In der AstroMaster Pro-Analyse erhältst du für jeden Planeten eine individuelle
          Deutung seiner Zeichenposition. So erfährst du nicht nur, dass dein Mars im Skorpion
          steht, sondern was das konkret für deine Tatkraft, deinen Umgang mit Konflikten und
          deine Durchsetzungsfähigkeit bedeutet.
        </p>
      </section>

      {/* Section 5 */}
      <section id="retrograde" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Retrograde Planeten
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein Planet wird als &quot;retrograd&quot; oder &quot;rückläufig&quot; bezeichnet, wenn er sich aus Sicht
          der Erde scheinbar rückwärts durch den Tierkreis bewegt. In Wirklichkeit bewegt sich
          kein Planet rückwärts — der Effekt entsteht durch die unterschiedlichen
          Umlaufgeschwindigkeiten der Planeten, ähnlich wie ein überholtes Auto auf der Autobahn
          scheinbar rückwärts zu fahren scheint.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Am bekanntesten ist die <strong className="text-white">Merkur-Rückläufigkeit</strong>, die drei- bis viermal
          pro Jahr für etwa drei Wochen eintritt. Sie wird oft mit Kommunikationsproblemen,
          technischen Pannen und Missverständnissen in Verbindung gebracht. Astrologisch betrachtet
          ist die rückläufige Phase eine Zeit der Reflexion: Merkur retrograd lädt dazu ein,
          alte Gespräche zu überdenken, Verträge zu prüfen und Kommunikationsmuster zu hinterfragen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Grundsätzlich gilt: Wenn ein Planet retrograd ist, wird seine Energie nach innen
          gelenkt statt nach außen. Das macht retrograde Phasen zu Zeiten der Introspektion,
          des Überdenkens und der Korrektur. Alle Planeten außer Sonne und Mond können retrograd sein.
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Planet</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Häufigkeit</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Dauer</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Thema</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium">Merkur</td>
                <td className="px-4 py-3 text-muted">3-4x pro Jahr</td>
                <td className="px-4 py-3 text-muted">~3 Wochen</td>
                <td className="px-4 py-3 text-muted">Kommunikation überdenken</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 font-medium">Venus</td>
                <td className="px-4 py-3 text-muted">alle 18 Monate</td>
                <td className="px-4 py-3 text-muted">~6 Wochen</td>
                <td className="px-4 py-3 text-muted">Werte und Beziehungen prüfen</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium">Mars</td>
                <td className="px-4 py-3 text-muted">alle 2 Jahre</td>
                <td className="px-4 py-3 text-muted">~10 Wochen</td>
                <td className="px-4 py-3 text-muted">Handeln und Antrieb hinterfragen</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 font-medium">Jupiter</td>
                <td className="px-4 py-3 text-muted">jährlich</td>
                <td className="px-4 py-3 text-muted">~4 Monate</td>
                <td className="px-4 py-3 text-muted">Wachstum und Glauben reflektieren</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium">Saturn</td>
                <td className="px-4 py-3 text-muted">jährlich</td>
                <td className="px-4 py-3 text-muted">~4,5 Monate</td>
                <td className="px-4 py-3 text-muted">Strukturen und Grenzen überprüfen</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 font-medium">Uranus – Pluto</td>
                <td className="px-4 py-3 text-muted">jährlich</td>
                <td className="px-4 py-3 text-muted">~5 Monate</td>
                <td className="px-4 py-3 text-muted">Tiefe kollektive Transformation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Wenn ein Planet in deinem Geburtshoroskop retrograd steht, bedeutet das nicht, dass
          etwas &quot;falsch&quot; ist. Es zeigt, dass du die Energie dieses Planeten auf eine
          introspektivere, oft tiefgründigere Art und Weise zum Ausdruck bringst. Viele
          bedeutende Denker und Künstler haben mehrere retrograde Planeten in ihrem Chart.
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
