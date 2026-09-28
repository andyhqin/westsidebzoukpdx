import type { ReactNode } from "react";
import { Link } from "../../router/router";
import styles from "./Button.module.css";

type ButtonLinkProps = {
  children: ReactNode;
  /** Internal path ("/classes") or full external URL ("https://..."). */
  to: string;
  variant?: "primary" | "secondary";
};

/** A link styled as a button. Internal paths use the site router; URLs open normally. */
export function ButtonLink({ children, to, variant = "primary" }: ButtonLinkProps) {
  const className = `${styles.button} ${styles[variant]}`;
  const isExternal = /^(https?:|mailto:)/.test(to);

  if (isExternal) {
    return (
      <a className={className} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

/** Lays out a row of buttons that wraps on small screens. */
export function ButtonRow({ children }: { children: ReactNode }) {
  return <div className={styles.row}>{children}</div>;
}
