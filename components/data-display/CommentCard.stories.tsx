import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard, CommentRow } from './CommentCard';
import { MatrixVerify } from '../_decorators/MatrixVerify';

const meta: Meta<typeof CommentCard> = {
  title: 'RLM Layout/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => (
    <div className="bg-canvas p-4 max-w-xl">
      <Story />
    </div>
  )],
};
export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  args: {
    authorName: 'Lorin Taylor',
    authorInitials: 'L',
    authorVariant: 'firm',
    timestamp: '2024-11-04T16:10:00',
    text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.',
    onClick: () => {},
    onReply: () => {},
  },
};

export const Unread: Story = {
  args: {
    authorName: 'Lorin Taylor',
    authorInitials: 'L',
    authorVariant: 'firm',
    timestamp: '2024-11-04T16:10:00',
    fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf p12',
    text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.',
    isUnread: true,
    onClick: () => {},
    onReply: () => {},
    onMenuClick: () => {},
  },
};

export const Thread: Story = {
  args: {
    authorName: 'Herald Black',
    authorInitials: 'H',
    authorVariant: 'client',
    timestamp: '2024-11-04T22:10:00',
    fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf p12',
    text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
    isUnread: true,
    onClick: () => {},
    onMenuClick: () => {},
    onReply: () => {},
    replies: [
      {
        id: '1',
        authorName: 'Lorin Taylor',
        authorInitials: 'L',
        authorVariant: 'firm',
        timestamp: '2024-11-03T21:10:00',
        text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.',
        onClick: () => {},
        onMenuClick: () => {},
      },
      {
        id: '2',
        authorName: 'Eric Brooks',
        authorInitials: 'E',
        authorVariant: 'client',
        timestamp: '2024-11-02T20:10:00',
        text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
        onClick: () => {},
        onMenuClick: () => {},
      },
      {
        id: '3',
        authorName: 'Eric Brooks',
        authorInitials: 'E',
        authorVariant: 'client',
        timestamp: '2024-11-01T17:10:00',
        text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
        onClick: () => {},
        onMenuClick: () => {},
      },
      {
        id: '4',
        authorName: 'Ryan Jeffereies',
        authorInitials: 'R',
        authorVariant: 'firm',
        timestamp: '2024-10-24T16:10:00',
        text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines. The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.',
        onClick: () => {},
        onMenuClick: () => {},
      },
      {
        id: '5',
        authorName: 'Jefferson Carr',
        authorInitials: 'J',
        authorVariant: 'client',
        timestamp: '2024-10-13T14:10:00',
        text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
        onClick: () => {},
        onMenuClick: () => {},
      },
    ],
  },
};

export const ClientSingle: Story = {
  args: {
    authorName: 'Herald Black',
    authorInitials: 'H',
    authorVariant: 'client',
    timestamp: '2024-11-04T22:10:00',
    fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf p12',
    text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
    onReply: () => {},
  },
};

export const ClientUnread: Story = {
  args: {
    authorName: 'Herald Black',
    authorInitials: 'H',
    authorVariant: 'client',
    timestamp: '2024-11-04T22:10:00',
    fileReference: 'Lease_Agreement_VelociTech_Solutions_Inc.pdf p12',
    text: 'What steps are taken to make sure that the building is securely closed and locked after hours?',
    isUnread: true,
    onReply: () => {},
    onMenuClick: () => {},
  },
};

// ─── Matrix — 1:1 mirror of Figma CommentCard page (76:7) ────────────────────
// The Figma page has two ComponentSets stacked vertically:
//   1. CommentCard (1257:278) — 9 variants, 3×3 grid (Type × State), 1354×2447
//   2. CommentRow (1212:107) — 2 variants stacked, 756×195
// Variants positioned at exact (x, y) coords from Figma. Widths fixed; heights
// drive from content (React reflows naturally — heights approximate Figma's).

// Content matches Figma page 76:7 byte-for-byte:
// - Single Firm/Client variants both show "Lorin Taylor" + FIRM_TEXT (Figma uses identical
//   content for both; only authorVariant differs to demonstrate the bg styling).
// - Threaded variant has Herald Black as the parent + 5 specific replies.
const FIRM_AUTHOR = { authorName: 'Lorin Taylor', authorInitials: 'L' };
const CLIENT_AUTHOR_HB = { authorName: 'Herald Black', authorInitials: 'H' };
const TS_FIRM = '2024-11-04T16:10:00';
const TS_HB = '2024-11-04T22:10:00';
const FILE_REF = 'Lease_Agreement_VelociTech_Solutions_Inc.pdf p12';
const FIRM_TEXT = 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.';
const HB_TEXT = 'What steps are taken to make sure that the building is securely closed and locked after hours?';
const RYAN_TEXT_LONG = 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines. The present value of the lease payments';

