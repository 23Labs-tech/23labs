---
title: "Connecting Outlook, Microsoft 365 or Google Workspace to Your CRM, Job and Accounting Systems"
seoTitle: "Outlook and Gmail CRM Integration for Microsoft 365 and Google Workspace | 23Labs"
description: "How to connect Outlook, Gmail, calendars, shared drives and forms to your CRM, job and accounting systems, and when Power Automate or Apps Script is enough."
date: "2026-04-28"
updated: "2026-04-28"
author: "23Labs Team"
categories: "System Integrations, Workflow Automation, Operations"
image: "/site-images/photos/connected-tools-overlay.png"
featuredImage: "/site-images/photos/connected-tools-overlay.png"
imageAlt: "A diagram showing business tools connected through an automation hub"
---

For most small and medium businesses, the working day happens in Outlook or Gmail. Enquiries arrive by email, meetings live in the calendar, documents sit in SharePoint, OneDrive or Google Drive and forms collect information from customers and staff. Meanwhile the CRM, job system and accounting software each hold their own version of the truth.

The result is a lot of copying: emails forwarded into the CRM, calendar bookings retyped as jobs, files saved to the wrong folder and form responses keyed in by hand. This article covers the most useful ways to connect Microsoft 365 or Google Workspace to the rest of your systems, and how to choose between built-in tools and a custom integration.

## The short answer

Start with what your CRM or job system already offers, because many have their own Outlook or Gmail integration. For simple workflows, Microsoft Power Automate or Google Apps Script can handle a lot. When you need reliable two-way sync, business rules or connections to systems those tools don't support well, a custom integration using the Microsoft Graph API or the Google Workspace APIs is the next step.

## What's available on each platform

### Microsoft 365

