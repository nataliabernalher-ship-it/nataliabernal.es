import Image from "next/image";
import type { CaseStudyImagePairBlock } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudyImagePair.module.css";

type CaseStudyImagePairProps = {
  locale: Locale;
  block: CaseStudyImagePairBlock;
};

export function CaseStudyImagePair({ locale, block }: CaseStudyImagePairProps) {
  const layout = block.layout ?? "row";
  const isCarousel = layout === "carousel";
  const stacked = layout === "stack";

  return (
    <div
      className={`${styles.pair} ${stacked ? styles.stack : ""} ${isCarousel ? styles.carousel : ""}`}
      role={isCarousel ? "region" : undefined}
      aria-label={isCarousel ? "User personas" : undefined}
      tabIndex={isCarousel ? 0 : undefined}
    >
      {block.images.map((image) => (
        <figure key={image.src} className={styles.figure}>
          <Image
            src={image.src}
            alt={getLocalizedValue(image.alt, locale)}
            width={image.width}
            height={image.height}
            className={styles.image}
            sizes={
              isCarousel
                ? "(min-width: 48rem) 586px, 85vw"
                : stacked
                  ? "(min-width: 48rem) 768px, calc(100vw - 24px)"
                  : "(min-width: 48rem) 380px, calc(100vw - 24px)"
            }
          />
        </figure>
      ))}
    </div>
  );
}
