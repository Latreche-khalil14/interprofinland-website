/**
 * Date formatting utilities
 */

/**
 * Format a date to a localized string
 * @param date - Date to format
 * @param locale - Locale string (default: 'en-US')
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format a date to short format
 * @param date - Date to format
 * @returns Short formatted date string (e.g., "Aug 20, 2026")
 */
export function formatDateShort(date: Date | string): string {
  return formatDate(date, 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format a date range
 * @param startDate - Start date
 * @param endDate - End date (optional)
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: Date | string, endDate?: Date | string): string {
  const start = formatDate(startDate);

  if (!endDate) {
    return start;
  }

  const end = formatDate(endDate);
  return `${start} - ${end}`;
}

/**
 * Check if a date is in the past
 * @param date - Date to check
 * @returns True if date is in the past
 */
export function isPast(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj < new Date();
}

/**
 * Check if a date is in the future
 * @param date - Date to check
 * @returns True if date is in the future
 */
export function isFuture(date: Date | string): boolean {
  return !isPast(date);
}

/**
 * Get relative time string (e.g., "2 days ago", "in 3 hours")
 * @param date - Date to format
 * @param locale - Locale string (default: 'en-US')
 * @returns Relative time string
 */
export function getRelativeTime(date: Date | string, locale: string = 'en-US'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((dateObj.getTime() - now.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  // Choose appropriate unit
  const absSeconds = Math.abs(diffInSeconds);

  if (absSeconds < 60) {
    return rtf.format(diffInSeconds, 'second');
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(diffInMinutes, 'minute');
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (Math.abs(diffInHours) < 24) {
    return rtf.format(diffInHours, 'hour');
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (Math.abs(diffInDays) < 30) {
    return rtf.format(diffInDays, 'day');
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (Math.abs(diffInMonths) < 12) {
    return rtf.format(diffInMonths, 'month');
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return rtf.format(diffInYears, 'year');
}
