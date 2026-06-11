import type { Meta, StoryObj } from '@storybook/react';
import { RequestDetailHeader } from './RequestDetailHeader';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof RequestDetailHeader> = {
  title: 'RLM Layout/RequestDetailHeader',
  component: RequestDetailHeader,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof RequestDetailHeader>;

// ─── Default ─────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    orderNumber: 3,
    title: 'RLM Layout/RequestDetailHeader',
    description: 'Details of other accruals, identifying any reserves and any amounts to be paid out within 8.5 months.',
    status: 'outstanding',
    createdBy: 'Jake Allsop',
    dueDate: 'Thu, Apr 16',
    priority: 'high',
  },
};

// ─── All statuses ─────────────────────────────────────────────────────────────
export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-line border border-line rounded-card overflow-hidden">
      <RequestDetailHeader orderNumber={1} title="Engagement Letter"             status="outstanding" createdBy="Jake Allsop" dueDate="Apr 1"  />
      <RequestDetailHeader orderNumber={2} title="Signed Engagement Letter"      status="accepted"    createdBy="Jake Allsop" dueDate="Apr 2"  />
      <RequestDetailHeader orderNumber={3} title="Revenue Recognition Schedule"  status="fulfilled"   createdBy="Jake Allsop" dueDate="Apr 8"  />
      <RequestDetailHeader orderNumber={4} title="Accounts Payable Aging Report" status="returned"    createdBy="Jake Allsop" dueDate="Apr 15" />
    </div>
  ),
};

// ─── High priority ────────────────────────────────────────────────────────────
export const HighPriority: Story = {
  args: {
    orderNumber: 5,
    title: 'Board Resolutions — Q1',
    status: 'outstanding',
    priority: 'high',
    createdBy: 'Jake Allsop',
    dueDate: 'Thu, Apr 16',
  },
};

// ─── No description ───────────────────────────────────────────────────────────
export const NoDescription: Story = {
  args: {
    orderNumber: 6,
    title: 'Payroll Register — Q1',
    status: 'accepted',
    createdBy: 'Jake Allsop',
    dueDate: 'Apr 10',
  },
};

// ─── Long title truncates ────────────────────────────────────────────────────
export const LongTitle: Story = {
  args: {
    orderNumber: 12,
    title: 'Comprehensive Revenue Recognition and Deferred Income Schedule for All Product Lines and Service Agreements',
    status: 'outstanding',
    priority: 'high',
    createdBy: 'Jake Allsop',
    dueDate: 'Apr 30',
  },
};

// ─── Matrix — 1:1 mirror of Figma RequestDetailHeader page (76:15) ───────────
// ComponentSet `RequestDetailHeader` (id 415:19), single variant State=default.
// Variant at (8,8), 800×117. Content per Figma defaults:
//   status=outstanding, #3 "CFO Initial Inquiries", priority=high (purple Badge),
//   description (Body SM), createdBy "Jake Allsop", dueDate pink Badge "Thu, Apr 16".
const RDH_CELLS: MatrixCellSpec[] = [
  {
    variant: 'State=default',
    x: 0,
    y: 0,
    w: 800,
    h: 117,
    expect: {
      // No <button>s in this component (Badges are <span>s). Title is an <h2>.
      headings: ['CFO Initial Inquiries'],
    },
  },
];

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:15',
      cells: RDH_CELLS,
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 117 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 800 }}>
        <RequestDetailHeader
          orderNumber={3}
          title="CFO Initial Inquiries"
          description="Details of other accruals, identifying any reserves and any amounts to be paid out within 8.5 months."
          status="outstanding"
          priority="high"
          createdBy="Jake Allsop"
          dueDate="Thu, Apr 16"
        />
      </div>
    </div>
  ),
};
