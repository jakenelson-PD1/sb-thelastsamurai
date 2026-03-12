# Last Samurai Phase 2 — Token Definition Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Phase 1 placeholder tokens with a full 10-color palette, semantic CSS-var Tailwind plugin for dark mode, a platform-matched typography scale, and migrate Button + Input to semantic classes.

**Architecture:** Design tokens are TypeScript constants imported directly into Tailwind config. A new `tokens/semantic.ts` Tailwind plugin injects CSS custom properties into `:root` and `.dark`, then registers them as Tailwind color keys — components that use these keys get dark mode automatically with no per-component `dark:` variants. Alert and Badge stay on raw palette classes; their status-tint surface tokens are Phase 3.

**Tech Stack:** React 18 · TypeScript · Tailwind CSS v3 · class-variance-authority · Storybook 8 · npm

**Spec:** `docs/superpowers/specs/2026-03-11-token-definition-design.md`

**Working directory for all commands:** `last-samurai/`

**Verification approach:** No test runner is configured. Each task verifies with `tsc --noEmit` (zero errors = correct). Final task verifies visually in Storybook.

---

## Chunk 1: Token Files

### Task 1: Replace colors.ts with full palette

**Files:**
- Modify: `tokens/colors.ts` (replace entirely)

The current file has 3 placeholder palettes (`brand`, `neutral`, `success`/`warning`/`error`). Replace with 11 full palettes. The old `success`, `warning`, `error` keys are removed; new keys are `green`, `yellow`, `red`.

- [ ] **Step 1: Replace `tokens/colors.ts`**

Write the complete file:

```typescript
export const colors = {
  brand: {
    50:  '#EBF3FF',
    100: '#CADDFF',
    200: '#90BAFF',
    300: '#5794F5',
    400: '#2B6EEF',
    500: '#0E5AE1',
    600: '#0A4AB8',
    700: '#083892',
    800: '#062B6E',
    900: '#041B48',
    950: '#020F28',
  },
  neutral: {
    50:  '#F8FAFB',
    100: '#F0F4F8',
    200: '#DDE7F0',
    300: '#C0D0E0',
    400: '#8CA7C3',
    500: '#5A7A97',
    600: '#3E5B74',
    700: '#2B4254',
    800: '#1A2C3D',
    900: '#0E1E2C',
    950: '#070F18',
  },
  green: {
    50:  '#EDFAF4',
    100: '#D5F3E5',
    200: '#A8E7CC',
    300: '#6DD4AF',
    400: '#3ABD94',
    500: '#1B9C71',
    600: '#14785A',
    700: '#0F5B45',
    800: '#0A3F31',
    900: '#052620',
    950: '#02140F',
  },
  yellow: {
    50:  '#FEFCE8',
    100: '#FEF5C3',
    200: '#FCE97E',
    300: '#F7D339',
    400: '#ECC011',
    500: '#D4AC0D',
    600: '#A98A0A',
    700: '#7F6708',
    800: '#584705',
    900: '#362C03',
    950: '#1C1601',
  },
  red: {
    50:  '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#D91C1C',
    600: '#B01010',
    700: '#890B0B',
    800: '#620707',
    900: '#3F0404',
    950: '#200202',
  },
  eggplant: {
    50:  '#FDF2FA',
    100: '#FAE1F4',
    200: '#F4C0E8',
    300: '#E994D5',
    400: '#D664BC',
    500: '#8B3070',
    600: '#6E2359',
    700: '#531945',
    800: '#3A1030',
    900: '#25091F',
    950: '#130410',
  },
  purple: {
    50:  '#F5EFFE',
    100: '#EAD9FD',
    200: '#D4B3FB',
    300: '#B880F8',
    400: '#9850F3',
    500: '#7124D6',
    600: '#5A18AD',
    700: '#430F85',
    800: '#2F085D',
    900: '#1D0439',
    950: '#0E021C',
  },
  orange: {
    50:  '#FFF6ED',
    100: '#FFEAD6',
    200: '#FDD1A8',
    300: '#FAB070',
    400: '#F7893D',
    500: '#EA6A0D',
    600: '#C15208',
    700: '#963C05',
    800: '#6B2A03',
    900: '#431901',
    950: '#220D01',
  },
  pink: {
    50:  '#FDF2F8',
    100: '#FCE7F3',
    200: '#FBCFE8',
    300: '#F9A8D4',
    400: '#F472B6',
    500: '#DB2778',
    600: '#B31B5E',
    700: '#891147',
    800: '#600932',
    900: '#3D051F',
    950: '#1F020F',
  },
  cerulean: {
    50:  '#EBF8FF',
    100: '#D0F0FE',
    200: '#A0DFFB',
    300: '#63C8F7',
    400: '#30ADE5',
    500: '#0E8EC8',
    600: '#0A70A0',
    700: '#075479',
    800: '#053B54',
    900: '#032433',
    950: '#01111A',
  },
} as const;
```

