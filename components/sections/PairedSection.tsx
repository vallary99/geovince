import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PointItem from "@/components/ui/PointItem";
import PhotoFrame from "./PhotoFrame";
import Reveal from "@/components/motion/Reveal";
import RevealGroup from "@/components/motion/RevealGroup";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { images } from "@/lib/images";

type Point = { title: string; body: string };
type ImageKey = keyof typeof images;

type Props = {
  index: string;
  label: string;
  title: string;
  lead?: string;
  closing?: string;
  points: Point[];
  panelTitle: string;
  photo: ImageKey;
  reverse?: boolean;
  background?: "paper" | "forest";
};

export default function PairedSection({
  index,
  label,
  title,
  lead,
  closing,
  points,
  panelTitle,
  photo,
  reverse = false,
  background = "paper",
}: Props) {
  const isDark = background === "forest";

  return (
    <section className={isDark ? "bg-forest-dark text-paper" : "bg-paper text-ink"}>
      <Container className="py-12 md:py-16">
        <Reveal>
          <SectionHeader index={index} label={label} title={title} lead={lead} tone={isDark ? "dark" : "light"} />
        </Reveal>

        <div className={`mt-9 grid gap-8 lg:grid-cols-5 lg:items-stretch ${reverse ? "lg:[direction:rtl]" : ""}`}>
          <Reveal
            delay={0.1}
            className={`lg:col-span-2 min-h-[240px] sm:min-h-[300px] lg:min-h-0 overflow-hidden lg:[direction:ltr] ${reverse ? "lg:order-2" : ""}`}
          >
            <ParallaxImage strength={26} className="h-full w-full">
              <PhotoFrame image={images[photo]} />
            </ParallaxImage>
          </Reveal>

          <Reveal
            delay={0.2}
            className={`lg:col-span-3 bg-forest text-paper p-6 md:p-8 lg:[direction:ltr] ${reverse ? "lg:order-1" : ""}`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-signal">{panelTitle}</p>
            <RevealGroup className="mt-6 space-y-5" stagger={0.08} y={10}>
              {points.map((p) => (
                <PointItem key={p.title} title={p.title} body={p.body} tone="dark" />
              ))}
            </RevealGroup>
          </Reveal>
        </div>

        {closing && (
          <Reveal delay={0.1}>
            <p className={`mt-10 max-w-2xl text-lg font-medium ${isDark ? "text-paper" : "text-forest"}`}>
              {closing}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
