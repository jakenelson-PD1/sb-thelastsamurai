import type { Meta, StoryObj } from '@storybook/react';
import { FileDropZone } from './FileDropZone';
import { MatrixVerify } from '../_decorators/MatrixVerify';

const meta: Meta<typeof FileDropZone> = {
  title: 'RLM Layout/FileDropZone',
  component: FileDropZone,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof FileDropZone>;

// ─── Default ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    onBrowse: () => alert('Browse clicked'),
    onESignatureClick: () => alert('E-Signature clicked'),
    onFilesDropped: (files) => alert(`Dropped ${files.length} file(s)`),
  },
};

// ─── No E-Signature ───────────────────────────────────────────────────────────
// The E-Signature button is optional — omit onESignatureClick to hide it.
export const WithoutESignature: Story = {
  args: {
    onBrowse: () => alert('Browse clicked'),
    onFilesDropped: (files) => alert(`Dropped ${files.length} file(s)`),
  },
};

// ─── Matrix — 1:1 mirror of Figma FileDropZone page (76:10) ───────────────────
// ComponentSet `FileDropZone` (id 408:34), 800×120 per variant.
//   State=idle      @ (8, 8)   — neutral drop zone: bg/surface, border/default dashed
//   State=dragging  @ (8, 148) — active drop zone:  status/info-surface, action/primary dashed
//
// Both variants render the same content:
//   Left: 624×120 wrapper with 16px padding around a 592×88 dashed drop zone
//         containing upload-01 icon (Size=Medium) + "Drop files here or browse for files"
//   Center: 1px divider (border/default), full height
//   Right: 175×120 E-Signature area with a Button(Secondary, xs, pencil-line icon, "E-Signature")
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:10',
      cells: [
        {
          variant: 'State=idle',
          x: 8, y: 8, w: 800, h: 120,
          expect: {
            buttonLabels: ['Drop files here or browse for files', 'E-Signature'],
          },
        },
        {
          variant: 'State=dragging',
          x: 8, y: 148, w: 800, h: 120,
          expect: {
            buttonLabels: ['Drop files here or browse for files', 'E-Signature'],
          },
        },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 816, height: 276 }}>
      <div className="absolute" data-matrix-cell style={{ left: 8, top: 8, width: 800 }}>
        <FileDropZone dragging={false} />
      </div>
      <div className="absolute" data-matrix-cell style={{ left: 8, top: 148, width: 800 }}>
        <FileDropZone dragging={true} />
      </div>
    </div>
  ),
};
