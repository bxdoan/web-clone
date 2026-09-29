# Design tokens

Sampled from the live homepage and its visible bundled assets.

## Type

- Main font: Manrope, locally bundled regular and bold WOFF2 files.
- Body: 16px / 24px, weight 400.
- Section headings: 23px / 29.9px, weight 700.
- Featured camera titles: 26px / 36.4px, weight 700.
- Slider titles: 24px / 33.6px, weight 700.
- Buttons: 14px bold, 28px line height.

## Color

| Token | Value | Use |
|---|---|---|
| `--mai-orange` | `#ff631b` | Brand accent, prices, active controls |
| `--mai-orange-hover` | `#ff5201` | Button hover |
| `--mai-orange-active` | `#e74900` | Pressed button |
| `--mai-charcoal` | `#2c2c31` | Main text/header base |
| `--mai-copy` | `#333333` | Headings and body copy |
| `--mai-muted` | `#666666` | Secondary text |
| `--mai-surface` | `#ffffff` | Main page and cards |
| `--mai-section` | `#f8f8f8` | Muted section background (computed) |
| `--mai-card` | `#eeeeee` | Slider card background |
| `--mai-ticker` | `#202020` | Announcement strip |
| `--mai-call` | `#e64949` | Fixed red phone actions |
| `--mai-dealer` | `#2196f3` | Dealer quote bubble |

## Shape and spacing

- Desktop content width: 1140px; viewport content may extend to 1425px at 1440px due to the scrollbar.
- Featured image panels: 570×320px; mobile composite artwork: 375×255px at 390px viewport.
- Desktop header: 81px; ticker about 52px; desktop hero keeps 1920:880 ratio.
- Buttons use pill corners (`500px` computed radius), with compact 120×30px featured CTAs.
- UIkit spacing is mostly 20px and 30px increments; small card gutters tighten at ≤460px.

## Responsive breakpoints

- 960px: switch to mobile navigation and contact toolbar; desktop hero changes to mobile art.
- 640px: featured camera switches from rearranged desktop modules to the dedicated mobile composite module.
- 460px: product cards expand and slider/card spacing tightens.
