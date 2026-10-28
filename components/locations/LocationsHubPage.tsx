import Link from "next/link";
import { JsonLd } from "@/components/site/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { breadcrumbList } from "@/lib/schema";
import { locationPages, locationsHub } from "@/lib/locations";
import { newZealandPage } from "@/lib/newZealand";

const newZealandCard = {
  href: newZealandPage.path,
  label: "New Zealand",
  region: "Nationwide",
  description:
    "Remote delivery for New Zealand businesses nationwide, from Auckland to Christchurch, with calls booked in New Zealand business hours.",
};

export function LocationsHubPage() {
  return (
    <>
      <header className="page-hero industry-hero">
        <div className="wrap reveal in">
          <div className="hero-badge">{locationsHub.hero.eyebrow}</div>
          <h1>
            {locationsHub.hero.title}
            <span className="em">{locationsHub.hero.highlight}</span>
          </h1>
          <p className="lead">{locationsHub.hero.lead}</p>
        </div>
      </header>

      <section className="sec no-top">
        <div className="wrap">
          <div className="industry-grid reveal">
            {locationPages.map((location) => (
              <Link href={location.path} className="industry-card industry-card-link" key={location.slug}>
                <h3>{location.city}</h3>
                <p>{location.cardDescription}</p>
                <span className="industry-link">Learn more</span>
              </Link>
            ))}
            <Link href={newZealandCard.href} className="industry-card industry-card-link">
              <h3>{newZealandCard.label}</h3>
              <p>{newZealandCard.description}</p>
              <span className="industry-link">Learn more</span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${absoluteUrl(locationsHub.path)}#page`,
              name: locationsHub.metadataTitle,
              description: locationsHub.description,
              url: absoluteUrl(locationsHub.path),
              hasPart: [
                ...locationPages.map((location) => ({
                  "@type": "WebPage",
                  name: location.city,
                  url: absoluteUrl(location.path),
                })),
                { "@type": "WebPage", name: "New Zealand", url: absoluteUrl(newZealandCard.href) },
              ],
            },
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Locations", path: locationsHub.path },
            ]),
          ],
        }}
      />
    </>
  );
}
