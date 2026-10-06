# SEO Audit Report — Funngro (current site)

This report is based on **real evidence**, not guesswork. All data below is backed by
snapshots in `audit-evidence/`. Anything that could not be measured is written as
`Not measured — requires test`.

- **Audit date:** 6 Oct 2026 (point-in-time snapshot)
- **Audited URLs:** `https://www.funngro.com/`, `https://www.funngro.com/for-brands`, `https://www.funngro.com/contact`, `https://www.funngro.com/faq`, `https://www.funngro.com/sitemap.xml`, `https://www.funngro.com/robots.txt`
- **Evidence:** See the `audit-evidence/` directory in this repo (raw HTML, rendered DOM, bundle chunks, Play/App Store pages, redirects, HTTP headers, size checks)
- **Author:** OpenCode (independent audit against the assignment brief)

---

## 1. Executive Summary (Top 5 Findings)

| # | Finding | Priority | Impact |
|---|---|---|---|
| 1 | **JS-dependent content.** Raw HTML (`raw-home.html`, 3548 bytes) contains only `<div id="root"></div>`; full text appears after client-side rendering (rendered DOM ~125k). | High | Crawlers that don’t run JS see almost nothing. Risk: thin visible content for some bots. |
| 2 | **Canonical host mismatch.** Pages canonicalise to `https://funngro.com/` while the site actually lives at `www.funngro.com/` (which 302-redirects from `funngro.com` and 301-redirects from `http://www`). | High | Splits canonical signals between www and non-www. Easy to consolidate. |
| 3 | **No `<meta name="description">` in raw HTML.** The description is injected client-side. Also OG/Twitter descriptions exist but the HTML meta description is missing until JS runs. | High | Search engines can still derive from other tags in many cases, but a missing server meta description is a weakness for a JS-rendered app. |
| 4 | **Duplicate/contradictory Organization JSON-LD.** Rendered home emits **3** `Organization` blocks: one with `legalName: "Funngro Innovations Pvt Ltd"` and non-www URL; two with `legalName: "Wishbanc Technologies Private Limited"` and `www` URL. Also duplicate `WebSite` blocks. `MobileApplication` claims `aggregateRating` (4.6, 70k ratings) which contradicts both app stores (Play 4.2/50.3k, App Store 3.4/872). | High | Confuses schema consumers. Easy to clean up to a single correct graph. |
| 5 | **SPA soft-404s (200 for unknown paths).** `/this-page-definitely-does-not-exist-9x2q` and `/zzz-not-real` return **HTTP 200** with the homepage `<title>`. Also `/teen` and `/brands` return 200 with the homepage title but are not distinct pages. | High | Wastes crawl budget and pollutes signals; Google treats many of these as low-value pages. |

**Verdict:** The site is fast-to-market and has decent on-page structure when JS runs, but is **not HTML-first**. The technical fixes are straightforward; the revamp below implements them (SSG, unique canonical per route, clean JSON-LD, 200-only where intentional).

---

## 2. Scope & Method

| Item | Detail |
|---|---|
| URLs checked | `/`, `/for-brands`, `/contact`, `/faq`, `/earn`, `/stories`, `/sitemap.xml`, `/robots.txt`, `/terms-and-conditions`, `/privacy-policy` |
| Network | `curl` (headers, status, redirects), raw HTML fetched for every sampled path |
| Rendering | Headless Chrome (`--dump-dom`) to inspect the actual DOM after hydration |
| Bundles | Downloaded main chunk `index-Bbg7Xs3M.js` (636kB raw / 192kB gzip) and key route chunks; regex-extracted strings against `FACTS.md` |
| Stores | Google Play `com.wishbanc.funngro` and Apple App Store `id1579361075` scraped with `curl` |
| Validation intent | Would pass through [Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/) (no external validator calls made here) |

**Limitations:** `Not measured` items include full Lighthouse, CrUX, and live crawl of backlinks/rankings. See §7.

---

## 3. Technical SEO

