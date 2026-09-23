import Image from "next/image";
import type { CaseStudy, CaseStudyHeroDevice } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import styles from "./CaseStudyHero.module.css";

type CaseStudyHeroProps = {
  locale: Locale;
  messages: Messages;
  study: CaseStudy;
};

function DeviceFrame({
  device,
  className,
}: {
  device: CaseStudyHeroDevice;
  className: string;
}) {
  const sizes = "(min-width: 67.5rem) 1080px, calc(100vw - 24px)";

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
                priority
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
            priority
          />
        )}
      </div>
    </div>
  );
}

export function CaseStudyHero({ locale, messages, study }: CaseStudyHeroProps) {
  const labels = messages.caseStudy;
  const meta = study.meta ?? [
    { label: { es: labels.role, en: labels.role }, values: [getLocalizedValue(study.role, locale)] },
    ...(study.tools.length > 0
      ? [{ label: { es: labels.tools, en: labels.tools }, values: study.tools }]
      : []),
    { label: { es: labels.year, en: labels.year }, values: [study.year] },
  ];
  const hero = study.heroImage;
  const alt = hero ? getLocalizedValue(hero.alt, locale) : "";

  return (
    <header className={styles.hero}>
      {study.tags.length > 0 ? (
        <p className={styles.tags}>
          {study.tags.map((tag) => (
            <span key={getLocalizedValue(tag, locale)} className={styles.tag}>
              {getLocalizedValue(tag, locale)}
            </span>
          ))}
        </p>
      ) : null}
      <h1 className={styles.title}>{getLocalizedValue(study.pageTitle, locale)}</h1>
      {hero ? (
        <div className={`${styles.media} ${hero.devices ? styles.mediaDevices : ""}`}>
          {hero.devices ? (
            <div
              className={styles.mediaSurface}
              style={{ background: hero.devices.background }}
              role="img"
              aria-label={alt}
            >
              <div className={styles.devicePair}>
                <DeviceFrame device={hero.devices.left} className={styles.deviceLeft} />
                <DeviceFrame device={hero.devices.right} className={styles.deviceRight} />
              </div>
            </div>
          ) : hero.src ? (
            <Image
              src={hero.src}
              alt={alt}
              fill
              className={styles.image}
              sizes="(min-width: 67.5rem) 1080px, calc(100vw - 24px)"
              priority
            />
          ) : null}
        </div>
      ) : null}
      <dl className={styles.meta}>
        {meta.map((item) => (
          <div key={getLocalizedValue(item.label, locale)} className={styles.metaItem}>
            <dt>{getLocalizedValue(item.label, locale)}</dt>
            <dd>
              {item.values.length > 1 ? (
                <ul className={styles.tools}>
                  {item.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              ) : (
                item.values[0]
              )}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
