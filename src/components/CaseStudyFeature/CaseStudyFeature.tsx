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
  const layout = block.layout ?? "default";
  const title = block.title ? getLocalizedValue(block.title, locale) : null;
  const alt = block.image
    ? getLocalizedValue(block.image.alt, locale)
    : getLocalizedValue(block.body, locale);

  return (
    <article className={`${styles.row} ${styles[layout]}`}>
      {block.video ? (
        <div className={styles.media}>
          <video
            className={styles.video}
            src={block.video.src}
            poster={block.video.poster}
            width={block.video.width}
            height={block.video.height}
            autoPlay
            muted
            loop
            playsInline
            aria-label={alt}
          />
        </div>
      ) : block.image ? (
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
      ) : null}
      <div className={styles.copy}>
        <p className={styles.number}>{block.number}</p>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
        <p className={styles.body}>{getLocalizedValue(block.body, locale)}</p>
      </div>
    </article>
  );
}
