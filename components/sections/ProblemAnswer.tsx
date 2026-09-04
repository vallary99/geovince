export default function ProblemAnswer({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mt-8 max-w-2xl border-l-2 border-rust pl-6">
      <p className="text-lg italic leading-relaxed text-ink/85">“{question}”</p>
      <p className="mt-3 font-display text-2xl font-semibold uppercase text-rust">{answer}</p>
    </div>
  );
}
