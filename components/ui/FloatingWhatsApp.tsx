"use client";

import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { whatsappHref } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

/**
 * A persistent floating WhatsApp action button, shown on every page. Uses
 * WhatsApp's own brand green rather than the site's palette, since instant
 * recognizability matters more than palette consistency for a single,
 * universally-recognized action button like this one.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { placement: "floating" })}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
