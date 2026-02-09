"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-ist", title: "Was ist Numerologie?" },
  { id: "lebenszahl", title: "Deine Lebenszahl berechnen" },
  { id: "alle-zahlen", title: "Alle Lebenszahlen" },
  { id: "meisterzahlen", title: "Meisterzahlen 11, 22, 33" },
  { id: "geschichte", title: "Geschichte der Numerologie" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki-test/siderische-astrologie", label: "Siderische Astrologie" },
  { href: "/wiki-test/aegyptische-dekane", label: "Ägyptische Dekane" },
  { href: "/wiki-test/human-design", label: "Human Design" },
  { href: "/wiki-test/elementar-analyse", label: "Elementar-Analyse" },
];

const lebenszahlen = [
  {
    nummer: 1,
    titel: "Der Anführer",
    beschreibung:
      "Unabhängig, ehrgeizig und wegweisend. Menschen mit der Lebenszahl 1 sind geborene Anführer, die ihren eigenen Weg gehen und neue Pfade bahnen. Sie besitzen einen starken Willen und eine natürliche Autorität. Ihre Herausforderung liegt darin, Sturheit von Entschlossenheit zu unterscheiden.",
  },
  {
    nummer: 2,
    titel: "Der Diplomat",
    beschreibung:
      "Sensibel, kooperativ und harmonisierend. Zweier sind natürliche Vermittler, die in Konflikten instinktiv nach Ausgleich suchen. Sie besitzen eine feine Intuition für die Gefühle anderer und schaffen verbindende Atmosphären. Ihre Aufgabe ist es, die Balance zwischen Geben und Selbstfürsorge zu finden.",
  },
  {
    nummer: 3,
    titel: "Der Kreative",
    beschreibung:
      "Ausdrucksstark, künstlerisch und optimistisch. Dreier sind geborene Kommunikatoren und Unterhalter, die andere mit ihrer Begeisterung anstecken. Sie haben ein Talent für Sprache, Kunst und kreative Ausdrucksformen. Ihre Herausforderung: die eigene Energie nicht zu verzetteln.",
  },
  {
    nummer: 4,
    titel: "Der Baumeister",
    beschreibung:
      "Praktisch, diszipliniert und loyal. Vierer schaffen stabile Fundamente — im Beruf, in Beziehungen und im Leben. Sie sind verlässlich, organisiert und arbeiten systematisch an ihren Zielen. Ihre Herausforderung besteht darin, Struktur nicht in Starrheit umschlagen zu lassen.",
  },
  {
    nummer: 5,
    titel: "Der Freigeist",
    beschreibung:
      "Abenteuerlustig, vielseitig und neugierig. Fünfer lieben Veränderung, Reisen und neue Erfahrungen. Sie sind anpassungsfähig und lernen am besten durch Erleben. Freiheit ist ihr höchstes Gut. Ihre Herausforderung liegt in der Rastlosigkeit — sie müssen lernen, auch mal innezuhalten.",
  },
  {
    nummer: 6,
    titel: "Der Hüter",
    beschreibung:
      "Verantwortungsbewusst, fürsorglich und familienorientiert. Sechser sind natürliche Beschützer und Pfleger, die sich aufopferungsvoll um andere kümmern. Sie schaffen Harmonie in ihrem Umfeld und haben ein starkes Gerechtigkeitsempfinden. Ihre Lektion: sich selbst nicht zu vernachlässigen.",
  },
  {
    nummer: 7,
    titel: "Der Denker",
    beschreibung:
      "Analytisch, spirituell und introspektiv. Siebener suchen nach tieferer Wahrheit hinter der Oberfläche. Sie sind die Philosophen und Forscher unter den Lebenszahlen, die lieber beobachten als teilnehmen. Ihre Herausforderung: sich nicht in geistiger Isolation zu verlieren.",
  },
  {
    nummer: 8,
    titel: "Der Macher",
    beschreibung:
      "Ehrgeizig, machtbewusst und erfolgsorientiert. Achter haben eine natürliche Autorität im materiellen Bereich — Finanzen, Geschäft und Organisation liegen ihnen im Blut. Sie denken groß und handeln entschlossen. Ihre Herausforderung: den Workaholic in sich zu zügeln und auch die leisen Töne des Lebens wahrzunehmen.",
  },
  {
    nummer: 9,
    titel: "Der Weise",
    beschreibung:
      "Mitfühlend, idealistisch und humanitär. Neuner sehen das große Ganze und setzen sich für das Wohl der Allgemeinheit ein. Sie besitzen eine natürliche Weisheit und ein tiefes Verständnis für menschliche Zusammenhänge. Ihre Herausforderung: nicht in unpraktischem Idealismus zu verharren.",
  },
];

