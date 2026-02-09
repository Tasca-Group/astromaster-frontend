"use client";

import Link from "next/link";
import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "was-sind-chakren", title: "Was sind Chakren?" },
  { id: "ursprung", title: "Ursprung und Geschichte" },
  { id: "sieben-hauptchakren", title: "Die 7 Hauptchakren" },
  { id: "chakren-und-koerper", title: "Chakren und der Körper" },
  { id: "blockiert-vs-offen", title: "Blockiert vs. offen" },
  { id: "chakren-human-design", title: "Chakren und Human Design" },
  { id: "faq", title: "Häufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/human-design", label: "Human Design" },
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
  { href: "/wiki/sieben-chakren", label: "Die 7 Hauptchakren" },
];

const faqItems = [
  {
    question: "Sind Chakren wissenschaftlich bewiesen?",
    answer:
      "Chakren sind nicht im naturwissenschaftlichen Sinne nachgewiesen. Sie stammen aus jahrtausendealter spiritueller Tradition und werden in der Komplementärmedizin genutzt. Viele Menschen berichten von positiven Erfahrungen mit Chakrenarbeit, auch wenn die Wissenschaft dies bisher nicht erklären kann.",
  },
  {
    question: "Kann man Chakren spüren?",
    answer:
      "Mit Übung ja. Viele Menschen nehmen Chakren als Wärme, Kribbeln oder ein Pulsieren an den entsprechenden Körperstellen wahr. Meditation und Achtsamkeitspraxis können die Wahrnehmung der Energiezentren schärfen.",
  },
  {
    question: "Wie öffne ich meine Chakren?",
    answer:
      "Durch Meditation, Yoga, Atemübungen, Mantras, Visualisierung und bewusstes Arbeiten mit den Themen des jeweiligen Chakras. Es gibt auch Ansätze über Farben, Edelsteine und Klang. Wichtig ist regelmäßige Praxis.",
  },
  {
    question: "Was hat das mit Astrologie zu tun?",
    answer:
      "Jedem Chakra werden traditionell bestimmte Planeten und Sternzeichen zugeordnet. Das Wurzelchakra wird mit Saturn, das Herzchakra mit Venus verbunden. Die Analyse deines Geburtshoroskops kann Hinweise auf Chakra-Stärken und -Blockaden geben.",
  },
];

