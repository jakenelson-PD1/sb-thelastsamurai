import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileRow } from './FileRow';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof FileRow> = {
  title: 'RLM Layout/FileRow',
  component: FileRow,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof FileRow>;

// ─── Default ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <FileRow
        fileName="Filename.pdf"
        size="0 KB"
        uploadedBy="Person"
        uploadedAt="2025-01-01"
        checked={checked}
        onCheckedChange={setChecked}
        onPreview={() => alert('preview')}
      />
    );
  },
};

// ─── Checked ─────────────────────────────────────────────────────────────────

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <FileRow
        fileName="Audit_Workpapers_FY24.pdf"
        size="1.2 MB"
        uploadedBy="Alice"
        uploadedAt="2024-03-02"
        checked={checked}
        onCheckedChange={setChecked}
        onPreview={() => alert('preview')}
      />
    );
  },
};

// ─── Status: Unread ──────────────────────────────────────────────────────────

export const Unread: Story = {
  render: () => (
    <FileRow
      fileName="Q4_Financials.xlsx"
      size="450 KB"
      uploadedBy="Bob"
      uploadedAt="2024-04-10"
      dot="unread"
      onPreview={() => alert('preview')}
    />
  ),
};

// ─── Status: Attention ───────────────────────────────────────────────────────

export const Attention: Story = {
  render: () => (
    <FileRow
      fileName="Bank_Statement_March.pdf"
      size="320 KB"
      uploadedBy="Carol"
      uploadedAt="2024-03-29"
      dot="attention"
      onPreview={() => alert('preview')}
    />
  ),
};

// ─── No Preview Button ───────────────────────────────────────────────────────

export const NoPreview: Story = {
  render: () => (
    <FileRow
      fileName="Internal_Memo.docx"
      size="78 KB"
      uploadedBy="Dan"
      uploadedAt="2024-03-15"
      hasPreview={false}
    />
  ),
};

// ─── Matrix — 1:1 mirror of Figma FileRow page (1547:2) ──────────────────────
// ComponentSet `FileRow` (id 1547:133), 6 variants = State × Status.
//   States (2): Default / Hover
//   Statuses (3): Default / Unread / Attention
// Layout: 3 status columns at x=[0, 820, 1640], each 800 wide.
//         2 state rows at y=[0, 70], each 48 tall.
// Content per Figma defaults: FileName="Filename.pdf", Metadata="0 KB · Person · 00/00/00".

const FR_STATUS_ORDER: ('Default' | 'Unread' | 'Attention')[] = ['Default', 'Unread', 'Attention'];
const FR_X = [0, 820, 1640];
const FR_ROW_LAYOUT: { state: 'Default' | 'Hover'; y: number }[] = [
  { state: 'Default', y: 0 },
  { state: 'Hover',   y: 70 },
];

const FR_CELLS: MatrixCellSpec[] = FR_ROW_LAYOUT.flatMap((row) =>
  FR_STATUS_ORDER.map((status, i) => ({
    variant: `State=${row.state}, Status=${status}`,
    x: FR_X[i],
    y: row.y,
    w: 800,
    h: 48,
    expect: {
      // FileRow has one button: Preview. The Checkbox is excluded from
      // buttonLabels (MatrixVerify skips checkbox inputs).
      buttonLabels: ['Preview'],
    },
  })),
);

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '1547:2',
      cells: FR_CELLS,
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 2440, height: 118 }}>
      {FR_ROW_LAYOUT.map((row) =>
        FR_STATUS_ORDER.map((status, i) => (
          <div
            key={`${row.state}-${status}`}
            className="absolute"
            data-matrix-cell
            style={{ left: FR_X[i], top: row.y, width: 800 }}
          >
            <FileRow
              fileName="Filename.pdf"
              size="0 KB"
              uploadedBy="Person"
              // Pass the literal placeholder Figma uses. FileRow renders this
              // through the canonical <Timestamp> primitive; invalid date
              // strings fall through to the raw value, so "00/00/00" matches
              // Figma's placeholder exactly while still going through the
              // canonical primitive.
              uploadedAt="00/00/00"
              dot={status === 'Default' ? undefined : status === 'Unread' ? 'unread' : 'attention'}
              forceHover={row.state === 'Hover'}
            />
          </div>
        )),
      )}
    </div>
  ),
};
