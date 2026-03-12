import type { Config } from 'tailwindcss';

// Token imports wired after Task 4
const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
