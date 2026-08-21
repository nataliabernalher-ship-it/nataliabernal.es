import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./ProjectCard.module.css";

export type ProjectCardStudy = Pick<
  CaseStudy,
  "slug" | "tag" | "title" | "excerpt" | "cover"
>;

type ProjectCardProps = {
  locale: Locale;
  study: ProjectCardStudy;
  href?: string | null;
};

export function ProjectCard({ locale, study, href }: ProjectCardProps) {
  const destination =
    href === undefined ? `/${locale}/case-study/${study.slug}` : href;
  const className = destination
    ? styles.card
    : `${styles.card} ${styles.static}`;

  const content: ReactNode = (
    <>
      <div className={styles.mediaGroup}>
        <div className={styles.media}>
          <Image
            src={study.cover.src}
            alt={getLocalizedValue(study.cover.alt, locale)}
            fill
            className={styles.image}
            sizes="(min-width: 80rem) 604px, (min-width: 48rem) calc(50vw - 2rem), calc(100vw - 24px)"
          />
        </div>
        <p className={styles.tag}>{getLocalizedValue(study.tag, locale)}</p>
      </div>
      <div className={styles.text}>
        <p className={styles.kicker}>{getLocalizedValue(study.title, locale)}</p>
        <h3 className={styles.title}>{getLocalizedValue(study.excerpt, locale)}</h3>
      </div>
    </>
  );

  if (destination) {
    return (
      <article>
        <Link className={className} href={destination} data-cursor="case-study">
          {content}
        </Link>
      </article>
    );
  }

  return <article className={className}>{content}</article>;
}
