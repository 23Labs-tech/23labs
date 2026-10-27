---
title: "Cliniko Integrations for Allied Health Practices: Connecting Bookings, Billing and Your Other Tools"
seoTitle: "Cliniko Integrations for Allied Health Practices | 23Labs"
description: "What Cliniko's API and integrations make possible for allied health practices, from billing to reporting, plus the privacy checks to do before connecting anything."
date: "2026-07-07"
updated: "2026-07-07"
author: "23Labs Team"
categories: "Allied Health, System Integrations, Operations"
image: "/site-images/industries/allied-health.jpg"
featuredImage: "/site-images/industries/allied-health.jpg"
imageAlt: "Allied health practitioner guiding a patient through a rehabilitation exercise"
---

Cliniko is a practice management system used by many allied health practices, including physiotherapy, psychology, occupational therapy and podiatry clinics. It handles appointments, patient records, treatment notes and invoicing. But most practices use other tools as well: accounting software, intake forms, marketing tools, reporting spreadsheets and sometimes a second system for a specific service line.

When those tools don't connect properly, the front desk and practice manager end up re-typing information, reconciling by hand and building reports in spreadsheets. This article covers what Cliniko offers for integrations, the gaps practices commonly run into and the privacy checks that matter with health information.

## The short answer

Cliniko has a documented API and a directory of connected apps, so many gaps can be closed without leaving Cliniko. Start by checking whether Cliniko does what you need natively, or through an existing connected app. If not, a custom integration using the Cliniko API is often possible.

Because Cliniko holds health information, privacy and security need to be designed in from the start.

## What Cliniko offers

### Connected apps

