import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { MailtoClickTracker } from "@/components/site/MailtoClickTracker";
import { JsonLd } from "@/components/site/JsonLd";
import { Navbar } from "@/components/site/Navbar";
import { RevealObserver } from "@/components/site/RevealObserver";
import { createMetadata } from "@/lib/seo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="en" className={poppins.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <GoogleAnalytics />
        <MailtoClickTracker />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [organizationJsonLd(), websiteJsonLd()],
          }}
        />
      </body>
    </html>
  );
}
