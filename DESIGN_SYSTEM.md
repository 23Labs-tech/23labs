# 23Labs Design System

Source of truth for the visual language established on the homepage and applied
site-wide. All values live as CSS custom properties in `app/globals.css` (`:root`).
Change a token there, not in an individual component, to adjust the system.

## Typography

Font family: Poppins (loaded in `app/layout.tsx`, weight 400 only is used anywhere
on the site — **no bold or semibold text**).

| Token | Value | Used for |
|---|---|---|
| `--h1-size` | `clamp(34px, 3.4vw + 20px, 52px)` | Page/hero H1 |
| `--h2-size` | `clamp(28px, 1.9vw + 16px, 40px)` | Section H2 |
| `--h2-color` | `#171717` | H1/H2 text |
| `--h2-weight` | `400` | |
| `--h2-line-height` | `1.15` | |
| `--h2-letter-spacing` | `-0.025em` | |
| `--h3-size` | `clamp(18px, 0.3vw + 17px, 20px)` | Card titles, process-step titles |
| `--h3-color` | `#171717` | |
| `--h3-line-height` | `1.35` | |
| `--eyebrow-size` | `clamp(12px, 0.2vw + 11.5px, 13px)` | Small uppercase labels (`.mono`) |
| `--eyebrow-color` | `#666666` | |
| `--eyebrow-letter-spacing` | `0.1em` | |
| `--eyebrow-line-height` | `1.4` | |
| `--desc-size` | `clamp(15px, 0.3vw + 14px, 17px)` | Supporting description under a heading (`.lead`) |
| `--desc-color` | `#555555` | |
| `--desc-line-height` | `1.6` | |
| `--desc-max-width` | `650px` | Applied per-section where a description needs wrapping control |
| `--body-size` | `clamp(15px, 0.15vw + 14.5px, 16px)` | Card/paragraph body copy |
| `--body-color` | `#444444` | |
| `--body-line-height` | `1.7` | |
| `--label-size` | `14px` | Small labels, dates, categories, numbered badges |
| `--label-color` | `#777777` | |

Spacing between typographic elements:

| Token | Value | Gap |
|---|---|---|
| `--type-eyebrow-gap` | `20px` | eyebrow → heading |
| `--type-heading-desc-gap` | `16px` | heading → description |
| `--type-desc-content-gap` | `clamp(28px, 4vw, 48px)` | description → section content |
| `--type-para-gap` | `20px` | paragraph → paragraph |

Headings always wrap naturally (no forced `<br>`s); each section's own `max-width`
(in `ch` units) controls line balance, not the font-size tokens above.

## Colour

| Token | Value | Role |
|---|---|---|
| `--paper` | `#f3f1ee` | Default page/card background (warm off-white) |
| `--paper-2` | `#ece9e4` | Alternating-section background, same warm family, one step darker |
| `--card` | `#f3f1ee` | Card surfaces (flat — same tone as the page, distinguished by a border, not elevation) |
| `--ink` | `#18181b` | General text (effectively the same near-black as `--h2-color`/`--h3-color`) |
| `--ink-soft` | `#52525b` | Secondary text in places not yet migrated to `--body-color`/`--desc-color` |
| `--accent` | `#2563eb` | The one blue — primary buttons, links, hover states. Used sparingly, never as a section background |
| `--accent-dark` | `#1d4ed8` | Hover/active state for `--accent` |
| `--line` | `#e7e7e4` | Subtle component-level borders (cards, list rows) |
| `--home-line` | `rgba(0, 0, 0, 0.82)` | Bold divider lines between major sections (homepage + the bordered editorial grids) |
| `--foot-bg` | `#0a0a0d` | Footer only — the one intentionally dark surface on the site |

## Layout

| Token | Value |
|---|---|
| `--maxw` | `1400px` — the one content-container width, used by `.wrap`/`.container` everywhere |
| `--pad` | `clamp(20px, 4vw, 60px)` — horizontal gutter paired with `--maxw` |
| `--sec-pad` | `clamp(56px, 9vw, 104px)` — vertical section padding |

`.home-wrap` is now numerically identical to `.wrap`; it's kept as an additional
class on homepage sections for historical clarity but doesn't need to be added to
new markup — `.wrap` alone is sufficient everywhere, including the shared `Navbar`.

## Components

- **Buttons** (`.btn`, `.btn-primary`, `.btn-ghost`, `.btn-light`): `border-radius: 0`
  globally. Primary = solid `--accent` fill, white text. Secondary = outlined,
  transparent background. Consistent height/padding regardless of page.
- **Corners**: every component on the site uses `border-radius: 0` except literal
  circles (`50%` — numbered badges, icon circles). There are no other rounded
  elements anywhere in `globals.css`.
- **Shadows**: none exist anywhere in the stylesheet. Elevation is communicated
  with a 1px border, never a shadow.
- **Cards** (`.service-card`, `.industry-card`, `.proc-card`, `.blog-body`,
  homepage `.home-cell`): flat, bordered, no background distinct from the page,
  title/body text pointed at the `--h3-*`/`--body-*` tokens above.
- **Eyebrow labels** (`.mono`): uppercase, `--eyebrow-*` tokens, used site-wide.
  A handful of page-specific contexts (service/industry detail hero sub-labels,
  the About page's "practical panel", the contact page hero) still render their
  eyebrow in `--accent` via their own more-specific selector — these were judged
  out of scope for this pass (see Outstanding below) and keep the accent-blue
  treatment deliberately, not as an oversight.
- **Nav & Footer**: one shared `Navbar`/`Footer` component pair, rendered once in
  `app/layout.tsx`. Solid `--paper`-toned bar, permanent 1px bottom border,
  square dropdown panels, no blur/shadow.

## Homepage-specific patterns

A few treatments exist only on the homepage, via `.home-*` classes, and were a
deliberate design choice rather than something every page needed:

- The bordered multi-column "cell grid" (`.home-cell-grid`) used for What We
  Build / Selected Work / From the Blog.
- The numbered vertical timeline (`.home-process-*`) for How We Work.
- The diagonal clip-path image treatment (`.home-why-media`) for Why 23Labs.

These were intentionally not forced onto every other page's layout — the brief
was to standardise the *visual language* (type, colour, spacing, corners), not
to restructure every page into the homepage's specific section shapes.

## Outstanding / not covered in this pass

- A long tail of page-specific component classes (contact form fields, the
  Calendly booking section, location-page and solution-page specific cards,
  case-study outcome/workflow blocks) still use `--ink-soft`/`--ink-faint`
  directly rather than the new `--body-color`/`--label-color` tokens. They
  already inherited the corner-squaring, container-width, and background
  changes (all token-level), and their font sizes already matched 400-weight
  Poppins from an earlier pass — but their exact colour values weren't
  individually swapped to the new hex tokens in this round.
- `--line` (subtle component borders) was left as-is rather than unified with
  the bolder `--home-line` used for homepage section dividers — internal pages'
  card/list borders are intentionally lighter-weight than the homepage's major
  section dividers.
- No browser/screenshot tooling is available in this environment, so every
  change in this project has been verified structurally (compiled CSS output,
  computed clamp() values at specific viewport widths, HTTP status across
  every route) rather than visually. A real visual pass across
  375/430/768/1024/1366/1440/1920px, on both the homepage and a representative
  page from each route group, is recommended before approving for production.
