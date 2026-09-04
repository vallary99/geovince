"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

/**
 * A quiet visual hinge between the "uncertain, manual" story and the
 * "verified, digital" story: a loose, uneven line resolving into a clean
 * checkpointed route. Draws itself in as the section scrolls into view.
 */
export default function RouteDivider() {
  const reduced = useReducedMotion();
  const pathAnim = reduced
    ? {}
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="relative overflow-hidden bg-forest-dark py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <p className="text-xs uppercase tracking-[0.1em] text-paper/45 sm:text-right">
            Unclear on paper
          </p>

          <svg
            viewBox="0 0 320 60"
            className="h-14 w-full sm:w-80"
            role="img"
            aria-label="An uneven route resolving into a clean, checkpointed route"
          >
            <motion.path
              d="M4 30 L28 12 L46 42 L66 18 L88 36 L110 24 L136 30"
              fill="none"
              stroke="#8a8f89"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeDasharray="3 5"
              strokeLinecap="round"
              {...pathAnim}
            />
            <circle cx="136" cy="30" r="4" fill="#8a8f89" fillOpacity="0.7" />

            <motion.path
              d="M150 30 L320 30"
              fill="none"
              stroke="#4fd3e0"
              strokeWidth="2"
              strokeLinecap="round"
              {...pathAnim}
              transition={{ ...(pathAnim.transition ?? {}), delay: 0.3 }}
            />
            {[190, 230, 270, 310].map((x, i) => (
              <g key={x}>
                <circle cx={x} cy="30" r="5" fill="#06301f" stroke="#4fd3e0" strokeWidth="2" />
                {i < 3 && <circle cx={x} cy="30" r="1.6" fill="#4fd3e0" />}
              </g>
            ))}
          </svg>

          <p className="text-xs uppercase tracking-[0.1em] text-signal">
            Clear in real time
          </p>
        </div>
      </Container>
    </div>
  );
}
