# FilterSwatch Flag Indicator & Group Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship two FilterSwatch extensions in lockstep across React and Figma — a `HighPriority` boolean that overlays a flag icon on every swatch, and a new `FilterSwatchGroup` composite that renders labelled clusters of swatches in one or two rows.

**Architecture:** Two parallel surfaces, one source of truth per component. React side: add an `highPriority` prop + conditional `<Flag02Icon>` overlay to the canonical `FilterSwatch` primitive, then build `FilterSwatchGroup` as a thin vertical flex wrapper that renders `<FilterSwatch>` instances (no forked internals). Figma side: add a `HighPriority` BOOLEAN component property on the existing 40-variant `FilterSwatch` ComponentSet (`484:19`), with a hidden-by-default flag icon child wired to it on every variant; then build a new 4-variant `FilterSwatchGroup` ComponentSet on the same page that composes instances of the canonical `FilterSwatch` set. Verification: Storybook parity + Figma bindings audit + dark-mode flip.

**Tech Stack:** React 18 + TypeScript + Tailwind (tokens via `tokens/semantic.ts`), Storybook 8 at `http://localhost:6006`, Figma Plugin API via `mcp__1d4ab4e9-…__use_figma` and `get_screenshot`.

**Spec:** `docs/superpowers/specs/2026-04-20-filterswatch-flag-and-group-design.md`
**Figma file key:** `ZP0lSeT5Nwm1lpWI79qIaf`
**Target Figma page:** `FilterSwatch` (`76:66`)
**Target Figma ComponentSet (existing):** `FilterSwatch` (`484:19`)
**Target Figma ComponentSet (new):** `FilterSwatchGroup` (to be created on the same page)
**React files created:** `components/primitives/FilterSwatchGroup.tsx`, `components/primitives/FilterSwatchGroup.stories.tsx`
**React files modified:** `components/primitives/FilterSwatch.tsx`, `components/primitives/FilterSwatch.stories.tsx`, `components/primitives/index.ts`

---

## Execution Notes (carried forward from the prior rebuild)

Three non-obvious Figma Plugin API behaviours were learned during the FilterSwatch rebuild and still apply to every Figma mutation in this plan:

1. **A `COMPONENT_SET` with zero children auto-dissolves.** Never leave a set empty mid-script. When appending new children alongside old, add new first — or for this plan, we never remove the 40 variants at all, we only add a child icon + a property.
2. **Primitive palette variable names are `{color}/300`, NOT `colors/{color}-300`.** Not relevant to this plan directly, but carried forward in case a fallback is ever needed.
3. **`setBoundVariable('cornerRadius', …)` silently no-ops on `COMPONENT` nodes.** Use per-corner binding (`topLeftRadius`, `topRightRadius`, `bottomLeftRadius`, `bottomRightRadius`).

Also known: `setBoundVariable` for width/height only takes effect once the node is parented. Append first, bind dims second.

No unit-test harness exists in this project (`package.json` lists only `lint`, `format`, `storybook`, `build-storybook`). Verification is **story-first**: add / modify Storybook stories, then confirm the rendered output matches the spec. This matches the pattern in the sibling rebuild plan.

---

## Standard Figma Helper (prepend to every `use_figma` script in Chunks 3–4)

```javascript
const collections = figma.variables.getLocalVariableCollections();
const primitives  = collections.find(c => c.name === 'Primitives');
const semantic    = collections.find(c => c.name === 'Semantic');
const spacingColl = collections.find(c => c.name === 'Spacing');
const radiusColl  = collections.find(c => c.name === 'Radius');

const primVars = {}, semVars = {}, spVars = {}, rVars = {};
for (const id of primitives.variableIds)  { const v = figma.variables.getVariableById(id); if (v) primVars[v.name] = v; }
for (const id of semantic.variableIds)    { const v = figma.variables.getVariableById(id); if (v) semVars[v.name]  = v; }
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name]   = v; }
for (const id of radiusColl.variableIds)  { const v = figma.variables.getVariableById(id); if (v) rVars[v.name]    = v; }

function paintFromVar(v, bindField) {
  if (!v) { console.warn('Missing variable'); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, bindField || 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (!v) { console.warn('Missing spacing: ' + name); return; } node.setBoundVariable(prop, v); }
function rx(node, prop, name) { const v = rVars[name]; if (!v) { console.warn('Missing radius: ' + name); return; } node.setBoundVariable(prop, v); }
```

---

## Chunk 1: React — `FilterSwatch` gains `highPriority`

Scope: add the `highPriority?: boolean` prop to the canonical React primitive, render a centered `<Flag02Icon>` overlay when truthy, and extend Storybook to cover the new state. No Figma work in this chunk.

**Files:**
- Modify: `components/primitives/FilterSwatch.tsx` (lines 1–52, entire file)
- Modify: `components/primitives/FilterSwatch.stories.tsx` (add new stories, extend `AllStates`)
- Not modified in this chunk: `components/primitives/index.ts` (the existing `FilterSwatch` and `FilterSwatchProps` exports still cover the widened prop set).

---

### Task 1: Add `highPriority` prop and flag overlay to `FilterSwatch.tsx`

**Files:**
- Modify: `components/primitives/FilterSwatch.tsx`

Why `relative` goes on unconditionally: the overlay child uses `absolute inset-0`. Its parent must be positioned for the overlay to anchor correctly. Adding `relative` on the colored span is a no-op when the overlay isn't rendered (no child to position), so it's safe as a permanent change.

- [ ] **Step 1: Read the current `FilterSwatch.tsx`**

Run (via the Read tool): `components/primitives/FilterSwatch.tsx`.

Expected: 52-line file matching the content captured in the spec background. Confirm the colored span's className does NOT currently contain `relative` — if it does, the codebase has drifted from the spec and the diff below must be adjusted.

- [ ] **Step 2: Add the `Flag02Icon` import**

At the top of the file, add an import for `Flag02Icon`:

```tsx
import { Flag02Icon } from './icons/Flag02Icon';
```

Place it immediately after the existing `Tooltip` import on line 2.

- [ ] **Step 3: Extend `FilterSwatchProps`**

Add the optional `highPriority` field. The full updated interface reads:

```ts
export interface FilterSwatchProps {
  /** Color value — use a value from the design system palette */
  color: string;
  active?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
  className?: string;
  label?: string;
  /** Overlay a flag icon on the swatch — marks this tile as high priority */
  highPriority?: boolean;
}
```

