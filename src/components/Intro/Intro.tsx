import { Reveal } from "@/components/Reveal/Reveal";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Intro.module.css";

type IntroProps = {
  messages: Messages;
};

type ExperienceBlock = Messages["home"]["experience"]["p2"];

function ExperienceCard({ block, tag }: { block: ExperienceBlock; tag: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTag}>{tag}</div>
      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{block.highlight}</p>
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
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
            <p className={styles.intro}>{copy.p1}</p>
          </header>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.cards}>
            <ExperienceCard block={copy.p2} tag="[accommodation marketplace]" />
            <ExperienceCard block={copy.p3} tag="[web agency]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
