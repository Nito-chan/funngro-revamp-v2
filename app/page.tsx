import type { Metadata } from "next";

import {
  CategoriesSection,
  HowItWorksSection,
  LadderSection,
  MechanicsSection,
  ReferralSection,
  TrustSection,
  WhySection,
  WorkTypesSection,
  YouthHero,
} from "@/components/youth";
import { Cta, Faq } from "@/components/faq-cta";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_ORIGIN, site } from "@/data/site";
import { faqs, finalCta } from "@/data/youthData";

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
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Funngro for Youth | Earn Online With India's Top Brands",
  },
  description:
    "Complete real brand campaigns, build your portfolio and get paid by UPI. Funngro connects 70 lakh young Indians with 5,000+ brands.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Funngro for Youth | Earn Online With India's Top Brands",
    description:
      "Complete real brand campaigns, build your portfolio and get paid by UPI. Funngro connects 70 lakh young Indians with 5,000+ brands.",
    url: absoluteUrl("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro for Youth | Earn Online With India's Top Brands",
    description:
      "Complete real brand campaigns, build your portfolio and get paid by UPI. Funngro connects 70 lakh young Indians with 5,000+ brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function YouthPage() {
  return (
    <>
      <YouthHero />
      <WhySection />
      <HowItWorksSection />
      <WorkTypesSection />
      <CategoriesSection />
      <LadderSection />
      <MechanicsSection />
      <ReferralSection />
      <TrustSection />
      <Faq
        id="faq"
        eyebrow="FAQ"
        title="Questions we see most often."
        lead="Facts first. If something changes on the official app, we point back to it rather than guessing."
        items={faqs}
      />
      <Cta
        title={finalCta.title}
        body={finalCta.body}
        primary={finalCta.primary}
        secondary={finalCta.secondary}
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="wrap pb-16">
        <p className="text-center text-xs text-faint">{site.disclaimer}</p>
      </section>
    </>
  );
}
