# 23Labs Website Growth Audit — Part 1

Repository audit, design-safe foundation and measurement utilities for the
November 2026 growth/SEO workstream. No public-facing page content, layout,
or copy was changed in this part. Branch: `seo-growth-part1` (off `main` at
`5798475`, the current live production commit). Not pushed, not merged.

## A. Preflight inspection

### Framework and tooling

- **Next.js 16.2.9** (App Router), **React 19.2.4**, TypeScript, ESLint 9.
- Styling: a single plain-CSS token system in `app/globals.css` (`:root`
  custom properties). **Tailwind is installed (`^4`) but not used anywhere**
  — no `@tailwind` directives, no utility classes in any component. Leave it
  alone; it is not load-bearing.
- No test runner (no Jest/Vitest/Playwright-test config). The established
  "test" pattern in this repo is standalone Playwright scripts under
  `scripts/qa-*.mjs`, run manually (`npm run qa:screenshots` is the only one
  wired to `package.json`; the rest are run with `node scripts/<name>.mjs`
  against a running `next start`). I followed this convention rather than
  introducing Jest/Vitest.
- Deployment: Vercel, connected to this GitHub repo's `main` branch via
  Vercel's dashboard GitHub integration (no `vercel.json`, no `.vercel/`
  folder in the repo — confirmed in an earlier session). Pushing to `main`
  triggers a production deploy. **This part does not push to `main`.**
- Git state at start: clean, `main` up to date with `origin/main`, HEAD at
  `5798475` ("Add ABN to footer" — the ABN footer change requested and
  deployed in the immediately prior session). No uncommitted changes existed
  before this part began.

### Route inventory (92 routes at build time, unchanged by this part)

See **Section C** for the full table. Summary: homepage, `/about`,
`/contact`, `/work` (+ 4 case studies), `/blog` (+ 39 posts), `/services`
hub (+ 6 service pages), `/industries` hub (+ 7 industry pages),
`/solutions` hub (+ 9 solution pages, 7 "operations" + 2 "governance" — the
"two AI solution pages" are almost certainly `ai-governance` and
`automated-decisions-privacy`), `/locations` hub (+ 8 location pages),
`/new-zealand`, `/security`, `/privacy-policy`, plus `sitemap.xml`,
`robots.txt`, `/og` (dynamic OG image route), `/llms.txt` and
`/llms-full.txt` (LLM-crawler-specific content routes — an existing,
somewhat unusual asset worth knowing about for an SEO/visibility workstream).

**Route-mismatch candidates named in the brief — checked, not present.**
Searched the full repo for `business-automation`, `full-stack-software-development`
and `systems-integrations` (the possible duplicates of
`business-process-automation`, `custom-software-development` and
`system-integrations`). None exist anywhere in the codebase — only the
canonical slugs do. No redirect or cleanup is needed; this was a
precautionary check in the brief, not an actual finding.

### SEO/metadata infrastructure — already mature, not duplicated

- `lib/seo.ts`'s `createMetadata()` is a single, comprehensive utility
  already used by **every** page: title (with brand-suffix handling),
  description, keywords, canonical URL, Open Graph (including a
  **dynamically generated branded OG card** per page via `app/og/route.tsx`,
  keyed by title + section eyebrow), and Twitter card. This already fully
  covers the brief's "proposed title/meta description" mechanism — no gap to
  fill. I did **not** rebuild this; see Section B for the one small,
  additive change I made to it.
- `lib/schema.ts` already provides `organizationJsonLd()`, `websiteJsonLd()`
  (both rendered globally in `app/layout.tsx`), `breadcrumbList()` (used
  throughout blog/case-study/service pages), `articleJsonLd()`,
  `serviceJsonLd()` and `faqPageJsonLd()`. This already satisfies the
  brief's "BreadcrumbList where useful; Organization only where appropriate"
  schema guidance — again, no gap.
