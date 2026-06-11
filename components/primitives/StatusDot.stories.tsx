import type { Meta, StoryObj } from '@storybook/react';
import { StatusDot, type StatusDotVariant } from './StatusDot';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof StatusDot> = {
  title: 'Primitives/StatusDot', component: StatusDot, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof StatusDot>;

// ─── Individual variants ─────────────────────────────────────────────────────
export const Unread:    Story = { args: { variant: 'unread' } };
export const Attention: Story = { args: { variant: 'attention' } };
export const Success:   Story = { args: { variant: 'success' } };
export const Error:     Story = { args: { variant: 'error' } };
export const Warning:   Story = { args: { variant: 'warning' } };
export const Cerulean:  Story = { args: { variant: 'cerulean' } };
export const Purple:    Story = { args: { variant: 'purple' } };
export const Pink:      Story = { args: { variant: 'pink' } };
export const Eggplant:  Story = { args: { variant: 'eggplant' } };
export const Brand:     Story = { args: { variant: 'brand' } };

// ─── All 10 variants ─────────────────────────────────────────────────────────
// The former `info` variant was folded into `brand` — they shared the same
// brand/400 light value and rendered the same blue in dark mode.
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6 text-label-sm text-muted">
      {(['unread','attention','success','error','warning','cerulean','purple','pink','eggplant','brand'] as const).map((v) => (
        <span key={v} className="inline-flex items-center gap-2">
          <StatusDot variant={v} /> {v}
        </span>
      ))}
    </div>
  ),
};

// ─── Overlaid on an icon (as used in FileRow / RequestRow) ───────────────────
// The dot is positioned absolutely with a halo ring so it reads clearly when it
// overlaps an icon or avatar behind it.
export const OverlaidOnIcon: Story = {
  render: () => (
    <div className="relative inline-flex h-5 w-5 items-center justify-center rounded-card bg-recessed">
      <span className="text-muted">▦</span>
      <StatusDot variant="unread" className="absolute right-0 top-0 ring-2 ring-elevated" />
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma StatusDot set (1521:5) ───────────
// 10 variants after info→brand fold. Layout: 5-per-row × 2 rows.
//   Row 1 (y=4):  Unread, Attention, Success, Error, Warning  — x stride 32
//   Row 2 (y=29): Cerulean, Purple, Pink, Eggplant, Brand     — x stride 32
// Each dot is 8×8 with rounded-pill (full circle).
const ROW_X = [2, 32, 64, 96, 128] as const;

const SD_CELLS: (MatrixCellSpec & { v: StatusDotVariant })[] = [
  { variant: 'Variant=Unread',    v: 'unread',    x: ROW_X[0], y: 4,  w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Attention', v: 'attention', x: ROW_X[1], y: 4,  w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Success',   v: 'success',   x: ROW_X[2], y: 4,  w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Error',     v: 'error',     x: ROW_X[3], y: 4,  w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Warning',   v: 'warning',   x: ROW_X[4], y: 4,  w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Cerulean',  v: 'cerulean',  x: ROW_X[0], y: 29, w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Purple',    v: 'purple',    x: ROW_X[1], y: 29, w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Pink',      v: 'pink',      x: ROW_X[2], y: 29, w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Eggplant',  v: 'eggplant',  x: ROW_X[3], y: 29, w: 8, h: 8, expect: { headings: [] } },
  { variant: 'Variant=Brand',     v: 'brand',     x: ROW_X[4], y: 29, w: 8, h: 8, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1521:5', cells: SD_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 145, height: 41 }}>
      {SD_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <StatusDot variant={c.v} />
        </div>
      ))}
    </div>
  ),
};
