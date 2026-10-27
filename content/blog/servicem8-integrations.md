---
title: "Connecting ServiceM8 to Xero, MYOB and Your Other Systems: What the Native Integrations Cover and When You Need More"
seoTitle: "ServiceM8 Integration with Xero and MYOB: What Syncs | 23Labs"
description: "What ServiceM8's Xero and MYOB integrations actually sync, where the gaps are, and how its API and webhooks can connect it to your CRM, reporting and other tools."
date: "2026-06-23"
updated: "2026-06-23"
author: "23Labs Team"
categories: "Trades & Field Services, System Integrations, Operations"
image: "/site-images/industries/trades-field-services.jpg"
featuredImage: "/site-images/industries/trades-field-services.jpg"
imageAlt: "Electrician installing and wiring an electrical panel on site"
---

ServiceM8 is one of the most common job management tools for trades and field service businesses in Australia and New Zealand. It handles jobs, scheduling, quotes and invoicing well. The questions usually start at the edges: what actually syncs to Xero or MYOB, what doesn't, and how to connect ServiceM8 to the other tools the business relies on.

This guide covers what ServiceM8's native accounting integrations do, according to ServiceM8's own documentation, where businesses tend to hit gaps and what the options are when you need more.

## The short answer

For most trades businesses, ServiceM8's built-in Xero or MYOB integration should be the starting point. It sends approved invoices to your accounting software and keeps clients and items in step. When you need to connect ServiceM8 to something it doesn't natively support, or apply your own business rules, ServiceM8 offers a REST API and webhooks that a custom integration or automation can use.

## What the Xero integration covers

According to ServiceM8's help article on [how the sync with Xero works](https://support.servicem8.com/help-center/servicem8-add-ons/xero/how-the-sync-with-xero-works):

- **Invoices** are sent to Xero when you approve them in ServiceM8. If you later change an approved invoice in a way that affects the total, the line items re-sync to Xero. Invoices with a value of zero aren't sent, and invoices created directly in Xero aren't sent back to ServiceM8.
- **Payments** recorded in ServiceM8 are sent to Xero. Payments received in Xero against an invoice that came from ServiceM8 sync back within about 30 minutes, and the invoice is marked paid in ServiceM8 once it's paid in full.
- **Clients and items** sync in both directions once they exist in both systems, with changes flowing roughly every 30 minutes. Clients created in ServiceM8 are sent to Xero with their first approved invoice. Xero suppliers aren't imported.
- **Tax settings** come from Xero into ServiceM8, and changes made in ServiceM8 don't go back.

ServiceM8's [Xero integration page](https://www.servicem8.com/xero-integration) also says staff shift times can be sent to Xero as employee timesheets, for Australian businesses.

## What the MYOB integration covers

ServiceM8's article on [how the sync with MYOB works](https://support.servicem8.com/help-center/servicem8-add-ons/myob/how-the-sync-with-myob-works) describes a similar but not identical setup:

- **Invoices** are sent to MYOB on approval, and changes that affect the total re-sync. Zero-value invoices aren't sent, and invoices created in MYOB aren't sent to ServiceM8.
- **Payments** received in ServiceM8 are sent to MYOB if they were recorded before the invoice was approved. Once an invoice is fully paid in MYOB, it's marked paid in ServiceM8. Partial payments made in MYOB don't sync back to ServiceM8.
- **Clients and materials** sync between the two once linked. MYOB inventory items update ServiceM8 materials, prices and stock levels.
- **Staff** aren't synced.

The differences matter. If your team often takes part payments, or records payments after approving the invoice, check how that will behave with MYOB before you rely on it.

## Where businesses hit gaps

The native integrations focus on getting jobs invoiced and keeping clients, items and payments consistent. The gaps we see most often are around everything else:

- **CRM and sales pipelines.** Leads and quotes that start in a separate CRM, then need to become ServiceM8 jobs without retyping.
- **Reporting across systems.** Combining ServiceM8 job data with accounting, marketing or payroll data for a single view of performance.
- **Follow-ups after the job.** Review requests, maintenance reminders or service contract renewals triggered by completed jobs, when they need logic beyond what's already set up.
- **Quote follow-up.** Chasing quotes that haven't been accepted after a set time.
- **Other operational systems.** Supplier portals, inventory systems, compliance tools or a customer portal that need job information.

