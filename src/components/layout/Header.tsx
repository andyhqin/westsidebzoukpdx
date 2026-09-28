import { useEffect, useState } from "react";
import { site } from "../../config/site";
import { routes } from "../../routes";
import { Link, usePath } from "../../router/router";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePath();

  // Close the mobile menu whenever the page changes.
  useEffect(() => setMenuOpen(false), [path]);

  const navRoutes = routes.filter((route) => route.navLabel);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          {site.logo.src ? (
            <img src={site.logo.src} alt={site.logo.alt} className={styles.logo} />
          ) : (
            <span className={styles.wordmark}>{site.name}</span>
          )}
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" aria-label="Main" className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link to={route.path} className={styles.navLink}>
                  {route.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
