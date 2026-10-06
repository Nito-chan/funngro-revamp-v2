# FINAL live recheck — all PASS

Fetched 2026-10-06 ~22:20 UTC with `?cb=` cache-bust + `Cache-Control: no-cache`.
Raw bodies saved in this folder (`live-v1-home.html`, `live-v1-brands.html`,
`live-v2-home.html`, `live-v2-brands.html`). Note: edge replies carry
`x-vercel-cache: HIT`; bodies were confirmed to contain the fixed code, so the
cache is deployment-current, not stale.

| Page | # | Expected | Actual (live) | Result |
|---|---|---|---|---|
| v1 `/` | 1 canonical | `https://funngro-revamp-nito.vercel.app` | exact | PASS |
| v1 `/` | 2 og:url | same | same | PASS |
| v1 `/brands` | 3 JSON-LD urls | live origin | `…-nito.vercel.app` only | PASS |
| v1 both | 4 robots | `noindex, follow` | `noindex, follow` | PASS |
| v1 `/` | 5 twitter:card | `summary_large_image` | `summary_large_image` | PASS |
| v1 `/` | 6 og:image | 200 image/* | 200 `image/png` | PASS |
| v1 both | 7 titles | exact, ≤60 | 56/50 chars decoded, no suffix | PASS |
| v1 `/` | 8 desc | consistent, ≤155 | meta==og, 131 chars | PASS |
| v1 `/` | 9 referral | "Five rupees…" | "Five rupees, then five percent" | PASS |
| v1+v2 `/` | 10 growth | FACTS-sourced if present | "40,000" present; FACTS row cites `rendered-home.html` | PASS |
| v1+v2 `/` | 11 YouTube pitch | absent | absent | PASS |
| v1 `/brands` | 12 demo panel | no ₹38 | hits only in outcomes/FAQ/JSON-LD; pilot panel clean | PASS |
| v2 `/` | 13 ticker cities | absent | all 8 absent | PASS |
| v1+v2 `/` | 14 FAQ raw HTML | all 9 answers | all 9 present (both) | PASS |
| v2 `/brands` | 14 FAQ raw HTML | all 7 answers | all 7 present | PASS |
| v1 | 15 sitemap/robots | empty, host-correct | empty urlset; robots ✓ | PASS |
| v2 | 15 sitemap/robots | 2 locs, host-correct | 2 locs; robots ✓ | PASS |
| v1+v2 | 16 unknown path | 404 | 404 both | PASS |
| v2 `/brands` | 17 rights/meta wording | verified-or-removed | rights kept (FACTS); lead softened, old gloss absent | PASS |
| v2 both | 1–8 | same battery | canonical/og/JSON-LD/robots/twcard/titles/descs correct | PASS |

Caveat: the probe phrase "secure encryption" is absent on both sites — that
wording belongs to funngro.com's own FAQ, not the revamp's 9 answers (all of
which verify present). Not a failure.
