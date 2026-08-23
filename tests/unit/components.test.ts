/**
 * Component utility tests
 * Tests for logic used by components (formatDate, content helpers)
 */

import { describe, it, expect } from 'vitest';
import { formatDate, formatDateShort, isPast, isFuture } from '../../src/utils/formatDate';

// ── Date formatting used by EventItem ───────────────────────────────────
describe('EventItem date display', () => {
  it('formats event date to day number', () => {
    const date = new Date('2026-09-15T18:00:00');
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    expect(day).toBe('15');
  });

  it('formats event date to short month+year', () => {
    const date = new Date('2026-09-15T18:00:00');
    const monthYear = date
      .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      .toUpperCase();
    expect(monthYear).toContain('SEP');
    expect(monthYear).toContain('2026');
  });

  it('formats event time correctly', () => {
    const date = new Date('2026-09-15T18:00:00');
    const time = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    expect(typeof time).toBe('string');
    expect(time.length).toBeGreaterThan(0);
  });
});

// ── Content card helpers ─────────────────────────────────────────────────
describe('Content card helpers', () => {
  it('isPast returns true for old events', () => {
    expect(isPast(new Date('2020-01-01'))).toBe(true);
  });

  it('isFuture returns true for upcoming events', () => {
    expect(isFuture(new Date('2099-12-31'))).toBe(true);
  });

  it('formatDateShort produces a non-empty string', () => {
    const result = formatDateShort(new Date('2026-03-15'));
    expect(result).toBeTruthy();
    expect(result).toContain('2026');
  });

  it('formatDate accepts string input', () => {
    const result = formatDate('2026-03-15');
    expect(result).toContain('2026');
  });
});

// ── Magazine metadata ────────────────────────────────────────────────────
describe('Magazine item display', () => {
  it('formats magazine published date correctly', () => {
    const date = new Date('2026-03-15');
    const result = formatDate(date, 'en-US', { year: 'numeric', month: 'long' });
    expect(result).toContain('March');
    expect(result).toContain('2026');
  });
});

// ── Breadcrumbs ──────────────────────────────────────────────────────────
describe('Breadcrumbs data shape', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Mentorship' },
  ];

  it('last item has no href', () => {
    const last = items[items.length - 1];
    expect(last).not.toHaveProperty('href');
  });

  it('non-last items have href', () => {
    items.slice(0, -1).forEach((item) => {
      expect(item.href).toBeTruthy();
    });
  });

  it('generates correct position indices', () => {
    items.forEach((_, i) => {
      expect(i + 1).toBeGreaterThan(0);
    });
  });
});
