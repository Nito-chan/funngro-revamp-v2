# FACTS.md — verified fact sheet (Phase 1 research, 6 Oct 2026)

Every claim used in the redesign must appear here with a source URL. Anything not listed
is `Not measured — requires test` and must not be stated on the site.

## Evidence files

All raw evidence lives in `audit-evidence/`:

| File | What it is |
|---|---|
| `raw-home.html` | `curl` output of `https://www.funngro.com/` (3,548 bytes) |
| `raw-for-brands.html` | `curl` output of `https://www.funngro.com/for-brands` (3,734 bytes) |
| `raw-contact.html` | `curl` output of `https://www.funngro.com/contact` (3,649 bytes) |
| `raw-sitemap.xml` | `curl` output of `/sitemap.xml` (39 URLs) |
| `rendered-home.html` | Headless Chrome DOM dump of `/` (125,734 bytes) |
| `rendered-for-brands.html` | Headless Chrome DOM dump of `/for-brands` (69,430 bytes) |
| `rendered-faq.html` | Headless Chrome DOM dump of `/faq` (110,881 bytes) |
| `raw-app.js` | Main app bundle (636 KB raw / 192 KB over gzip) |
| `chunk-faq.js`, `chunk-forbrands.js`, `chunk-earn.js`, `chunk-contact.js` | Route chunks with real page copy |
| `raw-playstore.html` | Google Play listing (`com.wishbanc.funngro`) |
| `raw-appstore.html` | Apple App Store listing (`id1579361075`) |

---

## 1. Core claims — verified

| Claim | Value | Source |
|---|---|---|
| Product name | Funngro | `raw-home.html` |
| Positioning | "Earn online with India's biggest brands" | `raw-home.html` `<title>` |
| Positioning (structured) | "Funngro is India's earning app for young creators" | `raw-home.html` Organization JSON-LD |
| App name (Play) | "Funngro: Freelance & Earn App" | `raw-playstore.html` |
| App name (App Store) | "Funngro-Become Nano Influencer App" | `raw-appstore.html` |
| Audience size | **70 lakh / "70 Lakh+"** young Indians | `rendered-home.html` stats bar; `raw-home.html` meta; Play+App Store both say older "60 lakh+" |
| Brand count | **5,000+** brands / companies | `rendered-home.html` stats bar; `raw-app.js` `ba.companies`; Play + App Store ("2500+ brands" / "5000+ companies" also appear) |
| Live projects | 1,000+ live projects | `raw-app.js` `ba.liveProjects`, `rendered-home.html` stats bar |
| Work categories | 12+ work categories | `raw-app.js` `ba.categories` |
| Age range | **14–25** | `raw-appstore.html` "(14-25)"; `raw-playstore.html` "School and college students (14-25)"; `/faq` "between 14 and 25"; `chunk-forbrands.js` "Age 14–25"; Play Store content rating "Rated for 3+" |
| Payout rails | UPI or bank transfer; instant UPI payouts | `chunk-earn.js` step 4; `raw-playstore.html`; `/faq` |
| Payout window | "< 24h · UPI / Bank" | `rendered-home.html`; instant for verified tasks, up to 24h for manual review (`chunk-faq.js`) |
| Price to user | Free forever, zero withdrawal fees, no subscription | `raw-appstore.html`; `/faq` ("No. Free forever. Zero withdrawal fees.") |
| Signup | OTP verification, about two minutes | `chunk-faq.js`; `raw-app.js` `mA.en.steps[0]` |
| Signup requirements | Smartphone or laptop with internet, a UPI ID | `chunk-earn.js` step 1 list |
| Average active user earnings | ₹4,100 / month | `rendered-home.html` ladder; `/faq` ("around ₹4,100 per month") |
| Top 5% earnings | ₹18,000+ / month | `rendered-home.html`; `/faq` |
| Tier bands | Starter ₹1K–3K/mo · Grower ₹3K–7K/mo · Builder ₹7K–15K+/mo | `rendered-home.html` ladder; `/faq` |
| Tiers | Bronze → Silver → Gold → Platinum; Silver 1.5x, Gold 2x | `raw-app.js` ladder copy |
| Referral reward | ₹5 when a friend completes their first project, plus 5% of their earnings for life | `/faq` |
| Spin reward | Up to ₹1,000 per spin; 3 free spins, once per day | `/faq` |
| Shark Tank | Featured on **Shark Tank India Season 2**; investment from **Amit Jain**, subsequent investment by **SucSEED** | `rendered-home.html` trust band; `/blog/shark-tank-inside-story` slug |
| Brand contact | hello@funngro.com (brands/partnerships, press, investors; response under 1 business day) | `chunk-contact.js` |
| Earner support | teenlancer@funngro.com (response under 24h, usually under 4) | `chunk-contact.js` |
| Play Store | `com.wishbanc.funngro` — 4.2 stars, 50.3K reviews, 50L+ downloads, updated 5 Oct 2026 | `raw-playstore.html` |
| App Store | `id1579361075` — 3.4 stars, 872 ratings, Age 16+ | `raw-appstore.html` |
| Google Play rating shown in site schema | 4.6 from 70,000 ratings | `raw-app.js` `MobileApplication` JSON-LD |

