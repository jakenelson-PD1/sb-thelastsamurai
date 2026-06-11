# RequestRow Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `RequestRow` component for the audit request list with status indicators, a configurable meta-item right zone, hover/selected states, and full keyboard accessibility.

**Architecture:** Single component file (`RequestRow.tsx`) with an internal `renderMetaItem` switch for extensibility. All state is controlled by the parent — the component fires `onClick` and the parent toggles `selected`. Stories serve as the visual test harness.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v3, CVA (`class-variance-authority`), `clsx`, Storybook 8.

**Spec:** `docs/superpowers/specs/2026-03-20-request-row-design.md`

---

## Chunk 1: Component shell, types, and left zone

### Task 1: Create `RequestRow.tsx` with types and skeleton

**Files:**
- Create: `last-samurai/components/data-display/RequestRow.tsx`

- [ ] **Step 1: Create the file with all types and a skeleton render**

```tsx
import { clsx } from 'clsx';
import { Avatar } from '../primitives/Avatar';
import { ActivityIcon } from '../primitives/icons/ActivityIcon';
import { AlertTriangleIcon } from '../primitives/icons/AlertTriangleIcon';
import { CheckIcon } from '../primitives/icons/CheckIcon';
import { XIcon } from '../primitives/icons/XIcon';
import { PaperclipIcon } from '../primitives/icons/PaperclipIcon';
import { Flag02Icon } from '../primitives/icons/Flag02Icon';
import { MessageCircle01Icon } from '../primitives/icons/MessageCircle01Icon';
import { File02Icon } from '../primitives/icons/File02Icon';
import { Lock01Icon } from '../primitives/icons/Lock01Icon';

export type StatusIndicator = 'warning' | 'in-progress' | 'rejected' | 'complete' | 'none';

export type MetaItem =
  | { type: 'comments';    count: number }
  | { type: 'documents';   count: number }
  | { type: 'flag' }
  | { type: 'assignee';    initials: string; color?: string; locked?: boolean }
  | { type: 'due-date';    date: string }
  | { type: 'e-signature' };

export interface RequestRowProps {
  orderNumber: number;
  title: string;
  description?: string;
  status?: StatusIndicator;
  attachmentLabel?: string;
  onAttachmentClick?: () => void;
  meta?: MetaItem[];
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function RequestRow({
  orderNumber,
  title,
  description,
  status = 'none',
  attachmentLabel,
  onAttachmentClick,
  meta = [],
  selected = false,
  onClick,
  className,
}: RequestRowProps) {
  return (
    <div className={clsx('TODO', className)}>
      <span>{orderNumber}</span>
      <span>{title}</span>
    </div>
  );
}
```

- [ ] **Step 2: Verify the file compiles (no TypeScript errors)**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors referencing `RequestRow.tsx`

- [ ] **Step 3: Commit**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && git add components/data-display/RequestRow.tsx && git commit -m "feat: scaffold RequestRow types and skeleton"
```

---

### Task 2: Implement the status indicator

**Files:**
- Modify: `last-samurai/components/data-display/RequestRow.tsx`

The left zone has two parts side by side: a 16×16 status icon and the order number. Status icon mapping:

| Value         | Component           | className               |
|---------------|---------------------|-------------------------|
| `warning`     | `AlertTriangleIcon` | `text-status-warning`   |
| `in-progress` | `ActivityIcon`      | `text-action-primary`   |
| `rejected`    | `XIcon`             | `text-status-error`     |
| `complete`    | `CheckIcon`         | `text-status-success`   |
| `none`        | empty span          | —                       |

- [ ] **Step 1: Add `renderStatus` helper inside the component file**

```tsx
function renderStatus(status: StatusIndicator) {
  // Icons omit aria-label so their internal logic sets aria-hidden="true" automatically.
  // The icon interface only accepts aria-label; omitting it is the correct way to hide them.
  if (status === 'warning')     return <AlertTriangleIcon size={16} className="text-status-warning" />;
  if (status === 'in-progress') return <ActivityIcon      size={16} className="text-action-primary" />;
  if (status === 'rejected')    return <XIcon             size={16} className="text-status-error" />;
  if (status === 'complete')    return <CheckIcon         size={16} className="text-status-success" />;
  return <span aria-hidden="true" className="inline-block h-4 w-4" />;
}
```

- [ ] **Step 2: Replace the skeleton div with the full left zone**

```tsx
<div className={clsx(
  'flex items-center border-l-2 px-4 py-2 min-h-[56px]',
  selected
    ? 'bg-status-info-surface border-action-primary hover:bg-status-info-surface'
    : 'bg-canvas border-transparent hover:bg-surface',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary rounded-control',
  'cursor-pointer select-none',
  className,
)}
  role="button"
  tabIndex={0}
  aria-pressed={selected}
  onClick={onClick}
  onKeyDown={(e) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'Enter') onClick?.();
    if (e.key === ' ') { e.preventDefault(); onClick?.(); }
  }}
