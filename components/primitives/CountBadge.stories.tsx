import type { Meta, StoryObj } from '@storybook/react';
import { CountBadge } from './CountBadge';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof CountBadge> = {
  title: 'Primitives/CountBadge', component: CountBadge, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof CountBadge>;

export const Default: Story = { args: { children: 4 } };
export const Large:   Story = { args: { children: 42 } };
export const Ratio:   Story = { args: { children: '3/12' } };

// ─── Zero ─────────────────────────────────────────────────────────────────────
// CountBadge is a pure display wrapper — callers control the content.
// Zero renders as-is; callers can conditionally hide the badge when count is 0.
export const Zero: Story = { args: { children: 0 } };

// ─── Max cap ──────────────────────────────────────────────────────────────────
// The component has no built-in cap; callers format the string before passing it.
// This story demonstrates the conventional "99+" capped display.
export const MaxCap: Story = { args: { children: '99+' } };

// ─── Overlaid on a button / icon ──────────────────────────────────────────────
// Typical usage: positioned absolutely over an icon button using a relative wrapper.
export const OverlaidOnIcon: Story = {
  render: () => (
    <div className="relative inline-flex">
      {/* Placeholder icon button */}
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-control border border-line-strong bg-elevated text-secondary"
        aria-label="Notifications"
      >
        {/* Bell outline using a plain SVG so we avoid an icon import here */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 2a6 6 0 0 1 6 6v3l1.5 2H2.5L4 11V8a6 6 0 0 1 6-6Z" />
          <path d="M8 16a2 2 0 0 0 4 0" />
        </svg>
      </button>
      <CountBadge className="absolute -right-1.5 -top-1.5">3</CountBadge>
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma CountBadge ComponentSet (483:4) ───
// Single variant: Count=5 at 15×18px.

const COUNT_BADGE_CELLS: MatrixCellSpec[] = [
  { variant: 'Count=5', x: 0, y: 0, w: 15, h: 18, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:65', cells: COUNT_BADGE_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 15, height: 18 }}>
      {COUNT_BADGE_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <CountBadge>5</CountBadge>
        </div>
      ))}
    </div>
  ),
};
