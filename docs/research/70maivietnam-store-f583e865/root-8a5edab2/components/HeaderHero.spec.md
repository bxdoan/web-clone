# HeaderHero Specification

## Overview
- **Target file:** `src/components/sites/70maivietnam-store-f583e865/root-8a5edab2/HeaderHero.tsx`
- **Screenshot:** source was viewed inline; the browser tool did not export a local PNG.
- **Interaction model:** sticky/scroll-driven header, click-driven mobile dialog, time- and click-driven hero.

## DOM structure
Announcement ticker → site header (logo, desktop nav or mobile toggle, warranty lookup, search, basket) → full-width slideshow with arrow and dot controls. Desktop and mobile use different slideshow assets.

## Sampled computed styles
- Desktop header: 1425×81px at a 1440px viewport; Manrope 400 16px/24px; color `rgb(44, 44, 49)`.
- Header background: white. Sticky behavior is provided by a YOOtheme `.uk-sticky` wrapper.
- Ticker: full-width black strip, about 52px tall; centered white Manrope text.
- Desktop hero: 1425×653px; source ratio `1920:880`; mobile at 390px has 375×211px active slide.
- Navigation controls are orange on hover/active; warranty action is orange and pill-shaped.

## States and behavior
- Desktop header remains at the top after scroll; ticker leaves the viewport with the document.
- Below 960px: show hamburger, centered brand, search, and basket; clicking “Open Menu” opens the mobile dialog.
- Hero controls: previous/next arrows and pagination dots update the active slide. Autoplay is enabled; timer duration was not measured.
- Desktop artwork includes `Banner-70mai-HD-2026-web-2336e553.webp` and `70maivietnam-tc-98e4ba46.webp`. Mobile uses `Banner-70mai-HD-2026-mb-ffb45181.webp` plus the other mobile slide artwork in the asset manifest.

## Text content
- Ticker rotates: “Cam hành trình Cảnh báo giao thông 70mai A800SE SpeedEye”; “Ưu đãi lớn khi mua kèm theo gói Combo”; “Camera Hành Trình Đẳng Cấp Quốc Tế”.
- Navigation: “Trang chủ”, “Camera hành trình”, “Phụ kiện Camera”, “Phụ kiện 70mai”, “Tin tức”, “Hỗ trợ”, “Tra cứu bảo hành”.
- Logo: `logo-70maivietnam.svg`.

## Responsive behavior
- **1440px:** ticker, 81px desktop nav, 1425×653 desktop hero.
- **768px:** mobile nav; mobile banner at 753×211; desktop-only navigation hidden.
- **390px:** 375×211 mobile banner; logo centered with hamburger/search/basket.
- **Breakpoint:** 960px for header/hero mode switch.