- [ ] **Step 2: Verify TypeScript**

```bash
tsc --noEmit
```

Expected: zero errors. If errors mention `success`/`warning`/`error` key references, those are in the semantic plugin (not written yet) — ignore for now. Any other errors must be fixed.

- [ ] **Step 3: Commit**

```bash
git add tokens/colors.ts
git commit -m "feat: replace placeholder color palette with full 11-color token system"
```

---

### Task 2: Add fontSize and fontWeight to typography.ts

**Files:**
- Modify: `tokens/typography.ts`
- Modify: `tokens/index.ts`
- Modify: `tailwind.config.ts`

The file currently exports only `fontFamily`. Add `fontSize` and `fontWeight`, wire them into `tailwind.config.ts`, and update the barrel index.

- [ ] **Step 1: Update `tokens/typography.ts`**

Replace the entire file:

```typescript
export const fontFamily = {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'monospace',
  ],
};

export const fontSize = {
  'display':      ['1.5rem',    { lineHeight: '1.2' }],
  'heading-lg':   ['1.25rem',   { lineHeight: '1.25' }],
  'heading-md':   ['1.125rem',  { lineHeight: '1.25' }],
  'heading-sm':   ['1rem',      { lineHeight: '1.25' }],
  'body-md':      ['0.875rem',  { lineHeight: '1.5' }],
  'body-sm':      ['0.8125rem', { lineHeight: '1.5' }],
  'label-md':     ['0.75rem',   { lineHeight: '1.4' }],
  'label-sm':     ['0.6875rem', { lineHeight: '1.25' }],
  'caption':      ['0.625rem',  { lineHeight: '1.2' }],
  'caption-bold': ['0.625rem',  { lineHeight: '1.2', fontWeight: '700' }],
  'code':         ['0.75rem',   { lineHeight: '1.5' }],
} as const;

export const fontWeight = {
  normal:   '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const;
```

- [ ] **Step 2: Update `tokens/index.ts`**

Replace the `fontFamily` line with all three typography exports:

```typescript
export { colors } from './colors';
export { fontFamily, fontSize, fontWeight } from './typography';
export { spacing } from './spacing';
export { boxShadow } from './shadows';
export { borderRadius } from './radii';
```

- [ ] **Step 3: Update `tailwind.config.ts`**

Replace the entire file:

```typescript
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
```

- [ ] **Step 4: Verify TypeScript**

```bash
tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 5: Commit**

```bash
git add tokens/typography.ts tokens/index.ts tailwind.config.ts
git commit -m "feat: add fontSize and fontWeight token scales to typography"
```

---

## Chunk 2: Semantic Plugin

### Task 3: Create tokens/semantic.ts and wire into Tailwind

**Files:**
- Create: `tokens/semantic.ts`
- Modify: `tokens/index.ts`
- Modify: `tailwind.config.ts`

The plugin imports raw hex values from `colors` and injects them as CSS custom properties. No `theme()` calls — just direct hex strings. It also extends Tailwind's color palette so the vars are usable as standard utilities (`bg-canvas`, `text-fg-primary`, etc.).

- [ ] **Step 1: Create `tokens/semantic.ts`**

```typescript
import plugin from 'tailwindcss/plugin';
import { colors } from './colors';

