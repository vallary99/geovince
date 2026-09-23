import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PhotoFrame from "./PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import { images } from "@/lib/images";

type Step = { step: string; title: string; body: string };
type ImageKey = keyof typeof images;

export default function ProcessSteps({
  index,
  label,
  title,
  lead,
  closing,
  steps,
  photo,
  photoCaption,
}: {
  index: string;
  label: string;
  title: string;
  lead?: string;
  closing?: string;
  steps: Step[];
  photo?: ImageKey;
  photoCaption?: string;
}) {
  return (
    <section className="bg-paper text-ink">
      <Container className="py-12 md:py-16">
        <Reveal>
          <SectionHeader index={index} label={label} title={title} lead={lead} />
        </Reveal>

        {/* Connecting route line across the top of the steps, echoing a live
            checkpoint sequence */}
        <div className="relative mt-9">
          <div className="pointer-events-none absolute left-0 right-0 top-0 hidden h-px bg-line sm:block" />
          <RevealGroup
            className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {steps.map((s) => (
              <div
                key={s.step}
                className="group relative flex h-full flex-col bg-paper p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-forest hover:shadow-[0_18px_40px_-22px_rgba(11,77,52,0.4)]"
              >
                <span className="relative z-10 flex h-8 w-8 items-center justify-center border border-forest font-mono-data text-xs text-forest transition-colors group-hover:border-signal group-hover:text-signal">
                  {s.step}
                </span>
                <p className="font-display-card mt-5 text-lg font-semibold uppercase transition-colors group-hover:text-paper">
                  {s.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-paper/75">
                  {s.body}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>

        {photo && (
          <Reveal delay={0.1} className="mt-8 aspect-[21/9] w-full overflow-hidden">
            <ParallaxImage strength={24} className="h-full w-full">
              <PhotoFrame image={images[photo]} caption={photoCaption} />
            </ParallaxImage>
          </Reveal>
        )}

        {closing && (
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg font-medium text-forest">{closing}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
