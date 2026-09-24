import type { Metadata } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { site, phoneIntl } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Smart Security Solutions`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Smart Security Solutions`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Smart Security Solutions`,
    description: site.description,
  },
  // Set GOOGLE_SITE_VERIFICATION (the content value from Search Console's
  // "HTML tag" verification method) once the property is created, and this
  // renders the required <meta name="google-site-verification"> tag. Left
  // out entirely when unset, rather than shipping an empty/invalid tag.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

const socialLinks = Object.values(site.social).filter((href) => !href.startsWith("["));

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/images/logo-icon.png`,
  description: site.description,
  slogan: site.strapline,
  email: site.contact.email,
  telephone: phoneIntl,
  sameAs: socialLinks,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  url: site.url,
  telephone: phoneIntl,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fedha Estate, John Ndirangu Plaza",
    postOfficeBoxNumber: "34694",
    postalCode: "00100",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "City",
    name: "Nairobi",
  },
  sameAs: socialLinks,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-signal focus:text-forest-dark focus:px-4 focus:py-2 focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
