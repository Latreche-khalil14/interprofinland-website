/**
 * Unit tests for date formatting utilities
 */

import { describe, it, expect } from 'vitest';
import { formatDate, formatDateShort, isPast, isFuture } from '../../src/utils/formatDate';

describe('formatDate', () => {
  it('should format date to long format', () => {
    const date = new Date('2026-08-20');
    const formatted = formatDate(date);
    expect(formatted).toContain('2026');
    expect(formatted).toContain('August');
  });

  it('should handle string input', () => {
    const formatted = formatDate('2026-08-20');
    expect(formatted).toContain('2026');
  });
});

describe('formatDateShort', () => {
  it('should format date to short format', () => {
    const date = new Date('2026-08-20');
    const formatted = formatDateShort(date);
    expect(formatted).toContain('2026');
    expect(formatted).toContain('Aug');
  });
});

describe('isPast', () => {
  it('should return true for past dates', () => {
    const pastDate = new Date('2020-01-01');
    expect(isPast(pastDate)).toBe(true);
  });

  it('should return false for future dates', () => {
    const futureDate = new Date('2099-01-01');
    expect(isPast(futureDate)).toBe(false);
  });
});

describe('isFuture', () => {
  it('should return true for future dates', () => {
    const futureDate = new Date('2099-01-01');
    expect(isFuture(futureDate)).toBe(true);
  });

  it('should return false for past dates', () => {
    const pastDate = new Date('2020-01-01');
    expect(isFuture(pastDate)).toBe(false);
  });
});
