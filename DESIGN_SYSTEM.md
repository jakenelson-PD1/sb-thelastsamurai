# Suralink Design System (LSDS) — Component Catalog

> Auto-generated from Storybook source by `scripts/gen-design-system.mjs`.
> Regenerate: `npm run gen-catalog`.

## Sources

- **Storybook (live)**: https://jake.nelson2.gitlab.io/sb-thelastsamurai
- **Figma file**: https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS
- **Source repo**: https://gitlab.com/jake.nelson2/sb-thelastsamurai

## How to use this file (for Claude.ai Projects)

This catalog is the source of truth for *which components exist*, *what props they take*, and *what variants look like*. Use it to prototype UIs by composing real LSDS components — do not invent new components or rewrite primitives.

When generating UI code:
1. Look up the component below by name.
2. Import it from the path shown in **Import**.
3. Use only the props listed in **Props** and the variants demonstrated in **Stories**.
4. If a variant you need is not listed, link the Figma frame so the user can add it instead of hand-rolling.

For exact visual reference, click the **Storybook** link to see the rendered component in isolation, or the **Figma** link to see the canonical design with full variant matrix.

## Token system

Style everything with the semantic Tailwind tokens, never raw colors/sizes:

- Colors: `bg-surface-canvas`, `bg-surface-elevated`, `bg-action-primary-500`, `text-primary-900`, `text-secondary-700`, `text-tertiary-500`, `text-on-accent`, `border-line`, `bg-accent-{green,yellow,red,orange,purple,blue}-{surface,fg,border}`
- Spacing: `p-1` (4px) … `p-12` (48px) only, no `p-[Npx]`
- Radius: `rounded-control` (button/input), `rounded-card`, `rounded-modal`, `rounded-pill`, `rounded-full`
- Typography: `text-display-lg`, `text-display`, `text-heading-{lg,md,sm}`, `text-body-{md,sm}`, `text-label-{md,sm}`, `text-caption`
- Effects: `shadow-card`, `shadow-modal`, `shadow-toast`

A pre-commit token lint (`scripts/check-tokens.mjs`) blocks raw values automatically.

## Sections

- [RLM Layout](#rlm-layout) — 16 components
- [Layout](#layout) — 14 components
- [Navigation](#navigation) — 7 components
- [Overlay](#overlay) — 10 components
- [Primitives](#primitives) — 26 components
- [Foundation](#foundation) — 7 components

---


# RLM Layout

## ActivitySection

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-activitysection--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=2479-1314 |
| Source | `components/data-display/ActivitySection.tsx` |
| Story file | `components/data-display/ActivitySection.stories.tsx` |

### Import

```tsx
import { ActivitySection } from './components/data-display/ActivitySection';
```

### Props

```ts
export interface ActivitySectionProps {
  comments?: CommentThread[];
  commentCount?: number;
  historyItems?: HistoryItem[];
  onComment?: (text: string) => void;
  onReply?: (threadId: string, text: string) => void;
  onCommentClick?: (commentId: string) => void;
  onCommentMenuClick?: (commentId: string) => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-activitysection--default)

```tsx
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
};;
```

#### `Empty`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-activitysection--empty)

```tsx
export const Empty: Story = {
  args: {
    comments: [],
    commentCount: 0,
    historyItems: [],
  },
};
```

#### `HistoryOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-activitysection--historyonly)

```tsx
export const HistoryOnly: Story = {
  args: {
    comments: [],
    commentCount: 0,
    historyItems: mockHistory,
  },
};
```

#### `HistoryTabActive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-activitysection--historytabactive)

```tsx
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
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-activitysection--matrix)

```tsx
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
```

---

## ClientFilesSection

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-clientfilessection--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=423-136 |
| Source | `components/data-display/ClientFilesSection.tsx` |
| Story file | `components/data-display/ClientFilesSection.stories.tsx` |

### Import

```tsx
import { ClientFilesSection } from './components/data-display/ClientFilesSection';
```

### Props

```ts
export interface ClientFilesSectionProps {
  files?: ClientFile[];
  onDownload?: (ids: string[]) => void;
  onDelete?: (ids: string[]) => void;
  onImport?: () => void;
  onPreview?: (id: string) => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-clientfilessection--default)

```tsx
export const Default: Story = {
  args: {
    files: mockFiles,
    onDownload: (ids) => alert(`Download: ${ids.join(', ')}`),
    onDelete:   (ids) => alert(`Delete: ${ids.join(', ')}`),
    onImport:   () => alert('Import'),
    onPreview:  (id) => alert(`Preview: ${id}`),
  },
};
```

#### `Empty`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-clientfilessection--empty)

```tsx
export const Empty: Story = {
  args: { files: [] },
};
```

#### `WithDots`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-clientfilessection--withdots)

```tsx
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
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-clientfilessection--matrix)

```tsx
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
```

---

## CommentCard

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-commentcard--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1257-278 |
| Source | `components/data-display/CommentCard.tsx` |
| Story file | `components/data-display/CommentCard.stories.tsx` |

### Import

```tsx
import { CommentCard } from './components/data-display/CommentCard';
```

### Props

```ts
export interface CommentCardProps {
  authorName: string;
  authorInitials: string;
  authorColor?: string;
  authorVariant?: 'client' | 'firm';
  timestamp: Date | string;
  fileReference?: string;
  filePage?: string;
  text: string;
  isUnread?: boolean;
  replies?: CommentReply[];
  onClick?: () => void;
  onReply?: (text: string) => void;
  onMenuClick?: () => void;
  /** Start with the reply composer open. Used for matrix/showcase rendering. */
  defaultReplyOpen?: boolean;
  /** Initial text inside the reply composer (only relevant when defaultReplyOpen). */
  defaultReplyText?: string;
  className?: string;
}
```

```ts
export interface CommentRowProps {
  authorName: string;
  authorInitials: string;
  authorColor?: string;
  authorVariant?: 'client' | 'firm';
  timestamp: Date | string;
  fileReference?: string;
  filePage?: string;
  text: string;
  isUnread?: boolean;
  onClick?: () => void;
  onMenuClick?: () => void;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-commentcard--default)

```tsx
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
```

#### `Unread`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-commentcard--unread)

```tsx
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
```

#### `Thread`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-commentcard--thread)

```tsx
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
```

#### `ClientSingle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-commentcard--clientsingle)

```tsx
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
```

#### `ClientUnread`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-commentcard--clientunread)

```tsx
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
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-commentcard--matrix)

```tsx
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
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-commentcard--allstates)

```tsx
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
```

---

## EngagementHeader

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-engagementheader--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=399-52 |
| Source | `components/data-display/EngagementHeader.tsx` |
| Story file | `components/data-display/EngagementHeader.stories.tsx` |

### Import

```tsx
import { EngagementHeader } from './components/data-display/EngagementHeader';
```

### Props

```ts
export interface EngagementHeaderProps {
  firmName: string;
  /** When provided, the firm segment in the breadcrumb is clickable. */
  firmHref?: string;
  clientName: string;
  /** When provided, the client segment in the breadcrumb is clickable. */
  clientHref?: string;
  /** Current page — rendered as the selected (last) breadcrumb segment. */
  engagementId: string;
  engagementName: string;
  activityCount?: number;
  onMenuClick?: () => void;
  onTeamClick?: () => void;
  onNotificationsClick?: () => void;
  onAnalyticsClick?: () => void;
  onActivityClick?: () => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementheader--default)

```tsx
export const Default: Story = {
  args: {
    firmName: 'PricewaterhouseCoopers',
    clientName: 'Meridian Holdings',
    engagementId: 'ENG-2025-042',
    engagementName: 'Annual Tax Compliance Review',
  },
};
```

#### `WithActivity`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementheader--withactivity)

```tsx
export const WithActivity: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 4,
  },
};
```

#### `LongNames`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementheader--longnames)

```tsx
export const LongNames: Story = {
  args: {
    firmName: 'Ernst & Young LLP',
    clientName: 'Global Manufacturing Industries',
    engagementId: 'ENG-2024-087-AUDIT',
    engagementName: 'Annual Financial Statement Review & Compliance',
    activityCount: 12,
  },
};
```

#### `WithAllActions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementheader--withallactions)

```tsx
export const WithAllActions: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 4,
    onMenuClick: fn(),
    onTeamClick: fn(),
    onNotificationsClick: fn(),
    onAnalyticsClick: fn(),
    onActivityClick: fn(),
  },
};
```

#### `NoActivity`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementheader--noactivity)

```tsx
export const NoActivity: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 0,
  },
};
```

#### `HighActivityCount`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementheader--highactivitycount)

```tsx
export const HighActivityCount: Story = {
  args: {
    firmName: 'Deloitte',
    clientName: 'Acme Corp',
    engagementId: 'ENG-2024-001',
    engagementName: 'Q4 Financial Audit',
    activityCount: 150,
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementheader--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:9',
      cells: [
        {
          variant: 'State=default', x: 0, y: 0, w: 800, h: 80,
          expect: {
            // Figma breadcrumb: Home / Products / Sword (last = current page)
            // No labeled action buttons (all icon-only); title rendered as h1
            headings: ['Annual Tax Compliance Review'],
            swatchCount: 0,
            // Action buttons are icon-only so they have no text label
            buttonLabels: ['Home', 'Products', 'Sword'],
          },
        },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 80 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 800 }}>
        <EngagementHeader
          firmName="Home"
          firmHref="#home"
          clientName="Products"
          clientHref="#products"
          engagementId="Sword"
          engagementName="Annual Tax Compliance Review"
        />
      </div>
    </div>
  ),
};
```

---

## EngagementLayout

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-engagementlayout--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1569-2 |
| Story file | `components/layout/EngagementLayout.stories.tsx` |

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementlayout--default)

```tsx
export const Default: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedId, setSelectedId] = useState('g3');
    const [activeNav, setActiveNav] = useState('engagements');
    const [activeFilters, setActiveFilters] = useState<Set<string>>(
      new Set(['not-started', 'outstanding', 'fulfilled', 'overdue'])
    );
    const [flagFilter, setFlagFilter] = useState(false);
    const [assigneeFilter, setAssigneeFilter] = useState(false);

    const toggleFilter = (key: string) =>
      setActiveFilters((prev) => {
        const next = new Set(prev);
        next.has(key) ? next.delete(key) : next.add(key);
        return next;
      });

    const selectedRequest = ALL_REQUESTS.find(r => r.id === selectedId) ?? ALL_REQUESTS[2];

    const items = navItems(activeNav).map((item) => ({
      ...item,
      onClick: () => setActiveNav(item.id),
    }));

    return (
      <div className="flex flex-col h-screen overflow-hidden bg-canvas">
        {/* 1. Top nav */}
        <TopNav logo={<SuralinkLogo />} items={items} />

        {/* 2. Engagement header — breadcrumb segments are now interactive */}
        <EngagementHeader
          firmName="Hargrove & Ellis LLP"
          firmHref="#firm"
          clientName="Meridian Pacific Holdings"
          clientHref="#client"
          engagementId="ENG-2025-0142"
          engagementName="FY2025 Financial Statement Audit"
          activityCount={4}
          onMenuClick={() => {}}
          onTeamClick={() => {}}
          onNotificationsClick={() => {}}
          onAnalyticsClick={() => {}}
          onActivityClick={() => {}}
        />

        {/* 3. Request status color nav */}
        <RequestStatusColorNav
          sections={statusNavSections.map(section => ({
            ...section,
            requests: section.requests.filter(r => {
              const req = ALL_REQUESTS.find(a => a.id === r.id);
              if (!req) return true;
              if (!activeFilters.has(req.tileStatus)) return false;
              if (flagFilter && !req.isFlagged) return false;
              if (assigneeFilter && !(req.meta ?? []).some(m => m.type === 'assignee')) return false;
              return true;
            }),
          }))}
          activeId={selectedId}
          onRequestClick={setSelectedId}
        />

        {/* 4. Full-width toolbar above master-detail split */}
        <ListToolbar
          search={search}
          onSearch={setSearch}
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          flagFilter={flagFilter}
          onToggleFlagFilter={() => setFlagFilter(v => !v)}
          assigneeFilter={assigneeFilter}
          onToggleAssigneeFilter={() => setAssigneeFilter(v => !v)}
        />

        {/* 5. Master-detail split */}
        <div className="flex-1 overflow-hidden">
          <MasterDetailLayout
            listDefaultSize={60}
            detailDefaultSize={40}
            listMinSize={30}
            list={
              <div className="bg-surface">
                <Accordion>
                  {SECTION_DEFS.map(({ id, title }) => (
                    <AccordionItem
                      key={id}
                      title={title}
                      defaultOpen
                      size="md"
                      sticky
                      stickyTop="top-0"
                      surface
                    >
                      {ALL_REQUESTS.filter(r => {
                        if (r.sectionId !== id) return false;
                        if (!activeFilters.has(r.tileStatus)) return false;
                        if (flagFilter && !r.isFlagged) return false;
                        if (assigneeFilter && !(r.meta ?? []).some(m => m.type === 'assignee')) return false;
                        return true;
                      }).map((r) => (
                        <RequestRow
                          key={r.id}
                          orderNumber={r.order}
                          title={r.title}
                          status={r.rowStatus}
                          attachmentLabel={r.attachmentLabel ?? (r.tileStatus !== 'not-started' ? `Firm provided ${(r.order % 8) + 1} file${(r.order % 8) + 1 !== 1 ? 's' : ''}` : undefined)}
                          description={r.description}
                          meta={(() => {
                            const ORDER = ['e-signature', 'assignee', 'due-date', 'comments', 'documents', 'flag'];
                            const base = (r.meta ?? []).filter(m => m.type !== 'flag');
                            const withFlag = r.isFlagged ? [...base, { type: 'flag' as const }] : base;
                            return [...withFlag].sort((a, b) => ORDER.indexOf(a.type) - ORDER.indexOf(b.type));
                          })()}
                          selected={selectedId === r.id}
                          onClick={() => setSelectedId(r.id)}
                        />
                      ))}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            }
            detail={
              <RequestDetail
                orderNumber={selectedRequest.order}
                title={selectedRequest.title}
                description={selectedRequest.description}
                status={selectedRequest.rowStatus}
                createdBy="Jake Allsop"
                dueDate="Thu, Apr 16"
                priority={selectedRequest.isFlagged ? 'high' : null}
                clientAssignees={[{ initials: 'GS', name: 'Gerardo Sumano', email: 'gerardo@client.com', type: 'client' }]}
                firmAssignees={[{ initials: 'JA', name: 'Jake Allsop', email: 'jake@firm.com', type: 'firm' }]}
                files={mockFiles}
                comments={mockComments}
                commentCount={4}
                historyItems={mockHistory}
                onPreviewFile={(id) => alert(`Preview file: ${id}`)}
                onDownloadFiles={(ids) => alert(`Download: ${ids.join(', ')}`)}
                onDeleteFiles={(ids) => alert(`Delete: ${ids.join(', ')}`)}
                onImportFiles={() => alert('Import client files')}
                onComment={(text) => alert(`Comment: ${text}`)}
                onReply={(threadId, text) => alert(`Reply on ${threadId}: ${text}`)}
                onCommentClick={(id) => alert(`Comment clicked: ${id}`)}
                onCommentMenuClick={(id) => alert(`Comment menu: ${id}`)}
                onEdit={() => alert('Edit')}
                onDelete={() => alert('Delete')}
                onMore={() => alert('More')}
              />
            }
          />
        </div>
      </div>
    );
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementlayout--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:33', cells: EL_CELLS },
  },
  decorators: [
    MatrixVerify,
    (Story) => (
      <div className="relative" style={{ width: 1440, height: 900 }}>
        <div
          className="absolute"
          data-matrix-cell
          style={{ left: 0, top: 0, width: 1440, height: 900 }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  render: Default.render,
};
```

#### `EmptyState`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-engagementlayout--emptystate)

```tsx
export const EmptyState: Story = {
  render: () => {
    const [activeNav, setActiveNav] = useState('engagements');
    const items = navItems(activeNav).map((item) => ({
      ...item,
      onClick: () => setActiveNav(item.id),
    }));

    return (
      <div className="flex flex-col h-screen overflow-hidden bg-canvas">
        <TopNav logo={<SuralinkLogo />} items={items} />
        <EngagementHeader
          firmName="Acme Corp"
          firmHref="#firm"
          clientName="Acme Corp"
          clientHref="#client"
          engagementId="ENG-2024-001"
          engagementName="Q4 Financial Audit"
        />
        <RequestStatusColorNav sections={[{ id: 'general', label: 'General', requests: [] }]} />
        <div className="flex-1 overflow-hidden">
          <MasterDetailLayout
            listDefaultSize={60}
            detailDefaultSize={40}
            listMinSize={30}
            list={
              <div className="bg-surface">
                <SubToolbar
                  className="sticky top-0 z-20"
                  left={<Search placeholder="Search" className="w-40" />}
                  right={<Button variant="ghost" size="sm" endIcon={<ChevronDownIcon size="sm" />}>Due Date</Button>}
                />
                <AccordionItem title="General / Planning" defaultOpen size="sm" sticky stickyTop="top-0">
                <div className="flex items-center justify-center py-16">
                  <p className="text-body-sm text-muted">No requests yet</p>
                </div>
                </AccordionItem>
              </div>
            }
            detail={
              <RequestDetail
                orderNumber={1}
                title="New Request"
                status={undefined}
                createdBy="Jake Allsop"
                dueDate="Thu, Apr 16"
              />
            }
          />
        </div>
      </div>
    );
  },
};
```

---

## FileDropZone

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-filedropzone--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=408-34 |
| Source | `components/data-display/FileDropZone.tsx` |
| Story file | `components/data-display/FileDropZone.stories.tsx` |

### Import

```tsx
import { FileDropZone } from './components/data-display/FileDropZone';
```

### Props

```ts
export interface FileDropZoneProps {
  /** Controlled override for the dragging state. When set, internal drag tracking is bypassed. */
  dragging?: boolean;
  onFilesDropped?: (files: File[]) => void;
  onBrowse?: () => void;
  onESignatureClick?: () => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filedropzone--default)

```tsx
export const Default: Story = {
  args: {
    onBrowse: () => alert('Browse clicked'),
    onESignatureClick: () => alert('E-Signature clicked'),
    onFilesDropped: (files) => alert(`Dropped ${files.length} file(s)`),
  },
};
```

#### `WithoutESignature`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filedropzone--withoutesignature)

```tsx
export const WithoutESignature: Story = {
  args: {
    onBrowse: () => alert('Browse clicked'),
    onFilesDropped: (files) => alert(`Dropped ${files.length} file(s)`),
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filedropzone--matrix)

```tsx
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
```

---

## FileRow

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-filerow--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1547-133 |
| Source | `components/data-display/FileRow.tsx` |
| Story file | `components/data-display/FileRow.stories.tsx` |

### Import

```tsx
import { FileRow } from './components/data-display/FileRow';
```

### Props

```ts
export interface FileRowProps {
  /** Primary file name (e.g. "Audit_Workpapers_FY24.pdf"). */
  fileName: string;
  /** File size, pre-formatted (e.g. "1.2 MB", "450 KB"). */
  size: string;
  /** Who uploaded the file (e.g. "Alice"). */
  uploadedBy: string;
  /**
   * When the file was uploaded. Rendered with the canonical `<Timestamp>`
   * primitive in `short-date` format (MM/DD/YY). Accepts a Date object, ISO
   * string, or any string — invalid strings render verbatim (matches Figma's
   * "00/00/00" placeholder behavior).
   */
  uploadedAt: Date | string;
  /** Bulk-select state. Independent from `onRowClick` / preview behavior. */
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Whether to render the Preview action button. Mirrors Figma's HasPreview boolean. */
  hasPreview?: boolean;
  onPreview?: () => void;
  /** Status dot overlaid on the file icon (top-right). */
  dot?: FileRowDot;
  /** Force the hover background for static showcase rendering (Matrix stories). */
  forceHover?: boolean;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filerow--default)

```tsx
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
```

#### `Checked`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filerow--checked)

```tsx
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
```

#### `Unread`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filerow--unread)

```tsx
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
```

#### `Attention`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filerow--attention)

```tsx
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
```

#### `NoPreview`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filerow--nopreview)

```tsx
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
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filerow--matrix)

```tsx
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
};;
```

---

## FilterSwatchGroupRow

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-filterswatchgrouprow--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1600-2 |
| Story file | `components/data-display/FilterSwatchGroupRow.stories.tsx` |

### Variants

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-filterswatchgrouprow--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '1599:80',
      cells: ROW_GROUPS.map((g) => ({
        variant: `${g.label} (${g.swatches.length} swatches)`,
        x: g.x,
        y: 0,
        w: g.w,
        h: 49,
        expect: {
          // FilterSwatchGroup renders each swatch as a <button aria-pressed=...>
          // so swatchCount matches the configured swatch array length.
          buttonLabels: [],
          swatchCount: g.swatches.length,
          headings: [],
        },
      })),
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 2206, height: 49 }}>
      {ROW_GROUPS.map((g) => (
        <div
          key={g.label}
          className="absolute"
          style={{ left: g.x, top: 0, width: g.w }}
        >
          <FilterSwatchGroup
            label={g.label}
            size="sm"
            swatches={g.swatches.map((s) => ({
              color: TILE[s.color],
              selected: s.selected,
              highPriority: s.highPriority,
            }))}
          />
        </div>
      ))}
    </div>
  ),
};
```

---

## Request Detail

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-request-detail--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=76-12 |
| Source | `components/data-display/RequestDetail.tsx` |
| Story file | `components/data-display/RequestDetail.stories.tsx` |

### Import

```tsx
import { RequestDetail } from './components/data-display/RequestDetail';
```

### Props

```ts
export interface RequestDetailProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  createdBy?: string;
  dueDate?: string;
  priority?: 'high' | 'medium' | 'low' | null;
  clientAssignees?: Assignee[];
  firmAssignees?: Assignee[];
  files?: ClientFile[];
  comments?: CommentThread[];
  commentCount?: number;
  historyItems?: HistoryItem[];
  onChangeState?: (state: StatusIndicator) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onMore?: () => void;
  onAddAssignee?: () => void;
  onFilesDropped?: (files: File[]) => void;
  onBrowse?: () => void;
  onESignatureClick?: () => void;
  onDownloadFiles?: (ids: string[]) => void;
  onDeleteFiles?: (ids: string[]) => void;
  onImportFiles?: () => void;
  onPreviewFile?: (id: string) => void;
  onComment?: (text: string) => void;
  onReply?: (threadId: string, text: string) => void;
  onCommentClick?: (commentId: string) => void;
  onCommentMenuClick?: (commentId: string) => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-request-detail--default)

```tsx
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
```

#### `Accepted`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-request-detail--accepted)

```tsx
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
```

#### `Fulfilled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-request-detail--fulfilled)

```tsx
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
```

#### `NoFiles`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-request-detail--nofiles)

```tsx
export const NoFiles: Story = {
  args: {
    ...Default.args,
    files: [],
    comments: [],
    commentCount: 0,
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-request-detail--matrix)

```tsx
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
```

---

## RequestDetailActionBar

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-requestdetailactionbar--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=413-44 |
| Source | `components/data-display/RequestDetailActionBar.tsx` |
| Story file | `components/data-display/RequestDetailActionBar.stories.tsx` |

### Import

```tsx
import { RequestDetailActionBar } from './components/data-display/RequestDetailActionBar';
```

### Props

```ts
export interface RequestDetailActionBarProps {
  currentState?: StatusIndicator;
  onChangeState?: (state: StatusIndicator) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onMore?: () => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailactionbar--default)

```tsx
export const Default: Story = {
  args: { currentState: 'outstanding' },
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailactionbar--allstates)

```tsx
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-line border border-line rounded-card overflow-hidden">
      <RequestDetailActionBar currentState="outstanding" />
      <RequestDetailActionBar currentState="accepted" />
      <RequestDetailActionBar currentState="fulfilled" />
      <RequestDetailActionBar currentState="returned" />
    </div>
  ),
};
```

#### `Interactive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailactionbar--interactive)

```tsx
export const Interactive: Story = {
  render: () => {
    const [state, setState] = useState<StatusIndicator>('outstanding');
    return (
      <RequestDetailActionBar
        currentState={state}
        onChangeState={setState}
        onEdit={() => alert('Edit')}
        onDelete={() => alert('Delete')}
        onMore={() => alert('More')}
      />
    );
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailactionbar--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:13',
      cells: [
        {
          variant: 'State=default',
          x: 8, y: 8, w: 671, h: 48,
          expect: {
            // Only the dropdown trigger has visible text. The 3 right action
            // buttons (More/Edit/Delete) are iconOnly with aria-labels —
            // MatrixVerify filters empty-text buttons from `buttonLabels`.
            buttonLabels: ['Change request state'],
          },
        },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 687, height: 64 }}>
      <div className="absolute" data-matrix-cell style={{ left: 8, top: 8, width: 671 }}>
        <RequestDetailActionBar currentState="outstanding" />
      </div>
    </div>
  ),
};
```

---

## RequestDetailAssignments

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-requestdetailassignments--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=420-52 |
| Source | `components/data-display/RequestDetailAssignments.tsx` |
| Story file | `components/data-display/RequestDetailAssignments.stories.tsx` |

### Import

```tsx
import { RequestDetailAssignments } from './components/data-display/RequestDetailAssignments';
```

### Props

