# Release Readiness — Growth/SEO Workstream (Parts 1-7, integrated)

This document covers the complete growth/SEO workstream: repo audit and
foundation, homepage/nav/core pages, six service and two solution page
rewrites, industry landing pages, case studies and trust pages, location
pages and legacy redirects, five new growth pages plus a working savings
calculator, and a rebuilt enquiry form. All seven parts (Part 3 included,
done out of sequence after the rest) have been merged into one integration
branch, tested together, and are described here as a single current state.
**Nothing in this workstream has been deployed, merged to `main`, or pushed
to origin.** Completing the code is not authorisation to publish — this is
the handoff for the owner's review and sign-off.

## Branches

```
main                        <- untouched, still the live production branch
 ├─ seo-growth-part1 → part2 → part4 → part5 → part6 → part7   (stacked)
 └─ seo-growth-part3                                            (off part2)
      └─ seo-growth-integrated  <- merges part7's tip + part3, plus the
                                    enquiry form and documentation work
                                    described below
```

Part 3 ("six service pages and two AI solution pages") was done last, out
of its original numbered order, after Parts 1-2 and 4-7 were already
built — so it sits as its own branch off `seo-growth-part2`, independent of
the 4→5→6→7 stack. Per the owner's instruction, this was not left as seven
separate branches: `seo-growth-integrated` merges `seo-growth-part7`
(which carries Parts 1, 2, 4, 5, 6, 7 as linear history) and
`seo-growth-part3` into one branch, verified by an actual merge — not
assumed. The only real overlap was `lib/services.ts`, where Part 3's H1/CTA
rewrites and Part 5's one-sentence FAQ addition (a link to the security
page) sit on different lines; git auto-merged it cleanly and both changes
were confirmed present afterwards by direct inspection, not just a clean
exit code. The enquiry form, privacy policy sync and `DESIGN_SYSTEM.md`
update (below) were then built directly on `seo-growth-integrated`, since
they touch files from multiple parts (the contact page from Part 2, the
service pages from Part 3) and have no reason to exist on a single part's
branch.

To review the whole thing as one diff: `git diff main seo-growth-integrated`.

## 1. Page-by-page status

### Core pages (Part 2)

| Page | Status |
|---|---|
| `/`, `/about`, `/contact`, `/services`, `/industries`, `/work` | **Live, updated.** New H1s/copy, problems section, priority-industries section, proof strip. `/contact` now also carries the rebuilt enquiry form (see Section 2). |

### Service and solution pages (Part 3)

