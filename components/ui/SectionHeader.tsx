type Props = {
  index?: string;
  label: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
};

export default function SectionHeader({ index, label, title, lead, tone = "light" }: Props) {
  const subtle = tone === "dark" ? "text-signal" : "text-forest";
  const leadColor = tone === "dark" ? "text-paper/80" : "text-ink/70";

  return (
    <div className="max-w-3xl">
      <p className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] ${subtle}`}>
        {index && <span className="font-mono-data text-[11px] opacity-70">{index}</span>}
        {label}
      </p>
      <h2 className="font-display mt-3 text-3xl leading-[1.05] font-semibold uppercase sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {lead && <p className={`mt-5 text-base leading-relaxed md:text-lg ${leadColor}`}>{lead}</p>}
    </div>
  );
}
