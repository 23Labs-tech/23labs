import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { Navbar } from "@/components/site/Navbar";
import { RevealObserver } from "@/components/site/RevealObserver";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetBrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
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
