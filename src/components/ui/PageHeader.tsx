import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  /** Short intro line under the title. */
  intro?: ReactNode;
};

/** The title band at the top of every inner page. */
export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>
    </header>
  );
}
