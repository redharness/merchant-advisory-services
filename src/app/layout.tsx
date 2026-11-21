import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Merchant Advisory Services — lower card fees, honestly explained",
    template: "%s · Merchant Advisory Services",
  },
  description:
    "Independent merchant advisory for small businesses. We audit your card processing statement line by line, price you at interchange, and set up point of sale and e-commerce. Since 2016.",
  applicationName: site.name,
  keywords: [
    "merchant advisor",
    "merchant services",
    "card processing fees",
    "interchange plus pricing",
    "merchant statement audit",
    "point of sale",
    "credit card processing",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Merchant Advisory Services — lower card fees, honestly explained",
    description:
      "Send one statement. We itemise every fee, show what is recoverable and what is not, and put it in writing within a business day.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merchant Advisory Services",
    description:
      "Independent payments advisory for small businesses. Since 2016.",
  },
  alternates: { canonical: "/" },
  icons: { icon: "/brand/icon.png" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  description:
    "Independent merchant advisory practice helping small businesses with card processing, point of sale and online payments.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US",
  },
  areaServed: "US",
  knowsAbout: [
    "merchant accounts",
    "interchange pricing",
    "merchant statement audit",
    "point of sale",
    "e-commerce payments",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          // Structured data for search engines, generated from lib/site.ts.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
