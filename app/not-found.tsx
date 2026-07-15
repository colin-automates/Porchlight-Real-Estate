import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow eyebrow--light">404</p>
      <h1>This path doesn’t lead home.</h1>
      <p>The page may have moved, but the Porchlight team is still here.</p>
      <Link className="button button--gold" href="/">
        Return home
      </Link>
    </main>
  );
}

