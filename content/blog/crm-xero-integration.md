---
title: "Connecting Your CRM to Xero: Native Apps, Middleware or a Custom Integration"
seoTitle: "CRM Xero Integration: Native App, Middleware or Custom? | 23Labs"
description: "Compare the three ways to connect your CRM to Xero, see what each one handles and where it falls short, and learn when a custom integration is worth it."
date: "2026-05-05"
updated: "2026-05-05"
author: "23Labs Team"
categories: "System Integrations, Professional Services, Operations"
image: "/site-images/photos/dashboard-laptop-review.png"
featuredImage: "/site-images/photos/dashboard-laptop-review.png"
imageAlt: "A person reviewing a software dashboard on a laptop"
---

Your CRM knows who your customers are and what you've sold them. Xero knows what they've been invoiced and what they've paid. When the two don't talk, someone re-keys contacts, creates invoices from won deals by hand and checks Xero to answer the question "has this client paid?".

Connecting a CRM to Xero is one of the most common integration requests we see from service businesses. There are three ways to do it, and the right one depends on what needs to sync, how much volume you have and how much the data matters.

## The short answer

Start with the [Xero App Store](https://apps.xero.com/au) or your CRM's marketplace to see whether there's a supported connector for your CRM. If there is, test it carefully against your real workflow. Move to middleware or a custom integration only when you hit limits in what syncs, how fields map, how errors are handled or how much volume you're pushing through.

## What usually needs to sync

Before comparing options, be clear about what you actually need. For most businesses, it's some combination of:

- **Contacts and organisations.** New customers created once, in the right place, and kept consistent.
- **Deals or quotes to invoices.** A won deal or accepted quote becomes an invoice, with the right line items, tax rates and account codes.
- **Payments back to the CRM.** Sales and account managers can see whether a client has paid without logging into Xero.
- **Products and services.** Items and prices kept consistent across both systems.
- **Tracking categories or project codes.** So revenue is reported the way your business is managed.

Also decide the direction for each item. Does the CRM create Xero contacts, or the other way around? Should invoices only be created in one system? Clear answers here make every option easier.

## Three approaches, compared

### Native or marketplace app

These are connectors built by the CRM vendor, by Xero or by a partner, and listed on the Xero App Store or the CRM's marketplace.

- **Strengths.** Quickest to set up, maintained by the vendor and usually the lowest-maintenance option.
- **Limits.** You get the fields, directions and timing the vendor has chosen. Custom fields, unusual workflows or multiple Xero organisations may not be supported.

A useful example is HubSpot's connector. According to HubSpot's guide to [connecting HubSpot and Xero](https://knowledge.hubspot.com/integrations/connect-hubspot-and-xero-data-sync), it can sync contacts, products, invoices and payments, with one-way or two-way options depending on the object. HubSpot says changes from HubSpot to Xero are detected within a few minutes, while changes from Xero to HubSpot are detected every 30 minutes. It also lists limits worth knowing about, such as custom field mappings requiring at least a Data Hub Starter subscription and draft invoices not syncing to Xero. Other CRMs have their own connectors with their own rules, so read the documentation for yours.

### Middleware

Tools such as Zapier, Make and Power Automate can connect a CRM to Xero using triggers and actions.

- **Strengths.** More flexible than a fixed connector, fast to build and good for simple one-way flows, such as creating a Xero contact when a deal is won.
- **Limits.** Complex logic, matching and two-way sync get fragile. Usage-based pricing grows with volume, and failures can be easy to miss.

### Custom API integration

A custom integration is code that connects your CRM and Xero using their APIs, built around your workflow.

- **Strengths.** Handles your field mappings, rules, validation, multiple entities and exceptions. Can include proper logging, retries and reconciliation reports.
- **Limits.** Higher up-front effort and ongoing maintenance, because both systems change over time.

## Where native connectors fall short

Every connector is different, so test rather than assume. Common gaps to check for:

- **Direction.** Some data may only sync one way.
- **Field mapping.** Custom fields, tracking categories or PO numbers may need extra configuration or may not be supported.
- **Multiple Xero organisations.** Businesses running several entities may find limited support.
- **Timing.** Sync intervals may be fine for reporting but too slow for operational decisions.
- **Error visibility.** Some connectors show failed records clearly, others less so.
- **Editing rules.** Some connectors require invoices to be edited in the system that created them.

If a connector covers most of what you need, it's often better to adjust your process slightly than to build something custom for the last few gaps.

## What a custom Xero integration involves

If you do go custom, it helps to know what's involved on the Xero side. Xero publishes documentation for its [Accounting API](https://developer.xero.com/documentation/api/accounting/overview), and a few practical details shape every build:

- **Authorisation.** Xero uses OAuth 2.0. According to [Xero's OAuth FAQ](https://developer.xero.com/faq/oauth2), access tokens expire after 30 minutes and refresh tokens expire if they aren't used within 60 days, so an integration has to manage tokens properly or it will quietly stop working.
- **Rate limits.** Xero's [limits FAQ](https://developer.xero.com/faq/limits) lists per-organisation limits of 60 calls per minute, 5,000 calls per day and 5 concurrent calls. An integration has to be designed to stay within them, especially for initial data loads.
- **Webhooks.** [Xero webhooks](https://developer.xero.com/documentation/guides/webhooks/overview/) can notify an integration about changes to contacts and invoices, so it doesn't have to keep checking.
- **Safe retries.** If a request fails halfway, the integration must be able to retry without creating duplicate invoices.
- **Reconciliation.** A simple report showing what synced, what failed and why makes the integration trustworthy for finance.

## An example of the pattern

The CRM is often the right place for customer information to start. In our work for [CorIT Tech](/case-studies/corit-tech), we connected the CRM to project management tools, so client onboarding information creates the project records and tasks instead of staff copying details across. CorIT reported savings of more than 10 hours of admin per month.

A CRM to Xero integration follows the same principle. Capture the customer and the deal once, then let that information create what finance needs.

## When a custom integration isn't the answer

If your volumes are low, your fields are standard and an existing connector already works, keep it. A custom integration won't pay off for a handful of invoices a month. It also won't fix unclear ownership. If sales and finance disagree about who creates contacts or when an invoice should be raised, sort that out first.

For a broader look at the options when two systems won't connect, see [what to do when your business software doesn't integrate](/blog/business-software-does-not-integrate). If you're still working out the cost of the gaps, [the hidden cost of tools that don't talk to each other](/blog/disconnected-business-tools) is a good place to start.

## Frequently asked questions

### Which CRMs integrate with Xero?

Xero says its App Store lists hundreds of apps, and many CRMs also list accounting connectors in their own marketplaces. Search both for your CRM, then read the connector's documentation to see exactly what it syncs.

### Can the sync be two-way?

Sometimes. It depends on the connector and the type of record. HubSpot's connector, for example, offers two-way options for some objects. Two-way sync needs clear rules about which system wins when both change.

### What happens if a sync fails?

That depends on the connector or integration. Check how failures are reported and who is told. In a custom integration, failures should be logged, alerted to a named person and retried safely.

### Will this work with MYOB instead?

The same three approaches apply. MYOB publishes a developer API, so a custom integration is possible, and it's worth checking whether your CRM has a MYOB connector. The details will be different, so check MYOB's and your CRM's documentation.

### What does a custom integration cost?

Custom software and automation projects typically start from A$2,500. Final pricing depends on the systems involved, complexity and scope. For a larger integration, such as multiple Xero organisations or a two-way sync, we'd suggest an initial consultation first.

## Already have a connector that half-works?

Send us what it misses. We'll tell you whether to fix it, replace it or leave it alone. Our [system integrations](/services/system-integrations) work covers CRM and accounting connections for service businesses, and our [Professional Services](/professional-services) page shows where this fits for firms.

[Get in touch](/contact) and tell us which CRM you use and what needs to reach Xero.
