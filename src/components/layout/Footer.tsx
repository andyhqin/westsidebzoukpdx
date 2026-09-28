import { site } from "../../config/site";
import { Link } from "../../router/router";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.muted}>{site.tagline}</p>
        </div>

        <div>
          <p className={styles.label}>Where</p>
          <p className={styles.muted}>
            {site.venue.name}
            <br />
            {site.venue.address}
          </p>
        </div>

        <div>
          <p className={styles.label}>Contact</p>
          <p className={styles.muted}>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            {site.contact.instagram && (
              <>
                <br />
                <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </>
            )}
          </p>
        </div>

        <div>
          <p className={styles.label}>Safety</p>
          <p className={styles.muted}>
            <Link to="/code-of-conduct">Code of Conduct</Link>
            {site.reportFormUrl && (
              <>
                <br />
                <a href={site.reportFormUrl} target="_blank" rel="noopener noreferrer">
                  Report a concern
                </a>
              </>
            )}
          </p>
        </div>
      </div>
      <p className={styles.copyright}>
        © {year} {site.name}
      </p>
    </footer>
  );
}