Before building anything for these, check ServiceM8's own add-ons and settings. Some needs are already covered by an existing add-on or a feature you haven't switched on.

## Options for going beyond the native integrations

### Check ServiceM8's add-ons first

ServiceM8 has an add-on ecosystem, and its accounting integrations are themselves add-ons you switch on in settings. If a supported add-on does what you need, it's usually the lowest-maintenance option.

### Use middleware for simple handoffs

For straightforward workflows, such as notifying a team channel when a job is completed, a middleware platform may be enough, provided it supports ServiceM8 and the volumes are moderate. Our guide to [what to do when your business software doesn't integrate](/blog/business-software-does-not-integrate) covers where those tools fit and where they become fragile.

### Build on ServiceM8's API and webhooks

ServiceM8 publishes [developer documentation](https://developer.servicem8.com/docs/rest-overview) for its REST API, and supports [webhooks](https://developer.servicem8.com/docs/webhooks-overview) so another system can be notified when records change. Its developer documentation also describes event webhooks for events such as a job being created or completed, and explains that private integrations authenticate with an API key while public add-ons use OAuth 2.0.

That means a custom integration can react when a job changes status, read job, client and invoice data and write information back, within what the API allows. This is the route for workflows that need your own rules, such as validating data before it reaches another system or combining ServiceM8 data with other sources.

## Workflows worth considering

These are common patterns, not promises of what every setup can do. Each one depends on your systems and how you work.

- **Job to invoice to accounting.** Usually handled by the native integration. Worth reviewing which payment habits cause mismatches.
- **CRM to job.** A won deal in your CRM creates the client and job in ServiceM8, so the office doesn't re-enter it.
- **Quote follow-up.** Quotes not accepted after a set number of days create a reminder for the person who sent them.
- **Post-job follow-up.** A completed job triggers a review request or schedules a maintenance reminder.
- **Cross-system reporting.** Job, invoice and payment data feed a dashboard alongside other business data.

The pattern behind all of these is the same one we used for [CorIT Tech](/case-studies/corit-tech): information captured once in the system the team already uses creates the records that follow, instead of someone copying details across.

## When an integration isn't the answer

If ServiceM8 and your accounting software already sync what you need, the best move is to leave it alone and make sure the team uses it consistently. Plenty of "sync problems" turn out to be process habits, such as approving invoices before payments are recorded, or creating clients in two places. Fixing those is quicker and cheaper than building around them.

An integration also isn't worth it for something that happens a handful of times a month and takes a few minutes. Save the effort for workflows that repeat often or cause errors that customers notice.

For more on where automation helps trades businesses beyond the back office, see our article on [how AI can help trades and field service businesses win more jobs](/blog/how-ai-helps-trades-businesses-win-more-jobs), and our [Trades & Field Services](/trades-field-services) page.

## Frequently asked questions

### Does ServiceM8 integrate with Xero and MYOB?

Yes. ServiceM8 has native integrations with both, and its help centre also covers QuickBooks Online. The Xero and MYOB integrations behave slightly differently, especially around payments, so check ServiceM8's documentation for the one you use.

### Do invoices created in Xero or MYOB come back into ServiceM8?

According to ServiceM8's documentation, no. Invoices are sent from ServiceM8 to your accounting software when approved, but invoices created directly in Xero or MYOB aren't sent to ServiceM8.

### Can ServiceM8 connect to our CRM?

It depends on the CRM. If there's no supported add-on, ServiceM8's API and webhooks make a custom connection possible. We'd check what your CRM's API supports too.

### Do we need to change our job management software?

Usually not. If ServiceM8 suits how your team works, the better option is normally to connect it properly rather than replace it.

### Where should we start?

Start by writing down the one handoff your office repeats most often, such as re-entering won quotes as jobs or chasing unpaid invoices. That's usually the best first integration.

## Talk to us about your ServiceM8 setup

If your team is still copying information in or out of ServiceM8, tell us where. We'll check what the native integrations and add-ons already cover before suggesting any [system integration](/services/system-integrations) work.

[Get in touch](/contact) and tell us which ServiceM8 handoff takes the most time.
