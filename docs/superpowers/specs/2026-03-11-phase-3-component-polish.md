# Phase 3: Component Polish & Visual Design Specification

**Date:** 2026-03-11
**Phase:** 3 — Token Migration, Story Improvements, Visual Design Polish
**Prerequisite:** Phase 2 complete (semantic token layer, Button + Input migrated)

---

## Goal

Complete the design system by:
1. Adding status surface tokens (12 new CSS vars for bg/border/fg per status)
2. Migrating all 24 remaining components to semantic classes
3. Overhauling Storybook stories with dark mode support, AllVariants stories, and realistic props
4. Applying MUI-style visual design polish (deep API additions: icon props, chip pattern, visual tuning)

---

## Design Context

The target aesthetic is **Material UI-style**, not generic Tailwind. Reference product screenshots show:
- `rounded-lg` (8px) corners everywhere (buttons, inputs, cards, modals, chips)
- Dense, compact typography (already sized correctly from Phase 2)
- Buttons with icon-left, icon-right, and icon-only layouts
- Alerts with filled colored icon circles and text action links
- Chips (not just badges): pill-shaped, deletable, avatar support
- Sidebar nav: blue left-border + tinted bg for active item
- Cards: white bg, subtle border, mild shadow, `rounded-lg`

---

## Section 1: Status Surface Tokens

Add 12 new CSS custom properties to `tokens/semantic.ts`:

### Naming convention note

Existing background tokens use `--color-bg-*` prefix (canvas, surface, elevated). Status tokens intentionally omit the `bg-` infix — consistent with the existing `--color-status-success`, `--color-status-warning`, `--color-status-error` pattern. The `status-*` namespace is its own group.

There is no flat `--color-status-info` accent added here — the `info` semantic maps to the brand/action color (`action-primary`), so a separate `status-info` accent would be redundant. Only surface/border/fg variants are added for `info`.

### New token names

| Purpose         | Token name                   |
|----------------|------------------------------|
| Info surface bg | `--color-status-info-surface` |
| Info border     | `--color-status-info-border`  |
| Info text       | `--color-status-info-fg`      |
| Success surface | `--color-status-success-surface` |
| Success border  | `--color-status-success-border`  |
| Success text    | `--color-status-success-fg`      |
| Warning surface | `--color-status-warning-surface` |
| Warning border  | `--color-status-warning-border`  |
| Warning text    | `--color-status-warning-fg`      |
| Error surface   | `--color-status-error-surface`   |
| Error border    | `--color-status-error-border`    |
| Error text      | `--color-status-error-fg`        |

### Light mode values

| Token | Value |
|-------|-------|
| `--color-status-info-surface` | `brand[50]` |
| `--color-status-info-border` | `brand[200]` |
| `--color-status-info-fg` | `brand[700]` |
| `--color-status-success-surface` | `green[50]` |
| `--color-status-success-border` | `green[200]` |
| `--color-status-success-fg` | `green[700]` |
| `--color-status-warning-surface` | `yellow[50]` |
| `--color-status-warning-border` | `yellow[200]` |
| `--color-status-warning-fg` | `yellow[700]` |
| `--color-status-error-surface` | `red[50]` |
| `--color-status-error-border` | `red[200]` |
| `--color-status-error-fg` | `red[700]` |

### Dark mode values

| Token | Value |
|-------|-------|
| `--color-status-info-surface` | `brand[950]` |
| `--color-status-info-border` | `brand[700]` |
| `--color-status-info-fg` | `brand[300]` |
| `--color-status-success-surface` | `green[950]` |
| `--color-status-success-border` | `green[700]` |
| `--color-status-success-fg` | `green[300]` |
| `--color-status-warning-surface` | `yellow[950]` |
| `--color-status-warning-border` | `yellow[700]` |
| `--color-status-warning-fg` | `yellow[300]` |
| `--color-status-error-surface` | `red[950]` |
| `--color-status-error-border` | `red[700]` |
| `--color-status-error-fg` | `red[300]` |

