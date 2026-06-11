import type { Meta, StoryObj } from '@storybook/react';
import { Timestamp } from './Timestamp';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Timestamp> = {
  title: 'Primitives/Timestamp', component: Timestamp, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Timestamp>;

// ─── Date object input ────────────────────────────────────────────────────────
export const WithDateObject: Story = {
  args: { date: new Date('2025-06-15T14:30:00') },
};

// ─── ISO string input ─────────────────────────────────────────────────────────
export const WithISOString: Story = {
  args: { date: '2025-06-15T14:30:00' },
};

// ─── Invalid date string — renders raw value inside <time> ───────────────────
export const InvalidDate: Story = {
  args: { date: 'not-a-date' },
};

// ─── Custom className ─────────────────────────────────────────────────────────
export const WithClassName: Story = {
  args: { date: new Date('2025-01-01T09:00:00'), className: 'font-bold text-red-500' },
};

// ─── All states side by side ──────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-2 text-sm">  // token-lint-skip: showcase fixed dims for screenshot stability
      <div>
        <span className="text-muted mr-2">Date object:</span>
        <Timestamp date={new Date('2025-06-15T14:30:00')} />
      </div>
      <div>
        <span className="text-muted mr-2">ISO string:</span>
        <Timestamp date="2025-06-15T14:30:00" />
      </div>
      <div>
        <span className="text-muted mr-2">Midnight:</span>
        <Timestamp date={new Date('2025-12-31T00:00:00')} />
      </div>
      <div>
        <span className="text-muted mr-2">Invalid:</span>
        <Timestamp date="not-a-date" />
      </div>
    </div>
  ),
};

// ─── Formats ──────────────────────────────────────────────────────────────────
// `format` lets you pick what slice to render: full datetime (default), date
// only, short date (2-digit year), or time only.
export const Formats: Story = {
  render: () => {
    const d = new Date('2025-06-15T14:30:00');
    return (
      <div className="flex flex-col gap-2 text-body-md">
        <div><span className="text-muted mr-2">datetime (default):</span><Timestamp date={d} /></div>
        <div><span className="text-muted mr-2">date:</span><Timestamp date={d} format="date" /></div>
        <div><span className="text-muted mr-2">short-date:</span><Timestamp date={d} format="short-date" /></div>
        <div><span className="text-muted mr-2">time:</span><Timestamp date={d} format="time" /></div>
      </div>
    );
  },
};

// ─── Matrix — pixel-pinned mirror of Figma Timestamp ComponentSet (456:15) ──
// Single Date=Now variant at 144×21 rendering "04/16/2026 10:00 AM" (Figma
// default text). Source's default datetime format produces the same shape.
const TIMESTAMP_CELLS: MatrixCellSpec[] = [
  { variant: 'Date=Now', x: 0, y: 0, w: 144, h: 21, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '456:15', cells: TIMESTAMP_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative text-body-md text-primary" style={{ width: 144, height: 21 }}>
      {TIMESTAMP_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <Timestamp date={new Date('2026-04-16T10:00:00')} />
        </div>
      ))}
    </div>
  ),
};
