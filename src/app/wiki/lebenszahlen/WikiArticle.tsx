"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "lebenszahl-1", title: "Lebenszahl 1" },
  { id: "lebenszahl-2", title: "Lebenszahl 2" },
  { id: "lebenszahl-3", title: "Lebenszahl 3" },
  { id: "lebenszahl-4", title: "Lebenszahl 4" },
  { id: "lebenszahl-5", title: "Lebenszahl 5" },
  { id: "lebenszahl-6", title: "Lebenszahl 6" },
  { id: "lebenszahl-7", title: "Lebenszahl 7" },
  { id: "lebenszahl-8", title: "Lebenszahl 8" },
  { id: "lebenszahl-9", title: "Lebenszahl 9" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/numerologie", label: "Numerologie" },
  { href: "/wiki/meisterzahlen", label: "Meisterzahlen 11, 22, 33" },
  { href: "/wiki/human-design", label: "Human Design" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
];

const faqItems = [
  {
    question: "Welche Lebenszahl ist die beste?",
    answer:
      "Keine Lebenszahl ist besser oder schlechter als eine andere. Jede der neun Zahlen beschreibt einen eigenen Archetyp mit einzigartigen Stärken und Herausforderungen. Die 1 ist nicht wertvoller als die 9 — sie beschreibt lediglich einen anderen Lebensweg und andere Kernqualitäten.",
  },
  {
    question: "Wie berechne ich meine Lebenszahl?",
    answer:
      "Addiere alle einzelnen Ziffern deines Geburtsdatums und reduziere das Ergebnis durch wiederholte Quersummenbildung auf eine einstellige Zahl (1-9). Beispiel: 15.03.1990 ergibt 1+5+0+3+1+9+9+0 = 28, dann 2+8 = 10, dann 1+0 = 1. Ausnahme: Die Meisterzahlen 11, 22 und 33 werden nicht weiter reduziert.",
  },
  {
    question: "Kann ich mehrere Lebenszahlen haben?",
    answer:
      "Nein, jeder Mensch hat genau eine Lebenszahl. Sie ergibt sich eindeutig aus dem Geburtsdatum. Allerdings gibt es in der Numerologie weitere Zahlen wie die Namenszahl oder die Herzenszahl, die zusätzliche Aspekte der Persönlichkeit beleuchten.",
  },
  {
    question: "Passen bestimmte Lebenszahlen besser zusammen?",
    answer:
      "In der Numerologie gibt es Zahlen-Kompatibilitäten: Die 1 harmoniert oft mit der 5 und 7, die 2 mit der 4 und 8, die 3 mit der 6 und 9. Allerdings sind das Tendenzen, keine festen Regeln. Jede Zahlenkombination kann funktionieren, wenn beide Partner ihre Stärken und Unterschiede verstehen.",
  },
  {
    question: "Beeinflusst die Lebenszahl die Berufswahl?",
    answer:
      "Die Lebenszahl beschreibt Kernstärken und natürliche Talente, die sich auch im Beruf zeigen. Die 1 eignet sich für Führungspositionen, die 3 für kreative Berufe, die 8 für Unternehmertum. Das sind jedoch Tendenzen — die Lebenszahl determiniert nicht deine Karriere, sondern zeigt, in welchen Bereichen du natürlich aufblühst.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Alle Lebenszahlen (1-9)"
      subtitle="Jede der neun Lebenszahlen beschreibt einen eigenen Archetyp mit charakteristischen Stärken, Herausforderungen und Lebensthemen. Entdecke, was deine Zahl über deinen Lebensweg verrät."
      breadcrumb="Lebenszahlen"
      sections={sections}
      ctaText="Berechne deine Lebenszahl — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Lebenszahl 1 */}
      <section id="lebenszahl-1" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 1 — Der Anführer
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Unabhängigkeit, Pioniergeist, Führungskraft</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Menschen mit der Lebenszahl 1 sind geborene Anführer. Sie tragen eine natürliche Autorität in sich und spüren von klein auf den Drang, ihren eigenen Weg zu gehen. Die Eins ist die Zahl des Anfangs, des Neubeginns und der Schöpferkraft. Wer diese Lebenszahl trägt, ist hier, um Neues in die Welt zu bringen — sei es eine Idee, ein Unternehmen oder eine Bewegung.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Entschlossenheit, Mut, Originalität, Selbstvertrauen, Durchsetzungskraft. Einser sind Visionäre, die nicht darauf warten, dass andere den ersten Schritt machen. Sie handeln, wo andere zögern.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Sturheit, Dominanz, Ungeduld mit anderen. Die größte Lektion der 1 ist es, Führung mit Einfühlungsvermögen zu verbinden und zu erkennen, dass wahre Stärke auch im Zuhören liegt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Unternehmertum, Management, Selbstständigkeit, Erfindertätigkeit, Politik. Einser blühen auf, wenn sie Verantwortung tragen und Entscheidungen treffen dürfen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Einser brauchen Partner, die ihre Unabhängigkeit respektieren, ohne sich unterordnen zu müssen. Die besten Beziehungen entstehen auf Augenhöhe — mit jemandem, der eigene Stärke mitbringt.
        </p>
      </section>

      {/* Lebenszahl 2 */}
      <section id="lebenszahl-2" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 2 — Der Diplomat
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Harmonie, Intuition, Kooperation</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Lebenszahl 2 ist die Zahl der Partnerschaft und der Balance. Zweier besitzen eine außergewöhnliche Fähigkeit, die Gefühle und Bedürfnisse anderer wahrzunehmen. Sie sind natürliche Vermittler, die in jeder Gruppe instinktiv nach Ausgleich suchen. Ihre Kraft liegt nicht im Voranpreschen, sondern im Verbinden.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Empathie, Geduld, diplomatisches Geschick, Sensibilität, Teamfähigkeit. Zweier schaffen Räume, in denen sich andere sicher fühlen und öffnen können. Sie sind die stillen Architekten der Harmonie.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Überanpassung, Konfliktvermeidung, Selbstvernachlässigung. Die Lektion der 2 ist es, die eigenen Bedürfnisse genauso ernst zu nehmen wie die der anderen — und zu lernen, auch einmal Nein zu sagen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Mediation, Beratung, Therapie, Sozialarbeit, Diplomatie, Personalwesen. Überall dort, wo Fingerspitzengefühl und zwischenmenschliche Kompetenz gefragt sind, glänzen Zweier.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Zweier sind hingebungsvolle Partner, die alles für eine Beziehung tun. Ihre Herausforderung ist es, sich dabei nicht selbst zu verlieren. Die ideale Partnerschaft gibt ihnen ebenso viel Zuwendung zurück, wie sie investieren.
        </p>
      </section>

      {/* Lebenszahl 3 */}
      <section id="lebenszahl-3" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 3 — Der Kreative
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Kreativität, Ausdruck, Lebensfreude</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 3 ist die Zahl der Kreativität und des Selbstausdrucks. Menschen mit dieser Lebenszahl sprühen vor Ideen, Begeisterung und künstlerischem Talent. Sie sind geborene Kommunikatoren, die andere mit Worten, Bildern oder Musik berühren können. Die Dreier-Energie ist expansiv, fröhlich und ansteckend.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Ausdruckskraft, Optimismus, Charme, künstlerisches Talent, Humor. Dreier bringen Farbe und Leichtigkeit in jede Situation. Ihr natürliches Charisma zieht andere magisch an.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Oberflächlichkeit, Zerstreuung, emotionale Höhen und Tiefen. Die Lektion der 3 ist Fokus — die Energie nicht in tausend Projekte zu verteilen, sondern ein Talent wirklich zu vertiefen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Kunst, Schauspiel, Schreiben, Marketing, Design, Unterhaltung, Coaching. Überall dort, wo Kreativität und Kommunikation gefragt sind, blühen Dreier auf.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Dreier brauchen einen Partner, der ihre Kreativität wertschätzt und ihnen Raum für Selbstausdruck lässt. Langeweile ist der größte Feind einer Dreier-Beziehung — Abwechslung und geistige Stimulation halten die Flamme am Leben.
        </p>
      </section>

      {/* Lebenszahl 4 */}
      <section id="lebenszahl-4" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 4 — Der Baumeister
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Stabilität, Disziplin, Verlässlichkeit</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 4 ist die Zahl des Fundaments. Vierer bauen Dinge, die Bestand haben — Karrieren, Familien, Häuser, Systeme. Sie sind methodisch, geduldig und unglaublich ausdauernd. Wo andere aufgeben, machen Vierer weiter. Ihre Stärke liegt in der Fähigkeit, große Pläne Schritt für Schritt in die Realität umzusetzen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Zuverlässigkeit, Organisation, Ausdauer, Pragmatismus, Loyalität. Vierer sind die Menschen, auf die man zählen kann. Sie halten ihr Wort und bringen zu Ende, was sie anfangen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Starrheit, Kontrollbedürfnis, Widerstand gegen Veränderung. Die Lektion der 4 ist Flexibilität — zu akzeptieren, dass nicht alles planbar ist und dass auch Umwege zum Ziel führen können.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Ingenieurwesen, Architektur, Projektmanagement, Buchhaltung, Handwerk, IT-Systeme. Vierer glänzen in Berufen, die Struktur, Präzision und langfristiges Denken erfordern.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Vierer sind treue, beständige Partner, die Sicherheit und Stabilität bieten. Sie drücken Liebe eher durch Taten als durch Worte aus. Ihr idealer Partner schätzt diese Verlässlichkeit und bringt gleichzeitig etwas Spontaneität in den Alltag.
        </p>
      </section>

      {/* Lebenszahl 5 */}
      <section id="lebenszahl-5" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 5 — Der Freigeist
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Freiheit, Abenteuer, Wandelbarkeit</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 5 steht im Zentrum der Zahlenreihe 1-9 und verkörpert Bewegung, Veränderung und Erfahrung. Fünfer sind die Abenteurer der Numerologie. Sie lernen durch Erleben, nicht durch Lesen. Ihr Lebenshunger treibt sie in die Welt hinaus — neue Orte, neue Menschen, neue Ideen. Stillstand ist für eine 5 gleichbedeutend mit Rückschritt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Anpassungsfähigkeit, Vielseitigkeit, Neugierde, Mut, Charisma. Fünfer können sich blitzschnell auf neue Situationen einstellen und finden in fast jeder Umgebung zurecht. Sie sind natürliche Geschichtenerzähler mit einem reichen Erfahrungsschatz.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Rastlosigkeit, Unbeständigkeit, Flucht vor Verantwortung. Die zentrale Lektion der 5 ist es, Freiheit nicht mit Bindungsangst zu verwechseln — und zu lernen, dass auch Tiefe und Beständigkeit eine Form von Abenteuer sein können.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Journalismus, Reisebranche, Vertrieb, Eventmanagement, Gastronomie, Freelancing. Fünfer brauchen Abwechslung und sollten monotone Routinejobs meiden — sie verwelken hinter einem starren Schreibtisch.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Fünfer brauchen einen Partner, der ihre Freiheit versteht und eigene Interessen mitbringt. Klammernde Beziehungen ersticken sie. Die besten Fünfer-Partnerschaften sind dynamisch, voller gemeinsamer Abenteuer und gegenseitigem Respekt für persönlichen Freiraum.
        </p>
      </section>

      {/* Lebenszahl 6 */}
      <section id="lebenszahl-6" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 6 — Der Fürsorger
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Verantwortung, Fürsorge, Harmonie</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 6 ist die Zahl der Liebe, der Familie und der Verantwortung. Sechser sind die Hüter und Beschützer in ihrem Umfeld. Sie spüren instinktiv, wenn jemand Hilfe braucht, und stellen die Bedürfnisse anderer oft über die eigenen. Ihr Zuhause ist ihr Heiligtum — ein Ort der Wärme, an dem sich alle willkommen fühlen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Mitgefühl, Verantwortungsbewusstsein, Gerechtigkeitssinn, Warmherzigkeit, Ästhetik. Sechser schaffen Harmonie, wo immer sie auftauchen. Sie haben ein Auge für Schönheit und einen Sinn für das Richtige.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Aufopferung, Kontrollbedürfnis, Perfektionismus. Die Lektion der 6 ist es, zu erkennen, dass wahre Fürsorge auch Loslassen bedeutet — und dass man für andere nur dann da sein kann, wenn man zuerst für sich selbst sorgt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Heilberufe, Therapie, Erziehung, Sozialarbeit, Innenarchitektur, Gastronomie, Pflege. Sechser finden Erfüllung in Berufen, die direkt zum Wohlergehen anderer beitragen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Sechser sind liebevolle, hingebungsvolle Partner, die alles für ihre Familie tun. Sie müssen jedoch darauf achten, ihren Partner nicht zu bemuttern oder zu kontrollieren. Die ideale Partnerschaft gibt ihnen Raum, ihre Fürsorge auszuleben, ohne sich dabei selbst zu vergessen.
        </p>
      </section>

      {/* Lebenszahl 7 */}
      <section id="lebenszahl-7" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 7 — Der Sucher
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Weisheit, Analyse, Spiritualität</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 7 ist die Zahl der Suche nach Wahrheit. Siebener sind die Philosophen, Denker und Forscher unter den Lebenszahlen. Sie geben sich nie mit oberflächlichen Antworten zufrieden und graben tiefer, bis sie das Wesen einer Sache verstehen. Ihre innere Welt ist reich und komplex — oft reicher als das, was sie nach außen zeigen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Analytisches Denken, Intuition, Tiefgang, Beobachtungsgabe, Wissensdurst. Siebener sehen Dinge, die andere übersehen. Ihre Kombination aus scharfem Verstand und spiritueller Tiefe macht sie zu außergewöhnlichen Denkern.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Isolation, Misstrauen, Überintellektualisierung. Die Lektion der 7 ist es, den Kopf mit dem Herzen zu verbinden — Wissen allein reicht nicht, es braucht auch emotionale Verbindung und Vertrauen in andere.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Forschung, Wissenschaft, Psychologie, Philosophie, Programmierung, Schreiben, Spiritualität. Siebener brauchen Berufe, die intellektuelle Tiefe ermöglichen und Raum für eigenständiges Denken bieten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Siebener brauchen Zeit und Raum für sich allein — das ist kein Zeichen von Desinteresse, sondern ein echtes Bedürfnis. Der ideale Partner versteht das, drängt nicht und schafft eine Atmosphäre des Vertrauens, in der sich die 7 langsam öffnen kann.
        </p>
      </section>

      {/* Lebenszahl 8 */}
      <section id="lebenszahl-8" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 8 — Der Macher
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Macht, Erfolg, Manifestation</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 8 ist die Zahl der materiellen Meisterschaft. Achter verstehen die Gesetze von Ursache und Wirkung wie keine andere Lebenszahl. Sie denken groß, handeln entschlossen und haben eine natürliche Autorität im Bereich von Finanzen, Geschäft und Organisation. Die 8 symbolisiert das Gleichgewicht zwischen der materiellen und der geistigen Welt — gespiegelt in ihrer Form, der liegenden Acht (Unendlichkeitszeichen).
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Durchsetzungskraft, strategisches Denken, Geschäftssinn, Effizienz, Belastbarkeit. Achter sind geborene Unternehmer und Führungskräfte, die unter Druck aufblühen und andere durch ihre Vision mitreißen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Workaholic-Tendenz, Materialismus, Kontrollsucht. Die Lektion der 8 ist es, zu erkennen, dass wahrer Reichtum nicht nur auf dem Konto liegt — emotionale Tiefe, Beziehungen und Gesundheit sind ebenso wichtige Währungen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Unternehmertum, Finanzen, Immobilien, Management, Recht, Chirurgie. Achter brauchen Berufe, in denen sie Verantwortung tragen, Entscheidungen treffen und messbare Ergebnisse erzielen können.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Achter sind leidenschaftliche, loyale Partner, die alles geben — aber auch viel erwarten. Sie brauchen jemanden, der sie nicht nur bewundert, sondern auch herausfordert. Die besten Achter-Beziehungen sind Partnerschaften zwischen zwei starken Persönlichkeiten, die gemeinsam Berge versetzen.
        </p>
      </section>

      {/* Lebenszahl 9 */}
      <section id="lebenszahl-9" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Lebenszahl 9 — Der Humanist
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <p className="text-sm text-gold mb-1 uppercase tracking-wider">Kernqualität</p>
          <p className="text-base text-white font-medium">Mitgefühl, Weisheit, Dienst an der Menschheit</p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 9 ist die höchste einstellige Zahl und steht für Vollendung, Weisheit und universelle Liebe. Neuner sehen das große Ganze und verstehen, dass alles miteinander verbunden ist. Sie tragen eine tiefe Empathie in sich, die über den persönlichen Kreis hinausgeht — sie fühlen mit der Welt. Die 9 schließt den Zyklus der Lebenszahlen ab und enthält in sich die Essenz aller vorherigen Zahlen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Mitgefühl, Idealismus, Kreativität, Großzügigkeit, Charisma. Neuner inspirieren andere durch ihr Beispiel und ihre Vision einer besseren Welt. Sie besitzen eine natürliche Anziehungskraft, die aus ihrer inneren Tiefe kommt.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Weltschmerz, Aufopferung, Schwierigkeiten beim Loslassen. Die Lektion der 9 ist es, Mitgefühl mit Abgrenzung zu verbinden — man kann der Welt nicht helfen, wenn man an ihrem Leid zerbricht. Auch das Loslassen von Vergangenem gehört zur Reifung der 9.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Beruf:</strong> Humanitäre Arbeit, Kunst, Therapie, Lehre, gemeinnützige Organisationen, Umweltschutz, Medizin. Neuner finden Erfüllung in Berufen, die über den eigenen Profit hinaus einen positiven Beitrag für die Gemeinschaft leisten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Beziehung:</strong> Neuner lieben tief und bedingungslos, erwarten aber auch emotionale Tiefe von ihrem Partner. Oberflächliche Beziehungen langweilen sie schnell. Sie suchen eine Seelenverwandtschaft — einen Menschen, mit dem sie nicht nur den Alltag, sondern auch ihre Träume und Ideale teilen können.
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
