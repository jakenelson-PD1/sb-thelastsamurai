import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../primitives/Button';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Drawer> = {
  title: 'Overlay/Drawer', component: Drawer, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Drawer" side="right">
          <p className="text-body-sm text-muted">Drawer content.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};

export const LeftSide: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Left Drawer" side="left">
          <p className="text-body-sm text-muted">This drawer slides in from the left side.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};

export const WithoutTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer (No Title)</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="right">
          <p className="text-body-sm text-muted">This drawer has no title, only the close button in the header.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};

export const LeftWithoutTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer (No Title)</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="left">
          <p className="text-body-sm text-muted">Left drawer without a title.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};

// ─── Matrix — mirrors Figma Drawer ComponentSet (754:18) ────────────────────
// 2 variants on the Side axis (Right / Left), each 320×640. ShowTitle is a
// per-instance BOOLEAN (default true) — Figma's showcase exercises both sides
// with the title visible, so the Matrix mirrors that. Cells use absolute
// positioning at Figma's exact (x, y, w, h) per the page-to-matrix skill.

const DRAWER_CELLS: MatrixCellSpec[] = [
  // x/y mirror the two variants' positions inside set 754:18, normalized so
  // the leftmost variant starts at (0, 0). Figma had Side=Right at x=32 and
  // Side=Left at x=400 — the 368px gap is preserved as the inter-cell offset.
  // Each cell renders the canonical Drawer with title="Drawer", which mounts
  // an `<h2>` — declare it so MatrixVerify's heading audit passes.
  { variant: 'Side=Right', x: 0,   y: 0, w: 320, h: 640, expect: { headings: ['Drawer'] } },
  { variant: 'Side=Left',  x: 368, y: 0, w: 320, h: 640, expect: { headings: ['Drawer'] } },
];

const renderCell = (variant: string) => {
  const side = /Side=Left/.test(variant) ? 'left' : 'right';
  return (
    <Drawer open inline onClose={() => {}} side={side} title="Drawer">
      <p className="text-body-sm text-muted">Drawer content.</p>
    </Drawer>
  );
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:56', cells: DRAWER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 720, height: 680 }}>
      {DRAWER_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderCell(c.variant)}
        </div>
      ))}
    </div>
  ),
};
