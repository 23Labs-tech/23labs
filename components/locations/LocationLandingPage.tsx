import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PracticalByDesign } from "@/components/sections/PracticalByDesign";
import { ServiceCardsGrid } from "@/components/sections/ServiceCardsGrid";
import { CheckIcon, IndustryIcon } from "@/components/industries/IndustryIcon";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList, faqPageJsonLd, serviceJsonLd } from "@/lib/schema";
import { serviceLandingPages } from "@/lib/services";
import {
  buildLocationFaqs,
  getLocationSuccessStories,
  locationCapabilityIntroColumn,
  locationCapabilityPanel,
  locationCtaExpect,
  locationPractical,
  locationsHub,
  type LocationPage,
} from "@/lib/locations";

const locationServiceCards = serviceLandingPages.map((service) => ({
  slug: service.slug,
  href: service.href,
  title: service.navLabel,
  description: service.cardDescription,
}));

function LocationHero({ location }: { location: LocationPage }) {
  return (
    <header className="svc-hero">
      <div className="wrap svc-hero-in">
        <div className="reveal in svc-hero-copy">
          <div className="hero-badge">{location.heroEyebrow}</div>
          <h1>Automation and Custom Software for {location.city} Businesses</h1>
          <p className="lead">{location.heroLead}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact" arrow={false}>
              Start a conversation
            </ButtonLink>
            <ButtonLink href="#what-we-do" variant="secondary" arrow={false}>
              See what we do
            </ButtonLink>
          </div>
        </div>
        <div className="reveal in svc-hero-media">
          <Image
            src={location.image.src}
            alt={location.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </header>
  );
}

function LocationIntro({ location }: { location: LocationPage }) {
  return (
    <section className="sec no-top location-intro-sec">
      <div className="wrap">
        <div className="sec-head sec-head-center reveal">
          <h2 className="sec-title">{location.introHeading}</h2>
          <p className="lead">{location.introBody}</p>
        </div>
      </div>
    </section>
  );
}

function LocationBenefits({ location }: { location: LocationPage }) {
  const columns = [locationCapabilityIntroColumn(location), ...locationCapabilityPanel.columns];

  return (
    <section className="sec no-top">
      <div className="wrap">
        <div className="sec-head sec-head-center capability-head reveal">
          <span className="mono">{locationCapabilityPanel.eyebrow}</span>
          <h2 className="sec-title">{locationCapabilityPanel.heading}</h2>
          <p className="lead">{locationCapabilityPanel.intro}</p>
        </div>
        <div className="capability-panel reveal">
          <div className="capability-grid">
            {columns.map((column) => (
              <div className="capability-col" key={column.heading}>
                <IndustryIcon icon={column.icon} className="capability-icon" />
                <h3>{column.heading}</h3>
                <p>{column.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationServices() {
  return (
    <section className="sec" id="what-we-do">
      <div className="wrap">
        <div className="sec-head sec-head-center reveal">
          <h2 className="sec-title">From process problems to working systems</h2>
          <p className="lead">
            Start with the problem that is slowing the business down. Each service can stand alone or form part of a
            larger operational improvement.
          </p>
        </div>
        <ServiceCardsGrid items={locationServiceCards} />
      </div>
    </section>
  );
}

function LocationSuccessStories() {
  const stories = getLocationSuccessStories();
  if (!stories.length) return null;

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head sec-head-center reveal">
          <h2 className="sec-title">Systems built for real businesses</h2>
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
                <span aria-hidden="true">{"→"}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationTrust() {
  return <PracticalByDesign data={locationPractical} />;
}

function LocationFAQ({ location }: { location: LocationPage }) {
  const faqs = buildLocationFaqs(location);
  return (
    <FaqAccordion items={faqs} idPrefix={`faq-location-${location.slug}`} heading={`Working with 23Labs in ${location.city}`} />
  );
}

function LocationCTA({ location }: { location: LocationPage }) {
  return (
    <section className="sec">
      <div className="wrap cta-band reveal">
        <h2>Have something worth fixing in {location.city}?</h2>
        <p>Bring the workflow, system or process that is creating friction. We will help you work out the most practical next step.</p>
        <div className="hero-actions">
          <ButtonLink href="/contact" arrow={false}>
            Start a conversation
          </ButtonLink>
        </div>
        <div className="svc-checklist reveal" style={{ marginTop: 28 }}>
          {locationCtaExpect.map((item) => (
            <div className="svc-check" key={item}>
              <CheckIcon />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationLandingPage({ location }: { location: LocationPage }) {
  const areaServed =
    location.country === "Australia"
      ? [
          { "@type": "City", name: location.city },
          { "@type": "State", name: location.region },
          { "@type": "Country", name: "Australia" },
        ]
      : [
          { "@type": "City", name: location.city },
          { "@type": "Country", name: "New Zealand" },
        ];

  return (
    <>
      <LocationHero location={location} />
      <LocationIntro location={location} />
      <LocationBenefits location={location} />
      <LocationServices />
      <LocationSuccessStories />
      <LocationTrust />
      <LocationFAQ location={location} />
      <LocationCTA location={location} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            serviceJsonLd({
              name: `Automation and custom software for ${location.city} businesses`,
              description: location.description,
              path: location.path,
              areaServed,
            }),
            faqPageJsonLd(location.path, buildLocationFaqs(location)),
            breadcrumbList([
              { name: "Home", path: "/" },
              { name: "Locations", path: locationsHub.path },
              { name: location.city, path: location.path },
            ]),
          ],
        }}
      />
    </>
  );
}
