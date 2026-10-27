---
title: "Who Looks After Your Automations? Maintaining Workflows and Integrations After Go-Live"
seoTitle: "Automation Maintenance: Keeping Integrations Working | 23Labs"
description: "Why automations and integrations break after go-live, what a simple maintenance plan covers and how to decide who looks after them in your business."
date: "2026-05-19"
updated: "2026-05-19"
author: "23Labs Team"
categories: "Ongoing Support, System Integrations, Operations"
image: "/site-images/photos/workers-system-monitors.png"
featuredImage: "/site-images/photos/workers-system-monitors.png"
imageAlt: "Two engineers reviewing connected system data across multiple monitors"
---

Most conversations about automation focus on the build. Which tools, which workflow, how long it takes. Far fewer focus on what happens six months later, when the automation that everyone relied on quietly stops working and nobody notices until a customer, a report or the accountant points it out.

Automations and integrations aren't "set and forget". They connect systems that change, run on credentials that expire and depend on business processes that evolve. This article covers why they break, what a sensible maintenance plan includes and how to decide who owns it.

## The short answer

Every automation needs a named owner, monitoring that tells someone when it fails and a simple routine of checks. That can be someone in your team, the vendor or developer who built it, or a support partner. What matters is that it's somebody's job.

## Why automations break after go-live

Most failures come from a short list of causes.

### Expired connections and credentials

Integrations authorise themselves to each system, and those authorisations don't last forever. Xero is a good example. According to [Xero's OAuth FAQ](https://developer.xero.com/faq/oauth2), access tokens expire after 30 minutes and refresh tokens expire if they aren't used within 60 days. A well-built integration handles this automatically, but if it doesn't run for a while, or someone disconnects it, it can stop without warning. Staff leaving is another common trigger, when an integration was connected using their personal account.

### Vendor changes

Software vendors update their products and APIs. Fields get renamed, features change and older versions are retired. Each change can affect an integration built on the old behaviour.

### Rate limits and volume

Many APIs limit how many requests an integration can make. [Xero's limits FAQ](https://developer.xero.com/faq/limits) lists per-organisation limits such as 60 calls per minute and 5,000 calls per day. Microsoft documents [throttling for Microsoft Graph](https://learn.microsoft.com/en-us/graph/throttling), where requests can be slowed or rejected when limits are exceeded. An integration that worked at launch can start hitting limits as your business grows.

### Process changes

The business moves on. A new service, a new approval step, a new team member or a new tool means the automation no longer matches how work actually happens. Nothing is technically broken, but the output is wrong.

### Data surprises

A customer name with an unusual character, a missing field, a duplicate record or an invoice with a zero value. Edge cases that didn't exist during testing turn up in real use.

## The cost of a quiet failure

The biggest risk isn't that an automation fails. It's that it fails silently. Invoices stop syncing, enquiries stop reaching the right person or jobs stop being created, and the gap is only discovered later.

You can estimate the risk using your own numbers:

- How many records does this automation handle per day?
- How long could a failure go unnoticed today?
- How long would it take someone to find and fix the missed records by hand?

If the answer is "a few hundred records over a week or two", the clean-up alone can outweigh the cost of basic monitoring.

## A simple maintenance plan

You don't need a complicated process. Most small businesses can get a long way with this.

### Daily or automatic

- **Failure alerts.** Every automation should notify a named person when it fails, not just log the error somewhere nobody looks.
- **A simple health check.** A count of records processed each day, so a sudden drop to zero is obvious.

### Monthly

- **Review errors and retries.** Look at what failed, why and whether the same problem keeps happening.
- **Check connections.** Confirm integrations are connected, authorised and running under the right account.
- **Spot-check outputs.** Pick a handful of records and check they arrived correctly at the other end.

### Quarterly

- **Review access.** Remove access for people who've left, and check integrations use shared service accounts rather than personal logins where possible.
- **Test the critical paths.** Run a test transaction through the automations the business relies on most.
- **Check for vendor changes.** Look at release notes or announcements from your main software vendors.

### When something changes

- **Before changing a process, check the automations.** Adding a field, step or tool may need a matching change.
- **When a vendor announces a change, check the impact.** Don't wait for the integration to break.

## Documentation that saves you later

Good documentation doesn't need to be long. For each automation, write down:

- What it does, in plain English.
- Which systems it connects and which accounts it uses.
- What triggers it and what it creates or changes.
- Who owns it and who to contact if it fails.
- Known limitations and edge cases.

This matters most when the person who built or set it up leaves. Without it, every change becomes guesswork.

## Security basics

Integrations often have broad access to important systems, so they're worth securing properly. The Australian Cyber Security Centre's [small business cyber security guide](https://www.cyber.gov.au/business-government/small-business-cyber-security/small-business-hub/small-business-cyber-security-guide) recommends basics such as turning on multi-factor authentication, keeping software updated and backing up important information. For integrations specifically:

- **Use least-privilege access.** Give each integration only the permissions it needs.
- **Protect credentials.** Store API keys and tokens securely, never in shared spreadsheets or emails.
- **Remove what you don't use.** Disconnect old integrations and revoke their access.

## Who should own it

There are three common options.

- **An internal owner.** Works well for simple automations built in no-code tools, where someone in the team understands them and has time to check them.
- **The original builder.** Makes sense where the vendor or developer knows the system and offers ongoing support.
- **A support partner.** Useful when the original builder isn't available, the automations are business-critical or nobody in the team has the time or confidence to change them.

Whichever you choose, write it down and make sure the owner knows it's their job.

## When ongoing support isn't the answer

Not every automation needs a support arrangement. If an automation is simple, low-volume and easy to fix by hand, an internal owner with a monthly check is usually enough. If it's built on a vendor's native integration, the vendor maintains it, and your job is mainly to watch for failures. And if an automation no longer serves a purpose, the best maintenance is to switch it off.

## How we approach it

Our [Ongoing Support](/services/ongoing-support) service is for software, automations and integrations already in use, whether 23Labs built them or they're systems we can understand. It covers maintenance and fixes, improvements once a system is in use, new features when the process changes and handover documentation the team can follow. Support is delivered remotely across Australia and New Zealand from Melbourne.

That kind of long-term relationship is how our work with [CorIT Tech](/case-studies/corit-tech) developed. After we automated the handoff from their CRM to project records, CorIT developed an ongoing relationship with 23Labs and became a white-label partner.

If the problem is that your systems were never properly connected in the first place, start with [what to do when your business software doesn't integrate](/blog/business-software-does-not-integrate), or see our [system integrations](/services/system-integrations) work.

## Frequently asked questions

### How often should automations be checked?

Failure alerts should be immediate. Beyond that, a monthly review of errors and connections and a quarterly check of access and critical paths suits most small businesses.

### Can you support automations someone else built?

Often, yes, as long as we can access and understand the system. A short review is usually the first step.

### What does monitoring look like in practice?

At its simplest, an alert to a named person when something fails, plus a daily count of records processed. More critical automations may need more detailed logging.

### What should we do when a vendor announces a change?

Check which of your automations use the affected feature or API, and test them before the change takes effect.

### Do no-code automations need maintenance too?

Yes. They connect to the same systems, rely on the same credentials and break for the same reasons.

## Not sure what's running in the background?

Tell us which automations and integrations your business relies on. We'll help you work out what's healthy, what's at risk and who should own each one.

[Get in touch](/contact) to talk about the systems you already have.
