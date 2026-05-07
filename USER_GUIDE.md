# User Guide: Adding Content to Your Portfolio

This guide covers everything you need to add new projects, writing pieces, and timeline milestones to your portfolio. No code knowledge required — just edit JSON files and drop images into folders.

---

## Table of Contents

1. [The Two-Minute Workflow](#the-two-minute-workflow)
2. [Adding a Data / ML / Econometrics Project](#adding-a-project)
3. [Adding a Creative Writing Piece](#adding-creative-writing)
4. [Creating Project Thumbnails](#creating-project-thumbnails)
5. [Creating Writing Preview Images](#creating-writing-preview-images)
6. [Updating Personal Info](#updating-personal-info)
7. [Deploying Changes](#deploying-changes)
8. [Troubleshooting](#troubleshooting)

---

## The Two-Minute Workflow

Every time you want to add something new, you do exactly this:

```
1. Create your preview image (PNG or JPG)
2. Drop it into public/images/projects/ or public/images/writing/
3. Open the matching JSON file in src/data/
4. Copy an existing entry, paste it, edit the fields
5. Save → git commit → git push → Netlify auto-deploys
```

That's it. The site rebuilds in ~30 seconds.

---

## Adding a Project

### Where Projects Live

- **Data file**: `src/data/projects.json`
- **Images**: `public/images/projects/`

### Step-by-Step

**1. Create your project thumbnail**

This is the image that appears in the portfolio grid. For data/ML/econometrics projects, this should be a **screenshot of your best visualization**.

| Spec | Value |
|------|-------|
| Aspect ratio | **16:10** (e.g., 1600×1000px) |
| Format | JPG (photos) or PNG (charts with transparency) |
| Max file size | ~500KB (compress with [squoosh.app](https://squoosh.app)) |
| Naming | `your-project-name.jpg` (kebab-case, no spaces) |

**2. Drop the image into `public/images/projects/`**

**3. Open `src/data/projects.json`**

You'll see entries like this:

```json
{
  "id": "conformal-forecasting",
  "title": "Conformal Forecasting on FRED Data",
  "category": "Econometrics",
  "description": "Benchmarking conformal prediction methods for macroeconomic time series with interactive FRED data overlays and coverage ribbons.",
  "techStack": ["Python", "Statsmodels", "Plotly", "FRED API"],
  "image": "/images/projects/conformal-forecasting.jpg",
  "link": "https://github.com/yourusername/conformal-forecasting",
  "featured": true
}
```

**4. Add your new project by copying an existing entry and editing these fields:**

| Field | What to put | Example |
|-------|-------------|---------|
| `id` | Unique slug, no spaces | `"neon-econometrics"` |
| `title` | Project name | `"Neon Econometrics Showcase"` |
| `category` | Must match a filter pill | `"Econometrics"`, `"ML"`, `"Visualization"`, or `"Dashboard"` |
| `description` | One sentence, max 20 words | `"A stylized econometric analysis leveraging AI-assisted tooling."` |
| `techStack` | Array of tools used | `["Python", "Matplotlib", "Claude"]` |
| `image` | Path to your image | `"/images/projects/neon-econometrics.jpg"` |
| `link` | GitHub repo or deployed app | `"https://github.com/you/repo"` |
| `featured` | `true` = shows in grid, `false` = hidden | `true` |

**5. Save the file.**

**6. Test locally:** `npm run dev` → check the Projects section.

---

### Project Categories Explained

The filter bar at the top of the Projects section has these pills:

| Category | Use for |
|----------|---------|
| **Econometrics** | Causal inference, regression analysis, time series, forecasting, FRED data, A/B testing, instrumental variables |
| **ML** | Machine learning models, neural networks, classification, clustering, NLP, computer vision, predictive modeling |
| **Visualization** | Static charts, interactive dashboards, D3.js, Plotly, Matplotlib, data art, exploratory viz |
| **Dashboard** | Full applications with UI, Streamlit, Shiny, React dashboards, multi-chart reports |

> **Tip:** If your project spans multiple categories, pick the **primary** one. The description and tech stack will communicate the rest.

---

### What Makes a Good Project Thumbnail

**For econometrics projects:**
- Screenshot your most compelling chart (regression output, forecast ribbon, coefficient plot)
- Use a clean white or light background
- Crop tightly around the visualization — remove IDE chrome, terminal borders, excessive whitespace
- If using Python: `plt.savefig('thumb.png', dpi=150, bbox_inches='tight', facecolor='white')`

**For ML projects:**
- Confusion matrix, ROC curve, feature importance plot, or model architecture diagram
- If it's a pipeline/tool: screenshot the workflow diagram or terminal output
- Dark-themed screenshots can work if they're high contrast

**For visualization projects:**
- The viz IS the thumbnail. Make it full-bleed, no borders, no captions
- Export at high resolution (2x for retina screens)

---

## Adding Creative Writing

### Where Writing Lives

- **Data file**: `src/data/writing.json`
- **Images**: `public/images/writing/`

### The Philosophy

Your creative section uses **images as the entry point**, not text. Each piece is represented by a square preview image (like Instagram). Clicking opens a modal with the full text.

This means: **you create the image, you write the text, both live in the portfolio.**

### Step-by-Step

**1. Create your writing preview image**

This is the square thumbnail that represents your piece. You have three approaches:

| Approach | Best for | How to make |
|----------|----------|-------------|
| **AI-generated art** | Poetry, abstract prose | Midjourney, DALL-E, Stable Diffusion — prompt with mood, color palette, metaphor |
| **Typography design** | Essays, structured pieces | Canva, Figma, or code — title as the visual, minimal background |
| **Photography** | Observational prose, urban pieces | Your own photos, edited to a cohesive palette |

**Image specs:**

| Spec | Value |
|------|-------|
| Aspect ratio | **1:1** (square, e.g., 800×800px) |
| Format | JPG or PNG |
| Max file size | ~300KB |
| Naming | `piece-name.jpg` (kebab-case) |

**2. Drop the image into `public/images/writing/`**

**3. Open `src/data/writing.json`**

You'll see entries like this:

```json
{
  "id": "weight-of-recognition",
  "title": "The Weight of Recognition",
  "type": "Poetry",
  "previewImage": "/images/writing/weight-of-recognition.jpg",
  "excerpt": "On the gravity of being seen, and the lightness of forgetting.",
  "fullText": "We build monuments to the moments we were understood,\nstacking stone upon stone until the tower leans..."
}
```

**4. Add your new piece by copying an existing entry and editing:**

| Field | What to put | Required? |
|-------|-------------|-----------|
| `id` | Unique slug, e.g. `"urban-jungle"` | Yes |
| `title` | Piece title | Yes |
| `type` | `"Poetry"`, `"Prose"`, or `"Essay"` | Yes |
| `previewImage` | Path to square image, e.g. `"/images/writing/urban-jungle.jpg"` | Yes |
| `fullText` | The complete text (shown as the Instagram caption) | Yes |
| `excerpt` | One-line hook — optional fallback if `fullText` is missing | No |

> **Note:** The creative section now uses an Instagram-style grid. Clicking an image opens a modal where `fullText` is shown as the caption below the image. The `excerpt` field is kept for backward compatibility but is not required.

**5. Save the file.**

**6. Test locally.**

---

### Writing the `fullText` Field

This is the text that appears in the modal when someone clicks your piece.

**For poetry:**
Use `\n` for line breaks and `\n\n` for stanza breaks:

```json
"fullText": "We build monuments to the moments we were understood,\nstacking stone upon stone until the tower leans\ninto the clouds, asking the sky to remember\nwhat the ground has already forgiven.\n\nTo be known is to be held —\nbut the hands that hold us\nare made of the same dust\nthat swirls through open windows\non late afternoons."
```

**For prose/essays:**
Write in paragraphs with `\n\n` between them:

```json
"fullText": "The city breathes in diesel and exhales neon. I walk through it like a field biologist...\n\nEvery alley is an ecosystem. Every streetlight, a star."
```

> **Tip:** Write your text in a notes app first, then replace real line breaks with `\n` when pasting into JSON.

---

### Creating Writing Preview Images: Detailed Guide

**Option A: AI Image Generation (Recommended for poetry)**

Use Midjourney, DALL-E 3, or Stable Diffusion with prompts like:

```
Minimalist abstract ink wash painting, sage green and cream palette, 
constellation of faint dots connected by thin lines, soft gradient background, 
ethereal and contemplative mood, high detail, 1:1 aspect ratio
```

```
Cinematic film still, urban alley at dusk, neon reflections on wet pavement, 
moody atmospheric lighting, muted teal and amber tones, grainy texture, 
photorealistic, square composition
```

```
Macro photography of dried flowers and old paper, warm sepia tones, 
soft natural light from the left, shallow depth of field, 
minimalist composition, editorial aesthetic, 1:1
```

**Option B: Typography as Image**

Use Canva (free) or Figma:
1. Create an 800×800px canvas
2. Set background color: `#FAFAF8` (warm off-white) or a muted tone
3. Add your title in Playfair Display (or similar serif)
4. Add a subtle texture or gradient
5. Export as JPG at 80% quality

**Option C: Code-Generated Visuals**

If you want to flex your data viz skills on your writing section too:

```python
import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots(figsize=(8, 8), facecolor='#FAFAF8')
ax.set_facecolor('#FAFAF8')

# Generate abstract pattern
n = 200
x = np.random.rand(n)
y = np.random.rand(n)
colors = np.random.choice(['#5A8C7A', '#3D6B5A', '#888888'], n)
sizes = np.random.randint(20, 100, n)

ax.scatter(x, y, c=colors, s=sizes, alpha=0.3, edgecolors='none')
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.axis('off')

plt.tight_layout(pad=0)
plt.savefig('writing-preview.jpg', dpi=150, bbox_inches='tight', facecolor='#FAFAF8')
```

---

## Creating Project Thumbnails: Detailed Guide

### From Python (Matplotlib / Seaborn / Plotly)

**Matplotlib:**
```python
import matplotlib.pyplot as plt

# Your chart code here...
fig, ax = plt.subplots(figsize=(10, 6.25), facecolor='white')  # 16:10 ratio
# ... plot your data ...

plt.tight_layout()
plt.savefig(
    'public/images/projects/my-project.jpg',
    dpi=150,
    bbox_inches='tight',
    facecolor='white'
)
```

**Plotly (interactive → static image):**
```python
import plotly.io as pio
fig = # your plotly figure
pio.write_image(fig, 'public/images/projects/my-project.jpg', width=1600, height=1000, scale=2)
```

**Seaborn:**
```python
import seaborn as sns
import matplotlib.pyplot as plt

sns.set_style('whitegrid')
fig, ax = plt.subplots(figsize=(10, 6.25))
# ... your seaborn plot ...
plt.tight_layout()
plt.savefig('public/images/projects/my-project.jpg', dpi=150, bbox_inches='tight')
```

### From R (ggplot2)

```r
library(ggplot2)

# Your plot...
ggsave(
  "public/images/projects/my-project.jpg",
  plot = last_plot(),
  width = 10, height = 6.25, dpi = 150,
  bg = "white"
)
```

### From Jupyter / Observable / Dashboard Screenshot

1. Open your viz in the browser
2. Zoom to 125-150% for crisp text
3. Screenshot the relevant area (no browser chrome)
4. Crop to 16:10 in Preview / Photos app
5. Compress with [squoosh.app](https://squoosh.app)

---

## Updating Personal Info

### 1. Name, Email, Social Links

Open `src/pages/index.astro` and find the Home section:

**Name and institution** (left column of the home section):
```astro
<h1 class="font-sans text-3xl md:text-4xl font-semibold ...">
  Adrian Nie
</h1>
<p class="text-text-secondary text-base mt-2">Economics and Data Science</p>
<p class="text-text-muted text-sm mt-1">University of California, Berkeley</p>
```

**Social links** (home section left column and Footer):
```astro
<SocialCircles
  github="https://github.com/YOUR_USERNAME"
  linkedin="https://linkedin.com/in/YOUR_USERNAME"
/>
```

**Email** in Footer (`src/components/Footer.astro`):
```astro
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### 2. Headshot

Replace `public/images/headshot.jpg` with your photo. Keep it square (1:1 ratio, ~800×800px). The home section displays it at 288×288px (desktop) with rounded corners and a subtle shadow.

### 3. Resume

Drop your resume PDF into `public/resume.pdf` and the Resume button in the home section will work automatically.

### 4. Bio Text

Edit the bio paragraphs and Interests list in `src/pages/index.astro` inside the Home section (right column, under "Hello!").

---

## Deploying Changes

### Method A: Git Push (Recommended)

```bash
# After editing JSON files and adding images:
git add .
git commit -m "Add: conformal forecasting project + new poem"
git push origin main

# Netlify auto-deploys in ~30 seconds
```

### Method B: Netlify Drop (No Git)

1. Run `npm run build` locally
2. Drag the `dist/` folder into [netlify.com/drop](https://netlify.com/drop)
3. Get an instant live URL

> **Note:** Drop deployments don't auto-update. Use Git for ongoing work.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Image not showing | Check the path in JSON matches the actual filename (case-sensitive!) |
| New project not in grid | Make sure `featured: true` and the JSON is valid (no trailing commas) |
| Filter pill not working | `category` must exactly match one of: `Econometrics`, `ML`, `Visualization`, `Dashboard` |
| Modal won't open | Check `fullText` uses `\n` not actual line breaks inside JSON |
| Site looks broken | Run `npm run dev` and check browser console for errors |
| Build fails | Make sure all JSON files are valid — use [jsonlint.com](https://jsonlint.com) |
| Changes not live | Check Netlify deploy log — did the push trigger a build? |

---

## Content Workflow Summary

### When you finish a data project:
1. Export/save your best viz as a 16:10 image
2. Drop into `public/images/projects/`
3. Add entry to `src/data/projects.json`
4. `git commit && git push`

### When you write something new:
1. Create a 1:1 square image (AI art, typography, or photo)
2. Drop into `public/images/writing/`
3. Add entry to `src/data/writing.json` with full text
4. `git commit && git push`

---

*Your portfolio is a living document. The less friction between finishing work and publishing it, the more you'll share. This JSON + image workflow is designed to take under 5 minutes per addition.*
