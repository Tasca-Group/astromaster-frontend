import Link from "next/link";

interface Props {
  version: "normal" | "pro";
  title: string;
  price: number;
  pages: string;
  features: readonly string[];
  bonuses?: readonly string[];
  highlighted?: boolean;
  badge?: string;
  designParam?: string;
}

export default function ProductCardTest({
  version,
  title,
  price,
  pages,
  features,
  bonuses,
  highlighted = false,
  badge,
  designParam = "dark",
}: Props) {
  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl border ${
        highlighted
          ? "bg-card border-gold/40"
          : "bg-card border-border"
      } flex flex-col h-full`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bg text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
          {badge}
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted text-sm mt-1">{pages}</p>
      </div>

      <div className="mb-6">
        <span className={`text-4xl font-bold ${highlighted ? "text-gold" : ""}`}>
          {price}&euro;
        </span>
        <span className="text-muted text-sm ml-1">einmalig</span>
      </div>

      {bonuses && bonuses.length > 0 && (
        <div className="mt-3 pt-3 border-t border-border/30 mb-6">
          <p className="text-xs text-gold uppercase tracking-wider mb-2">Inklusive:</p>
          <ul className="space-y-1.5">
            {bonuses.map((bonus) => (
              <li key={bonus} className="flex items-start gap-2 text-xs">
                <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                <span className="text-muted/80">{bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
            <span className="text-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/checkout?version=${version}&design=${designParam}`}
        className={`block text-center py-4 rounded-xl font-semibold text-lg transition-colors ${
          highlighted
            ? "bg-gold hover:bg-gold-hover text-bg"
            : "border border-border hover:border-gold/30 text-white"
        }`}
      >
        Jetzt bestellen
      </Link>
    </div>
  );
}
