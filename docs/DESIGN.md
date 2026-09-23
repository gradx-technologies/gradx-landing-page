# GradX Design System

This document defines the reusable visual language for GradX websites and product surfaces. It is based on the GradX landing page and should be treated as the default design baseline for future work.

## 1. Brand character

GradX should feel calm, capable, and forward-looking.

- **Calm:** generous whitespace, quiet surfaces, restrained motion.
- **Capable:** strong editorial typography, structured grids, clear hierarchy.
- **Forward-looking:** indigo-to-lilac gradients, soft light, subtle depth.

Avoid loud SaaS clichés: excessive badges, high-saturation gradients, heavy glass effects, oversized shadows, and dense dashboard-like layouts.

## 2. Typography

### Font family

Use **Geist** for all interface and marketing copy.

```css
font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
```

Use **Geist Mono** only for small technical labels, metadata, or eyebrow text.

```css
font-family: var(--font-geist-mono), ui-monospace, monospace;
```

### Type scale

| Use | Tailwind baseline | Notes |
| --- | --- | --- |
| Display heading | `text-[3rem] sm:text-[4.25rem] lg:text-[5rem]` | `font-medium`, `leading-[0.98]`, `tracking-[-0.055em]` |
| Section heading | Same as display heading | Keep to 2–4 lines maximum |
| Card heading | `text-3xl` / `text-[1.75rem]` | `font-semibold`, tight tracking |
| Body | `text-[15px] leading-7` | Default descriptive copy |
| Small body | `text-sm leading-6` | Cards, labels, supporting details |
| Eyebrow | `text-[11px] font-semibold uppercase tracking-[0.14em]` | Use sparingly |

### Heading treatment

Use normal dark text for the opening phrase and the brand gradient only for the final phrase or key idea.

```tsx
<h2 className="text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[4.25rem] lg:text-[5rem]">
  One system for the
  <br />
  <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
    entire placement cycle.
  </span>
</h2>
```

Do not use gradients for whole paragraphs, ordinary navigation, or all headings at once.

## 3. Color system

### Core brand palette

| Token | Value | Use |
| --- | --- | --- |
| Brand Indigo | `#6246D9` | Primary accent, icons, key links |
| Brand Violet | `#8066E6` | Gradient midpoint, hover accents |
| Brand Lilac | `#A99AF0` | Gradient endpoint, soft emphasis |
| Brand Pale | `#EEEAFF` | Icon backgrounds, subtle selected states |
| Deep Ink | `#17151C` | Main dark text and dark surfaces |
| Footer Ink | `#17151C` | Footer and dark editorial section |

### Neutral palette

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#FAFAFA` | Soft page sections |
| White | `#FFFFFF` | Primary surfaces and cards |
| Main text | `#17151C` | Headings |
| Body text | `#706B77` | Standard supporting copy |
| Muted text | `#918B98` | Labels and secondary metadata |
| Border | `#E5E2E9` | Dividers and card edges |
| Dark border | `#302D36` | Borders on dark surfaces |

### Gradient

Use this as the primary GradX gradient:

```css
linear-gradient(90deg, #6246D9 0%, #8066E6 50%, #A99AF0 100%)
```

Use gradients for emphasis, not decoration. A section should normally have one gradient focal point.

## 4. Spacing and layout

### Content container

All marketing sections use a centered container.

```tsx
<div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12" />
```

| Breakpoint | Horizontal padding |
| --- | --- |
| Mobile | `px-6` (24px) |
| Tablet | `sm:px-10` (40px) |
| Desktop | `lg:px-12` (48px) |

### Section rhythm

```tsx
className="py-24 lg:py-32"
```

- Use `py-24` for standard sections.
- Use `lg:py-32` for desktop breathing room.
- Use `mt-20` for a major section-to-content transition.
- Use `mt-8` for related content groups.

### Grid rules

- Intro copy: `lg:grid-cols-[1.15fr_0.85fr]` or `lg:grid-cols-[1.2fr_0.8fr]`.
- Cards: use `gap-4` for tightly related cards and `gap-6` for independent cards.
- Avoid more than four equal-width cards in one row.
- Collapse grids vertically on mobile; do not force narrow multi-column card layouts.