- [ ] **Step 4: Destructure `highPriority` in the component signature**

Update the function signature:

```tsx
export function FilterSwatch({
  color,
  active = false,
  onClick,
  size = 'sm',
  className,
  label,
  highPriority = false,
}: FilterSwatchProps) {
```

- [ ] **Step 5: Add `relative` to the colored span's className and render the overlay**

Replace the existing colored-span JSX (`<span className={clsx('rounded-control transition-all', ...)} style={{ backgroundColor: color }} />`) with:

```tsx
<span
  className={clsx(
    'relative rounded-control transition-all',
    active
      ? 'outline outline-2 outline-[var(--color-action-primary)] outline-offset-0'
      : 'opacity-80 hover:opacity-100',
    swatch,
  )}
  style={{ backgroundColor: color }}
>
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

Note three things about this diff:
1. `relative` is added unconditionally (harmless when no child is rendered — see task preamble).
2. The self-closing `<span ... />` becomes a paired `<span>...</span>` because it now has children.
3. The icon's `className="text-tile-flag"` drives color via `currentColor` — the Flag02Icon path uses `stroke="currentColor"`.

- [ ] **Step 6: Type-check the file in isolation**

Run: `npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E 'FilterSwatch\.tsx'`

Expected: no output. If errors appear, fix them before moving on.

- [ ] **Step 7: Boot Storybook and smoke-test `Default`**

First check if Storybook is already running: `lsof -iTCP:6006 -sTCP:LISTEN 2>/dev/null | head -1`. If it returns a line, Storybook is already live on port 6006 — skip to the URL open. If not, run `npm run storybook` in a background shell.

Open `http://localhost:6006/?path=/story/primitives-filterswatch--default`.

Expected: the existing multi-select palette renders exactly as before — no flag icons anywhere, no layout shift. `highPriority` defaults to `false`, so the default should be visually unchanged.

- [ ] **Step 8: Commit**

```bash
git add components/primitives/FilterSwatch.tsx
git commit -m "feat(FilterSwatch): add highPriority prop with flag overlay"
```

---

### Task 2: Extend `FilterSwatch.stories.tsx` with `highPriority` coverage

**Files:**
- Modify: `components/primitives/FilterSwatch.stories.tsx`

Goal: expose the new prop in Storybook. Add two dedicated stories and extend `AllStates` so every palette row shows both flagged and unflagged tiles at both sizes.

- [ ] **Step 1: Add a `Flagged` story**

Append to the bottom of `FilterSwatch.stories.tsx`:

