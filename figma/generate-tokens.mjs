#!/usr/bin/env node
/**
 * generate-tokens.mjs  (plain Node.js ESM — no tsx required)
 *
 * Run: node figma/generate-tokens.mjs
 *
 * Emits three DTCG JSON files into figma/tokens/:
 *   primitives.json       — raw palette + spacing/radius/shadow
 *   semantic.light.json   — light mode semantic aliases → primitives
 *   semantic.dark.json    — dark mode semantic aliases (rgba → 8-digit hex)
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ─── Raw token values (mirrors tokens/*.ts) ───────────────────────────────────

const colors = {
  brand:    { 50:'#EBF4FE', 100:'#C8E3FD', 200:'#90C0F9', 300:'#5B9EF5', 400:'#2E7AEF', 500:'#0E5AE1', 600:'#0847C0', 700:'#0242B4', 800:'#00328C', 900:'#001E5C', 950:'#001335' },
  neutral:  { 50:'#F8F9F9', 100:'#E7E7E8', 200:'#D8D9DB', 300:'#CACBCD', 400:'#BBBDBF', 500:'#808285', 600:'#636466', 700:'#454648', 800:'#323334', 900:'#282829', 950:'#1A1A1B' },
  green:    { 50:'#F1F8F5', 100:'#D8EEE6', 200:'#B8DDD0', 300:'#7EB59F', 400:'#5A9E87', 500:'#3E876E', 600:'#377D61', 700:'#2C6450', 800:'#204B3B', 900:'#143225', 950:'#0A1F16' },
  yellow:   { 50:'#FFFAEC', 100:'#FFF3CC', 200:'#FFE999', 300:'#FECE40', 400:'#F8BC12', 500:'#E5A803', 600:'#C48E02', 700:'#A07202', 800:'#7A5601', 900:'#523900', 950:'#2E1F00' },
  red:      { 50:'#FEF5F2', 100:'#FCE4DD', 200:'#F9C4B6', 300:'#F17360', 400:'#E84E38', 500:'#DD3100', 600:'#B82800', 700:'#8B1100', 800:'#6A0D00', 900:'#660000', 950:'#3D0000' },
  eggplant: { 50:'#F9F2FA', 100:'#F1E0F5', 200:'#E4C3EC', 300:'#CE93D8', 400:'#BC68CC', 500:'#A843BC', 600:'#9C27B0', 700:'#7D1F8E', 800:'#5E166A', 900:'#3E0E47', 950:'#240828' },
  purple:   { 50:'#F4EFFF', 100:'#E8DDFF', 200:'#D4C0FF', 300:'#B89EF5', 400:'#9878E0', 500:'#7D5CD4', 600:'#6E48C5', 700:'#5A38A8', 800:'#44288A', 900:'#2E1A6B', 950:'#1C0E4A' },
  orange:   { 50:'#FFEFDD', 100:'#FFE0BC', 200:'#FFC888', 300:'#FFAD55', 400:'#F48A30', 500:'#E07020', 600:'#D76523', 700:'#B54E14', 800:'#8E3A09', 900:'#662800', 950:'#3D1600' },
  pink:     { 50:'#FFE1F3', 100:'#FFC8E9', 200:'#FFA0D9', 300:'#FF70C3', 400:'#F040A8', 500:'#E0158E', 600:'#D53193', 700:'#B01478', 800:'#880E5C', 900:'#5E0840', 950:'#380424' },
  cerulean: { 50:'#EDFBFF', 100:'#DBF7FF', 200:'#AAF0FF', 300:'#4FE4FF', 400:'#00D7FF', 500:'#00C1F1', 600:'#00A9DC', 700:'#007CA7', 800:'#006A89', 900:'#005773', 950:'#00374C' },
};

const spacing = {
  '0': '0rem', '1': '0.25rem', '2': '0.5rem', '3': '0.75rem',
  '4': '1rem', '5': '1.25rem', '6': '1.5rem', '7': '1.75rem',
  '8': '2rem', '9': '2.25rem', '10': '2.5rem', '12': '3rem',
  '15': '3.75rem', '16': '4rem', '20': '5rem', '24': '6rem',
};

const borderRadius = {
  control: '0.25rem',
  card:    '0.5rem',
  modal:   '1rem',
  pill:    '9999px',
};

const boxShadow = {
  card:        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  'card-hover':'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  modal:       '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  popover:     '0px 1px 10px 0px rgba(0,0,0,0.25)',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Convert rgba(r,g,b,a) → 8-digit hex #RRGGBBAA */
