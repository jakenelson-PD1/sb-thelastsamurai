import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta = {
  title: 'Foundation/Radii',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

const radii = [
  { name: 'control', cls: 'rounded-control', label: 'Control', value: '4px',                  use: 'Buttons, Inputs, Badges' },
  { name: 'card',    cls: 'rounded-card',    label: 'Card',    value: '8px',                  use: 'Cards, Panels' },
  { name: 'modal',   cls: 'rounded-modal',   label: 'Modal',   value: '16px',                 use: 'Modals, Sheets, Drawers' },
  { name: 'pill',    cls: 'rounded-pill',    label: 'Pill',    value: '9999px (fully rounded)', use: 'Tags, Avatars, fully rounded' },
];

export const All: Story = {
  render: () => (
    <div className="flex flex-wrap gap-10 p-8">
      {radii.map((r) => (
        <div key={r.name} className="flex flex-col items-start gap-3">
          <div className={`w-32 h-20 bg-elevated border border-line-strong ${r.cls}`} />
          <div className="flex flex-col">
            <span className="text-body-sm font-semibold text-primary">radius/{r.name}</span>
            <span className="text-body-md text-secondary">{r.value}</span>
            <span className="text-caption text-muted">{r.use}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Radii page (77:3) ────────────────
// 4 swatch rectangles at Figma's exact positions, rendered as white cards
// with a 1.5px gray border so the radius reads against the canvas (matching
// Figma's white rectangles bound to neutral-300 stroke).
//   radius/control 4px:    160×80  at (80, 190)
//   radius/card    8px:    200×120 at (288, 190)
//   radius/modal   16px:   240×140 at (536, 190)
//   radius/pill    9999px: 200×56  at (824, 190)
// Each swatch's doc labels (name / value / use) render at Figma's text positions.

type RadiusName = 'control' | 'card' | 'modal' | 'pill';
interface RadiusCell extends MatrixCellSpec {
  name: RadiusName;
  labelY: number;       // y of "radius/<name>" line
  valueY: number;       // y of "<n>px" line
  useY: number;         // y of "Use cases" line
  value: string;
  use: string;
}

const RADIUS_CELLS: RadiusCell[] = [
  { variant: 'radius/control', name: 'control', x: 80,  y: 190, w: 160, h: 80,
    labelY: 286, valueY: 304, useY: 322, value: '4px',                  use: 'Buttons, Inputs, Badges',     expect: { headings: [] } },
  { variant: 'radius/card',    name: 'card',    x: 288, y: 190, w: 200, h: 120,
    labelY: 326, valueY: 344, useY: 362, value: '8px',                  use: 'Cards, Panels',               expect: { headings: [] } },
  { variant: 'radius/modal',   name: 'modal',   x: 536, y: 190, w: 240, h: 140,
    labelY: 346, valueY: 364, useY: 382, value: '16px',                 use: 'Modals, Sheets, Drawers',     expect: { headings: [] } },
  { variant: 'radius/pill',    name: 'pill',    x: 824, y: 190, w: 200, h: 56,
    labelY: 262, valueY: 280, useY: 298, value: '9999px (fully rounded)', use: 'Tags, Avatars, fully rounded', expect: { headings: [] } },
];

const RADIUS_CLASS: Record<RadiusName, string> = {
  control: 'rounded-control',
  card:    'rounded-card',
  modal:   'rounded-modal',
  pill:    'rounded-pill',
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:3', cells: RADIUS_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1080, height: 420 }}>
      {/* Page header — matches Figma's "Border Radius" + subtitle */}
      <div className="absolute" style={{ left: 80, top: 80, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Border Radius</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 122, width: 600 }}>
        <p className="text-body-md text-secondary">4 named radius tokens · Used as cornerRadius in Figma components</p>
      </div>

      {RADIUS_CELLS.map((c) => (
        <div key={c.variant}>
          {/* Swatch rectangle (pixel-pinned, verified) */}
          <div
            className={`absolute bg-elevated border border-line-strong ${RADIUS_CLASS[c.name]}`}
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h, borderWidth: 1.5 }}
          />
          {/* Doc labels — match Figma's per-swatch text stack */}
          <div className="absolute" style={{ left: c.x, top: c.labelY }}>
            <span className="text-body-sm font-semibold text-primary">{c.variant}</span>
          </div>
          <div className="absolute" style={{ left: c.x, top: c.valueY }}>
            <span className="text-body-md text-secondary">{c.value}</span>
          </div>
          <div className="absolute" style={{ left: c.x, top: c.useY }}>
            <span className="text-caption text-muted">{c.use}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
