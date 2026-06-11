/// <reference types="node" />
/**
 * generate-tokens.ts
 *
 * Reads token source files and emits three W3C DTCG-format JSON files
 * for import into Figma via Token Studio:
 *
 *   figma/tokens/primitives.json       — raw palette + spacing/radius/shadow
 *   figma/tokens/semantic.light.json   — light mode semantic aliases
 *   figma/tokens/semantic.dark.json    — dark mode semantic aliases
 *
 * Run: npx tsx figma/generate-tokens.ts
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { colors } from '../tokens/colors.js';
import { spacing } from '../tokens/spacing.js';
import { borderRadius } from '../tokens/radii.js';
import { boxShadow } from '../tokens/shadows.js';

// ─── Types ────────────────────────────────────────────────────────────────────

type DtcgColor     = { $type: 'color';     $value: string };
type DtcgDimension = { $type: 'dimension'; $value: string };
type DtcgShadow    = { $type: 'shadow';    $value: string };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _DtcgToken    = DtcgColor | DtcgDimension | DtcgShadow;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Convert rgba(r,g,b,a) or rgb(r,g,b) → 8-digit hex (#RRGGBBAA) */
function rgbaToHex8(rgba: string): string {
  const m = rgba.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);
  if (!m) return rgba;
  const r = parseInt(m[1], 10);
  const g = parseInt(m[2], 10);
  const b = parseInt(m[3], 10);
  const a = m[4] !== undefined ? Math.round(parseFloat(m[4]) * 255) : 255;
  return '#' + [r, g, b, a].map(n => n.toString(16).padStart(2, '0').toUpperCase()).join('');
}

/** Build reverse-lookup: uppercase hex → DTCG alias e.g. {color.neutral.50} */
function buildColorAliasMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const [family, stops] of Object.entries(colors)) {
    for (const [stop, hex] of Object.entries(stops as Record<string, string>)) {
      map.set(hex.toUpperCase(), `{color.${family}.${stop}}`);
    }
  }
  return map;
}

const aliasMap = buildColorAliasMap();

/** Resolve a CSS color value to a DTCG alias or normalized literal hex */
function resolveColor(value: string): string {
  if (!value || value === 'transparent') return value;
  if (value.startsWith('rgba') || value.startsWith('rgb(')) {
    return rgbaToHex8(value);
  }
  const upper = value.toUpperCase();
  return aliasMap.get(upper) ?? value;
}

function color(value: string): DtcgColor {
  return { $type: 'color', $value: resolveColor(value) };
}

function dimension(value: string): DtcgDimension {
  return { $type: 'dimension', $value: value };
}

function shadow(value: string): DtcgShadow {
  return { $type: 'shadow', $value: value };
}

// ─── Primitives ───────────────────────────────────────────────────────────────

const primitives: Record<string, unknown> = {
  color: Object.fromEntries(
    Object.entries(colors).map(([family, stops]) => [
      family,
      Object.fromEntries(
        Object.entries(stops as Record<string, string>).map(([stop, hex]) => [
          stop,
          { $type: 'color', $value: hex },
        ])
      ),
    ])
  ),
  spacing: Object.fromEntries(
    Object.entries(spacing).map(([key, val]) => [key, dimension(val)])
  ),
  borderRadius: Object.fromEntries(
    Object.entries(borderRadius).map(([key, val]) => [key, dimension(val)])
  ),
  shadow: Object.fromEntries(
    Object.entries(boxShadow).map(([key, val]) => [key, shadow(val)])
  ),
};

// ─── Semantic — Light ─────────────────────────────────────────────────────────
// Source of truth: tokens/semantic.ts :root block

