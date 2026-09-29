# Component spec — product detail routes

## Route set

Use one product-detail template for product paths reached from the homepage, catalog grids, and header mega menus. The source reference page is the A800SE SpeedEye URL in this page folder. Preserve each source pathname locally.

## Source reference layout

- Keep the sticky 70mai header and the fixed contact controls from the homepage.
- Breadcrumb appears above the product summary.
- At a 2029px browser viewport, the product content container is 1310px wide and centered at x=352. It starts at y≈202 after the shared header/breadcrumb.
- Main product row uses a large media column on the left and a 524px summary column on the right. The summary H1 is Manrope 400, 32px, line-height about 1.3. Body is Manrope 16px/24px; the price uses the source red/orange emphasis.
- Product gallery uses square 592×592px images in a horizontal image slider, with a vertical strip of thumbnails on the left. Clicking a thumbnail selects the image; the source also opens the image viewer with zoom and previous/next controls.
- Product summary order: title, price, VAT/memory note, product-specific warning or short description, feature bullets, model/variant selector where present, quantity controls, and orange `THÊM VÀO GIỎ HÀNG` button.
- The A800SE SpeedEye page has a camera-choice select (`Chọn Camera`) before quantity and add-to-cart. The product page also contains a warranty lookup input with placeholder `Nhập mã serial trên sản phẩm đã mua`.
- Below the buy area, preserve long-form detail headings, product images, and a technical-specification section. The reference headings include “Cảnh báo giao thông thông minh cùng SpeedEye”, “Ghi hình 2 kênh sắc nét với 4k HDR 30FPS + 1080P 30FPS”, “Giám sát đỗ xe thông minh 24H”, and “Thông số kỹ thuật camera hành trình 70mai A800SE”.

## Behavior

- Gallery thumbnails update the main image; image viewer opens/closes and supports previous/next.
- Variant select and quantity controls update visible selection/quantity. Add-to-cart is a local mock action with clear confirmation and no external POST.
- Related products and breadcrumbs use local paths.
- Warranty serial lookup remains local and does not submit user-entered data to the source site.
- Responsive layout stacks gallery above summary on mobile, with a horizontal thumbnail strip and full-width primary action.

## Product data

- Reference title: `Camera hành trình 70mai A800SE SpeedEye`.
- Price: `3.990.000₫`.
- Note: `Giá trên đã bao gồm VAT, chưa bao gồm thẻ nhớ`.
- The source notes this SpeedEye version identifies traffic signs through GPS/Gofa data and does not perform real-time sign recognition.
- Store product data under the shared site namespace so homepage cards, category cards, and this template resolve the same products.
