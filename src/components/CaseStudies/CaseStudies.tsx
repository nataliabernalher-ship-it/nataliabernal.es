import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { homeFeaturedProjects } from "@/data/home-featured";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import styles from "./CaseStudies.module.css";

type CaseStudiesProps = {
  locale: Locale;
  messages: Messages;
};

export function CaseStudies({ locale, messages }: CaseStudiesProps) {
  const copy = messages.home.featured;

  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.headingRow}>
            <h2 id="work-title" className={styles.title}>
              {copy.title}
            </h2>
            <p className={styles.intro}>{copy.description}</p>
          </header>
        </Reveal>
        <div className={styles.grid}>
          {homeFeaturedProjects.map((study, index) => (
            <Reveal key={study.slug} delay={index * 100}>
              <ProjectCard
                locale={locale}
                study={study}
                href={study.href}
                featured
                accentKicker
                mutedTags
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
