import { contactPhones } from "../root-8a5edab2/site-data";
import styles from "./MapContactStrip.module.css";

export function MapContactStrip() {
  return (
    <div aria-label="Điện thoại liên hệ" className={styles.strip}>
      {contactPhones.map((phone) => (
        <a aria-label={`Gọi ${phone.number}`} className={styles.phone} href={phone.tel} key={phone.number}>
          <span>HOTLINE</span>
          <strong>{phone.number}</strong>
        </a>
      ))}
    </div>
  );
}
