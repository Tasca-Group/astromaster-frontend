"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { WIKI_CATEGORIES, searchArticles, type WikiArticle } from "@/lib/wiki-data";

/* ─── Search Component ─── */
function WikiSearch() {
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
    <div ref={wrapperRef} className="relative max-w-2xl mx-auto">
      <div className={`relative transition-all ${focused ? "scale-[1.02]" : ""}`}>
        <svg
          className="absolute left-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          width="20"
          height="20"
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
          placeholder="Suche nach einem Thema... z.B. Chakren, Lebenszahl, Aszendent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="w-full h-14 sm:h-16 pl-14 pr-5 bg-card/80 backdrop-blur-sm border-2 border-gold/30 rounded-2xl focus:border-gold focus:outline-none transition-all text-base sm:text-lg placeholder:text-muted/50"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors"
          >
            &times;
          </button>
        )}
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[400px] overflow-y-auto"
          >
            {results.length === 0 ? (
              <div className="p-6 text-center text-muted text-sm">
                Keine Ergebnisse f&uuml;r &bdquo;{query}&ldquo;
              </div>
            ) : (
              results.slice(0, 8).map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  onClick={() => { setFocused(false); setQuery(""); }}
                  className="block px-5 py-4 hover:bg-gold/5 border-b border-border/30 last:border-b-0 transition-colors"
                >
                  <p className="font-medium text-sm">{article.title}</p>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">
                    {article.description}
                  </p>
                  <div className="flex gap-1.5 mt-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-gold/5 text-gold border border-gold/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Category Accordion ─── */
function CategoryAccordion() {
  const [openCat, setOpenCat] = useState<string | null>("astrologie");

  return (
    <div className="space-y-3">
      {WIKI_CATEGORIES.map((cat) => (
        <div
          key={cat.id}
          className="rounded-2xl bg-card border border-border overflow-hidden"
        >
          <button
            onClick={() => setOpenCat(openCat === cat.id ? null : cat.id)}
            className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-gold/3 transition-colors"
          >
            <Image
              src={cat.icon}
              alt={cat.title}
              width={36}
              height={36}
              className="opacity-70 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{cat.title}</p>
              <p className="text-xs text-muted">{cat.articles.length} Artikel</p>
            </div>
            <span
              className={`shrink-0 text-muted transition-transform duration-300 text-lg ${
                openCat === cat.id ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openCat === cat.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="border-l-2 border-gold/20 ml-[18px] pl-6 space-y-1">
                    {cat.articles.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="group flex items-center gap-3 py-2 hover:translate-x-1 transition-transform"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold shrink-0 transition-colors" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium group-hover:text-gold transition-colors truncate">
                            {article.title}
                          </p>
                          <p className="text-xs text-muted line-clamp-1 hidden sm:block">
                            {article.description}
                          </p>
                        </div>
                        {!article.hasContent && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-border/50 text-muted shrink-0">
                            Bald
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ─── Category Cards Grid ─── */
function CategoryCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {WIKI_CATEGORIES.map((cat, i) => (
        <AnimateOnScroll key={cat.id} delay={i * 0.08}>
          <button
            onClick={() => {
              const el = document.getElementById("verzeichnis");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 90;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
              // Small delay to let scroll finish, then trigger accordion
              setTimeout(() => {
                const btn = document.querySelector(`[data-cat="${cat.id}"]`) as HTMLButtonElement;
                btn?.click();
              }, 400);
            }}
            data-cat={cat.id}
            className="block w-full text-left p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={cat.icon}
                alt={cat.title}
                width={40}
                height={40}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div>
                <h3 className="font-semibold group-hover:text-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-muted">{cat.articles.length} Artikel</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.articles.slice(0, 3).map((a) => (
                <span
                  key={a.href}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-gold/5 text-muted border border-border"
                >
                  {a.title.length > 25 ? a.title.slice(0, 25) + "..." : a.title}
                </span>
              ))}
              {cat.articles.length > 3 && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/5 text-gold border border-gold/10">
                  +{cat.articles.length - 3} mehr
                </span>
              )}
            </div>
          </button>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const totalArticles = WIKI_CATEGORIES.reduce((sum, c) => sum + c.articles.length, 0);
  const totalCategories = WIKI_CATEGORIES.length;
  const totalWithContent = WIKI_CATEGORIES.reduce(
    (sum, c) => sum + c.articles.filter((a) => a.hasContent).length,
    0
  );

  return (
    <div className="flex justify-center gap-8 sm:gap-12 py-8">
      {[
        { value: totalArticles.toString(), label: "Artikel" },
        { value: totalCategories.toString(), label: "Kategorien" },
        { value: totalWithContent.toString(), label: "Vollständig" },
      ].map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gold">{stat.value}</p>
          <p className="text-xs text-muted uppercase tracking-wider mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Wiki Overview ─── */
export default function WikiOverview() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Wissensportal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em]">
            AstroMaster Wiki
          </h1>
          <p className="mt-4 text-lg text-muted max-w-lg mx-auto leading-relaxed">
            Dein Verzeichnis f&uuml;r kosmisches Wissen. Suche, entdecke, verstehe.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <WikiSearch />
        </motion.div>

        {/* Stats */}
        <AnimateOnScroll>
          <StatsBar />
        </AnimateOnScroll>

        {/* Category Cards */}
        <div className="mb-20">
          <AnimateOnScroll className="text-center mb-10">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">
              Kategorien
            </p>
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em]">
              Themen durchsuchen
            </h2>
          </AnimateOnScroll>
          <CategoryCards />
        </div>

        {/* Category Accordion / Directory */}
        <div id="verzeichnis">
          <AnimateOnScroll className="mb-8">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">
              Verzeichnis
            </p>
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em]">
              Alle Artikel
            </h2>
          </AnimateOnScroll>
          <CategoryAccordion />
        </div>

        {/* CTA */}
        <AnimateOnScroll className="mt-20 text-center">
          <div className="p-8 rounded-2xl bg-gold/5 border border-gold/20">
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
        </AnimateOnScroll>
      </div>
    </section>
  );
}
