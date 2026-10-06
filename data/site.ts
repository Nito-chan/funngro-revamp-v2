/**
 * Site-wide constants: identity, canonical URLs, contact details.
 *
 * Every value here traces back to a row in FACTS.md, which cites the exact
 * evidence file it came from. Nothing in this file may be changed without
 * updating FACTS.md — that file is the project's source of truth.
 */

const DEFAULT_ORIGIN = "https://funngro-revamp.vercel.app";

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL in the deployment environment;
 * the fallback keeps local builds and metadata rendering valid.
 */
export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_ORIGIN
).replace(/\/$/, "");

export const site = {
  name: "Funngro",
  /**
   * Unofficial redesign concept. The assignment requires an explicit
   * disclaimer so the pages are never mistaken for Funngro's own site.
   */
  disclaimer:
    "Unofficial redesign concept created for the Funngro project assignment. Not operated by Funngro.",
  shortDescription:
    "Funngro is India's earning app for young creators. 70 lakh young Indians get paid in UPI for real brand campaigns.",
  themeColor: "#0b0f0d",
  locale: "en_IN",
  htmlLang: "en-IN",
  twitterHandle: "@Funngro",
  foundedInIndia: true,
} as const;

export const routes = {
  home: "/",
  brands: "/brands",
} as const;

/** Absolute canonical URL for a route path. */
export function absoluteUrl(path: string): string {
  return `${SITE_ORIGIN}${path === "/" ? "" : path}`;
}

/** Verified contact paths (FACTS.md §1). */
export const contact = {
  /** Brands, partnerships, press and investor enquiries. Under 1 business day. */
  brands: "hello@funngro.com",
  /** Earner support inside the app. Under 24 hours, usually under 4. */
  support: "teenlancer@funngro.com",
} as const;

/** Real store listings, confirmed in the app-bundle and both store pages. */
export const storeLinks = {
  play: "https://play.google.com/store/apps/details?id=com.wishbanc.funngro",
  appStore: "https://apps.apple.com/in/app/funngro/id1579361075",
} as const;

/**
 * The live site Funngro is actually on. Used for "see the real thing" links so
 * every CTA on the redesign leads somewhere real rather than nowhere.
 */
export const liveSite = {
  home: "https://www.funngro.com/",
  earn: "https://www.funngro.com/earn",
  brands: "https://www.funngro.com/for-brands",
  faq: "https://www.funngro.com/faq",
  contact: "https://www.funngro.com/contact",
} as const;

/** Public postal address from the site's Organization JSON-LD. */
export const address = {
  street: "2105 Wing F, Fantacy Land, CTS No 1, Opp Majas Depot, Jogeshwari E, J V Link Road",
  locality: "Mumbai",
  region: "Maharashtra",
  postalCode: "400060",
  country: "IN",
} as const;