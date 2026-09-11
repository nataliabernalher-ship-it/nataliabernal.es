import Image from "next/image";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Hero.module.css";

type HeroProps = {
  messages: Messages;
};

export function Hero({ messages }: HeroProps) {
  const { headlineItalic, headlineRest, tags, tagsLabel } = messages.home.hero;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.wrapper}>
        <h1 id="hero-heading" className={styles.heading}>
          <span className={styles.headline}>
            <em className={styles.headlineItalic}>{headlineItalic}</em>
            {headlineRest}
          </span>
        </h1>

        <ul className={styles.tags} aria-label={tagsLabel}>
          {tags.map((tag, i) => (
            <li key={tag} className={styles.tagItem}>
              {i > 0 ? (
                <Image
                  src="/images/hero/separator.svg"
                  alt=""
                  width={16}
                  height={16}
                  className={styles.separator}
                  unoptimized
                />
              ) : null}
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