## 5. Components

### Buttons

GradX buttons use a **pill silhouette** consistently.

```tsx
className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium"
```

| Type | Treatment |
| --- | --- |
| Primary | `bg-[#17151c] text-white` |
| Secondary | Light border, translucent/white surface, dark text |
| Mobile nav CTA | Full/available width, `rounded-full`, primary fill |
| Icon button | Circular (`rounded-full`) with visible hover and focus state |

Button rules:

- Prefer one primary action per section.
- Keep labels action-oriented: “Partner With Us”, “Book a Discussion”.
- Use an arrow icon only when it reinforces forward movement.
- Keep button heights at `h-11` for marketing CTAs.

### Cards

Cards are light, tactile surfaces—not heavy containers.

```tsx
className="rounded-[1.75rem] border border-[#dfdce5] bg-[#fafafa] px-7 py-8 sm:px-8 sm:py-9"
```

- Use 1.5–2rem radii for feature cards.
- Use `border-[#dfdce5]` or `border-[#e5e2e9]` for subtle structure.
- Keep shadows minimal; borders should define most card edges.
- Use pale lilac icon wells: `bg-[#f0edfa] text-[#6246d9]`.
- Use abstract soft glow/orbital details rather than large decorative numbers.

### Navigation

- Desktop: minimal text links, `text-[15px] font-medium text-slate-600`.
- Header height: `h-[82px]`.
- Header becomes `bg-white/90 backdrop-blur-xl` after scroll.
- Mobile navigation expands as a continuation of the header, not a detached popup.
- Mobile trigger: circular, bordered, white surface.

### Footer

- Dark surface: `bg-[#17151c]`.
- Keep the wordmark editorial and oversized, but low contrast.
- Contact information forms a full-width responsive row: email left, phone right on tablet/desktop; stack on small phones.
- Place copyright and legal links in a separate row below contact details.

## 6. Responsive behavior

### Breakpoints

| Breakpoint | Purpose |
| --- | --- |
| Base | Mobile-first layout |
| `sm` (640px) | Comfortable tablet spacing and two-column utility rows |
| `lg` (1024px) | Desktop grid layouts and larger type |
| `xl` (1280px) | Full desktop navigation |

### Responsive principles

- Keep heading font sizes fluid using `clamp()` or Tailwind responsive sizes.
- Let descriptive text remain under headings on mobile; do not introduce decorative dividers.
- Use `flex-col` first, then opt into `sm:flex-row` or `lg:grid-cols-*` only when content has sufficient width.
- Never allow phone numbers, email addresses, or legal links to compress into unreadable narrow columns.
- Use a 44px minimum tap target for interactive controls.

## 7. Motion

### Smooth scroll

GradX uses Lenis for smooth navigation and scrolling.

- Keep motion calm and functional.
- Use a fixed-header anchor offset of `104px`.
- Do not add parallax or scroll-triggered effects unless a specific project calls for them.

### Micro-interactions

- Buttons: short `transition-all`, restrained shadow on hover.
- Links: `transition-colors` with a clear but quiet color change.
- Icons: small directional movement (for example, `-translate-y-0.5 translate-x-0.5`) only on hover.
- Respect reduced-motion preferences in future motion-heavy features.

## 8. Accessibility checklist

- Maintain text contrast against white and dark surfaces.
- Use semantic `section`, `nav`, `main`, `footer`, headings, and button elements.
- Give icon-only controls an `aria-label`.
- Keep keyboard focus states visible.
- Do not communicate meaning through color alone.
- Test at 320px, 375px, 768px, 1024px, and 1440px widths.

## 9. Build checklist for new GradX pages

Before shipping a new GradX surface, verify:

- [ ] Geist is the primary font.
- [ ] Heading gradient is used selectively.
- [ ] Layout uses the shared `max-w-7xl` container and responsive padding.
- [ ] CTAs use pill corners.
- [ ] Cards have quiet borders and generous radii.
- [ ] Mobile navigation is attached to the header.
- [ ] Footer contact and legal rows remain readable at mobile widths.
- [ ] All anchor links account for the fixed header.
- [ ] Page works with keyboard navigation and reduced motion.
