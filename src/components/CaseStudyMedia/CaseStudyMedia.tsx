import Image from "next/image";
import type { CaseStudyImageBlock } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudyMedia.module.css";

type CaseStudyMediaProps = {
  locale: Locale;
  block: CaseStudyImageBlock;
};

export function CaseStudyMedia({ locale, block }: CaseStudyMediaProps) {
  return (
    <figure
      className={styles.figure}
      style={block.radius ? { borderRadius: `${block.radius}px` } : undefined}
    >
      <Image
        src={block.src}
        alt={getLocalizedValue(block.alt, locale)}
        width={block.width}
        height={block.height}
        className={styles.image}
        sizes="(min-width: 48rem) 768px, calc(100vw - 24px)"
      />
    </figure>
  );
}
