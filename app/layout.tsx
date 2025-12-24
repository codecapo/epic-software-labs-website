import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Epic Software Labs | B2B SaaS Development House",
  description: "Epic Software Labs builds B2B SaaS products that help businesses grow, automate, and scale. Creators of BookedCalls.ai, TitanCard, and TappShop.",
  keywords: ["SaaS", "B2B", "software development", "BookedCalls", "TitanCard", "TappShop", "automation"],
  authors: [{ name: "Epic Software Labs" }],
  openGraph: {
    title: "Epic Software Labs | B2B SaaS Development House",
    description: "Epic Software Labs builds B2B SaaS products that help businesses grow, automate, and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
