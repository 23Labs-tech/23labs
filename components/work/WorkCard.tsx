import Link from "next/link";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";

type WorkCardProps = {
  slug: string;
  name: string;
  type: string;
  problem: string;
  result: string;
  tags: string[];
  compact?: boolean;
};

export function WorkCard({ slug, name, type, problem }: WorkCardProps) {
  return (
    <article className="work-card">
      <div className="work-thumb" aria-hidden="true">
        <PlaceholderArt />
      </div>
      <div className="work-body">
        <span className="work-tag">{type}</span>
        <h3>{name}</h3>
        <p>{problem}</p>
        <Link href={`/work#${slug}`} className="work-link">
          View case study <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      </div>
    </article>
  );
}
