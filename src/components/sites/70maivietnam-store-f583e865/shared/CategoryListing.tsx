"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

import { AboutSection } from "../root-8a5edab2/AboutSection";
import { accessoryCategories, memoryCards } from "../root-8a5edab2/site-data";
import { categoryListings, type CategoryListingData, type CategoryProductData } from "./category-data";
import styles from "./CategoryListing.module.css";

type SortOption = "featured" | "newest" | "best-selling" | "price-low" | "price-high" | "promotion";
type Panel = "brand" | "display" | "price" | null;
type PageSize = 8 | 16 | 24;

const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: "featured", label: "Nổi bật" },
  { value: "newest", label: "Mới nhất" },
  { value: "best-selling", label: "Bán chạy nhất" },
  { value: "price-low", label: "Giá thấp" },
  { value: "price-high", label: "Giá cao" },
  { value: "promotion", label: "Khuyến mại" },
];

const memoryListing: CategoryListingData = {
  id: "the-nho-camera-hanh-trinh",
  path: "/phu-kien-camera/the-nho-camera-hanh-trinh/",
  heading: "THẺ NHỚ CAMERA HÀNH TRÌNH",
  breadcrumb: "Thẻ nhớ Camera hành trình",
  totalCount: memoryCards.length,
  description:
    "Chọn thẻ nhớ Lexar tương thích với camera hành trình 70mai để lưu lại video ổn định trong mỗi chuyến đi.",
  products: memoryCards.map((product) => ({
    ...product,
    href: new URL(product.href).pathname,
  })),
};

const giftProducts = accessoryCategories.find((category) => category.id === "other")?.products ?? [];
const giftListing: CategoryListingData = {
  id: "qua-tang-70mai",
  path: "/qua-tang-70mai/",
  heading: "QUÀ TẶNG 70MAI",
  breadcrumb: "Quà tặng 70mai",
  totalCount: giftProducts.length,
  description: "Các món quà tiện ích mang phong cách 70mai dành cho bạn và gia đình.",
  products: giftProducts,
};

const cameraAccessoryListing = categoryListings["phu-kien-camera"];
const dashcamAccessoryListing = categoryListings["phu-kien-70mai"];

function makeSubsetListing(
  id: string,
  path: string,
  heading: string,
  breadcrumb: string,
  description: string,
  products: CategoryProductData[],
): CategoryListingData {
  return { id, path, heading, breadcrumb, description, products, totalCount: products.length };
}

const rearCameraProducts = cameraAccessoryListing.products.filter((product) =>
  product.title.toLowerCase().startsWith("mắt camera sau"),
);
const hardwireProducts = cameraAccessoryListing.products.filter((product) =>
  product.title.toLowerCase().includes("hardwire kit"),
);
const powerStationProducts = dashcamAccessoryListing.products.filter((product) =>
  /tera|trạm phát điện|máy phát điện/i.test(product.title),
);
const cameraAccessoryProducts = cameraAccessoryListing.products;
const cameraPowerCables = cameraAccessoryProducts.filter((product) =>
  /cáp nguồn|dây nguồn/i.test(product.title),
);
const cplFilters = cameraAccessoryProducts.filter((product) => /cpl/i.test(product.title));
const cameraAdhesives = cameraAccessoryProducts.filter((product) => /miếng dán|đế dán/i.test(product.title));
const utilityProducts70mai = accessoryCategories.find((category) => category.id === "ext")?.products ?? [];
const tireInflators = utilityProducts70mai.filter((product) => /bơm lốp/i.test(product.title));
const batteryBoosters = utilityProducts70mai.filter((product) => /kích bình|kích điện/i.test(product.title));

