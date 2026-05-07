# Adrian Nie Portfolio

A clean, single-page portfolio built with **Astro 5**, **React**, **Tailwind CSS**, and **TypeScript**. Deployed free on Netlify.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```
src/
  components/     # Reusable UI components
  data/           # JSON data files — EDIT THESE to add content
  layouts/        # Page shell
  pages/          # Routes (single page)
  styles/         # Global CSS
  types.ts        # TypeScript interfaces
public/
  images/         # Static assets (headshot, project thumbs, writing images)
```

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Select your repo, keep default build settings
4. Site goes live on every push to `main`

## Customization

- **Colors**: Edit `src/styles/global.css` → `@theme` block
- **Fonts**: Already using Playfair Display + Inter via Google Fonts
- **Content**: See `USER_GUIDE.md` for adding projects & writing

---

Built with curiosity. Deployed for free.
