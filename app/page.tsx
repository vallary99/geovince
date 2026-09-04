import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Hero from "@/components/sections/Hero";
import ProblemAnswer from "@/components/sections/ProblemAnswer";
import PairedSection from "@/components/sections/PairedSection";
import RouteDivider from "@/components/sections/RouteDivider";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CtaBand from "@/components/sections/CtaBand";
import PhotoFrame from "@/components/sections/PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import ServiceCard from "@/components/cards/ServiceCard";
import SectorCard from "@/components/cards/SectorCard";
import { images } from "@/lib/images";
import {
  problem,
  rootCause,
  system,
  whyGeovince,
  howItWorks,
  outcomes,
  urgency,
  services,
  sectors,
  benefits,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Smart Security Solutions | Verified Patrols & Real-Time Monitoring",
  description:
    "Geovince replaces assumption-based security patrols with QR-verified checkpoints, a live monitoring dashboard, instant incident reporting, and automated compliance-ready reports.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The problem — deliberately unpolished: a manual log photo, muted and
          scanline-textured, standing in for uncertainty and paperwork. */}
      <section className="bg-paper text-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeader index="01" label="The problem" title="Flying blind in the dark" />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:items-start">
            <Reveal delay={0.1} className="lg:col-span-3">
              <ProblemAnswer question={problem.lead} answer={problem.answer} />
              <RevealGroup className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2" stagger={0.07}>
                {problem.points.map((p) => (
                  <div key={p.title} className="border-t border-line pt-5">
                    <p className="font-medium text-ink">{p.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{p.body}</p>
                  </div>
                ))}
              </RevealGroup>
              <p className="mt-12 max-w-2xl text-lg font-medium text-forest">{problem.closing}</p>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-2">
              <div className="aspect-[4/5] w-full">
                <ParallaxImage strength={22} className="h-full w-full">
                  <PhotoFrame image={images.manualLogbook} desaturate />
                </ParallaxImage>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <RouteDivider />

      <PairedSection
        index="02"
        label={rootCause.eyebrow}
        title={rootCause.title}
        lead={rootCause.lead}
        closing={rootCause.closing}
        points={rootCause.points}
        panelTitle="Three assumptions running your security right now"
        photo="guardPatrolStreet"
        background="forest"
      />

      <PairedSection
        index="03"
        label={system.eyebrow}
        title={system.title}
        lead={system.lead}
        closing={system.closing}
        points={system.capabilities}
        panelTitle="Four core capabilities"
        photo="qrScanPhone"
        reverse
      />

      <ProcessSteps
        index="04"
        label={howItWorks.eyebrow}
        title={howItWorks.title}
        lead={howItWorks.lead}
        closing={howItWorks.closing}
        steps={howItWorks.steps}
        photo="qrOnTablet"
        photoCaption="No separate hardware — checkpoints, patrols, and reports run from one app"
      />

      <PairedSection
        index="05"
        label={whyGeovince.eyebrow}
        title={whyGeovince.title}
        lead={whyGeovince.lead}
        closing={whyGeovince.closing}
        points={whyGeovince.points}
        panelTitle="The Geovince difference"
        photo="controlRoomLights"
        background="forest"
      />

      {/* Benefits */}
      <section className="bg-paper text-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeader index="06" label="What you gain" title="Tangible benefits for every client" />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-stretch">
            <RevealGroup
              className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:col-span-3"
              stagger={0.06}
            >
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group flex h-full flex-col bg-paper p-7 transition-colors duration-300 hover:bg-forest"
                >
                  <p className="font-display text-lg font-semibold uppercase transition-colors group-hover:text-paper">
                    {b.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-paper/75">
                    {b.body}
                  </p>
                </div>
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="lg:col-span-2 min-h-[300px] sm:min-h-[360px] lg:min-h-0 overflow-hidden">
              <ParallaxImage strength={22} className="h-full w-full">
                <PhotoFrame image={images.controlRoomEquipment} caption="Every shift becomes a timestamped, reviewable record" />
              </ParallaxImage>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-paper text-ink">
        <Container className="py-20 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader index="07" label="Our services" title="A complete security architecture" />
            <Link href="/services" className="text-sm font-medium text-forest hover:underline">
              View all services →
            </Link>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Sectors */}
      <section className="bg-paper text-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeader
              index="08"
              label="Industry fit"
              title="Where Geovince delivers"
              lead="The Geovince Smart Security System is sector-agnostic by design. Wherever there is a need for verified security presence, transparent operations, and defensible reporting, Geovince is built to perform."
            />
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:items-start">
            <RevealGroup className="lg:col-span-3" stagger={0.06} y={12}>
              {sectors.map((s) => (
                <SectorCard key={s.title} title={s.title} body={s.body} />
              ))}
            </RevealGroup>
            <Reveal delay={0.15} className="lg:col-span-2">
              <div className="aspect-[4/5] w-full">
                <ParallaxImage strength={20} className="h-full w-full">
                  <PhotoFrame image={images.nairobiResidentialEstate} caption="A residential development in Nairobi" />
                </ParallaxImage>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Outcomes — a monitoring-room photo as a visible backdrop, with the
          copy sitting on its own translucent panel so the image still reads */}
      <section className="relative overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0">
          <ParallaxImage strength={30} className="h-full w-full opacity-55">
            <PhotoFrame image={images.monitoringScreens} />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-transparent to-forest-dark/70" />
        </div>
        <Container className="relative py-20 md:py-28">
          <div className="bg-forest-dark/55 p-6 backdrop-blur-sm sm:p-10">
            <Reveal>
              <SectionHeader index="09" label={outcomes.eyebrow} title={outcomes.title} lead={outcomes.lead} tone="dark" />
            </Reveal>
            <RevealGroup className="mt-14 grid gap-8 md:grid-cols-3" stagger={0.08}>
              {outcomes.points.map((p) => (
                <div key={p.title} className="h-full border-t border-paper/20 pt-5">
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{p.body}</p>
                </div>
              ))}
            </RevealGroup>
            <p className="mt-10 text-sm text-paper/60">{outcomes.closing}</p>
          </div>
        </Container>
      </section>

      {/* Urgency */}
      <section className="bg-paper text-ink">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeader index="10" label={urgency.eyebrow} title={urgency.title} lead={urgency.lead} />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-stretch">
            <RevealGroup className="grid gap-8 sm:grid-cols-1 lg:col-span-3" stagger={0.08}>
              {urgency.points.map((p) => (
                <div key={p.title} className="h-full border-t border-line pt-5">
                  <p className="font-medium text-ink">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.body}</p>
                </div>
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="lg:col-span-2 min-h-[300px] sm:min-h-[360px] lg:min-h-0 overflow-hidden">
              <ParallaxImage strength={22} className="h-full w-full">
                <PhotoFrame image={images.nairobiOfficeBuilding} caption="Kenyan businesses are moving to verified security now" />
              </ParallaxImage>
            </Reveal>
          </div>
          <p className="mt-10 max-w-2xl text-lg font-medium text-forest">{urgency.closing}</p>
        </Container>
      </section>

      <CtaBand
        title="Every day without verified security is a day your site is exposed"
        body="The conversation costs nothing. The risk of not having it could cost everything."
      />
    </>
  );
}
