# 70mai Vietnam route expansion

This continuation keeps the existing homepage at `/` and adds local routes for its internal destinations. The app already contains only the root page, so the added paths do not replace an existing route.

## Main menu destinations

| Source URL | Local route | Page treatment |
| --- | --- | --- |
| `https://70maivietnam.store/camera-hanh-trinh/` | `/camera-hanh-trinh/` | WooCommerce-style camera listing |
| `https://70maivietnam.store/phu-kien-camera/` | `/phu-kien-camera/` | Accessory listing |
| `https://70maivietnam.store/phu-kien-70mai/` | `/phu-kien-70mai/` | Accessory listing |
| `https://70maivietnam.store/tin-tuc/` | `/tin-tuc/` | Article listing, with local article detail routes |
| `https://70maivietnam.store/lien-he/` | `/lien-he/` | Contact and store-location page |

The source “Hỗ trợ” menu opens a single “Liên hệ” item. The warranty button opens an overlay form on the source homepage; its local counterpart must stay local and must not send serials to the original site. The source route `/tra-cuu-bao-hanh/` currently returns a 404, so the cloned overlay is the primary behavior. `/gio-hang/` receives a local empty-cart page.

## Product and content destinations

Product links shown on the homepage, category pages, and menu panels retain their source pathname under the clone. Known products use one shared detail template. News cards retain their source article slugs under `/`. Footer guide and policy links use local content pages. Unlisted same-origin paths render the local not-found page instead of escaping to the source domain.

## Route and asset isolation

- Site key remains `70maivietnam-store-f583e865`.
- Existing root route `/`, component tree, research, screenshots, and assets are preserved.
- New page keys follow SHA-256 prefixes of normalized source pathnames: `/camera-hanh-trinh/` → `8247868e`, `/phu-kien-camera/` → `2ef2dcdc`, `/phu-kien-70mai/` → `34234e0f`, `/tin-tuc/` → `87a8720e`, `/lien-he/` → `761fcbd4`, and the A800SE SpeedEye detail path → `cefc41ed`.
- Shared navigation and route components live under `src/components/sites/70maivietnam-store-f583e865/shared/`.
- Newly downloaded catalog and editorial images live in `public/sites/70maivietnam-store-f583e865/shared/images/` and are referenced by the route data.

## Collision check

`src/app/page.tsx` remains the existing 70mai homepage. `src/app/[...slug]/page.tsx` is new and handles only non-root paths. No other `src/app/**/page.tsx`, site namespace, or shared output directory existed before this extension.
