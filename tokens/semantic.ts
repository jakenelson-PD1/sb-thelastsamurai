import plugin from 'tailwindcss/plugin';
import { colors } from './colors';

// ─────────────────────────────────────────────────────────────────────────────
// Semantic tokens — universal role-first architecture.
//
// CSS var naming: `--color-<group>-<role>` (e.g. `--color-surface-canvas-50`,
// `--color-text-primary`, `--color-border-default`). Surfaces use the
// `canvas-{shade}` convention to surface the underlying primitive in the
// var name (mirrors Figma's Semantic collection naming).
// Tailwind class names use the SHORT role since the utility prefix already
// implies the group (e.g. `text-primary` not `text-text-primary`,
// `bg-canvas` not `bg-surface-canvas`). Borders use `line` as the alias
// (`border-line`, `ring-line-focus`) rather than `border-default` — keeps
// the class names ergonomic without the awkward `border-border-default`.
//
// Group taxonomy (industry-conventional — M3 / Carbon / Primer aligned):
//   surface/    — backgrounds (canvas, surface, elevated, recessed, pressed,
//                 row-selected, scrollbar, notification, scrim, hover-overlay,
//                 *-surface). `surface/default` (bg-surface) doubles as the
//                 row-hover state — same subtle gray, no extra token needed.
//   text/       — text + icon colors (heading, primary, secondary, muted,
//                 link, on-accent, tile-flag, *-fg)
//   border/     — strokes (default, strong, focus, row-selected, *-border)
//   action/     — interactive primary (primary, primary-hover)
//   status/     — status colors at -500 (success/warning/error/error-hover/
//                 attention/cerulean/purple/pink/eggplant) + surface triples
//                 for info/success/warning/error/cerulean/orange/pink/eggplant/
//                 purple. Each flat -500 token doubles as the small-dot color.
//   swatch/     — large status color swatches (not-started/fulfilled/
//                 outstanding/overdue) — fills FilterSwatch / StatusTile
//
// (No dedicated header/ or sidenav/ groups — both fold into surface/.
//  surface/header-* covers the top header chrome (always-dark, light=brand-navy /
//  dark=near-black). surface/sidenav-* aliases surface/header-bg so a dark
//  sidebar reads identically. Tailwind class names stay short — `bg-header-bg`,
//  `bg-sidenav-surface` — for consumer ergonomics.)
// ─────────────────────────────────────────────────────────────────────────────
export const semanticPlugin = plugin(
  function ({ addBase }) {
    addBase({
      // Scrollbar utility — applied via .scroll-area class.
      // Uses surface-canvas-300 (= neutral/300) for both light + dark thumb.
      '.scroll-area': {
        'scrollbar-width': 'thin',
        'scrollbar-color': 'var(--color-surface-canvas-300) transparent',
        '&::-webkit-scrollbar': { width: '6px', height: '6px' },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': {
          background: 'var(--color-surface-canvas-300)',
          'border-radius': '3px',
        },
      },
      ':root': {
        // ── Surfaces ─────────────────────────────────────────────────
        // CSS vars use the `canvas-{shade}` naming to surface the underlying
        // primitive shade directly in the variable name (mirrors Figma).
        // Tailwind aliases below keep the role-based class names
        // (bg-canvas, bg-surface, bg-elevated, bg-recessed, bg-pressed,
        // bg-row-selected, bg-scrollbar) for consumer ergonomics.
        // Full neutral ramp surfaces (canvas-50..500); -300/-400/-500 added
        // to give designers the full picker for tile/divider/text-on-light
        // contexts. The light values just alias the neutral primitives.
        '--color-surface-canvas-0':        '#ffffff',
        '--color-surface-canvas-50':       colors.neutral[50],
        '--color-surface-canvas-100':      colors.neutral[100],
        '--color-surface-canvas-200':      colors.neutral[200],
        '--color-surface-canvas-300':      colors.neutral[300],
        '--color-surface-canvas-400':      colors.neutral[400],
        '--color-surface-canvas-500':      colors.neutral[500],
        '--color-surface-hover-overlay':   'rgba(0, 0, 0, 0.08)',
        '--color-surface-scrim':           'rgba(0, 0, 0, 0.40)',

        // ── Text ─────────────────────────────────────────────────────
        // Names carry the underlying primitive shade (mirrors Figma).
        '--color-text-primary-900':     colors.neutral[900],
        '--color-text-secondary-700':   colors.neutral[700],
        '--color-text-tertiary-500':    colors.neutral[500],
        '--color-text-icon-800':        colors.neutral[800],
        '--color-text-white-0':         '#ffffff',
        '--color-text-link':            colors.brand[600],

        // ── Borders ──────────────────────────────────────────────────
        '--color-border-default':       colors.neutral[200],
        '--color-border-strong':        colors.neutral[300],
        '--color-border-focus':         colors.brand[300],
        '--color-border-info-border':   colors.brand[200],

        // ── Action (interactive surfaces — button states + accents) ─
        '--color-action-primary-500':            colors.brand[500],
        '--color-action-primary-hover-600':      colors.brand[600],
        '--color-action-primary-selected-700':   colors.brand[700],
        '--color-action-destructive':            'var(--color-accent-red)',
        '--color-action-destructive-hover':      colors.red[600],
        '--color-action-attention-destructive':       colors.red[500],
        '--color-action-attention-destructive-hover': colors.red[600],
        '--color-action-selected':               colors.brand[50],

        // ── Deprecated aliases for legacy action/* token names ───────
        // The semantic reorg renamed several action/ tokens to bake the
        // primitive shade into the name. These aliases keep downstream
        // consumers (Suralink production app, in-repo stories) working
        // without code changes. Safe to remove in a future major once
        // all consumers migrate to the -500/-600 canonical names.
        '--color-action-primary':       'var(--color-action-primary-500)',
        '--color-action-primary-hover': 'var(--color-action-primary-hover-600)',
        '--color-action-danger':        'var(--color-action-destructive)',
        '--color-action-danger-hover':  'var(--color-action-destructive-hover)',
        '--color-action-notification':  'var(--color-action-attention-destructive)',

        // ── (former indicator/* group ─ now lives in status/* + action/) ──
        // All small status indicators bumped to -500 to match the rest of the
        // system; brand/success/warning/error folded into existing action +
        // status flat accents; cerulean/purple/pink/eggplant/attention moved
        // into status/* as flat accents (joining success/warning/error).

        // ── Tiles (large status swatches) ────────────────────────────
        '--color-request-status-not-started': colors.brand[100],
        '--color-request-status-outstanding': colors.yellow[300],
        '--color-request-status-fulfilled':   colors.green[300],
        '--color-request-status-overdue':     colors.red[300],

        // ── Deprecated aliases for legacy `swatch/*` token names ─────
        // The semantic reorg renamed `swatch/*` → `request-status/*`. These
        // aliases keep downstream consumers (Suralink production app, any
        // `var(--color-swatch-*)` references in stories or external code)
        // working without code changes. Safe to remove in a future major
        // once all consumers migrate to `var(--color-request-status-*)`.
        '--color-swatch-not-started': 'var(--color-request-status-not-started)',
        '--color-swatch-outstanding': 'var(--color-request-status-outstanding)',
        '--color-swatch-fulfilled':   'var(--color-request-status-fulfilled)',
        '--color-swatch-overdue':     'var(--color-request-status-overdue)',

        // ── Status accents (icons / strong colors / small dots) ──────
        // Note: status/outstanding folded into action/primary — see action/.
        // success/warning/error were already at -500; absorbed the matching
        // indicator/* tokens of the same hue. attention/cerulean/purple/
        // pink/eggplant moved here from indicator/* (now at -500).
        '--color-accent-green':     colors.green[500],
        '--color-accent-yellow':     colors.yellow[500],
        '--color-accent-red':       colors.red[500],
        '--color-accent-orange':   colors.orange[500],
        '--color-accent-cerulean':    colors.cerulean[500],
        '--color-accent-purple':      colors.purple[500],
        '--color-accent-pink':        colors.pink[500],
        '--color-accent-eggplant':    colors.eggplant[500],

        // (Info: accent/info-border moved to border/info-border above.
        //  accent/info-fg folded into action/primary-hover-600 — brand-600
        //  serves both link-text and info-callout text roles.)

        // ── Status surfaces — success ────────────────────────────────
        '--color-accent-green-surface': colors.green[50],
        '--color-accent-green-border':  colors.green[200],
        '--color-accent-green-fg':      colors.green[700],

        // ── Status surfaces — warning ────────────────────────────────
        '--color-accent-yellow-surface': colors.yellow[50],
        '--color-accent-yellow-border':  colors.yellow[200],
        '--color-accent-yellow-fg':      colors.yellow[700],

        // ── Status surfaces — error ──────────────────────────────────
        '--color-accent-red-surface': colors.red[50],
        '--color-accent-red-border':  colors.red[200],
        '--color-accent-red-fg':      colors.red[700],

        // ── Status surfaces — cerulean ───────────────────────────────
        '--color-accent-cerulean-surface': colors.cerulean[50],
        '--color-accent-cerulean-border':  colors.cerulean[200],
        '--color-accent-cerulean-fg':      colors.cerulean[700],

        // ── Status surfaces — orange ─────────────────────────────────
        '--color-accent-orange-surface': colors.orange[50],
        '--color-accent-orange-border':  colors.orange[200],
        '--color-accent-orange-fg':      colors.orange[700],

        // ── Status surfaces — pink ───────────────────────────────────
        '--color-accent-pink-surface': colors.pink[50],
        '--color-accent-pink-border':  colors.pink[200],
        '--color-accent-pink-fg':      colors.pink[700],

        // ── Status surfaces — eggplant ───────────────────────────────
        '--color-accent-eggplant-surface': colors.eggplant[50],
        '--color-accent-eggplant-border':  colors.eggplant[200],
        '--color-accent-eggplant-fg':      colors.eggplant[700],

        // ── Status surfaces — purple ─────────────────────────────────
        '--color-accent-purple-surface':       colors.purple[50],
        '--color-accent-purple-border': colors.purple[100],
        '--color-accent-purple-fg':            colors.purple[700],

        // ── Nav chrome (always-dark) ─────────────────────────────────
        // header-border → fold to surface/canvas-400 (both n/400).
        // header-text   → fold to surface/canvas-300 (both n/300 light).
        '--color-surface-nav-950':          colors.brand[950],
        '--color-surface-nav-active':       colors.brand[800],
        '--color-surface-header-hover-bg':  'rgba(255,255,255,0.08)',

        // ── Sidenav (always-dark — only the unique row-hover/elevated + muted) ─
        // The sidebar uses surface/header-bg for its background and folds its
        // text + border into the canonical text/on-accent, surface/header-text,
        // and surface/header-hover-bg tokens. Only the two row hover/elevated
        // overlays + the muted text remain as dedicated sidenav tokens.
        '--color-surface-sidenav-bg-hover':        'rgba(255,255,255,0.05)',
        '--color-surface-sidenav-bg-elevated':     'rgba(255,255,255,0.10)',
        '--color-surface-sidenav-text-muted':      colors.neutral[500],

        // ── Semantic spacing (mode-independent) ──────────────────────
        '--spacing-panel-compact': '12px',
        '--spacing-panel':         '16px',
        '--spacing-panel-relaxed': '24px',
        '--spacing-section-gap':   '24px',
      },
      '.dark': {
        // ── Surfaces ─────────────────────────────────────────────────
        '--color-surface-canvas-0':        '#121215',
        '--color-surface-canvas-50':       '#111114',
        '--color-surface-canvas-100':      '#161619',
        '--color-surface-canvas-200':      '#0e0e11',
        '--color-surface-canvas-300':      '#2e2e36',
        '--color-surface-canvas-400':      colors.neutral[400],
        '--color-surface-canvas-500':      colors.neutral[500],
        '--color-surface-hover-overlay':   'rgba(255, 255, 255, 0.08)',
        '--color-surface-scrim':           'rgba(0, 0, 0, 0.60)',

        // ── Text ─────────────────────────────────────────────────────
        '--color-text-primary-900':   '#c4c7d0',
        '--color-text-secondary-700': '#55586a',
        '--color-text-tertiary-500':  '#72758a',
        '--color-text-icon-800':      '#111114',
        '--color-text-white-0':       '#ffffff',
        '--color-text-link':          '#3a5e88',

        // ── Borders ──────────────────────────────────────────────────
        '--color-border-default':       '#1c1c22',
        '--color-border-strong':        '#262630',
        '--color-border-focus':         colors.brand[200],
        '--color-border-info-border':   '#1e3d6e',

        // ── Action ──────────────────────────────────────────────────
        '--color-action-primary-500':                 '#6098e0',
        '--color-action-primary-hover-600':           '#d8dae2',
        '--color-action-primary-selected-700':        '#38bdf8',
        '--color-action-destructive':                 'var(--color-accent-red)',
        '--color-action-destructive-hover':           '#f87878',
        '--color-action-attention-destructive':       'var(--color-accent-red)',
        '--color-action-attention-destructive-hover': '#f87878',
        '--color-action-selected':                    '#24242b',

        // ── (former indicator/* group ─ see status/ + action/) ───────

        // ── Tiles ─────────────────────────────────────────────────────
        '--color-request-status-not-started': '#3a3e48',
        '--color-request-status-outstanding': '#f0a840',
        '--color-request-status-fulfilled':   '#40cc90',
        '--color-request-status-overdue':     '#f06060',

        // ── Status accents ───────────────────────────────────────────
        '--color-accent-green':     '#40cc90',
        '--color-accent-yellow':     '#f0a840',
        '--color-accent-red':       '#f06060',
        '--color-accent-orange':   '#f06060',
        '--color-accent-cerulean':    colors.cerulean[400],
        '--color-accent-purple':      '#b89ee0',
        '--color-accent-pink':        colors.pink[400],
        '--color-accent-eggplant':    colors.eggplant[400],

        // ── Status surfaces ──────────────────────────────────────────
        // (Info: accent/info-border moved to border/info-border above;
        //  accent/info-fg folded into action/primary-hover-600.)
        '--color-accent-green-surface': 'rgba(34,197,94,0.15)',
        '--color-accent-green-border':  'rgba(34,197,94,0.30)',
        '--color-accent-green-fg':      '#22C55E',
        '--color-accent-yellow-surface': 'rgba(245,158,11,0.15)',
        '--color-accent-yellow-border':  'rgba(245,158,11,0.30)',
        '--color-accent-yellow-fg':      '#F59E0B',
        '--color-accent-red-surface':   'rgba(239,68,68,0.15)',
        '--color-accent-red-border':    'rgba(239,68,68,0.30)',
        '--color-accent-red-fg':        '#EF4444',
        '--color-accent-cerulean-surface': colors.cerulean[950],
        '--color-accent-cerulean-border':  colors.cerulean[600],
        '--color-accent-cerulean-fg':      colors.cerulean[300],
        '--color-accent-orange-surface':   '#4a2c16',
        '--color-accent-orange-border':    'rgba(249,115,22,0.30)',
        '--color-accent-orange-fg':        '#e8935a',
        '--color-accent-pink-surface':     'rgba(236,72,153,0.15)',
        '--color-accent-pink-border':      'rgba(236,72,153,0.30)',
        '--color-accent-pink-fg':          colors.pink[300],
        '--color-accent-eggplant-surface': colors.eggplant[950],
        '--color-accent-eggplant-border':  colors.eggplant[600],
        '--color-accent-eggplant-fg':      colors.eggplant[300],
        '--color-accent-purple-surface':       '#1e1c28',
        '--color-accent-purple-border': '#252230',
        '--color-accent-purple-fg':            '#b89ee0',

        // ── Header chrome ────────────────────────────────────────────
        '--color-surface-nav-950':           '#09090c',
        '--color-surface-nav-active':        'rgba(255,255,255,0.13)',
        '--color-surface-header-hover-bg':   'rgba(255,255,255,0.06)',

        // ── Sidenav (dark — only the unique row overlays + muted text) ─
        '--color-surface-sidenav-bg-hover':        'rgba(255,255,255,0.05)',
        '--color-surface-sidenav-bg-elevated':     'rgba(255,255,255,0.10)',
        '--color-surface-sidenav-text-muted':      colors.neutral[500],

        // ── Semantic spacing (same in both modes) ─────────────────────
        '--spacing-panel-compact': '12px',
        '--spacing-panel':         '16px',
        '--spacing-panel-relaxed': '24px',
        '--spacing-section-gap':   '24px',
      },

      // ── Per-subtree theme overrides ─────────────────────────────────
      // `<element data-theme="light">…` forces surface/header-bg to its LIGHT
      // value (brand-navy) regardless of document mode.
      // `<element data-theme="dark">…` forces it to the DARK value.
      // Use on the Sidebar so it can render its mode independently of the
      // surrounding document theme.
      '[data-theme="light"]': {
        '--color-surface-nav-950':               colors.brand[950],
      },
      '[data-theme="dark"]': {
        '--color-surface-nav-950':               colors.neutral[950],
      },
    });
  },
  {
    theme: {
      extend: {
        // Tailwind utility classes — short names (utility prefix implies the group).
        // Examples: `bg-canvas`, `text-primary`, `border-line`, `bg-row-selected`.
        colors: {
          // ── Surfaces (used as bg-*) ─────────────────────────────────
          // Tailwind class names use role-first naming (bg-canvas, bg-surface,
          // bg-elevated) for consumer ergonomics. The underlying CSS vars use
          // canvas-{shade} naming to mirror Figma + surface the primitive
          // shade in the var name itself.
          canvas:            'var(--color-surface-canvas-50)',   // neutral/50  — page background
          surface:           'var(--color-surface-canvas-100)',  // neutral/100 — subtle hover surface
          elevated:          'var(--color-surface-canvas-0)',    // neutral/0   — card / panel bg
          recessed:          'var(--color-surface-canvas-200)',  // neutral/200 — recessed bg
          pressed:           'var(--color-surface-canvas-300)',  // neutral/300 — pressed button fill
          'hover-overlay':   'var(--color-surface-hover-overlay)',
          'row-selected':    'var(--color-action-selected)', // brand/50    — selected row + info-tinted surfaces
          scrollbar:         'var(--color-surface-canvas-300)',  // (alias to pressed — same neutral/300)
          notification:      'var(--color-action-attention-destructive)',
          scrim:             'var(--color-surface-scrim)',

          // ── Text (used as text-*) ───────────────────────────────────
          heading:      'var(--color-text-primary-900)',  // (heading var deleted — folded to primary-900)
          primary:      'var(--color-text-primary-900)',
          secondary:    'var(--color-text-secondary-700)',
          muted:        'var(--color-text-tertiary-500)',
          link:         'var(--color-text-link)',
          'on-accent':  'var(--color-text-white-0)',
          'tile-flag':  'var(--color-text-icon-800)',

          // ── Borders (used as border-*, ring-*, bg-*) ────────────────
          // Aliased as `line` rather than `border-default` so the class names
          // stay ergonomic (`border-line`, `ring-line-focus`) — the CSS var
          // (`--color-border-default`) carries the industry-standard semantic
          // name; the Tailwind alias is purely a class-ergonomics layer.
          'line':              'var(--color-border-default)',
          'line-strong':       'var(--color-border-strong)',
          'line-focus':        'var(--color-border-focus)',

          // ── Action (canonical brand-primary) ────────────────────────
          // action-primary is the single source-of-truth for "brand blue
          // fill/stroke/text". Use it for primary buttons, selected-row
          // accents, unread dots, outstanding-status icons.
          'action-primary':          'var(--color-action-primary-500)',
          'action-primary-hover':    'var(--color-action-primary-hover-600)',
          'action-primary-selected': 'var(--color-action-primary-selected-700)',
          'action-danger':           'var(--color-action-destructive)',
          'action-danger-hover':     'var(--color-action-destructive-hover)',

          // ── (Indicators group eliminated — see status/ + action/) ──
          // The 9 former indicator/* tokens were bumped to -500 and either
          // folded into matching action/status tokens (brand → action-primary,
          // success → status-success, warning → status-warning, error →
          // status-error) or renamed to status/* flat accents (attention,
          // cerulean, purple, pink, eggplant).

          // ── Tiles ───────────────────────────────────────────────────
          'swatch-not-started': 'var(--color-request-status-not-started)',
          'swatch-outstanding': 'var(--color-request-status-outstanding)',
          'swatch-fulfilled':   'var(--color-request-status-fulfilled)',
          'swatch-overdue':     'var(--color-request-status-overdue)',

          // ── Status accents (flat -500 colors for icons + dots) ──────
          // outstanding folded into action-primary (both brand[500]).
          'status-success':     'var(--color-accent-green)',
          'status-warning':     'var(--color-accent-yellow)',
          'status-error':       'var(--color-accent-red)',
          'status-attention':   'var(--color-accent-orange)',
          'status-cerulean':    'var(--color-accent-cerulean)',
          'status-purple':      'var(--color-accent-purple)',
          'status-pink':        'var(--color-accent-pink)',
          'status-eggplant':    'var(--color-accent-eggplant)',

          // ── Status surfaces ─────────────────────────────────────────
          // status-info-border relocated to border/info-border.
          // status-info-fg folded into action/primary-hover-600.
          'status-info-border':     'var(--color-border-info-border)',
          'status-info-fg':         'var(--color-action-primary-hover-600)',
          'status-success-surface': 'var(--color-accent-green-surface)',
          'status-success-border':  'var(--color-accent-green-border)',
          'status-success-fg':      'var(--color-accent-green-fg)',
          'status-warning-surface': 'var(--color-accent-yellow-surface)',
          'status-warning-border':  'var(--color-accent-yellow-border)',
          'status-warning-fg':      'var(--color-accent-yellow-fg)',
          'status-error-surface':   'var(--color-accent-red-surface)',
          'status-error-border':    'var(--color-accent-red-border)',
          'status-error-fg':        'var(--color-accent-red-fg)',
          'status-cerulean-surface':'var(--color-accent-cerulean-surface)',
          'status-cerulean-border': 'var(--color-accent-cerulean-border)',
          'status-cerulean-fg':     'var(--color-accent-cerulean-fg)',
          'status-orange-surface':  'var(--color-accent-orange-surface)',
          'status-orange-border':   'var(--color-accent-orange-border)',
          'status-orange-fg':       'var(--color-accent-orange-fg)',
          'status-pink-surface':    'var(--color-accent-pink-surface)',
          'status-pink-border':     'var(--color-accent-pink-border)',
          'status-pink-fg':         'var(--color-accent-pink-fg)',
          'status-eggplant-surface':'var(--color-accent-eggplant-surface)',
          'status-eggplant-border': 'var(--color-accent-eggplant-border)',
          'status-eggplant-fg':     'var(--color-accent-eggplant-fg)',
          'status-purple-surface':       'var(--color-accent-purple-surface)',
          'status-purple-border': 'var(--color-accent-purple-border)',
          'status-purple-fg':            'var(--color-accent-purple-fg)',

          // ── Header chrome ───────────────────────────────────────────
          'header-bg':        'var(--color-surface-nav-950)',
          'header-border':    'var(--color-surface-canvas-400)', // folded — both n/400
          'header-active-bg': 'var(--color-surface-nav-active)',
          'header-hover-bg':  'var(--color-surface-header-hover-bg)',
          'header-text':      'var(--color-surface-canvas-300)',

          // ── Sidenav (CSS vars under surface/sidenav-* — preserves
          //    the original Tailwind class names) ─────────────────────
          // After consolidation: sidenav-* aliases redirect to the canonical
          // surface/text tokens they now share. Only -surface-hover, -surface-
          // elevated, and -fg-muted still have unique sidenav-only CSS vars.
          'sidenav-surface':          'var(--color-surface-nav-950)',
          'sidenav-surface-hover':    'var(--color-surface-sidenav-bg-hover)',
          'sidenav-surface-elevated': 'var(--color-surface-sidenav-bg-elevated)',
          'sidenav-border':           'var(--color-surface-header-hover-bg)',
          'sidenav-fg-primary':       'var(--color-text-white-0)',
          'sidenav-fg-secondary':     'var(--color-surface-canvas-300)',
          'sidenav-fg-muted':         'var(--color-surface-sidenav-text-muted)',
        },
        spacing: {
          'panel-compact':  'var(--spacing-panel-compact)',
          'panel':          'var(--spacing-panel)',
          'panel-relaxed':  'var(--spacing-panel-relaxed)',
          'section-gap':    'var(--spacing-section-gap)',
        },
      },
    },
  },
);
