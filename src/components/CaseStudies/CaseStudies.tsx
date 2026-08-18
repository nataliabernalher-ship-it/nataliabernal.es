import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { getHomeCaseStudies } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import styles from "./CaseStudies.module.css";

type CaseStudiesProps = {
  locale: Locale;
  messages: Messages;
};

export function CaseStudies({ locale, messages }: CaseStudiesProps) {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.headingRow}>
            <h2 id="work-title" className={styles.title}>
              {messages.home.projectsTitle}
            </h2>
          </header>
        </Reveal>
        <div className={styles.grid}>
          {getHomeCaseStudies().map((study, index) => (
            <Reveal key={study.slug} delay={index * 140}>
              <ProjectCard locale={locale} study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
