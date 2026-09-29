import Image from "next/image";
import { contactPhones, media, storeAddresses } from "./site-data";
import { MapContactStrip } from "../shared/MapContactStrip";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="about-title">Tại Sao Chọn 70mai Nha Trang?</h2>
          <p>
            70mai Nha Trang – Tư vấn, phân phối và hỗ trợ camera hành trình 70mai tại Nha Trang
          </p>
        </header>

        <div className={styles.teamImage}>
          <Image
            alt="Đội ngũ nhân sự 70mai Nha Trang"
            fill
            sizes="(max-width: 640px) 100vw, 1100px"
            src={media.team}
          />
        </div>

        <div className={styles.affiliateImage}>
          <Image
            alt="70mai Nha Trang - Affiliate 2025"
            fill
            sizes="(max-width: 640px) 100vw, 1140px"
            src={media.affiliate}
          />
          <div className={styles.affiliateLogo}>
            <Image alt="70mai Nha Trang" fill sizes="16vw" src={media.logo} />
          </div>
          <div aria-label="Điện thoại liên hệ" className={styles.affiliateContacts}>
            {contactPhones.map((phone) => (
              <a href={phone.tel} key={phone.number}>{phone.number}</a>
            ))}
          </div>
        </div>

        <div className={styles.locations} id="store-map">
          <div className={styles.mapImage}>
            <Image
              alt="Điểm hỗ trợ 70mai Nha Trang"
              fill
              sizes="(max-width: 640px) 100vw, 1140px"
              src={media.map}
            />
            <MapContactStrip />
          </div>
          <div className={styles.addresses}>
            {storeAddresses.map((address) => (
              <p key={address}>{address}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
