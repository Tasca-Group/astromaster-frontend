"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WikiCategory } from "@/lib/wiki-data";

export default function CategoryOverview({ category }: { category: WikiCategory }) {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link href="/archiv-test" className="hover:text-gold transition-colors">
            Sternarchiv
          </Link>
          <span className="text-border">/</span>
          <span className="text-white/70">{category.title}</span>
        </nav>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={category.icon}
              alt={category.title}
              width={48}
              height={48}
              className="opacity-80"
            />
            <div>
              <p className="text-gold text-xs tracking-[0.2em] uppercase">Kategorie</p>
              <h1 className="text-3xl sm:text-4xl font-light uppercase tracking-[0.12em]">
                {category.title}
              </h1>
            </div>
          </div>
          <p className="text-muted leading-relaxed max-w-2xl">
            {category.articles.length} Artikel in dieser Kategorie.
            Klicke auf einen Artikel, um mehr zu erfahren.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {category.articles.map((article, i) => {
            const readingTime = Math.max(3, article.sections.length * 2);
            return (
              <motion.div
                key={article.href}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link href={article.href} className="group block h-full">
                  <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-3">
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
                    <h2 className="text-lg font-semibold group-hover:text-gold transition-colors mb-2">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {article.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((tag) => (
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
              </motion.div>
            );
          })}
        </div>

        {/* Back + CTA */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <Link
            href="/archiv-test"
            className="text-sm text-muted hover:text-gold transition-colors"
          >
            &larr; Zur&uuml;ck zum Sternarchiv
          </Link>

          <div className="w-full p-6 rounded-2xl bg-gold/5 border border-gold/20 text-center">
            <p className="font-medium mb-3">
              Bereit f&uuml;r dein pers&ouml;nliches Profil?
            </p>
            <Link
              href="/check"
              className="inline-block bg-gold hover:bg-gold-hover text-bg font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Jetzt Gratis-Check starten
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
