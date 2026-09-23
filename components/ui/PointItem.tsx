type Props = {
  title: string;
  body: string;
  tone?: "light" | "dark";
};

/**
 * A checkmark-badged point row, used in place of plain bulleted text blocks
 * so lists of capabilities/benefits read as a product feature list rather
 * than a slide deck's bullet points.
 */
export default function PointItem({ title, body, tone = "light" }: Props) {
  const isDark = tone === "dark";

  return (
    <div className="flex gap-3.5">
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          isDark ? "bg-signal/15 text-signal" : "bg-forest/10 text-forest"
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 6.2L4.4 8.6L10 2.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div>
        <p className={`font-medium ${isDark ? "text-paper" : "text-ink"}`}>{title}</p>
        <p className={`mt-1.5 text-sm leading-relaxed ${isDark ? "text-paper/70" : "text-ink/70"}`}>{body}</p>
      </div>
    </div>
  );
}
