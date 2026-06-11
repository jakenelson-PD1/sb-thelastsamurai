import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Spinner> = {
  title: 'Primitives/Spinner', component: Spinner, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Small:  Story = { args: { size: 'sm' } };
export const Medium: Story = { args: { size: 'md' } };
export const Large:  Story = { args: { size: 'lg' } };

// ─── Matrix — pixel-pinned mirror of Figma Spinner ComponentSet (222:11) ────
// 3 Size variants laid out at Figma's exact x/y/w/h:
//   Size=sm: (7, 6) 16×16
//   Size=md: (39, 6) 24×24
//   Size=lg: (84, 6) 40×40

type SP_Size = 'sm' | 'md' | 'lg';
interface SpinnerCell extends MatrixCellSpec { size: SP_Size; }

const SPINNER_CELLS: SpinnerCell[] = [
  { variant: 'Size=sm', size: 'sm', x: 7,  y: 6, w: 16, h: 16, expect: { headings: [] } },
  { variant: 'Size=md', size: 'md', x: 39, y: 6, w: 24, h: 24, expect: { headings: [] } },
  { variant: 'Size=lg', size: 'lg', x: 84, y: 6, w: 40, h: 40, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '222:11', cells: SPINNER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 144, height: 52 }}>
      {SPINNER_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <Spinner size={c.size} />
        </div>
      ))}
    </div>
  ),
};
