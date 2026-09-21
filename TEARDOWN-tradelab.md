# Site Teardown: Tradelab — Online Course & Coaching Template

**URL:** https://tradelabtemplate.framer.website/
**Built by:** Gabin B. (`x.com/_GabinB`) — Framer template
**Platform:** Framer (generator `Framer 8e1ebfe`, published 2025-12-24)
**Date analyzed:** 2026-09-21
**Source:** raw HTML pasted by user (full SSR output + inline CSS + appear-animation JSON)

---

## Tech Stack (Confirmed from Source)

| Technology | Evidence | Purpose |
|---|---|---|
| Framer (React SSR) | `data-framer-hydrate-v2`, `framer-*` class hashes | Whole site |
| Framer Motion | `__framer__appearAnimationsContent` JSON, spring configs | Entry + scroll reveals |
| Lenis | `html.lenis`, `.lenis-smooth{scroll-behavior:auto!important}` in CSS | Smooth scroll |
| CSS mask icons | `-webkit-mask:url("data:image/svg+xml,…"); background-color:var(--esondr)` | Recolourable icons |
| YouTube facade | `<img>` poster + hidden `<iframe>` + SVG play button | Lazy video |
| Framer form component | `.v1.framer-custom-input` | Newsletter |

---

## Design System

### Colors (Framer tokens → real values)
| Token | Value | Usage |
|---|---|---|
| `a1521226` | `#0b0b0b` | Page background |
| `3e5bb04b` | `#ce4901` | **Primary accent** — buttons, prices, dots, bars |
| `523d1ec9` | `#f86d22` | Secondary accent — eyebrow labels, badge text |
| `9d4b84f9` | `#ffffff` | Headings |
| `b186a58d` | `#b4b4b4` | Body text |
| `ac3f77cb` | `gray` (#808080) | Muted/footer text |
| `1f4caef6` | `#292929` / `#414141` | Borders, dividers |
| — | `rgba(255,255,255,0.12)` | Nav + hero rail borders |
| — | `rgba(255,255,255,0.1)` | Card borders |
| — | `rgb(240,112,43)` | Primary button border |

### Typography
| Role | Family | Weight | Letter-spacing | Sizes (desktop / tablet / mobile) |
|---|---|---|---|---|
| h1 | Sora | 400 | −0.07em | 90 / 75 / 50 px, lh 90% |
| h2 | Sora | 400 | −0.05em | 54 / 45 / 35 px, lh 110% |
| h3 | Sora | 400 | −0.05em | 30 / 25 / 23 px, lh 110% |
| h5 | Sora | 400 | 0.02em | 20px, lh 100% |
| Body L | Inter | 400 | 0 | 18px, lh 150%, `#b4b4b4` |
| Body M | Inter | 400 | 0 | 16px, lh 150% |
| Body S | Inter | 400 | 0 | 14px, lh 150% |
| Nav link | Inter | 400 | 1.1px | 14px, UPPERCASE |
| Eyebrow | Inter | 600 | 0 | 15px/18px, UPPERCASE, `#f86d22` |
| Button | Inter | 500 | 0.04em | 15px, lh 130%, UPPERCASE |
| Price | Inter | 600 | −0.05em | 54px, lh 110% |

### Spacing / layout
- Content max-width **1200px**. Sections are full-bleed wrappers; the inner 1200px container carries `border-left/right: 1px`.
- Section padding: `80px 40px` standard, `140–150px 40px` for feature sections, `110px` hero top.
- Gaps: 10 / 20 / 24 / 30 / 40 / 60 / 70 / 80 / 130px scale.
- **Border radius: 0 on almost everything.** Only pills use `999px`, badges `9999px`. This is a hard-edged design.

### Responsive
`(min-width:1200px)` desktop · `(810–1199.98px)` tablet · `(max-width:809.98px)` mobile. Framer ships all three DOM variants and hides with `.hidden-*` classes.

---

## Effects Breakdown

| Effect | Implementation | Complexity | Cloneable |
|---|---|---|---|
| **Rail grid lines** | Full-bleed section w/ `border-bottom:1px`; inner 1200px w/ `border-left/right:1px` | Low | Yes — *the* signature look |
| Button glow blobs | 2 blurred radial-gradient circles behind label, reposition on hover | Low | Yes |
| Noise overlay | Fixed/absolute div, tiled 192px noise PNG, `opacity:.1` | Low | Yes (SVG feTurbulence) |
| Pulse indicator | 8px dot + second circle scaling out & fading | Low | Yes |
| Announcement marquee | Flex `<ul>` translated infinitely on X | Low | Yes |
| Scroll reveal | `opacity:0; translateY(10px)` → spring(stiffness 79, damping 30) | Low | Yes (IO + cubic-bezier) |
| Hero stagger | Appear JSON, delays 0.2/0.4/0.6/0.7/1.0s | Low | Yes |
| Image bottom fade | `mask:linear-gradient(0deg, transparent 0%, black 46%)` | Low | Yes |
| Card inner glow | `box-shadow: inset 0 10px 40px 13px rgba(255,255,255,.02)` | Low | Yes |
| Active card lighting | PNG glow, `translateX(-50%)`, top of card | Low | Yes (radial-gradient) |
| Accent tick bars | 2px × 17px accent bar absolutely placed left of a text block | Low | Yes |
| Sticky FAQ column | `position:sticky; top:40px` | Low | Yes |
| Plus→minus toggle | 2 bars, one `rotate(90deg)`; animate to `0deg` | Low | Yes |
| Toggle switch | 44×21 pill, 15px indicator sliding `left:4px ↔ right:4px` | Low | Yes |
| Giant footer wordmark | 897px logo image absolutely bottom-centre | Low | Yes |
| Smooth scroll | Lenis init | Low | Yes |
| YouTube facade | Poster + play SVG, swap in iframe on click | Low | Yes |

---

## Implementation Details

### 1. The rail-line grid (most important)
```
.section        { border-bottom: 1px solid #414141; }          /* full bleed */
.section__inner { max-width: 1200px; margin-inline: auto;
                  border-left: 1px solid #414141;
                  border-right: 1px solid #414141; }
```
Nested sub-rows repeat the trick, producing continuous vertical rails down the whole page and a table-like feel. Cells inside a row use `border-left:1px` on each child except the first.

### 2. Primary button
```
.btn { display:flex; gap:7px; padding:14px 18px; border-radius:0;
       background:#ce4901; border:1px solid #f07 02b; position:relative; overflow:hidden }
.btn__glow-a { position:absolute; width:92px; aspect-ratio:1; top:-5px; right:-35px;
       background: radial-gradient(50% 50% at 50% 50%, #cecece 0%, #ce4901 100%);
       filter: blur(10px); border-radius:999px; z-index:0 }
.btn__glow-b { width:96px; top:-48px; left:-44px; /* same gradient */ }
.btn:hover .btn__glow-a { top:-2px; right:-46px; bottom:-42px }
.btn:hover .btn__glow-b { top:-52px; left:-48px }
```
Label + icon sit at `z-index:2`. Secondary variant: transparent bg, `border:1px solid rgba(255,255,255,.2)`, no icon, no glows.

### 3. Icons as CSS masks
```
.icon-arrow {
  -webkit-mask: url("data:image/svg+xml,<svg …><path d='M 8 0 L 6.59 1.41 …'/></svg>")
                 no-repeat center / auto;
  background-color: var(--esondr);   /* recolour here */
  width:24px; aspect-ratio:1;
}
```
Every icon in the template works this way — one element, colour driven by a CSS variable.

### 4. Scroll reveal spring
Framer spring `{stiffness:79, damping:30, mass:1}` ≈ `cubic-bezier(.16,1,.3,1)` over ~800ms. Initial states seen in source: `translateY(10px)` (content), `translateY(-10px)` (eyebrows), `translateX(-10px)` (cards, staggered).

### 5. Pricing card decoration
- Top-left glow: 48×63 PNG, `top:0; left:30px`.
- Top-right: ~100px translucent gradient SVG (`linearGradient` white .4 → transparent), `top:-10px; right:-10px`, clipped by card overflow.
- Bottom half: `linear-gradient(231deg, rgba(255,255,255,.03) 0%, rgba(171,171,171,0) 100%)`; featured card swaps to `rgba(206,73,1,.1)`.
- Check badge: 19px pill, accent when on, `#292929` when off, 13px white tick mask inside.

---

## Assets Needed to Recreate
1. **Noise texture** — generate with SVG `feTurbulence baseFrequency=.8`, no file needed.
2. **Gradient backgrounds** (hero / instructor / CTA / footer) — recreate as CSS radial-gradients in brand colour; no PNG needed.
3. **Card lighting glow** — CSS `radial-gradient(ellipse at top, accent/18%, transparent 70%)`.
4. **Decorative pricing SVGs** — optional; can be dropped or replaced with brand shapes.
5. **Avatars / illustrations / laurel wreaths** — client photos or placeholders.

---

## Build Plan (for MyCER)

### Stack
Static HTML + CSS + vanilla JS. No framework needed — every effect above is CSS or ~20 lines of JS. Lenis from cdnjs for smooth scroll.

### Token remap for MyCER (palette unchanged from current MyCER site)
| Tradelab | MyCER |
|---|---|
| `#ce4901` accent | `#FFB606` |
| `#f86d22` accent-2 | `#FBA919` |
| `#0b0b0b` bg | `#0E1216` |
| `#292929` / `#414141` line | `#1E2A33` / `#2A3B47` |
| `#b4b4b4` body | `#B8B8B8` |
| panel navy | `#1A2E3B` |

### Section order (MyCER — unchanged)
Announcement → Nav → Hero → Agitacija → Video → Benefiti → Industrija → Predavač → Iskustva polaznika → Enciklopedija → Bonusi → Add-oni → Kurikulum → Google recenzije → Ponuda+countdown → Phone testimonials → Poređenje → FAQ → Ponuda (ponovljena) → Garancija → Finalni CTA → Footer

## Notes
- Design is hard-edged: **radius 0** everywhere except pills. Do not soften it.
- The rails + noise + a single saturated accent on near-black do most of the work; everything else is restraint.
- Sora is a free Fontshare/Google font; Inter likewise. Both load from Google Fonts.
- Template is a commercial Framer product — we are rebuilding the design language in hand-written HTML/CSS for MyCER, not redistributing the template.
