---
title: "Automating Fatigue and Chain of Responsibility Records for Transport & Logistics Businesses"
seoTitle: "Fatigue Records Automation: EWD, GPS and TMS | 23Labs"
description: "How transport businesses can connect EWDs, GPS tracking, TMS and payroll to cut fatigue paperwork, meet NHVR record keeping rules and stay audit-ready."
date: "2026-11-03"
updated: "2026-11-03"
author: "23Labs Team"
categories: "Transport & Logistics, Business Process Automation, System Integrations"
image: "/site-images/tech-img-08.png"
featuredImage: "/site-images/tech-img-08.png"
imageAlt: "A dark blue analytics dashboard showing bar and line charts, uptime gauges, a recent activity list, system status and a world map with city markers"
---

If you run heavy vehicles, your fatigue records are probably spread across run sheets, written or electronic work diaries (EWDs), a GPS tracking portal, the TMS, payroll and a spreadsheet of licence expiry dates. When an auditor or customer asks to see them, someone spends days pulling it all together.

This article covers what the National Heavy Vehicle Regulator (NHVR) expects of record keepers, the systems involved, and the automations that connect them so fatigue paperwork stops eating your week.

This is general information, not legal or compliance advice. Heavy Vehicle National Law (HVNL) obligations depend on your operation, so check the NHVR's guidance and get advice for your situation.

## The short answer

Fatigue record automation means work and rest records reach your record keeper digitally, get stored in a format that stays readable for the full retention period, and are checked against GPS data, rosters, jobs and pay records without anyone retyping them. The system flags gaps, late records, mismatches and expiring licences, and it can produce the evidence for a date range when you need it. Your team then reviews exceptions instead of chasing paper.

It doesn't make a schedule safe on its own. Fatigue decisions still belong to people.

## What the NHVR expects from record keepers

Under the HVNL's [Chain of Responsibility](https://www.nhvr.gov.au/safety-accreditation-compliance/chain-of-responsibility) (CoR), everyone who works with heavy vehicles, from the employer and vehicle owner to the businesses that send and receive goods, shares responsibility for safety. Each party has a primary duty to ensure the safety of its transport activities so far as is reasonably practicable, and executives must exercise due diligence to make sure the business complies.

Fatigue records are one of the most concrete parts of that. The NHVR's [record keeping requirements](https://www.nhvr.gov.au/safety-accreditation-compliance/fatigue-management/record-keeping-requirements) apply to drivers of fatigue-regulated heavy vehicles. That includes vehicles over 12 tonnes GVM, combinations over 12 tonnes, and buses over 4.5 tonnes GVM fitted to carry more than 12 adults including the driver.

The key points from that guidance:

