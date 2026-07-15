import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { articles } from "../data";

export const metadata: Metadata = {
  title: "Real Estate Journal",
  description:
    "Practical home buying and selling guidance from Porchlight Real Estate in Chattanooga.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The Porchlight Journal"
        title="Useful guidance for the road home."
        description="Straightforward perspectives on buying, selling, inspections, financing preparation, and the decisions in between."
      />

      <section className="journal-index section-pad">
        <div className="site-wrap">
          {articles.map((article, index) => (
            <article key={article.slug} className="journal-index__article">
              <Link href={`/blog/${article.slug}`}>
                <div className="journal-index__number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="image-reveal">
                  <img src={article.image} alt={article.alt} />
                </div>
                <div>
                  <p className="article-meta">
                    {article.category} · {article.date} · {article.readTime}
                  </p>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <span className="text-link">Read article</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

