import { footerColumns, socialLinks } from "./site-data";
import { localizeSiteHref } from "../shared/site-links";
import styles from "./FooterSection.module.css";

export function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {footerColumns.map((column) => (
            <section className={styles.column} key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={localizeSiteHref(link.href)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className={`${styles.column} ${styles.socialColumn}`} aria-label="Mạng xã hội">
            <ul>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className={styles.copyright}>© 2023 70mai Việt Nam Offical Store</div>
      </div>
    </footer>
  );
}
