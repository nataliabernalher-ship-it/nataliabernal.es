import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { labProjects } from "@/data/lab-projects";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/lab">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return buildMetadata({
    locale,
    path: "/lab",
    title: messages.lab.title,
    description: messages.lab.description,
  });
}

export default async function LabPage({ params }: PageProps<"/[locale]/lab">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <section className={styles.page} aria-labelledby="lab-title">
      <div className={styles.inner}>
        <Reveal>
          <h1 id="lab-title" className={styles.title}>
            {messages.lab.heading}
          </h1>
        </Reveal>
        <div className={styles.grid}>
          {labProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 140}>
              <ProjectCard
                locale={locale}
                study={project}
                href={
                  project.caseStudySlug
                    ? `/${locale}/case-study/${project.caseStudySlug}`
                    : null
                }
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <div className={styles.actions}>
            <Link className={styles.button} href={`/${locale}`}>
              {messages.lab.backHome}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
