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
        '--color-line':       colors.neutral[200],
        '--color-line-strong': colors.neutral[300],
        '--color-line-focus':  colors.brand[500],

        // Actions
        '--color-action-primary':       colors.brand[500],
        '--color-action-primary-hover': colors.brand[600],

        // Status
        '--color-status-success':       colors.green[500],
        '--color-status-warning':       colors.yellow[500],
        '--color-status-error':         colors.red[500],
        '--color-status-error-hover':   colors.red[600],
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
        '--color-fg-on-accent': '#ffffff',

        // Borders
        '--color-line':        colors.neutral[800],
        '--color-line-strong': colors.neutral[600],
        '--color-line-focus':  colors.brand[400],

        // Actions
        '--color-action-primary':       colors.brand[500],
        '--color-action-primary-hover': colors.brand[400],

        // Status
        '--color-status-success':     colors.green[400],
        '--color-status-warning':     colors.yellow[400],
        '--color-status-error':       colors.red[400],
        '--color-status-error-hover': colors.red[300],
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          'canvas':            'var(--color-bg-canvas)',
          'surface':           'var(--color-bg-surface)',
          'elevated':          'var(--color-bg-elevated)',
          'fg-primary':        'var(--color-fg-primary)',
          'fg-secondary':      'var(--color-fg-secondary)',
          'fg-muted':          'var(--color-fg-muted)',
          'fg-link':           'var(--color-fg-link)',
          'fg-on-accent':      'var(--color-fg-on-accent)',
          'line':              'var(--color-line)',
          'line-strong':       'var(--color-line-strong)',
          'line-focus':        'var(--color-line-focus)',
          'action-primary':    'var(--color-action-primary)',
          'action-primary-hover': 'var(--color-action-primary-hover)',
          'status-success':    'var(--color-status-success)',
          'status-warning':    'var(--color-status-warning)',
          'status-error':      'var(--color-status-error)',
          'status-error-hover': 'var(--color-status-error-hover)',
        },
      },
    },
  },
);
