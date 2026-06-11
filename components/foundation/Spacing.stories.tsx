import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta = {
  title: 'Foundation/Spacing',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

// ─── Token definition mirrors Figma Spacing page exactly ────────────────────
interface SpacingRow {
  token: string;   // e.g. "scale/1" or "semantic/panel"
  value: number;   // px width of bar
  pxLabel: string; // "4px"
  barY: number;    // Figma exact bar Y (rectangle node y, integer)
  textY: number;   // Figma text label Y (half-pixel — visually centered with bar)
  use?: string;    // semantic rows only — "Toolbar, dense UI" etc
}

const BASE_SCALE: SpacingRow[] = [
  { token: 'scale/1',  value: 4,  pxLabel: '4px',  barY: 214, textY: 218.5 },
  { token: 'scale/2',  value: 8,  pxLabel: '8px',  barY: 258, textY: 262.5 },
  { token: 'scale/3',  value: 12, pxLabel: '12px', barY: 302, textY: 306.5 },
  { token: 'scale/4',  value: 16, pxLabel: '16px', barY: 346, textY: 350.5 },
  { token: 'scale/5',  value: 20, pxLabel: '20px', barY: 390, textY: 394.5 },
  { token: 'scale/6',  value: 24, pxLabel: '24px', barY: 434, textY: 438.5 },
  { token: 'scale/7',  value: 28, pxLabel: '28px', barY: 478, textY: 482.5 },
  { token: 'scale/8',  value: 32, pxLabel: '32px', barY: 522, textY: 526.5 },
  { token: 'scale/9',  value: 36, pxLabel: '36px', barY: 566, textY: 570.5 },
  { token: 'scale/10', value: 40, pxLabel: '40px', barY: 610, textY: 614.5 },
  { token: 'scale/12', value: 48, pxLabel: '48px', barY: 654, textY: 658.5 },
  { token: 'scale/15', value: 60, pxLabel: '60px', barY: 698, textY: 702.5 },
  { token: 'scale/16', value: 64, pxLabel: '64px', barY: 742, textY: 746.5 },
  { token: 'scale/20', value: 80, pxLabel: '80px', barY: 786, textY: 790.5 },
  { token: 'scale/24', value: 96, pxLabel: '96px', barY: 830, textY: 834.5 },
];

const SEMANTIC: SpacingRow[] = [
  { token: 'semantic/panel-compact', value: 12, pxLabel: '12px', barY: 926,  textY: 930.5,  use: 'Toolbar, dense UI' },
  { token: 'semantic/panel',         value: 16, pxLabel: '16px', barY: 970,  textY: 974.5,  use: 'Standard panels' },
  { token: 'semantic/panel-relaxed', value: 24, pxLabel: '24px', barY: 1014, textY: 1018.5, use: 'Detail views, forms' },
  { token: 'semantic/section-gap',   value: 24, pxLabel: '24px', barY: 1058, textY: 1062.5, use: 'Between page sections' },
];

const ALL_ROWS: SpacingRow[] = [...BASE_SCALE, ...SEMANTIC];

// ─── Compact gallery (kept for backwards compat) ────────────────────────────
export const All: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      {ALL_ROWS.map(({ token, value, pxLabel }) => (
        <div key={token} className="flex items-center gap-6">
          <span className="w-44 text-label-md text-secondary font-mono shrink-0">{token}</span>
          <div className="h-5 rounded-control bg-action-primary shrink-0" style={{ width: value }} />
          <span className="text-label-md text-secondary">{pxLabel}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Spacing page (77:6) ──────────────
// 19 bars (15 base scale + 4 semantic). Each cell pins the width bar at
// Figma's exact (x=309, y=rowY-4) with width = token value, height 24.
// Token name + px value + section headers + (semantic) use-case render at
// Figma's text coordinates.

interface SpacingCell extends MatrixCellSpec { row: SpacingRow; }

const SPACING_CELLS: SpacingCell[] = ALL_ROWS.map((r) => ({
  variant: r.token,
  row: r,
  x: 309,
  y: r.barY,
  w: r.value,
  h: 24,
  expect: { headings: [] },
}));

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:6', cells: SPACING_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 700, height: 1140 }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 80, top: 80, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Spacing</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 124, width: 620 }}>
        <p className="text-body-md text-secondary">4px base unit · 8px grid · 19 spacing tokens · Bar widths bound to NUMBER variables</p>
      </div>

      {/* Section headers */}
      <div className="absolute" style={{ left: 80, top: 176 }}>
        <span className="text-caption font-bold text-muted tracking-wider">BASE SCALE</span>
      </div>
      <div className="absolute" style={{ left: 309, top: 184 }}>
        <span className="text-caption text-muted">VARIABLE BOUND WIDTH →</span>
      </div>
      <div className="absolute" style={{ left: 80, top: 888 }}>
        <span className="text-caption font-bold text-muted tracking-wider">SEMANTIC SPACING</span>
      </div>

      {/* Per-row content */}
      {SPACING_CELLS.map((c) => (
        <div key={c.variant}>
          {/* Token name (left column) */}
          <div className="absolute" style={{ left: 80, top: c.row.textY }}>
            <span className="text-body-sm font-mono text-primary">{c.row.token}</span>
          </div>
          {/* px value */}
          <div className="absolute" style={{ left: 232, top: c.row.textY }}>
            <span className="text-body-sm text-secondary">{c.row.pxLabel}</span>
          </div>
          {/* Width bar — pixel-pinned cell */}
          <div
            className="absolute rounded-control bg-action-primary"
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          />
          {/* Row divider */}
          <div
            className="absolute bg-line"
            style={{ left: 80, top: c.row.textY + 28.5, width: 600, height: 1 }}
          />
          {/* Use-case label (semantic rows only) */}
          {c.row.use && (
            <div className="absolute" style={{ left: c.x + c.w + 16, top: c.row.textY + 0.5 }}>
              <span className="text-caption text-secondary">{c.row.use}</span>
            </div>
          )}
        </div>
      ))}

      {/* Bottom note */}
      <div className="absolute" style={{ left: 80, top: 1116 }}>
        <span className="text-caption text-muted">● Bar width = live NUMBER variable value. Changing Spacing variables in Figma updates bar widths automatically.</span>
      </div>
    </div>
  ),
};
