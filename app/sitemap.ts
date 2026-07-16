import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { articles } from "./data";
import { resolveSiteOrigin } from "./lib/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "www.porchlightrealestate.co";
  const base = resolveSiteOrigin(host);
  const routes = [
    "",
    "/about",
    "/services",
    "/buying",
    "/selling",
    "/communities",
    "/agents",
    "/testimonials",
    "/blog",
    "/contact",
    "/schedule-viewing",
    "/privacy",
    "/accessibility",
  ];

  return [
    ...routes.map((route, index) => ({
      url: `${base}${route}`,
      changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: `${base}/blog/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
