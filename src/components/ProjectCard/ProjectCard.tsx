import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy, LocalizedString } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import styles from "./ProjectCard.module.css";

export type ProjectCardDevice = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  width: number;
  height: number;
};

export type ProjectCardCover = {
  src?: string;
  width: number;
  height: number;
  alt: CaseStudy["cover"]["alt"];
  video?: {
    src: string;
    poster?: string;
    overlay: "panel" | "device";
  };
  devices?: {
    background: string;
    left: ProjectCardDevice;
    right: ProjectCardDevice;
  };
  brand?: {
    background: string;
    imageSrc?: string;
    logoSrc?: string;
    logoWidth?: number;
    logoHeight?: number;
    label?: string;
    effect?: "blue-gradient" | "green-gradient";
    overlay?: {
      title: LocalizedString;
      subtitle?: LocalizedString;
    };
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
  /** Project name uses accent color */
  accentKicker?: boolean;
  /** Larger media ratio for featured home grid */
  featured?: boolean;
};

function DeviceFrame({
  device,
  className,
  sizes,
}: {
  device: ProjectCardDevice;
  className: string;
  sizes: string;
}) {
  return (
    <div className={className}>
      <div className={styles.deviceClip}>
        {device.kind === "video" ? (
          <>
            {device.poster ? (
              <Image
                src={device.poster}
                alt=""
                fill
                className={styles.deviceMedia}
                sizes={sizes}
              />
            ) : null}
            <video
              className={`${styles.deviceMedia} ${styles.deviceVideo}`}
              src={device.src}
              poster={device.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          </>
        ) : (
          <Image
            src={device.src}
            alt=""
            fill
            className={styles.deviceMedia}
            sizes={sizes}
          />
        )}
      </div>
    </div>
  );
}

export function ProjectCard({
  locale,
  study,
  href,
  mutedTags = false,
  strongKicker = false,
  accentKicker = false,
  featured = false,
}: ProjectCardProps) {
  const destination =
    href === undefined ? `/${locale}/case-study/${study.slug}` : href;
  const className = [
    styles.card,
    !destination ? styles.static : "",
    featured ? styles.featured : "",
  ]
    .filter(Boolean)
    .join(" ");
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
  const kickerClass = [
    styles.kicker,
    strongKicker ? styles.kickerStrong : "",
    accentKicker ? styles.kickerAccent : "",
  ]
    .filter(Boolean)
    .join(" ");
  const tagClass = mutedTags ? `${styles.tag} ${styles.tagMuted}` : styles.tag;
  const mediaSizes = featured
    ? "(min-width: 80rem) 880px, (min-width: 48rem) calc(50vw - 1.5rem - 20px), calc(100vw - 44px)"
    : "(min-width: 80rem) 604px, (min-width: 48rem) calc(50vw - 2rem), calc(100vw - 24px)";
  const alt = getLocalizedValue(study.cover.alt, locale);
  const videoOverlayClass =
    study.cover.video?.overlay === "device"
      ? styles.videoOverlayDevice
      : study.cover.video?.overlay === "panel"
        ? styles.videoOverlayPanel
        : "";

  const content: ReactNode = (
    <>
      <div className={styles.media}>
        {brand ? (
          <div
            className={`${styles.mediaSurface} ${styles.brandCover}${brandEffectClass ? ` ${brandEffectClass}` : ""}`}
            style={
              brand.effect === "blue-gradient" || brand.effect === "green-gradient"
                ? undefined
                : { background: brand.background }
            }
            role="img"
            aria-label={alt}
          >
            {brand.imageSrc ? (
              <Image
                src={brand.imageSrc}
                alt=""
                fill
                className={styles.brandPhoto}
                sizes={mediaSizes}
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
            {brand.overlay ? (
              <div className={styles.brandOverlay}>
                <p className={styles.brandOverlayTitle}>
                  {getLocalizedValue(brand.overlay.title, locale)}
                </p>
                {brand.overlay.subtitle ? (
                  <p className={styles.brandOverlaySubtitle}>
                    {getLocalizedValue(brand.overlay.subtitle, locale)}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : study.cover.devices ? (
          <div
            className={styles.mediaSurface}
            style={{ background: study.cover.devices.background }}
            role="img"
            aria-label={alt}
          >
            <div className={styles.devicePair}>
              <DeviceFrame
                device={study.cover.devices.left}
                className={styles.deviceLeft}
                sizes={mediaSizes}
              />
              <DeviceFrame
                device={study.cover.devices.right}
                className={styles.deviceRight}
                sizes={mediaSizes}
              />
            </div>
          </div>
        ) : study.cover.src ? (
          <div className={styles.mediaSurface}>
            <Image
              src={study.cover.src}
              alt={alt}
              fill
              className={styles.image}
              sizes={mediaSizes}
            />
            {study.cover.video ? (
              <video
                className={`${styles.videoOverlay} ${videoOverlayClass}`}
                src={study.cover.video.src}
                poster={study.cover.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
              />
            ) : null}
          </div>
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
    const isExternal = /^https?:\/\//.test(destination);
    const linkProps = isExternal
      ? {
          target: "_blank" as const,
          rel: "noopener noreferrer",
        }
      : {};

    return (
      <article>
        <Link
          className={className}
          href={destination}
          data-cursor="case-study"
          {...linkProps}
        >
          {content}
          {isExternal ? (
            <span className={styles.externalNote}>
              {getMessages(locale).footer.external}
            </span>
          ) : null}
        </Link>
      </article>
    );
  }

  return <article className={className}>{content}</article>;
}
