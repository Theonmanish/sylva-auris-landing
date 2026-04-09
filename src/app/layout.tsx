import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const brandAndBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      "@id": "https://sylvaauris.in/#brand",
      name: "Sylva Auris",
      legalName: "Sylva Auris Botanical Arts",
      url: "https://sylvaauris.in",
      description: "Premium artisan bioactive terrariums and digital botanical care.",
      founder: {
        "@type": "Person",
        name: "[Your Name]",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://sylvaauris.in/#localbusiness",
      name: "Sylva Auris",
      legalName: "Sylva Auris Botanical Arts",
      url: "https://sylvaauris.in",
      description: "Premium artisan bioactive terrariums and digital botanical care.",
      founder: {
        "@type": "Person",
        name: "[Your Name]",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moodbidri",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
      areaServed: {
        "@type": "Place",
        name: "Moodbidri, Karnataka, India",
      },
      brand: {
        "@id": "https://sylvaauris.in/#brand",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Sylva Auris | Artisan Bioactive Terrariums & Digital Plant Care",
    template: "%s | Sylva Auris",
  },
  description:
    "Discover premium, handcrafted botanical terrariums and bioactive ecosystems by Sylva Auris. Based in Karnataka, we blend nature with technology through our digital care companion.",
  keywords: [
    "terrariums India",
    "bioactive ecosystems",
    "Sylva Auris",
    "premium botanical decor",
    "Moodbidri plant shop",
    "luxury terrariums",
    "handcrafted terrariums",
    "digital plant care",
    "glass terrariums",
    "botanical design",
    "Soans Farm Moodbidri",
  ],
  authors: [{ name: "Sylva Auris" }],
  creator: "Sylva Auris",
  publisher: "Sylva Auris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sylvaauris.in",
    title: "Sylva Auris | Artisan Bioactive Terrariums & Digital Plant Care",
    description:
      "Discover premium, handcrafted botanical terrariums and bioactive ecosystems by Sylva Auris. Based in Karnataka, we blend nature with technology through our digital care companion.",
    siteName: "Sylva Auris",
    images: [
      {
        url: "https://sylvaauris.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sylva Auris - Artisan Botanical Terrariums",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylva Auris | Artisan Bioactive Terrariums & Digital Plant Care",
    description:
      "Discover premium, handcrafted botanical terrariums and bioactive ecosystems by Sylva Auris.",
    images: ["https://sylvaauris.in/og-image.jpg"],
    creator: "@sylva.auris",
  },
  metadataBase: new URL("https://sylvaauris.in"),
  alternates: {
    canonical: "https://sylvaauris.in",
  },
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandAndBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
