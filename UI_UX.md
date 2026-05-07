# UI_UX.md — Adrian Nie Portfolio

## Design System

### Color Tokens
All defined in `tailwind.config.js` under `theme.extend.colors`:

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#4A7C6F` | Buttons, links, active states, dots |
| `primary-light` | `#E8F0EC` | Hover fills, card borders, selection bg |
| `primary-dark` | `#3A6B5A` | Button hover darken, active states |
| `bg` | `#FFFFFF` | Page background (pure white) |
| `surface` | `#F8F9FA` | Cards, elevated content, projects section bg |
| `text-primary` | `#1A1A1A` | Headings, strong body copy |
| `text-secondary` | `#4A5568` | Body paragraphs, descriptions (slate gray) |
| `text-muted` | `#718096` | Dates, tags, metadata, captions |
| `dark` | `#1A202C` | Social icon fills, footer background |
| `border` | `#E2E8F0` | Card borders, dividers, filter pills |

### Typography Scale

| Role | Size | Weight | Font | Notes |
|------|------|--------|------|-------|
| Hero name | 64px (5xl→7xl) | 700 | Serif | tracking-tight |
| Section title | 40px→48px (4xl→5xl) | 600 | Serif | tracking-tight, centered |
| Section subtitle | 18px→20px | 400 italic | Serif | text-secondary, centered |
| Heading (card) | 20px | 500 | Serif | |
| Heading (about) | 32px→40px | 600 | Serif | |
| Body copy | 17px | 400 | Sans | leading-relaxed (1.65) |
| Caption / tags | 14px | 400 | Sans | text-muted |
| Nav links | 13px | 500 | Sans | uppercase, tracking-widest |
| Button text | 13–14px | 500 | Sans | uppercase, tracking-wider |

Font families:
- `--font-serif`: `'Playfair Display', Georgia, serif`
- `--font-sans`: `'Inter', system-ui, sans-serif`

### Spacing System

| Context | Value |
|---------|-------|
| Section vertical padding | `py-24` (96px) desktop / `py-16` (64px) mobile |
| Container max-width | `max-w-5xl` (1024px), `mx-auto`, `px-6` |
| Grid gap (projects) | `gap-8` (32px) |
| Grid gap (writing) | `gap-4` (16px) — tighter, more intimate |
| Card padding | `p-6` (24px) |
| Button padding | `px-8 py-3` (CTA) / `px-6 py-2.5` (secondary) |

---

## Component Specs

### Outline Button
```
border: 2px solid var(--primary)
text: var(--primary), 13-14px, uppercase, tracking-wider
padding: 12px 32px
hover: background → var(--primary), text → white
transition: all 200ms ease
```

### Filled Button (same padding, different rest state)
```
background: var(--primary), text: white
hover: background → var(--primary-dark)
```

### Social Icon Circle
```
size: 44×44px, border-radius: 50%
background: var(--dark), icon: white 18px
hover: scale(1.08), background → var(--primary)
transition: all 200ms ease
```

### Filter Pill
```
default: border 1px var(--border), text var(--text-secondary), px-4 py-2, rounded-full, 14px
active: background var(--primary), text white, border var(--primary)
hover (inactive): border var(--primary), text var(--primary)
transition: all 150ms ease
```

### Project Card
```
background: var(--surface)
border: 1px solid var(--border)
border-radius: 8px
hover: translateY(-4px), shadow-lg
transition: transform 300ms ease, box-shadow 300ms ease

image wrapper: aspect-[16/10], overflow-hidden
image hover: scale(1.03), transition 400ms ease

category pill: absolute top-3 left-3, bg white/80 backdrop-blur-sm,
  text-primary, 12px, px-2 py-1, rounded-full
```

### Writing Card (Instagram Grid)
```
aspect-ratio: 1/1
overflow: hidden
cursor: pointer
no border-radius (edge-to-edge grid)

overlay: absolute inset-0, bg-black/0
hover overlay: bg-black/40, transition 300ms

centered title: white, 14px sans, opacity 0 → 1 on hover
no type pill, no bottom bar
```

### Project Detail Modal
```
backdrop: fixed inset-0, bg-black/70 backdrop-blur-sm, z-100
click backdrop to close

inner panel: bg-surface, rounded-xl, max-w-6xl, shadow-2xl, animate-fade-in-up
left: aspect-[4/3] lg:h-[600px] image, object-cover
right: p-8–10, category pill, title (serif 3xl–4xl), description, tech stack pills, external link

close button: top-4 right-4, 40×40px circle, bg-dark/80, X icon
```

