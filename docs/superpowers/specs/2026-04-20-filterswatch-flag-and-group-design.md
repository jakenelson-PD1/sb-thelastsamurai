# FilterSwatch — Flag Indicator & Group Composite

**Date:** 2026-04-20
**Scope:** React + Figma + Storybook (full-stack).

---

## Goal

Extend the FilterSwatch system with two capabilities:

1. A `HighPriority` boolean on every `FilterSwatch` that overlays a flag icon on the colored tile — marking that swatch as representing high-priority data.
2. A new `FilterSwatchGroup` component that renders a category-legend cluster: one or two rows of swatches with a label centered beneath the cluster.

Both land across React (`components/primitives/`), Storybook, and Figma (`ZP0lSeT5Nwm1lpWI79qIaf`) in lockstep, per CLAUDE.md Rule 6 — one source of truth per component, no forks.

---

## Non-goals

- **No new data model changes.** The existing `isFlagged` property on requests (used by `EngagementLayout.stories.tsx`) is unchanged. `HighPriority` on `FilterSwatch` is purely presentational — a visual marker the caller decides to show.
- **No changes to the existing 40-variant `FilterSwatch` grid.** Color / Size / Active variants and their bindings stay exactly as shipped in the prior rebuild (`2026-04-20-filterswatch-rebuild-design.md`). We add a boolean property and a child icon; we do not renumber variants.
- **No responsive flex-wrap on `FilterSwatchGroup`.** Row count is derived from `swatches.length` at render time, not from container width.
- **No hard cap on swatch count.** The two-row layout handles up to 10 swatches cleanly. Beyond that it still renders but is off-spec.

---

## Section A — `FilterSwatch` gains `HighPriority`

### A.1 — React prop + rendering

**File:** `components/primitives/FilterSwatch.tsx`

Add `highPriority?: boolean` to `FilterSwatchProps`. Default `false`.

When `highPriority` is truthy, render a centered `Flag02Icon` on top of the colored fill.

**Required existing-code change:** the colored `<span>` currently does not carry `relative`. Adding the flag overlay requires it, so the className string gains `relative` unconditionally (the overlay child is rendered conditionally, so this is a harmless no-op when `highPriority` is `false`).

```tsx
<span className="relative rounded-control ..." style={{ backgroundColor: color }}>
  {highPriority && (
    <span className="absolute inset-0 flex items-center justify-center">
      <Flag02Icon
        size={size === 'md' ? 14 : 12}
        className="text-tile-flag"
        aria-label="High priority"
      />
    </span>
  )}
</span>
```

- Icon component: `Flag02Icon` from `components/primitives/icons/Flag02Icon.tsx` — matches the vocabulary already used in `EngagementLayout` for the toolbar flag toggle.
- Icon size: 12 at `sm` (16px swatch) / 14 at `md` (20px swatch).
- Icon color: the existing `text-tile-flag` Tailwind class (already defined in `tokens/semantic.ts` specifically for "Flag icon on colored tiles").
- Accessibility: `aria-label="High priority"` on the icon. The colored span keeps `aria-hidden` behavior implicit; the outer button still carries `aria-pressed={active}`.

### A.2 — Figma: BOOLEAN property on the existing ComponentSet

**Target:** `FilterSwatch` ComponentSet `484:19` on page `76:66`.

For every one of the existing 40 variants:
- Append a child `Flag02Icon` instance from the Icons page (`flag-02`, `Size=Small` = 16px variant).
- The parent variant frames in the rebuild have `layoutMode = 'NONE'`, so absolute positioning is straightforward — set the icon instance's `x`, `y`, `width`, `height` so it sits centered at 12×12 (for Size=sm variants) or 14×14 (for Size=md variants). If a future change converts the parent to auto-layout, set `layoutPositioning = 'ABSOLUTE'` on the icon child so it's excluded from the flow.
- Resize the icon instance to 12×12 or 14×14 depending on the variant's `Size` axis — the icon's internal vector scales down to fit.
- Bind the icon's stroke paint (Flag02 is a stroke-based icon) to a Semantic variable (see A.3). Flag02Icon's path uses `stroke="currentColor"`, so binding the stroke — not the fill — is what matters.
- Start with `visible = false` so `HighPriority=false` is the visual default.

Add one **BOOLEAN component property** on the ComponentSet:
- Name: `HighPriority`
- Default: `false`
- Wire every variant's flag-icon child's `visible` via `componentPropertyReferences: { visible: <HighPriorityPropertyKey> }`.

Result: right panel gains a fourth control (Color / Size / Active / HighPriority). Variant count remains 40; no explosion.

### A.3 — Token binding: `fg/tile-flag`

