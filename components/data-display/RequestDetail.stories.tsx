import type { Meta, StoryObj } from '@storybook/react';
import { RequestDetail } from './RequestDetail';
import type { ClientFile, } from './ClientFilesSection';
import type { CommentThread, HistoryItem } from './ActivitySection';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof RequestDetail> = {
  title: 'RLM Layout/Request Detail',
  component: RequestDetail,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  // Fixed viewport height so overflow-y-auto creates a real scroll container
  // and sticky headers have something to stick against
  decorators: [(Story) => (
    <div style={{ height: '100vh' }}>
      <Story />
    </div>
  )],
};
export default meta;
type Story = StoryObj<typeof RequestDetail>;

const mockFiles: ClientFile[] = [
  { id: '1', name: 'Purchase_Order.pdf', sizeKb: 158, uploadedBy: 'Gerardo Sumano', uploadedAt: '01/31/25', type: 'pdf', dot: 'unread' },
  { id: '2', name: 'Financial_Report_Q4.pdf', sizeKb: 2048, uploadedBy: 'Gerardo Sumano', uploadedAt: '01/31/25', type: 'pdf' },
  { id: '3', name: 'Lease_Agreement.pdf', sizeKb: 512, uploadedBy: 'Jenny Staggs', uploadedAt: '12/15/24', type: 'pdf', dot: 'attention' },
  { id: '4', name: 'Expense_Report.xlsx', sizeKb: 88, uploadedBy: 'Guy Hawkins', uploadedAt: '12/31/24', type: 'excel' },
];

const mockComments: CommentThread[] = [
  {
    id: 'thread-1',
    items: [
      {
        id: 'c1',
        authorName: 'Herald Black',
        authorInitials: 'HB',
        authorVariant: 'client',
        timestamp: '2024-11-04T22:10:00',
        fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf',
        filePage: 'p12',
        text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
        isUnread: true,
      },
      {
        id: 'c2',
        authorName: 'Lorin Taylor',
        authorInitials: 'LT',
        authorVariant: 'firm',
        timestamp: '2024-11-03T21:10:00',
        text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.',
      },
      {
        id: 'c3',
        authorName: 'Eric Brooks',
        authorInitials: 'EB',
        authorVariant: 'client',
        timestamp: '2024-11-02T20:10:00',
        text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
      },
      {
        id: 'c4',
        authorName: 'Ryan Jeffereies',
        authorInitials: 'RJ',
        authorVariant: 'firm',
        timestamp: '2024-10-24T16:10:00',
        text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.',
      },
      {
        id: 'c5',
        authorName: 'Jefferson Carr',
        authorInitials: 'JC',
        authorVariant: 'client',
        timestamp: '2024-10-13T14:10:00',
        text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
      },
    ],
  },
  {
    id: 'thread-2',
    items: [
      {
        id: 'c6',
        authorName: 'Jenny Staggs',
        authorInitials: 'JS',
        authorVariant: 'firm',
        timestamp: '2024-11-05T09:55:00',
        fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf',
        filePage: 'p62',
        text: 'We ensure compliance by requiring access cards for after-hours entry to the facility.',
        isUnread: true,
      },
      {
        id: 'c7',
        authorName: 'Amillia Fenton',
        authorInitials: 'AF',
        authorVariant: 'client',
        timestamp: '2024-11-05T09:59:00',
        text: 'We ensure compliance by requiring access cards for after-hours entry.',
      },
    ],
  },
];

const mockHistory: HistoryItem[] = [
  { id: 'h1', actorName: 'Jake Allsop', actorInitials: 'JA', action: 'changed status to Accepted', timestamp: '2024-11-05T08:00:00' },
  { id: 'h2', actorName: 'Jenny Staggs', actorInitials: 'JS', action: 'uploaded Purchase_Order.pdf', timestamp: '2024-11-05T07:00:00' },
  { id: 'h3', actorName: 'Gerardo Sumano', actorInitials: 'GS', action: 'added comment', timestamp: '2024-11-04T10:00:00' },
  { id: 'h4', actorName: 'Jake Allsop', actorInitials: 'JA', action: 'assigned to Amillia Fenton', timestamp: '2024-11-03T10:00:00' },
  { id: 'h5', actorName: 'Jake Allsop', actorInitials: 'JA', action: 'created this request', timestamp: '2024-11-02T10:00:00' },
];

