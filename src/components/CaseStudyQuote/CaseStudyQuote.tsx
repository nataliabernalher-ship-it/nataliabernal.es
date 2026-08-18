import type { CaseStudyQuoteBlock } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudyQuote.module.css";

type CaseStudyQuoteProps = {
  locale: Locale;
  block: CaseStudyQuoteBlock;
};

export function CaseStudyQuote({ locale, block }: CaseStudyQuoteProps) {
  return (
    <blockquote className={styles.quote}>
      <p>{getLocalizedValue(block.text, locale)}</p>
    </blockquote>
  );
}
