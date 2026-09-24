// GA4 scaffold. Set NEXT_PUBLIC_GA_MEASUREMENT_ID (a "G-XXXXXXX" Measurement
// ID from a real GA4 property) as an environment variable to activate it —
// nothing loads or fires without it, so this is inert until configured.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 event if analytics is configured and loaded; a no-op
 * otherwise (including during SSR, where `window` doesn't exist). Safe to
 * call unconditionally from any client component.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}
