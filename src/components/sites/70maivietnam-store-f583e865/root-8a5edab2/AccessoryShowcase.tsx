"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "../shared/icons";
import { localizeSiteHref } from "../shared/site-links";
import { accessoryCategories } from "./site-data";
import type { AccessoryCategoryData, ProductCardData } from "./types";
import styles from "./AccessoryShowcase.module.css";

const visibleCountForWidth = (width: number): number =>
  width <= 460 ? 1 : width <= 960 ? 2 : 4;

function ProductRail({ category }: { category: AccessoryCategoryData }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = Math.max(0, category.products.length - visibleCount);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(visibleCountForWidth(window.innerWidth));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const getStride = () => {
    const rail = railRef.current;
    const firstCard = rail?.firstElementChild;
    if (!rail || !(firstCard instanceof HTMLElement)) return 0;

    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(lastIndex, index));
    setActiveIndex(nextIndex);
    railRef.current?.scrollTo({
      left: getStride() * nextIndex,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const handleScroll = () => {
    const stride = getStride();
    if (stride > 0) {
      setActiveIndex(Math.max(0, Math.min(lastIndex, Math.round((railRef.current?.scrollLeft ?? 0) / stride))));
    }
  };

  return (
    <section
      aria-labelledby={`${category.id}-tab`}
      className={styles.category}
      id={category.id}
      role="tabpanel"
    >
      <div className={styles.categoryHeading}>
        <h3 id={`${category.id}-title`}>{category.title}</h3>
        <div className={styles.arrows} aria-label={`${category.title}: điều khiển sản phẩm`}>
          <button
            aria-label={`Sản phẩm trước trong mục ${category.title}`}
            className={styles.arrowButton}
            disabled={activeIndex === 0}
            onClick={() => goTo(activeIndex - 1)}
            type="button"
          >
            <ArrowLeftIcon aria-hidden="true" />
          </button>
          <button
            aria-label={`Sản phẩm tiếp theo trong mục ${category.title}`}
            className={styles.arrowButton}
            disabled={activeIndex === lastIndex}
            onClick={() => goTo(activeIndex + 1)}
            type="button"
          >
            <ArrowRightIcon aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        aria-label={`Sản phẩm: ${category.title}`}
        className={styles.productRail}
        onScroll={handleScroll}
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        {category.products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>

      <div className={styles.dots} aria-label={`Chọn vị trí trong mục ${category.title}`} role="group">
        {Array.from({ length: lastIndex + 1 }, (_, index) => (
          <button
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Hiển thị sản phẩm ${index + 1} đến ${Math.min(index + visibleCount, category.products.length)} trong mục ${category.title}`}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
            key={index}
            onClick={() => goTo(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <article className={styles.productCard}>
      <a className={styles.productImageLink} href={localizeSiteHref(product.href)}>
        <Image
          alt={product.title}
          className={styles.productImage}
          fill
          sizes="(max-width: 460px) 88vw, (max-width: 960px) 44vw, 270px"
          src={product.image}
        />
      </a>
      <div className={styles.productInfo}>
        <h4>
          <a href={localizeSiteHref(product.href)}>{product.title}</a>
        </h4>
        <p>{product.price}</p>
      </div>
    </article>
  );
}

export function AccessoryShowcase() {
  const [activeCategoryId, setActiveCategoryId] = useState<AccessoryCategoryData["id"]>("ext");
  const selectorRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCategory = accessoryCategories.find(
    (category) => category.id === activeCategoryId,
  ) ?? accessoryCategories[0];

  const selectCategory = (category: AccessoryCategoryData, index: number) => {
    setActiveCategoryId(category.id);
    window.requestAnimationFrame(() => {
      document.getElementById(category.id)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
    selectorRefs.current[index]?.focus();
  };

  const handleSelectorKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | undefined;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % accessoryCategories.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + accessoryCategories.length) % accessoryCategories.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = accessoryCategories.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      const category = accessoryCategories[nextIndex];
      selectCategory(category, nextIndex);
    }
  };

  return (
    <section className={styles.section} aria-label="Danh mục phụ kiện và quà tặng 70mai">
      <div className={styles.container}>
        <div className={styles.categoryNav} aria-label="Chọn danh mục sản phẩm" role="tablist">
          {accessoryCategories.map((category, index) => (
            <button
              aria-controls={category.id}
              aria-selected={category.id === activeCategoryId}
              className={`${styles.categoryLink} ${category.id === activeCategoryId ? styles.selectedCategory : ""}`}
              id={`${category.id}-tab`}
              key={category.id}
              onClick={() => selectCategory(category, index)}
              onKeyDown={(event) => handleSelectorKeyDown(event, index)}
              ref={(element) => {
                selectorRefs.current[index] = element;
              }}
              role="tab"
              tabIndex={category.id === activeCategoryId ? 0 : -1}
              type="button"
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className={styles.categories}>
          <ProductRail
            category={activeCategory}
            key={activeCategory.id}
          />
        </div>
      </div>
    </section>
  );
}
