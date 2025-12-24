import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://epicsoftwarelabs.com'),
  title: {
    default: "Epic Software Labs | B2B SaaS Development House",
    template: "%s | Epic Software Labs",
  },
  description: "Epic Software Labs builds B2B SaaS products that help businesses grow, automate, and scale. Creators of BookedCalls.ai, TitanCard, and TappShop.",
  keywords: [
    "SaaS",
    "B2B",
    "software development",
    "BookedCalls",
    "TitanCard",
    "TappShop",
    "automation",
    "scheduling software",
    "digital business cards",
    "link in bio",
    "London software company",
    "UK SaaS",
  ],
  authors: [{ name: "Epic Software Labs", url: "https://epicsoftwarelabs.com" }],
  creator: "Epic Software Labs",
  publisher: "Epic Software Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://epicsoftwarelabs.com",
    siteName: "Epic Software Labs",
    title: "Epic Software Labs | B2B SaaS Development House",
    description: "We build B2B SaaS products that help businesses grow, automate, and scale. Creators of BookedCalls.ai, TitanCard, and TappShop.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Epic Software Labs - Building software that scales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Software Labs | B2B SaaS Development House",
    description: "We build B2B SaaS products that help businesses grow, automate, and scale.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://epicsoftwarelabs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Epic Software Labs",
    description: "B2B SaaS Development House building products that help businesses grow, automate, and scale.",
    url: "https://epicsoftwarelabs.com",
    logo: "https://epicsoftwarelabs.com/logo.png",
    email: "info@epicsoftwarelabs.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "85 Great Portland Street, First Floor",
      addressLocality: "London",
      addressRegion: "England",
      postalCode: "W1W 7LT",
      addressCountry: "GB",
    },
    sameAs: [],
    foundingDate: "2024",
    knowsAbout: ["SaaS", "B2B Software", "Automation", "Scheduling", "Digital Business Cards"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
