# Project Page Style Guide

This guide governs every project page on the portfolio. The goal is simple: a new project should take ~5 minutes to publish once the work itself is done, and every project should feel like it belongs to the same site without being visually identical.

## Philosophy

Structural consistency, palette flexibility. Every project page uses the same sections in the same order. Within those sections, projects pick from a small set of pre-approved chart palettes that match the subject matter.

Do not force every project into the Conformal aesthetic. The neon-cyan-on-navy look earned its place because the project is about uncertainty under regime shifts. A regulatory rate-case project should feel like a regulatory document. A causal inference project should feel academic. The site is unified by typography, structure, and motion — not by chart color.

---

## File structure

Each project lives in its own folder:

```
/projects/
  /conformal-forecasting/
    index.mdx               # the page content
    meta.json               # card metadata (title, tag, blurb, thumb)
    /charts/                # exported PNG/SVG visualizations
    /assets/                # any other images
```

`meta.json` schema:

```json
{
  "slug": "conformal-forecasting",
  "title": "Conformal Prediction for Macroeconomic Forecasting",
  "tag": "ECONOMETRICS",
  "tag_color": "navy",
  "blurb": "Distribution-free prediction intervals that hold across macroeconomic regimes.",
  "thumbnail": "charts/forecast-ribbon.png",
  "year": "2025",
  "status": "complete",
  "stack": ["Python", "statsmodels", "Plotly", "Streamlit"],
  "palette": "deep-navy"
}
```

---

## Page structure (strict)

Every project page has these sections, in this order. Optional sections are marked.

1. **Tag pill** (uppercase, small caps, top-left of detail panel)
2. **Title** (serif headline, two lines max)
3. **Pull-quote / thesis** (left-bordered block, 2-4 sentences, states the problem and the result)
4. **Methodology bullets** (3-6 bullets, each one technical and specific)
5. **Visualizations** (1-3 charts, each with a caption that says what to look at)
6. **Stack & references** (tech stack chips + paper/source citations)
7. *(Optional)* **What didn't work / honest caveats**
8. *(Optional)* **Repo link / live demo button**

### Section rules

**Tag pill:** One word or two-word category. Uppercase. Use the tag_color from meta.json.

**Title:** Set in the site's serif headline face. Never longer than two lines on desktop.

**Pull-quote:** This is the most important block on the page. It must do three things in 2-4 sentences: state the problem (or the gap), describe the method in plain technical English, and report the headline result with a number. If you cannot do all three, the project is not ready to publish.

Bad pull-quote: "I built a forecasting toolkit using machine learning."
Good pull-quote: "Gaussian prediction intervals undercover by 15-20 percentage points during recessions. I built a distribution-free alternative using conformal prediction and showed it holds — empirically, across four FRED series and three macroeconomic regimes — at 2.85× narrower width than Gaussian baselines for the same coverage target."

**Methodology bullets:** Each bullet should be technical enough that a hiring econometrician would nod, and plain enough that a smart non-specialist could follow. Cite specific methods, papers, or numbers wherever possible. No marketing language. No "leveraged" or "utilized." Past tense, first person, active voice.

**Visualizations:** Every chart needs a caption. The caption tells the reader *what to look at*, not what the chart is. "Forecast ribbon with conformal bands (blue) and Gaussian bounds (dashed red) — misses cluster in recession periods" is correct. "Forecast chart" is not.

**Stack chips:** Small rounded pills with the tool/library name. Limit to 6. If you used Python, you don't need to list pandas separately — pick the libraries that signal what kind of work it is (statsmodels says econometrics, scikit-learn says ML, Streamlit says interactive deliverable).

**References:** Cite the actual paper, dataset, or regulatory document. "FRED via fredapi" is a citation. "Angelopoulos & Bates (2023), Conformal Prediction: A Gentle Introduction" is a citation. "Public data" is not.

**Caveats section:** Optional but encouraged. One paragraph on what you tried that didn't work, what's still wrong, or what the project doesn't claim. This single section does more for credibility than three more bullets of accomplishments.

---

## Typography rules

These never change across projects.

| Element | Face | Weight | Size (desktop) |
|---|---|---|---|
| Page title | Serif headline (Tiempos Headline, GT Sectra, or fallback) | Semibold | 44-52px |
| Section headers | Sans (Söhne, Inter) | Medium | 20px |
| Body | Sans | Regular | 16px |
| Pull-quote | Sans | Regular | 18px, italic optional |
| Captions | Sans | Regular | 13px, muted |
| Code/numbers | Mono (IBM Plex Mono, Berkeley Mono) | Regular | 14px |
| Tag pills | Sans | Medium, uppercase, tracked | 11px |

Numbers in body text and captions should be set in the mono face. This is a quant portfolio; numbers should *look* like numbers.

---

## Palette system