```ts
export interface RequestDetailAssignmentsProps {
  clientAssignees?: Assignee[];
  firmAssignees?: Assignee[];
  onAddAssignee?: (assignee: Assignee) => void;
  /** Whether the Assignments accordion starts expanded. Defaults to open
   *  (matches Figma's canonical `State=open`). */
  defaultOpen?: boolean;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailassignments--default)

```tsx
export const Default: Story = {
  args: {
    clientAssignees: mockClientAssignees,
    firmAssignees: mockFirmAssignees,
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};
```

#### `Empty`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailassignments--empty)

```tsx
export const Empty: Story = {
  args: {
    clientAssignees: [],
    firmAssignees: [],
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};
```

#### `ClientOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailassignments--clientonly)

```tsx
export const ClientOnly: Story = {
  args: {
    clientAssignees: mockClientAssignees,
    firmAssignees: [],
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};
```

#### `FirmOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailassignments--firmonly)

```tsx
export const FirmOnly: Story = {
  args: {
    clientAssignees: [],
    firmAssignees: mockFirmAssignees,
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};
```

#### `Interactive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailassignments--interactive)

```tsx
export const Interactive: Story = {
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    return (
      <div className="flex flex-col">
        <RequestDetailAssignments
          clientAssignees={[
            { initials: 'GS', name: 'Gerardo Sumano', email: 'gerardo@clientco.com', type: 'client' },
            { initials: 'MK', name: 'Maria Kim', email: 'maria@clientco.com', type: 'client' },
          ]}
          firmAssignees={[
            { initials: 'JA', name: 'Jake Allsop', email: 'jake@firm.com', type: 'firm' },
            { initials: 'AJ', name: 'Amana Johanson', email: 'amana@firm.com', type: 'firm' },
          ]}
          onAddAssignee={(a) => setLog((prev) => [`Added ${a.name}`, ...prev])}
        />
        {log.length > 0 && (
          <div className="p-4 space-y-1 border-t border-line">
            <p className="text-label-sm text-muted font-semibold">Actions</p>
            {log.map((entry, i) => (
              <p key={i} className="text-body-md text-primary">{entry}</p>
            ))}
          </div>
        )}
      </div>
    );
  },
};
```

#### `ManyAssignees`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailassignments--manyassignees)

```tsx
export const ManyAssignees: Story = {
  args: {
    clientAssignees: [
      { initials: 'GS', name: 'Gerardo Sumano',  email: 'gerardo@clientco.com',  type: 'client' },
      { initials: 'MK', name: 'Maria Kim',        email: 'maria@clientco.com',    type: 'client' },
      { initials: 'RL', name: 'Rachel Lopez',     email: 'rachel@clientco.com',   type: 'client' },
    ],
    firmAssignees: [
      { initials: 'JA', name: 'Jake Allsop',      email: 'jake@firm.com',         type: 'firm' },
      { initials: 'AJ', name: 'Amana Johanson',   email: 'amana@firm.com',        type: 'firm' },
      { initials: 'JS', name: 'Jenny Staggs',     email: 'jenny@firm.com',        type: 'firm' },
    ],
    onAddAssignee: (a) => alert(`Add assignee: ${a.name}`),
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailassignments--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:14', cells: RDA_CELLS },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 170 }}>
      <div className="absolute" data-matrix-cell style={{ left: 0, top: 0, width: 800 }}>
        <RequestDetailAssignments
          clientAssignees={mockClientAssignees}
          firmAssignees={mockFirmAssignees}
          defaultOpen
        />
      </div>
    </div>
  ),
};
```

---

## RequestDetailHeader

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-requestdetailheader--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=415-19 |
| Source | `components/data-display/RequestDetailHeader.tsx` |
| Story file | `components/data-display/RequestDetailHeader.stories.tsx` |

### Import

```tsx
import { RequestDetailHeader } from './components/data-display/RequestDetailHeader';
```

### Props

```ts
export interface RequestDetailHeaderProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  createdBy?: string;
  dueDate?: string;
  priority?: 'high' | 'medium' | 'low' | null;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailheader--default)

```tsx
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
```

#### `AllStatuses`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailheader--allstatuses)

```tsx
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
```

#### `HighPriority`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailheader--highpriority)

```tsx
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
```

#### `NoDescription`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailheader--nodescription)

```tsx
export const NoDescription: Story = {
  args: {
    orderNumber: 6,
    title: 'Payroll Register — Q1',
    status: 'accepted',
    createdBy: 'Jake Allsop',
    dueDate: 'Apr 10',
  },
};
```

#### `LongTitle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailheader--longtitle)

```tsx
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
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestdetailheader--matrix)

```tsx
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
```

---

## RequestRow

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-requestrow--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1393-674 |
| Source | `components/data-display/RequestRow.tsx` |
| Story file | `components/data-display/RequestRow.stories.tsx` |

### Import

```tsx
import { RequestRow } from './components/data-display/RequestRow';
```

### Props

```ts
export interface RequestRowProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  attachmentLabel?: string;
  onAttachmentClick?: () => void;
  meta?: MetaItem[];
  selected?: boolean;
  /**
   * Whether the row is "checked" for bulk operations. Independent from
   * `selected` (which controls expansion/highlight). Clicking the checkbox
   * toggles only this state — the row's expansion is untouched.
   */
  checked?: boolean;
  /** Called when the row checkbox is toggled. */
  onCheckedChange?: (checked: boolean) => void;
  /** Force the hover background for static showcase rendering (Matrix stories). */
  forceHover?: boolean;
  onClick?: () => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--default)

```tsx
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
```

#### `Checked`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--checked)

```tsx
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
```

#### `Selected`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--selected)

```tsx
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
```

#### `AllStatuses`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--allstatuses)

```tsx
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
```

#### `WithAllMeta`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--withallmeta)

```tsx
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
```

#### `WithAttachment`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--withattachment)

```tsx
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
```

#### `NoMeta`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--nometa)

```tsx
export const NoMeta: Story = {
  render: () => (
    <RequestRow
      orderNumber={12}
      title="Board of Directors Resolutions"
      status="accepted"
    />
  ),
};
```

#### `ColumnAlignment`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--columnalignment)

```tsx
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
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requestrow--matrix)

```tsx
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
```

---

## RequestStatusColorNav

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-requeststatuscolornav--docs |
| Source | `components/data-display/RequestStatusColorNav.tsx` |
| Story file | `components/data-display/RequestStatusColorNav.stories.tsx` |

### Import

```tsx
import { RequestStatusColorNav } from './components/data-display/RequestStatusColorNav';
```

### Props

```ts
export interface RequestStatusColorNavProps {
  sections: RequestSection[];
  activeId?: string;
  onRequestClick?: (id: string) => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requeststatuscolornav--default)

```tsx
export const Default: Story = {
  args: {
    sections: mockSections,
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};
```

#### `WithActive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requeststatuscolornav--withactive)

```tsx
export const WithActive: Story = {
  args: {
    sections: mockSections,
    activeId: 'g2',
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};
```

#### `Overflow`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requeststatuscolornav--overflow)

```tsx
export const Overflow: Story = {
  decorators: [(Story) => (
    <div className="bg-canvas p-4" style={{ width: 800 }}>
      <Story />
    </div>
  )],
  args: {
    sections: [
      { id: 'general', label: 'General', requests: [
        { id: 'g1', status: 'fulfilled' }, { id: 'g2', status: 'outstanding' }, { id: 'g3', status: 'outstanding', isFlagged: true },
        { id: 'g4', status: 'fulfilled' }, { id: 'g5', status: 'fulfilled' }, { id: 'g6', status: 'outstanding' },
        { id: 'g7', status: 'overdue' }, { id: 'g8', status: 'fulfilled' }, { id: 'g9', status: 'outstanding' }, { id: 'g10', status: 'overdue' },
      ]},
      { id: 'fin-rep', label: 'Financial Reporting', requests: [
        { id: 'fr1', status: 'overdue', isFlagged: true }, { id: 'fr2', status: 'not-started' }, { id: 'fr3', status: 'not-started' },
        { id: 'fr4', status: 'outstanding', isFlagged: true }, { id: 'fr5', status: 'not-started' }, { id: 'fr6', status: 'fulfilled' },
        { id: 'fr7', status: 'not-started' }, { id: 'fr8', status: 'not-started' }, { id: 'fr9', status: 'not-started' },
        { id: 'fr10', status: 'fulfilled', isFlagged: true }, { id: 'fr11', status: 'fulfilled' }, { id: 'fr12', status: 'not-started' },
      ]},
      { id: 'cash', label: 'Cash', requests: [
        { id: 'ca1', status: 'not-started' }, { id: 'ca2', status: 'not-started' }, { id: 'ca3', status: 'not-started' },
        { id: 'ca4', status: 'not-started' }, { id: 'ca5', status: 'not-started' }, { id: 'ca6', status: 'not-started' },
        { id: 'ca7', status: 'not-started' }, { id: 'ca8', status: 'not-started' },
      ]},
      { id: 'ar-sales', label: 'A/R & Sales', requests: [
        { id: 'ar1', status: 'overdue' }, { id: 'ar2', status: 'not-started' }, { id: 'ar3', status: 'overdue' },
        { id: 'ar4', status: 'not-started' }, { id: 'ar5', status: 'not-started' }, { id: 'ar6', status: 'not-started' },
        { id: 'ar7', status: 'not-started' }, { id: 'ar8', status: 'not-started' }, { id: 'ar9', status: 'not-started' }, { id: 'ar10', status: 'not-started' },
      ]},
      { id: 'inventory', label: 'Inventory', requests: [
        { id: 'in1', status: 'not-started' }, { id: 'in2', status: 'not-started' }, { id: 'in3', status: 'not-started' },
        { id: 'in4', status: 'not-started' }, { id: 'in5', status: 'not-started' }, { id: 'in6', status: 'not-started' },
        { id: 'in7', status: 'fulfilled' }, { id: 'in8', status: 'fulfilled' }, { id: 'in9', status: 'fulfilled' }, { id: 'in10', status: 'fulfilled' },
      ]},
      { id: 'fixed-assets', label: 'Fixed Assets', requests: [
        { id: 'fa1', status: 'fulfilled' }, { id: 'fa2', status: 'fulfilled' }, { id: 'fa3', status: 'fulfilled' },
        { id: 'fa4', status: 'fulfilled' }, { id: 'fa5', status: 'outstanding' }, { id: 'fa6', status: 'outstanding' },
        { id: 'fa7', status: 'fulfilled' }, { id: 'fa8', status: 'fulfilled' }, { id: 'fa9', status: 'fulfilled' }, { id: 'fa10', status: 'fulfilled' },
      ]},
      { id: 'accounts-payable', label: 'Accounts Pay...', requests: [
        { id: 'ap1', status: 'outstanding' }, { id: 'ap2', status: 'outstanding' }, { id: 'ap3', status: 'not-started' },
        { id: 'ap4', status: 'not-started' }, { id: 'ap5', status: 'not-started' }, { id: 'ap6', status: 'not-started' },
      ]},
    ],
    activeId: 'g2',
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};
```

#### `WithFlags`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-requeststatuscolornav--withflags)

```tsx
export const WithFlags: Story = {
  args: {
    sections: mockSections.map((section) => ({
      ...section,
      requests: section.requests.map((req, i) => ({
        ...req,
        isFlagged: i === 1,
      })),
    })),
    activeId: 'fr1',
    onRequestClick: (id) => alert(`Clicked request ${id}`),
  },
};
```

---

## Stat

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-stat--docs |
| Source | `components/data-display/Stat.tsx` |
| Story file | `components/data-display/Stat.stories.tsx` |

### Import

```tsx
import { Stat } from './components/data-display/Stat';
```

### Props

```ts
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}
```

### Variants

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-stat--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-8 flex-wrap">
      <Stat label="Total Revenue" value="$48,295" change="+12% from last month" changeType="positive" />
      <Stat label="Active Users"  value="2,847"   change="+5.2%"               changeType="positive" />
      <Stat label="Churn Rate"    value="2.4%"    change="-0.3%"               changeType="negative" />
      <Stat label="Avg. Response" value="1.8s"    changeType="neutral" />
    </div>
  ),
};
```

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-stat--default)

```tsx
export const Default: Story = { args: { label: 'Total Revenue', value: '$48,295', change: '+12% from last month', changeType: 'positive' } };
```

#### `Negative`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-stat--negative)

```tsx
export const Negative: Story = { args: { label: 'Churn Rate',    value: '2.4%',    change: '-0.3%',               changeType: 'negative' } };
```

#### `Positive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-stat--positive)

```tsx
export const Positive: Story = { args: { label: 'New Sign-ups',  value: '1,204',   change: '+8.1% this week',     changeType: 'positive' } };
```

#### `Neutral`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-stat--neutral)

```tsx
export const Neutral: Story = { args: { label: 'Avg. Response', value: '1.8s',    changeType: 'neutral' } };
```

#### `WithLargeNumber`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-stat--withlargenumber)

```tsx
export const WithLargeNumber: Story = { args: { label: 'Lifetime Revenue', value: '$12,847,300', change: '+3.4% vs last year', changeType: 'positive' } };
```

---

## SubToolbar

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/rlm-layout-subtoolbar--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=840-94 |
| Source | `components/navigation/SubToolbar.tsx` |
| Story file | `components/navigation/SubToolbar.stories.tsx` |

### Description

SubToolbar — secondary toolbar bar, typically docked under a page header.
Two opinionated content slots: `left` and `right`. Both accept any composition
of LSDS controls — buttons, dropdowns, inputs, search, filter swatch groups,
dividers, etc. The slots auto-space (left anchors to the start, right anchors
to the end) so consumers don't need to write spacer divs.
Mirrors the `SubToolbar` ComponentSet in Figma (`Slots=Both/LeftOnly/RightOnly`).

### Import

```tsx
import { SubToolbar } from './components/navigation/SubToolbar';
```

### Props

```ts
export interface SubToolbarProps {
  /**
   * Left content slot — checkboxes, search, action buttons, etc.
   * Wrap multiple controls in a fragment; they'll align horizontally with `gap-3`.
   */
  left?: React.ReactNode;
  /**
   * Right content slot — filters, sort, assignees, dividers, etc.
   * Wrap multiple controls in a fragment; they'll align horizontally with `gap-3`.
   */
  right?: React.ReactNode;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-subtoolbar--default)

```tsx
export const Default: Story = {
  render: () => <SubToolbarDemo />,
};
```

#### `LeftOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-subtoolbar--leftonly)

```tsx
export const LeftOnly: Story = {
  render: () => <SubToolbar left={
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <Checkbox />
        <ChevronDownIcon size={15} className="text-primary" />
      </div>
      <Button variant="ghost" size="xs" startIcon={<PlusIcon size={14} />}>Create category</Button>
      <Button variant="ghost" size="xs" startIcon={<PlusIcon size={14} />}>Create request</Button>
    </div>
  } />,
};
```

#### `RightOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-subtoolbar--rightonly)

```tsx
export const RightOnly: Story = {
  render: () => <SubToolbar right={<RightControls />} />,
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/rlm-layout-subtoolbar--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:51',
      cells: [
        {
          variant: 'Slots=Both', x: 24, y: 24, w: 1440, h: 48,
          expect: {
            // Buttons in order: 2 left action buttons, Avatar filter (renders "A"),
            // Sort dropdown trigger. Flag filter button has no text content.
            buttonLabels: ['+ Create category', '+ Create request', 'A', 'Due Date'],
            swatchCount: 4,
            searchValue: 'Search query',
            searchPlaceholder: 'Search',
          },
        },
        {
          variant: 'Slots=LeftOnly', x: 24, y: 88, w: 1200, h: 48,
          expect: {
            buttonLabels: ['Button', 'Button'],
            swatchCount: 0,
            searchValue: 'Search query',
            searchPlaceholder: 'Type here…',
          },
        },
        {
          variant: 'Slots=RightOnly', x: 24, y: 152, w: 1200, h: 48,
          expect: {
            // RightOnly: Avatar filter ("A"), Sort dropdown trigger ("Button")
            buttonLabels: ['A', 'Button'],
            swatchCount: 4,
          },
        },
      ],
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1488, height: 224 }}>
      <div className="absolute" data-matrix-cell style={{ left: 24, top: 24, width: 1440 }}>
        <SubToolbar left={<BothLeft />} right={<BothRight />} />
      </div>
      <div className="absolute" data-matrix-cell style={{ left: 24, top: 88, width: 1200 }}>
        <SubToolbar left={<LeftOnlyLeft />} />
      </div>
      <div className="absolute" data-matrix-cell style={{ left: 24, top: 152, width: 1200 }}>
        <SubToolbar right={<RightOnlyRight />} />
      </div>
    </div>
  ),
};
```

---


# Layout

## AppShell

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-appshell--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=815-48 |
| Source | `components/layout/AppShell.tsx` |
| Story file | `components/layout/AppShell.stories.tsx` |

### Description

Root layout wrapper. Fills 100vh with a fixed header + flex body beneath.
Place a PanelGroup (or any content) inside children.

### Import

```tsx
import { AppShell } from './components/layout/AppShell';
```

### Props

```ts
export interface AppShellProps {
  /** Fixed top bar content (nav, logo, actions) */
  header: React.ReactNode;
  /** Main panel area — use PanelGroup inside here */
  children: React.ReactNode;
  /** Header height in px. Default: 56 */
  headerHeight?: number;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-appshell--default)

```tsx
export const Default: Story = {
  args: {
    header: <MockNav />,
    children: <MockContent />,
  },
  parameters: {
    layout: 'fullscreen',
  },
};
```

#### `TallHeader`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-appshell--tallheader)

```tsx
export const TallHeader: Story = {
  args: {
    header: <MockNav />,
    children: <MockContent />,
    headerHeight: 72,
  },
  parameters: {
    layout: 'fullscreen',
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-appshell--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:29', cells: AS_CELLS },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 2480, height: 800 }}>
      <div className="absolute border border-line rounded-control overflow-hidden" data-matrix-cell style={{ left: 0, top: 0, width: 1200, height: 800 }}>
        <AppShell header={<ShellNav />}>
          <ShellBody />
        </AppShell>
      </div>
      <div className="absolute border border-line rounded-control overflow-hidden" data-matrix-cell style={{ left: 1280, top: 0, width: 1200, height: 800 }}>
        <AppShell header={<ShellNav />} headerHeight={72}>
          <ShellBody />
        </AppShell>
      </div>
    </div>
  ),
};
```

---

## Container

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-container--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=778-20 |
| Source | `components/layout/Container.tsx` |
| Story file | `components/layout/Container.stories.tsx` |

### Import

```tsx
import { Container } from './components/layout/Container';
```

### Props

```ts
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--default)

```tsx
export const Default: Story = { args: { children: 'Content inside container', maxWidth: '2xl' } };
```

#### `SmallWidth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--smallwidth)

```tsx
export const SmallWidth: Story = {
  args: { maxWidth: 'sm', children: <Box /> },
};
```

#### `MediumWidth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--mediumwidth)

```tsx
export const MediumWidth: Story = {
  args: { maxWidth: 'md', children: <Box /> },
};
```

#### `LargeWidth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--largewidth)

```tsx
export const LargeWidth: Story = {
  args: { maxWidth: 'lg', children: <Box /> },
};
```

#### `XLWidth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--xlwidth)

```tsx
export const XLWidth: Story = {
  args: { maxWidth: 'xl', children: <Box /> },
};
```

#### `TwoXLWidth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--twoxlwidth)

```tsx
export const TwoXLWidth: Story = {
  args: { maxWidth: '2xl', children: <Box /> },
};
```

#### `FullWidth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--fullwidth)

```tsx
export const FullWidth: Story = {
  args: { maxWidth: 'full', children: <Box /> },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-container--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:30', cells: C_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1880, height: 1010 }}>
      {C_CELLS.map(c => (
        <div
          key={c.variant}
          className="absolute border border-line rounded-control bg-canvas overflow-hidden flex items-center"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Container maxWidth={c.variant.replace('MaxWidth=','') as 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'}>
            <ContainerPlaceholder />
          </Container>
        </div>
      ))}
    </div>
  ),
};
```

---

## DetailPanel

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-detailpanel--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=812-87 |
| Source | `components/layout/DetailPanel.tsx` |
| Story file | `components/layout/DetailPanel.stories.tsx` |

### Description

Opinionated right-panel / detail view composition.
Provides a sticky header, scrollable body, and optional sticky footer.
@example
<DetailPanel
  header={<PanelHeader title="Tax Return — Acme Corp" actions={<Button>Submit</Button>} />}
  footer={<div className="flex justify-end gap-2 p-panel"><Button>Save</Button></div>}
>
  {formFields}
</DetailPanel>

### Import

```tsx
import { DetailPanel } from './components/layout/DetailPanel';
```

### Props

```ts
export interface DetailPanelProps {
  /** Sticky header — stays at the top while the body scrolls */
  header?: React.ReactNode;
  /** Main scrollable content area */
  children: React.ReactNode;
  /** Optional sticky footer — actions, submit buttons */
  footer?: React.ReactNode;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-detailpanel--default)

```tsx
export const Default: Story = {
  render: () => (
    <div style={{ height: 560 }}>
      <DetailPanel
        header={<PanelHeader title="Tax Return — Acme Corp" subtitle="FY 2025" />}
      >
        <Inset>{mockContent}</Inset>
      </DetailPanel>
    </div>
  ),
};
```

#### `WithFooter`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-detailpanel--withfooter)

```tsx
export const WithFooter: Story = {
  render: () => (
    <div style={{ height: 560 }}>
      <DetailPanel
        header={<PanelHeader title="Tax Return — Acme Corp" subtitle="FY 2025" />}
        footer={
          <div className="flex justify-end gap-2 p-panel">
            <Button variant="secondary">Cancel</Button>
            <Button>Save changes</Button>
          </div>
        }
      >
        <Inset>{mockContent}</Inset>
      </DetailPanel>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-detailpanel--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:31', cells: DP_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1080, height: 640 }}>
      {DP_CELLS.map(c => (
        <div key={c.variant} className="absolute border border-line rounded-control overflow-hidden bg-elevated" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <DetailPanel
            header={
              <PanelHeader
                title="Panel title"
                subtitle="12 items"
                actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>}
              />
            }
            footer={c.variant === 'HasFooter=true' ? (
              <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-line bg-elevated">
                <Button variant="secondary" size="sm">Cancel</Button>
                <Button size="sm">Save changes</Button>
              </div>
            ) : undefined}
          >
            <Inset><FieldRows /></Inset>
          </DetailPanel>
        </div>
      ))}
    </div>
  ),
};
```

---

## Foundation

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-foundation--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=76-34 |
| Story file | `components/layout/LayoutFoundation.stories.tsx` |

### Variants

#### `SpacingScale`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-foundation--spacingscale)

```tsx
export const SpacingScale: Story = {
  name: 'Spacing Scale',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">Spacing Scale (4px base grid)</h2>
      <Stack gap={2}>
        {[
          { token: '1', px: 4 },
          { token: '2', px: 8 },
          { token: '3', px: 12 },
          { token: '4', px: 16 },
          { token: '5', px: 20 },
          { token: '6', px: 24 },
          { token: '8', px: 32 },
          { token: '10', px: 40 },
          { token: '12', px: 48 },
          { token: '16', px: 64 },
        ].map(({ token, px }) => (
          <div key={token} className="flex items-center gap-4">
            <span className="w-12 text-label-sm font-mono text-muted text-right shrink-0">{token}</span>
            <div className="bg-action-primary rounded" style={{ width: px, height: 12 }} />
            <span className="text-label-sm text-secondary">{px}px</span>
          </div>
        ))}
      </Stack>
    </div>
  ),
};
```

#### `SemanticSpacing`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-foundation--semanticspacing)

```tsx
export const SemanticSpacing: Story = {
  name: 'Semantic Spacing Tokens',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">Semantic Spacing</h2>
      <p className="text-body-sm text-secondary">Use these token-based classes for consistent panel padding.</p>
      <div className="flex flex-col gap-4">
        {[
          { name: 'panel-compact', desc: 'Toolbars, dense panels', cls: 'p-panel-compact' },
          { name: 'panel',         desc: 'Standard panels (default)', cls: 'p-panel' },
          { name: 'panel-relaxed', desc: 'Detail views, forms', cls: 'p-panel-relaxed' },
        ].map(({ name, desc, cls }) => (
          <div key={name} className="bg-recessed rounded border border-line">
            <div className={cls}>
              <div className="bg-surface border border-dashed border-line-strong rounded p-3 flex items-center justify-between">
                <span className="text-label-sm font-mono text-primary">{cls}</span>
                <span className="text-label-sm text-muted">{desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
```

#### `Breakpoints`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-foundation--breakpoints)

```tsx
export const Breakpoints: Story = {
  name: 'Breakpoints',
  render: () => (
    <div className="flex flex-col gap-4">
      <h2 className="text-body-md font-semibold text-heading">Breakpoints</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-body-sm border-collapse">
          <thead>
            <tr className="border-b border-line">
              <th className="text-left p-2 text-heading font-semibold">Name</th>
              <th className="text-left p-2 text-heading font-semibold">Min width</th>
              <th className="text-left p-2 text-heading font-semibold">Tailwind prefix</th>
              <th className="text-left p-2 text-heading font-semibold">Typical use</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: '(base)',  width: '–',      prefix: '–',    use: 'Mobile / narrow' },
              { name: 'sm',     width: '768px',  prefix: 'sm:',  use: 'Tablet portrait' },
              { name: 'md',     width: '1024px', prefix: 'md:',  use: 'Laptop' },
              { name: 'lg',     width: '1280px', prefix: 'lg:',  use: 'Desktop' },
              { name: 'xl',     width: '1536px', prefix: 'xl:',  use: 'Large desktop' },
              { name: '2xl',    width: '1800px', prefix: '2xl:', use: 'Wide display' },
            ].map((row) => (
              <tr key={row.name} className="border-b border-line hover:bg-surface">
                <td className="p-2 font-mono text-primary">{row.name}</td>
                <td className="p-2 text-secondary">{row.width}</td>
                <td className="p-2 font-mono text-muted">{row.prefix}</td>
                <td className="p-2 text-secondary">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};
```

#### `GridSystem`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-foundation--gridsystem)

```tsx
export const GridSystem: Story = {
  name: '12-Column Grid',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">12-Column Grid</h2>
      <Stack gap={3}>
        {/* Full-width row */}
        <Grid cols={12} gap={2}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="bg-action-primary/20 border border-action-primary/40 rounded text-center text-label-sm text-secondary py-2">
              {i + 1}
            </div>
          ))}
        </Grid>

        {/* Common span patterns */}
        <Grid cols={12} gap={2}>
          <ColSpan span={6}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">6</div></ColSpan>
          <ColSpan span={6}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">6</div></ColSpan>
        </Grid>

        <Grid cols={12} gap={2}>
          <ColSpan span={8}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">8 — main content</div></ColSpan>
          <ColSpan span={4}><div className="bg-recessed border border-line rounded p-3 text-label-sm text-secondary text-center">4 — sidebar</div></ColSpan>
        </Grid>

        <Grid cols={12} gap={2}>
          <ColSpan span={4}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">4</div></ColSpan>
          <ColSpan span={4}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">4</div></ColSpan>
          <ColSpan span={4}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">4</div></ColSpan>
        </Grid>

        <Grid cols={12} gap={2}>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
        </Grid>
      </Stack>
    </div>
  ),
};
```

#### `SurfaceHierarchy`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-foundation--surfacehierarchy)

```tsx
export const SurfaceHierarchy: Story = {
  name: 'Surface Hierarchy',
  render: () => (
    <div className="flex flex-col gap-4">
      <h2 className="text-body-md font-semibold text-heading">Background Surface Hierarchy</h2>
      <p className="text-body-sm text-secondary">
        Use these in order — elevated → surface → canvas → recessed — to create visual depth.
      </p>
      <div className="flex flex-col gap-2">
        {[
          { cls: 'bg-elevated', label: 'bg-elevated', desc: 'Headers, modals, dropdowns' },
          { cls: 'bg-surface',  label: 'bg-surface',  desc: 'Cards, panels, list backgrounds' },
          { cls: 'bg-canvas',   label: 'bg-canvas',   desc: 'Page background' },
          { cls: 'bg-recessed', label: 'bg-recessed', desc: 'Inputs, inset areas, code blocks' },
        ].map(({ cls, label, desc }) => (
          <div key={cls} className={`${cls} border border-line rounded p-4 flex items-center justify-between`}>
            <span className="font-mono text-label-sm text-primary">{label}</span>
            <span className="text-label-sm text-muted">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
```

#### `LayoutCompositions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-foundation--layoutcompositions)

```tsx
export const LayoutCompositions: Story = {
  name: 'Layout Composition Patterns',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">Common Layout Patterns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Master-Detail */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">MasterDetailLayout</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex h-full">
              <div className="bg-surface border-r border-line flex flex-col" style={{ width: '32%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">List</div>
                {[1,2,3,4].map(i => <div key={i} className="px-2 py-1.5 border-b border-line text-label-sm text-secondary">Row {i}</div>)}
              </div>
              <div className="bg-canvas flex-1 flex flex-col">
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Detail</div>
                <Inset size="compact"><div className="text-label-sm text-muted">Content area</div></Inset>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">ThreeColumnLayout</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex h-full">
              <div className="bg-surface border-r border-line flex flex-col" style={{ width: '22%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Nav</div>
                {[1,2,3].map(i => <div key={i} className="px-2 py-1 text-label-sm text-secondary">Item {i}</div>)}
              </div>
              <div className="bg-canvas flex-1 flex flex-col border-r border-line">
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Content</div>
                <Inset size="compact"><div className="text-label-sm text-muted">Main content</div></Inset>
              </div>
              <div className="bg-surface flex-col" style={{ width: '30%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Right</div>
                <Inset size="compact"><div className="text-label-sm text-muted">Panel</div></Inset>
              </div>
            </div>
          </div>
        </div>

        {/* AppShell */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">AppShell</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex flex-col h-full">
              <div className="bg-elevated border-b border-line px-3 py-2 text-label-sm font-semibold text-heading shrink-0">Header (56px)</div>
              <div className="flex flex-1 overflow-hidden">
                <div className="bg-header-bg flex flex-col shrink-0" style={{ width: 40 }}>
                  {[1,2,3].map(i => <div key={i} className="h-8 border-b border-white/10" />)}
                </div>
                <div className="bg-canvas flex-1 p-2 text-label-sm text-muted">Body / PanelGroup</div>
              </div>
            </div>
          </div>
        </div>

        {/* ListPanel + DetailPanel */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">ListPanel + DetailPanel</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex h-full">
              <div className="bg-surface border-r border-line flex flex-col" style={{ width: '38%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">PanelHeader</div>
                <div className="px-2 py-1 border-b border-line bg-elevated text-label-sm text-muted">toolbar slot</div>
                <div className="flex-1 overflow-y-auto">
                  {[1,2,3,4].map(i => <div key={i} className="px-2 py-1.5 border-b border-line text-label-sm text-secondary">Item {i}</div>)}
                </div>
              </div>
              <div className="bg-canvas flex-1 flex flex-col">
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">PanelHeader</div>
                <div className="flex-1 overflow-y-auto p-2 text-label-sm text-muted">ScrollArea body</div>
                <div className="bg-elevated border-t border-line px-2 py-1.5 text-label-sm text-muted">footer slot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
```

---

## Grid

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-grid--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=776-138 |
| Source | `components/layout/Grid.tsx` |
| Story file | `components/layout/Grid.stories.tsx` |

### Import

```tsx
import { Grid } from './components/layout/Grid';
```

### Props

```ts
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns. Accepts a fixed number or a responsive object.
   * @example cols={3}
   * @example cols={{ base: 1, sm: 2, md: 3 }}
   */
  cols?: ResponsiveCols;
  /** Gap between grid cells */
  gap?: 2 | 4 | 6 | 8;
}
```

```ts
export interface ColSpanProps extends React.HTMLAttributes<HTMLDivElement> {
  /** How many columns this item spans */
  span?: ResponsiveSpan;
}
```

### Variants

#### `TwoCol`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--twocol)

```tsx
export const TwoCol: Story = {
  args: { cols: 2, gap: 4, children: [
    <div key="a" className="bg-surface p-4 rounded-control">Cell A</div>,
    <div key="b" className="bg-surface p-4 rounded-control">Cell B</div>,
  ]},
};
```

#### `OneCol`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--onecol)

```tsx
export const OneCol: Story = {
  args: { cols: 1, gap: 4, children: [1, 2, 3].map(cell) },
};
```

#### `ThreeCol`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--threecol)

```tsx
export const ThreeCol: Story = {
  args: { cols: 3, gap: 4, children: [1, 2, 3, 4, 5, 6].map(cell) },
};
```

#### `FourCol`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--fourcol)

```tsx
export const FourCol: Story = {
  args: { cols: 4, gap: 4, children: [1, 2, 3, 4, 5, 6, 7, 8].map(cell) },
};
```

#### `SixCol`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--sixcol)

```tsx
export const SixCol: Story = {
  args: { cols: 6, gap: 4, children: [1, 2, 3, 4, 5, 6].map(cell) },
};
```

#### `TwelveCol`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--twelvecol)

```tsx
export const TwelveCol: Story = {
  args: { cols: 12, gap: 4, children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(cell) },
};
```

#### `GapTwo`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--gaptwo)

```tsx
export const GapTwo: Story = {
  args: { cols: 3, gap: 2, children: [1, 2, 3, 4, 5, 6].map(cell) },
};
```

#### `GapFour`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--gapfour)

```tsx
export const GapFour: Story = {
  args: { cols: 3, gap: 4, children: [1, 2, 3, 4, 5, 6].map(cell) },
};
```

#### `GapSix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--gapsix)

```tsx
export const GapSix: Story = {
  args: { cols: 3, gap: 6, children: [1, 2, 3, 4, 5, 6].map(cell) },
};
```

#### `GapEight`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--gapeight)

```tsx
export const GapEight: Story = {
  args: { cols: 3, gap: 8, children: [1, 2, 3, 4, 5, 6].map(cell) },
};
```

#### `ResponsiveCols`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--responsivecols)

```tsx
export const ResponsiveCols: Story = {
  name: 'Responsive (1 → 2 → 3)',
  render: () => (
    <Grid cols={{ base: 1, sm: 2, md: 3 }} gap={4}>
      {[1, 2, 3, 4, 5, 6].map(cell)}
    </Grid>
  ),
};
```

#### `TwelveColSpans`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--twelvecolspans)

```tsx
export const TwelveColSpans: Story = {
  name: 'ColSpan — 12-col layout',
  render: () => (
    <Grid cols={12} gap={4}>
      <ColSpan span={8}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Main — 8 cols</div></ColSpan>
      <ColSpan span={4}><div className="bg-recessed border border-line rounded-control p-4 text-label-sm text-secondary">Sidebar — 4 cols</div></ColSpan>
      <ColSpan span={4}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Card — 4</div></ColSpan>
      <ColSpan span={4}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Card — 4</div></ColSpan>
      <ColSpan span={4}><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Card — 4</div></ColSpan>
      <ColSpan span="full"><div className="bg-surface border border-line rounded-control p-4 text-label-sm text-secondary">Full width — 12 cols</div></ColSpan>
    </Grid>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-grid--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:35', cells: G_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 880, height: 560 }}>
      {G_CELLS.map(c => {
        const cols = parseInt(c.variant.match(/Columns=(\d+)/)![1], 10) as 1 | 2 | 3 | 4 | 6 | 12;
        const count = cols * (cols === 12 ? 1 : 2);
        return (
          <div key={c.variant} className="absolute border border-line rounded-control bg-elevated p-3 overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <Grid cols={cols} gap={4}>
              {Array.from({ length: count }, (_, i) => <GridPlaceholder key={i} n={i} />)}
            </Grid>
          </div>
        );
      })}
    </div>
  ),
};
```

---

## Inset

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-inset--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=787-21 |
| Source | `components/layout/Inset.tsx` |
| Story file | `components/layout/Inset.stories.tsx` |

### Description

Semantic padding wrapper.
Uses layout spacing tokens so padding stays consistent as the design evolves.
@example
<Inset>…</Inset>
<Inset size="compact">…</Inset>
<Inset size="relaxed" x>…</Inset>

### Import

```tsx
import { Inset } from './components/layout/Inset';
```

### Props

```ts
export interface InsetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Padding size:
   * - compact  → 12px  (toolbars, dense panels)
   * - default  → 16px  (standard panels)
   * - relaxed  → 24px  (detail views, forms)
   */
  size?: 'compact' | 'default' | 'relaxed';
  /** Apply padding only on the x-axis */
  x?: boolean;
  /** Apply padding only on the y-axis */
  y?: boolean;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-inset--default)

```tsx
export const Default: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset><Inner label="Inset default (16px)" /></Inset>
    </div>
  ),
};
```

#### `Compact`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-inset--compact)

```tsx
export const Compact: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset size="compact"><Inner label="Inset compact (12px)" /></Inset>
    </div>
  ),
};
```

#### `Relaxed`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-inset--relaxed)

```tsx
export const Relaxed: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset size="relaxed"><Inner label="Inset relaxed (24px)" /></Inset>
    </div>
  ),
};
```

#### `XOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-inset--xonly)

