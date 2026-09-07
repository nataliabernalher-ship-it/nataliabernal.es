import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Skills.module.css";

type SkillsProps = {
  messages: Messages;
};

export function Skills({ messages }: SkillsProps) {
  const skills = messages.home.skills;

  return (
    <section className={styles.section} id="expertise" aria-labelledby="expertise-title">
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.titleCol}>
            <h2 id="expertise-title" className={styles.title}>
              {skills.title}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <ul className={styles.list}>
            {skills.items.map((item) => (
              <li key={item.title} className={styles.item}>
                <div className={styles.itemTitle}>
                  <Image
                    src="/images/skills/bullet.svg"
                    alt=""
                    width={16}
                    height={16}
                    className={styles.bullet}
                    unoptimized
                  />
                  <span>{item.title}</span>
                </div>
                <p className={styles.itemDescription}>{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
