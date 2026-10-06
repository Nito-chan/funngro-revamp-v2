# Funngro Website Revamp — OpenCode Master Plan (v2)

> **How to use:** Put this file in the project root as `PLAN.md`, then tell OpenCode:
> *"Read PLAN.md fully. Execute it phase by phase. Finish and verify each phase before starting the next. Ask me only when blocked. Never invent facts listed under 'Rules'."*

---

## 0. Assignment (from the Funngro project page)

1. Go to the current Funngro site.
2. Create a **2-page design for Funngro: a Company page and a Teen page**.
3. Implement **SEO-friendly content**.
4. Submission: **put the deployed website link in the remark**.
5. Also submit a **Funngro website SEO Audit report** (shows SEO understanding).

Evaluators judge website-development skill and SEO understanding. Two polished pages plus an honest, evidence-based audit beat a big, sloppy site.

---

## 1. Rules (non-negotiable)

1. **No invented facts.** Every Funngro claim (stats, categories, flow, earnings) must come from the verified fact sheet below or be re-verified from funngro.com.
2. **No fake testimonials, logos, or earnings.** Use no brand logos at all (trademarks). If showing sample numbers, label them **"Illustrative demo data"** in visible text.
3. **No fabricated audit scores.** Anything not measured is written as `Not measured — requires test`.
4. **Don't copy Funngro's layout or text verbatim.** Redesign; preserve factual meaning.
5. **Do not copy other applicants' work.** A public competing revamp exists at `fungrow-teal.vercel.app` that uses stats such as "500+ campaigns", "200+ partners", "94% completion". These are **not** verified on funngro.com. Do not use them.
6. Minimal dependencies. Semantic HTML. Server-rendered/static HTML (the whole point of the SEO story).
7. Don't stop at "looks okay". Polish spacing, type, motion, mobile.

---

## 2. Verified Fact Sheet (researched 6 Oct 2026)

### Confirmed from funngro.com (homepage, contact page) and official app listings
| Item | Value | Source |
|---|---|---|
| Positioning | "India's earning app for young creators" / "Earn online with India's biggest brands" | funngro.com meta + contact page structured data |
| Audience size | **70 lakh (7 million) young Indians** | funngro.com homepage |
| Brand count | **5,000+** brands/companies | funngro.com homepage; App Store / Play Store |
| Payout | **UPI** or bank transfer; instant UPI payouts | contact page; App Store |
| Pricing to user | "Free, forever" | homepage meta description |
| Campaign types | Brand promotion, content, referrals, sampling, surveys, influencer briefs, micro tasks | homepage |
| Project categories | Social Media Marketing, Video Editing & Creation, Website Designing, Influencer Marketing, Mobile App Development, Campus Ambassador, Research & Survey, Data Entry, Voice-Over, Content Writing, Graphic Designing, App Testing | App Store / Play Store listings |
| Credibility | Featured on Shark Tank India S2; investment from Amit Jain and Namita Thapar; backed by SucSEED | homepage; press (Outlook Business, Techloy) |
| Terms used by Funngro | "Teenlancer", "Shelancer", "Funngro Arcade" (in site keywords) | homepage meta keywords |
| Brand contact | hello@funngro.com (brands, partnerships, CPA pilot) | /contact |
| Legal entity | Wishbanc Technologies Private Limited, Mumbai | /contact |
| Theme colour | `#0b0f0d` (near-black green), not navy | homepage `theme-color` meta |
| Referral | Refer friends, get paid when they join and complete tasks | App Store |

### Conflicting / unverified, handle with care
| Item | Issue | Action |
|---|---|---|
| Age range | App Store says 14–25; another listing says 15–25 | Say **"young Indians"**; if age is shown, use "14–25" and tag as per the app listing, or omit |
| "Up to ₹10,000/month" | Appears only in one Play Store description | **Do not use** as a headline claim. If used, footnote it |
| "2,500+ brands" | Play Store says 2,500+; homepage and App Store say 5,000+ | Use **5,000+** only |
| "1,000+ live projects" | Not found anywhere | **Remove** (the old plan had it) |
| "60 lakh+" | Older figure in store listings; the site now says 70 lakh | Use **70 lakh** |
| Subpages `/teen`, `/for-brands`, `/about`, `/stories`, `/terms-and-conditions` | Only `/` and `/contact` were confirmed reachable during research | **Phase 1: OpenCode must check each URL** and record which exist |

### Key technical observation (for the SEO audit)
Fetching `https://www.funngro.com/` returns **head metadata (title, description, Open Graph, Twitter card, theme-color, viewport) but essentially no readable body content** in the raw HTML, which suggests a client-rendered (JS) app. Phase 1 must **confirm this** by comparing `curl` output with the rendered DOM. If confirmed, it is the audit's #1 finding.

---

## 3. Corrections to the original plan

