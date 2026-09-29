import Image from "next/image";
import { media, storeAddresses } from "./site-data";
import { MapContactStrip } from "../shared/MapContactStrip";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="about-title">Tại Sao Chọn 70mai Việt Nam?</h2>
          <p>
            70mai Việt Nam – Đại diện phân phối camera hành trình ô tô 70mai chính thức tại thị trường Việt Nam
          </p>
        </header>

        <div className={styles.teamImage}>
          <Image
            alt="Đội ngũ nhân sự 70mai Việt Nam"
            fill
            sizes="(max-width: 640px) 100vw, 1100px"
            src={media.team}
          />
        </div>

        <div className={styles.affiliateImage}>
          <Image
            alt="70mai Việt Nam - Affiliate 2025"
            fill
            sizes="(max-width: 640px) 100vw, 1140px"
            src={media.affiliate}
          />
        </div>

        <div className={styles.locations} id="store-map">
          <div className={styles.mapImage}>
            <Image
              alt="Hệ thống đại lý 70mai Việt Nam"
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
