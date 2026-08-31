import Image from "next/image";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Hero.module.css";

type HeroProps = {
  messages: Messages;
};

const COMMERCE_TERM = "e-commerce";

function HeroBio({ text }: { text: string }) {
  const index = text.indexOf(COMMERCE_TERM);

  if (index === -1) {
    return text;
  }

  return (
    <>
      {text.slice(0, index)}
      <br className={styles.bioBreak} />
      <span className={styles.nowrap}>{COMMERCE_TERM}</span>
      {text.slice(index + COMMERCE_TERM.length)}
    </>
  );
}

export function Hero({ messages }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <div className={styles.intro}>
          <h1 id="hero-heading" className={styles.heading}>
            <span>{messages.home.greeting}</span>
            <span className={styles.role}>{messages.home.role}</span>
            <span>
              <HeroBio text={messages.home.bio} />
            </span>
          </h1>
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
