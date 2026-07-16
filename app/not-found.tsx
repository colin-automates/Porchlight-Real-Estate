import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <img src="/assets/brand/porchlight-mark.png" alt="" aria-hidden="true" />
      <h1>This path doesn’t lead home.</h1>
      <p>The page may have moved, but the Porchlight team is still here.</p>
      <Link className="button button-gold" href="/">
        Return home
      </Link>
    </main>
  );
}
