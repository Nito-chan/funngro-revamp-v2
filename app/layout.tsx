import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

import { PillNav } from "@/components/chrome";
import { FooterBig } from "@/components/chrome";
import { JsonLd } from "@/components/JsonLd";
import { SITE_ORIGIN, site } from "@/data/site";

/* v2 uses a different pairing from v1 (Space Grotesk + Inter). */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

/* SEO metadata: identical outputs to v1 (see parity table in V2_NOTES.md). */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Funngro — Earn online with India's biggest brands",
    template: "%s | Funngro",
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: "https://www.funngro.com" }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "earn online india",
    "earn money online for students",
    "freelance projects for teens",
    "part time work for students",
    "brand promotion app",
    "upi earnings",
    "influencer campaigns india",
    "product sampling campaigns",
    "app testing india",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: "Funngro — Earn online with India's biggest brands",
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    title: "Funngro — Earn online with India's biggest brands",
    description: site.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
};

/* Same Organization + WebSite graph as v1. See V2_NOTES.md parity table. */
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: site.name,
      url: SITE_ORIGIN,
      description: site.shortDescription,
      email: "hello@funngro.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "2105 Wing F, Fantacy Land, CTS No 1, Opp Majas Depot, Jogeshwari E, J V Link Road",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400060",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: site.name,
      description: site.shortDescription,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.htmlLang} className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:font-medium focus:text-primary-ink"
        >
          Skip to content
        </a>
        <PillNav />
        <main id="main">{children}</main>
        <FooterBig />
        <JsonLd data={siteJsonLd} />
      </body>
    </html>
  );
}
