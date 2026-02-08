"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-sm tracking-[0.2em] uppercase mb-6"
        >
          Siderische Astrologie
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          Dein Sternzeichen
          <br />
          <span className="text-gold">ist falsch.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-muted max-w-xl mx-auto leading-relaxed"
        >
          86% aller Menschen haben ein anderes Sternzeichen als sie glauben.
          Finde in 10 Sekunden heraus, ob du dazugehoerst.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/check"
            className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-bg font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
          >
            Kostenloser Check &rarr;
          </Link>
          <Link
            href="#problem"
            className="w-full sm:w-auto border border-border hover:border-muted text-white font-medium px-8 py-4 rounded-lg text-lg transition-colors text-center"
          >
            Mehr erfahren
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
