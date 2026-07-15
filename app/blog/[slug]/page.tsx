import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../data";
import { pageMetadata } from "../../lib/metadata";
import { articleSchema, breadcrumbSchema } from "../../lib/structured-data";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    type: "article",
    image: { url: article.image, alt: article.alt },
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug);

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema(article),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Journal", path: "/blog" },
              { name: article.title, path: `/blog/${article.slug}` },
            ]),
          ]),
        }}
      />
      <article className="article-page">
        <header className="article-mast">
          <div className="shell article-mast-copy">
            <Link className="text-link" href="/blog">
              ← Back to the journal
            </Link>
            <p className="label">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="article-meta">
              Porchlight Real Estate <span>•</span> {article.date}{" "}
              <span>•</span> {article.readTime}
            </p>
          </div>
        </header>

        <figure className="shell article-hero-image">
          <img src={article.image} alt={article.alt} />
        </figure>

        <div className="article-reading-column">
          <p className="article-deck">{article.excerpt}</p>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <aside className="article-help">
            <p className="label">A local conversation</p>
            <h2>Questions about your next step?</h2>
            <p>
              Porchlight agents are here to help you understand the process
              and make informed decisions.
            </p>
            <Link className="button" href="/contact">
              Talk with an agent
            </Link>
          </aside>
        </div>

        <section className="related-articles section-space">
          <div className="shell">
            <p className="label">Keep reading</p>
            <h2>More from the journal.</h2>
            <div>
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`}>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
