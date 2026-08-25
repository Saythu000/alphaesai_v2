import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SiteFrame } from "@/components/site/SiteFrame";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-hanken-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphaesai-v2.vercel.app"),
  title: "AlphaesAI - Enterprise Data & AI Engineering",
  description:
    "AlphaesAI helps organizations move from AI pilots to production systems with precision engineering and scalable architectures.",
  keywords:
    "AI, Cloud, FinOps, Databricks, Snowflake, Forward Deployed Engineering, OneAI Assist, DrGodly",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AlphaesAI - Enterprise Data & AI Engineering",
    description:
      "AlphaesAI helps organizations move from AI pilots to production systems with precision engineering and scalable architectures.",
    url: "https://alphaesai-v2.vercel.app",
    siteName: "AlphaesAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AlphaesAI Enterprise Data & AI Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaesAI - Enterprise Data & AI Engineering",
    description:
      "AlphaesAI helps organizations move from AI pilots to production systems with precision engineering and scalable architectures.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FF3621",
};

import { CMSProvider } from "@/context/CMSContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#fff8f5] scroll-smooth">
      <body
        className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans text-[#241913] bg-[#fff8f5] antialiased min-h-screen flex flex-col`}
      >
        <CMSProvider>
          <SiteFrame />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </CMSProvider>
      </body>
    </html>
  );
}
