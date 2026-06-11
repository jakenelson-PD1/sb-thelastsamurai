import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack', component: Stack, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Stack>;

const item = (label: string) => (
  <div key={label} className="bg-surface border border-line rounded-control p-3 text-label-sm">{label}</div>
);

export const Vertical: Story = {
  args: { direction: 'col', gap: 4, children: [
    <div key="a" className="bg-surface p-3 rounded-control">Item 1</div>,
    <div key="b" className="bg-surface p-3 rounded-control">Item 2</div>,
    <div key="c" className="bg-surface p-3 rounded-control">Item 3</div>,
  ]},
};

export const Horizontal: Story = {
  args: { direction: 'row', gap: 4, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const GapOne: Story = {
  args: { direction: 'col', gap: 1, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const GapTwo: Story = {
  args: { direction: 'col', gap: 2, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const GapThree: Story = {
  args: { direction: 'col', gap: 3, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const GapSix: Story = {
  args: { direction: 'col', gap: 6, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const GapEight: Story = {
  args: { direction: 'col', gap: 8, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const AlignStart: Story = {
  args: { direction: 'row', gap: 4, align: 'start', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};

export const AlignCenter: Story = {
  args: { direction: 'row', gap: 4, align: 'center', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};

export const AlignEnd: Story = {
  args: { direction: 'row', gap: 4, align: 'end', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};

export const AlignStretch: Story = {
  args: { direction: 'row', gap: 4, align: 'stretch', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};

export const JustifyStart: Story = {
  args: { direction: 'row', gap: 4, justify: 'start', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const JustifyCenter: Story = {
  args: { direction: 'row', gap: 4, justify: 'center', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const JustifyEnd: Story = {
  args: { direction: 'row', gap: 4, justify: 'end', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

export const JustifyBetween: Story = {
  args: { direction: 'row', gap: 4, justify: 'between', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};

// ─── Matrix — mirrors Figma "Stack" page (76:44) ─────────────────────────────
// LAYOUT scaffolding: representative direction × gap variants.
// Figma ComponentSet 781:50 has 12 variants — showing 2 representatives.
const S_CELLS: MatrixCellSpec[] = [
  { variant: 'Direction=col, Gap=4', x: 40, y: 40,  w: 320, h: 240, expect: { headings: [] } },
  { variant: 'Direction=row, Gap=4', x: 40, y: 320, w: 480, h: 96,  expect: { headings: [] } },
];

// Plain grey pill placeholder matching Figma 76:44 — direction/gap is the
// showcase, content inside the stack is intentionally featureless.
const StackPill = ({ direction }: { direction: 'col' | 'row' }) => (
  <div
    className="rounded-control bg-recessed"
    style={direction === 'col' ? { height: 48, width: '100%' } : { height: '100%', width: 64, flex: 1 }}
  />
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:44', cells: S_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 560, height: 460 }}>
      {S_CELLS.map(c => {
        const direction = /col/.test(c.variant) ? 'col' as const : 'row' as const;
        return (
          <div key={c.variant} className="absolute border border-line rounded-control bg-elevated p-3 overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <Stack direction={direction} gap={4} className={direction === 'row' ? 'h-full' : undefined}>
              {[0, 1, 2].map((i) => <StackPill key={i} direction={direction} />)}
            </Stack>
          </div>
        );
      })}
    </div>
  ),
};
