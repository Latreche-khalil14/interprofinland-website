/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Teal
        primary: {
          50: '#E5F4F7',
          100: '#CCE9ED',
          200: '#99D3DB',
          300: '#66BDC9',
          400: '#3398AC',
          500: '#006B7D', // Main primary
          600: '#005662',
          700: '#004047',
        },
        // Secondary - Warm Terra Cotta
        secondary: {
          50: '#FCF0ED',
          100: '#F9E1DB',
          200: '#F3C3B7',
          300: '#EDA593',
          400: '#D87F69',
          500: '#C85A3F', // Main secondary
          600: '#A64832',
          700: '#7D3625',
        },
        // Neutrals - Warm Grays
        gray: {
          50: '#FAFAF8',
          100: '#F5F5F2',
          200: '#E8E8E3',
          300: '#D1D1C8',
          400: '#A8A89E',
          500: '#828279',
          600: '#5C5C54',
          700: '#3D3D38',
          800: '#2B2B27',
        },
        // Semantic
        black: '#1A1A1A',
        white: '#FFFFFF',
        success: '#2D7A4F',
        warning: '#D97706',
        error: '#C1383E',
        info: '#1E40AF',
      },
      fontFamily: {
        display: ['Inter Variable', 'sans-serif'],
        body: ['Lora Variable', 'serif'],
        sans: ['Inter Variable', 'sans-serif'],
        serif: ['Lora Variable', 'serif'],
      },
      fontSize: {
        // Responsive font sizes using clamp
        'display-1': 'clamp(2.5rem, 5vw, 4rem)', // 40-64px
        'display-2': 'clamp(2rem, 4vw, 3rem)', // 32-48px
        h1: 'clamp(1.75rem, 3vw, 2.25rem)', // 28-36px
        h2: 'clamp(1.5rem, 2.5vw, 2rem)', // 24-32px
        h3: 'clamp(1.25rem, 2vw, 1.5rem)', // 20-24px
        body: 'clamp(1rem, 1.5vw, 1.125rem)', // 16-18px
        small: '0.875rem', // 14px
        tiny: '0.75rem', // 12px
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.75',
        loose: '2',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
      },
      spacing: {
        // 8px base spacing scale
        0: '0',
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        10: '2.5rem', // 40px
        12: '3rem', // 48px
        16: '4rem', // 64px
        20: '5rem', // 80px
        24: '6rem', // 96px
        32: '8rem', // 128px
      },
      maxWidth: {
        page: '1440px',
        content: '1280px',
        narrow: '800px',
        wide: '1440px',
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem', // 4px
        DEFAULT: '0.5rem', // 8px
        lg: '0.75rem', // 12px
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.07)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        magazine: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        base: '300ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
