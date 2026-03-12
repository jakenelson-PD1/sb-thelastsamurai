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

export const fontSize: Record<string, FontSizeValue> = {
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
};

export const fontWeight = {
  normal:   '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const;
