/**
 * Image Utility Functions
 * Helper functions for image path conversion and optimization
 */

/**
 * Convert image path to WebP format
 * @param imagePath - Original image path (e.g., '/images/hero.png')
 * @returns WebP path if available, original path otherwise
 */
export function getWebPPath(imagePath: string): string {
  // Check if already WebP
  if (imagePath.endsWith('.webp')) {
    return imagePath;
  }

  // Replace extension with .webp
  const webpPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  return webpPath;
}

/**
 * Generate srcset for responsive images with WebP
 * @param basePath - Base image path without extension
 * @param sizes - Array of widths (e.g., [400, 800, 1200])
 * @returns srcset string
 */
export function generateSrcSet(basePath: string, sizes: number[]): string {
  return sizes
    .map((size) => `${basePath}-${size}w.webp ${size}w`)
    .join(', ');
}

/**
 * Get optimized image path with WebP support and fallback
 * Returns object with webp and fallback paths
 */
export function getOptimizedImagePaths(imagePath: string) {
  return {
    webp: getWebPPath(imagePath),
    fallback: imagePath,
  };
}
