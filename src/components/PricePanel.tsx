"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

export interface PersonPricing {
  name: string;
  price: number;
  discount: number;
}

interface Props {
  paket: "normal" | "pro";
  design: "dark" | "light";
  persons: PersonPricing[];
  totalOriginal: number;
  totalDiscounted: number;
  totalSavings: number;
  onCheckout: () => void;
}

function AnimatedPrice({ value, className = "" }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const spring = useSpring(value, { stiffness: 80, damping: 15 });

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = v.toFixed(2).replace(".", ",") + "\u20AC";
      }
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {value.toFixed(2).replace(".", ",")}&euro;
    </span>
  );
}

export default function PricePanel({
  paket,
  design,
  persons,
  totalOriginal,
  totalDiscounted,
  totalSavings,
  onCheckout,
}: Props) {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [savingsFlash, setSavingsFlash] = useState(false);
  const prevSavings = useRef(totalSavings);

  useEffect(() => {
    if (totalSavings > prevSavings.current && totalSavings > 0) {
      setSavingsFlash(true);
      const timer = setTimeout(() => setSavingsFlash(false), 2000);
      prevSavings.current = totalSavings;
      return () => clearTimeout(timer);
    }
    prevSavings.current = totalSavings;
  }, [totalSavings]);

  const designName = design === "light" ? "Solar Flare" : "Deep Space";
  const paketName = paket === "pro" ? "Pro-Analyse" : "Standard-Analyse";

  const panelContent = (
    <>
      <p className="text-xs text-gold uppercase tracking-wider mb-4">
        Deine Bestellung
      </p>

      <div className="space-y-1.5 text-sm mb-4">
        <div className="flex justify-between">
          <span className="text-muted">Design</span>
          <span>{designName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Paket</span>
          <span>{paketName}</span>
        </div>
      </div>

      <div className="border-t border-border/50 pt-4 mb-4">
        <AnimatePresence mode="popLayout">
          {persons.map((person, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center justify-between py-2 text-sm"
            >
              <span className="truncate mr-3">
                <span className="text-muted">{i + 1}.</span>{" "}
                {person.name}
              </span>
              <span className="flex items-center gap-2 shrink-0">
                <AnimatedPrice value={person.price} className="font-medium" />
                {person.discount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                    className="text-[#4CAF50] text-xs font-medium"
                  >
                    -{person.discount}%
                  </motion.span>
                )}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="border-t border-border/50 pt-4">
        {totalSavings > 0 && (
          <div className="flex justify-between text-sm text-muted mb-1">
            <span>Statt:</span>
            <span className="line-through">
              {totalOriginal.toFixed(2).replace(".", ",")}&euro;
            </span>
          </div>
        )}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium uppercase tracking-wider">Gesamt</span>
          <AnimatedPrice
            value={totalDiscounted}
            className="text-2xl font-bold text-gold"
          />
        </div>
        {totalSavings > 0 && (
          <motion.p
            animate={savingsFlash ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.6 }}
            className={`text-sm text-center font-medium transition-colors duration-500 ${
              savingsFlash ? "text-[#66BB6A]" : "text-[#4CAF50]"
            }`}
          >
            Du sparst {totalSavings.toFixed(2).replace(".", ",")}&euro;
          </motion.p>
        )}
      </div>

      <button
        onClick={() => {
          setMobileExpanded(false);
          onCheckout();
        }}
        className="w-full mt-5 min-h-[48px] bg-gold hover:bg-gold-hover text-bg font-semibold text-base rounded-xl transition-colors"
      >
        Jetzt kostenpflichtig bestellen
      </button>
    </>
  );

  return (
    <>
      {/* Desktop Panel */}
      <div className="hidden lg:block sticky top-24">
        <div className="p-6 rounded-2xl bg-card border border-[rgba(201,169,97,0.2)]">
          {panelContent}
        </div>
      </div>

      {/* Mobile: Backdrop */}
      <AnimatePresence>
        {mobileExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/60 z-40"
            onClick={() => setMobileExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile: Expanded Sheet */}
      <AnimatePresence>
        {mobileExpanded && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-6 pt-3 pb-6 bg-bg border-t border-border rounded-t-3xl max-h-[80vh] overflow-auto"
          >
            <div className="w-10 h-1 bg-border rounded-full mx-auto mb-5" />
            {panelContent}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: Bottom Bar (collapsed) */}
      {!mobileExpanded && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg">
          <div className="px-4 py-3 flex items-center justify-between gap-4 max-w-lg mx-auto">
            <button
              onClick={() => setMobileExpanded(true)}
              className="flex-1 text-left"
            >
              <div className="flex items-center gap-2">
                <AnimatedPrice
                  value={totalDiscounted}
                  className="text-xl font-bold text-gold"
                />
                <span className="text-xs text-muted">
                  &middot; {persons.length} {persons.length === 1 ? "Person" : "Personen"}
                </span>
              </div>
              {totalSavings > 0 && (
                <p className="text-xs text-[#4CAF50]">
                  Du sparst {totalSavings.toFixed(2).replace(".", ",")}&euro;
                </p>
              )}
            </button>
            <button
              onClick={onCheckout}
              className="px-5 min-h-[44px] bg-gold hover:bg-gold-hover text-bg font-semibold text-sm rounded-xl transition-colors shrink-0"
            >
              Bestellen
            </button>
          </div>
        </div>
      )}
    </>
  );
}
