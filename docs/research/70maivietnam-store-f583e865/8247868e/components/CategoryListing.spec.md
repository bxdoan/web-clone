# Component spec — category listing routes

## Routes

Use this shared listing for `/camera-hanh-trinh/`, `/phu-kien-camera/`, `/phu-kien-70mai/`, and the existing 70mai product category links from the homepage. The primary three routes have source pages and exact first-page data below.

## Source structure and appearance

- The same sticky 70mai header and fixed contacts remain visible above the category content; keep the existing `HeaderHero`, `FooterSection`, and `ContactWidgets` components.
- Breadcrumb strip is a 24px line inside a centered 1140px content container. It begins with “Tổng quan” and then the active category.
- A compact filter row follows: “Bộ lọc”, “Hiển thị”, “Lọc theo giá”, then a right-aligned sort select and product count. Sorting options are `Nổi bật`, `Mới nhất`, `Bán chạy nhất`, `Giá thấp`, `Giá cao`, and `Khuyến mại`.
- Category heading is centered, uppercase, Manrope 700, 26px / 36.4px, with 40px lower margin.
- Main content max-width is 1140px. The source product list extends to 1180px with a 40px negative left margin. Four columns each render a 255px square thumbnail with 20px lower margin. Product cards have no visible box border or background.
- Product title is centered, Manrope 700, 17px / 23.8px, dark gray `#333`; price is centered, Manrope 400, 14px / 21px, red `#ff0000`.
- At the measured 2029px browser viewport, the container starts at x=437 with width 1140px; each card is 295px wide including 40px left padding; the thumbnail is 255×255px. Treat the max-width and four-column structure as the stable values, not the physical screenshot viewport.
- First page shows eight products (four columns × two rows) and simple numbered pagination below. The source category product counts are 25, 32, and 10.
- The category page ends with a prose SEO description and the shared location/footer sections.

## Interaction model

- Product image/title links navigate to the product’s preserved local pathname.
- Sort select changes ordering locally. Price filter and “Hiển thị” control open simple local controls; do not submit to the source site.
- Pagination changes the displayed local product page and URL state.
- The category menu panel links directly to the exact local category or product path.
- Responsive: four columns at desktop, two at tablet, one at narrow mobile. Keep thumbnails square and page content inside the viewport.

## First-page source products

### `/camera-hanh-trinh/` — 25 total

1. `Camera hành trình 70mai 4K A810 Lite` — `2.790.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-a810-lite/` — source image `anh-dai-dien-A810-lite-2-300x300.jpg`.
2. `Camera hành trình 70mai 4K Omni X800` — `5.990.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-omni-x800/` — `70mai-X800-4K-xoay-360-ket-noi-4G-2-300x300.jpg`.
3. `Camera hành trình 70mai A210` — `1.690.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-a210/` — `Anh-dai-dien-300x300.jpg`.
4. `Camera hành trình 70mai A410` — `2.100.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-a410/` — `Untitled-1-300x300.jpg`.
5. `Camera hành trình 70mai A410 Neo` — `1.990.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-a410-neo/` — `70mai-A410Neo-300x300.jpg`.
6. `Camera hành trình 70mai A800SE` — `3.190.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-a800se/` — `anh-dai-dien-truoc-300x300.jpg`.
7. `Camera hành trình 70mai A800SE SpeedEye` — `3.990.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-a800se-speedeye/` — `anh-dai-dien-300x300.jpg`.
8. `Camera hành trình 70mai A810S` — `4.690.000₫` — `/camera-hanh-trinh/camera-hanh-trinh-70mai-a810s/` — `anh-xoa-phong-2-e1769396861678-300x300.png`.

### `/phu-kien-camera/` — 32 total

