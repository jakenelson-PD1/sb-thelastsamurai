import type { Meta, StoryObj } from '@storybook/react';
import { Info as InfoIcon, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Alert } from './Alert';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Alert> = {
  title: 'Overlay/Alert', component: Alert, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Alert>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Heads up"     >Your trial expires in 7 days.</Alert>
      <Alert variant="success" title="Saved"        >Your changes have been published.</Alert>
      <Alert variant="warning" title="Attention"    >This action may affect other users.</Alert>
      <Alert variant="danger"  title="Error"        >Failed to save. Please try again.</Alert>
    </div>
  ),
};

export const Info: Story    = { args: { variant: 'info',    title: 'Overlay/Alert',  children: 'Your trial expires in 7 days.' } };
export const Success: Story = { args: { variant: 'success', title: 'Saved',     children: 'Your changes have been published.' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Attention', children: 'This action may affect other users.' } };
export const Danger: Story  = { args: { variant: 'danger',  title: 'Error',     children: 'Failed to save. Please try again.' } };

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Update available" icon={<InfoIcon size={16} />}          >Version 2.0 is ready to install.</Alert>
      <Alert variant="success" title="Payment received" icon={<CheckCircle size={16} />}   >Invoice #1042 has been paid.</Alert>
      <Alert variant="warning" title="Low storage"      icon={<AlertTriangle size={16} />} >You have 500MB remaining.</Alert>
      <Alert variant="danger"  title="Login failed"     icon={<XCircle size={16} />}       >Incorrect password. 2 attempts left.</Alert>
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'Cookie policy',
    children: 'We use cookies to improve your experience.',
    action: { label: 'Manage settings', onClick: () => alert('manage') },
  },
};

export const WithIconAndAction: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    children: 'You have unsaved changes that will be lost.',
    icon: <AlertTriangle size={16} />,
    action: { label: 'Dismiss', onClick: () => alert('dismiss') },
  },
};

// ─── Matrix — pixel-pinned mirror of Figma Alert ComponentSet (218:34) ───────
// 4 variants stacked vertically at exact Figma coords:
//   Info    — x=0,  y=0,   480×80   "Heads up"   / "Your trial expires in 7 days."
//   Success — x=0,  y=96,  480×80   "Saved"      / "Your changes have been published."
//   Warning — x=0,  y=192, 480×80   "Attention"  / "This action may affect other users."
//   Danger  — x=0,  y=288, 480×80   "Error"      / "Failed to save. Please try again."
// Each variant: rounded-card · p-4 · text-body-md · status-{v}-surface bg +
//               status-{v}-border border + status-{v}-fg text. Title font-medium,
//               body in opacity-80 (per source `mt-1 opacity-80` rendering).

const ALERT_CELLS: (MatrixCellSpec & { v: 'info' | 'success' | 'warning' | 'danger'; title: string; body: string })[] = [
  { variant: 'Variant=Info',    v: 'info',    title: 'Heads up',  body: 'Your trial expires in 7 days.',          x: 0, y: 0,   w: 480, h: 80, expect: { headings: [] } },
  { variant: 'Variant=Success', v: 'success', title: 'Saved',     body: 'Your changes have been published.',      x: 0, y: 96,  w: 480, h: 80, expect: { headings: [] } },
  { variant: 'Variant=Warning', v: 'warning', title: 'Attention', body: 'This action may affect other users.',    x: 0, y: 192, w: 480, h: 80, expect: { headings: [] } },
  { variant: 'Variant=Danger',  v: 'danger',  title: 'Error',     body: 'Failed to save. Please try again.',      x: 0, y: 288, w: 480, h: 80, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:18', cells: ALERT_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 480, height: 368 }}>
      {ALERT_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Alert variant={c.v} title={c.title}>{c.body}</Alert>
        </div>
      ))}
    </div>
  ),
};