### Tailwind aliases

Add these to the **`colors` block inside `theme.extend`** in the semantic plugin (same location as existing `'canvas'`, `'surface'`, `'status-success'`, etc. aliases):

```ts
'status-info-surface':    'var(--color-status-info-surface)',
'status-info-border':     'var(--color-status-info-border)',
'status-info-fg':         'var(--color-status-info-fg)',
'status-success-surface': 'var(--color-status-success-surface)',
'status-success-border':  'var(--color-status-success-border)',
'status-success-fg':      'var(--color-status-success-fg)',
'status-warning-surface': 'var(--color-status-warning-surface)',
'status-warning-border':  'var(--color-status-warning-border)',
'status-warning-fg':      'var(--color-status-warning-fg)',
'status-error-surface':   'var(--color-status-error-surface)',
'status-error-border':    'var(--color-status-error-border)',
'status-error-fg':        'var(--color-status-error-fg)',
```

---

## Section 2: Token Migration — All Remaining Components

All color class references must use semantic tokens. No hardcoded hex values, no raw palette classes (e.g., `text-neutral-700`) in component files — use semantic aliases instead.

### Border radius global change

All interactive components standardize on `rounded-lg` (8px).

**Token facts (from `tokens/radii.ts`):**
- `rounded-card` = `0.5rem` = 8px — same as `rounded-lg`. Migrating to `rounded-lg` is a class name consolidation, no visual change.
- `rounded-pill` = `9999px` = same as `rounded-full`. Migrating Badge to `rounded-full` is a class name change only.

**Components gaining real radius increase (4px → 8px):** Button, Input, Select, DatePicker
**Components getting class name consolidation (already 8px → 8px via `rounded-card`):** Alert, Toast, Card, Modal, Tooltip, Popover

### Component-by-component migration map

#### `components/layout/`

| Component | Key changes |
|-----------|-------------|
| Container | No color classes — no change needed |
| Grid | No color classes — no change needed |
| Stack | No color classes — no change needed |
| Divider | `bg-neutral-200` → `bg-line` |

#### `components/feedback/`

| Component | Key changes |
|-----------|-------------|
| Alert | `border-{color}-200 bg-{color}-50 text-{color}-800` → status surface tokens; add `icon` + `action` props (see Section 4); `rounded` → `rounded-lg` |
| Toast | `bg-neutral-900` → `bg-fg-primary`; `text-white` → `text-canvas`; `bg-green-600` → `bg-status-success`; `bg-error-600` (existing bug — invalid class, should be `bg-red-600`) → `bg-status-error`; `rounded-card` → `rounded-lg` |
| Skeleton | `bg-neutral-200` → `bg-line-strong` |
| Spinner | `text-brand-500` → `text-action-primary` |

#### `components/navigation/`

| Component | Key changes |
|-----------|-------------|
| Tabs | `border-neutral-200` → `border-line`; active: `border-brand-500 text-brand-600` → `border-action-primary text-action-primary`; inactive: `text-neutral-500 hover:text-neutral-700` → `text-fg-muted hover:text-fg-secondary` |
| Breadcrumb | `text-brand-600 hover:underline` → `text-fg-link hover:underline`; `text-neutral-400` → `text-fg-muted`; `text-neutral-500` → `text-fg-secondary` |
| Pagination | `text-neutral-600 hover:bg-neutral-100 disabled:opacity-40` → `text-fg-secondary hover:bg-surface disabled:opacity-40` |
| Sidebar | Active: `bg-brand-50 text-brand-700` → `border-l-2 border-action-primary bg-surface text-action-primary`; Hover: `hover:bg-neutral-100` → `hover:bg-surface`; Default text: `text-neutral-600` → `text-fg-secondary` |

#### `components/overlay/`

