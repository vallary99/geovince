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

- **Bigger logo**: the header icon went from 32px to 44px (48px at `sm:`
  and up), with the header bar itself grown slightly (`h-18` → `h-20`) so it
  isn't cramped; the footer icon went from 28px to 36px.
- **Skeleton loading for photos**: `PhotoFrame`'s container now shows an
  animated shimmer (`.img-skeleton` in `app/globals.css`) instead of a flat
  dark placeholder while each photo loads over the network. This is
  CSS-only, no loading state or extra JS: the `<Image fill>` sits on top and
  naturally covers the shimmer the moment it paints, so there's nothing to
  clean up afterward. Respects `prefers-reduced-motion`.
- **Card titles, less cramped (not a font swap)**: the "What you gain" tiles
  and every other small card/tile title (service cards, pricing cards, sector
  rows, process steps, onboarding stages, the "Message sent" confirmation,
  the About page's trust grid) still use Anton, the same condensed display
  font as the rest of the site — they just weren't reading well at small
  sizes with the headline tracking. Added a `.font-display-card` variant in
  `app/globals.css`: same font, `letter-spacing: 0.02em` instead of the
  headline's `-0.01em`. Big headlines (H1s, section titles, the hero) are
  untouched and still use the original tighter `.font-display`.

- **Services and Sectors removed from the homepage** to shorten it further,
  the Services grid and the "Where Geovince delivers" sector list are gone
  from `app/page.tsx` (still on their own pages), and the remaining sections
  were renumbered (`06` Benefits → `07` Outcomes → `08` Urgency) so the
  visible section index stays sequential.
- **New page: `/industries` ("Industries We Serve")**. Chosen as a page
  name/title that's both plain-English and a phrase people actually search
  ("industries we serve", "security for warehouses Kenya", etc.), rather than
  the more internal-sounding "Industry Fit" label the section used to have.
  It carries the same five sectors (Corporate Offices, Residential Estates,
  Warehouses & Logistics Hubs, Schools & Institutions, Construction Sites)
  plus a Nairobi property photo, and ends with a CTA. Added to the primary
  nav (desktop + mobile), the footer's Navigate list, and `sitemap.ts` so it
  isn't an orphan page for either visitors or search engines.

- **Shorter scroll, especially on the homepage**: section padding was
  tightened site-wide (`py-20 md:py-28` → `py-12 md:py-16`, and similar cuts
  to the hero, CTA band, and header-to-content gaps), image column minimum
  heights were reduced on mobile (they still stretch to full height on
  desktop via `lg:items-stretch`), and card padding went from `p-8`/`p-7` to
  a tighter `p-6`/`p-7`. No content, sections, or images were removed, the
  page is just noticeably more compact.
- **Card animations, made slick**: `ServiceCard` and `PricingCard` are now
  client components using `framer-motion` spring physics for hover/tap
  (`whileHover={{ y: -8 }}`, `whileTap={{ scale: 0.98 }}`) instead of plain
  CSS transitions, so they feel snappier and more tactile. The service
  thumbnail zooms in slightly on hover. Process-step tiles, benefit tiles,
  onboarding-stage tiles, and the About page's trust-grid tiles all gained a
  lift + soft shadow on hover, and sector rows now slide slightly on hover.
  Everything still respects `prefers-reduced-motion` via
  `useReducedMotion()`.

- **Service imagery now matches each service**, not just "security" in general.
  All three of these were swapped for purpose-scouted, license-verified
  Unsplash photos (kept people-free, per the earlier client request):
  - Manned Guarding: was a CCTV camera → now a barrier gate with bollards
    controlling entry to a site (Tuaans, Unsplash License) — a manned
    checkpoint, not a generic camera.
  - Mobile Patrol: was a daytime skyline → now an empty street at night lit
    by streetlights (Michał Bielejewski, Unsplash License) — an unattended
    route to be patrolled, not just "Kenya" in general.
  - Event Security: was a generic control-room photo → now an empty stage set
    up with production lighting (Elijah Ekdahl, Unsplash License) — reads as
    "event," not "monitoring room."
  - QR Patrol System Integration now uses the QR-scan-on-phone photo (moved
    from Event Security, where a QR closeup was a weaker fit) — a service
    literally named after QR patrol tech now shows QR tech.
  - Corporate Security Consultancy keeps the Nairobi office building photo,
    which already matched well.
  These are used on both the homepage/service-grid cards and each service's
  own detail-page hero, via the single shared `serviceImageBySlug` map in
  `lib/images.ts`.
- **All em dashes removed** from the site's copy and replaced with commas (or,
  in a couple of spots spanning a line break, left as a plain comma join) —
  64 instances across `lib/site-config.ts`, page files, and components.
  Internal code comments and this README were left alone since they aren't
  site content, but every string a visitor actually sees is now em-dash-free.

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
- Typography matches the brand PDF: **Anton** (the bold condensed display face
  used for headlines) and **Poppins** (the rounded body font), self-hosted via
  the `@fontsource/anton` and `@fontsource/poppins` npm packages and imported
  in `app/layout.tsx`. These ship the actual font files inside the npm
  package rather than fetching from `fonts.googleapis.com` at build time, so
  the build works in network-restricted environments (like this sandbox,
  where a live Google Fonts fetch returns a 403) exactly the same as it does
  anywhere else. `app/globals.css`'s `--font-display` / `--font-body` tokens
  reference `"Anton"` / `"Poppins"` directly, with a condensed-sans and
  system-sans fallback respectively.
- The Geovince shield icon is a real asset extracted from the brand PDF
  (rendered to a high-res image, cropped, and made transparent), saved at
  `public/images/logo-icon.png` and used next to the "GEOVINCE" text wordmark
  in both the Header and Footer. The wordmark itself stays as real text (not
  part of the image) so it stays crisp at any size and reads correctly in
  both the light header and dark footer.
- "Industries" was renamed to **"Our Clients"** (page moved from `/industries`
  to `/our-clients`) and the "Services" nav label/eyebrow now reads **"Our
  Services"**, per client request — content unchanged, just the labels.
- To move away from a slide-deck feel, plain bulleted text blocks (the
  "title + body with a top border" pattern that mirrored the PDF's own bullet
  lists) were replaced with `components/ui/PointItem.tsx` — a small
  checkmark-badge row — across `PairedSection`, the homepage's Problem/
  Outcomes/Urgency sections, About's approach/differentiator sections, and
  each service detail page's QR-system/dashboard sections.
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
