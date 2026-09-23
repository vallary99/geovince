import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { site, services } from "@/lib/site-config";

const social = [
  { key: "instagram", label: "Instagram", href: site.social.instagram },
  { key: "facebook", label: "Facebook", href: site.social.facebook },
  { key: "tiktok", label: "TikTok", href: site.social.tiktok },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-forest-dark text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-icon.png" alt="" width={38} height={40} className="h-9 w-auto" />
            <span className="font-display text-xl font-semibold uppercase tracking-tight text-paper">
              {site.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-paper/70">{site.strapline}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Navigate</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            <li><Link href="/" className="hover:text-signal">Home</Link></li>
            <li><Link href="/about" className="hover:text-signal">About</Link></li>
            <li><Link href="/services" className="hover:text-signal">Our Services</Link></li>
            <li><Link href="/our-clients" className="hover:text-signal">Our Clients</Link></li>
            <li><Link href="/contact" className="hover:text-signal">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-signal">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-signal">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            <li>{site.contact.phone}</li>
            <li>{site.contact.email}</li>
            <li>{site.contact.address}</li>
          </ul>
          <div className="mt-5 flex gap-4">
            {social.map((s) => (
              <a
                key={s.key}
                href={s.href.startsWith("[") ? "#" : s.href}
                aria-label={s.label}
                className="text-xs font-medium text-paper/70 underline decoration-paper/30 underline-offset-4 hover:text-signal"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-paper/60 md:flex-row md:items-center">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-signal">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-signal">Terms & Conditions</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
