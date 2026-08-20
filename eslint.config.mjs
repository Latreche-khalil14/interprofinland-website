import { createRequire } from 'module';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const require = createRequire(import.meta.url);

// eslint-plugin-astro 0.34 exposes flat configs via named configs
/** @type {{ configs: Record<string, import('eslint').Linter.FlatConfig[]> }} */
const astroPlugin = require('eslint-plugin-astro');

/** @type {import('eslint').Linter.Config[]} */
export default [
  // ── Global ignores ──────────────────────────────────────────────
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
  },

  // ── TypeScript files ────────────────────────────────────────────
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: './tsconfig.json' },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },

  // ── Astro files (flat/recommended already includes the parser) ──
  ...astroPlugin.configs['flat/recommended'],
];
