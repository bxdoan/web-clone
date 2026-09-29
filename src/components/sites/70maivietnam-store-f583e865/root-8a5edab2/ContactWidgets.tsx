import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, PinIcon } from "../shared/icons";
import { contactPhones, media } from "./site-data";
import styles from "./ContactWidgets.module.css";

const socialContacts = [
  { label: `Zalo ${contactPhones[0].number}`, image: media.zalo, href: contactPhones[0].zalo },
  { label: `Zalo ${contactPhones[1].number}`, image: media.zalo, href: contactPhones[1].zalo },
  { label: "Messager", image: media.messenger, href: "https://m.me/70maivietnam" },
  { label: "Tìm đường", image: media.mapIcon, href: "/lien-he/#store-map" },
];

const mobileContacts = [
  ...socialContacts.slice(0, 2),
  { label: "Gọi điện", image: "", href: contactPhones[0].tel },
  socialContacts[2],
  socialContacts[3],
];

export function ContactWidgets() {
  return (
    <aside className={styles.contacts} aria-label="Liên hệ 70mai Việt Nam">
      <nav className={styles.desktopRail} aria-label="Liên hệ nhanh">
        {socialContacts.map((contact) => (
          <a className={styles.railItem} href={contact.href} key={contact.label}>
            <Image alt="" height={34} src={contact.image} width={34} />
            <span>{contact.label}</span>
          </a>
        ))}
      </nav>

      <a className={styles.dealer} href={contactPhones[0].tel}>
        <span>BÁO GIÁ</span>
        <span>ĐẠI LÝ</span>
      </a>

      <nav className={styles.mobileBar} aria-label="Liên hệ nhanh">
        {mobileContacts.map((contact) => (
          <a className={styles.mobileItem} href={contact.href} key={contact.label}>
            {contact.label === "Gọi điện" ? (
              <span className={styles.phoneCircle}>
                <PhoneIcon aria-hidden="true" />
              </span>
            ) : (
              <Image alt="" height={32} src={contact.image} width={32} />
            )}
            <span>{contact.label}</span>
          </a>
        ))}
      </nav>

      <div className={styles.desktopPhones}>
        {contactPhones.map((contact) => (
          <a href={contact.tel} key={contact.number}>{contact.number}</a>
        ))}
      </div>
      <Link className={styles.mapLink} href="/lien-he/#store-map" aria-label="Tìm đường đến cửa hàng">
        <PinIcon aria-hidden="true" />
      </Link>
    </aside>
  );
}
