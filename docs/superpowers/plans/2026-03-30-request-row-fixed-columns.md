# RequestRow Fixed Column Layout Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the packed, order-dependent meta zone in `RequestRow` with 6 fixed-width columns so every row's attributes always appear in the same horizontal position.

**Architecture:** Build a `metaByType` lookup map from the `meta` array, then render 6 fixed-width slot divs in a defined order. Each slot renders its content when present or an empty `aria-hidden` div when absent. No new components, no API changes.

**Tech Stack:** React 18, TypeScript 5, Tailwind CSS 3, Storybook 8 (visual verification)

**Spec:** `docs/superpowers/specs/2026-03-30-request-row-fixed-columns-design.md`

---

## Chunk 1: Implement Fixed Column Layout

### Task 1: Add `metaByType` lookup and fixed slot renderer

**Files:**
- Modify: `components/data-display/RequestRow.tsx`

#### Column widths (from spec)

| Slot | type key | Width |
|---|---|---|
| E-Signature | `'e-signature'` | 88px |
| Assignee | `'assignee'` | 32px |
| Due Date | `'due-date'` | 80px |
| Comments | `'comments'` | 44px |
| Documents | `'documents'` | 44px |
| Flag | `'flag'` | 32px |

- [ ] **Step 1: Open `components/data-display/RequestRow.tsx` and read it in full**

Confirm the current right zone (line ~225):
```tsx
<div className="relative z-10 flex items-center gap-1 shrink-0 pl-3 ml-auto">
  {meta.map(renderMetaItem)}
</div>
```

- [ ] **Step 2: Remove `renderMetaItem` — extract its per-type logic into inline slot renderers**

The `renderMetaItem` function (lines 68–144) currently handles all 6 types in a `switch`. We will inline each case directly into its fixed slot. Delete the `renderMetaItem` function entirely.

Keep all the helper functions it uses: `statusDot`, `metaButton`, `metaButtonBase`.

- [ ] **Step 3: Build the `metaByType` lookup inside `RequestRow`**

Add this immediately above the `return` statement in `RequestRow`:

```tsx
// Build fixed-column lookup — O(n) where n ≤ 6
type MetaByType = { [K in MetaItem['type']]?: Extract<MetaItem, { type: K }> };
const metaByType = meta.reduce<MetaByType>((acc, item) => {
  (acc as Record<string, MetaItem>)[item.type] = item;
  return acc;
}, {});
```

- [ ] **Step 4: Replace the right zone with 6 fixed-width slots**

Replace the entire right zone div (currently `<div className="relative z-10 flex items-center gap-1 shrink-0 pl-3 ml-auto">`):

