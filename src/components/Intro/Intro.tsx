import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import type { ProjectCardStudy } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/Reveal/Reveal";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Intro.module.css";

type IntroProps = {
  locale: Locale;
  messages: Messages;
};

const experienceCovers = {
  tuscasasrurales: {
    width: 604,
    height: 389,
    alt: {
      es: "Casa rural con wordmark de TusCasasRurales.com",
      en: "Rural house with TusCasasRurales.com wordmark",
    },
    brand: {
      background: "#073801",
      imageSrc: "/images/lab/tuscasasrurales-cover.jpg",
      logoSrc: "/images/lab/tuscasasrurales-logo.svg",
      logoWidth: 300,
      logoHeight: 24,
      effect: "green-gradient" as const,
    },
  },
  pentasys: {
    width: 604,
    height: 389,
    alt: {
      es: "Logo de Pentaweb sobre fondo azul",
      en: "Pentaweb logo on blue background",
    },
    brand: {
      background: "#011555",
      logoSrc: "/images/lab/pentaweb-logo.png",
      logoWidth: 193,
      logoHeight: 43,
      effect: "blue-gradient" as const,
    },
  },
} as const;

export function Intro({ locale, messages }: IntroProps) {
  const copy = messages.home.experience;

  const studies: ProjectCardStudy[] = copy.cards.map((card) => ({
    slug: card.id,
    tags: [{ es: card.tag, en: card.tag }],
    title: { es: card.name, en: card.name },
    excerpt: { es: card.description, en: card.description },
    cover: experienceCovers[card.id as keyof typeof experienceCovers],
  }));

  return (
    <section className={styles.section} id="experience" aria-labelledby="experience-title">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.headingRow}>
            <h2 id="experience-title" className={styles.title}>
              {copy.title}
            </h2>
            <p className={styles.intro}>{copy.p1}</p>
          </header>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.cards}>
            {studies.map((study) => (
              <ProjectCard
                key={study.slug}
                locale={locale}
                study={study}
                href={null}
                strongKicker
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
