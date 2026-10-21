import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetailPage } from "@/components/work/CaseStudyDetailPage";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/caseStudies";
import { createMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return createMetadata({ title: "Case study", path: "/work" });

  return createMetadata({
    absoluteTitle: caseStudy.metadataTitle,
    description: caseStudy.description,
    path: `/case-studies/${caseStudy.slug}`,
    image: caseStudy.heroImage.src,
    imageAlt: caseStudy.heroImage.alt,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return <CaseStudyDetailPage caseStudy={caseStudy} />;
}
