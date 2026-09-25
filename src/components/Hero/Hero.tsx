import Image from "next/image";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Hero.module.css";

type HeroProps = {
  messages: Messages;
};

export function Hero({ messages }: HeroProps) {
  const { headlineItalic, tags, tagsLabel } = messages.home.hero;
  const lines = headlineItalic.split("\n");
  let charIndex = 0;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.wrapper}>
        <h1
          id="hero-heading"
          className={styles.heading}
          aria-label={lines.join(" ")}
        >
          <em className={styles.headlineItalic} aria-hidden="true">
            {lines.map((line) => (
              <span key={line} className={styles.headlineLine}>
                {Array.from(line).map((char) => {
                  const index = charIndex;
                  charIndex += 1;

                  return (
                    <span
                      key={index}
                      className={styles.char}
                      style={{ animationDelay: `${0.08 + index * 0.028}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </span>
            ))}
          </em>
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