export const semanticPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ':root': {
        '--color-bg-canvas':             colors.neutral[50],
        '--color-bg-surface':            '#ffffff',
        '--color-bg-elevated':           '#ffffff',
        '--color-fg-primary':            colors.neutral[900],
        '--color-fg-secondary':          colors.neutral[600],
        '--color-fg-muted':              colors.neutral[400],
        '--color-fg-link':               colors.brand[600],
        '--color-fg-on-accent':          '#ffffff',
        '--color-line':                  colors.neutral[200],
        '--color-line-strong':           colors.neutral[300],
        '--color-line-focus':            colors.brand[500],
        '--color-action-primary':        colors.brand[500],
        '--color-action-primary-hover':  colors.brand[600],
        '--color-status-success':        colors.green[500],
        '--color-status-warning':        colors.yellow[500],
        '--color-status-error':          colors.red[500],
        '--color-status-error-hover':    colors.red[600],
      },
      '.dark': {
        '--color-bg-canvas':             colors.neutral[950],
        '--color-bg-surface':            colors.neutral[900],
        '--color-bg-elevated':           colors.neutral[800],
        '--color-fg-primary':            colors.neutral[50],
        '--color-fg-secondary':          colors.neutral[400],
        '--color-fg-muted':              colors.neutral[500],
        '--color-fg-link':               colors.brand[400],
        '--color-fg-on-accent':          '#ffffff',
        '--color-line':                  colors.neutral[700],
        '--color-line-strong':           colors.neutral[600],
        '--color-line-focus':            colors.brand[400],
        '--color-action-primary':        colors.brand[500],
        '--color-action-primary-hover':  colors.brand[400],
        '--color-status-success':        colors.green[400],
        '--color-status-warning':        colors.yellow[400],
        '--color-status-error':          colors.red[400],
        '--color-status-error-hover':    colors.red[300],
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          canvas:                 'var(--color-bg-canvas)',
          surface:                'var(--color-bg-surface)',
          elevated:               'var(--color-bg-elevated)',
          'fg-primary':           'var(--color-fg-primary)',
          'fg-secondary':         'var(--color-fg-secondary)',
          'fg-muted':             'var(--color-fg-muted)',
          'fg-link':              'var(--color-fg-link)',
          'fg-on-accent':         'var(--color-fg-on-accent)',
          line:                   'var(--color-line)',
          'line-strong':          'var(--color-line-strong)',
          'line-focus':           'var(--color-line-focus)',
          'action-primary':       'var(--color-action-primary)',
          'action-primary-hover': 'var(--color-action-primary-hover)',
          'status-success':       'var(--color-status-success)',
          'status-warning':       'var(--color-status-warning)',
          'status-error':         'var(--color-status-error)',
          'status-error-hover':   'var(--color-status-error-hover)',
        },
      },
    },
  },
);
```

- [ ] **Step 2: Add semanticPlugin to `tokens/index.ts`**

Add one line at the end:

```typescript
export { colors } from './colors';
export { fontFamily, fontSize, fontWeight } from './typography';
export { spacing } from './spacing';
export { boxShadow } from './shadows';
export { borderRadius } from './radii';
export { semanticPlugin } from './semantic';
```

- [ ] **Step 3: Wire `semanticPlugin` into `tailwind.config.ts`**

Replace the entire file:

```typescript
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
```

- [ ] **Step 4: Verify TypeScript**

```bash
tsc --noEmit
```

Expected: zero errors. The project uses `"moduleResolution": "bundler"` and `"skipLibCheck": true` in `tsconfig.json`, so `import plugin from 'tailwindcss/plugin'` resolves correctly. If you see `Cannot find module 'tailwindcss/plugin'`, run `npm install` — `tailwindcss` is already a dev dependency and the module will be present.

- [ ] **Step 5: Commit**

```bash
git add tokens/semantic.ts tokens/index.ts tailwind.config.ts
git commit -m "feat: add semantic CSS-var Tailwind plugin for dark mode token layer"
```

---

## Chunk 3: Component Migration

### Task 4: Migrate Button.tsx to semantic tokens

**Files:**
- Modify: `components/primitives/Button.tsx`

The current file uses raw palette classes (`bg-brand-500`, `bg-error-500`, etc.). Replace with semantic classes that map through CSS vars. No logic changes — only the class strings inside `cva()` change.

Current `buttonVariants` base class includes `focus-visible:ring-brand-500` — this migrates to `focus-visible:ring-line-focus`.

- [ ] **Step 1: Update `components/primitives/Button.tsx`**

Replace the entire file:

```typescript
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:   'bg-action-primary text-fg-on-accent hover:bg-action-primary-hover',
        secondary: 'bg-surface text-fg-primary hover:bg-elevated',
        ghost:     'hover:bg-surface text-fg-secondary',
        danger:    'bg-status-error text-fg-on-accent hover:bg-status-error-hover',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={clsx(buttonVariants({ variant, size }), className)} {...props} />;
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 3: Commit**

