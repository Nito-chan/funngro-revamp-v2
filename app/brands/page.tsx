import type { Metadata } from "next";

import {
  BrandsHero,
  CostsSection,
  OutcomesSection,
  ProcessSection,
  SolutionsSection,
  VerticalsSection,
  WhyBrandsSection,
} from "@/components/brands";
import { Cta, Faq } from "@/components/faq-cta";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_ORIGIN, site } from "@/data/site";
import * as b from "@/data/brandsData";

const faqs = b.faqs;
const finalCta = b.finalCta;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_ORIGIN,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "For Brands",
      item: absoluteUrl("/brands"),
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Funngro for Brands | Reach India's Young Consumers",
  },
  description:
    "Run authentic youth campaigns: brand promotion, content, referrals, sampling and surveys with Funngro's 70 lakh young earners.",
  alternates: {
    canonical: "/brands",
  },
  openGraph: {
    title: "Funngro for Brands | Reach India's Young Consumers",
    description:
      "Run authentic youth campaigns with Funngro's 70 lakh young earners. Pay for verified actions, not impressions.",
    url: absoluteUrl("/brands"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro for Brands | Reach India's Young Consumers",
    description:
      "Run authentic youth campaigns with Funngro's 70 lakh young earners. Pay for verified actions, not impressions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrandsPage() {
  return (
    <>
      <div>
        <BrandsHero />
        <WhyBrandsSection />
        <SolutionsSection />
        <VerticalsSection />
        <CostsSection />
        <OutcomesSection />
        <ProcessSection />
        <Faq
          id="faq"
          eyebrow="Brand FAQ"
          title="Questions brands ask most often."
          lead="Facts drawn from the official Funngro /for-brands page. Anything not measured, we do not claim."
          items={faqs}
        />
        <Cta
          title={finalCta.title}
          body={finalCta.body}
          primary={finalCta.primary}
          secondary={finalCta.secondary}
        />
        <section className="wrap pb-16">
          <p className="text-center text-xs text-faint">{site.disclaimer}</p>
        </section>
      </div>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}
