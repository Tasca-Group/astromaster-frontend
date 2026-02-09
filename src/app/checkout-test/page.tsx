"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PRICES } from "@/lib/constants";

interface FamilyMember {
  id: string;
  vorname: string;
  tag: string;
  monat: string;
  jahr: string;
  stunde: string;
  minute: string;
  geburtsort: string;
}

interface OrderData {
  design: "dark" | "light";
  paket: "normal" | "pro";
  familyMembers: FamilyMember[];
  prefillGeburtsdatum?: string;
}

function getDiscount(totalPersons: number): number {
  if (totalPersons >= 3) return 0.15;
  if (totalPersons === 2) return 0.10;
  return 0;
}

export default function CheckoutTestPage() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
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

  useEffect(() => {
    const stored = sessionStorage.getItem("astro-order");
    if (stored) {
      try {
        const data = JSON.parse(stored) as OrderData;
        setOrderData(data);

        if (data.prefillGeburtsdatum) {
          const parts = data.prefillGeburtsdatum.split(".");
          if (parts.length === 3) {
            setForm((f) => ({
              ...f,
              tag: parts[0],
              monat: parts[1],
              jahr: parts[2],
            }));
          }
        }
      } catch {
        // invalid data
      }
    }
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  if (!orderData) {
    return (
      <section className="min-h-screen pt-24 pb-16 px-6 text-center">
        <p className="text-muted mt-8">Keine Bestelldaten gefunden.</p>
        <a href="/analyse-test" className="text-gold mt-4 inline-block hover:underline">
          Zur Analyse &rarr;
        </a>
      </section>
    );
  }

  const totalPersons = 1 + orderData.familyMembers.length;
  const basePrice = PRICES[orderData.paket];
  const discount = getDiscount(totalPersons);
  const originalTotal = basePrice * totalPersons;
  const discountedTotal = Math.round(originalTotal * (1 - discount));
  const savings = originalTotal - discountedTotal;
  const designName = orderData.design === "light" ? "Solar Flare" : "Deep Space";

  function update(field: string, value: string | boolean) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!orderData) return;
    setError("");

    if (!form.vorname.trim()) return setError("Bitte gib deinen Vornamen ein.");
    if (!form.nachname.trim()) return setError("Bitte gib deinen Nachnamen ein.");
    if (!form.email.includes("@")) return setError("Bitte gib eine gültige Email ein.");
    if (!form.tag || !form.monat || !form.jahr)
      return setError("Bitte gib dein Geburtsdatum ein.");
    if (!form.stunde || !form.minute)
      return setError("Bitte gib deine Geburtszeit ein.");
    if (!form.geburtsort.trim())
      return setError("Bitte gib deinen Geburtsort ein.");
    if (!form.agb) return setError("Bitte akzeptiere die AGB.");
    if (!form.widerruf) return setError("Bitte bestätige die Widerrufsbelehrung.");

    setLoading(true);

    try {
      // Stripe integration kommt später — Platzhalter
      alert(
        "Stripe Checkout kommt bald!\n\n" +
          JSON.stringify(
            {
              design: orderData.design,
              paket: orderData.paket,
              hauptperson: {
                name: `${form.vorname} ${form.nachname}`,
                email: form.email,
                geburtsdatum: `${form.tag.padStart(2, "0")}.${form.monat.padStart(2, "0")}.${form.jahr}`,
                geburtszeit: `${form.stunde.padStart(2, "0")}:${form.minute.padStart(2, "0")}`,
                geburtsort: form.geburtsort,
              },
              familyMembers: orderData.familyMembers.length,
              total: discountedTotal,
            },
            null,
            2
          )
      );
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
      setLoading(false);
    }
  }

  const inputClass =
    "w-full min-h-[48px] px-4 bg-card border border-border rounded-xl focus:border-gold focus:outline-none transition-colors text-base";

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Summary */}
          <div className="p-5 rounded-2xl bg-card border border-border mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-semibold">
                  {orderData.paket === "pro" ? "Pro" : "Standard"}-Analyse
                </p>
                <p className="text-sm text-muted">
                  {totalPersons} {totalPersons === 1 ? "Person" : "Personen"}
                </p>
              </div>
              <div className="text-right">
                {discount > 0 && (
                  <p className="text-sm text-muted line-through">{originalTotal}&euro;</p>
                )}
                <p className="text-2xl font-bold text-gold">{discountedTotal}&euro;</p>
                {savings > 0 && (
                  <p className="text-xs text-gold">Du sparst {savings}&euro;</p>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-border/50 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Design</span>
                <div className="flex items-center gap-2">
                  <span>{designName}</span>
                  <button
                    onClick={() => router.back()}
                    className="text-gold text-xs hover:underline"
                  >
                    Ändern
                  </button>
                </div>
              </div>
              {orderData.familyMembers.length > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Familienmitglieder</span>
                  <span>
                    {orderData.familyMembers
                      .map((m) => m.vorname || "\u2014")
                      .join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Upgrade hint */}
          {orderData.paket === "normal" && (
            <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 mb-8 text-center">
              <p className="text-sm text-muted">
                Upgrade auf{" "}
                <button
                  onClick={() => {
                    const updated = { ...orderData, paket: "pro" as const };
                    sessionStorage.setItem("astro-order", JSON.stringify(updated));
                    setOrderData(updated);
                  }}
                  className="text-gold font-medium hover:underline"
                >
                  Pro für {PRICES.pro}&euro;
                </button>{" "}
                &mdash; 4x mehr Inhalt
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-gold uppercase tracking-wider mb-2">
              Hauptperson
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-muted mb-2">Vorname</label>
                <input
                  type="text"
                  placeholder="Max"
                  value={form.vorname}
                  onChange={(e) => update("vorname", e.target.value)}
                  className={inputClass}
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">Nachname</label>
                <input
                  type="text"
                  placeholder="Mustermann"
                  value={form.nachname}
                  onChange={(e) => update("nachname", e.target.value)}
                  className={inputClass}
                  disabled={loading}
                />
              </div>
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
                  className={`${inputClass} text-center w-[60px]`}
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
                  className={`${inputClass} text-center w-[60px]`}
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
                  className={`${inputClass} text-center min-w-[100px]`}
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">Geburtszeit</label>
              <div className="flex gap-3 items-center max-w-[180px]">
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
                und habe die{" "}
                <a href="/datenschutz" className="text-gold hover:underline">
                  Widerrufsbelehrung
                </a>{" "}
                gelesen.
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
                Ich stimme zu, dass die Ausführung sofort beginnt und mein
                Widerrufsrecht mit Zustellung erlischt.
              </span>
            </label>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading || !form.agb || !form.widerruf}
              className="w-full min-h-[48px] bg-gold hover:bg-gold-hover disabled:opacity-50 disabled:cursor-not-allowed text-bg font-semibold text-lg rounded-xl transition-colors mt-2"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Weiterleitung...
                </span>
              ) : (
                <>Jetzt kostenpflichtig bestellen &mdash; {discountedTotal}&euro;</>
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
