import type { MouseEvent, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";

/** Wraps every page with the header, footer, and a skip link for keyboard users. */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a href="#main" className={styles.skipLink} onClick={focusMain}>
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

// With hash routing, "#main" would be read as a page path, so move focus manually.
function focusMain(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  document.getElementById("main")?.focus();
}