const semanticLight: Record<string, unknown> = {
  bg: {
    canvas:   color(colors.neutral[50]),
    surface:  color(colors.neutral[100]),
    elevated: color('#ffffff'),
    recessed: color(colors.neutral[200]),
    hover:    color(colors.neutral[100]),
    active:   color(colors.neutral[200]),
  },
  fg: {
    heading:     color(colors.neutral[900]),
    primary:     color(colors.neutral[900]),
    secondary:   color(colors.neutral[700]),
    muted:       color(colors.neutral[500]),
    link:        color(colors.brand[600]),
    'on-accent': color('#ffffff'),
  },
  line: {
    default: color(colors.neutral[200]),
    strong:  color(colors.neutral[300]),
    focus:   color(colors.brand[500]),
  },
  action: {
    primary:         color(colors.brand[500]),
    'primary-hover': color(colors.brand[600]),
  },
  nav: {
    bg:          color(colors.brand[950]),
    border:      color(colors.neutral[400]),
    'active-bg': color(colors.brand[800]),
    text:        color(colors.neutral[300]),
    'hover-bg':  color('rgba(255,255,255,0.08)'),
  },
  row: {
    bg:                color('#ffffff'),
    'hover-bg':        color(colors.neutral[100]),
    'selected-bg':     color(colors.brand[50]),
    'selected-border': color(colors.brand[500]),
  },
  dot: {
    unread:    color(colors.brand[500]),
    attention: color(colors.orange[600]),
  },
  tile: {
    'not-started': color(colors.brand[100]),
    outstanding:   color(colors.yellow[300]),
    fulfilled:     color(colors.green[300]),
    overdue:       color(colors.red[300]),
    flag:          color(colors.neutral[800]),
  },
  meta: {
    unread: color(colors.neutral[700]),
  },
  notification: {
    bg: color(colors.red[500]),
  },
  accordion: {
    hover: color(colors.neutral[300]),
  },
  status: {
    outstanding:   color(colors.brand[500]),
    success:       color(colors.green[500]),
    warning:       color(colors.yellow[500]),
    error:         color(colors.red[500]),
    'error-hover': color(colors.red[600]),

    'info-surface': color(colors.brand[50]),
    'info-border':  color(colors.brand[200]),
    'info-fg':      color(colors.brand[700]),

    'success-surface': color(colors.green[50]),
    'success-border':  color(colors.green[200]),
    'success-fg':      color(colors.green[700]),

    'warning-surface': color(colors.yellow[50]),
    'warning-border':  color(colors.yellow[200]),
    'warning-fg':      color(colors.yellow[700]),

    'error-surface': color(colors.red[50]),
    'error-border':  color(colors.red[200]),
    'error-fg':      color(colors.red[700]),

    'cerulean-surface': color(colors.cerulean[50]),
    'cerulean-border':  color(colors.cerulean[200]),
    'cerulean-fg':      color(colors.cerulean[700]),

    'orange-surface': color(colors.orange[50]),
    'orange-border':  color(colors.orange[200]),
    'orange-fg':      color(colors.orange[700]),

    'pink-surface': color(colors.pink[50]),
    'pink-border':  color(colors.pink[200]),
    'pink-fg':      color(colors.pink[700]),

    'eggplant-surface': color(colors.eggplant[50]),
    'eggplant-border':  color(colors.eggplant[200]),
    'eggplant-fg':      color(colors.eggplant[700]),

    'purple-surface':       color(colors.purple[50]),
    'purple-surface-hover': color(colors.purple[100]),
    'purple-border':        color(colors.purple[200]),
    'purple-fg':            color(colors.purple[700]),
    'purple-avatar-bg':     color(colors.purple[100]),
  },
  scrollbar: {
    thumb: color(colors.neutral[300]),
    track: { $type: 'color' as const, $value: 'transparent' },
  },
  spacing: {
    'panel-compact': dimension('12px'),
    panel:           dimension('16px'),
    'panel-relaxed': dimension('24px'),
    'section-gap':   dimension('24px'),
  },
};

// ─── Semantic — Dark ──────────────────────────────────────────────────────────
// Source of truth: tokens/semantic.ts .dark block
// rgba() values are converted to 8-digit hex for DTCG compatibility

