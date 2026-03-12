# Last Samurai — Phase 2: Token Definition Design

_Date: 2026-03-11_

## Context

Phase 1 scaffolded the full component and token file structure with placeholder values. Phase 2 replaces those placeholders with a complete, production-quality token system: a full color palette across 11 colors, a Tailwind plugin that injects semantic CSS vars for dark mode, a semantic typography scale matching the platform's existing type system, and partial migration of Button and Input to use semantic tokens automatically.

---

## 1. Color Palettes

### 1.1 Raw Palette Approach

Each color is a full 11-stop scale (50–950). All values are TypeScript `as const` in `tokens/colors.ts`. Components never reference raw hex — only token keys like `brand-500` or `green-400`.

**Palette key rename from Phase 1:** The Phase 1 placeholder keys `success`, `warning`, and `error` are removed entirely. They are replaced with `green`, `yellow`, and `red` (matching actual color names). No existing component used `bg-success-*` classes — Phase 1 stubs used Tailwind's built-in `green`/`yellow`/`red`, which Phase 2 overrides with the custom palette.

### 1.2 Brand (primary blue, anchor `#0E5AE1`)

| Stop | Hex |
|------|-----|
| 50 | `#EBF3FF` |
| 100 | `#CADDFF` |
| 200 | `#90BAFF` |
| 300 | `#5794F5` |
| 400 | `#2B6EEF` |
| 500 | `#0E5AE1` |
| 600 | `#0A4AB8` |
| 700 | `#083892` |
| 800 | `#062B6E` |
| 900 | `#041B48` |
| 950 | `#020F28` |

### 1.3 Neutral (warm blue-gray)

| Stop | Hex |
|------|-----|
| 50 | `#F8FAFB` |
| 100 | `#F0F4F8` |
| 200 | `#DDE7F0` |
| 300 | `#C0D0E0` |
| 400 | `#8CA7C3` |
| 500 | `#5A7A97` |
| 600 | `#3E5B74` |
| 700 | `#2B4254` |
| 800 | `#1A2C3D` |
| 900 | `#0E1E2C` |
| 950 | `#070F18` |

### 1.4 Status Colors

#### Green — "good" (anchor `#1B9C71`)

| Stop | Hex |
|------|-----|
| 50 | `#EDFAF4` |
| 100 | `#D5F3E5` |
| 200 | `#A8E7CC` |
| 300 | `#6DD4AF` |
| 400 | `#3ABD94` |
| 500 | `#1B9C71` |
| 600 | `#14785A` |
| 700 | `#0F5B45` |
| 800 | `#0A3F31` |
| 900 | `#052620` |
| 950 | `#02140F` |

#### Yellow — "questionable" (anchor `#D4AC0D`)

| Stop | Hex |
|------|-----|
| 50 | `#FEFCE8` |
| 100 | `#FEF5C3` |
| 200 | `#FCE97E` |
| 300 | `#F7D339` |
| 400 | `#ECC011` |
| 500 | `#D4AC0D` |
| 600 | `#A98A0A` |
| 700 | `#7F6708` |
| 800 | `#584705` |
| 900 | `#362C03` |
| 950 | `#1C1601` |

#### Red — "bad" (anchor `#D91C1C`)

| Stop | Hex |
|------|-----|
| 50 | `#FEF2F2` |
| 100 | `#FEE2E2` |
| 200 | `#FECACA` |
| 300 | `#FCA5A5` |
| 400 | `#F87171` |
| 500 | `#D91C1C` |
| 600 | `#B01010` |
| 700 | `#890B0B` |
| 800 | `#620707` |
| 900 | `#3F0404` |
| 950 | `#200202` |

### 1.5 Feature/Capability Colors

#### Eggplant (anchor `#8B3070`)

| Stop | Hex |
|------|-----|
| 50 | `#FDF2FA` |
| 100 | `#FAE1F4` |
| 200 | `#F4C0E8` |
| 300 | `#E994D5` |
| 400 | `#D664BC` |
| 500 | `#8B3070` |
| 600 | `#6E2359` |
| 700 | `#531945` |
| 800 | `#3A1030` |
| 900 | `#25091F` |
| 950 | `#130410` |

