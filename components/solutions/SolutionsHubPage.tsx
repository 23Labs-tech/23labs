import Link from "next/link";
import { JsonLd } from "@/components/site/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { breadcrumbList } from "@/lib/schema";
import { solutionPages, solutionPath, solutionsHub } from "@/lib/solutions";

export function SolutionsHubPage() {
  return (
    <>
      <header className="page-hero industry-hero">
        <div className="hero-wide reveal in">
          <div className="hero-badge">{solutionsHub.hero.eyebrow}</div>
          <h1>
            {solutionsHub.hero.title}
            <span className="em">{solutionsHub.hero.highlight}</span>
          </h1>
          <p className="lead">{solutionsHub.hero.body}</p>
        </div>
      </header>

      {solutionsHub.groups.map((group, index) => (
        <section className={index === 0 ? "sec no-top" : "sec"} key={group.category}>
          <div className="wrap">
            <div className="sec-head industry-sec-head reveal">
              <h2 className="sec-title">{group.heading}</h2>
              <p className="lead">{group.intro}</p>
            </div>
            <div className="industry-grid reveal">
              {solutionPages
                .filter((page) => page.category === group.category)
                .map((page) => (
                  <Link href={solutionPath(page.slug)} className="industry-card industry-card-link" key={page.slug}>
                    <h3>{page.navLabel}</h3>
                    <p>{page.hero.lead}</p>
                    <span className="industry-link">Learn more</span>
                  </Link>
                ))}
              {group.category === "governance" ? (
                <Link href="/security" className="industry-card industry-card-link">
                  <h3>Security and data handling</h3>
                  <p>How 23Labs handles access, credentials, personal information and AI services on client projects.</p>
                  <span className="industry-link">Learn more</span>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${absoluteUrl("/solutions")}#page`,
              name: solutionsHub.metadataTitle,
              description: solutionsHub.description,
              url: absoluteUrl("/solutions"),
              hasPart: solutionPages.map((page) => ({
                "@type": "WebPage",
                name: page.navLabel,
                url: absoluteUrl(solutionPath(page.slug)),
              })),
            },
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Solutions", path: "/solutions" },
            ]),
          ],
        }}
      />
    </>
  );
}
