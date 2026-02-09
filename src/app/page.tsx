"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ─── Section 1: Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Astronomisch korrekt
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.15em] leading-tight">
            Entdecke dein wahres
            <br />
            <span className="text-gold">kosmisches Profil</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            AstroMaster berechnet dein Profil aus 5 Systemen &mdash;
            basierend auf den echten Sternpositionen, nicht auf veralteten Tabellen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/check"
              className="bg-gold text-black px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors"
            >
              Gratis-Check starten
            </Link>
            <Link
              href="/analyse"
              className="border border-gold/40 text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/5 transition-colors"
            >
              Analyse entdecken
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section 2: Was ist AstroMaster ─── */
function WhatIsSection() {
  const points = [
    {
      title: "Astronomisch korrekt",
      desc: "Basierend auf siderischer Astrologie &mdash; den echten Sternpositionen am Himmel, nicht auf dem 2.000 Jahre alten tropischen System.",
    },
    {
      title: "5 Systeme vereint",
      desc: "Siderische Astrologie, Numerologie, &Auml;gyptische Dekane, Human Design und Elementar-Analyse in einer Berechnung.",
    },
    {
      title: "Persönlich berechnet",
      desc: "Jede Analyse wird individuell aus deinen Geburtsdaten generiert &mdash; kein Copy-Paste, keine generischen Texte.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Was ist AstroMaster?
          </p>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
            Dein kosmisches Profil &mdash; neu berechnet
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-card border border-border h-full text-center">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                <p
                  className="text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: point.desc }}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Die 5 Systeme ─── */
function SystemsSection() {
  const systems = [
    {
      title: "Siderische Astrologie",
      icon: "/images/icons/siderisch.svg",
      desc: "Das astronomisch korrekte System. Berechnet nach den tatsächlichen Sternpositionen mit Lahiri-Ayanamsa.",
      wiki: "/wiki/siderische-astrologie",
    },
    {
      title: "Numerologie",
      icon: "/images/icons/numerologie.svg",
      desc: "Deine Lebenszahl entschl&uuml;sselt deinen Lebensweg, verborgene Talente und karmische Lektionen.",
      wiki: "/wiki/numerologie",
    },
    {
      title: "&Auml;gyptische Dekane",
      icon: "/images/icons/dekane.svg",
      desc: "37 Dekane offenbaren deinen kosmischen W&auml;chter &mdash; eine 4.000 Jahre alte Tradition.",
      wiki: "/wiki/aegyptische-dekane",
    },
    {
      title: "Human Design",
      icon: "/images/icons/human-design.svg",
      desc: "Dein energetischer Bauplan: Typ, Strategie und Autorit&auml;t f&uuml;r authentische Entscheidungen.",
      wiki: "/wiki/human-design",
    },
    {
      title: "Elementar-Analyse",
      icon: "/images/icons/tropisch.svg",
      desc: "Die Balance der f&uuml;nf Elemente in deinem Chart zeigt deine nat&uuml;rlichen St&auml;rken.",
      wiki: "/wiki/elementar-analyse",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            5 Systeme. 1 Analyse.
          </p>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
            Dein kosmisches Profil
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {systems.map((system, i) => (
            <AnimateOnScroll key={system.title} delay={i * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border h-full hover:border-gold/30 transition-colors">
                <div className="mb-4">
                  <Image
                    src={system.icon}
                    alt={system.title}
                    width={56}
                    height={56}
                    className="opacity-80"
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  dangerouslySetInnerHTML={{ __html: system.title }}
                />
                <p
                  className="text-muted leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: system.desc }}
                />
                <Link
                  href={system.wiki}
                  className="text-gold text-sm hover:underline"
                >
                  Mehr erfahren &rarr;
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Das Problem (shortened) ─── */
function ProblemSection() {
  const stats = [
    { value: "24\u00B0", label: "Verschiebung" },
    { value: "2.000", label: "Jahre veraltet" },
    { value: "86%", label: "Betroffen" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Das Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
            Was die Astrologie dir verschweigt
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Dein Horoskop basiert auf dem tropischen System &mdash; einer 2.000 Jahre alten
            Berechnung, die die Pr&auml;zession der Erdachse ignoriert.
            Die Sterne stehen heute woanders als dein Horoskop behauptet.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm sm:text-base text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="text-center mt-10">
          <Link
            href="/check"
            className="text-gold font-medium hover:underline"
          >
            Mach den Gratis-Check und finde es heraus &rarr;
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ─── Section 5: Astro-Wissen (Wiki Teaser) ─── */
function WikiTeaser() {
  const articles = [
    {
      title: "Siderische vs. Tropische Astrologie",
      desc: "Warum dein Sternzeichen vermutlich falsch ist &mdash; und was das f&uuml;r dich bedeutet.",
      href: "/wiki/siderische-astrologie",
    },
    {
      title: "Human Design Grundlagen",
      desc: "Die 5 Typen, deine Strategie und warum du Entscheidungen anders treffen solltest.",
      href: "/wiki/human-design",
    },
    {
      title: "Numerologie &amp; Lebenszahl",
      desc: "Wie du deine Lebenszahl berechnest und was sie &uuml;ber deinen Lebensweg verr&auml;t.",
      href: "/wiki/numerologie",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Astro-Wissen
          </p>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
            Lerne mehr &uuml;ber dein kosmisches Profil
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <AnimateOnScroll key={article.title} delay={i * 0.1}>
              <Link href={article.href} className="block group h-full">
                <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border h-full hover:border-gold/30 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p
                    className="text-muted leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: article.desc }}
                  />
                  <span className="text-gold text-sm">
                    Artikel lesen &rarr;
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3} className="text-center mt-10">
          <Link
            href="/wiki"
            className="text-gold font-medium hover:underline"
          >
            Alle Artikel im Wiki &rarr;
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ─── Section 6: Deine Analyse (Short Teaser) ─── */
function AnalyseTeaser() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="p-8 sm:p-12 rounded-2xl bg-card border border-gold/20 text-center">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Deine Analyse
            </p>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em] mb-6">
              50 Seiten &uuml;ber dich
            </h2>
            <p className="text-muted leading-relaxed max-w-xl mx-auto mb-4">
              Alle 10 Planeten, 12 H&auml;user, Aspekte, Nakshatras, &Auml;gyptische Dekane,
              Human Design, Numerologie &mdash; vereint in einem professionellen PDF.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
              {[
                "Standard ab 39\u20AC",
                "Pro ab 89\u20AC",
                "Familien-Rabatt bis 25%",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-gold/5 border border-gold/20 text-sm text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/analyse"
              className="inline-block bg-gold text-black px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors"
            >
              Analyse konfigurieren &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ─── Section 7: Testimonials ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Laura M.",
      location: "Berlin",
      text: "Ich war mein ganzes Leben lang Jungfrau. Jetzt wei&szlig; ich, dass ich eigentlich L&ouml;we bin &mdash; und pl&ouml;tzlich ergibt alles Sinn.",
    },
    {
      name: "Thomas K.",
      location: "Wien",
      text: "Die Tiefe der Analyse hat mich umgehauen. 5 verschiedene Systeme, die alle zum gleichen Ergebnis kommen. Beeindruckend.",
    },
    {
      name: "Sarah P.",
      location: "Z&uuml;rich",
      text: "Endlich eine Astrologie-Seite, die auf echten astronomischen Daten basiert. Das PDF ist wundersch&ouml;n gestaltet.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Erfahrungen
          </p>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em]">
            Was unsere Kunden sagen
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border h-full flex flex-col">
                <p
                  className="text-muted leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.text}&rdquo;` }}
                />
                <div className="mt-6 pt-6 border-t border-border">
                  <p
                    className="font-semibold"
                    dangerouslySetInnerHTML={{ __html: t.name }}
                  />
                  <p
                    className="text-sm text-muted"
                    dangerouslySetInnerHTML={{ __html: t.location }}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 8: Newsletter ─── */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Placeholder — no actual newsletter endpoint yet
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Newsletter
          </p>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.1em] mb-4">
            Kosmische Updates
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            Erhalte Astro-Wissen, neue Features und exklusive Angebote
            direkt in dein Postfach.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-card border border-gold/30"
            >
              <p className="text-gold font-semibold mb-1">Willkommen an Bord!</p>
              <p className="text-sm text-muted">
                Dein 10%-Gutschein kommt per Email.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine Email-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-h-[48px] px-5 bg-card border border-border rounded-full focus:border-gold focus:outline-none transition-colors text-base"
              />
              <button
                type="submit"
                className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors shrink-0"
              >
                Anmelden
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted/70">
            Kein Spam. Jederzeit abmeldbar. 10% Rabatt auf deine erste Analyse.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsSection />
      <SystemsSection />
      <ProblemSection />
      <WikiTeaser />
      <AnalyseTeaser />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