- **Who keeps the records.** The record keeper is the employer for an employed driver, the accredited operator for drivers working under Basic Fatigue Management (BFM), Advanced Fatigue Management (AFM) or Alternative Compliance Accreditation for fatigue, and the driver themselves if they're self-employed or an owner-driver.
- **Work diary or local area record.** Drivers doing 100+ km work under standard hours, or any work under BFM, AFM, alternative compliance or exemption hours, must use a [National Driver Work Diary](https://www.nhvr.gov.au/safety-accreditation-compliance/fatigue-management/work-diary), either written or electronic. Drivers who only work within 100 km of base under standard hours don't need a work diary, but they must keep a local area record, such as a daily run sheet.
- **What a local area record shows.** For drivers who aren't their own record keeper, it covers the dates driven, the registration of each vehicle, and daily and weekly totals of work and rest time.
- **Timing.** Local area records must be completed within 24 hours after the driver stops work for the day and given to the record keeper within 21 days.
- **Retention.** Records must be kept for three years, somewhere an authorised officer can access them, and in a format that will still be readable in three years' time.

Two recent details are worth knowing:

- **The written work diary changed on 1 August 2026.** Following the 2025 HVNL amendments, the NHVR's [information sheet on the updated written work diary](https://www.nhvr.gov.au/files/media/document/883/202606-1760-hvnl-changes-to-recording-information-in-written-work-diary.pdf) says drivers no longer have to mark the day of the week or record work and rest totals on the daily sheet, and there's a new option for Alternative Compliance Hours. The NHVR is clear that this doesn't remove the work and rest limits or record keepers' obligations. If your checks relied on drivers' handwritten totals, your system now needs to calculate them.
- **EWDs come with their own record keeper duties.** The NHVR's [EWD guideline for record keepers](https://www.nhvr.gov.au/files/201806-0859-ewd-guideline-for-record-keepers.pdf) says record keepers must receive and store EWD information, keep the devices working, and provide reports to drivers and authorised officers. If you appoint a third party, such as a technology provider, to do the record keeping, both of you remain legally responsible.

## Common fatigue paperwork problems

In many transport businesses the records exist. The problem is that they're in different systems and formats:

- Paper run sheets and diary copies that get scanned, filed or lost.
- An EWD portal nobody cross-checks against the TMS, the GPS or payroll.
- Rosters in one system, timesheets in another, expiry dates in a spreadsheet.
- Owner-driver records that arrive by email, if at all.

The cost shows up when you need to answer a question across them, such as "did this driver's hours on the 14th match the jobs we gave them and where the truck actually went?"

## The systems involved in fatigue record keeping

Most operators already have several of these. The products named are examples, not recommendations.

- **Electronic work diaries.** In Australia, only systems on the NHVR's [EWD register](https://www.nhvr.gov.au/safety-accreditation-compliance/fatigue-management/electronic-work-diary-ewd/ewd-register) can be used as an EWD. On 12 November 2026 it listed 13, including Teletrac Navman's Sentinel, MTData's Talon and Swift, Logmaster Australia, Step Global's Smart eDriver 2.0 and Netstar Australia EWD.
- **GPS tracking and telematics.** Platforms such as [Teletrac Navman TN360](https://docs-au.telematics.com/), [Geotab](https://www.geotab.com/au/fleet-management-solutions/software-integration/), [EROAD](https://help.eroad.com/au/au-apideveloperresources/) and [MTData's Hawk-Eye](https://mtdata.com.au/faq/can-i-use-my-existing-systems-with-mtdata-solutions/) record vehicle movements and publish APIs. A GPS tracker on its own isn't a work diary unless it's an approved EWD system.
- **TMS and dispatch.** Where jobs and rosters are planned. Some dispatch tools show fatigue information; MTData's [Control Room](https://mtdata.com.au/control-room/), for example, mentions fatigue warnings alongside job planning.
- **Payroll and timesheets.** Xero Payroll, MYOB or [Employment Hero Payroll](https://partners.employmenthero.com/resources/building-your-integration-with-employment-hero-payroll), whose payroll API includes a bulk timesheet import.
- **Microsoft 365 or Google Workspace.** Forms, SharePoint or Google Drive, and the spreadsheets that hold licence and accreditation dates.

## Ideal fatigue and CoR automations

### Connecting your electronic work diary to your TMS and payroll

Some EWD providers make their data available to other systems. Logmaster, for example, says its [API connectivity](https://logmaster.com.au/pages/ewd-for-transport-companies) lets diary data reach payroll or other business systems, and MTData says it provides an [open API](https://mtdata.com.au/faq/can-i-use-my-existing-systems-with-mtdata-solutions/). Where yours does, an integration can:

- Pull work and rest records into the same store as local area records and written diary copies, so every driver has one history however they recorded it.
- Show schedulers each driver's recorded hours next to the jobs being allocated, so people make the fatigue call with the full picture.
- Turn recorded work time into draft timesheets for payroll, ready for approval instead of retyping.

Check what your provider supports before planning around it.

### Comparing GPS tracking data with work diary records

This is one of the most useful checks. Telematics records when a vehicle was moving; the work diary or run sheet records when the driver says they were working. An integration can line the two up by vehicle and date and flag gaps, such as a truck moving during recorded rest. EROAD offers a version of this check in New Zealand: its [Time Alignment Report](https://www.eroad.co.nz/products/health-safety-eroad-day-logbook/) compares logbook activity with the vehicle's in-cab unit. A mismatch isn't proof of a breach, but it's the right thing for a person to look at.

### Capturing local area records digitally

A short form in Microsoft Forms, Google Forms or the driver app you already use can capture the fields the NHVR lists, timestamp the entry and send it to the record keeper. Daily and weekly totals are calculated rather than typed, and a record not submitted within 24 hours becomes an alert instead of a gap you find months later.

### Licence, registration and accreditation expiry alerts

Licences, vehicle registrations, accreditation details and subcontractor documents all have dates. A scheduled check can remind the right person before something expires and stop a driver or vehicle being allocated work while a document is missing, if that's the rule you want.

### Producing audit-ready CoR evidence on request

Three years is a long time for a file format or a portal login. Storing records in a stable, readable format, indexed by driver, vehicle and date, keeps them usable and less dependent on one vendor. When records are already linked, pulling everything for a driver, vehicle or date range for an audit becomes a report, not a project.

## An illustrative example

This is a hypothetical example, not a client case study.

A regional carrier runs local and interstate work. Local drivers hand in paper run sheets, interstate drivers use an approved EWD, the trucks run a telematics platform, and licence dates live in a spreadsheet. Before each customer audit, the compliance coordinator spends days matching records to the TMS job history.

After automation, local drivers submit their records through a short form on their phones. EWD records are pulled in each night, and both land in one record store alongside GPS trip data. Each morning the coordinator gets a list of exceptions: a run sheet that wasn't submitted, a truck that moved during a driver's recorded rest, and a licence due to expire in three weeks. Payroll receives draft timesheets, and audit requests are answered from a saved report.

## When your existing software already does this

Australia has plenty of dedicated CoR and fatigue compliance platforms, and many EWD providers include record keeper portals, breach alerts and reporting. If one covers what you need, use it.

Custom work earns its place in the gaps between systems: getting EWD data into your TMS, linking compliance records to payroll or subcontractor pay, or reporting across depots that use different tools. Our article on [custom transport management software](/blog/custom-transport-management-software) covers how to decide between configuring, extending and replacing, and [Zapier vs custom integration](/blog/zapier-vs-custom-integration) covers which kind of connection suits which job.

## When automation isn't the answer

- **If the process itself isn't defined.** If nobody owns record keeping or there's no agreed way to handle a late record, start there. Automating an unclear process makes the confusion faster.
- **If the problem is the schedule.** Records show what happened. If rosters regularly push drivers close to their limits, that's an operational decision, not a software one.
- **If you have very few drivers.** A small fleet with good habits and a well-kept folder may not need anything more.

For an example of how we connect systems that weren't designed to talk to each other, see our [Huntress Recruitment case study](/case-studies/huntress-recruitment).

## A note for New Zealand operators

The HVNL doesn't apply in New Zealand. Work time and logbook rules are set under the Land Transport Act 1998 and explained in NZTA's [work time and logbooks factsheet](https://www.nzta.govt.nz/assets/resources/factsheets/02/docs/02-work-time.pdf). Under [section 30ZH](https://www.legislation.govt.nz/act/public/1998/0110/latest/DLM434631.html), a driver must keep a logbook for 12 months after its last entry. An employed driver must give their employer a copy of each completed logbook record within 14 days, and the employer must keep it for 12 months. Drivers must use an NZTA-approved logbook, and electronic options exist; EROAD, for example, describes its Day Logbook as NZTA approved. The same automation ideas apply, but build to the NZ rules and retention periods.

## How this fits with the rest of your operation

The same driver and job data feeds [proof of delivery automation](/blog/proof-of-delivery-automation), and our overview of [freight and logistics workflow automation](/blog/freight-logistics-workflow-automation) covers the wider picture. If your compliance tracking lives mostly in spreadsheets, our guide to [replacing spreadsheet-based processes](/blog/replace-spreadsheet-business-processes) is a useful next read. You'll find more on our [transport and logistics](/freight-logistics) page.

This work sits across our [business process automation](/services/business-process-automation) and [system integrations](/services/system-integrations) services.

## Frequently asked questions

### How long do we have to keep fatigue records in Australia?

The NHVR says three years, in a location an authorised officer can access and a format that will remain readable.

### Which electronic work diaries are NHVR approved?

Only the systems listed on the NHVR's EWD register. Check the register and each system's certificate of approval before you buy, because the list changes.

### Can GPS tracking replace a work diary?

Not on its own. A driver who needs a work diary must use a written diary or an NHVR-approved EWD. GPS data is still useful for cross-checking records.

### Can EWD data flow into our TMS or payroll?

Often, depending on what your provider offers. Some EWD and telematics providers publish APIs or scheduled reports that an integration can use.

### If a provider keeps our records, are we still responsible?

Yes. The NHVR's EWD guideline says that when a third party handles record keeping, both the record keeper and the provider remain legally responsible.

### What does fatigue record automation cost?

Custom software and automation projects typically start from A$2,500. Final pricing depends on the systems involved, complexity and scope. If you're connecting several systems across depots, we'd suggest an initial consultation first.

## Talk to us about your compliance records

If pulling fatigue records together still takes days, tell us where they live today and which EWD, telematics and TMS tools you use. We'll tell you what they can already do, and where an integration would genuinely help.

[Get in touch](/contact) and walk us through how one driver's records get from the cab to your files.
