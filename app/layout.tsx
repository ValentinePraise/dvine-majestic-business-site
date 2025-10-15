import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "D-vine Majestic Venture Nigeria Limited",
    template: "%s | D-vine Majestic Venture",
  },
  description:
    "D-vine Majestic Venture Nigeria Limited - Your trusted partner for premium building materials, tiles, and construction solutions. With God all things are possible.",
  keywords: [
    "building materials",
    "tiles",
    "cement",
    "construction materials",
    "waterproofing",
    "stamping pigments",
    "Nigeria",
    "Lagos",
    "D-vine Majestic Venture",
  ],
  authors: [{ name: "D-vine Majestic Venture Nigeria Limited" }],
  creator: "D-vine Majestic Venture Nigeria Limited",
  publisher: "D-vine Majestic Venture Nigeria Limited",
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "D-vine Majestic Venture Nigeria Limited",
    title:
      "D-vine Majestic Venture Nigeria Limited - Premium Building Materials",
    description:
      "Your trusted partner for premium building materials, tiles, and construction solutions across Nigeria and beyond.",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "D-vine Majestic Venture Nigeria Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D-vine Majestic Venture Nigeria Limited",
    description:
      "Premium building materials, tiles, and construction solutions in Nigeria.",
    images: ["/images/og-image.jpg"], // Same image as OpenGraph
    creator: "@your-twitter-handle", // Replace with your actual Twitter handle
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1e40af", // Your brand color
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
