import Image from "next/image";

import { localizeSiteHref } from "../shared/site-links";
import { featuredCameras } from "./site-data";
import styles from "./FeaturedCameras.module.css";

export function FeaturedCameras() {
  return (
    <section className={styles.section} aria-labelledby="featured-cameras-title">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle} id="featured-cameras-title">
          Camera Hành Trình Ô Tô Được Ưa Chuộng Tại Việt Nam
        </h2>

        <div className={styles.desktopList}>
          {featuredCameras.map((camera) => (
            <article className={styles.desktopPair} key={camera.title}>
              <div className={styles.lifestylePanel}>
                <Image
                  alt={`${camera.title} được lắp đặt trên xe ô tô`}
                  className={styles.panelImage}
                  fill
                  sizes="(max-width: 960px) 100vw, 570px"
                  src={camera.desktopLeft}
                />
              </div>

              <div className={styles.productPanel}>
                <Image
                  alt={`${camera.title} camera hành trình`}
                  className={styles.productImage}
                  fill
                  sizes="(max-width: 960px) 100vw, 570px"
                  src={camera.desktopRight}
                />
                <div className={styles.desktopCopy}>
                  <h3 className={styles.productTitle}>{camera.title}</h3>
                  <ul className={styles.featureList}>
                    {camera.desktopFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className={styles.price}>{camera.desktopPrice}</p>
                  <div className={styles.actions}>
                    <a className={styles.detailButton} href={localizeSiteHref(camera.href)}>
                      Chi tiết
                    </a>
                    <a className={styles.buyButton} href={localizeSiteHref(camera.href)}>
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.mobileList}>
          {featuredCameras.map((camera) => (
            <article className={styles.mobileCard} key={camera.title}>
              <div className={styles.mobileImageFrame}>
                <Image
                  alt={`${camera.title} camera hành trình 70mai`}
                  className={styles.panelImage}
                  fill
                  sizes="(max-width: 640px) 100vw, 375px"
                  src={camera.mobileImage}
                />
              </div>
              <div className={styles.mobileCopy}>
                <h3 className={styles.mobileTitle}>{camera.title}</h3>
                <ul className={styles.mobileFeatureList}>
                  {(camera.mobileFeatures ?? camera.desktopFeatures).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className={styles.mobilePrice}>
                  {camera.mobilePrice ?? camera.desktopPrice}
                </p>
                <div className={styles.actions}>
                  <a className={styles.detailButton} href={localizeSiteHref(camera.href)}>
                    Chi tiết
                  </a>
                  <a className={styles.buyButton} href={localizeSiteHref(camera.href)}>
                    Mua ngay
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
