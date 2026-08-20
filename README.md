# InterProFinland Website

Modern, accessible, and fast website for InterProFinland - supporting international professionals in Finland.

**Status:** Phase 5 Complete - Frontend Foundation ✅

---

## Project Overview

**Organization:** InterProFinland  
**Project:** Website Redesign (V1)  
**Technology:** Astro + TypeScript + Tailwind CSS  
**Architecture:** Static-first, dynamic-ready

### Key Features (V1)

- 🚀 Fast static site generation
- ♿ WCAG 2.2 AA accessibility
- 📱 Mobile-first responsive design
- 🎨 Editorial design system (Inter + Lora typography)
- 📝 Type-safe content with Zod validation
- 🔍 SEO optimized
- 📚 Magazine archive with PDF downloads

---

## Quick Start

### Prerequisites

- Node.js >= 20.0.0
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Development server runs at: **http://localhost:4321**

---

## Available Commands

| Command            | Description               |
| ------------------ | ------------------------- |
| `npm run dev`      | Start development server  |
| `npm run build`    | Build for production      |
| `npm run preview`  | Preview production build  |
| `npm run check`    | TypeScript type checking  |
| `npm run lint`     | Check code with ESLint    |
| `npm run lint:fix` | Fix ESLint errors         |
| `npm run format`   | Format code with Prettier |
| `npm test`         | Run unit tests            |
| `npm run test:e2e` | Run E2E tests             |

See [`docs/implementation/development-commands.md`](docs/implementation/development-commands.md) for complete command reference.

---

## Project Structure

```
InterProFinland/
├── docs/                   # Project documentation
│   ├── discovery/          # Phase 1 - Discovery
│   ├── requirements/       # Phase 2 - Requirements
│   ├── ux/                 # Phase 3 - UX
│   ├── design/             # Phase 4 - Visual Design
│   └── implementation/     # Phase 5+ - Implementation
├── public/                 # Static assets
│   └── fonts/              # Self-hosted fonts
├── src/
│   ├── components/         # Reusable components
│   │   ├── layout/         # Header, Footer, etc.
│   │   ├── ui/             # Buttons, Cards, etc.
│   │   └── sections/       # Page sections
│   ├── content/            # Content Collections
│   │   ├── services/       # Service content
│   │   ├── events/         # Event content
│   │   ├── magazines/      # Magazine metadata
│   │   ├── stories/        # Success stories
│   │   ├── projects/       # Project content
│   │   ├── pages/          # Flexible pages
│   │   └── partners/       # Partner content
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript types
└── tests/                  # Test files
    ├── unit/               # Unit tests (Vitest)
    └── e2e/                # E2E tests (Playwright)
```

See [`docs/implementation/project-structure.md`](docs/implementation/project-structure.md) for detailed structure documentation.

---

## Design System

### Typography

- **Display:** Inter Variable (modern sans-serif)
- **Body:** Lora Variable (warm serif)
- **Scale:** Responsive (clamp for fluid sizing)

### Colors

