import type { CaseStudyCardsBlock } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudyCards.module.css";

type CaseStudyCardsProps = {
  locale: Locale;
  block: CaseStudyCardsBlock;
};

export function CaseStudyCards({ locale, block }: CaseStudyCardsProps) {
  return (
    <ul className={`${styles.grid} ${styles[block.variant]}`}>
      {block.items.map((item, index) => (
        <li key={`${block.variant}-${index}`} className={styles.card}>
          {item.stat ? <p className={styles.stat}>{item.stat}</p> : null}
          <p className={styles.body}>{getLocalizedValue(item.body, locale)}</p>
        </li>
      ))}
    </ul>
  );
}
