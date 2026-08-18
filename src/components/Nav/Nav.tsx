"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { site } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Nav.module.css";

type NavProps = {
  locale: Locale;
  messages: Messages;
};

export function Nav({ locale, messages }: NavProps) {
  const menuId = useId();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const labHref = `/${locale}/lab`;
  const labCurrent = pathname === labHref || pathname.startsWith(`${labHref}/`);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <Link className={styles.logoBox} href={`/${locale}`} aria-label={site.name}>
        <span className={styles.logo}>
          <Image
            src="/images/nav/logo.png"
            alt=""
            width={125}
            height={125}
            className={styles.logoImg}
            priority
          />
        </span>
      </Link>
      <nav className={styles.desktopMenu} aria-label={messages.nav.menu}>
        <Link
          className={styles.link}
          href={labHref}
          aria-current={labCurrent ? "page" : undefined}
        >
          {messages.nav.lab}
        </Link>
        <Link className={`${styles.link} ${styles.contact}`} href={`/${locale}#contact`}>
          {messages.nav.contact}
        </Link>
        <div className={styles.langCell}>
          <LanguageSwitcher locale={locale} label={messages.nav.language} />
        </div>
      </nav>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? messages.nav.closeMenu : messages.nav.openMenu}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={styles.icon}>
          <Image
            src="/images/nav/menu.svg"
            alt=""
            width={38}
            height={24}
            className={styles.iconImg}
            unoptimized
          />
        </span>
      </button>
      {open ? (
        <nav id={menuId} className={styles.panel} aria-label={messages.nav.menu}>
          <Link
            className={styles.panelLink}
            href={labHref}
            aria-current={labCurrent ? "page" : undefined}
            onClick={close}
          >
            {messages.nav.lab}
          </Link>
          <Link
            className={`${styles.panelLink} ${styles.contact}`}
            href={`/${locale}#contact`}
            onClick={close}
          >
            {messages.nav.contact}
          </Link>
          <div className={styles.panelLang}>
            <LanguageSwitcher locale={locale} label={messages.nav.language} onNavigate={close} />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