```bash
git add components/primitives/Button.tsx
git commit -m "feat: migrate Button to semantic color tokens"
```

---

### Task 5: Migrate Input.tsx to semantic tokens

**Files:**
- Modify: `components/primitives/Input.tsx`

Replace all raw palette classes with their semantic equivalents. The label, placeholder, border, focus ring, disabled states, and error states all migrate. No logic or prop interface changes.

- [ ] **Step 1: Update `components/primitives/Input.tsx`**

Replace the entire file:

```typescript
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-fg-secondary">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'h-10 w-full rounded border border-line-strong bg-surface px-3 text-sm text-fg-primary placeholder:text-fg-muted',
          'focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20',
          'disabled:cursor-not-allowed disabled:bg-canvas disabled:text-fg-muted',
          error && 'border-status-error focus:ring-status-error/20',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-status-error">{error}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 3: Commit**

```bash
git add components/primitives/Input.tsx
git commit -m "feat: migrate Input to semantic color tokens"
```

---

## Chunk 4: Verification

### Task 6: End-to-end verification

**Files:** none (read-only verification)

No automated tests exist for this project. Verification is `tsc --noEmit` + Storybook visual inspection.

- [ ] **Step 1: Full TypeScript check**

```bash
tsc --noEmit
```

Expected: zero errors across all files. If any errors appear, fix them before continuing.

- [ ] **Step 2: Start Storybook**

```bash
npm run storybook
```

Expected output includes:
```
Storybook 8.x.x for @storybook/react-vite started
Local: http://localhost:6006/
```

No compilation errors in the terminal output.

- [ ] **Step 3: Verify Button stories render correctly**

Open http://localhost:6006 in your browser. Navigate to **Primitives → Button**.

Check each story:
- **Primary** — should show a blue button (`#0E5AE1`)
- **Secondary** — should show a light gray/white button with dark text
- **Ghost** — should show text-only with hover state
- **Danger** — should show a red button (`#D91C1C`)

If any button renders with the wrong color (e.g., old Tailwind blue `#3B82F6`), the semantic plugin is not loading. Check the browser console for Tailwind CSS errors.

- [ ] **Step 4: Verify Input stories render correctly**

Navigate to **Primitives → Input**. Check:
- **Default** — border should be `#C0D0E0` (neutral-300 / line-strong)
- **WithError** — border and error text should be `#D91C1C` (red-500 / status-error)
- **Disabled** — should show muted text and lighter background

- [ ] **Step 5: Verify dark mode via browser console**

With any story open, open the browser DevTools console and run:

```javascript
document.documentElement.classList.add('dark')
```

Expected:
- Button primary should still appear blue (brand-500 is same in both modes)
- Button secondary should shift to a dark surface color
- Input border should shift to a dark neutral (`#3E5B74`, neutral-600)
- Input focus ring color should shift to `#2B6EEF` (brand-400)

To reset: `document.documentElement.classList.remove('dark')`

- [ ] **Step 6: Verify raw palette utilities still work**

Navigate to any non-migrated component story (e.g., **Feedback → Alert**). It should still render with colors — these use Tailwind's built-in `green`/`yellow`/`red` classes which now resolve to the custom palette. The Alert's `border-green-200 bg-green-50 text-green-800` classes will use the new custom green palette — verify the green looks correct (`#A8E7CC` border, `#EDFAF4` background).

- [ ] **Step 7: Verify typography utilities**

Open the browser console on any story page and run:

```javascript
const el = document.createElement('div');
el.className = 'text-display';
document.body.appendChild(el);
console.log(getComputedStyle(el).fontSize);  // expect "24px"
console.log(getComputedStyle(el).lineHeight); // expect "28.8px" (24 * 1.2)
document.body.removeChild(el);
```

Expected: `fontSize` is `24px`, `lineHeight` is `28.8px`.

- [ ] **Step 8: Final commit if any fixes were needed**

If you made any fixes during verification:

```bash
git add -p
git commit -m "fix: correct token issues found during verification"
```

If no fixes were needed, no commit needed.
