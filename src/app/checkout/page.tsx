"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { PRICES } from "@/lib/constants";
import { createCheckoutSession } from "@/lib/api";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const version = (searchParams.get("version") as "normal" | "pro") || "normal";
  const price = PRICES[version] || PRICES.normal;

  const [form, setForm] = useState({
    name: "",
    email: "",
    tag: "",
    monat: "",
    jahr: "",
    stunde: "",
    minute: "",
    geburtsort: "",
    agb: false,
    widerruf: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string | boolean) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Bitte gib deinen Namen ein.");
    if (!form.email.includes("@")) return setError("Bitte gib eine gültige Email ein.");
    if (!form.tag || !form.monat || !form.jahr)
      return setError("Bitte gib dein Geburtsdatum ein.");
    if (!form.stunde || !form.minute)
      return setError("Bitte gib deine Geburtszeit ein.");
    if (!form.geburtsort.trim())
      return setError("Bitte gib deinen Geburtsort ein.");
    if (!form.agb)
      return setError("Bitte akzeptiere die AGB.");
    if (!form.widerruf)
      return setError("Bitte bestätige die Widerrufsbelehrung.");

    setLoading(true);

    try {
      const geburtsdatum = `${form.tag.padStart(2, "0")}.${form.monat.padStart(2, "0")}.${form.jahr}`;
      const geburtszeit = `${form.stunde.padStart(2, "0")}:${form.minute.padStart(2, "0")}`;

      const { url } = await createCheckoutSession({
        name: form.name,
        email: form.email,
        geburtsdatum,
        geburtszeit,
        geburtsort: form.geburtsort,
        version,
      });

      // Redirect zu Stripe Checkout
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
      setLoading(false);
    }
  }

  const inputClass =
    "w-full h-14 px-4 bg-card border border-border rounded-xl focus:border-gold focus:outline-none transition-colors text-base";

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Product Summary */}
          <div className="p-5 rounded-2xl bg-card border border-border mb-8 flex justify-between items-center">
            <div>
              <p className="font-semibold">
                {version === "pro" ? "Pro" : "Normal"}-Analyse
              </p>
              <p className="text-sm text-muted">
                {version === "pro" ? "50-60" : "12-15"} Seiten PDF
              </p>
            </div>
            <p className="text-2xl font-bold text-gold">{price}&euro;</p>
          </div>

          {version === "normal" && (
            <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-8 text-center">
              <p className="text-sm text-muted">
                Upgrade auf{" "}
                <a href="/checkout?version=pro" className="text-gold font-medium">
                  Pro für {PRICES.pro}&euro;
                </a>{" "}
                &mdash; 4x mehr Inhalt
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-muted mb-2">Name</label>
              <input
                type="text"
                placeholder="Max Mustermann"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Email</label>
              <input
                type="email"
                placeholder="max@beispiel.de"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Geburtsdatum</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="TT"
                  value={form.tag}
                  onChange={(e) =>
                    update("tag", e.target.value.replace(/\D/g, "").slice(0, 2))
                  }
                  className={`${inputClass} text-center`}
                  disabled={loading}
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM"
                  value={form.monat}
                  onChange={(e) =>
                    update("monat", e.target.value.replace(/\D/g, "").slice(0, 2))
                  }
                  className={`${inputClass} text-center`}
                  disabled={loading}
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="JJJJ"
                  value={form.jahr}
                  onChange={(e) =>
                    update("jahr", e.target.value.replace(/\D/g, "").slice(0, 4))
                  }
                  className={`${inputClass} text-center flex-[1.5]`}
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Geburtszeit</label>
              <div className="flex gap-3 items-center max-w-[200px]">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="HH"
                  value={form.stunde}
                  onChange={(e) =>
                    update("stunde", e.target.value.replace(/\D/g, "").slice(0, 2))
                  }
                  className={`${inputClass} text-center`}
                  disabled={loading}
                />
                <span className="text-muted text-xl">:</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM"
                  value={form.minute}
                  onChange={(e) =>
                    update("minute", e.target.value.replace(/\D/g, "").slice(0, 2))
                  }
                  className={`${inputClass} text-center`}
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Geburtsort</label>
              <input
                type="text"
                placeholder="Berlin, Deutschland"
                value={form.geburtsort}
                onChange={(e) => update("geburtsort", e.target.value)}
                className={inputClass}
                disabled={loading}
              />
            </div>

            {/* AGB */}
            <label className="flex items-start gap-3 pt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={form.agb}
                onChange={(e) => update("agb", e.target.checked)}
                className="mt-1 w-5 h-5 shrink-0 accent-gold"
                disabled={loading}
              />
              <span className="text-sm text-muted">
                Ich akzeptiere die{" "}
                <a href="/agb" className="text-gold hover:underline">
                  AGB
                </a>{" "}
                und{" "}
                <a href="/datenschutz" className="text-gold hover:underline">
                  Datenschutzerklärung
                </a>
                .
              </span>
            </label>

            {/* Widerrufsrecht */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.widerruf}
                onChange={(e) => update("widerruf", e.target.checked)}
                className="mt-1 w-5 h-5 shrink-0 accent-gold"
                disabled={loading}
              />
              <span className="text-sm text-muted">
                Ich stimme zu, dass die Ausführung des Vertrags sofort beginnt,
                und mir ist bekannt, dass ich mein Widerrufsrecht mit Zustellung
                der Analyse verliere.
              </span>
            </label>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading || !form.agb || !form.widerruf}
              className="w-full h-14 bg-gold hover:bg-gold-hover disabled:opacity-50 disabled:cursor-not-allowed text-bg font-semibold text-lg rounded-xl transition-colors mt-2"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Weiterleitung zu Stripe...
                </span>
              ) : (
                <>Jetzt bezahlen &mdash; {price}&euro;</>
              )}
            </button>
          </form>

          {/* Trust Signals */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              "Sichere Bezahlung",
              "24h Lieferung",
              "14 Tage Garantie",
              "Daten in DE",
            ].map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="text-gold">&#10003;</span>
                {signal}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}
