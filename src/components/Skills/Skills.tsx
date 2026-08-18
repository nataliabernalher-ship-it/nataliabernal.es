import { Reveal } from "@/components/Reveal/Reveal";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Skills.module.css";

type SkillsProps = {
  messages: Messages;
};

export function Skills({ messages }: SkillsProps) {
  const skills = messages.home.skills;

  return (
    <section className={styles.section} id="expertise" aria-labelledby="expertise-title" data-cursor-bg="teal">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.headingRow}>
            <h2 id="expertise-title" className={styles.title}>
              {skills.title}
            </h2>
          </header>
        </Reveal>
        <Reveal delay={140}>
          <ul className={styles.list}>
            {skills.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
