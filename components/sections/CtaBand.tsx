import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PhotoFrame from "./PhotoFrame";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import { images } from "@/lib/images";

export default function CtaBand({
  title,
  body,
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-paper">
      <div className="absolute inset-0">
        <ParallaxImage strength={26} className="h-full w-full opacity-60">
          <PhotoFrame image={images.nairobiSkylineGreen} />
        </ParallaxImage>
        <div className="absolute inset-0 bg-gradient-to-r from-forest from-0% via-forest/60 via-40% to-forest/20" />
      </div>
      <Container className="relative flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-paper/80">{body}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <Button href={primaryHref} variant="primary" className="shrink-0">
            {primaryLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
