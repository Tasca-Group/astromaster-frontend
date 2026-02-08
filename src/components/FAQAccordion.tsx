"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl bg-card border border-border overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left min-h-[48px]"
          >
            <span className="font-medium pr-4">{item.question}</span>
            <span
              className={`shrink-0 text-muted transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
