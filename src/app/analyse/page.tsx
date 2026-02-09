"use client";

import { motion } from "framer-motion";
import OrderFlow from "@/components/OrderFlow";

export default function AnalysePage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Deine Analyse
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em]">
            Dein kosmisches Profil
          </h1>
          <p className="mt-4 text-lg text-muted max-w-lg mx-auto leading-relaxed">
            5 Systeme. 1 PDF. Die Wahrheit über dein kosmisches Profil.
          </p>
        </motion.div>

        <OrderFlow />
      </div>
    </section>
  );
}
