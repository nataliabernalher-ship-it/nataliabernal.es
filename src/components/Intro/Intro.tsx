import { Reveal } from "@/components/Reveal/Reveal";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Intro.module.css";

type IntroProps = {
  messages: Messages;
};

export function Intro({ messages }: IntroProps) {
  const copy = messages.home.experience;

  return (
    <section className={styles.section} id="experience" aria-labelledby="experience-title">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.headingRow}>
            <h2 id="experience-title" className={styles.title}>
              {copy.title}
            </h2>
          </header>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.body}>
            <p className={styles.nda}>{copy.nda}</p>
            <div className={styles.copy}>
              <p>{copy.p1}</p>
              <p>
                {copy.p2.before}
                <span className={styles.mark}>{copy.p2.highlight}</span>
                {copy.p2.after}
              </p>
              <p>
                {copy.p3.before}
                <span className={styles.mark}>{copy.p3.highlight}</span>
                {copy.p3.after}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
