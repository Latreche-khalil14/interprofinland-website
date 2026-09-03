/**
 * Performance Monitoring Utilities
 * Web Vitals tracking and performance metrics
 */

export interface WebVitalsMetric {
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

/**
 * Thresholds for Web Vitals (good/needs-improvement/poor)
 */
const THRESHOLDS = {
  LCP: [2500, 4000], // Largest Contentful Paint (ms)
  FID: [100, 300], // First Input Delay (ms) - deprecated, use INP
  INP: [200, 500], // Interaction to Next Paint (ms)
  CLS: [0.1, 0.25], // Cumulative Layout Shift (score)
  FCP: [1800, 3000], // First Contentful Paint (ms)
  TTFB: [800, 1800], // Time to First Byte (ms)
};

/**
 * Get rating based on value and thresholds
 */
export function getRating(
  metricName: keyof typeof THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = THRESHOLDS[metricName];
  if (!thresholds || thresholds.length !== 2) return 'poor';
  
  const good = thresholds[0] as number;
  const poor = thresholds[1] as number;
  
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Log Web Vitals to console (development)
 */
export function logWebVitals(metric: WebVitalsMetric): void {
  if (import.meta.env.DEV) {
    const color =
      metric.rating === 'good'
        ? 'color: green'
        : metric.rating === 'needs-improvement'
          ? 'color: orange'
          : 'color: red';

    console.log(
      `%c${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`,
      color
    );
  }
}

/**
 * Send Web Vitals to analytics
 */
export function sendToAnalytics(metric: WebVitalsMetric): void {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
    });
  }

  // Send to custom analytics endpoint
  const endpoint = import.meta.env['PUBLIC_ANALYTICS_ENDPOINT'];
  if (endpoint && typeof endpoint === 'string') {
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
      keepalive: true,
    }).catch((error) => {
      console.error('Failed to send metric to analytics:', error);
    });
  }
}

/**
 * Initialize Web Vitals tracking
 * Usage: Add this to your client-side scripts
 */
export async function initWebVitals(): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import('web-vitals');

    const handleMetric = (metric: any) => {
      const webVitalsMetric: WebVitalsMetric = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType || 'navigate',
      };

      logWebVitals(webVitalsMetric);
      sendToAnalytics(webVitalsMetric);
    };

    onCLS(handleMetric);
    onFCP(handleMetric);
    onINP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  } catch (error) {
    console.error('Failed to initialize Web Vitals:', error);
  }
}

/**
 * Mark performance metrics
 */
export function markPerformance(name: string): void {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(name);
  }
}

/**
 * Measure performance between two marks
 */
export function measurePerformance(
  name: string,
  startMark: string,
  endMark: string
): number | null {
  if (typeof performance !== 'undefined' && performance.measure) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      return measure ? measure.duration : null;
    } catch (error) {
      console.error('Failed to measure performance:', error);
      return null;
    }
  }
  return null;
}

/**
 * Get navigation timing
 */
export function getNavigationTiming() {
  if (typeof performance === 'undefined' || !performance.getEntriesByType) {
    return null;
  }

  const [navigation] = performance.getEntriesByType(
    'navigation'
  ) as PerformanceNavigationTiming[];

  if (!navigation) return null;

  return {
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    request: navigation.responseStart - navigation.requestStart,
    response: navigation.responseEnd - navigation.responseStart,
    dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    load: navigation.loadEventEnd - navigation.loadEventStart,
    total: navigation.loadEventEnd - navigation.fetchStart,
  };
}

/**
 * Get resource timing summary
 */
export function getResourceTimingSummary() {
  if (typeof performance === 'undefined' || !performance.getEntriesByType) {
    return null;
  }

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

  const summary = {
    total: resources.length,
    byType: {} as Record<string, number>,
    totalSize: 0,
    totalDuration: 0,
  };

  resources.forEach((resource) => {
    const type = resource.initiatorType;
    summary.byType[type] = (summary.byType[type] || 0) + 1;
    summary.totalSize += resource.transferSize || 0;
    summary.totalDuration += resource.duration;
  });

  return summary;
}

/**
 * Check if user has slow connection
 */
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }

  const connection = (navigator as any).connection;
  if (!connection) return false;

  // Check effective connection type
  const slowTypes = ['slow-2g', '2g', '3g'];
  if (connection.effectiveType && slowTypes.includes(connection.effectiveType)) {
    return true;
  }

  // Check if Save-Data is enabled
  if (connection.saveData === true) {
    return true;
  }

  return false;
}

/**
 * Prefetch URLs for faster navigation
 */
export function prefetchUrls(urls: string[]): void {
  if (typeof document === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Preload critical assets
 */
export function preloadAssets(
  assets: Array<{ href: string; as: string; type?: string }>
): void {
  if (typeof document === 'undefined') return;

  assets.forEach((asset) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset.href;
    link.as = asset.as;
    if (asset.type) {
      link.type = asset.type;
    }
    document.head.appendChild(link);
  });
}