function rgbaToHex8(rgba) {
  const m = rgba.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);
  if (!m) return rgba;
  const r = parseInt(m[1], 10);
  const g = parseInt(m[2], 10);
  const b = parseInt(m[3], 10);
  const a = m[4] !== undefined ? Math.round(parseFloat(m[4]) * 255) : 255;
  return '#' + [r, g, b, a].map(n => n.toString(16).padStart(2, '0').toUpperCase()).join('');
}

/** Build hex → DTCG alias map, e.g. '#F8F9F9' → '{color.neutral.50}' */
function buildAliasMap() {
  const map = new Map();
  for (const [family, stops] of Object.entries(colors)) {
    for (const [stop, hex] of Object.entries(stops)) {
      map.set(hex.toUpperCase(), `{color.${family}.${stop}}`);
    }
  }
  return map;
}

const aliasMap = buildAliasMap();

function resolveColor(value) {
  if (!value || value === 'transparent') return value;
  if (value.startsWith('rgba') || value.startsWith('rgb(')) return rgbaToHex8(value);
  return aliasMap.get(value.toUpperCase()) ?? value;
}

const c  = v  => ({ $type: 'color',     $value: resolveColor(v) });
const d  = v  => ({ $type: 'dimension', $value: v });
const sh = v  => ({ $type: 'shadow',    $value: v });

// ─── Primitives ───────────────────────────────────────────────────────────────

const primitives = {
  color: Object.fromEntries(
    Object.entries(colors).map(([fam, stops]) => [
      fam,
      Object.fromEntries(Object.entries(stops).map(([stop, hex]) => [stop, { $type: 'color', $value: hex }]))
    ])
  ),
  spacing:      Object.fromEntries(Object.entries(spacing).map(([k, v]) => [k, d(v)])),
  borderRadius: Object.fromEntries(Object.entries(borderRadius).map(([k, v]) => [k, d(v)])),
  shadow:       Object.fromEntries(Object.entries(boxShadow).map(([k, v]) => [k, sh(v)])),
};

// ─── Semantic — Light ─────────────────────────────────────────────────────────

