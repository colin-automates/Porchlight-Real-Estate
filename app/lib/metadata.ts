import type { Metadata } from "next";

export const siteIsIndexable = process.env.SITE_INDEXABLE === "true";

export function resolveSiteOrigin(host: string) {
  const configuredOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, "");
  if (configuredOrigin) return configuredOrigin;
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
  type?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: PageMetadataInput): Metadata {
  const socialImage = image ?? {
    url: "/og.jpg",
    alt: "A welcoming shaded residential porch",
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: siteIsIndexable
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
    openGraph: {
      type,
      title,
      description,
      url: path,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
