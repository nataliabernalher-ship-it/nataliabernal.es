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
  const meta = study.meta ?? [
    { label: { es: labels.role, en: labels.role }, values: [getLocalizedValue(study.role, locale)] },
    ...(study.tools.length > 0
      ? [{ label: { es: labels.tools, en: labels.tools }, values: study.tools }]
      : []),
    { label: { es: labels.year, en: labels.year }, values: [study.year] },
  ];

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
        {meta.map((item) => (
          <div key={getLocalizedValue(item.label, locale)} className={styles.metaItem}>
            <dt>{getLocalizedValue(item.label, locale)}</dt>
            <dd>
              {item.values.length > 1 ? (
                <ul className={styles.tools}>
                  {item.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              ) : (
                item.values[0]
              )}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
