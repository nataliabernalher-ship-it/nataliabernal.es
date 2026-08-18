import { Reveal } from "@/components/Reveal/Reveal";
import { site } from "@/data/site";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Cta.module.css";

type CtaProps = {
  messages: Messages;
};

export function Cta({ messages }: CtaProps) {
  const cta = messages.home.cta;

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <Reveal>
          <h2 id="contact-title" className={styles.title}>
            {cta.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className={styles.body}>{cta.body}</p>
        </Reveal>
        <Reveal delay={200}>
          <a className={styles.button} href={`mailto:${site.email}`}>
            {cta.button}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
