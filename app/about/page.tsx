import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PhotoFrame from "@/components/sections/PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import PointItem from "@/components/ui/PointItem";
import CtaBand from "@/components/sections/CtaBand";
import { system, whyGeovince, rootCause, closingStatement, site } from "@/lib/site-config";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Geovince",
  description:
    "Geovince was built because traditional security was missing proof, not people or effort. Learn how we combine trained security personnel with verification technology.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0">
          <PhotoFrame image={images.nairobiOfficeBuilding} priority className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark from-10% via-forest-dark/55 via-45% to-transparent to-80%" />
        </div>
        <Container className="relative min-h-[340px] py-12 md:py-16">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">About {site.name}</p>
            <h1 className="font-display mt-4 text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl">
              Not a patch on a broken system
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">{system.lead}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader index="01" label="Our approach" title={rootCause.title} lead={rootCause.lead} />
          </Reveal>
          <div className="mt-9 grid gap-8 lg:grid-cols-5 lg:items-stretch">
            <Reveal className="lg:col-span-3">
              <div className="grid gap-6 sm:grid-cols-2">
                {rootCause.points.map((p) => (
                  <PointItem key={p.title} title={p.title} body={p.body} />
                ))}
              </div>
              <p className="mt-8 text-lg font-medium text-forest">{rootCause.closing}</p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-2 min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden">
              <ParallaxImage strength={22} className="h-full w-full">
                <PhotoFrame image={images.cctvCamera} caption="A camera can record an entry point. It can't confirm a guard reached it." />
              </ParallaxImage>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-forest text-paper">
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader index="02" label={whyGeovince.eyebrow} title={whyGeovince.title} lead={whyGeovince.lead} tone="dark" />
          </Reveal>
          <div className="mt-9 grid gap-8 lg:grid-cols-5 lg:items-stretch">
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:col-span-3" stagger={0.08}>
              {whyGeovince.points.map((p) => (
                <PointItem key={p.title} title={p.title} body={p.body} tone="dark" />
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="lg:col-span-2 min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden">
              <ParallaxImage strength={22} className="h-full w-full">
                <PhotoFrame image={images.monitoringScreens} caption="Presence becomes visible, not just assumed" />
              </ParallaxImage>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="mt-12 max-w-2xl text-lg font-medium text-signal">{whyGeovince.closing}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader index="03" label="Our people, credentials & standards" title="Trust & credibility" />
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.07}>
            <div className="h-full border border-line p-7 transition-colors duration-300 hover:border-forest">
              <p className="font-display-card text-lg font-semibold uppercase">Leadership</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                [LEADERSHIP / TEAM PROFILES TO BE PROVIDED]
              </p>
            </div>
            <div className="h-full border border-line p-7 transition-colors duration-300 hover:border-forest">
              <p className="font-display-card text-lg font-semibold uppercase">Licensing & certification</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                [LICENSES, CERTIFICATIONS & ACCREDITATIONS TO BE PROVIDED]
              </p>
            </div>
            <div className="h-full border border-line p-7 transition-colors duration-300 hover:border-forest">
              <p className="font-display-card text-lg font-semibold uppercase">Case studies</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Full case study documentation, including client references, is available upon
                request during our proposal process.
              </p>
            </div>
            <div className="h-full border border-line p-7 transition-colors duration-300 hover:border-forest">
              <p className="font-display-card text-lg font-semibold uppercase">Company history</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                [COMPANY HISTORY / FOUNDING STORY TO BE PROVIDED]
              </p>
            </div>
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-forest-dark text-paper">
        <Container className="py-12 md:py-14">
          <Reveal>
            <p className="max-w-3xl text-xl leading-relaxed md:text-2xl">{closingStatement}</p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="See what verified security looks like on your site"
        body="Schedule a no-obligation site visit and get an honest, expert evaluation of your current setup."
      />
    </>
  );
}
