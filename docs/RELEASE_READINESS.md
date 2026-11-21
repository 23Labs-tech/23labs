# Release Readiness — Growth/SEO Workstream (Parts 1-7, deployed)

This document covers the complete growth/SEO workstream: repo audit and
foundation, homepage/nav/core pages, six service and two solution page
rewrites, industry landing pages, case studies and trust pages, location
pages and legacy redirects, five new growth pages plus a working automation
savings calculator, and a rebuilt enquiry form. **This workstream has been
reviewed and approved by the business owner, and is now live in
production** as of the deployment recorded below.

## Production deployment record

| | |
|---|---|
| **Status** | **Live in production** |
| **Live URL** | https://www.23labs.co |
| **Deployed commit** | `74a7a51bef5f9aecf5fb7531dff95515ef0208e3` on `main` (merge of `seo-growth-integrated`) |
| **Previous production commit (rollback reference)** | `46bd4f6f895cd12e50e38eee3becf5be46f3f477` ("Publish transport blog posts on RCTI automation and fatigue records") |
| **Deployment mechanism** | `git push origin main` → existing Vercel GitHub-integration auto-deploy. Confirmed live by polling the public site; `/pricing` went from 404 to 200 approximately 45 seconds after the push. |
| **Deployed at** | This session, immediately following `git push`. |

**Note on `main` at push time**: `origin/main` had moved since
`seo-growth-integrated` was branched — a separate commit published two new
blog posts (`transport-rcti-automation`, `transport-fatigue-records-automation`)
while this workstream was in progress. That commit was fetched, merged into
`seo-growth-integrated` first (clean, no conflicts — blog content was
untouched by this workstream throughout, as required), and the merge into
`main` and push happened after. Nobody else's work was overwritten.

## Contact form delivery — tested live, confirmed not yet working

A real test enquiry was submitted directly to the live
`https://www.23labs.co/api/contact` endpoint after deployment. Result:

```
HTTP 500
{"error":"We could not send your enquiry. Please try again shortly, or book a time with us instead."}
```

**This confirms, by actually testing it rather than assuming: `RESEND_API_KEY`
is not currently configured in Vercel's production environment.** The code
is working exactly as designed — it rejected gracefully rather than
pretending to succeed, and logged the full test lead to Vercel's function
logs as a fallback (filter for `[contact-form] LEAD CAPTURE` in Vercel's
project logs to retrieve it; it was a clearly-marked test, so no action is
needed on that specific one).

**What this means in practice: real customer enquiries submitted through
the live form right now will not reach the business inbox.** Calendly
booking is unaffected and fully functional (verified live). This was a
known, explicitly-flagged risk before deployment — the owner chose to
deploy anyway rather than wait, accepting this exact tradeoff.

**To fix**: in Vercel's project settings, set `RESEND_API_KEY`,
`CONTACT_TO_EMAIL` (defaults to `hello@23labs.co` if unset) and
`CONTACT_FROM_EMAIL` for the Production environment, verify the sending
domain in Resend, then submit one more real test enquiry to confirm
delivery. This is the single highest-priority follow-up from this
deployment.

## What's live now

### Previously gated, now published (per the owner's approval)

| Page | Notes |
|---|---|
| `/manufacturing` | Live, indexable, in sitemap, in the industries hub grid and nav mega-menu (added to `lib/industries.ts`'s `industryLinks`). Copy correctly labels workflows as illustrative, not delivered client work. |
| `/property-maintenance` | Same as above. |
| `/pricing` | Live, indexable, in sitemap, linked from the footer's Services column. |
| `/workflow-review` | Live, indexable, in sitemap, linked from the footer's Studio column. |
| `/partners` | Live, indexable, in sitemap, linked from the footer's Studio column. |
| `/technologies` | Live, indexable, in sitemap, linked from the footer's Services column. |
| `/tools/automation-savings-calculator` | Live, indexable, in sitemap, linked from the footer's Services column and from `/pricing`. Fully functional (unit-tested, live-tested). |

### Everything from Parts 1-7, confirmed still live and correct

- Homepage, About, Contact, Services hub, Industries hub, Work hub —
  updated copy from Part 2.
- All 6 canonical service pages + 2 AI solution pages — Part 3's H1/CTA
  rewrites, approved and live.
- 7 industry pages (freight, recruitment, professional services,
  construction, allied health, real estate, trades) — Part 4.
- 4 case studies, security page links — Part 5.
- 8 location pages + NZ hub — Part 6. Lower-priority satellite location
  pages' indexing was **not changed** in this deployment, per the owner's
  earlier instruction to hold that decision until Search Console data
  exists — they remain exactly as Part 6 left them.
- The rebuilt enquiry form + Calendly on `/contact` — both confirmed live
  (form's validation/honeypot/rate-limiting logic works; email delivery
  does not yet, see above).

### Public email address

Audited and confirmed: `hello@23labs.co` does not appear anywhere in the
live site's rendered HTML (checked `/`, `/contact`, `/privacy-policy`,
`/security`, `/about` directly against production — zero occurrences).
The only two places it was ever shown to a visitor were the contact
form's own two failure-fallback messages; both now say "please try again,
or book a time with us instead" instead. The address remains in
`lib/site.ts` as `siteConfig.email`, used only server-side by
`app/api/contact/route.ts` as the delivery recipient — never rendered.

