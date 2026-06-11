import type { Meta, StoryObj } from '@storybook/react';
import { ClientFilesSection } from './ClientFilesSection';
import type { ClientFile } from './ClientFilesSection';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof ClientFilesSection> = {
  title: 'RLM Layout/ClientFilesSection',
  component: ClientFilesSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="h-[600px] overflow-y-auto bg-canvas">  // token-lint-skip: showcase fixed dims for screenshot stability
        {/* Simulate action bar height so sticky top-12 section header works correctly */}
        <div className="h-12 sticky top-0 z-20 bg-canvas border-b border-line flex items-center px-6">
          <span className="text-label-sm text-muted">Action bar</span>
        </div>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ClientFilesSection>;

const mockFiles: ClientFile[] = [
  { id: 'f1', name: 'Purchase_Order.pdf',       sizeKb: 158,  uploadedBy: 'Gerardo Sumano', uploadedAt: '01/31/25', type: 'pdf',   dot: 'unread' },
  { id: 'f2', name: 'Financial_Report_Q4.pdf',  sizeKb: 2048, uploadedBy: 'Gerardo Sumano', uploadedAt: '01/31/25', type: 'pdf' },
  { id: 'f3', name: 'Lease_Agreement.pdf',      sizeKb: 512,  uploadedBy: 'Jenny Staggs',   uploadedAt: '12/15/24', type: 'pdf',   dot: 'attention' },
  { id: 'f4', name: 'Payroll_Register_Q1.xlsx', sizeKb: 340,  uploadedBy: 'Jenny Staggs',   uploadedAt: '01/10/25', type: 'excel' },
];

// ─── Default ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    files: mockFiles,
    onDownload: (ids) => alert(`Download: ${ids.join(', ')}`),
    onDelete:   (ids) => alert(`Delete: ${ids.join(', ')}`),
    onImport:   () => alert('Import'),
    onPreview:  (id) => alert(`Preview: ${id}`),
  },
};

// ─── Empty state ──────────────────────────────────────────────────────────────
export const Empty: Story = {
  args: { files: [] },
};

// ─── With dot indicators ──────────────────────────────────────────────────────
// Blue dot = unread file · Orange dot = needs attention
export const WithDots: Story = {
  args: {
    files: [
      { id: 'f1', name: 'New_Upload.pdf',      sizeKb: 200, uploadedBy: 'Gerardo Sumano', uploadedAt: '02/01/25', type: 'pdf',   dot: 'unread' },
      { id: 'f2', name: 'Flagged_File.pdf',    sizeKb: 400, uploadedBy: 'Jenny Staggs',   uploadedAt: '01/20/25', type: 'pdf',   dot: 'attention' },
      { id: 'f3', name: 'Normal_File.xlsx',    sizeKb: 180, uploadedBy: 'Jenny Staggs',   uploadedAt: '01/15/25', type: 'excel' },
    ],
    onPreview: (id) => alert(`Preview: ${id}`),
  },
};

// ─── Matrix — 1:1 mirror of Figma ClientFilesSection page (76:6) ─────────────
// ComponentSet (id 423:136), single variant State=default (800×304):
//   Accordion header "Client attached files" → Toolbar (select-all + Download +
//   Delete + Import ghost button) → Filter bar (sort icons + "All" Dropdown +
//   count) → 4 FileRow instances.
const CFS_CELLS: MatrixCellSpec[] = [
  {
    variant: 'State=default',
    x: 0,
    y: 0,
    w: 800,
    h: 304,
    expect: {
      // Accordion header button + toolbar/filter buttons + 4 Preview buttons.
      // Sort icons are iconOnly (no text); checkboxes excluded.
      buttonLabels: [
        'Client attached files',
        'Download',
        'Delete',
        'Import client files',
        'All',
        'Preview', 'Preview', 'Preview', 'Preview',
      ],
    },
  },
];

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:6', cells: CFS_CELLS },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 304 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 800 }}>
        <ClientFilesSection
          files={mockFiles}
          onDownload={() => {}}
          onDelete={() => {}}
          onImport={() => {}}
          onPreview={() => {}}
        />
      </div>
    </div>
  ),
};