>
  {/* Left zone */}
  <div className="flex items-center gap-2 w-14 shrink-0">
    {renderStatus(status)}
    <span aria-hidden="true" className="text-label-md text-fg-muted font-normal">{orderNumber}</span>
  </div>

  {/* Main zone — TODO */}
  <div className="flex-1 min-w-0">
    <span className="text-body-md font-medium text-fg-primary truncate">{title}</span>
  </div>

  {/* Right zone — TODO */}
  <div className="flex items-center gap-3 shrink-0" />
</div>
```

- [ ] **Step 3: Verify TypeScript still compiles**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && git add components/data-display/RequestRow.tsx && git commit -m "feat: add left zone and status indicator to RequestRow"
```

---

## Chunk 2: Main zone and meta items

### Task 3: Implement the main zone (title, attachment, description)

**Files:**
- Modify: `last-samurai/components/data-display/RequestRow.tsx`

- [ ] **Step 1: Replace the main zone placeholder with full implementation**

```tsx
{/* Main zone */}
<div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
  {/* Row 1: title + optional attachment */}
  <div className="flex items-center gap-2 min-w-0">
    <span className="text-body-md font-medium text-fg-primary truncate flex-1 min-w-0">
      {title}
    </span>
    {attachmentLabel && (
      <button
        type="button"
        className="flex items-center gap-1 text-body-md text-action-primary shrink-0 hover:underline"
        onClick={(e) => { e.stopPropagation(); onAttachmentClick?.(); }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.stopPropagation();
            e.preventDefault();
            onAttachmentClick?.();
          }
        }}
      >
        <PaperclipIcon size={14} />
        {attachmentLabel}
      </button>
    )}
  </div>

  {/* Row 2: description (selected only) */}
  {selected && description && (
    <p className="text-body-md text-fg-secondary">{description}</p>
  )}
</div>
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && git add components/data-display/RequestRow.tsx && git commit -m "feat: add main zone with title, attachment, and description to RequestRow"
```

---

### Task 4: Implement the meta item renderer

**Files:**
- Modify: `last-samurai/components/data-display/RequestRow.tsx`

The `renderMetaItem` function is a switch on `item.type`. Each `type` is used as the React `key`. Add this function before the `RequestRow` component definition.

- [ ] **Step 1: Add `renderMetaItem` function**

```tsx
// Icons omit aria-label so the icon component's internal logic sets aria-hidden="true".
// The PaperclipIcon in the main zone works the same way.
function renderMetaItem(item: MetaItem): JSX.Element {
  switch (item.type) {
    case 'comments':
      return (
        <span key="comments" className={clsx('flex items-center gap-1 text-label-md text-fg-muted', item.count === 0 && 'opacity-40')}>
          <MessageCircle01Icon size={16} />
          {item.count}
        </span>
      );

    case 'documents':
      return (
        <span key="documents" className={clsx('flex items-center gap-1 text-label-md text-fg-muted', item.count === 0 && 'opacity-40')}>
          <File02Icon size={16} />
          {item.count}
        </span>
      );

    case 'flag':
      return (
        <span key="flag" className="flex h-6 w-6 items-center justify-center rounded-pill bg-purple-50 text-purple-500">
          <Flag02Icon size={14} />
        </span>
      );

    case 'assignee': {
      const avatar = (
        <Avatar
          size="xs"
          initials={item.initials}
          style={item.color ? { backgroundColor: item.color } : undefined}
        />
      );
      return item.locked ? (
        <span key="assignee" className="relative inline-flex">
          {avatar}
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-pill bg-elevated">
            <Lock01Icon size={10} className="text-fg-muted" />
          </span>
        </span>
      ) : (
        <span key="assignee">{avatar}</span>
      );
    }

    case 'due-date':
      return (
        <span key="due-date" className="text-body-md text-fg-primary">
          {item.date}
        </span>
      );

    case 'e-signature':
      return (
        <span key="e-signature" className="rounded-pill border border-line bg-surface px-2 py-0.5 text-label-md text-fg-secondary">
          E-Signature
        </span>
      );
  }
}
```

