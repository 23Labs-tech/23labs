import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <header className="page-hero">
      <div className="wrap narrow">
        <div className="sec-tag">404</div>
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for has moved or no longer exists.</p>
        <div className="hero-actions">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact 23Labs
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
