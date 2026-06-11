import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBadge } from './NotificationBadge';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof NotificationBadge> = {
  title: 'Primitives/NotificationBadge',
  component: NotificationBadge,
  tags: ['autodocs'],
  argTypes: {
    count: { control: { type: 'number', min: 0 } },
    max:   { control: { type: 'number', min: 1 } },
  },
};
export default meta;
type Story = StoryObj<typeof NotificationBadge>;

// ─── Default ──────────────────────────────────────────────────────────────────
export const Default: Story = { args: { count: 4 } };

// ─── All counts ───────────────────────────────────────────────────────────────
export const AllCounts: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <NotificationBadge count={1} />
      <NotificationBadge count={4} />
      <NotificationBadge count={12} />
      <NotificationBadge count={99} />
      <NotificationBadge count={100} />
      <NotificationBadge count={999} />
    </div>
  ),
};

// ─── Zero (hidden) ────────────────────────────────────────────────────────────
export const Zero: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-secondary">  // token-lint-skip: showcase fixed dims for screenshot stability
      <span>count=0 renders nothing:</span>
      <NotificationBadge count={0} />
      <span>(↑ empty)</span>
    </div>
  ),
};

// ─── Overlaid on an icon (typical usage) ─────────────────────────────────────
export const OverlaidOnIcon: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {[1, 4, 12, 100].map(count => (
        <div key={count} className="relative inline-flex">
          {/* Placeholder icon */}
          <span className="flex h-8 w-8 items-center justify-center rounded-control bg-surface text-secondary text-label-md">
            🔔
          </span>
          <NotificationBadge
            count={count}
            className="absolute -top-1 -right-1"
          />
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma NotificationBadge set (483:7) ────
// Single variant: Count=5 at 16×20 (the badge's intrinsic size with a 1-digit count).
const NB_CELLS: MatrixCellSpec[] = [
  { variant: 'Count=5', x: 0, y: 0, w: 16, h: 20, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '483:7', cells: NB_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 16, height: 20 }}>
      {NB_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <NotificationBadge count={5} />
        </div>
      ))}
    </div>
  ),
};
