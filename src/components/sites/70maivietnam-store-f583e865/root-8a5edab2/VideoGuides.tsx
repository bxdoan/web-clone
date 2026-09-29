import styles from "./VideoGuides.module.css";

const guides = [
  {
    title: "Hướng Dẫn Lắp Đặt Camera Hành Trình Ô Tô 70mai",
    videoId: "Zg90ea2oIvY",
  },
  {
    title: "Hướng Dẫn Kết Nối Camera Hành Trình Với APP 70mai",
    videoId: "6Sj6MIwwAbg",
  },
];

export function VideoGuides() {
  return (
    <section className={styles.guides} aria-label="Hướng dẫn sử dụng camera hành trình">
      <div className={styles.container}>
        {guides.map((guide) => (
          <article className={styles.guide} key={guide.videoId}>
            <h2>{guide.title}</h2>
            <div className={styles.videoFrame}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={`https://www.youtube-nocookie.com/embed/${guide.videoId}?rel=0`}
                title={guide.title}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
