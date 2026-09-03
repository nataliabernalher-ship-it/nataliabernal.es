import Image from "next/image";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Hero.module.css";

type HeroProps = {
  messages: Messages;
};

const TAGS = ["DESIGN SYSTEM", "MARKETPLACES", "TRAVEL", "AI"];

export function Hero({ messages }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.wrapper}>
        {/* Línea 1: saludo + foto */}
        <div className={styles.greetingRow}>
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.greetingLine}>
              <span className={styles.greeting}>{messages.home.greeting}</span>
              <span className={styles.portraitFrame}>
                <Image
                  src="/images/hero/portrait-circle.png"
                  alt={messages.home.portraitAlt}
                  width={63}
                  height={63}
                  priority
                  unoptimized
                  className={styles.portrait}
                />
              </span>
            </span>
            <span className={styles.role}>{messages.home.role}</span>
            <span className={styles.bio}>{messages.home.bio}</span>
          </h1>
        </div>

        {/* Tags */}
        <ul className={styles.tags} aria-label="Especialidades">
          {TAGS.map((tag, i) => (
            <li key={tag} className={styles.tagItem}>
              {i > 0 && (
                <Image
                  src="/images/hero/separator.svg"
                  alt=""
                  width={16}
                  height={16}
                  className={styles.separator}
                  unoptimized
                />
              )}
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
