# VideoGuides Specification

## Overview
- **Target file:** `src/components/sites/70maivietnam-store-f583e865/root-8a5edab2/VideoGuides.tsx`
- **Screenshot:** source was viewed inline; the browser tool did not export a local PNG.
- **Interaction model:** click-to-play YouTube embeds.

## Structure
- Two centered video sections in order. Each has a heading above a 16:9 video frame.
- “Hướng Dẫn Lắp Đặt Camera Hành Trình Ô Tô 70mai” embeds YouTube video `Zg90ea2oIvY`.
- “Hướng Dẫn Kết Nối Camera Hành Trình Với APP 70mai” embeds YouTube video `6Sj6MIwwAbg`.
- Source HTML lazy-loads the iframes. Use a local thumbnail preview with a play affordance, then set the iframe source on click so third-party content is loaded only when requested.

## Styles and responsive behavior
- Heading matches section style: Manrope bold 23px/29.9px, color `rgb(51, 51, 51)`, with 20px lower margin.
- Content is centered in a max-width container; video scales to full width while preserving 16:9 ratio.
- At desktop the two guides display as separate full-width stacked sections; at tablet/mobile the video frame shrinks to the available width.
