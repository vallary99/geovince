import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the Geovince website and services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <section className="bg-paper text-ink">
      <Container className="max-w-3xl py-12 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-forest">Legal</p>
        <h1 className="font-display mt-4 text-4xl font-semibold uppercase">Terms &amp; Conditions</h1>
        <p className="mt-6 text-sm text-ink/60">Last updated: [DATE TO BE PROVIDED]</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <p>
            [LEGAL CONTENT TO BE PROVIDED BY CLIENT]. This page will set out the terms
            governing use of this website and, where applicable, engagement of{" "}
            {site.legalName}&apos;s security services. Formal service agreements, contract
            terms, and end-of-contract terms are handled separately and will be provided
            during the proposal process.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Use of this website
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Service engagement
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Limitation of liability
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Governing law
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
