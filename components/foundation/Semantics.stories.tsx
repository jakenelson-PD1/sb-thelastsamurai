import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta = {
  title: 'Foundation/Semantics',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

// ─── Source-of-truth token list ─────────────────────────────────────────────
// Mirrors tokens/semantic.ts exactly. Each row pairs the Figma variable name
// (e.g. "surface/canvas-50") with the source CSS-var
// ("--color-surface-canvas-50") and a Tailwind utility class so the swatch can
// render the color directly. The Tailwind class uses the role-first alias key
// (e.g. `bg-canvas`) for consumer ergonomics — the CSS-var name carries the
// underlying primitive shade.

interface TokenRow {
  name: string;     // Figma variable path (e.g. "surface/canvas")
  cssVar: string;   // matching --color-* custom property
  cls: string;      // Tailwind class that renders this color as a background
}

const SECTIONS: Array<{ title: string; tokens: TokenRow[] }> = [
  { title: 'SURFACE', tokens: [
    { name: 'surface/canvas-0',          cssVar: '--color-surface-canvas-0',          cls: 'bg-elevated' },
    { name: 'surface/canvas-50',         cssVar: '--color-surface-canvas-50',         cls: 'bg-canvas' },
    { name: 'surface/canvas-100',        cssVar: '--color-surface-canvas-100',        cls: 'bg-surface' },
    { name: 'surface/canvas-200',        cssVar: '--color-surface-canvas-200',        cls: 'bg-recessed' },
    { name: 'surface/canvas-300',        cssVar: '--color-surface-canvas-300',        cls: 'bg-pressed' },
    { name: 'surface/canvas-400',        cssVar: '--color-surface-canvas-400',        cls: 'bg-header-border' },
    { name: 'surface/canvas-500',        cssVar: '--color-surface-canvas-500',        cls: 'bg-muted' },
    { name: 'surface/hover-overlay',     cssVar: '--color-surface-hover-overlay',     cls: 'bg-hover-overlay' },
    { name: 'surface/scrim',             cssVar: '--color-surface-scrim',             cls: 'bg-scrim' },
    { name: 'surface/nav-950',           cssVar: '--color-surface-nav-950',           cls: 'bg-header-bg' },
    { name: 'surface/nav-active',        cssVar: '--color-surface-nav-active',        cls: 'bg-header-active-bg' },
    { name: 'surface/header-hover-bg',   cssVar: '--color-surface-header-hover-bg',   cls: 'bg-header-hover-bg' },
    { name: 'surface/sidenav-bg-hover',  cssVar: '--color-surface-sidenav-bg-hover',  cls: 'bg-sidenav-surface-hover' },
    { name: 'surface/sidenav-bg-elevated', cssVar: '--color-surface-sidenav-bg-elevated', cls: 'bg-sidenav-surface-elevated' },
  ]},
  { title: 'TEXT', tokens: [
    { name: 'text/primary-900',     cssVar: '--color-text-primary-900',     cls: 'bg-primary' },
    { name: 'text/secondary-700',   cssVar: '--color-text-secondary-700',   cls: 'bg-secondary' },
    { name: 'text/tertiary-500',    cssVar: '--color-text-tertiary-500',    cls: 'bg-muted' },
    { name: 'text/icon-800',        cssVar: '--color-text-icon-800',        cls: 'bg-tile-flag' },
    { name: 'text/white-0',         cssVar: '--color-text-white-0',         cls: 'bg-on-accent' },
    { name: 'text/link',            cssVar: '--color-text-link',            cls: 'bg-link' },
  ]},
  { title: 'BORDER', tokens: [
    { name: 'border/default',     cssVar: '--color-border-default',     cls: 'bg-line' },
    { name: 'border/strong',      cssVar: '--color-border-strong',      cls: 'bg-line-strong' },
    { name: 'border/focus',       cssVar: '--color-border-focus',       cls: 'bg-line-focus' },
    { name: 'border/info-border', cssVar: '--color-border-info-border', cls: 'bg-status-info-border' },
  ]},
  { title: 'ACTION', tokens: [
    { name: 'action/primary-500',                cssVar: '--color-action-primary-500',                cls: 'bg-action-primary' },
    { name: 'action/primary-hover-600',          cssVar: '--color-action-primary-hover-600',          cls: 'bg-action-primary-hover' },
    { name: 'action/primary-selected-700',       cssVar: '--color-action-primary-selected-700',       cls: 'bg-action-primary-selected' },
    { name: 'action/destructive',                cssVar: '--color-action-destructive',                cls: 'bg-action-danger' },
    { name: 'action/destructive-hover',          cssVar: '--color-action-destructive-hover',          cls: 'bg-action-danger-hover' },
    { name: 'action/attention-destructive',      cssVar: '--color-action-attention-destructive',      cls: 'bg-notification' },
    { name: 'action/attention-destructive-hover', cssVar: '--color-action-attention-destructive-hover', cls: 'bg-action-danger-hover' },
    { name: 'action/selected',                   cssVar: '--color-action-selected',                   cls: 'bg-row-selected' },
  ]},
  { title: 'ACCENT — flat -500 accents', tokens: [
    { name: 'accent/green',    cssVar: '--color-accent-green',    cls: 'bg-status-success' },
    { name: 'accent/yellow',   cssVar: '--color-accent-yellow',   cls: 'bg-status-warning' },
    { name: 'accent/red',      cssVar: '--color-accent-red',      cls: 'bg-status-error' },
    { name: 'accent/orange',   cssVar: '--color-accent-orange',   cls: 'bg-status-attention' },
    { name: 'accent/cerulean', cssVar: '--color-accent-cerulean', cls: 'bg-status-cerulean' },
    { name: 'accent/purple',   cssVar: '--color-accent-purple',   cls: 'bg-status-purple' },
    { name: 'accent/pink',     cssVar: '--color-accent-pink',     cls: 'bg-status-pink' },
    { name: 'accent/eggplant', cssVar: '--color-accent-eggplant', cls: 'bg-status-eggplant' },
  ]},
  { title: 'ACCENT — GREEN', tokens: [
    { name: 'accent/green-surface', cssVar: '--color-accent-green-surface', cls: 'bg-status-success-surface' },
    { name: 'accent/green-border',  cssVar: '--color-accent-green-border',  cls: 'bg-status-success-border' },
    { name: 'accent/green-fg',      cssVar: '--color-accent-green-fg',      cls: 'bg-status-success-fg' },
  ]},
  { title: 'ACCENT — YELLOW', tokens: [
    { name: 'accent/yellow-surface', cssVar: '--color-accent-yellow-surface', cls: 'bg-status-warning-surface' },
    { name: 'accent/yellow-border',  cssVar: '--color-accent-yellow-border',  cls: 'bg-status-warning-border' },
    { name: 'accent/yellow-fg',      cssVar: '--color-accent-yellow-fg',      cls: 'bg-status-warning-fg' },
  ]},
  { title: 'ACCENT — RED', tokens: [
    { name: 'accent/red-surface', cssVar: '--color-accent-red-surface', cls: 'bg-status-error-surface' },
    { name: 'accent/red-border',  cssVar: '--color-accent-red-border',  cls: 'bg-status-error-border' },
    { name: 'accent/red-fg',      cssVar: '--color-accent-red-fg',      cls: 'bg-status-error-fg' },
  ]},
  { title: 'ACCENT — CERULEAN', tokens: [
    { name: 'accent/cerulean-surface', cssVar: '--color-accent-cerulean-surface', cls: 'bg-status-cerulean-surface' },
    { name: 'accent/cerulean-border',  cssVar: '--color-accent-cerulean-border',  cls: 'bg-status-cerulean-border' },
    { name: 'accent/cerulean-fg',      cssVar: '--color-accent-cerulean-fg',      cls: 'bg-status-cerulean-fg' },
  ]},
  { title: 'ACCENT — ORANGE', tokens: [
    { name: 'accent/orange-surface', cssVar: '--color-accent-orange-surface', cls: 'bg-status-orange-surface' },
    { name: 'accent/orange-border',  cssVar: '--color-accent-orange-border',  cls: 'bg-status-orange-border' },
    { name: 'accent/orange-fg',      cssVar: '--color-accent-orange-fg',      cls: 'bg-status-orange-fg' },
  ]},
  { title: 'ACCENT — PINK', tokens: [
    { name: 'accent/pink-surface', cssVar: '--color-accent-pink-surface', cls: 'bg-status-pink-surface' },
    { name: 'accent/pink-border',  cssVar: '--color-accent-pink-border',  cls: 'bg-status-pink-border' },
    { name: 'accent/pink-fg',      cssVar: '--color-accent-pink-fg',      cls: 'bg-status-pink-fg' },
  ]},
  { title: 'ACCENT — EGGPLANT', tokens: [
    { name: 'accent/eggplant-surface', cssVar: '--color-accent-eggplant-surface', cls: 'bg-status-eggplant-surface' },
    { name: 'accent/eggplant-border',  cssVar: '--color-accent-eggplant-border',  cls: 'bg-status-eggplant-border' },
    { name: 'accent/eggplant-fg',      cssVar: '--color-accent-eggplant-fg',      cls: 'bg-status-eggplant-fg' },
  ]},
  { title: 'ACCENT — PURPLE', tokens: [
    { name: 'accent/purple-surface', cssVar: '--color-accent-purple-surface', cls: 'bg-status-purple-surface' },
    { name: 'accent/purple-border',  cssVar: '--color-accent-purple-border',  cls: 'bg-status-purple-border' },
    { name: 'accent/purple-fg',      cssVar: '--color-accent-purple-fg',      cls: 'bg-status-purple-fg' },
  ]},
  { title: 'REQUEST-STATUS (was SWATCH) — large status fills', tokens: [
    { name: 'request-status/not-started', cssVar: '--color-request-status-not-started', cls: 'bg-swatch-not-started' },
    { name: 'request-status/outstanding', cssVar: '--color-request-status-outstanding', cls: 'bg-swatch-outstanding' },
    { name: 'request-status/fulfilled',   cssVar: '--color-request-status-fulfilled',   cls: 'bg-swatch-fulfilled' },
    { name: 'request-status/overdue',     cssVar: '--color-request-status-overdue',     cls: 'bg-swatch-overdue' },
  ]},
];

const ALL_TOKENS: TokenRow[] = SECTIONS.flatMap((s) => s.tokens);

// ─── Legacy compact gallery ─────────────────────────────────────────────────
export const All: Story = {
  render: () => (
    <div className="space-y-10">
      {SECTIONS.map((section) => (
        <div key={section.title}>
          <p className="text-body-sm font-semibold text-secondary mb-3">{section.title}</p>
          <div className="flex flex-wrap gap-4">
            {section.tokens.map((t) => (
              <div key={t.name} className="flex flex-col items-start gap-1.5">
                <div className={`w-16 h-16 rounded-card border border-line ${t.cls}`} />
                <span className="text-label-md text-secondary">{t.name}</span>
                <span className="text-caption text-muted font-mono">{t.cssVar}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — vertical list mirroring tokens/semantic.ts source order ───────
// Stride: section header = 36px above its first token row; per-token row stride
// = 48px. Each swatch is 32×32 at x=24; name + CSS-var labels sit at x=68.

const HEADER_GAP = 36;
const ROW_STRIDE = 48;
const SECTION_TOP_PAD = 16;
const PAGE_TOP = 80;

interface SemanticCell extends MatrixCellSpec {
  cls: string;
}

const CELLS: SemanticCell[] = [];
const SECTION_LAYOUT: Array<{ title: string; headerY: number }> = [];

let cursor = PAGE_TOP;
for (const section of SECTIONS) {
  SECTION_LAYOUT.push({ title: section.title, headerY: cursor });
  cursor += HEADER_GAP;
  for (const t of section.tokens) {
    CELLS.push({
      variant: t.name,
      x: 24,
      y: cursor,
      w: 32,
      h: 32,
      cls: t.cls,
      expect: { headings: [] },
    });
    cursor += ROW_STRIDE;
  }
  cursor += SECTION_TOP_PAD;
}
const PAGE_HEIGHT = cursor + 64;

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:4', cells: CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 600, height: PAGE_HEIGHT }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 0, top: -100, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Semantic Tokens</h1>
      </div>
      <div className="absolute" style={{ left: 0, top: -58, width: 600 }}>
        <p className="text-body-md text-secondary">
          {ALL_TOKENS.length} semantic tokens · Light and Dark modes · grouped by role
        </p>
      </div>

      {/* Section headers */}
      {SECTION_LAYOUT.map((s) => (
        <div key={s.title} className="absolute" style={{ left: 24, top: s.headerY }}>
          <span className="text-caption font-bold text-muted tracking-wider">{s.title}</span>
        </div>
      ))}

      {/* Per-token rows: 32×32 swatch + token name + CSS var label */}
      {CELLS.map((c, i) => {
        const t = ALL_TOKENS[i];
        return (
          <div key={c.variant}>
            <div
              className={`absolute rounded-control border border-line ${c.cls}`}
              data-matrix-cell
              style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
            />
            <div className="absolute" style={{ left: 68, top: c.y + 2 }}>
              <span className="text-body-sm text-primary">{t.name}</span>
            </div>
            <div className="absolute" style={{ left: 68, top: c.y + 20 }}>
              <span className="text-caption text-muted font-mono">{t.cssVar}</span>
            </div>
          </div>
        );
      })}
    </div>
  ),
};
