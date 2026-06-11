import type { Meta, StoryObj } from '@storybook/react';
import { StatusTile, type StatusTileVariant } from './StatusTile';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof StatusTile> = {
  title: 'Primitives/StatusTile',
  component: StatusTile,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof StatusTile>;

export const NotStarted: Story = { args: { variant: 'not-started', label: 'Not started' } };
export const Outstanding: Story = { args: { variant: 'outstanding', label: 'Outstanding' } };
export const Fulfilled:   Story = { args: { variant: 'fulfilled',   label: 'Fulfilled' } };
export const Overdue:     Story = { args: { variant: 'overdue',     label: 'Overdue' } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <StatusTile variant="not-started" label="Not started" />
      <StatusTile variant="outstanding" label="Outstanding" />
      <StatusTile variant="fulfilled"   label="Fulfilled"   />
      <StatusTile variant="overdue"     label="Overdue"     />
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma StatusTile set (1552:7) ──────────
// 4 variants laid out horizontally with stride 24px. Each tile is 10×10 with
// rounded-control corners.
const ST_VARIANTS: StatusTileVariant[] = ['not-started', 'outstanding', 'fulfilled', 'overdue'];
const ST_X: Record<StatusTileVariant, number> = {
  'not-started': 0, 'outstanding': 24, 'fulfilled': 48, 'overdue': 72,
};

const ST_CELLS: (MatrixCellSpec & { v: StatusTileVariant })[] = ST_VARIANTS.map((v) => ({
  variant: `Variant=${v === 'not-started' ? 'Not-Started' : v.charAt(0).toUpperCase() + v.slice(1)}`,
  v,
  x: ST_X[v], y: 0, w: 10, h: 10, expect: { headings: [] },
}));

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1552:7', cells: ST_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 82, height: 10 }}>
      {ST_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <StatusTile variant={c.v} />
        </div>
      ))}
    </div>
  ),
};
