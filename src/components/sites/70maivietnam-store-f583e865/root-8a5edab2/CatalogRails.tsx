"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { localizeSiteHref } from "../shared/site-links";
import { cameraRailOne, cameraRailTwo, memoryCards } from "./site-data";
import type { ProductCardData } from "./types";
import styles from "./CatalogRails.module.css";

type SliderStyle = CSSProperties & {
  "--track-width": string;
  "--slide-width": string;
  "--track-offset": string;
};

interface ProductRailProps {
  ariaLabel: string;
  className?: string;
  products: ProductCardData[];
  variant: "camera" | "memory";
  height: "first" | "second" | "memory";
}

function ProductRail({
  ariaLabel,
  className,
  products,
  variant,
  height,
}: ProductRailProps) {
  const railId = useId();
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = Math.max(0, products.length - visibleCount);
  const currentIndex = Math.min(activeIndex, lastIndex);
  const style: SliderStyle = {
    "--track-width": `${(products.length * 100) / visibleCount}%`,
    "--slide-width": `${100 / products.length}%`,
    "--track-offset": `${(-currentIndex * 100) / products.length}%`,
  };

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 460px)");
    const mediumScreen = window.matchMedia("(max-width: 900px)");
    const updateVisibleCount = () => {
      setVisibleCount(smallScreen.matches ? 1 : mediumScreen.matches ? 2 : 3);
    };

    updateVisibleCount();
    smallScreen.addEventListener("change", updateVisibleCount);
    mediumScreen.addEventListener("change", updateVisibleCount);
    return () => {
      smallScreen.removeEventListener("change", updateVisibleCount);
      mediumScreen.removeEventListener("change", updateVisibleCount);
    };
  }, []);

  const itemLabel = variant === "memory" ? "thẻ nhớ" : "sản phẩm";

  return (
    <section
      aria-label={ariaLabel}
      className={`${styles.rail} ${styles[height]} ${styles[variant]} ${className ?? ""}`}
    >
      <div className={styles.viewport}>
        <div
          aria-label={ariaLabel}
          aria-roledescription="băng chuyền"
          className={styles.track}
          id={`${railId}-track`}
          role="group"
          style={style}
        >
          {products.map((product, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + visibleCount;
            return (
              <div
                aria-hidden={!isVisible}
                aria-label={`${index + 1} trên ${products.length}`}
                className={styles.slide}
                inert={!isVisible}
                key={product.href}
                role="group"
              >
                <a
                  aria-label={`${product.title}, ${product.price}`}
                  className={styles.card}
                  href={localizeSiteHref(product.href)}
                  tabIndex={isVisible ? 0 : -1}
                >
                  <span className={styles.imageFrame}>
                    <Image
                      alt={product.title}
                      className={styles.productImage}
                      fill
                      sizes={variant === "memory" ? "(max-width: 460px) 92vw, 36vw" : "(max-width: 460px) 92vw, 250px"}
                      src={product.image}
                    />
                  </span>
                  <span className={styles.cardCopy}>
                    <span className={styles.productTitle}>{product.title}</span>
                    <span className={styles.price}>{product.price}</span>
                    <span aria-hidden="true" className={styles.buyButton}>
                      Mua ngay
                    </span>
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          aria-controls={`${railId}-track`}
          aria-label={`Xem ${itemLabel} trước`}
          className={styles.arrow}
          disabled={currentIndex === 0}
          onClick={() => setActiveIndex((index) => Math.max(0, Math.min(index, lastIndex) - 1))}
          type="button"
        >
          <ChevronLeft aria-hidden="true" size={19} strokeWidth={2} />
        </button>
        <div aria-label={`Chọn ${itemLabel}`} className={styles.dots} role="group">
          {Array.from({ length: lastIndex + 1 }, (_, index) => (
            <button
              aria-label={`Đến ${itemLabel} ${index + 1}`}
              aria-pressed={currentIndex === index}
              className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ""}`}
              key={index}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <button
          aria-controls={`${railId}-track`}
          aria-label={`Xem ${itemLabel} tiếp theo`}
          className={styles.arrow}
          disabled={currentIndex === lastIndex}
          onClick={() => setActiveIndex((index) => Math.min(lastIndex, Math.min(index, lastIndex) + 1))}
          type="button"
        >
          <ChevronRight aria-hidden="true" size={19} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

export function CameraCatalogRails() {
  return (
    <div className={styles.cameraRails}>
      <ProductRail
        ariaLabel="Camera hành trình mới nhất"
        height="first"
        products={cameraRailOne}
        variant="camera"
      />
      <ProductRail
        ariaLabel="Camera hành trình được ưa chuộng"
        height="second"
        products={cameraRailTwo}
        variant="camera"
      />
    </div>
  );
}

export function MemoryCardRail() {
  return (
    <section aria-labelledby="memory-cards-heading" className={styles.memorySection}>
      <div className={styles.memoryInner}>
        <h2 className={styles.memoryHeading} id="memory-cards-heading">
          Thẻ Nhớ Camera Hành Trình
        </h2>
        <ProductRail
          ariaLabel="Thẻ nhớ Lexar"
          height="memory"
          products={memoryCards}
          variant="memory"
        />
      </div>
    </section>
  );
}

export function CatalogRails() {
  return (
    <>
      <CameraCatalogRails />
      <MemoryCardRail />
    </>
  );
}