| Component | Key changes |
|-----------|-------------|
| Modal | `bg-white` → `bg-elevated`; `text-neutral-900` → `text-fg-primary`; `rounded-modal` → `rounded-lg` |
| Drawer | `bg-white` → `bg-elevated`; `border-b border-neutral-200` → `border-b border-line`; `text-neutral-900` → `text-fg-primary`; `text-neutral-400 hover:text-neutral-600` → `text-fg-muted hover:text-fg-secondary` |
| Tooltip | `bg-neutral-900 text-white` → `bg-fg-primary text-canvas`; `rounded` → `rounded-lg` |
| Popover | `border-neutral-200 bg-white shadow-card` → `border-line bg-elevated shadow-card`; `text-neutral-700` → `text-fg-primary`; `rounded-card` → `rounded-lg` |

#### `components/data-display/`

| Component | Key changes |
|-----------|-------------|
| Card | `border-neutral-200 bg-white shadow-card` → `border-line bg-elevated shadow-card`; `rounded-card` → `rounded-lg` |
| Table | `border-neutral-200` → `border-line`; `border-neutral-100 hover:bg-neutral-50` → `border-line hover:bg-surface`; header: `text-neutral-600` → `text-fg-secondary`; body: `text-neutral-800` → `text-fg-primary` |
| List | `divide-neutral-100` → `divide-line`; `text-neutral-900` → `text-fg-primary`; `text-neutral-500` → `text-fg-muted` |
| Stat | `text-neutral-500` → `text-fg-muted`; `text-neutral-900` → `text-fg-primary`; `text-green-600` → `text-status-success-fg`; `text-red-600` → `text-status-error-fg` |

#### `components/forms/`

| Component | Key changes |
|-----------|-------------|
| Select | `border-neutral-300 bg-white text-neutral-900` → `border-line-strong bg-elevated text-fg-primary`; focus → `focus:border-line-focus focus:ring-line-focus/20`; error → `border-status-error`; `rounded` → `rounded-lg` |
| Checkbox | `border-neutral-300 text-brand-500 focus:ring-brand-500/20` → `border-line-strong text-action-primary focus:ring-line-focus/20` |
| Radio | `border-neutral-300 text-brand-500 focus:ring-brand-500/20` → `border-line-strong text-action-primary focus:ring-line-focus/20`; `text-neutral-700` → `text-fg-secondary` |
| Switch | `bg-brand-500` → `bg-action-primary`; `bg-neutral-300` → `bg-line-strong`; `bg-white` → `bg-elevated`; `text-neutral-700` → `text-fg-secondary`; `focus:ring-brand-500/30` → `focus:ring-line-focus/30` |
| DatePicker | Same pattern as Select — `border-line-strong`, `bg-elevated`, `text-fg-primary`, focus `border-line-focus`, `rounded-lg` |

#### `components/primitives/`

| Component | Key changes |
|-----------|-------------|
| Badge | `bg-neutral-100 text-neutral-700` → `bg-surface text-fg-secondary`; `bg-brand-100 text-brand-700` → `bg-status-info-surface text-status-info-fg`; `bg-green-100 text-green-700` → `bg-status-success-surface text-status-success-fg`; `bg-yellow-100 text-yellow-700` → `bg-status-warning-surface text-status-warning-fg`; `bg-red-100 text-red-700` → `bg-status-error-surface text-status-error-fg`; shape: `rounded-pill` → `rounded-full`; add `onDelete` + `avatar` props (see Section 4) |
| Avatar | `bg-neutral-200` → `bg-surface`; `text-neutral-600` → `text-fg-secondary` |
| Icon | No color classes — no change needed |

---

## Section 3: Story Improvements

### 3.1 Dark mode decorator

Add to `.storybook/preview.tsx`:

```tsx
import type { Preview, Decorator } from '@storybook/react';
import '../globals.css';

const withDarkMode: Decorator = (Story, context) => {
  const isDark = context.globals.backgrounds?.value === '#111827';
  return (
    <div className={isDark ? 'dark' : ''}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withDarkMode],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
};

export default preview;
```

