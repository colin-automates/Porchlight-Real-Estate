import {
  company,
  type Agent,
  type Article,
  type Service,
} from "../data";

const schemaOrigin = (process.env.SITE_ORIGIN ?? company.currentSite).replace(
  /\/$/,
  "",
);

export type BreadcrumbItem = { name: string; path: string };

function absoluteUrl(path: string, origin = schemaOrigin) {
  return new URL(path, `${origin}/`).toString();
}

export function organizationSchema(origin = schemaOrigin) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    "@id": `${origin}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: origin,
    slogan: company.tagline,
    telephone: company.phoneDisplay,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLine1,
      addressLocality: "Chattanooga",
      addressRegion: "TN",
      postalCode: "37405",
      addressCountry: "US",
    },
    areaServed: "Greater Chattanooga",
    sameAs: [company.instagram],
  };
}

export function serviceSchemas(services: Service[], origin = schemaOrigin) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: {
      "@type": "RealEstateAgent",
      name: company.name,
      url: origin,
    },
    areaServed: "Greater Chattanooga",
  }));
}

export function agentSchemas(agents: Agent[], origin = schemaOrigin) {
  return agents.map((agent) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: agent.name,
    jobTitle: agent.role,
    email: agent.email,
    telephone: agent.phone,
    image: absoluteUrl(agent.image, origin),
    worksFor: {
      "@id": `${origin}/#organization`,
      "@type": "RealEstateAgent",
      name: company.name,
      url: origin,
    },
    ...(agent.instagram ? { sameAs: [agent.instagram] } : {}),
  }));
}

export function breadcrumbSchema(
  items: BreadcrumbItem[],
  origin = schemaOrigin,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, origin),
    })),
  };
}

export function articleSchema(article: Article, origin = schemaOrigin) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.image, origin),
    author: {
      "@id": `${origin}/#organization`,
      "@type": "Organization",
      name: company.name,
    },
    publisher: {
      "@id": `${origin}/#organization`,
      "@type": "Organization",
      name: company.name,
    },
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    url: absoluteUrl(`/blog/${article.slug}`, origin),
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`, origin),
  };
}
