import Link from "next/link";
import styles from "./LocalRoutePage.module.css";

const labels: Record<string, string> = {
  "gio-hang": "Giỏ hàng",
  "tra-cuu-bao-hanh": "Tra cứu bảo hành",
  "tim-kiem": "Tìm kiếm",
  "qua-tang-70mai": "Quà tặng 70mai",
  "power-station": "Power Station",
  "bom-lop-o-to": "Bơm lốp ô tô",
  "kich-dien-binh-ac-quy": "Kích điện bình ắc quy",
  "mat-sau-camera-hanh-trinh": "Mắt camera sau",
  "hardwire-kit-70mai": "Hardwire Kit 70mai",
  "day-nguon-70mai": "Dây nguồn 70mai",
  "day-camera-sau-70mai": "Dây camera sau 70mai",
  "de-dan-camera-70mai": "Đế dán camera 70mai",
  "kinh-loc-cpl": "Kính lọc CPL",
};

function titleFromSlug(slug: string): string {
  return labels[slug] ?? slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function LocalRoutePage({ pathname }: { pathname: string }) {
  const segments = pathname.split("/").filter(Boolean);
  const title = titleFromSlug(segments.at(-1) ?? "");
  const isCart = pathname.replace(/\/$/, "") === "/gio-hang";

  return (
    <main className={styles.page}>
      <div className={styles.breadcrumb}><Link href="/">Tổng quan</Link><span>/</span><span>{title}</span></div>
      <section className={styles.content}>
        <p className={styles.eyebrow}>70MAI VIỆT NAM</p>
        <h1>{title}</h1>
        {isCart ? (
          <>
            <p>Giỏ hàng của bạn đang trống.</p>
            <Link className={styles.action} href="/camera-hanh-trinh/">Tiếp tục mua sắm</Link>
          </>
        ) : (
          <>
            <p>Trang này đang được dựng trong bản sao website 70mai Việt Nam.</p>
            <p>Các liên kết và thao tác trên trang này vẫn ở trong bản clone.</p>
            <div className={styles.links}>
              <Link href="/camera-hanh-trinh/">Camera hành trình</Link>
              <Link href="/phu-kien-camera/">Phụ kiện Camera</Link>
              <Link href="/phu-kien-70mai/">Phụ kiện 70mai</Link>
              <Link href="/tin-tuc/">Tin tức</Link>
              <Link href="/lien-he/">Liên hệ</Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