| Original plan | Problem | Fix in v2 |
|---|---|---|
| Deep navy base | Funngro's own theme colour is near-black green `#0b0f0d` | Dark green-black base + green accent (keeps brand continuity) |
| "Teen" page only | Funngro's audience is broader (young people up to ~25, "Shelancer", etc.) | Name the page **"For Youth / Teenlancers"**; URL `/` or `/teen` |
| Stats: 1,000+ live projects, 14–25 | Unverified | Use only the verified table above |
| Hero mock numbers (₹4,100, 2.4M reach…) | Risk of looking like real claims | Keep, but add a visible "Illustrative demo" tag |
| Opportunity list with "Surveys / Sampling / Influencer / App testing" | Mostly OK | Use the verified category list above |
| Page "Success Stories" with real stories | No verified source of stories collected | Only include if Phase 1 finds public stories; otherwise use a "How youth climb the ladder" section with no names |
| SEO audit described but no method | Can't be produced from vibes | Section 9 gives exact commands and a report template |
| Vague tech choices (`src/pages`) | Conflicts with the Next.js App Router | Use App Router with static generation (see Section 5) |
| Vercel assumed | Fine, but untested networking | Deploy Vercel; Netlify is an acceptable fallback |
| No time/scope control | Over-building risks missing the deadline | Phase gates and a "minimum shippable" cut line (Section 11) |

---

## 4. Design Direction

- **Mood:** youth-first fintech/startup, premium but playful. Not a template.
- **Palette (CSS variables):**
  - `--bg: #0b0f0d` (matches Funngro theme colour)
  - `--surface: #121a16`
  - `--surface-2: #1a2520`
  - `--accent: #22c55e` (green; adjust to match the brand after viewing the live site)
  - `--accent-2: #a3e635` (highlight)
  - `--text: #f4f7f5`, `--muted: #9fb0a7`
  - Check **WCAG AA contrast** for every text/background pair.
- **Type:** one display font + one body font via `next/font` (self-hosted, no layout shift). E.g. Sora or Space Grotesk for headings, Inter for body.
- **Components:** large headlines, soft gradients, subtle glass cards, rounded 16–24px, one signature motif (e.g. an "earn ladder" or ticking payout card).
- **Motion:** Framer Motion for entrance and scroll reveals, hover micro-interactions. **Respect `prefers-reduced-motion`.** No heavy video, no big libraries.
- **Avoid:** card grids everywhere, generic Bootstrap look, stock gradients on everything.

---

## 5. Tech Stack and Structure

- **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react**
- All pages statically generated (SSG): full HTML must be present in "view-source". This is the direct contrast to the current site.
- Deploy: Vercel (GitHub repo `funngro-website-revamp`).

```
src/
  app/
    layout.tsx            # fonts, global metadata, JSON-LD (Organization, WebSite)
    page.tsx              # Youth / Teenlancer page  (route: /)
    brands/page.tsx       # Company / Brands page    (route: /brands)
    sitemap.ts            # generates sitemap.xml
    robots.ts             # generates robots.txt
    opengraph-image.tsx   # optional OG image
  components/
    Navbar.tsx  Footer.tsx  Hero.tsx  StatsBar.tsx
    FeatureCard.tsx  HowItWorks.tsx  CategoryCard.tsx
    LadderSection.tsx  FAQ.tsx  CTASection.tsx  DemoBadge.tsx
  data/
    youthData.ts  brandsData.ts  site.ts   # all copy + facts (single source of truth)
```

Rules: data-driven rendering, no giant components, no unused dependencies.

---

## 6. Page 1 — For Youth / Teenlancers (`/`)

**SEO**
- Title (≤ 60 chars): `Funngro for Youth | Earn Online With India's Top Brands`
- Meta description (≤ 155 chars): `Complete real brand campaigns, build your portfolio and get paid by UPI. Funngro connects 70 lakh young Indians with 5,000+ brands.`
- H1 (one only): `Your skills deserve more than likes.`
- Canonical: `/`