| Check | Finding (with evidence) | Priority | Recommendation |
|---|---|---|---|
| HTTPS & HSTS | 301 from http→https, HSTS present (`Strict-Transport-Security: max-age=31536000; includeSubDomains`) | Low | Keep as-is. |
| Canonicals | Canonical points to `https://funngro.com/` (non-www) but `https://funngro.com/` 302-redirects to `https://www.funngro.com/`. Rendered pages also emit mixed WebSite/Org `url` fields. (`rendered-home.html`) | High | Point canonical to the final (www) host; align all JSON-LD `url` fields to the canonical host. |
| robots.txt | Healthy: allows `/`, disallows `/admin /auth /feedback /preview/ /api/`, references `/sitemap.xml`. HTTP 200. | Low | No change. |
| sitemap.xml | 39 URLs, valid `xmlns`, `lastmod` (mostly 2026-06-26). Does **not** list `/teen` or `/brands`. | Medium | When adding static routes, keep the sitemap in sync (or generate it). |
| Redirects | Non-www→www for https: `http://www.funngro.com/` 301 to https://www.funngro.com/; `https://funngro.com/` 302 to https://www.funngro.com/. `http://funngro.com/` 302→www. | High | Prefer 301 for canonical host (from non-www https) and avoid splitting signals. |
| Crawlability (JS) | Raw HTML empty of main text; canonical/description missing server-side. | High | Serve critical metadata server-side. Prefer SSG/SSR so crawlers receive HTML with titles, descriptions, canonicals and H1. |
| Structured data | Organization (3x), WebSite (2x), MobileApplication (1x) on home. FAQPage present only on `/faq`. BreadcrumbList on `/for-brands` and `/contact`. (`rendered-*.html`) | High | Emit a **single** graph per page. Drop `aggregateRating` (conflicts with stores) and don’t duplicate blocks. |
| 404 handling | 200 for non-existent URLs (soft-404). (`curl` checks above) | High | Return 404 status for unknown paths. The revamp’s 2-page set won’t create these, but note for the full site. |
| /teen and /brands exist only client-side | Both return 200 with homepage title (SPA catch-alls). Not distinct pages. | Medium | Align IA: youth lives at `/`; brand live at `/brands` (our revamp) vs `/for-brands` (official). Our two routes are distinct SSG pages. |
| International | `lang="en-IN"`, `og:locale="en_IN"`. | Low | OK. |
| Performance note | JS gzip 192kB, CSS 87kB raw. Self-hosted fonts. | Medium | Keep minimal client JS. Our revamp marks interactive parts `"use client"` only where strictly necessary. |
| Accessibility basics | Rendered home: 1 H1, logical H2/H3, 19 `<img>` with no missing `alt` (all present). Focusable elements in DOM. | Low | Good baseline. Need to maintain keyboard nav and AA contrast. |

---

## 4. On-page SEO Table

| Factor | Finding (with evidence) | Priority | Recommendation |
|---|---|---|---|
| Title | Home: "Funngro — Earn online with India&#39;s biggest brands". `/earn` and `/for-brands` have their own titles. (`rendered-home.html`, chunk-earn, chunk-forbrands) | Medium | Keep unique per page. Our revamp has `/` "Funngro for Youth..." and `/brands` "Funngro for Brands...". |
| Meta description | Missing from **raw** HTML. Present in rendered DOM: e.g. "Join 70 Lakh+ young Indians...". | High | Emit `<meta name="description">` server-side in `generateMetadata` (App Router). |
| Canonical | Points to non-www. | High | Point to canonical route on the final host (www) or the one you want indexed. |
| H1/H2 structure | 1 H1 on home: "Get Paid by India's biggest brands withflexible remote opportunities." 9 H2s, good hierarchy. | Low | Our 2-page build preserves a single H1 per page with logical H2s. |
| Image `alt` | All 19 imgs have alt text in rendered DOM. | Low | Maintain. |
| Internal links | Clear cross-page + in-page anchors in footer/nav (desktop nav visible). | Low | Our revamp links `/` ↔ `/brands` and has in-page IDs for sections. |
| URL structure | Official uses `/for-brands` for brands; we use `/brands` (assignment: "Company page"). | Medium | `/brands` is fine for the revamp (SEO-friendly, short). Note it’s not an official route. |
| OG/Twitter | All present. `og:url` non-www; image `https://funngro.com/og-image.jpg`. | Medium | Align `og:url` to canonical host. |
| OpenGraph image | `og-image.jpg` referenced. Not downloaded to evidence but referenced in all meta. | `Not measured` | Use a static OG image or generate one with `opengraph-image.tsx` (Next.js). |

