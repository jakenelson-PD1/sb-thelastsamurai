# RequestRow Component — Design Spec

**Date:** 2026-03-20
**Status:** Approved

---

## Overview

`RequestRow` is a data-display molecule for the audit request list. Each row represents a single client request, showing its creation order, status, title, optional attachment link, expandable description, and right-side meta indicators. It supports default, hover, and selected states.

---

## Layout

The row is a horizontal flex container with `px-4 py-2 min-h-[56px]` divided into three zones:

```
[ Status | # ] [ Title + AttachmentLink / Description ] [ Meta items... ]
```

- **Left zone** — `flex items-center gap-2 w-14 shrink-0`: status icon (16×16) and order number (`text-label-md text-fg-muted font-normal`) are side-by-side horizontally within the 56px fixed width
- **Main zone** — `flex-1 min-w-0 flex flex-col justify-center gap-0.5`:
  - Row 1: `<div className="flex items-center gap-2 min-w-0">` — title + optional attachment link on the same inline flex row
  - Row 2: description, only when `selected={true}` AND `description` is provided
- **Right zone** — `flex items-center gap-3 shrink-0`: meta items rendered left-to-right in `meta` array order

**Border:** Always render `border-l-2`. Default/hover: `border-l-2 border-transparent`. Selected: `border-l-2 border-action-primary`. Prevents 2px layout shift on selection.

**Height change:** Instantaneous (no CSS transition) when description appears/disappears — animated height is out of scope for v1.

---

## States

Implement using `clsx` on the root element — no JS hover state needed:

| State    | Tailwind classes                                                          |
|----------|---------------------------------------------------------------------------|
| Default  | `bg-canvas border-l-2 border-transparent hover:bg-surface`               |
| Selected | `bg-status-info-surface border-l-2 border-action-primary hover:bg-status-info-surface` |

The `hover:bg-surface` utility handles hover via CSS with no additional JS state. When selected, `hover:bg-status-info-surface` keeps the selected background on hover.

---

## Status Indicator

Rendered as a 16×16 icon in the left zone. Icon set: `components/primitives/icons/`.

| Value         | Icon                  | Color                   |
|---------------|-----------------------|-------------------------|
| `warning`     | `AlertTriangleIcon`   | `text-status-warning`   |
| `in-progress` | `ActivityIcon`        | `text-action-primary`   |
| `rejected`    | `XIcon`               | `text-status-error`     |
| `complete`    | `CheckIcon`           | `text-status-success`   |
| `none`        | `<span aria-hidden="true" className="w-4 h-4 inline-block" />` | — |

All status icons are `aria-hidden="true"` — status is communicated visually only. For `none`, render an empty `<span aria-hidden="true" className="w-4 h-4 inline-block" />`.

---

## Main Zone

**Title** — `text-body-md font-medium text-fg-primary truncate flex-1 min-w-0`; truncates with ellipsis.

**Attachment link** (optional) — rendered on the same row as the title when `attachmentLabel` is provided:
- `<button type="button" onClick={e => { e.stopPropagation(); onAttachmentClick?.(); }} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); e.preventDefault(); onAttachmentClick?.(); } }}>`
- `PaperclipIcon` (14px) + label text
- `flex items-center gap-1 text-body-md text-action-primary shrink-0 hover:underline`
- `onKeyDown` stops propagation only for Enter/Space, fires `onAttachmentClick`, and prevents default scroll — other keys (Tab, Escape, etc.) propagate normally
- `onAttachmentClick` is an optional prop; no-op if omitted

**Description** (optional) — `text-body-md text-fg-secondary`; wraps naturally; only rendered when `selected={true}` AND `description` prop is provided.

---

## Selection Contract

`RequestRow` is fully **controlled**. `onClick` fires on click or keyboard activation; the parent toggles `selected`. The component never manages selection state internally.

---

## Accessibility

- Root element: `<div role="button" tabIndex={0} aria-pressed={selected ?? false}>`
  - `aria-pressed` communicates the selected/expanded state
  - Accessible name derived from visible title text content
- `onKeyDown` handler:
  - `Enter`: fire `onClick()`
  - `Space`: call `e.preventDefault()` (prevents page scroll) then fire `onClick()`
  - Do NOT fire if `e.target !== e.currentTarget` — prevents triggering row selection when a child interactive element (e.g. attachment button) is keyboard-activated
