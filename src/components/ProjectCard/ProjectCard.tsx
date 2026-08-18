import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  locale: Locale;
  study: CaseStudy;
};

export function ProjectCard({ locale, study }: ProjectCardProps) {
  return (
    <article>
      <Link className={styles.card} href={`/${locale}/case-study/${study.slug}`}>
        <p className={styles.tag}>{getLocalizedValue(study.tag, locale)}</p>
        <div className={styles.media}>
          <Image
            src={study.cover.src}
            alt={getLocalizedValue(study.cover.alt, locale)}
            fill
            className={styles.image}
            sizes="(min-width: 80rem) 604px, (min-width: 48rem) calc(50vw - 2rem), calc(100vw - 24px)"
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{getLocalizedValue(study.title, locale)}</h3>
          <p className={styles.excerpt}>{getLocalizedValue(study.excerpt, locale)}</p>
        </div>
      </Link>
    </article>
  );
}
