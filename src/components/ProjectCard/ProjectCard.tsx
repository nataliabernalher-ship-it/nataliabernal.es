import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./ProjectCard.module.css";

export type ProjectCardCover = {
  src?: string;
  width: number;
  height: number;
  alt: CaseStudy["cover"]["alt"];
  brand?: {
    background: string;
    imageSrc?: string;
    logoSrc?: string;
    logoWidth?: number;
    logoHeight?: number;
    label?: string;
    effect?: "blue-gradient" | "green-gradient";
  };
};

export type ProjectCardStudy = {
  slug: string;
  tags: CaseStudy["tags"];
  title: CaseStudy["title"];
  excerpt: CaseStudy["excerpt"];
  cover: ProjectCardCover;
};

type ProjectCardProps = {
  locale: Locale;
  study: ProjectCardStudy;
  href?: string | null;
  /** Muted tertiary tags (e.g. NDA) instead of accent */
  mutedTags?: boolean;
  /** Company name uses body text color instead of tertiary */
  strongKicker?: boolean;
};

export function ProjectCard({
  locale,
  study,
  href,
  mutedTags = false,
  strongKicker = false,
}: ProjectCardProps) {
  const destination =
    href === undefined ? `/${locale}/case-study/${study.slug}` : href;
  const className = destination
    ? styles.card
    : `${styles.card} ${styles.static}`;
  const brand = study.cover.brand;
  const brandEffectClass =
    brand?.effect === "blue-gradient"
      ? styles.brandCoverBlue
      : brand?.effect === "green-gradient"
        ? styles.brandCoverGreen
        : "";
  const logoClass =
    brand?.effect === "green-gradient"
      ? `${styles.brandLogo} ${styles.brandLogoGreen}`
      : brand?.effect === "blue-gradient"
        ? `${styles.brandLogo} ${styles.brandLogoBlue}`
        : styles.brandLogo;
  const kickerClass = strongKicker
    ? `${styles.kicker} ${styles.kickerStrong}`
    : styles.kicker;
  const tagClass = mutedTags ? `${styles.tag} ${styles.tagMuted}` : styles.tag;

  const content: ReactNode = (
    <>
      <div className={styles.media}>
        {brand ? (
          <div
            className={`${styles.brandCover}${brandEffectClass ? ` ${brandEffectClass}` : ""}`}
            style={
              brand.effect === "blue-gradient" || brand.effect === "green-gradient"
                ? undefined
                : { background: brand.background }
            }
            role="img"
            aria-label={getLocalizedValue(study.cover.alt, locale)}
          >
            {brand.imageSrc ? (
              <Image
                src={brand.imageSrc}
                alt=""
                fill
                className={styles.brandPhoto}
                sizes="(min-width: 80rem) 604px, (min-width: 48rem) calc(50vw - 2rem), calc(100vw - 24px)"
              />
            ) : null}
            {brand.logoSrc ? (
              <Image
                src={brand.logoSrc}
                alt=""
                width={brand.logoWidth ?? 193}
                height={brand.logoHeight ?? 43}
                className={logoClass}
                unoptimized
              />
            ) : null}
            {brand.label ? (
              <span className={styles.brandLabel}>{brand.label}</span>
            ) : null}
          </div>
        ) : study.cover.src ? (
          <Image
            src={study.cover.src}
            alt={getLocalizedValue(study.cover.alt, locale)}
            fill
            className={styles.image}
            sizes="(min-width: 80rem) 604px, (min-width: 48rem) calc(50vw - 2rem), calc(100vw - 24px)"
          />
        ) : null}
      </div>
      <div className={styles.text}>
        <div className={styles.metaRow}>
          <p className={kickerClass}>{getLocalizedValue(study.title, locale)}</p>
          <div className={styles.tags}>
            {study.tags.map((tag) => (
              <p key={getLocalizedValue(tag, locale)} className={tagClass}>
                {getLocalizedValue(tag, locale)}
              </p>
            ))}
          </div>
        </div>
        <h3 className={styles.title}>{getLocalizedValue(study.excerpt, locale)}</h3>
      </div>
    </>
  );

  if (destination) {
    return (
      <article>
        <Link className={className} href={destination} data-cursor="case-study">
          {content}
        </Link>
      </article>
    );
  }

  return <article className={className}>{content}</article>;
}