const semanticLight = {
  bg: {
    canvas:      c(colors.neutral[50]),
    surface:     c(colors.neutral[100]),
    elevated:    c('#ffffff'),
    recessed:    c(colors.neutral[200]),
    hover:       c(colors.neutral[100]),
    active:      c(colors.neutral[200]),
  },
  fg: {
    heading:     c(colors.neutral[900]),
    primary:     c(colors.neutral[900]),
    secondary:   c(colors.neutral[700]),
    muted:       c(colors.neutral[500]),
    link:        c(colors.brand[600]),
    'on-accent': c('#ffffff'),
  },
  line: {
    default: c(colors.neutral[200]),
    strong:  c(colors.neutral[300]),
    focus:   c(colors.brand[500]),
  },
  action: {
    primary:         c(colors.brand[500]),
    'primary-hover': c(colors.brand[600]),
  },
  nav: {
    bg:          c(colors.brand[950]),
    border:      c(colors.neutral[400]),
    'active-bg': c(colors.brand[800]),
    text:        c(colors.neutral[300]),
    'hover-bg':  c('rgba(255,255,255,0.08)'),
  },
  row: {
    bg:                c('#ffffff'),
    'hover-bg':        c(colors.neutral[100]),
    'selected-bg':     c(colors.brand[50]),
    'selected-border': c(colors.brand[500]),
  },
  dot: {
    unread:    c(colors.brand[500]),
    attention: c(colors.orange[600]),
  },
  tile: {
    'not-started': c(colors.brand[100]),
    outstanding:   c(colors.yellow[300]),
    fulfilled:     c(colors.green[300]),
    overdue:       c(colors.red[300]),
    flag:          c(colors.neutral[800]),
  },
  meta:         { unread: c(colors.neutral[700]) },
  notification: { bg:     c(colors.red[500]) },
  accordion:    { hover:  c(colors.neutral[300]) },
  status: {
    outstanding:    c(colors.brand[500]),
    success:        c(colors.green[500]),
    warning:        c(colors.yellow[500]),
    error:          c(colors.red[500]),
    'error-hover':  c(colors.red[600]),
    // info
    'info-surface': c(colors.brand[50]),
    'info-border':  c(colors.brand[200]),
    'info-fg':      c(colors.brand[700]),
    // success surface
    'success-surface': c(colors.green[50]),
    'success-border':  c(colors.green[200]),
    'success-fg':      c(colors.green[700]),
    // warning surface
    'warning-surface': c(colors.yellow[50]),
    'warning-border':  c(colors.yellow[200]),
    'warning-fg':      c(colors.yellow[700]),
    // error surface
    'error-surface': c(colors.red[50]),
    'error-border':  c(colors.red[200]),
    'error-fg':      c(colors.red[700]),
    // cerulean
    'cerulean-surface': c(colors.cerulean[50]),
    'cerulean-border':  c(colors.cerulean[200]),
    'cerulean-fg':      c(colors.cerulean[700]),
    // orange
    'orange-surface': c(colors.orange[50]),
    'orange-border':  c(colors.orange[200]),
    'orange-fg':      c(colors.orange[700]),
    // pink
    'pink-surface': c(colors.pink[50]),
    'pink-border':  c(colors.pink[200]),
    'pink-fg':      c(colors.pink[700]),
    // eggplant
    'eggplant-surface': c(colors.eggplant[50]),
    'eggplant-border':  c(colors.eggplant[200]),
    'eggplant-fg':      c(colors.eggplant[700]),
    // purple
    'purple-surface':       c(colors.purple[50]),
    'purple-surface-hover': c(colors.purple[100]),
    'purple-border':        c(colors.purple[200]),
    'purple-fg':            c(colors.purple[700]),
    'purple-avatar-bg':     c(colors.purple[100]),
  },
  scrollbar: {
    thumb: c(colors.neutral[300]),
    track: { $type: 'color', $value: 'transparent' },
  },
  spacing: {
    'panel-compact': d('12px'),
    panel:           d('16px'),
    'panel-relaxed': d('24px'),
    'section-gap':   d('24px'),
  },
};

// ─── Semantic — Dark ──────────────────────────────────────────────────────────