| Page | Status |
|---|---|
| `/services/business-process-automation`, `/system-integrations`, `/custom-software-development`, `/ai-workflow-automation`, `/ai-agents`, `/ongoing-support` | **Live, updated.** Exact H1 and CTA label rewrites; the existing problem-led body content (audience, boundary-vs-other-services, process steps, real proof from CorIT Tech/Huntress Recruitment, FAQ) was already strong and is unchanged. CTAs now carry `?service=<slug>#enquiry` into the new form. |
| `/solutions/ai-document-processing`, `/solutions/ai-governance` | **Live, updated.** Same H1/CTA treatment; CTAs anchor to `/contact#enquiry` (no single service applies to a solution page). |
| The other 7 `/solutions/*` pages | **Unchanged** — out of scope for Part 3, not touched. |
| **Awaiting your review** (per your instruction #4): copy, links and CTAs on all 8 pages above. A link/CTA audit was run (Section 3) and found no broken links or incorrect CTA targets, but the copy itself hasn't had a human read yet. |

### Industry pages (Part 4)

| Page | Status |
|---|---|
| `/freight-logistics`, `/recruitment`, `/professional-services`, `/construction`, `/allied-health`, `/real-estate`, `/trades-field-services` | **Live, updated.** Exact H1s, workflow diagrams, CTA fixes. |
| `/manufacturing`, `/property-maintenance` | **Gated draft**, `noindex`, absent from nav/footer/sitemap. **Per your decision #2**: these can go live without sector-specific case studies, provided the copy is useful and doesn't imply delivered projects that don't exist — they still need **your copy approval** before ungating, which hasn't happened. |

### Case studies and trust pages (Part 5)

| Page | Status |
|---|---|
| `/case-studies/huntress-recruitment`, `/corit-tech`, `/real-estate-workflow-automation`, `/lily-olsen-counselling` | **Live, updated.** Workflow diagrams, CTA relabelling, industry cross-links. |
| `/security` | **Unchanged** — only gained inbound links from other pages. |
| `/privacy-policy` | **Updated this round** — see Section 2. No other section touched. |

### Location pages (Part 6)

| Page | Status |
|---|---|
| `/locations/melbourne`, `/new-zealand`, `/locations/auckland` | **Live, updated.** **Per your decision #5, these three are the priority** — reviewed first if you only have time for some. |
| `/locations/sydney`, `/brisbane`, `/adelaide`, `/perth`, `/wellington`, `/christchurch` | **Live, updated**, but **lower priority per your decision #5** — hold any further decision on these until Search Console data exists (see `docs/LOCATION_PAGES_INDEXATION.md`). |

### Growth pages and calculator (Part 7)

| Page | Status |
|---|---|
| `/pricing`, `/workflow-review`, `/partners`, `/technologies`, `/tools/automation-savings-calculator` | **Gated draft**, `noindex`, absent from nav/footer/sitemap. **Per your decision #3, all five stay gated**; **`/workflow-review`, `/technologies` and `/partners` are the priority for your review**, ahead of `/pricing` and the calculator. |

### Rebuilt enquiry form (this round, see Section 2)

| Item | Status |
|---|---|
| `/contact` enquiry form + Calendly | **Live** (not gated — `/contact` was already a live, indexed page; the form is new content on it, not a new route). Functionally complete and tested (Section 3). Email delivery itself is **unverified end-to-end** — no `RESEND_API_KEY` exists in this environment (see Section 2). |

**Ten gated/draft items remain** pending your approval before they're
discoverable: Manufacturing, Property Maintenance, Pricing, Workflow
Review, Partners, Technologies, the calculator, plus the three lower-
priority location-page decisions.

## 2. The rebuilt enquiry form

**What was found**: the privacy policy already described a real contact
form — name/email/message fields, a honeypot, timing-based bot rejection,
IP rate limiting, Resend email delivery — in accurate detail. It just
didn't exist in the code. Git history showed why: `app/api/contact/
route.ts` and `components/contact/ContactForm.tsx` were deleted in a prior
redesign commit (`7e2b2754`, "remove email"), and the site had been
Calendly-only since. `lib/contact.ts` (the validation logic) and
`lib/site.ts`'s `getBaseUrl()` helper survived that deletion, unused — the
form didn't need to be designed from scratch, just restored and extended.

**What's built now, per your decisions #1 and #7**:

- A real form on `/contact`, alongside Calendly (not replacing it) — Name,
  Business name, Work email, Service (a dropdown of the six service pages
  plus "Not sure / something else"), and a message. Name, business, email,
  service and message are all required; phone was dropped.
- Server-side validation (`lib/contact.ts`), a honeypot field, a 2-second
  minimum-fill-time bot check, per-IP rate limiting (5 submissions / 10
  minutes), an origin check, and a 16KB body-size cap — all the same logic
  the original form had, recovered rather than redesigned.
- Email delivery via Resend's HTTP API (no new npm dependency — a plain
  `fetch` call), with a fallback sender if the primary domain isn't
  verified in Resend, and a last-resort console log of the full lead if
  delivery fails outright, so an enquiry is never silently lost.
- Every CTA on the six service pages now links to
  `/contact?service=<slug>#enquiry`, so the form arrives with the right
  service already selected. Solution-page CTAs anchor to `/contact#enquiry`
  without presetting a service, since a solution maps to more than one.
- `trackFormStart`/`trackLeadSubmit` (defined in Part 1, never wired to
  anything since no form existed) now fire alongside the existing
  `trackGenerateLead`.
- The privacy policy's field list (Section 2) was updated to match
  exactly; `docs/PRIVACY_POLICY_AMENDMENTS.md` records the history and
  flags the one thing worth a legal glance (see below).

**What still needs real credentials before this is launch-ready**: there
is no `RESEND_API_KEY` in this environment, so actual email delivery has
**not** been verified end-to-end. The route's logic was fully tested
(Section 3) including a dev-mode run where the no-key path is deliberately
skipped — but nobody has sent a real email through it yet. Before this
goes live: set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`
in Vercel (the exact variables `.env.example` has documented all along),
verify the sending domain in Resend, and send one real test enquiry.

**Legal flag**: the field-list change (business name now required,
service added, phone dropped) is a factual sync, not a change in legal
basis or retention — but a legal reviewer should confirm the new required
"business name" field doesn't need separate justification. Full detail in
`docs/PRIVACY_POLICY_AMENDMENTS.md`.

## 3. Validation run on `seo-growth-integrated`

```
npx tsc --noEmit        clean
npm run lint             clean
npm run build            100/100 routes generated, 0 errors
npm run test:lib          9/9 pass
npm run test:calculator   9/9 pass
npm run test:contact     11/11 pass  (new: validateContactPayload - required
                                       fields, email format, service-slug
                                       validity, honeypot spam flag)
npm run test:redirects   44/44 pass  (no chains/loops, query strings preserved)
```

Sitewide sweep (Playwright, against `next start`), 53 representative
routes across every page group: all 200, all exactly one `<h1>`, all
unique canonicals, zero missing `alt` text, zero mobile horizontal
overflow at 375px (home and `/contact`, the two most layout-sensitive
pages, checked explicitly).

Service/solution page audit (the 8 pages from Part 3, per your instruction
#4): every CTA's `href` checked directly in a live browser — confirmed
each of the 6 service pages' 3 CTAs carry its own `service=<slug>`, each
solution page's 3 CTAs anchor to the form, and the global nav/footer CTA
(same on every page, correctly *not* carrying a service) is unaffected.
All 41 unique internal link targets found across those 8 pages resolve to
200 — no broken links.

Enquiry form functional check (Playwright, live browser): service
pre-selects correctly from `?service=` on page load; both the form and
Calendly render on `/contact`; submitting empty shows inline field errors
without navigating away; a complete, valid submission shows the success
state (checked in dev mode, where email sending intentionally no-ops);
the same submission in production mode — no `RESEND_API_KEY` configured —
correctly shows the graceful "we could not send your enquiry, email us
directly" fallback rather than crashing, exactly as designed; a
honeypot-filled submission returns `200 {ok:true}` and is silently
discarded rather than emailed; the new `<select>` shows a visible keyboard
focus outline (confirming the accessibility fix in Section 2 worked).

**Not run, and not claimed**: Lighthouse/PageSpeed scores, Search Console
or GA4 traffic data, or real Resend email delivery — none of these can be
verified from this environment.

## 4. Business decisions already made (recorded here, not re-litigated)

Per your message, these are settled; code and docs reflect them:

1. Real enquiry form alongside Calendly — **built** (Section 2).
2. Manufacturing/Property Maintenance can launch without sector case
   studies, once copy is approved — **still gated pending that approval**.
3. All five Part 7 growth pages stay gated; Workflow Review, Technologies
   and Partners are the review priority — **unchanged, noted above**.
4. All 8 service/solution pages need a copy/link/CTA review before
   merging — **link/CTA audit done (clean); copy review is yours**.
5. Melbourne, NZ hub, Auckland are the location-page priority; the rest
   wait on Search Console — **unchanged, noted above**.
6. `DESIGN_SYSTEM.md` updated to reflect the current implementation —
   **done**: added a section on the calculator's and contact form's
   component classes (both already followed the existing token system; no
   new colours/radii/shadows anywhere), corrected the stale route count,
   and left the pre-existing "outstanding" notes that are still accurate.
7. Service passthrough into the new enquiry form — **built** (Section 2).
8. This document — **done**.
9. Branch relationships and merge order — **verified by actually merging
   and testing**, not assumed (Section "Branches" above).
10. Single integration branch, `main` untouched, no deploy — **done**;
    see "Branches" above.

## 5. Still outstanding (not yet decided, or decided but not yet actioned)

- **Human copy review** of the 8 service/solution pages (your #4) and the
  gated growth pages, prioritised per your #3.
- **Manufacturing/Property Maintenance copy approval** (your #2) — the
  copy exists; it hasn't been read and approved yet.
- **Resend credentials** — the form is code-complete but has never sent a
  real email (Section 2).
- **Search Console connection** before deciding on the 6 lower-priority
  location pages (your #5).
- **HubSpot/Instantly confirmation** — named in the privacy policy as CRM/
  outreach tools; no code in this repo touches them either way, so this
  can only be confirmed by you, not by inspecting the codebase.
- **Pre-existing privacy policy TODOs** (legal entity/ABN, overseas
  country list for Zoho, security-measure wording, retention periods,
  client-agreement wording) — unrelated to this round's form work, still
  open from Part 5, listed in full in `docs/PRIVACY_POLICY_AMENDMENTS.md`.
- **`DESIGN_SYSTEM.md`'s own pre-existing outstanding items** (a long tail
  of page-specific classes still using `--ink-soft`/`--ink-faint` directly
  rather than the newer tokens) — cosmetic, not a blocker, unchanged by
  this round.

## 6. Deployment plan (not executed — for your approval)

1. You review this document, the copy/link items in Section 5, and the
   three companion docs (`PRIVACY_POLICY_AMENDMENTS.md`,
   `LOCATION_PAGES_INDEXATION.md`, `WEBSITE_GROWTH_AUDIT.md`).
2. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in
   Vercel; verify the sending domain in Resend; send one real test
   enquiry through the live form before relying on it.
3. For any gated page you approve: remove its `noindex`, add it to
   `app/sitemap.ts`'s `staticPaths`, and add it to the relevant nav/footer
   list. Re-run the full validation suite (Section 3) after any such
   change.
4. Merge `seo-growth-integrated` into `main` via a normal PR.
5. Push `main` to `origin` (triggers the existing Vercel deploy) — **only
   after your explicit approval**.
6. Post-deploy: re-run the sitewide sweep against the live domain, send a
   second real test enquiry against production, and spot-check Calendly
   and the calculator live.
7. Tag the release (e.g. `v1.1.0-growth`).

## 7. Rollback approach

Nothing is deployed, so there is nothing to roll back yet. Once deployed:
`git revert` of the merge commit, or redeploy the prior tag
(`v1.0.0-redesign`) via the same push-to-`main` mechanism — no database,
migration or external state to unwind. The form's "failed delivery" path
logs to Vercel's function logs rather than losing a lead outright, but
that log is not a durable store — if Resend is misconfigured post-launch,
leads during that window need recovering from logs before they rotate.

## 8. Final launch checklist

- [ ] Copy/link/CTA review of the 8 service/solution pages (Part 3)
- [ ] Manufacturing/Property Maintenance copy approval
- [ ] Review of Workflow Review, Technologies, Partners (priority), then
      Pricing and the calculator
- [ ] Resend credentials configured and one real enquiry sent end-to-end
- [ ] Search Console connected; decide the 6 lower-priority location pages
- [ ] HubSpot/Instantly usage confirmed (or the privacy policy corrected)
- [ ] Re-run the full validation suite after any gating/content change
- [ ] Merge `seo-growth-integrated` → `main` via PR
- [ ] Push to `origin` — **only after explicit approval**
- [ ] Post-deploy smoke test, including one live test enquiry
- [ ] Tag the release

**This workstream is feature-complete, integrated into a single branch,
and validated end to end except for live email delivery. Nothing is
published. Awaiting your review before any merge or deploy step.**
