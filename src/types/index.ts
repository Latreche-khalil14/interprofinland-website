/**
 * Global TypeScript type definitions
 */

/**
 * SEO Metadata type for pages
 */
export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  noindex?: boolean;
}

/**
 * Navigation Link type
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Container size variants
 */
export type ContainerSize = 'page' | 'content' | 'narrow' | 'wide';

/**
 * Section spacing variants
 */
export type SectionSpacing = 'sm' | 'md' | 'lg';

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

/**
 * Button size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';