1. `Bộ Hardwire Kit 70mai UP06 cho camera hành trình 70mai` — `690.000₫` — `/phu-kien-camera/bo-hardwire-kit-70mai-up06-cho-camera-hanh-trinh-70mai/` — `UP062-300x300.jpg`.
2. `Đầu đọc thẻ nhớ camera hành trình 70mai` — `Liên hệ` — `/phu-kien-camera/dau-doc-the-nho-camera-hanh-trinh-70mai/` — `Dau-doc-the-nho-cho-cameera-hanh-trinh-70mai-300x300.png`.
3. `Mắt camera sau 70mai RC14` — `1.190.000₫` — `/phu-kien-camera/mat-camera-sau-70mai-rc14/` — `4k-omni-rear-cam-rc14_2-300x300.jpg`.
4. `Mắt camera sau 70mai RC21` — `690.000₫` — `/phu-kien-camera/mat-camera-sau-70mai-rc21/` — `70mai-RC-21-300x300.jpg`.
5. `Mắt camera sau 70mai RC22` — `690.000₫` — `/phu-kien-camera/mat-camera-sau-70mai-rc22/` — `70mai-RC22-300x300.jpg`.
6. `Mắt camera sau 70mai RC23` — `Liên hệ` — `/phu-kien-camera/mat-camera-sau-70mai-rc23/` — `70mai-RC23-300x300.jpg`.
7. `Mắt camera sau 70mai RC24` — `1.590.000₫` — `/phu-kien-camera/mat-camera-sau-70mai-rc24/` — `70mai-RC22-1-300x300.jpg`.
8. `Mắt camera sau 70mai RC41` — `Liên hệ` — `/phu-kien-camera/mat-camera-sau-70mai-rc41/` — `Wideorejestrator-70MAI-T800-Kamera-tylna-RC41-Karta-pamieci-microSD-512GB-10-300x300.jpg`.

### `/phu-kien-70mai/` — 10 total

1. `Bộ Gối Tựa Đầu và Tựa Lưng 70mai Cho Ô Tô` — `380.000₫` — `/phu-kien-70mai/bo-goi-tua-dau-va-tua-lung-70mai-cho-o-to/` — `Anh-dai-dien-1-300x300.jpg`.
2. `Bộ tích điện 70mai cho camera hành trình` — `Liên hệ` — `/phu-kien-70mai/bo-tich-dien-70mai-cho-camera-hanh-trinh/` — `bo-tich-dien-70mai2-300x300.jpg`.
3. `Cảm biến áp suất lốp 70mai T05` — `1.990.000₫` — `/phu-kien-70mai/cam-bien-ap-suat-lop-70mai-t05/` — `dai-dien-300x300.jpg`.
4. `Máy hút bụi cầm tay 70mai PV03 và PV04` — `Liên hệ` — `/phu-kien-70mai/may-hut-bui-cam-tay-70mai-pv03-va-pv04/` — `may-hut-bui-cam-tay-70mai-PV03-PV04-300x300.jpg`.
5. `Trạm phát điện di động Tera 1000` — `Liên hệ` — `/phu-kien-70mai/tram-phat-dien-di-dong-tera-1000/` — `tera1000-1-300x300.jpg`.
6. `Máy phát điện Tera-1000` — `Liên hệ` — `/phu-kien-70mai/may-phat-dien-tera-1000/` — `may-phat-dien-Tera-1000-300x300.jpg`.
7. `Cảm biến áp suất lốp 70mai T02` — `Liên hệ` — `/phu-kien-70mai/cam-bien-ap-suat-lop-70mai-t02/` — `cam-bien-ap-suat-lop-70mai-T02-300x300.jpg`.
8. `Cảm biến áp suất lốp 70mai T04` — `Liên hệ` — `/phu-kien-70mai/cam-bien-ap-suat-lop-70mai-t04/` — `cam-bien-ap-suat-lop-70mai-T04-300x300.jpg`.

## Shared visual and content rules

- Do not introduce a new theme. Reuse Manrope, orange `#ff631b`, charcoal `#2c2c31`, body `#333`, and the existing root page components.
- Each image must be local under the site’s shared asset namespace or an existing site asset. Do not hotlink the source domain.
- Category data must retain the exact original destination paths above, but links rendered inside the clone must be root-relative.
- Keep the list and controls as mock storefront behavior; no checkout or external form submission.
