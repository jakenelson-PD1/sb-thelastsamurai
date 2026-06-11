import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RequestRow, type MetaItem } from './RequestRow';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof RequestRow> = {
  title: 'RLM Layout/RequestRow',
  component: RequestRow,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof RequestRow>;

// ─── Default ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <RequestRow
        orderNumber={1}
        title="CFO Initial Inquiries"
        description="Procedures and process documentation regarding IT general controls"
        status="none"
        selected={selected}
        onClick={() => setSelected((v) => !v)}
        meta={[
          { type: 'due-date', date: '04/18/2025' },
          { type: 'comments', count: 0 },
          { type: 'documents', count: 1 },
        ]}
      />
    );
  },
};

// ─── Checked (bulk-selection checkbox toggled) ───────────────────────────────
// The checkbox is independent from the row's `selected` (expanded) state.
// Clicking the row toggles `selected`; clicking the checkbox toggles `checked`.

export const Checked: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    const [checked, setChecked] = useState(true);
    return (
      <RequestRow
        orderNumber={2}
        title="Inventory Reconciliation"
        description="Roll-forward and tie-out of inventory subledger to GL"
        status="outstanding"
        selected={selected}
        checked={checked}
        onClick={() => setSelected((v) => !v)}
        onCheckedChange={setChecked}
        meta={[
          { type: 'due-date', date: '05/02/2025' },
          { type: 'comments', count: 1 },
        ]}
      />
    );
  },
};

// ─── Selected (description visible) ──────────────────────────────────────────

export const Selected: Story = {
  render: () => {
    const [selected, setSelected] = useState(true);
    return (
      <RequestRow
        orderNumber={3}
        title="CFO Initial Inquiries"
        description="Procedures and process documentation regarding IT general controls"
        status="fulfilled"
        selected={selected}
        onClick={() => setSelected((v) => !v)}
        attachmentLabel="Firm provided 2 files"
        meta={[
          { type: 'assignee', initials: 'AJ', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' },
          { type: 'due-date', date: '04/18/2025' },
          { type: 'comments', count: 2 },
          { type: 'documents', count: 3 },
          { type: 'flag' },
        ]}
      />
    );
  },
};

// ─── All Statuses ─────────────────────────────────────────────────────────────

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-line">
      {(['fulfilled', 'returned', 'accepted', 'outstanding', 'none'] as const).map((status, i) => (
        <RequestRow
          key={status}
          orderNumber={58 + i}
          title={`Status: ${status}`}
          status={status}
        />
      ))}
    </div>
  ),
};

// ─── With All Meta ────────────────────────────────────────────────────────────

export const WithAllMeta: Story = {
  render: () => (
    <RequestRow
      orderNumber={7}
      title="Audit Committee Meeting Minutes"
      status="outstanding"
      attachmentLabel="Firm provided 3 files"
      meta={[
        { type: 'e-signature' },
        { type: 'assignee',     initials: 'A', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)', onClick: () => alert('assignee') },
        { type: 'due-date',     date: '04/18/2025', onClick: () => alert('due-date') },
        { type: 'comments',     count: 2, dot: 'unread',     onClick: () => alert('comments') },
        { type: 'documents',    count: 3, dot: 'attention',  onClick: () => alert('documents') },
        { type: 'flag',         onClick: () => alert('flag') },
      ]}
    />
  ),
};

// ─── With Attachment ──────────────────────────────────────────────────────────

export const WithAttachment: Story = {
  render: () => (
    <RequestRow
      orderNumber={3}
      title="CFO Initial Inquiries"
      status="fulfilled"
      attachmentLabel="Firm provided 8 files"
      meta={[
        { type: 'due-date', date: '04/18/2025' },
        { type: 'comments', count: 2 },
        { type: 'documents', count: 3 },
        { type: 'flag' },
      ]}
    />
  ),
};

// ─── No Meta ──────────────────────────────────────────────────────────────────

export const NoMeta: Story = {
  render: () => (
    <RequestRow
      orderNumber={12}
      title="Board of Directors Resolutions"
      status="accepted"
    />
  ),
};

// ─── Column Alignment ─────────────────────────────────────────────────────────
// Demonstrates the fixed-column grid: each meta type has a dedicated slot, so
// columns align vertically across rows even when some attributes are missing.
// Columns left → right: E-Sig | Assignee | Due Date | Comments | Documents | Flag