The React side uses Tailwind class `text-tile-flag`, meaning `tokens/semantic.ts` already defines `--color-tile-flag` for both Light and Dark modes.

In Figma, check whether a Semantic variable named `fg/tile-flag` (or `tile/flag`) exists in the Semantic collection.

- **If present:** bind the flag icon's paint to it.
- **If missing:** add it. Follow CLAUDE.md Rule 2 — define both Light and Dark values. The light-mode value should mirror `--color-tile-flag` from `semantic.ts` exactly; same for dark. Name the variable `fg/tile-flag` to match the existing `fg/*` namespace convention. This brings the Figma + code tokens into parity, matching the documented "Figma Semantic variable name → Tailwind class" mapping discipline.

If neither the variable nor adding it are acceptable for some reason we discover at implementation time, fall back to `fg/muted` and flag a follow-up task — but the default path is to add the token.

---

## Section B — `FilterSwatchGroup` (new component)

### B.1 — React surface

**File:** `components/primitives/FilterSwatchGroup.tsx`

```tsx
export interface FilterSwatchGroupSwatch {
  color: string;
  active?: boolean;
  highPriority?: boolean;
  onClick?: () => void;
  label?: string;      // per-swatch tooltip, passed through to FilterSwatch
}

export interface FilterSwatchGroupProps {
  /** Category label shown beneath the cluster */
  label: string;
  swatches: FilterSwatchGroupSwatch[];
  size?: 'sm' | 'md';  // applies to every swatch in the group
  className?: string;
}
```

### B.2 — Layout behavior

Vertical auto-layout:

```
┌ row 1 of swatches ─────────────┐
│ [■] [■] [■] [■] [■]            │
└────────────────────────────────┘
┌ row 2 of swatches (optional) ──┐
│ [■] [■] [■] [■] [■]            │
└────────────────────────────────┘
        Category label
```

**Wrap rule** (deterministic, derived from `swatches.length`):

| Count | Row 1 | Row 2 |
|---|---|---|
| 1–6 | all | — |
| 7 | 4 | 3 |
| 8 | 4 | 4 |
| 9 | 5 | 4 |
| 10 | 5 | 5 |
| 11+ | `ceil(N/2)` | `floor(N/2)` (off-spec) |

Implementation: `const splitIndex = count <= 6 ? count : Math.ceil(count / 2); const row1 = swatches.slice(0, splitIndex); const row2 = swatches.slice(splitIndex);`

**Gaps and typography:**
- Swatch-to-swatch gap: `gap-2` (8px) — matches the existing `EngagementLayout` toolbar pattern.
- Row-to-row gap: `gap-2` (8px).
- Cluster-to-label gap: `gap-2` (8px).
- Label: `text-label-md` (12px / Medium) — legend-caption style.
- Label color: `text-fg-muted`.
- Label alignment: centered horizontally under the cluster (`text-center`, parent `flex flex-col items-center`).
- No outer padding — the group is a composable container.

**Composition:** the group does nothing more than split the array and render `<FilterSwatch>` children. All swatch visuals (size, active ring, flag overlay) live in the canonical `FilterSwatch` component.

### B.3 — Figma ComponentSet

**New ComponentSet:** `FilterSwatchGroup` on the existing `FilterSwatch` page (`76:66`).

Variant axes:

| Axis | Values | Default |
|---|---|---|
| `Size` | `sm`, `md` | `sm` |
| `Layout` | `OneRow`, `TwoRows` | `OneRow` |

**4 variants total.** Each variant is built as:

- Outer vertical auto-layout frame:
  - `layoutMode = VERTICAL`
  - `itemSpacing = scale/2` (8px)
  - `counterAxisAlignItems = CENTER` (so rows and label center horizontally)
  - No padding, FILL sizing wherever appropriate.
- Row frame(s):
  - `layoutMode = HORIZONTAL`, `itemSpacing = scale/2`.
  - Children: instances of the canonical `FilterSwatch` ComponentSet. The instance's `Size` variant matches the group's `Size`.
  - `OneRow` variants seed with **5 swatches** (canonical brand/cerulean/green/yellow/orange).
  - `TwoRows` variants seed with **5 + 5** (full palette, order matching React default: brand / cerulean / green / yellow / orange, then red / pink / eggplant / purple / neutral).
- Label text node:
  - Inter Medium 12.
  - Fill bound to Semantic `fg/muted`.
  - Default text content: `Category`.
  - Horizontal align: CENTER. Width FILL.

No custom instance properties are added to the Group itself — designers override the label text and individual child FilterSwatch instance properties using Figma's built-in instance-swap and variant-override flow.

### B.4 — Storybook

