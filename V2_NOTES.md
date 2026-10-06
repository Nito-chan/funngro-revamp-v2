# Funngro Revamp v2 — Notes

V1 path (read-only source of truth): `C:\Users\tanji\Opencode\funngro-revamp`
V2 path: `C:\Users\tanji\Opencode\funngro-revamp-version-2`
Run: `npm install && npm run dev` (or `npm run build && npm start`).

Structural deviation from the master prompt: v1 has no `src/` directory —
it uses root-level `app/`, `components/`, `data/`. V2 mirrors that real
structure instead of inventing `src/`, so file-to-file comparison stays trivial.

## What stayed identical (parity)

- `data/brandsData.ts`, `data/site.ts`, `data/youthData.ts` — copied
  byte-for-byte (SHA256 pairwise equal: `E130758B…`, `17EB1799…`, `68B634B9…`).
- Page `<title>`, meta descriptions, canonicals (`/` and `/brands`), Open
  Graph + Twitter tags, `lang="en-IN"`, robots meta, keyword list.
- JSON-LD: same Organization + WebSite graph in layout, same FAQPage (built
  from the same `faqs` arrays) and BreadcrumbList per page.
- `sitemap.xml` (2 routes) and `robots.txt` — same logic, same output shape.
- One H1 per page with identical text; H2 texts identical and in the same
  order (verified from served HTML, see parity table below).
- All visible copy: headlines, stats, categories, steps, FAQs, CTAs, footer
  columns/links, address, disclaimers, "Illustrative demo data" labels,
  referral Earnify note, trust attribution note, deep-dive link.
- Tech stack: Next.js 16.3.8 App Router + TypeScript + Tailwind v4 +
  `motion@14` + `lucide-react`, fully static (SSG).

## What changed (design)

Tokens (`app/globals.css`, Tailwind v4 `@theme`):
light warm paper `#FAF7F2`, card `#FFFFFF`, cream `#F1ECE3`, ink `#14121F`,
muted `#5E5A6B`, primary indigo `#4F46E5`, coral `#FF6B4A`, sun `#FFD84D`,
leaf `#0B7A45`. Dark mode via `prefers-color-scheme` on the same token names
(deep indigo-black paper, same accents).

Fonts (via `next/font`, self-hosted): Bricolage Grotesque (display) + DM Sans
(body). V1 uses Space Grotesk + Inter.

Signature motifs: hand-drawn coral squiggle underline, rotated sticker
badges, tilted layered card stacks, dotted stepper path, dark ladder band
with animated progress bars, giant ghost wordmark footer.

## 5 biggest design differences vs v1

1. Light warm editorial paper theme instead of dark green/black.
2. Floating centered pill nav with sheet menu instead of a full-width bar.
3. Split editorial heroes with tilted sticker card stacks instead of
   dashboard hero + stats grid.
4. Bento grids (mixed tile spans) for Why/Solutions/Work instead of uniform
   card grids; How-it-works is a snap-scroll stepped path (brands: dotted
   timeline); stats are a large-number strip.
5. Income ladder is a dark contrast band with animated CSS progress bars;
   footer is a ghost-wordmark + 3-column layout; FAQ is a plus/minus
   accordion and CTA is a sunny sticker panel.

## Contrast check (WCAG AA, light theme)

- Ink `#14121F` on paper `#FAF7F2`: ~15:1 — pass.
- Muted `#5E5A6B` on paper: ~6:1 — pass. Faint `#6B6577`: ~4.9:1 — pass.
- White on primary `#4F46E5`: ~7:1 — pass. Ink on coral `#FF6B4A`: ~6.7:1
  — pass (never white-on-coral). Ink on sun `#FFD84D`: ~12:1 — pass.
- Success body text uses deep leaf `#0B7A45` (~5.9:1 on paper) — pass.
- Dark theme: ink `#F5F2FF` on `#131022` ~15:1; muted `#B7B1C9` ~7:1 — pass.

## SEO parity table (served HTML, `NEXT_PUBLIC_SITE_URL` unset → fallback origin)

| Item | v1 | v2 | Match |
|---|---|---|---|
| `/` title | Funngro for Youth … Top Brands | same | yes |
| `/` description | Complete real brand campaigns … Unofficial redesign concept. | same | yes |
| `/` canonical | origin `/` | origin `/` | yes |
| `/` H1 | Your skills deserve more than likes. | same | yes |
| `/` H2 list (10 + 3 footer) | verified order | identical order | yes |
| `/brands` title | Funngro for Brands … Young Consumers | same | yes |
| `/brands` description | Run authentic youth campaigns … 70 lakh young earners. | same | yes |
| `/brands` canonical | origin `/brands` | origin `/brands` | yes |
| `/brands` H1 | Reach young India through campaigns powered by real people. | same | yes |
| `/brands` H2 list (8 + 3 footer) | verified order | identical order | yes |
| JSON-LD home | Org+WebSite, FAQPage, BreadcrumbList (3 scripts) | 3 scripts, same shapes | yes |
| sitemap.xml | 2 routes | 2 routes | yes |
| robots.txt | allow `/` + sitemap | same | yes |
| single header/footer/nav toggle | yes | yes (route-aware pill nav) | yes |

## Audit / measurements

- `npm run build`: passes, routes `/`, `/brands`, `/robots.txt`,
  `/sitemap.xml` all static.
- Lighthouse mobile/desktop, axe, broken-link crawl: **Not measured —
  requires test** (no Chrome/Playwright available in this environment).
- Screenshots (`reference-v1/`, side-by-side compare): **Not measured —
  requires test** (no browser tooling available). Folder exists as placeholder.
- Content parity method: same data files (hash-equal) + H1/H2 extraction
  from served HTML compared in order; body copy renders exclusively from
  those data files.

## Deploy (when approved)

New Vercel project from `funngro-revamp-version-2` (do NOT reuse the v1
project/URL). Set `NEXT_PUBLIC_SITE_URL` to the new URL. No push yet —
local git repo only, per instructions.
