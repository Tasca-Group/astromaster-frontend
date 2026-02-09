"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface ArchivSection {
  id: string;
  title: string;
}

interface RelatedTopic {
  href: string;
  label: string;
}

interface ArchivLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  categoryHref: string;
  readingTime: string;
  tags: string[];
  sections: ArchivSection[];
  relatedTopics: RelatedTopic[];
  children: React.ReactNode;
}

/* ─── Reading Progress Bar ─── */
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-gold transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ─── Share Buttons ─── */
function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title + " — AstroMaster Sternarchiv");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  }

  function shareWhatsApp() {
    const text = encodeURIComponent(title + " — " + window.location.href);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-muted uppercase tracking-wider mr-1">Teilen</span>
      <button
        onClick={copyLink}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 transition-colors"
        title="Link kopieren"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
        )}
      </button>
      <button
        onClick={shareTwitter}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 transition-colors"
        title="Auf X teilen"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      </button>
      <button
        onClick={shareWhatsApp}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 transition-colors"
        title="Per WhatsApp teilen"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </button>
    </div>
  );
}

/* ─── Floating TOC (desktop) ─── */
function FloatingTOC({ sections, activeSection }: { sections: ArchivSection[]; activeSection: string }) {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <div className="sticky top-24">
      <p className="text-[10px] text-gold uppercase tracking-[0.15em] mb-3">Inhalt</p>
      <nav className="space-y-0.5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`block w-full text-left text-xs py-1.5 pl-3 border-l transition-colors ${
              activeSection === s.id
                ? "border-gold text-gold"
                : "border-border/30 text-muted/60 hover:text-muted hover:border-border"
            }`}
          >
            {s.title}
          </button>
        ))}
      </nav>
    </div>
  );
}

/* ─── Main Layout ─── */
export default function ArchivLayout({
  title,
  subtitle,
  category,
  categoryHref,
  readingTime,
  tags,
  sections,
  relatedTopics,
  children,
}: ArchivLayoutProps) {
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

  return (
    <>
      <ProgressBar />

      <section className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-muted mb-8">
            <Link href="/archiv-test" className="hover:text-gold transition-colors">
              Sternarchiv
            </Link>
            <span className="text-border">/</span>
            <Link href={categoryHref} className="hover:text-gold transition-colors">
              {category}
            </Link>
            <span className="text-border">/</span>
            <span className="text-white/70 truncate max-w-[200px]">{title}</span>
          </nav>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-[720px] mx-auto mb-10"
          >
            {/* Meta line */}
            <div className="flex items-center gap-3 mb-4">
              <Link
                href={categoryHref}
                className="text-[10px] text-gold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-gold/20 bg-gold/5 hover:bg-gold/10 transition-colors"
              >
                {category}
              </Link>
              <span className="text-[10px] text-muted">{readingTime} Lesezeit</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-light leading-tight tracking-wide mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-6">{subtitle}</p>

            {/* Tags + Share */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/30">
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-card border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ShareButtons title={title} />
            </div>
          </motion.div>

          {/* Mobile TOC */}
          <div className="lg:hidden mb-8 max-w-[720px] mx-auto -mx-6 px-6">
            <div className="overflow-x-auto scrollbar-none">
              <div className="flex gap-2 pb-2 min-w-max">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      const el = document.getElementById(s.id);
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 90;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] border transition-colors ${
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

          {/* Content Grid */}
          <div className="lg:grid lg:grid-cols-[1fr_720px_1fr] lg:gap-8">
            {/* Left: TOC (desktop) */}
            <aside className="hidden lg:block">
              <FloatingTOC sections={sections} activeSection={activeSection} />
            </aside>

            {/* Center: Article Content */}
            <article className="max-w-[720px] mx-auto w-full min-w-0">
              <div className="prose-archiv">{children}</div>

              {/* Bottom Share */}
              <div className="mt-12 pt-6 border-t border-border/30 flex items-center justify-between">
                <ShareButtons title={title} />
                <Link
                  href="/archiv-test"
                  className="text-xs text-muted hover:text-gold transition-colors"
                >
                  &larr; Zur&uuml;ck zum Sternarchiv
                </Link>
              </div>

              {/* CTA */}
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gold/5 border border-gold/20 text-center">
                <p className="text-lg font-medium mb-4">
                  Bereit, dein wahres Profil zu entdecken?
                </p>
                <Link
                  href="/check"
                  className="inline-block bg-gold hover:bg-gold-hover text-bg font-semibold px-8 py-3 rounded-xl transition-colors"
                >
                  Jetzt Gratis-Check starten
                </Link>
              </div>
            </article>

            {/* Right: Related (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-[10px] text-gold uppercase tracking-[0.15em] mb-3">
                  Verwandt
                </p>
                <nav className="space-y-2">
                  {relatedTopics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      className="block text-xs text-muted hover:text-gold transition-colors py-1"
                    >
                      {topic.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>

          {/* Mobile: Related */}
          <div className="lg:hidden mt-10 max-w-[720px] mx-auto p-5 rounded-2xl bg-card border border-border">
            <p className="text-[10px] text-gold uppercase tracking-[0.15em] mb-3">
              Verwandte Themen
            </p>
            <div className="grid grid-cols-2 gap-2">
              {relatedTopics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="text-xs text-muted hover:text-gold transition-colors py-1"
                >
                  {topic.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
