"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-sind", title: "Was sind Meisterzahlen?" },
  { id: "meisterzahl-11", title: "Meisterzahl 11" },
  { id: "meisterzahl-22", title: "Meisterzahl 22" },
  { id: "meisterzahl-33", title: "Meisterzahl 33" },
  { id: "erkennung", title: "Erkennung und Deutung" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/numerologie", label: "Numerologie" },
  { href: "/wiki/lebenszahlen", label: "Lebenszahlen 1-9" },
  { href: "/wiki/human-design", label: "Human Design" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
];

const faqItems = [
  {
    question: "Warum werden Meisterzahlen nicht weiter reduziert?",
    answer:
      "Meisterzahlen (11, 22, 33) werden in der Numerologie nicht auf eine einstellige Zahl reduziert, weil ihnen ein besonders hohes energetisches Potenzial zugeschrieben wird. Sie tragen die Schwingung ihrer Basiszahl (2, 4, 6) auf einer verstärkten, höheren Oktave und gelten als Zeichen eines besonderen Lebensauftrags.",
  },
  {
    question: "Wie selten sind Meisterzahlen?",
    answer:
      "Etwa 10% aller Menschen tragen die Meisterzahl 11, deutlich weniger die 22 und nur sehr wenige die 33. Die 33 ist die seltenste Meisterzahl, weil das Geburtsdatum eine ganz bestimmte Ziffernkombination erfordern muss, um bei der Quersummenbildung auf 33 zu kommen.",
  },
  {
    question: "Kann eine Meisterzahl auch belastend sein?",
    answer:
      "Ja, Meisterzahlen tragen ein höheres Potenzial, aber auch größere innere Spannung. Viele Menschen mit Meisterzahlen berichten von dem Gefühl, anders zu sein, von intensiven emotionalen Phasen und dem Druck, ihrem besonderen Potenzial gerecht zu werden. Die Meisterzahl ist Geschenk und Herausforderung zugleich.",
  },
  {
    question: "Gibt es Meisterzahlen über 33?",
    answer:
      "In der klassischen Numerologie werden nur 11, 22 und 33 als Meisterzahlen anerkannt. Einige moderne Schulen zählen auch 44, 55 und höhere Doppelzahlen dazu, aber das ist nicht allgemein akzeptiert. AstroMaster arbeitet mit dem etablierten System der drei Meisterzahlen.",
  },
  {
    question: "Wie erkenne ich, ob ich eine Meisterzahl habe?",
    answer:
      "Berechne die Quersumme deines Geburtsdatums Schritt für Schritt. Wenn in einem Zwischenschritt die Zahl 11, 22 oder 33 erscheint, hast du eine Meisterzahl — sie wird dann nicht weiter reduziert. Der einfachste Weg: Nutze den AstroMaster Gratis-Check, der deine Lebenszahl automatisch berechnet und Meisterzahlen erkennt.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Meisterzahlen 11, 22 & 33"
      subtitle="Meisterzahlen sind seltene numerologische Kraftzahlen, die nicht weiter reduziert werden. Sie stehen für ein besonderes spirituelles Potenzial — und eine besondere Verantwortung."
      breadcrumb="Meisterzahlen"
      sections={sections}
      ctaText="Trägst du eine Meisterzahl? — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Was sind Meisterzahlen? */}
      <section id="was-sind" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was sind Meisterzahlen?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          In der Numerologie gibt es drei besondere Zahlen, die eine Sonderstellung einnehmen: 11, 22 und 33. Diese sogenannten Meisterzahlen werden bei der Berechnung der Lebenszahl nicht auf eine einstellige Zahl reduziert, weil ihnen ein außergewöhnliches energetisches Potenzial zugeschrieben wird. Sie schwingen auf einer höheren Frequenz als die regulären Lebenszahlen 1-9.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Prinzip dahinter: Jede Meisterzahl ist eine verdoppelte einstellige Zahl (1+1, 2+2, 3+3). Diese Verdoppelung wird nicht als bloße Addition verstanden, sondern als Verstärkung und Erhöhung. Die 11 trägt die Energie der 2 (Kooperation, Intuition), aber auf einer intensiveren, spirituelleren Ebene. Die 22 verstärkt die 4 (Struktur, Aufbau) zur Meisterbaumeister-Energie. Und die 33 hebt die 6 (Fürsorge, Harmonie) auf die Ebene des universellen Lehrers und Heilers.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Meisterzahlen sind selten. Nur etwa 10% aller Menschen tragen eine Meisterzahl als Lebenszahl, wobei die 11 die häufigste und die 33 die seltenste ist. Das bedeutet nicht, dass Meisterzahl-Träger &quot;besser&quot; sind als andere — aber sie tragen ein spezifisches Potenzial und eine spezifische Aufgabe in sich, die über das Persönliche hinausgeht.
        </p>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-4">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Wichtig zu wissen</p>
          <p className="text-base text-muted/90 leading-[1.7]">
            Eine Meisterzahl zu tragen bedeutet nicht automatisch, ein &quot;Meister&quot; zu sein. Es bedeutet, dass du das Potenzial für eine bestimmte Form der Meisterschaft in dir trägst. Ob und wie du dieses Potenzial lebst, hängt von deiner persönlichen Entwicklung ab. Viele Meisterzahl-Träger berichten, dass ihr Leben intensiver verläuft — mit höheren Höhen und tieferen Tiefen als bei anderen.
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7]">
          In der Geschichte der Numerologie wurden Meisterzahlen schon von den Pythagoräern als heilige Doppelzahlen verehrt. Die chaldäische Tradition kannte das Konzept ebenfalls, wenngleich unter anderen Namen. In der modernen Numerologie hat sich das Drei-Meisterzahlen-System (11, 22, 33) seit dem frühen 20. Jahrhundert als Standard etabliert.
        </p>
      </section>

      {/* Section 2: Meisterzahl 11 */}
      <section id="meisterzahl-11" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Meisterzahl 11 — Der Visionär
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-gold text-3xl font-bold">11</span>
            <span className="text-white font-medium">Basiszahl: 2 | Element: Intuition | Häufigkeit: ca. 10%</span>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Meisterzahl 11 ist die &quot;spirituelle Antenne&quot; der Numerologie. Menschen mit dieser Lebenszahl besitzen eine außergewöhnlich feine Wahrnehmung, die weit über das Rationale hinausgeht. Sie spüren Stimmungen in einem Raum, bevor ein Wort gesprochen wird. Sie ahnen Entwicklungen, bevor sie eintreten. Ihre Intuition ist kein vages Bauchgefühl, sondern eine zuverlässige innere Führung, die ihnen den Weg weist.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Gesteigerte Intuition, visionäres Denken, charismatische Ausstrahlung, spirituelle Tiefe, Inspirationskraft. Elfer sind oft künstlerisch begabt und verfügen über eine natürliche Anziehungskraft, die andere in ihren Bann zieht. Sie können komplexe Zusammenhänge erfassen, die anderen verborgen bleiben, und diese in Worte oder Bilder fassen, die berühren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Überempfindlichkeit, Nervosität, Selbstzweifel, Angst vor der eigenen Kraft. Die intensive Wahrnehmung der 11 kann überwältigend sein — besonders in jungen Jahren, wenn man noch nicht gelernt hat, die eigene Sensibilität zu steuern. Viele Elfer durchleben Phasen der Unsicherheit, bis sie ihr Potenzial erkennen und annehmen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Lebensaufgabe:</strong> Die 11 ist hier, um zu inspirieren. Ihr Auftrag ist es, die unsichtbaren Wahrheiten, die sie wahrnimmt, in die sichtbare Welt zu bringen — durch Kunst, Worte, Heilung oder einfach durch ihre Präsenz. Wenn Elfer ihre Angst überwinden und ihre Vision teilen, können sie das Leben vieler Menschen berühren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Bekannte Persönlichkeiten mit der 11:</strong> Barack Obama (04.08.1961), Wolfgang Amadeus Mozart (27.01.1756), Michelle Obama (17.01.1964). Diese Menschen verkörpern die inspirierende, visionäre Kraft der 11 auf unterschiedliche Weise.
        </p>
      </section>

      {/* Section 3: Meisterzahl 22 */}
      <section id="meisterzahl-22" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Meisterzahl 22 — Der Meisterbaumeister
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-gold text-3xl font-bold">22</span>
            <span className="text-white font-medium">Basiszahl: 4 | Element: Manifestation | Häufigkeit: ca. 3-4%</span>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 22 gilt in der Numerologie als die mächtigste aller Meisterzahlen. Sie vereint spirituelle Vision (11) mit praktischer Umsetzungskraft (4) zu einer einzigartigen Fähigkeit: Sie kann Träume in die materielle Realität bringen — nicht im Kleinen, sondern im Großen. Wo die 4 ein Haus baut, baut die 22 eine Kathedrale. Wo die 4 ein Unternehmen führt, gründet die 22 eine Bewegung.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Visionäre Planung, Manifestationskraft, systemisches Denken, Ausdauer auf höchstem Niveau, Brückenbauer zwischen Ideal und Realität. Zweiundzwanziger denken in großen Maßstäben und haben die seltene Gabe, eine langfristige Vision mit konkreten Schritten zu verbinden. Sie sind die Architekten der Zukunft.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Enormer innerer Druck, Perfektionismus, Überforderung, das Gefühl, nie genug zu leisten. Die 22 spürt, dass sie für etwas Großes bestimmt ist — aber die Last dieser Bestimmung kann erdrückend sein. Viele Zweiundzwanziger kämpfen mit Selbstzweifeln und dem Gefühl, dem eigenen Potenzial nicht gerecht zu werden.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Lebensaufgabe:</strong> Die 22 ist hier, um bleibende Strukturen zu erschaffen — Organisationen, Systeme, Werke, die über das eigene Leben hinauswirken. Ihr Auftrag ist es, die Kluft zwischen dem, was ist, und dem, was sein könnte, zu überbrücken. Das erfordert Geduld, Disziplin und den Mut, groß zu träumen und gleichzeitig klein anzufangen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Bekannte Persönlichkeiten mit der 22:</strong> Paul McCartney (18.06.1942), die Dalai Lamas der Gelug-Tradition und viele bedeutende Architekten und Ingenieure, die bleibende Bauwerke hinterlassen haben. Die 22 manifestiert sich oft in Menschen, die etwas Dauerhaftes schaffen.
        </p>
      </section>

      {/* Section 4: Meisterzahl 33 */}
      <section id="meisterzahl-33" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Meisterzahl 33 — Der Meisterlehrer
        </h2>
        <div className="p-5 rounded-xl bg-card border border-gold/20 mb-6">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-gold text-3xl font-bold">33</span>
            <span className="text-white font-medium">Basiszahl: 6 | Element: Mitgefühl | Häufigkeit: unter 1%</span>
          </div>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die 33 ist die seltenste und am höchsten schwingende Meisterzahl. Sie wird auch als &quot;Meister des heilenden Lichts&quot; bezeichnet und vereint die Intuition der 11 mit der Manifestationskraft der 22 zu einer dritten, transzendenten Qualität: bedingungslose Liebe und selbstloser Dienst. Die 33 steht nicht für persönlichen Erfolg, sondern für die Fähigkeit, andere durch das eigene Sein zu heilen und zu erheben.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Stärken:</strong> Tiefes Mitgefühl, Heilkraft, selbstlose Hingabe, Weisheit, die Fähigkeit, durch bloße Anwesenheit Frieden zu stiften. Dreiunddreißiger verstehen das Leid anderer auf einer so tiefen Ebene, dass sie instinktiv wissen, was zur Heilung nötig ist. Sie sind die geborenen Lehrer, Heiler und spirituellen Führer — nicht durch Dogma, sondern durch Authentizität.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Herausforderungen:</strong> Extreme Selbstaufopferung, emotionale Erschöpfung, das Gefühl, die Last der Welt auf den Schultern zu tragen. Die 33 gibt so viel, dass sie oft vergisst, auch von anderen zu empfangen. Viele Dreiunddreißiger durchleben intensive Lebenskrisen, die als Katalysatoren für ihre spirituelle Entwicklung dienen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Lebensaufgabe:</strong> Die 33 ist hier, um zu heilen, zu lehren und bedingungslose Liebe vorzuleben. Ihr Auftrag ist der größte und gleichzeitig der schwerste aller Meisterzahlen: durch das eigene Beispiel zu zeigen, dass Mitgefühl die stärkste Kraft im Universum ist. Das erfordert einen lebenslangen Weg der Selbsterkenntnis und Selbstfürsorge.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">Bekannte Persönlichkeiten mit der 33:</strong> Albert Einstein (14.03.1879), Mutter Teresa und andere historische Figuren, die ihr Leben dem Dienst an der Menschheit gewidmet haben. Die 33 manifestiert sich in Menschen, die einen bleibenden Eindruck auf das kollektive Bewusstsein hinterlassen.
        </p>
      </section>

      {/* Section 5: Erkennung und Deutung */}
      <section id="erkennung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Erkennung und Deutung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Erkennung einer Meisterzahl folgt einer klaren Regel: Wenn bei der schrittweisen Quersummenbildung des Geburtsdatums in einem Zwischenschritt die Zahl 11, 22 oder 33 erscheint, wird an dieser Stelle nicht weiter reduziert. Die Meisterzahl bleibt stehen und bildet die Lebenszahl.
        </p>
        <div className="p-5 rounded-xl bg-card border border-border mb-6">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Rechenbeispiel: Meisterzahl 11</p>
          <p className="text-base text-muted/90 leading-[1.7] mb-2">
            Geburtsdatum: <strong className="text-white">29.09.1989</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mb-1">
            Schritt 1: 2 + 9 + 0 + 9 + 1 + 9 + 8 + 9 = <strong className="text-white">47</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mb-1">
            Schritt 2: 4 + 7 = <strong className="text-gold text-lg">11</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mt-3">
            Ergebnis: <strong className="text-gold">Meisterzahl 11 — Der Visionär</strong> (wird nicht auf 2 reduziert)
          </p>
        </div>
        <div className="p-5 rounded-xl bg-card border border-border mb-6">
          <p className="text-sm text-gold mb-2 uppercase tracking-wider">Rechenbeispiel: Meisterzahl 22</p>
          <p className="text-base text-muted/90 leading-[1.7] mb-2">
            Geburtsdatum: <strong className="text-white">22.12.1979</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mb-1">
            Schritt 1: 2 + 2 + 1 + 2 + 1 + 9 + 7 + 9 = <strong className="text-white">33</strong>
          </p>
          <p className="text-base text-muted/90 leading-[1.7] mt-3">
            Ergebnis: <strong className="text-gold">Meisterzahl 33 — Der Meisterlehrer</strong> (wird nicht auf 6 reduziert)
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Die Dualität der Meisterzahlen:</strong> Jede Meisterzahl lebt in einer ständigen Spannung zwischen ihrer erhöhten Schwingung und ihrer Basiszahl. Ein Mensch mit der 11 pendelt zwischen der visionären Kraft der 11 und der sanften Empfindsamkeit der 2. Ein Mensch mit der 22 schwankt zwischen dem Drang, die Welt zu verändern (22), und dem Bedürfnis nach Sicherheit und Ordnung (4). Diese innere Spannung ist die Quelle sowohl der Kraft als auch der Herausforderung.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Meisterzahlen und Alter:</strong> Numerologen beobachten, dass Meisterzahlen oft erst ab dem 30. bis 40. Lebensjahr voll zum Tragen kommen. In jüngeren Jahren leben viele Meisterzahl-Träger eher die Energie ihrer Basiszahl und spüren dabei ein unbestimmtes Gefühl, dass &quot;da noch mehr sein muss&quot;. Der Übergang zur vollen Meisterzahl-Energie wird oft von einer Lebenskrise oder einem spirituellen Erwachen begleitet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Im AstroMaster-System wird deine Lebenszahl automatisch berechnet — inklusive Erkennung von Meisterzahlen. Die Pro-Analyse enthält eine ausführliche Deutung, die deine Meisterzahl im Kontext deines gesamten kosmischen Profils aus siderischer Astrologie, ägyptischen Dekanen und Human Design interpretiert.
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
