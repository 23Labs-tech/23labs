import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Search Console 404s. The apex rules must come before the catch-all
    // below and must use the final www URL. A relative destination would
    // stay on 23labs.co and then hop again via the catch-all; putting these
    // after the catch-all would preserve the old path on www and hop again.
    const searchConsoleRedirects = [
      { source: "/services/ai-agents-5", destination: "/services/ai-agents" },
      { source: "/services/system-integrations-3", destination: "/services/system-integrations" },
      { source: "/resources", destination: "/blog" },
    ];

    return [
      ...searchConsoleRedirects.map(({ source, destination }) => ({
        source,
        has: [
          {
            type: "host" as const,
            value: "23labs.co",
          },
        ],
        destination: `https://www.23labs.co${destination}`,
        permanent: true,
      })),
      // Apex host to the canonical www origin, preserving the path.
      // Vercel domain settings may already do this at the edge; this is the
      // application-level permanent redirect for host 23labs.co only.
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "23labs.co",
          },
        ],
        destination: "https://www.23labs.co/:path*",
        permanent: true,
      },
      ...searchConsoleRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
      {
        source: "/blog/beyond-call-answering-allied-health-ai-receptionist",
        destination: "/allied-health",
        permanent: true,
      },
      {
        source: "/blog/ai-receptionists-allied-health-clinics-missed-calls",
        destination: "/allied-health",
        permanent: true,
      },
      {
        source: "/services/business-automation",
        destination: "/services/business-process-automation",
        permanent: true,
      },
      {
        source: "/services/systems-integrations",
        destination: "/services/system-integrations",
        permanent: true,
      },
      {
        source: "/services/system-integration",
        destination: "/services/system-integrations",
        permanent: true,
      },
      {
        source: "/services/api-integration",
        destination: "/services/system-integrations",
        permanent: true,
      },
      {
        source: "/services/full-stack-software-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/web-app-development",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/ai-automation",
        destination: "/services/ai-agents",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/work",
        statusCode: 301,
      },
      {
        source: "/case-studies/first-national-real-estate",
        destination: "/case-studies/real-estate-workflow-automation",
        statusCode: 301,
      },
      {
        source: "/locations/new-zealand",
        destination: "/new-zealand",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