- Focus ring: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary rounded-control`
- Status icons: `aria-hidden="true"` — status is communicated visually only; the title is the row's accessible name. Do NOT set `aria-label` on status icons.
- `orderNumber` span: `aria-hidden="true"` — supplementary visual label, not part of the accessible name

---

## Meta Items

The `meta` prop is an array of typed objects rendered left-to-right. Each `type` must be **unique** within the array. Use `type` as the React `key`.

### `comments`
- `<span className="flex items-center gap-1 text-label-md text-fg-muted">` wrapping `MessageCircle01Icon` (16px) + count
- Apply `opacity-40` to the outer `<span>` when `count === 0`

### `documents`
- `<span className="flex items-center gap-1 text-label-md text-fg-muted">` wrapping `File02Icon` (16px) + count
- Apply `opacity-40` to the outer `<span>` when `count === 0`

### `flag`
- `Flag02Icon` (14px) inside `<span className="flex h-6 w-6 items-center justify-center rounded-pill bg-purple-50 text-purple-500">`
- **Exception:** `bg-purple-50`/`text-purple-500` are raw Tailwind values, consistent with SubToolbar. Replace with a semantic token when one is added.

### `assignee`
- `Avatar` (`components/primitives/Avatar.tsx`) with `size="xs"` and `initials={item.initials}`
- If `item.color` is provided, pass `style={{ backgroundColor: item.color }}` to `Avatar` (via `HTMLAttributes` — no dedicated `color` prop on `Avatar`)
- When `item.locked === true`: `<span className="relative inline-flex">` wrapping `Avatar` + badge:
  - Badge: `<span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-pill bg-elevated"><Lock01Icon size={10} className="text-fg-muted" /></span>`

### `due-date`
- `item.date` is a **pre-formatted display string** (e.g. `"04/18/2025"`); rendered as-is
- `<span className="text-body-md text-fg-primary">{item.date}</span>`

### `e-signature`
- `<span className="rounded-pill border border-line bg-surface px-2 py-0.5 text-label-md text-fg-secondary">E-Signature</span>`
- `rounded-pill` is intentional (pill shape matches the design)

---

## Component API

```typescript
type StatusIndicator = 'warning' | 'in-progress' | 'rejected' | 'complete' | 'none';

type MetaItem =
  | { type: 'comments';     count: number }
  | { type: 'documents';    count: number }
  | { type: 'flag' }
  | { type: 'assignee';     initials: string; color?: string; locked?: boolean }
  | { type: 'due-date';     date: string }           // pre-formatted display string
  | { type: 'e-signature' };
  // Each type must appear at most once in the meta array

interface RequestRowProps {
  orderNumber: number;             // creation order number, displayed in left zone
  title: string;
  description?: string;            // shown only when selected={true}
  status?: StatusIndicator;        // default: 'none'
  attachmentLabel?: string;        // e.g. "Firm provided 8 files"
  onAttachmentClick?: () => void;  // optional; no-op if omitted
  meta?: MetaItem[];               // each type unique; rendered left-to-right
  selected?: boolean;              // controlled by parent; default false
  onClick?: () => void;            // parent handles selection toggle
  className?: string;
}
```

---

## Files

| File | Action |
|------|--------|
| `components/data-display/RequestRow.tsx` | Create |
| `components/data-display/RequestRow.stories.tsx` | Create |
| `components/data-display/index.ts` | Add `export { RequestRow } from './RequestRow'` |

---

## Stories

| Story | Description |
|-------|-------------|
| `Default` | Basic row, no meta, no selection |
| `Selected` | Row with `selected={true}` and `description="Procedures and process documentation regarding IT general controls"` |
| `AllStatuses` | Five rows showing each status indicator |
| `WithAllMeta` | Row with all six meta item types, unselected |
| `WithAttachment` | Row with `attachmentLabel` present |
| `NoMeta` | Row with no right-side meta |
| `AssigneeWithLock` | Row with assignee meta where `locked={true}` |

---

## Token Usage

All values use design tokens except `bg-purple-50`/`text-purple-500` (documented exception).

- Radii: `rounded-pill` for flag circle and e-signature badge; `rounded-control` for focus ring
- Typography: `text-body-md`, `text-label-md`
- Colors: `text-fg-primary`, `text-fg-muted`, `text-fg-secondary`, `bg-canvas`, `bg-surface`, `bg-elevated`, `bg-status-info-surface`, `border-action-primary`, `text-action-primary`, `text-status-warning`, `text-status-error`, `text-status-success`, `border-line`
- Focus: `focus-visible:ring-2 focus-visible:ring-action-primary rounded-control` (`rounded-control` = 4px)
- **Note:** Tailwind's default color palette (including `purple-50`, `purple-500`) is available via `theme.extend.colors` — these classes will work unless the config is ever changed to replace (not extend) the palette.