- [ ] **Step 2: Wire the right zone to use `renderMetaItem`**

```tsx
{/* Right zone */}
<div className="flex items-center gap-3 shrink-0">
  {meta.map(renderMetaItem)}
</div>
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && git add components/data-display/RequestRow.tsx && git commit -m "feat: add meta item renderer to RequestRow"
```

---

## Chunk 3: Stories and export

### Task 5: Create `RequestRow.stories.tsx`

**Files:**
- Create: `last-samurai/components/data-display/RequestRow.stories.tsx`

- [ ] **Step 1: Create the stories file**

```tsx
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RequestRow } from './RequestRow';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof RequestRow> = {
  component: RequestRow,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof RequestRow>;

// ─── Default ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <RequestRow
      orderNumber={1}
      title="CFO Initial Inquiries"
      status="none"
    />
  ),
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
        status="warning"
        selected={selected}
        onClick={() => setSelected((v) => !v)}
      />
    );
  },
};

// ─── All Statuses ─────────────────────────────────────────────────────────────

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col divide-y divide-line">
      {(['warning', 'in-progress', 'rejected', 'complete', 'none'] as const).map((status, i) => (
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
      status="in-progress"
      meta={[
        { type: 'e-signature' },
        { type: 'assignee', initials: 'A', color: colors.orange[100] },
        { type: 'due-date', date: '04/18/2025' },
        { type: 'comments', count: 2 },
        { type: 'documents', count: 3 },
        { type: 'flag' },
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
      status="warning"
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
      status="complete"
    />
  ),
};

// ─── Assignee With Lock ───────────────────────────────────────────────────────

export const AssigneeWithLock: Story = {
  render: () => (
    <RequestRow
      orderNumber={5}
      title="Payroll Processing Records"
      status="in-progress"
      meta={[
        { type: 'assignee', initials: 'A', color: colors.orange[100], locked: true },
        { type: 'due-date', date: '04/18/2025' },
      ]}
    />
  ),
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && git add components/data-display/RequestRow.stories.tsx && git commit -m "feat: add RequestRow stories"
```

---

### Task 6: Update the data-display barrel export

**Files:**
- Modify: `last-samurai/components/data-display/index.ts`

- [ ] **Step 1: Add RequestRow exports**

Append to `components/data-display/index.ts`:

```typescript
export { RequestRow } from './RequestRow';
export type { RequestRowProps, StatusIndicator, MetaItem } from './RequestRow';
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

- [ ] **Step 3: Verify Storybook loads the new stories**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && npm run storybook 2>&1 | tail -5
```

Navigate to `http://localhost:6006` and confirm `Data Display / RequestRow` appears with all 7 stories.

- [ ] **Step 4: Commit**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai && git add components/data-display/index.ts && git commit -m "feat: export RequestRow from data-display index"
```

---

## Verification Checklist

After all tasks are complete, manually verify in Storybook:

- [ ] `Default` — row renders with order number, title, no meta icons
- [ ] `Selected` — clicking row toggles description visibility; blue left border appears when selected
- [ ] `AllStatuses` — all 5 status icons render with correct colors
- [ ] `WithAllMeta` — all 6 meta item types render correctly
- [ ] `WithAttachment` — paperclip icon + "Firm provided 8 files" link renders inline next to title
- [ ] `NoMeta` — right zone is empty, row renders cleanly
- [ ] `AssigneeWithLock` — avatar with lock badge renders; badge is positioned bottom-right
- [ ] Hover: mousing over any unselected row shows `bg-surface` background
- [ ] Keyboard: Tab to row, Enter/Space toggles selection, no page scroll on Space
- [ ] No hardcoded color/size values in `RequestRow.tsx` (except documented `bg-purple-50`/`text-purple-500`)