---

## 5. Content SEO

| Factor | Finding | Priority | Recommendation |
|---|---|---|---|
| Search intent coverage | Covers "earn online for students India", "teen freelancing", "brand promotion", "influencer campaigns India" in titles and copy. | Low | Natural use of these terms. Our copy does the same without stuffing. |
| Thin content (raw HTML) | Raw HTML is effectively empty. Only JS delivers readable content. | High | SSG so that "view-source" contains the H1, meta, schema, and section text. |
| FAQ opportunities | `/faq` page exists with real Qs/As and FAQPage schema. | Low | Our 2-page build includes an FAQ accordion on both pages and feeds FAQPage JSON-LD (no invented questions). |
| E-E-A-T signals | Shark Tank India S2, Amit Jain, SucSEED mentioned; support emails published; Privacy/Terms exist; legal entity inconsistent. | Medium | Keep honest references (Shark Tank + SucSEED + Amit Jain are all public). Avoid printing a legal name since it's inconsistent in the source. |
| Stories | `/stories` and individual story routes exist with real quotes/earnings. | Medium | Don’t lift real stories verbatim. Our ladder section deliberately has no names. |
| Stats | 70 lakh, 5,000+, <24h, tiers are published by Funngro — some store values differ. | High | Only use the verified set (FACTS.md). Reject "500+ campaigns", "200+ partners", "94% completion". |
| Age range | 14–25 published in app stores and `/faq`. | Low | State "young Indians (14–25)" or "young Indians". Our copy uses "young India, 14 to 25" on the youth page. |

---

## 6. Performance (point-in-time)

| Metric | Observation (evidence) | Priority |
|---|---|---|
| Page weight (home) | index.js 192kB gzip; CSS 87kB raw; rendered HTML ~126kB. | Medium |
| TTFB (curl) | Quick for static files; JS app depends on hydration. No lab Lighthouse run performed here. | `Not measured — requires test` |
| Core Web Vitals | Cannot determine from `curl` alone. | `Not measured — requires test` |
| Render-blocking | No external Google Fonts (self-hosted via `@fontsource`). | Low |
| Images | 19 imgs, 0 missing alt. Lazy loading by React/SPA (not server HTML lazy hints). | Medium |

**Recommendation:** Run Lighthouse on `https://www.funngro.com/` (mobile + desktop). Our SSG build should achieve strong SEO and a clean performance baseline with minimal client JS.

---

## 7. Prioritised Recommendations for the *current* site

| Priority | Action | Effort | Evidence |
|---|---|---|---|
| High | Make HTML first. Deliver H1, title, meta description, canonical and schema in the raw HTML (SSR/SSG). | Large | Raw body is empty (3548 bytes) |
| High | Fix canonical host to the canonicalised host (www) and 301 from non-www https. Align `og:url` and all JSON-LD `url`s to the same host. | Low | 302 to www + mixed URLs |
| High | Return proper 404 for unknown routes; stop serving the homepage at arbitrary paths (soft-404). | Medium | Soft-404 on junk paths; `/teen`/`/brands` client-only |
| High | Consolidate JSON-LD to a single graph per page. Remove duplicate Organization/WebSite blocks. Drop `aggregateRating` (4.6/70k) — it conflicts with Play (4.2/50.3k) and App Store (3.4/872). Use a single, defensible Organization or omit `legalName` (it’s internally inconsistent). | Medium | 3× Org + 2× WebSite + rating contradiction |
| High | Server-render `<meta name="description">` (don’t rely only on OG/Twitter). | Low | Missing in raw HTML |
| Medium | Generate FAQPage only where visible (already true on `/faq`). Ensure it matches visible content. | Low | FAQPage on `/faq` |
| Medium | Keep bundle small and avoid shipping unused chunks. | Medium | 192kB gzip main chunk |
| Medium | Consider `hreflang` only if multilingual surfaces become indexable. | Low | UI is multilingual but pages may not need separate hreflang yet |
| Low | Add `loading="lazy"` to below-fold images in rendered HTML (if moving to SSG). | Low | Manual alt check passed |

---

## 8. How the revamp implements the fixes

