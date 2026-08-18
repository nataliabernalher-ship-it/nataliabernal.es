import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import styles from "./CaseStudyHero.module.css";

type CaseStudyHeroProps = {
  locale: Locale;
  messages: Messages;
  study: CaseStudy;
};

export function CaseStudyHero({ locale, messages, study }: CaseStudyHeroProps) {
  const labels = messages.caseStudy;

  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>{getLocalizedValue(study.pageTitle, locale)}</h1>
      {study.heroImage ? (
        <div className={styles.media}>
          <Image
            src={study.heroImage.src}
            alt={getLocalizedValue(study.heroImage.alt, locale)}
            width={study.heroImage.width}
            height={study.heroImage.height}
            className={styles.image}
            sizes="(min-width: 48rem) 768px, calc(100vw - 24px)"
            priority
          />
        </div>
      ) : null}
      <dl className={styles.meta}>
        <div className={styles.metaItem}>
          <dt>{labels.role}</dt>
          <dd>{getLocalizedValue(study.role, locale)}</dd>
        </div>
        {study.tools.length > 0 ? (
          <div className={styles.metaItem}>
            <dt>{labels.tools}</dt>
            <dd>
              <ul className={styles.tools}>
                {study.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}
        <div className={styles.metaItem}>
          <dt>{labels.year}</dt>
          <dd>{study.year}</dd>
        </div>
      </dl>
    </header>
  );
}
