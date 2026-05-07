export type ProjectPalette = 'paper' | 'deep-navy' | 'field' | 'signal';

export type ProjectCategory =
  | 'Econometrics'
  | 'Regulatory'
  | 'Causal Inference'
  | 'ML'
  | 'Visualization'
  | 'Policy'
  | 'Dashboard';

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface ProjectReference {
  citation: string;
  url?: string;
}

export interface Project {
  // identity
  id: string;
  slug: string;

  // grid card content
  title: string;
  category: ProjectCategory;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  featured: boolean;

  // detail-page integration
  hasWriteup: boolean;
  palette?: ProjectPalette;
  year?: string;

  // visibility
  draft?: boolean;

  // DEPRECATED in V3 — move to MDX body for projects with hasWriteup: true
  /** @deprecated move to MDX body */
  tagline?: string;
  /** @deprecated move to MDX body */
  bullets?: string[];
  /** @deprecated move to MDX body */
  methodology?: string[];
  /** @deprecated move to MDX body */
  screenshots?: ProjectScreenshot[];
  /** @deprecated move to MDX body — or keep in JSON for footer rendering */
  references?: ProjectReference[];
}

export type WritingType = 'Poetry' | 'Prose' | 'Essay';

export interface Writing {
  id: string;
  slug: string;                 // URL segment, e.g. "inheritance"
  title: string;                // displayed on tile (mono) and reading page (serif)
  type: WritingType;
  date: string;                 // ISO 8601, e.g. "2026-04-26"
  excerpt: string;              // shown on tile; for poems, the opening lines; for essays, a 1-2 sentence pull
  hasFullPage: boolean;         // false = render body inline on reading page; true = render MDX from src/content/writing/{slug}.mdx
  body?: string;                // present iff hasFullPage === false. Plain text. Use \n for line breaks within a stanza, \n\n between stanzas.
  coverImage?: string;          // optional, essays only. Path under /public.
  readingTime?: number;         // optional minutes, essays only. Shown in tile overline as "ESSAY · 8 MIN".
}

export interface TimelineEntry {
  year: string;
  title: string;
  organization: string;
  description: string;
}
