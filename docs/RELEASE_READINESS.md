# Release Readiness — Growth/SEO Workstream (Parts 1-7)

This document covers the complete 7-part growth/SEO workstream: repo audit
and foundation, homepage/nav/core pages, industry landing pages, case
studies and trust pages, location pages and legacy redirects, and five new
commercial growth pages plus a working calculator. **Nothing in this
workstream has been deployed, merged to `main`, or pushed to origin.**
Completing the code is explicitly not authorisation to publish — this
document is the handoff for a human decision on what to approve.

## Branches

Each part is its own branch, stacked sequentially off the previous one, all
off `main` (the live production branch, untouched):

```
main
 └─ seo-growth-part1   (audit, SEO/analytics foundation)
     └─ seo-growth-part2   (homepage, nav/footer, About, Contact, hub pages)
         └─ seo-growth-part4   (industry pages — Part 3 was not requested)
             └─ seo-growth-part5   (case studies, security, privacy audit)
                 └─ seo-growth-part6   (location pages, legacy redirects)
                     └─ seo-growth-part7   (growth pages, calculator, this doc)
```

`seo-growth-part7` is the current tip and contains everything. To review
the whole workstream as one diff: `git diff main seo-growth-part7`.

## 1. Page-by-page status

### Core pages (Part 2)

| Page | Status | Notes |
|---|---|---|
| `/` | **Live, updated** | New exact H1/copy, problems section, priority-industries section, proof strip. No fabricated logos/testimonials (none exist). |
| `/about` | **Live, updated** | New H1, added real internal links. |
| `/contact` | **Live, updated** | New H1/copy. **No new form was built** — see "Open questions" below. |
| `/services` (hub) | **Live, updated** | New H1. |
| `/industries` (hub) | **Live, updated** | New H1, priority sectors reordered for display only. |
| `/work` (hub) | **Live, updated** | New H1. |

### Industry pages (Part 4)

| Page | Status | Notes |
|---|---|---|
| `/freight-logistics`, `/recruitment`, `/professional-services`, `/construction`, `/allied-health`, `/real-estate`, `/trades-field-services` | **Live, updated** | Exact H1s, workflow diagrams added/wired up, CTA labels fixed, one overclaiming fix (ServiceM8 wording softened). |
| `/manufacturing` | **Gated draft** | Full content built, real working page if visited directly. `noindex`, not in nav/footer/sitemap. **Missing for approval**: any real client evidence in this sector (none exists); explicit business sign-off that the positioning is accurate. |
| `/property-maintenance` | **Gated draft** | Same status as Manufacturing. **Missing for approval**: same — no real client evidence in this sector yet. |

### Case studies and trust pages (Part 5)

| Page | Status | Notes |
|---|---|---|
| `/case-studies/huntress-recruitment`, `/corit-tech`, `/real-estate-workflow-automation`, `/lily-olsen-counselling` | **Live, updated** | Workflow diagrams added, CTA relabelled, industry cross-links added. "First National Real Estate" investigated — doesn't exist, no duplicate, no action needed (a redirect from that exact path to the real case study already existed in `next.config.ts` before this workstream). |
| `/security` | **Unchanged** | Already comprehensive; only added *inbound* links to it from AI Agents/Allied Health FAQs and Contact. ISO 27001/SOC 2 "not certified" disclaimer preserved as-is. |
| `/privacy-policy` | **Unchanged** | Zero edits — it's a legal document. **See `docs/PRIVACY_POLICY_AMENDMENTS.md`**: found the page describes a contact form (Resend, honeypot spam field, IP rate limiting) that doesn't exist anywhere in the codebase. Needs owner/legal decision. |

### Location pages (Part 6)

| Page | Status | Notes |
|---|---|---|
| `/locations/melbourne` | **Live, updated** | Priority 1. Fixed a city-swap H1 template that predated this workstream. |
| `/new-zealand` | **Live, updated** | Priority 2. H1 corrected; content was already strong. |
| `/locations/sydney`, `/brisbane`, `/adelaide`, `/perth`, `/auckland`, `/wellington`, `/christchurch` | **Live, updated** | All 7 given genuinely distinct H1s/content (see `docs/LOCATION_PAGES_INDEXATION.md` for the full before/after and keep/indexable rationale per page). No fabricated local offices or clients. |

### New growth pages (Part 7)

