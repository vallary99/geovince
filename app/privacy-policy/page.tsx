import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Geovince collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-paper text-ink">
      <Container className="max-w-3xl py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-forest">Legal</p>
        <h1 className="font-display mt-4 text-4xl font-semibold uppercase">Privacy Policy</h1>
        <p className="mt-6 text-sm text-ink/60">Last updated: [DATE TO BE PROVIDED]</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <p>
            [LEGAL CONTENT TO BE PROVIDED BY CLIENT]. This page will set out how{" "}
            {site.legalName} collects, uses, stores, and protects personal information
            submitted through this website, including contact form enquiries, and will
            describe visitors&apos; rights in relation to that information.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Information we collect
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              How we use your information
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Data retention & security
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Your rights
            </h2>
            <p className="mt-2">[LEGAL CONTENT TO BE PROVIDED BY CLIENT]</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold uppercase text-forest">
              Contact us
            </h2>
            <p className="mt-2">
              Questions about this policy can be sent to {site.contact.email}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
