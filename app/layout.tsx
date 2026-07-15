import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  // PRD § 9.5 SEO
  title: "Charis Foundation for Orphans and Widows | Ogbomoso, Nigeria",
  description:
    "Charis Foundation supports orphaned teens and widows in Ogbomoso, Oyo State through mentorship, vocational training, food outreach, and medical care. CAC-registered NGO.",
  keywords: [
    "Charis Foundation",
    "orphans",
    "widows",
    "Ogbomoso",
    "Nigeria NGO",
    "Oyo State",
    "charity",
    "donate",
  ],
  openGraph: {
    title: "Charis Foundation for Orphans and Widows",
    description:
      "Supporting orphaned teens and widows in Ogbomoso, Oyo State through mentorship, outreach, and vocational training.",
    url: "https://charisfoundation.org",
    siteName: "Charis Foundation for Orphans and Widows",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charis Foundation for Orphans and Widows",
    description:
      "Supporting orphaned teens and widows in Ogbomoso, Oyo State.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Schema.org NGO structured data — PRD § 9.5 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Charis Foundation for Orphans and Widows",
              alternateName: "Charis Foundation",
              description:
                "Supporting orphaned teens and widows in Ogbomoso, Oyo State through mentorship, vocational training, food outreach, and medical care.",
              url: "https://charisfoundation.org",
              telephone: "+2347037774573",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ogbomoso",
                addressRegion: "Oyo State",
                addressCountry: "NG",
              },
              founder: {
                "@type": "Person",
                name: "Olajire Oyedokun",
              },
              sameAs: [
                "https://www.facebook.com/CharisFoundationforOrphansandWidows",
                "https://www.instagram.com/cf_orphansandwidows",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
