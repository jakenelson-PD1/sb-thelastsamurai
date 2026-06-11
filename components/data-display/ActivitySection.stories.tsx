import type { Meta, StoryObj } from '@storybook/react';
import { ActivitySection } from './ActivitySection';
import type { CommentThread, HistoryItem } from './ActivitySection';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof ActivitySection> = {
  title: 'RLM Layout/ActivitySection',
  component: ActivitySection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="h-[600px] overflow-y-auto bg-canvas">  // token-lint-skip: showcase fixed dims for screenshot stability
        {/* Simulate the 48px action bar so the Activity accordion's sticky
            top-12 header pins below it instead of floating over the tab
            content. Mirrors the ClientFilesSection story decorator. */}
        <div className="h-12 sticky top-0 z-20 bg-canvas border-b border-line flex items-center px-6">
          <span className="text-label-sm text-muted">Action bar</span>
        </div>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ActivitySection>;

const mockComments: CommentThread[] = [
  {
    id: 'thread-1',
    items: [
      {
        id: 'c1',
        authorName: 'Jake Allsop',
        authorInitials: 'JA',
        authorVariant: 'firm',
        timestamp: '2024-11-04T16:10:00',
        text: 'Can you provide the signed copy of the engagement letter? We need it before we can proceed.',
        fileReference: 'Engagement_Letter.pdf',
        filePage: 'p3',
        isUnread: true,
      },
      {
        id: 'c2',
        authorName: 'Gerardo Sumano',
        authorInitials: 'GS',
        authorVariant: 'client',
        timestamp: '2024-11-04T16:45:00',
        text: "I've uploaded it. Let me know if you need anything else.",
        fileReference: 'Engagement_Letter_Signed.pdf',
        filePage: 'p1',
      },
    ],
  },
  {
    id: 'thread-2',
    items: [
      {
        id: 'c3',
        authorName: 'Gerardo Sumano',
        authorInitials: 'GS',
        authorVariant: 'client',
        timestamp: '2024-11-04T17:30:00',
        text: 'The Q1 payroll register has been uploaded. Please review at your earliest convenience.',
        fileReference: 'Q1_Payroll_Register.xlsx',
        filePage: 'p1',
        isUnread: true,
      },
    ],
  },
  {
    id: 'thread-3',
    items: [
      {
        id: 'c4',
        authorName: 'Amana Johanson',
        authorInitials: 'AJ',
        authorVariant: 'firm',
        timestamp: '2024-11-03T09:15:00',
        text: 'Just a reminder that the deadline for submitting documents is end of this week.',
        fileReference: 'Audit_Checklist.pdf',
        filePage: 'p2',
      },
      {
        id: 'c5',
        authorName: 'Gerardo Sumano',
        authorInitials: 'GS',
        authorVariant: 'client',
        timestamp: '2024-11-03T10:05:00',
        text: 'Understood, we will have everything submitted by Thursday.',
      },
    ],
  },
];

const mockHistory: HistoryItem[] = [
  { id: 'h1', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'changed status to Accepted',    timestamp: '2024-11-04T16:10:00' },
  { id: 'h2', actorName: 'Jenny Staggs',   actorInitials: 'JS', action: 'uploaded Purchase_Order.pdf',   timestamp: '2024-11-04T15:05:00' },
  { id: 'h3', actorName: 'Gerardo Sumano', actorInitials: 'GS', action: 'added a comment',               timestamp: '2024-11-03T11:20:00' },
  { id: 'h4', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'assigned to Amana Johanson',    timestamp: '2024-11-02T09:00:00' },
  { id: 'h5', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'created this request',          timestamp: '2024-11-01T08:30:00' },
];

// ─── Default — comments tab ───────────────────────────────────────────────────
export const Default: Story = {
  args: {
    comments: mockComments,
    commentCount: 5,
    historyItems: mockHistory,
    onComment: (text) => alert(`Comment submitted: ${text}`),
    onReply: (threadId, text) => alert(`Reply on ${threadId}: ${text}`),
    // Wire onCommentClick + onCommentMenuClick so the CommentRow hover state
    // (cursor + surface/lavender hover bg) and the hover-revealed menu button
    // are exercised — they're gated by these callbacks being present.
    onCommentClick: (id) => alert(`Open comment ${id}`),
    onCommentMenuClick: (id) => alert(`Menu for comment ${id}`),
  },
};

// ─── Empty state ──────────────────────────────────────────────────────────────
export const Empty: Story = {
  args: {
    comments: [],
    commentCount: 0,
    historyItems: [],
  },
};

// ─── History only ─────────────────────────────────────────────────────────────
export const HistoryOnly: Story = {
  args: {
    comments: [],
    commentCount: 0,
    historyItems: mockHistory,
  },
};

// ─── History tab active ────────────────────────────────────────────────────────
// Note: ActivitySection manages its active tab via internal state (always starts
// on Comments). This story surfaces the history tab content by rendering the
// component with several history entries so reviewers can click to the History
// tab and see the full list.
export const HistoryTabActive: Story = {
  args: {
    comments: [],
    commentCount: 0,
    historyItems: [
      { id: 'h1', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'changed status to Accepted',           timestamp: '2024-11-04T17:30:00' },
      { id: 'h2', actorName: 'Amana Johanson', actorInitials: 'AJ', action: 'left a comment',                       timestamp: '2024-11-04T16:00:00' },
      { id: 'h3', actorName: 'Jenny Staggs',   actorInitials: 'JS', action: 'uploaded Q1_Payroll_Register.pdf',      timestamp: '2024-11-04T14:00:00' },
      { id: 'h4', actorName: 'Gerardo Sumano', actorInitials: 'GS', action: 'submitted the request',                timestamp: '2024-11-03T13:15:00' },
      { id: 'h5', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'assigned to Amana Johanson',           timestamp: '2024-11-02T10:45:00' },
      { id: 'h6', actorName: 'Jake Allsop',    actorInitials: 'JA', action: 'changed due date to Apr 30',           timestamp: '2024-11-01T09:30:00' },
      { id: 'h7', actorName: 'Gerardo Sumano', actorInitials: 'GS', action: 'created this request',                 timestamp: '2024-10-30T08:00:00' },
    ],
  },
};

// ─── Matrix — mirrors Figma ActivitySection frame (76:4) ─────────────────────
// Frame 1292:2 (620 wide): full-bleed "Activity" header → Tabs (Comments /
// Request History) + Divider → CommentComposer → gap-separated CommentCards.
// Comment content is illustrative — the structural verification is the WIDTH
// (620, exact) plus the canonical composition (header, tabs, composer, cards).
// Height tracks the comment content, so the cell height is set to the source's
// rendered height rather than constrained to Figma's mock-data height.
const AS_CELLS: MatrixCellSpec[] = [
  {
    variant: 'ActivitySection',
    x: 0,
    y: 0,
    w: 620,
    // Width is the structural check (matches the Figma frame exactly). Height
    // tracks the comment content (illustrative), so it's set to this story's
    // rendered height rather than Figma's mock-data height. (Includes the
    // file-reference line now threaded through replies, matching the canonical
    // CommentCard's file-reference treatment — filename + page on every
    // document-anchored comment, with the CommentRow restructured to the
    // canonical atom's spacing (avatar gap-3, content gap-2, name/fileref
    // tightly stacked).)
    h: 703,
    expect: {
      // Tabs are buttons; composer send + per-thread Reply buttons too. The
      // "Activity" header is a <span>, not a button. Headings: none (h1-h4).
      headings: [],
    },
  },
];

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:4', cells: AS_CELLS },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 620 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 620 }}>
        <ActivitySection
          comments={mockComments}
          commentCount={5}
          historyItems={mockHistory}
        />
      </div>
    </div>
  ),
};