### 3.2 AllVariants story pattern

Every primitive component gets an `AllVariants` story:

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
```

### 3.3 Realistic props

Replace placeholder text (`'Content inside container'`, `'Cell A'`) with realistic domain content:
- Buttons: `'Save changes'`, `'Cancel'`, `'Delete account'`
- Inputs: `label: 'Email address'`, `placeholder: 'you@example.com'`
- Alerts: Real error messages, warning text
- Tables: User/role data, order data
- Lists: Names + descriptions
- Stats: Revenue, conversion rate, churn rate

---

## Section 4: Visual Design Polish (Deep)

### 4.1 Button icon support

**New props:**
- `startIcon?: React.ReactNode` — renders before label with `mr-1.5`
- `endIcon?: React.ReactNode` — renders after label with `ml-1.5`
- `iconOnly?: boolean` — square button. When `true`: remove horizontal padding, set explicit width equal to height. Children is still rendered (the icon passed as children), but no label padding.

**Square dimensions per size when `iconOnly` is true:**

| Size | Height | Width |
|------|--------|-------|
| sm | `h-8` (32px) | `w-8` |
| md | `h-9` (36px) | `w-9` |
| lg | `h-11` (44px) | `w-11` |

For `iconOnly`, replace `px-3`/`px-4`/`px-6` with `p-0 justify-center` so the icon is centered in the square.

**Implementation pattern:**
```ts
size: {
  sm: iconOnly ? 'h-8 w-8 p-0' : 'h-8 px-3 text-sm',
  md: iconOnly ? 'h-9 w-9 p-0' : 'h-9 px-4 text-sm',
  lg: iconOnly ? 'h-11 w-11 p-0' : 'h-11 px-6 text-base',
}
```
Since CVA doesn't support compound variants with booleans well, implement `iconOnly` by reading the prop in the component body and conditionally overriding size padding:
```tsx
const sizeClass = iconOnly
  ? { sm: 'h-8 w-8', md: 'h-9 w-9', lg: 'h-11 w-11' }[size ?? 'md']
  : undefined;
```
Then pass `sizeClass` alongside `buttonVariants({ variant, size })`.

**Height adjustments (MUI-closer defaults):**
- sm: `h-8` (32px) — unchanged
- md: `h-9` (36px) — was `h-10`
- lg: `h-11` (44px) — was `h-12`

**Border radius:** `rounded-lg` (was `rounded`)

**New stories:** `WithStartIcon`, `WithEndIcon`, `IconOnly`

### 4.2 Alert icon + action

**New props:**
- `icon?: React.ReactNode` — renders in a 32px filled circle. Do NOT use dynamic class construction (`bg-status-${variant}-surface`) — Tailwind purges dynamic classes. Use a static lookup object:

```ts
const iconBgMap: Record<NonNullable<AlertProps['variant']>, string> = {
  info:    'bg-status-info-surface text-status-info-fg',
  success: 'bg-status-success-surface text-status-success-fg',
  warning: 'bg-status-warning-surface text-status-warning-fg',
  danger:  'bg-status-error-surface text-status-error-fg',
};
```

Icon circle: `h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0` + the classes from `iconBgMap[variant]`.

- `action?: { label: string; onClick: () => void }` — renders as `<button>` with `text-fg-link hover:underline text-sm font-medium` at the end (right side) of the alert. Use `ml-auto` or flex layout to push it right.

**Layout structure with icon:**
```tsx
<div role="alert" className={clsx(alertVariants({ variant }), 'flex items-start gap-3', className)}>
  {icon && (
    <span className={clsx('h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0', iconBgMap[variant ?? 'info'])}>
      {icon}
    </span>
  )}
  <div className="flex-1 min-w-0">
    {title && <p className="font-medium">{title}</p>}
    {children && <p className={title ? 'mt-1 opacity-80' : ''}>{children}</p>}
  </div>
  {action && (
    <button onClick={action.onClick} className="ml-auto flex-shrink-0 text-sm font-medium text-fg-link hover:underline">
      {action.label}
    </button>
  )}
