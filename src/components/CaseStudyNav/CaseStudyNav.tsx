"use client";

import { useEffect, useState } from "react";
import type { CaseStudyNavItem } from "@/data/case-studies";
import { getLocalizedValue } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import styles from "./CaseStudyNav.module.css";

type CaseStudyNavProps = {
  locale: Locale;
  label: string;
  items: CaseStudyNavItem[];
};

export function CaseStudyNav({ locale, label, items }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) {
      return;
    }

    const update = () => {
      const marker = window.innerHeight * 0.22;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <div className={styles.sidemenu}>
      <nav className={styles.nav} aria-label={label}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                className={`${styles.link} ${activeId === item.id ? styles.active : ""}`}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {getLocalizedValue(item.label, locale)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
