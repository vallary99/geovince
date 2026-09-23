export default function SectorCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="group border-t border-line py-6 transition-colors duration-300 hover:border-forest">
      <div className="flex items-baseline gap-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
        <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] bg-line transition-colors duration-300 group-hover:bg-signal" />
        <div>
          <h3 className="font-display-card text-lg font-semibold uppercase">{title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{body}</p>
        </div>
      </div>
    </div>
  );
}
