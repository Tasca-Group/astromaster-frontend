"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WIKI_CATEGORIES, searchArticles, type WikiArticle, type WikiCategory } from "@/lib/wiki-data";

/* ─── Spotlight Search ─── */
function ArchivSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WikiArticle[]>([]);
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchArticles(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showDropdown = focused && query.trim().length >= 2;

  return (
    <div ref={wrapperRef} className="relative max-w-xl mx-auto">
      <div className={`relative transition-all ${focused ? "scale-[1.02]" : ""}`}>
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Suche im Sternarchiv..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="w-full h-12 pl-12 pr-10 bg-card/60 backdrop-blur-sm border border-border rounded-full focus:border-gold/50 focus:outline-none transition-all text-sm placeholder:text-muted/50"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors text-lg"
          >
            &times;
          </button>
        )}
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute z-50 w-full mt-2 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[360px] overflow-y-auto"
          >
            {results.length === 0 ? (
              <div className="p-5 text-center text-muted text-sm">
                Keine Ergebnisse f&uuml;r &bdquo;{query}&ldquo;
              </div>
            ) : (
              results.slice(0, 6).map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  onClick={() => { setFocused(false); setQuery(""); }}
                  className="block px-5 py-3.5 hover:bg-gold/5 border-b border-border/20 last:border-b-0 transition-colors"
                >
                  <p className="font-medium text-sm">{article.title}</p>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">{article.description}</p>
                </Link>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Horizontal Scroll Row (Netflix-style) ─── */
function CategoryRow({ category, index }: { category: WikiCategory; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="mb-10"
    >
      {/* Row Header */}
      <div className="flex items-center justify-between mb-4 px-6 sm:px-0">
        <div className="flex items-center gap-3">
          <Image
            src={category.icon}
            alt={category.title}
            width={28}
            height={28}
            className="opacity-70"
          />
          <h2 className="text-lg sm:text-xl font-semibold">{category.title}</h2>
          <span className="text-xs text-muted bg-card px-2 py-0.5 rounded-full border border-border">
            {category.articles.length}
          </span>
        </div>

        {/* Desktop scroll arrows */}
        <div className="hidden sm:flex gap-1">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-white hover:border-gold/30 disabled:opacity-20 disabled:cursor-default transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-white hover:border-gold/30 disabled:opacity-20 disabled:cursor-default transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="relative group">
        {/* Gradient fades */}
        {canScrollLeft && (
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        )}
        {canScrollRight && (
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-none px-6 sm:px-0 snap-x snap-mandatory sm:snap-none"
        >
          {category.articles.map((article, i) => (
            <ArticleCard key={article.href} article={article} index={i} />
          ))}
          {/* Spacer for mobile scroll padding */}
          <div className="sm:hidden shrink-0 w-2" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Article Card ─── */
function ArticleCard({ article, index }: { article: WikiArticle; index: number }) {
  // Estimate reading time from sections count
  const readingTime = Math.max(3, article.sections.length * 2);

  return (
    <Link
      href={article.href}
      className="group shrink-0 w-[280px] sm:w-[300px] snap-start"
    >
      <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-200">
        {/* Thumbnail placeholder */}
        <div className="h-28 rounded-xl bg-gradient-to-br from-gold/5 to-transparent border border-border/30 mb-4 flex items-center justify-center overflow-hidden">
          <span className="text-3xl opacity-20">
            {["&#9733;", "&#9789;", "&#9737;", "&#9670;", "&#9679;"][index % 5]}
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] text-muted uppercase tracking-wider">
            {readingTime} Min.
          </span>
          {!article.hasContent && (
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-border/50 text-muted">
              Bald
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-sm leading-snug group-hover:text-gold transition-colors mb-2 line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-3">
          {article.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2 py-0.5 rounded-full bg-gold/5 text-muted border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/* ─── Stats Strip ─── */
function StatsStrip() {
  const totalArticles = WIKI_CATEGORIES.reduce((sum, c) => sum + c.articles.length, 0);
  const totalWithContent = WIKI_CATEGORIES.reduce(
    (sum, c) => sum + c.articles.filter((a) => a.hasContent).length,
    0
  );

  return (
    <div className="flex justify-center gap-10 sm:gap-16">
      {[
        { value: totalArticles, label: "Artikel" },
        { value: WIKI_CATEGORIES.length, label: "Kategorien" },
        { value: totalWithContent, label: "Fertig" },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-gold">{s.value}</p>
          <p className="text-[10px] text-muted uppercase tracking-wider mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Featured Article ─── */
function FeaturedArticle() {
  // Pick first article with content as featured
  const featured = WIKI_CATEGORIES.flatMap((c) => c.articles).find((a) => a.hasContent);
  if (!featured) return null;

  return (
    <Link href={featured.href} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 via-card to-card border border-gold/20 p-8 sm:p-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <span className="inline-block text-[10px] text-gold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-gold/20 bg-gold/5">
            Empfohlen
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold group-hover:text-gold transition-colors mb-3">
            {featured.title}
          </h2>
          <p className="text-muted leading-relaxed max-w-xl mb-4">
            {featured.description}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gold">Jetzt lesen &rarr;</span>
            <div className="flex gap-1.5">
              {featured.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-gold/5 text-muted border border-gold/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Main Archiv Overview ─── */
export default function ArchivOverview() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 px-6"
        >
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4">
            Wissensportal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em]">
            Das Sternarchiv
          </h1>
          <p className="mt-4 text-muted max-w-md mx-auto leading-relaxed">
            Kosmisches Wissen. Verst&auml;ndlich erkl&auml;rt.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 px-6"
        >
          <ArchivSearch />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-12 px-6"
        >
          <StatsStrip />
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-14 px-6"
        >
          <FeaturedArticle />
        </motion.div>

        {/* Category Rows (Netflix-style) */}
        {WIKI_CATEGORIES.map((cat, i) => (
          <CategoryRow key={cat.id} category={cat} index={i} />
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 px-6"
        >
          <div className="p-8 rounded-2xl bg-gold/5 border border-gold/20 text-center">
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
        </motion.div>
      </div>
    </section>
  );
}
