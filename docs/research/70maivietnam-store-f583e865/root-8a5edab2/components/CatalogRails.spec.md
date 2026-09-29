# CatalogRails Specification

## Overview
- **Target file:** `src/components/sites/70maivietnam-store-f583e865/root-8a5edab2/CatalogRails.tsx`
- **Screenshot:** source was viewed inline; the browser tool did not export a local PNG.
- **Interaction model:** click-driven finite product sliders.

## Structure and styles
- Two camera-product rails follow the featured block; the memory-card rail follows the benefit/type sections.
- Desktop rail content is centered in a 1140px container; both rails have arrow and pagination controls and do not auto-advance.
- The camera rail containers were measured at 759px wide inside their layout column (292px and 282px high). The memory rail spans 1140px and is 458px high.
- At ≤460px, cards expand, content becomes visible, and cards sit on a `#eeeeee` area; buttons are about 120px wide.
- Memory-card section uses a `#f8f8f8` panel. Heading “Thẻ Nhớ Camera Hành Trình” is 24px/33.6px bold Manrope.

## Camera rail A — text and prices
- Camera hành trình 70mai 4K Omni X800 — `5.990.000₫`.
- Camera hành trình 70mai S410 dạng gương — `2.990.000₫`.
- Camera hành trình 70mai M800 — `5.890.000₫`.
- Camera hành trình 70mai M310 Plus 4K — `2.100.000₫`.
- Camera Hành Trình 70mai M310 Plus 3K — `1.700.000₫`.

## Camera rail B — text and prices
- Camera hành trình 70mai 4K A810 Lite — `2.790.000₫`.
- Camera hành trình 70mai A800SE SpeedEye — `3.990.000₫`.
- Camera hành trình 70mai A210 — `1.690.000₫`.
- Camera hành trình 70mai A510 — `2.690.000₫`.
- Camera hành trình 70mai A810S — `4.690.000₫`.

## Memory cards — text and prices
- Thẻ nhớ Lexar xanh 633x — `290.000₫`.
- Thẻ nhớ Lexar Blue Plus — `850.000₫`.
- Thẻ nhớ Lexar SILVER PLUS — `1.690.000₫`.

Use the local downloaded product thumbnails listed in `ASSETS.json`; each card title links to its matching source product URL. Preserve the original finite next/previous and dot navigation.