Cliniko lists third-party integrations on its [connected apps page](https://www.cliniko.com/connected-apps/), grouped into categories such as finance and invoicing, forms and check-in, and data and reporting. Cliniko notes that most of these apps are built by third parties and encourages practices to do their own due diligence. It's still the first place to look.

### The Xero integration

Cliniko has a Xero integration. According to Cliniko's help article on [integrating Cliniko with Xero](https://help.cliniko.com/en/articles/1023891-integrate-cliniko-with-your-xero-account):

- Invoices are sent to Xero automatically when they're created or updated in Cliniko.
- Payments only sync when they're allocated to an invoice. Unallocated payments and credit allocations don't appear in Xero.
- There's an option to synchronise invoices and payments from a previous date, which doesn't duplicate records already sent.

Cliniko's help centre also notes that payments made with account credit don't sync, so the invoice stays open in Xero and the payment needs to be recorded there manually. If your practice uses account credit or unallocated payments often, factor that into how you reconcile.

### The Cliniko API

Cliniko publishes [API documentation](https://docs.api.cliniko.com/). The key points for a practice owner:

- It's a REST API served only over HTTPS.
- Access uses API keys created by Cliniko users. Each key has the same permissions as the user it belongs to, and Cliniko warns that a key gives access to sensitive information and should be handled like a password.
- Requests are rate limited to 200 per minute per user.

That means a custom integration can read and write data in Cliniko within the permissions of the user it runs as. It also means the choice of which user an integration runs under, and what that user can see, really matters.

## Common gaps practices run into

These are the kinds of problems practice managers describe to us:

- **Reporting across locations or practitioners.** Combining Cliniko data with accounting or marketing data for a clear view of performance.
- **Intake data re-entry.** Information collected through a separate form or website being typed into Cliniko.
- **Referrer and funder admin.** Tracking referrals, letters and funder-specific paperwork outside Cliniko.
- **Accounting reconciliation.** Matching payments in Cliniko and Xero, especially where payments aren't allocated to invoices.
- **Duplicate data in other tools.** Patient or client details maintained separately in a marketing or CRM tool.

## Integration options, compared

- **Native features and settings.** Lowest effort and fully supported. Limited to what Cliniko has built. Always check here first.
- **Connected apps.** Supported by a third party and usually quick to set up. You get what that app offers, and you're adding another vendor that handles patient data.
- **Middleware.** Can connect Cliniko to other tools if the platform supports it. Be careful about where health information is processed and stored along the way.
- **Custom integration via the Cliniko API.** Built around your workflow, with your rules and your choice of where data goes. More effort up front and ongoing maintenance.

## Workflows worth automating

These are common patterns, not promises. What's possible depends on your systems and Cliniko's API.

### Intake form to patient record

New patient details collected online flow into Cliniko, so the front desk checks rather than re-types. Check whether Cliniko's built-in features or a connected forms app already cover this first.

### Invoices and payments to accounting

The native Xero integration covers a lot. For practices on other accounting software, or with reconciliation rules the native integration doesn't handle, a custom connection may help.

### Reminders and follow-ups

If you need follow-up or recall logic that Cliniko doesn't offer natively, an integration can trigger it from appointment or treatment data, using the right communication tool.

### A practice reporting dashboard

Cliniko data combined with accounting and other sources in one place, refreshed automatically, instead of exported and rebuilt each month.

## Health information and privacy

This is the part to get right first. According to the OAIC's [guidance for health service providers](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/health-service-providers) and its small business guidance, health service providers are covered by the Privacy Act regardless of turnover. That includes allied health professionals. Health information is also a category of sensitive information, which generally attracts a higher level of protection.

In practical terms, for any integration:

- **Minimise data.** Only move the fields the workflow needs. A reporting dashboard rarely needs treatment notes.
- **Control access.** Run integrations under a user with the minimum permissions needed, and protect API keys like passwords.
- **Know where data goes.** Check where every tool in the chain processes and stores information, including any middleware.
- **Keep a record.** Document what each integration does, what data it uses and who is responsible for it.

This is general information, not legal advice. Talk to your adviser about how the Privacy Act applies to your practice, and New Zealand practices should check their obligations under the [Privacy Act 2020](https://www.privacy.org.nz/privacy-act-2020/) and related health information rules.

## When an integration isn't the answer

If Cliniko already does what you need natively, use it. If a report is only needed once a quarter, a manual export may be better value than an automated pipeline. And if your practice has very low volume for a particular task, a clear checklist may be all you need.

Sometimes the practice's need is the patient-facing side rather than the back office. We rebuilt the website for [Lily Olsen Counselling](/case-studies/lily-olsen-counselling), an Auckland practice, with a clear path to booking on every page. That's a different job from a Cliniko integration, but it's worth considering both together: a website that sends people to the right booking flow, and back-office systems that connect cleanly behind it.

For the general options when two systems won't connect, see [what to do when your business software doesn't integrate](/blog/business-software-does-not-integrate). For the cost of leaving the gaps, see [the hidden cost of tools that don't talk to each other](/blog/disconnected-business-tools).

## Frequently asked questions

### Does Cliniko have an API?

Yes. Cliniko publishes API documentation. Access uses API keys tied to individual Cliniko users, with the same permissions as that user.

### Can Cliniko connect to Xero?

Yes. Cliniko has a Xero integration that sends invoices to Xero when they're created or updated, and syncs payments that are allocated to invoices. Some payment types, such as account credit, don't sync.

### Is patient data safe in an integration?

It can be handled safely with the right design: minimal data, restricted access, protected API keys and clear knowledge of where data is processed. It's not safe by default, which is why privacy should be part of the design from day one.

### Do we need to change practice software?

Usually not. If Cliniko suits how your practitioners work, connecting it properly is normally better than replacing it.

### How long does a small integration take to scope?

It depends on what you need to connect and what each system's API supports. A short conversation about the workflow and the systems involved is usually enough to tell whether it's simple or complex.

## Tell us which task your front desk repeats every day

We'll check whether Cliniko or a connected app already handles it before suggesting any build. Our [system integrations](/services/system-integrations) work covers practice systems, and our [Allied Health](/allied-health) page shows where we help practices.

[Get in touch](/contact) and tell us about the task that takes the most time.
