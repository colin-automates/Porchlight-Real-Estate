import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { resolveSiteOrigin, siteIsIndexable } from "./lib/metadata";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "www.porchlightrealestate.co";
  const base = resolveSiteOrigin(host);

  return {
    rules: siteIsIndexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
