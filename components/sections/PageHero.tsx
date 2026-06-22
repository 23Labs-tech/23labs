type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  body: string;
};

export function PageHero({ eyebrow, title, highlight, body }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          {highlight ? <span>{highlight}</span> : null}
        </h1>
        <p>{body}</p>
      </div>
    </section>
  );
}
