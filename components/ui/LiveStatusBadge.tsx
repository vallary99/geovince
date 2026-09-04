/**
 * A quiet status pill — a soft pulsing dot plus a short label — used
 * sparingly to reinforce that monitoring is live, without a ticking clock
 * or terminal-style readout.
 */
export default function LiveStatusBadge({
  label = "Live monitoring",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-signal/30 bg-forest-dark/70 px-3 py-1.5 text-xs text-paper/85 backdrop-blur ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-50" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
      </span>
      {label}
    </span>
  );
}
