---
title: "Recruitment Software Integrations: Connecting Your ATS to Timesheets, Payroll and Accounting"
seoTitle: "Recruitment Software Integrations: ATS to Payroll | 23Labs"
description: "How recruitment agencies can connect their ATS or CRM to timesheets, payroll and accounting, what to check first and where custom integration fits."
date: "2026-05-26"
updated: "2026-05-26"
author: "23Labs Team"
categories: "Recruitment, System Integrations, Operations"
image: "/site-images/photos/dashboard-review-pair.png"
featuredImage: "/site-images/photos/dashboard-review-pair.png"
imageAlt: "Two colleagues reviewing analytics together on a desktop monitor"
---

For recruitment agencies, especially those placing temps and contractors, the work doesn't stop when a candidate is placed. Hours need to be recorded and approved, workers need to be paid, clients need to be invoiced and margins need to be tracked. In many agencies, that means placement details are re-typed from the ATS into timesheet tools, payroll and accounting software.

Every re-typed rate or date is a chance for a pay error, a billing mistake or a margin you didn't know you'd lost. This article covers where the handoffs sit, what to check before building anything and where a custom integration makes sense.

## The short answer

Start with the placement. If your ATS holds clean, complete placement records, with rates, dates, client and worker details, those records can drive timesheets, payroll and invoicing. Check what your ATS, timesheet and payroll providers already connect to. Use a custom integration for the gaps that native connectors don't cover.

## Where the handoffs sit

For an agency placing temps or contractors, data typically moves like this:

- **ATS or CRM.** The placement is created with the candidate, client, rates and dates.
- **Timesheets.** Hours are recorded and approved, by the worker and the client.
- **Payroll.** Approved hours become pay, with the right rates, allowances and deductions.
- **Billing.** Approved hours become client invoices, at the charge rate.
- **Accounting.** Invoices, pay and margins are reflected in Xero or MYOB.

Each arrow is a handoff. Wherever someone re-types data between two of them, there's a cost and a risk.

## What the ATS can usually expose

Most modern recruitment platforms have APIs that make integration possible. Two examples:

- **Bullhorn.** The [Bullhorn REST API](https://bullhorn.github.io/rest-api-docs/) covers core entities including candidates, client contacts, job orders and placements.
- **JobAdder.** JobAdder publishes [API documentation](https://api.jobadder.com/v2/docs) for its v2 API, which uses OAuth 2.0 and includes placement and timesheet resources.

What's actually available to you depends on your plan, your configuration and what the vendor permits for integrations. Check with your vendor before assuming a particular field or action is available.

## Check what already exists

Before building anything:

- **Look at your ATS marketplace.** Many ATS vendors list partner integrations for timesheets, payroll and back office.
- **Look at your payroll and timesheet providers.** Some offer connectors for common recruitment platforms.
- **Talk to your vendors.** Ask specifically which fields sync, in which direction and how often.

If a supported connector covers most of your needs, it's usually better than building custom.

## Payroll reporting obligations

Payroll in Australia and New Zealand comes with reporting obligations that any integration has to respect.

- **Australia.** Employers report payroll information to the ATO through Single Touch Payroll (STP), using STP-enabled software, each time they pay employees. See the [ATO's Single Touch Payroll guidance](https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/single-touch-payroll).
- **New Zealand.** Employers file employment information with Inland Revenue each payday. See [IRD's payday filing guidance](https://www.ird.govt.nz/employing-staff/payday-filing).

An integration shouldn't try to replace your payroll software's reporting. It should feed accurate, approved data into payroll software that handles the reporting properly. This is general information, so check the details with your accountant or payroll provider.

## Common integration patterns

These are typical patterns. What's possible depends on your systems.

### Placement to timesheet setup

When a placement is confirmed in the ATS, the worker, client, approver, rates and dates are set up in the timesheet system automatically, rather than re-keyed.

### Approved timesheets to payroll and billing

Once hours are approved, they flow to payroll at the pay rate and to billing at the charge rate, with no one re-typing the hours.

### Invoices to accounting

Client invoices are created in, or sent to, Xero or MYOB with the right client, rates and tracking categories.

### Margin reporting

Pay and charge data are combined, so you can see margin by placement, client or consultant without building a spreadsheet each month.

### Rate change handling

When a rate changes in the ATS, the change is reflected in timesheets, payroll and billing from the right date, with a record of what changed and when.

## A worked example: one structure, several outputs

For [Huntress Recruitment](/case-studies/huntress-recruitment), a New Zealand recruitment agency, the challenge was on the job advertising side. We introduced dedicated public-facing fields in Bullhorn, so job titles, locations and other details used for public listings are held separately from internal records. SEEK and the Huntress website are prepared from that same structure, and Bullhorn stays the system of record. The result was less duplicate admin, more consistent public information and clearer control over what goes out.

The same principle applies to placements and back office. When the source record is structured properly, it can drive several systems without re-typing.

## When an integration isn't the answer

An integration won't help if:

- **Placement data is unreliable.** If rates and dates are often wrong or missing in the ATS, fix that first. Otherwise you'll automate the errors.
- **Volume is low.** If you only have a few temps or contractors, a clear manual process may be enough.
- **A native connector already works.** Keep it, and fix the process around it rather than rebuilding.
- **Ownership is unclear.** Decide who owns placement data, timesheet approval and rate changes before connecting systems.

For a wider look at integration options, see [what to do when your business software doesn't integrate](/blog/business-software-does-not-integrate).

## Frequently asked questions

### Can Bullhorn connect to payroll?

Bullhorn's REST API covers placement records, so an integration can read placement data. Whether a connector exists for your payroll provider depends on the provider. Check Bullhorn's marketplace and your payroll provider first.

### Does JobAdder have an API?

Yes. JobAdder publishes documentation for its v2 API, which uses OAuth 2.0 and includes placement and timesheet resources. Access for integrations is subject to JobAdder's terms.

### What about STP and payday filing?

These are handled by your payroll software. An integration should send it accurate, approved data, and the payroll software reports to the ATO or IRD.

### Can an integration handle rate changes?

It can, if it's designed to. Rate changes need clear rules about effective dates and a record of what changed, so pay and billing stay accurate.

### We place both permanent and temporary staff. Does that matter?

Yes. Permanent placements usually need fewer back-office handoffs, such as a single invoice. Temporary and contractor placements need ongoing timesheets, payroll and billing, so they benefit most from integration.

## Map your placement-to-pay process with us

Tell us which ATS, timesheet, payroll and accounting tools you use, and where people re-type data. We'll show you which handoffs could be connected and what already exists. You can read more about our [system integrations](/services/system-integrations) work and our [Recruitment](/recruitment) page.

[Get in touch](/contact) to talk through your process.
