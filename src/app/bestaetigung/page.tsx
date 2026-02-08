"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getOrderStatus, type BestellungStatusResponse } from "@/lib/api";
import { API_URL } from "@/lib/constants";

function BestaetigungContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [orderId, setOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<BestellungStatusResponse | null>(null);
  const [polling, setPolling] = useState(true);

  // Schritt 1: Bestellungs-ID aus Stripe Session holen
  useEffect(() => {
    if (!sessionId) return;

    async function fetchOrderId() {
      try {
        const res = await fetch(
          `${API_URL}/api/bestellung/by-session/${sessionId}`
        );
        if (res.ok) {
          const data = await res.json();
          setOrderId(data.id);
        }
      } catch {
        // Wird beim nächsten Poll-Versuch erneut versucht
      }
    }

    fetchOrderId();
    // Retry alle 3s falls Webhook noch nicht angekommen
    const interval = setInterval(fetchOrderId, 3000);
    return () => clearInterval(interval);
  }, [sessionId]);

  // Schritt 2: Status polling sobald wir die Order-ID haben
  const pollStatus = useCallback(async () => {
    if (!orderId) return;
    try {
      const data = await getOrderStatus(orderId);
      setStatus(data);
      if (data.status === "fertig" || data.status === "fehler") {
        setPolling(false);
      }
    } catch {
      // Ignorieren, nächster Poll versucht es erneut
    }
  }, [orderId]);

  useEffect(() => {
    if (!orderId || !polling) return;

    pollStatus();
    const interval = setInterval(pollStatus, 3000);
    return () => clearInterval(interval);
  }, [orderId, polling, pollStatus]);

  const steps = [
    {
      label: "Bestellung eingegangen",
      done: !!status,
    },
    {
      label: "Berechnung läuft",
      done: status?.status === "fertig" || status?.status === "fehler",
      active: status?.status === "berechne",
    },
    {
      label: "PDF wird erstellt",
      done: status?.status === "fertig",
      active: status?.status === "berechne",
    },
    {
      label: "Email versendet",
      done: status?.status === "fertig",
    },
  ];

  const isFertig = status?.status === "fertig";
  const isFehler = status?.status === "fehler";

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 flex items-center">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Checkmark / Error */}
          <div
            className={`w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center ${
              isFehler
                ? "bg-red-500/10 border-2 border-red-500"
                : "bg-gold/10 border-2 border-gold"
            }`}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className={`text-3xl ${isFehler ? "text-red-500" : "text-gold"}`}
            >
              {isFehler ? "\u2717" : "\u2713"}
            </motion.span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {isFehler ? "Ein Fehler ist aufgetreten" : "Vielen Dank!"}
          </h1>
          <p className="text-lg text-muted mb-8">
            {isFertig
              ? "Deine kosmische Analyse wurde per Email versendet. Prüfe deinen Posteingang."
              : isFehler
              ? "Bei der Erstellung deiner Analyse ist ein Fehler aufgetreten. Bitte kontaktiere uns unter kontakt@astro-masters.com."
              : "Deine Bestellung wird verarbeitet. Du erhältst deine kosmische Analyse in wenigen Minuten per Email."}
          </p>

          {/* Progress Steps */}
          <div className="p-6 rounded-2xl bg-card border border-border mb-8">
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs ${
                      step.done
                        ? "bg-gold text-bg"
                        : step.active
                        ? "border-2 border-gold"
                        : "border border-border"
                    }`}
                  >
                    {step.done && "\u2713"}
                    {step.active && (
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                    )}
                  </div>
                  <span
                    className={
                      step.done
                        ? "text-white"
                        : step.active
                        ? "text-gold"
                        : "text-muted"
                    }
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Polling indicator */}
            {polling && !isFertig && !isFehler && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted">
                  <svg
                    className="animate-spin h-4 w-4 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  {!orderId
                    ? "Warte auf Zahlungsbestätigung..."
                    : "Aktualisiert automatisch..."}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/"
            className="text-muted hover:text-white text-sm transition-colors"
          >
            &larr; Zurück zur Startseite
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function BestaetigungPage() {
  return (
    <Suspense>
      <BestaetigungContent />
    </Suspense>
  );
}
