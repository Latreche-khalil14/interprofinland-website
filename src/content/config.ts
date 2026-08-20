/**
 * Content Collections Configuration
 * Defines all content types with Zod schemas
 * Source: docs/requirements/content-model.md
 */

import { defineCollection, z } from 'astro:content';

/**
 * Service Content Type
 * Service offering descriptions
 */
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(200),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    shortDescription: z.string().min(50).max(200),
    description: z.string().min(150).max(500),
    icon: z.string().optional(),
    image: z.string().optional(),
    targetAudience: z.union([z.string(), z.array(z.string())]).optional(),
    benefits: z.array(z.string()).optional(),
    process: z.array(z.string()).optional(),
    callToAction: z.string().optional(),
    ctaLink: z.string().optional(),
    featured: z.boolean().default(false),
    relatedEvents: z.array(z.string()).optional(),
    relatedStories: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

/**
 * Event Content Type
 * Past and future events, workshops, seminars
 */
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(200),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    description: z.string().min(10).max(2000),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    eventType: z.enum(['workshop', 'seminar', 'networking', 'webinar', 'conference', 'other']),
    location: z.string().optional(),
    address: z.string().optional(),
    locationType: z.enum(['physical', 'online', 'hybrid']).optional(),
    registrationUrl: z.string().url().optional(),
    registrationRequired: z.boolean().default(false),
    capacity: z.number().int().positive().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['upcoming', 'past', 'cancelled']).optional(),
    relatedService: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

/**
 * Magazine Issue Content Type
 * Magazine metadata, covers, and PDFs
 */
const magazinesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    issueNumber: z.number().int().positive(),
    title: z.string().min(1).max(200),
    description: z.string().min(50).max(1000),
    publishedDate: z.coerce.date(),
    coverImage: z.string(),
    pdfUrl: z.string(),
    pdfSize: z.string().optional(),
    pageCount: z.number().int().positive().optional(),
    featured: z.boolean().default(false),
    articles: z
      .array(
        z.object({
          title: z.string(),
          author: z.string(),
          page: z.number().int().positive(),
        })
      )
      .optional(),
    editors: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    seoImage: z.string().optional(),
  }),
});

/**
 * Story Content Type
 * Success stories, testimonials, impact stories
 */
const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(200),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    summary: z.string().min(50).max(300),
    description: z.string().min(150).max(500),
    publishedDate: z.coerce.date(),
    storyType: z
      .enum(['testimonial', 'success-story', 'community-impact', 'career-transformation', 'other'])
      .default('success-story'),
    person: z.string().optional(),
    personRole: z.string().optional(),
    personImage: z.string().optional(),
    quote: z.string().min(50).max(300).optional(),
    featured: z.boolean().default(false),
    relatedService: z.string().optional(),
    relatedProject: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z
      .enum([
        'mentorship-success',
        'professional-development',
        'career-transformation',
        'community-impact',
        'qualification-recognition',
        'other',
      ])
      .optional(),
    image: z.string().optional(),
    seoImage: z.string().optional(),
  }),
});

/**
 * Project Content Type
 * Organizational projects and initiatives
 */
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(200),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    summary: z.string().min(50).max(300),
    description: z.string().min(150).max(500),
    status: z.enum(['active', 'completed', 'planned', 'on-hold']).optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    projectType: z
      .enum([
        'service-delivery',
        'research',
        'advocacy',
        'capacity-building',
        'partnership',
        'other',
      ])
      .optional(),
    objectives: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    partners: z.array(z.string()).optional(),
    relatedServices: z.array(z.string()).optional(),
    relatedStories: z.array(z.string()).optional(),
    externalUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

/**
 * Page Content Type
 * Flexible content pages (About, Community, etc.)
 */
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(200),
    description: z.string().min(1).max(500),
    template: z.enum(['default', 'full-width', 'narrow']).default('default'),
    showTableOfContents: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
    seoImage: z.string().optional(),
  }),
});

/**
 * Partner Content Type (Optional)
 * Partner organizations
 */
const partnersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().min(1).max(200),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    logo: z.string().optional(),
    website: z.string().url().optional(),
    description: z.string().min(50).max(500).optional(),
    relationshipType: z
      .enum(['network-member', 'funding-partner', 'service-partner', 'affiliate', 'other'])
      .optional(),
    status: z.enum(['active', 'past', 'pending']).default('active'),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

// Export collections
export const collections = {
  services: servicesCollection,
  events: eventsCollection,
  magazines: magazinesCollection,
  stories: storiesCollection,
  projects: projectsCollection,
  pages: pagesCollection,
  partners: partnersCollection,
};