| Page | Status | Notes |
|---|---|---|
| `/pricing` | **Gated draft** | Reuses the one already-approved pricing figure (`lib/industryPricing.ts`, already live sitewide). No retainer/package pricing added — none approved. |
| `/workflow-review` | **Gated draft** | No new form/backend built — reuses the existing Calendly widget, since that's the only real enquiry mechanism in this codebase. |
| `/partners` | **Gated draft** | No partner logos, commission rates or certifications named — none exist/approved. |
| `/technologies` | **Gated draft** | Bullhorn/SEEK named as real (Huntress case study); Xero/MYOB/Simpro/ServiceM8/CartonCloud/Transvirtual/Cliniko explicitly labelled "platforms we can assess," not proven integrations. |
| `/tools/automation-savings-calculator` | **Gated draft, fully functional** | Real interactive calculator, not a mock. Formulas unit-tested (9/9 pass, `npm run test:calculator`). Gating affects only discoverability, not functionality. |

All five Part 7 pages, plus Manufacturing and Property Maintenance from
Part 4 — **seven pages total** — are built, tested and reachable only by
direct URL: `noindex` meta set, not in `lib/data.ts`'s `navItems`, not in
any footer link list, not in `app/sitemap.ts`'s `staticPaths`. Confirmed
via build output and a live sitemap/nav check that none of the seven
appear anywhere discoverable.

### Legacy service URL redirects (Part 6)

All three redirect pairs asked about, plus seven more, already existed in
`next.config.ts` before this workstream (confirmed, not built new). Audited
via `scripts/test-redirects.mjs` (`npm run test:redirects`): 44/44 checks
pass — every redirect is a single permanent 301/308, no chains, no loops,
query strings preserved.

## 2. What was NOT touched (by design)

- Every blog article, the blog index, blog preview rendering, blog routing.
- `/privacy-policy`'s actual legal text.
- `/security`'s existing content (only new inbound links added).
- The shared `FinalCta` component's copy (renders on blog posts too —
  out of scope).
- `app/sitemap.ts`'s `staticPaths`, `lib/data.ts`'s `navItems`, and every
  footer link list — none of the 7 gated pages were added to any of these.
- DNS, hosting config, environment variables, dependencies (no new
  packages added anywhere in this workstream).

## 3. Validations run (this part; each prior part ran the same set and passed)

```
npx tsc --noEmit        clean
npm run lint             clean
npm run build            99/99 routes generated, 0 errors
npm run test:lib          9/9 pass   (createMetadata noindex gating, analytics SSR safety)
npm run test:redirects   44/44 pass  (no chains/loops, query strings preserved)
npm run test:calculator   9/9 pass   (calculator formulas, clamping, currency formatting)
```

Sitewide spot-check (Playwright, against `next start`, this part): 45
representative routes across every page group — all 200, all exactly one
`<h1>`, all unique canonical URLs, zero broken internal links found on the
5 new pages, zero missing `alt` text, zero mobile horizontal overflow at
375px. Nav dropdowns, the Calendly booking widget, and blog rendering
re-verified unaffected at the end of every part, including this one.

**Not run, and explicitly flagged rather than guessed**: Lighthouse/
PageSpeed scores (no credentials/production environment available to this
session to produce a number worth trusting), Search Console or analytics
traffic data (same reason), and live confirmation that GA4 is receiving
events in the real property (code-level confirmation only — see below).

## 4. GA4 / analytics summary (Section F.7)

Events defined in `lib/analytics.ts`, all thin wrappers around the
pre-existing `trackEvent()` (SSR-safe, no-ops without `gtag`):

| Event name | Wired into | Added in |
|---|---|---|
| `generate_lead`, `email_click` | Pre-existing, unchanged | Before this workstream |
| `cta_click` | Homepage hero CTAs, both nav CTAs | Part 1 (defined) / Part 2 (wired) |
| `booking_complete` | `CalendlyWidget`'s real `calendly.event_scheduled` listener | Part 1 (defined) / Part 2 (wired) |
| `form_start`, `lead_submit` | Defined, not wired — no form exists to wire them to | Part 1 |
| `case_study_click` | Defined, not wired | Part 1 |
| `calculator_interaction`, `calculator_enquiry` | The new calculator's scenario buttons / blur events, and its "Discuss this with 23Labs" CTA | Part 7 |