```tsx
export const XOnly: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset x><Inner label="Inset x (horizontal only)" /></Inset>
    </div>
  ),
};
```

#### `YOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-inset--yonly)

```tsx
export const YOnly: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset y><Inner label="Inset y (vertical only)" /></Inset>
    </div>
  ),
};
```

#### `AllSizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-inset--allsizes)

```tsx
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['compact', 'default', 'relaxed'] as const).map((size) => (
        <div key={size} className="bg-recessed rounded-control">
          <Inset size={size}>
            <div className="bg-surface border border-dashed border-line-strong rounded-control p-2 text-center text-label-sm text-muted">
              size="{size}"
            </div>
          </Inset>
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-inset--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:36', cells: I_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 400, height: 432 }}>
      {I_CELLS.map(c => {
        const size = /compact/.test(c.variant) ? 'compact' as const : /relaxed/.test(c.variant) ? 'relaxed' as const : 'default' as const;
        return (
          <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <div className="h-full bg-elevated rounded-control border border-dashed border-line-strong overflow-hidden">
              <Inset size={size}>
                <InsetPill />
              </Inset>
            </div>
          </div>
        );
      })}
    </div>
  ),
};
```

---

## ListPanel

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-listpanel--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=809-124 |
| Source | `components/layout/ListPanel.tsx` |
| Story file | `components/layout/ListPanel.stories.tsx` |

### Description

Opinionated left-panel composition for master-detail layouts.
Stacks a fixed header + optional toolbar above a scrollable list body.
@example
<ListPanel
  header={<PanelHeader title="Requests" actions={<Button size="xs">Add</Button>} />}
  toolbar={<SubToolbar left={…} right={…} />}
>
  {rows}
</ListPanel>

### Import

```tsx
import { ListPanel } from './components/layout/ListPanel';
```

### Props

```ts
export interface ListPanelProps {
  /** Fixed header (e.g. PanelHeader). Rendered above the toolbar and list. */
  header?: React.ReactNode;
  /** Optional toolbar slot — search, filters, sort (rendered below header, above list) */
  toolbar?: React.ReactNode;
  /** Scrollable list content */
  children: React.ReactNode;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-listpanel--default)

```tsx
export const Default: Story = {
  render: () => (
    <div style={{ height: 480, width: 320 }}>
      <ListPanel
        header={<PanelHeader title="Requests" subtitle="30 items" actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>} />}
      >
        {mockRows}
      </ListPanel>
    </div>
  ),
};
```

#### `WithToolbar`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-listpanel--withtoolbar)

```tsx
export const WithToolbar: Story = {
  render: () => (
    <div style={{ height: 480, width: 320 }}>
      <ListPanel
        header={<PanelHeader title="Requests" subtitle="30 items" />}
        toolbar={
          <div className="px-panel-compact py-2 text-label-sm text-muted">
            Search / filter toolbar
          </div>
        }
      >
        {mockRows}
      </ListPanel>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-listpanel--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:37', cells: LP_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 760, height: 560 }}>
      {LP_CELLS.map(c => {
        const hasToolbar = c.variant === 'HasToolbar=true';
        return (
          <div
            key={c.variant}
            className="absolute border border-line rounded-control overflow-hidden bg-elevated"
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          >
            <ListPanel
              header={
                <PanelHeader
                  title="Panel title"
                  subtitle="12 items"
                  actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>}
                />
              }
              toolbar={hasToolbar ? (
                <div className="flex h-9 items-center border-b border-line bg-surface px-3 text-body-sm text-muted">
                  Search / filter toolbar
                </div>
              ) : undefined}
            >
              <LpRows count={hasToolbar ? 12 : 13} selectFirst={!hasToolbar} />
            </ListPanel>
          </div>
        );
      })}
    </div>
  ),
};
```

---

## MasterDetailLayout

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-masterdetaillayout--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=818-218 |
| Source | `components/layout/MasterDetailLayout.tsx` |
| Story file | `components/layout/MasterDetailLayout.stories.tsx` |

### Import

```tsx
import { MasterDetailLayout } from './components/layout/MasterDetailLayout';
```

### Props

```ts
export interface MasterDetailLayoutProps {
  /** Left list/navigation panel — always present */
  list: React.ReactNode;
  /** Main content/detail panel — always present */
  detail: React.ReactNode;
  /** Additional closeable panels added to the right */
  rightPanels?: AdditivePanel[];
  /** Called when a right panel's close button is clicked */
  onClosePanel?: (id: string) => void;
  /** Default width % of list panel. Default: 22 */
  listDefaultSize?: number;
  /** Minimum width % of list panel. Default: 15 */
  listMinSize?: number;
  /** Default width % of detail panel. Default: remainder after list */
  detailDefaultSize?: number;
  /** autoSaveId for persisting panel widths in localStorage */
  autoSaveId?: string;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-masterdetaillayout--default)

```tsx
export const Default: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [selectedId, setSelectedId] = useState('1');
    return (
      <div className="h-screen">
        <MasterDetailLayout
          autoSaveId="master-detail-default"
          list={<MockList selectedId={selectedId} onSelect={setSelectedId} />}
          detail={<MockDetail selectedId={selectedId} />}
        />
      </div>
    );
  },
};
```

#### `WithAdditivePanel`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-masterdetaillayout--withadditivepanel)

```tsx
export const WithAdditivePanel: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [selectedId, setSelectedId] = useState('2');
    const [inspectorOpen, setInspectorOpen] = useState(true);

    const rightPanels: AdditivePanel[] = inspectorOpen
      ? [{ id: 'inspector', title: 'Inspector', content: <MockInspector />, defaultSize: 25, minSize: 15 }]
      : [];

    return (
      <div className="h-screen">
        {!inspectorOpen && (
          <div className="absolute top-3 right-3 z-10">
            <button
              type="button"
              onClick={() => setInspectorOpen(true)}
              className="text-label-sm px-3 py-1.5 rounded-control bg-action-primary text-on-accent font-medium shadow"
            >
              Open Inspector
            </button>
          </div>
        )}
        <MasterDetailLayout
          autoSaveId="master-detail-additive"
          list={<MockList selectedId={selectedId} onSelect={setSelectedId} />}
          detail={<MockDetail selectedId={selectedId} />}
          rightPanels={rightPanels}
          onClosePanel={() => setInspectorOpen(false)}
        />
      </div>
    );
  },
};
```

#### `WithMultiplePanels`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-masterdetaillayout--withmultiplepanels)

```tsx
export const WithMultiplePanels: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [selectedId, setSelectedId] = useState('3');
    const [openPanels, setOpenPanels] = useState<string[]>(['inspector', 'history']);

    const closePanel = (id: string) => setOpenPanels((prev) => prev.filter((p) => p !== id));

    const allPanels: AdditivePanel[] = [
      { id: 'inspector', title: 'Inspector', content: <MockInspector />, defaultSize: 22, minSize: 15 },
      { id: 'history', title: 'History', content: <MockHistory />, defaultSize: 22, minSize: 15 },
    ];

    const rightPanels = allPanels.filter((p) => openPanels.includes(p.id));

    const closedPanels = allPanels.filter((p) => !openPanels.includes(p.id));

    return (
      <div className="h-screen">
        {closedPanels.length > 0 && (
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            {closedPanels.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setOpenPanels((prev) => [...prev, p.id])}
                className="text-label-sm px-3 py-1.5 rounded-control bg-action-primary text-on-accent font-medium shadow capitalize"
              >
                Open {p.title}
              </button>
            ))}
          </div>
        )}
        <MasterDetailLayout
          autoSaveId="master-detail-multi"
          list={<MockList selectedId={selectedId} onSelect={setSelectedId} />}
          detail={<MockDetail selectedId={selectedId} />}
          rightPanels={rightPanels}
          onClosePanel={closePanel}
        />
      </div>
    );
  },
};
```

---

## Panel

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-panel--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=800-26 |
| Source | `components/layout/Panel.tsx` |
| Story file | `components/layout/Panel.stories.tsx` |

### Import

```tsx
import { Panel } from './components/layout/Panel';
```

### Props

```ts
export type PanelProps = Omit<RPPanelProps, 'children'> & {
  children?: ReactNode;
  className?: string;
  closeable?: boolean;
  onClose?: () => void;
  title?: string;
};
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panel--default)

```tsx
export const Default: Story = {
  args: {
    title: 'Layout/Panel',
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-2">
        <p className="text-body-sm text-primary">This is the default panel with a title and some content.</p>
        <p className="text-body-sm text-secondary">
          Panels can contain any React children. They sit inside a PanelGroup and can be resized by dragging the handle.
        </p>
      </div>
    ),
  },
};
```

#### `NoTitle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panel--notitle)

```tsx
export const NoTitle: Story = {
  name: 'No Title',
  args: {
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-2">
        <p className="text-body-sm text-primary">This panel has no title prop set.</p>
        <p className="text-body-sm text-secondary">
          When neither a title nor closeable is provided the header is omitted entirely.
        </p>
      </div>
    ),
  },
};
```

#### `Closeable`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panel--closeable)

```tsx
export const Closeable: Story = {
  args: {
    title: 'Closeable Panel',
    closeable: true,
    onClose: () => console.log('Panel closed'),
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-2">
        <p className="text-body-sm text-primary">This panel has a close button in its header.</p>
        <p className="text-body-sm text-secondary">
          Click the &times; icon in the top-right corner. In this story it logs to the console.
        </p>
      </div>
    ),
  },
};
```

#### `TallContent`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panel--tallcontent)

```tsx
export const TallContent: Story = {
  name: 'Tall Content (Scroll)',
  args: {
    title: 'Scrollable Panel',
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-3">
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} className="text-body-sm text-secondary">
            Line {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
      </div>
    ),
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panel--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:39', cells: P_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1432, height: 360 }}>
      {P_CELLS.map(c => {
        const hasTitle = /Title/.test(c.variant);
        const hasClose = /Close/.test(c.variant);
        return (
          <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <PanelCell title={hasTitle ? 'Panel Title' : undefined} closeable={hasClose} />
          </div>
        );
      })}
    </div>
  ),
};
```

---

## PanelGroup

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-panelgroup--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=806-48 |
| Source | `components/layout/PanelGroup.tsx` |
| Story file | `components/layout/PanelGroup.stories.tsx` |

### Import

```tsx
import { PanelGroup } from './components/layout/PanelGroup';
```

### Props

```ts
export type PanelGroupProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  /** Orientation of the panel group. Defaults to `horizontal` (panels side-by-side). */
  direction?: 'horizontal' | 'vertical';
};
```

### Variants

#### `Horizontal`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelgroup--horizontal)

```tsx
export const Horizontal: Story = {
  name: 'Horizontal (Two Panels)',
  render: (args) => (
    <PanelGroup {...args} id="horizontal-two">
      <Panel defaultSize={50} title="Left Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Left content</p>
          <p className="text-body-sm text-secondary">
            Drag the handle to resize this panel relative to the one on the right.
          </p>
        </div>
      </Panel>
      <ResizeHandle />
      <Panel defaultSize={50} title="Right Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Right content</p>
          <p className="text-body-sm text-secondary">
            Both panels share the available width and can be resized freely.
          </p>
        </div>
      </Panel>
    </PanelGroup>
  ),
};
```

#### `Vertical`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelgroup--vertical)

```tsx
export const Vertical: Story = {
  name: 'Vertical (Nested Stack)',
  render: (args) => (
    <PanelGroup {...args} id="vertical-outer" className="flex-col">
      <Panel defaultSize={50} title="Top Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Top content</p>
          <p className="text-body-sm text-secondary">
            A vertical layout is achieved by overriding the flex direction via className.
          </p>
        </div>
      </Panel>
      <ResizeHandle className="h-px w-full" />
      <Panel defaultSize={50} title="Bottom Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Bottom content</p>
          <p className="text-body-sm text-secondary">
            Drag the horizontal divider to redistribute space between the two panels.
          </p>
        </div>
      </Panel>
    </PanelGroup>
  ),
};
```

#### `ThreePanels`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelgroup--threepanels)

```tsx
export const ThreePanels: Story = {
  name: 'Three Panels',
  render: (args) => (
    <PanelGroup {...args} id="three-panels">
      <Panel defaultSize={25} minSize={15} title="Navigator">
        <div className="p-3 space-y-1">
          {['Overview', 'Assets', 'Logs', 'Settings'].map((item) => (
            <div
              key={item}
              className="rounded-control px-2 py-1.5 text-body-sm text-secondary hover:bg-surface-raised cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </Panel>
      <ResizeHandle />
      <Panel defaultSize={50} minSize={25} title="Main Content">
        <div className="p-4 space-y-3">
          <p className="text-body-sm text-primary font-medium">Primary workspace</p>
          <p className="text-body-sm text-secondary">
            This is the largest panel, occupying half the available space by default.
          </p>
          <div className="rounded-control bg-surface-raised h-32 flex items-center justify-center">
            <span className="text-label-sm text-muted">Content area</span>
          </div>
        </div>
      </Panel>
      <ResizeHandle />
      <Panel defaultSize={25} minSize={15} title="Inspector">
        <div className="p-3 space-y-3">
          <div>
            <p className="text-label-sm font-semibold text-muted uppercase tracking-wider mb-1">Properties</p>
            {['Width', 'Height', 'Opacity', 'Color'].map((prop) => (
              <div key={prop} className="flex justify-between py-1 border-b border-line last:border-0">
                <span className="text-label-sm text-secondary">{prop}</span>
                <span className="text-label-sm text-muted">—</span>
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </PanelGroup>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelgroup--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:40', cells: PG_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 1240 }}>
      {PG_CELLS.map(c => (
        <div key={c.variant} className="absolute border border-line rounded-control overflow-hidden bg-elevated" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          {c.variant === 'Layout=HorizontalTwo' && (
            <PanelGroup direction="horizontal">
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
            </PanelGroup>
          )}
          {c.variant === 'Layout=HorizontalThree' && (
            <PanelGroup direction="horizontal">
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
            </PanelGroup>
          )}
          {c.variant === 'Layout=VerticalTwo' && (
            <PanelGroup direction="vertical">
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
            </PanelGroup>
          )}
        </div>
      ))}
    </div>
  ),
};
```

---

## PanelHeader

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-panelheader--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=796-44 |
| Source | `components/layout/PanelHeader.tsx` |
| Story file | `components/layout/PanelHeader.stories.tsx` |

### Description

Standardized panel title bar.
Provides consistent heading + optional actions slot across all panels.
@example
<PanelHeader title="Documents" actions={<Button size="xs">Add</Button>} />
<PanelHeader title="Notes" subtitle="3 items" size="compact" />

### Import

```tsx
import { PanelHeader } from './components/layout/PanelHeader';
```

### Props

```ts
export interface PanelHeaderProps {
  /** Primary panel title */
  title: string;
  /** Optional subtitle / description beneath the title */
  subtitle?: string;
  /** Slot for action buttons / icons on the trailing (right) side */
  actions?: React.ReactNode;
  /** Show a bottom border. Default: true */
  border?: boolean;
  /** Padding density */
  size?: 'compact' | 'default';
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelheader--default)

```tsx
export const Default: Story = {
  args: { title: 'Panel title' },
};
```

#### `WithSubtitle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelheader--withsubtitle)

```tsx
export const WithSubtitle: Story = {
  args: { title: 'Documents', subtitle: '12 items' },
};
```

#### `WithActions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelheader--withactions)

```tsx
export const WithActions: Story = {
  args: {
    title: 'Requests',
    subtitle: '24 items',
    actions: <Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>,
  },
};
```

#### `Compact`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelheader--compact)

```tsx
export const Compact: Story = {
  args: { title: 'Notes', subtitle: '3 items', size: 'compact' },
};
```

#### `NoBorder`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelheader--noborder)

```tsx
export const NoBorder: Story = {
  args: { title: 'Preview', border: false },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-panelheader--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:41', cells: PH_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 440, height: 360 }}>
      {PH_CELLS.map((c) => {
        const size = /Size=compact/.test(c.variant) ? 'compact' as const : 'default' as const;
        const border = /Border=true/.test(c.variant);
        return (
          <div key={c.variant} className="absolute bg-elevated rounded-control overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <PanelHeader
              title="Panel title"
              subtitle="12 items"
              size={size}
              border={border}
              actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>}
            />
          </div>
        );
      })}
    </div>
  ),
};
```

---

## ScrollArea

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-scrollarea--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=789-16 |
| Source | `components/layout/ScrollArea.tsx` |
| Story file | `components/layout/ScrollArea.stories.tsx` |

### Description

Scrollable content area with themed scrollbar.
Replaces raw `overflow-y-auto` usage throughout panels.
The scrollbar color is controlled by `--color-surface-canvas-300` so it
adapts to light/dark mode automatically.
@example
<ScrollArea className="flex-1">…long content…</ScrollArea>
<ScrollArea axis="x">…wide table…</ScrollArea>

### Import

```tsx
import { ScrollArea } from './components/layout/ScrollArea';
```

### Props

```ts
export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which axis to make scrollable. Default: 'y' */
  axis?: 'y' | 'x' | 'both';
}
```

### Variants

#### `VerticalScroll`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-scrollarea--verticalscroll)

```tsx
export const VerticalScroll: Story = {
  render: () => (
    <div className="bg-surface border border-line rounded-control" style={{ height: 200 }}>
      <ScrollArea axis="y" className="h-full p-panel-compact">
        {loremLines}
      </ScrollArea>
    </div>
  ),
};
```

#### `HorizontalScroll`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-scrollarea--horizontalscroll)

```tsx
export const HorizontalScroll: Story = {
  render: () => (
    <div className="bg-surface border border-line rounded-control" style={{ width: 300 }}>
      <ScrollArea axis="x" className="p-panel-compact">
        <div className="flex gap-3" style={{ width: 800 }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="shrink-0 w-24 bg-recessed border border-line rounded-control p-2 text-center text-label-sm text-muted">
              Col {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-scrollarea--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:43', cells: SA_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 400, height: 760 }}>
      {SA_CELLS.map(c => {
        const axis = c.variant.replace('Axis=', '') as 'y' | 'x' | 'both';
        return (
          <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <ScrollArea axis={axis} className="h-full w-full border border-line rounded-control bg-elevated">
              <ScrollPlaceholder axis={axis} />
            </ScrollArea>
          </div>
        );
      })}
    </div>
  ),
};
```

---

## Stack

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-stack--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=781-50 |
| Source | `components/layout/Stack.tsx` |
| Story file | `components/layout/Stack.stories.tsx` |

### Import

```tsx
import { Stack } from './components/layout/Stack';
```

### Props

```ts
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col';
  gap?: 1 | 2 | 3 | 4 | 6 | 8;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
}
```

### Variants

#### `Vertical`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--vertical)

```tsx
export const Vertical: Story = {
  args: { direction: 'col', gap: 4, children: [
    <div key="a" className="bg-surface p-3 rounded-control">Item 1</div>,
    <div key="b" className="bg-surface p-3 rounded-control">Item 2</div>,
    <div key="c" className="bg-surface p-3 rounded-control">Item 3</div>,
  ]},
};
```

#### `Horizontal`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--horizontal)

