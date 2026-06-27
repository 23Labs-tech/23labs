type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  body: string;
  className?: string;
};

export function PageHero({ eyebrow, title, highlight, body, className }: PageHeroProps) {
  const heroClassName = className ? `page-hero ${className}` : "page-hero";

  return (
    <header className={heroClassName}>
      <div className="wrap reveal in">
        <div className="sec-tag">{eyebrow}</div>
        <h1>
          {title}
          {highlight ? <span className="em">{highlight}</span> : null}
        </h1>
        <p className="lead">{body}</p>
      </div>
    </header>
  );
}
