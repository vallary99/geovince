"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PhotoFrame from "./PhotoFrame";
import LiveStatusBadge from "@/components/ui/LiveStatusBadge";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/lib/images";
import { site } from "@/lib/site-config";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-forest-dark text-paper">
      {/* Full-bleed photo covering the entire hero section */}
      <div className="absolute inset-0">
        <PhotoFrame image={images.guardStanding} priority className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark from-10% via-forest-dark/55 via-45% to-transparent to-80%" />
      </div>

      <Container className="relative grid min-h-[560px] gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <motion.div
          className="lg:col-span-7"
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">
              {site.legalName}
            </p>
            <LiveStatusBadge />
          </div>
          <h1 className="font-display mt-5 text-5xl font-semibold uppercase leading-[0.98] sm:text-6xl md:text-7xl">
            Stop guessing.
            <br />
            Start knowing.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/85">
            {site.tagline}. Geovince replaces assumption-based patrols with QR-verified
            checkpoints, a live dashboard, and instant incident reporting — so you know
            exactly what your security team is doing, the moment it happens.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">Request a Consultation</Button>
            <Button href="/services" variant="ghost" className="border-paper/30 text-paper hover:border-paper">
              Explore Our Solutions
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={reduced ? undefined : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="ml-auto hidden w-64 border border-line bg-paper p-4 text-ink shadow-xl sm:block">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-forest">East Gate patrol</p>
            <p className="mt-1.5 text-sm font-medium">Checkpoint confirmed</p>
            <p className="mt-1 text-xs text-ink/50">Guard on site, on time</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