```tsx
export const Horizontal: Story = {
  args: { direction: 'row', gap: 4, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `GapOne`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--gapone)

```tsx
export const GapOne: Story = {
  args: { direction: 'col', gap: 1, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `GapTwo`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--gaptwo)

```tsx
export const GapTwo: Story = {
  args: { direction: 'col', gap: 2, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `GapThree`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--gapthree)

```tsx
export const GapThree: Story = {
  args: { direction: 'col', gap: 3, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `GapSix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--gapsix)

```tsx
export const GapSix: Story = {
  args: { direction: 'col', gap: 6, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `GapEight`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--gapeight)

```tsx
export const GapEight: Story = {
  args: { direction: 'col', gap: 8, children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `AlignStart`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--alignstart)

```tsx
export const AlignStart: Story = {
  args: { direction: 'row', gap: 4, align: 'start', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};
```

#### `AlignCenter`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--aligncenter)

```tsx
export const AlignCenter: Story = {
  args: { direction: 'row', gap: 4, align: 'center', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};
```

#### `AlignEnd`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--alignend)

```tsx
export const AlignEnd: Story = {
  args: { direction: 'row', gap: 4, align: 'end', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};
```

#### `AlignStretch`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--alignstretch)

```tsx
export const AlignStretch: Story = {
  args: { direction: 'row', gap: 4, align: 'stretch', children: [
    item('Short'),
    <div key="tall" className="bg-surface border border-line rounded-control p-3 text-label-sm" style={{ height: 80 }}>Tall</div>,
    item('Short'),
  ]},
};
```

#### `JustifyStart`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--justifystart)

```tsx
export const JustifyStart: Story = {
  args: { direction: 'row', gap: 4, justify: 'start', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `JustifyCenter`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--justifycenter)

```tsx
export const JustifyCenter: Story = {
  args: { direction: 'row', gap: 4, justify: 'center', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `JustifyEnd`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--justifyend)

```tsx
export const JustifyEnd: Story = {
  args: { direction: 'row', gap: 4, justify: 'end', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `JustifyBetween`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--justifybetween)

```tsx
export const JustifyBetween: Story = {
  args: { direction: 'row', gap: 4, justify: 'between', children: ['Item 1', 'Item 2', 'Item 3'].map(item) },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-stack--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:44', cells: S_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 560, height: 460 }}>
      {S_CELLS.map(c => {
        const direction = /col/.test(c.variant) ? 'col' as const : 'row' as const;
        return (
          <div key={c.variant} className="absolute border border-line rounded-control bg-elevated p-3 overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <Stack direction={direction} gap={4} className={direction === 'row' ? 'h-full' : undefined}>
              {[0, 1, 2].map((i) => <StackPill key={i} direction={direction} />)}
            </Stack>
          </div>
        );
      })}
    </div>
  ),
};
```

---

## ThreeColumnLayout

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/layout-threecolumnlayout--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=823-210 |
| Source | `components/layout/ThreeColumnLayout.tsx` |
| Story file | `components/layout/ThreeColumnLayout.stories.tsx` |

### Import

```tsx
import { ThreeColumnLayout } from './components/layout/ThreeColumnLayout';
```

### Props

```ts
export interface ThreeColumnLayoutProps {
  /** Narrow left sidebar — always present */
  sidebar: ReactNode;
  /** Center content — always present */
  content: ReactNode;
  /** Right panel content — shown when rightPanelOpen=true */
  rightPanel?: ReactNode;
  /** Title shown in right panel header */
  rightPanelTitle?: string;
  /** Controls whether right panel is visible */
  rightPanelOpen?: boolean;
  /** Called when right panel close button clicked */
  onCloseRightPanel?: () => void;
  /** Default width % of sidebar. Default: 18 */
  sidebarDefaultSize?: number;
  /** Min width % of sidebar. Default: 12 */
  sidebarMinSize?: number;
  /** Allow the sidebar to collapse to a narrow icon-only rail when toggled. */
  sidebarCollapsible?: boolean;
  /** Width % when sidebar is collapsed. Default: 4 (about ~50px on a 1280px viewport) */
  sidebarCollapsedSize?: number;
  /** Initial collapsed state (uncontrolled). */
  sidebarDefaultCollapsed?: boolean;
  /** Controlled collapsed state. Overrides sidebarDefaultCollapsed when provided. */
  sidebarCollapsed?: boolean;
  /** Called when the sidebar's collapsed state changes. */
  onSidebarCollapsedChange?: (collapsed: boolean) => void;
  /** Default width % of right panel when open. Default: 35 */
  rightPanelDefaultSize?: number;
  /** Min width % of right panel. Default: 20 */
  rightPanelMinSize?: number;
  /**
   * Where to render the additive panel relative to the content slot.
   * - `'after-content'` (default): sidebar | content | panel — panel sits to the far right.
   * - `'before-content'`: sidebar | panel | content — panel sits between the sidebar and content (inspector-style).
   */
  rightPanelPosition?: 'before-content' | 'after-content';
  /** autoSaveId for localStorage persistence */
  autoSaveId?: string;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-threecolumnlayout--default)

```tsx
export const Default: Story = {
  args: {
    sidebar: <SidebarContent />,
    content: <MainContent />,
    rightPanelOpen: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
};
```

#### `WithRightPanel`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-threecolumnlayout--withrightpanel)

```tsx
export const WithRightPanel: Story = {
  args: {
    sidebar: <SidebarContent />,
    content: <MainContent />,
    rightPanel: <RightPanelContent />,
    rightPanelTitle: 'Document Details',
    rightPanelOpen: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};
```

#### `Interactive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-threecolumnlayout--interactive)

```tsx
export const Interactive: Story = {
  render: () => <InteractiveStory />,
  parameters: {
    layout: 'fullscreen',
  },
};
```

#### `AnalysisWorkflow`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-threecolumnlayout--analysisworkflow)

```tsx
export const AnalysisWorkflow: Story = {
  render: () => <AnalysisWorkflowStory />,
  parameters: { layout: 'fullscreen' },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/layout-threecolumnlayout--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:45', cells: TCL_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 3968, height: 784 }}>
      {TCL_CELLS.map(c => {
        const withRight    = c.variant === 'State=WithRightPanel';
        const isAnalysis   = c.variant === 'State=AnalysisWorkflow';
        const hasRightPanel = withRight || isAnalysis;
        return (
          <div key={c.variant} className="absolute border border-line rounded-control overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <ThreeColumnLayout
              sidebar={isAnalysis ? <TclIconRail /> : <TclSidebar />}
              content={<TclMain withRightPanel={hasRightPanel} />}
              rightPanel={hasRightPanel ? <TclRight /> : undefined}
              rightPanelTitle={isAnalysis ? 'Support settings' : 'Document Details'}
              rightPanelOpen={hasRightPanel}
              rightPanelPosition={isAnalysis ? 'after-content' : 'before-content'}
              rightPanelDefaultSize={isAnalysis ? 34 : 26}
              rightPanelMinSize={isAnalysis ? 28 : 20}
              sidebarDefaultSize={isAnalysis ? 5 : 18}
              sidebarMinSize={isAnalysis ? 5 : 12}
            />
          </div>
        );
      })}
    </div>
  ),
};
```

---


# Navigation

## Breadcrumb

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/navigation-breadcrumb--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=838-26 |
| Source | `components/navigation/Breadcrumb.tsx` |
| Story file | `components/navigation/Breadcrumb.stories.tsx` |

### Description

Breadcrumb — hierarchical navigation. Every segment composes from the
`Chip` primitive (Composition rule, Conventions §Composition):
- Ancestor segments (with `href`): `<Chip>` in the default state with
  transparent bg/border so it reads as a plain text link. Hover surfaces
  the link color + underline. Clicking navigates to `href`.
- Current segment (last item / no `href`): `<Chip selected="single">` —
  blue pill (`row-selected` bg, `status-info-border` border,
  `status-info-fg` text). Marked `aria-current="page"`, non-interactive.
Mirrors the Figma Breadcrumb canonical: every segment is a Chip instance.

### Import

```tsx
import { Breadcrumb } from './components/navigation/Breadcrumb';
```

### Props

```ts
export interface BreadcrumbProps { items: BreadcrumbItem[]; className?: string; }
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-breadcrumb--default)

```tsx
export const Default: Story = {
  args: { items: [{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Sword' }] },
};
```

#### `SingleItem`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-breadcrumb--singleitem)

```tsx
export const SingleItem: Story = {
  args: { items: [{ label: 'Dashboard' }] },
};
```

#### `AllLinked`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-breadcrumb--alllinked)

```tsx
export const AllLinked: Story = {
  args: {
    items: [
      { label: 'Home',        href: '/' },
      { label: 'Clients',     href: '/clients' },
      { label: 'Acme Corp',   href: '/clients/acme' },
      { label: 'Engagements', href: '/clients/acme/engagements' },
    ],
  },
};
```

#### `LongLabels`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-breadcrumb--longlabels)

```tsx
export const LongLabels: Story = {
  args: {
    items: [
      { label: 'Home',                                                         href: '/' },
      { label: 'Global Manufacturing Industries & Partners',                   href: '/clients/gmi' },
      { label: 'Annual Financial Statement Review & Compliance Audit FY 2024', href: '/clients/gmi/engagements/audit-2024' },
      { label: 'Q4 Payroll Tax Reconciliation Report — Final Submission' },
    ],
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-breadcrumb--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:47', cells: BC_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1380, height: 150 }}>
      {BC_CELLS.map((c) => (
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
```

---

## NavItem

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/navigation-navitem--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1054-294 |
| Source | `components/navigation/NavItem.tsx` |
| Story file | `components/navigation/NavItem.stories.tsx` |

### Import

```tsx
import { NavItem } from './components/navigation/NavItem';
```

### Props

```ts
export type NavItemProps =
  | ItemRowProps
  | GroupRowProps
  | SectionHeadingProps
  | WaterfallRowProps;
```

### Variants

#### `Item`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--item)

```tsx
export const Item: Story = {
  render: () => (
    <NavItem icon={Briefcase01Icon} title="Engagements" onSelect={() => console.log('item selected')} />
  ),
};
```

#### `ItemActive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--itemactive)

```tsx
export const ItemActive: Story = {
  render: () => (
    <NavItem icon={UserCircleIcon} title="Clients" active onSelect={() => console.log('active item clicked')} />
  ),
};
```

#### `ItemDisabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--itemdisabled)

```tsx
export const ItemDisabled: Story = {
  render: () => (
    <NavItem icon={Briefcase01Icon} title="Engagements (disabled)" disabled onSelect={() => console.log('should NOT fire')} />
  ),
};
```

#### `ItemNoIcon`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--itemnoicon)

```tsx
export const ItemNoIcon: Story = {
  name: 'Item — ShowIcon off',
  render: () => (
    // showIcon={false} hides the leading icon entirely (label-only row).
    <NavItem icon={Briefcase01Icon} showIcon={false} title="No icon label" onSelect={() => {}} />
  ),
};
```

#### `ItemWithSlot`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--itemwithslot)

```tsx
export const ItemWithSlot: Story = {
  name: 'Item — Slot1 (CountBadge)',
  render: () => (
    // Slot1 = a numbered count chip. Slot2 omitted.
    <NavItem
      icon={Briefcase01Icon}
      title="Inbox"
      slot1={
        <span className="text-label-sm font-medium bg-status-error text-on-accent rounded-pill px-2 py-0.5">
          12
        </span>
      }
      onSelect={() => {}}
    />
  ),
};
```

#### `ItemWithTwoSlots`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--itemwithtwoslots)

```tsx
export const ItemWithTwoSlots: Story = {
  name: 'Item — Slot1 + Slot2 (Buttons)',
  render: () => (
    // Both slots = ghost icon-only buttons (matches Figma default Slot1/Slot2).
    <NavItem
      icon={Briefcase01Icon}
      title="Engagements"
      slot1={
        <button
          type="button"
          className="inline-flex items-center justify-center h-6 w-6 rounded-control text-secondary hover:bg-hover-overlay"
          aria-label="More"
        >
          <ChevronRightIcon size="sm" />
        </button>
      }
      slot2={
        <button
          type="button"
          className="inline-flex items-center justify-center h-6 w-6 rounded-control text-secondary hover:bg-hover-overlay"
          aria-label="Settings"
        >
          <ChevronRightIcon size="sm" />
        </button>
      }
      onSelect={() => {}}
    />
  ),
};
```

#### `ItemSidebarList`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--itemsidebarlist)

```tsx
export const ItemSidebarList: Story = {
  render: () => {
    const [active, setActive] = useState('clients');
    const items = [
      { id: 'firm',        label: 'My firm',             icon: Building01Icon },
      { id: 'team',        label: 'Team',                icon: Users01Icon },
      { id: 'clients',     label: 'Clients',             icon: UserCircleIcon },
      { id: 'engagements', label: 'Engagements',         icon: Briefcase01Icon },
      { id: 'sfs',         label: 'Secure File Sharing', icon: Send01Icon },
    ];
    return (
      <div className="flex flex-col gap-1">
        {items.map((it) => (
          <NavItem key={it.id} icon={it.icon} title={it.label} active={it.id === active} onSelect={() => setActive(it.id)} />
        ))}
      </div>
    );
  },
};
```

#### `ItemTopNavList`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--itemtopnavlist)

```tsx
export const ItemTopNavList: Story = {
  decorators: [
    (Story) => (
      <div className="dark bg-header-bg w-full p-3">
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [active, setActive] = useState('engagements');
    const items = [
      { id: 'firm',        label: 'My firm',             icon: Building01Icon },
      { id: 'team',        label: 'Team',                icon: Users01Icon },
      { id: 'clients',     label: 'Clients',             icon: UserCircleIcon },
      { id: 'engagements', label: 'Engagements',         icon: Briefcase01Icon },
      { id: 'sfs',         label: 'Secure File Sharing', icon: Send01Icon },
    ];
    return (
      <nav className="flex items-center gap-1">
        {items.map((it) => (
          <NavItem key={it.id} tone="topnav" icon={it.icon} title={it.label} active={it.id === active} onSelect={() => setActive(it.id)} />
        ))}
      </nav>
    );
  },
};
```

#### `GroupOutstanding`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--groupoutstanding)

```tsx
export const GroupOutstanding: Story = {
  render: () => (
    <NavItem type="group" status="outstanding" index={55} title="Please provide Trial Balance" onSelect={() => {}} />
  ),
};
```

#### `GroupActive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--groupactive)

```tsx
export const GroupActive: Story = {
  render: () => (
    <NavItem type="group" status="outstanding" index={55} title="Please provide Trial Balance" active onSelect={() => {}} />
  ),
};
```

#### `GroupDisabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--groupdisabled)

```tsx
export const GroupDisabled: Story = {
  render: () => (
    <NavItem type="group" status="outstanding" index={11} title="Cannot be selected" disabled onSelect={() => {}} />
  ),
};
```

#### `SectionHeadingExpanded`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--sectionheadingexpanded)

```tsx
export const SectionHeadingExpanded: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(true);
    return <NavItem type="section" title="Commissions Testing 2023" expanded={expanded} onToggle={() => setExpanded((v) => !v)} />;
  },
};
```

#### `SectionHeadingCollapsed`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--sectionheadingcollapsed)

```tsx
export const SectionHeadingCollapsed: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);
    return <NavItem type="section" title="Commissions Testing 2023" expanded={expanded} onToggle={() => setExpanded((v) => !v)} />;
  },
};
```

#### `WaterfallExpanded`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--waterfallexpanded)

```tsx
export const WaterfallExpanded: Story = {
  render: () => (
    <NavItem type="waterfall" icon={Briefcase01Icon} title="Engagements" defaultExpanded>
      <NavItem icon={UserCircleIcon} title="Acme Corp" />
      <NavItem icon={UserCircleIcon} title="Globex Industries" />
      <NavItem icon={UserCircleIcon} title="Initech" />
    </NavItem>
  ),
};
```

#### `WaterfallCollapsed`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--waterfallcollapsed)

```tsx
export const WaterfallCollapsed: Story = {
  render: () => (
    <NavItem type="waterfall" icon={Briefcase01Icon} title="Engagements" defaultExpanded={false}>
      <NavItem icon={UserCircleIcon} title="Acme Corp" />
    </NavItem>
  ),
};
```

#### `WaterfallNested`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--waterfallnested)

```tsx
export const WaterfallNested: Story = {
  render: () => (
    <NavItem type="waterfall" icon={Building01Icon} title="My firm" defaultExpanded>
      <NavItem type="waterfall" icon={Briefcase01Icon} title="Engagements" defaultExpanded>
        <NavItem icon={UserCircleIcon} title="Acme Corp" />
        <NavItem icon={UserCircleIcon} title="Globex Industries" active />
      </NavItem>
      <NavItem type="waterfall" icon={Users01Icon} title="Team" defaultExpanded={false}>
        <NavItem icon={UserCircleIcon} title="Hidden until expanded" />
      </NavItem>
    </NavItem>
  ),
};
```

#### `ReferenceReplica`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--referencereplica)

```tsx
export const ReferenceReplica: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(true);
    const [active, setActive] = useState(2);
    return (
      <div className="flex flex-col gap-1">
        <NavItem type="section" title="Commissions Testing 2023" expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
        {expanded &&
          REQUEST_GROUPS.map((row, i) => (
            <NavItem
              key={i}
              type="group"
              status={row.status}
              index={row.index}
              title={row.title}
              active={i === active}
              onSelect={() => setActive(i)}
            />
          ))}
      </div>
    );
  },
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--allstates)

```tsx
export const AllStates: Story = {
  decorators: [(Story) => <div data-theme="dark" className="bg-sidenav-surface p-6 w-full"><Story /></div>],
  render: () => (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-sidenav-fg-primary">Type=Item (Tone × State)</h3>
        <div className="grid items-center gap-x-3 gap-y-2 text-label-sm text-sidenav-fg-muted" style={{ gridTemplateColumns: '140px repeat(4, minmax(180px, 1fr))' }}>
          <span />
          {ITEM_STATES.map((s) => <span key={s} className="text-center">{s}</span>)}
          {ITEM_TONES.map((tone) => (
            <Fragment key={tone}>
              <span className="font-mono text-sidenav-fg-muted">Tone={tone}</span>
              {ITEM_STATES.map((state) => <div key={state}><ItemRow tone={tone} state={state} /></div>)}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-sidenav-fg-primary">Type=Group — Status @ Default + Outstanding states</h3>
        <div className="grid items-center gap-x-3 gap-y-2 text-label-sm text-sidenav-fg-muted" style={{ gridTemplateColumns: '160px repeat(4, minmax(220px, 1fr))' }}>
          <span />
          {GROUP_OUTSTANDING_STATES.map((s) => <span key={s} className="text-center">{s}</span>)}
          {/* Outstanding gets all 4 states */}
          <span className="font-mono text-sidenav-fg-muted">Status=outstanding</span>
          {GROUP_OUTSTANDING_STATES.map((state) => (
            <div key={state}>
              <NavItem
                type="group" status="outstanding" index={1} title="Group (outstanding)"
                active={state === 'Active'} disabled={state === 'Disabled'}
                forceHover={state === 'Hover'}
                onSelect={() => {}}
              />
            </div>
          ))}
          {/* Other statuses show Default only */}
          {GROUP_STATUSES.filter((s) => s !== 'outstanding').map((status, idx) => (
            <Fragment key={status}>
              <span className="font-mono text-sidenav-fg-muted">Status={status}</span>
              <div>
                <NavItem type="group" status={status} index={idx + 2} title={`Group (${status})`} onSelect={() => {}} />
              </div>
              <span className="text-sidenav-fg-muted text-center">—</span>
              <span className="text-sidenav-fg-muted text-center">—</span>
              <span className="text-sidenav-fg-muted text-center">—</span>
            </Fragment>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-sidenav-fg-primary">Type=Section (State)</h3>
        <div className="grid items-center gap-x-3 gap-y-2" style={{ gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))' }}>
          {SECTION_STATES.map((state) => (
            <div key={state} className="flex flex-col gap-2">
              <span className="font-mono text-label-sm text-sidenav-fg-muted">State={state}</span>
              <NavItem type="section" title="Section heading" expanded={state === 'Expanded'} onToggle={() => {}} />
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-navitem--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1020:2', cells: NI_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface min-w-fit p-12">{Story()}</div>
    ),
  ],
  render: () => (
    <div className="relative" style={{ width: 1180, height: 820 }}>
      {NI_CELLS.map((c) => {
        let content: React.ReactNode = null;
        if (c.variant.startsWith('WaterfallRow,')) {
          content = renderWaterfallRow(c.variant);
        } else if (c.variant.startsWith('NavItem/Waterfall,')) {
          content = renderWaterfallStack();
        } else {
          const parsed = parseVariant(c.variant);
          if (parsed) content = renderVariant(parsed);
        }
        return (
          <div
            key={c.variant}
            className="absolute"
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          >
            {content}
          </div>
        );
      })}
    </div>
  ),
};
```

---

## PageHeader

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/navigation-pageheader--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=844-133 |
| Source | `components/navigation/PageHeader.tsx` |
| Story file | `components/navigation/PageHeader.stories.tsx` |

### Import

```tsx
import { PageHeader } from './components/navigation/PageHeader';
```

### Props

```ts
export interface PageHeaderProps {
  /** Page title */
  title: string;
  /** Optional breadcrumb trail above the title */
  breadcrumb?: BreadcrumbItem[];
  /**
   * Right-side slot — pass arbitrary action content. Use this when you want
   * full control over the Actions row. Mutually exclusive with the per-slot
   * `action1` / `action2` / `action3` props.
   */
  actions?: React.ReactNode;
  /**
   * First action button slot (mirrors Figma `ShowButton1` BOOLEAN). Pass
   * `undefined` to hide. Use when you want togglable per-button visibility
   * matching the Figma PageHeader set's three independent slots.
   */
  action1?: React.ReactNode;
  /** Second action button slot — mirrors Figma `ShowButton2`. */
  action2?: React.ReactNode;
  /** Third action button slot — mirrors Figma `ShowButton3`. */
  action3?: React.ReactNode;
  /** Optional content below title row (e.g. tabs) */
  toolbar?: React.ReactNode;
  className?: string;
}
```

### Variants

#### `TitleOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pageheader--titleonly)

```tsx
export const TitleOnly: Story = {
  args: {
    title: 'Engagements',
  },
};
```

#### `WithActions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pageheader--withactions)

```tsx
export const WithActions: Story = {
  args: {
    title: 'Engagements',
    actions: <Actions />,
  },
};
```

#### `WithBreadcrumb`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pageheader--withbreadcrumb)

```tsx
export const WithBreadcrumb: Story = {
  args: {
    title: 'Q4 Tax Review',
    breadcrumb: [
      { label: 'Clients', href: '#' },
      { label: 'Acme Corp', href: '#' },
      { label: 'Q4 Tax Review' },
    ],
    actions: <Actions />,
  },
};
```

#### `WithTabs`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pageheader--withtabs)

```tsx
export const WithTabs: Story = {
  args: {
    title: 'Engagements',
    actions: <Actions />,
    toolbar: <PageTabs />,
  },
};
```

#### `WithBreadcrumbAndTabs`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pageheader--withbreadcrumbandtabs)

```tsx
export const WithBreadcrumbAndTabs: Story = {
  args: {
    title: 'Q4 Tax Review',
    breadcrumb: [
      { label: 'Clients', href: '#' },
      { label: 'Acme Corp', href: '#' },
      { label: 'Q4 Tax Review' },
    ],
    actions: <Actions />,
    toolbar: <PageTabs />,
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pageheader--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:48', cells: PH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1248, height: 561 }}>
      {PH_CELLS.map((c) => (
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
```

---

## Pagination

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/navigation-pagination--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=839-30 |
| Source | `components/navigation/Pagination.tsx` |
| Story file | `components/navigation/Pagination.stories.tsx` |

### Import

```tsx
import { Pagination } from './components/navigation/Pagination';
```

### Props

```ts
export interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pagination--default)

```tsx
export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} total={10} onChange={setPage} />;
  },
};
```

#### `FirstPage`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pagination--firstpage)

```tsx
export const FirstPage: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} total={10} onChange={setPage} />;
  },
};
```

#### `LastPage`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pagination--lastpage)

```tsx
export const LastPage: Story = {
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination page={page} total={10} onChange={setPage} />;
  },
};
```

#### `SinglePage`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pagination--singlepage)

```tsx
export const SinglePage: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} total={1} onChange={setPage} />;
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-pagination--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:49', cells: PG_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1365, height: 244 }}>
      {PG_CELLS.map((c) => (
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
```

---

## SideNav

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/navigation-sidenav--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1147-213 |
| Source | `components/navigation/Sidebar.tsx` |
| Story file | `components/navigation/Sidebar.stories.tsx` |

### Import

```tsx
import { SideNav } from './components/navigation/Sidebar';
```

### Props

```ts
export interface SidebarProps {
  theme?: 'dark' | 'light';
  width?: number | string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-sidenav--default)

```tsx
export const Default: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav />
      <div className="flex-1 p-4 text-secondary">
        Document area — Default story renders the canonical Light Mode SideNav definition.
      </div>
    </div>
  ),
};
```

#### `LightTheme`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-sidenav--lighttheme)

```tsx
export const LightTheme: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav theme="light" />
      <div className="flex-1 p-4 text-secondary">
        theme=&ldquo;light&rdquo; — explicit Light Mode definition. Same body grammar as Default.
      </div>
    </div>
  ),
};
```

#### `ProductionReplica`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-sidenav--productionreplica)

```tsx
export const ProductionReplica: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav theme="light" width={320} />
      <div className="flex-1 p-6 text-secondary">
        <div className="text-heading-md text-primary mb-2">Request detail</div>
        <p>ProductionReplica — full app shell with the canonical SideNav.</p>
      </div>
    </div>
  ),
};
```

#### `Minimal`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-sidenav--minimal)

```tsx
export const Minimal: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-sidenav--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:50', cells: SB_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 500, height: 1100 }}>
      {SB_CELLS.map((c) => (
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
```

---

## Tabs

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/navigation-tabs--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=520-9 |
| Source | `components/navigation/Tabs.tsx` |
| Story file | `components/navigation/Tabs.stories.tsx` |

### Import

```tsx
import { Tabs } from './components/navigation/Tabs';
```

### Props

```ts
export interface TabsProps {
  tabs: Tab[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-tabs--default)

```tsx
export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('tab1');
    return (
      <Tabs
        tabs={[{ label: 'Tab 1', value: 'tab1' }, { label: 'Tab 2', value: 'tab2' }, { label: 'Tab 3', value: 'tab3' }]}
        active={active}
        onChange={setActive}
      />
    );
  },
};
```

#### `WithBadgeLabel`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-tabs--withbadgelabel)

```tsx
export const WithBadgeLabel: Story = {
  render: () => {
    const [active, setActive] = useState('comments');
    return (
      <Tabs
        tabs={[
          {
            label: <span className="flex items-center gap-2">Comments <CountBadge>5</CountBadge></span>,
            value: 'comments',
          },
          {
            label: <span className="flex items-center gap-2">History <CountBadge>12</CountBadge></span>,
            value: 'history',
          },
          { label: 'Attachments', value: 'attachments' },
        ]}
        active={active}
        onChange={setActive}
      />
    );
  },
};
```

#### `ManyTabs`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-tabs--manytabs)

```tsx
export const ManyTabs: Story = {
  render: () => {
    const [active, setActive] = useState('overview');
    return (
      <Tabs
        tabs={[
          { label: 'Overview',    value: 'overview' },
          { label: 'Documents',   value: 'documents' },
          { label: 'Activity',    value: 'activity' },
          { label: 'Team',        value: 'team' },
          { label: 'Billing',     value: 'billing' },
          { label: 'Compliance',  value: 'compliance' },
          { label: 'Settings',    value: 'settings' },
        ]}
        active={active}
        onChange={setActive}
      />
    );
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-tabs--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:52', cells: TAB_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 360, height: 170 }}>
      {TAB_CELLS.map((c) => (
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
```

---

## TopNav

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/navigation-topnav--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=528-444 |
| Source | `components/navigation/TopNav.tsx` |
| Story file | `components/navigation/TopNav.stories.tsx` |

### Import

```tsx
import { TopNav } from './components/navigation/TopNav';
```

### Props

```ts
export interface TopNavProps {
  /** Logo / wordmark — rendered on the left */
  logo?: React.ReactNode;
  /** Primary navigation items */
  items?: TopNavItem[];
  /** Right-side slot — user avatar, notifications, etc. */
  rightSlot?: React.ReactNode;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-topnav--default)

```tsx
export const Default: Story = {
  render: () => <InteractiveNav />,
};
```

#### `EngagementsActive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-topnav--engagementsactive)

```tsx
export const EngagementsActive: Story = {
  render: () => <InteractiveNav initialActive="engagements" />,
};
```

#### `ClientsActive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-topnav--clientsactive)

```tsx
export const ClientsActive: Story = {
  render: () => <InteractiveNav initialActive="clients" />,
};
```

#### `LogoOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-topnav--logoonly)

```tsx
export const LogoOnly: Story = {
  args: { logo: <SuralinkLogo /> },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/navigation-topnav--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:53', cells: TN_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1280, height: 80 }}>
      {TN_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderCell()}
        </div>
      ))}
    </div>
  ),
};
```

---


# Overlay

## Accordion

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-accordion--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=388-59 |
| Source | `components/data-display/Accordion.tsx` |
| Story file | `components/data-display/Accordion.stories.tsx` |

### Import

```tsx
import { Accordion } from './components/data-display/Accordion';
```

### Props

```ts
export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  size?: AccordionSize;
  /**
   * Header actions slot — content rendered between the title and the chevron.
   * Use this for any controls that belong on the right side of the header:
   * buttons, dropdowns, inputs, avatar stacks, badges, or any combination
   * (wrap multiple in a fragment).
   */
  extra?: React.ReactNode;
  /** Hide the trailing chevron icon. Mirrors Figma's `Chevron=Hide` variant. */
  showChevron?: boolean;
  /** Pin the header with sticky positioning (top-0) while content scrolls */
  sticky?: boolean;
  /** Override the top offset for sticky positioning (default: 'top-0') */
  stickyTop?: string;
  className?: string;
  /**
   * Use bg-surface (light gray) for the header instead of the default bg-canvas (near-white).
   * Use this when the accordion sits inside a surface-colored panel so the header
   * reads as a distinct section divider rather than blending with the page background.
   */
  surface?: boolean;
}
```

### Variants

#### `SizeMd`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--sizemd)

```tsx
export const SizeMd: Story = {
  render: () => (
    <AccordionItem title="General / Planning" size="md" defaultOpen={true}>
      <div className="px-3 py-3 text-body-sm text-secondary">
        32px header — the default size.
      </div>
    </AccordionItem>
  ),
};
```

#### `SizeSm`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--sizesm)

```tsx
export const SizeSm: Story = {
  render: () => (
    <AccordionItem title="General / Planning" size="sm" defaultOpen={true}>
      <div className="px-2 py-2 text-label-sm text-secondary">
        24px header — compact size.
      </div>
    </AccordionItem>
  ),
};
```

#### `SizeLg`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--sizelg)

```tsx
export const SizeLg: Story = {
  render: () => (
    <AccordionItem title="Assignments" size="lg" defaultOpen={true}>
      <div className="px-4 py-3 text-body-sm text-secondary">
        40px header — used for primary section headers (e.g. request detail sections).
      </div>
    </AccordionItem>
  ),
};
```

#### `BothSizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--bothsizes)

```tsx
export const BothSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-label-sm text-muted px-4 pb-2">lg — 40px · primary section headers</p>
        <AccordionItem title="Assignments" size="lg" defaultOpen={true}>
          <div className="px-4 py-3 text-body-sm text-secondary">Content area.</div>
        </AccordionItem>
      </div>
      <div>
        <p className="text-label-sm text-muted px-3 pb-2">md — 32px · default</p>
        <AccordionItem title="General / Planning" size="md" defaultOpen={true}>
          <div className="px-3 py-3 text-body-sm text-secondary">Content area.</div>
        </AccordionItem>
      </div>
      <div>
        <p className="text-label-sm text-muted px-3 pb-2">sm — 24px · compact</p>
        <AccordionItem title="General / Planning" size="sm" defaultOpen={true}>
          <div className="px-2 py-2 text-label-sm text-secondary">Content area.</div>
        </AccordionItem>
      </div>
    </div>
  ),
};
```

#### `WithBadge`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--withbadge)

```tsx
export const WithBadge: Story = {
  render: () => (
    <AccordionItem
      title="Client attached files"
      size="lg"
      extra={<Badge variant="default">4 files</Badge>}
      defaultOpen={false}
    >
      <div className="px-4 py-3 text-body-sm text-secondary">File list content.</div>
    </AccordionItem>
  ),
};
```

#### `WithAvatars`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--withavatars)

```tsx
export const WithAvatars: Story = {
  render: () => (
    <AccordionItem
      title="Assignments"
      size="lg"
      extra={
        <div className="flex items-center gap-1">
          <Avatar variant="client" size="xs" initials="GS" />
          <Avatar variant="client" size="xs" initials="MK" />
          <Avatar variant="firm"   size="xs" initials="AJ" />
        </div>
      }
      defaultOpen={false}
    >
      <div className="px-4 py-3 text-body-sm text-secondary">Assignee list content.</div>
    </AccordionItem>
  ),
};
```

#### `WithRequestRows`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--withrequestrows)

```tsx
export const WithRequestRows: Story = {
  render: () => (
    <div className="h-[480px] overflow-y-auto border border-line rounded-card">  // token-lint-skip: showcase fixed dims for screenshot stability
    <Accordion>
      <AccordionItem title="General / Planning" defaultOpen={true} sticky>
        <RequestRow
          orderNumber={1}
          title="Engagement Letter"
          status="accepted"
          meta={[
            { type: 'due-date', date: '04/01/2025' },
            { type: 'comments', count: 2 },
            { type: 'documents', count: 1 },
          ]}
        />
        <RequestRow
          orderNumber={2}
          title="Organizational Chart"
          status="outstanding"
          meta={[
            { type: 'due-date', date: '04/08/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 0 },
          ]}
        />
        <RequestRow
          orderNumber={3}
          title="Prior Year Audit Report"
          status="fulfilled"
          meta={[
            { type: 'due-date', date: '03/28/2025' },
            { type: 'comments', count: 1 },
            { type: 'documents', count: 4 },
          ]}
        />
      </AccordionItem>

      <AccordionItem title="Financial Controls" defaultOpen={false} sticky>
        <RequestRow
          orderNumber={4}
          title="General Ledger Trial Balance"
          status="returned"
          meta={[
            { type: 'due-date', date: '04/15/2025' },
            { type: 'comments', count: 3 },
            { type: 'documents', count: 2 },
          ]}
        />
        <RequestRow
          orderNumber={5}
          title="Bank Reconciliation Statements"
          status="outstanding"
          meta={[
            { type: 'due-date', date: '04/18/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 0 },
          ]}
        />
      </AccordionItem>

      <AccordionItem title="HR Compliance" defaultOpen={false} sticky>
        <RequestRow
          orderNumber={6}
          title="Payroll Register — Q1"
          status="accepted"
          meta={[
            { type: 'due-date', date: '04/10/2025' },
            { type: 'comments', count: 1 },
            { type: 'documents', count: 3 },
          ]}
        />
        <RequestRow
          orderNumber={7}
          title="Employee Benefit Plan Documentation"
          status="none"
          meta={[
            { type: 'due-date', date: '04/22/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 0 },
          ]}
        />
        <RequestRow
          orderNumber={8}
          title="I-9 Compliance Records"
          status="fulfilled"
          meta={[
            { type: 'due-date', date: '04/05/2025' },
            { type: 'comments', count: 0 },
            { type: 'documents', count: 2 },
          ]}
        />
      </AccordionItem>
    </Accordion>
    </div>
  ),
};
```

#### `MultipleItems`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--multipleitems)

```tsx
export const MultipleItems: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Introduction" defaultOpen={true}>
        <div className="px-3 py-3 text-body-sm text-secondary">
          Each accordion item manages its own open/closed state independently.
          Multiple panels can be expanded at the same time — there is no
          exclusive selection behavior.
        </div>
      </AccordionItem>

      <AccordionItem title="Usage Guidelines" defaultOpen={true}>
        <div className="px-3 py-3 text-body-sm text-secondary">
          Use the <code className="text-primary">Accordion</code> wrapper to
          group multiple <code className="text-primary">AccordionItem</code>{' '}
          components. The wrapper adds dividers between items. You can also use{' '}
          <code className="text-primary">AccordionItem</code> in isolation
          without the wrapper.
        </div>
      </AccordionItem>

      <AccordionItem title="Accessibility" defaultOpen={false}>
        <div className="px-3 py-3 text-body-sm text-secondary">
          The header is a native <code className="text-primary">button</code>{' '}
          element with <code className="text-primary">aria-expanded</code>{' '}
          reflecting the current state. The panel is always present in the DOM
          for screen readers; only its visual height is animated via the CSS
          grid trick.
        </div>
      </AccordionItem>
    </Accordion>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-accordion--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:3', cells: ACCORDION_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1992, height: 606 }}>
      {ACCORDION_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <AccordionItem
            title="General / Planning"
            size={c.size}
            defaultOpen={c.open}
            showChevron={c.showChevron}
            extra={c.showAvatars ? AVATARS_SLOT : undefined}
          >
            {SAMPLE_CONTENT}
          </AccordionItem>
        </div>
      ))}
    </div>
  ),
};
```

---

## ActionMenu

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-actionmenu--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=579-419 |
| Source | `components/overlay/ActionMenu.tsx` |
| Story file | `components/overlay/ActionMenu.stories.tsx` |

### Import

```tsx
import { ActionMenu } from './components/overlay/ActionMenu';
```

### Props

```ts
export interface ActionMenuProps {
  groups: ActionMenuGroup[];
  size?: ActionMenuSize;
  className?: string;
}
```

```ts
export interface ActionMenuItemRowProps extends ActionMenuItem {
  size?: ActionMenuSize;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--default)

```tsx
export const Default: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Edit',      shortcut: '⌘E' },
          { icon: <Copy01Icon  size="sm" />, label: 'Duplicate' },
          { icon: <Share01Icon size="sm" />, label: 'Share',     shortcut: '⌘S' },
        ],
      },
      {
        items: [
          { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
        ],
      },
    ],
  },
};
```

#### `WithSelectedItem`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--withselecteditem)

```tsx
export const WithSelectedItem: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <StatusOutstandingIcon size="md" className="text-brand-300" />,  label: 'Mark as outstanding', selected: true },
          { icon: <StatusAcceptedIcon   size="md" className="text-green-300" />,   label: 'Mark as accepted' },
          { icon: <StatusReturnedIcon   size="md" className="text-red-300" />,     label: 'Mark as returned' },
          { icon: <StatusFulfilledIcon  size="md" className="text-yellow-300" />,  label: 'Mark as fulfilled' },
        ],
      },
    ],
  },
};
```

#### `SelectableList`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--selectablelist)

```tsx
export const SelectableList: Story = {
  render: () => {
    const [active, setActive] = useState<string>('outstanding');
    const statuses = [
      { value: 'outstanding', label: 'Mark as outstanding', icon: <StatusOutstandingIcon size="md" className="text-brand-300" /> },
      { value: 'accepted',    label: 'Mark as accepted',    icon: <StatusAcceptedIcon   size="md" className="text-green-300" /> },
      { value: 'returned',    label: 'Mark as returned',    icon: <StatusReturnedIcon   size="md" className="text-red-300" /> },
      { value: 'fulfilled',   label: 'Mark as fulfilled',   icon: <StatusFulfilledIcon  size="md" className="text-yellow-300" /> },
    ];
    return (
      <ActionMenu
        groups={[{
          items: statuses.map((s) => ({
            icon: s.icon,
            label: s.label,
            selected: s.value === active,
            onClick: () => setActive(s.value),
          })),
        }]}
      />
    );
  },
};
```

#### `WithDangerItem`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--withdangeritem)

```tsx
export const WithDangerItem: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Edit',      shortcut: '⌘E' },
          { icon: <Copy01Icon  size="sm" />, label: 'Duplicate' },
          { icon: <Share01Icon size="sm" />, label: 'Share',     shortcut: '⌘S' },
        ],
      },
      {
        items: [
          { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
        ],
      },
    ],
  },
};
```

#### `WithSubmenu`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--withsubmenu)

```tsx
export const WithSubmenu: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Rename', shortcut: '⌘R' },
          {
            icon: <FolderIcon size="sm" />,
            label: 'Move to…',
            children: [
              {
                items: [
                  { icon: <FolderIcon size="sm" />, label: 'Project Alpha' },
                  { icon: <FolderIcon size="sm" />, label: 'Project Beta' },
                  {
                    icon: <ArchiveIcon size="sm" />,
                    label: 'Archive',
                    children: [
                      {
                        items: [
                          { label: '2024' },
                          { label: '2025' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          { icon: <Copy01Icon size="sm" />, label: 'Duplicate' },
        ],
      },
      {
        items: [
          { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
        ],
      },
    ],
  },
};
```

#### `WithDisabledItems`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--withdisableditems)

```tsx
export const WithDisabledItems: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon  size="sm" />, label: 'Edit' },
          { icon: <Copy01Icon  size="sm" />, label: 'Duplicate', disabled: true },
          { icon: <Share01Icon size="sm" />, label: 'Share',     disabled: true },
        ],
      },
    ],
  },
};
```

#### `MentionPicker`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--mentionpicker)

```tsx
export const MentionPicker: Story = {
  render: () => (
    <div className="w-[320px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <ActionMenu
        size="sm"
        groups={[
          {
            items: [
              {
                icon: <Avatar size="sm" variant="firm"   initials="B" />,
                label: 'Beck Neilson',
                description: 'Beck.Neilson@suralink.com',
              },
              {
                icon: <Avatar size="sm" variant="client" initials="L" />,
                label: 'Barbra Ingles',
                description: 'Barbra.Ingles@suralink.com',
              },
              {
                icon: <Avatar size="sm" variant="client" initials="L" />,
                label: 'Bret Assay',
                description: 'Bret.Assay@suralink.com',
              },
            ],
          },
        ]}
      />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:55', cells: AM_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 448, height: 814 }}>
      {AM_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <ActionMenu
            size={c.size}
            groups={[{ items: c.level === 'Submenu' ? MENU_ITEMS_SUBMENU : MENU_ITEMS_ROOT }]}
          />
        </div>
      ))}
    </div>
  ),
};
```

#### `ItemMatrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-actionmenu--itemmatrix)

```tsx
export const ItemMatrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:55', cells: AM_ITEM_CELLS },
  },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 4304, height: 232 }}>
      {AM_ITEM_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderItemCell(c)}
        </div>
      ))}
    </div>
  ),
};
```

---

## Alert

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-alert--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=218-34 |
| Source | `components/feedback/Alert.tsx` |
| Story file | `components/feedback/Alert.stories.tsx` |

### Import

```tsx
import { Alert } from './components/feedback/Alert';
```

### Props

```ts
export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
  action?: { label: string; onClick: () => void };
}
```

### Variants

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Heads up"     >Your trial expires in 7 days.</Alert>
      <Alert variant="success" title="Saved"        >Your changes have been published.</Alert>
      <Alert variant="warning" title="Attention"    >This action may affect other users.</Alert>
      <Alert variant="danger"  title="Error"        >Failed to save. Please try again.</Alert>
    </div>
  ),
};
```

#### `Info`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--info)

```tsx
export const Info: Story = { args: { variant: 'info',    title: 'Overlay/Alert',  children: 'Your trial expires in 7 days.' } };
```

#### `Success`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--success)

```tsx
export const Success: Story = { args: { variant: 'success', title: 'Saved',     children: 'Your changes have been published.' } };
```

#### `Warning`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--warning)

```tsx
export const Warning: Story = { args: { variant: 'warning', title: 'Attention', children: 'This action may affect other users.' } };
```

#### `Danger`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--danger)

```tsx
export const Danger: Story = { args: { variant: 'danger',  title: 'Error',     children: 'Failed to save. Please try again.' } };
```

#### `WithIcon`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--withicon)

```tsx
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Update available" icon={<InfoIcon size={16} />}          >Version 2.0 is ready to install.</Alert>
      <Alert variant="success" title="Payment received" icon={<CheckCircle size={16} />}   >Invoice #1042 has been paid.</Alert>
      <Alert variant="warning" title="Low storage"      icon={<AlertTriangle size={16} />} >You have 500MB remaining.</Alert>
      <Alert variant="danger"  title="Login failed"     icon={<XCircle size={16} />}       >Incorrect password. 2 attempts left.</Alert>
    </div>
  ),
};
```

#### `WithAction`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--withaction)

```tsx
export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'Cookie policy',
    children: 'We use cookies to improve your experience.',
    action: { label: 'Manage settings', onClick: () => alert('manage') },
  },
};
```

#### `WithIconAndAction`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--withiconandaction)

```tsx
export const WithIconAndAction: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    children: 'You have unsaved changes that will be lost.',
    icon: <AlertTriangle size={16} />,
    action: { label: 'Dismiss', onClick: () => alert('dismiss') },
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-alert--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:18', cells: ALERT_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 480, height: 368 }}>
      {ALERT_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Alert variant={c.v} title={c.title}>{c.body}</Alert>
        </div>
      ))}
    </div>
  ),
};
```

---

## Card

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-card--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=375-8 |
| Source | `components/data-display/Card.tsx` |
| Story file | `components/data-display/Card.stories.tsx` |

### Import

```tsx
import { Card } from './components/data-display/Card';
```

### Props

```ts
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'xs' | 'sm' | 'md' | 'lg';
}
```

### Variants

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-card--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Card padding="sm"><p className="text-body-sm text-secondary">Small padding card</p></Card>
      <Card padding="md">
        <h3 className="text-body-sm font-semibold text-primary mb-1">Order #1042</h3>
        <p className="text-body-sm text-secondary">Placed on March 10, 2026 · $148.00</p>
      </Card>
      <Card padding="lg">
        <h3 className="text-body-sm font-semibold text-primary mb-2">Account summary</h3>
        <p className="text-body-sm text-muted">Large padding for prominent content areas.</p>
      </Card>
    </div>
  ),
};
```

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-card--default)

