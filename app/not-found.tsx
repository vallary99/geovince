import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-forest-dark text-paper">
      <Container className="flex min-h-[70vh] flex-col justify-center py-24">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Page not found</p>
        <h1 className="font-display mt-4 text-5xl font-semibold uppercase leading-none sm:text-6xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80">
          The page you are looking for does not exist or may have moved. Head back to the
          homepage, or get in touch and we will point you in the right direction.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" variant="primary">Back to homepage</Button>
          <Link href="/contact" className="inline-flex items-center text-sm font-medium text-paper/80 hover:text-signal">
            Contact us →
          </Link>
        </div>
      </Container>
    </section>
  );
}