The site has one global UI palette. Each project picks one of four chart palettes for its visualizations. That's the only place color varies.

### Global UI palette (every page, never changes)

```
--bg               #FAFAF7   /* warm off-white, page background */
--bg-elevated      #FFFFFF   /* cards, modals */
--ink              #0F1419   /* primary text */
--ink-muted        #5A6168   /* captions, secondary text */
--ink-subtle       #9CA3AF   /* tertiary, dividers */
--rule             #E5E5E0   /* borders, hairlines */
--accent           #2D5F4F   /* the existing mint, but darker for contrast */
--accent-soft      #E8F0EC   /* pill backgrounds, hover states */
--quote-bar        #2D5F4F   /* left border on pull-quotes */
```

The dark mode of the site (used in modals like the Conformal page) inverts this:

```
--bg-dark          #0A0F1E   /* the conformal navy */
--bg-dark-elevated #131A2E
--ink-dark         #E8ECEF
--ink-dark-muted   #8A92A0
--rule-dark        #1F2740
```

### Chart palettes (pick one per project, declared in meta.json)

**`deep-navy`** — for time series, forecasting, financial data, anything with a "Bloomberg terminal" feel. Used by Conformal.
```
bg:        #0A0F1E
grid:      #1F2740
primary:   #00D4FF   /* electric cyan */
secondary: #FFB347   /* amber */
tertiary:  #B794F4   /* lavender */
neutral:   #5A6168
positive:  #4ADE80
negative:  #F87171
```

**`paper`** — for regulatory, policy, or academic projects. Think FT, Economist, NBER working paper. Use this for the Utilities Rate Case.
```
bg:        #FAFAF7
grid:      #E5E5E0
primary:   #1B3A5C   /* deep navy ink */
secondary: #C4502E   /* terracotta */
tertiary:  #8B7355   /* warm taupe */
neutral:   #5A6168
positive:  #3F6B4A
negative:  #A03A2E
```

**`field`** — for causal inference, applied econ, mobility/inequality work. Earthier, slightly editorial. Use this for Chetty.
```
bg:        #F4F1EA
grid:      #D8D2C4
primary:   #3B5249   /* forest */
secondary: #C77E3F   /* ochre */
tertiary:  #6B7A8F   /* slate */
neutral:   #6B6457
positive:  #5A7A4F
negative:  #A8533C
```

**`signal`** — for ML, distributional analysis, anything with many series or categories. Higher chroma, cleaner. Use this for the TFT quantile regression.
```
bg:        #FFFFFF
grid:      #EDEDED
primary:   #2563EB
secondary: #DC2626
tertiary:  #059669
quaternary: #D97706
quintenary: #7C3AED
neutral:   #6B7280
```

### Rules
- Never mix palettes within one project's charts.
- Captions and chart text are always in the global UI ink color, regardless of palette — so charts in `deep-navy` use light text *inside* the chart, but the caption beneath it is in the page's normal ink.
- All four palettes are colorblind-tested on the primary/secondary pair.

---

## Card layout (projects grid)

Each card on the projects page is built from `meta.json`. Layout:

```
┌─────────────────────────┐
│                         │
│   thumbnail (16:10)     │
│                         │
├─────────────────────────┤
│ [TAG]                   │
│                         │
│ Project Title           │
│ Two lines of blurb      │
│ that previews the work. │
│                         │
│ View Details →          │
└─────────────────────────┘
```

- Thumbnail is always a real chart from the project, never an icon, never a stock image, never an empty placeholder.
- Tag pill uses the `tag_color` from meta.
- Hover state: card lifts 2px, thumbnail scales 1.02. Nothing more.
- Click opens the full project page (or modal — pick one and stick with it across the site).

---

## Motion rules

Keep motion quiet. This is a research portfolio, not a marketing site.

- Page transitions: 200ms ease-out crossfade
- Card hover: 150ms ease-out
- Chart load: 400ms ease-out, stagger by 80ms if multiple charts
- No parallax. No scroll-jacking. No auto-playing video.
- Reduced-motion: respect `prefers-reduced-motion` and disable all transforms.

---

## The 5-minute publish workflow

Once a project is done:

1. Create `/projects/{slug}/` folder.
2. Drop chart exports into `/charts/`. Use the project's chosen palette.
3. Fill in `meta.json`.
4. Copy `_template.mdx` to `index.mdx` and fill in the seven sections.
5. Verify the pull-quote does the three things (problem, method, result with number).
6. Commit. Site auto-builds the new card from `meta.json`.

If step 5 fails, the project is not ready. Go fix the writeup, not the site.

---

## What this guide does not cover

- Photography on the creative side (different system, see CREATIVE_STYLE.md)
- Resume / about page styling (these inherit global UI but don't follow the project structure)
- Long-form essays (these get their own template — closer to a Substack post than a project card)
