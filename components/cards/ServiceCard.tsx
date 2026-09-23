"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import PhotoFrame from "@/components/sections/PhotoFrame";
import { Service } from "@/lib/site-config";
import { images, serviceImageBySlug } from "@/lib/images";

export default function ServiceCard({ service }: { service: Service }) {
  const imageKey = serviceImageBySlug[service.slug];
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      whileHover={reduced ? undefined : { y: -8 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden border border-line bg-paper transition-colors duration-300 hover:border-forest hover:shadow-[0_20px_45px_-24px_rgba(11,77,52,0.5)]"
      >
        <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />

        {imageKey && (
          <div className="aspect-[16/10] w-full overflow-hidden">
            <PhotoFrame
              image={images[imageKey]}
              className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <span className="font-mono-data text-xs text-forest">{service.number}</span>
            <h3 className="font-display-card mt-3 text-xl font-semibold uppercase">{service.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.summary}</p>
          </div>
          <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
            Learn more
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
