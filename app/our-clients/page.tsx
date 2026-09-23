import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectorCard from "@/components/cards/SectorCard";
import CtaBand from "@/components/sections/CtaBand";
import PhotoFrame from "@/components/sections/PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import { sectors } from "@/lib/site-config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Geovince delivers verified security for corporate offices, residential estates, warehouses and logistics hubs, schools and institutions, and construction sites across Kenya.",
  alternates: { canonical: "/our-clients" },
};

export default function OurClientsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0">
          <ParallaxImage strength={26} className="h-full w-full opacity-45">
            <PhotoFrame image={images.nairobiResidentialEstate} />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark from-10% via-forest-dark/60 via-45% to-forest-dark/20" />
        </div>
        <Container className="relative py-12 md:py-16">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Our clients</p>
            <h1 className="font-display mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl">
              Security built for how your site actually works
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
              The Geovince Smart Security System is sector-agnostic by design. Wherever there
              is a need for verified security presence, transparent operations, and defensible
              reporting, Geovince is built to perform.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <RevealGroup className="lg:col-span-3" stagger={0.06} y={12}>
              {sectors.map((s) => (
                <SectorCard key={s.title} title={s.title} body={s.body} />
              ))}
            </RevealGroup>
            <Reveal delay={0.15} className="lg:col-span-2">
              <div className="aspect-[4/5] w-full">
                <ParallaxImage strength={20} className="h-full w-full">
                  <PhotoFrame image={images.nairobiOfficeBuilding} caption="A commercial property in Nairobi" />
                </ParallaxImage>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure where your site fits?"
        body="Tell us about your property and we'll recommend the right mix of guarding, patrols, and verification technology."
        primaryLabel="Talk to Our Team"
      />
    </>
  );
}
