"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getPersonDiscount } from "./OrderFlow";

export interface FamilyMember {
  id: string;
  vorname: string;
  tag: string;
  monat: string;
  jahr: string;
  stunde: string;
  minute: string;
  geburtsort: string;
}

interface Props {
  members: FamilyMember[];
  onChange: (members: FamilyMember[]) => void;
  maxTotal: number;
  basePrice: number;
}

export default function FamilyMembers({ members, onChange, maxTotal, basePrice }: Props) {
  const canAdd = members.length < maxTotal - 1;
  const [confirmRemoveId, setConfirmRemoveId] = useState<string | null>(null);

  function addMember() {
    if (!canAdd) return;
    onChange([
      ...members,
      {
        id: Math.random().toString(36).slice(2),
        vorname: "",
        tag: "",
        monat: "",
        jahr: "",
        stunde: "",
        minute: "",
        geburtsort: "",
      },
    ]);
  }

  function removeMember(id: string) {
    onChange(members.filter((m) => m.id !== id));
    setConfirmRemoveId(null);
  }

  function updateMember(id: string, field: keyof FamilyMember, value: string) {
    onChange(
      members.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  }

  const inputClass =
    "w-full min-h-[48px] px-4 bg-card border border-border rounded-xl focus:border-gold focus:outline-none transition-colors text-base";

  return (
    <div>
      <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-center mb-2">
        Möchtest du jemanden mitnehmen?
      </h2>
      <p className="text-muted text-center mb-8">
        Bestelle für deine Liebsten mit und spare.
      </p>

      <AnimatePresence mode="popLayout">
        {members.map((member, index) => {
          const personIndex = index + 1;
          const discount = getPersonDiscount(personIndex);
          const discountPercent = Math.round(discount * 100);
          const price = Math.round(basePrice * (1 - discount) * 100) / 100;

          return (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-5 rounded-2xl bg-card border border-[rgba(201,169,97,0.15)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium text-gold">
                      Person {index + 2}
                    </p>
                    {discountPercent > 0 && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                        className="text-xs font-medium text-[#4CAF50] bg-[#4CAF50]/10 px-2 py-0.5 rounded-full"
                      >
                        {discountPercent}% gespart
                      </motion.span>
                    )}
                  </div>

                  {/* Remove / Confirm */}
                  <AnimatePresence mode="wait">
                    {confirmRemoveId === member.id ? (
                      <motion.div
                        key="confirm"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-xs text-muted">Entfernen?</span>
                        <button
                          onClick={() => removeMember(member.id)}
                          type="button"
                          className="text-xs font-medium text-red-400 hover:text-red-300 min-h-[32px] px-2"
                        >
                          Ja
                        </button>
                        <button
                          onClick={() => setConfirmRemoveId(null)}
                          type="button"
                          className="text-xs font-medium text-muted hover:text-white min-h-[32px] px-2"
                        >
                          Nein
                        </button>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="remove"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setConfirmRemoveId(member.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 text-muted hover:text-red-400 transition-colors"
                        type="button"
                      >
                        &#10005;
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                {/* Fields */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-muted mb-2">Vorname</label>
                    <input
                      type="text"
                      placeholder="Vorname"
                      value={member.vorname}
                      onChange={(e) => updateMember(member.id, "vorname", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted mb-2">Geburtsdatum</label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="TT"
                        value={member.tag}
                        onChange={(e) =>
                          updateMember(member.id, "tag", e.target.value.replace(/\D/g, "").slice(0, 2))
                        }
                        className={`${inputClass} text-center w-[60px]`}
                      />
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="MM"
                        value={member.monat}
                        onChange={(e) =>
                          updateMember(member.id, "monat", e.target.value.replace(/\D/g, "").slice(0, 2))
                        }
                        className={`${inputClass} text-center w-[60px]`}
                      />
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="JJJJ"
                        value={member.jahr}
                        onChange={(e) =>
                          updateMember(member.id, "jahr", e.target.value.replace(/\D/g, "").slice(0, 4))
                        }
                        className={`${inputClass} text-center min-w-[100px]`}
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
                        value={member.stunde}
                        onChange={(e) =>
                          updateMember(member.id, "stunde", e.target.value.replace(/\D/g, "").slice(0, 2))
                        }
                        className={`${inputClass} text-center`}
                      />
                      <span className="text-muted text-xl">:</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="MM"
                        value={member.minute}
                        onChange={(e) =>
                          updateMember(member.id, "minute", e.target.value.replace(/\D/g, "").slice(0, 2))
                        }
                        className={`${inputClass} text-center`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-muted mb-2">Geburtsort</label>
                    <input
                      type="text"
                      placeholder="z.B. Berlin, Deutschland"
                      value={member.geburtsort}
                      onChange={(e) => updateMember(member.id, "geburtsort", e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Individual price */}
                  <div className="pt-2 flex items-center justify-between text-sm">
                    <span className="text-muted">Preis für diese Person:</span>
                    <span className="font-medium text-gold">
                      {price.toFixed(2).replace(".", ",")}&euro;
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {canAdd && (
        <motion.div layout transition={{ duration: 0.3 }}>
          <button
            onClick={addMember}
            type="button"
            className="w-full min-h-[48px] py-4 rounded-xl border border-dashed border-border hover:border-gold/50 text-muted hover:text-gold transition-all duration-300 text-base"
          >
            + Weitere Person hinzufügen
          </button>
          <p className="text-xs text-muted text-center mt-3">
            Jede weitere Person spart mehr &mdash; bis zu 25%
          </p>
        </motion.div>
      )}
    </div>
  );
}
