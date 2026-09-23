import type { Metadata } from "next";
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
import PointItem from "@/components/ui/PointItem";
import { images } from "@/lib/images";
import {
  problem,
  rootCause,
  system,
  whyGeovince,
  howItWorks,
  outcomes,
  urgency,
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

      {/* The problem, deliberately unpolished: a manual log photo, muted and
          scanline-textured, standing in for uncertainty and paperwork. */}
      <section className="bg-paper text-ink">
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader index="01" label="The problem" title="Flying blind in the dark" />
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <ProblemAnswer question={problem.lead} answer={problem.answer} />
            <RevealGroup className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2" stagger={0.07}>
              {problem.points.map((p) => (
                <PointItem key={p.title} title={p.title} body={p.body} />
              ))}
            </RevealGroup>
            <p className="mt-12 max-w-2xl text-lg font-medium text-forest">{problem.closing}</p>
          </Reveal>
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
        photo="cctvCamera"
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
        photoCaption="No separate hardware, checkpoints, patrols, and reports run from one app"
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
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader index="06" label="What you gain" title="Tangible benefits for every client" />
          </Reveal>
          <div className="mt-9 grid gap-8 lg:grid-cols-5 lg:items-stretch">
            <RevealGroup
              className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:col-span-3"
              stagger={0.06}
            >
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group flex h-full flex-col bg-paper p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-forest hover:shadow-[0_18px_40px_-22px_rgba(11,77,52,0.4)]"
                >
                  <p className="font-display-card text-lg font-semibold uppercase leading-snug transition-colors group-hover:text-paper">
                    {b.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-paper/75">
                    {b.body}
                  </p>
                </div>
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="lg:col-span-2 min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden">
              <ParallaxImage strength={22} className="h-full w-full">
                <PhotoFrame image={images.controlRoomEquipment} caption="Every shift becomes a timestamped, reviewable record" />
              </ParallaxImage>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Outcomes, a monitoring-room photo as a visible backdrop, with the
          copy sitting on its own translucent panel so the image still reads */}
      <section className="relative overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0">
          <ParallaxImage strength={30} className="h-full w-full opacity-55">
            <PhotoFrame image={images.monitoringScreens} />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-transparent to-forest-dark/70" />
        </div>
        <Container className="relative py-12 md:py-16">
          <div className="bg-forest-dark/55 p-6 backdrop-blur-sm sm:p-10">
            <Reveal>
              <SectionHeader index="07" label={outcomes.eyebrow} title={outcomes.title} lead={outcomes.lead} tone="dark" />
            </Reveal>
            <RevealGroup className="mt-9 grid gap-8 md:grid-cols-3" stagger={0.08}>
              {outcomes.points.map((p) => (
                <PointItem key={p.title} title={p.title} body={p.body} tone="dark" />
              ))}
            </RevealGroup>
            <p className="mt-10 text-sm text-paper/60">{outcomes.closing}</p>
          </div>
        </Container>
      </section>

      {/* Urgency */}
      <section className="bg-paper text-ink">
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader index="08" label={urgency.eyebrow} title={urgency.title} lead={urgency.lead} />
          </Reveal>
          <div className="mt-9 grid gap-8 lg:grid-cols-5 lg:items-stretch">
            <RevealGroup className="grid gap-6 sm:grid-cols-1 lg:col-span-3" stagger={0.08}>
              {urgency.points.map((p) => (
                <PointItem key={p.title} title={p.title} body={p.body} />
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="lg:col-span-2 min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden">
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