const THREAD_REPLIES = [
  { id: '1', ...FIRM_AUTHOR, authorVariant: 'firm' as const, timestamp: '2024-11-03T21:10:00', text: FIRM_TEXT, onClick: () => {}, onMenuClick: () => {} },
  { id: '2', authorName: 'Eric Brooks', authorInitials: 'E', authorVariant: 'client' as const, timestamp: '2024-11-02T20:10:00', text: HB_TEXT, onClick: () => {}, onMenuClick: () => {} },
  { id: '3', authorName: 'Eric Brooks', authorInitials: 'E', authorVariant: 'client' as const, timestamp: '2024-11-01T17:10:00', text: HB_TEXT, onClick: () => {}, onMenuClick: () => {} },
  { id: '4', authorName: 'Ryan Jeffereies', authorInitials: 'R', authorVariant: 'firm' as const, timestamp: '2024-10-24T16:10:00', text: RYAN_TEXT_LONG, onClick: () => {}, onMenuClick: () => {} },
  { id: '5', authorName: 'Jefferson Carr', authorInitials: 'J', authorVariant: 'client' as const, timestamp: '2024-10-13T14:10:00', text: HB_TEXT, onClick: () => {}, onMenuClick: () => {} },
];

// Cell renderer — common props per Type (matches Figma's exact content)
function makeCellProps(type: 'Single Firm' | 'Single Client' | 'Threaded', state: 'Default' | 'Reply Open' | 'Reply Active') {
  if (type === 'Threaded') {
    return {
      ...CLIENT_AUTHOR_HB,
      authorVariant: 'client' as const,
      timestamp: TS_HB,
      fileReference: FILE_REF,
      text: HB_TEXT,
      isUnread: true,
      replies: THREAD_REPLIES,
      onReply: () => {},
      onMenuClick: () => {},
      defaultReplyOpen: state === 'Reply Open' || state === 'Reply Active',
      defaultReplyText: state === 'Reply Active' ? 'I think that question is best directed to building services.' : undefined,
    };
  }
  // Both Single Firm and Single Client use identical content; only authorVariant differs
  return {
    ...FIRM_AUTHOR,
    authorVariant: type === 'Single Firm' ? ('firm' as const) : ('client' as const),
    timestamp: TS_FIRM,
    fileReference: FILE_REF,
    text: FIRM_TEXT,
    isUnread: true,
    onReply: () => {},
    onMenuClick: () => {},
    defaultReplyOpen: state === 'Reply Open' || state === 'Reply Active',
    defaultReplyText: state === 'Reply Active' ? 'I think that question is best directed to building services.' : undefined,
  };
}

// Exact Figma (x, y) per variant — width fixed at 390
const CC_LAYOUT: Array<{ type: 'Single Firm' | 'Single Client' | 'Threaded'; state: 'Default' | 'Reply Open' | 'Reply Active'; x: number; y: number }> = [
  { type: 'Single Firm',   state: 'Default',      x: 24,  y: 34 },
  { type: 'Single Client', state: 'Default',      x: 474, y: 34 },
  { type: 'Threaded',      state: 'Default',      x: 924, y: 34 },
  { type: 'Single Firm',   state: 'Reply Open',   x: 24,  y: 786 },
  { type: 'Single Client', state: 'Reply Open',   x: 474, y: 786 },
  { type: 'Threaded',      state: 'Reply Open',   x: 924, y: 786 },
  { type: 'Single Firm',   state: 'Reply Active', x: 24,  y: 1596 },
  { type: 'Single Client', state: 'Reply Active', x: 474, y: 1596 },
  { type: 'Threaded',      state: 'Reply Active', x: 924, y: 1596 },
];

