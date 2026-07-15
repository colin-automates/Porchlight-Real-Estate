import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/newsreader";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "www.porchlightrealestate.co";
  const protocol = host.includes("localhost") ? "http" : "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Porchlight Real Estate | Greater Chattanooga Real Estate",
      template: "%s | Porchlight Real Estate",
    },
    description:
      "A boutique brokerage serving the Greater Chattanooga area with relationship-focused guidance for buyers and sellers.",
    icons: {
      icon: "/assets/brand/porchlight-mark.png",
      shortcut: "/assets/brand/porchlight-mark.png",
      apple: "/assets/brand/porchlight-mark.png",
    },
    openGraph: {
      type: "website",
      siteName: "Porchlight Real Estate",
      title: "Porchlight Real Estate | Greater Chattanooga Real Estate",
      description:
        "Redefining real estate, one relationship at a time.",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Porchlight Real Estate in Greater Chattanooga",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Porchlight Real Estate | Greater Chattanooga Real Estate",
      description:
        "Redefining real estate, one relationship at a time.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