**Sections (in order)**
1. **Nav**: Logo wordmark, How it works, Categories, FAQ, `For Brands` link (to `/brands`), CTA `Start Earning` (links to https://www.funngro.com/ or the official app store link found in Phase 1).
2. **Hero**: H1, sub-copy, 2 CTAs, floating dashboard card (earnings/task-complete) tagged **"Illustrative demo"**.
3. **Stats bar** (verified only): `70 lakh+ young Indians` · `5,000+ brands` · `UPI payouts` · `Free to join`.
4. **Why Funngro** (Earn / Learn / Build portfolio / Grow): 4 cards with icons and hover motion.
5. **How it works**: timeline. Confirm the real flow in Phase 1; default per store listing: *Join a campaign → Do the task → Submit → Get paid by UPI*, plus referral path.
6. **Categories**: the 12 verified categories as `CategoryCard`s with icon and one-line, non-numeric description.
7. **Income & influence ladder**: visual progression (start, grow, build) with **no numeric earning claims**.
8. **Trust**: Shark Tank India S2 mention, SucSEED backing (text only, no logos), UPI/bank payouts.
9. **FAQ** (visible content, then `FAQPage` JSON-LD matching it exactly): Who can join? Is it free? How do payouts work? What kind of work? Draft only from verified facts; if unsure, phrase as "see the Funngro app/terms".
10. **Final CTA**: `Your first opportunity starts here.`
11. **Footer**: links, cross-link to `/brands`, `hello@funngro.com`, disclaimer: *"Unofficial redesign concept created for the Funngro project assignment."*

---

## 7. Page 2 — For Brands (`/brands`)

**SEO**
- Title: `Funngro for Brands | Reach India's Young Consumers`
- Meta description: `Run authentic youth campaigns: brand promotion, content, referrals, sampling and surveys with Funngro's 70 lakh young earners.`
- H1: `Reach young India through campaigns powered by real people.`
- Canonical: `/brands`

**Sections**
1. Nav (cross-link `For Youth`), CTA `Talk to Funngro` (`mailto:hello@funngro.com`, or the official brands contact path found in Phase 1).
2. **Hero** + campaign dashboard mock (Reach / Engagement / Actions) tagged **"Illustrative demo data, not Funngro metrics"**.
3. **Stats** (verified): `70 lakh+ young Indians`, `5,000+ brands`, `UPI-verified payouts` (only if confirmed), `Pay-per-action (CPA) pilots available` (the contact page mentions CPA pilots).
4. **Solutions**: Brand Promotion, Content Creation, Referral Campaigns, Product Sampling, Surveys/Research, Influencer Briefs, App Testing, Campus Ambassador, Micro Tasks. Keep only those confirmed.
5. **How it works (brands)**: Brief → Pick campaign type → Youth complete tasks → Review results. Confirm against the site in Phase 1; if unconfirmed, mark as "proposed flow" in comments, not as Funngro fact.
6. **Why it works**: authentic reach, real people, measurable actions. No unsupported claims such as "94% completion".
7. **FAQ** + `FAQPage` JSON-LD.
8. **Final CTA**: `Your next campaign starts with the right audience.`
9. Footer as above.

---

## 8. Technical SEO Implementation (checklist for OpenCode)

- Unique `<title>` and meta description per page (Next.js `metadata` / `generateMetadata`).
- Canonical URLs, Open Graph + Twitter card (`summary_large_image`), `og:locale=en_IN`.
- `sitemap.xml` and `robots.txt` via `app/sitemap.ts` and `app/robots.ts`.
- Semantic HTML: `<header> <nav> <main> <section> <article> <footer>`; one H1 per page; logical H2/H3.
- JSON-LD: `Organization`, `WebSite`, `BreadcrumbList`, and `FAQPage` **only** where FAQ is visible and identical.
- Descriptive `alt` text; `next/image` with width/height, lazy loading, WebP/AVIF.
- `lang="en-IN"` on `<html>`; `theme-color` meta.
- Internal links between `/` and `/brands`; descriptive anchor text.
- Fast: no layout shift, fonts via `next/font`, minimal client JS (mark only animated parts `"use client"`).
- Accessibility: keyboard nav, visible focus rings, AA contrast, button/link semantics, `aria-label` on icon buttons, `prefers-reduced-motion`.
- No keyword stuffing. Target intents naturally: *earn online for students India, freelance projects for teens, part-time work for students, youth marketing India, Gen Z marketing, influencer and sampling campaigns India.*

---

## 9. SEO Audit of the *Current* Funngro Site (deliverable #2)

Produce `SEO_Audit_Report.md` and export it to **PDF** (and `.docx` if easy). Audience: Funngro team. Tone: professional, specific, evidence-based.

### 9.1 Evidence to collect (OpenCode runs these; save raw outputs in `/audit-evidence/`)

```bash
# Raw HTML vs rendered content (is the body empty without JS?)
curl -sL https://www.funngro.com/ -o raw-home.html
wc -c raw-home.html
grep -io "<h1[^>]*>.*</h1>" raw-home.html | head      # H1 in raw HTML?
grep -io "<title>.*</title>" raw-home.html
grep -i 'rel="canonical"' raw-home.html
grep -i 'application/ld+json' raw-home.html

# robots + sitemap + headers
curl -sI https://www.funngro.com/ | head -20
curl -sL https://www.funngro.com/robots.txt
curl -sL https://www.funngro.com/sitemap.xml | head -50

# Status of each key URL (and redirect chains)
for u in / /teen /for-brands /about /stories /terms-and-conditions /contact /blog; do
  echo "$u -> $(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' -L https://www.funngro.com$u)"
done

# Lighthouse (mobile + desktop) if Chrome is available
npx lighthouse https://www.funngro.com/ --preset=desktop --output=json --output=html --output-path=./audit-evidence/lh-desktop
npx lighthouse https://www.funngro.com/ --output=json --output=html --output-path=./audit-evidence/lh-mobile
```

If the sandbox has no network or Chrome, **stop and tell the user** to run [PageSpeed Insights](https://pagespeed.web.dev/) manually for both mobile and desktop on `/` (and the brands page) and paste the four scores plus LCP/CLS/INP. Do not estimate.

Also check in a browser (or with Playwright if available): rendered H1/H2 structure, images missing `alt`, console errors, broken links, mobile viewport behaviour.

### 9.2 Report structure

1. **Executive summary**: scope, method, date, top 5 findings, overall verdict.
2. **Scope and method**: URLs audited, tools, date, limitations.
3. **Technical SEO**: HTTPS, robots.txt, sitemap, canonicals, status codes/redirects, crawlability of JS-rendered content, structured data, mobile viewport.
4. **On-page SEO table**: `Factor | Finding (with evidence) | Priority | Recommendation`: title, meta description, H1/H2, image alt, internal links, URL structure, OG/Twitter.
5. **Content SEO**: search-intent coverage (earn money online students, teen freelancing, youth marketing, influencer/sampling campaigns), thin or missing content, FAQ/blog opportunities, E-E-A-T signals (Shark Tank, founders, terms, contact).
6. **Performance**: PageSpeed table (Mobile/Desktop × Performance, Accessibility, Best Practices, SEO) + Core Web Vitals. Real numbers only.
7. **Prioritised recommendations**: High / Medium / Low with effort estimate.
8. **How the revamp implements the fixes**: map each finding to what the new site does (SSR/SSG, metadata, sitemap, schema, etc.).
9. **Appendix**: raw evidence file list.

### 9.3 Honesty rules
Any item not tested = `Not measured — requires crawl/test`. State clearly that findings are a point-in-time snapshot. Do not claim rankings, traffic, or keyword volumes without a tool source.

---

## 10. Phased Workflow (with gates)

| Phase | Do | Gate (must pass) |
|---|---|---|
| 1. Research | Fetch the live site's pages (home, subpages, contact), record which URLs exist, real nav items, real flow, real FAQs/stories. Update Section 2 fact sheet in `FACTS.md`. | `FACTS.md` lists every claim used with a source URL |
| 2. Scaffold | Create Next.js app, Tailwind, fonts, design tokens, data files | `npm run build` passes |
| 3. Components | Build shared components | Renders on a test page |
| 4. Youth page | Build `/` | Matches Section 6; content from `data/` only |
| 5. Brands page | Build `/brands` | Matches Section 7 |
| 6. Motion + responsive | Animations, reduced-motion, 360/390/768/1024/1440 px | No horizontal scroll, no layout break |
| 7. SEO + a11y | Section 8 items | View-source shows full content; schema validates |
| 8. Audit | Run Section 9, write report, export PDF | Evidence folder exists; no invented numbers |
| 9. Test | Lighthouse on the *new* site (target ≥90 mobile perf, 100 SEO if achievable; report actuals) | Scores recorded honestly |
| 10. Ship | Push GitHub, deploy Vercel, verify live URL | Live URL loads both pages over HTTPS |

---

## 11. Minimum Shippable Cut (if time runs short)

Keep, in order: (1) both pages with hero, stats, categories, how-it-works, CTA; (2) metadata + sitemap + robots; (3) deployed link; (4) SEO audit with real measured evidence. Drop first: FAQ schema, OG image, fancy animations, ladder section.

---

## 12. Final QA Checklist

**Both pages:** nav links work, cross-links work, CTAs go to real URLs, no horizontal scroll at 360px, images load, no console errors, keyboard-navigable, one H1, unique title/description, canonical present.
**Technical:** HTTPS, `/sitemap.xml`, `/robots.txt`, OG tags, JSON-LD valid (Rich Results Test), Lighthouse run on live URL.
**Honesty:** demo data labelled, no unverified stats, "unofficial concept" disclaimer in footer.

---

## 13. Hand-off to the user (OpenCode should print this at the end)

1. Live URL: `https://<project>.vercel.app`
2. GitHub repo URL
3. `SEO_Audit_Report.pdf` location
4. List of anything **Not measured** that the user must run manually (e.g. PageSpeed Insights)
5. A ready-to-paste submission remark:

> **Funngro Website Revamp: 2-page responsive redesign (Youth + Brands) with SEO implementation. Live site: `<URL>` · Source: `<GitHub URL>` · SEO Audit Report: `<link>`**

Note: the platform's remark field asks for the website link; if it does not accept an attachment, host the PDF audit report (e.g. in the repo `/docs` or a shared link) and include its link in the same remark.
