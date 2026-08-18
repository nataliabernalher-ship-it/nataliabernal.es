"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CaseStudyCursor.module.css";

type CaseStudyCursorProps = {
  label: string;
};

export function CaseStudyCursor({ label }: CaseStudyCursorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(media.matches);

    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const root = rootRef.current;

    if (!root) {
      return;
    }

    document.documentElement.classList.add("custom-cursor");

    const onMove = (event: MouseEvent) => {
      root.dataset.visible = "true";
      root.style.left = `${event.clientX}px`;
      root.style.top = `${event.clientY}px`;

      const hit = document.elementFromPoint(event.clientX, event.clientY);
      const overCard = Boolean(hit?.closest("[data-cursor='case-study']"));
      const overTeal = Boolean(hit?.closest("[data-cursor-bg='teal']"));
      root.dataset.expanded = overCard ? "true" : "false";
      root.dataset.onTeal = overTeal ? "true" : "false";
    };

    const onLeave = () => {
      root.dataset.visible = "false";
      root.dataset.expanded = "false";
      root.dataset.onTeal = "false";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      <div className={styles.pill}>
        <span className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
