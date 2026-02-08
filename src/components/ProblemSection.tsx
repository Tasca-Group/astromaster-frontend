"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "24\u00B0", label: "Verschiebung" },
  { value: "2.000", label: "Jahre veraltet" },
  { value: "86%", label: "Betroffen" },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Das Problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Was die Astrologie
            <br />
            dir verschweigt
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            Dein Horoskop basiert auf dem tropischen System &mdash; einer 2.000 Jahre alten
            Berechnung, die die Praezession der Erdachse ignoriert. Seitdem hat sich
            der Sternenhimmel um ca. 24 Grad verschoben. Das bedeutet: Die Sterne
            stehen heute woanders als dein Horoskop behauptet.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
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
      </div>
    </section>
  );
}
