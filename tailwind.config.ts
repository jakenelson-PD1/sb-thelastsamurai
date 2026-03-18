import type { Config } from 'tailwindcss';
import { colors } from './tokens/colors';
import { fontFamily, fontSize, fontWeight } from './tokens/typography';
import { spacing } from './tokens/spacing';
import { boxShadow } from './tokens/shadows';
import { borderRadius } from './tokens/radii';
import { semanticPlugin } from './tokens/semantic';

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
      '2xl': '1800px',
    },
    extend: {
      colors,
      fontFamily,
      fontSize,
      fontWeight,
      spacing,
      boxShadow,
      borderRadius,
    },
  },
  plugins: [semanticPlugin],
};

export default config;
