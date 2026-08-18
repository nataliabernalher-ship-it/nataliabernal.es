import type {
  CaseStudyProseBlock,
  CaseStudySectionBlock,
  LocalizedRichText,
  RichSpan,
} from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudySection.module.css";

type CaseStudySectionProps = {
  locale: Locale;
  block: CaseStudySectionBlock | CaseStudyProseBlock;
  headingId?: string;
};

function isRichSpan(value: string | RichSpan[]): value is RichSpan[] {
  return Array.isArray(value);
}

function renderInline(value: string | RichSpan[]) {
  if (!isRichSpan(value)) {
    return value;
  }

  return value.map((span, index) => {
    if (span.italic) {
      return <em key={index}>{span.text}</em>;
    }

    if (span.bold) {
      return <strong key={index}>{span.text}</strong>;
    }

    return <span key={index}>{span.text}</span>;
  });
}

function RichBody({ value, locale }: { value: LocalizedRichText; locale: Locale }) {
  const content = getLocalizedValue(value, locale);

  if (!isRichSpan(content)) {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className={styles.body}>
        {paragraph}
      </p>
    ));
  }

  return <p className={styles.body}>{renderInline(content)}</p>;
}

export function CaseStudySection({ locale, block, headingId }: CaseStudySectionProps) {
  const spacing = block.type === "section" ? (block.spacing ?? "default") : "prose";
  const list = block.list ? getLocalizedValue(block.list, locale) : undefined;

  return (
    <div className={`${styles.block} ${styles[spacing]}`}>
      {block.type === "section" && block.emphasis ? (
        <p className={styles.emphasis}>{getLocalizedValue(block.emphasis, locale)}</p>
      ) : null}
      {block.type === "section" ? (
        <h2 id={headingId} className={styles.heading}>
          {getLocalizedValue(block.heading, locale)}
        </h2>
      ) : null}
      {block.body ? <RichBody value={block.body} locale={locale} /> : null}
      {list && list.length > 0 ? (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {block.after ? <RichBody value={block.after} locale={locale} /> : null}
    </div>
  );
}
