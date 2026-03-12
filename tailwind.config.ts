import type { Config } from 'tailwindcss';
import { colors } from './tokens/colors';
import { fontFamily, fontSize, fontWeight } from './tokens/typography';
import { spacing } from './tokens/spacing';
import { boxShadow } from './tokens/shadows';
import { borderRadius } from './tokens/radii';

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
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
  plugins: [],
};

export default config;