- **Primary:** Deep Teal (#006B7D) - Trust, professionalism
- **Secondary:** Warm Terra Cotta (#C85A3F) - Warmth, community
- **Neutrals:** Warm grays for editorial sophistication

### Spacing

- **Base:** 8px spacing system
- **Scale:** 4px to 128px
- **Responsive:** Fluid section spacing

See design documentation in [`docs/design/`](docs/design/) for complete design system specification.

---

## Content Management

Content is managed via **Astro Content Collections** with type-safe Zod schemas.

### Content Types

1. **Services** - Service offerings
2. **Events** - Past and future events
3. **Magazines** - Magazine issues (metadata + PDFs)
4. **Stories** - Success stories and testimonials
5. **Projects** - Organizational projects
6. **Pages** - Flexible content pages
7. **Partners** - Partner organizations

### Adding Content

Create Markdown files in `src/content/[type]/`:

```markdown
---
title: 'Service Title'
slug: 'service-slug'
description: 'Service description'
featured: true
---

# Service Content

Content in Markdown...
```

See [`docs/requirements/content-model.md`](docs/requirements/content-model.md) for complete content specifications.

---

## Development Workflow

### Creating Components

```typescript
// src/components/ui/Button.astro
---
interface Props {
  variant?: 'primary' | 'secondary';
  href?: string;
}

const { variant = 'primary', href } = Astro.props;
---

<a href={href} class={`button button-${variant}`}>
  <slot />
</a>
```

### Querying Content

```typescript
---
import { getCollection } from 'astro:content';

const services = await getCollection('services');
const featured = services.filter(s => s.data.featured);
---
```

### Using Design Tokens

```css
.my-component {
  color: var(--color-primary-500);
  font-family: var(--font-display);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

---

## Testing

### Unit Tests (Vitest)

```bash
# Run once
npm test

# Watch mode
npm run test:watch
```

### E2E Tests (Playwright)

```bash
# Install browsers (first time)
npx playwright install

# Run tests
npm run test:e2e

# UI mode
npm run test:e2e:ui
```

---

## Code Quality

### TypeScript

- Strict mode enabled
- No implicit any
- Path aliases (`@/*` → `src/*`)

### ESLint

- TypeScript strict rules
- Astro plugin configured
- Auto-fix available

### Prettier

- Consistent code formatting
- Astro plugin for `.astro` files

---

## Deployment

### Build

```bash
npm run build
```

Output directory: `dist/`

### Preview

```bash
npm run preview
```

### Deploy to Cloudflare Pages

1. Connect repository to Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Environment variables: Configure in Cloudflare dashboard

See [`docs/implementation/frontend-foundation.md`](docs/implementation/frontend-foundation.md) for deployment details.

---

## Project Phases

- ✅ **Phase 1:** Discovery & Audit
- ✅ **Phase 2:** Requirements & Information Architecture
- ✅ **Phase 3:** UX & Wireframes
- ✅ **Phase 4:** Visual Design System
- ✅ **Phase 5:** Frontend Foundation
- ⏭️ **Phase 6:** Component Development (Next)
- 🔜 **Phase 7:** Page Development
- 🔜 **Phase 8:** Content Migration
- 🔜 **Phase 9:** Testing & QA
- 🔜 **Phase 10:** Deployment

---

## Documentation

### Implementation Docs

- [Frontend Foundation](docs/implementation/frontend-foundation.md) - Phase 5 complete documentation
- [Project Structure](docs/implementation/project-structure.md) - Detailed structure guide
- [Development Commands](docs/implementation/development-commands.md) - Command reference
- [Review Gate](docs/implementation/FRONTEND-FOUNDATION-REVIEW-GATE.md) - Phase 5 validation

### Design Docs

- [Design Tokens](docs/design/design-tokens.md) - Complete token system
- [Typography](docs/design/typography.md) - Typography specification
- [Color System](docs/design/color-system.md) - Color palette and usage
- [Layout Grid](docs/design/layout-grid.md) - Grid system specification

### Requirements Docs

- [Content Model](docs/requirements/content-model.md) - Content type specifications
- [Information Architecture](docs/requirements/information-architecture.md) - Site structure
- [Functional Requirements](docs/requirements/functional-requirements.md) - Feature requirements

---

## Tech Stack

### Core

- **Astro** 4.16.18 - Static site generator
- **TypeScript** 5.7.2 - Type safety
- **Tailwind CSS** 3.4.17 - Utility-first CSS
- **Zod** 3.24.1 - Schema validation

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **Playwright** - E2E testing

---

## Environment Variables

Copy `.env.example` to `.env`:

```bash
# API Keys
RESEND_API_KEY=your_resend_api_key_here

# Site Configuration
PUBLIC_SITE_URL=http://localhost:4321
```

**Note:** `PUBLIC_*` variables are exposed to client-side code.

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Accessibility

- WCAG 2.2 Level AA compliance target
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- `prefers-reduced-motion` support

---

## Performance

### Targets

- **LCP:** < 2.5s
- **INP:** < 200ms
- **CLS:** < 0.1

### Optimizations

- Static HTML generation
- Self-hosted fonts
- Responsive images
- Minimal JavaScript
- Asset optimization

---

## Contributing

### Development Guidelines

1. **Follow project structure** - See `docs/implementation/project-structure.md`
2. **Use TypeScript strict mode** - No implicit any
3. **Write tests** - Unit tests for utilities, E2E for features
4. **Follow design system** - Use design tokens
5. **Document changes** - Update docs as needed

### Before Committing

```bash
npm run check    # Type checking
npm run lint     # Code linting
npm run format   # Code formatting
npm test         # Unit tests
npm run build    # Production build
```

---

## License

[Add license information here]

---

## Contact

**Organization:** InterProFinland  
**Website:** https://www.interprofinland.fi/  
**Representative:** Olivia Kumpula, CEO

---

## Status

**Current Phase:** Phase 5 Complete ✅  
**Next Phase:** Phase 6 - Component Development  
**Build Status:** ✅ Passing  
**Tests:** ✅ 7/7 Passing  
**Documentation:** ✅ Complete

---

**Last Updated:** 2026-08-20  
**Version:** 0.1.0 (Frontend Foundation)
