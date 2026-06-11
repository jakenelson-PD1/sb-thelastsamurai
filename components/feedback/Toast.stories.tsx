import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Toast> = {
  title: 'Primitives/Toast', component: Toast, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Toast>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toast message="File saved" variant="default" />
      <Toast message="Success!" description="Your changes were saved." variant="success" />
      <Toast message="Error" description="Something went wrong. Please try again." variant="error" />
    </div>
  ),
};

export const Default: Story = { args: { message: 'File saved', variant: 'default' } };
export const Success: Story = { args: { message: 'Saved!', description: 'Your changes were saved.', variant: 'success' } };
export const Error: Story   = { args: { message: 'Error', description: 'Something went wrong.', variant: 'error' } };

export const LongMessage: Story = {
  args: {
    message: 'Your export is taking longer than expected',
    description:
      'We are still processing your request. Large exports can take several minutes. You will receive an email notification once the file is ready to download.',
    variant: 'default',
  },
};

export const Stacked: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toast message="File saved" variant="default" />
      <Toast message="Profile updated" description="Your changes were saved successfully." variant="success" />
      <Toast message="Upload failed" description="The file could not be uploaded. Please try again." variant="error" />
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Toast ComponentSet (222:22) ──────
// 3 Variant variants laid out horizontally at y=20, each 320×69.
// Content matches Figma exactly:
//   Default: "File saved" / "Your changes have been saved successfully."
//   Success: "Success!"   / "Your changes were saved."
//   Error:   "Error"      / "Something went wrong. Please try again."

type TOAST_Variant = 'default' | 'success' | 'error';

interface ToastCell extends MatrixCellSpec {
  v: TOAST_Variant;
  message: string;
  description: string;
}

const TOAST_CELLS: ToastCell[] = [
  { variant: 'Variant=Default', v: 'default', x: 13,  y: 20, w: 320, h: 69, message: 'File saved', description: 'Your changes have been saved successfully.', expect: { headings: [] } },
  { variant: 'Variant=Success', v: 'success', x: 360, y: 20, w: 320, h: 69, message: 'Success!',   description: 'Your changes were saved.',                  expect: { headings: [] } },
  { variant: 'Variant=Error',   v: 'error',   x: 707, y: 20, w: 320, h: 69, message: 'Error',      description: 'Something went wrong. Please try again.',  expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '222:22', cells: TOAST_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1040, height: 106 }}>
      {TOAST_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Toast variant={c.v} message={c.message} description={c.description} className="!max-w-none w-full" />
        </div>
      ))}
    </div>
  ),
};
