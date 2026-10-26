# 23Labs Website

Production Next.js website for www.23labs.co.

## Stack

- Next.js App Router
- React
- TypeScript
- Markdown blog content in `content/blog`
- Resend HTTP API for contact form delivery
- Static sitemap, robots rules, Open Graph, Twitter cards, and JSON-LD structured data

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://www.23labs.co
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=hello@23labs.co
CONTACT_FROM_EMAIL=23Labs <hello@23labs.co>
```

`CONTACT_FROM_EMAIL` should use a sender domain verified in Resend before deploying to production.
If `RESEND_API_KEY` is omitted in local development, form submissions validate successfully but email delivery is skipped.

`NEXT_PUBLIC_GA_ID` overrides the GA4 measurement ID. When it is unset, the site loads `G-WW10V0N5G6`. Set the same value in Vercel so production does not depend on the code default. There is no cookie banner. A successful enquiry sends `generate_lead`. A click on `mailto:hello@23labs.co` sends `email_click`.

The production site is served on `https://www.23labs.co`. If `NEXT_PUBLIC_SITE_URL` is set to the apex in Vercel, change it to `https://www.23labs.co`. The app also rewrites an apex value to www so canonicals stay on the primary host.

## Blog Publishing

Add Markdown posts to `content/blog`.

Required frontmatter:

```md
---
title: "Post title"
description: "Short SEO description"
date: "2026-06-01"
updated: "2026-06-10"
author: "23Labs Team"
categories: "Automation, Operations"
featuredImage: "/23labs-brand-mark.png"
imageAlt: "Descriptive featured image alt text"
---
```

The filename becomes the URL slug. Use lowercase, hyphenated filenames such as `automation-checklist.md`, which is served at `/blog/automation-checklist`.
The `updated` field is optional and is used for article metadata and the sitemap when present.

## Production Checks

```bash
npm run lint
npm audit --audit-level=moderate
npm run build
```

The app includes `sitemap.ts`, `robots.ts`, Open Graph metadata, Twitter cards, structured data, a validated contact API route, spam protections, and basic security headers for Vercel deployment.
