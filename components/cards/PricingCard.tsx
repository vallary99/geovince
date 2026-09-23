"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function PricingCard({
  name,
  body,
  flagship,
}: {
  name: string;
  body: string;
  flagship?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      whileHover={reduced ? undefined : { y: -8, scale: 1.015 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <div
        className={`flex h-full flex-col border p-6 transition-shadow duration-300 ${
          flagship
            ? "border-forest bg-forest text-paper hover:shadow-[0_24px_50px_-24px_rgba(6,48,31,0.65)]"
            : "border-line bg-paper text-ink hover:border-forest hover:shadow-[0_20px_45px_-24px_rgba(11,77,52,0.35)]"
        }`}
      >
        {flagship && (
          <span className="mb-4 inline-block w-fit bg-signal px-2.5 py-1 text-xs font-medium uppercase tracking-[0.1em] text-forest-dark">
            Recommended
          </span>
        )}
        <h3 className="font-display-card text-xl font-semibold uppercase">{name}</h3>
        <p className={`mt-3 text-sm leading-relaxed ${flagship ? "text-paper/80" : "text-ink/70"}`}>{body}</p>
      </div>
    </motion.div>
  );
}