## Tests completed and results

```
npx tsc --noEmit        clean (re-run on main after the final merge)
npm run lint             clean
npm run build            102/102 routes generated, 0 errors
npm run test:lib          9/9 pass
npm run test:calculator   9/9 pass
npm run test:contact     11/11 pass
npm run test:redirects   44/44 pass
```

Post-deploy live verification against `https://www.23labs.co`:
- 14 key routes (homepage, about, contact, all 7 newly-published pages,
  2 service pages, 1 solution page, 1 of the 2 newly-published blog
  posts) all return `200`.
- Sitemap (`/sitemap.xml`) contains all 7 newly-published pages.
- `/pricing`'s rendered HTML has no `<meta name="robots">` override
  (indexable by default, as intended once `noindex` is removed).
- Homepage `<h1>` is exactly `We solve business problems with technology`.
- Zero `hello@23labs` occurrences across 5 key pages' rendered HTML.
- Calendly widget script (`assets.calendly.com/assets/external/widget.js`)
  loads with `200`; the booking section's markup is present on `/contact`.
- **Contact form API tested live with a real submission — see "Contact
  form delivery" above. This is the one critical finding from live
  testing.**

**Not independently verifiable from this environment, even live**:
Lighthouse/PageSpeed scores, Search Console/GA4 traffic data, and anything
inside the Vercel dashboard (build logs, environment variable values,
function logs) — no Vercel CLI or API access exists in this session.

## Published page inventory (sitemap-indexable, as of this deployment)

Homepage; About; Contact; Services hub + 6 service pages; Solutions hub +
9 solution pages; Industries hub + 9 industry pages (7 original + the 2
newly-published); Work hub + 4 case studies; Blog + all posts (37 prior +
2 new); Security; Privacy Policy; New Zealand; Locations hub + 8 location
pages; **Pricing; Workflow Review; Partners; Technologies; Automation
Savings Calculator** (newly published this round).

## Remaining non-critical issues / follow-ups

1. **Resend production credentials** — see above. Highest priority; real
   enquiries are currently not delivered by email.
2. **Lower-priority satellite location pages** — indexing decision still
   deliberately on hold pending Search Console data, unchanged by this
   deployment.
3. **HubSpot/Instantly usage** — named in the privacy policy; no code in
   this repo confirms or contradicts current use either way. Needs the
   owner to confirm directly, not something a deployment can verify.
4. **Pre-existing privacy-policy TODOs** — legal entity/ABN, overseas
   country list for Zoho, security-measure wording, retention periods,
   client-agreement wording. Unrelated to this deployment, unchanged,
   fully listed in `docs/PRIVACY_POLICY_AMENDMENTS.md`.
5. **`DESIGN_SYSTEM.md`'s own pre-existing cosmetic note** — a long tail
   of page-specific classes still using `--ink-soft`/`--ink-faint`
   directly rather than newer tokens. Cosmetic, not a blocker.

## Rollback reference

If a rollback is needed: the previous production commit was
`46bd4f6f895cd12e50e38eee3becf5be46f3f477`. Revert with
`git revert -m 1 74a7a51` (reverting the merge commit) and push, or
redeploy that prior commit directly from Vercel's deployment history —
either triggers a new deploy back to the pre-this-workstream state. No
database, migration or external state needs unwinding; the only
production-side configuration this workstream depends on (Resend env
vars) was never actually set, so there's nothing to roll back there
either.

## Final notes

This is now the live production site. The one thing still genuinely
outstanding is Resend configuration for real email delivery — everything
else requested (publishing the seven approved pages, removing public
email exposure, preserving the design system, blog content, Calendly,
mobile responsiveness and the footer ABN) has been implemented, tested
pre-deploy, and re-verified against the live domain post-deploy.