const additionalListings: Record<string, CategoryListingData> = {
  [memoryListing.path]: memoryListing,
  [giftListing.path]: giftListing,
  "/mat-sau-camera-hanh-trinh/": makeSubsetListing(
    "mat-sau-camera-hanh-trinh",
    "/mat-sau-camera-hanh-trinh/",
    "MẮT CAMERA SAU",
    "Mắt camera sau",
    "Camera sau chính hãng dành cho các dòng camera hành trình 70mai tương thích.",
    rearCameraProducts,
  ),
  "/hardwire-kit-70mai/": makeSubsetListing(
    "hardwire-kit-70mai",
    "/hardwire-kit-70mai/",
    "HARDWIRE KIT 70MAI",
    "Hardwire Kit 70mai",
    "Bộ nguồn Hardwire Kit hỗ trợ camera hành trình hoạt động khi xe tắt máy.",
    hardwireProducts,
  ),
  "/power-station/": makeSubsetListing(
    "power-station",
    "/power-station/",
    "TRẠM PHÁT ĐIỆN 70MAI",
    "Power Station",
    "Trạm phát điện di động Tera 1000 dành cho những chuyến đi xa và hoạt động ngoài trời.",
    powerStationProducts,
  ),
  "/bom-lop-o-to/": makeSubsetListing(
    "bom-lop-o-to",
    "/bom-lop-o-to/",
    "BƠM LỐP Ô TÔ 70MAI",
    "Bơm lốp ô tô",
    "Bơm lốp ô tô 70mai gọn nhẹ, sẵn sàng hỗ trợ bạn trên mọi hành trình.",
    tireInflators,
  ),
  "/kich-dien-binh-ac-quy/": makeSubsetListing(
    "kich-dien-binh-ac-quy",
    "/kich-dien-binh-ac-quy/",
    "KÍCH ĐIỆN BÌNH ẮC QUY",
    "Kích điện bình ắc quy",
    "Thiết bị kích bình ắc quy 70mai hỗ trợ khởi động xe khi cần thiết.",
    batteryBoosters,
  ),
  "/day-nguon-70mai/": makeSubsetListing(
    "day-nguon-70mai",
    "/day-nguon-70mai/",
    "DÂY NGUỒN CAMERA 70MAI",
    "Dây nguồn 70mai",
    "Dây nguồn thay thế tương thích với các dòng camera hành trình 70mai.",
    cameraPowerCables,
  ),
  "/day-camera-sau-70mai/": makeSubsetListing(
    "day-camera-sau-70mai",
    "/day-camera-sau-70mai/",
    "MẮT CAMERA SAU 70MAI",
    "Dây camera sau 70mai",
    "Camera sau và phụ kiện kết nối dành cho các dòng camera hành trình 70mai.",
    rearCameraProducts,
  ),
  "/de-dan-camera-70mai/": makeSubsetListing(
    "de-dan-camera-70mai",
    "/de-dan-camera-70mai/",
    "ĐẾ DÁN CAMERA 70MAI",
    "Đế dán camera 70mai",
    "Miếng dán và phụ kiện cố định camera hành trình 70mai.",
    cameraAdhesives,
  ),
  "/kinh-loc-cpl/": makeSubsetListing(
    "kinh-loc-cpl",
    "/kinh-loc-cpl/",
    "KÍNH LỌC CPL 70MAI",
    "Kính lọc CPL",
    "Bộ lọc CPL tương thích giúp giảm phản chiếu trên kính lái.",
    cplFilters,
  ),
};

