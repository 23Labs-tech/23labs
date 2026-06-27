import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { Navbar } from "@/components/site/Navbar";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
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