- `app/sitemap.ts` and `app/robots.ts` are both dynamic (`MetadataRoute`),
  not static files. `sitemap.ts` builds from an **explicit, hand-maintained
  `staticPaths` array** plus data-driven blog/case-study routes (which
  already respect blog's `draft` frontmatter flag). This matters for
  Section B.5 below.

### Analytics — GA4 is already live in production, not just scaffolded

This is the most important finding in this audit and is worth flagging
clearly: **`components/site/GoogleAnalytics.tsx` is already rendered
unconditionally in `app/layout.tsx` on every page**, loading the real
`gtag.js` script and calling `gtag('config', ...)` with a **hardcoded
production measurement ID, `G-WW10V0N5G6`**, used as the default whenever
`NEXT_PUBLIC_GA_ID` isn't set (`lib/analytics.ts`). In other words: **GA4
pageview tracking is live on the production site right now**, not something
this workstream needs to switch on.

What is *not* wired up: `lib/analytics.ts` already defines a safe
`trackEvent()` helper (SSR-safe no-op, lazily creates `gtag`/`dataLayer` so
it never throws) plus two existing convenience wrappers,
`trackGenerateLead()` and `trackEmailClick()` — but **neither of those two,
nor `trackEvent` itself, is called from anywhere in the codebase.** So:
pageviews are tracked; zero custom events are. No UTM parameter capture
exists anywhere in the repo, and no CRM source-capture was found.

I have **not verified GA4 is actually receiving these hits** (no live
GA4/GTM dashboard access from this session) — per the operating rules, I am
not claiming this is "transmitting to GA4" beyond what the code
unambiguously does (load the script, call `gtag('config', ...)`). Confirming
real-time hits in the GA4 property is the one thing outside this session's
visibility that's worth a human checking before Part 2 adds more events.

**Search Console**: no verification `<meta>` tag found in the codebase. This
doesn't mean the property isn't verified — DNS TXT record verification
wouldn't show up in the repo at all — but I can't confirm it from here, and
per the operating rules I have not added a placeholder verification tag.
Flag for the owner to confirm.

### Accessibility and responsive baseline

- Skip link present (`app/layout.tsx`, `.skip-link`), `:focus-visible`
  outline styles defined globally, `lang="en"` on `<html>` (not `en-AU`,
  though the rest of the metadata — JSON-LD `inLanguage`, date formatting —
  consistently uses `en-AU`; a minor, pre-existing inconsistency, not
  changed here as it's a one-line global change outside this part's scope).
- Zero raw `<img>` tags anywhere in `components/` — every image goes through
  `next/image` with `alt` text, consistently.
- Responsive breakpoint set is consistent sitewide: 420/430/560/640/680/
  760/900/1080px, plus a `(hover: hover)` media feature used to gate
  hover-only interactions (avoids sticky-hover on touch devices — an
  existing accessibility-conscious pattern, already good practice).
- One `<h1>` per page confirmed by spot-check (homepage hero, service pages,
  blog posts, case studies all render exactly one `<h1>`).
- Current homepage H1 is **"Custom software and automation for businesses
  that have outgrown manual work"** (`components/sections/HomeHero.tsx`).
  The brief specifies a later, different H1 ("We solve business problems
  with technology") for a future part — **not changed in this part**,
  recorded here only as the baseline for whoever does that change.

### Existing component architecture relevant to Section B

Before building anything, I checked what already exists against the brief's
"only when not already present" list:

| Requested component | Status |
|---|---|
| Primary/secondary CTA pair | **Missing** — `components/ui/ButtonLink.tsx` is a single-button component; every page that needs two CTAs hand-assembles them inline (e.g. `.hero-cta-row` in `HomeHero.tsx`). Built `CtaPair` (see below). |
| Approved-proof project card | **Already present**, in three forms: `components/work/CaseStudyCard.tsx`, `components/work/WorkShowcase.tsx` (both used on `/work`), and `components/work/RelatedSuccessStories.tsx` (built last session, used on case-study detail pages). Did not duplicate. |
| Compact process-flow illustration | **Already present**: `components/sections/ProcessSection.tsx` — numbered (`01—`, `02—`...), connected-grid, used across services/solutions/industries/`/about`. Did not duplicate. |
| Related-pages section | **Partially present** — `RelatedArticles` (blog-specific) and `RelatedSuccessStories` (case-study-specific) exist, but nothing generic for cross-linking services/industries/solutions. `ServiceLandingPage.tsx` already has a "You might also need" pattern (`.related-links` CSS, with an existing odd-item-count fix from last session) but it's inlined into that one component, not reusable. Built `RelatedPages` (see below), generalising that exact markup/CSS. |

## B. Shared groundwork implemented

All of the below are **new files or additive changes to existing utilities
— nothing is imported or rendered by any page yet.** This matches the
brief's "do not render these new components on public pages yet."

1. **`lib/seo.ts`** — added one optional field, `noindex?: boolean`, to
   `createMetadata()`'s input. When `true`, adds
   `robots: { index: false, follow: false }` to the returned `Metadata`.
   Default behaviour (the vast majority of calls, which don't pass it) is
   byte-identical to before — verified by test (see below). This is the
   release-gating mechanism for Section B.5: a future draft page can opt
   into `noindex` while still being reachable for internal review, without
   touching `app/sitemap.ts` or `robots.ts`.

2. **Route reference map — deliberately not added.** The brief asks for
   this "if it demonstrably reduces broken links, without a broad
   architecture change." I did not find any broken or duplicate links in
   this audit (see the route-mismatch check above — the feared duplicates
   don't exist). The existing per-domain pattern (`lib/services.ts`,
   `lib/industries.ts`, `lib/locations.ts`, `lib/solutions.ts`,
   `lib/caseStudies.ts` each own their own typed `slug`/`href`/`path` and
   are consumed via helper functions, not duplicated hardcoded strings) is
   already a distributed but typed source of truth. A new centralised map
   alongside these would itself be a second source of truth that could
   drift out of sync — a real risk, not a theoretical one. Recommendation:
   don't build one unless Part 2+ actually surfaces a broken-link problem
   this wouldn't catch.

3. **`components/ui/CtaPair.tsx`** (new) — a primary/secondary CTA row.
   Deliberately reuses the existing `.hero-actions` CSS class (already
   proven across case-study/service/solution CTA bands, including its
   mobile stacking rule at 680px) rather than inventing new styling.

4. **`components/sections/RelatedPages.tsx`** (new) — a generic
   "related pages" section for any domain (services/industries/solutions).
   Reuses `ServiceLandingPage.tsx`'s exact existing `.related-links` markup
   and CSS classes (connected-grid cards, including last session's
   odd-item-count full-row-span fix), generalised to accept a plain
   `{href, title, description}[]` so any page's own data can be mapped into
   it without the component needing to know about services/industries/
   solutions specifically.

5. **`lib/analytics.ts`** — added five named wrapper functions:
   `trackCtaClick`, `trackFormStart`, `trackLeadSubmit`,
   `trackBookingComplete`, `trackCaseStudyClick`. Each is a thin wrapper
   around the **existing** `trackEvent()` (same pattern as the existing
   `trackGenerateLead`/`trackEmailClick`), so they inherit its SSR/no-gtag
   no-op safety — no new tracking mechanism, no new dependency. **None of
   these are called from any component yet** — wiring `trackCtaClick` into
   the real nav CTA, `trackBookingComplete` into `CalendlyWidget.tsx`'s
   existing `postMessage` listener (which already detects
   `calendly.*` events generically — the right hook point for later, not
   touched here), etc. is follow-up work for a part that's allowed to touch
   those files.

6. **Release-gating approach** — documented, not built as new
   infrastructure. The existing architecture already gates discovery for
   whole new pages: `app/sitemap.ts`'s `staticPaths` is hand-maintained
   (a new route doesn't appear until explicitly added), and nav/footer
   links are similarly explicit lists (`lib/data.ts`'s `navItems`,
   `components/site/Footer.tsx`'s link arrays). A new page can exist in the
   repo, build, and be directly reachable by URL without appearing in nav,
   footer or sitemap. The new `noindex` option (#1 above) adds a safety net
   on top of that for the case where a draft URL leaks before approval.
   Recommend this combination (omit from sitemap/nav + `noindex: true`) as
   the gating approach for any draft page Part 2+ introduces, rather than
   building a feature-flag system that doesn't otherwise exist here.

7. **Focused tests** — `scripts/test-lib-utils.mjs` (+ a small
   `scripts/at-alias-loader.mjs` helper resolving the `@/` path alias from
   `tsconfig.json` so the test can import `lib/` files directly via Node's
   `--experimental-strip-types`, without a bundler). Covers: `createMetadata`
   default behaviour is unchanged, `noindex: true` sets the expected
   `robots` field, canonical URL construction, and all 5 new + 1 existing
   analytics functions no-op without throwing under SSR (`window`
   undefined). Wired up as `npm run test:lib`. This is deliberately small —
   matching "do not create a large new testing stack" — and does not cover
   the UI components (`CtaPair`/`RelatedPages`), which have no behaviour to
   unit-test beyond what TypeScript's own type-checking already verifies
   (they're not rendered anywhere yet to screenshot-test).

## C. URL and source-of-truth table

| Route | Canonical | Phase | Status |
|---|---|---|---|
| `/` | `/` | Live | Confirmed |
| `/about` | `/about` | Live | Confirmed |
| `/contact` | `/contact` | Live | Confirmed (Calendly-only; no separate HTML contact form exists — see note below) |
| `/work` | `/work` | Live | Confirmed |
| `/case-studies/{4 slugs}` | as-is | Live | Confirmed |
| `/blog` | `/blog` | Live | Confirmed |
| `/blog/{39 slugs}` | as-is | Live | Confirmed |
| `/services` | `/services` | Live | Confirmed |
| `/services/business-process-automation` | as-is | Live | Confirmed |
| `/services/ai-workflow-automation` | as-is | Live | Confirmed |
| `/services/custom-software-development` | as-is | Live | Confirmed |
| `/services/ai-agents` | as-is | Live | Confirmed |
| `/services/system-integrations` | as-is | Live | Confirmed |
| `/services/ongoing-support` | as-is | Live | Confirmed |
| `/services/business-automation` | — | — | **Not present** (feared duplicate — doesn't exist) |
| `/services/full-stack-software-development` | — | — | **Not present** (feared duplicate — doesn't exist) |
| `/services/systems-integrations` | — | — | **Not present** (feared duplicate — doesn't exist) |
| `/industries` | `/industries` | Live | Confirmed |
| `/freight-logistics`, `/recruitment`, `/professional-services`, `/construction`, `/allied-health`, `/real-estate`, `/trades-field-services` | as-is | Live | Confirmed (7 industry pages; note these are **not** under `/industries/`, they're top-level — pre-existing, not a bug) |
| `/solutions` | `/solutions` | Live | Confirmed |
| `/solutions/{9 slugs}` | as-is | Live | Confirmed (7 "operations" + 2 "governance": `ai-governance`, `automated-decisions-privacy`) |
| `/locations` | `/locations` | Live | Confirmed |
| `/locations/{8 slugs}` | as-is | Live | Confirmed |
| `/new-zealand` | `/new-zealand` | Live | Confirmed |
| `/security` | `/security` | Live | Confirmed |
| `/privacy-policy` | `/privacy-policy` | Live | Confirmed |
| `/sitemap.xml`, `/robots.txt` | n/a | Live | Confirmed, dynamic |
| `/og` | n/a | Live | Confirmed, dynamic per-page OG image |
| `/llms.txt`, `/llms-full.txt` | n/a | Live | Confirmed, dynamic |

No "new draft" rows — this part did not create any new page.

## D. Existing functionality — protection checks performed

All verified against a real `next build && next start` on this branch:

- **Nav dropdowns**: Services and Industries mega-menus tested with a
  simulated mouse path (trigger → gap → panel → link, then move-away) —
  open, stay open through transit, and close correctly. Unchanged.
- **Contact delivery**: confirmed the contact page has never had a separate
  HTML form — the entire contact flow is the Calendly inline widget
  (`components/contact/CalendlyWidget.tsx` → `components/contact/BookingSection.tsx`).
  Verified the Calendly iframe still loads with the correct embed URL
  (`https://calendly.com/23labs/30min`). Not a regression; this is the
  site's actual, pre-existing architecture.
- **Blog and case studies**: spot-checked rendering of one blog post and
  one case study — correct content, correct canonical URL.
- **Footer / ABN**: confirmed `ABN: 61 703 704 992` renders in the footer
  and matches what was deployed to production in the immediately prior
  session — **not changed, not different**, so nothing to flag per the "if
  the existing footer ABN differs, flag it" instruction.
- **Build**: all 92 routes still compile and statically generate; identical
  route count to the pre-existing production build — confirms no
  unintended route changes.

## Build / lint / typecheck / test results

- `npx tsc --noEmit` — clean.
- `npm run lint` (ESLint) — clean.
- `npm run build` — clean, 92/92 routes generated, no warnings beyond
  Next's normal build output.
- `npm run test:lib` (new) — 9/9 focused checks pass.

No pre-existing failures were found to distinguish from new ones — the
baseline was clean before this part, and remains clean after it.

## Unverified claims / things to confirm before Part 2

- **GA4 is confirmed live in code** (real measurement ID, loads on every
  page) but **not confirmed receiving data** in the actual GA4 property —
  worth a quick dashboard check.
- **Search Console verification status is unknown** from the repo alone.
- The two "two AI solution pages" referenced in the brief are inferred
  (`ai-governance`, `automated-decisions-privacy`) from category data, not
  explicitly labelled as such anywhere — worth the owner confirming this is
  what was meant before Part 2 does anything specific to "the two AI
  solution pages."
- `DESIGN_SYSTEM.md` (repo root) is accurate but slightly stale — it
  predates the connected-grid fixes, numbered-label standardisation, blog/
  case-study header redesign, stats-section removal and ABN footer addition
  from the immediately prior session. Not rewritten here (out of scope for
  this part; it's documentation, not a utility), but Part 2+ should treat
  `app/globals.css` itself as the source of truth where the two disagree.

## Go/no-go recommendation for Part 2

**Go.** No blockers found. The codebase's existing SEO/schema/analytics
foundation is more mature than the brief assumed in places (metadata
utility, JSON-LD, GA4 pageview tracking all already exist and work) — which
is good news, not a problem: it means Part 2 can focus on actually using
these event helpers and landing-page conventions against specific pages,
rather than building more infrastructure. The one thing worth resolving
before Part 2 touches real page content is confirming GA4 is actually
receiving hits and whether Search Console is verified, since both are
outside what this session can check directly.

## Files changed in this part

- `lib/seo.ts` — added `noindex` option to `createMetadata()`.
- `lib/analytics.ts` — added 5 new tracking wrapper functions.
- `components/ui/CtaPair.tsx` — new, not yet used anywhere.
- `components/sections/RelatedPages.tsx` — new, not yet used anywhere.
- `scripts/test-lib-utils.mjs`, `scripts/at-alias-loader.mjs` — new focused
  tests for the two lib/ changes above.
- `package.json` — added `test:lib` script.
- `docs/WEBSITE_GROWTH_AUDIT.md` — this document.

No public-facing page, layout, blog file, or existing component's rendered
output was changed.
