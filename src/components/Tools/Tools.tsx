import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal/Reveal";
import { tools } from "@/data/tools";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Tools.module.css";

type ToolsProps = {
  messages: Messages;
};

export function Tools({ messages }: ToolsProps) {
  return (
    <section className={styles.section} id="tools" aria-labelledby="tools-title" data-cursor-bg="teal">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.headingRow}>
            <h2 id="tools-title" className={styles.title}>
              {messages.home.tools.title}
            </h2>
          </header>
        </Reveal>
        <Reveal delay={140}>
          <ul className={styles.logos}>
            {tools.map((tool) => (
              <li
                key={tool.name}
                className={styles.logo}
                style={
                  {
                    "--logo-w": `${tool.width}px`,
                    "--logo-h": `${tool.height}px`,
                  } as CSSProperties
                }
              >
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={tool.width}
                  height={tool.height}
                  className={styles.icon}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
