import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عمران | مجلة العقارات والاستثمار في السعودية",
  description: "مجلتك الرائدة للعقارات والاستثمار في المملكة العربية السعودية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}