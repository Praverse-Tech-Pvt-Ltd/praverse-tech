import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";
import { PravProvider } from "@/components/assistant/PravProvider";
import SplashCursor from "@/components/ui/SplashCursor";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  organizationJsonLd,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Praverse Tech builds AI products and applied intelligent systems for healthcare, pharma, and industrial intelligence teams.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Praverse Tech builds AI products and applied intelligent systems for healthcare, pharma, and industrial intelligence teams.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/placeholders/home-hero-bg.png"),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Praverse Tech builds AI products and applied intelligent systems for healthcare, pharma, and industrial intelligence teams.",
    images: [absoluteUrl("/placeholders/home-hero-bg.png")],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo%20rotate.png" },
      { url: "/logo%20rotate.png", sizes: "192x192", type: "image/png" },
      { url: "/logo%20rotate.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/logo%20rotate.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Ranga:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased dark">
        <PravProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <SplashCursor />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </PravProvider>
      </body>
    </html>
  );
}
