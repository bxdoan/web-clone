# Page topology — `/`

The page is one vertically scrolling storefront. The navigation and contact controls overlay the flow; all other sections are in normal document order.

| Order | Section | Layout and interaction |
|---:|---|---|
| 1 | Announcement ticker | Black full-width strip; rotating text; scrolls away. |
| 2 | Header/navigation | White, sticky desktop navigation; mobile hamburger opens a dialog. Search, basket, warranty lookup, category dropdowns. |
| 3 | Hero slideshow | Full-width banner; desktop and mobile use different assets; previous/next and dots; autoplay. |
| 4 | Featured cameras | Heading and ten camera product spotlights. Two 570×320 panels per product at desktop, with product image, feature text, price, and two links. At small mobile widths, each product uses a single composite image and text. |
| 5 | Camera product rail A | Five items: Omni X800, S410, M800, M310 Plus 4K, M310 Plus 3K; finite slider. |
| 6 | Camera product rail B | Five items: A810 Lite, A800SE SpeedEye, A210, A510, A810S; finite slider. |
| 7 | Why install a dashcam? | Centered intro and four image-backed benefit cards. Static while scrolling. |
| 8 | Dashcam types | Centered intro and three image-backed cards: front; front + rear; front + cabin + rear. |
| 9 | Memory cards | Muted section with three Lexar product cards and a finite product slider. |
| 10 | Accessory category selector | Three tiles switch the active product rail and scroll to the product row. |
| 11 | Active accessory product rail | One of the three rails is visible at a time; inactive rails collapse to zero height. |
| 12 | Installation guide | YouTube video section, video `Zg90ea2oIvY`. |
| 13 | App connection guide | YouTube video section, video `6Sj6MIwwAbg`. |
| 14 | About 70mai Vietnam | Distributor statement, team and affiliate imagery, map, and seven dealer addresses. |
| 15 | Footer | Four link/social columns and copyright line. |
| Overlay | Contact widgets | Fixed Zalo/Messenger/map rail, dealer quote bubble, and phone bar. At ≤960px contacts become a bottom toolbar. |

The original uses UIkit/YOOtheme slider behavior and WooCommerce product destinations. A live click on `#acc` displayed the camera-accessory rail at 388px high while the other two rails measured 0px. The clone models the visible storefront and carousel/navigation interactions with local content/assets; commerce remains outbound links.