```tsx
{/* Right zone — 6 fixed columns, always in the same order */}
<div className="relative z-10 flex gap-0 items-center shrink-0 pl-3 ml-auto">

  {/* E-Signature — 88px */}
  <div
    className="shrink-0 flex items-center justify-center"
    style={{ width: 88 }}
    aria-hidden={!metaByType['e-signature'] ? true : undefined}
  >
    {metaByType['e-signature'] && (
      <Badge variant="cerulean">E-Signature</Badge>
    )}
  </div>

  {/* Assignee — 32px */}
  <div
    className="shrink-0 flex items-center justify-center"
    style={{ width: 32 }}
    aria-hidden={!metaByType['assignee'] ? true : undefined}
  >
    {metaByType['assignee'] && (() => {
      const item = metaByType['assignee']!;
      return (
        <Tooltip content={`Assignee: ${item.initials}`}>
          {metaButton(item.onClick, 'rounded-full px-1',
            <span className="relative inline-flex">
              <Avatar
                size="xs"
                initials={item.initials}
                style={item.color ? { backgroundColor: item.color, color: item.textColor } : undefined}
              />
              {item.locked && (
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-elevated">
                  <Lock01Icon size={iconSize.sm} className="text-fg-muted" />
                </span>
              )}
            </span>
          )}
        </Tooltip>
      );
    })()}
  </div>

  {/* Due Date — 80px */}
  <div
    className="shrink-0 flex items-center justify-center"
    style={{ width: 80 }}
    aria-hidden={!metaByType['due-date'] ? true : undefined}
  >
    {metaByType['due-date'] && (() => {
      const item = metaByType['due-date']!;
      return (
        <Tooltip content="Due date">
          {metaButton(item.onClick,
            'px-1 rounded-control text-label-md font-medium text-fg-secondary',
            <>{item.date}</>
          )}
        </Tooltip>
      );
    })()}
  </div>

  {/* Comments — 44px */}
  <div
    className="shrink-0 flex items-center justify-center"
    style={{ width: 44 }}
    aria-hidden={!metaByType['comments'] ? true : undefined}
  >
    {metaByType['comments'] && (() => {
      const item = metaByType['comments']!;
      const displayCount = item.count > 99 ? '99+' : item.count;
      return (
        <Tooltip content={`${item.count} comment${item.count !== 1 ? 's' : ''}`}>
          {metaButton(item.onClick,
            'gap-1 px-1 rounded-control text-label-md',
            <span className="contents" style={item.unread ? { color: 'var(--color-meta-unread)' } : undefined}>
              <span className="relative inline-flex">
                <MessageCircle01Icon size={iconSize.sm} className={item.unread ? undefined : 'text-fg-muted'} />
                {item.dot === 'unread' && statusDot('unread')}
              </span>
              <span className={item.unread ? undefined : 'text-fg-muted'}>{displayCount}</span>
            </span>
          )}
        </Tooltip>
      );
    })()}
  </div>

  {/* Documents — 44px */}
  <div
    className="shrink-0 flex items-center justify-center"
    style={{ width: 44 }}
    aria-hidden={!metaByType['documents'] ? true : undefined}
  >
    {metaByType['documents'] && (() => {
      const item = metaByType['documents']!;
      const displayCount = item.count > 99 ? '99+' : item.count;
      return (
        <Tooltip content={`${item.count} document${item.count !== 1 ? 's' : ''}`}>
          {metaButton(item.onClick,
            'gap-1 px-1 rounded-control text-label-md',
            <span className="contents" style={item.unread ? { color: 'var(--color-meta-unread)' } : undefined}>
              <span className="relative inline-flex">
                <File02Icon size={iconSize.sm} className={item.unread ? undefined : 'text-fg-muted'} />
                {statusDot(item.dot)}
              </span>
              <span className={item.unread ? undefined : 'text-fg-muted'}>{displayCount}</span>
            </span>
          )}
        </Tooltip>
      );
    })()}
  </div>

  {/* Flag — 32px */}
  <div
    className="shrink-0 flex items-center justify-center"
    style={{ width: 32 }}
    aria-hidden={!metaByType['flag'] ? true : undefined}
  >
    {metaByType['flag'] && (() => {
      const item = metaByType['flag']!;
      return (
        <Tooltip content="High priority">
          {metaButton(item.onClick, 'rounded-control px-1 text-status-purple-fg',
            <Flag02Icon size={iconSize.sm} />
          )}
        </Tooltip>
      );
    })()}
  </div>

</div>
```

- [ ] **Step 5: Verify TypeScript compiles**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai
npx tsc --noEmit
```

Expected: no errors. Fix any type errors before continuing.

- [ ] **Step 6: Visual check in Storybook**

Open Storybook at http://localhost:6006 and navigate to **Data Display → RequestRow**.

Verify:
1. Rows with all 6 meta items show all columns populated
2. Rows missing some items show blank space in those column positions — *other columns do not shift*
3. Toggle dark mode — all slots render correctly in both modes
4. Rows with `meta=[]` show 6 blank slots (right zone has fixed width, title fills remaining space)
5. Count of `100` renders as `"99+"` in comments/documents slots

- [ ] **Step 7: Check the EngagementLayout story**

Navigate to **Layout → EngagementLayout** in Storybook. Scroll through all request rows and confirm:
- Due dates always appear in the same horizontal position across rows
- Assignee avatars always in the same column
- Rows without assignees have a blank space where the avatar would be
- Flag icons always at the far right

- [ ] **Step 8: Commit**

```bash
cd /Users/jakenelson/Downloads/agents-main/last-samurai
git add components/data-display/RequestRow.tsx
git commit -m "feat: fixed-column meta zone in RequestRow

Replace packed meta.map() layout with 6 fixed-width slots so each
attribute type always appears at the same horizontal position.
Empty slots reserve space instead of collapsing.

Columns (l→r): E-Sig 88px · Assignee 32px · Due Date 80px ·
               Comments 44px · Documents 44px · Flag 32px"
```
