"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Bereit fuer
            <br />
            <span className="text-gold">die Wahrheit?</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
            Finde in 10 Sekunden heraus, ob dein Sternzeichen wirklich stimmt.
            Kostenlos und ohne Anmeldung.
          </p>
          <Link
            href="/check"
            className="inline-block mt-10 bg-gold hover:bg-gold-hover text-bg font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Jetzt pruefen &rarr;
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
