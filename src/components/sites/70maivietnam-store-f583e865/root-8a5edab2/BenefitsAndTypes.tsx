import Image from "next/image";
import { benefits, cameraTypes } from "./site-data";
import styles from "./BenefitsAndTypes.module.css";

function CardGrid({ cards }: { cards: typeof benefits }) {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card) => (
        <article className={styles.photoCard} key={card.title}>
          <Image
            alt=""
            className={styles.photo}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
            src={card.image}
          />
          <div className={styles.shade} />
          <div className={styles.cardCopy}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function BenefitsAndTypes() {
  return (
    <div className={styles.information}>
      <section className={styles.section} aria-labelledby="dashcam-benefits">
        <div className={styles.container}>
          <header className={styles.sectionHeading}>
            <h2 id="dashcam-benefits">Tại Sao Nên Lắp Camera Hành Trình Xe Ô Tô?</h2>
            <p>
              Camera hành trình (Dashcam) là thiết bị có chức năng ghi lại hình ảnh và âm thanh cùng các thông tin như tọa độ (GPS), tốc độ (km/h), thời gian (t) của xe trong suốt quá trình di chuyển. Vì vậy xe ô tô cần phải được trang bị camera hành trình để đảm bảo an toàn khi tham gia giao thông.
            </p>
          </header>
          <CardGrid cards={benefits} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.typeSection}`} aria-labelledby="dashcam-types">
        <div className={styles.container}>
          <header className={styles.sectionHeading}>
            <h2 id="dashcam-types">Phân Loại Camera Hành Trình</h2>
            <p>
              Tùy theo nhu cầu sử dụng và tài chính, chủ xe cần lựa chọn được camera hành trình loại nào tốt và phù hợp trước khi lắp đặt
            </p>
          </header>
          <div className={`${styles.cardGrid} ${styles.typeGrid}`}>
            {cameraTypes.map((card) => (
              <article className={styles.photoCard} key={card.title}>
                <Image
                  alt=""
                  className={styles.photo}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  src={card.image}
                />
                <div className={styles.shade} />
                <div className={styles.cardCopy}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
