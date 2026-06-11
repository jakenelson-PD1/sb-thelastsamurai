import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof ScrollArea>;

const loremLines = Array.from({ length: 20 }, (_, i) => (
  <p key={i} className="text-body-sm text-secondary py-1 border-b border-line">
    Line {i + 1} — Lorem ipsum dolor sit amet consectetur
  </p>
));

export const VerticalScroll: Story = {
  render: () => (
    <div className="bg-surface border border-line rounded-control" style={{ height: 200 }}>
      <ScrollArea axis="y" className="h-full p-panel-compact">
        {loremLines}
      </ScrollArea>
    </div>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <div className="bg-surface border border-line rounded-control" style={{ width: 300 }}>
      <ScrollArea axis="x" className="p-panel-compact">
        <div className="flex gap-3" style={{ width: 800 }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="shrink-0 w-24 bg-recessed border border-line rounded-control p-2 text-center text-label-sm text-muted">
              Col {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};

// ─── Matrix — mirrors Figma "ScrollArea" page (76:43) ────────────────────────
// LAYOUT scaffolding: 3 axis variants @ 240×160. Figma ComponentSet 789:16.
const SA_CELLS: MatrixCellSpec[] = [
  { variant: 'Axis=y',    x: 40, y: 40,  w: 320, h: 200, expect: { headings: [] } },
  { variant: 'Axis=x',    x: 40, y: 280, w: 320, h: 200, expect: { headings: [] } },
  { variant: 'Axis=both', x: 40, y: 520, w: 320, h: 200, expect: { headings: [] } },
];

// Placeholder content rectangle matching Figma 76:43 — a grey block sized
// to overflow on whichever axis(es) the variant scrolls. The block content
// itself is intentionally featureless; the variant axis is the showcase.
const ScrollPlaceholder = ({ axis }: { axis: 'y' | 'x' | 'both' }) => {
  const overflowX = axis === 'x' || axis === 'both';
  const overflowY = axis === 'y' || axis === 'both';
  return (
    <div
      className="rounded-control bg-recessed"
      style={{  // token-lint-skip: showcase fixed dims for screenshot stability
        width:  overflowX ? 600 : '100%',
        height: overflowY ? 400 : '100%',
        margin: 8,
      }}
    />
  );
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:43', cells: SA_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 400, height: 760 }}>
      {SA_CELLS.map(c => {
        const axis = c.variant.replace('Axis=', '') as 'y' | 'x' | 'both';
        return (
          <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <ScrollArea axis={axis} className="h-full w-full border border-line rounded-control bg-elevated">
              <ScrollPlaceholder axis={axis} />
            </ScrollArea>
          </div>
        );
      })}
    </div>
  ),
};
