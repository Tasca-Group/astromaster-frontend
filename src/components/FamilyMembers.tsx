"use client";

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
}

export default function FamilyMembers({ members, onChange, maxTotal }: Props) {
  const canAdd = members.length < maxTotal - 1;

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

      {members.map((member, index) => (
        <div
          key={member.id}
          className="relative p-5 rounded-2xl bg-card border border-border mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gold">
              Person {index + 2}
            </p>
            <button
              onClick={() => removeMember(member.id)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 text-muted hover:text-red-400 transition-colors"
              type="button"
            >
              &#10005;
            </button>
          </div>

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
          </div>
        </div>
      ))}

      {canAdd && (
        <button
          onClick={addMember}
          type="button"
          className="w-full py-4 rounded-xl border border-dashed border-border hover:border-gold/50 text-muted hover:text-gold transition-colors text-base"
        >
          + Familienmitglied hinzufügen
        </button>
      )}
    </div>
  );
}