| Current issue | What the new 2-page site does | Evidence in this repo |
|---|---|---|
| JS-only HTML | Built with **Next.js App Router + SSG** (all routes generate static HTML at build time). `npm run build` produces prerendered routes `/` and `/brands`. | `out/`-style static output via Next; `app/page.tsx`, `app/brands/page.tsx` are server components. |
| Canonical/host | Each route sets `alternates.canonical` via `generateMetadata`. Canonical uses `SITE_ORIGIN` (env-driven) and points to the route path. Also absolute `og:url`. | `app/layout.tsx` metadataBase + per-page metadata; `data/site.ts` `SITE_ORIGIN` and `absoluteUrl`. |
| Meta description server-side | `metadata.description` exported per route. | `app/page.tsx` and `app/brands/page.tsx` metadata blocks. |
| Clean JSON-LD | Single `@graph` (Organization + WebSite) in root layout. Page-specific JSON-LD only where needed: **FAQPage** and **BreadcrumbList** on both pages (factual, matches visible content). No `aggregateRating`. No legal name. | `app/layout.tsx` (site graph), `app/page.tsx` and `app/brands/page.tsx` (FAQPage + BreadcrumbList). |
| Facts only | All copy comes from `data/*.ts` files. Stats, bands, categories from FACTS.md. Sample data explicitly labelled **"Illustrative demo data"**. No made-up testimonials/names. | `data/youthData.ts`, `data/brandsData.ts`, `components/Hero.tsx` (`DemoBadge`), `FACTS.md`. |
| Soft-404 prevention | Only 2 routes exist. Unknown paths will 404 in a proper Next deployment. No catch-all that returns 200. | Build outputs exactly `/` and `/brands`. |
| Distinct routes | `/` (Youth) and `/brands` (Company) are two separate SSG pages with unique titles, descriptions, H1s and canonicals. | Section 4/5 of PLAN.md implemented. |
| Accessibility + responsive | AA-friendly token set, focus-visible, `prefers-reduced-motion`, semantic HTML, keyboard navigable accordions (native `<details>`), mobile menu. | `app/globals.css`, `components/FAQ.tsx`, `components/Navbar.tsx`. |
| SEO files | `sitemap.ts` and `robots.ts` generate correct files. | `app/sitemap.ts`, `app/robots.ts`. |
| Honesty disclaimer | Footer includes the required "unofficial redesign concept" disclaimer and an explicit note about sample/illustrative data and attribution. | `components/Footer.tsx`, `data/site.ts`. |

---

## 9. Appendix: Evidence file list

| Path | Purpose |
|---|---|
| `audit-evidence/raw-home.html` | Raw curl of `/` (no JS body) |
| `audit-evidence/rendered-home.html` | Headless Chrome DOM of `/` |
| `audit-evidence/raw-for-brands.html` | Raw `/for-brands` |
| `audit-evidence/rendered-for-brands.html` | Rendered `/for-brands` |
| `audit-evidence/rendered-faq.html` | Rendered `/faq` (has FAQPage) |
| `audit-evidence/raw-sitemap.xml` | Sitemap (39 URLs) |
| `audit-evidence/robots.txt` (via curl) + headers captured | Crawl directives + HSTS/redirects |
| `audit-evidence/raw-app.js` | Main bundle (636kB raw / 192kB gzip) |
| `audit-evidence/chunk-*.js` | Route chunks with real copy/FAQ/categories |
| `audit-evidence/raw-playstore.html` | Google Play listing (4.2, 50.3k, 50L+, updated 5 Oct 2026) |
| `audit-evidence/raw-appstore.html` | Apple App Store (3.4, 872, age 16+) |

All of the above are committed to the repo alongside this report.

---

## 10. Honest Statement

This audit only reports what was measured. Lighthouse scores, Core Web Vitals field data, and keyword rankings are **Not measured — requires test**. Findings reflect a point-in-time snapshot (6 Oct 2026). No traffic, revenue or internal platform data was used; all product facts were cross-checked against the live public site, its sitemap, its app listings, and bundle contents as shown in the evidence.

**How to run Lighthouse (if desired):**

```bash
npx lighthouse https://www.funngro.com/ --preset=desktop --output=json --output=html --output-path=./audit-evidence/lh-desktop
npx lighthouse https://www.funngro.com/ --output=json --output=html --output-path=./audit-evidence/lh-mobile
```