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

type FontSizeValue =
  | string
  | [string, string]
  | [string, Partial<{ lineHeight: string; letterSpacing: string; fontWeight: string | number }>];

// Note: `as const` is intentionally omitted here. Tailwind's fontSize config expects
// mutable tuples; `as const` produces readonly tuples that TypeScript won't assign to
// the mutable tuple types in ThemeConfig['fontSize']. The explicit FontSizeValue type
// enforces correctness without readonly. (fontWeight uses `as const` safely because
// readonly string literals are assignable to Record<string, string>.)
export const fontSize: Record<string, FontSizeValue> = {
  // Each size bakes in its named Type Scale weight so `text-*` renders the
  // correct style by default (Display/Display LG = Bold, Heading = Semibold,
  // Label = Medium, Body/Caption/Code = Regular). Explicit `font-*` still
  // overrides (e.g. Body MD Strong = `text-body-md font-semibold`).
  'display':      ['1.5rem',    { lineHeight: '1.2',  fontWeight: '700' }],
  'display-lg':   ['1.875rem',  { lineHeight: '1.2',  fontWeight: '700' }],
  'heading-lg':   ['1.25rem',   { lineHeight: '1.25', fontWeight: '600' }],
  'heading-md':   ['1.125rem',  { lineHeight: '1.25', fontWeight: '600' }],
  'heading-sm':   ['1rem',      { lineHeight: '1.25', fontWeight: '600' }],
  'body-md':      ['0.875rem',  { lineHeight: '1.5' }],
  'body-sm':      ['0.8125rem', { lineHeight: '1.5' }],
  // Label MD / Label SM are Medium (500) in the Type Scale — there is no
  // Regular variant at these sizes. Bake the weight in so `text-label-md` /
  // `text-label-sm` render the named style by default; an explicit
  // `font-semibold` still overrides to Label MD Bold where needed.
  'label-md':     ['0.75rem',   { lineHeight: '1.4',  fontWeight: '500' }],
  'label-sm':     ['0.6875rem', { lineHeight: '1.25', fontWeight: '500' }],
  'caption':      ['0.625rem',  { lineHeight: '1.2' }],
  'caption-bold': ['0.625rem',  { lineHeight: '1.2', fontWeight: '700' }],
  'code':         ['0.75rem',   { lineHeight: '1.5' }],
};

export const fontWeight = {
  normal:   '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const;
