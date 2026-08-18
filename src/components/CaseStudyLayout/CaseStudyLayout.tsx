import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import { CaseStudyNav } from "@/components/CaseStudyNav/CaseStudyNav";
import styles from "./CaseStudyLayout.module.css";

type CaseStudyLayoutProps = {
  locale: Locale;
  messages: Messages;
  study: CaseStudy;
};

export function CaseStudyLayout({ locale, messages, study }: CaseStudyLayoutProps) {
  return (
    <article className={styles.layout}>
      <header className={styles.header}>
        <Link className={styles.back} href={`/${locale}`}>
          {messages.caseStudy.back}
        </Link>
        <p className={styles.meta}>
          {getLocalizedValue(study.role, locale)} · {study.year}
        </p>
        <h1 className={styles.title}>{getLocalizedValue(study.title, locale)}</h1>
      </header>
      <CaseStudyNav
        locale={locale}
        label={messages.caseStudy.navLabel}
        sections={study.sections}
      />
      <div className={styles.body}>
        {study.sections.map((section) => (
          <section key={section.id} id={section.id} className={styles.section}>
            <h2
              id={`${section.id}-emphasis`}
              data-section-id={section.id}
              className={styles.emphasis}
            >
              {getLocalizedValue(section.emphasis, locale)}
            </h2>
            <p className={styles.content}>{getLocalizedValue(section.body, locale)}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