```tsx
export const Default: Story = {
  args: { padding: 'md', children: 'Card content goes here.' },
};
```

#### `Padding_xs`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-card--padding-xs)

```tsx
export const Padding_xs: Story = { args: { padding: 'xs', children: 'Card content goes here.' } };
```

#### `Padding_sm`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-card--padding-sm)

```tsx
export const Padding_sm: Story = { args: { padding: 'sm', children: 'Card content goes here.' } };
```

#### `Padding_md`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-card--padding-md)

```tsx
export const Padding_md: Story = { args: { padding: 'md', children: 'Card content goes here.' } };
```

#### `Padding_lg`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-card--padding-lg)

```tsx
export const Padding_lg: Story = { args: { padding: 'lg', children: 'Card content goes here.' } };
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-card--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:5', cells: CARD_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1240, height: 155 }}>
      {CARD_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Card padding={c.variant.split('=')[1] as 'xs' | 'sm' | 'md' | 'lg'}>
            <CardDemoContent />
          </Card>
        </div>
      ))}
    </div>
  ),
};
```

---

## CommentComposer

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-commentcomposer--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=392-34 |
| Source | `components/data-display/CommentComposer.tsx` |
| Story file | `components/data-display/CommentComposer.stories.tsx` |

### Description

Mention-pill visual tokens — extracted so both the live editor and the
Storybook seed renderer agree on the exact styling. Blue/info-tint surface
+ tighter padding mirrors the Figma reference (Section 1, State 4 at
2814:14983) and matches the brand accent rather than a status-purple tone.

### Import

```tsx
import { CommentComposer } from './components/data-display/CommentComposer';
```

### Props

```ts
export interface CommentComposerProps {
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  onSubmit?: (text: string) => void;
  onCancel?: () => void;
  /**
   * When provided, typing `@` opens a mention picker dropdown with these
   * users (filterable by the chars typed after `@`). Selecting a user inserts
   * an inline mention pill into the editor — backed by a `contentEditable`
   * surface so the pill can render with its canonical purple-tint styling.
   */
  mentionUsers?: MentionUser[];
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-commentcomposer--default)

```tsx
export const Default: Story = {
  args: {
    placeholder: 'Reply…',
    onSubmit: (text) => alert(`Submitted: ${text}`),
    onCancel: () => alert('Cancelled'),
  },
};
```

#### `AutoFocus`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-commentcomposer--autofocus)

```tsx
export const AutoFocus: Story = {
  args: {
    placeholder: 'Reply…',
    autoFocus: true,
    onSubmit: (text) => alert(`Submitted: ${text}`),
    onCancel: () => alert('Cancelled'),
  },
};
```

#### `CustomPlaceholder`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-commentcomposer--customplaceholder)

```tsx
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Add a comment…',
    onSubmit: (text) => alert(`Submitted: ${text}`),
  },
};
```

#### `Constrained`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-commentcomposer--constrained)

```tsx
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
```

#### `WithMentions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-commentcomposer--withmentions)

```tsx
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
```

#### `MentionInserted`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-commentcomposer--mentioninserted)

```tsx
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
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-commentcomposer--matrix)

```tsx
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
```

---

## Drawer

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-drawer--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=754-18 |
| Source | `components/overlay/Drawer.tsx` |
| Story file | `components/overlay/Drawer.stories.tsx` |

### Import

```tsx
import { Drawer } from './components/overlay/Drawer';
```

### Props

```ts
export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  title?: string;
  /** Render the drawer panel inline (no fixed overlay, no scrim).
   *  Used for matrix/showcase rendering where multiple drawers appear at once. */
  inline?: boolean;
  children?: React.ReactNode;
}
```

### Variants

#### `Right`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-drawer--right)

```tsx
export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Drawer" side="right">
          <p className="text-body-sm text-muted">Drawer content.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
```

#### `LeftSide`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-drawer--leftside)

```tsx
export const LeftSide: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Left Drawer" side="left">
          <p className="text-body-sm text-muted">This drawer slides in from the left side.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
```

#### `WithoutTitle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-drawer--withouttitle)

```tsx
export const WithoutTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer (No Title)</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="right">
          <p className="text-body-sm text-muted">This drawer has no title, only the close button in the header.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
```

#### `LeftWithoutTitle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-drawer--leftwithouttitle)

```tsx
export const LeftWithoutTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer (No Title)</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="left">
          <p className="text-body-sm text-muted">Left drawer without a title.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-drawer--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:56', cells: DRAWER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 720, height: 680 }}>
      {DRAWER_CELLS.map((c) => (
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
```

---

## Modal

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-modal--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=752-29 |
| Source | `components/overlay/Modal.tsx` |
| Story file | `components/overlay/Modal.stories.tsx` |

### Import

```tsx
import { Modal } from './components/overlay/Modal';
```

### Props

```ts
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  /**
   * Whole-modal semantic variant.
   * - `default`: standard modal with a primary action.
   * - `destructive`: confirms a destructive operation. The last footer action
   *    defaults to `danger` styling unless explicitly set.
   */
  variant?: 'default' | 'destructive';
  /** Render the modal panel inline (no fixed overlay, no scrim).
   *  Used for matrix/showcase rendering where multiple modals appear at once. */
  inline?: boolean;
  children?: React.ReactNode;
  footer?: ModalAction[];
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-modal--default)

```tsx
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="This is a title"
          footer={[
            { label: 'Learn more',    onClick: () => setOpen(false) },
            { label: 'Save changes',  onClick: () => setOpen(false), variant: 'primary' },
          ]}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Modal>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
```

#### `Destructive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-modal--destructive)

```tsx
export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete item</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete message"
          footer={[
            { label: 'Cancel',         onClick: () => setOpen(false) },
            { label: 'Delete message', onClick: () => setOpen(false), variant: 'danger' },
          ]}
        >
          <p>This message will be available in "Restore Files" for 90 days before being permanently deleted.</p>
        </Modal>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-modal--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:58', cells: MODAL_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1000, height: 320 }}>
      {MODAL_CELLS.map((c) => (
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
```

---

## Popover

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-popover--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=764-31 |
| Source | `components/overlay/Popover.tsx` |
| Story file | `components/overlay/Popover.stories.tsx` |

### Import

```tsx
import { Popover } from './components/overlay/Popover';
```

### Props

```ts
export interface PopoverProps {
  /** Optional trigger — required for interactive use, omitted in inline mode. */
  trigger?: React.ReactElement;
  children: React.ReactNode;
  /** Controlled visibility. When provided, overrides click-driven visibility. */
  open?: boolean;
  /**
   * Render the popover panel inline (no trigger, no absolute positioning).
   * Used by Matrix / showcase stories where multiple popovers sit side-by-side
   * pinned at exact Figma coords. Mirrors the same affordance on Drawer + Modal.
   */
  inline?: boolean;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-popover--default)

```tsx
export const Default: Story = {
  render: () => (
    <Popover trigger={<Button variant="secondary">Open Popover</Button>}>
      <p className="text-body-sm text-secondary">Popover content here.</p>
    </Popover>
  ),
};
```

#### `RichContent`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-popover--richcontent)

```tsx
export const RichContent: Story = {
  render: () => (
    <Popover trigger={<Button variant="secondary">Account</Button>}>
      <div className="flex flex-col gap-2">
        <div className="border-b border-line pb-2">
          <p className="text-body-md font-semibold text-primary">Jane Smith</p>
          <p className="text-body-sm text-muted">jane@example.com</p>
        </div>
        <button className="text-left text-body-sm text-secondary hover:text-primary">Profile settings</button>
        <button className="text-left text-body-sm text-secondary hover:text-primary">Billing</button>
        <button className="text-left text-body-sm text-status-error">Sign out</button>
      </div>
    </Popover>
  ),
};
```

#### `WithCustomWidth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-popover--withcustomwidth)

```tsx
export const WithCustomWidth: Story = {
  render: () => (
    <Popover trigger={<Button variant="secondary">Filter</Button>} className="min-w-64">
      <div className="flex flex-col gap-3">
        <p className="text-label-md font-semibold text-primary">Filter options</p>
        <Checkbox defaultChecked label="Active" />
        <Checkbox label="Archived" />
        <Checkbox label="Draft" />
      </div>
    </Popover>
  ),
};
```

#### `OpenByDefault`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-popover--openbydefault)

```tsx
export const OpenByDefault: Story = {
  render: () => (
    <div className="pt-12">
      <Popover trigger={<Button variant="secondary">Open Popover</Button>}>
        <p className="text-body-sm text-secondary">
          Click the trigger above to toggle this popover. It starts closed — click to open it.
        </p>
      </Popover>
    </div>
  ),
  parameters: { layout: 'centered' },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-popover--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:59', cells: POPOVER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 720, height: 170 }}>
      {POPOVER_CELLS.map((c) => (
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
```

---

## Search

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-search--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=541-84 |
| Source | `components/primitives/Search.tsx` |
| Story file | `components/primitives/Search.stories.tsx` |

### Import

```tsx
import { Search } from './components/primitives/Search';
```

### Props

```ts
export interface SearchProps {
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  currentMatch?: number;
  totalMatches?: number;
  placeholder?: string;
  disabled?: boolean;
  size?: SearchSize;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--default)

```tsx
export const Default: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch placeholder="Type here…" currentMatch={0} totalMatches={0} />
    </div>
  ),
};
```

#### `WithMatches`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--withmatches)

```tsx
export const WithMatches: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch
        value="contract"
        currentMatch={3}
        totalMatches={7}
        onNext={() => {}}
        onPrevious={() => {}}
      />
    </div>
  ),
};
```

#### `NoMatches`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--nomatches)

```tsx
export const NoMatches: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch
        value="xyz"
        currentMatch={0}
        totalMatches={0}
      />
    </div>
  ),
};
```

#### `Disabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--disabled)

