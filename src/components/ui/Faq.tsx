import type { ReactNode } from "react";
import styles from "./Faq.module.css";

type FaqItemProps = {
  question: string;
  children: ReactNode;
};

/** One expandable question. Uses native <details>, so it works without JavaScript. */
export function FaqItem({ question, children }: FaqItemProps) {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>{question}</summary>
      <div className={styles.answer}>{children}</div>
    </details>
  );
}

export function FaqList({ children }: { children: ReactNode }) {
  return <div className={styles.list}>{children}</div>;
}
