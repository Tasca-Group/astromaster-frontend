"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    name: "Laura M.",
    text: "Ich war mein ganzes Leben lang Jungfrau. Jetzt weiss ich, dass ich eigentlich Loewe bin &mdash; und ploetzlich ergibt alles Sinn.",
    location: "Berlin",
  },
  {
    name: "Thomas K.",
    text: "Die Tiefe der Analyse hat mich umgehauen. 5 verschiedene Systeme, die alle zum gleichen Ergebnis kommen. Beeindruckend.",
    location: "Wien",
  },
  {
    name: "Sarah P.",
    text: "Endlich eine Astrologie-Seite, die auf echten astronomischen Daten basiert. Das PDF ist wunderschoen gestaltet.",
    location: "Zuerich",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Erfahrungen
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Was unsere Kunden sagen
            </h2>
          </div>
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
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">{t.location}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
