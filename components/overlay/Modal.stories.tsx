import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../primitives/Button';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Modal> = {
  title: 'Overlay/Modal', component: Modal, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="This is a title"
          footer={[
            { label: 'Learn more',    onClick: () => setOpen(false) },
            { label: 'Save changes',  onClick: () => setOpen(false), variant: 'primary' },
          ]}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Modal>
      </>
    );
  },
  parameters: { layout: 'centered' },
};

export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete item</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete message"
          footer={[
            { label: 'Cancel',         onClick: () => setOpen(false) },
            { label: 'Delete message', onClick: () => setOpen(false), variant: 'danger' },
          ]}
        >
          <p>This message will be available in "Restore Files" for 90 days before being permanently deleted.</p>
        </Modal>
      </>
    );
  },
  parameters: { layout: 'centered' },
};

// ─── Matrix — mirrors Figma Modal ComponentSet (752:29) ─────────────────────
// 2 variants on the `Variant` axis (Default / Destructive), each 448px wide
// with intrinsic height (Default ~275, Destructive ~203). Cells use absolute
// positioning at Figma's exact (x, y, w, h). Each renders the canonical
// `Modal` primitive in `inline` mode — no mocks, no forks.

const MODAL_CELLS: MatrixCellSpec[] = [
  // x/y mirror the two variants' positions inside set 752:29, normalized so
  // the leftmost variant starts at (0, 0). Figma had Default at x=32 and
  // Destructive at x=528 — the 496px offset (= 448 panel + 48 gap) is
  // preserved as the inter-cell offset.
  { variant: 'Variant=Default',     x: 0,   y: 0, w: 448, h: 275, expect: { headings: ['This is a title'] } },
  { variant: 'Variant=Destructive', x: 496, y: 0, w: 448, h: 203, expect: { headings: ['Delete message'] } },
];

const renderCell = (variant: string) => {
  if (variant === 'Variant=Default') {
    return (
      <Modal
        open
        inline
        onClose={() => {}}
        title="This is a title"
        footer={[
          { label: 'Learn more',   onClick: () => {} },
          { label: 'Save changes', onClick: () => {}, variant: 'primary' },
        ]}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Modal>
    );
  }
  // Variant=Destructive
  return (
    <Modal
      open
      inline
      variant="destructive"
      onClose={() => {}}
      title="Delete message"
      footer={[
        { label: 'Cancel',         onClick: () => {} },
        { label: 'Delete message', onClick: () => {} },
      ]}
    >
      <p>This message will be available in "Restore Files" for 90 days before being permanently deleted.</p>
    </Modal>
  );
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:58', cells: MODAL_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1000, height: 320 }}>
      {MODAL_CELLS.map((c) => (
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
