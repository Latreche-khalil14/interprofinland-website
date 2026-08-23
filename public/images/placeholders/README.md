# Placeholder Images

## Purpose

This directory contains temporary placeholder images for development and layout testing. These images maintain correct aspect ratios and dimensions to prevent layout shifts when replaced with final client-approved assets.

## Replacement Instructions

### Hero Section

- **Current:** CSS background (gray-200)
- **Replace with:** Professional photo showing diverse professionals collaborating or mentorship scene
- **Aspect ratio:** 4:3
- **Recommended size:** 1200 × 900 px
- **File:** `hero-main.jpg` or `hero-main.webp`
- **Location to update:** `src/pages/index.astro` — HeroSection component `image` prop

### Featured Story

- **Current:** CSS background (gray-200)
- **Replace with:** B&W professional portrait of story subject (Maria)
- **Aspect ratio:** 3:4 (portrait)
- **Recommended size:** 600 × 800 px
- **File:** `story-maria.jpg` or `story-maria.webp`
- **Location to update:** `src/pages/index.astro` — StoryBlock component `personImage` prop

### Magazine Cover

- **Current:** CSS background (gray-200)
- **Replace with:** Magazine Issue #3 cover image
- **Aspect ratio:** 5:7 (standard magazine)
- **Recommended size:** 600 × 840 px
- **File:** `magazine-issue-03.jpg` or `magazine-issue-03.webp`
- **Location to update:** `src/pages/index.astro` — MagazineFeature component `coverImage` prop

## Image Optimization Guidelines

When replacing placeholders:

1. **Format:** Use WebP for modern browsers with JPG fallback
2. **Compression:** Optimize for web (target <150 KB per image)
3. **Dimensions:** Match recommended sizes above to prevent layout shifts
4. **Alt text:** Update with descriptive, meaningful text
5. **Loading:** Hero image uses `loading="eager"`, others use `loading="lazy"`

## Directory Structure

```
public/images/
├── placeholders/          # Temporary (this directory)
│   └── README.md
├── hero/                  # Hero section images (future)
├── stories/               # Story profile photos (future)
├── magazines/             # Magazine covers (future)
├── services/              # Service illustrations (future)
└── team/                  # Team photos (future)
```

## Removal

Once all real images are in place, this `placeholders/` directory can be deleted.
