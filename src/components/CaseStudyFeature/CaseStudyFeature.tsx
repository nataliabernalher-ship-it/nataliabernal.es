import Image from "next/image";
import type { CaseStudyFeatureBlock } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudyFeature.module.css";

type CaseStudyFeatureProps = {
  locale: Locale;
  block: CaseStudyFeatureBlock;
};

export function CaseStudyFeature({ locale, block }: CaseStudyFeatureProps) {
  return (
    <article className={styles.row}>
      <figure className={styles.media}>
        <Image
          src={block.image.src}
          alt={getLocalizedValue(block.image.alt, locale)}
          width={block.image.width}
          height={block.image.height}
          className={styles.image}
          sizes="(min-width: 48rem) 550px, calc(100vw - 24px)"
        />
      </figure>
      <div className={styles.copy}>
        <p className={styles.number}>{block.number}</p>
        <h3 className={styles.title}>{getLocalizedValue(block.title, locale)}</h3>
        <p className={styles.body}>{getLocalizedValue(block.body, locale)}</p>
      </div>
    </article>
  );
}