```tsx
export const Disabled: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <Search value="" placeholder="Type here…" disabled currentMatch={0} totalMatches={0} />
    </div>
  ),
};
```

#### `CustomPlaceholder`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--customplaceholder)

```tsx
export const CustomPlaceholder: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch placeholder="Search documents…" />
    </div>
  ),
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch size="xs" placeholder="xs (h-7 / 28px)" />
      <InteractiveSearch size="sm" placeholder="sm (h-8 / 32px)" />
      <InteractiveSearch size="md" placeholder="md (h-9 / 36px) — default" />
    </div>
  ),
};
```

#### `WithNavigation`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--withnavigation)

```tsx
export const WithNavigation: Story = {
  render: () => (
    <div className="w-[280px]">  // token-lint-skip: showcase fixed dims for screenshot stability
      <InteractiveSearch
        value="clause"
        currentMatch={2}
        totalMatches={5}
        onNext={() => alert('next')}
        onPrevious={() => alert('previous')}
      />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-search--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:70', cells: SEARCH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1580, height: 200 }}>
      {SEARCH_CELLS.map((c) => (
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
```

---

## Tooltip

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/overlay-tooltip--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=746-6 |
| Source | `components/overlay/Tooltip.tsx` |
| Story file | `components/overlay/Tooltip.stories.tsx` |

### Import

```tsx
import { Tooltip } from './components/overlay/Tooltip';
```

### Props

```ts
export interface TooltipProps {
  content: string;
  /**
   * Trigger element. Required for interactive use (hover-driven). Optional in
   * `inline` mode — if omitted, the bubble renders standalone at flow position,
   * which is the mode pixel-pinned Matrix stories use.
   */
  children?: React.ReactElement;
  /** Which side of the trigger the tooltip appears on. Default: 'top' */
  side?: 'top' | 'bottom';
  /** Controlled visibility. When provided, overrides hover-driven visibility. */
  open?: boolean;
  /** Render the bubble as a sibling instead of portalling to document.body.
   *  Used for static matrix/showcase rendering where multiple tooltips appear at once. */
  inline?: boolean;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-tooltip--default)

```tsx
export const Default: Story = {
  render: () => (
    <Tooltip content="Helpful text">
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
};
```

#### `LongContent`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-tooltip--longcontent)

```tsx
export const LongContent: Story = {
  render: () => (
    <Tooltip content="This is a much longer tooltip message that provides more detailed context about the action or element being hovered.">
      <Button variant="secondary">Hover for details</Button>
    </Tooltip>
  ),
};
```

#### `MultipleInARow`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-tooltip--multipleinarow)

```tsx
export const MultipleInARow: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="Bold">
        <Button variant="secondary">B</Button>
      </Tooltip>
      <Tooltip content="Italic">
        <Button variant="secondary">I</Button>
      </Tooltip>
      <Tooltip content="Underline">
        <Button variant="secondary">U</Button>
      </Tooltip>
      <Tooltip content="Strike-through">
        <Button variant="secondary">S</Button>
      </Tooltip>
    </div>
  ),
  parameters: { layout: 'centered' },
};
```

#### `BottomSide`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-tooltip--bottomside)

```tsx
export const BottomSide: Story = {
  name: 'Side: bottom',
  render: () => (
    <Tooltip content="Appears below" side="bottom">
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
  parameters: { layout: 'centered' },
};
```

#### `OnIconButtons`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-tooltip--oniconbuttons)

```tsx
export const OnIconButtons: Story = {
  name: 'On icon buttons',
  render: () => (
    <div className="flex items-center gap-1 p-8">
      <Tooltip content="Menu" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Menu"
          startIcon={<span className="text-heading-sm">⋯</span>} />
      </Tooltip>
      <Tooltip content="Team" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Team"
          startIcon={<span className="text-heading-sm">👥</span>} />
      </Tooltip>
      <Tooltip content="Notifications" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Notifications"
          startIcon={<span className="text-heading-sm">🔔</span>} />
      </Tooltip>
      <Tooltip content="Analytics" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Analytics"
          startIcon={<span className="text-heading-sm">📊</span>} />
      </Tooltip>
    </div>
  ),
  parameters: { layout: 'centered' },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/overlay-tooltip--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:60', cells: TOOLTIP_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 220, height: 50 }}>
      {TOOLTIP_CELLS.map((c) => (
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
```

---


# Primitives

## Avatar

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-avatar--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=484-14 |
| Source | `components/primitives/Avatar.tsx` |
| Story file | `components/primitives/Avatar.stories.tsx` |

### Import

```tsx
import { Avatar } from './components/primitives/Avatar';
```

### Props

```ts
export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
}
```

### Variants

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-avatar--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-label-sm font-semibold text-muted uppercase tracking-wide">Client — purple</p>
        <div className="flex items-center gap-4">
          <Avatar variant="client" size="xs" initials="GS" />
          <Avatar variant="client" size="sm" initials="GS" />
          <Avatar variant="client" size="md" initials="GS" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-label-sm font-semibold text-muted uppercase tracking-wide">Firm — orange</p>
        <div className="flex items-center gap-4">
          <Avatar variant="firm" size="xs" initials="AJ" />
          <Avatar variant="firm" size="sm" initials="AJ" />
          <Avatar variant="firm" size="md" initials="AJ" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-label-sm font-semibold text-muted uppercase tracking-wide">With photo</p>
        <div className="flex items-center gap-4">
          <Avatar size="xs" src="https://i.pravatar.cc/150?img=47" alt="User photo" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=47" alt="User photo" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=47" alt="User photo" />
        </div>
      </div>
    </div>
  ),
};
```

#### `Client`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-avatar--client)

```tsx
export const Client: Story = { args: { variant: 'client', initials: 'GS', size: 'md' } };
```

#### `Firm`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-avatar--firm)

```tsx
export const Firm: Story = { args: { variant: 'firm', initials: 'AJ', size: 'md' } };
```

#### `WithPhoto`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-avatar--withphoto)

```tsx
export const WithPhoto: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=47', alt: 'User photo', size: 'md' },
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-avatar--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {([['xs', '24px'], ['sm', '32px'], ['md', '40px']] as const).map(([size, px]) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar variant="client" size={size} initials="GS" />
          <span className="text-label-sm text-muted">{size} · {px}</span>
        </div>
      ))}
    </div>
  ),
};
```

#### `StackedGroup`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-avatar--stackedgroup)

```tsx
export const StackedGroup: Story = {
  render: () => (
    <div className="flex items-center -space-x-2">
      <Avatar variant="client" size="sm" initials="GS" className="ring-2 ring-canvas" />
      <Avatar variant="client" size="sm" initials="MK" className="ring-2 ring-canvas" />
      <Avatar variant="firm"   size="sm" initials="AJ" className="ring-2 ring-canvas" />
      <Avatar variant="firm"   size="sm" initials="JN" className="ring-2 ring-canvas" />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-avatar--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:62', cells: AVATAR_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 102, height: 120 }}>
      {AVATAR_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Avatar size={c.s} variant={c.v} initials={c.initials} />
        </div>
      ))}
    </div>
  ),
};
```

---

## Badge

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-badge--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=485-20 |
| Source | `components/primitives/Badge.tsx` |
| Story file | `components/primitives/Badge.stories.tsx` |

### Import

```tsx
import { Badge } from './components/primitives/Badge';
```

### Props

```ts
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  onDelete?: () => void;
  avatar?: React.ReactNode;
}
```

### Variants

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="cerulean">Cerulean</Badge>
      <Badge variant="purple">High priority</Badge>
      <Badge variant="pink">Thu, Apr 16</Badge>
    </div>
  ),
};
```

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--default)

```tsx
export const Default: Story = { args: { children: 'Default' } };
```

#### `Brand`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--brand)

```tsx
export const Brand: Story = { args: { children: 'Info',          variant: 'brand' } };
```

#### `Success`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--success)

```tsx
export const Success: Story = { args: { children: 'Active',        variant: 'success' } };
```

#### `Warning`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--warning)

```tsx
export const Warning: Story = { args: { children: 'Pending',       variant: 'warning' } };
```

#### `Danger`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--danger)

```tsx
export const Danger: Story = { args: { children: 'Error',         variant: 'danger' } };
```

#### `Outlined`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--outlined)

```tsx
export const Outlined: Story = { args: { children: 'Draft',         variant: 'outlined' } };
```

#### `Cerulean`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--cerulean)

```tsx
export const Cerulean: Story = { args: { children: 'E-Signature',   variant: 'cerulean' } };
```

#### `Purple`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--purple)

```tsx
export const Purple: Story = { args: { children: 'High priority', variant: 'purple' } };
```

#### `Pink`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--pink)

```tsx
export const Pink: Story = { args: { children: 'Thu, Apr 16',  variant: 'pink' } };
```

#### `Deletable`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--deletable)

```tsx
export const Deletable: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="brand"   onDelete={() => alert('removed')}>React</Badge>
      <Badge variant="success" onDelete={() => alert('removed')}>TypeScript</Badge>
      <Badge variant="default" onDelete={() => alert('removed')}>Tag</Badge>
    </div>
  ),
};
```

#### `WithAvatar`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--withavatar)

```tsx
export const WithAvatar: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge
        variant="default"
        avatar={<Avatar variant="client" size="xs" initials="GS" className="h-4 w-4 text-caption" />}
      >
        Gerardo Sumano
      </Badge>
      <Badge
        variant="default"
        avatar={<Avatar variant="firm" size="xs" initials="AJ" className="h-4 w-4 text-caption" />}
      >
        Amana Johanson
      </Badge>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-badge--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:63', cells: BADGE_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 605, height: 53 }}>
      {BADGE_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Badge variant={c.v}>Badge</Badge>
        </div>
      ))}
    </div>
  ),
};
```

---

## Button

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-button--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=480-848 |
| Source | `components/primitives/Button.tsx` |
| Story file | `components/primitives/Button.stories.tsx` |

### Import

```tsx
import { Button } from './components/primitives/Button';
```

### Props

```ts
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconOnly?: boolean;
  /**
   * Render a sticky "selected" / pressed affordance — used for toggleable
   * controls whose pressed state needs to persist while a popover/picker
   * is open (e.g. the `@` mention button in CommentComposer, a formatting
   * toggle in a toolbar). Adds `aria-pressed` automatically so screen
   * readers announce the toggle correctly.
   *
   * Visual recipe (canonical LSDS pattern, ghost + iconOnly):
   *   • Fill   = `bg-pressed`           (mid-gray, neutral-300 light)
   *   • Stroke = `action-primary` 1px   (ring-inset — sits inside element box)
   *   • Halo   = `line-focus` 2px       (ring-2 outward, mirrors Figma's
   *                                     DROP_SHADOW spread=2 radius=0 effect
   *                                     on the Ghost iconOnly Focus variant)
   *   • Glyph  = unchanged              (stays the default ghost foreground)
   * Other variants get just the stroke + halo since they already carry
   * their own fill.
   */
  selected?: boolean;
  /**
   * Matrix-story-only: forces the `:hover` visual to render at rest. Mirrors
   * the pattern other LSDS primitives use (NavItem) so a pixel-pinned Matrix
   * story can show every Figma `State=Hover` variant alongside Default and
   * Disabled. Maps the `hover:*` Tailwind utilities to their non-`hover:`
   * equivalents and forces them at the default state.
   */
  forceHover?: boolean;
  /**
   * Matrix-story-only: forces the `:focus-visible` visual to render at rest.
   * Same purpose as `forceHover` — lets Matrix stories show the canonical
   * Figma `State=Focus` variant without keyboard interaction.
   */
  forceFocus?: boolean;
}
```

### Variants

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Delete account</Button>
      <Button variant="link">Learn more</Button>
    </div>
  ),
};
```

#### `Primary`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--primary)

```tsx
export const Primary: Story = { args: { children: 'Save changes',   variant: 'primary' } };
```

#### `Secondary`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--secondary)

```tsx
export const Secondary: Story = { args: { children: 'Cancel',         variant: 'secondary' } };
```

#### `Ghost`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--ghost)

```tsx
export const Ghost: Story = { args: { children: 'Learn more',     variant: 'ghost' } };
```

#### `Danger`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--danger)

```tsx
export const Danger: Story = { args: { children: 'Delete account', variant: 'danger' } };
```

#### `Link`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--link)

```tsx
export const Link: Story = { args: { children: 'View details',   variant: 'link' } };
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="secondary" size="xxs">XXS</Button>
      <Button variant="secondary" size="xs">Extra small</Button>
      <Button variant="secondary" size="sm">Small</Button>
      <Button variant="secondary" size="md">Medium</Button>
    </div>
  ),
};
```

#### `Disabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--disabled)

```tsx
export const Disabled: Story = { args: { children: 'Disabled', disabled: true } };
```

#### `SelectedIconOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--selectedicononly)

```tsx
export const SelectedIconOnly: Story = {
  name: 'Selected — Ghost Icon Only (canonical pattern)',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      {/* Headline pattern — full toolbar showing the three peer states */}
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Toolbar — toggle the @ Mention</h3>
        <p className="text-body-sm text-secondary max-w-prose">
          A document viewer toolbar with five ghost icon-only toggles. Only the
          third button (Mention) is in the selected state — the canonical
          recipe: <code className="font-mono text-body-sm text-primary">bg-pressed</code> fill
          + <code className="font-mono text-body-sm text-primary">ring-1 ring-inset ring-action-primary</code> inner stroke
          + <code className="font-mono text-body-sm text-primary">outline-2 outline-line-focus</code> outer halo.
        </p>
        <div className="inline-flex items-center gap-1 rounded-pill bg-surface p-1 w-max">
          <Button variant="ghost" size="sm" iconOnly aria-label="Zoom in"
            startIcon={<ZoomInIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Zoom out"
            startIcon={<ZoomOutIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Mention" selected
            startIcon={<AtSignIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Download"
            startIcon={<Download01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Settings"
            startIcon={<Settings01Icon size="md" />} />
        </div>
      </section>

      {/* State comparison — idle / hover hint / selected side by side */}
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">State comparison</h3>
        <div className="grid grid-cols-[120px_repeat(3,80px)] gap-x-4 gap-y-2 items-center">
          <span></span>
          <span className="text-label-sm text-secondary text-center">Idle</span>
          <span className="text-label-sm text-secondary text-center">Hover-equivalent</span>
          <span className="text-label-sm text-secondary text-center">Selected</span>

          <span className="font-mono text-label-sm text-muted">@ mention</span>
          <Button variant="ghost" size="sm" iconOnly aria-label="Idle"
            startIcon={<AtSignIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Hover"
            className="!bg-hover-overlay"
            startIcon={<AtSignIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Selected" selected
            startIcon={<AtSignIcon size="md" />} />

          <span className="font-mono text-label-sm text-muted">download</span>
          <Button variant="ghost" size="sm" iconOnly aria-label="Idle"
            startIcon={<Download01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Hover"
            className="!bg-hover-overlay"
            startIcon={<Download01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Selected" selected
            startIcon={<Download01Icon size="md" />} />

          <span className="font-mono text-label-sm text-muted">settings</span>
          <Button variant="ghost" size="sm" iconOnly aria-label="Idle"
            startIcon={<Settings01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Hover"
            className="!bg-hover-overlay"
            startIcon={<Settings01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Selected" selected
            startIcon={<Settings01Icon size="md" />} />
        </div>
      </section>

      {/* Size scale — selected pattern at every iconOnly size */}
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Selected at every size</h3>
        <div className="grid grid-cols-[80px_repeat(4,80px)] gap-x-4 gap-y-2 items-center">
          <span></span>
          {(['xxs', 'xs', 'sm', 'md'] as const).map((s) => (
            <span key={s} className="text-label-sm text-secondary text-center">{s}</span>
          ))}
          <span className="font-mono text-label-sm text-muted">selected</span>
          {(['xxs', 'xs', 'sm', 'md'] as const).map((s) => (
            <Button key={s} variant="ghost" size={s} iconOnly selected
              aria-label={`Selected ${s}`}
              startIcon={<AtSignIcon size={s === 'xxs' ? 'sm' : 'md'} />} />
          ))}
        </div>
      </section>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
```

#### `WithStartIcon`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--withstarticon)

```tsx
export const WithStartIcon: Story = {
  args: {
    children: 'Add item',
    variant: 'primary',
    startIcon: <PlusIcon size="sm" />,
  },
};
```

#### `WithEndIcon`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--withendicon)

```tsx
export const WithEndIcon: Story = {
  args: {
    children: 'Settings',
    variant: 'secondary',
    endIcon: <Settings01Icon size="sm" />,
  },
};
```

#### `IconOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--icononly)

```tsx
export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="ghost"     iconOnly size="xxs" startIcon={<PlusIcon     size="sm" />} aria-label="Add" />
      <Button variant="primary"   iconOnly size="xs"  startIcon={<PlusIcon     size="sm" />} aria-label="Add" />
      <Button variant="primary"   iconOnly size="sm"  startIcon={<PlusIcon     size="sm" />} aria-label="Add" />
      <Button variant="primary"   iconOnly size="md"  startIcon={<PlusIcon     size="md" />} aria-label="Add" />
      <Button variant="secondary" iconOnly size="md"  startIcon={<Settings01Icon size="md" />} aria-label="Settings" />
      <Button variant="ghost"     iconOnly size="md"  startIcon={<Settings01Icon size="md" />} aria-label="Settings" />
      <Button variant="danger"    iconOnly size="md"  startIcon={<Trash03Icon  size="md" />} aria-label="Delete" />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--matrix)

```tsx
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:64',
      cells: BUTTON_MATRIX_CELLS,
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 2170, height: 933 }}>
      {BUTTON_CELLS.map((cell, i) => (
        <div
          key={`${cell.T}-${cell.S}-${cell.St}-${cell.I}-${i}`}
          className="absolute flex items-start leading-none"
          data-matrix-cell
          style={{ left: cell.x, top: cell.y, width: cell.w }}
        >
          {renderButtonCell(cell)}
        </div>
      ))}
    </div>
  ),
};
```

#### `MatrixCurated`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-button--matrixcurated)

```tsx
export const MatrixCurated: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-6">
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Type × State (md)</h3>
        <div className="grid grid-cols-[100px_repeat(4,minmax(140px,1fr))] gap-x-4 gap-y-3 items-center text-label-sm text-muted">
          <span></span><span>Default</span><span>Hover</span><span>Focus</span><span>Disabled</span>
          {TYPES_LEGACY.map((t) => (
            <Fragment key={t}>
              <span className="font-mono text-secondary">{t}</span>
              <Button variant={t}>Button</Button>
              <Button variant={t} className={HOVER_CLASS[t]}>Button</Button>
              <Button variant={t} className={FOCUS_CLASS}>Button</Button>
              <Button variant={t} disabled>Button</Button>
            </Fragment>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Type × Size</h3>
        <div className="grid grid-cols-[100px_repeat(4,minmax(120px,1fr))] gap-x-4 gap-y-3 items-center text-label-sm text-muted">
          <span></span>
          {SIZES_LEGACY.map((s) => <span key={s}>{s}</span>)}
          {TYPES_LEGACY.map((t) => (
            <Fragment key={t}>
              <span className="font-mono text-secondary">{t}</span>
              {SIZES_LEGACY.map((s) => (
                <Button key={s} variant={t} size={s}>Button</Button>
              ))}
            </Fragment>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Type × Icon position (md)</h3>
        <div className="grid grid-cols-[100px_repeat(4,minmax(140px,1fr))] gap-x-4 gap-y-3 items-center text-label-sm text-muted">
          <span></span><span>None</span><span>Left</span><span>Right</span><span>Only</span>
          {TYPES_LEGACY.map((t) => (
            <Fragment key={t}>
              <span className="font-mono text-secondary">{t}</span>
              <Button variant={t}>Button</Button>
              <Button variant={t} startIcon={<PlusIcon size="sm" />}>Button</Button>
              <Button variant={t} endIcon={<Settings01Icon size="sm" />}>Button</Button>
              <Button variant={t} iconOnly startIcon={<PlusIcon size="sm" />} aria-label="Add" />
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  ),
};
```

---

## Checkbox

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-checkbox--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=490-30 |
| Source | `components/forms/Checkbox.tsx` |
| Story file | `components/forms/Checkbox.stories.tsx` |

### Import

```tsx
import { Checkbox } from './components/forms/Checkbox';
```

### Props

```ts
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'lg';
  /**
   * Indeterminate (mixed) state — e.g. a "select all" that's partially
   * selected. Set via the input's DOM property since it's not a standard
   * HTML attribute. Renders the dash glyph instead of the check.
   */
  indeterminate?: boolean;
  /**
   * Matrix-story-only: forces the `:hover` visual to render at rest. Mirrors
   * the Button pattern so a pixel-pinned Matrix story can show every Figma
   * `State=Hover` variant alongside Default / Focus / Disabled. Resolves to
   * the same border + bg the `hover:*` classes apply (per Checked state).
   */
  forceHover?: boolean;
  /**
   * Matrix-story-only: forces the `:focus-visible` visual to render at rest.
   * Same purpose as `forceHover` — lets Matrix stories show the canonical
   * Figma `State=Focus` variant without keyboard interaction.
   */
  forceFocus?: boolean;
}
```

### Variants

#### `Unchecked`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--unchecked)

```tsx
export const Unchecked: Story = { args: { label: 'Accept terms' } };
```

#### `Checked`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--checked)

```tsx
export const Checked: Story = { args: { label: 'Accept terms', defaultChecked: true } };
```

#### `Disabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--disabled)

```tsx
export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };
```

#### `DisabledChecked`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--disabledchecked)

```tsx
export const DisabledChecked: Story = { args: { label: 'Disabled checked', disabled: true, defaultChecked: true } };
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--allstates)

```tsx
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};
```

#### `Hover`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--hover)

```tsx
export const Hover: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="[&_input]:border-muted [&_input]:bg-surface">
        <Checkbox label="Hover unchecked" />
      </div>
      <div className="[&_input]:border-action-primary-hover [&_input]:bg-action-primary-hover">
        <Checkbox label="Hover checked" defaultChecked />
      </div>
    </div>
  ),
};
```

#### `NoLabel`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--nolabel)

```tsx
export const NoLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  ),
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-label-md text-muted">Small (16px)</span>
        <Checkbox label="Small checkbox" size="sm" />
        <Checkbox label="Small checked" size="sm" defaultChecked />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-label-md text-muted">Large (20px)</span>
        <Checkbox label="Large checkbox" size="lg" />
        <Checkbox label="Large checked" size="lg" defaultChecked />
      </div>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-checkbox--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:23', cells: CHECKBOX_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1977, height: 238 }}>
      {CHECKBOX_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <CheckboxCellRender cell={c} />
        </div>
      ))}
    </div>
  ),
};
```

---

## CountBadge

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-countbadge--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=483-4 |
| Source | `components/primitives/CountBadge.tsx` |
| Story file | `components/primitives/CountBadge.stories.tsx` |

### Import

```tsx
import { CountBadge } from './components/primitives/CountBadge';
```

### Props

```ts
export interface CountBadgeProps {
  children: React.ReactNode;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-countbadge--default)

```tsx
export const Default: Story = { args: { children: 4 } };
```

#### `Large`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-countbadge--large)

```tsx
export const Large: Story = { args: { children: 42 } };
```

#### `Ratio`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-countbadge--ratio)

```tsx
export const Ratio: Story = { args: { children: '3/12' } };
```

#### `Zero`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-countbadge--zero)

```tsx
export const Zero: Story = { args: { children: 0 } };
```

#### `MaxCap`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-countbadge--maxcap)

```tsx
export const MaxCap: Story = { args: { children: '99+' } };
```

#### `OverlaidOnIcon`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-countbadge--overlaidonicon)

```tsx
export const OverlaidOnIcon: Story = {
  render: () => (
    <div className="relative inline-flex">
      {/* Placeholder icon button */}
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-control border border-line-strong bg-elevated text-secondary"
        aria-label="Notifications"
      >
        {/* Bell outline using a plain SVG so we avoid an icon import here */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 2a6 6 0 0 1 6 6v3l1.5 2H2.5L4 11V8a6 6 0 0 1 6-6Z" />
          <path d="M8 16a2 2 0 0 0 4 0" />
        </svg>
      </button>
      <CountBadge className="absolute -right-1.5 -top-1.5">3</CountBadge>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-countbadge--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:65', cells: COUNT_BADGE_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 15, height: 18 }}>
      {COUNT_BADGE_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <CountBadge>5</CountBadge>
        </div>
      ))}
    </div>
  ),
};
```

---

## DatePicker

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-datepicker--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=3129-12 |
| Source | `components/forms/DatePicker.tsx` |
| Story file | `components/forms/DatePicker.stories.tsx` |

### Import

```tsx
import { DatePicker } from './components/forms/DatePicker';
```

### Props

```ts
export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-datepicker--default)

```tsx
export const Default: Story = { args: { label: 'Select date' } };
```

#### `WithError`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-datepicker--witherror)

```tsx
export const WithError: Story = { args: { label: 'Select date', error: 'Date is required' } };
```

#### `WithValue`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-datepicker--withvalue)

```tsx
export const WithValue: Story = { args: { label: 'Select date', value: '2026-03-27' } };
```

#### `Disabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-datepicker--disabled)

```tsx
export const Disabled: Story = { args: { label: 'Select date', value: '2026-03-27', disabled: true } };
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-datepicker--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '3129:12', cells: DATEPICKER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 280, height: 556 }}>
      {DATEPICKER_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderDPCell(c)}
        </div>
      ))}
    </div>
  ),
};
```

---

## Divider

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-divider--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=783-4 |
| Source | `components/layout/Divider.tsx` |
| Story file | `components/layout/Divider.stories.tsx` |

### Import

```tsx
import { Divider } from './components/layout/Divider';
```

### Props

```ts
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}
```

### Variants

#### `Horizontal`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-divider--horizontal)

```tsx
export const Horizontal: Story = { args: { orientation: 'horizontal' } };
```

#### `Vertical`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-divider--vertical)

```tsx
export const Vertical: Story = {
  decorators: [(Story) => <div className="h-20">{Story()}</div>],
  args: { orientation: 'vertical' },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-divider--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '783:4', cells: DIVIDER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 320, height: 369 }}>
      {DIVIDER_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Divider orientation={c.orientation} />
        </div>
      ))}
    </div>
  ),
};
```

---

## Dropdown

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-dropdown--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=580-874 |
| Source | `components/overlay/Dropdown.tsx` |
| Story file | `components/overlay/Dropdown.stories.tsx` |

### Import

```tsx
import { Dropdown } from './components/overlay/Dropdown';
```

### Props

