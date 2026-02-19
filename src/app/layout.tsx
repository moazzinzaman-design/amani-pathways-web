import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amani Pathways | Supported Accommodation for UASC",
  description:
    "Trauma-informed, Ofsted-regulated supported accommodation for Unaccompanied Asylum-Seeking Children aged 16-17 in Halifax, West Yorkshire.",
  keywords: [
    "supported accommodation",
    "UASC",
    "unaccompanied asylum seeking children",
    "Halifax",
    "Ofsted",
    "West Yorkshire",
    "safeguarding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
