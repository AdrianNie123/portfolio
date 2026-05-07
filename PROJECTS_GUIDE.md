# Projects Guide

How to add a new project writeup. Every project needs two things: an entry in `src/data/projects.json` and an MDX file at `src/content/projects/{slug}.mdx`.

---

## 1. Add the JSON entry

Open `src/data/projects.json` and add a new object. Copy this template:

```json
{
  "id": "your-project-slug",
  "slug": "your-project-slug",
  "title": "Full Project Title",
  "category": "Econometrics",
  "description": "One sentence shown on the grid card. Specific — include the core finding or method.",
  "techStack": ["Python", "pandas", "statsmodels", "FRED API", "Streamlit"],
  "image": "/images/projects/your-project-slug/main-chart.png",
  "link": "https://github.com/AdrianNie123/your-repo",
  "featured": true,
  "hasWriteup": true,
  "palette": "paper",
  "year": "2025",
  "references": [
    {
      "citation": "Author, A. (Year). Title. Journal, Volume(Issue), Pages.",
      "url": "https://arxiv.org/abs/..."
    }
  ]
}
```

**Field notes:**
- `category` — pick one: `Econometrics`, `Regulatory`, `Causal Inference`, `ML`, `Visualization`, `Policy`, `Dashboard`
- `techStack` — list every library, data source, and tool you actually used. Shown as chips under the title on the detail page. The conformal project uses: `["Python", "Statsmodels", "Streamlit", "Plotly", "FRED API", "NBER Data"]`
- `palette` — `"paper"` (academic/regulatory, warm white) or `"deep-navy"` (time series/ML, dark)
- `hasWriteup: true` — required to generate the detail page. If false, the card opens a modal instead
- `references` — array of `{ citation, url? }` objects. `url` is optional

---

## 2. Write the MDX file

Create `src/content/projects/{slug}.mdx`. Use this exact template:

```mdx
---
---

import PullQuote from '@/components/project/PullQuote.astro';
import MethodList from '@/components/project/MethodList.astro';
import Chart from '@/components/project/Chart.astro';
import Caveats from '@/components/project/Caveats.astro';

<PullQuote>
One sentence. The sharpest finding — with a number if you have one. The conformal project opens with: "Gaussian prediction intervals undercover by 15–20 percentage points during recessions." The utilities project opens with the 3% validation and the $1.40 billion decomposition. Lead with what you found, not what you did.
</PullQuote>

<MethodList>

- What you built and how. Specific enough to reproduce. Include the key design decisions — why you chose this method, what you implemented from scratch versus used off the shelf.
- Data assembly: where it came from, how many observations, what the panel looks like. Name the source explicitly (FERC Form 1, EIA-861, FRED series IDs).
- Evaluation: how you measured whether the thing worked. Honest expanding-window, train/calibration/test split — not just in-sample fit.
- Output or interface: what the deliverable is (dashboard, notebook, table). What makes it legible to someone outside the project.

</MethodList>

<Chart
  src="/images/projects/your-project-slug/main-result.png"
  caption="Caption that explains what the chart shows and why it matters — not just what the axes are."
/>

<Chart
  src="/images/projects/your-project-slug/secondary-result.png"
  caption="Second chart if needed. Three charts maximum."
/>

## Methodology

Plain prose. This is where you explain the statistical logic: why the estimator works, what the identifying assumption is, where the guarantee comes from. Write it like you're explaining to a smart reader who knows math but hasn't read the paper. Cite the key results by name (Proposition 1 of Angelopoulos & Bates, OLS Frisch-Waugh-Lovell, etc.) but don't just list citations — use them.

Cover: the data structure, the model specification, how the evaluation is set up, and how you validated the main result. For the conformal project this section explains the rolling split-conformal calibration procedure and the finite-sample quantile correction. For the utilities project it explains the revenue requirement model parameterization and the OLS cost-driver regression.

One to three paragraphs. Not longer.

<Caveats>
What the model doesn't do — be specific. What would break the result. What a next version would need to include. The utilities project notes it doesn't estimate distributional impact on customers and names the data source that would be needed (LEAD Tool, ZIP-code consumption from EIA). Don't bury limitations, and don't overstate them. One paragraph is usually enough.
</Caveats>
```

---

## 3. Add images

Drop chart images in `public/images/projects/{slug}/`. Reference them in MDX as `/images/projects/{slug}/filename.png`. PNG works best. Aim for 1200px wide minimum.

The detail page renders them at full column width (760px max), so captions do the work of explaining — the image just needs to be clear at that size.

---

## 4. Component reference

| Component | Use it for |
|-----------|-----------|
| `<PullQuote>` | Opening sentence — the single sharpest finding |
| `<MethodList>` | 3–5 bullet points of what you built and how |
| `<Chart src caption>` | Figures with explanatory captions (1–3 per writeup) |
| `## Methodology` | Plain prose on the statistical logic (plain Markdown h2, no component) |
| `<Caveats>` | Honest limitations and open questions |

`StackChips` and `References` are rendered automatically from the JSON entry — you don't add them in the MDX.

---

## 5. Writing notes

**Be specific.** "Landed within 3% of the CPUC's final decisions" is better than "achieved high accuracy." "Gaussian intervals undercover by 15–20 percentage points during recessions" is better than "performed poorly under stress."

**Name your data.** FERC Form 1, EIA-861, FRED series IDs, NBER recession dates. Readers should be able to replicate.

**Don't hedge findings you actually have.** If R² = 0.93, say R² = 0.93. If the post-2020 coefficient isolates a structural shift, say that.

**Name limitations you actually have.** The utilities writeup notes the 3% validation is one point, not a generalization guarantee. The conformal writeup notes intervals are wider than a well-specified parametric model. Honest caveats build credibility; vague ones waste space.

**Methodology prose, not bullet points.** The `## Methodology` section is prose — it's where the statistical logic lives. The `<MethodList>` bullets cover what you built; the methodology section covers why it works.
