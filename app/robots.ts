import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "www.porchlightrealestate.co";
  const protocol = host.includes("localhost") ? "http" : "https";

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${protocol}://${host}/sitemap.xml`,
  };
}

