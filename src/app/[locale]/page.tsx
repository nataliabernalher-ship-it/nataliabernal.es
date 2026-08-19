import { CaseStudies } from "@/components/CaseStudies/CaseStudies";
import { Cta } from "@/components/Cta/Cta";
import { Hero } from "@/components/Hero/Hero";
import { Intro } from "@/components/Intro/Intro";
import { Skills } from "@/components/Skills/Skills";
import { Tools } from "@/components/Tools/Tools";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return buildMetadata({
    locale,
    title: messages.meta.title,
    description: messages.meta.description,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <>
      <Hero messages={messages} />
      <Intro messages={messages} />
      <CaseStudies locale={locale} messages={messages} />
      <Skills messages={messages} />
      <Tools messages={messages} />
      <Cta messages={messages} />
    </>
  );
}
