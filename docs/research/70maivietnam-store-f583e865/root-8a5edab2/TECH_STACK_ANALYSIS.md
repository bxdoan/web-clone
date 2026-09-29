# Source and clone stack

## Source site

- WordPress with YOOtheme/ UIkit layout and animation classes.
- WooCommerce supplies product cards and product links.
- Manrope is loaded as local font files by the source theme.
- YouTube videos are embedded for installation and app setup.
- Desktop breakpoints align with UIkit `@s` (640px) and `@m` (960px); a 460px media query adjusts small product cards.

## Clone

- Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4.
- Use the existing root route for the first clone and local `next/font/local` files to avoid a runtime font fetch.
- Keep each page component and downloaded asset in the planned site/page namespace.
- Use local source artwork for hero, featured products, benefits, categories, contacts, and about sections.
- Use client components only for timed/interactive UI: hero carousel, finite product rails, mobile navigation, and anchor category interactions.
- No commerce API, authentication, or database is part of the requested clone. Product actions remain navigational links.