const semanticDark = {
  bg: {
    canvas:   c('#111114'),
    surface:  c('#161619'),
    elevated: c('#121215'),
    recessed: c('#0e0e11'),
    hover:    c('#1c1c22'),
    active:   c('#24242b'),
  },
  fg: {
    heading:     c('#e8eaef'),
    primary:     c('#c4c7d0'),
    secondary:   c('#55586a'),
    muted:       c('#72758a'),
    link:        c('#3a5e88'),
    'on-accent': c('#ffffff'),
  },
  line: {
    default: c('#1c1c22'),
    strong:  c('#262630'),
    focus:   c('#90c0f9'),
  },
  action: {
    primary:         c('#c4c7d0'),
    'primary-hover': c('#d8dae2'),
  },
  nav: {
    bg:          c('#09090c'),
    border:      c('#09090c'),
    'active-bg': c('rgba(255,255,255,0.13)'),
    text:        c('#9aa0b4'),
    'hover-bg':  c('rgba(255,255,255,0.06)'),
  },
  row: {
    bg:                c('#161619'),
    'hover-bg':        c('#111114'),
    'selected-bg':     c('#24242b'),
    'selected-border': c('#72758a'),
  },
  dot: {
    unread:    c('#6098e0'),
    attention: c('#f06060'),
  },
  tile: {
    'not-started': c('#3a3e48'),
    outstanding:   c('#f0a840'),
    fulfilled:     c('#40cc90'),
    overdue:       c('#f06060'),
    flag:          c('#111114'),
  },
  meta:         { unread: c('#c0c3ce') },
  notification: { bg:     c('#c0352a') },
  accordion:    { hover:  c('#111114') },
  status: {
    outstanding:   c('#3a3e48'),
    success:       c('#40cc90'),
    warning:       c('#f0a840'),
    error:         c('#f06060'),
    'error-hover': c('#f87878'),
    // info
    'info-surface': c('rgba(56,189,248,0.15)'),
    'info-border':  c('rgba(56,189,248,0.30)'),
    'info-fg':      c('#38BDF8'),
    // success surface
    'success-surface': c('rgba(34,197,94,0.15)'),
    'success-border':  c('rgba(34,197,94,0.30)'),
    'success-fg':      c('#22C55E'),
    // warning surface
    'warning-surface': c('rgba(245,158,11,0.15)'),
    'warning-border':  c('rgba(245,158,11,0.30)'),
    'warning-fg':      c('#F59E0B'),
    // error surface
    'error-surface': c('rgba(239,68,68,0.15)'),
    'error-border':  c('rgba(239,68,68,0.30)'),
    'error-fg':      c('#EF4444'),
    // cerulean
    'cerulean-surface': c(colors.cerulean[950]),
    'cerulean-border':  c(colors.cerulean[700]),
    'cerulean-fg':      c(colors.cerulean[300]),
    // orange
    'orange-surface': c('#4a2c16'),
    'orange-border':  c('rgba(249,115,22,0.30)'),
    'orange-fg':      c('#e8935a'),
    // pink
    'pink-surface': c('rgba(236,72,153,0.15)'),
    'pink-border':  c('rgba(236,72,153,0.30)'),
    'pink-fg':      c(colors.pink[300]),
    // eggplant
    'eggplant-surface': c(colors.eggplant[950]),
    'eggplant-border':  c(colors.eggplant[700]),
    'eggplant-fg':      c(colors.eggplant[300]),
    // purple
    'purple-surface':       c('#1e1c28'),
    'purple-surface-hover': c('#252230'),
    'purple-border':        c('rgba(168,85,247,0.12)'),
    'purple-fg':            c('#b89ee0'),
    'purple-avatar-bg':     c('#2e1a6b'),
  },
  scrollbar: {
    thumb: c('#3a3e48'),
    track: { $type: 'color', $value: 'transparent' },
  },
  spacing: {
    'panel-compact': d('12px'),
    panel:           d('16px'),
    'panel-relaxed': d('24px'),
    'section-gap':   d('24px'),
  },
};

// ─── Write ────────────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const outDir     = join(__dirname, 'tokens');

mkdirSync(outDir, { recursive: true });

const files = [
  { name: 'primitives.json',     data: primitives    },
  { name: 'semantic.light.json', data: semanticLight },
  { name: 'semantic.dark.json',  data: semanticDark  },
];

for (const { name, data } of files) {
  const outPath = join(outDir, name);
  writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n');
  console.log(`✔  Wrote ${outPath}`);
}

console.log('\n🎉  Done! To import into Figma:');
console.log('   1. Plugins → Token Studio for Figma');
console.log('   2. Settings → Sync → Local files → point to last-samurai/figma/tokens/');
console.log('   3. Import primitives.json as collection "Primitives" (hide from publishing)');
console.log('   4. Import semantic.light.json + semantic.dark.json as "Semantic" — Light/Dark modes');
