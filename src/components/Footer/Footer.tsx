import { Reveal } from "@/components/Reveal/Reveal";
import { site } from "@/data/site";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Footer.module.css";

type FooterProps = {
  messages: Messages;
};

export function Footer({ messages }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Reveal>
        <ul className={styles.links}>
          {site.socials.map((social) => (
            <li key={social.name}>
              <a
                className={styles.link}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name}. ${messages.footer.external}`}
              >
                <span>{social.label}</span>
                <span className={styles.icon} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={100}>
        <p className={styles.copy}>
          © {year} {site.name}. {messages.footer.rights}
        </p>
      </Reveal>
    </footer>
  );
}
