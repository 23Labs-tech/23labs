import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { Navbar } from "@/components/site/Navbar";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: siteConfig.name,
                legalName: siteConfig.legalName,
                url: siteConfig.url,
                email: siteConfig.email,
                areaServed: "Australia",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Melbourne",
                  addressCountry: "AU",
                },
                sameAs: [siteConfig.socials.linkedin, siteConfig.socials.instagram],
              },
              {
                "@type": "WebSite",
                name: siteConfig.name,
                url: siteConfig.url,
                publisher: {
                  "@type": "Organization",
                  name: siteConfig.name,
                },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
