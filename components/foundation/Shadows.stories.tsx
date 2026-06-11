import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta = {
  title: 'Foundation/Shadows',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

interface ShadowDef {
  name: string;
  cls: string;
  label: string;
  cssText: string;
  use: string;
}

const shadows: ShadowDef[] = [
  { name: 'card',       cls: 'shadow-card',       label: 'Card',       cssText: '0 1px 3px rgba(0,0,0,0.1)',   use: 'Default card elevation' },
  { name: 'card-hover', cls: 'shadow-card-hover', label: 'Card Hover', cssText: '0 4px 6px rgba(0,0,0,0.1)',   use: 'Card on hover state' },
  { name: 'modal',      cls: 'shadow-modal',      label: 'Modal',      cssText: '0 20px 25px rgba(0,0,0,0.1)', use: 'Modal dialogs & sheets' },
  { name: 'popover',    cls: 'shadow-popover',    label: 'Popover',    cssText: '0 1px 10px rgba(0,0,0,0.25)', use: 'Dropdowns & popovers' },
];

export const All: Story = {
  render: () => (
    <div className="flex flex-wrap gap-10 p-8">
      {shadows.map((s) => (
        <div key={s.name} className="flex flex-col items-center gap-3">
          <div className={`w-24 h-24 rounded-card bg-elevated ${s.cls}`} />
          <span className="text-label-md text-secondary">{s.label}</span>
          <span className="text-caption text-muted font-mono">{s.name}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Shadows page (77:5) ──────────────
// 4 shadow swatch cards laid out horizontally at y=180, each 240×120 with
// rounded-card corners, x stride 288. Each card carries its source
// shadow-{token} class. Per-swatch labels (title / cssText / use) render at
// Figma's exact text coordinates.

interface ShadowCell extends MatrixCellSpec {
  shadow: ShadowDef;
  titleY: number;
  cssY: number;
  useY: number;
}

const SHADOW_CELLS: ShadowCell[] = [
  { variant: 'shadow/card',       shadow: shadows[0], x: 80,  y: 180, w: 240, h: 120, titleY: 230, cssY: 312, useY: 326, expect: { headings: [] } },
  { variant: 'shadow/card-hover', shadow: shadows[1], x: 368, y: 180, w: 240, h: 120, titleY: 230, cssY: 312, useY: 326, expect: { headings: [] } },
  { variant: 'shadow/modal',      shadow: shadows[2], x: 656, y: 180, w: 240, h: 120, titleY: 230, cssY: 312, useY: 326, expect: { headings: [] } },
  { variant: 'shadow/popover',    shadow: shadows[3], x: 944, y: 180, w: 240, h: 120, titleY: 230, cssY: 312, useY: 326, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:5', cells: SHADOW_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1240, height: 380 }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 80, top: 80, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Shadows</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 122, width: 600 }}>
        <p className="text-body-md text-secondary">4 shadow levels · Applied via Figma Effect Styles</p>
      </div>

      {SHADOW_CELLS.map((c) => (
        <div key={c.variant}>
          {/* Shadow swatch card */}
          <div
            className={`absolute bg-elevated rounded-card ${c.shadow.cls}`}
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          />
          {/* Title centered within swatch (Figma puts title text overlapping the card) */}
          <div className="absolute" style={{ left: c.x + 16, top: c.titleY }}>
            <span className="text-body-md font-semibold text-primary">{c.shadow.label}</span>
          </div>
          {/* CSS text under the swatch */}
          <div className="absolute" style={{ left: c.x, top: c.cssY }}>
            <span className="text-caption text-muted font-mono">{c.shadow.cssText}</span>
          </div>
          {/* Use case under the css text */}
          <div className="absolute" style={{ left: c.x, top: c.useY }}>
            <span className="text-caption text-secondary">{c.shadow.use}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
