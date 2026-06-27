import Link from "next/link";

type WorkCardProps = {
  slug: string;
  name: string;
  type: string;
  problem: string;
  result: string;
  tags: string[];
  compact?: boolean;
};

export function WorkCard({ slug, name, type, problem, result, tags, compact = false }: WorkCardProps) {
  return (
    <article className={`work-card${compact ? " work-card-compact" : ""}`} id={compact ? undefined : slug}>
      <div className="work-thumb" aria-hidden="true">
        <div className="thumb-system">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="work-body">
        <span className="work-tag">{type}</span>
        <h3>{name}</h3>
        <p>{problem}</p>
        {!compact ? (
          <div className="work-result">
            <span>Result</span>
            <p>{result}</p>
          </div>
        ) : null}
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {compact ? (
          <Link href={`/work#${slug}`} className="work-link">
            View case study <span aria-hidden="true">-&gt;</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
