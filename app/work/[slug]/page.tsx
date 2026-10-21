import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetailPage } from "@/components/work/CaseStudyDetailPage";
import { getAllCaseStudyDetailSlugs, getCaseStudyDetail } from "@/lib/caseStudyDetails";
import { createMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudyDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyDetail(slug);
  if (!caseStudy) return createMetadata({ title: "Case study", path: "/work" });

  return createMetadata({
    absoluteTitle: caseStudy.metadataTitle,
    description: caseStudy.description,
    path: `/work/${caseStudy.slug}`,
    image: caseStudy.hero.image.src,
    imageAlt: caseStudy.hero.image.alt,
    type: "article",
  });
}

export default async function WorkCaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyDetail(slug);
  if (!caseStudy) notFound();

  return <CaseStudyDetailPage caseStudy={caseStudy} />;
}
