"use client";

import { useEffect, useState } from "react";
import type { CaseStudySection } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudyNav.module.css";

type CaseStudyNavProps = {
  locale: Locale;
  label: string;
  sections: CaseStudySection[];
};

export function CaseStudyNav({ locale, label, sections }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(`${section.id}-emphasis`))
      .filter((node): node is HTMLElement => Boolean(node));

    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const id = visible?.target.getAttribute("data-section-id");

        if (id) {
          setActiveId(id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.nav} aria-label={label}>
      <ul className={styles.list}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              className={`${styles.link} ${activeId === section.id ? styles.active : ""}`}
              href={`#${section.id}`}
              aria-current={activeId === section.id ? "location" : undefined}
            >
              {getLocalizedValue(section.emphasis, locale)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
