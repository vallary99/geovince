# Geovince — Smart Security Solutions Website

Production-ready marketing website for Geovince, built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Content

All company copy lives in `lib/site-config.ts`, sourced directly from the Geovince
company document. Anything not present in that document is marked with a bracketed
placeholder (e.g. `[PHONE NUMBER]`, `[EMAIL ADDRESS]`, social URLs, legal copy,
leadership bios, certifications). Replace these before launch.

## Contact form

`app/api/contact/route.ts` validates and forwards submissions. To connect a real
email provider (Resend, Postmark, SendGrid, etc.), set these environment variables:

```
GEOVINCE_CONTACT_EMAIL_ENDPOINT=https://your-provider-endpoint
GEOVINCE_CONTACT_API_KEY=your-api-key
```

Until configured, submissions are logged server-side so nothing is lost during
development.

## Recent changes

- **Images were too dark**: the full-bleed hero sections (`Hero`, About hero,
  service-detail hero) were stacking up to three dark-green gradient layers
  on top of each photo (the section's own overlay, a second overlay, and
  `PhotoFrame`'s built-in caption scrim even when no caption was shown) —
  enough to nearly hide the photo. Fixed by: making `PhotoFrame`'s dark
  gradient conditional on `caption` being present (no caption → no tint at
  all), collapsing each hero to a single, asymmetric left-to-right gradient
  (dark where the text sits, transparent where the photo should read), and
  substantially raising the opacity on every "ambient backdrop" image
  (Outcomes, CTA, Services hero, Contact hero — previously as low as 15–25%,
  now 55–60%). The Outcomes section's text now sits on its own translucent
  panel instead of the whole photo being tinted, so the monitoring-room photo
  behind it is actually visible.
- **Images matched to what's actually being said**: several images were
  placed for their general "security" mood rather than because they matched
  the surrounding copy or Geovince's actual (QR-based, not CCTV-based)
  product. Fixed:
  - The "How It Works" banner showed a CCTV camera next to steps that
    describe *QR checkpoint installation* — swapped for the QR-on-tablet
    photo, since that's the real mechanism being described.
  - "Why Geovince" (home) showed a photo of someone typing on a laptop next
    to copy about *operational visibility* — swapped for a monitoring/screens
    photo that actually depicts visibility.
  - "Benefits" showed a security dog next to a benefits list that never
    mentions dogs (and Geovince's services don't include K9 units — using it
    there implied an unstated capability) — swapped for a monitoring-room
    photo captioned to match the audit-ready-reporting benefit it sits next
    to.
  - About page's "Why Geovince" had the same security-dog mismatch — replaced
    with a guard photo captioned to match the actual "trained personnel +
    accountability" argument in the text.
  - About page's "Our approach" (rootCause: "assumption is not a security
    strategy") kept its CCTV photo but the caption now makes the connection
    explicit — *"A camera can record an entry point. It can't confirm a
    guard reached it"* — so the image illustrates the argument instead of
    just sitting there.
  - The Event Security service card/hero showed a control-room photo;
    swapped for the QR-scan photo, which fits an events/access-control
    context better.
  - `lib/images.ts` still has `securityDog`, but it's currently unused
    rather than forced into a section it doesn't fit — better to leave a
    slot empty than caption an image into implying something the company
    document doesn't say.

## Notes

- No newsletter signup, per project requirements.
- Google Fonts could not be fetched in the build sandbox (network restrictions), so
  typography currently falls back to a system font stack tuned to the same
  condensed-display / clean-body pairing (see `app/globals.css`). Swap in
  `next/font/google` (Oswald + IBM Plex Sans + IBM Plex Mono) once building in an
  environment with internet access, or self-host the font files.
- Social links (Instagram, Facebook, TikTok), phone, email, and office address are
  placeholders in `lib/site-config.ts` — update with real values.
- Photography is real, freely licensed Unsplash photography (verified per photo
  for a commercial-use license, no attribution required), registered in
  `lib/images.ts` and rendered through `components/sections/PhotoFrame.tsx`.
  The set is chosen for local relevance rather than generic international
  stock:
  - Five Nairobi building/skyline photos, three of them credited to **Cytonn
    Photography** — a Nairobi-based real estate firm whose Unsplash photos are
    genuinely Nairobi properties (an apartment development, an office
    building, a professional working in a Nairobi office). These anchor the
    About page, the corporate-security-consultancy service page, the
    Sectors section, and the closing CTA.
  - Security-operations photography (a guard at a property entrance, a
    daytime patrol, a manually-written patrol log, QR/checkpoint scanning,
    control-room monitoring) fills in roles no Kenya-specific free photo
    covered well — these are kept neutral/African in tone rather than
    obviously American or European, and are balanced on every page by the
    Nairobi photography above rather than standing alone.
  - The hero pairs a guard at an entrance with a "Checkpoint confirmed" card,
    so the photography and the product claim read as one story rather than a
    decorative backdrop behind an abstract SaaS pitch.
  `next.config.ts` allows `images.unsplash.com` as a remote image source.
  This build sandbox's network policy blocks outbound requests to
  `images.unsplash.com`, so Next's image optimizer can't fetch/resize them
  here — that's an artifact of this sandbox, not the app; images will load
  and optimize normally on any host with normal internet egress (Vercel,
  etc.).
- Card grids (services, pricing tiers, benefits, onboarding stages, process
  steps, etc.) use `RevealGroup`'s `h-full` item wrapper plus `h-full` on each
  card's own root element, so every card in a row stretches to match the
  tallest one regardless of copy length.
- Motion is intentionally restrained: `components/motion/Reveal.tsx` and
  `RevealGroup.tsx` (framer-motion) handle scroll-triggered fade/lift-ins,
  `ParallaxImage.tsx` gives photos a few pixels of scroll parallax, and
  `components/sections/RouteDivider.tsx` draws a quiet "uneven path → clear
  route" transition between the Problem and Solution sections. All motion
  respects `prefers-reduced-motion`.
