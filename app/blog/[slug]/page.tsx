import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, company } from "../../data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.alt }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const related = articles.filter((item) => item.slug !== article.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${company.currentSite}${article.image}`,
    author: { "@type": "Organization", name: company.name },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${company.currentSite}/assets/brand/porchlight-logo.png`,
      },
    },
    mainEntityOfPage: `${company.currentSite}/blog/${article.slug}`,
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article-page">
        <header className="article-header">
          <div className="site-wrap article-header__inner">
            <Link className="text-link text-link--light" href="/blog">
              ← Back to the journal
            </Link>
            <p className="eyebrow eyebrow--light">{article.category}</p>
            <h1>{article.title}</h1>
            <div className="article-header__meta">
              <span>Porchlight Real Estate</span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        <div className="site-wrap article-image">
          <img src={article.image} alt={article.alt} />
        </div>

        <div className="article-body">
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
          <aside className="article-contact">
            <p className="eyebrow">A local conversation</p>
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

        <section className="related-posts section-pad">
          <div className="site-wrap">
            <div className="section-heading section-heading--inline">
              <div>
                <p className="eyebrow">Keep reading</p>
                <h2>More from the journal.</h2>
              </div>
            </div>
            {related.map((item) => (
              <Link
                className="related-posts__row"
                key={item.slug}
                href={`/blog/${item.slug}`}
              >
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

