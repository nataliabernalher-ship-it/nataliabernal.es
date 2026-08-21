import { Reveal } from "@/components/Reveal/Reveal";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Intro.module.css";

type IntroProps = {
  messages: Messages;
};

type ExperienceBlock = Messages["home"]["experience"]["p2"];

function ExperienceBlockCopy({ block }: { block: ExperienceBlock }) {
  return (
    <div className={styles.block}>
      <p>
        {block.before}
        <span className={styles.mark}>{block.highlight}</span>
        {block.after}
      </p>
      <ul className={styles.list}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

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
            <p className={styles.nda}>{copy.nda}</p>
          </header>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.copy}>
            <p>{copy.p1}</p>
            <ExperienceBlockCopy block={copy.p2} />
            <ExperienceBlockCopy block={copy.p3} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
