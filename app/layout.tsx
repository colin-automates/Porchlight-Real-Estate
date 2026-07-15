import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { resolveSiteOrigin, siteIsIndexable } from "./lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "www.porchlightrealestate.co";
  const siteOrigin = resolveSiteOrigin(host);

  return {
    metadataBase: new URL(siteOrigin),
    title: {
      default: "Porchlight Real Estate | Greater Chattanooga",
      template: "%s | Porchlight Real Estate",
    },
    description:
      "A real estate brokerage serving Greater Chattanooga with relationship-focused guidance for buyers and sellers.",
    robots: siteIsIndexable
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
    icons: {
      icon: "/assets/brand/porchlight-mark.png",
      shortcut: "/assets/brand/porchlight-mark.png",
      apple: "/assets/brand/porchlight-mark.png",
    },
    openGraph: {
      type: "website",
      siteName: "Porchlight Real Estate",
      title: "Porchlight Real Estate | Greater Chattanooga",
      description: "Redefining real estate, one relationship at a time.",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "A welcoming shaded residential porch",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Porchlight Real Estate | Greater Chattanooga",
      description: "Redefining real estate, one relationship at a time.",
      images: ["/og.jpg"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/vendor/leaflet/leaflet.css" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
