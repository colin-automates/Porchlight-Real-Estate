import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageIntroProps) {
  return (
    <section className={`page-intro${image ? " page-intro--image" : ""}`}>
      <div className="site-wrap page-intro__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-intro__lead">{description}</p>
          <div className="page-intro__actions">
            <Link className="button" href="/contact">
              Start a conversation
            </Link>
            <a className="text-link" href="tel:+14236673263">
              Call (423) 667-3263
            </a>
          </div>
        </div>
        {image ? <img src={image} alt={imageAlt ?? ""} /> : null}
      </div>
    </section>
  );
}

