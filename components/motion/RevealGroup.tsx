"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  y?: number;
};

const container = (stagger: number) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
});

const item = (y: number) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
});

/**
 * Wraps a list of children and reveals them one after another as the group
 * scrolls into view, instead of everything fading in at once. When used
 * inside a CSS grid, pass `itemClassName="h-full"` (the default) so every
 * wrapper stretches to the tallest item in its row and cards line up at a
 * consistent size regardless of copy length.
 */
export default function RevealGroup({
  children,
  className = "",
  itemClassName = "h-full",
  stagger = 0.09,
  y = 16,
}: Props) {
  const reduced = useReducedMotion();
  const items = Children.toArray(children);

  if (reduced) {
    return (
      <div className={className}>
        {items.map((child, i) => (
          <div key={i} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container(stagger)}
    >
      {items.map((child, i) => (
        <motion.div key={i} className={itemClassName} variants={item(y)}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
