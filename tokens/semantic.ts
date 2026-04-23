import plugin from 'tailwindcss/plugin';
import { colors } from './colors';

export const semanticPlugin = plugin(
  function ({ addBase }) {
    addBase({
      // Scrollbar utility — applied via .scroll-area class
      '.scroll-area': {
        'scrollbar-width': 'thin',
        'scrollbar-color': 'var(--color-scrollbar-thumb) var(--color-scrollbar-track)',
        '&::-webkit-scrollbar': { width: '6px', height: '6px' },
        '&::-webkit-scrollbar-track': { background: 'var(--color-scrollbar-track)' },
        '&::-webkit-scrollbar-thumb': {
          background: 'var(--color-scrollbar-thumb)',
          'border-radius': '3px',
        },
      },
      ':root': {
        // Backgrounds
        '--color-bg-canvas':    colors.neutral[50],
        '--color-bg-surface':   colors.neutral[100],
        '--color-bg-elevated':  '#ffffff',
        '--color-bg-recessed':  colors.neutral[200],
        '--color-bg-hover':     colors.neutral[100],
        '--color-bg-active':    colors.neutral[200],

        // Accordion header hover — darker than recessed in light mode
        '--color-accordion-hover': colors.neutral[300],

        // Request row states
        '--color-row-bg':              '#ffffff',
        '--color-row-hover-bg':        colors.neutral[100],
        '--color-row-selected-bg':     colors.brand[50],
        '--color-row-selected-border': colors.brand[500],

        // Unread dot
        '--color-dot-unread':     colors.brand[500],
        '--color-dot-attention':  colors.orange[600],

        // Tile flag icon color
        '--color-tile-flag': colors.neutral[800],

        // Meta unread emphasis
        '--color-meta-unread': colors.neutral[700],

        // Foreground / text
        '--color-fg-heading':   colors.neutral[900],
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

        // Outstanding status icon — matches tile-not-started
        '--color-status-outstanding': colors.brand[500],

        // Navigation (always dark — brand navy in light)
        '--color-nav-bg':           colors.brand[950],
        '--color-nav-border':       colors.neutral[400],
        '--color-nav-active-bg':    colors.brand[800],
        '--color-nav-text':         colors.neutral[300],
        '--color-nav-hover-bg':     'rgba(255,255,255,0.08)',

        // Sidebar chrome — flips by theme attribute, not by .dark class
        '--color-sidenav-surface':          '#ffffff',
        '--color-sidenav-surface-hover':    colors.neutral[100],
        '--color-sidenav-surface-elevated': colors.neutral[200],
        '--color-sidenav-border':           colors.neutral[200],
        '--color-sidenav-fg-primary':       colors.neutral[900],
        '--color-sidenav-fg-secondary':     colors.neutral[700],
        '--color-sidenav-fg-muted':         colors.neutral[500],

        // Notification badge
        '--color-notification-bg':  colors.red[500],

        // Status tile colors (color-nav swatch tiles — light mode)
        '--color-tile-not-started': colors.brand[100],
        '--color-tile-outstanding': colors.yellow[300],
        '--color-tile-fulfilled':   colors.green[300],
        '--color-tile-overdue':     colors.red[300],

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

        // Status surfaces — cerulean
        '--color-status-cerulean-surface': colors.cerulean[50],
        '--color-status-cerulean-border':  colors.cerulean[200],
        '--color-status-cerulean-fg':      colors.cerulean[700],

        // Status surfaces — orange
        '--color-status-orange-surface': colors.orange[50],
        '--color-status-orange-border':  colors.orange[200],
        '--color-status-orange-fg':      colors.orange[700],

        // Status surfaces — pink
        '--color-status-pink-surface': colors.pink[50],
        '--color-status-pink-border':  colors.pink[200],
        '--color-status-pink-fg':      colors.pink[700],

        // Status surfaces — eggplant
        '--color-status-eggplant-surface': colors.eggplant[50],
        '--color-status-eggplant-border':  colors.eggplant[200],
        '--color-status-eggplant-fg':      colors.eggplant[700],

        // Status surfaces — purple
        '--color-status-purple-surface':       colors.purple[50],
        '--color-status-purple-surface-hover': colors.purple[100],
        '--color-status-purple-border':        colors.purple[200],
        '--color-status-purple-fg':            colors.purple[700],
        '--color-status-purple-avatar-bg':     colors.purple[100],

        // Scrollbar
        '--color-scrollbar-thumb': colors.neutral[300],
        '--color-scrollbar-track': 'transparent',

        // Semantic spacing — layout roles (mode-independent)
        '--spacing-panel-compact': '12px',
        '--spacing-panel':         '16px',
        '--spacing-panel-relaxed': '24px',
        '--spacing-section-gap':   '24px',
      },
      '.dark': {
        // ── Accordion ────────────────────────────────────────────────
        '--color-accordion-hover': '#111114',  // canvas — slightly lighter than recessed in dark

        // ── Request row states ────────────────────────────────────────
        '--color-row-bg':              '#161619',
        '--color-row-hover-bg':        '#111114',
        '--color-row-selected-bg':     '#24242b',
        '--color-row-selected-border': '#72758a',

        // ── Core surfaces ─────────────────────────────────────────────
        '--color-bg-canvas':    '#111114',
        '--color-bg-surface':   '#161619',
        '--color-bg-elevated':  '#121215',
        '--color-bg-recessed':  '#0e0e11',
        '--color-bg-hover':     '#1c1c22',
        '--color-bg-active':    '#24242b',

        // ── Text hierarchy ───────────────────────────────────────────
        '--color-fg-heading':   '#e8eaef',  // near-white — section/accordion headings
        '--color-fg-primary':   '#c4c7d0',
        '--color-fg-secondary': '#55586a',
        '--color-fg-muted':     '#72758a',
        '--color-fg-link':      '#3a5e88',
        '--color-dot-unread':     '#6098e0',  // vivid blue — more prominent than fg-link
        '--color-dot-attention':  '#f06060',  // matches status-error for visibility
        '--color-fg-on-accent': '#ffffff',

        // ── Borders ──────────────────────────────────────────────────
        '--color-line':        '#1c1c22',
        '--color-line-strong': '#262630',
        '--color-line-focus':  '#90c0f9',

        // ── Navigation ───────────────────────────────────────────────
        '--color-nav-bg':        '#09090c',
        '--color-nav-active-bg': 'rgba(255,255,255,0.13)',
        '--color-nav-text':      '#9aa0b4',
        '--color-nav-hover-bg':  'rgba(255,255,255,0.06)',

        // ── Sidebar chrome ────────────────────────────────────────────
        '--color-sidenav-surface':          '#1a1d24',
        '--color-sidenav-surface-hover':    'rgba(255,255,255,0.05)',
        '--color-sidenav-surface-elevated': 'rgba(255,255,255,0.10)',
        '--color-sidenav-border':           'rgba(255,255,255,0.08)',
        '--color-sidenav-fg-primary':       '#f4f4f6',
        '--color-sidenav-fg-secondary':     '#c5c7d0',
        '--color-sidenav-fg-muted':         '#8a8d9b',

        // ── Notification badge ────────────────────────────────────────
        '--color-notification-bg': '#c0352a',  // muted dark red

        // ── Status tile colors — exact same as icon colors ───────────
        // tiles = same as row icons
        '--color-tile-not-started': '#3a3e48',  // = action-primary
        '--color-tile-outstanding': '#f0a840',  // = status-warning
        '--color-tile-fulfilled':   '#40cc90',  // = status-success
        '--color-tile-overdue':     '#f06060',  // = status-error

        // ── Tile flag icon / meta unread ─────────────────────────────
        '--color-tile-flag':   '#111114',  // matches canvas — stamp effect on colored tiles
        '--color-meta-unread': '#c0c3ce',  // lighter than fg-primary for emphasis

        // ── Actions ──────────────────────────────────────────────────
        '--color-action-primary':       '#c4c7d0',  // fg-primary level — visible selection ring
        '--color-action-primary-hover': '#d8dae2',

        // ── Outstanding status icon ───────────────────────────────────
        '--color-status-outstanding': '#3a3e48',  // matches tile-not-started

        // icons = bright fg (like E-Sig badge text #4fe4ff)
        '--color-status-success':     '#40cc90',  // bright teal-green
        '--color-status-warning':     '#f0a840',  // amber
        '--color-status-error':       '#f06060',  // bright red
        '--color-status-error-hover': '#f87878',

        // ── Status surfaces — info (blue) ────────────────────────────
        '--color-status-info-surface': 'rgba(56,189,248,0.15)',
        '--color-status-info-border':  'rgba(56,189,248,0.30)',
        '--color-status-info-fg':      '#38BDF8',

        // ── Status surfaces — success (green) ────────────────────────
        '--color-status-success-surface': 'rgba(34,197,94,0.15)',
        '--color-status-success-border':  'rgba(34,197,94,0.30)',
        '--color-status-success-fg':      '#22C55E',

        // ── Status surfaces — warning (amber) ────────────────────────
        '--color-status-warning-surface': 'rgba(245,158,11,0.15)',
        '--color-status-warning-border':  'rgba(245,158,11,0.30)',
        '--color-status-warning-fg':      '#F59E0B',

        // ── Status surfaces — error (red) ────────────────────────────
        '--color-status-error-surface': 'rgba(239,68,68,0.15)',
        '--color-status-error-border':  'rgba(239,68,68,0.30)',
        '--color-status-error-fg':      '#EF4444',

        // ── Status surfaces — cerulean ────────────────────────────────
        '--color-status-cerulean-surface': colors.cerulean[950],
        '--color-status-cerulean-border':  colors.cerulean[700],
        '--color-status-cerulean-fg':      colors.cerulean[300],

        // ── Status surfaces — orange ──────────────────────────────────
        '--color-status-orange-surface': '#4a2c16',  // dark muted orange
        '--color-status-orange-border':  'rgba(249,115,22,0.30)',
        '--color-status-orange-fg':      '#e8935a',  // soft warm orange

        // ── Status surfaces — pink ────────────────────────────────────
        '--color-status-pink-surface': 'rgba(236,72,153,0.15)',
        '--color-status-pink-border':  'rgba(236,72,153,0.30)',
        '--color-status-pink-fg':      colors.pink[300],

        // ── Status surfaces — eggplant ────────────────────────────────
        '--color-status-eggplant-surface': colors.eggplant[950],
        '--color-status-eggplant-border':  colors.eggplant[700],
        '--color-status-eggplant-fg':      colors.eggplant[300],

        // ── Status surfaces — purple ──────────────────────────────────
        '--color-status-purple-surface':       '#1e1c28',  // barely-there purple tint
        '--color-status-purple-surface-hover': '#252230',
        '--color-status-purple-border':        'rgba(168,85,247,0.12)',
        '--color-status-purple-fg':            '#b89ee0',  // soft muted purple
        '--color-status-purple-avatar-bg':     '#2e1a6b',  // purple-900, muted but distinct from card surface

        // ── Scrollbar ─────────────────────────────────────────────────────
        '--color-scrollbar-thumb': '#3a3e48',
        '--color-scrollbar-track': 'transparent',

        // ── Semantic spacing (same in both modes) ─────────────────────────
        '--spacing-panel-compact': '12px',
        '--spacing-panel':         '16px',
        '--spacing-panel-relaxed': '24px',
        '--spacing-section-gap':   '24px',
      },
      // Sidebar instance-level theme overrides — flip chrome without affecting the document
      '[data-theme="light"]': {
        '--color-sidenav-surface':          '#ffffff',
        '--color-sidenav-surface-hover':    'var(--color-bg-surface)',
        '--color-sidenav-surface-elevated': 'var(--color-bg-recessed)',
        '--color-sidenav-border':           'var(--color-line)',
        '--color-sidenav-fg-primary':       'var(--color-fg-primary)',
        '--color-sidenav-fg-secondary':     'var(--color-fg-secondary)',
        '--color-sidenav-fg-muted':         'var(--color-fg-muted)',
      },
      '[data-theme="dark"]': {
        '--color-sidenav-surface':          '#1a1d24',
        '--color-sidenav-surface-hover':    'rgba(255,255,255,0.05)',
        '--color-sidenav-surface-elevated': 'rgba(255,255,255,0.10)',
        '--color-sidenav-border':           'rgba(255,255,255,0.08)',
        '--color-sidenav-fg-primary':       '#f4f4f6',
        '--color-sidenav-fg-secondary':     '#c5c7d0',
        '--color-sidenav-fg-muted':         '#8a8d9b',
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          // Backgrounds
          'canvas':     'var(--color-bg-canvas)',
          'surface':    'var(--color-bg-surface)',
          'elevated':   'var(--color-bg-elevated)',
          'recessed':   'var(--color-bg-recessed)',
          'row-hover':  'var(--color-bg-hover)',
          'row-active': 'var(--color-bg-active)',

          // Accordion
          'accordion-hover': 'var(--color-accordion-hover)',

          // Request row
          'row-bg':              'var(--color-row-bg)',
          'row-hover-bg':        'var(--color-row-hover-bg)',
          'row-selected-bg':     'var(--color-row-selected-bg)',
          'row-selected-border': 'var(--color-row-selected-border)',

          // Foreground
          'fg-heading':   'var(--color-fg-heading)',
          'fg-primary':   'var(--color-fg-primary)',
          'fg-secondary': 'var(--color-fg-secondary)',
          'fg-muted':     'var(--color-fg-muted)',
          'fg-link':      'var(--color-fg-link)',
          'fg-on-accent': 'var(--color-fg-on-accent)',

          // Navigation
          'nav-bg':        'var(--color-nav-bg)',
          'nav-border':    'var(--color-nav-border)',
          'nav-active-bg': 'var(--color-nav-active-bg)',
          'nav-text':      'var(--color-nav-text)',

          // Sidebar chrome
          'sidenav-surface':           'var(--color-sidenav-surface)',
          'sidenav-surface-hover':     'var(--color-sidenav-surface-hover)',
          'sidenav-surface-elevated':  'var(--color-sidenav-surface-elevated)',
          'sidenav-border':            'var(--color-sidenav-border)',
          'sidenav-fg-primary':        'var(--color-sidenav-fg-primary)',
          'sidenav-fg-secondary':      'var(--color-sidenav-fg-secondary)',
          'sidenav-fg-muted':          'var(--color-sidenav-fg-muted)',

          // Borders
          'line':        'var(--color-line)',
          'line-strong': 'var(--color-line-strong)',
          'line-focus':  'var(--color-line-focus)',

          // Actions
          'action-primary':       'var(--color-action-primary)',
          'action-primary-hover': 'var(--color-action-primary-hover)',

          // Tile flag / meta
          'dot-unread':     'var(--color-dot-unread)',
          'dot-attention':  'var(--color-dot-attention)',
          'tile-flag':   'var(--color-tile-flag)',
          'meta-unread': 'var(--color-meta-unread)',

          // Status accents
          'status-outstanding':   'var(--color-status-outstanding)',
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

          // Status surfaces — cerulean
          'status-cerulean-surface': 'var(--color-status-cerulean-surface)',
          'status-cerulean-border':  'var(--color-status-cerulean-border)',
          'status-cerulean-fg':      'var(--color-status-cerulean-fg)',

          // Status surfaces — orange
          'status-orange-surface': 'var(--color-status-orange-surface)',
          'status-orange-border':  'var(--color-status-orange-border)',
          'status-orange-fg':      'var(--color-status-orange-fg)',

          // Status surfaces — pink
          'status-pink-surface': 'var(--color-status-pink-surface)',
          'status-pink-border':  'var(--color-status-pink-border)',
          'status-pink-fg':      'var(--color-status-pink-fg)',

          // Status surfaces — eggplant
          'status-eggplant-surface': 'var(--color-status-eggplant-surface)',
          'status-eggplant-border':  'var(--color-status-eggplant-border)',
          'status-eggplant-fg':      'var(--color-status-eggplant-fg)',

          // Status surfaces — purple
          'status-purple-surface':       'var(--color-status-purple-surface)',
          'status-purple-surface-hover': 'var(--color-status-purple-surface-hover)',
          'status-purple-border':        'var(--color-status-purple-border)',
          'status-purple-fg':            'var(--color-status-purple-fg)',
          'status-purple-avatar-bg':     'var(--color-status-purple-avatar-bg)',

          // Scrollbar
          'scrollbar-thumb': 'var(--color-scrollbar-thumb)',
          'scrollbar-track': 'var(--color-scrollbar-track)',
        },
        spacing: {
          // Semantic layout spacing
          'panel-compact':  'var(--spacing-panel-compact)',
          'panel':          'var(--spacing-panel)',
          'panel-relaxed':  'var(--spacing-panel-relaxed)',
          'section-gap':    'var(--spacing-section-gap)',
        },
      },
    },
  },
);
