import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Skeleton> = {
  title: 'Primitives/Skeleton', component: Skeleton, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text:  Story = { args: { width: '200px', height: '16px' } };
export const Block: Story = { args: { width: '300px', height: '80px' } };

export const Avatar: Story = {
  render: () => (
    <Skeleton width="48px" height="48px" className="rounded-full" />
  ),
};

// CARD: 288×220 frame, rounded-card, p-4. Inner skeletons exactly match the
// Figma showcase: 256×120 image, 154×16 title, 256×14 + 205×14 body lines.
export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72 rounded-card border border-line p-4">
      <Skeleton width="256px" height="120px" />
      <Skeleton width="154px" height="16px" />
      <Skeleton width="256px" height="14px" />
      <Skeleton width="205px" height="14px" />
    </div>
  ),
};

// REQUEST ROW: 320×48 frame, 12×12 dot + 120×14 title + 180×12 subtitle
// (exact sizes matching the Figma showcase).
export const RequestRow: Story = {
  render: () => (
    <div className="flex items-center gap-3 w-80 px-4 py-3">
      <Skeleton width="12px" height="12px" className="rounded-full shrink-0" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton width="120px" height="14px" />
        <Skeleton width="180px" height="12px" />
      </div>
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Skeleton showcase (76:19) ───────
// No ComponentSet — the page is a doc showcase of 5 patterns:
//   TEXT 200×16  at y=14   (Figma absolute y=182)
//   BLOCK 300×80 at y=64   (Figma absolute y=232)
//   AVATAR 48×48 at y=178  (Figma absolute y=346)
//   CARD 288×220 at y=260  (Figma absolute y=428) — composed
//   REQUEST ROW 320×48 at y=514 (Figma absolute y=682) — composed
type SK_Pattern = 'TEXT' | 'BLOCK' | 'AVATAR' | 'CARD' | 'REQUEST_ROW';
interface SkeletonCell extends MatrixCellSpec {
  pattern: SK_Pattern;
}
const SKELETON_CELLS: SkeletonCell[] = [
  { variant: 'TEXT — 200×16',        pattern: 'TEXT',        x: 0, y: 14,  w: 200, h: 16,  expect: { headings: [] } },
  { variant: 'BLOCK — 300×80',       pattern: 'BLOCK',       x: 0, y: 64,  w: 300, h: 80,  expect: { headings: [] } },
  { variant: 'AVATAR — 48×48 circle', pattern: 'AVATAR',      x: 0, y: 178, w: 48,  h: 48,  expect: { headings: [] } },
  { variant: 'CARD — 288×220',       pattern: 'CARD',        x: 0, y: 260, w: 288, h: 220, expect: { headings: [] } },
  { variant: 'REQUEST ROW — 320×48', pattern: 'REQUEST_ROW', x: 0, y: 514, w: 320, h: 48,  expect: { headings: [] } },
];

function renderSkeleton(p: SK_Pattern) {
  switch (p) {
    case 'TEXT':   return <Skeleton width="200px" height="16px" />;
    case 'BLOCK':  return <Skeleton width="300px" height="80px" />;
    case 'AVATAR': return <Skeleton width="48px" height="48px" className="rounded-full" />;
    case 'CARD': return (
      <div className="flex flex-col gap-3 rounded-card p-4" style={{ width: 288, height: 220 }}>
        <Skeleton width="256px" height="120px" />
        <Skeleton width="154px" height="16px" />
        <Skeleton width="256px" height="14px" />
        <Skeleton width="205px" height="14px" />
      </div>
    );
    case 'REQUEST_ROW': return (
      <div className="flex items-center gap-3 px-4 py-3" style={{ width: 320, height: 48 }}>
        <Skeleton width="12px" height="12px" className="rounded-full shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton width="120px" height="14px" />
          <Skeleton width="180px" height="12px" />
        </div>
      </div>
    );
  }
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:19', cells: SKELETON_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 320, height: 580 }}>
      {SKELETON_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          {renderSkeleton(c.pattern)}
        </div>
      ))}
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-lg p-6">
      {/* page header */}
      <div className="flex items-center gap-4">
        <Skeleton width="56px" height="56px" className="rounded-full shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton width="40%" height="18px" />
          <Skeleton width="60%" height="14px" />
        </div>
      </div>
      {/* stat row */}
      <div className="flex gap-4">
        {[120, 100, 110].map((w, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton width={`${w}px`} height="12px" />
            <Skeleton width="80px" height="28px" />
          </div>
        ))}
      </div>
      {/* request rows */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton width="12px" height="12px" className="rounded-full shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton width={`${55 + (i % 3) * 15}%`} height="14px" />
            <Skeleton width={`${40 + (i % 2) * 20}%`} height="12px" />
          </div>
        </div>
      ))}
    </div>
  ),
};
