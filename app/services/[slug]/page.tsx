import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PhotoFrame from "@/components/sections/PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import PointItem from "@/components/ui/PointItem";
import CtaBand from "@/components/sections/CtaBand";
import { services, qrSystem, dashboard, onboarding, benefits, site } from "@/lib/site-config";
import { images, serviceImageBySlug } from "@/lib/images";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
  };

  const showQr = service.slug !== "corporate-security-consultancy";
  const showOnboarding =
    service.slug === "qr-patrol-system-integration" ||
    service.slug === "manned-guarding" ||
    service.slug === "mobile-patrol";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0">
          <PhotoFrame image={images[serviceImageBySlug[service.slug] ?? "cctvCamera"]} priority className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark from-10% via-forest-dark/55 via-45% to-transparent to-80%" />
        </div>
        <Container className="relative min-h-[340px] py-12 md:py-16">
          <Reveal className="max-w-2xl">
            <Link href="/services" className="text-sm text-signal hover:underline">
              ← All services
            </Link>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-signal">Service {service.number}</p>
            <h1 className="font-display mt-4 text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">{service.body}</p>
          </Reveal>
        </Container>
      </section>

      {showQr && (
        <section className="bg-paper text-ink">
          <Container className="py-12 md:py-16">
            <Reveal>
              <SectionHeader label={qrSystem.eyebrow} title={qrSystem.title} lead={qrSystem.lead} />
            </Reveal>
            <RevealGroup className="mt-9 grid gap-6 sm:grid-cols-2" stagger={0.07}>
              {qrSystem.steps.map((p) => (
                <PointItem key={p.title} title={p.title} body={p.body} />
              ))}
            </RevealGroup>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg font-medium text-forest">{qrSystem.closing}</p>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-forest text-paper">
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader label={dashboard.eyebrow} title={dashboard.title} lead={dashboard.lead} tone="dark" />
          </Reveal>
          <div className="mt-9 grid gap-8 lg:grid-cols-5 lg:items-stretch">
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:col-span-3" stagger={0.07}>
              {dashboard.points.map((p) => (
                <PointItem key={p.title} title={p.title} body={p.body} tone="dark" />
              ))}
            </RevealGroup>
            <Reveal delay={0.1} className="lg:col-span-2 min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden">
              <ParallaxImage strength={22} className="h-full w-full">
                <PhotoFrame image={images.monitoringScreens} caption="Live patrol data, on screen" />
              </ParallaxImage>
            </Reveal>
          </div>
        </Container>
      </section>

      {showOnboarding && (
        <section className="bg-paper text-ink">
          <Container className="py-12 md:py-16">
            <Reveal>
              <SectionHeader label={onboarding.eyebrow} title={onboarding.title} lead={onboarding.lead} />
            </Reveal>
            <RevealGroup
              className="mt-9 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5"
              stagger={0.06}
            >
              {onboarding.stages.map((s) => (
                <div key={s.stage} className="h-full bg-paper p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-forest hover:text-paper hover:shadow-[0_18px_40px_-22px_rgba(11,77,52,0.4)]">
                  <span className="font-mono-data text-xs text-forest transition-colors group-hover:text-signal">{s.stage}</span>
                  <p className="font-display-card mt-2 text-base font-semibold uppercase">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">{s.body}</p>
                </div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <section className="bg-paper text-ink">
        <Container className="py-12 md:py-16">
          <Reveal>
            <SectionHeader label="What you gain" title="Tangible benefits" />
          </Reveal>
          <RevealGroup
            className="mt-9 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {benefits.map((b) => (
              <div key={b.title} className="h-full bg-paper p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-forest hover:text-paper hover:shadow-[0_18px_40px_-22px_rgba(11,77,52,0.4)]">
                <p className="font-display-card text-lg font-semibold uppercase">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{b.body}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CtaBand
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        body="Request a custom proposal tailored to your site, risk profile, and budget."
      />
    </>
  );
}
