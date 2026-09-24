"use client";

import { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
};

/**
 * A plain anchor tag that also fires a GA4 event on click — used for the
 * phone/email/WhatsApp CTAs so lead actions besides the contact form are
 * still visible in conversion reporting. Renders a real <a href> either way,
 * so it works identically with JS disabled or analytics unconfigured.
 */
export default function TrackedLink({ eventName, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(eventName);
        onClick?.(e);
      }}
    />
  );
}
