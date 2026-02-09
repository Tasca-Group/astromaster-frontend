"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const systems = [
  {
    title: "Siderische Astrologie",
    icon: "/images/icons/siderisch.svg",
    description:
      "Das astronomisch korrekte System. Berechnet nach den tatsächlichen Sternpositionen mit Lahiri-Ayanamsa.",
    wiki: "/wiki-test/siderische-astrologie",
  },
  {
    title: "Numerologie",
    icon: "/images/icons/numerologie.svg",
    description:
      "Deine Lebenszahl entschlüsselt deinen Lebensweg, verborgene Talente und karmische Lektionen.",
    wiki: "/wiki-test/numerologie",
  },
  {
    title: "Ägyptische Dekane",
    icon: "/images/icons/dekane.svg",
    description:
      "37 Dekane offenbaren deinen kosmischen Wächter &mdash; eine 4.000 Jahre alte Tradition aus dem Alten Ägypten.",
    wiki: "/wiki-test/aegyptische-dekane",
  },
  {
    title: "Human Design",
    icon: "/images/icons/human-design.svg",
    description:
      "Dein energetischer Bauplan: Typ, Strategie und Autorität für authentische Entscheidungen.",
    wiki: "/wiki-test/human-design",
  },
  {
    title: "Elementar-Analyse",
    icon: "/images/icons/tropisch.svg",
    description:
      "Die Balance der fünf Elemente in deinem Chart zeigt deine natürlichen Stärken und blinden Flecken.",
    wiki: "/wiki-test/elementar-analyse",
  },
];

export default function SystemsGrid() {
  return (
    <section id="systeme" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              5 Systeme. 1 Analyse.
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Dein kosmisches Profil
            </h2>
          </div>
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
                <h3 className="text-lg font-semibold mb-3">{system.title}</h3>
                <p
                  className="text-muted leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: system.description }}
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
