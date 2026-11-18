# Privacy Policy — Proposed Amendments Checklist

Produced during Part 5 of the growth/SEO workstream, per that part's explicit
instruction: the privacy policy is a legal document, not a sales page. It was
**not edited** as part of this round — this is an audit of its current
claims against the actual, current codebase, for an authorised legal review
to act on. `app/privacy-policy/page.tsx` is unchanged.

## 1. Contact form description does not match the current site (high priority)

Section 2 ("What we collect") describes, in detail, a contact form with:

- name, work email, company, phone, "what you are trying to improve" fields
- a hidden honeypot field for spam detection
- timing-based rejection of fast submissions
- IP-address-based rate limiting

Section 4 ("Who we share it with") names **Resend** as the service that
emails the form submission to 23Labs' inbox.

**None of this exists in the current codebase.** Confirmed by exhaustive
search: no `<form>` element anywhere under `components/contact/` or
`app/contact/`, no `Resend` import or API key reference anywhere outside
this policy page itself, and no `app/api/` directory at all — meaning there
is no backend route in this Next.js app that could receive a form
submission. The entire contact flow (confirmed repeatedly across Parts 1, 2
and this part) is the embedded Calendly widget
(`components/contact/CalendlyWidget.tsx`) — a visitor picks a time, and
Calendly itself collects whatever its own booking form asks for (typically
name and email, configured on Calendly's side, not this codebase's).

This needs the owner/legal reviewer to decide the actual history and the
right fix:

- If a real contact form with Resend delivery existed previously and was
  replaced by Calendly-only at some point, Section 2 and the Resend line in
  Section 4 are now describing discontinued functionality and should be
  updated to describe the current Calendly-only flow instead.
- Either way, **Calendly is not currently named anywhere in the policy** as
  a data processor, even though it is the actual mechanism collecting
  booking name, email and selected time right now. That's a real disclosure
  gap that should be closed regardless of the above.
- If Resend/the described form is in fact planned future functionality
  rather than past, the policy should not describe it in the present tense
  until it exists.

## 2. HubSpot and Instantly (lower priority, can't verify either way)

Section 4 names HubSpot and Instantly for "customer relationship
management, lead management and sales outreach." No integration code for
either exists in this codebase (the one `grep` hit for "instantly" was the
unrelated word "instantly" in solutions copy, not a product reference).
This is plausibly accurate as internal sales tooling that never touches the
website's code — unlike the contact form/Resend claim above, there's no
codebase evidence either confirming or contradicting it. Flagging only so
the owner can confirm these tools are still genuinely in use.

## 3. One claim is now confirmed accurate (no action needed)

Section 6 states that certain GA4 events, "such as a booking being
completed," are tracked without name, email or message. As of this
workstream's Part 2, `CalendlyWidget.tsx` calls `trackBookingComplete()`
(from `lib/analytics.ts`) with no parameters beyond `{method: "calendly"}`
when Calendly's own `calendly.event_scheduled` event fires — so this
specific claim is accurate against the current code. Noted for completeness,
not a flag.

## 4. Pre-existing open TODOs (not new findings, not resolved here)

The page already contains several inline `TODO(privacy-confirm)` comments
from an earlier, careful pass, deliberately withholding facts until
confirmed rather than guessing. These remain open and are listed here only
so they're not lost sight of:

- Legal entity name and ABN (section 1) — withheld until a new registration
  is confirmed complete.
- Specific overseas countries for Zoho Mail (section 5).
- Security measures beyond HTTPS and contact-form spam protection (section
  7) — two-factor authentication and access-limiting are drafted but not
  confirmed as current practice. (Note: the contact-form spam protection
  this section references is part of the same contact-form description
  flagged in #1 above — if that section changes, this cross-reference may
  need to change with it.)
- Retention periods (section 8) — proposed 24 months / 7 years figures
  exist in a comment but are not published pending confirmation; GA4's
  actual retention setting is also unconfirmed.
- Client-agreement wording for how client-project data handling is
  actually documented (section 9).

None of these were resolved in this round — they need the same kind of
factual confirmation from the owner as item 1 above, not more careful
drafting.

## What this round did instead of editing the policy

- Audited the policy's claims against live code (this document).
- Added one link *to* the privacy policy was not needed (it's already
  linked from the footer and from `/security`) — no new inbound links were
  required by this audit.
- Made no changes to `app/privacy-policy/page.tsx` itself.
