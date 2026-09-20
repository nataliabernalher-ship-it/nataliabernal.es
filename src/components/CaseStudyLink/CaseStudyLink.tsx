import type { CaseStudyLinkBlock } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import styles from "./CaseStudyLink.module.css";

type CaseStudyLinkProps = {
  locale: Locale;
  block: CaseStudyLinkBlock;
};

export function CaseStudyLink({ locale, block }: CaseStudyLinkProps) {
  const label = getLocalizedValue(block.label, locale);
  const spacing = block.spacing ?? "default";
  const external = getMessages(locale).footer.external;

  return (
    <div className={`${styles.wrap} ${styles[spacing]}`}>
      <a
        className={styles.link}
        href={block.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}. ${external}`}
      >
        <span>{label}</span>
        <span className={styles.icon} aria-hidden="true" />
      </a>
    </div>
  );
}
