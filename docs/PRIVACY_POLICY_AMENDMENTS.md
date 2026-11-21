# Privacy Policy — Amendments Checklist

Originally produced during Part 5 of the growth/SEO workstream, as an audit
of the privacy policy's claims against the actual codebase. Updated now
that the owner has confirmed the real history and asked for the form to be
rebuilt. `app/privacy-policy/page.tsx` has now been edited — see "Resolved
this round" below — and still needs a final legal read before launch.

## Resolved this round — item 1 (contact form)

**Confirmed history**: a real contact form (`app/api/contact/route.ts`,
`components/contact/ContactForm.tsx`, `lib/contact.ts`) existed previously,
with exactly the mechanism Section 2 already described — name/email/
message, a honeypot field, timing-based rejection, IP rate limiting, and
Resend email delivery (Section 4). It was deleted in a prior redesign
commit (`7e2b2754…`, "Redesign part 1: new design tokens, nav, footer, FAQ,
remove email") and the site ran on Calendly-only until this change. The
policy was therefore accurate to a form that had been quietly removed, not
describing something invented or merely planned.

**What changed in code this round**: the form has been rebuilt (same
validation/spam-protection/rate-limiting logic, recovered from git history),
alongside the existing Calendly widget — both are now live on `/contact`,
with Calendly explicitly kept as a separate option per the owner's
instruction. The field set changed slightly from the original: **company**
(optional) is now **business name** (required), a new **service** field
(required, a dropdown of the six service pages plus "not sure / something
else") was added, and **phone** was dropped, at the owner's explicit
request to keep the form "simple."

**What changed in the policy** (`app/privacy-policy/page.tsx`, Section 2
only): the bullet list of collected fields now reads name (required),
business name (required), work email (required), service/area of enquiry
(required), and the improvement message (required) — replacing the old
"company (optional) / phone (optional)" wording. No other section was
touched: the honeypot, timing-check, rate-limiting, Resend (Section 4) and
overseas-disclosure (Section 5) language was already accurate to this exact
mechanism and needed no change.

**Flag for legal review**: this is a factual sync (what the form collects),
not a change in legal basis, retention, or sharing — the surrounding
framing (why we collect it, who we share it with, how long we keep it) is
unchanged. A legal reviewer should still confirm the new "business name" and
"service" fields don't trigger any additional disclosure obligation beyond
what's already stated, and that collecting a required business name
(previously optional) doesn't need separate justification.

## 2. HubSpot and Instantly (lower priority, can't verify either way)

Section 4 names HubSpot and Instantly for "customer relationship
management, lead management and sales outreach." No integration code for
either exists in this codebase. This is plausibly accurate as internal
sales tooling that never touches the website's code. Flagging only so the
owner can confirm these tools are still genuinely in use.

## 3. One claim is confirmed accurate (no action needed)

Section 6 states that certain GA4 events, "such as a booking being
completed," are tracked without name, email or message.
`CalendlyWidget.tsx` calls `trackBookingComplete()` with no parameters
beyond `{method: "calendly"}` — accurate as written. The new form's
`generate_lead`/`form_start`/`lead_submit` events (via `lib/analytics.ts`)
are the same shape: event name and a form/service identifier only, never
the name, email or message content. No policy change needed for this.

## 4. Pre-existing open TODOs (not new findings, not resolved here)

Still open, unchanged by this round:

- Legal entity name and ABN (section 1) — withheld until a new registration
  is confirmed complete.
- Specific overseas countries for Zoho Mail (section 5).
- Security measures beyond HTTPS and contact-form spam protection (section
  7) — two-factor authentication and access-limiting are drafted but not
  confirmed as current practice.
- Retention periods (section 8) — proposed 24 months / 7 years figures
  exist in a comment but are not published pending confirmation; GA4's
  actual retention setting is also unconfirmed. This now also applies to
  how long a failed-delivery lead (logged to Vercel function logs as a
  fallback — see the route's comments) is kept before those logs rotate.
- Client-agreement wording for how client-project data handling is
  actually documented (section 9).

These need the same factual confirmation from the owner as item 1 did, not
more drafting.
