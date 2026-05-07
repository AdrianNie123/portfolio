# CLAUDE.md — Adrian Nie Portfolio

## Project Overview

Single-page personal portfolio built with Astro 5 + React 19 + Tailwind CSS v4. Showcases data science / ML projects and creative writing. Deployed automatically to Netlify on every push to `main`.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (zero-JS by default, component islands) |
| Styling | Tailwind CSS v4 (`@theme` tokens in `global.css`) |
| Interactivity | React 19 islands (`client:load`) |
| Animation | Native Canvas 2D only — no Framer Motion, GSAP, etc. |
| Icons | Lucide React |
| Fonts | Google Fonts: Playfair Display (serif) + Inter (sans) |
| Hosting | Netlify (auto-deploy from GitHub `main`) |

---

## Dev Commands

```bash
npm install       # install deps (run once, or after package.json changes)
npm run dev       # dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## File Map

### User-managed (content only — edit freely)
```
src/data/projects.json     # add/edit projects
src/data/writing.json      # add/edit creative writing pieces
src/data/timeline.json     # add/edit career milestones
public/images/             # drop in headshot + project thumbnails
public/resume.pdf          # replace with updated resume
```

### Claude-managed (component source — edit with care)
```
src/types.ts               # TypeScript interfaces
src/layouts/Layout.astro   # HTML shell, fonts, meta
src/pages/index.astro      # page structure (sections)
src/styles/global.css      # Tailwind @theme tokens, animations
src/components/            # all UI components
```

### Config (do not touch without discussing)
```
astro.config.mjs
package.json
netlify.toml
tsconfig.json
```

---

## Coding Conventions

- **Tailwind tokens**: always use `--color-primary`, `--color-bg`, etc. from `@theme`. Never hardcode hex values in components.
- **React islands**: only use `client:load` for components that need browser APIs (Canvas, IntersectionObserver, state). Pure display components stay as `.astro`.
- **No heavy libraries**: animation is CSS + Canvas only. Do not add Framer Motion, GSAP, Three.js, or similar.
- **TypeScript**: all `.tsx` files must type their props using interfaces from `src/types.ts`. No `any`.
- **Images**: use `object-cover` on all `<img>` tags. Aspect ratios enforced by wrapper divs, not the img element.
- **Accessibility**: every interactive element needs a focus ring. Images need `alt` text. Modal needs `role="dialog"` and Escape-key close.

---

## Content Update Workflow

1. Add image to `public/images/projects/` or `public/images/writing/`
2. Edit the relevant JSON in `src/data/`
3. `git add . && git commit -m "add: [project name]" && git push`
4. Netlify auto-deploys in ~60 seconds

See `USER_GUIDE.md` for image specs and JSON field reference.

---

## Design System Quick Reference

- Primary: `#5A8C7A` (sage green)
- Background: `#FAFAF8` (warm off-white)
- Dark sections: `#2D2D2D`
- Serif font: Playfair Display (headings)
- Sans font: Inter (body)
- Max content width: `max-w-5xl` (1024px)
- Section padding: `py-24 md:py-32`

Full design system → `UI_UX.md`
Voice & copy guidelines → `voice.md`
