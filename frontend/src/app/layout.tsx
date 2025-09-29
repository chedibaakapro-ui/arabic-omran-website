import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "عمران | مجلة العقارات والاستثمار في السعودية",
  description: "مجلتك الرائدة للعقارات والاستثمار في المملكة العربية السعودية. اكتشف أحدث المشاريع العقارية والأخبار والتحليلات من خبراء السوق السعودي.",
  keywords: "عقارات, استثمار, السعودية, مشاريع عقارية, أخبار عقارية, الرياض, جدة, الدمام",
  authors: [{ name: "مجلة عمران" }],
  creator: "مجلة عمران",
  publisher: "مجلة عمران",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://omranmagazine.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "عمران | مجلة العقارات والاستثمار في السعودية",
    description: "مجلتك الرائدة للعقارات والاستثمار في المملكة العربية السعودية",
    url: "https://omranmagazine.com",
    siteName: "مجلة عمران",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عمران | مجلة العقارات والاستثمار في السعودية",
    description: "مجلتك الرائدة للعقارات والاستثمار في المملكة العربية السعودية",
    creator: "@OmranMagazine",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}