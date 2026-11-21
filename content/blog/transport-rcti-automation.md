---
title: "Automating RCTIs and Subcontractor Pay for Transport & Logistics Businesses"
seoTitle: "RCTI Automation: TMS to Xero for Transport | 23Labs"
description: "How transport businesses can automate subcontractor RCTIs from TMS, GPS and fuel card data, check ATO rules and post bills to Xero or MYOB."
date: "2026-10-20"
updated: "2026-10-20"
author: "23Labs Team"
categories: "Transport & Logistics, Business Process Automation, System Integrations"
image: "/site-images/tech-img-04.png"
featuredImage: "/site-images/tech-img-04.png"
imageAlt: "A hand pointing at floating orange dashboard panels linked by lines, showing a world map, sales and revenue charts, and system status"
---

If your transport business pays owner-drivers or subcontract carriers, you probably don't wait for them to invoice you. You work out what each one is owed from their jobs, then send them a recipient-created tax invoice (RCTI). In many businesses that's still a spreadsheet job: exporting completed runs from the TMS, checking waiting time against the GPS, applying rates by hand, adding fuel levies and tolls, typing up each RCTI and keying the same figures into Xero or MYOB.

This article covers what the ATO expects of RCTI issuers, the systems most carriers already have, and the automations that connect them so the pay run builds itself.

This is general information, not tax advice. RCTIs have specific GST rules, so check your arrangements with your accountant or tax adviser.

## The short answer

RCTI automation means the completed, verified jobs in your transport management system (TMS) or driver app become the source of each subcontractor's pay. Rate cards and adjustments are applied by rules, GPS and fuel card data back up the extras, the RCTI is generated and sent automatically, and a matching bill lands in your accounting software. The system checks each subcontractor's GST registration and RCTI agreement before anything is issued. Your team reviews exceptions and approves the run instead of building it from scratch.

## What the ATO expects from RCTI issuers

The ATO's guidance on [tax invoices](https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices) says you can issue an RCTI if:

- You and the supplier are both registered for GST when the RCTI is issued.
- You've agreed in writing that you may issue RCTIs and they won't issue tax invoices.
- The agreement is current and effective when you issue the RCTI.
- The type of supply is covered by the Commissioner's determination.