### Legal entity — conflicting, do not assert a name

| Source | Legal name |
|---|---|
| Play Store + App Store developer field | Wishbanc Technologies Private Limited |
| `raw-home.html` Organization JSON-LD | Funngro Innovations Pvt Ltd |
| Rendered client Organization JSON-LD | Wishbanc Technologies Private Limited |

**Action:** refer to the company as "Funngro" and "Funngro's team". Do not print a legal entity name.

### Address (from Organization JSON-LD, both variants agree)

2105 Wing F, Fantacy Land, CTS No 1, Opp Majas Depot, Jogeshwari E, J V Link Road,
Mumbai, Maharashtra 400060, India. (Public contact-page data; safe to reuse.)

---

## 2. Youth flow (verified — this is the real flow, not the plan's default)

From `raw-app.js` `mA.en` (homepage "How it works", 3 steps):

1. **Download & sign up** — Get the Funngro app. OTP verification, two minutes. You're in.
2. **Pick a brand campaign** — Brand promotion, sampling, referrals, influencer briefs — from 5,000+ real brands.
3. **Get paid in UPI or bank** — Complete the campaign and receive instant payouts to UPI or bank transfer.

From `chunk-earn.js` (`/earn`, 5-step deep dive):

1. Download the app. Sign up with OTP, no investment needed.
2. Pick a brand campaign. Influencer opportunities, referrals, surveys, brand promotion, content tasks.
3. Complete your brand task and upload proof.
4. Get paid instantly via UPI.
5. Start small, build influence, earn bigger.

### Product mechanics named by Funngro (from `/faq`)

- **Toffee Projects** — quick tasks (surveys, games, app downloads), unlimited, fast approval.
- **Evaluation Projects** — unpaid practice tasks that raise Groscore and unlock paid work.
- **Company Projects** — paid brand work.
- **Groscore** — activity scoring from projects, referrals, daily login; higher score unlocks better projects.
- **Share & Earn (Earnify)** — share a project link; earn when someone completes it via your link.
- **Happy Hour** — 6–10 PM IST window when new projects and contests launch.
- **Clan / Clan Leader** — peer support, contests and updates.
- **Funngro Arcade**, **SheLancer** — separate product surfaces (own routes).

---

## 3. Categories

