import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should have correct page title and meta', async ({ page }) => {
    await expect(page).toHaveTitle(/About InterProFinland/i);
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('mission');
  });

  test('should display hero section with impact stats', async ({ page }) => {
    // Check hero heading
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Empowering International Professionals');

    // Check impact statistics
    await expect(page.locator('text=1,800+')).toBeVisible();
    await expect(page.locator('text=Community Members')).toBeVisible();
    await expect(page.locator('text=80+')).toBeVisible();
    await expect(page.locator('text=Professions')).toBeVisible();
  });

  test('should display mission and vision statements', async ({ page }) => {
    await expect(page.locator('text=Our Mission')).toBeVisible();
    await expect(page.locator('text=Our Vision')).toBeVisible();
    await expect(page.locator('text=support network')).toBeVisible();
    await expect(page.locator('text=inclusive Finland')).toBeVisible();
  });

  test('should display all 5 core values', async ({ page }) => {
    await expect(page.locator('text=Our Values')).toBeVisible();
    await expect(page.locator('text=Potentiality')).toBeVisible();
    await expect(page.locator('text=Recognition')).toBeVisible();
    await expect(page.locator('text=Professionalism')).toBeVisible();
    await expect(page.locator('text=Growth')).toBeVisible();
    await expect(page.locator('text=Inclusion')).toBeVisible();
  });

  test('should display focus areas section', async ({ page }) => {
    await expect(page.locator('text=Four Pillars of Support')).toBeVisible();
    await expect(page.locator('text=Bridging Qualification Gaps')).toBeVisible();
    await expect(page.locator('text=Building Professional Networks')).toBeVisible();
    await expect(page.locator('text=Understanding Finnish Work Culture')).toBeVisible();
    await expect(page.locator('text=Creating Pathways to Employment')).toBeVisible();
  });

  test('should display recognition section', async ({ page }) => {
    await expect(page.locator('text=European Good Practice')).toBeVisible();
    await expect(page.locator('text=Degree AMPLIFY')).toBeVisible();
    await expect(page.locator('text=ENIIE')).toBeVisible();
  });

  test('should display leadership profiles with images', async ({ page }) => {
    await expect(page.locator('text=Leadership & Team')).toBeVisible();

    // Check CEO
    await expect(page.locator('text=Olivia Kumpula')).toBeVisible();
    await expect(page.locator('text=CEO & Founder')).toBeVisible();
    const ceoImage = page.locator('img[alt="Olivia Kumpula"]');
    await expect(ceoImage).toBeVisible();

    // Check Chairperson
    await expect(page.locator('text=Henriika Ilkko')).toBeVisible();
    await expect(page.locator('text=Chairperson')).toBeVisible();
    const chairImage = page.locator('img[alt="Henriika Ilkko"]');
    await expect(chairImage).toBeVisible();
  });

  test('should display team members with images', async ({ page }) => {
    await expect(page.locator('text=Meet the Team')).toBeVisible();

    // Check all 6 team members
    const teamMembers = [
      'Matthew Bowen',
      'Meha Bouazizi',
      'Temitope Popoola',
      'Bruna Eklund',
      'Pooja Mattoo',
      'Gabriel Ebah',
    ];

    for (const member of teamMembers) {
      await expect(page.locator(`text=${member}`)).toBeVisible();
      const memberImage = page.locator(`img[alt="${member}"]`);
      await expect(memberImage).toBeVisible();
    }
  });

  test('should display our story section', async ({ page }) => {
    await expect(page.locator('text=How InterProFinland Began')).toBeVisible();
    await expect(page.locator('text=Olivia Kumpula')).toBeVisible();
    await expect(page.locator('text=2021')).toBeVisible();
  });

  test('should display partnership section', async ({ page }) => {
    await expect(page.locator('text=Partnership & Collaboration')).toBeVisible();
    await expect(page.locator('text=European Networks')).toBeVisible();
    await expect(page.locator('text=Educational Institutions')).toBeVisible();
    await expect(page.locator('text=Regional Organizations')).toBeVisible();
  });

  test('should have working internal links', async ({ page }) => {
    // Services link
    const servicesLink = page.locator('a[href="/services"]').first();
    await expect(servicesLink).toBeVisible();

    // Contact links
    const contactLinks = page.locator('a[href="/contact"]');
    await expect(contactLinks.first()).toBeVisible();

    // Degree AMPLIFY link
    const degreeAmplifyLink = page.locator('a[href="/projects/degree-amplify"]');
    await expect(degreeAmplifyLink).toBeVisible();
  });

  test('should have working external link', async ({ page }) => {
    const externalLink = page.locator('a[href*="oliviakumpula.com"]');
    await expect(externalLink).toBeVisible();
    await expect(externalLink).toHaveAttribute('target', '_blank');
    await expect(externalLink).toHaveAttribute('rel', /noopener/);
  });

  test('should display CTA section', async ({ page }) => {
    await expect(page.locator('text=Ready to Connect')).toBeVisible();
    const ctaButton = page.locator('text=Get in Touch');
    await expect(ctaButton).toBeVisible();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    const h1 = await page.locator('h1').count();
    expect(h1).toBe(1);

    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(3);
  });

  test('should have all images with alt text', async ({ page }) => {
    const images = await page.locator('img').all();

    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(0);
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    // Tab through focusable elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Check if focus is visible
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBeTruthy();
  });

  test('should have proper focus indicators', async ({ page }) => {
    const firstLink = page.locator('a').first();
    await firstLink.focus();

    const outlineStyle = await firstLink.evaluate(
      (el) => window.getComputedStyle(el).outlineStyle
    );
    expect(outlineStyle).not.toBe('none');
  });

  test('should load hero image', async ({ page }) => {
    const heroImage = page.locator('.about-hero-img');
    await expect(heroImage).toBeVisible();

    // Check if image loaded successfully
    const naturalWidth = await heroImage.evaluate((img: HTMLImageElement) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test('should display on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Check that content is still visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Our Mission')).toBeVisible();
    await expect(page.locator('text=Leadership & Team')).toBeVisible();
  });

  test('should display on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Our Values')).toBeVisible();
  });

  test('should have responsive layout', async ({ page }) => {
    // Desktop
    await page.setViewportSize({ width: 1440, height: 900 });
    let heroWidth = await page.locator('.about-hero').boundingBox();
    expect(heroWidth?.width).toBeLessThanOrEqual(1440);

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    heroWidth = await page.locator('.about-hero').boundingBox();
    expect(heroWidth?.width).toBeLessThanOrEqual(375);
  });
});
