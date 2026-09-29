"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
} from "./icons";
import {
  getProductDetailData,
  normalizeProductPath,
} from "./product-detail-data";
import type { ProductDetailData } from "./product-detail-data";
import styles from "./ProductDetail.module.css";

export interface ProductDetailProps {
  pathname: string | readonly string[];
}

export function ProductDetail({ pathname }: ProductDetailProps) {
  const normalizedPath = normalizeProductPath(pathname);
  const product = getProductDetailData(normalizedPath);
  return <ProductDetailView key={normalizedPath} product={product} />;
}

function ProductDetailView({ product }: { product: ProductDetailData }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const [warrantyMessage, setWarrantyMessage] = useState("");
  const [viewerOpen, setViewerOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const viewerRef = useRef<HTMLDialogElement>(null);
  const selectedImage = product.images[imageIndex];

  useEffect(() => {
    const dialog = viewerRef.current;
    if (!dialog) return;

    if (viewerOpen && !dialog.open) dialog.showModal();
    if (!viewerOpen && dialog.open) dialog.close();
  }, [viewerOpen]);

  const changeImage = (direction: -1 | 1) => {
    if (!product.images.length) return;
    setImageIndex((index) => (index + direction + product.images.length) % product.images.length);
    setZoomed(false);
  };

  const addToCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (product.variants?.length && !variant) {
      setCartMessage("Vui lòng chọn camera trước khi thêm vào giỏ hàng.");
      return;
    }

    const chosenVariant = product.variants?.find((option) => option.value === variant);
    setCartMessage(
      `Đã thêm ${quantity} × ${product.title}${chosenVariant ? ` (${chosenVariant.label})` : ""} vào giỏ hàng mẫu.`,
    );
  };

  const submitWarrantyLookup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWarrantyMessage("Tra cứu đang ở chế độ minh họa. Mã serial không được gửi đi.");
    event.currentTarget.reset();
  };

  return (
    <main className={styles.page}>
      <nav aria-label="Đường dẫn" className={styles.breadcrumbs}>
        <Link href="/">Trang chủ</Link>
        <span aria-hidden="true">/</span>
        {product.categoryPath !== "/" && (
          <>
            <Link href={product.categoryPath}>{product.categoryLabel}</Link>
            <span aria-hidden="true">/</span>
          </>
        )}
        <span aria-current="page" className={styles.currentCrumb}>{product.title}</span>
      </nav>

      <div className={styles.container}>
        <section aria-labelledby="product-title" className={styles.productSummary}>
          <div className={styles.gallery}>
              <div className={`${styles.galleryLayout} ${product.images.length <= 1 ? styles.galleryLayoutSingle : ""}`}>
              {product.images.length > 1 && (
                <div aria-label="Ảnh sản phẩm" className={styles.thumbnails} role="group">
                  {product.images.map((galleryImage, index) => (
                    <button
                      aria-label={`Xem ảnh ${index + 1}: ${galleryImage.alt}`}
                      aria-pressed={imageIndex === index}
                      className={`${styles.thumbnail} ${imageIndex === index ? styles.thumbnailActive : ""}`}
                      key={`${galleryImage.src}-${index}`}
                      onClick={() => setImageIndex(index)}
                      type="button"
                    >
                      <Image alt="" fill sizes="76px" src={galleryImage.src} />
                    </button>
                  ))}
                </div>
              )}

              <div className={styles.mainImageFrame}>
                {selectedImage ? (
                  <button
                    aria-label="Mở ảnh sản phẩm để phóng to"
                    className={styles.mainImageButton}
                    onClick={() => setViewerOpen(true)}
                    type="button"
                  >
                    <Image
                      alt={selectedImage.alt}
                      className={styles.mainImage}
                      fill
                      priority
                      sizes="(max-width: 860px) 100vw, 592px"
                      src={selectedImage.src}
                    />
                    <span className={styles.zoomHint}>Nhấn để phóng to</span>
                  </button>
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <svg aria-hidden="true" viewBox="0 0 160 120">
                      <path d="M31 30h98a9 9 0 0 1 9 9v42a9 9 0 0 1-9 9H31a9 9 0 0 1-9-9V39a9 9 0 0 1 9-9Z" />
                      <path d="M53 30l8-12h37l8 12" />
                      <circle cx="80" cy="60" r="21" />
                      <circle cx="80" cy="60" r="11" />
                    </svg>
                    <span>Ảnh sản phẩm đang được cập nhật</span>
                  </div>
                )}
                {product.images.length > 1 && (
                  <div className={styles.galleryArrows}>
                    <button aria-label="Ảnh trước" onClick={() => changeImage(-1)} type="button">
                      <ArrowLeftIcon />
                    </button>
                    <button aria-label="Ảnh tiếp theo" onClick={() => changeImage(1)} type="button">
                      <ArrowRightIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.summary}>
            <h1 id="product-title">{product.title}</h1>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.priceNote}>{product.note}</p>
            <p className={styles.summaryText}>{product.summary}</p>

            {product.warning && <p className={styles.warning}>{product.warning}</p>}

            <ul className={styles.featureList}>
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>

            <form className={styles.purchaseForm} onSubmit={addToCart}>
              {product.variants && (
                <label className={styles.variantField}>
                  <span>Chọn Camera</span>
                  <select value={variant} onChange={(event) => { setVariant(event.target.value); setCartMessage(""); }}>
                    <option value="">Chọn Camera</option>
                    {product.variants.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
              )}

              <div className={styles.purchaseControls}>
                <div aria-label="Số lượng" className={styles.quantity} role="group">
                  <button
                    aria-label="Giảm số lượng"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    type="button"
                  >
                    −
                  </button>
                  <output aria-live="polite">{quantity}</output>
                  <button
                    aria-label="Tăng số lượng"
                    disabled={quantity >= 99}
                    onClick={() => setQuantity((current) => Math.min(99, current + 1))}
                    type="button"
                  >
                    +
                  </button>
                </div>
                <button className={styles.addToCart} type="submit">THÊM VÀO GIỎ HÀNG</button>
              </div>
              <p aria-live="polite" className={styles.cartMessage}>{cartMessage}</p>
            </form>

            <form className={styles.warrantyForm} onSubmit={submitWarrantyLookup}>
              <label htmlFor="warranty-serial">Tra cứu bảo hành</label>
              <div className={styles.warrantyControls}>
                <input
                  autoComplete="off"
                  id="warranty-serial"
                  name="serial"
                  placeholder="Nhập mã serial trên sản phẩm đã mua"
                  required
                />
                <button type="submit">Tra cứu</button>
              </div>
              <p aria-live="polite" className={styles.warrantyMessage}>{warrantyMessage}</p>
            </form>
          </div>
        </section>

        <section aria-labelledby="details-title" className={styles.details}>
          <h2 id="details-title">Thông tin sản phẩm</h2>
          {product.sections.map((section) => (
            <article className={styles.detailSection} key={section.heading}>
              <div className={styles.detailCopy}>
                <h3>{section.heading}</h3>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.image && (
                <div className={styles.detailImageFrame}>
                  <Image
                    alt={section.image.alt}
                    className={styles.detailImage}
                    fill
                    sizes="(max-width: 760px) 100vw, 640px"
                    src={section.image.src}
                  />
                </div>
              )}
            </article>
          ))}

          <section aria-labelledby="specs-title" className={styles.specifications}>
            <h3 id="specs-title">{product.specificationHeading ?? `Thông số kỹ thuật ${product.title}`}</h3>
            <dl>
              {product.specs.map((spec) => (
                <div className={styles.specRow} key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </section>

        {product.relatedProducts.length > 0 && (
          <section aria-labelledby="related-title" className={styles.related}>
            <h2 id="related-title">Sản phẩm liên quan</h2>
            <div className={styles.relatedGrid}>
              {product.relatedProducts.map((related) => (
                <Link className={styles.relatedCard} href={related.href} key={related.href}>
                  <span className={styles.relatedImageFrame}>
                    <Image alt={related.title} fill sizes="(max-width: 620px) 45vw, 250px" src={related.image} />
                  </span>
                  <span className={styles.relatedTitle}>{related.title}</span>
                  <span className={styles.relatedPrice}>{related.price}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <dialog
        aria-label={`Xem ảnh sản phẩm: ${product.title}`}
        className={styles.viewer}
        onCancel={() => { setViewerOpen(false); setZoomed(false); }}
        onClose={() => { setViewerOpen(false); setZoomed(false); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") changeImage(-1);
          if (event.key === "ArrowRight") changeImage(1);
        }}
        ref={viewerRef}
      >
        <button className={styles.viewerScrim} onClick={() => setViewerOpen(false)} type="button" aria-label="Đóng trình xem ảnh" tabIndex={-1} />
        <div className={styles.viewerPanel}>
          <div className={styles.viewerToolbar}>
            <button aria-label="Thu phóng ảnh" onClick={() => setZoomed((current) => !current)} type="button">
              {zoomed ? "Thu nhỏ" : "Phóng to"}
            </button>
            <span>{product.images.length ? `${imageIndex + 1} / ${product.images.length}` : ""}</span>
            <button aria-label="Đóng ảnh" onClick={() => setViewerOpen(false)} type="button"><CloseIcon /></button>
          </div>
          {selectedImage && (
            <div className={styles.viewerImageFrame}>
              <Image
                alt={selectedImage.alt}
                className={`${styles.viewerImage} ${zoomed ? styles.viewerImageZoomed : ""}`}
                fill
                sizes="min(90vw, 1100px)"
                src={selectedImage.src}
              />
            </div>
          )}
          {product.images.length > 1 && (
            <div className={styles.viewerArrows}>
              <button aria-label="Ảnh trước" onClick={() => changeImage(-1)} type="button"><ArrowLeftIcon /></button>
              <button aria-label="Ảnh tiếp theo" onClick={() => changeImage(1)} type="button"><ArrowRightIcon /></button>
            </div>
          )}
        </div>
      </dialog>
    </main>
  );
}
