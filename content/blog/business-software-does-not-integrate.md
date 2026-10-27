---
title: "What to Do When Your Business Software Doesn't Integrate"
seoTitle: "When Your Business Software Doesn't Integrate | 23Labs"
description: "Two systems that won't talk to each other? The practical options, from native integrations and APIs to middleware and custom builds, and how to choose."
date: "2026-10-13"
updated: "2026-10-13"
author: "23Labs Team"
categories: "System Integrations, Business Process Automation"
image: "/site-images/tech-img-10.png"
featuredImage: "/site-images/tech-img-10.png"
imageAlt: "Interlocking glowing loops representing two business systems connected together"
---

You've found the right job management system, or the right CRM, or the right booking tool. It does what your team needs. There's just one problem: it doesn't connect to your accounting software, or your website, or the other system everyone else uses. So someone ends up copying information between the two.

"It doesn't integrate" is one of the most common things we hear from business owners. In most cases it's only half true. There's often a way to connect two systems. The real questions are which approach suits your situation, how reliable it needs to be and whether connecting them is worth it at all.

This article walks through the options in roughly the order we check them, from the simplest to the most involved. It also covers when replacing a system makes more sense than forcing a connection, and the security questions to ask before any data starts moving.

## Start with the job, not the technology

Before looking at integration options, get clear on what actually needs to happen. Answer these questions in plain language:

- **What information needs to move?** For example customer details, job status, invoice amounts or stock levels.
- **Which direction?** One way, or both ways?
- **How quickly?** Within seconds, every hour or once a day?
- **What starts it?** A new record, a status change, or a set time?
- **Which system is the source of truth?** If the two disagree, which one wins?

This short exercise often changes the answer. A business that thinks it needs a real-time, two-way sync may only need one system to send new customers to the other once a day. That's a much simpler and cheaper problem to solve.

## Option 1: Check for a native integration

Start with the obvious. Many business tools have built-in integrations or an app marketplace. Xero, MYOB, HubSpot and many job management and booking systems list the apps they connect to.

Native integrations are usually the quickest and lowest-maintenance option because the software vendor maintains them. The catch is that they don't always do what you need. A native integration might sync contacts but not invoices, or create a record but not update it later. Before you rely on one, check exactly which fields move, in which direction, and what happens when a record is edited or deleted. Test it with a few real records first.

If a native integration covers most of what you need, it's often better to adjust the process slightly than to build something custom to cover the last 10 per cent.

## Option 2: Check whether the software has an API

If there's no native integration, the next question is whether each system has an API. An API is a documented way for other software to read and write data in a system. Most modern cloud software has one, though some vendors only offer it on certain plans or to approved partners.

A useful tip: ask the vendor specific questions. "Does it integrate with X?" often gets a quick no. "Do you have a public API, webhooks or a scheduled export, and which plans include them?" gets a far more useful answer. Developer documentation is often public too. Xero, MYOB and ServiceM8, for example, all publish developer documentation for their APIs.

If both systems have an API, they can almost always be connected. Whether it's worth the effort depends on the next few options.

## Option 3: Use webhooks for things that need to happen quickly

A webhook is a message one system sends automatically when something happens, such as a new invoice, a changed contact or a job moving to complete. Instead of another system checking for changes every few minutes, it gets told straight away.

