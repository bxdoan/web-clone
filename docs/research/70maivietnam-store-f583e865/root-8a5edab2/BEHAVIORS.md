# Behavior findings — 70mai Vietnam homepage

Source: https://70maivietnam.store/  
Inspection: Chrome at 1440×1000, 768×1024, and 390×844. Browser viewport and page CSS measurements were read from the live page.

## Page-level behavior

- The page scrolls as a normal document; no custom scroll container or smooth-scroll library was observed.
- A narrow black announcement strip rotates between three short Vietnamese messages. It is part of the normal flow.
- The desktop navigation is sticky. When the page is scrolled, the navigation remains visible while the announcement strip scrolls away.
- At widths below 960px, the full desktop navigation is replaced by a centered logo, hamburger, search, and basket controls. The hamburger is labelled “Open Menu” and opens the mobile navigation dialog.
- A fixed right-side contact rail shows Zalo MB, Zalo MN, Messenger, and map links. A blue “BÁO GIÁ ĐẠI LÝ” bubble is fixed at lower left. Desktop also shows two red phone contact pills near the bottom. Below 960px the contact controls become a full-width bottom row with Zalo, call, Messenger, and map actions.

## Interactive states

| Area | Trigger | Observed result |
|---|---|---|
| Hero slideshow | Previous/Next arrows, pagination dots, autoplay | Changes the active image slide. Desktop has two 1920:880 banners; mobile has its own banner set and layout. |
| Main camera highlights | Scroll | Ten camera panels continue vertically. Desktop uses a two-column image/text composition at 570×320; mobile uses a single 375×255 composite image with its own copy below. |
| Camera product rails | Arrow or pagination controls | Moves the finite product slider by one set. The two rails contain five camera items apiece. |
| Memory-card rail | Arrow/pagination controls | Moves a finite rail with three Lexar products. |
| Accessory category links | Click “Phụ kiện 70mai”, “Phụ kiện Camera”, or “Quà tặng 70mai” | Activates one category rail and scrolls to its product row. The source clears the fragment after handling the click; inactive rails collapse to zero height. |
| Header menu | Click mobile “Open Menu” | Opens the navigation dialog with home, product/category, news, support, and warranty links. |
| Product CTAs | Click “Chi tiết” or “Mua ngay” | Navigates to the matching product URL on the source shop. The clone keeps the matching destination links. |
| Contact controls | Click | Opens the relevant Zalo/Messenger/map or telephone target. |
| YouTube guides | Click video preview | Opens/plays the YouTube guide. Source video IDs: `Zg90ea2oIvY` and `6Sj6MIwwAbg`. |

## Responsive findings

- 1440px viewport: usable document width 1425px due to the browser scrollbar. Desktop nav is 1425×81px; desktop hero is 1425×653px. Main feature content is 1140px wide, with each image panel at 570×320px.
- 768px viewport: document width 753px. The mobile header and mobile hero are active. The featured camera section switches to its tablet composition: the desktop feature module is visible and rearranges to a single-column sequence; the separate mobile composite module remains hidden until the 640px breakpoint.
- 390px viewport: CSS document width is 375px. The mobile hero banner is 375×211px. Main camera panels use a separate mobile image at 375×255px. Catalog cards show expanded product information and one-card-at-a-time presentation.
- Source styles use UIkit breakpoints: 640px (`@s`), 960px (`@m`), and a 460px card adjustment.

## Exact computed-style samples

Values below were read with `getComputedStyle()` in the live page. They describe sampled elements, not every descendant.

- Header `.tm-header.uk-visible@m` at desktop: 1425×81px; `position: relative` inside the sticky wrapper; Manrope 400 16px/24px; color `rgb(44, 44, 49)`.
- Desktop hero `.uk-visible@m.uk-slideshow`: 1425×653px; slideshow item ratio `1920:880`.
- Feature section heading: Manrope 700 23px/29.9px; color `rgb(51, 51, 51)`; bottom margin 20px.
- Feature item wrapper: 570×320px; `position: relative`; `overflow: hidden`.
- Feature product title: Manrope 700 26px/36.4px; color `rgb(51, 51, 51)`.
- “Chi tiết” button: 120×30px; pill radius 500px; 14px bold Manrope; transition 0.1s on color/background/border/shadow.
- Benefit overlay: 245×239px in the sampled desktop card; 30px padding; white text; 24px bold card title.
- Accessory selector tile: 380×52px; white background; 12px 20px padding; transition 0.1s.
- Shared copy: Manrope 400 16px/24px. Page background is white, with muted panels computed as `rgb(248, 248, 248)` and card/slider background around `rgb(238, 238, 238)`.

## Hover and limits

- Source buttons, category tiles, and slider cards have short UIkit transitions. A full pointer-hover sweep over every nested link/card was not completed; do not claim unmeasured hover colors as exact.
- Browser screenshots were viewed inline for the source at all three widths, but this browser interface did not provide a local screenshot export path. The screenshot folder is reserved; no reference PNGs are claimed as saved.
- Values are reported only where measured or read from source styles. Where responsive behavior is described from the live layout and bundled source CSS, the exact computed values are not inferred.
