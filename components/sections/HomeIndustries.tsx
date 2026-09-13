import Link from "next/link";
import { IndustryIcon } from "@/components/industries/IndustryIcon";
import { industryLinks } from "@/lib/industries";

export function HomeIndustries() {
  return (
    <section className="sec sec-alt">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">Industries</div>
          <h2 className="sec-title">
            Built for the businesses <span className="em">that keep things moving</span>
          </h2>
          <p className="lead">
            Every industry has its own admin bottlenecks and disconnected tools. We build around how
            each one actually operates.
          </p>
          <Link href="/industries" className="work-link full-services-link">
            See all industries <span aria-hidden="true">{"→"}</span>
          </Link>
        </div>
        <div className="industry-editorial-list reveal">
          {industryLinks.map((industry) => (
            <Link href={industry.href} className="industry-editorial-row" key={industry.slug}>
              <IndustryIcon icon={industry.icon} className="industry-ico" />
              <span className="industry-editorial-name">{industry.label}</span>
              <p className="industry-editorial-desc">{industry.description}</p>
              <span className="btn-arrow" aria-hidden="true">
                {"→"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
