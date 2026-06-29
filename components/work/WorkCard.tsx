import Link from "next/link";
import Image from "next/image";

type WorkCardProps = {
  slug: string;
  name: string;
  type: string;
  image: {
    src: string;
    alt: string;
  };
  problem: string;
  result: string;
  tags: string[];
  compact?: boolean;
};

export function WorkCard({ slug, name, type, image, problem }: WorkCardProps) {
  return (
    <article className="work-card">
      <div className="work-thumb">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 780px) 100vw, 50vw" className="work-thumb-img" />
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