#### Purple (anchor `#7124D6`)

| Stop | Hex |
|------|-----|
| 50 | `#F5EFFE` |
| 100 | `#EAD9FD` |
| 200 | `#D4B3FB` |
| 300 | `#B880F8` |
| 400 | `#9850F3` |
| 500 | `#7124D6` |
| 600 | `#5A18AD` |
| 700 | `#430F85` |
| 800 | `#2F085D` |
| 900 | `#1D0439` |
| 950 | `#0E021C` |

#### Orange (anchor `#EA6A0D`)

| Stop | Hex |
|------|-----|
| 50 | `#FFF6ED` |
| 100 | `#FFEAD6` |
| 200 | `#FDD1A8` |
| 300 | `#FAB070` |
| 400 | `#F7893D` |
| 500 | `#EA6A0D` |
| 600 | `#C15208` |
| 700 | `#963C05` |
| 800 | `#6B2A03` |
| 900 | `#431901` |
| 950 | `#220D01` |

#### Pink (anchor `#DB2778`)

| Stop | Hex |
|------|-----|
| 50 | `#FDF2F8` |
| 100 | `#FCE7F3` |
| 200 | `#FBCFE8` |
| 300 | `#F9A8D4` |
| 400 | `#F472B6` |
| 500 | `#DB2778` |
| 600 | `#B31B5E` |
| 700 | `#891147` |
| 800 | `#600932` |
| 900 | `#3D051F` |
| 950 | `#1F020F` |

#### Cerulean (anchor `#0E8EC8`)

| Stop | Hex |
|------|-----|
| 50 | `#EBF8FF` |
| 100 | `#D0F0FE` |
| 200 | `#A0DFFB` |
| 300 | `#63C8F7` |
| 400 | `#30ADE5` |
| 500 | `#0E8EC8` |
| 600 | `#0A70A0` |
| 700 | `#075479` |
| 800 | `#053B54` |
| 900 | `#032433` |
| 950 | `#01111A` |

---

## 2. Typography Tokens

### 2.1 Approach

Named semantic scale matching the platform's existing type system. Extends (does not replace) Tailwind's default scale. All sizes use rem; line heights are unitless multipliers.

### 2.2 Font Size + Line Height Scale

Defined in `tokens/typography.ts` as exported `fontSize` object. The `caption-bold` entry uses Tailwind v3's tuple format `[size, { lineHeight, fontWeight }]` to bake in bold weight.

```typescript
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
```

Resulting Tailwind utilities: `text-display`, `text-heading-lg`, `text-body-md`, `text-caption-bold`, etc.

### 2.3 Font Weights

```typescript
export const fontWeight = {
  normal:   '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const;
```

### 2.4 Updated `tokens/typography.ts` exports

The file currently exports only `fontFamily`. After this change it exports `fontFamily`, `fontSize`, and `fontWeight`.

### 2.5 Updated `tailwind.config.ts` import

```typescript
// Before
import { fontFamily } from './tokens/typography';

// After
import { fontFamily, fontSize, fontWeight } from './tokens/typography';

// In theme.extend:
theme: {
  extend: {
    colors,
    fontFamily,
    fontSize,   // add
    fontWeight, // add
    spacing,
    boxShadow,
    borderRadius,
  },
},
```

---

## 3. Semantic Token Layer

### 3.1 Approach

A new file `tokens/semantic.ts` exports a Tailwind plugin (`semanticPlugin`). The plugin does two things:

1. Calls `addBase` to inject CSS custom properties into `:root` (light mode values) and `.dark` (dark mode overrides). Values are raw hex strings pulled directly from the imported `colors` object — no `theme()` call needed.
2. Extends `theme.colors` with Tailwind color keys that reference those CSS vars, making them available as standard utility classes (`bg-canvas`, `text-fg-primary`, etc.).

