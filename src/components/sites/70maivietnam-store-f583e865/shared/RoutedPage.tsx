import { CategoryListing } from "./CategoryListing";
import { ProductDetail } from "./ProductDetail";
import { EditorialSupportPage } from "./EditorialSupport";
import { LocalRoutePage } from "./LocalRoutePage";
import { SiteChrome } from "./SiteChrome";

const catalogPaths = new Set([
  "/camera-hanh-trinh/",
  "/phu-kien-camera/",
  "/phu-kien-camera/the-nho-camera-hanh-trinh/",
  "/phu-kien-70mai/",
  "/qua-tang-70mai/",
  "/power-station/",
  "/bom-lop-o-to/",
  "/kich-dien-binh-ac-quy/",
  "/mat-sau-camera-hanh-trinh/",
  "/hardwire-kit-70mai/",
  "/day-nguon-70mai/",
  "/day-camera-sau-70mai/",
  "/de-dan-camera-70mai/",
  "/kinh-loc-cpl/",
]);

const editorialPaths = new Set([
  "/tin-tuc/",
  "/lien-he/",
  "/ho-tro/",
  "/huong-dan-mua-hang/",
  "/huong-dan-lap-dat/",
  "/huong-dan-su-dung/",
  "/huong-dan-bao-hanh/",
  "/gioi-thieu/",
  "/bao-mat-thong-tin/",
  "/giao-hang-van-chuyen/",
  "/bao-hanh-doi-tra/",
  "/thanh-toan/",
  "/camera-hanh-trinh-bi-loi-gps-va-cach-khac-phuc/",
  "/kham-pha-cong-nghe-adas-tren-camera-hanh-trinh-70mai/",
  "/camera-hanh-trinh-o-to-gia-re-loai-nao-tot/",
  "/lap-camera-hanh-trinh-o-to-gia-re-o-dau-thuong-hieu-nao-uy-tin/",
  "/kinh-nghiem-su-dung-camera-hanh-trinh-ban-nen-biet/",
  "/camera-hanh-trinh-o-to-tai-quang-tri/",
]);

export function RoutedPage({ pathname }: { pathname: string }) {
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const segments = normalizedPath.split("/").filter(Boolean);
  let page: React.ReactNode;

  if (editorialPaths.has(normalizedPath)) {
    page = <EditorialSupportPage pathname={normalizedPath} />;
  } else if (catalogPaths.has(normalizedPath)) {
    page = <CategoryListing pathname={normalizedPath} />;
  } else if (normalizedPath === "/gio-hang/" || normalizedPath === "/tra-cuu-bao-hanh/" || normalizedPath === "/tim-kiem/") {
    page = <LocalRoutePage pathname={normalizedPath} />;
  } else if (segments.length > 1) {
    page = <ProductDetail pathname={normalizedPath} />;
  } else {
    page = <LocalRoutePage pathname={normalizedPath} />;
  }

  return <SiteChrome>{page}</SiteChrome>;
}
