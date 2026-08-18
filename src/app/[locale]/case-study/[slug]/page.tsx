import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/CaseStudyLayout/CaseStudyLayout";
import { caseStudies, getCaseStudy, getLocalizedValue } from "@/data/case-studies";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/case-study/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);

  if (!isLocale(locale) || !study) {
    return {};
  }

  return buildMetadata({
    locale,
    path: `/case-study/${study.slug}`,
    title: getLocalizedValue(study.title, locale),
    description: getLocalizedValue(study.excerpt, locale),
  });
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/[locale]/case-study/[slug]">) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);

  if (!isLocale(locale) || !study) {
    notFound();
  }

  const messages = getMessages(locale);

  return <CaseStudyLayout locale={locale} messages={messages} study={study} />;
}
