"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Gratis-Check",
    description:
      "Gib dein Geburtsdatum ein und erfahre in 10 Sekunden, ob dein Sternzeichen wirklich stimmt.",
  },
  {
    number: "02",
    title: "Dein Ergebnis",
    description:
      "Sieh den Unterschied zwischen deinem tropischen und siderischen Zeichen. Bei 86% weicht es ab.",
  },
  {
    number: "03",
    title: "Volle Analyse",
    description:
      "Erhalte dein komplettes kosmisches Profil als PDF &mdash; 5 Systeme, eine Wahrheit.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              In 3 Schritten
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              So funktioniert&apos;s
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.15}>
              <div className="flex gap-6 sm:gap-8 items-start p-6 sm:p-8 rounded-2xl bg-card border border-border">
                <span className="text-3xl sm:text-4xl font-bold text-gold/30 shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p
                    className="text-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.description }}
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