export const Default: Story = {
  args: {
    orderNumber: 3,
    title: 'CFO Initial Inquiries',
    description: 'Details of other accruals, identifying any reserves and any amounts to be paid out within 8.5 months.',
    status: 'outstanding',
    createdBy: 'Jake Allsop',
    dueDate: 'Thu, Apr 16',
    priority: 'high',
    clientAssignees: [
      { initials: 'GS', type: 'client', name: 'Gerardo Sumano',  email: 'gerardosumano+clientuser@...' },
      { initials: 'MK', type: 'client', name: 'Maya Kim',        email: 'maya.kim+clientuser@...' },
    ],
    firmAssignees: [
      { initials: 'AJ', type: 'firm', name: 'Amana Johanson', email: 'amanda.johanson@suralink.com' },
    ],
    files: mockFiles,
    comments: mockComments,
    commentCount: 7,
    historyItems: mockHistory,
    onComment: (text) => alert(`Comment: ${text}`),
    onReply: (threadId, text) => alert(`Reply on ${threadId}: ${text}`),
    onCommentClick: (id) => alert(`Clicked comment ${id}`),
    onCommentMenuClick: (id) => alert(`Menu for comment ${id}`),
  },
};

export const Accepted: Story = {
  args: {
    ...Default.args,
    orderNumber: 7,
    title: 'Revenue Recognition Schedule',
    description: 'Provide a detailed breakdown of deferred revenue recognition for the current fiscal year.',
    status: 'accepted',
    priority: null,
    files: mockFiles.slice(0, 2),
    comments: mockComments.slice(0, 1),
    commentCount: 1,
  },
};

export const Fulfilled: Story = {
  args: {
    ...Default.args,
    orderNumber: 12,
    title: 'Accounts Payable Aging Report',
    description: undefined,
    status: 'fulfilled',
    priority: null,
    firmAssignees: [{ initials: 'JA', type: 'firm', name: 'Jake Allsop', email: 'jake@suralink.com' }],
    files: [],
    comments: [],
    commentCount: 0,
    historyItems: mockHistory.slice(0, 2),
  },
};

export const NoFiles: Story = {
  args: {
    ...Default.args,
    files: [],
    comments: [],
    commentCount: 0,
  },
};

// ─── Matrix — mirrors Figma "Request Detail" page (76:12) ────────────────────
// The page contains a single top-level frame `RequestDetail` (1345:2) at 816
// wide, composing the ActionBar → Header → Assignments → FileDropZone →
// ClientFilesSection → ActivitySection stack. Each sub-section is verified
// individually by its own Matrix story; this Matrix locks in the assembled
// composition at the canonical 816 width.
const RD_CELLS: MatrixCellSpec[] = [
  {
    variant: 'RequestDetail',
    x: 0,
    y: 0,
    w: 816,
    // Height tracks the rendered composite; the assembled Figma frame is
    // 1789 but the source content varies (comment count, accordion open
    // state), so it's measured from this story's render.
    h: 1566,
    expect: {
      // RequestDetailHeader renders the request title as an <h2>. Section
      // labels below (Assignments / Client attached files / Activity) are
      // span-based accordion headers, not headings.
      headings: ['CFO Initial Inquiries'],
    },
  },
];

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:12', cells: RD_CELLS },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 816 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 816 }}>
        <RequestDetail
          orderNumber={3}
          title="CFO Initial Inquiries"
          description="Details of other accruals, identifying any reserves and any amounts to be paid out within 8.5 months."
          status="outstanding"
          createdBy="Jake Allsop"
          dueDate="Thu, Apr 16"
          priority="high"
          clientAssignees={[
            { initials: 'GS', type: 'client', name: 'Gerardo Sumano', email: 'gerardosumano+clientuser@...' },
            { initials: 'MK', type: 'client', name: 'Maya Kim',       email: 'maya.kim+clientuser@...' },
          ]}
          firmAssignees={[
            { initials: 'AJ', type: 'firm', name: 'Amana Johanson', email: 'amanda.johanson@suralink.com' },
          ]}
          files={mockFiles}
          comments={mockComments}
          commentCount={7}
          historyItems={mockHistory}
        />
      </div>
    </div>
  ),
};
