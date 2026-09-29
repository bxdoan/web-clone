"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "../shared/icons";
import { media } from "./site-data";
import styles from "./HeaderHero.module.css";

const announcements = [
  "Cam hành trình Cảnh báo giao thông 70mai A800SE SpeedEye",
  "Ưu đãi lớn khi mua kèm theo gói Combo",
  "Camera Hành Trình Đẳng Cấp Quốc Tế",
];

const navigation = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Camera hành trình",
    href: "/camera-hanh-trinh/",
    children: [
      { label: "Tất cả camera hành trình", href: "/camera-hanh-trinh/" },
      { label: "A800SE SpeedEye", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a800se-speedeye/" },
      { label: "4K T800", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-t800/" },
      { label: "A810 Lite", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a810-lite/" },
      { label: "A810S", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a810s/" },
      { label: "M800", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m800/" },
      { label: "T400", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-t400/" },
      { label: "A410 Neo", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a410-neo/" },
      { label: "A210", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-a210/" },
      { label: "M310 Plus 2K", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m310-plus-2k/" },
      { label: "M310 Plus 3K", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m310-plus-3k/" },
      { label: "M310 Plus 4K", href: "/camera-hanh-trinh/camera-hanh-trinh-70mai-m310-plus-4k/" },
    ],
  },
  {
    label: "Phụ kiện Camera",
    href: "/phu-kien-camera/",
    children: [
      { label: "Tất cả phụ kiện Camera", href: "/phu-kien-camera/" },
      { label: "Thẻ nhớ camera hành trình", href: "/phu-kien-camera/the-nho-camera-hanh-trinh/" },
      { label: "Mắt camera sau", href: "/mat-sau-camera-hanh-trinh/" },
      { label: "Hardwire Kit 70mai", href: "/hardwire-kit-70mai/" },
      { label: "Tẩu sạc 70mai", href: "/phu-kien-camera/tau-sac-70mai/" },
      { label: "Dây nguồn 70mai", href: "/day-nguon-70mai/" },
      { label: "Dây camera sau 70mai", href: "/day-camera-sau-70mai/" },
      { label: "Đế dán camera 70mai", href: "/de-dan-camera-70mai/" },
      { label: "Kính lọc CPL", href: "/kinh-loc-cpl/" },
    ],
  },
  {
    label: "Phụ kiện 70mai",
    href: "/phu-kien-70mai/",
    children: [
      { label: "Tất cả phụ kiện 70mai", href: "/phu-kien-70mai/" },
      { label: "Cảm biến áp suất lốp T05", href: "/phu-kien-70mai/cam-bien-ap-suat-lop-70mai-t05/" },
      { label: "Bơm lốp ô tô", href: "/bom-lop-o-to/" },
      { label: "Kích điện bình ắc quy", href: "/kich-dien-binh-ac-quy/" },
      { label: "Bộ tích điện cho camera", href: "/phu-kien-70mai/bo-tich-dien-70mai-cho-camera-hanh-trinh/" },
      { label: "Gối tựa đầu và tựa lưng", href: "/phu-kien-70mai/bo-goi-tua-dau-va-tua-lung-70mai-cho-o-to/" },
      { label: "Trạm phát điện Tera 1000", href: "/phu-kien-70mai/tram-phat-dien-di-dong-tera-1000/" },
      { label: "Máy hút bụi PV03 và PV04", href: "/phu-kien-70mai/may-hut-bui-cam-tay-70mai-pv03-va-pv04/" },
    ],
  },
  { label: "Tin tức", href: "/tin-tuc/" },
  {
    label: "Hỗ trợ",
    href: "/lien-he/",
    children: [{ label: "Liên hệ", href: "/lien-he/" }],
  },
];

const slides = [
  {
    desktop: media.desktopHeroOne,
    mobile: media.mobileHeroOne,
    alt: "Đại sứ thương hiệu Hoàng Đức cùng camera hành trình 70mai",
  },
  {
    desktop: media.desktopHeroTwo,
    mobile: media.mobileHeroTwo,
    alt: "Khám phá các dòng camera hành trình 70mai",
  },
];

export function HeaderHero({ showHero = true }: { showHero?: boolean }) {
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [warrantyOpen, setWarrantyOpen] = useState(false);
  const [warrantySubmitted, setWarrantySubmitted] = useState(false);
  const menuDialogRef = useRef<HTMLDialogElement>(null);
  const warrantyDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAnnouncementIndex((index) => (index + 1) % announcements.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const dialog = menuDialogRef.current;
    if (!dialog) return;

    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
  }, [menuOpen]);

  useEffect(() => {
    const dialog = warrantyDialogRef.current;
    if (!dialog) return;

    if (warrantyOpen && !dialog.open) dialog.showModal();
    if (!warrantyOpen && dialog.open) dialog.close();
  }, [warrantyOpen]);

  const showPreviousSlide = () => {
    setSlideIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setSlideIndex((index) => (index + 1) % slides.length);
  };

  return (
    <>
      <div className={styles.announcement} aria-live="polite" aria-atomic="true">
        <span key={announcementIndex} className={styles.announcementText}>
          {announcements[announcementIndex]}
        </span>
      </div>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.mobileTools}>
            <button
              className={styles.iconButton}
              type="button"
              aria-label="Mở menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>

          <Link className={styles.logoLink} href="/" aria-label="70mai Việt Nam - Trang chủ">
            <Image src={media.logo} alt="70mai Việt Nam" width={2085} height={807} priority />
          </Link>

          <nav className={styles.desktopNavigation} aria-label="Điều hướng chính">
            {navigation.map((item) => (
              <div className={styles.desktopNavItem} key={item.label}>
                <a href={item.href} aria-haspopup={item.children ? true : undefined}>
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDownIcon aria-hidden="true" className={styles.chevron} width={12} height={12} />
                  )}
                </a>
                {item.children && (
                  <div className={styles.megaMenu}>
                    <div className={styles.megaMenuInner}>
                      {item.children.map((child) => (
                        <a href={child.href} key={child.href}>{child.label}</a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className={styles.warrantyButton} type="button" onClick={() => setWarrantyOpen(true)}>
              Tra cứu bảo hành
            </button>
          </nav>

          <div className={styles.headerActions}>
            <button
              className={styles.iconButton}
              type="button"
              aria-label={searchOpen ? "Đóng tìm kiếm" : "Mở tìm kiếm"}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              {searchOpen ? <CloseIcon /> : <SearchIcon />}
            </button>
            <Link className={styles.iconButton} href="/gio-hang/" aria-label="Giỏ hàng">
              <CartIcon />
            </Link>
          </div>
        </div>

        {searchOpen && (
          <form className={styles.searchPanel} action="/" method="get">
            <label className={styles.searchLabel} htmlFor="site-search">
              Tìm kiếm sản phẩm
            </label>
            <input id="site-search" name="s" type="search" placeholder="Bạn đang tìm gì?" autoFocus />
            <button type="submit" aria-label="Tìm kiếm">
              <SearchIcon />
            </button>
          </form>
        )}
      </header>

      <dialog
        className={styles.warrantyDialog}
        ref={warrantyDialogRef}
        onCancel={() => setWarrantyOpen(false)}
        onClose={() => setWarrantyOpen(false)}
        aria-label="Tra cứu bảo hành trực tuyến"
      >
        <button className={styles.warrantyScrim} type="button" aria-label="Đóng tra cứu bảo hành" onClick={() => setWarrantyOpen(false)} />
        <div className={styles.warrantyPanel}>
          <button className={styles.warrantyClose} type="button" aria-label="Đóng" onClick={() => setWarrantyOpen(false)}>
            <CloseIcon />
          </button>
          <h2>TRA CỨU BẢO HÀNH TRỰC TUYẾN</h2>
          <p>Nhập mã serial trên sản phẩm đã mua</p>
          <form onSubmit={(event) => { event.preventDefault(); setWarrantySubmitted(true); }}>
            <input aria-label="Mã serial sản phẩm" placeholder="Nhập mã serial trên sản phẩm đã mua" required />
            <button className={styles.warrantyButton} type="submit">TRA CỨU BẢO HÀNH</button>
          </form>
          {warrantySubmitted && <p className={styles.warrantyNotice}>Bản sao này chưa kết nối dữ liệu bảo hành.</p>}
        </div>
      </dialog>

      {menuOpen && (
        <dialog
          ref={menuDialogRef}
          className={styles.mobileDialog}
          aria-label="Menu điều hướng"
          onCancel={() => setMenuOpen(false)}
          onClose={() => setMenuOpen(false)}
        >
          <button className={styles.dialogScrim} type="button" aria-label="Đóng menu" tabIndex={-1} onClick={() => setMenuOpen(false)} />
          <div className={styles.dialogPanel}>
            <div className={styles.dialogHeader}>
              <Link href="/" aria-label="70mai Việt Nam - Trang chủ">
                <Image src={media.logo} alt="70mai Việt Nam" width={2085} height={807} />
              </Link>
              <button className={styles.iconButton} type="button" aria-label="Đóng menu" onClick={() => setMenuOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <nav className={styles.mobileNavigation} aria-label="Điều hướng di động">
              {navigation.map((item) => (
                item.children ? (
                  <details className={styles.mobileNavGroup} key={item.label}>
                    <summary>{item.label}</summary>
                    <div className={styles.mobileSubmenu}>
                      <a href={item.href} onClick={() => setMenuOpen(false)}>Xem tất cả</a>
                      {item.children.filter((child) => child.href !== item.href).map((child) => (
                        <a href={child.href} key={child.href} onClick={() => setMenuOpen(false)}>{child.label}</a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                )
              ))}
              <button className={styles.warrantyButton} type="button" onClick={() => { setMenuOpen(false); setWarrantyOpen(true); }}>
                Tra cứu bảo hành
              </button>
            </nav>
          </div>
        </dialog>
      )}

      {showHero && <section className={styles.hero} aria-label="Sản phẩm nổi bật 70mai">
        <div className={styles.heroImageFrame}>
          <picture className={styles.heroPicture}>
            <source media="(max-width: 960px)" srcSet={slides[slideIndex].mobile} />
            <Image
              className={styles.heroImage}
              src={slides[slideIndex].desktop}
              alt={slides[slideIndex].alt}
              width={1920}
              height={880}
              sizes="100vw"
              preload={slideIndex === 0}
            />
          </picture>
        </div>

        <button className={`${styles.heroArrow} ${styles.heroArrowLeft}`} type="button" onClick={showPreviousSlide} aria-label="Slide trước">
          <ArrowLeftIcon />
        </button>
        <button className={`${styles.heroArrow} ${styles.heroArrowRight}`} type="button" onClick={showNextSlide} aria-label="Slide tiếp theo">
          <ArrowRightIcon />
        </button>
        <div className={styles.heroDots} role="group" aria-label="Chọn slide">
          {slides.map((slide, index) => (
            <button
              key={slide.desktop}
              className={`${styles.heroDot} ${index === slideIndex ? styles.heroDotActive : ""}`}
              type="button"
              onClick={() => setSlideIndex(index)}
              aria-label={`Chuyển đến slide ${index + 1}`}
              aria-current={index === slideIndex ? "true" : undefined}
            />
          ))}
        </div>
      </section>}
    </>
  );
}
