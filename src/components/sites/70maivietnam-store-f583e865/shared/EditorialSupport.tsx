import Image from "next/image";
import Link from "next/link";

import { PhoneIcon, PinIcon } from "./icons";
import {
  EDITORIAL_ARTICLES,
  getEditorialArticle,
  getUtilityPage,
  type EditorialSectionData,
} from "./editorial-data";
import { contactPhones, media, storeAddresses, storeAddress } from "../root-8a5edab2/site-data";
import { MapContactStrip } from "./MapContactStrip";
import styles from "./EditorialSupport.module.css";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Đường dẫn" className={styles.breadcrumbs}>
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function EditorialSections({ sections }: { sections: EditorialSectionData[] }) {
  return (
    <div className={styles.articleBody}>
      {sections.map((section) => (
        <section className={styles.articleSection} key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && (
            <ul>
              {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

function ContactCallout() {
  return (
    <aside className={styles.contactCallout}>
      <p>Cần thêm thông tin về sản phẩm hoặc hỗ trợ?</p>
      <Link href="/lien-he/">Liên hệ 70mai Nha Trang</Link>
    </aside>
  );
}

function EditorialListing() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: "Tổng quan", href: "/" }, { label: "Tin tức" }]} />
        <header className={styles.listingHeader}>
          <p className={styles.kicker}>Cập nhật thông tin từ 70mai Nha Trang</p>
          <h1>TIN TỨC MỚI</h1>
        </header>

        <div className={styles.articleGrid}>
          {EDITORIAL_ARTICLES.map((article) => (
            <article className={styles.articleCard} key={article.path}>
              <Link aria-label={article.title} className={styles.cardImage} href={article.path}>
                <Image
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 360px"
                  src={article.image}
                />
              </Link>
              <div className={styles.cardCopy}>
                <h2><Link href={article.path}>{article.title}</Link></h2>
                <p>{article.excerpt}</p>
                <Link className={styles.readMore} href={article.path}>Đọc tiếp <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

function EditorialArticlePage({ slug }: { slug: string }) {
  const article = getEditorialArticle(slug);

  if (!article) {
    return (
      <main className={styles.page}>
        <div className={styles.readableContainer}>
          <Breadcrumbs items={[{ label: "Tổng quan", href: "/" }, { label: "Tin tức", href: "/tin-tuc/" }]} />
          <h1 className={styles.notFoundTitle}>Không tìm thấy bài viết</h1>
          <p>Bài viết này hiện chưa có trong thư viện tin tức.</p>
          <Link className={styles.readMore} href="/tin-tuc/">Quay lại tin tức <span aria-hidden="true">→</span></Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Breadcrumbs items={[
          { label: "Tổng quan", href: "/" },
          { label: "Tin tức", href: "/tin-tuc/" },
          { label: article.title },
        ]} />
        <article className={styles.articleDetail}>
          <header className={styles.articleHeader}>
            <p className={styles.kicker}>Tin tức 70mai Nha Trang</p>
            <h1>{article.title}</h1>
            <p className={styles.articleIntro}>{article.intro}</p>
          </header>
          <div className={styles.leadImage}>
            <Image
              alt={article.title}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 1140px"
              src={article.image}
            />
          </div>
          <EditorialSections sections={article.sections} />
          <ContactCallout />
        </article>
      </div>
    </main>
  );
}

const primaryShowrooms = [
  { region: "Khánh Hòa", address: storeAddress },
];

const mapHref = (address: string): string =>
  `https://maps.google.com/?q=${encodeURIComponent(address)}`;

function ContactPage() {
  return (
    <main className={`${styles.page} ${styles.contactPage}`}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: "Tổng quan", href: "/" }, { label: "Liên hệ" }]} />
        <header className={styles.contactHeader}>
          <p className={styles.kicker}>70mai Nha Trang</p>
          <h1>Liên hệ</h1>
          <p>
            Bất cứ điều gì bạn cần, hãy liên hệ 70mai Nha Trang để được tư vấn và hỗ trợ trong thời gian sớm nhất.
          </p>
        </header>

        <section aria-label="Kênh liên hệ" className={styles.channelGrid}>
          <article className={styles.channelCard}>
            <span className={styles.channelIcon}><PhoneIcon aria-hidden="true" /></span>
            <h2>Điện thoại</h2>
            <div className={styles.hotlineNumbers}>
              {contactPhones.map((phone) => <a href={phone.tel} key={phone.number}>{phone.number}</a>)}
            </div>
          </article>
          <article className={styles.channelCard}>
            <span className={styles.channelIcon}><span aria-hidden="true">@</span></span>
            <h2>Email</h2>
            <a href="mailto:70mainhatrang@gmail.com">70mainhatrang@gmail.com</a>
          </article>
        </section>

        <section aria-labelledby="showrooms-title" className={styles.showroomSection}>
          <header className={styles.sectionHeading}>
            <h2 id="showrooms-title">Hệ thống cửa hàng</h2>
            <p>Liên hệ cửa hàng để xác nhận giờ phục vụ và dịch vụ trước khi ghé thăm.</p>
          </header>
          <div className={styles.showroomGrid}>
            {primaryShowrooms.map((showroom) => (
              <article className={styles.showroomCard} key={showroom.region}>
                <PinIcon aria-hidden="true" />
                <div>
                  <h3>{showroom.region}</h3>
                  <p>{showroom.address}</p>
                  <a href={mapHref(showroom.address)} rel="noreferrer" target="_blank">Xem bản đồ</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="location-map-title" className={styles.locationSection} id="store-map">
          <header className={styles.sectionHeading}>
            <h2 id="location-map-title">Điểm hỗ trợ 70mai Nha Trang</h2>
          </header>
          <div className={styles.mapImage}>
            <Image
              alt="Bản đồ hỗ trợ 70mai Nha Trang"
              fill
              sizes="(max-width: 640px) 100vw, 1140px"
              src={media.map}
            />
            <MapContactStrip />
          </div>
          <ul className={styles.locationList}>
            {storeAddresses.map((address) => (
              <li key={address}>
                <a href={mapHref(address)} rel="noreferrer" target="_blank">{address}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function UtilityArticlePage({ slug }: { slug: string }) {
  const page = getUtilityPage(slug);

  if (!page) {
    return (
      <main className={styles.page}>
        <div className={styles.readableContainer}>
          <Breadcrumbs items={[{ label: "Tổng quan", href: "/" }, { label: "Hỗ trợ" }]} />
          <h1 className={styles.notFoundTitle}>Nội dung đang được cập nhật</h1>
          <p>Liên hệ 70mai Nha Trang để được hướng dẫn trực tiếp.</p>
          <Link className={styles.readMore} href="/lien-he/">Liên hệ hỗ trợ <span aria-hidden="true">→</span></Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.readableContainer}>
        <Breadcrumbs items={[{ label: "Tổng quan", href: "/" }, { label: "Hỗ trợ", href: "/ho-tro/" }, { label: page.title }]} />
        <article className={styles.utilityArticle}>
          <header className={styles.articleHeader}>
            <p className={styles.kicker}>Thông tin hỗ trợ</p>
            <h1>{page.title}</h1>
            <p className={styles.articleIntro}>{page.summary}</p>
          </header>
          <EditorialSections sections={page.sections} />
          <ContactCallout />
        </article>
      </div>
    </main>
  );
}

const normalizeRoute = (pathname: string): string =>
  `/${pathname.trim().replace(/^\/+|\/+$/g, "")}/`;

export function EditorialSupportPage({ pathname }: { pathname: string }) {
  const normalizedPath = normalizeRoute(pathname);

  if (normalizedPath === "/tin-tuc/") return <EditorialListing />;
  if (normalizedPath === "/lien-he/") return <ContactPage />;
  if (getEditorialArticle(normalizedPath)) {
    return <EditorialArticlePage slug={normalizedPath} />;
  }
  if (getUtilityPage(normalizedPath)) {
    return <UtilityArticlePage slug={normalizedPath} />;
  }

  return <UtilityArticlePage slug={normalizedPath} />;
}

