import type { ReactNode } from "react";
import styles from "./Callout.module.css";

type CalloutProps = {
  title?: string;
  children: ReactNode;
};

/** A highlighted box for an important note (e.g. "No partner needed"). */
export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className={styles.callout}>
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </aside>
  );
}
