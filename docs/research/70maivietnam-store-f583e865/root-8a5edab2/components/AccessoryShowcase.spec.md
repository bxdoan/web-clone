# AccessoryShowcase Specification

## Overview
- **Target file:** `src/components/sites/70maivietnam-store-f583e865/root-8a5edab2/AccessoryShowcase.tsx`
- **Screenshot:** source was viewed inline; the browser tool did not export a local PNG.
- **Interaction model:** click-driven category selection with one finite slider visible at a time.

## Layout and behavior
- Muted section background `rgb(248, 248, 248)`; 1140px centered content at desktop.
- Selector has three white tiles, each 380×52px with 12px 20px padding. Labels: “Phụ kiện 70mai”, “Phụ kiện Camera”, “Quà tặng 70mai”.
- Links target `#ext`, `#acc`, `#other`. A live click on `#acc` left no URL fragment, scrolled to the product row, and showed only the 388px camera-accessory rail; the other two rails collapsed to 0px. Recreate this as one active category rail with the first category selected by default.
- Selecting a category changes the visible rail and scrolls to it. Product rails use the same finite card/arrow/dot interaction as camera rails. On narrow mobile, cards become single-column and expanded.

## Category content

### Phụ kiện 70mai (`#ext`)
- Kích bình ắc quy 70mai PS07 — `1.790.000₫`.
- Bơm lốp ô tô 70mai TP07 — `1.350.000₫`.
- Bơm lốp ô tô 70mai TP01 — `1.490.000₫`.
- Bơm lốp ô tô 70mai TP10 — `1.100.000₫`.
- Kích bình ắc quy 70mai PS01 — “Liên hệ”.
- Máy hút bụi 70mai PV01 — “Liên hệ”.

### Phụ kiện Camera (`#acc`)
- Bộ Hardwire Kit UP04 cho camera hành trình 70mai hỗ trợ 4G — “Liên hệ”.
- Bộ Hardwire Kit cổng OBD II cho camera hành trình 70mai — “Liên hệ”.
- Mắt camera sau 70mai RC11 — `690.000₫`.
- Mắt camera sau 70mai RC12 — “Liên hệ”.
- Mắt camera sau 70mai RC13 — “Liên hệ”.
- Tẩu sạc 70mai — `150.000₫`.
- Cáp nguồn camera hành trình 70mai cổng Micro USB — `180.000₫`.
- Phụ kiện camera hành trình 70mai A810, A800S — `160.000₫`.
- Phụ kiện camera hành trình 70mai A510, A500S, A200 — `150.000₫`.
- Phụ kiện camera hành trình 70mai 1S và M300 — `150.000₫`.
- Phụ kiện camera hành trình 70mai Omni — `150.000₫`.

### Quà tặng 70mai (`#other`)
- Áo thun 70mai; Máy cắt lông mũi 70mai; Bình nước thể thao 70mai; Bình giữ nhiệt 70mai; Ô che nắng mưa 70mai — each “Liên hệ”.

## Assets
Use namespaced images with matching filenames from `ASSETS.json`, including `70mai-PS07-Anh-Dai-Dien-2-848dae4c.webp`, `TP10-2-fa4dae31.webp`, the downloaded RC11/RC13 images, and gift item images.
