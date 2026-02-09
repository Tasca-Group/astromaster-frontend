"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface WikiSection {
  id: string;
  title: string;
}

interface RelatedTopic {
  href: string;
  label: string;
}

interface WikiLayoutProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  sections: WikiSection[];
  ctaText: string;
  ctaHref?: string;
  relatedTopics: RelatedTopic[];
  children: React.ReactNode;
}

export default function WikiLayout({
  title,
  subtitle,
  breadcrumb,
  sections,
  ctaText,
  ctaHref = "/check",
  relatedTopics,
  children,
}: WikiLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topmost.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/wiki" className="hover:text-gold transition-colors">
            Wiki
          </Link>
          <span className="text-border">/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em] mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">{subtitle}</p>
        </motion.div>

        {/* Mobile TOC */}
        <div className="lg:hidden mb-8 -mx-6 px-6">
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex gap-2 pb-2 min-w-max">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs border transition-colors ${
                    activeSection === s.id
                      ? "border-gold text-gold bg-gold/5"
                      : "border-border text-muted hover:border-gold/30"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="lg:grid lg:grid-cols-[200px_1fr_200px] lg:gap-10">
          {/* Left: Sticky TOC (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs text-gold uppercase tracking-wider mb-4">
                Inhalt
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-colors ${
                      activeSection === s.id
                        ? "border-gold text-gold"
                        : "border-transparent text-muted hover:text-white hover:border-border"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Center: Content */}
          <article className="min-w-0">
            <div className="prose-wiki">{children}</div>

            {/* CTA Box */}
            <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gold/5 border border-gold/20 text-center">
              <p className="text-lg font-medium mb-4">{ctaText}</p>
              <Link
                href={ctaHref}
                className="inline-block bg-gold hover:bg-gold-hover text-bg font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Jetzt Gratis-Check starten
              </Link>
            </div>
          </article>

          {/* Right: Related Topics (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs text-gold uppercase tracking-wider mb-4">
                Verwandte Themen
              </p>
              <nav className="space-y-2">
                {relatedTopics.map((topic) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="block text-sm text-muted hover:text-gold transition-colors py-1"
                  >
                    {topic.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Mobile: Related Topics */}
        <div className="lg:hidden mt-12 p-5 rounded-2xl bg-card border border-border">
          <p className="text-xs text-gold uppercase tracking-wider mb-4">
            Verwandte Themen
          </p>
          <div className="grid grid-cols-2 gap-2">
            {relatedTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="text-sm text-muted hover:text-gold transition-colors py-1"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