const chakrenOverview = [
  { nr: 1, name: "Wurzelchakra", sanskrit: "Muladhara", position: "Basis der Wirbelsäule", farbe: "Rot", thema: "Sicherheit & Überleben", href: "/wiki/sieben-chakren#wurzelchakra" },
  { nr: 2, name: "Sakralchakra", sanskrit: "Svadhisthana", position: "Unterleib", farbe: "Orange", thema: "Kreativität & Emotionen", href: "/wiki/sieben-chakren#sakralchakra" },
  { nr: 3, name: "Solarplexuschakra", sanskrit: "Manipura", position: "Oberbauch", farbe: "Gelb", thema: "Willenskraft & Identität", href: "/wiki/sieben-chakren#solarplexuschakra" },
  { nr: 4, name: "Herzchakra", sanskrit: "Anahata", position: "Brustmitte", farbe: "Grün", thema: "Liebe & Mitgefühl", href: "/wiki/sieben-chakren#herzchakra" },
  { nr: 5, name: "Halschakra", sanskrit: "Vishuddha", position: "Kehle", farbe: "Blau", thema: "Kommunikation & Ausdruck", href: "/wiki/sieben-chakren#halschakra" },
  { nr: 6, name: "Stirnchakra", sanskrit: "Ajna", position: "Zwischen den Augenbrauen", farbe: "Indigo", thema: "Intuition & Weisheit", href: "/wiki/sieben-chakren#stirnchakra" },
  { nr: 7, name: "Kronenchakra", sanskrit: "Sahasrara", position: "Scheitel", farbe: "Violett/Weiß", thema: "Spiritualität & Einheit", href: "/wiki/sieben-chakren#kronenchakra" },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Was sind Chakren?"
      subtitle="Einführung in das Chakra-System — Ursprung, Bedeutung und Praxis."
      breadcrumb="Chakren"
      sections={sections}
      ctaText="Entdecke deine Energiezentren — Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {["Chakren", "Anfänger", "Spiritualität", "Energie"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Section 1: Was sind Chakren? */}
      <section id="was-sind-chakren" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was sind Chakren?
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Chakren (Sanskrit: &#x091A;&#x0915;&#x094D;&#x0930;, &bdquo;Rad&ldquo; oder &bdquo;Kreis&ldquo;) sind Energiezentren im feinstofflichen Körper des Menschen. Nach der hinduistischen und buddhistischen Tradition bilden sie ein System von Knotenpunkten, durch die Lebensenergie (Prana) fließt. Jedes Chakra ist mit bestimmten körperlichen, emotionalen und spirituellen Funktionen verbunden.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wenn alle Chakren offen und im Gleichgewicht sind, fließt die Energie frei — du fühlst dich vital, ausgeglichen und verbunden. Blockaden in einzelnen Chakren können sich als körperliche Beschwerden, emotionale Probleme oder spirituelle Stagnation zeigen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Arbeit mit Chakren ist ein Weg zur Selbsterkenntnis und ganzheitlichen Gesundheit.
        </p>
      </section>

      {/* Section 2: Ursprung und Geschichte */}
      <section id="ursprung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Ursprung und Geschichte
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die Chakrenlehre hat ihre Wurzeln in den Veden, den ältesten heiligen Schriften des Hinduismus (ca. 1500-500 v. Chr.). Besonders die Upanishaden beschreiben das Konzept der subtilen Energiekanäle (Nadis) und Energiezentren. Im tantrischen Buddhismus und im Yoga wurde das System weiter ausgearbeitet.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das heute verbreitetste 7-Chakra-Modell stammt aus dem Werk &bdquo;Sat-Cakra-Nirupana&ldquo; aus dem 16. Jahrhundert. Im 20. Jahrhundert brachten Autoren wie C.W. Leadbeater die Chakrenlehre in den Westen, wo sie mit westlicher Psychologie und Farbtherapie verbunden wurde.
        </p>
      </section>

      {/* Section 3: Die 7 Hauptchakren im Überblick */}
      <section id="sieben-hauptchakren" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Die 7 Hauptchakren im Überblick
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Nr.</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Name</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Sanskrit</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Position</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Farbe</th>
                <th className="text-left px-4 py-3 text-gold font-medium">Thema</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {chakrenOverview.map((c, i) => (
                <tr
                  key={c.nr}
                  className={i % 2 === 0 ? "bg-card" : "bg-card/50"}
                >
                  <td className="px-4 py-3 text-muted">{c.nr}</td>
                  <td className="px-4 py-3 font-medium text-white">
                    <Link href={c.href} className="hover:text-gold transition-colors">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted italic">{c.sanskrit}</td>
                  <td className="px-4 py-3 text-muted">{c.position}</td>
                  <td className="px-4 py-3 text-muted">{c.farbe}</td>
                  <td className="px-4 py-3 text-gold">{c.thema}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Chakren und der Körper */}
      <section id="chakren-und-koerper" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Chakren und der Körper
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Jedes Chakra wird traditionell bestimmten Organen, Drüsen und Körperbereichen zugeordnet. Das Wurzelchakra ist mit den Nebennieren, dem Skelett und dem Immunsystem verbunden. Das Sakralchakra mit den Keimdrüsen und dem Urogenitaltrakt. Das Solarplexuschakra mit der Bauchspeicheldrüse und dem Verdauungssystem.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Das Herzchakra mit der Thymusdrüse und dem Herz-Kreislauf-System. Das Halschakra mit der Schilddrüse und dem Atemtrakt. Das Stirnchakra mit der Zirbeldrüse und dem Nervensystem. Das Kronenchakra mit der Hypophyse und dem Gehirn.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Moderne Forschung hat bisher keine direkten physiologischen Entsprechungen nachweisen können, jedoch berichten viele Praktizierende von positiven Effekten der Chakrenarbeit auf ihr Wohlbefinden.
        </p>
      </section>

      {/* Section 5: Blockierte vs. offene Chakren */}
      <section id="blockiert-vs-offen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Blockierte vs. offene Chakren
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein blockiertes Chakra zeigt sich durch Mangel oder Überaktivität in seinem Themenbereich. Ein blockiertes Wurzelchakra kann sich als Existenzangst oder Materialismus zeigen. Ein blockiertes Herzchakra als Bindungsangst oder Eifersucht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein offenes, ausbalanciertes Chakra hingegen ermöglicht den freien Energiefluss. Du erkennst offene Chakren an einem Gefühl der Leichtigkeit und Authentizität in den jeweiligen Lebensbereichen. Die Chakren beeinflussen sich gegenseitig — eine Blockade in einem Bereich kann Auswirkungen auf benachbarte Chakren haben.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Regelmäßige Praxis (Meditation, Yoga, Atemarbeit) hilft, alle Zentren im Gleichgewicht zu halten.
        </p>
      </section>

      {/* Section 6: Chakren und Human Design */}
      <section id="chakren-human-design" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Chakren und Human Design — die Verbindung
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Im Human Design System gibt es 9 Zentren, die von den 7 Chakren inspiriert sind, aber ein eigenständiges System bilden. Die Hindu-Chakren Wurzel, Sakral, Solarplexus, Herz, Kehle und Krone finden sich als Zentren im Bodygraph wieder — ergänzt um Milz, G-Zentrum und Ajna (das dritte Auge wird zum mentalen Ajna-Zentrum).
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Im Human Design können Zentren &bdquo;definiert&ldquo; (farbig) oder &bdquo;offen&ldquo; (weiß) sein, ähnlich dem Konzept offener/blockierter Chakren. Der entscheidende Unterschied: Im Human Design ist ein offenes Zentrum nicht negativ, sondern bedeutet Empfänglichkeit und Weisheit.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Die Chakrenlehre und Human Design ergänzen sich — gemeinsam bieten sie ein umfassendes Bild deiner energetischen Landschaft.
        </p>
      </section>

      {/* Section 7: Häufige Fragen */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Häufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
