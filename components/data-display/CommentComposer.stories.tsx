import type { Meta, StoryObj } from '@storybook/react';
import { CommentComposer, type MentionUser } from './CommentComposer';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof CommentComposer> = {
  title: 'Overlay/CommentComposer',
  component: CommentComposer,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof CommentComposer>;

// Sample users for mention-picker stories. Mirrors the Figma reference cast
// (Beck Neilson, Barbra Ingles, Bret Assay) so the demo + the design source
// agree on names + emails.
const SAMPLE_USERS: MentionUser[] = [
  { id: 'u-beck',    name: 'Beck Neilson',  email: 'Beck.Neilson@suralink.com',  initials: 'B', variant: 'firm'   },
  { id: 'u-barbra',  name: 'Barbra Ingles', email: 'Barbra.Ingles@suralink.com', initials: 'L', variant: 'client' },
  { id: 'u-bret',    name: 'Bret Assay',    email: 'Bret.Assay@suralink.com',    initials: 'L', variant: 'client' },
];

export const Default: Story = {
  args: {
    placeholder: 'Reply…',
    onSubmit: (text) => alert(`Submitted: ${text}`),
    onCancel: () => alert('Cancelled'),
  },
};

export const AutoFocus: Story = {
  args: {
    placeholder: 'Reply…',
    autoFocus: true,
    onSubmit: (text) => alert(`Submitted: ${text}`),
    onCancel: () => alert('Cancelled'),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Add a comment…',
    onSubmit: (text) => alert(`Submitted: ${text}`),
  },
};

export const Constrained: Story = {
  render: () => (
    <div className="max-w-sm">
      <CommentComposer
        placeholder="Reply…"
        onSubmit={(text) => alert(`Submitted: ${text}`)}
        onCancel={() => alert('Cancelled')}
      />
    </div>
  ),
};

// ─── @-mention picker stories ────────────────────────────────────────────────
// Type `@` (or click the @-toolbar button) to open the picker. Filter by
// typing chars after `@`. Arrow keys + Enter select. Escape dismisses.

export const WithMentions: Story = {
  render: () => (
    <div className="max-w-sm">
      <CommentComposer
        placeholder="Type @ to mention someone…"
        mentionUsers={SAMPLE_USERS}
        onSubmit={(text) => alert(`Submitted: ${text}`)}
      />
    </div>
  ),
};

// Pre-seeded with an inserted mention pill, demonstrating the post-select
// state (matches Figma Section 1 / State 4 at 2814:14983).
export const MentionInserted: Story = {
  render: () => (
    <div className="max-w-sm">
      <CommentComposer
        placeholder="Reply…"
        defaultValue="@[Barbra Ingles](u-barbra)"
        mentionUsers={SAMPLE_USERS}
        onSubmit={(text) => alert(`Submitted: ${text}`)}
      />
    </div>
  ),
};

// ─── Matrix — mirrors Figma CommentComposer ComponentSet (392:34) ───────────
// 5 variants on the `State` axis, exactly matching the canonical ComponentSet:
//   State=Empty            — placeholder visible, send muted
//   State=Has-Text         — textarea pre-filled, send active
//   State=Picker-Open      — `@` typed, @ button selected, picker open w/ users
//   State=Picker-Filtered  — `@B` typed, picker shows all 3 users (all start w/ B)
//   State=Mention-Inserted — pill rendered inline, send active
//
// Cells are absolutely positioned at the SAME (x, y) coords as Figma's variant
// grid inside set 392:34 (after the 40px set padding is subtracted) so the
// Matrix pixel-pins to the canonical's layout.
//
// Cells 2 + 3 (picker states) include `autoFocus` + seeded `defaultValue`
// so the live picker renders on mount. Cell 5 uses the markdown-style seed
// (`@[Name](id)` → pill HTML) to show the post-insertion state without
// requiring runtime input.

const COMPOSER_CELLS: MatrixCellSpec[] = [
  { variant: 'State=Empty',             x: 0,   y: 0,   w: 418, h: 82,  expect: { headings: [] } },
  { variant: 'State=Has-Text',          x: 512, y: 0,   w: 418, h: 82,  expect: { headings: [] } },
  { variant: 'State=Picker-Open',       x: 0,   y: 146, w: 418, h: 246, expect: { headings: [] } },
  { variant: 'State=Picker-Filtered',   x: 512, y: 146, w: 418, h: 246, expect: { headings: [] } },
  { variant: 'State=Mention-Inserted',  x: 0,   y: 456, w: 418, h: 82,  expect: { headings: [] } },
];

const renderCell = (variant: string) => {
  switch (variant) {
    case 'State=Empty':
      return <CommentComposer placeholder="Reply…" />;
    case 'State=Has-Text':
      return (
        <CommentComposer
          placeholder="Reply…"
          defaultValue="This is my response to the discussion."
        />
      );
    case 'State=Picker-Open':
      // Seed with `@` so detection opens the picker on focus. autoFocus
      // triggers detection on mount.
      return (
        <CommentComposer
          autoFocus
          defaultValue="@"
          placeholder="Type @ to mention someone…"
          mentionUsers={SAMPLE_USERS}
        />
      );
    case 'State=Picker-Filtered':
      return (
        <CommentComposer
          autoFocus
          defaultValue="@B"
          placeholder="Type @ to mention someone…"
          mentionUsers={SAMPLE_USERS}
        />
      );
    case 'State=Mention-Inserted':
      return (
        <CommentComposer
          defaultValue="@[Barbra Ingles](u-barbra)"
          placeholder="Reply…"
          mentionUsers={SAMPLE_USERS}
        />
      );
    default:
      return <CommentComposer placeholder="Reply…" />;
  }
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:8', cells: COMPOSER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 930, height: 538 }}>
      {COMPOSER_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderCell(c.variant)}
        </div>
      ))}
    </div>
  ),
};
