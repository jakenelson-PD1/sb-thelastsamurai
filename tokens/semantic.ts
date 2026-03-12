import plugin from 'tailwindcss/plugin';
import { colors } from './colors';

export const semanticPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        // Backgrounds
        '--color-bg-canvas':   colors.neutral[50],
        '--color-bg-surface':  colors.neutral[100],
        '--color-bg-elevated': '#ffffff',

        // Foreground / text
        '--color-fg-primary':   colors.neutral[900],
        '--color-fg-secondary': colors.neutral[700],
        '--color-fg-muted':     colors.neutral[500],
        '--color-fg-link':      colors.brand[600],
        '--color-fg-on-accent': '#ffffff',

        // Borders
        '--color-line':        colors.neutral[200],
        '--color-line-strong': colors.neutral[300],
        '--color-line-focus':  colors.brand[500],

        // Actions
        '--color-action-primary':       colors.brand[500],
        '--color-action-primary-hover': colors.brand[600],

        // Status accents
        '--color-status-success':       colors.green[500],
        '--color-status-warning':       colors.yellow[500],
        '--color-status-error':         colors.red[500],
        '--color-status-error-hover':   colors.red[600],

        // Status surfaces — info
        '--color-status-info-surface': colors.brand[50],
        '--color-status-info-border':  colors.brand[200],
        '--color-status-info-fg':      colors.brand[700],

        // Status surfaces — success
        '--color-status-success-surface': colors.green[50],
        '--color-status-success-border':  colors.green[200],
        '--color-status-success-fg':      colors.green[700],

        // Status surfaces — warning
        '--color-status-warning-surface': colors.yellow[50],
        '--color-status-warning-border':  colors.yellow[200],
        '--color-status-warning-fg':      colors.yellow[700],

        // Status surfaces — error
        '--color-status-error-surface': colors.red[50],
        '--color-status-error-border':  colors.red[200],
        '--color-status-error-fg':      colors.red[700],
      },
      '.dark': {
        // Backgrounds
        '--color-bg-canvas':   colors.neutral[950],
        '--color-bg-surface':  colors.neutral[900],
        '--color-bg-elevated': colors.neutral[800],

        // Foreground / text
        '--color-fg-primary':   colors.neutral[50],
        '--color-fg-secondary': colors.neutral[300],
        '--color-fg-muted':     colors.neutral[500],
        '--color-fg-link':      colors.brand[400],
        '--color-fg-on-accent': colors.neutral[950],

        // Borders
        '--color-line':        colors.neutral[700],
        '--color-line-strong': colors.neutral[600],
        '--color-line-focus':  colors.brand[400],

        // Actions
        '--color-action-primary':       colors.brand[400],
        '--color-action-primary-hover': colors.brand[300],  // fixed: was brand[400]

        // Status accents
        '--color-status-success':     colors.green[400],
        '--color-status-warning':     colors.yellow[400],
        '--color-status-error':       colors.red[400],
        '--color-status-error-hover': colors.red[300],

        // Status surfaces — info
        '--color-status-info-surface': colors.brand[950],
        '--color-status-info-border':  colors.brand[700],
        '--color-status-info-fg':      colors.brand[300],

        // Status surfaces — success
        '--color-status-success-surface': colors.green[950],
        '--color-status-success-border':  colors.green[700],
        '--color-status-success-fg':      colors.green[300],

        // Status surfaces — warning
        '--color-status-warning-surface': colors.yellow[950],
        '--color-status-warning-border':  colors.yellow[700],
        '--color-status-warning-fg':      colors.yellow[300],

        // Status surfaces — error
        '--color-status-error-surface': colors.red[950],
        '--color-status-error-border':  colors.red[700],
        '--color-status-error-fg':      colors.red[300],
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          // Backgrounds
          'canvas':   'var(--color-bg-canvas)',
          'surface':  'var(--color-bg-surface)',
          'elevated': 'var(--color-bg-elevated)',

          // Foreground
          'fg-primary':   'var(--color-fg-primary)',
          'fg-secondary': 'var(--color-fg-secondary)',
          'fg-muted':     'var(--color-fg-muted)',
          'fg-link':      'var(--color-fg-link)',
          'fg-on-accent': 'var(--color-fg-on-accent)',

          // Borders
          'line':        'var(--color-line)',
          'line-strong': 'var(--color-line-strong)',
          'line-focus':  'var(--color-line-focus)',

          // Actions
          'action-primary':       'var(--color-action-primary)',
          'action-primary-hover': 'var(--color-action-primary-hover)',

          // Status accents
          'status-success':       'var(--color-status-success)',
          'status-warning':       'var(--color-status-warning)',
          'status-error':         'var(--color-status-error)',
          'status-error-hover':   'var(--color-status-error-hover)',

          // Status surfaces
          'status-info-surface':    'var(--color-status-info-surface)',
          'status-info-border':     'var(--color-status-info-border)',
          'status-info-fg':         'var(--color-status-info-fg)',
          'status-success-surface': 'var(--color-status-success-surface)',
          'status-success-border':  'var(--color-status-success-border)',
          'status-success-fg':      'var(--color-status-success-fg)',
          'status-warning-surface': 'var(--color-status-warning-surface)',
          'status-warning-border':  'var(--color-status-warning-border)',
          'status-warning-fg':      'var(--color-status-warning-fg)',
          'status-error-surface':   'var(--color-status-error-surface)',
          'status-error-border':    'var(--color-status-error-border)',
          'status-error-fg':        'var(--color-status-error-fg)',
        },
      },
    },
  },
);
