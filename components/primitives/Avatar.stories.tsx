import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar', component: Avatar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Avatar>;

// ─── All variants × sizes ────────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-label-sm font-semibold text-muted uppercase tracking-wide">Client — purple</p>
        <div className="flex items-center gap-4">
          <Avatar variant="client" size="xs" initials="GS" />
          <Avatar variant="client" size="sm" initials="GS" />
          <Avatar variant="client" size="md" initials="GS" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-label-sm font-semibold text-muted uppercase tracking-wide">Firm — orange</p>
        <div className="flex items-center gap-4">
          <Avatar variant="firm" size="xs" initials="AJ" />
          <Avatar variant="firm" size="sm" initials="AJ" />
          <Avatar variant="firm" size="md" initials="AJ" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-label-sm font-semibold text-muted uppercase tracking-wide">With photo</p>
        <div className="flex items-center gap-4">
          <Avatar size="xs" src="https://i.pravatar.cc/150?img=47" alt="User photo" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=47" alt="User photo" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=47" alt="User photo" />
        </div>
      </div>
    </div>
  ),
};

// ─── Variants ────────────────────────────────────────────────────────────────
// Client users — purple-100 background, purple-600 text
export const Client: Story = { args: { variant: 'client', initials: 'GS', size: 'md' } };

// Firm users — orange-100 background, orange-800 text
export const Firm: Story = { args: { variant: 'firm', initials: 'AJ', size: 'md' } };

export const WithPhoto: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=47', alt: 'User photo', size: 'md' },
};

// ─── Sizes ───────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {([['xs', '24px'], ['sm', '32px'], ['md', '40px']] as const).map(([size, px]) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar variant="client" size={size} initials="GS" />
          <span className="text-label-sm text-muted">{size} · {px}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── Stacked group (common in assignment rows) ───────────────────────────────
export const StackedGroup: Story = {
  render: () => (
    <div className="flex items-center -space-x-2">
      <Avatar variant="client" size="sm" initials="GS" className="ring-2 ring-canvas" />
      <Avatar variant="client" size="sm" initials="MK" className="ring-2 ring-canvas" />
      <Avatar variant="firm"   size="sm" initials="AJ" className="ring-2 ring-canvas" />
      <Avatar variant="firm"   size="sm" initials="JN" className="ring-2 ring-canvas" />
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Avatar ComponentSet (484:14) ─────
// 6 variants (3 Size × 2 Variant) at exact Figma coords. Layout: firm column
// at x≈7-15, client column at x≈55-63 (each col centers larger avatars).
// Rows: md (y=6), sm (y=52), xs (y=91).

const AVATAR_CELLS: (MatrixCellSpec & { v: 'client' | 'firm'; s: 'xs' | 'sm' | 'md'; initials: string })[] = [
  // md row (40×40)
  { variant: 'Size=md, Variant=firm',   v: 'firm',   s: 'md', initials: 'A', x: 7,  y: 6,  w: 40, h: 40, expect: { headings: [] } },
  { variant: 'Size=md, Variant=client', v: 'client', s: 'md', initials: 'A', x: 55, y: 6,  w: 40, h: 40, expect: { headings: [] } },
  // sm row (32×32)
  { variant: 'Size=sm, Variant=firm',   v: 'firm',   s: 'sm', initials: 'A', x: 11, y: 52, w: 32, h: 32, expect: { headings: [] } },
  { variant: 'Size=sm, Variant=client', v: 'client', s: 'sm', initials: 'A', x: 59, y: 52, w: 32, h: 32, expect: { headings: [] } },
  // xs row (24×24)
  { variant: 'Size=xs, Variant=firm',   v: 'firm',   s: 'xs', initials: 'A', x: 15, y: 91, w: 24, h: 24, expect: { headings: [] } },
  { variant: 'Size=xs, Variant=client', v: 'client', s: 'xs', initials: 'A', x: 63, y: 91, w: 24, h: 24, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:62', cells: AVATAR_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 102, height: 120 }}>
      {AVATAR_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Avatar size={c.s} variant={c.v} initials={c.initials} />
        </div>
      ))}
    </div>
  ),
};
