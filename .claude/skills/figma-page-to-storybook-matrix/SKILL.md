---
name: figma-page-to-storybook-matrix
description: MANDATORY skill for building or modifying any pixel-perfect Matrix story in the Suralink LSDS Storybook (https://jake.nelson2.gitlab.io/sb-thelastsamurai) that mirrors a Figma page from file ZP0lSeT5Nwm1lpWI79qIaf. Forces full per-cell numeric verification — every Matrix cell's computed CSS must match the Figma variant's bindings (position, size, padding, radius, colors, typography) within documented tolerance before any "done" claim is allowed. Triggers on any task mentioning Matrix story, MatrixVerify, pixel-pin, source↔Figma parity, "build the matrix for X", or reconciling a Figma page with its Storybook story. Counting rendered cells is not evidence — only per-cell delta tables with green/yellow/red classifications close the work.
---

# Figma Page → Storybook Matrix (Pixel-Perfect)

## Why this skill exists

The LSDS rule is non-negotiable: every Storybook Matrix story must mirror its Figma page **1:1, pixel-perfect**. The Figma page IS the matrix layout. Storybook's `Matrix` story for that component must render the same grid, the same cells at the same (x, y), with the same widths, the same content, the same paddings, the same colors, the same border-radius, and the same typography.

Past failures all came from the same pattern: counting DOM elements ("9 cells render, looks good") instead of comparing every cell's computed CSS to Figma's bindings. This skill is the gate that forces the actual comparison every time.

This skill MUST be invoked the moment any Matrix story work begins. It blocks "done" claims that haven't passed the per-cell delta check.

## The hard rule

> **A Matrix story is NOT done until every cell's computed CSS values match the Figma variant's bindings within the documented tolerance, AND the cell positions match Figma's (x, y) exactly. No "good enough" without numeric evidence.**

## Required process — every Figma page, every time

### Phase 1 — Read the full Figma page (not just the ComponentSet)

The "matrix" is the whole page, not just one ComponentSet. Pages often contain multiple stacked ComponentSets (e.g., CommentCard page has CommentCard + CommentRow sets), section labels, surrounding frames.

Inspect via `get_metadata` or `use_figma`:

```javascript
const page = await figma.getNodeByIdAsync(pageId);
await figma.setCurrentPageAsync(page);
return page.children.map(c => ({
  id: c.id, name: c.name, type: c.type,
  x: Math.round(c.x), y: Math.round(c.y),
  w: Math.round(c.width), h: Math.round(c.height),
}));
```

For each ComponentSet on the page, capture every variant's exact (x, y, w, h):

```javascript
return set.children.map(v => ({
  name: v.name,
  x: Math.round(v.x), y: Math.round(v.y),
  w: Math.round(v.width), h: Math.round(v.height),
}));
```

These coordinates ARE the matrix layout. Storybook will mirror them via absolute positioning.

### Phase 2 — Read styling per representative variant

For each unique cell shape, capture:

- `paddingLeft / paddingRight / paddingTop / paddingBottom`
- `itemSpacing` (gap)
- `cornerRadius`
- `fills[0].boundVariables.color.id` → resolve to semantic variable name
- `strokes[0].boundVariables.color.id` → resolve to semantic variable name
- For text nodes inside: `fontSize`, `lineHeight`, `fontName`, text fill variable

These map to specific Tailwind classes in source via `tokens/semantic.ts`, `tokens/spacing.ts`, `tokens/radii.ts`, `tokens/typography.ts`. The Tailwind classes in source MUST match what Figma binds.

### Phase 3 — Read the ACTUAL text content AND every nested instance

This is the step most often skipped. Two things drive content fidelity:

**A. Text strings inside each variant.** Different text length = different wrap = different cell height.

```javascript
const variant = await figma.getNodeByIdAsync(variantId);
const texts = variant.findAll(n => n.type === 'TEXT');
return texts.map(t => ({ name: t.name, chars: t.characters }));
```

**B. Every nested INSTANCE inside the variant, with its variant + component properties.** This is the part previously skipped: dimensions can match while content is completely wrong (e.g. a `Slots=LeftOnly` with the wrong button labels, or a `FilterSwatchGroup` with the wrong swatch colors).

```javascript
const instances = variant.findAll(n => n.type === 'INSTANCE');
return instances.map(inst => ({
  name: inst.name,
  x: Math.round(inst.x), y: Math.round(inst.y),
  w: Math.round(inst.width), h: Math.round(inst.height),
  mainComponentName: inst.mainComponent?.name,
  setName: inst.mainComponent?.parent?.name,
  variantProps: inst.variantProperties,
  componentProps: Object.fromEntries(
    Object.entries(inst.componentProperties || {}).map(([k, v]) => [k.split('#')[0], v.value])
  ),
  textsInside: inst.findAll(n => n.type === 'TEXT').map(t => t.characters).slice(0, 5),
}));
```

When the source's existing stories use stub text different from Figma's actual content, the Matrix story must use Figma's content (not the stubs). When the variant uses a generic showcase label like `"Button"`, the Matrix must use `"Button"`, NOT a realistic label like `"Create category"`.

### Phase 4 — Map cells to source primitives

Every cell must be rendered by an existing canonical primitive — never a mock div. This is enforced by `figma-canonical-only`.

If the primitive can't be rendered in the required static state (e.g., a Tooltip that only shows on hover, a CommentCard that needs `isReplying=true` set), the fix is in the primitive — add a controlled prop (`open?: boolean`, `defaultReplyOpen?: boolean`, `inline?: boolean`) — never build a mock alongside.

Common props to add when needed:

| Need | Prop pattern |
|---|---|
| Force overlay visible | `open?: boolean` (`open ?? internalOpen`) |
| Skip portal/fixed positioning | `inline?: boolean` |
| Seed internal state for static showcase | `defaultX?: ...` |
| Expose internal sub-component | `export` it |

### Phase 5 — Build the Matrix story (absolute positioning)

The Matrix story uses **absolute positioning** to mirror Figma's exact (x, y) per cell. Not CSS Grid. Not Flexbox. Absolute, because Figma uses absolute positions in its frames.

Template:

```tsx
<div className="bg-canvas p-12 min-w-fit">
  {/* Section 1: ComponentSet bounds */}
  <div className="relative" style={{ width: SET_W, height: SET_H }}>
    {LAYOUT.map(({ variantProps, x, y }) => (
      <div
        key={...}
        className="absolute"
        style={{ left: x, top: y, width: VARIANT_W }}
      >
        <CanonicalPrimitive {...variantProps} />
      </div>
    ))}
  </div>
  {/* Repeat for additional ComponentSets on the same page */}
</div>
```

Multiple ComponentSets stack vertically with the same gap Figma uses (typically a fixed pixel value matching the y-delta between sets).

### Phase 6 — Verify per-cell deltas via preview_eval

This is the part I kept skipping. Do not skip.

For every cell in the rendered Matrix, read computed CSS via `preview_eval` and compare to the Figma spec:

```javascript
(() => {
  const iframe = document.getElementById('storybook-preview-iframe');
  const doc = iframe?.contentDocument;
  const root = doc.querySelector('#storybook-root') || doc.querySelector('#root');
  const cells = Array.from(root.querySelectorAll('.absolute'));

  return cells.map((cell, i) => {
    const inner = cell.firstElementChild;
    const cs = doc.defaultView.getComputedStyle(inner);
    const r = inner.getBoundingClientRect();
    return {
      // position checks
      x: parseInt(cell.style.left),
      y: parseInt(cell.style.top),
      // dimension checks
      width: Math.round(r.width),
      height: Math.round(r.height),
      // styling checks
      bg: cs.backgroundColor,
      padding: cs.padding,
      borderRadius: cs.borderRadius,
      // inner element checks (recursive for nested rows)
    };
  });
})()
```

Compare each value to the Figma spec captured in Phase 1-2.

### Phase 7 — Diagnose every delta

Classify each mismatch:

| Cause | Fix |
|---|---|
| (a) Source uses `leading-none` / hardcoded class that overrides token line-height | Remove the override; let tokens drive |
| (b) Source uses wrong primitive size (e.g., Avatar xs instead of sm) | Change to match Figma's size |
| (c) Source missing a styling rule Figma has (e.g., `rounded-card` missing) | Add it to source |
| (d) Stub text doesn't match Figma content | Use Figma's exact text |
| (e) Mock div in place of canonical primitive | Replace with primitive + add the needed prop (open/inline/defaultX) |
| (f) Token desync (tokens/* differs from Figma styles) | Verify with `getLocalTextStylesAsync()` etc; align tokens |
| (g) Browser-renderer line-height variance (max ~5-20px tolerance) | Document; accept |

### Phase 8 — Iterate until verification passes

Tolerance bands:
- **Green** (✓): every value within 5px / exact color / exact padding
- **Yellow** (⚠): heights within 20px due to font-metric variance only; all other values exact
- **Red** (✗): structural mismatches, mock cells, color/padding/radius mismatches, missing primitives

A Matrix story is "done" only when:
- All cells in green or yellow
- No mocks remain
- Source uses tokens (no raw hex, no arbitrary `text-[14px]`, no `colors.*` imports)
- All position deltas = 0 (positions must be exact)
- All width deltas = 0 (widths must be exact)

## What to NEVER do

- Claim a Matrix is done because the right number of elements rendered.
- Use static mocks for portal/overlay primitives — add an `inline` prop to the primitive instead.
- Adjust the Storybook layout to mask source rendering differences. Fix the source.
- Use CSS Grid for the matrix when Figma uses absolute positioning. Mirror the positions exactly.
- Pass stub text from existing stories — use Figma's actual text content.
- Skip the per-cell CSS comparison.

## The MatrixVerify decorator

A Storybook decorator at `components/_decorators/MatrixVerify.tsx` provides automated per-cell comparison overlay. When a Matrix story imports it, the rendered DOM shows red/yellow/green badges on each cell indicating whether the rendered values match the Figma spec embedded in the story.

Wire each Matrix story like:

```tsx
export const Matrix: Story = {
  parameters: {
    matrixSpec: {
      figmaPageId: '76:51',
      cells: [
        {
          variant: 'Slots=Both',
          x: 24, y: 24, w: 1440, h: 48,
          // Content expectations — captured from Figma instance inspection in Phase 3
          expect: {
            buttonLabels: ['Create category', 'Create request', 'Due Date'],
            swatchCount: 4,
            searchValue: 'Search query',
            searchPlaceholder: 'Search',
          },
        },
        // ... one entry per variant
      ],
    },
  },
  decorators: [MatrixVerify],
  render: () => ( /* ... */ ),
};
```

Every cell **must** include an `expect` block. Without one, MatrixVerify can only validate outer dimensions — and outer dimensions alone are not sufficient evidence that the cell matches Figma (a button labeled "Button" vs "Create category" are dimensionally indistinguishable when widths are forced).

Content checks:
- `buttonLabels` — ordered array. Text content of all `<button>` elements that aren't FilterSwatches (i.e. `aria-pressed === null`). Order matters.
- `swatchCount` — count of `<button aria-pressed>` (FilterSwatch instances).
- `searchValue` / `searchPlaceholder` — `value` / `placeholder` of the first `<input>` in the cell.
- `headings` — ordered array of text from `h1`–`h4` headings inside the cell.

If any of these don't match, the cell is flagged red with a content-mismatch badge. Click the badge to see the expected-vs-actual diff inline.

Reviewers see all deltas without running eval scripts.

## Reference invocations

When this skill is loaded, it implies:
1. `figma-canonical-only` is also loaded (composition rules)
2. `figma-use` is loaded (Plugin API patterns)
3. `figma-implement-design` knowledge is available

Run `figma-canonical-only` first to confirm composition; then this skill governs the verification depth.

## The phrases that should NEVER appear in your output

- "9 cells render — looks good"
- "Structurally yes, dimensionally close enough"
- "Within tolerance" without showing the actual numeric deltas
- "I'll move on to the next page" before per-cell verification is done

If any of those is on the tip of your tongue, stop, run the per-cell diff, and present the deltas before claiming completion.
