import type {
  CaseStudyProseBlock,
  CaseStudySectionBlock,
} from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import { CaseStudyRichText } from "@/components/CaseStudyRichText/CaseStudyRichText";
import styles from "./CaseStudySection.module.css";

type CaseStudySectionProps = {
  locale: Locale;
  block: CaseStudySectionBlock | CaseStudyProseBlock;
  headingId?: string;
};

export function CaseStudySection({ locale, block, headingId }: CaseStudySectionProps) {
  const spacing = block.type === "section" ? (block.spacing ?? "default") : "prose";
  const list = block.list ? getLocalizedValue(block.list, locale) : undefined;
  const isH3 = block.type === "section" && block.level === 3;
  const HeadingTag = isH3 ? "h3" : "h2";

  return (
    <div className={`${styles.block} ${styles[spacing]}`}>
      {block.type === "section" && block.emphasis ? (
        <p className={styles.emphasis}>{getLocalizedValue(block.emphasis, locale)}</p>
      ) : null}
      {block.type === "section" ? (
        <HeadingTag
          id={headingId}
          className={isH3 ? styles.heading3 : styles.heading}
        >
          {getLocalizedValue(block.heading, locale)}
        </HeadingTag>
      ) : null}
      {block.body ? (
        <CaseStudyRichText value={block.body} locale={locale} className={styles.body} />
      ) : null}
      {list && list.length > 0 ? (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {block.after ? (
        <CaseStudyRichText value={block.after} locale={locale} className={styles.body} />
      ) : null}
    </div>
  );
}