</div>
```

**Border radius:** `rounded-lg`

**New stories:** `WithIcon`, `WithAction`, `WithIconAndAction`

### 4.3 Badge → Chip upgrade

**New props:**
- `onDelete?: () => void` — renders `×` button with `ml-1 -mr-0.5 h-4 w-4` inside badge
- `avatar?: React.ReactNode` — renders before label with `-ml-1 mr-1.5`

**Shape change:** Default shape `rounded-full` (pill). Remove `rounded-pill` token usage — this was already `9999px` radius so visually identical, but use `rounded-full` directly.

**Add `outlined` variant:**
```ts
outlined: 'border border-current bg-transparent',
```

Combined with variant: `outlined + default`, `outlined + brand`, etc.

**New stories:** `Deletable`, `WithAvatar`, `Outlined`

### 4.4 Sidebar active state

Active item border: `border-l-2 border-action-primary` is left-border treatment.
Implementation: use `border-l-2` with conditional left border color, and `bg-surface` + `text-action-primary` for active text.

This requires `pl-[calc(0.75rem-2px)]` to compensate for the 2px left border displacement (keeps text aligned).

---

### 4.5 Dark mode hover token fix (existing bug)

In `tokens/semantic.ts`, the dark mode value for `--color-action-primary-hover` is `colors.brand[400]` — same as `--color-action-primary` in dark mode. This means hover has no visible effect on dark backgrounds. Fix:

```ts
// Dark mode (in .dark block):
'--color-action-primary':       colors.brand[400],
'--color-action-primary-hover': colors.brand[300],  // was brand[400]
```

### 3.4 AllVariants stories for non-primitive components

**Toast.stories.tsx — AllVariants:**
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

**Card.stories.tsx — AllVariants:**
```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Card padding="sm"><p className="text-sm text-fg-secondary">Small padding card</p></Card>
      <Card padding="md"><p className="text-sm text-fg-primary">Default padding card with some content that wraps.</p></Card>
      <Card padding="lg"><p className="text-sm text-fg-primary">Large padding card</p></Card>
    </div>
  ),
};
```

**Table.stories.tsx — AllVariants (replace existing Default):**
```tsx
export const WithUserData: Story = {
  render: () => (
    <Table
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
        { key: 'role', header: 'Role' },
        { key: 'status', header: 'Status' },
      ]}
      data={[
        { name: 'Alice Chen', email: 'alice@example.com', role: 'Admin', status: 'Active' },
        { name: 'Bob Martinez', email: 'bob@example.com', role: 'Editor', status: 'Active' },
        { name: 'Carol Kim', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
      ]}
    />
  ),
};
```

**List.stories.tsx — AllVariants (replace existing Default):**
```tsx
export const WithDescriptions: Story = {
  args: { items: [
    { id: 1, primary: 'Alice Chen',   secondary: 'alice@example.com · Admin' },
    { id: 2, primary: 'Bob Martinez', secondary: 'bob@example.com · Editor' },
    { id: 3, primary: 'Carol Kim',    secondary: 'carol@example.com · Viewer' },
  ]},
};
```

**Stat.stories.tsx — AllVariants:**
```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-8">
      <Stat label="Total Revenue" value="$48,295" change="+12% from last month" changeType="positive" />
      <Stat label="Active Users" value="2,847" change="+5.2%" changeType="positive" />
      <Stat label="Churn Rate" value="2.4%" change="-0.3%" changeType="negative" />
      <Stat label="Avg. Response" value="1.8s" changeType="neutral" />
    </div>
  ),
};
```

---

## Out of Scope for Phase 3

- Icon library swap (keep lucide-react; custom icon library is a Phase 4 decision)
- Full Figma sync (figma/sync.ts Phase 2 enhancement)
- New component categories (DatePicker full implementation, complex overlays)
- Form validation state management
- Motion/animation tokens

---

## Files to Modify

| File | Change |
|------|--------|
| `tokens/semantic.ts` | Add 12 status surface CSS vars + Tailwind aliases |
| `.storybook/preview.tsx` | Dark mode decorator |
| `components/primitives/Button.tsx` | `startIcon`, `endIcon`, `iconOnly` props; `rounded-lg`; height tweaks |
| `components/primitives/Button.stories.tsx` | `AllVariants`, `WithStartIcon`, `WithEndIcon`, `IconOnly` |
| `components/primitives/Badge.tsx` | `onDelete`, `avatar`, `outlined` variant; `rounded-full`; semantic tokens |
| `components/primitives/Badge.stories.tsx` | `AllVariants`, `Deletable`, `WithAvatar`, `Outlined` |
| `components/primitives/Avatar.tsx` | Semantic tokens |
| `components/primitives/Avatar.stories.tsx` | `AllVariants` |
| `components/primitives/Icon.stories.tsx` | More icons, realistic use |
| `components/layout/Divider.tsx` | `bg-line` |
| `components/feedback/Alert.tsx` | `icon`, `action` props; status surface tokens; `rounded-lg` |
| `components/feedback/Alert.stories.tsx` | `AllVariants`, `WithIcon`, `WithAction` |
| `components/feedback/Toast.tsx` | Semantic tokens; `rounded-lg` |
| `components/feedback/Toast.stories.tsx` | `AllVariants` |
| `components/feedback/Skeleton.tsx` | `bg-line-strong` |
| `components/feedback/Spinner.tsx` | `text-action-primary` |
| `components/navigation/Tabs.tsx` | Semantic tokens |
| `components/navigation/Tabs.stories.tsx` | Realistic tab labels |
| `components/navigation/Breadcrumb.tsx` | Semantic tokens |
| `components/navigation/Pagination.tsx` | Semantic tokens |
| `components/navigation/Sidebar.tsx` | Semantic tokens + active border |
| `components/navigation/Sidebar.stories.tsx` | Realistic nav items |
| `components/overlay/Modal.tsx` | Semantic tokens; `rounded-lg` |
| `components/overlay/Drawer.tsx` | Semantic tokens |
| `components/overlay/Tooltip.tsx` | Semantic tokens; `rounded-lg` |
| `components/overlay/Popover.tsx` | Semantic tokens; `rounded-lg` |
| `components/data-display/Card.tsx` | Semantic tokens; `rounded-lg` |
| `components/data-display/Card.stories.tsx` | `AllVariants` with realistic content |
| `components/data-display/Table.tsx` | Semantic tokens |
| `components/data-display/Table.stories.tsx` | Realistic data |
| `components/data-display/List.tsx` | Semantic tokens |
| `components/data-display/List.stories.tsx` | Realistic items |
| `components/data-display/Stat.tsx` | Semantic tokens |
| `components/data-display/Stat.stories.tsx` | Realistic stats |
| `components/forms/Select.tsx` | Semantic tokens; `rounded-lg` |
| `components/forms/Checkbox.tsx` | Semantic tokens |
| `components/forms/Radio.tsx` | Semantic tokens |
| `components/forms/Switch.tsx` | Semantic tokens |
| `components/forms/DatePicker.tsx` | Semantic tokens; `rounded-lg` |

---

## Success Criteria

1. Storybook runs with no TypeScript errors
2. Every component story renders correctly in light AND dark mode
3. No raw palette classes (`text-neutral-*`, `bg-brand-*`) remain in component files — only semantic aliases
4. Button renders with and without icons, including icon-only square variant
5. Alert renders with colored icon circle and action link
6. Badge renders as pill-shaped chip with delete button
7. Sidebar active item shows left border + tinted background
8. All cards, inputs, buttons use `rounded-lg` (8px) corners