GA4 pageview tracking is confirmed live in code (real measurement ID,
loads on every page, pre-existing). **Not independently confirmed**: that
any of these events are actually arriving in the GA4 property, since this
session has no dashboard access. CRM lead attribution (HubSpot/Instantly,
named in the privacy policy) has no corresponding code anywhere in this
repository to verify either way — see
`docs/PRIVACY_POLICY_AMENDMENTS.md` item 2.

## 5. Business approvals still needed before anything in this workstream goes live

1. **Contact form / privacy policy discrepancy** (highest priority,
   `docs/PRIVACY_POLICY_AMENDMENTS.md`) — decide whether the privacy
   policy's contact-form description is outdated (and should be corrected
   to describe the current Calendly-only flow) or whether a real form is
   intended to be built. Either way, Calendly should be named as a data
   processor somewhere in the policy.
2. **Manufacturing and Property Maintenance** (`/manufacturing`,
   `/property-maintenance`) — sign off on publishing without a sector-
   specific case study, or wait until one exists.
3. **The five Part 7 growth pages** — review content and explicitly
   approve before removing their `noindex`/adding them to nav, footer and
   sitemap. None contain fabricated facts, but none have been seen by a
   human yet either.
4. **Location pages** (`docs/LOCATION_PAGES_INDEXATION.md`) — the
   satellite AU/NZ city pages (everywhere except Melbourne/NZ hub/
   Auckland) have no city-specific proof. Recommended: connect Search
   Console before deciding whether to keep them as standalone pages or
   merge into `/locations`.
5. **DESIGN_SYSTEM.md** (flagged in Part 1) is now further out of date
   given six more parts of changes. Not corrected in this workstream
   (documentation, not a page) — worth a refresh pass before onboarding
   anyone else to the codebase.

## 6. Deployment plan (NOT executed — for owner approval)

This mirrors the pattern already used successfully for the November 2026
design-system release (`v1.0.0-redesign` tag on `main`):

1. Owner reviews this document and the three `docs/*.md` companions
   (`WEBSITE_GROWTH_AUDIT.md`, `LOCATION_PAGES_INDEXATION.md`,
   `PRIVACY_POLICY_AMENDMENTS.md`), and decides on each item in Section 5.
2. For any of the 7 gated pages approved for publication: remove
   `noindex: true` from that page's `createMetadata()` call, add its path
   to `app/sitemap.ts`'s `staticPaths`, and add it to `lib/data.ts`'s
   `navItems` or the relevant footer list, as appropriate for that page.
   Rebuild and re-run the full validation suite above after any such
   change.
3. Merge the branch stack into `main` via a normal PR (fast-forward or
   merge commit — no rebasing needed, commits are already linear) once
   approved.
4. Push `main` to `origin` — this is the step that triggers Vercel's
   production deploy, per the existing GitHub-integration deployment
   model (confirmed in earlier sessions this project).
5. Post-deploy: re-run the sitewide sweep above against the live
   `www.23labs.co` domain, and spot-check the calculator and any newly
   unindexed/linked page live.
6. Tag the release (e.g. `v1.1.0-growth`), matching the existing
   `v1.0.0-redesign` convention, for a clean rollback point.

## 7. Rollback approach

Since nothing is deployed yet, there is nothing to roll back. Once
deployed per the plan above: revert is `git revert` of the merge commit
(or redeploy the prior tag, `v1.0.0-redesign`, via the same push-to-`main`
mechanism) — no database, no migrations, no external state to unwind.
The gated pages add zero risk to existing functionality even if merged
before their content is approved, since they are unreachable except by
direct URL; the risk surface to review before merging is entirely in the
**already-live** page changes (Parts 2, 4, 5, 6) and the two
already-live-industries' content changes, not the gated pages.

## 8. Final launch checklist

- [ ] Resolve the privacy-policy/contact-form discrepancy (Section 5.1)
- [ ] Decide Manufacturing/Property Maintenance publication (5.2)
- [ ] Human review of all 5 Part 7 growth pages (5.3)
- [ ] Decide location-page indexation strategy once Search Console is
      connected (5.4)
- [ ] Re-run full validation suite after any gating changes
- [ ] Merge branch stack to `main` via PR
- [ ] Push to `origin` (triggers Vercel deploy) — **only after explicit
      approval**
- [ ] Post-deploy smoke test against the live domain
- [ ] Tag the release

**This workstream is feature-complete and validated. Nothing is published.
Awaiting owner review of this document before any merge or deploy step.**
