export const siteConfig = {
  name: "23Labs",
  legalName: "23Labs Technologies",
  url: "https://23labs.co",
  email: "hello@23labs.co",
  description:
    "23Labs is a studio building automation, custom software, and AI tools that remove busywork and help businesses scale with confidence.",
  location: "Melbourne, Australia",
  socials: {
    linkedin: "https://au.linkedin.com/company/23labs",
    instagram: "https://www.instagram.com/_23labs.co_/",
  },
};

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || siteConfig.url;
}