For example, [Xero's webhooks](https://developer.xero.com/documentation/guides/webhooks/overview/) can notify another system about changes to contacts and invoices, and [ServiceM8 supports webhooks](https://developer.servicem8.com/docs/webhooks-overview) for changes to records such as jobs. Webhooks are what make "when the job is completed, create the invoice" feel instant.

They do need something on the other end to receive the message and act on it. That's either a middleware tool or a custom integration.

## Option 4: Use a middleware or automation platform

Tools such as Zapier, Make and Microsoft Power Automate sit between your systems and move data based on triggers and rules. For simple, well-defined workflows they can be a fast and affordable way to connect two systems without writing code.

They work well when:

- The workflow is simple, such as "new form submission creates a CRM contact and notifies the team".
- Both systems are supported by the platform.
- Volumes are moderate and a short delay is acceptable.

They become harder to manage when:

- The logic grows complicated, with many conditions, lookups and exceptions.
- Lots of separate automations build up over time and nobody remembers what each one does.
- Failures happen quietly and nobody notices until a customer does.
- Per-task pricing climbs as volumes grow.

Middleware is often the right first step. Just treat it like any other business system. Give it an owner, document it and check that someone is alerted when something fails.

## Option 5: Build a custom API integration

When the workflow is more complex, the volumes are higher or the data matters too much to leave to a patchwork of automations, a custom integration is often the better option. This is code written specifically to connect your systems the way your business works. It can handle the edge cases, apply your business rules, retry when something fails and log what happened.

It costs more up front than middleware and needs ongoing maintenance, because the systems on either side change over time. In return, you get something that matches your process instead of the other way around.

The [Huntress Recruitment project](/case-studies/huntress-recruitment) is a good example. Job information had to be maintained across Bullhorn, SEEK and the company's WordPress website, and the details candidates saw didn't always match the internal record. Rather than replacing anything, we kept Bullhorn as the system of record, added dedicated public-facing job fields and standardised how vacancies are published to SEEK and the website. The team keeps its internal records structured the way it needs while controlling what candidates see.

This is the core of our [system integrations](/services/system-integrations) work. In practice, if a tool has an API, we can usually connect it.

## Option 6: Fall back to scheduled syncs or import and export

Some systems, especially older or industry-specific ones, don't have an API or webhooks. That doesn't always mean you're stuck.

Many systems can export data on a schedule, as a CSV or spreadsheet, or accept imports in a set format. A scheduled sync picks up the export, checks it, transforms it and loads it into the other system, perhaps every night or every hour.

It isn't instant, and it needs care:

- Agree the file format and don't change it without warning.
- Prevent duplicates if the same file is processed twice.
- Send an alert if a file doesn't arrive, because a missing file can fail silently.
- Be honest about timing. If the sync runs overnight, the other system won't show today's changes until tomorrow.

For many back-office processes, a reliable daily sync is perfectly adequate and much better than someone retyping data. It's also worth asking the vendor whether an API is available on a higher plan, because that can be cheaper than maintaining a workaround.

## When replacing the software is cheaper than forcing it

Sometimes the honest answer is that the integration isn't worth it. Consider replacing one of the systems when:

- The system has no API, no reliable export and no plans to add either.
- You're paying for integrations, middleware and manual workarounds that together cost more than switching.
- The system is the reason the process is complicated, not just the gap between systems.
- The vendor is winding the product down or no longer supports it properly.

Replacement has its own costs: data migration, retraining and a period of disruption. It's a business decision, not just a technical one. Sometimes the right replacement is another off-the-shelf product. Sometimes it's a [custom system built around your workflow](/services/custom-software-development). We've written about how to make that call in [buy vs build: when custom software actually pays off](/blog/buy-vs-build-custom-software).

## Security and data ownership questions to ask first

Every integration moves data, and often that includes customers' personal information. Before connecting anything, it's worth asking:

- **What data is moving, and does it all need to?** Only sync the fields the process actually needs.
- **What access does the integration have?** Give it the minimum permissions it needs, not full admin access.
- **Whose account is it running under?** Use a business-owned account, not a staff member's personal login, so it doesn't break when they leave.
- **Where is the data stored along the way?** Middleware platforms and integration services may process or store data on their own servers. Check where, and for how long.
- **Who owns the integration?** If a contractor built it, make sure you can access the code, credentials and documentation.
- **What happens when it fails?** Who is notified, and how are errors fixed?

In Australia, businesses covered by the Privacy Act must take reasonable steps to protect personal information under [Australian Privacy Principle 11](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information). In New Zealand, [Information Privacy Principle 5](https://www.privacy.org.nz/privacy-principles/5/) sets a similar expectation for reasonable security safeguards. An integration is part of how you handle that information, so it should be designed with that in mind.

## A practical way to decide

If you're weighing up options, this order works for most businesses:

- Write down what needs to move, which direction, how often and which system is the source of truth.
- Check for a native integration and test it properly.
- Check whether both systems have an API or webhooks, and on which plans.
- For simple workflows, try a middleware platform, with an owner and failure alerts.
- For complex, high-volume or business-critical workflows, consider a custom integration.
- If there's no API, consider a scheduled sync, or ask whether the system still fits the business.

The goal isn't to connect everything. It's to stop your team acting as the link between systems for the tasks that matter most. If you're still working out where those gaps are, our article on [the hidden cost of tools that don't talk to each other](/blog/disconnected-business-tools) is a good place to start. For the processes around those connections, see our [business process automation](/services/business-process-automation) service.

## Frequently asked questions

### What if one of our tools has no API?

Ask the vendor whether an API, webhooks or a scheduled export exists on your plan before you assume the product is a dead end. Some vendors only offer that access on certain plans or to approved partners. If other software still cannot read or write the data, a regular file export or import can carry it, provided you accept the delay and someone is told when a file does not turn up. Replacing the product is the fallback when even that path is unreliable.

### Will my team have to leave the software they already use?

Connecting two systems is meant to leave people where they already work. Sales can stay in the CRM, accounts can stay in Xero or MYOB, and the office can keep Microsoft 365 or Google Workspace. The change is that the record moves without a person sitting between the products. We talk about replacing a tool only when keeping it connected costs more than moving off it.

### Is a tool like Zapier enough, or do we need something built for us?

A simple rule, such as a form creating a CRM contact and notifying someone, is often a good fit for Zapier, Make or Power Automate. A custom integration earns its place when there are many exceptions, the volume is high, or a failure that nobody notices would affect customers or payments. Complexity, volume and how much the data matters are what decide it.

### How long does an integration take?

We can't put a duration on it until we know the two products and what has to move between them. Switching on a native connection is a different job from building a link that applies your rules, retries after a failure and keeps a record of what happened. Access, vendor documentation and the number of exceptions shape the effort more than the brand names do. After a look at both systems, we can say which of those you are facing.

### What should we have ready before we talk?

Bring the two product names, which details need to move, which direction they travel, and which system should win if the two disagree. It also helps to know whether the other side needs the update straight away or can wait, and who should hear about a failure. You don't need API keys or a technical specification. We can read the vendor documentation once we know which products are involved.

## Tell us which two systems need to talk to each other

If you have two systems that should be sharing information but aren't, tell us which ones and what needs to move between them. We'll give you a straight answer on the options, whether that's a native integration you haven't switched on, a simple automation or a custom integration.

[Get in touch](/contact) and tell us which two systems need to talk to each other.
