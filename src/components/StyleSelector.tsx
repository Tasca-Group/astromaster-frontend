"use client";

interface Props {
  selected: "dark" | "light";
  onSelect: (v: "dark" | "light") => void;
}

export default function StyleSelector({ selected, onSelect }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-light uppercase tracking-[0.15em] mb-2">Wähle dein Design</h2>
      <p className="text-muted mb-8">
        Dein kosmisches Profil — so individuell wie du.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        {/* Dark Option */}
        <button
          onClick={() => onSelect("dark")}
          className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
            selected === "dark"
              ? "border-gold"
              : "border-border opacity-60 hover:opacity-80"
          }`}
        >
          {selected === "dark" && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-bg text-xs font-bold">
              &#10003;
            </span>
          )}

          {/* CSS-only Dark Preview */}
          <div className="w-full h-32 rounded-lg bg-[#0A0F14] border border-white/10 flex flex-col items-center justify-center gap-3 mb-3 overflow-hidden">
            <div className="w-16 h-[1px] bg-[#C9A961]" />
            <div className="w-4 h-4 rounded-full border border-[#C9A961]" />
            <div className="w-12 h-[1px] bg-[#C9A961]" />
          </div>

          <p className="font-semibold text-sm">Deep Space</p>
          <p className="text-xs text-muted">Mystisch &amp; Elegant</p>
        </button>

        {/* Light Option */}
        <button
          onClick={() => onSelect("light")}
          className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
            selected === "light"
              ? "border-gold"
              : "border-border opacity-60 hover:opacity-80"
          }`}
        >
          {selected === "light" && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-bg text-xs font-bold">
              &#10003;
            </span>
          )}

          {/* CSS-only Light Preview */}
          <div className="w-full h-32 rounded-lg bg-[#F5F0E8] border border-black/10 flex flex-col items-center justify-center gap-3 mb-3 overflow-hidden">
            <div className="w-16 h-[1px] bg-[#2A2520]" />
            <div className="w-4 h-4 rounded-full border border-[#2A2520]" />
            <div className="w-12 h-[1px] bg-[#2A2520]" />
          </div>

          <p className="font-semibold text-sm">Solar Flare</p>
          <p className="text-xs text-muted">Modern &amp; Minimalistisch</p>
        </button>
      </div>
    </div>
  );
}
