import Image from "next/image";
import { contactPhones, media } from "../root-8a5edab2/site-data";
import styles from "./MapContactStrip.module.css";

export function MapContactStrip() {
  return (
    <>
      <div aria-label="Logo 70mai Nha Trang" className={styles.logo}>
        <Image alt="70mai Nha Trang" fill sizes="(max-width: 640px) 24vw, 20vw" src={media.logo} />
      </div>
      <div aria-label="70mai Nha Trang" className={styles.brandBanner}>70mai Nha Trang</div>
      <div className={styles.localCoverage}>
        <strong>NHA TRANG</strong>
        <span>TƯ VẤN &amp; LẮP ĐẶT</span>
      </div>
      <div className={styles.callout}>Liên hệ 70mai Nha Trang để được tư vấn</div>
      <div aria-label="Điện thoại liên hệ" className={styles.strip}>
        {contactPhones.map((phone) => (
          <a aria-label={`Gọi ${phone.number}`} className={styles.phone} href={phone.tel} key={phone.number}>
            <span>HOTLINE</span>
            <strong>{phone.number}</strong>
          </a>
        ))}
      </div>
    </>
  );
}
