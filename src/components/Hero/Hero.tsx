import Image from "next/image";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Hero.module.css";

type HeroProps = {
  messages: Messages;
};

export function Hero({ messages }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <div className={styles.intro}>
          <h1 id="hero-heading" className={styles.heading}>
            <span>{messages.home.greeting}</span>
            <span className={styles.role}>{messages.home.role}</span>
            <span>{messages.home.bio}</span>
          </h1>
          <p className={styles.location}>
            <span aria-hidden="true">{messages.home.location}</span>
            <span className="srOnly">{messages.home.locationSr}</span>
            <span className={styles.stamp} aria-hidden="true">
              <Image
                src="/images/hero/stamp.png"
                alt=""
                width={226}
                height={158}
                className={styles.stampImg}
              />
            </span>
          </p>
        </div>
        <div className={styles.scrollCue}>
          <a className={styles.scroll} href="#experience">
            {messages.home.scroll}
            <span className={styles.arrowWrap}>
              <Image
                className={styles.arrow}
                src="/images/hero/scroll-arrow.svg"
                alt=""
                width={14}
                height={16}
                unoptimized
              />
            </span>
          </a>
        </div>
      </div>
      <div className={styles.portraitFrame}>
        <Image
          src="/images/hero/portrait.png"
          alt={messages.home.portraitAlt}
          width={520}
          height={616}
          priority
          unoptimized
          className={styles.portrait}
        />
      </div>
    </section>
  );
}
