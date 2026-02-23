import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CursorSpotlight from "@/components/CursorSpotlight";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import CookieBanner from "@/components/CookieBanner";
import HighContrastToggle from "@/components/HighContrastToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
  authors: [{ name: "Amani Pathways Team" }],
  creator: "Amani Pathways Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://amanipathways.co.uk",
    title: "Amani Pathways | Supported Accommodation for UASC",
    description: "Trauma-informed, Ofsted-regulated supported accommodation for UASC in Halifax, West Yorkshire.",
    siteName: "Amani Pathways",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amani Pathways | Supported Accommodation",
    description: "Empowering young futures through trauma-informed care.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const revalidate = 86400; // 24 hours ISR caching globally

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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Amani Pathways Ltd",
              "description": "Trauma-informed, Ofsted-regulated supported accommodation for Unaccompanied Asylum-Seeking Children aged 16-17.",
              "url": "https://amanipathways.co.uk",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Halifax",
                "addressRegion": "West Yorkshire",
                "addressCountry": "UK"
              },
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "West Yorkshire"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <ScrollReveal />
          <CursorSpotlight />
          <Navbar />
          <main id="main-content" className="min-h-screen">
            <Breadcrumbs />
            {children}
          </main>
          <Footer />
          <BackToTop />
          <CookieBanner />
          <HighContrastToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
