import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { Grid, ColSpan } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid', component: Grid, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Grid>;

const cell = (n: number) => (
  <div key={n} className="bg-surface border border-line rounded-control p-3 text-center text-label-sm">{n}</div>
);

export const TwoCol: Story = {
  args: { cols: 2, gap: 4, children: [
    <div key="a" className="bg-surface p-4 rounded-control">Cell A</div>,
    <div key="b" className="bg-surface p-4 rounded-control">Cell B</div>,
  ]},
};

export const OneCol: Story = {
  args: { cols: 1, gap: 4, children: [1, 2, 3].map(cell) },
};

export const ThreeCol: Story = {
  args: { cols: 3, gap: 4, children: [1, 2, 3, 4, 5, 6].map(cell) },
};

export const FourCol: Story = {
  args: { cols: 4, gap: 4, children: [1, 2, 3, 4, 5, 6, 7, 8].map(cell) },
};

export const SixCol: Story = {
  args: { cols: 6, gap: 4, children: [1, 2, 3, 4, 5, 6].map(cell) },
};

export const TwelveCol: Story = {
  args: { cols: 12, gap: 4, children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(cell) },
};

export const GapTwo: Story = {
  args: { cols: 3, gap: 2, children: [1, 2, 3, 4, 5, 6].map(cell) },
};

export const GapFour: Story = {
  args: { cols: 3, gap: 4, children: [1, 2, 3, 4, 5, 6].map(cell) },
};

export const GapSix: Story = {
  args: { cols: 3, gap: 6, children: [1, 2, 3, 4, 5, 6].map(cell) },
};

export const GapEight: Story = {
  args: { cols: 3, gap: 8, children: [1, 2, 3, 4, 5, 6].map(cell) },
};

// ─── Responsive ───────────────────────────────────────────────────────────────

export const ResponsiveCols: Story = {
  name: 'Responsive (1 → 2 → 3)',
  render: () => (
    <Grid cols={{ base: 1, sm: 2, md: 3 }} gap={4}>
      {[1, 2, 3, 4, 5, 6].map(cell)}
    </Grid>
  ),
};

export const TwelveColSpans: Story = {
  name: 'ColSpan — 12-col layout',
  render: () => (
    <Grid cols={12} gap={4}>
      <ColSpan span={8}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Main — 8 cols</div></ColSpan>
      <ColSpan span={4}><div className="bg-recessed border border-line rounded-control p-4 text-label-sm text-secondary">Sidebar — 4 cols</div></ColSpan>
      <ColSpan span={4}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Card — 4</div></ColSpan>
      <ColSpan span={4}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Card — 4</div></ColSpan>
      <ColSpan span={4}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Card — 4</div></ColSpan>
      <ColSpan span="full"><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Full width — 12 cols</div></ColSpan>
    </Grid>
  ),
};

// ─── Matrix — mirrors Figma "Grid" page (76:35) ──────────────────────────────
// LAYOUT scaffolding: representative cols variants (all gap=4) from the 24 total.
// Figma ComponentSet 776:138.
const G_CELLS: MatrixCellSpec[] = [
  { variant: 'Columns=2, Gap=4',  x: 40, y: 40,  w: 800, h: 160, expect: { headings: [] } },
  { variant: 'Columns=4, Gap=4',  x: 40, y: 240, w: 800, h: 160, expect: { headings: [] } },
  { variant: 'Columns=12, Gap=4', x: 40, y: 440, w: 800, h: 80,  expect: { headings: [] } },
];

// Plain placeholder cell matching Figma 76:35 — column count is the showcase,
// content is intentionally featureless.
const GridPlaceholder = ({ n }: { n: number }) => (
  <div key={n} className="h-10 rounded-control bg-recessed" />
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:35', cells: G_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 880, height: 560 }}>
      {G_CELLS.map(c => {
        const cols = parseInt(c.variant.match(/Columns=(\d+)/)![1], 10) as 1 | 2 | 3 | 4 | 6 | 12;
        const count = cols * (cols === 12 ? 1 : 2);
        return (
          <div key={c.variant} className="absolute border border-line rounded-control bg-elevated p-3 overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <Grid cols={cols} gap={4}>
              {Array.from({ length: count }, (_, i) => <GridPlaceholder key={i} n={i} />)}
            </Grid>
          </div>
        );
      })}
    </div>
  ),
};