function normalizePath(pathname: string): string {
  const pathOnly = pathname.split(/[?#]/, 1)[0] || "/";
  return pathOnly.endsWith("/") ? pathOnly : `${pathOnly}/`;
}

function resolveListing(pathname: string): CategoryListingData {
  const normalizedPath = normalizePath(pathname);
  const primary = Object.values(categoryListings).find((category) => category.path === normalizedPath);
  if (primary) return primary;

  const additional = additionalListings[normalizedPath];
  if (additional) return additional;

  if (normalizedPath.startsWith("/phu-kien-camera/")) return cameraAccessoryListing;
  if (normalizedPath.startsWith("/phu-kien-70mai/")) return dashcamAccessoryListing;
  if (normalizedPath.startsWith("/camera-hanh-trinh/")) return categoryListings["camera-hanh-trinh"];
  return categoryListings["camera-hanh-trinh"];
}

function priceValue(price: string): number | null {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}

function productBrand(title: string): string {
  if (/\blexar\b/i.test(title)) return "Lexar";
  if (/\btera\b|trạm phát điện/i.test(title)) return "Tera";
  return "70mai";
}

function readPageFromUrl(): number {
  const page = Number(new URLSearchParams(window.location.search).get("page"));
  return Number.isInteger(page) && page > 0 ? page : 1;
}

const pageChangeEvent = "70mai-category-pagechange";

function subscribeToPageChanges(onChange: () => void): () => void {
  window.addEventListener("popstate", onChange);
  window.addEventListener(pageChangeEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(pageChangeEvent, onChange);
  };
}

function getServerPageSnapshot(): number {
  return 1;
}

function useCurrentPage(): number {
  return useSyncExternalStore(subscribeToPageChanges, readPageFromUrl, getServerPageSnapshot);
}

function setPageInUrl(pathname: string, page: number): void {
  const url = new URL(window.location.href);
  url.pathname = pathname;
  if (page === 1) url.searchParams.delete("page");
  else url.searchParams.set("page", String(page));
  window.history.pushState({ page }, "", `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new Event(pageChangeEvent));
}

export function CategoryListing({ pathname }: { pathname: string }) {
  const category = resolveListing(pathname);
  return <CategoryListingContent category={category} key={category.path} />;
}

function CategoryListingContent({ category }: { category: CategoryListingData }) {
  const [panel, setPanel] = useState<Panel>(null);
  const [sort, setSort] = useState<SortOption>("featured");
  const [pageSize, setPageSize] = useState<PageSize>(8);
  const currentPage = useCurrentPage();
  const [brand, setBrand] = useState("all");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [appliedMinimum, setAppliedMinimum] = useState<number | null>(null);
  const [appliedMaximum, setAppliedMaximum] = useState<number | null>(null);

  const availableBrands = useMemo(
    () => [...new Set(category.products.map((product) => productBrand(product.title)))].sort(),
    [category.products],
  );

  const filteredProducts = useMemo(() => {
    const filtered = category.products.filter((product) => {
      if (brand !== "all" && productBrand(product.title) !== brand) return false;
      const value = priceValue(product.price);
      if (appliedMinimum !== null && (value === null || value < appliedMinimum)) return false;
      if (appliedMaximum !== null && (value === null || value > appliedMaximum)) return false;
      return true;
    });

    switch (sort) {
      case "newest":
        return filtered.reverse();
      case "price-low":
        return filtered.sort((left, right) => (priceValue(left.price) ?? Infinity) - (priceValue(right.price) ?? Infinity));
      case "price-high":
        return filtered.sort((left, right) => (priceValue(right.price) ?? -Infinity) - (priceValue(left.price) ?? -Infinity));
      case "promotion":
        return filtered.sort((left, right) => {
          const leftPrice = priceValue(left.price);
          const rightPrice = priceValue(right.price);
          return (leftPrice ?? Infinity) - (rightPrice ?? Infinity);
        });
      case "featured":
      case "best-selling":
      default:
        return filtered;
    }
  }, [appliedMaximum, appliedMinimum, brand, category.products, sort]);

  const hasActiveFilter = brand !== "all" || appliedMinimum !== null || appliedMaximum !== null;
  const resultCount = hasActiveFilter ? filteredProducts.length : Math.max(category.totalCount, category.products.length);
  const pageCount = Math.max(1, Math.ceil(Math.max(resultCount, filteredProducts.length) / pageSize));
  const safePage = Math.min(currentPage, pageCount);
  const visibleProducts = filteredProducts.slice((safePage - 1) * pageSize, safePage * pageSize);
  const panelBaseId = `listing-${category.id}`;

  useEffect(() => {
    if (currentPage > pageCount) {
      setPageInUrl(category.path, pageCount);
    }
  }, [category.path, currentPage, pageCount]);

  const changePage = (page: number) => {
    const nextPage = Math.min(pageCount, Math.max(1, page));
    setPageInUrl(category.path, nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const applyPriceFilter = () => {
    setAppliedMinimum(minimum ? Number(minimum) : null);
    setAppliedMaximum(maximum ? Number(maximum) : null);
    setPageInUrl(category.path, 1);
    setPanel(null);
  };

  const chooseBrand = (nextBrand: string) => {
    setBrand(nextBrand);
    setPageInUrl(category.path, 1);
    setPanel(null);
  };

  const choosePageSize = (nextPageSize: PageSize) => {
    setPageSize(nextPageSize);
    setPageInUrl(category.path, 1);
    setPanel(null);
  };

  return (
    <main>
      <div className={styles.listingContainer}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol>
              <li>
                <Link href="/">Tổng quan</Link>
              </li>
              <li aria-current="page">{category.breadcrumb}</li>
            </ol>
          </nav>

          <div aria-label="Tùy chọn sản phẩm" className={styles.toolbar} role="group">
            <div className={styles.filterControls}>
              <div className={styles.popoverAnchor}>
                <button
                  aria-controls={`${panelBaseId}-brand`}
                  aria-expanded={panel === "brand"}
                  className={styles.toolButton}
                  onClick={() => setPanel((current) => (current === "brand" ? null : "brand"))}
                  type="button"
                >
                  Bộ lọc
                </button>
                {panel === "brand" && (
                  <div aria-label="Lọc theo thương hiệu" className={styles.popover} id={`${panelBaseId}-brand`}>
                    <p className={styles.popoverTitle}>Thương hiệu</p>
                    <div className={styles.optionList}>
                      <button
                        aria-pressed={brand === "all"}
                        className={styles.optionButton}
                        onClick={() => chooseBrand("all")}
                        type="button"
                      >
                        Tất cả thương hiệu
                      </button>
                      {availableBrands.map((option) => (
                        <button
                          aria-pressed={brand === option}
                          className={styles.optionButton}
                          key={option}
                          onClick={() => chooseBrand(option)}
                          type="button"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.popoverAnchor}>
                <button
                  aria-controls={`${panelBaseId}-display`}
                  aria-expanded={panel === "display"}
                  className={styles.toolButton}
                  onClick={() => setPanel((current) => (current === "display" ? null : "display"))}
                  type="button"
                >
                  Hiển thị
                </button>
                {panel === "display" && (
                  <div aria-label="Số sản phẩm hiển thị" className={styles.popover} id={`${panelBaseId}-display`}>
                    <p className={styles.popoverTitle}>Số sản phẩm mỗi trang</p>
                    <div className={styles.optionList}>
                      {([8, 16, 24] as const).map((option) => (
                        <button
                          aria-pressed={pageSize === option}
                          className={styles.optionButton}
                          key={option}
                          onClick={() => choosePageSize(option)}
                          type="button"
                        >
                          {option} sản phẩm
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.popoverAnchor}>
                <button
                  aria-controls={`${panelBaseId}-price`}
                  aria-expanded={panel === "price"}
                  className={styles.toolButton}
                  onClick={() => setPanel((current) => (current === "price" ? null : "price"))}
                  type="button"
                >
                  Lọc theo giá
                </button>
                {panel === "price" && (
                  <form
                    aria-label="Lọc theo khoảng giá"
                    className={`${styles.popover} ${styles.pricePopover}`}
                    id={`${panelBaseId}-price`}
                    onSubmit={(event) => {
                      event.preventDefault();
                      applyPriceFilter();
                    }}
                  >
                    <p className={styles.popoverTitle}>Khoảng giá (₫)</p>
                    <div className={styles.priceInputs}>
                      <label>
                        Từ
                        <input
                          min="0"
                          onChange={(event) => setMinimum(event.target.value)}
                          type="number"
                          value={minimum}
                        />
                      </label>
                      <label>
                        Đến
                        <input
                          min="0"
                          onChange={(event) => setMaximum(event.target.value)}
                          type="number"
                          value={maximum}
                        />
                      </label>
                    </div>
                    <button className={styles.applyButton} type="submit">
                      Áp dụng
                    </button>
                    <button
                      className={styles.clearButton}
                      onClick={() => {
                        setMinimum("");
                        setMaximum("");
                        setAppliedMinimum(null);
                        setAppliedMaximum(null);
                        setPageInUrl(category.path, 1);
                        setPanel(null);
                      }}
                      type="button"
                    >
                      Xóa lọc giá
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className={styles.sortAndCount}>
              <label className={styles.sortLabel}>
                <span className={styles.visuallyHidden}>Sắp xếp sản phẩm</span>
                <select
                  onChange={(event) => setSort(event.target.value as SortOption)}
                  value={sort}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <span aria-live="polite" className={styles.productCount}>
                {resultCount} sản phẩm
              </span>
            </div>
          </div>

          <h1 className={styles.categoryHeading}>{category.heading}</h1>

          <div aria-live="polite" className={styles.productGrid}>
            {visibleProducts.map((product, index) => (
              <article className={styles.productCard} key={`${product.href}-${index}`}>
                <Link className={styles.productLink} href={product.href}>
                  <span className={styles.imageFrame}>
                    <Image
                      alt={product.title}
                      className={styles.productImage}
                      fill
                      loading={index < 4 ? "eager" : "lazy"}
                      sizes="(max-width: 560px) 255px, (max-width: 768px) 42vw, 255px"
                      src={product.image}
                    />
                  </span>
                  <span className={styles.productTitle}>{product.title}</span>
                </Link>
                <p className={styles.productPrice}>
                  {product.regularPrice && <del>{product.regularPrice}</del>}
                  <span>{product.price}</span>
                </p>
              </article>
            ))}
          </div>

          {pageCount > 1 && (
            <nav aria-label="Phân trang sản phẩm" className={styles.pagination}>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                <button
                  aria-current={safePage === page ? "page" : undefined}
                  className={`${styles.pageButton} ${safePage === page ? styles.activePage : ""}`}
                  key={page}
                  onClick={() => changePage(page)}
                  type="button"
                >
                  {page}
                </button>
              ))}
            </nav>
          )}

          {visibleProducts.length === 0 && (
            <p className={styles.emptyState}>Không tìm thấy sản phẩm trong khoảng lọc này.</p>
          )}

          <section aria-label="Thông tin danh mục" className={styles.seoDescription}>
            <p>{category.description}</p>
          </section>
      </div>
      <AboutSection />
    </main>
  );
}