```ts
export interface DropdownProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: 'left' | 'right';
  width?: 'trigger' | 'auto';
  label?: string;
  /**
   * Where the label sits relative to the trigger.
   * - `top` (default): stacked above the trigger.
   * - `left`: inline to the left of the trigger.
   * - `right`: inline to the right of the trigger.
   * - `none`: no label is rendered (equivalent to omitting `label`).
   * Omit `label` to render no label.
   */
  labelPosition?: 'top' | 'left' | 'right' | 'none';
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-dropdown--default)

```tsx
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={
              <ChevronDownIcon
                size="sm"
                className={clsx('transition-transform duration-200', open && 'rotate-180')}
              />
            }
          >
            Open dropdown
          </Button>
        }
      >
        <ActionMenu
          groups={[{
            items: [
              { icon: <Edit01Icon size="sm" />,  label: 'Edit',      shortcut: '⌘E' },
              { icon: <Copy01Icon size="sm" />,  label: 'Duplicate' },
              { icon: <Share01Icon size="sm" />, label: 'Share',     shortcut: '⌘S' },
            ],
          },
          {
            items: [
              { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
            ],
          }]}
        />
      </Dropdown>
    );
  },
};
```

#### `LabelLeft`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-dropdown--labelleft)

```tsx
export const LabelLeft: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        label="Sort:"
        labelPosition="left"
        width="auto"
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={
              <ChevronDownIcon
                size="sm"
                className={clsx('transition-transform duration-200', open && 'rotate-180')}
              />
            }
          >
            Due date
          </Button>
        }
      >
        <ActionMenu
          groups={[{
            items: [
              { label: 'Due date',      selected: true, onClick: () => {} },
              { label: 'Priority',      onClick: () => {} },
              { label: 'Created',       onClick: () => {} },
              { label: 'Alphabetical',  onClick: () => {} },
            ],
          }]}
        />
      </Dropdown>
    );
  },
};
```

#### `LabelTop`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-dropdown--labeltop)

```tsx
export const LabelTop: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        label="Sort by"
        labelPosition="top"
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={
              <ChevronDownIcon
                size="sm"
                className={clsx('transition-transform duration-200', open && 'rotate-180')}
              />
            }
          >
            Due date
          </Button>
        }
      >
        <ActionMenu
          groups={[{
            items: [
              { label: 'Due date',      selected: true, onClick: () => {} },
              { label: 'Priority',      onClick: () => {} },
              { label: 'Created',       onClick: () => {} },
              { label: 'Alphabetical',  onClick: () => {} },
            ],
          }]}
        />
      </Dropdown>
    );
  },
};
```

#### `LabelPositions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-dropdown--labelpositions)

```tsx
export const LabelPositions: Story = {
  render: () => {
    const SortTrigger = (
      <Button variant="secondary" size="sm" endIcon={<ChevronDownIcon size="sm" />}>Due date</Button>
    );
    const menu = (
      <ActionMenu groups={[{ items: [{ label: 'Due date', selected: true }, { label: 'Priority' }] }]} />
    );
    return (
      <div className="flex flex-col gap-6 max-w-md">
        <Dropdown label="Top (default)" labelPosition="top"   trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown label="Left"           labelPosition="left"  trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown label="Right"          labelPosition="right" trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown label="Hidden"         labelPosition="none"  trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown trigger={SortTrigger}>{menu}</Dropdown>
      </div>
    );
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-dropdown--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '580:874', cells: DROPDOWN_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 850, height: 2500 }}>
      {DROPDOWN_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <DropdownCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
```

---

## FilterChip

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-filterchip--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1142-410 |
| Source | `components/data-display/Chip.tsx` |
| Story file | `components/data-display/Chip.stories.tsx` |

### Description

Chip — a compact pill control for displaying a label with optional icons on
either side. Mirrors the `Chip` ComponentSet in Figma
(Size × Interaction × Actions × Icon × State).
The X-to-remove pattern is just `iconRight={<XCloseIcon onClick={...} />}` —
it isn't a special prop. Pass any icon you want in either slot.

### Import

```tsx
import { FilterChip } from './components/data-display/Chip';
```

### Props

```ts
export interface ChipProps extends Omit<ChipVariantProps, 'disabled'> {
  /** Visible label text. Omit (or pass empty) for icon-only chips. */
  label?: string;
  /** Optional leading icon */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon (e.g. an X-close button for removable chips) */
  iconRight?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--default)

```tsx
export const Default: Story = {
  args: { label: 'Chip label' },
};
```

#### `IconLeft`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--iconleft)

```tsx
export const IconLeft: Story = {
  render: () => (
    <Chip label="Chip label" iconLeft={<Icon icon={Tag01Icon} size={12} />} />
  ),
};
```

#### `IconRight`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--iconright)

```tsx
export const IconRight: Story = {
  render: () => (
    <Chip label="Chip label" iconRight={<Icon icon={Tag01Icon} size={12} />} />
  ),
};
```

#### `IconBoth`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--iconboth)

```tsx
export const IconBoth: Story = {
  render: () => (
    <Chip
      label="Chip label"
      iconLeft={<Icon icon={Tag01Icon} size={12} />}
      iconRight={<Icon icon={Tag01Icon} size={12} />}
    />
  ),
};
```

#### `IconOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--icononly)

```tsx
export const IconOnly: Story = {
  render: () => (
    <Chip iconLeft={<Icon icon={Tag01Icon} size={12} />} />
  ),
};
```

#### `Removable`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--removable)

```tsx
export const Removable: Story = {
  render: () => (
    <Chip
      label="Removable"
      iconRight={
        <button
          type="button"
          aria-label="Remove"
          onClick={() => console.log('removed')}
          className="-mr-1 inline-flex h-4 w-4 items-center justify-center rounded-pill text-secondary hover:bg-recessed hover:text-primary"
        >
          <XCloseIcon size={12} aria-hidden="true" />
        </button>
      }
    />
  ),
};
```

#### `SingleSelected`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--singleselected)

```tsx
export const SingleSelected: Story = {
  render: () => <Chip label="Selected" selected="single" />,
};
```

#### `MultiSelected`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--multiselected)

```tsx
export const MultiSelected: Story = {
  render: () => <Chip label="Multi selected" selected="multi" />,
};
```

#### `Error`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--error)

```tsx
export const Error: Story = {
  render: () => <Chip label="Error chip" error />,
};
```

#### `Disabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--disabled)

```tsx
export const Disabled: Story = {
  render: () => <Chip label="Disabled" disabled />,
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Chip label="Small" size="sm" />
      <Chip label="Regular" size="md" />
    </div>
  ),
};
```

#### `InteractiveMultiSelect`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--interactivemultiselect)

```tsx
export const InteractiveMultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set(['a']));
    const items = ['a', 'b', 'c', 'd'];
    const toggle = (key: string) =>
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(key) ? next.delete(key) : next.add(key);
        return next;
      });
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((k) => (
          <Chip
            key={k}
            label={`Item ${k.toUpperCase()}`}
            selected={selected.has(k) ? 'multi' : 'none'}
            onClick={() => toggle(k)}
          />
        ))}
      </div>
    );
  },
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--allstates)

```tsx
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Chip label="Default" />
        <Chip label="Selected" selected="single" />
        <Chip label="Multi" selected="multi" />
        <Chip label="Error" error />
        <Chip label="Disabled" disabled />
      </div>
      <div className="flex items-center gap-3">
        <Chip label="Icon left"  iconLeft={<Icon icon={Tag01Icon} size={12} />} />
        <Chip label="Icon right" iconRight={<Icon icon={Tag01Icon} size={12} />} />
        <Chip label="Both" iconLeft={<Icon icon={Tag01Icon} size={12} />} iconRight={<Icon icon={Tag01Icon} size={12} />} />
        <Chip iconLeft={<Icon icon={Tag01Icon} size={12} />} />
      </div>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterchip--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1142:410', cells: CHIP_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 5900, height: 340 }}>
      {CHIP_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <ChipMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
```

---

## FilterSwatch

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-filterswatch--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=484-19 |
| Source | `components/primitives/FilterSwatch.tsx` |
| Story file | `components/primitives/FilterSwatch.stories.tsx` |

### Import

```tsx
import { FilterSwatch } from './components/primitives/FilterSwatch';
```

### Props

```ts
export interface FilterSwatchProps {
  /** Color value — use a value from the design system palette */
  color: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
  className?: string;
  label?: string;
  /** Overlay a flag icon on the swatch — marks this tile as high priority */
  highPriority?: boolean;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatch--default)

```tsx
export const Default: Story = {
  render: () => <MultiSelect />,
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatch--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(['sm', 'md'] as const).map((size) => (
        <div key={size} className="flex items-center gap-2">
          {[colors.brand[300], colors.green[300], colors.yellow[300]].map((color) => (
            <FilterSwatch key={color} color={color} selected size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};
```

#### `Inactive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatch--inactive)

```tsx
export const Inactive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch key={key} color={color} selected={false} />
      ))}
    </div>
  ),
};
```

#### `Flagged`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatch--flagged)

```tsx
export const Flagged: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch key={key} color={color} highPriority />
      ))}
    </div>
  ),
};
```

#### `FlaggedAndActive`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatch--flaggedandactive)

```tsx
export const FlaggedAndActive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch key={key} color={color} selected highPriority />
      ))}
    </div>
  ),
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatch--allstates)

```tsx
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <div key={key} className="flex items-center gap-4">
          <span className="w-20 text-body-sm text-muted">{key}</span>
          {(['sm', 'md'] as const).map((size) => (
            <div key={size} className="flex items-center gap-2">
              <FilterSwatch color={color} size={size} selected={false} />
              <FilterSwatch color={color} size={size} selected />
              <FilterSwatch color={color} size={size} selected={false} highPriority />
              <FilterSwatch color={color} size={size} selected highPriority />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatch--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '484:19', cells: FILTERSWATCH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 470, height: 200 }}>
      {FILTERSWATCH_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <PinnedSwatch cell={c} />
        </div>
      ))}
    </div>
  ),
};
```

---

## FilterSwatchGroup

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-filterswatchgroup--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=697-232 |
| Source | `components/primitives/FilterSwatchGroup.tsx` |
| Story file | `components/primitives/FilterSwatchGroup.stories.tsx` |

### Description

Returns swatches as a single row. Matches Figma `FilterSwatchGroup` canonical
(Layout=OneRow only). The card width grows horizontally to fit all swatches.

### Import

```tsx
import { FilterSwatchGroup } from './components/primitives/FilterSwatchGroup';
```

### Props

```ts
export interface FilterSwatchGroupProps {
  /** Category label shown alongside the cluster. Omit (or pass empty) to hide. */
  label?: string;
  /**
   * Where the label sits relative to the swatches.
   * - `bottom` (default): label below a card-wrapped cluster, centered.
   * - `left`: label to the left of bare swatches, vertically centered.
   */
  labelPosition?: 'bottom' | 'left';
  swatches: FilterSwatchGroupSwatch[];
  /** Applies to every swatch in the group */
  size?: 'sm' | 'md';
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--default)

```tsx
export const Default: Story = {
  render: () => <FilterSwatchGroup label="Status" swatches={STATUS_4} />,
};
```

#### `WithoutLabel`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--withoutlabel)

```tsx
export const WithoutLabel: Story = {
  render: () => <FilterSwatchGroup swatches={STATUS_4} />,
};
```

#### `LabelLeft`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--labelleft)

```tsx
export const LabelLeft: Story = {
  render: () => (
    <FilterSwatchGroup
      label="Filters:"
      labelPosition="left"
      swatches={STATUS_4}
    />
  ),
};
```

#### `TwoRows`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--tworows)

```tsx
export const TwoRows: Story = {
  render: () => (
    <FilterSwatchGroup label="Priority palette" swatches={FULL_PALETTE_10} />
  ),
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex items-start gap-8">
      <FilterSwatchGroup label="Status (sm)" swatches={STATUS_4} size="sm" />
      <FilterSwatchGroup label="Status (md)" swatches={STATUS_4} size="md" />
    </div>
  ),
};
```

#### `WithActiveAndFlagged`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--withactiveandflagged)

```tsx
export const WithActiveAndFlagged: Story = {
  render: () => (
    <FilterSwatchGroup
      label="Active + priority demo"
      swatches={[
        { color: colors.brand[300] },
        { color: colors.green[300], selected: true },
        { color: colors.yellow[300], highPriority: true },
        // The combined case — must render both the active outline AND the flag overlay
        { color: colors.red[300], selected: true, highPriority: true },
        { color: colors.neutral[300] },
      ]}
    />
  ),
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--allstates)

```tsx
export const AllStates: Story = {
  render: () => (
    <FilterSwatchGroup
      label="brand — states"
      swatches={[
        { color: colors.brand[300] },
        { color: colors.brand[300], selected: true },
        { color: colors.brand[300], highPriority: true },
        { color: colors.brand[300], selected: true, highPriority: true },
      ]}
    />
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-filterswatchgroup--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '697:232', cells: FSG_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 400, height: 180 }}>
      {FSG_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <FilterSwatchGroup
            size={c.size}
            labelPosition={c.labelPosition}
            label="Category"
            swatches={FSG_SAMPLE}
          />
        </div>
      ))}
    </div>
  ),
};
```

---

## HighPriorityFlag

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-highpriorityflag--docs |
| Source | `components/primitives/HighPriorityFlag.tsx` |
| Story file | `components/primitives/HighPriorityFlag.stories.tsx` |

### Import

```tsx
import { HighPriorityFlag } from './components/primitives/HighPriorityFlag';
```

### Props

```ts
export interface HighPriorityFlagProps {
  /** Click handler (e.g. navigate to the request). Forwarded to the Button. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Tooltip text. Defaults to "High priority". */
  tooltip?: string;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-highpriorityflag--default)

```tsx
export const Default: Story = {
  render: () => <HighPriorityFlag onClick={() => alert('high priority')} />,
};
```

#### `InContext`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-highpriorityflag--incontext)

```tsx
export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-body-md font-semibold text-primary">CFO Initial Inquiries</span>
      <HighPriorityFlag />
    </div>
  ),
};
```

---

## Icon

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-icon--docs |
| Source | `components/primitives/Icon.tsx` |
| Story file | `components/primitives/Icon.stories.tsx` |

### Import

```tsx
import { Icon } from './components/primitives/Icon';
```

### Props

```ts
export interface IconComponentProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}
```

```ts
export interface IconProps {
  icon: IconComponent;
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}
```

### Variants

#### `Activity`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--activity)

```tsx
export const Activity: Story = { args: { icon: ActivityIcon,    size: 20 } };
```

#### `Bell`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--bell)

```tsx
export const Bell: Story = { args: { icon: Bell01Icon,      size: 20 } };
```

#### `CheckCircle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--checkcircle)

```tsx
export const CheckCircle: Story = { args: { icon: CheckCircleIcon, size: 20 } };
```

#### `Settings`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--settings)

```tsx
export const Settings: Story = { args: { icon: Settings01Icon,  size: 20 } };
```

#### `Trash`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--trash)

```tsx
export const Trash: Story = { args: { icon: Trash01Icon,     size: 20 } };
```

#### `ArrowRight`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--arrowright)

```tsx
export const ArrowRight: Story = { args: { icon: ArrowRightIcon,  size: 20 } };
```

#### `Search`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--search)

```tsx
export const Search: Story = { args: { icon: SearchLgIcon,    size: 20 } };
```

#### `SortAlpha`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--sortalpha)

```tsx
export const SortAlpha: Story = { args: { icon: SortAlphaIcon,   size: 20 } };
```

#### `SortDate`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--sortdate)

```tsx
export const SortDate: Story = { args: { icon: SortDateIcon,    size: 20 } };
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-icon--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ActivityIcon size={16} className="text-secondary" />
      <ActivityIcon size={20} className="text-secondary" />
      <ActivityIcon size={24} className="text-secondary" />
      <ActivityIcon size={32} className="text-secondary" />
    </div>
  ),
};
```

---

## Input

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-input--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=537-41 |
| Source | `components/primitives/Input.tsx` |
| Story file | `components/primitives/Input.stories.tsx` |

### Import

```tsx
import { Input } from './components/primitives/Input';
```

### Props

```ts
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /**
   * Where the label sits relative to the input.
   * - `top` (default): stacked above the input.
   * - `left`: inline to the left of the input.
   * - `right`: inline to the right of the input.
   * - `none`: no label is rendered (equivalent to omitting `label`).
   * Omit `label` to render no label.
   */
  labelPosition?: 'top' | 'left' | 'right' | 'none';
  error?: string;
  size?: InputSize;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--default)

```tsx
export const Default: Story = { args: { label: 'Email', placeholder: 'you@example.com' } };
```

#### `WithError`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--witherror)

```tsx
export const WithError: Story = { args: { label: 'Email', error: 'Invalid email address' } };
```

#### `Disabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--disabled)

```tsx
export const Disabled: Story = { args: { label: 'Email', disabled: true, value: 'readonly' } };
```

#### `WithPlaceholder`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--withplaceholder)

```tsx
export const WithPlaceholder: Story = {
  args: { label: 'Search', placeholder: 'Search by name, email, or ID…' },
};
```

#### `ReadOnly`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--readonly)

```tsx
export const ReadOnly: Story = {
  args: { label: 'Account ID', value: 'acct_1A2B3C4D5E', readOnly: true },
};
```

#### `LabelPositions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--labelpositions)

```tsx
export const LabelPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Input label="Top (default)" labelPosition="top" placeholder="Stacked above" />
      <Input label="Left" labelPosition="left" placeholder="Inline left" />
      <Input label="Right" labelPosition="right" placeholder="Inline right" />
      <Input label="Hidden" labelPosition="none" placeholder="labelPosition='none' — label hidden" />
      <Input placeholder="No label (label prop omitted)" />
    </div>
  ),
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--sizes)

```tsx
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input size="xs" label="xs (h-7 / 28px)" placeholder="Extra small" />
      <Input size="sm" label="sm (h-8 / 32px)" placeholder="Small" />
      <Input size="md" label="md (h-9 / 36px)" placeholder="Medium — default" />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-input--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '537:41', cells: INPUT_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1250, height: 1950 }}>
      {INPUT_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <InputMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
```

---

## List

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-list--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=418-22 |
| Source | `components/data-display/List.tsx` |
| Story file | `components/data-display/List.stories.tsx` |

### Import

```tsx
import { List } from './components/data-display/List';
```

### Props

```ts
export interface ListProps { items: ListItem[]; className?: string; }
```

### Variants

#### `WithDescriptions`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-list--withdescriptions)

```tsx
export const WithDescriptions: Story = {
  args: { items: [
    { id: 1, primary: 'Alice Chen',   secondary: 'alice@example.com · Admin' },
    { id: 2, primary: 'Bob Martinez', secondary: 'bob@example.com · Editor' },
    { id: 3, primary: 'Carol Kim',    secondary: 'carol@example.com · Viewer' },
  ]},
};
```

#### `Simple`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-list--simple)

```tsx
export const Simple: Story = {
  args: { items: [
    { id: 1, primary: 'Dashboard' },
    { id: 2, primary: 'Orders' },
    { id: 3, primary: 'Settings' },
  ]},
};
```

#### `EmptyState`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-list--emptystate)

```tsx
export const EmptyState: Story = {
  args: { items: [] },
};
```

#### `SingleItem`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-list--singleitem)

```tsx
export const SingleItem: Story = {
  args: { items: [
    { id: 1, primary: 'Only Item', secondary: 'This is the sole entry in the list' },
  ]},
};
```

#### `LongList`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-list--longlist)

```tsx
export const LongList: Story = {
  args: { items: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    primary: `Item ${i + 1}`,
    secondary: `Detail line for item ${i + 1}`,
  }))},
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-list--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '418:22', cells: LIST_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 416, height: 205 }}>
      {LIST_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <List items={MATRIX_ITEMS} />
        </div>
      ))}
    </div>
  ),
};
```

---

## NotificationBadge

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-notificationbadge--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=483-7 |
| Source | `components/primitives/NotificationBadge.tsx` |
| Story file | `components/primitives/NotificationBadge.stories.tsx` |

### Description

Numbered notification badge — same shape as CountBadge, red notification treatment.
Renders nothing when count is 0.

### Import

```tsx
import { NotificationBadge } from './components/primitives/NotificationBadge';
```

### Props

```ts
export interface NotificationBadgeProps {
  count: number;
  max?: number;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-notificationbadge--default)

```tsx
export const Default: Story = { args: { count: 4 } };
```

#### `AllCounts`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-notificationbadge--allcounts)

```tsx
export const AllCounts: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <NotificationBadge count={1} />
      <NotificationBadge count={4} />
      <NotificationBadge count={12} />
      <NotificationBadge count={99} />
      <NotificationBadge count={100} />
      <NotificationBadge count={999} />
    </div>
  ),
};
```

#### `Zero`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-notificationbadge--zero)

```tsx
export const Zero: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm text-secondary">  // token-lint-skip: showcase fixed dims for screenshot stability
      <span>count=0 renders nothing:</span>
      <NotificationBadge count={0} />
      <span>(↑ empty)</span>
    </div>
  ),
};
```

#### `OverlaidOnIcon`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-notificationbadge--overlaidonicon)

```tsx
export const OverlaidOnIcon: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {[1, 4, 12, 100].map(count => (
        <div key={count} className="relative inline-flex">
          {/* Placeholder icon */}
          <span className="flex h-8 w-8 items-center justify-center rounded-control bg-surface text-secondary text-label-md">
            🔔
          </span>
          <NotificationBadge
            count={count}
            className="absolute -top-1 -right-1"
          />
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-notificationbadge--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '483:7', cells: NB_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 16, height: 20 }}>
      {NB_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <NotificationBadge count={5} />
        </div>
      ))}
    </div>
  ),
};
```

---

## Radio

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-radio--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=491-12 |
| Source | `components/forms/Radio.tsx` |
| Story file | `components/forms/Radio.stories.tsx` |

### Import

```tsx
import { Radio } from './components/forms/Radio';
```

### Props

```ts
export interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-radio--default)

```tsx
export const Default: Story = {
  render: () => {
    const [val, setVal] = useState('a');
    return <Radio name="demo" options={opts} value={val} onChange={setVal} />;
  },
};
```

#### `Disabled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-radio--disabled)

```tsx
export const Disabled: Story = {
  render: () => (
    <Radio name="demo-disabled" options={opts} value="a" disabled />
  ),
};
```

#### `DisabledSelected`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-radio--disabledselected)

```tsx
export const DisabledSelected: Story = {
  render: () => (
    <Radio name="demo-disabled-selected" options={opts} value="b" disabled />
  ),
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-radio--allstates)

```tsx
export const AllStates: Story = {
  render: () => {
    const [val, setVal] = useState('b');
    return (
      <div className="flex flex-col gap-6">
        <Radio name="all-states-interactive" options={opts} value={val} onChange={setVal} />
        <Radio name="all-states-disabled" options={opts} value="c" disabled />
      </div>
    );
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-radio--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '491:12', cells: RADIO_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1064, height: 61 }}>
      {RADIO_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <RadioMatrixCell cell={c} name={`matrix-${c.checked}-${c.state}`} />
        </div>
      ))}
    </div>
  ),
};
```

---

## ResizeHandle

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-resizehandle--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=802-10 |
| Source | `components/layout/ResizeHandle.tsx` |
| Story file | `components/layout/ResizeHandle.stories.tsx` |

### Import

```tsx
import { ResizeHandle } from './components/layout/ResizeHandle';
```

### Props

```ts
export type ResizeHandleProps = Omit<SeparatorProps, 'className'> & {
  className?: string;
};
```

### Variants

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-resizehandle--default)

```tsx
export const Default: Story = {
  args: {},
};
```

#### `WithId`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-resizehandle--withid)

```tsx
export const WithId: Story = {
  name: 'With Explicit ID',
  args: {
    id: 'my-resize-handle',
  },
};
```

#### `CustomStyle`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-resizehandle--customstyle)

```tsx
export const CustomStyle: Story = {
  name: 'Custom Style (Wider Hit Area)',
  args: {
    className: 'w-1 bg-action-primary/30 hover:bg-action-primary',
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-resizehandle--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '802:10', cells: RESIZEHANDLE_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 128, height: 280 }}>
      {RESIZEHANDLE_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <ResizeHandleMatrixCell cell={c} id={`matrix-${c.state}`} />
        </div>
      ))}
    </div>
  ),
};
```

---

## Skeleton

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-skeleton--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=76-19 |
| Source | `components/feedback/Skeleton.tsx` |
| Story file | `components/feedback/Skeleton.stories.tsx` |

### Import

```tsx
import { Skeleton } from './components/feedback/Skeleton';
```

### Props

```ts
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}
```

### Variants

#### `Text`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-skeleton--text)

```tsx
export const Text: Story = { args: { width: '200px', height: '16px' } };
```

#### `Block`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-skeleton--block)

```tsx
export const Block: Story = { args: { width: '300px', height: '80px' } };
```

#### `Avatar`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-skeleton--avatar)

```tsx
export const Avatar: Story = {
  render: () => (
    <Skeleton width="48px" height="48px" className="rounded-full" />
  ),
};
```

#### `Card`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-skeleton--card)

```tsx
export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72 rounded-card border border-line p-4">
      <Skeleton width="256px" height="120px" />
      <Skeleton width="154px" height="16px" />
      <Skeleton width="256px" height="14px" />
      <Skeleton width="205px" height="14px" />
    </div>
  ),
};
```

#### `RequestRow`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-skeleton--requestrow)

```tsx
export const RequestRow: Story = {
  render: () => (
    <div className="flex items-center gap-3 w-80 px-4 py-3">
      <Skeleton width="12px" height="12px" className="rounded-full shrink-0" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton width="120px" height="14px" />
        <Skeleton width="180px" height="12px" />
      </div>
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-skeleton--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:19', cells: SKELETON_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 320, height: 580 }}>
      {SKELETON_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          {renderSkeleton(c.pattern)}
        </div>
      ))}
    </div>
  ),
};
```

#### `FullPage`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-skeleton--fullpage)

```tsx
export const FullPage: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-lg p-6">
      {/* page header */}
      <div className="flex items-center gap-4">
        <Skeleton width="56px" height="56px" className="rounded-full shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton width="40%" height="18px" />
          <Skeleton width="60%" height="14px" />
        </div>
      </div>
      {/* stat row */}
      <div className="flex gap-4">
        {[120, 100, 110].map((w, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton width={`${w}px`} height="12px" />
            <Skeleton width="80px" height="28px" />
          </div>
        ))}
      </div>
      {/* request rows */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton width="12px" height="12px" className="rounded-full shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton width={`${55 + (i % 3) * 15}%`} height="14px" />
            <Skeleton width={`${40 + (i % 2) * 20}%`} height="12px" />
          </div>
        </div>
      ))}
    </div>
  ),
};
```

---

## Spinner

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-spinner--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=222-11 |
| Source | `components/feedback/Spinner.tsx` |
| Story file | `components/feedback/Spinner.stories.tsx` |

### Import

```tsx
import { Spinner } from './components/feedback/Spinner';
```

### Props

```ts
export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}
```

### Variants

#### `Small`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-spinner--small)

```tsx
export const Small: Story = { args: { size: 'sm' } };
```

#### `Medium`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-spinner--medium)

```tsx
export const Medium: Story = { args: { size: 'md' } };
```

#### `Large`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-spinner--large)

```tsx
export const Large: Story = { args: { size: 'lg' } };
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-spinner--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '222:11', cells: SPINNER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 144, height: 52 }}>
      {SPINNER_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <Spinner size={c.size} />
        </div>
      ))}
    </div>
  ),
};
```

---

## StatusDot

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-statusdot--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1521-5 |
| Source | `components/primitives/StatusDot.tsx` |
| Story file | `components/primitives/StatusDot.stories.tsx` |

### Description

StatusDot — canonical 8×8 colored dot. Mirrors the Figma `StatusDot`
ComponentSet (1521:5).
After the indicator/ → status/ consolidation pass, every dot color is
sourced from `action/primary` (brand-blue) or a `status/*` flat -500
accent. The StatusDot variant names are kept as a stable public API; they
just map to the canonical underlying tokens.
Positioning + halo ring are left to the consumer via `className`
(e.g. an overlapping indicator wants `absolute -top-1 -right-1 ring-2 ring-elevated`).

### Import

```tsx
import { StatusDot } from './components/primitives/StatusDot';
```

### Props

```ts
export interface StatusDotProps {
  variant: StatusDotVariant;
  className?: string;
}
```

### Variants

#### `Unread`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--unread)

```tsx
export const Unread: Story = { args: { variant: 'unread' } };
```

#### `Attention`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--attention)

```tsx
export const Attention: Story = { args: { variant: 'attention' } };
```

#### `Success`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--success)

```tsx
export const Success: Story = { args: { variant: 'success' } };
```

#### `Error`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--error)

```tsx
export const Error: Story = { args: { variant: 'error' } };
```

#### `Warning`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--warning)

```tsx
export const Warning: Story = { args: { variant: 'warning' } };
```

#### `Cerulean`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--cerulean)

```tsx
export const Cerulean: Story = { args: { variant: 'cerulean' } };
```

#### `Purple`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--purple)

```tsx
export const Purple: Story = { args: { variant: 'purple' } };
```

#### `Pink`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--pink)

```tsx
export const Pink: Story = { args: { variant: 'pink' } };
```

#### `Eggplant`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--eggplant)

```tsx
export const Eggplant: Story = { args: { variant: 'eggplant' } };
```

#### `Brand`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--brand)

```tsx
export const Brand: Story = { args: { variant: 'brand' } };
```

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6 text-label-sm text-muted">
      {(['unread','attention','success','error','warning','cerulean','purple','pink','eggplant','brand'] as const).map((v) => (
        <span key={v} className="inline-flex items-center gap-2">
          <StatusDot variant={v} /> {v}
        </span>
      ))}
    </div>
  ),
};
```

#### `OverlaidOnIcon`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--overlaidonicon)

```tsx
export const OverlaidOnIcon: Story = {
  render: () => (
    <div className="relative inline-flex h-5 w-5 items-center justify-center rounded-card bg-recessed">
      <span className="text-muted">▦</span>
      <StatusDot variant="unread" className="absolute right-0 top-0 ring-2 ring-elevated" />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statusdot--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1521:5', cells: SD_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 145, height: 41 }}>
      {SD_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <StatusDot variant={c.v} />
        </div>
      ))}
    </div>
  ),
};
```

---

## StatusTile

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-statustile--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=1552-7 |
| Source | `components/primitives/StatusTile.tsx` |
| Story file | `components/primitives/StatusTile.stories.tsx` |

### Description

StatusTile — a 10×10 squircle that visualises a request's status colour.
Mirrors the Figma `StatusTile` canonical (1552:7). Used in dense status
indicators (e.g. row prefixes, color-nav tiles, density legends).
For interactive status pickers (with hover / focus / selected states), use
`FilterSwatch` instead — this primitive is intentionally non-interactive.

### Import

```tsx
import { StatusTile } from './components/primitives/StatusTile';
```

### Props

```ts
export interface StatusTileProps {
  variant: StatusTileVariant;
  /** Optional accessible label, e.g. `"Outstanding · 4 items"` */
  label?: string;
  className?: string;
}
```

### Variants

#### `NotStarted`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statustile--notstarted)

```tsx
export const NotStarted: Story = { args: { variant: 'not-started', label: 'Not started' } };
```

#### `Outstanding`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statustile--outstanding)

```tsx
export const Outstanding: Story = { args: { variant: 'outstanding', label: 'Outstanding' } };
```

#### `Fulfilled`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statustile--fulfilled)

```tsx
export const Fulfilled: Story = { args: { variant: 'fulfilled',   label: 'Fulfilled' } };
```

#### `Overdue`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statustile--overdue)

```tsx
export const Overdue: Story = { args: { variant: 'overdue',     label: 'Overdue' } };
```

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statustile--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <StatusTile variant="not-started" label="Not started" />
      <StatusTile variant="outstanding" label="Outstanding" />
      <StatusTile variant="fulfilled"   label="Fulfilled"   />
      <StatusTile variant="overdue"     label="Overdue"     />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-statustile--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1552:7', cells: ST_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 82, height: 10 }}>
      {ST_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <StatusTile variant={c.v} />
        </div>
      ))}
    </div>
  ),
};
```