// CommentRow set layout — 2 variants
const CR_LAYOUT = [
  { variant: 'firm' as const,   x: 0, y: 0 },
  { variant: 'client' as const, x: 8, y: 114 },
];

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:7',
      cells: [
        // CommentCard ComponentSet (1257:278) — 9 variants
        // Default state: shows "Reply" button. Reply Open/Active: no Reply button (composer shown).
        // Threaded variants include 5 nested CommentRow replies.
        {
          variant: 'Single Firm / Default', x: 24, y: 34, w: 390, h: 180,
          expect: { buttonLabels: ['Reply'], swatchCount: 0 },
        },
        {
          variant: 'Single Client / Default', x: 474, y: 34, w: 390, h: 180,
          expect: { buttonLabels: ['Reply'], swatchCount: 0 },
        },
        {
          variant: 'Threaded / Default', x: 924, y: 34, w: 390, h: 738,
          expect: { buttonLabels: ['Reply'], swatchCount: 0 },
        },
        {
          variant: 'Single Firm / Reply Open', x: 24, y: 786, w: 390, h: 238,
          // Composer shows Mention + Send buttons (aria-label, no text label visible)
          expect: { buttonLabels: [], swatchCount: 0 },
        },
        {
          variant: 'Single Client / Reply Open', x: 474, y: 786, w: 390, h: 238,
          expect: { buttonLabels: [], swatchCount: 0 },
        },
        {
          variant: 'Threaded / Reply Open', x: 924, y: 786, w: 390, h: 796,
          expect: { buttonLabels: [], swatchCount: 0 },
        },
        {
          variant: 'Single Firm / Reply Active', x: 24, y: 1596, w: 390, h: 259,
          expect: { buttonLabels: [], swatchCount: 0 },
        },
        {
          variant: 'Single Client / Reply Active', x: 474, y: 1596, w: 390, h: 259,
          expect: { buttonLabels: [], swatchCount: 0 },
        },
        {
          variant: 'Threaded / Reply Active', x: 924, y: 1596, w: 390, h: 817,
          expect: { buttonLabels: [], swatchCount: 0 },
        },
        // CommentRow ComponentSet (1212:107) — 2 variants
        { variant: 'CommentRow / Firm',   x: 0, y: 0,   w: 756, h: 61, expect: { swatchCount: 0 } },
        { variant: 'CommentRow / Client', x: 8, y: 114, w: 756, h: 61, expect: { swatchCount: 0 } },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="flex flex-col gap-[137px]">
      {/* Section 1: CommentCard ComponentSet — 1354×2447, 3×3 grid */}
      <div className="relative" style={{ width: 1354, height: 2447 }}>
        {CC_LAYOUT.map(({ type, state, x, y }) => (
          <div
            key={`${type}-${state}`}
            className="absolute"
            style={{ left: x, top: y, width: 390 }}
          >
            <CommentCard {...makeCellProps(type, state)} />
          </div>
        ))}
      </div>

      {/* Section 2: CommentRow ComponentSet — 756×195, 1×2 grid */}
      <div className="relative" style={{ width: 756, height: 195 }}>
        {CR_LAYOUT.map(({ variant, x, y }) => (
          <div
            key={variant}
            className="absolute"
            style={{ left: x, top: y, width: 756 }}
          >
            <CommentRow
              authorName={variant === 'firm' ? FIRM_AUTHOR.authorName : CLIENT_AUTHOR_HB.authorName}
              authorInitials={variant === 'firm' ? FIRM_AUTHOR.authorInitials : CLIENT_AUTHOR_HB.authorInitials}
              authorVariant={variant}
              timestamp={variant === 'firm' ? TS_FIRM : TS_HB}
              text={variant === 'firm' ? FIRM_TEXT.slice(0, 80) : HB_TEXT}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-lg">
      {/* Single — firm */}
      <CommentCard
        authorName="Lorin Taylor"
        authorInitials="L"
        authorVariant="firm"
        timestamp={'2024-11-04T16:10:00'}
        text="The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines."
        onReply={() => {}}
      />
      {/* Single — firm, unread */}
      <CommentCard
        authorName="Lorin Taylor"
        authorInitials="L"
        authorVariant="firm"
        timestamp={'2024-11-04T16:10:00'}
        fileReference="Lease_Agreement_VelociTech_Solutions_Inc.pdf p12"
        text="The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines."
        isUnread
        onReply={() => {}}
        onMenuClick={() => {}}
      />
      {/* Single — client */}
      <CommentCard
        authorName="Herald Black"
        authorInitials="H"
        authorVariant="client"
        timestamp={'2024-11-04T22:10:00'}
        fileReference="Lease_Agreement_VelociTech_Solutions_Inc.pdf p12"
        text="What steps are taken to make sure that the building is securely closed and locked after hours?"
        onReply={() => {}}
      />
      {/* Single — client, unread */}
      <CommentCard
        authorName="Herald Black"
        authorInitials="H"
        authorVariant="client"
        timestamp={'2024-11-04T22:10:00'}
        fileReference="Lease_Agreement_VelociTech_Solutions_Inc.pdf p12"
        text="What steps are taken to make sure that the building is securely closed and locked after hours?"
        isUnread
        onReply={() => {}}
        onMenuClick={() => {}}
      />
      {/* Thread — client, unread */}
      <CommentCard
        authorName="Herald Black"
        authorInitials="H"
        authorVariant="client"
        timestamp={'2024-11-04T22:10:00'}
        fileReference="Lease_Agreement_VelociTech_Solutions_Inc.pdf p12"
        text="What steps are taken to make sure that the building is securely closed and locked after hours?"
        isUnread
        onMenuClick={() => {}}
        onReply={() => {}}
        replies={[
          { id: '1', authorName: 'Lorin Taylor', authorInitials: 'L', authorVariant: 'firm', timestamp: '2024-11-03T21:10:00', text: 'The present value of the lease payments is also below the fair value of the asset, so we classified the lease as an operating lease based on ASC 842 guidelines.', onClick: () => {}, onMenuClick: () => {} },
          { id: '2', authorName: 'Eric Brooks', authorInitials: 'E', authorVariant: 'client', timestamp: '2024-11-02T20:10:00', text: 'What steps are taken to make sure that the building is securely closed and locked after hours?', onClick: () => {}, onMenuClick: () => {} },
          { id: '3', authorName: 'Jefferson Carr', authorInitials: 'J', authorVariant: 'client', timestamp: '2024-10-13T14:10:00', text: 'What steps are taken to make sure that the building is securely closed and locked after hours?', onClick: () => {}, onMenuClick: () => {} },
        ]}
      />
    </div>
  ),
};