### Writing Modal (Instagram Style)
```
backdrop: fixed inset-0, bg-black/85 backdrop-blur-sm, z-100
click backdrop to close

inner: max-w-lg, centered, animate-fade-in-up
image area: bg-black, rounded-t-lg, aspect-square, object-contain
  close button: top-3 right-3, 32×32px circle, bg-white/20
caption area: bg-white, rounded-b-lg, p-4
  title: serif 18px, font-semibold, mb-1
  type: 11px uppercase tracking-wider, text-primary, mb-3
  body: 14px sans, text-secondary, whitespace-pre-line

close triggers: Escape key, backdrop click, X button
```

---

## Layout & Responsive Breakpoints

| Breakpoint | Width | Grid | Padding |
|------------|-------|------|---------|
| Mobile | < 640px | 1 col | py-16, px-4 |
| Tablet | 640–1024px | 2 col | py-20, px-6 |
| Desktop | > 1024px | 3 col | py-32, px-6 |

Container: `max-w-5xl mx-auto` at all breakpoints — centering never breaks.

Section order (single page): Nav → Home (hero + intro combined) → Projects → Creative → Footer

---

## Animation Contract

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Project cards | Hover | translateY(-4px) + shadow-lg | 300ms | ease |
| Card image | Hover | scale(1.03) | 500ms | ease |
| Writing image | Hover | scale(1.05) | 500ms | ease |
| Writing overlay | Hover | bg-black/0 → bg-black/40 | 300ms | ease |
| Hover title text | Hover | opacity 0→1 | 300ms | ease |
| Filter grid | Pill click | opacity 0→1 on items | 300ms | ease |
| Modal appear | Click | fadeInUp (opacity 0→1, translateY 20→0) | 600ms | ease-out |
| Buttons | Hover | bg fill | 200ms | ease |
| Social circles | Hover | scale(1.1) + color | 200ms | ease |

**Rule:** Nothing animates faster than 150ms (too snappy) or slower than 700ms (too sluggish) for user-triggered events.

---

## Interaction Patterns

### Scroll-Spy Navigation
- 4 sections have `id` anchors: `home`, `projects`, `creative`, `contact`
- IntersectionObserver with `threshold: 0.3` and `-64px` top root margin determines active section
- Nav link for active section gets `color: primary`
- Clicking a link triggers `element.scrollIntoView({ behavior: 'smooth' })`

### Mobile Navigation
- Hamburger icon (3 lines → X) at < 768px
- Menu slides down below nav bar, full width
- Links listed vertically, same smooth-scroll behavior
- Menu closes on any link click or outside click

### Project Filter
- Filter state lives in `ProjectGrid.tsx` React component
- "Show All" returns unfiltered list
- Filtered items: display those matching `project.category === activeFilter`
- Transition: items fade out, list updates, items fade in (300ms each)
- No URL change — purely client-side state

### Project Detail Modal
- State: `selectedProject: Project | null` in `ProjectGrid.tsx`
- Click card → set selected → `ProjectDetail.tsx` renders as fixed overlay
- Left half: large project image; right half: category, title, description, tech stack, link
- Backdrop click or X button closes modal
- ESC key not wired (rely on X button and backdrop click)

### Writing Grid + Modal (Instagram Style)
- State: `selected: Writing | null` in `WritingGrid.tsx`
- Tight 3-column grid, `gap-0` — no gaps between square image tiles
- Hover: image scales 1.05 + semi-transparent overlay + centered title fades in
- Click → modal with black background image top (square, `object-contain`) + white caption card below
- Caption shows `fullText` (falls back to `excerpt`)
- Escape key and backdrop click close modal
- No routing change — stays on same page

---

## Accessibility Notes

- All `<img>` elements have descriptive `alt` text
- Buttons and links have visible focus rings (`:focus-visible { outline: 2px solid var(--primary); }`)
- Modal traps focus and restores on close
- Color contrast: primary `#4A7C6F` on white bg passes AA for large text; muted text `#718096` used for decorative/supplementary content only
- Skip link: `<a href="#home" class="sr-only focus:not-sr-only">Skip to content</a>` in Layout

---

## Image Specs (Reference)

| Context | Aspect | Recommended size | Format |
|---------|--------|-----------------|--------|
| Headshot | 1:1 square | 800×800px | JPG |
| Project thumbnail | 16:10 | 1600×1000px | JPG/PNG |
| Writing preview | 1:1 square | 800×800px | JPG/PNG |
| Fallback (no image) | — | CSS background color | — |

All images served from `public/images/`. No image CDN required for MVP.