`tailwind.config.ts` adds `semanticPlugin` to its `plugins` array.

### 3.2 CSS Variable + Tailwind Color Key Mapping

| Semantic token | CSS var | Tailwind color key | Example utility |
|----------------|---------|-------------------|-----------------|
| bg.canvas | `--color-bg-canvas` | `canvas` | `bg-canvas` |
| bg.surface | `--color-bg-surface` | `surface` | `bg-surface` |
| bg.elevated | `--color-bg-elevated` | `elevated` | `bg-elevated` |
| text.primary | `--color-fg-primary` | `fg-primary` | `text-fg-primary` |
| text.secondary | `--color-fg-secondary` | `fg-secondary` | `text-fg-secondary` |
| text.muted | `--color-fg-muted` | `fg-muted` | `text-fg-muted` |
| text.link | `--color-fg-link` | `fg-link` | `text-fg-link` |
| text.on-accent | `--color-fg-on-accent` | `fg-on-accent` | `text-fg-on-accent` |
| border.default | `--color-line` | `line` | `border-line` |
| border.strong | `--color-line-strong` | `line-strong` | `border-line-strong` |
| border.focus | `--color-line-focus` | `line-focus` | `border-line-focus`, `ring-line-focus` |
| action.primary.bg | `--color-action-primary` | `action-primary` | `bg-action-primary` |
| action.primary.hover | `--color-action-primary-hover` | `action-primary-hover` | `hover:bg-action-primary-hover` |
| status.success | `--color-status-success` | `status-success` | `text-status-success`, `bg-status-success` |
| status.warning | `--color-status-warning` | `status-warning` | `text-status-warning` |
| status.error | `--color-status-error` | `status-error` | `text-status-error`, `bg-status-error` |
| status.error hover | `--color-status-error-hover` | `status-error-hover` | `hover:bg-status-error-hover` |

### 3.3 Token Values (light → dark)

| CSS var | Light | Dark |
|---------|-------|------|
| `--color-bg-canvas` | `colors.neutral[50]` | `colors.neutral[950]` |
| `--color-bg-surface` | `'#ffffff'` | `colors.neutral[900]` |
| `--color-bg-elevated` | `'#ffffff'` | `colors.neutral[800]` |
| `--color-fg-primary` | `colors.neutral[900]` | `colors.neutral[50]` |
| `--color-fg-secondary` | `colors.neutral[600]` | `colors.neutral[400]` |
| `--color-fg-muted` | `colors.neutral[400]` | `colors.neutral[500]` |
| `--color-fg-link` | `colors.brand[600]` | `colors.brand[400]` |
| `--color-fg-on-accent` | `'#ffffff'` | `'#ffffff'` |
| `--color-line` | `colors.neutral[200]` | `colors.neutral[700]` |
| `--color-line-strong` | `colors.neutral[300]` | `colors.neutral[600]` |
| `--color-line-focus` | `colors.brand[500]` | `colors.brand[400]` |
| `--color-action-primary` | `colors.brand[500]` | `colors.brand[500]` |
| `--color-action-primary-hover` | `colors.brand[600]` | `colors.brand[400]` |
| `--color-status-success` | `colors.green[500]` | `colors.green[400]` |
| `--color-status-warning` | `colors.yellow[500]` | `colors.yellow[400]` |
| `--color-status-error` | `colors.red[500]` | `colors.red[400]` |
| `--color-status-error-hover` | `colors.red[600]` | `colors.red[300]` |

### 3.4 Complete `tokens/semantic.ts` structure

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

### 3.5 Updated `tokens/index.ts`

Two changes:

1. Replace the existing `export { fontFamily } from './typography'` line with:
   ```typescript
   export { fontFamily, fontSize, fontWeight } from './typography';
   ```

2. Add at the end:
   ```typescript
   export { semanticPlugin } from './semantic';
   ```

### 3.6 Updated `tailwind.config.ts` plugins

```typescript
import { semanticPlugin } from './tokens/semantic';

// In config:
plugins: [semanticPlugin],
```