const faqItems = [
  {
    question: "Was ist eine Lebenszahl?",
    answer:
      "Die Lebenszahl (auch Schicksalszahl genannt) ist die wichtigste Zahl in der Numerologie. Sie wird aus deinem vollständigen Geburtsdatum berechnet, indem alle Ziffern so lange addiert werden, bis eine einstellige Zahl (1-9) oder eine Meisterzahl (11, 22, 33) entsteht. Sie beschreibt deine Kernpersönlichkeit, deine Stärken und deinen Lebensweg.",
  },
  {
    question: "Kann sich meine Lebenszahl ändern?",
    answer:
      "Nein, deine Lebenszahl ändert sich nie. Sie basiert auf deinem Geburtsdatum, das sich nicht verändert. Die Lebenszahl ist wie ein kosmischer Fingerabdruck — einmal berechnet, bleibt sie dein gesamtes Leben lang gleich. Was sich verändert, ist dein Verständnis und deine Beziehung zu dieser Zahl.",
  },
  {
    question: "Was sind Meisterzahlen?",
    answer:
      "Meisterzahlen sind die Zahlen 11, 22 und 33. Sie werden bei der Berechnung der Lebenszahl nicht weiter reduziert, weil ihnen eine besondere spirituelle Bedeutung zugeschrieben wird. Die 11 steht für gesteigerte Intuition, die 22 für die Fähigkeit, große Visionen zu manifestieren, und die 33 für selbstlosen Dienst an der Menschheit. Nur etwa 10% aller Menschen tragen eine Meisterzahl.",
  },
  {
    question: "Ist Numerologie wissenschaftlich belegt?",
    answer:
      "Numerologie ist ein symbolisches Deutungssystem, keine exakte Naturwissenschaft. Die mathematische Berechnung der Lebenszahl ist objektiv und reproduzierbar — jeder kann sie nachrechnen. Die Interpretation der Zahlen basiert jedoch auf jahrtausendealter Überlieferung und Erfahrungswissen, nicht auf kontrollierten Studien. Ähnlich wie bei der Astrologie liegt der Wert in der Selbstreflexion, die sie anstößt.",
  },
  {
    question: "Wie genau ist die Berechnung der Lebenszahl?",
    answer:
      "Die mathematische Berechnung ist absolut exakt — sie folgt einer eindeutigen Formel (iterierte Quersumme des Geburtsdatums). Es gibt keinen Interpretationsspielraum bei der Zahl selbst. Was variieren kann, ist die Deutung: Verschiedene numerologische Schulen legen unterschiedliche Schwerpunkte. AstroMaster kombiniert pythagoräische und moderne Ansätze für eine ausgewogene Interpretation.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Numerologie"
      subtitle="Die Numerologie ist eines der ältesten Symbolsysteme der Menschheit. Sie übersetzt dein Geburtsdatum in eine einzige Zahl — deine Lebenszahl — die deine Kernpersönlichkeit, deine Stärken und deinen Lebensweg beschreibt."
      breadcrumb="Numerologie"
      sections={sections}
      ctaText="Entdecke deine Lebenszahl — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1 */}
      <section id="was-ist" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ist Numerologie?
        </h2>
        {/* <!-- BILD: Symbolische Darstellung von Zahlen in einem kosmischen Kontext --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Numerologie ist ein symbolisches Deutungssystem, das Zahlen eine tiefere Bedeutung
          zuschreibt. Im Kern steht die Idee, dass das Universum mathematisch strukturiert ist
          und dass Zahlen nicht nur Mengen beschreiben, sondern Qualitäten und Schwingungen
          tragen. Dein Geburtsdatum wird dabei als kosmischer Code verstanden, der Hinweise
          auf deine Persönlichkeit, deine Talente und deinen Lebensweg enthält.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Numerologie gehört zu den ältesten Symbolsystemen der Menschheit. Bereits die
          Babylonier, Ägypter und Chinesen nutzten Zahlensymbolik in ihren spirituellen und
          philosophischen Traditionen. Der griechische Mathematiker Pythagoras (6. Jahrhundert
          v. Chr.) gilt als Begründer der westlichen Numerologie — für ihn war &quot;alles
          Zahl&quot; und jede Zahl ein Schlüssel zum Verständnis der Welt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Anders als die Astrologie, die mit Planetenpositionen und Sternbildern arbeitet,
          braucht die Numerologie nur ein einziges Datum: deinen Geburtstag. Aus diesem Datum
          wird durch iterierte Quersummenbildung eine einstellige Zahl (1-9) oder eine
          sogenannte Meisterzahl (11, 22, 33) berechnet — deine Lebenszahl.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im AstroMaster-System ist die Numerologie eines von fünf Analyse-Modulen. Sie
          ergänzt die siderische Astrologie, die ägyptischen Dekane, die Elementar-Analyse und
          Human Design zu einem umfassenden Persönlichkeitsprofil. Das Besondere: Während die
          Astrologie die äußeren kosmischen Einflüsse beschreibt, zeigt die Numerologie die
          innere Schwingung deines Geburtsdatums.
        </p>
      </section>

      {/* Section 2 */}
      <section id="lebenszahl" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Deine Lebenszahl berechnen
        </h2>
        {/* <!-- BILD: Schritt-für-Schritt Illustration der Quersummenberechnung --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Berechnung deiner Lebenszahl folgt einem einfachen Prinzip: Alle Ziffern deines
          Geburtsdatums werden addiert und das Ergebnis so lange reduziert, bis eine einstellige
          Zahl oder eine Meisterzahl entsteht. Dieses Verfahren nennt man iterierte
          Quersummenbildung.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wichtig: Jede Ziffer wird einzeln addiert — nicht Tag, Monat und Jahr getrennt. Das
          Geburtsdatum wird als eine zusammenhängende Zahlenfolge betrachtet. Die Meisterzahlen
          11, 22 und 33 werden dabei <strong className="text-white">nicht</strong> weiter
          reduziert, da ihnen eine besondere Bedeutung zugeschrieben wird.
        </p>

        <div className="my-6 p-5 rounded-xl bg-card border border-border">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">
            Rechenbeispiel
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mb-3">
            Geburtsdatum: <strong className="text-white">24.08.2003</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mb-1">
            Schritt 1: Alle Ziffern addieren<br />
            2 + 4 + 0 + 8 + 2 + 0 + 0 + 3 = <strong className="text-white">19</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mb-1">
            Schritt 2: Quersumme bilden<br />
            1 + 9 = <strong className="text-white">10</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mb-1">
            Schritt 3: Erneut reduzieren<br />
            1 + 0 = <strong className="text-gold text-lg">1</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mt-3">
            Ergebnis: Die Lebenszahl ist <strong className="text-gold">1 — Der Anführer</strong>
          </p>
        </div>

        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Hätte die Quersumme in einem Zwischenschritt 11, 22 oder 33 ergeben, würde an
          dieser Stelle nicht weiter reduziert. Beispiel: Ergibt die erste Addition 29, ist
          die Quersumme 2 + 9 = 11 — eine Meisterzahl, die stehen bleibt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Du möchtest deine eigene Lebenszahl nicht von Hand berechnen? Unser Gratis-Check
          berechnet sie automatisch aus deinem Geburtsdatum — zusammen mit deinem siderischen
          Sternzeichen.
        </p>
      </section>

      {/* Section 3 */}
      <section id="alle-zahlen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Alle Lebenszahlen im Überblick
        </h2>
        {/* <!-- BILD: Übersicht aller 9 Lebenszahlen als kreisförmiges Diagramm --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Jede der neun Lebenszahlen beschreibt einen eigenen Archetyp mit
          charakteristischen Stärken, Herausforderungen und Lebensthemen. Keine Zahl ist
          besser oder schlechter als eine andere — jede hat ihre einzigartige Qualität.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {lebenszahlen.map((z) => (
            <div key={z.nummer} className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-gold text-2xl font-bold">{z.nummer}</span>
                <span className="font-semibold text-white">{z.titel}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{z.beschreibung}</p>
            </div>
          ))}
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          In der AstroMaster Pro-Analyse erhältst du eine ausführliche Deutung deiner
          persönlichen Lebenszahl — eingebettet in den Kontext deines gesamten kosmischen
          Profils aus Astrologie, Human Design und ägyptischen Dekanen.
        </p>
      </section>

      {/* Section 4 */}
      <section id="meisterzahlen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Meisterzahlen 11, 22, 33
        </h2>
        {/* <!-- BILD: Drei symbolische Darstellungen der Meisterzahlen --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Meisterzahlen nehmen in der Numerologie eine Sonderstellung ein. Sie werden bei der
          Berechnung der Lebenszahl nicht weiter reduziert, weil ihnen ein besonders hohes
          energetisches Potenzial zugeschrieben wird. Sie tragen die Schwingung der
          einstelligen Basiszahl (1+1=2, 2+2=4, 3+3=6) und verstärken diese auf einer
          höheren Oktave.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Meisterzahlen sind selten — nur etwa 10% aller Menschen tragen eine. Sie gelten als
          Zeichen eines besonderen Lebensauftrags, bringen aber auch größere innere Spannung
          mit sich. Wer eine Meisterzahl trägt, spürt oft früh, dass er oder sie &quot;anders
          tickt&quot; als die Mehrheit.
        </p>

        <h3 className="text-xl font-medium text-gold mb-3">
          11 — Die Intuition
        </h3>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 11 ist die erste und häufigste Meisterzahl. Sie steht für gesteigerte Intuition,
          spirituelle Wahrnehmung und visionäres Denken. Menschen mit der Lebenszahl 11 sind
          oft hochsensibel und empfangen Eindrücke, die anderen verborgen bleiben. Sie sind
          spirituelle Botschafter, die zwischen der sichtbaren und der unsichtbaren Welt
          vermitteln.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die Herausforderung der 11: Die intensive Wahrnehmung kann überwältigend sein.
          Elfer müssen lernen, ihre Sensibilität als Stärke zu nutzen, statt sich von ihr
          überfluten zu lassen. Wenn sie ihr Potenzial leben, sind sie inspirierende Visionäre
          und charismatische Lehrer.
        </p>

        <h3 className="text-xl font-medium text-gold mb-3">
          22 — Der Meisterbaumeister
        </h3>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 22 verbindet spirituelle Vision mit praktischer Umsetzungskraft. Sie gilt als
          die mächtigste Meisterzahl, weil sie das Potenzial hat, große Visionen in die
          materielle Realität zu bringen. Menschen mit der Lebenszahl 22 sind Brückenbauer
          zwischen dem Geistigen und dem Materiellen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die Herausforderung der 22: Der enorme innere Druck, etwas Bedeutendes zu schaffen,
          kann zu Selbstzweifeln und Überforderung führen. Wenn Zweiundzwanziger ihren Weg
          finden, hinterlassen sie bleibende Werke — Unternehmen, Institutionen oder Bewegungen,
          die über ihr eigenes Leben hinauswirken.
        </p>

        <h3 className="text-xl font-medium text-gold mb-3">
          33 — Der Meisterlehrer
        </h3>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 33 ist die seltenste und am höchsten schwingende Meisterzahl. Sie steht für
          selbstlosen Dienst, bedingungslose Liebe und die Fähigkeit, andere durch das eigene
          Beispiel zu heilen. Menschen mit der Lebenszahl 33 tragen einen tiefen inneren
          Auftrag, zum Wohl der Gemeinschaft beizutragen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Herausforderung der 33: Die Last der Verantwortung kann erdrückend sein. Dreiunddreißiger
          neigen dazu, sich für andere aufzuopfern und dabei die eigenen Bedürfnisse zu
          vergessen. Wenn sie die Balance finden, sind sie die mitfühlendsten und inspirierendsten
          Menschen — wahre Meisterlehrer, die durch ihre bloße Anwesenheit heilen.
        </p>
      </section>

      {/* Section 5 */}
      <section id="geschichte" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Geschichte der Numerologie
        </h2>
        {/* <!-- BILD: Historische Zeitleiste von Pythagoras bis heute --> */}
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Geschichte der Numerologie reicht mindestens 4.000 Jahre zurück. Bereits die
          Babylonier und Ägypter erkannten in Zahlen mehr als bloße Mengenangaben — sie sahen
          in ihnen kosmische Prinzipien, die das Wesen der Wirklichkeit beschreiben. In der
          ägyptischen Tradition war die Zahl 3 heilig (als Symbol der Trinität von Osiris, Isis
          und Horus), während die 7 als Zahl der Vollkommenheit galt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Den entscheidenden Schritt zur systematischen Numerologie machte
          <strong className="text-white"> Pythagoras von Samos</strong> im 6. Jahrhundert v.
          Chr. Der griechische Mathematiker und Philosoph gründete eine Mysterien-Schule in
          Kroton (Süditalien), in der Zahlen als Grundbausteine des Universums gelehrt wurden.
          Sein berühmter Ausspruch &quot;Alles ist Zahl&quot; bildet bis heute das Fundament
          der pythagoräischen Numerologie, die dem westlichen System zugrunde liegt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Parallel entwickelte sich das chaldäische System im mesopotamischen Raum, das
          Buchstaben nicht alphabetisch, sondern nach ihrer Schwingungsqualität Zahlen zuordnet.
          In der jüdischen Tradition entstand die Gematria — ein kabbalistisches System, das
          hebräischen Buchstaben Zahlenwerte zuweist und in heiligen Texten verborgene Muster
          sucht. Diese drei Traditionen — pythagoräisch, chaldäisch und kabbalistisch — bilden
          die Hauptströmungen der historischen Numerologie.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im 20. Jahrhundert erlebte die Numerologie eine Renaissance. Die amerikanische
          Autorin L. Dow Balliett veröffentlichte ab 1911 einflussreiche Bücher, die das
          pythagoräische System für ein modernes Publikum aufbereiteten. Ihre Schülerin
          Florence Campbell prägte den Begriff &quot;Lebenszahl&quot; (Life Path Number),
          der heute weltweit verwendet wird. In jüngerer Zeit hat die Numerologie durch
          digitale Tools und automatisierte Berechnungen eine neue Zugänglichkeit gewonnen —
          was einst stundenlange Handarbeit erforderte, berechnet ein Algorithmus in
          Millisekunden.
        </p>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Häufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
