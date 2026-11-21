# Location Pages — Priority and Indexation Decisions

Part 6 of the growth/SEO workstream. Covers the 8 city pages under
`/locations/[slug]` plus the `/new-zealand` hub. No Search Console or
analytics access was available in this session — every recommendation
below is based on content quality and verifiable facts only, explicitly
**not** on traffic, backlink or ranking data, which is flagged wherever it
would normally inform the decision.

## The finding that drove this part's work

Before this round, every city page shared one hardcoded H1 template in
`LocationLandingPage.tsx`:

```
<h1>Automation and Custom Software for {location.city} Businesses</h1>
```

The hero lead paragraph and meta description were also near-identical
city-swapped templates across all 8 cities ("We help {City} businesses
remove repetitive work, connect disconnected systems..." / "23Labs helps
{City} businesses automate manual processes..."). This is the exact
doorway-page pattern Section A of this part explicitly prohibits ("Do not
create city-swap pages by inserting a different place name into the same
content"). It predates this workstream.

**Fixed**: added a `heroTitle` field to `LocationPage` (`lib/locations.ts`)
and rewired `LocationHero` to render it directly instead of the template.
Every city's H1, hero lead, intro heading/body and meta description were
rewritten with a distinct, genuine business angle (see table below), with
no fabricated local offices, clients or addresses. The NZ hub
(`lib/newZealand.ts`) already had genuinely differentiated content and
only needed its H1 corrected to the brief's exact wording.

## Page-by-page decisions

| Page | H1 | Differentiation angle | Decision | Rationale |
|---|---|---|---|---|
| `/locations/melbourne` | "Melbourne businesses deserve systems that make work easier." | Home market — genuine local base, on-site availability | **Keep indexable, highest priority** | The one page where "local" claims are verifiably true (23Labs is actually based here). Strongest, most defensible content. |
| `/new-zealand` | "Practical software and automation for New Zealand businesses." | Country hub — honest remote-from-Melbourne model, real NZ case study | **Keep indexable, second priority** | Already well-built before this part (honest "no NZ office" FAQ, real Huntress case study, specific timezone/pricing detail). Matches the brief's own stated priority order. |
| `/locations/sydney` | "Better-connected operations for Sydney businesses." | Multi-team coordination, professional-services onboarding, explicit remote-from-Melbourne | **Keep indexable** | Now genuinely differentiated (not a template swap). No Sydney-specific case study exists, so all local-proof claims are intentionally avoided rather than invented. |
| `/locations/brisbane` | "Make daily operations easier for growing Brisbane teams." | Logistics/field-service job-to-invoice handoff | **Keep indexable** | Same basis as Sydney — distinct angle, honest about remote delivery, no fabricated local proof. |
| `/locations/adelaide` | "Take the manual steps out of Adelaide business operations." | Manufacturing/fabrication, workshop reporting | **Keep indexable** | Distinct angle. Deliberately does *not* link to the still-draft, unapproved `/manufacturing` page from Part 4 — that page stays unpublished until approved, so this page only references manufacturing/fabrication in prose, not as a link. |
| `/locations/perth` | "Keep Perth operations connected as the workload grows." | Multi-site field teams, time-zone-aware scheduling | **Keep indexable** | Distinct angle. Time-zone language is deliberately general ("Western Australia runs on a different time zone... we plan around that") rather than stating a specific hour offset, since WA doesn't observe daylight saving and the gap to Melbourne varies seasonally — a specific claim would be wrong for part of the year. |
| `/locations/auckland` | "Connected workflows for growing Auckland businesses." | Recruitment/client onboarding, backed by the real Huntress case study | **Keep indexable** | Only NZ city page with genuine, specific case-study backing. Huntress is described as "a New Zealand recruitment business," not claimed as Auckland-specific, since its actual city isn't recorded in the case study data. |
| `/locations/wellington` | "Less repetitive admin for Wellington teams." | Professional services, privacy-aware workflow design (NZ Privacy Act 2020) | **Keep indexable** | Distinct angle, no fabricated local proof. |
| `/locations/christchurch` | "Make Christchurch operations easier to manage." | Field services/fabrication, job-completion-to-invoice | **Keep indexable** | Distinct angle, no fabricated local proof. |

## What "keep indexable" means here, and what it doesn't

All 9 pages are recommended to **stay indexable** (no `noindex`, no removal,
no merge into `/locations`) now that the city-swap template issue is fixed
and each page has a genuine, distinct business angle with honest
remote-delivery framing. This is a content-quality judgement, not a
traffic judgement — I have no way to confirm any of these pages are
actually earning search impressions, rankings or backlinks worth
protecting, and no way to confirm the reverse either.

**Recommended before the next SEO-focused pass**: connect Search Console
and pull actual impressions/clicks per location URL. If the satellite
cities (Sydney/Brisbane/Adelaide/Perth/Wellington/Christchurch — the ones
with no city-specific case study) are shown to have negligible search
demand or zero distinct query overlap with Melbourne/the NZ hub, merging
them into the `/locations` hub as sections rather than standalone indexed
pages would be a reasonable next step. That's a traffic-informed decision
this session cannot make responsibly without the data, so it's deferred
rather than guessed.

## Legacy service URL redirects (Section D) — already implemented, now audited

All three requested redirect pairs, plus several more, already exist in
`next.config.ts`:

| Source | Destination | Status |
|---|---|---|
| `/services/business-automation` | `/services/business-process-automation` | Verified |
| `/services/systems-integrations` | `/services/system-integrations` | Verified |
| `/services/full-stack-software-development` | `/services/custom-software-development` | Verified |
| `/services/system-integration` | `/services/system-integrations` | Verified (pre-existing, not in this part's named list) |
| `/services/api-integration` | `/services/system-integrations` | Verified (pre-existing) |
| `/services/web-app-development` | `/services/custom-software-development` | Verified (pre-existing) |
| `/services/ai-automation` | `/services/ai-agents` | Verified (pre-existing) |
| `/case-studies` | `/work` | Verified (pre-existing) |
| `/case-studies/first-national-real-estate` | `/case-studies/real-estate-workflow-automation` | Verified (pre-existing — confirms Part 5's investigation: this is the canonical case study, correctly redirected from the name the brief was concerned about) |
| `/locations/new-zealand` | `/new-zealand` | Verified (pre-existing) |

This part's contribution was auditing, not building: `scripts/test-redirects.mjs`
(run via `npm run test:redirects`) checks, against a live `next start`
server, that every rule above (1) is a single permanent 301/308 redirect,
(2) lands on a real 200 page in exactly one hop (no chains), (3) preserves
query strings, and (4) that none of the canonical destinations are
themselves a redirect source (so no future rule targeting them could create
a loop). All 44 checks pass. No backlink or Search Console data was
available to independently verify these redirects are *necessary* (i.e.
that the old URLs still receive traffic) — only that they are *correct* if
kept. Per Section D.4, I did not touch or remove any of them, and did not
add new redirect rules, since no new duplicate-URL evidence was found
beyond what's already handled.

## Mobile/responsive and regression checks performed

- `tsc`, `eslint`, full `next build` — clean.
- All 9 H1s verified exact via Playwright.
- Confirmed the NZ-country success-story preference (Huntress surfaced
  first on Auckland/Wellington/Christchurch/the NZ hub) is wired correctly
  via `getLocationSuccessStories(location)`.
- Nav dropdowns, blog, and the Calendly-based contact flow re-verified
  unaffected.
