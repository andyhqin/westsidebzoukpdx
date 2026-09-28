import type { CSSProperties, ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title?: string;
  /** Small label above the title, e.g. "Weekly" or "Every other week". */
  eyebrow?: string;
  children: ReactNode;
};

/** A white panel for grouping related content. */
export function Card({ title, eyebrow, children }: CardProps) {
  return (
    <article className={styles.card}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      {title && <h3>{title}</h3>}
      <div className={styles.body}>{children}</div>
    </article>
  );
}

type CardGridProps = {
  children: ReactNode;
  /** Narrowest a card may get before wrapping, in px. Lower it to fit more cards per row. */
  minCardWidth?: number;
};

/** Lays cards out in a responsive grid: one column on phones, as many as fit on desktop. */
export function CardGrid({ children, minCardWidth = 260 }: CardGridProps) {
  return (
    <div className={styles.grid} style={{ "--min-card": `${minCardWidth}px` } as CSSProperties}>
      {children}
    </div>
  );
}