```tsx
// ─── High-priority flag overlay ──────────────────────────────────────────────
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

- [ ] **Step 2: Add a `FlaggedAndActive` story**

Immediately after `Flagged`:

```tsx
// ─── Flag + active outline composed together ─────────────────────────────────
export const FlaggedAndActive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <FilterSwatch key={key} color={color} active highPriority />
      ))}
    </div>
  ),
};
```

- [ ] **Step 3: Extend `AllStates` to include flagged columns at both sizes**

Replace the existing `AllStates` story body with:

```tsx
// ─── Active × flagged matrix per palette color at both sizes ─────────────────
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {PALETTE_SWATCHES.map(({ key, color }) => (
        <div key={key} className="flex items-center gap-4">
          <span className="w-20 text-sm text-fg-muted">{key}</span>
          {(['sm', 'md'] as const).map((size) => (
            <div key={size} className="flex items-center gap-2">
              <FilterSwatch color={color} size={size} active={false} />
              <FilterSwatch color={color} size={size} active />
              <FilterSwatch color={color} size={size} active={false} highPriority />
              <FilterSwatch color={color} size={size} active highPriority />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
```

Each row now shows 8 swatches: (`sm` × 4 states) + (`md` × 4 states), with the 4 states being active×highPriority cross-product.

- [ ] **Step 4: Verify the three new/modified stories in Storybook**

Open each URL and confirm:

1. `http://localhost:6006/?path=/story/primitives-filterswatch--flagged`
   - 10 swatches across the palette, each `sm`, each with a centered dark flag icon on top of the fill. No outline.
2. `http://localhost:6006/?path=/story/primitives-filterswatch--flagged-and-active`
   - Same 10 swatches, each with the 2px `action/primary` outline AND the flag icon. The icon must not be clipped by the outline or shift position.
3. `http://localhost:6006/?path=/story/primitives-filterswatch--all-states`
   - 10 rows × 8 swatches each. Every row shows the full cross-product of (size × active × highPriority). Flag icons on the right half of each row; active outlines on the 2nd and 4th of each size-group.

Expected: visual fidelity in all three. No console errors. Dark-mode toggle (via Storybook toolbar) should flip the flag icon color to the dark-mode value of `--color-tile-flag` (see `tokens/semantic.ts:195` → `#111114`).

- [ ] **Step 5: Commit**

```bash
git add components/primitives/FilterSwatch.stories.tsx
git commit -m "docs(FilterSwatch): add Flagged/FlaggedAndActive stories, extend AllStates"
```

---

## Chunk 2: React — `FilterSwatchGroup` new component

Scope: create the new `FilterSwatchGroup` primitive, write its stories, and re-export it from `components/primitives/index.ts`. Composition-only — the group renders `<FilterSwatch>` children and owns no swatch visuals.

**Files:**
- Create: `components/primitives/FilterSwatchGroup.tsx`
- Create: `components/primitives/FilterSwatchGroup.stories.tsx`
- Modify: `components/primitives/index.ts` (two new re-export lines)

---

### Task 3: Create `FilterSwatchGroup.tsx`

**Files:**
- Create: `components/primitives/FilterSwatchGroup.tsx`

Two public types, one component. The wrap rule is spec B.2: counts 1–6 stay on one row; 7+ split `ceil(N/2)` / `floor(N/2)`.

- [ ] **Step 1: Create the file with the full source**

Write the following to `components/primitives/FilterSwatchGroup.tsx`:

```tsx
import { clsx } from 'clsx';
import { FilterSwatch } from './FilterSwatch';

export interface FilterSwatchGroupSwatch {
  /** Color value — use a value from the design system palette */
  color: string;
  active?: boolean;
  highPriority?: boolean;
  onClick?: () => void;
  /** Per-swatch tooltip, passed through to the underlying FilterSwatch */
  label?: string;
}

export interface FilterSwatchGroupProps {
  /** Category label shown beneath the cluster */
  label: string;
  swatches: FilterSwatchGroupSwatch[];
  /** Applies to every swatch in the group */
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Splits `swatches` into up to two rows by count.
 * - 1–6: one row (all swatches)
 * - 7+:  two rows of ceil(N/2) and floor(N/2)
 */
function splitRows<T>(swatches: T[]): [T[], T[]] {
  const count = swatches.length;
  if (count <= 6) return [swatches, []];
  const splitIndex = Math.ceil(count / 2);
  return [swatches.slice(0, splitIndex), swatches.slice(splitIndex)];
}

export function FilterSwatchGroup({
  label,
  swatches,
  size = 'sm',
  className,
}: FilterSwatchGroupProps) {
  const [row1, row2] = splitRows(swatches);

  return (
    <div className={clsx('flex flex-col items-center gap-2', className)}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {row1.map((s, i) => (
            <FilterSwatch
              key={`r1-${i}`}
              color={s.color}
              active={s.active}
              highPriority={s.highPriority}
              onClick={s.onClick}
              label={s.label}
              size={size}
            />
          ))}
        </div>
        {row2.length > 0 && (
          <div className="flex gap-2">
            {row2.map((s, i) => (
              <FilterSwatch
                key={`r2-${i}`}
                color={s.color}
                active={s.active}
                highPriority={s.highPriority}
                onClick={s.onClick}
                label={s.label}
                size={size}
              />
            ))}
          </div>
        )}
      </div>
      <span className="text-label-md text-fg-muted text-center">{label}</span>
    </div>
  );
}
```

Notes on the implementation:
- `splitRows` is kept module-private (no `export` keyword). It lives in this file because it's tiny and tightly coupled to the component.
- All gaps are `gap-2` (8px) per spec B.2.
- The outer wrapper is `flex flex-col items-center gap-2` so the inner row stack and the label both center horizontally.
- The inner `flex flex-col gap-2` owns row-to-row spacing; the outer owns cluster-to-label spacing. Both happen to be 8px but they're conceptually separate gaps.

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit -p tsconfig.json 2>&1 | grep FilterSwatchGroup`

Expected: no output (clean).

- [ ] **Step 3: Commit**

```bash
git add components/primitives/FilterSwatchGroup.tsx
git commit -m "feat(FilterSwatchGroup): add labelled cluster primitive"
```

---

### Task 4: Create `FilterSwatchGroup.stories.tsx`

**Files:**
- Create: `components/primitives/FilterSwatchGroup.stories.tsx`

Five stories mirroring spec B.4 exactly. `WithActiveAndFlagged` must include one swatch that is both `active=true` and `highPriority=true`. `AllStates` is bounded to a single Size × Layout (`sm` × `OneRow`) — per-size / per-layout coverage already lives in the dedicated `Sizes` and `TwoRows` stories.

- [ ] **Step 1: Create the file with all five stories**

Write to `components/primitives/FilterSwatchGroup.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FilterSwatchGroup } from './FilterSwatchGroup';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof FilterSwatchGroup> = {
  component: FilterSwatchGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof FilterSwatchGroup>;

// ─── Seed palettes ──────────────────────────────────────────────────────────
const STATUS_4 = [
  { color: colors.green[300] },
  { color: colors.yellow[300] },
  { color: colors.orange[300] },
  { color: colors.red[300] },
];

const FULL_PALETTE_10 = [
  { color: colors.brand[300] },
  { color: colors.cerulean[300] },
  { color: colors.green[300] },
  { color: colors.yellow[300] },
  { color: colors.orange[300] },
  { color: colors.red[300] },
  { color: colors.pink[300] },
  { color: colors.eggplant[300] },
  { color: colors.purple[300] },
  { color: colors.neutral[300] },
];

// ─── Stories ────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => <FilterSwatchGroup label="Status" swatches={STATUS_4} />,
};

export const TwoRows: Story = {
  render: () => (
    <FilterSwatchGroup label="Priority palette" swatches={FULL_PALETTE_10} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-start gap-8">
      <FilterSwatchGroup label="Status (sm)" swatches={STATUS_4} size="sm" />
      <FilterSwatchGroup label="Status (md)" swatches={STATUS_4} size="md" />
    </div>
  ),
};

export const WithActiveAndFlagged: Story = {
  render: () => (
    <FilterSwatchGroup
      label="Active + priority demo"
      swatches={[
        { color: colors.brand[300] },
        { color: colors.green[300], active: true },
        { color: colors.yellow[300], highPriority: true },
        // The combined case — must render both the active outline AND the flag overlay
        { color: colors.red[300], active: true, highPriority: true },
        { color: colors.neutral[300] },
      ]}
    />
  ),
};

// Bounded matrix: single Size × single Layout (sm × OneRow).
// Shows the four combinations of active × highPriority on a single palette color.
export const AllStates: Story = {
  render: () => (
    <FilterSwatchGroup
      label="brand — states"
      swatches={[
        { color: colors.brand[300] },
        { color: colors.brand[300], active: true },
        { color: colors.brand[300], highPriority: true },
        { color: colors.brand[300], active: true, highPriority: true },
      ]}
    />
  ),
};
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit -p tsconfig.json 2>&1 | grep -i filterswatchgroup`

Expected: no output (clean).

- [ ] **Step 3: Verify each story in Storybook**

Open each URL and check against the spec:

1. `http://localhost:6006/?path=/story/primitives-filterswatchgroup--default`
   - 4 swatches in one row. Centered label "Status" beneath.
2. `http://localhost:6006/?path=/story/primitives-filterswatchgroup--two-rows`
   - Row 1: 5 swatches (brand through orange). Row 2: 5 swatches (red through neutral). Centered label "Priority palette".
3. `http://localhost:6006/?path=/story/primitives-filterswatchgroup--sizes`
   - Two groups side-by-side: `sm` on left with smaller 16px swatches, `md` on right with larger 20px swatches. Each has its own label.
4. `http://localhost:6006/?path=/story/primitives-filterswatchgroup--with-active-and-flagged`
   - 5 swatches: plain / active-only / flagged-only / active+flagged / plain. The fourth swatch must clearly show BOTH the blue outline AND the flag overlay without clipping.
5. `http://localhost:6006/?path=/story/primitives-filterswatchgroup--all-states`
   - 4 brand-300 swatches in one row: plain / active / flagged / active+flagged. Label "brand — states".

Expected: all five render correctly. Flip dark-mode via toolbar and confirm palette fills stay constant, outlines and flag icons shift per their Semantic tokens.

- [ ] **Step 4: Commit**

```bash
git add components/primitives/FilterSwatchGroup.stories.tsx
git commit -m "docs(FilterSwatchGroup): add five stories covering layouts and states"
```

---

### Task 5: Re-export `FilterSwatchGroup` from `components/primitives/index.ts`

**Files:**
- Modify: `components/primitives/index.ts`

- [ ] **Step 1: Read the current index**

Run (via the Read tool): `components/primitives/index.ts`.

Expected: 16 lines. Confirm lines 13–14 already export `FilterSwatch` / `FilterSwatchProps`.

- [ ] **Step 2: Add the two re-export lines**

After the existing `FilterSwatch` exports (line 14), insert:

```ts
export { FilterSwatchGroup } from './FilterSwatchGroup';
export type { FilterSwatchGroupProps, FilterSwatchGroupSwatch } from './FilterSwatchGroup';
```

Result — the relevant section of the file:

```ts
export { FilterSwatch } from './FilterSwatch';
export type { FilterSwatchProps } from './FilterSwatch';
export { FilterSwatchGroup } from './FilterSwatchGroup';
export type { FilterSwatchGroupProps, FilterSwatchGroupSwatch } from './FilterSwatchGroup';
export * from './icons';
```

- [ ] **Step 3: Type-check and lint**

Run: `npm run lint -- components/primitives/index.ts`

Expected: no errors.

- [ ] **Step 4: Confirm the public surface imports cleanly**

From a scratch REPL or by temporarily editing any story file that already imports from `components/primitives`, verify:

```ts
import { FilterSwatchGroup, type FilterSwatchGroupProps } from '../../components/primitives';
```

compiles clean. Remove the scratch edit after verification.

- [ ] **Step 5: Commit**

```bash
git add components/primitives/index.ts
git commit -m "feat(primitives): export FilterSwatchGroup"
```

---

## Chunk 3: Figma — `FilterSwatch` flag child + `HighPriority` BOOLEAN property

Scope: add a hidden-by-default `flag-02` icon instance to every one of the 40 existing `FilterSwatch` variants on ComponentSet `484:19`, add a BOOLEAN component property named `HighPriority` (default `false`), and wire each flag child's `visible` via `componentPropertyReferences`. Bind the icon's stroke to `fg/tile-flag` (creating the Semantic variable if missing, with Light + Dark values mirroring `tokens/semantic.ts`).

**Files:**
- Figma: `ZP0lSeT5Nwm1lpWI79qIaf` → page `FilterSwatch` (`76:66`) → ComponentSet `FilterSwatch` (`484:19`).
- Figma: Semantic variable collection (possibly new variable `fg/tile-flag`).
- Code: none.

**Preconditions:** the 40-variant rebuild is already complete (see `2026-04-20-filterswatch-rebuild.md`). Each variant is a `COMPONENT` node named `Color={name}, Size={sm|md}, Active={true|false}` with `layoutMode = 'NONE'` and either 16×16 or 20×20 dimensions.

---

### Task 6: Screenshot baseline

- [ ] **Step 1: Capture the ComponentSet before mutation**

Call `get_screenshot` on node `484:19` of file `ZP0lSeT5Nwm1lpWI79qIaf`. Save the image as the before-state for later diff.

Expected: the 10×4 grid from the prior rebuild — no flag icons anywhere.

---

### Task 7: Ensure the `fg/tile-flag` Semantic variable exists

Before binding any paint, confirm the target Semantic variable. Per the spec (A.3), reuse if present, create if missing. Light-mode value from `tokens/semantic.ts:41` = `colors.neutral[800]` (resolves via the Primitives palette to the Figma variable `neutral/800`). Dark-mode value from `tokens/semantic.ts:195` = `#111114` (hard-coded hex — no Primitives match, so bind the raw hex).

- [ ] **Step 1: Detect whether `fg/tile-flag` exists**

Run via `use_figma`:

```javascript
const sem = figma.variables.getLocalVariableCollections().find(c => c.name === 'Semantic');
const byName = {};
for (const id of sem.variableIds) {
  const v = figma.variables.getVariableById(id);
  if (v) byName[v.name] = v;
}
console.log('has fg/tile-flag:', !!byName['fg/tile-flag']);
console.log('has tile/flag:',    !!byName['tile/flag']);
console.log('all fg/* keys:', Object.keys(byName).filter(n => n.startsWith('fg/')));
```

Expected: one of three outcomes.
- `fg/tile-flag` present → skip Step 2, continue to Task 8.
- `tile/flag` present but `fg/tile-flag` absent → use `tile/flag` in Task 8 and log a follow-up to rename in a future consolidation. Do not create a duplicate.
- Both absent → proceed to Step 2.

- [ ] **Step 2: Create `fg/tile-flag` with Light + Dark values (only if both were absent)**

Per CLAUDE.md "Dark Mode Authoring Rule 2" (every new token needs both a light and dark value), define both modes. Run:

```javascript
const sem   = figma.variables.getLocalVariableCollections().find(c => c.name === 'Semantic');
const prim  = figma.variables.getLocalVariableCollections().find(c => c.name === 'Primitives');
const primByName = {};
for (const id of prim.variableIds) {
  const v = figma.variables.getVariableById(id);
  if (v) primByName[v.name] = v;
}

const lightMode = sem.modes.find(m => /light/i.test(m.name));
const darkMode  = sem.modes.find(m => /dark/i.test(m.name));
if (!lightMode || !darkMode) {
  throw new Error('Semantic collection is missing Light or Dark mode');
}

const neutral800 = primByName['neutral/800'];
if (!neutral800) { throw new Error('Primitive variable neutral/800 is missing'); }

const v = figma.variables.createVariable('fg/tile-flag', sem, 'COLOR');

// Light mode → alias to the Primitive neutral/800.
v.setValueForMode(lightMode.modeId, {
  type: 'VARIABLE_ALIAS',
  id: neutral800.id,
});

// Dark mode → raw hex #111114 (matches semantic.ts:195).
function hexToRgb01(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}
v.setValueForMode(darkMode.modeId, hexToRgb01('#111114'));

console.log('Created fg/tile-flag, id:', v.id);
```

Expected console output: `Created fg/tile-flag, id: VariableID:...`. If creation fails, stop and investigate — do not proceed without the variable, because the fallback (`fg/muted`) muddies dark-mode audit later.

- [ ] **Step 3: Verify the variable resolves in both modes**

Open a scratch frame on any page. Drag in any node, bind its fill to `fg/tile-flag`, toggle Light → Dark. The color should shift from `neutral/800` (near-black) in Light to near-black `#111114` in Dark.

Expected: the fill changes between modes. Delete the scratch node after verification.

---

### Task 8: Add flag-02 icon child to every one of the 40 `FilterSwatch` variants

- [ ] **Step 1: Locate the `flag-02` icon component Small variant**

Run via `use_figma` to confirm the icon source:

```javascript
const icons = figma.root.children.find(p => p.name === 'Icons');
if (!icons) { throw new Error('Icons page not found'); }
await figma.setCurrentPageAsync(icons);

const flagSet = icons.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'flag-02');
if (!flagSet) { throw new Error('flag-02 ComponentSet not found on Icons page'); }

const flagSmall = flagSet.children.find(c => c.variantProperties && c.variantProperties.Size === 'Small');
if (!flagSmall) { throw new Error('flag-02 Size=Small variant not found'); }

console.log('flag-02 Size=Small id:', flagSmall.id);
```

Expected console output: a component id for the Small (16px) variant. If `flag-02` is named differently in this file (e.g. `Flag02`, `flag_02`), adjust the lookup accordingly and log the actual name found.

- [ ] **Step 2: Append a flag icon instance to every FilterSwatch variant**

Run the full script (prepend the Standard Figma Helper from the top of this plan):

```javascript
// Load all pages first — required if the file has Dynamic Page Loading enabled.
// Safe no-op if it's already loaded.
await figma.root.loadAllPagesAsync();

// ── Locate target ComponentSet and icon source ───────────────────────────
const swPage = figma.root.children.find(p => p.name === 'FilterSwatch');
if (!swPage) { throw new Error('FilterSwatch page not found'); }
await figma.setCurrentPageAsync(swPage);

const swSet = swPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'FilterSwatch');
if (!swSet) { throw new Error('FilterSwatch ComponentSet not found'); }
if (swSet.children.length !== 40) {
  throw new Error('Expected 40 variants, found ' + swSet.children.length + '. Aborting — is the rebuild plan complete?');
}

// The `fg/tile-flag` variable should exist by now (Task 7). Fallback: fg/muted.
const flagColorVar = semVars['fg/tile-flag'] || semVars['tile/flag'] || semVars['fg/muted'];
if (!flagColorVar) { throw new Error('Neither fg/tile-flag, tile/flag, nor fg/muted found in Semantic collection'); }
console.log('Binding flag stroke to:', flagColorVar.name);

// Re-fetch flag-02 Size=Small from Icons page.
const iconsPage = figma.root.children.find(p => p.name === 'Icons');
const flagSet = iconsPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'flag-02');
const flagSmall = flagSet.children.find(c => c.variantProperties && c.variantProperties.Size === 'Small');
if (!flagSmall) { throw new Error('flag-02 Size=Small missing'); }

const addedIconIds = [];

for (const variant of swSet.children) {
  // Skip if this variant already has the flag child (idempotent re-run).
  // Exact-match the name we assign below — avoids false positives on unrelated names.
  const existing = variant.findChild(c => c.name === 'HighPriorityFlag');
  if (existing) {
    console.log('Variant', variant.name, 'already has flag child, skipping');
    addedIconIds.push({ variant: variant.name, iconId: existing.id, reused: true });
    continue;
  }

  // Determine target size from variant name.
  const sizeMatch = variant.name.match(/Size=(\w+)/);
  const sizeName = sizeMatch ? sizeMatch[1] : 'sm';
  const iconDim = sizeName === 'md' ? 14 : 12;

  // Create the instance, parent into the variant, then resize + position + bind.
  const inst = flagSmall.createInstance();
  inst.name = 'HighPriorityFlag';
  variant.appendChild(inst);

  // Figma's Icons ComponentSet will default the instance to 16×16. Resize it
  // to the visual target (12 or 14). Stroke width scales with the bounding box.
  inst.resize(iconDim, iconDim);

  // Center within the parent variant's visible bounds.
  // Parent is 16×16 (sm) or 20×20 (md), layoutMode='NONE', so absolute x/y is trusted.
  inst.x = (variant.width  - iconDim) / 2;
  inst.y = (variant.height - iconDim) / 2;

  // If the parent is ever converted to auto-layout, ABSOLUTE keeps the icon on top.
  // Harmless no-op while layoutMode='NONE'.
  try { inst.layoutPositioning = 'ABSOLUTE'; } catch (_) {}

  // Bind stroke paint to the chosen Semantic variable. Flag02Icon's path uses
  // stroke="currentColor", so the stroke — not the fill — is what carries color.
  inst.strokes = [paintFromVar(flagColorVar, 'color')];

  // Hidden by default — HighPriority=false is the visual default.
  inst.visible = false;

  addedIconIds.push({ variant: variant.name, iconId: inst.id, reused: false });
}

console.log('Processed', addedIconIds.length, 'variants');
console.log(JSON.stringify(addedIconIds, null, 2));
```

Expected console output: `Processed 40 variants` followed by a JSON array of 40 objects with `{variant, iconId, reused}`. Save this JSON — Task 9 and Task 10's verification use the icon ids.

If any variant fails (e.g. flag child already exists from a prior partial run), the `reused: true` branch ensures idempotency. If the script errors mid-loop, re-run it — variants that already have a flag child will be skipped.

- [ ] **Step 3: Spot-check via screenshot**

Call `get_screenshot` on node `484:19`.

Expected: identical to the baseline from Task 6 — flag children exist but are `visible = false`, so the grid still looks flag-less. If any flags are visible, a `visible` assignment was missed; return to Step 2 and audit.

---

### Task 9: Add the `HighPriority` BOOLEAN property and wire it to every flag child

- [ ] **Step 1: Add the component property on the ComponentSet**

Run via `use_figma`:

```javascript
const swPage = figma.root.children.find(p => p.name === 'FilterSwatch');
await figma.setCurrentPageAsync(swPage);
const swSet = swPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'FilterSwatch');

// Idempotency: if the property already exists from a previous run, reuse it.
const existingDefs = swSet.componentPropertyDefinitions || {};
let propKey = Object.keys(existingDefs).find(k => k.startsWith('HighPriority'));

if (!propKey) {
  propKey = swSet.addComponentProperty('HighPriority', 'BOOLEAN', false);
  console.log('Created property:', propKey);
} else {
  console.log('HighPriority property already exists:', propKey);
}

console.log('propKey:', propKey);
```

Save the resulting `propKey` — it's needed in Step 2 and Step 3. Property keys in Figma look like `HighPriority#NNN:M`.

Expected: log line `Created property: HighPriority#...` (first run) or `HighPriority property already exists: HighPriority#...` (re-run).

- [ ] **Step 2: Wire every flag child's `visible` property to the new BOOLEAN**

Run (substitute the actual `propKey` from Step 1):

```javascript
const swPage = figma.root.children.find(p => p.name === 'FilterSwatch');
await figma.setCurrentPageAsync(swPage);
const swSet = swPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'FilterSwatch');

// Discover the property key fresh (don't hardcode from last run — keys can change).
const defs = swSet.componentPropertyDefinitions || {};
const propKey = Object.keys(defs).find(k => k.startsWith('HighPriority'));
if (!propKey) { throw new Error('HighPriority property not found — run Step 1 first'); }

let wired = 0;
for (const variant of swSet.children) {
  const flag = variant.findChild(c => c.name === 'HighPriorityFlag');
  if (!flag) {
    console.warn('No flag child on variant', variant.name);
    continue;
  }
  flag.componentPropertyReferences = { ...(flag.componentPropertyReferences || {}), visible: propKey };
  wired++;
}

if (wired !== 40) {
  throw new Error('Expected to wire 40 variants, only wired ' + wired);
}
console.log('Wired', wired, 'flag children to', propKey);
```

Expected: log line `Wired 40 flag children to HighPriority#...`. Any warnings about missing flag children mean Task 8 was incomplete on that variant.

- [ ] **Step 3: Verify the properties panel**

Drop a fresh instance of the ComponentSet onto a scratch frame. In the right panel's Properties section, confirm the controls now read:

- `Color` (VARIANT: 10 options)
- `Size` (VARIANT: `sm` / `md`)
- `Active` (VARIANT: `true` / `false`)
- `HighPriority` (BOOLEAN: default `false`)

Toggle `HighPriority` to `true`. The flag icon should appear, stroked with the chosen Semantic variable.

Expected: all four properties listed, flag appears on toggle. Delete the scratch instance after verification.

---

### Task 10: Verify the FilterSwatch chunk end-to-end

- [ ] **Step 1: Screenshot with HighPriority ON**

Create a single instance on a scratch frame, set `HighPriority=true`, set `Size=md`, `Color=brand`, `Active=true`. Call `get_screenshot` on the scratch instance.

Expected: a brand-300 tile with the 2px `action/primary` outline AND a centered flag icon. The icon must not be clipped by the outline.

- [ ] **Step 2: Bindings audit on one flagged variant**

Pick any variant id from the Task 8 output (e.g. the `brand, Size=md, Active=true` variant). Inspect its flag child:

```javascript
const iconId = '<paste iconId from Task 8 output>';
const icon = figma.getNodeById(iconId);
console.log('name:', icon.name);
console.log('visible:', icon.visible);
console.log('strokes:', JSON.stringify(icon.strokes, null, 2));
console.log('componentPropertyReferences:', icon.componentPropertyReferences);
console.log('width/height:', icon.width, icon.height);
console.log('x/y:', icon.x, icon.y);
```

Expected:
- `name: HighPriorityFlag`
- `visible: false`
- `strokes[0].boundVariables.color.id` references the `fg/tile-flag` (or fallback) variable
- `componentPropertyReferences.visible` matches the `HighPriority#...` property key
- `width/height` = 14 (for md) or 12 (for sm)
- `x/y` centers the icon:
  - `sm` (16×16 parent, 12×12 icon) → `x=2, y=2` (`(16-12)/2 = 2`)
  - `md` (20×20 parent, 14×14 icon) → `x=3, y=3` (`(20-14)/2 = 3`)

- [ ] **Step 3: Dark-mode flip on a flagged scratch instance**

On the scratch instance from Step 1, toggle Semantic mode Light → Dark.

Expected: the swatch fill stays constant (Primitives is single-mode). The active-state outline shifts to the Dark-mode value of `action/primary`. The flag icon shifts to the Dark-mode value of `fg/tile-flag` (`#111114`). No other colors move.

- [ ] **Step 4: Commit boundary**

Figma mutations aren't versioned by git in this repo, so instead log the verification outcome in a short note at the end of the chunk (for the final PR description). Proceed to Chunk 4 only after all three verification steps pass.

---

## Chunk 4: Figma — `FilterSwatchGroup` new ComponentSet

Scope: create a new `FilterSwatchGroup` ComponentSet on the existing `FilterSwatch` page (`76:66`) with 4 variants across `Size × Layout`. Every swatch inside is an INSTANCE of the canonical `FilterSwatch` ComponentSet (`484:19`) — Rule 6, no rebuilt geometry. Each variant has a centered category-label text node bound to `fg/muted`.

**Files:**
- Figma: `ZP0lSeT5Nwm1lpWI79qIaf` → page `FilterSwatch` (`76:66`) → new ComponentSet `FilterSwatchGroup`.
- Code: none.

**Preconditions:** Chunk 3 complete — the canonical `FilterSwatch` ComponentSet is intact with `HighPriority` wired up.

---

### Task 11: Build the four variant frames

Variant grid:

| Variant name | Size axis | Layout axis | Rows × count |
|---|---|---|---|
| `Size=sm, Layout=OneRow`  | sm | OneRow  | 1 × 5 swatches |
| `Size=sm, Layout=TwoRows` | sm | TwoRows | 2 × 5 swatches (10 total) |
| `Size=md, Layout=OneRow`  | md | OneRow  | 1 × 5 swatches |
| `Size=md, Layout=TwoRows` | md | TwoRows | 2 × 5 swatches (10 total) |

Palette for the 5 OneRow swatches: `brand`, `cerulean`, `green`, `yellow`, `orange`.
Palette for the full 10 (TwoRows): the above plus `red`, `pink`, `eggplant`, `purple`, `neutral`.

- [ ] **Step 1: Build all four variants in one script**

Prepend the Standard Figma Helper, then run:

```javascript
// Load all pages first — required if the file has Dynamic Page Loading enabled.
await figma.root.loadAllPagesAsync();

// Preload the required font BEFORE any figma.createText() / characters assignment.
// `buildVariant` is defined below but does not run until the `const variants = [...]` line,
// by which point this load has resolved.
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const swPage = figma.root.children.find(p => p.name === 'FilterSwatch');
if (!swPage) { throw new Error('FilterSwatch page not found'); }
await figma.setCurrentPageAsync(swPage);

// Idempotency guard: if a FilterSwatchGroup ComponentSet already exists on this page from a
// prior partial run, refuse to create a duplicate. Delete or rename the old one and re-run.
const priorSet = swPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'FilterSwatchGroup');
if (priorSet) {
  throw new Error('FilterSwatchGroup ComponentSet already exists on the FilterSwatch page (id: ' + priorSet.id + '). Delete or rename it before re-running.');
}

const canonicalSwatchSet = swPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'FilterSwatch');
if (!canonicalSwatchSet) { throw new Error('Canonical FilterSwatch set not found'); }

// Helpers.
const fgMuted = semVars['fg/muted'];
if (!fgMuted) { throw new Error('Semantic fg/muted missing'); }

// Pick the default variant (Color=brand, Size=sm, Active=false) — children[0] after the rebuild.
function swatchVariantByAxes(color, size, active) {
  const name = `Color=${color}, Size=${size}, Active=${active}`;
  const v = canonicalSwatchSet.children.find(c => c.name === name);
  if (!v) { throw new Error('Missing canonical swatch variant: ' + name); }
  return v;
}

const ONE_ROW_COLORS = ['brand', 'cerulean', 'green', 'yellow', 'orange'];
const FULL_COLORS    = ['brand', 'cerulean', 'green', 'yellow', 'orange',
                        'red',   'pink',     'eggplant', 'purple', 'neutral'];

function buildRow(colors, size) {
  const row = figma.createFrame();
  row.name = 'Row';
  row.layoutMode = 'HORIZONTAL';
  row.primaryAxisSizingMode = 'AUTO';
  row.counterAxisSizingMode = 'AUTO';
  row.fills = [];
  sp(row, 'itemSpacing', 'scale/2'); // 8px

  for (const color of colors) {
    const src = swatchVariantByAxes(color, size, 'false');
    const inst = src.createInstance();
    // Visual size is already correct from the canonical variant's own width binding.
    row.appendChild(inst);
  }
  return row;
}

function buildVariant(sizeName, layoutName) {
  const comp = figma.createComponent();
  comp.name = `Size=${sizeName}, Layout=${layoutName}`;
  comp.layoutMode = 'VERTICAL';
  comp.primaryAxisSizingMode = 'AUTO';
  comp.counterAxisSizingMode = 'AUTO';
  comp.counterAxisAlignItems = 'CENTER';
  comp.fills = [];
  sp(comp, 'itemSpacing', 'scale/2'); // 8px cluster-to-label + row-to-row

  // Inner cluster (rows stacked).
  const cluster = figma.createFrame();
  cluster.name = 'Cluster';
  cluster.layoutMode = 'VERTICAL';
  cluster.primaryAxisSizingMode = 'AUTO';
  cluster.counterAxisSizingMode = 'AUTO';
  cluster.counterAxisAlignItems = 'CENTER';
  cluster.fills = [];
  sp(cluster, 'itemSpacing', 'scale/2'); // 8px between rows

  comp.appendChild(cluster);

  if (layoutName === 'OneRow') {
    cluster.appendChild(buildRow(ONE_ROW_COLORS, sizeName));
  } else {
    const splitIndex = Math.ceil(FULL_COLORS.length / 2);
    cluster.appendChild(buildRow(FULL_COLORS.slice(0, splitIndex), sizeName));
    cluster.appendChild(buildRow(FULL_COLORS.slice(splitIndex), sizeName));
  }

  // Label text node. Inter Medium is preloaded at the top of the script, so
  // `label.characters = '...'` is safe here.
  const label = figma.createText();
  label.fontName = { family: 'Inter', style: 'Medium' };
  label.fontSize = 12;
  label.characters = 'Category';
  label.textAlignHorizontal = 'CENTER';
  label.fills = [paintFromVar(fgMuted, 'color')];
  comp.appendChild(label);

  return comp;
}

const variants = [
  buildVariant('sm', 'OneRow'),
  buildVariant('sm', 'TwoRows'),
  buildVariant('md', 'OneRow'),
  buildVariant('md', 'TwoRows'),
];

// Combine into a ComponentSet.
const groupSet = figma.combineAsVariants(variants, swPage);
groupSet.name = 'FilterSwatchGroup';

// Lay out the set itself as a 2×2 grid (Layout × Size).
groupSet.layoutMode = 'NONE';

// Place to the right of the canonical FilterSwatch set with some breathing room.
groupSet.x = canonicalSwatchSet.x + canonicalSwatchSet.width + 200;
groupSet.y = canonicalSwatchSet.y;

// Lay variants inside the new set.
const PAD = 40;
const COL_GAP = 80;
const ROW_GAP = 40;
const widestOneRow = 5 * 20 + 4 * 8; // rough upper bound for either size's OneRow width
// Position deterministically by axes.
function place(variant, row, col) {
  variant.x = PAD + col * (widestOneRow + COL_GAP);
  variant.y = PAD + row * (100 + ROW_GAP); // 100 is a generous per-row height budget
}
for (const v of groupSet.children) {
  const sz  = v.name.match(/Size=(\w+)/)[1];
  const lay = v.name.match(/Layout=(\w+)/)[1];
  const row = (lay === 'OneRow') ? 0 : 1;
  const col = (sz  === 'sm')     ? 0 : 1;
  place(v, row, col);
}

// Resize the ComponentSet to fit its children.
let maxX = 0, maxY = 0;
for (const v of groupSet.children) {
  maxX = Math.max(maxX, v.x + v.width);
  maxY = Math.max(maxY, v.y + v.height);
}
groupSet.resizeWithoutConstraints(maxX + PAD, maxY + PAD);

// Pin default variant (children[0]).
const defVariant = groupSet.children.find(c => c.name === 'Size=sm, Layout=OneRow');
if (defVariant) groupSet.insertChild(0, defVariant);

console.log('FilterSwatchGroup created:', groupSet.id, 'variants:', groupSet.children.length);
console.log(JSON.stringify(groupSet.children.map(v => ({ name: v.name, id: v.id })), null, 2));
```

Expected console output: `FilterSwatchGroup created: <id> variants: 4` followed by the JSON list. Save the new ComponentSet id and the four variant ids — they're needed for verification.

Potential gotchas:
- `figma.loadFontAsync` is required before creating a text node. If the font isn't loaded, `label.characters = 'Category'` throws.
- Every row child is an INSTANCE of `FilterSwatch`, not a new frame. If any row child's `type` is `FRAME` or `COMPONENT`, the script has a bug — rerun after fixing.
- `widestOneRow` is a deterministic layout hint, not a binding. If the spacing looks off after the script runs, adjust the constant manually — it's purely cosmetic.

- [ ] **Step 2: Screenshot the new ComponentSet**

Call `get_screenshot` on the new ComponentSet id from Step 1.

Expected: a 2×2 grid of labelled clusters.
- Top-left: `Size=sm, Layout=OneRow` — 5 small swatches in a single row, label "Category" beneath.
- Top-right: `Size=md, Layout=OneRow` — 5 medium swatches in a single row, label "Category" beneath.
- Bottom-left: `Size=sm, Layout=TwoRows` — 2 rows of 5 small swatches, label "Category" beneath.
- Bottom-right: `Size=md, Layout=TwoRows` — 2 rows of 5 medium swatches, label "Category" beneath.

- [ ] **Step 3: Rule 6 spot-check**

On any variant, inspect one of the colored tiles. It must be of type `INSTANCE` with `mainComponent` pointing back to a variant of the canonical `FilterSwatch` set (`484:19`). If the tile is a `FRAME` or a new `COMPONENT`, the build script forked — back to Step 1.

```javascript
const groupSetId = '<paste the id from Step 1>';
const set = figma.getNodeById(groupSetId);
const firstVariant = set.children[0];
const firstCluster = firstVariant.children.find(c => c.name === 'Cluster');
const firstRow = firstCluster.children[0];
const firstTile = firstRow.children[0];
console.log('tile type:', firstTile.type);
console.log('tile main component parent name:',
  firstTile.mainComponent && firstTile.mainComponent.parent && firstTile.mainComponent.parent.name);
```

Expected:
- `tile type: INSTANCE`
- `tile main component parent name: FilterSwatch` (the canonical set's name)

---

### Task 12: Verify the FilterSwatchGroup chunk

- [ ] **Step 1: Properties panel audit**

Drop a fresh instance of `FilterSwatchGroup` onto a scratch frame. Right panel should show exactly two variant controls: `Size` (`sm` / `md`) and `Layout` (`OneRow` / `TwoRows`). The instance should land on `Size=sm, Layout=OneRow` by default — Task 11 pinned that variant via `insertChild(0, ...)`. If the default combo is anything else, the pinning failed.

Expected: no stray TEXT properties, no BOOLEAN properties on the group itself. The four variants are the only properties surfaced.

- [ ] **Step 2: Per-swatch override sanity**

Inside the scratch instance, select one of the child FilterSwatch instances. The right panel should show `Color`, `Size`, `Active`, `HighPriority` — the full canonical property surface. Toggle `HighPriority=true` on one tile.

Expected: the flag icon appears on that single tile only (overrides are instance-local).

- [ ] **Step 3: Dark-mode flip**

On the scratch instance, toggle Semantic mode Light → Dark.

Expected: palette fills constant, label color shifts with `fg/muted`, any toggled-on flag icon shifts with `fg/tile-flag`, any `Active=true` overrides shift their outline with `action/primary`. No other colors move.

- [ ] **Step 4: Storybook cross-reference**

Open each Storybook URL from Chunk 2 Task 4 alongside the matching Figma variant:

| Storybook | Figma variant |
|---|---|
| `primitives-filterswatchgroup--default`   | `Size=sm, Layout=OneRow` with 4 swatches (override: swap the 5th tile to match the story or accept minor seeding diff) |
| `primitives-filterswatchgroup--two-rows`  | `Size=sm, Layout=TwoRows` |
| `primitives-filterswatchgroup--sizes`     | `Size=sm, Layout=OneRow` + `Size=md, Layout=OneRow` side by side |

Expected: cluster spacing, row gaps, label typography, and palette ordering all match. Minor seed-content differences (5 tiles in Figma vs. 4 in the `Default` story) are acceptable and expected — the Figma variants are templates; story content is illustrative.

- [ ] **Step 5: Final Rule 6 audit**

Walk every variant in the new ComponentSet and confirm EVERY colored tile is an `INSTANCE`. No clones, no hand-built rectangles, no duplicated swatch geometry.

```javascript
const set = figma.currentPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'FilterSwatchGroup');
let total = 0, forked = 0;
for (const variant of set.children) {
  const cluster = variant.findChild(c => c.name === 'Cluster');
  for (const row of cluster.children) {
    for (const tile of row.children) {
      total++;
      if (tile.type !== 'INSTANCE') { forked++; console.warn('Forked tile in', variant.name); }
    }
  }
}
console.log('tiles total:', total, 'forked:', forked);
if (forked > 0) throw new Error('Rule 6 violation: ' + forked + ' forked tiles');
```

Expected: `forked: 0`. Total should be 5 (OneRow×sm) + 5 (OneRow×md) + 10 (TwoRows×sm) + 10 (TwoRows×md) = 30.

---

## Files touched

- **React:**
  - Modify `components/primitives/FilterSwatch.tsx` — add `highPriority` prop + flag overlay.
  - Modify `components/primitives/FilterSwatch.stories.tsx` — add `Flagged`, `FlaggedAndActive`; extend `AllStates`.
  - Create `components/primitives/FilterSwatchGroup.tsx`.
  - Create `components/primitives/FilterSwatchGroup.stories.tsx`.
  - Modify `components/primitives/index.ts` — re-export `FilterSwatchGroup` + types.
- **Figma** (`ZP0lSeT5Nwm1lpWI79qIaf`):
  - Semantic collection — possibly create `fg/tile-flag` (Light + Dark).
  - `FilterSwatch` ComponentSet (`484:19`) — add `HighPriorityFlag` child instance to all 40 variants, add `HighPriority` BOOLEAN property, wire each child's `visible`.
  - New ComponentSet `FilterSwatchGroup` on the `FilterSwatch` page (`76:66`) with 4 variants (`Size × Layout`).

## Not touched

- `tokens/semantic.ts` — `--color-tile-flag` already present in both modes.
- `tokens/colors.ts` — no new palette values.
- The existing 40 `FilterSwatch` variants' geometry, fills, strokes, radii, or dimensions — unchanged, only an icon child and one BOOLEAN property are added.
- Any other ComponentSet, page, or variable collection.
- `EngagementLayout.stories.tsx` and `RequestStatusColorNav.tsx` — they already use `isFlagged` / `text-tile-flag` vocabulary. Callers can opt into the new `highPriority` surface on their own schedule.
