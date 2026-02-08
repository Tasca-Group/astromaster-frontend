"use client";

import { useState, useRef } from "react";

interface Props {
  onSubmit: (geburtsdatum: string) => void;
  loading: boolean;
}

export default function GratisCheckForm({ onSubmit, loading }: Props) {
  const [tag, setTag] = useState("");
  const [monat, setMonat] = useState("");
  const [jahr, setJahr] = useState("");
  const [error, setError] = useState("");

  const monatRef = useRef<HTMLInputElement>(null);
  const jahrRef = useRef<HTMLInputElement>(null);

  function handleTagChange(val: string) {
    const num = val.replace(/\D/g, "").slice(0, 2);
    setTag(num);
    if (num.length === 2) monatRef.current?.focus();
  }

  function handleMonatChange(val: string) {
    const num = val.replace(/\D/g, "").slice(0, 2);
    setMonat(num);
    if (num.length === 2) jahrRef.current?.focus();
  }

  function handleJahrChange(val: string) {
    setJahr(val.replace(/\D/g, "").slice(0, 4));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const t = parseInt(tag, 10);
    const m = parseInt(monat, 10);
    const j = parseInt(jahr, 10);

    if (!t || !m || !j || tag.length < 1 || monat.length < 1 || jahr.length !== 4) {
      setError("Bitte gib ein vollstaendiges Datum ein.");
      return;
    }
    if (t < 1 || t > 31) {
      setError("Tag muss zwischen 1 und 31 liegen.");
      return;
    }
    if (m < 1 || m > 12) {
      setError("Monat muss zwischen 1 und 12 liegen.");
      return;
    }
    if (j < 1900 || j > 2030) {
      setError("Jahr muss zwischen 1900 und 2030 liegen.");
      return;
    }

    const geburtsdatum = `${tag.padStart(2, "0")}.${monat.padStart(2, "0")}.${jahr}`;
    onSubmit(geburtsdatum);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-1">
          <label className="block text-sm text-muted mb-2">Tag</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="TT"
            value={tag}
            onChange={(e) => handleTagChange(e.target.value)}
            className="w-full h-14 sm:h-16 text-center text-xl sm:text-2xl font-semibold bg-card border border-border rounded-xl focus:border-gold focus:outline-none transition-colors"
            disabled={loading}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm text-muted mb-2">Monat</label>
          <input
            ref={monatRef}
            type="text"
            inputMode="numeric"
            placeholder="MM"
            value={monat}
            onChange={(e) => handleMonatChange(e.target.value)}
            className="w-full h-14 sm:h-16 text-center text-xl sm:text-2xl font-semibold bg-card border border-border rounded-xl focus:border-gold focus:outline-none transition-colors"
            disabled={loading}
          />
        </div>
        <div className="flex-[1.5]">
          <label className="block text-sm text-muted mb-2">Jahr</label>
          <input
            ref={jahrRef}
            type="text"
            inputMode="numeric"
            placeholder="JJJJ"
            value={jahr}
            onChange={(e) => handleJahrChange(e.target.value)}
            className="w-full h-14 sm:h-16 text-center text-xl sm:text-2xl font-semibold bg-card border border-border rounded-xl focus:border-gold focus:outline-none transition-colors"
            disabled={loading}
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 h-14 sm:h-16 bg-gold hover:bg-gold-hover disabled:opacity-50 disabled:cursor-not-allowed text-bg font-semibold text-lg rounded-xl transition-colors"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Berechne...
          </span>
        ) : (
          "Check starten \u2192"
        )}
      </button>
    </form>
  );
}
