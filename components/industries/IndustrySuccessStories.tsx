import Link from "next/link";
import type { ResolvedSuccessStory } from "@/lib/successStories";

type IndustrySuccessStoriesProps = {
  stories: readonly ResolvedSuccessStory[];
};

export function IndustrySuccessStories({ stories }: IndustrySuccessStoriesProps) {
  if (!stories.length) return null;

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head sec-head-center reveal">
          <span className="mono">Examples of our work</span>
          <h2 className="sec-title">What good looks like</h2>
          <p className="lead">A few examples of how 23Labs has reduced manual work and connected business systems.</p>
        </div>
        <div className="usecase-grid reveal">
          {stories.map((story) => (
            <div className="usecase-card" key={story.href}>
              <span className="mono">{story.category}</span>
              <h3>{story.label}</h3>
              <p>{story.body}</p>
              <ul>
                {story.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <Link href={story.href} className="work-link">
                Read the case study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