**File:** `components/primitives/FilterSwatchGroup.stories.tsx`

Stories:
- `Default` — one-row, 4 status-palette swatches, label "Status".
- `TwoRows` — 10 full-palette swatches, label "Priority palette".
- `Sizes` — `sm` + `md` stacked side-by-side.
- `WithActiveAndFlagged` — a mix demonstrating both `active` and `highPriority`. **Must include at least one swatch that is both `active=true` and `highPriority=true` simultaneously**, to prove the active outline and the flag overlay compose cleanly (no z-index conflicts, no icon clipping inside the ring).
- `AllStates` — bounded matrix: **one Size × one Layout** only (`sm` × `OneRow`), showing the four combinations of `active × highPriority` across one palette color. Full Size and Layout coverage already lives in the individual stories (`Sizes`, `TwoRows`) — `AllStates` exists purely to show the state cross-product for a single configuration.

---

## Section C — Shared concerns

### C.1 — Source-of-truth parity

- Every Figma change in Section A and Section B uses instances of the canonical `FilterSwatch` ComponentSet (Rule 6). We do not rebuild swatch internals inside the group.
- The Figma `FilterSwatch` gets the `Flag02Icon` child + `HighPriority` BOOLEAN property; the Figma `FilterSwatchGroup` inherits the capability automatically via its child instances (designers can toggle `HighPriority` on any individual swatch inside a group via Figma's instance overrides).

### C.2 — Naming

- React component: `FilterSwatchGroup` (same folder as `FilterSwatch`).
- Figma ComponentSet: `FilterSwatchGroup` (same page as `FilterSwatch`).
- Variant axes: `Size = sm | md`, `Layout = OneRow | TwoRows` — no underscores, match Figma conventions in the file.

### C.3 — Re-exports

Add `FilterSwatchGroup` (plus its types `FilterSwatchGroupProps`, `FilterSwatchGroupSwatch`) to `components/primitives/index.ts`, mirroring the existing `FilterSwatch` export.

---

## Verification plan

1. **React unit behavior.**
   - `FilterSwatch` with `highPriority` renders a `Flag02Icon` with `aria-label="High priority"` on top of the colored span.
   - `highPriority={false}` (default) renders no flag.
   - Icon size is 12 at `sm`, 14 at `md`.
2. **Storybook visual parity.**
   - `primitives-filterswatch--all-states` story extended: new row showing `highPriority` on/off at both sizes across the palette.
   - `primitives-filterswatchgroup--*` stories render the exact 1-row / 2-row splits per the wrap rule table.
3. **Figma bindings audit.**
   - `FilterSwatch` ComponentSet `484:19` now exposes properties `Color`, `Size`, `Active`, `HighPriority` (the last a BOOLEAN). All 40 variants include a hidden-by-default flag icon child with `visible` wired to the property.
   - Each flag icon instance's paint is bound to the chosen Semantic variable (`fg/tile-flag` or `fg/muted`).
   - New `FilterSwatchGroup` ComponentSet has 4 variants across `Size × Layout`, each built from instances of `FilterSwatch` (no rebuilt swatch geometry), with the label text bound to `fg/muted`.
4. **Dark-mode flip.** Toggle Semantic mode Light → Dark on a test frame containing a Group. The swatch palette fills (Primitives) stay constant; the active-state outline shifts with `action/primary`; the flag icon shifts with `fg/tile-flag`; the label shifts with `fg/muted`. No other colors move.
5. **Rule 6 spot-check.** Inspect any group variant in Figma — every swatch inside is an INSTANCE of `FilterSwatch` (`484:19`), not a duplicated frame.

---

## Files touched

- **React:**
  - `components/primitives/FilterSwatch.tsx` — add `highPriority` prop + icon render.
  - `components/primitives/FilterSwatch.stories.tsx` — new stories demonstrating `highPriority`.
  - `components/primitives/FilterSwatchGroup.tsx` — new component.
  - `components/primitives/FilterSwatchGroup.stories.tsx` — new stories file.
  - `components/primitives/index.ts` — re-export `FilterSwatchGroup`.
- **Figma** (`ZP0lSeT5Nwm1lpWI79qIaf`):
  - `FilterSwatch` ComponentSet `484:19` — add flag child to each of 40 variants + BOOLEAN property.
  - New ComponentSet `FilterSwatchGroup` on the `FilterSwatch` page.
  - (Possibly) new Semantic variable `fg/tile-flag` with Light + Dark values matching `tokens/semantic.ts`.
- **Tokens (only if needed):** no new token in `tokens/semantic.ts` is expected — `--color-tile-flag` already exists. This may only need a Figma variable addition.