**Four kinds of work** (Funngro's own grouping, `raw-app.js` `kA.en.kinds`):

| # | Title | Description | Examples given |
|---|---|---|---|
| 01 | Content creation | Reels, posts, blogs, photos for real brand campaigns. "Your phone is the studio." | UGC reels for D2C, brand photos, blog posts, captioned static creatives |
| 02 | Brand promotion | Share, post, talk about brands you already follow. Paid for genuine recommendations. | Brand recall surveys, social posts, influencer briefs, ambassador campaigns |
| 03 | Referrals | Bring friends to brands they'll like. Earn when they sign up, transact or stay. | Fintech app invites, peer onboarding to D2C, Clan referrals |
| 04 | Micro tasks from brands | Sampling, surveys, app testing, product ideation. Small, fast, paid per task. | Try a product and review it, answer a survey, test an app, suggest improvements |

**Twelve work categories** (Play Store + App Store listing, `raw-playstore.html`):
Social Media Marketing · Video Editing & Creation · Website Designing · Influencer Marketing ·
Mobile App Development · Campus Ambassador · Research & Survey · Data Entry · Voice-Over ·
Content Writing · Graphic Designing · App Testing

**Twelve brand solutions** (`chunk-forbrands.js` / `rendered-for-brands.html`):
Brand promotion · Sampling campaigns · Referral programs · Influencer marketing · Content creation (UGC) ·
Brand surveys & insights · App testing & QA · Product ideation · Sales support & conversion ·
Loyalty & re-engagement · Campus ambassadors · Brand partnerships

---

## 4. Brand-side claims (all self-reported by Funngro)

| Claim | Value | Source |
|---|---|---|
| Funngro CPA | ₹38, "vs ₹95–150 industry" | `rendered-for-brands.html` |
| Completion rate | 68%, "vs 8–12% industry" | `rendered-for-brands.html` |
| Verified actions | 100% verified actions, no bot traffic | `rendered-for-brands.html` |
| Repeat | 3× repeat, same brand, 6 months | `rendered-for-brands.html` |
| Provenance of those numbers | "representative fintech brand campaign. Brand name available under NDA" | `rendered-for-brands.html` |
| CPA ranges | Promotion ₹30–80 · Referral ₹80–150 · UGC ₹150–500 per asset · Sampling ₹40–120 per pickup · Sales support 2–6% of sale | `/faq` |
| Meta comparison | ₹38 CPA vs Meta's ₹117; 2.5× ROI; 68% completion vs 8–12% industry | `/faq` |
| Pilot cost | "Typical pilot starts at ₹2–5 lakh" | `/faq` |
| Retainers | Three-campaign retainers available after the pilot | `/faq` |
| Onboarding | Book a 20-minute demo | `/faq` |
| Brand verticals | Fintech · D2C · Beauty · FMCG · Gaming · Edtech · Food & Bev · Commerce · Travel · Entertainment · Wellness · Lifestyle | `rendered-for-brands.html` |
| Brands named on site | ICICI, Paytm, Kotak, CarDekho, Toluna, Nielsen, Novio, Lifelong, LXME, Mpokket | `raw-app.js` `VA`/`WA` |

**Handling:** brand results are NDA-protected and single-campaign. Use them only with the
"NDA, representative fintech campaign" caveat, or omit. Do not use the competing revamp's
"500+ campaigns / 200+ partners / 94% completion" — not verified anywhere on funngro.com.

---

## 5. Navigation and routes

Confirmed in `sitemap.xml` (39 URLs) — all return HTTP 200:

`/` · `/earn` · `/for-brands` · `/stories` · `/stories/{sarthak, anshika, sayyam, soham, faraz, ashwani, shubham}` ·
`/arcade` · `/shelancer` · `/about` · `/blog` · `/blog/{superstars-2026, shark-tank-inside-story, earn-10k-playbook,
first-paycheck, state-of-genz-2026, 6-pillars, brand-promotion-101, cpa-cpi-cpm, content-that-earns,
verified-brands-online-earning, side-hustle-in-your-pocket, influencer-marketing-young-adults,
entrepreneur-mindset-start-a-business, how-to-become-an-influencer, online-earning-path-small-tasks,
content-creation-career, build-online-income-daily}` · `/trust` · `/faq` · `/contact` · `/press` ·
`/careers` · `/privacy-policy` · `/terms-and-conditions`

**Phase-1 correction to the plan:** `/teen` and `/brands` are **not** real routes.
`/teen` and `/brands` return 200 with the *homepage* `<title>` and an empty body —
they are client-side SPA catch-all responses, not distinct pages. There is no `/teen` page.
The youth page lives at `/` and `/earn`; the brand page is `/for-brands`.

Navbar labels (from `rendered-home.html`): Earn · Stories · For Brands · Arcade · SheLancer · About · Blog
Footer adds: Careers · Press · Trust & safety · FAQ · Contact · Privacy policy · Terms & conditions

---

## 6. Real audit findings for the report (evidence-backed)

1. **Raw HTML has no body content.** `raw-home.html` is 3,548 bytes, `<body>` contains only
   `<div id="root"></div>`. Zero text for a non-JS crawler. Rendered DOM is 125,734 bytes.
2. **No canonical in raw HTML.** Canonical only appears after JS runs
   (`rel="canonical" href="https://funngro.com/"` in `rendered-home.html`), and it points at the
   **non-www** host while the site is served at **www**.
3. **No meta description in raw HTML.** Only `og:description` / `twitter:description` ship server-side.
   The `<meta name="description">` is injected client-side.
4. **Duplicate, contradictory Organization JSON-LD.** Rendered DOM emits **three** Organization blocks:
   two with `legalName: "Wishbanc Technologies Private Limited"` and `url: https://www.funngro.com`,
   one server-side with `legalName: "Funngro Innovations Pvt Ltd"` and `url: https://funngro.com`.
5. **Duplicate WebSite JSON-LD** (2 blocks, same `name`, different `url`).
6. **`aggregateRating` mismatch.** Site schema claims 4.6 / 70,000 ratings; Play Store shows
   4.2 / 50.3K; App Store shows 3.4 / 872. Structured-data rating contradicts the stores.
7. **SPA soft-404 behaviour.** `/this-page-definitely-does-not-exist-9x2q` and `/zzz-not-real`
   both return **HTTP 200** with the homepage title. Every unknown URL is a 200. Google treats
   these as duplicate/soft-404 pages, wasting crawl budget.
8. **Mixed canonical host.** `https://funngro.com/` 302-redirects to `https://www.funngro.com/`.
   The canonical tag points at the redirecting host.
9. **`og:url` uses the non-www host** while sitemap uses `www` — inconsistent URL signal.
10. **Theme colour is `#0b0f0d`** — confirmed `raw-home.html`. Not navy.
11. **`lang="en-IN"`, `og:locale="en_IN"`** — both already correct.
12. **robots.txt is healthy**: `Allow: /`, blocks `/admin /auth /feedback /preview/ /api/`, declares the sitemap.
13. **Sitemap is healthy**: 39 URLs, valid `xmlns`, `lastmod` + `changefreq` + `priority` on every entry.
14. **Sitemap `/for-brands` but not `/brands`** — consistent with §5 finding that `/brands` is not a route.
15. **Bundle weight**: `index.js` 636 KB raw / **192 KB gzip**; CSS 87 KB raw. Single ~700 KB payload
    before any route chunk. Fonts self-hosted via `@fontsource` (good).
16. **HTTPS + HSTS correct**: `Strict-Transport-Security: max-age=31536000; includeSubDomains`.
17. **Images: 19 `<img>` on home, 0 missing `alt`** in the rendered DOM.
18. **FAQPage schema exists only on `/faq`**, and it is injected client-side (absent from raw HTML).
    `/faq` returns a 110 KB DOM.
19. **Site renders three languages** (English, Hindi, Hinglish) via a language switcher — relevant for
    `hreflang` if the revamp ever adds locales. Out of scope for a 2-page build.
20. **Footer states "★ 4.2"** matching Play Store, which contradicts the site's own 4.6 schema rating.

## 7. Not measured — requires test

- Lighthouse / PageSpeed scores for the current site. I have raw byte sizes and TTFB only.
  Run `npx lighthouse https://www.funngro.com/ --output=json --output-path=./audit-evidence/lh-mobile`
  and the same with `--preset=desktop`.
- Core Web Vitals field data (CrUX). No CrUX API access here.
- Backlink profile, keyword rankings, organic traffic. No tool access.
- Lighthouse accessibility / best-practices audits beyond the manual alt/heading checks above.
- Rendered behaviour on real mobile devices.

## 8. Claims to avoid entirely

- "500+ campaigns", "200+ partners", "94% completion" — from the competing revamp at
  `fungrow-teal.vercel.app`. Not present on funngro.com.
- "Up to ₹10,000/month" — appeared in one Play Store description only; the site says ₹4,100 average / ₹18,000 top 5%.
- "2,500+ brands" — Play Store mentions it, but homepage + App Store say 5,000+. Use 5,000+.
- "60 lakh+" — superseded by 70 lakh on the site.
- Any legal entity name (§1).
- Any testimonial framed as Funngro's own unless it comes from `/stories`. The site does have
  `/stories/<name>` pages for Sarthak, Anshika, Sayyam, Soham, Faraz, Ashwani and Shubham with
  quotes and earnings figures. Copying those quotes into an unofficial redesign would put words in a
  real person's mouth. Build a ladder section with no names instead.