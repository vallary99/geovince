import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import PhotoFrame from "@/components/sections/PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import { site, startOptions, telHref, whatsappHref } from "@/lib/site-config";
import { images } from "@/lib/images";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import TrackedLink from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
  title: "Contact Geovince",
  description:
    "Schedule a site visit, request a custom proposal, or ask about a pilot deployment of the Geovince Smart Security System.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0">
          <ParallaxImage strength={24} className="h-full w-full opacity-60">
            <PhotoFrame image={images.nairobiSkylineGreen} priority />
          </ParallaxImage>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark from-0% via-forest-dark/40 via-55% to-transparent" />
        </div>
        <Container className="relative py-12 md:py-14">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Contact</p>
            <h1 className="font-display mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl">
              The next step is simple
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
              There is no lengthy procurement process, no complex technical integration, and
              no obligation beyond an initial conversation.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container className="grid gap-16 py-12 md:py-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeader label="Send a message" title="Tell us about your site" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <PhotoFrame image={images.nairobiResidentialEstate} caption="Verified security, wherever your property is" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-forest">Direct contact</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li><TrackedLink eventName="phone_click" href={telHref} className="hover:text-forest">{site.contact.phone}</TrackedLink></li>
                <li><TrackedLink eventName="email_click" href={`mailto:${site.contact.email}`} className="hover:text-forest">{site.contact.email}</TrackedLink></li>
                <li>{site.contact.address}</li>
                <li>{site.contact.hours}</li>
              </ul>
              <TrackedLink
                eventName="whatsapp_click"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 border border-forest px-4 py-2.5 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-paper"
              >
                <WhatsappIcon className="h-4 w-4" />
                Chat on WhatsApp
              </TrackedLink>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-forest">Three ways to start</p>
              <div className="mt-4 space-y-6">
                {startOptions.map((o) => (
                  <div key={o.title} className="border-t border-line pt-4">
                    <p className="font-medium text-ink">{o.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{o.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
