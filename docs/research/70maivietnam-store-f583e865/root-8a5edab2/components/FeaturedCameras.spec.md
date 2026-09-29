# FeaturedCameras Specification

## Overview
- **Target file:** `src/components/sites/70maivietnam-store-f583e865/root-8a5edab2/FeaturedCameras.tsx`
- **Screenshot:** source was viewed inline; the browser tool did not export a local PNG.
- **Interaction model:** scroll-driven vertical product sequence; links open product destinations.

## Structure and measured styles
- Muted section background computed as `rgb(248, 248, 248)`.
- Heading: “Camera Hành Trình Ô Tô Được Ưa Chuộng Tại Việt Nam”; Manrope 700 23px/29.9px, color `rgb(51, 51, 51)`, 20px bottom margin.
- Desktop content width: 1140px. Each image/panel item is 570×320px, `position: relative`, `overflow: hidden`.
- The second item in a product pair uses a product image as its background and places copy in a right-aligned overlay panel. Panel uses 30px padding; product title is Manrope 700 26px/36.4px.
- Featured “Chi tiết” button: 120×30px; 14px bold; pill radius 500px. The orange “Mua ngay” action is beside it.
- At 390px, the dedicated mobile module uses a full-width 375×255px composite image followed by copy/actions. At 768px, the desktop module is rearranged to a single-column sequence.

## Products and text (desktop content)

1. **70mai A800SE SpeedEye** — Cảnh báo quá tốc độ; Cảnh báo camera giao thông; Ghi hình 4K siêu nét — `3.990.000 đ`.
2. **70mai 4K T800** — Ghi hình 3 kênh HDR; Cảm biến ảnh Sony STRAVIS 2; 2 phiên bản tùy chọn — `9.900.000 đ`.
3. **70mai A810 Lite** — Ghi hình 4K HDR; Ghi hình: Trước & Sau; Hỗ trợ thẻ nhớ lên tới 512GB — `2.790.000 đ`.
4. **70mai 4K A810S** — Ghi hình 4K HDR; Quay đêm siêu nét trước & sau; Cảm biến Sony STARVIS 2 — `5.290.000 đ`.
5. **70mai 4K M800** — Ghi hình 4K HDR, 2 kênh trước & sau; Cảm biến hình ảnh Sony STARVIS 2; Bộ nhớ trong eMMC 128G — `6.790.000 đ`.
6. **70mai T400** — Ghi hình toàn diện 3 kênh; Thiết kế nhỏ gọn lắp đặt nhanh; Giám sát đỗ xe 24h thông minh — `3.890.000 đ`.
7. **70mai A410 Neo** — Ghi hình toàn diện 2 kênh; Độ nét 2,5K QHD; Pin siêu tụ điện — `1.990.000 đ`.
8. **70mai A210-1** — Ghi hình 1080P HDR; Ghi hình: Trước & Sau; Tối ưu khả năng lưu trữ — `2.100.000 đ`.
9. **70mai M310 plus 4K** — Ghi hình 4K; Ống kính xoay 360°, Khẩu độ F1.55 — `2.100.000 đ`.
10. **70mai M310 Plus 3K** — Ghi hình 3K HD; Ống kính xoay 360°, Khẩu độ F1.55 — `1.700.000 đ`.

## Responsive content differences
- The A800SE mobile card shows `3.900.000 đ` while desktop shows `3.990.000 đ`.
- Mobile A410 Neo copy is “Ghi hình toàn diện 2 kênh – Thiết kế nhỏ gọn lắp đặt nhanh – Giám sát đỗ xe 24h thông minh”.
- Mobile A210 copy is “Ghi hình Trước & Sau: 1080P HDR”.
- Images: desktop product pair artwork (e.g. `70mai-SP-A800SE-noi-bat-trang-chu-2.jpg`, `70mai-SP-A800SEspeedeye-noi-bat-trang-chu.jpg`); mobile artwork uses `anh-Mobile-...` files in the asset manifest.
