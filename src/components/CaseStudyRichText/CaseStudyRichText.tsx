import type { LocalizedRichText, RichSpan } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";

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

type CaseStudyRichTextProps = {
  value: LocalizedRichText;
  locale: Locale;
  className?: string;
};

export function CaseStudyRichText({ value, locale, className }: CaseStudyRichTextProps) {
  const content = getLocalizedValue(value, locale);

  if (!isRichSpan(content)) {
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className={className}>
        {paragraph}
      </p>
    ));
  }

  return <p className={className}>{renderInline(content)}</p>;
}