---

## 4. Component Migration

### 4.1 Scope

Migrate **Button** (all 4 variants) and **Input** to semantic tokens. Alert and Badge require status-tinted surface tokens not yet defined — they remain on raw palette classes and are deferred to Phase 3.

### 4.2 Button migration

All four variants swap raw palette classes for semantic equivalents. Dark mode is handled automatically by the CSS var layer — no `dark:` variants are added.

| Variant | Before | After |
|---------|--------|-------|
| primary | `bg-brand-500 text-white hover:bg-brand-600` | `bg-action-primary text-fg-on-accent hover:bg-action-primary-hover` |
| secondary | `bg-neutral-100 text-neutral-900 hover:bg-neutral-200` | `bg-surface text-fg-primary hover:bg-elevated` |
| ghost | `hover:bg-neutral-100 text-neutral-700` | `hover:bg-surface text-fg-secondary` |
| danger | `bg-error-500 text-white hover:bg-error-600` | `bg-status-error text-fg-on-accent hover:bg-status-error-hover` |

Focus ring also migrates: `focus-visible:ring-brand-500` → `focus-visible:ring-line-focus`

### 4.3 Input migration

| Part | Before | After |
|------|--------|-------|
| Base border | `border-neutral-300` | `border-line-strong` |
| Base bg | `bg-white` | `bg-surface` |
| Base text | `text-neutral-900` | `text-fg-primary` |
| Placeholder | `placeholder:text-neutral-400` | `placeholder:text-fg-muted` |
| Disabled bg | `disabled:bg-neutral-50` | `disabled:bg-canvas` |
| Disabled text | `disabled:text-neutral-400` | `disabled:text-fg-muted` |
| Focus border | `focus:border-brand-500` | `focus:border-line-focus` |
| Focus ring | `focus:ring-brand-500/20` | `focus:ring-line-focus/20` |
| Error border | `border-error-500` | `border-status-error` |
| Error ring | `focus:ring-error-500/20` | `focus:ring-status-error/20` |
| Label text | `text-neutral-700` | `text-fg-secondary` |
| Error message text | `text-error-500` | `text-status-error` |

---

## 5. File Changes

### Created
- `tokens/semantic.ts` — Tailwind plugin with CSS var injection (full source in Section 3.4)

### Modified
- `tokens/colors.ts` — replace entire file with full 11-color × 11-stop palette (Sections 1.2–1.5); removes old `success`/`warning`/`error` keys; adds `green`/`yellow`/`red`/`eggplant`/`purple`/`orange`/`pink`/`cerulean`
- `tokens/typography.ts` — add `fontSize` export (Section 2.2) and `fontWeight` export (Section 2.3)
- `tokens/index.ts` — extend typography re-export to include `fontSize` and `fontWeight`; add `export { semanticPlugin } from './semantic'`
- `tailwind.config.ts` — update imports, add `fontSize`/`fontWeight` to `theme.extend`, add `semanticPlugin` to `plugins`
- `components/primitives/Button.tsx` — migrate all 4 variants (Section 4.2)
- `components/primitives/Input.tsx` — migrate all states (Section 4.3)

### Not changed
- `tokens/spacing.ts`, `tokens/shadows.ts`, `tokens/radii.ts`
- All other component files (Alert, Badge, and others remain on raw palette — Phase 3)
- `.storybook/`, `vite.config.ts`, `postcss.config.js`, `globals.css`

---

## 6. Verification

1. `tsc --noEmit` from `last-samurai/` — zero TypeScript errors
2. `npx storybook dev` — Storybook starts cleanly; Button and Input stories render with correct brand colors
3. Open Storybook browser console → run `document.documentElement.classList.add('dark')` → Button primary and Input focus ring should switch to dark-mode palette values automatically
4. All raw palette utilities (`text-brand-500`, `bg-neutral-100`) still work on non-migrated components (Tailwind's `extend` preserves them)
5. `text-display`, `text-heading-lg`, etc. are usable in any story without errors
