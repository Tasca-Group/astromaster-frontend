const FEATURES = [
  { name: "Siderischer System-Check", normal: true, pro: true },
  { name: "Sonne, Mond & Aszendent", normal: true, pro: true },
  { name: "Numerologie & Lebenszahl", normal: true, pro: true },
  { name: "Elementar-Analyse", normal: true, pro: true },
  { name: "Kosmische Signatur", normal: true, pro: true },
  { name: "Alle Planeten & 12 Häuser", normal: false, pro: true },
  { name: "Ägyptischer Wächter & Dekan", normal: false, pro: true },
  { name: "Human Design komplett", normal: false, pro: true },
  { name: "Aspekte & Nakshatras", normal: false, pro: true },
  { name: "Ma'at-Synthese", normal: false, pro: true },
  { name: "Journaling & 30-Tage-Challenge", normal: false, pro: true },
];

export default function FeatureComparison() {
  return (
    <div>
      <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-center mb-8">
        Feature-Vergleich
      </h2>

      <div className="rounded-2xl bg-card border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-sm font-medium text-muted">Feature</th>
              <th className="p-4 text-sm font-medium text-center w-24">Standard</th>
              <th className="p-4 text-sm font-medium text-gold text-center w-24">Pro</th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((f, i) => (
              <tr
                key={f.name}
                className={i < FEATURES.length - 1 ? "border-b border-border/50" : ""}
              >
                <td className="p-4 text-sm">{f.name}</td>
                <td className="p-4 text-center">
                  {f.normal ? (
                    <span className="text-gold">&#10003;</span>
                  ) : (
                    <span className="text-muted/30">&mdash;</span>
                  )}
                </td>
                <td className="p-4 text-center">
                  {f.pro ? (
                    <span className="text-gold">&#10003;</span>
                  ) : (
                    <span className="text-muted/30">&mdash;</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
