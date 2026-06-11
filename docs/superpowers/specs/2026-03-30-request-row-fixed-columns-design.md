# RequestRow Fixed Column Layout

**Date:** 2026-03-30
**Status:** Approved
**Scope:** `components/data-display/RequestRow.tsx`

---

## Problem

Meta items (assignee, due date, comments, documents, e-signature, flag) are currently rendered in array order and packed left-to-right in the right zone. When an item is absent, subsequent items shift left, breaking column alignment across rows. This makes it hard to visually scan a column (e.g., "which rows have assignees?") because the eye has to re-acquire each attribute per row.

---

## Goal

Every row's meta zone renders the same 6 slots in the same horizontal positions. If a slot has no data, it renders as blank space. Scannability is the primary objective.

---

## Design

### Column Order (left → right)

| Slot | `MetaItem.type` | Width | Alignment |
|---|---|---|---|
| E-Signature | `'e-signature'` | 88px | center |
| Assignee | `'assignee'` | 32px | center |
| Due Date | `'due-date'` | 80px | center |
| Comments | `'comments'` | 44px | center |
| Documents | `'documents'` | 44px | center |
| Flag | `'flag'` | 32px | center |

**Slot content width: 320px** (6 slots, no gap between them).

The right zone container retains the existing `pl-3 ml-auto` classes for visual separation from the title column — the `pl-3` (12px) is padding on the container, not part of the 320px slot content. Total space consumed by the meta zone is **332px** (12px padding + 320px slots).

The `type` values above are the exact string literals from the `MetaItem` discriminated union in `RequestRow.tsx`. No new types are introduced.

### Default / empty state

The `meta` prop defaults to `[]` (already the case in the current component). An empty array produces 6 blank slot placeholders — the row renders with only status icon, order number, and title.

### Count overflow

For `'comments'` and `'documents'` slots: when `count > 99`, render `"99+"` instead of the raw number to fit within the 44px slot.

### Rendering approach

Replace `meta.map(renderMetaItem)` with a fixed slot renderer.

**Step 1 — Build lookup map:**
```ts
const metaByType = Object.fromEntries(meta.map(item => [item.type, item]));
```
Duplicate `type` values in the `meta` array are invalid input. If duplicates occur, the last entry wins (standard `Object.fromEntries` behavior). No runtime warning required — callers are responsible for well-formed data.

**Step 2 — Render fixed slots:**

Each slot follows this pattern:
```tsx
<div
  className="shrink-0 flex items-center justify-center"
  style={{ width: N }}
  aria-hidden={!metaByType['<type>'] ? true : undefined}
>
  {metaByType['<type>'] ? <PopulatedContent /> : null}
</div>
```

- When the slot is **empty**: `aria-hidden={true}` hides the blank div from screen readers.
- When the slot is **populated**: `aria-hidden={undefined}` (attribute absent) — focusable children (buttons, tooltips) remain fully keyboard-accessible.

The `PopulatedContent` for each slot is the existing per-type rendering logic already present in the current `renderMetaItem` function — extracted verbatim into each slot. No new rendering logic is introduced.

**Step 3 — Outer container:**
```tsx
<div className="relative z-10 flex gap-0 items-center shrink-0 pl-3 ml-auto">
  {/* 6 fixed-width slot divs */}
</div>
```
Explicit `gap-0` prevents any inherited gap from affecting slot widths.

### Narrow width behavior

The meta zone is `shrink-0` at 332px total. The title column is `flex-1 min-w-0 truncate`. **The layout is not supported below 360px total row width.** At or above 360px, the title has ~28px minimum visible width and truncates gracefully. Below 360px, the title collapses to zero — this is not a supported state. See Caller Guidance below.

RTL layouts are out of scope (product is English-only).

### Caller guidance — `listMinSize`

`listMinSize` on `MasterDetailLayout` is a **number representing a percentage** (0–100) of the total panel group width. Set it to ensure the list panel is at least 360px wide:

| Viewport width | Recommended `listMinSize` |
|---|---|
| 1024px | `35` (~358px — acceptable minimum) |
| 1280px | `29` (~371px) |
| 1536px | `24` (~368px) |

### Layout summary

```
[status 24px][order # 32px][title — flex-1 min-w-0 truncate] | pl-3 | [e-sig 88px][assignee 32px][due-date 80px][comments 44px][documents 44px][flag 32px]
                                                               12px    ←————————————————— 320px slots, gap-0 ————————————————————→
```

---

## Files Changed

| File | Change |
|---|---|
| `components/data-display/RequestRow.tsx` | Replace `meta.map(renderMetaItem)` with fixed slot renderer |

No token changes, no new components, no changes to `MetaItem` or `RequestRowProps`.

---

## Out of Scope

- Configurable column sets per context
- Column sorting or resizing
- Column header labels above the list
- Responsive column hiding at narrow widths
- RTL layout support
