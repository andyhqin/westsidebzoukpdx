import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  /** Optional heading shown at the top of the section. */
  title?: string;
  /** "default" = page background, "tinted" = warm alternate background. */
  tone?: "default" | "tinted";
  /** "wide" for grids and cards, "reading" for long text. */
  width?: "wide" | "reading";
  id?: string;
};

/** A full-width page band with centered content. The main building block for pages. */
export function Section({ children, title, tone = "default", width = "wide", id }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${tone === "tinted" ? styles.tinted : ""}`}>
      <div className={`${styles.inner} ${width === "reading" ? styles.reading : ""}`}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
