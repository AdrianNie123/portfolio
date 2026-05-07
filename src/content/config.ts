import { defineCollection, z } from 'astro:content';

// slug is a reserved field in Astro's content collection API — it's derived
// from the filename and not available via entry.data. We match MDX to JSON
// via entry.id instead. No frontmatter fields are required.
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({}),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = {
  projects: projectsCollection,
  writing: writingCollection,
};