---

## Switch

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-switch--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=492-18 |
| Source | `components/forms/Switch.tsx` |
| Story file | `components/forms/Switch.stories.tsx` |

### Import

```tsx
import { Switch } from './components/forms/Switch';
```

### Props

```ts
export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  /** `md` (default) = 24×44 track / 20×20 thumb; `sm` = 16×28 track / 12×12 thumb. */
  size?: SwitchSize;
  className?: string;
}
```

### Variants

#### `Off`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-switch--off)

```tsx
export const Off: Story = {
  render: () => { const [v, setV] = useState(false); return <Switch checked={v} onChange={setV} label="Enable feature" />; },
};
```

#### `On`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-switch--on)

```tsx
export const On: Story = {
  render: () => { const [v, setV] = useState(true); return <Switch checked={v} onChange={setV} label="Enable feature" />; },
};
```

#### `DisabledOff`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-switch--disabledoff)

```tsx
export const DisabledOff: Story = {
  render: () => <Switch checked={false} onChange={() => {}} label="Enable feature" disabled />,
};
```

#### `DisabledOn`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-switch--disabledon)

```tsx
export const DisabledOn: Story = {
  render: () => <Switch checked={true} onChange={() => {}} label="Enable feature" disabled />,
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-switch--allstates)

```tsx
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Switch checked={true} onChange={() => {}} label="On" />
      <Switch checked={false} onChange={() => {}} label="Off" />
      <Switch checked={true} onChange={() => {}} label="Disabled On" disabled />
      <Switch checked={false} onChange={() => {}} label="Disabled Off" disabled />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-switch--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '492:18', cells: SWITCH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 500, height: 180 }}>
      {SWITCH_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <SwitchMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
```

---

## Table

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-table--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=2032-1834 |
| Source | `components/data-display/Table.tsx` |
| Story file | `components/data-display/Table.stories.tsx` |

### Description

──────────────────────────────────────────────────────────────────────────
Table — organism
──────────────────────────────────────────────────────────────────────────
Composed entirely from canonical atoms:
  `TableHeaderCell` × n   — for `<th>` (uses `Button` for header actions)
  `TableCell`        × n  — for `<td>`
The organism owns the data → row → cell mapping, the variant prop
propagation, and the single-cell selection state. It does NOT own any
cell-level styling — that lives in the atoms.
Cell-level interactions (focus, hover, selected) apply to BOTH `modern`
and `excel` variants. The visual difference between the two is purely
spacing density + grid borders.
@see TableCell, TableHeaderCell — Composition rule (CLAUDE.md)

### Import

```tsx
import { Table } from './components/data-display/Table';
```

### Props

```ts
export interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  /**
   * Visual style.
   * - `modern` (default): bottom dividers only, no vertical column lines.
   * - `excel`: full cell-grid borders + outer table chrome.
   *
   * Both variants are cell-interactive — there is no row-level click/focus.
   */
  variant?: TableVariant;
  /**
   * Cell click handler — fires when an individual cell is clicked (or
   * Enter/Space when focused). Applies to BOTH variants.
   */
  onCellClick?: (row: T, rowIndex: number, columnKey: keyof T, columnIndex: number) => void;
  /** The currently selected cell (single-selection). */
  selectedCell?: { row: number; col: number };
  className?: string;
}
```

---

## Timestamp

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-timestamp--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=456-15 |
| Source | `components/primitives/Timestamp.tsx` |
| Story file | `components/primitives/Timestamp.stories.tsx` |

### Import

```tsx
import { Timestamp } from './components/primitives/Timestamp';
```

### Props

```ts
export interface TimestampProps {
  date: Date | string;
  /**
   * What to render.
   * - `datetime` (default): `MM/DD/YYYY HH:MM AM/PM`
   * - `date`: `MM/DD/YYYY` (no time)
   * - `short-date`: `MM/DD/YY` (no time, 2-digit year) — matches the legacy
   *   "00/00/00" placeholder used in FileRow / dense list contexts.
   * - `time`: `HH:MM AM/PM` (no date)
   */
  format?: TimestampFormat;
  className?: string;
}
```

### Variants

#### `WithDateObject`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-timestamp--withdateobject)

```tsx
export const WithDateObject: Story = {
  args: { date: new Date('2025-06-15T14:30:00') },
};
```

#### `WithISOString`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-timestamp--withisostring)

```tsx
export const WithISOString: Story = {
  args: { date: '2025-06-15T14:30:00' },
};
```

#### `InvalidDate`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-timestamp--invaliddate)

```tsx
export const InvalidDate: Story = {
  args: { date: 'not-a-date' },
};
```

#### `WithClassName`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-timestamp--withclassname)

```tsx
export const WithClassName: Story = {
  args: { date: new Date('2025-01-01T09:00:00'), className: 'font-bold text-red-500' },
};
```

#### `AllStates`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-timestamp--allstates)

```tsx
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-2 text-sm">  // token-lint-skip: showcase fixed dims for screenshot stability
      <div>
        <span className="text-muted mr-2">Date object:</span>
        <Timestamp date={new Date('2025-06-15T14:30:00')} />
      </div>
      <div>
        <span className="text-muted mr-2">ISO string:</span>
        <Timestamp date="2025-06-15T14:30:00" />
      </div>
      <div>
        <span className="text-muted mr-2">Midnight:</span>
        <Timestamp date={new Date('2025-12-31T00:00:00')} />
      </div>
      <div>
        <span className="text-muted mr-2">Invalid:</span>
        <Timestamp date="not-a-date" />
      </div>
    </div>
  ),
};
```

#### `Formats`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-timestamp--formats)

```tsx
export const Formats: Story = {
  render: () => {
    const d = new Date('2025-06-15T14:30:00');
    return (
      <div className="flex flex-col gap-2 text-body-md">
        <div><span className="text-muted mr-2">datetime (default):</span><Timestamp date={d} /></div>
        <div><span className="text-muted mr-2">date:</span><Timestamp date={d} format="date" /></div>
        <div><span className="text-muted mr-2">short-date:</span><Timestamp date={d} format="short-date" /></div>
        <div><span className="text-muted mr-2">time:</span><Timestamp date={d} format="time" /></div>
      </div>
    );
  },
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-timestamp--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '456:15', cells: TIMESTAMP_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative text-body-md text-primary" style={{ width: 144, height: 21 }}>
      {TIMESTAMP_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <Timestamp date={new Date('2026-04-16T10:00:00')} />
        </div>
      ))}
    </div>
  ),
};
```

---

## Toast

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/primitives-toast--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=222-22 |
| Source | `components/feedback/Toast.tsx` |
| Story file | `components/feedback/Toast.stories.tsx` |

### Import

```tsx
import { Toast } from './components/feedback/Toast';
```

### Props

```ts
export interface ToastProps {
  message: string;
  description?: string;
  variant?: 'default' | 'success' | 'error';
  className?: string;
}
```

### Variants

#### `AllVariants`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-toast--allvariants)

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toast message="File saved" variant="default" />
      <Toast message="Success!" description="Your changes were saved." variant="success" />
      <Toast message="Error" description="Something went wrong. Please try again." variant="error" />
    </div>
  ),
};
```

#### `Default`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-toast--default)

```tsx
export const Default: Story = { args: { message: 'File saved', variant: 'default' } };
```

#### `Success`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-toast--success)

```tsx
export const Success: Story = { args: { message: 'Saved!', description: 'Your changes were saved.', variant: 'success' } };
```

#### `Error`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-toast--error)

```tsx
export const Error: Story = { args: { message: 'Error', description: 'Something went wrong.', variant: 'error' } };
```

#### `LongMessage`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-toast--longmessage)

```tsx
export const LongMessage: Story = {
  args: {
    message: 'Your export is taking longer than expected',
    description:
      'We are still processing your request. Large exports can take several minutes. You will receive an email notification once the file is ready to download.',
    variant: 'default',
  },
};
```

#### `Stacked`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-toast--stacked)

```tsx
export const Stacked: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toast message="File saved" variant="default" />
      <Toast message="Profile updated" description="Your changes were saved successfully." variant="success" />
      <Toast message="Upload failed" description="The file could not be uploaded. Please try again." variant="error" />
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/primitives-toast--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '222:22', cells: TOAST_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1040, height: 106 }}>
      {TOAST_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Toast variant={c.v} message={c.message} description={c.description} className="!max-w-none w-full" />
        </div>
      ))}
    </div>
  ),
};
```

---


# Foundation

## Colors

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/foundation-colors--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=77-2 |
| Story file | `components/foundation/Colors.stories.tsx` |

---

## Icons

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/foundation-icons--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=76-67 |
| Story file | `components/primitives/IconLibrary.stories.tsx` |

### Variants

#### `Library`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-icons--library)

```tsx
export const Library: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [size, setSize] = useState<16 | 20 | 24>(20);
    const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) return ALL_ICONS;
      return ALL_ICONS.filter((i) => i.displayName.includes(q));
    }, [query]);

    return (
      <div className="bg-canvas p-8 min-h-screen">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-display-lg font-bold text-primary">Icon Library</h1>
          <p className="text-body-md text-secondary">
            {ALL_ICONS.length} icons · 3 sizes each (Small 16 / Medium 20 / Large 24) ·
            Mirrors Figma Icons page (76:67)
          </p>
        </div>

        <div className="mb-6 flex items-center gap-4 sticky top-0 bg-canvas py-3 z-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${ALL_ICONS.length} icons…`}
            className="h-9 w-80 rounded-control border border-line-strong bg-elevated px-3 text-body-md text-primary placeholder:text-muted focus:border-line-focus focus:outline-none focus:ring-2 focus:ring-line-focus/20"
          />
          <div className="flex items-center gap-1">
            {([16, 20, 24] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`h-9 px-3 rounded-control text-body-sm transition-colors ${
                  size === s
                    ? 'bg-action-primary text-on-accent'
                    : 'bg-elevated text-secondary hover:bg-surface'
                }`}
              >
                {s}px
              </button>
            ))}
          </div>
          <span className="text-label-md text-muted">
            {filtered.length} of {ALL_ICONS.length}
          </span>
        </div>

        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}
        >
          {filtered.map(({ name, displayName, Component }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-card border border-line bg-elevated p-3 hover:border-line-strong transition-colors"
            >
              <div className="flex h-10 items-center justify-center text-primary">
                <Component size={size} />
              </div>
              <span className="text-caption text-muted font-mono text-center truncate w-full">
                {displayName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
```

#### `Sizes`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-icons--sizes)

```tsx
export const Sizes: Story = {
  render: () => {
    const Sample = ALL_ICONS.find((i) => i.displayName === 'activity')?.Component;
    if (!Sample) return <p>Activity icon not found.</p>;
    return (
      <div className="bg-canvas p-8">
        <h2 className="text-heading-lg font-semibold text-primary mb-4">Canonical Sizes</h2>
        <p className="text-body-md text-secondary mb-6">
          Every icon ships at 3 sizes that match Figma's <code className="text-code font-mono">Size=Small | Medium | Large</code> variants.
        </p>
        <div className="flex items-end gap-8 text-primary">
          <div className="flex flex-col items-center gap-2"><Sample size={16} /><span className="text-caption text-muted">Small / 16px</span></div>
          <div className="flex flex-col items-center gap-2"><Sample size={20} /><span className="text-caption text-muted">Medium / 20px</span></div>
          <div className="flex flex-col items-center gap-2"><Sample size={24} /><span className="text-caption text-muted">Large / 24px</span></div>
        </div>
      </div>
    );
  },
};;
```

---

## Radii

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/foundation-radii--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=77-3 |
| Story file | `components/foundation/Radii.stories.tsx` |

### Variants

#### `All`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-radii--all)

```tsx
export const All: Story = {
  render: () => (
    <div className="flex flex-wrap gap-10 p-8">
      {radii.map((r) => (
        <div key={r.name} className="flex flex-col items-start gap-3">
          <div className={`w-32 h-20 bg-elevated border border-line-strong ${r.cls}`} />
          <div className="flex flex-col">
            <span className="text-body-sm font-semibold text-primary">radius/{r.name}</span>
            <span className="text-body-md text-secondary">{r.value}</span>
            <span className="text-caption text-muted">{r.use}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-radii--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:3', cells: RADIUS_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1080, height: 420 }}>
      {/* Page header — matches Figma's "Border Radius" + subtitle */}
      <div className="absolute" style={{ left: 80, top: 80, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Border Radius</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 122, width: 600 }}>
        <p className="text-body-md text-secondary">4 named radius tokens · Used as cornerRadius in Figma components</p>
      </div>

      {RADIUS_CELLS.map((c) => (
        <div key={c.variant}>
          {/* Swatch rectangle (pixel-pinned, verified) */}
          <div
            className={`absolute bg-elevated border border-line-strong ${RADIUS_CLASS[c.name]}`}
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h, borderWidth: 1.5 }}
          />
          {/* Doc labels — match Figma's per-swatch text stack */}
          <div className="absolute" style={{ left: c.x, top: c.labelY }}>
            <span className="text-body-sm font-semibold text-primary">{c.variant}</span>
          </div>
          <div className="absolute" style={{ left: c.x, top: c.valueY }}>
            <span className="text-body-md text-secondary">{c.value}</span>
          </div>
          <div className="absolute" style={{ left: c.x, top: c.useY }}>
            <span className="text-caption text-muted">{c.use}</span>
          </div>
        </div>
      ))};
```

---

## Semantics

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/foundation-semantics--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=77-4 |
| Story file | `components/foundation/Semantics.stories.tsx` |

### Variants

#### `All`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-semantics--all)

```tsx
export const All: Story = {
  render: () => (
    <div className="space-y-10">
      {SECTIONS.map((section) => (
        <div key={section.title}>
          <p className="text-body-sm font-semibold text-secondary mb-3">{section.title}</p>
          <div className="flex flex-wrap gap-4">
            {section.tokens.map((t) => (
              <div key={t.name} className="flex flex-col items-start gap-1.5">
                <div className={`w-16 h-16 rounded-card border border-line ${t.cls}`} />
                <span className="text-label-md text-secondary">{t.name}</span>
                <span className="text-caption text-muted font-mono">{t.cssVar}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-semantics--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:4', cells: CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 600, height: PAGE_HEIGHT }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 0, top: -100, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Semantic Tokens</h1>
      </div>
      <div className="absolute" style={{ left: 0, top: -58, width: 600 }}>
        <p className="text-body-md text-secondary">
          {ALL_TOKENS.length} semantic tokens · Light and Dark modes · grouped by role
        </p>
      </div>

      {/* Section headers */}
      {SECTION_LAYOUT.map((s) => (
        <div key={s.title} className="absolute" style={{ left: 24, top: s.headerY }}>
          <span className="text-caption font-bold text-muted tracking-wider">{s.title}</span>
        </div>
      ))}

      {/* Per-token rows: 32×32 swatch + token name + CSS var label */}
      {CELLS.map((c, i) => {
        const t = ALL_TOKENS[i];
        return (
          <div key={c.variant}>
            <div
              className={`absolute rounded-control border border-line ${c.cls}`}
              data-matrix-cell
              style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
            />
            <div className="absolute" style={{ left: 68, top: c.y + 2 }}>
              <span className="text-body-sm text-primary">{t.name}</span>
            </div>
            <div className="absolute" style={{ left: 68, top: c.y + 20 }}>
              <span className="text-caption text-muted font-mono">{t.cssVar}</span>
            </div>
          </div>
        );
      })}
    </div>
  ),
};
```

---

## Shadows

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/foundation-shadows--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=77-5 |
| Story file | `components/foundation/Shadows.stories.tsx` |

### Variants

#### `All`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-shadows--all)

```tsx
export const All: Story = {
  render: () => (
    <div className="flex flex-wrap gap-10 p-8">
      {shadows.map((s) => (
        <div key={s.name} className="flex flex-col items-center gap-3">
          <div className={`w-24 h-24 rounded-card bg-elevated ${s.cls}`} />
          <span className="text-label-md text-secondary">{s.label}</span>
          <span className="text-caption text-muted font-mono">{s.name}</span>
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-shadows--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:5', cells: SHADOW_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1240, height: 380 }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 80, top: 80, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Shadows</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 122, width: 600 }}>
        <p className="text-body-md text-secondary">4 shadow levels · Applied via Figma Effect Styles</p>
      </div>

      {SHADOW_CELLS.map((c) => (
        <div key={c.variant}>
          {/* Shadow swatch card */}
          <div
            className={`absolute bg-elevated rounded-card ${c.shadow.cls}`}
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          />
          {/* Title centered within swatch (Figma puts title text overlapping the card) */}
          <div className="absolute" style={{ left: c.x + 16, top: c.titleY }}>
            <span className="text-body-md font-semibold text-primary">{c.shadow.label}</span>
          </div>
          {/* CSS text under the swatch */}
          <div className="absolute" style={{ left: c.x, top: c.cssY }}>
            <span className="text-caption text-muted font-mono">{c.shadow.cssText}</span>
          </div>
          {/* Use case under the css text */}
          <div className="absolute" style={{ left: c.x, top: c.useY }}>
            <span className="text-caption text-secondary">{c.shadow.use}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
```

---

## Spacing

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/foundation-spacing--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=77-6 |
| Story file | `components/foundation/Spacing.stories.tsx` |

### Variants

#### `All`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-spacing--all)

```tsx
export const All: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      {ALL_ROWS.map(({ token, value, pxLabel }) => (
        <div key={token} className="flex items-center gap-6">
          <span className="w-44 text-label-md text-secondary font-mono shrink-0">{token}</span>
          <div className="h-5 rounded-control bg-action-primary shrink-0" style={{ width: value }} />
          <span className="text-label-md text-secondary">{pxLabel}</span>
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-spacing--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:6', cells: SPACING_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 700, height: 1140 }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 80, top: 80, width: 600 }}>
        <h1 className="text-display font-bold text-primary">Spacing</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 124, width: 620 }}>
        <p className="text-body-md text-secondary">4px base unit · 8px grid · 19 spacing tokens · Bar widths bound to NUMBER variables</p>
      </div>

      {/* Section headers */}
      <div className="absolute" style={{ left: 80, top: 176 }}>
        <span className="text-caption font-bold text-muted tracking-wider">BASE SCALE</span>
      </div>
      <div className="absolute" style={{ left: 309, top: 184 }}>
        <span className="text-caption text-muted">VARIABLE BOUND WIDTH →</span>
      </div>
      <div className="absolute" style={{ left: 80, top: 888 }}>
        <span className="text-caption font-bold text-muted tracking-wider">SEMANTIC SPACING</span>
      </div>

      {/* Per-row content */}
      {SPACING_CELLS.map((c) => (
        <div key={c.variant}>
          {/* Token name (left column) */}
          <div className="absolute" style={{ left: 80, top: c.row.textY }}>
            <span className="text-body-sm font-mono text-primary">{c.row.token}</span>
          </div>
          {/* px value */}
          <div className="absolute" style={{ left: 232, top: c.row.textY }}>
            <span className="text-body-sm text-secondary">{c.row.pxLabel}</span>
          </div>
          {/* Width bar — pixel-pinned cell */}
          <div
            className="absolute rounded-control bg-action-primary"
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          />
          {/* Row divider */}
          <div
            className="absolute bg-line"
            style={{ left: 80, top: c.row.textY + 28.5, width: 600, height: 1 }}
          />
          {/* Use-case label (semantic rows only) */}
          {c.row.use && (
            <div className="absolute" style={{ left: c.x + c.w + 16, top: c.row.textY + 0.5 }}>
              <span className="text-caption text-secondary">{c.row.use}</span>
            </div>
          )}
        </div>
      ))}

      {/* Bottom note */}
      <div className="absolute" style={{ left: 80, top: 1116 }}>
        <span className="text-caption text-muted">● Bar width = live NUMBER variable value. Changing Spacing variables in Figma updates bar widths automatically.</span>
      </div>
    </div>
  ),
};
```

---

## Typography

| Source | Link |
|--------|------|
| Storybook (docs) | https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/docs/foundation-typography--docs |
| Figma | https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS?node-id=77-7 |
| Story file | `components/foundation/Typography.stories.tsx` |

### Variants

#### `TypeScale`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-typography--typescale)

```tsx
export const TypeScale: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-body-sm font-semibold text-secondary mb-4">Type Scale</p>
      {TYPE_SCALE.map((s) => (
        <div key={s.label} className="flex items-baseline gap-6 border-b border-line py-2">
          <span className="w-28 text-label-md text-muted font-mono shrink-0">{s.label}</span>
          <span className={`${s.cls} text-primary flex-1`}>{s.specimen}</span>
          <span className="text-caption text-muted shrink-0">{s.specs}</span>
        </div>
      ))}
    </div>
  ),
};
```

#### `Weights`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-typography--weights)

```tsx
export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-body-sm font-semibold text-secondary mb-4">Font Weights</p>
      {WEIGHTS.map((w) => (
        <div key={w.label} className="flex items-center gap-6">
          <span className="w-24 text-label-md text-muted font-mono shrink-0">{w.label}</span>
          <span className={`text-heading-md ${w.cls} text-primary`}>{w.specimen}</span>
        </div>
      ))}
    </div>
  ),
};
```

#### `Matrix`

[Open in Storybook →](https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/foundation-typography--matrix)

```tsx
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '77:7', cells: TYPO_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1000, height: 1080 }}>
      {/* Page header */}
      <div className="absolute" style={{ left: 80, top: 80 }}>
        <h1 className="text-display-lg font-bold text-primary">Typography</h1>
      </div>
      <div className="absolute" style={{ left: 80, top: 122 }}>
        <p className="text-body-md text-secondary">SF Pro typeface · 12 text styles · Linked via Figma Text Styles</p>
      </div>

      {/* Column headers + divider */}
      <div className="absolute" style={{ left: 80, top: 170 }}>
        <span className="text-caption font-semibold text-muted tracking-wider">STYLE</span>
      </div>
      <div className="absolute" style={{ left: 280, top: 170 }}>
        <span className="text-caption font-semibold text-muted tracking-wider">SPECIMEN</span>
      </div>
      <div className="absolute" style={{ left: 680, top: 170 }}>
        <span className="text-caption font-semibold text-muted tracking-wider">SPECS</span>
      </div>
      <div className="absolute bg-line" style={{ left: 80, top: 188, width: 900, height: 1 }} />

      {/* Type Scale rows */}
      {TYPE_SCALE.map((r) => (
        <div key={r.label}>
          <div className="absolute" style={{ left: 80, top: r.rowY }}>
            <span className="text-caption text-primary font-mono">{r.label}</span>
          </div>
          {/* Specimen cell — pixel-pinned */}
          <div
            className="absolute"
            data-matrix-cell
            style={{ left: SPECIMEN_X, top: r.specimenY, width: SPECIMEN_W, height: r.specimenH }}
          >
            <span className={`${r.cls} text-primary`}>{r.specimen}</span>
          </div>
          <div className="absolute" style={{ left: 680, top: r.rowY }}>
            <span className="text-caption text-muted">{r.specs}</span>
          </div>
        </div>
      ))}

      {/* Section divider after Code row */}
      <div className="absolute bg-line" style={{ left: 80, top: 796, width: 900, height: 1 }} />

      {/* Font Weights section header */}
      <div className="absolute" style={{ left: 80, top: 832 }}>
        <h2 className="text-heading-lg font-semibold text-primary">Font Weights</h2>
      </div>

      {/* Weight rows */}
      {WEIGHTS.map((w) => (
        <div key={w.label}>
          <div className="absolute" style={{ left: 80, top: w.rowY }}>
            <span className="text-caption text-primary font-mono">{w.label}</span>
          </div>
          <div
            className="absolute"
            data-matrix-cell
            style={{ left: SPECIMEN_X, top: w.specimenY, width: SPECIMEN_W, height: 19 }}
          >
            <span className={`text-heading-md ${w.cls} text-primary`}>{w.specimen}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
```

---
