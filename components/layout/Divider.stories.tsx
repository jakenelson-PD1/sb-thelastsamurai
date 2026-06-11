import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Divider> = {
  title: 'Primitives/Divider', component: Divider, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = { args: { orientation: 'horizontal' } };
export const Vertical: Story   = {
  decorators: [(Story) => <div className="h-20">{Story()}</div>],
  args: { orientation: 'vertical' },
};

// ─── Matrix — pixel-pinned mirror of Figma Divider ComponentSet (783:4) ─────
// 2 variants on the Orientation axis:
//   horizontal: 240×1 at (40, 40) inside the set
//   vertical:   1×240 at (40, 89) inside the set
// Both bound to border/default → source bg-line. Layout primitive — slot
// dimensions are the contract, content is N/A.

type DividerCell = MatrixCellSpec & { orientation: 'horizontal' | 'vertical' };

const DIVIDER_CELLS: DividerCell[] = [
  { variant: 'Orientation=horizontal', orientation: 'horizontal', x: 40, y: 40,  w: 240, h: 1,   expect: { headings: [] } },
  { variant: 'Orientation=vertical',   orientation: 'vertical',   x: 40, y: 89,  w: 1,   h: 240, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '783:4', cells: DIVIDER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 320, height: 369 }}>
      {DIVIDER_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Divider orientation={c.orientation} />
        </div>
      ))}
    </div>
  ),
};
