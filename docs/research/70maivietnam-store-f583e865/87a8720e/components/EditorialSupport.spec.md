# Component spec — editorial and support pages

## Routes

Build `/tin-tuc/` as a local article listing; article cards link to local versions of their original root-level slugs. Reuse a compact article template for those slugs. Build `/lien-he/` as a contact page. Footer guide and policy links should be local pages using the same site shell.

## News listing

- Source title: `Cập nhật thông tin tổng hợp từ 70mai Việt Nam`; visible section heading: `TIN TỨC MỚI`.
- Keep the same shared navigation, breadcrumb (“Tổng quan / Tin tức”), contact widgets, and footer.
- Article cards use the source YOOtheme style: image at the top, bold article title, and short excerpt. The first six are:
  1. `Camera hành trình bị lỗi GPS và bí mật đằng sau lớp phim cách nhiệt` — `/camera-hanh-trinh-bi-loi-gps-va-cach-khac-phuc/` — `70mai-T400-cho-xe-honda-cb6ce7f5.webp`.
  2. `Khám phá công nghệ ADAS trên camera hành trình 70mai: Giải pháp lái xe an toàn thời 4.0` — `/kham-pha-cong-nghe-adas-tren-camera-hanh-trinh-70mai/` — `he-thong-canh-bao-ADAS-70mai-f6fa9da9.webp`.
  3. `Camera hành trình ô tô loại nào tốt giá rẻ, lắp ở đâu uy tín?` — `/camera-hanh-trinh-o-to-gia-re-loai-nao-tot/` — `70mai-M310-cho-xe-Mazda-CX5-1-77d8f04f.webp`.
  4. `Lắp Camera Hành Trình ô tô Giá Rẻ Ở Đâu? Thương Hiệu Nào Uy Tín Chất Lượng?` — `/lap-camera-hanh-trinh-o-to-gia-re-o-dau-thuong-hieu-nao-uy-tin/` — `70mai-A800SE-cho-xe-GAC-M8-3-6fbdd3be.webp`.
  5. `Kinh nghiệm sử dụng camera hành trình bạn nên biết` — `/kinh-nghiem-su-dung-camera-hanh-trinh-ban-nen-biet/` — `70mai-A800SE-cho-xe-Kia-4-2ce1011e.webp`.
  6. `Mua camera hành trình ô tô tại Quảng Trị ở đâu uy tín chính hãng` — `/camera-hanh-trinh-o-to-tai-quang-tri/` — `Camera-hanh-trinh-70mai-A200-tai-Quang-Tri-eddb18d5.webp`.
- News card links stay under the clone origin. Use local editorial images; never load article art from the original host at runtime.

## Contact page

- Page title: `Liên hệ`.
- Intro: `Bất cứ điều gì bạn cần, chỉ cần liên hệ với 70mai Việt Nam, chúng tôi sẽ cố gắng hết sức để phản hồi trong thời gian sớm nhất.`
- Display the source contact channels: Hỗ trợ đại lý `0966 195 007`; Hỗ trợ bảo hành `0965 825 925`; Hotline `0966 195 007` and `0961 962 979`; Email `autochaua@gmail.com`.
- Show the two principal showroom addresses: Miền Bắc `46 Đặng Thùy Trâm, Nghĩa Đô, Hà Nội`; Miền Nam `R8 Ba Vì, Phường Hoà Hưng, TP Hồ Chí Minh`, followed by the shared seven-location map section.
- Phone/email/map links may use their matching external protocols or map destination; internal site links remain local.

## Footer content routes

Support links include buying guide, installation guide, usage guide, warranty guide, about, privacy, shipping, warranty/returns, and payment. Preserve original Vietnamese labels and route paths. When a source URL no longer exists, render a local article layout with the relevant title and the shared site shell rather than sending the visitor back to the homepage.

## Responsive behavior

- News listing uses 3 columns on desktop, 2 on tablet, and 1 on mobile. Images use a consistent landscape crop.
- Contact details stack into one column on mobile; address/map section remains readable above the fixed phone bar.
- Article detail pages use a centered readable text column and a wide lead image.