export const ColumnAlignment: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-line">
      <RequestRow
        orderNumber={1}
        title="All six attributes"
        status="none"
        meta={[
          { type: 'e-signature' },
          { type: 'assignee', initials: 'G', color: 'var(--color-status-purple-surface)', textColor: 'var(--color-status-purple-fg)' },
          { type: 'due-date', date: '04/18/2025' },
          { type: 'comments', count: 4 },
          { type: 'documents', count: 8 },
          { type: 'flag' },
        ]}
      />
      <RequestRow
        orderNumber={2}
        title="Assignee + due date only"
        status="fulfilled"
        meta={[
          { type: 'assignee', initials: 'M', color: 'var(--color-status-purple-surface)', textColor: 'var(--color-status-purple-fg)' },
          { type: 'due-date', date: '04/20/2025' },
        ]}
      />
      <RequestRow
        orderNumber={3}
        title="E-Sig + comments + documents"
        status="returned"
        meta={[
          { type: 'e-signature' },
          { type: 'comments', count: 12, dot: 'unread' },
          { type: 'documents', count: 3 },
        ]}
      />
      <RequestRow
        orderNumber={4}
        title="Flag only"
        status="outstanding"
        meta={[
          { type: 'flag' },
        ]}
      />
      <RequestRow
        orderNumber={5}
        title="No meta — empty columns reserve their space"
        status="accepted"
        meta={[]}
      />
    </div>
  ),
};

// ─── Matrix — 1:1 mirror of Figma RequestRow page (76:16) ────────────────────
// ComponentSet `RequestRow` (id 1393:674), 30 variants = State × Status × Meta.
//   States (3): Default / Hover / Selected
//   Statuses (5): Outstanding / Fulfilled / Returned / Accepted / None
// The Meta variant axis was collapsed — each meta attribute (E-Signature,
// Assignee, Due Date, Comments, CommentsDot, Documents, DocumentsDot, Flag,
// AssigneeLocked, Attachment, Description) is now an independent BOOLEAN
// property on the canonical RequestRow, mirroring the source `meta` array.
// Layout: 5 status columns at x=[0, 1027, 2054, 3081, 4108], each 1000 wide.
// 3 rows at y=[0, 64, 128] (Default, Hover h=40; Selected h=50).
// Content per Figma defaults: order=7, title="CFO Initial Inquiries",
// description="Procedures and process documentation regarding IT general
// controls", attachment="Firm provided 3 files", due-date="04/18/2025",
// comments=2, docs=3. The matrix shows the full meta set (all attributes
// visible) to exercise every BOOLEAN slot at once.
const RR_STATUS_ORDER = ['outstanding', 'fulfilled', 'returned', 'accepted', 'none'] as const;
const RR_X = [0, 1027, 2054, 3081, 4108];
const RR_ROW_LAYOUT: { state: 'Default' | 'Hover' | 'Selected'; y: number; h: number }[] = [
  { state: 'Default',  y: 0,   h: 40 },
  { state: 'Hover',    y: 64,  h: 40 },
  { state: 'Selected', y: 128, h: 50 },
];

// Full meta set — every attribute visible. Each one is now driven by its own
// BOOLEAN property on the canonical (HasESignature, HasAssignee, HasDueDate,
// HasComments + HasCommentsDot, HasDocuments + HasDocumentsDot, HasFlag), so
// the source `meta` array and the Figma instance properties are 1:1 toggleable.
function makeMeta(): MetaItem[] {
  return [
    { type: 'e-signature' },
    { type: 'assignee', initials: 'A', color: 'var(--color-status-orange-surface)', textColor: 'var(--color-status-orange-fg)' },
    { type: 'due-date', date: '04/18/2025' },
    { type: 'comments', count: 2, dot: 'unread' },
    { type: 'documents', count: 3, dot: 'attention' },
    { type: 'flag' },
  ];
}

const RR_CELLS: MatrixCellSpec[] = RR_ROW_LAYOUT.flatMap((row) =>
  RR_STATUS_ORDER.map((status, i) => ({
    variant: `State=${row.state}, Status=${status}`,
    x: RR_X[i],
    y: row.y,
    w: 1000,
    h: row.h,
    expect: {
      // Buttons left in the row: attachment link + Comments + Documents counts.
      // E-Signature is a bare <Badge>, Assignee a bare <Avatar>, Due Date a
      // <Timestamp> — none are <button>s. Flag is iconOnly (no text label).
      buttonLabels: ['Firm provided 3 files', '2', '3'],
    },
  })),
);

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:16',
      cells: RR_CELLS,
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 5116, height: 188 }}>
      {RR_ROW_LAYOUT.map((row) =>
        RR_STATUS_ORDER.map((status, i) => (
          <div
            key={`${row.state}-${status}`}
            className="absolute"
            data-matrix-cell
            style={{ left: RR_X[i], top: row.y, width: 1000 }}
          >
            <RequestRow
              orderNumber={7}
              title="CFO Initial Inquiries"
              description="Procedures and process documentation regarding IT general controls"
              status={status}
              attachmentLabel="Firm provided 3 files"
              selected={row.state === 'Selected'}
              forceHover={row.state === 'Hover'}
              meta={makeMeta()}
            />
          </div>
        )),
      )}
    </div>
  ),
};
