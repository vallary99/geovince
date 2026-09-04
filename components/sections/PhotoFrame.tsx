import Image from "next/image";
import { unsplashUrl, type SiteImage } from "@/lib/images";

type Props = {
  image: SiteImage;
  width?: number;
  priority?: boolean;
  desaturate?: boolean;
  caption?: string;
  sizes?: string;
  className?: string;
};

/**
 * A clean, editorial photo treatment. `desaturate` renders the muted,
 * lower-contrast look used for the "before" (manual, unverified) side of the
 * story; otherwise photos are shown plainly, with just enough of a gradient
 * for any overlaid text to stay legible.
 */
export default function PhotoFrame({
  image,
  width = 1400,
  priority = false,
  desaturate = false,
  caption,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: Props) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-forest-dark ${className}`}>
      <Image
        src={unsplashUrl(image.id, width)}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover transition-transform duration-700 ${
          desaturate ? "grayscale contrast-75 brightness-[0.65] saturate-0" : ""
        }`}
      />

      {caption && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-forest-dark/5 to-transparent" />
          <span className="absolute bottom-3 left-3 max-w-[80%] px-2.5 py-1.5 text-xs text-paper/85">
            {caption}
          </span>
        </>
      )}
    </div>
  );
}
