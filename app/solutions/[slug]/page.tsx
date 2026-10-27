import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionLandingPage } from "@/components/solutions/SolutionLandingPage";
import { createMetadata } from "@/lib/seo";
import { getSolutionPage, solutionPages, solutionPath } from "@/lib/solutions";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionPage(slug);
  if (!solution) return createMetadata({ title: "Solutions", path: "/solutions" });

  return createMetadata({
    absoluteTitle: solution.metadataTitle,
    description: solution.description,
    path: solutionPath(solution.slug),
  });
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionPage(slug);
  if (!solution) notFound();

  return <SolutionLandingPage solution={solution} />;
}
