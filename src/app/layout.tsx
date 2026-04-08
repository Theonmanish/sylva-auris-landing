import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sylva Auris",
    template: "%s | Sylva Auris",
  },
  description:
    "Sylva Auris creates precision-crafted terrariums that blend engineered design with natural ecosystems.",
  keywords: [
    "Premium Terrariums Mangalore",
    "Botanical Decor India",
    "custom terrariums",
    "luxury terrariums",
    "glass terrariums India",
    "indoor botanical decor",
    "Sylva Auris",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sylva Auris",
    description:
      "Premium terrariums and botanical decor in India, designed with precision and natural elegance.",
    type: "website",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
