import type { Meta, StoryObj } from '@storybook/react';
import { Toast, deleteToast, bulkDeleteToast } from './Toast';
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
      <Toast
        variant="undo"
        message={'Deleted "Q2 Bank Statements."'}
        onUndo={() => {}}
      />
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

// ─── Undo variant ─────────────────────────────────────────────────────────
// Confirms a destructive action just completed and gives the user a 30-second
// window to reverse it. The countdown lives in the Undo button so it's
// impossible to miss. Bottom-center is the intended placement in an app; the
// primitive itself stays layout-agnostic (matching the other variants).

export const Undo: Story = {
  parameters: { layout: 'centered' },
  render: () => (
    <Toast
      variant="undo"
      message={'Deleted "Q2 Bank Statements."'}
      onUndo={() => {}}
    />
  ),
};

export const UndoBulk: Story = {
  parameters: { layout: 'centered' },
  render: () => (
    <Toast
      variant="undo"
      message="Deleted 3 items."
      onUndo={() => {}}
    />
  ),
};

// The two typed helper factories consumers should reach for in app code.
export const UndoDeleteHelper: Story = {
  parameters: { layout: 'centered' },
  render: () =>
    deleteToast({ itemName: 'Q2 Bank Statements', onUndo: () => {} }),
};

export const UndoBulkDeleteHelper: Story = {
  parameters: { layout: 'centered' },
  render: () => bulkDeleteToast({ count: 3, onUndo: () => {} }),
};

export const UndoBottomCenter: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="relative min-h-96 w-full bg-canvas">
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Toast
          variant="undo"
          message={'Deleted "Q2 Bank Statements."'}
          onUndo={() => {}}
        />
      </div>
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Toast ComponentSet (222:22) ──────
// 4 Variant variants laid out horizontally at y=20.
//   Default: "File saved" / "Your changes have been saved successfully."
//   Success: "Success!"   / "Your changes were saved."
//   Error:   "Error"      / "Something went wrong. Please try again."
//   Undo:    'Deleted "Q2 Bank Statements."' / — (single-line, pill-shaped)

type TOAST_Variant = 'default' | 'success' | 'error' | 'undo';

interface ToastCell extends MatrixCellSpec {
  v: TOAST_Variant;
  message: string;
  description?: string;
}

const TOAST_CELLS: ToastCell[] = [
  { variant: 'Variant=Default', v: 'default', x: 13,   y: 20, w: 320, h: 69, message: 'File saved', description: 'Your changes have been saved successfully.', expect: { headings: [] } },
  { variant: 'Variant=Success', v: 'success', x: 360,  y: 20, w: 320, h: 69, message: 'Success!',   description: 'Your changes were saved.',                  expect: { headings: [] } },
  { variant: 'Variant=Error',   v: 'error',   x: 707,  y: 20, w: 320, h: 69, message: 'Error',      description: 'Something went wrong. Please try again.',  expect: { headings: [] } },
  { variant: 'Variant=Undo',    v: 'undo',    x: 1054, y: 20, w: 320, h: 56, message: 'Deleted "Q2 Bank Statements."',                                        expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '222:22', cells: TOAST_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1390, height: 106 }}>
      {TOAST_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {c.v === 'undo' ? (
            <Toast variant="undo" message={c.message} onUndo={() => {}} className="!max-w-none w-full" />
          ) : (
            <Toast variant={c.v} message={c.message} description={c.description} className="!max-w-none w-full" />
          )}
        </div>
      ))}
    </div>
  ),
};
