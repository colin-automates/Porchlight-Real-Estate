import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { articles } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Real Estate Journal",
  description:
    "Practical home buying and selling guidance from Porchlight Real Estate in Chattanooga.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Real Estate Journal", path: "/blog" },
        ]}
      />
      <section className="journal-mast page-mast">
        <div className="shell journal-mast-grid">
          <div>
            <p className="label">The Porchlight Journal</p>
            <h1>Useful guidance for the road home.</h1>
          </div>
          <p>
            Straightforward perspectives on buying, selling, inspections,
            financing preparation, and the decisions in between.
          </p>
        </div>
      </section>

      <section className="journal-list-section section-space">
        <div className="shell article-row-list article-row-list-large">
          {articles.map((article) => (
            <article className="article-row" key={article.slug}>
              <Link href={`/blog/${article.slug}`}>
                <img src={article.image} alt={article.alt} loading="lazy" />
                <div>
                  <p className="article-meta">
                    {article.category} <span>•</span> {article.date}{" "}
                    <span>•</span> {article.readTime}
                  </p>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <span className="text-link">Read article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