const semanticDark: Record<string, unknown> = {
  bg: {
    canvas:   color('#111114'),
    surface:  color('#161619'),
    elevated: color('#121215'),
    recessed: color('#0e0e11'),
    hover:    color('#1c1c22'),
    active:   color('#24242b'),
  },
  fg: {
    heading:     color('#e8eaef'),
    primary:     color('#c4c7d0'),
    secondary:   color('#55586a'),
    muted:       color('#72758a'),
    link:        color('#3a5e88'),
    'on-accent': color('#ffffff'),
  },
  line: {
    default: color('#1c1c22'),
    strong:  color('#262630'),
    focus:   color('#90c0f9'),
  },
  action: {
    primary:         color('#c4c7d0'),
    'primary-hover': color('#d8dae2'),
  },
  nav: {
    bg:          color('#09090c'),
    border:      color('#09090c'),
    'active-bg': color('rgba(255,255,255,0.13)'),  // → #FFFFFF21
    text:        color('#9aa0b4'),
    'hover-bg':  color('rgba(255,255,255,0.06)'),   // → #FFFFFF0F
  },
  row: {
    bg:                color('#161619'),
    'hover-bg':        color('#111114'),
    'selected-bg':     color('#24242b'),
    'selected-border': color('#72758a'),
  },
  dot: {
    unread:    color('#6098e0'),
    attention: color('#f06060'),
  },
  tile: {
    'not-started': color('#3a3e48'),
    outstanding:   color('#f0a840'),
    fulfilled:     color('#40cc90'),
    overdue:       color('#f06060'),
    flag:          color('#111114'),
  },
  meta: {
    unread: color('#c0c3ce'),
  },
  notification: {
    bg: color('#c0352a'),
  },
  accordion: {
    hover: color('#111114'),
  },
  status: {
    outstanding:   color('#3a3e48'),
    success:       color('#40cc90'),
    warning:       color('#f0a840'),
    error:         color('#f06060'),
    'error-hover': color('#f87878'),

    'info-surface': color('rgba(56,189,248,0.15)'),   // → #38BDF826
    'info-border':  color('rgba(56,189,248,0.30)'),   // → #38BDF84D
    'info-fg':      color('#38BDF8'),

    'success-surface': color('rgba(34,197,94,0.15)'), // → #22C55E26
    'success-border':  color('rgba(34,197,94,0.30)'), // → #22C55E4D
    'success-fg':      color('#22C55E'),

    'warning-surface': color('rgba(245,158,11,0.15)'), // → #F59E0B26
    'warning-border':  color('rgba(245,158,11,0.30)'), // → #F59E0B4D
    'warning-fg':      color('#F59E0B'),

    'error-surface': color('rgba(239,68,68,0.15)'),   // → #EF444426
    'error-border':  color('rgba(239,68,68,0.30)'),   // → #EF44444D
    'error-fg':      color('#EF4444'),

    'cerulean-surface': color(colors.cerulean[950]),
    'cerulean-border':  color(colors.cerulean[700]),
    'cerulean-fg':      color(colors.cerulean[300]),

    'orange-surface': color('#4a2c16'),
    'orange-border':  color('rgba(249,115,22,0.30)'), // → #F973164D
    'orange-fg':      color('#e8935a'),

    'pink-surface': color('rgba(236,72,153,0.15)'),   // → #EC489926
    'pink-border':  color('rgba(236,72,153,0.30)'),   // → #EC48994D
    'pink-fg':      color(colors.pink[300]),

    'eggplant-surface': color(colors.eggplant[950]),
    'eggplant-border':  color(colors.eggplant[700]),
    'eggplant-fg':      color(colors.eggplant[300]),

    'purple-surface':       color('#1e1c28'),
    'purple-surface-hover': color('#252230'),
    'purple-border':        color('rgba(168,85,247,0.12)'), // → #A855F71F
    'purple-fg':            color('#b89ee0'),
    'purple-avatar-bg':     color('#2e1a6b'),
  },
  scrollbar: {
    thumb: color('#3a3e48'),
    track: { $type: 'color' as const, $value: 'transparent' },
  },
  spacing: {
    'panel-compact': dimension('12px'),
    panel:           dimension('16px'),
    'panel-relaxed': dimension('24px'),
    'section-gap':   dimension('24px'),
  },
};

// ─── Write files ──────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const outDir     = join(__dirname, 'tokens');

mkdirSync(outDir, { recursive: true });

const files: Array<{ name: string; data: unknown }> = [
  { name: 'primitives.json',     data: primitives     },
  { name: 'semantic.light.json', data: semanticLight  },
  { name: 'semantic.dark.json',  data: semanticDark   },
];

for (const { name, data } of files) {
  const outPath = join(outDir, name);
  writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n');
  console.log(`✔  Wrote ${outPath}`);
}

console.log('\n🎉  Done! Import into Figma via Token Studio:');
console.log('   Plugins → Token Studio → Settings → Sync → Local files → figma/tokens/');
console.log('\n   Collections to create:');
console.log('   1. "Primitives" — import primitives.json (hide from publishing)');
console.log('   2. "Semantic"   — import semantic.light.json + semantic.dark.json as Light/Dark modes');