According to [Microsoft's Graph overview](https://learn.microsoft.com/en-us/graph/overview), Microsoft Graph provides a single API for data across Microsoft 365, including Outlook mail, calendars and contacts, OneDrive, SharePoint, Excel, Planner, Teams and Bookings. Microsoft Graph also supports change notifications, so another system can be told when, for example, a new email or calendar event arrives.

For no-code and low-code workflows, Power Automate connects to many Microsoft 365 apps. Microsoft's documentation describes using a [Microsoft Forms trigger in Power Automate](https://learn.microsoft.com/en-us/power-automate/forms/overview) to start a flow when a new response is submitted. Microsoft's [licensing FAQ](https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/faqs) says many Microsoft 365 licences include Power Automate with standard connectors, while premium and custom connectors need a separate premium licence. That licensing detail often decides whether a workflow can stay in Power Automate.

### Google Workspace

Google publishes [developer APIs for Workspace products](https://developers.google.com/workspace/products), including Gmail, Google Calendar, Google Drive, Sheets and Forms. For lighter automation, Google Apps Script runs inside Workspace and supports [installable triggers](https://developers.google.com/apps-script/guides/triggers/installable), including one that runs when a Google Form is submitted.

Both platforms are capable. The questions are which workflows you need and how reliable they have to be.

## Four workflows worth connecting

### Email to CRM

The most common request: make sure customer emails and new enquiries are recorded against the right contact or deal, without anyone forwarding them. Options include:

- Your CRM's own Outlook or Gmail integration, if it has one. Check this first.
- A flow that creates or updates a CRM record when an email arrives in a shared inbox, such as an enquiries address.
- A custom integration that matches emails to existing contacts, applies rules about what to log and avoids duplicates.

A word of caution: logging every email from every mailbox into the CRM is rarely what you want. Decide which mailboxes and which kinds of messages belong in the CRM, and keep personal or internal conversations out.

### Calendars to job scheduling

If bookings, site visits or appointments are made in Outlook or Google Calendar, but jobs are managed elsewhere, someone ends up keeping them in step. An integration can create or update a job when a calendar event is booked, or put job appointments into the right person's calendar. Two-way sync is possible, but it needs clear rules about which system wins when both change.

### Folders and documents

Shared drives get messy fast. Common automations include:

- Creating a standard folder structure in SharePoint, OneDrive or Google Drive when a new client, project or job is created in your CRM or job system.
- Saving generated documents, such as quotes, contracts or reports, to the right folder automatically.
- Linking the folder back to the CRM or job record so people can find it.

This is a small change that saves a surprising amount of searching.

### Forms to records

Microsoft Forms and Google Forms are easy ways to collect information, but responses often land in a spreadsheet that someone then re-keys. A flow or script can take each response, check it and create the right record in your CRM, job system or accounting software, then notify whoever needs to act.

## Power Automate or Apps Script vs a custom integration

A fair comparison, as bullet pairs:

- **Speed to start.** Power Automate and Apps Script are quick to try. A custom integration takes longer to scope and build.
- **Cost model.** Built-in tools may be included in your existing licences, though premium connectors can change that. A custom integration has a build cost and ongoing maintenance.
- **Complexity.** Built-in tools suit simple triggers and actions. Custom code handles validation, matching, exceptions and two-way sync more cleanly.
- **Supported systems.** Built-in tools depend on available connectors. A custom integration can use any system with an API.
- **Visibility.** Flows can be hard to track once there are many of them. A custom integration can be designed with logging and alerts from the start.
- **Ownership.** Flows are often owned by whoever built them. Make sure anything business-critical runs under a business-owned account, whichever route you choose.

Our guide to [what to do when your business software doesn't integrate](/blog/business-software-does-not-integrate) goes into more detail on the trade-offs.

## Permissions and privacy

Email, calendars and documents contain a lot of personal and confidential information. Before connecting them:

- Give integrations the narrowest access they need, such as one shared mailbox rather than every mailbox in the organisation.
- Use business-owned service accounts, not a staff member's personal login.
- Be clear about which information is copied into other systems, and why.
- Check where any middleware or integration service processes and stores data.

Integrations have to be authorised through Microsoft's or Google's sign-in and consent process, and your administrator may need to approve access. Involve whoever manages your Microsoft 365 or Google Workspace tenant early.

## An example of the pattern

The workflows above all follow the same idea: capture information once, in the place people already work, and let it create the records that follow. That's what we did for [CorIT Tech](/case-studies/corit-tech), where client onboarding information in the CRM now creates the project records and tasks, instead of staff copying details across. CorIT reported savings of more than 10 hours of admin per month.

The same thinking applies to Microsoft 365 and Google Workspace. The email, the booking or the form response is the starting point, and the integration does the copying.

## When an integration isn't the answer

If your CRM's built-in Outlook or Gmail integration already does what you need, use it. If a workflow only runs a few times a month, a template or checklist may be better value than automation. And if the real issue is that nobody agrees where information should live, settle that before connecting anything, otherwise you'll just automate the confusion.

For professional services firms, where much of this admin sits, our article on [the admin bottleneck holding professional services firms back](/blog/professional-services-admin-bottleneck) covers the wider picture. Our [Professional Services](/professional-services) and [Construction](/construction) pages show where these connections fit in those industries.

## Frequently asked questions

### Does this work for both Microsoft 365 and Google Workspace?

Yes. Both offer APIs for mail, calendars, files and forms, plus built-in automation tools: Power Automate for Microsoft 365 and Apps Script for Google Workspace.

### Is Power Automate included with Microsoft 365?

According to Microsoft's licensing FAQ, many Microsoft 365 licences include Power Automate for flows that use standard connectors. Premium and custom connectors need a separate premium licence. Check your licences before planning a workflow around a premium connector.

### Can calendar bookings create jobs automatically?

Usually, yes, if your job system has an API or a supported connector. The important part is agreeing what happens when a booking is changed or cancelled, so the two systems don't drift apart.

### Will every email end up in our CRM?

Only if you set it up that way, and we'd usually advise against it. It's better to choose specific mailboxes or message types that belong in the CRM.

### Do we need IT involved?

It helps. Whoever administers your Microsoft 365 or Google Workspace tenant will need to approve app access and permissions.

## Tell us where your team copies information from

If your team is still forwarding emails, retyping bookings or re-keying form responses, tell us which ones. We'll check what your CRM and Microsoft 365 or Google Workspace can already do, and where a [system integration](/services/system-integrations) would remove the copying.

[Get in touch](/contact) and tell us which workflow you'd fix first.
