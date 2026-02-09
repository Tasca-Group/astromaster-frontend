"use client";

import OrderFlow from "@/components/OrderFlow";
import FAQAccordion from "@/components/FAQAccordion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const faqItems = [
  {
    question: "Was genau bekomme ich?",
    answer:
      "Ein professionell gestaltetes PDF-Dokument mit deiner persönlichen Analyse aus 5 Systemen: Siderische Astrologie, Numerologie, Ägyptische Dekane, Human Design und Elementar-Analyse. Die Standard-Version umfasst 12-15 Seiten, die Pro-Version 50-60 Seiten.",
  },
  {
    question: "Wie lange dauert die Erstellung?",
    answer:
      "Deine Analyse wird in wenigen Minuten automatisch berechnet und generiert. Du erhältst sie per Email, sobald sie fertig ist.",
  },
  {
    question: "In welchem Format kommt die Analyse?",
    answer:
      "Als hochwertiges PDF im Dark-Gold-Design, optimiert für Bildschirm und Druck. Du kannst es auf jedem Gerät lesen.",
  },
  {
    question: "Was wenn mein Sternzeichen gleich bleibt?",
    answer:
      "Das kommt bei etwa 14% der Menschen vor. Auch dann enthält deine Analyse wertvolle Einblicke — denn Mond, Aszendent, Planeten und Häuser weichen fast immer ab.",
  },
  {
    question: "Kann ich für andere Personen bestellen?",
    answer:
      "Ja! Mit dem Familien-Feature kannst du bis zu 5 Personen in einer Bestellung zusammenfassen und sparst dabei bis zu 25%.",
  },
  {
    question: "Gibt es eine Geld-zurück-Garantie?",
    answer:
      "Ja, du hast 14 Tage Zufriedenheitsgarantie. Wenn du nicht zufrieden bist, erstatten wir den vollen Betrag.",
  },
  {
    question: "Was ist der Unterschied zwischen Standard und Pro?",
    answer:
      "Die Standard-Analyse konzentriert sich auf Sonne, Mond, Aszendent, Lebenszahl und Elemente. Die Pro-Analyse enthält zusätzlich alle 10 Planeten, 12 Häuser, Aspekte, Nakshatras, Ägyptische Dekane, Human Design, Ma'at-Synthese und ein Journaling-Kapitel.",
  },
  {
    question: "Brauche ich meine genaue Geburtszeit?",
    answer:
      "Für die bestmögliche Analyse ja — besonders der Aszendent und die Häuser hängen von der exakten Geburtszeit ab. Ohne Geburtszeit können wir trotzdem eine fundierte Analyse erstellen, nutzen dann aber Mittagszeit als Näherung.",
  },
];

const testimonials = [
  {
    name: "Laura M.",
    location: "Berlin",
    quote:
      "Ich war mein ganzes Leben lang Jungfrau. Jetzt weiß ich, dass ich eigentlich Löwe bin — und plötzlich ergibt alles Sinn.",
  },
  {
    name: "Thomas K.",
    location: "Wien",
    quote:
      "Die Tiefe der Analyse hat mich umgehauen. 5 verschiedene Systeme, die alle zum gleichen Ergebnis kommen. Beeindruckend.",
  },
  {
    name: "Sarah P.",
    location: "Zürich",
    quote:
      "Endlich eine Astrologie-Seite, die auf echten astronomischen Daten basiert. Das PDF ist wunderschön gestaltet.",
  },
];

