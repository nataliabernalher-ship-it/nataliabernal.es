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
  const caption = block.caption ? getLocalizedValue(block.caption, locale) : undefined;
  const inset = block.layout === "inset";

  return (
    <figure
      className={`${styles.figure} ${inset ? styles.inset : ""}`}
      style={block.radius ? { borderRadius: `${block.radius}px` } : undefined}
    >
      <Image
        src={block.src}
        alt={getLocalizedValue(block.alt, locale)}
        width={block.width}
        height={block.height}
        className={styles.image}
        sizes={inset ? "361px" : "(min-width: 48rem) 768px, calc(100vw - 24px)"}
      />
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
