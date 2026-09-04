import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/cards/ServiceCard";
import PricingCard from "@/components/cards/PricingCard";
import CtaBand from "@/components/sections/CtaBand";
import PhotoFrame from "@/components/sections/PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import { services, pricingTiers, pricingNote } from "@/lib/site-config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services & Solutions",
  description:
    "Manned guarding, mobile patrols, event security, corporate security consultancy, and standalone QR patrol system integration — all backed by the Geovince verification platform.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0">
          <ParallaxImage strength={28} className="h-full w-full opacity-55">
            <PhotoFrame image={images.controlRoomEquipment} />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark from-0% via-forest-dark/45 via-55% to-transparent" />
        </div>
        <Container className="relative py-20 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Services</p>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl">
              A complete security architecture
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80">
              Geovince is not a single product — it is a complete security capability built
              around your specific needs, risk profile, and operational environment. Whether
              you need feet on the ground, technology in the background, or a fully
              integrated solution, we have the expertise to deliver.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container className="py-20 md:py-28">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-forest-dark text-paper">
        <div className="grid lg:grid-cols-5 lg:items-stretch">
          <Reveal className="min-h-[320px] sm:min-h-[420px] lg:col-span-2 lg:min-h-0">
            <PhotoFrame image={images.qrOnTablet} className="h-full w-full" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <Container className="py-16 md:py-20">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Every service, verified</p>
              <p className="font-display mt-4 max-w-xl text-2xl font-semibold uppercase leading-tight sm:text-3xl">
                Whichever service you choose, verification comes with it
              </p>
              <p className="mt-4 max-w-xl text-paper/75">
                Manned guarding, mobile patrols, or a standalone technology deployment —
                every Geovince engagement runs on the same QR checkpoint system and live
                dashboard, so the proof is built in from day one.
              </p>
            </Container>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-paper">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeader
              label="Pricing framework"
              title="Built to scale with you"
              lead="We understand that every organisation has different security needs, different budgets, and different levels of readiness for digital transformation. That is why we have built a pricing structure that meets you where you are — and grows with you as your needs evolve."
              tone="dark"
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {pricingTiers.map((t) => (
              <PricingCard key={t.name} name={t.name} body={t.body} flagship={t.flagship} />
            ))}
          </RevealGroup>
          <p className="mt-10 max-w-2xl text-sm text-paper/70">{pricingNote}</p>
        </Container>
      </section>

      <CtaBand
        title="Not sure which solution fits your site?"
        body="Tell us about your operation and we'll recommend the right combination of people, patrols, and technology."
        primaryLabel="Talk to Our Team"
      />
    </>
  );
}