export default function AnalyseTestPage() {
  return (
    <main>
      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6">
        {/* <!-- BILD: Premium kosmisches Hero-Bild --> */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Deine Analyse
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.15em]">
            Dein kosmisches Profil
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            5 Systeme. Astronomisch korrekt. Persönlich für dich berechnet.
          </p>
          <button
            onClick={() => scrollToSection("konfigurator")}
            className="mt-10 inline-flex items-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors"
          >
            Jetzt konfigurieren
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-0.5"
            >
              <path
                d="M8 3v10M3 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </AnimateOnScroll>
      </section>

      {/* ========== SECTION 2: VIDEO PLACEHOLDER ========== */}
      <section className="py-24 px-6">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            So funktioniert&apos;s
          </p>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em] mb-12">
            So funktioniert AstroMaster
          </h2>
          <div className="aspect-video rounded-2xl bg-card border border-border flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center cursor-pointer hover:bg-gold/20 transition-colors">
              <div
                className="w-0 h-0 ml-1"
                style={{
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "16px solid #C9A961",
                }}
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">In 2 Minuten erklärt</p>
        </AnimateOnScroll>
      </section>

      {/* ========== SECTION 3: WAS DU BEKOMMST ========== */}
      <section className="py-24 px-6">
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Deine Optionen
            </p>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
              Was deine Analyse enthält
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Standard Card */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-semibold text-xl mb-2">Standard-Analyse</h3>
              <p className="text-gold text-3xl font-bold mb-6">39&euro;</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Siderischer System-Check",
                  "Sonne, Mond & Aszendent",
                  "Lebenszahl & Numerologie",
                  "Elementar-Analyse",
                  "Kosmische Signatur",
                  "12-15 Seiten PDF",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-gold shrink-0">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <!-- BILD: Standard PDF Vorschau --> */}
              <div className="aspect-[3/4] rounded-xl bg-bg/50 border border-border/50 flex items-center justify-center">
                <span className="text-muted text-sm">PDF Vorschau</span>
              </div>
            </div>

            {/* Pro Card */}
            <div className="p-8 rounded-2xl bg-card border border-gold/30 relative">
              <span className="absolute top-4 right-4 bg-gold text-black text-xs font-semibold px-3 py-1 rounded-full">
                Beliebteste Wahl
              </span>
              <h3 className="font-semibold text-xl mb-2">Pro-Analyse</h3>
              <p className="text-gold text-3xl font-bold mb-6">89&euro;</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Alles aus der Standard-Version",
                  "Alle 10 Planeten siderisch",
                  "12 Häuser mit Deutung",
                  "Ägyptischer Wächter & Dekan",
                  "Human Design komplett",
                  "Aspekte & Nakshatras",
                  "Ma'at-Synthese & Journaling",
                  "50-60 Seiten PDF",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-gold shrink-0">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <!-- BILD: Pro PDF Vorschau --> */}
              <div className="aspect-[3/4] rounded-xl bg-bg/50 border border-border/50 flex items-center justify-center">
                <span className="text-muted text-sm">PDF Vorschau</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========== SECTION 4: VORHER / NACHHER ========== */}
      <section className="py-24 px-6">
        <AnimateOnScroll className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Der Unterschied
            </p>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
              Vorher vs. Nachher
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Vorher */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <p className="text-xs text-muted uppercase tracking-wider mb-4">
                Vorher
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Du kennst dein tropisches Sternzeichen aus einer Zeitschrift. Du
                liest vage Tageshoroskope, die auf alle zutreffen.
              </p>
              <ul className="space-y-2">
                {[
                  "1 Sternzeichen (vermutlich falsch)",
                  "Basierend auf Jahreszeiten, nicht Sternen",
                  "Keine persönliche Berechnung",
                ].map((point) => (
                  <li
                    key={point}
                    className="text-muted flex items-start gap-2"
                  >
                    <span className="shrink-0">&ndash;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nachher */}
            <div className="p-8 rounded-2xl bg-card border border-gold/30">
              <p className="text-xs text-gold uppercase tracking-wider mb-4">
                Nachher
              </p>
              <p className="text-white leading-relaxed mb-6">
                Du kennst dein komplettes kosmisches Profil aus 5 Systemen
                &mdash; astronomisch korrekt, persönlich berechnet.
              </p>
              <ul className="space-y-2">
                {[
                  "Alle Planeten in siderischen Positionen",
                  "5 Systeme, astronomisch verifiziert",
                  "Persönlich berechnetes PDF",
                ].map((point) => (
                  <li
                    key={point}
                    className="text-white flex items-start gap-2"
                  >
                    <span className="text-gold shrink-0">&#10003;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========== SECTION 5: KONFIGURATOR ========== */}
      <section id="konfigurator" className="py-24 px-6">
        <AnimateOnScroll className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Jetzt starten
            </p>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
              Konfiguriere deine Analyse
            </h2>
          </div>
          <OrderFlow />
        </AnimateOnScroll>
      </section>

      {/* ========== SECTION 6: TESTIMONIALS ========== */}
      <section className="py-24 px-6">
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Erfahrungen
            </p>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border flex flex-col"
              >
                <p
                  className="text-muted leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{
                    __html: `&ldquo;${t.quote}&rdquo;`,
                  }}
                />
                <div className="border-t border-border mt-6 pt-6">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ========== SECTION 7: FAQ ========== */}
      <section className="py-24 px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Antworten
            </p>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
              Häufige Fragen
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </AnimateOnScroll>
      </section>

      {/* ========== SECTION 8: LETZTER CTA ========== */}
      <section className="py-24 px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bereit?
          </h2>
          <p className="text-gold text-xl mb-10">
            Dein kosmisches Profil wartet.
          </p>
          <button
            onClick={() => scrollToSection("konfigurator")}
            className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors"
          >
            Jetzt Analyse starten
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mb-0.5"
            >
              <path
                d="M8 13V3M3 8l5-5 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
