# ContactWidgets Specification

## Overview
- **Target file:** `src/components/sites/70maivietnam-store-f583e865/root-8a5edab2/ContactWidgets.tsx`
- **Screenshot:** source was viewed inline; the browser tool did not export a local PNG.
- **Interaction model:** fixed links and telephone actions; responsive position change.

## Desktop state
- A fixed right rail at roughly 20px from the right and vertically centered. The measured rail is 56×267px, white background, 5px radius, clipped overflow, and contains Zalo MB, Zalo MN, Messenger, and “Tìm đường”.
- Fixed blue “BÁO GIÁ ĐẠI LÝ” bubble at lower left.
- Fixed red phone pills near the bottom: “MB : 0965 825 925” (`tel:0981142178`) and “MN : 0966 162 269” (`tel:0966162269`).

## Mobile state
- At widths ≤960px, contact controls become a full-width bottom toolbar with Zalo MB, Zalo MN, “Gọi điện”, Messenger, and map actions. The dealer quote bubble stays at lower left above the bar.
- Use local icons: `icon-zalo-9bacacd1.webp`, `icon-messenger-12006689.webp`, `icon-map-10853971.webp`, and available Viber/contact art.
- Keep links actionable: telephone uses `tel:` URLs; map action scrolls to the about/map section; messaging links may point to source public business links.
