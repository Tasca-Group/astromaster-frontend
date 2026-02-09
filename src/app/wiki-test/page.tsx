import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "AstroMaster Wiki — Kosmisches Wissen",
  description:
    "Dein Nachschlagewerk für siderische Astrologie, Numerologie, ägyptische Dekane, Human Design und Elementar-Analyse.",
};

const wikiCards = [
  {
    title: "Siderische Astrologie",
    icon: "/images/icons/siderisch.svg",
    teaser: "Das astronomisch korrekte Sternzeichen-System.",
    href: "/wiki-test/siderische-astrologie",
  },
  {
    title: "Numerologie",
    icon: "/images/icons/numerologie.svg",
    teaser: "Was deine Geburtszahlen über deinen Lebensweg verraten.",
    href: "/wiki-test/numerologie",
  },
  {
    title: "Ägyptische Dekane",
    icon: "/images/icons/dekane.svg",
    teaser: "4.000 Jahre alte Weisheit — dein kosmischer Wächter.",
    href: "/wiki-test/aegyptische-dekane",
  },
  {
    title: "Human Design",
    icon: "/images/icons/human-design.svg",
    teaser: "Dein energetischer Bauplan für authentische Entscheidungen.",
    href: "/wiki-test/human-design",
  },
  {
    title: "Elementar-Analyse",
    icon: "/images/icons/tropisch.svg",
    teaser: "Die Balance der Elemente in deinem Chart.",
    href: "/wiki-test/elementar-analyse",
  },
];

export default function WikiPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Nachschlagewerk
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em]">
              AstroMaster Wiki
            </h1>
            <p className="mt-4 text-lg text-muted max-w-md mx-auto leading-relaxed">
              Dein Nachschlagewerk für kosmisches Wissen.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {wikiCards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 0.08}>
              <Link href={card.href} className="block group">
                <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border h-full hover:border-gold/30 transition-all">
                  <div className="mb-4">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                      className="opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {card.teaser}
                  </p>
                  <span className="text-gold text-sm group-hover:underline">
                    Mehr erfahren &rarr;
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
