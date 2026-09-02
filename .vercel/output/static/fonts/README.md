# Fonts Directory

## Required Fonts

This directory should contain self-hosted variable fonts:

### Inter Variable

- **File:** `inter-variable.woff2`
- **Source:** https://fonts.google.com/specimen/Inter
- **License:** Open Font License
- **Weights:** 100-900

### Lora Variable

- **File:** `lora-variable.woff2`
- **Source:** https://fonts.google.com/specimen/Lora
- **License:** Open Font License
- **Weights:** 400-700

## Installation Instructions

1. Download Inter Variable font from Google Fonts
2. Download Lora Variable font from Google Fonts
3. Convert to WOFF2 format if needed
4. Place files in this directory
5. Uncomment font preload links in `src/layouts/Layout.astro`

## Font Subsetting (Optional)

For better performance, subset fonts to Latin characters only:

- Use tools like `glyphhanger` or `fonttools`
- Target character range: U+0000-00FF (Latin)
- Can reduce file size by 30-50%

## Status

⚠️ **TODO:** Download and add font files before production deployment
