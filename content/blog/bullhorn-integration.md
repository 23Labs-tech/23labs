---
title: "Bullhorn Integrations in Australia and NZ: Connecting Your ATS to SEEK, Your Website and Your Back Office"
seoTitle: "Bullhorn Integration in Australia and NZ: SEEK, Website and More | 23Labs"
description: "How Bullhorn's SEEK integration works, where agencies still double-handle vacancies, and how Bullhorn's REST API can connect your website and other systems."
date: "2026-06-02"
updated: "2026-06-02"
author: "23Labs Team"
categories: "Recruitment, System Integrations, Operations"
image: "/site-images/photos/team-meeting-discussion.png"
featuredImage: "/site-images/photos/team-meeting-discussion.png"
imageAlt: "A team discussing a project together around a meeting table"
---

For many recruitment agencies in Australia and New Zealand, Bullhorn is where the real work happens: candidates, clients, vacancies and placements. But a vacancy doesn't stay in Bullhorn. It needs to appear on SEEK, on your own website and sometimes on other channels, and every one of those copies needs to stay accurate.

This article explains what Bullhorn's SEEK integration does, according to Bullhorn's own documentation, where agencies still end up double-handling job information and what the options are for connecting Bullhorn to the rest of your systems.

## The short answer

Start with Bullhorn's supported SEEK integration, which lets eligible agencies publish, update and expire SEEK ads from Bullhorn and bring applications back in. For the website and other systems, Bullhorn's REST API makes it possible to build integrations that use Bullhorn as the single source of truth for vacancy information.

The biggest gains usually come from deciding which fields are internal, which are public and which system is responsible for each.

## What Bullhorn's SEEK integration does

According to the [SEEK listing on the Bullhorn Marketplace](https://www.bullhorn.com/marketplace/seek/), recruiters can post, update and expire SEEK job ads directly from Bullhorn. Applications made on SEEK are passed into Bullhorn, and recruiters are notified by email.

Bullhorn's knowledge base adds some practical details:

- The SEEK integration is available to APAC-based clients with JobCast, and you need to contact Bullhorn Support to enable it.
- You add your SEEK account in Bullhorn using the Hirer ID provided by SEEK.
- According to Bullhorn's article on [publishing jobs to SEEK](https://kb.bullhorn.com/ats/Content/BHATS/Topics/publishingJobsToSeek.htm), you publish one job at a time, and you complete the required SEEK fields, with an option to copy details from the Bullhorn job.
- Closing a job in Bullhorn stops it receiving applications, but the SEEK ad remains live. Bullhorn advises expiring the posting before closing the job, or leaving the job open until the posting expires.

That last point is a common source of frustration. If your team closes jobs in Bullhorn and assumes the SEEK ad disappears, candidates may keep finding a role that's already filled.

## Where agencies still double-handle vacancies

Even with the SEEK integration switched on, we see the same problems come up:

- **Internal and public details are mixed.** The internal job record has client names, internal titles and notes that shouldn't appear publicly. Recruiters end up rewriting the public version each time.
- **The website is maintained separately.** Jobs are copied onto the website by hand, so the website and SEEK drift apart.
- **Updates don't flow everywhere.** A changed salary range, location or closing date is updated in one place and missed in another.
- **Closing jobs is inconsistent.** Ads stay live after roles are filled because closing the job and expiring the ads are separate steps.

None of these are failures of Bullhorn or SEEK. They're gaps in how information is structured and moved between them.

## The Huntress example

This is exactly the problem we worked on with [Huntress Recruitment](/case-studies/huntress-recruitment), a recruitment business in New Zealand. The team was managing job information across Bullhorn, SEEK and its WordPress website, and recruiters were often updating the same vacancy by hand in each place. Public-facing details such as job titles and locations could also differ from the internal Bullhorn record.

We mapped the workflow and introduced dedicated public-facing fields for job titles, locations and other candidate-facing details. Bullhorn stayed the system of record. SEEK listings and the website are now prepared from that same structure, so staff aren't maintaining a separate version for each channel.

The result, as described in the case study, is less duplicate administration, more consistent job information on public channels and clearer control over what candidates see, with Bullhorn still the core recruitment system.

## Bullhorn's REST API: what's possible

Bullhorn publishes [REST API documentation](https://bullhorn.github.io/rest-api-docs/). In plain terms:

- The API works with Bullhorn "entities" such as candidates, client contacts, job orders and placements.
- It supports creating, reading, updating and searching those records, subject to the permissions of the user the integration runs as.
- Access uses an OAuth 2.0 authorisation flow followed by a REST login that returns a session token.

That's what makes custom integrations possible: publishing vacancies to your website from Bullhorn, sending placement details to back-office systems or feeding reporting tools. Bullhorn also has a marketplace of partner integrations, which is worth checking before building anything custom.

## Getting the structure right first

Before connecting anything, it helps to agree on a few things:

- **Which system owns each piece of information.** For most agencies, Bullhorn owns the vacancy, and every public channel is a copy.
- **Which fields are internal and which are public.** Client name, internal title and margin notes stay internal. The candidate-facing title, location, salary display and description are public.
- **What happens when a job changes.** Who updates what, and which channels need to reflect the change.
- **What happens when a job closes.** Ads should be expired as part of the same process, not as a separate memory test.

This is the groundwork that made the Huntress integration work, and it's often the most valuable part of the project.

## When a custom integration isn't the answer

If you only publish to SEEK, your website already pulls jobs reliably and your team is comfortable with the process, you may not need anything new. Switching on and properly using Bullhorn's supported SEEK integration, with a clear rule about expiring ads, can solve a lot.

Custom work earns its place when you're maintaining vacancies across several channels, when internal and public information keeps getting mixed up or when the website is still updated by hand.

For a wider look at the cost of systems that don't connect, see [the hidden cost of tools that don't talk to each other](/blog/disconnected-business-tools).

## Frequently asked questions

### Does Bullhorn integrate with SEEK?

Yes. According to Bullhorn's documentation, the SEEK integration is available to APAC-based clients with JobCast. It lets you post, update and expire SEEK ads from Bullhorn, and SEEK applications are passed into Bullhorn. You need to contact Bullhorn Support to enable it.

### Can our website show jobs straight from Bullhorn?

Usually, yes. Bullhorn's REST API makes it possible to publish job information to a website. How you do it depends on your website platform and what you need to show. In the Huntress project, the WordPress website uses the same structured vacancy data as SEEK.

### Do we have to replace Bullhorn?

Not necessarily. Often the problem is how information moves around Bullhorn, rather than Bullhorn itself. Huntress kept Bullhorn as its core recruitment system.

### What about placements, timesheets and invoicing?

That's a different set of integrations, covering the back office after a placement. Bullhorn's API includes placement records, which is the starting point for connecting to timesheet, payroll and accounting systems.

### Does this work for New Zealand agencies?

Yes. Bullhorn's SEEK integration is available to APAC-based clients, and Huntress is a New Zealand recruitment business.

## Tell us how a vacancy moves through your agency

If your recruiters are still retyping vacancies between Bullhorn, SEEK and your website, walk us through how one job gets published today. We'll tell you what Bullhorn's supported integrations can already do, and where a [system integration](/services/system-integrations) would remove the double handling. You can also see how we work with agencies on our [Recruitment](/recruitment) page.

[Get in touch](/contact) and tell us how your vacancies are published today.
