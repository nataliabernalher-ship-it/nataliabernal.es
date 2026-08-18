"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, replaceLocalePath, type Locale } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  onNavigate?: () => void;
};

export function LanguageSwitcher({ locale, label, onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label={label}>
      {locales.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? (
            <span className={styles.separator} aria-hidden="true">
              {" / "}
            </span>
          ) : null}
          <Link
            href={replaceLocalePath(pathname, item)}
            hrefLang={item}
            lang={item}
            className={`${styles.link} ${item === locale ? styles.current : ""}`}
            aria-current={item === locale ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.toUpperCase()}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