That determination is the [Recipient Created Tax Invoice Determination 2023](https://www.legislation.gov.au/F2023L00785/latest/text). Under it, a GST-registered business can issue RCTIs where it, rather than the supplier, determines the value of the supply. It also sets the practical requirements: issue the RCTI to the supplier within 28 days, keep the original or a copy for five years, and have a written agreement in place, either as a separate document or embedded in the RCTI itself. The ATO's page adds that a valid RCTI must show it's a recipient-created tax invoice, show both parties' ABNs and, where GST is payable, show that it's payable by the supplier.

Two details are worth knowing:

- **The old industry determinations are gone.** The 2023 determination repealed earlier ones, including the 2017 determination for road transport operators. If your RCTI agreements were written years ago, it's worth having them reviewed.
- **The ATO has published a draft ruling.** [GSTR 2026/D2](https://www.ato.gov.au/law/view/document?DocID=DGS%2FGSTR2026D2%2FNAT%2FATO%2F00001), released on 29 July 2026, sets out the ATO's preliminary view on when an RCTI is valid and what happens when it isn't. It's a draft, so check its current status before relying on it.

## Common subcontractor pay problems in transport

Typical problems in a manual subcontractor pay run look like this:

- **Jobs missed or paid twice** because the TMS export and the spreadsheet don't match.
- **Waiting time and extra kilometres disputed** with no easy way to check them.
- **Fuel levies and tolls applied from an old rate**, or fuel card deductions forgotten.
- **RCTIs issued to someone whose GST registration or agreement has lapsed.**
- **The same figures typed twice**, once on the RCTI and again as a bill in Xero or MYOB.

Each one is a data problem. The information already exists in your systems; it just isn't connected.

## The systems most carriers already have

Most Australian and New Zealand transport businesses run some mix of the following. The products named are common examples, not recommendations, and we haven't assumed any particular one.

- **A TMS.** Platforms such as [Transvirtual](https://www.transvirtual.com/transport-billing-invoicing/rcti-reverse-billing/), [CartonCloud](https://help.cartoncloud.com/knowledge/integrate-cartoncloud-with-xero) and [MyTrucking](https://mytrucking.com/integrations/xero-integration/) hold the jobs, customers and rates.
- **Driver apps and proof of delivery.** Either the TMS's own app or an in-cab system such as [MTData's Talon and Swift apps](https://mtdata.com.au/solution/fleet-job-dispatch-and-mobility-management/), which capture job status, signatures and photos.
- **GPS tracking and telematics.** Platforms such as [Teletrac Navman TN360](https://docs-au.telematics.com/), [Geotab](https://www.geotab.com/au/fleet-management-solutions/software-integration/) and [EROAD](https://help.eroad.com/au/au-apideveloperresources/) record where vehicles went and when. All three publish APIs.
- **Fuel cards.** Many fuel card providers offer transaction reports. [WEX Motorpass](https://motorpasshelp.wexinc.com/en/articles/6346930-what-reporting-is-available), for example, lets you download card transactions as a CSV file.
- **Accounting.** Xero or MYOB, where the bills are paid and GST is reported.
- **Microsoft 365 or Google Workspace.** Where RCTI agreements, emails and spreadsheets usually live.

The question is less "which software should we buy?" and more "how do we get these systems to share the data they already hold?"

## Ideal automations for RCTIs and subcontractor pay

### How to automate RCTIs from your TMS to Xero or MYOB

The most reliable source of pay is the job record. When a job is closed in your TMS with valid proof of delivery, it's ready to be paid. If POD capture is inconsistent, fix that first; our article on [proof of delivery automation](/blog/proof-of-delivery-automation) explains how.

A typical flow:

- Each evening, closed jobs are pulled from the TMS and grouped by subcontractor.
- The workflow looks up the agreed rate for each job, whether that's per load, kilometre, hour, pallet or tonne, from one maintained rate table rather than a spreadsheet copied each week.
- Anything without a matching rate goes to a person for review rather than being guessed.
- Once the run is approved, each subcontractor gets an RCTI showing job references, dates, rates and adjustments, generated from a template that includes the details the ATO requires. It's emailed, stored and date-stamped, which helps you stay inside the 28-day window.
- A matching bill is created in your accounting software from the same figures, so the RCTI and the bill can't drift apart.

Both accounting platforms publish APIs that can create bills: Xero's [Accounting API](https://developer.xero.com/documentation/api/accounting/overview) and the [MYOB Business API](https://developer.myob.com/api/myob-business-api/v2/purchase/bill/bill_service/). That matters, because neither handles RCTIs as a dedicated feature:

- **Xero.** Xero doesn't have a dedicated RCTI transaction type. Its help article on how to [create a recipient-created tax invoice](https://central.xero.com/s/article/Enter-recipient-created-invoices-in-Xero) describes a workaround: apply an RCTI template to a purchase order, send it to the supplier, then create a bill from it. A native option is an open [Xero product idea](https://productideas.xero.com/forums/967139-purchase-orders-bills-inventory/suggestions/45713554-bills-to-pay-transaction-type-for-buyer-created).
- **MYOB.** MYOB's support page on [recipient created tax invoices](https://www.myob.com/au/support/myob-business/purchases/receiving-items-without-a-supplier-bill/recipient-created-tax-invoices) says an RCTI is entered like any other bill and prints as a Recipient Created Tax Invoice by default.

### Using GPS tracking data to check waiting time and kilometres

Waiting time and extra kilometres are hard to check after the fact. Telematics data can help settle them before they become arguments. EROAD, for example, documents (for customers on qualifying plans) a geofence entry and exit feed with date and odometer-stamped events for customer and depot sites. An integration can compare those events with the waiting time claimed on a job and flag any big differences for review. The same idea works with location or trip data from other telematics platforms, depending on what your provider's API exposes.

This works best for your own fleet and for subcontractors who share tracking data with you. Agree that in writing before relying on it.

### Matching fuel card transactions to levies and deductions

If you supply fuel cards to subcontractors and recover the cost, the fuel card report can be matched to each vehicle and pay period automatically, instead of someone ticking off a statement. Take care with GST here. In its draft ruling, the ATO says a recipient can include its own supply on the same document and pay only the balance, but both supplies remain separate for GST purposes and the GST on one can't be reduced by the GST on the other. Build that into the rules from the start, and have your accountant confirm how each deduction should be coded.

### Checking GST registration with ABN Lookup before every pay run

This is where automation helps with compliance as well as time. The ATO expects RCTI issuers to check a supplier is registered for GST before the first RCTI and periodically after that. It describes automated validation checks at the time of issuing an RCTI as best practice, and points to the free [ABN Lookup web services](https://abr.business.gov.au/Tools/WebServices) as a way to bring that data into your own software. A practical setup holds back anyone who fails the check. The ATO is clear that you can't issue RCTIs to a supplier who is no longer registered for GST.

### Tracking RCTI agreements in Microsoft 365 or Google Workspace

Signed agreements often sit in someone's inbox. Storing them in SharePoint or Google Drive, with each subcontractor's agreement date recorded in a list, lets the pay run check that an agreement is current and remind someone before it lapses.

## An illustrative example

This is an illustrative example, not a client project.

A carrier uses a few dozen owner-drivers alongside its own fleet. Jobs are closed in a TMS and the fleet runs on a telematics platform, but subcontractor pay is built each fortnight in a spreadsheet, RCTIs are mail-merged from it and the bookkeeper enters each one as a bill in Xero.

A practical first version might look like this:

- Closed jobs with complete POD are pulled from the TMS each evening and matched to the right subcontractor.
- Rates, levies and tolls come from a maintained rate table, and waiting time claims are checked against geofence events.
- GST status is checked through ABN Lookup, and anyone with an expired agreement is held back.
- Once the run is approved, RCTIs are emailed and matching draft bills are created in Xero for finance to approve and pay.

The office stops building the pay run and starts reviewing the exceptions.

## When your TMS already does this

Some transport platforms include subcontractor pay and RCTI features, so check before building anything. Transvirtual, for example, says on its [RCTI page](https://www.transvirtual.com/transport-billing-invoicing/rcti-reverse-billing/) that it can generate RCTIs for agents, carriers or subcontractors. MyTrucking's help centre, on the other hand, says it [doesn't have an RCTI feature](https://help.gomytrucking.com/en/articles/5561364-creating-rcti-s-or-bcti-s-in-xero) and describes a Xero workaround instead. Features change, so confirm with your vendor:

- Whether your TMS can calculate subcontractor pay from jobs, and whether it supports your rate structures.
- Whether it can produce an RCTI that meets the ATO's requirements.
- Whether it sends bills to your accounting software, and exactly what it syncs.
- Whether it has an API for the parts it doesn't cover.

If the TMS covers most of it, configure it properly. Integration earns its place in the gaps: unusual rate structures, GPS and fuel card checks, GST and agreement checks, or an accounting connection the TMS doesn't offer. If the TMS itself is the problem, see our article on [custom transport management software](/blog/custom-transport-management-software).

## When automation isn't the answer

Automation won't fix rates nobody agrees on. If each subcontractor's deal lives in someone's head, document it first. It won't fix missing paperwork either: get RCTI agreements signed and GST registrations checked with your accountant before automating. And if you only pay a handful of subcontractors on simple rates, a good template may be all you need.

## A note for New Zealand operators

New Zealand's rules are different. Since 1 April 2023, Inland Revenue calls these [buyer-created taxable supply information](https://www.ird.govt.nz/gst/tax-invoices-for-gst/buyer-created-taxable-supply-information), and IRD approval isn't needed when both parties are GST-registered and agree. The automation pattern is the same, but the requirements follow IRD's rules.

## How this fits with the rest of your operation

Our [transport and logistics](/freight-logistics) page covers the other workflows we help with, and our guide to [CRM and Xero integration](/blog/crm-xero-integration) explains how accounting connections work more generally. The principle is the one from our [CorIT Tech client onboarding case study](/case-studies/corit-tech), in a different industry: information captured once in the CRM creates the project records and tasks that follow. In a transport business, the completed job plays that role, driving both the customer invoice and the subcontractor's pay.

This work sits across our [business process automation](/services/business-process-automation) and [system integrations](/services/system-integrations) services.

## Frequently asked questions

### Can we issue RCTIs to every subcontractor?

Only where the ATO's requirements are met. Both of you must be registered for GST, you need a current written agreement, and the supply must be covered by the RCTI determination. If a subcontractor isn't registered for GST, you can't issue them an RCTI. Your accountant can confirm how this applies to your arrangements.

### How do you create a recipient created tax invoice in Xero?

Xero doesn't have a dedicated RCTI transaction type. Its own help describes a purchase order with an RCTI template, sent to the supplier and then converted to a bill. An integration can produce the RCTI document and the bill from the same data instead.

### Can our TMS send subcontractor bills straight to Xero or MYOB?

Some can, and some only send customer invoices. Check what your TMS's accounting connector actually syncs. Where it stops short, the Xero and MYOB APIs can fill the gap.

### Can GPS tracking data be used to check subcontractor pay?

Yes, as a check rather than the source of pay. Geofence and trip data can confirm waiting time and kilometres claimed on a job, provided the subcontractor has agreed to share tracking data.

### Can the system check GST registration automatically?

Yes. The ABN Lookup web services are free once you register, and the workflow can hold back anyone who fails the check.

### What does RCTI automation cost?

Custom software and automation projects typically start from A$2,500. Final pricing depends on the systems involved, complexity and scope. If you're connecting several systems or have complex rate structures, we'd suggest an initial consultation first.

## Talk to us about your next pay run

If your subcontractor pay still starts with a spreadsheet export, tell us how a pay cycle works today and which TMS, telematics and accounting tools you use. We'll tell you what they can already handle, and where automation would genuinely help.

[Get in touch](/contact) and walk us through one subcontractor's pay, from completed job to paid bill.
