"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

/**
 * Contained parallax: the image drifts a few percent slower/faster than the
 * page as it scrolls through the viewport. The wrapper clips overflow so the
 * image never reveals empty edges.
 */
export default function ParallaxImage({
  children,
  strength = 40,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={reduced ? undefined : { y }}
        className="absolute inset-[-6%] will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
