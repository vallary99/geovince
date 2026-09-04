export default function PricingCard({
  name,
  body,
  flagship,
}: {
  name: string;
  body: string;
  flagship?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col border p-8 transition-all duration-300 hover:-translate-y-1 ${
        flagship
          ? "border-forest bg-forest text-paper hover:shadow-[0_20px_45px_-24px_rgba(6,48,31,0.6)]"
          : "border-line bg-paper text-ink hover:border-forest"
      }`}
    >
      {flagship && (
        <span className="mb-4 inline-block w-fit bg-signal px-2.5 py-1 text-xs font-medium uppercase tracking-[0.1em] text-forest-dark">
          Recommended
        </span>
      )}
      <h3 className="font-display text-xl font-semibold uppercase">{name}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${flagship ? "text-paper/80" : "text-ink/70"}`}>{body}</p>
    </div>
  );
}
