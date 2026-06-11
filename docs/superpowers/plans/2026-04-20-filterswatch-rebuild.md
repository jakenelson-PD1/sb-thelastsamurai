# FilterSwatch Figma Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `FilterSwatch` ComponentSet (`484:19`) as a 40-variant grid (`Color × Size × Active`) with every fill bound to a Primitives palette variable, every corner radius bound to `radius/control`, every dimension bound to a Spacing variable, and the Active-state stroke bound to `action/primary`.

**Architecture:** Single Figma Plugin API script executed via `use_figma`. The script removes the existing four-variant ComponentSet contents and its dead `Color#484:7` TEXT property, creates 40 fresh `COMPONENT` nodes (10 palette colors × 2 sizes × 2 active states), combines them into the existing ComponentSet via `combineAsVariants`, pins the default variant by moving it to `children[0]`, and lays them out in a 10×4 grid. Verification is done via `get_screenshot` against the ComponentSet and the Storybook `AllStates` story.

**Tech Stack:** Figma Plugin API (JavaScript), `use_figma` MCP tool, `get_screenshot` MCP tool, Storybook at `http://localhost:6006`.

**Spec:** `docs/superpowers/specs/2026-04-20-filterswatch-rebuild-design.md`
**Figma file key:** `ZP0lSeT5Nwm1lpWI79qIaf`
**Target ComponentSet:** `FilterSwatch` on the `FilterSwatch` page (`76:66`), node id `484:19`.
**Storybook story:** `http://localhost:6006/?path=/story/primitives-filterswatch--all-states`

---

## Execution Pitfalls (learned at implementation time)

Three non-obvious Plugin API behaviours require the task order captured in Task 2:

1. **A `COMPONENT_SET` with zero children auto-dissolves.** Removing all existing variants before appending new ones throws `in appendChild: The node with id "…" does not exist` on the very next call. Fix: append the 40 new variants FIRST (the set stays alive via its 4 old children), THEN remove the old children, THEN `deleteComponentProperty` on the dead TEXT property.

2. **Primitive palette variable names are `{color}/300`, NOT `colors/{color}-300`.** The Primitives collection uses `brand/300`, `cerulean/300`, …, `neutral/300`. Any fallback-magenta fills after a rebuild are the first sign of this mismatch.

3. **`setBoundVariable('cornerRadius', …)` silently no-ops on `COMPONENT` nodes.** You must bind each corner individually: `topLeftRadius`, `topRightRadius`, `bottomLeftRadius`, `bottomRightRadius`. The plan sets a numeric `cornerRadius = 4` baseline first, then binds all four corners to `radius/control`.

---

## Standard Helpers

Include at the top of every `use_figma` script in this plan:

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

function paintFromVar(v) {
  if (!v) { console.warn('Missing variable'); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (!v) { console.warn('Missing spacing: ' + name); return; } node.setBoundVariable(prop, v); }
function rx(node, prop, name) { const v = rVars[name]; if (!v) { console.warn('Missing radius: ' + name); return; } node.setBoundVariable(prop, v); }
```

---

## Chunk 1: FilterSwatch ComponentSet Rebuild

### Task 1: Back up the current state

- [ ] **Step 1: Screenshot the existing ComponentSet for regression reference**

Call `get_screenshot` on node `484:19` of file `ZP0lSeT5Nwm1lpWI79qIaf`. Save the image — it's the before-state. No mutations yet.

Expected: an image showing the 4 identical blue squares (the current broken state), confirming the pre-rebuild baseline.

---

### Task 2: Rebuild the ComponentSet in place

**Files:**
- Figma: `ZP0lSeT5Nwm1lpWI79qIaf` → page `FilterSwatch` (`76:66`) → ComponentSet `FilterSwatch` (`484:19`)
- Code: none.

- [ ] **Step 1: Run the rebuild script via `use_figma`**

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

function paintFromVar(v) {
  if (!v) { console.warn('Missing variable'); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (!v) { console.warn('Missing spacing: ' + name); return; } node.setBoundVariable(prop, v); }
function rx(node, prop, name) { const v = rVars[name]; if (!v) { console.warn('Missing radius: ' + name); return; } node.setBoundVariable(prop, v); }

// ── Locate the target ComponentSet ───────────────────────────────────────
const page = figma.root.children.find(p => p.name === 'FilterSwatch');
if (!page) { console.error('FilterSwatch page not found'); return; }
await figma.setCurrentPageAsync(page);

const set = page.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'FilterSwatch');
if (!set) { console.error('FilterSwatch ComponentSet not found'); return; }

// Capture position so the rebuilt set lands in the same spot
const originX = set.x, originY = set.y;

// Snapshot old children — remove AFTER the 40 new variants are in place,
// to keep the ComponentSet alive (empty sets auto-dissolve).
const oldChildren = [...set.children];

// ── Build 40 fresh variants ──────────────────────────────────────────────
// ORDER MATTERS: create → resize → appendChild(set) → bind dims → fills/radius/stroke.
// Width/height variable bindings on a COMPONENT with layoutMode='NONE' only take
// effect once the node is parented, so we append BEFORE calling sp() on dims.
const colors = ['brand', 'cerulean', 'green', 'yellow', 'orange', 'red', 'pink', 'eggplant', 'purple', 'neutral'];
const sizes  = [
  { name: 'sm', dim: 16, spacingVar: 'scale/4' }, // 16px
  { name: 'md', dim: 20, spacingVar: 'scale/5' }, // 20px
];
const actives = [false, true];
const RADIUS_CORNERS = ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius'];
const radiusControl = rVars['radius/control'];

const newVariants = [];

for (const color of colors) {
  for (const sz of sizes) {
    for (const active of actives) {
      const comp = figma.createComponent();
      comp.name = `Color=${color}, Size=${sz.name}, Active=${active}`;
      comp.layoutMode = 'NONE';
      comp.resize(sz.dim, sz.dim);

      // Parent into the existing ComponentSet FIRST so dim bindings apply.
      set.appendChild(comp);

      // Fixed dimensions bound to spacing scale
      sp(comp, 'width',  sz.spacingVar);
      sp(comp, 'height', sz.spacingVar);

      // Fill → Primitives palette. Primitives names are `{color}/300` (NOT `colors/{color}-300`).
      const paletteVar = primVars[`${color}/300`];
      comp.fills = [paintFromVar(paletteVar)];

      // Corner radius: `setBoundVariable('cornerRadius', ...)` no-ops on COMPONENT nodes.
      // Set a numeric baseline, then bind each corner individually.
      comp.cornerRadius = 4;
      for (const corner of RADIUS_CORNERS) {
        if (radiusControl) comp.setBoundVariable(corner, radiusControl);
      }

      if (active) {
        // Stroke → action/primary (Semantic)
        comp.strokes = [paintFromVar(semVars['action/primary'])];
        comp.strokeWeight = 2;       // hardcode exception — no 2px variable exists
        comp.strokeAlign  = 'OUTSIDE';
      } else {
        comp.strokes = [];
      }

      newVariants.push(comp);
    }
  }
}

// Now that 40 new variants are parented, the set is safely alive — remove the 4 old variants.
for (const old of oldChildren) {
  try { old.remove(); } catch (e) { console.warn('old remove failed: ' + e.message); }
}

// Drop the dead Color TEXT property (after old children that referenced it are gone).
const defs = set.componentPropertyDefinitions || {};
for (const propKey of Object.keys(defs)) {
  if (propKey.startsWith('Color#')) {
    try { set.deleteComponentProperty(propKey); } catch (e) { console.warn('deleteComponentProperty failed: ' + propKey + ' → ' + e.message); }
  }
}

// Sanity: fail loudly if the count is off.
if (set.children.length !== 40) {
  throw new Error('Expected 40 variants in ComponentSet, got ' + set.children.length);
}

// ── Pin defaultVariant by reordering ─────────────────────────────────────
// children[0] is what Figma treats as the default.
const defaultVariant = set.children.find(c =>
  c.name === 'Color=brand, Size=sm, Active=false'
);
if (defaultVariant) set.insertChild(0, defaultVariant);

// ── Lay out the 10×4 grid ────────────────────────────────────────────────
// Columns: [sm Active=false, sm Active=true, md Active=false, md Active=true]
// Rows:    [brand, cerulean, green, yellow, orange, red, pink, eggplant, purple, neutral]
const PAD = 40, COL_GAP = 24, ROW_GAP = 16;
const COL_W_SM = 16, COL_W_MD = 20;
const colX = [
  PAD,
  PAD + COL_W_SM + COL_GAP,
  PAD + COL_W_SM + COL_GAP + COL_W_SM + COL_GAP,
  PAD + COL_W_SM + COL_GAP + COL_W_SM + COL_GAP + COL_W_MD + COL_GAP,
];
const rowH = 20; // tallest cell per row (md = 20)

for (const v of set.children) {
  const m = v.name.match(/Color=(\w+), Size=(\w+), Active=(\w+)/);
  if (!m) continue;
  const [, color, size, activeStr] = m;
  const rowIdx = colors.indexOf(color);
  let colIdx;
  if (size === 'sm' && activeStr === 'false') colIdx = 0;
  else if (size === 'sm' && activeStr === 'true') colIdx = 1;
  else if (size === 'md' && activeStr === 'false') colIdx = 2;
  else colIdx = 3;

  v.x = colX[colIdx];
  // center each variant vertically within the row
  const cellH = (size === 'md') ? COL_W_MD : COL_W_SM;
  v.y = PAD + rowIdx * (rowH + ROW_GAP) + (rowH - cellH) / 2;
}

// ── Resize the ComponentSet to fit ───────────────────────────────────────
let maxX = 0, maxY = 0;
for (const v of set.children) {
  maxX = Math.max(maxX, v.x + v.width);
  maxY = Math.max(maxY, v.y + v.height);
}
set.resizeWithoutConstraints(maxX + PAD, maxY + PAD);

// Restore original position (resizeWithoutConstraints does not move it, but be explicit)
set.x = originX;
set.y = originY;

console.log('FilterSwatch rebuilt:', set.children.length, 'variants');
console.log('Variant ids for verification queries:');
console.log(JSON.stringify(set.children.map(v => ({ name: v.name, id: v.id })), null, 2));
```

Expected console output: `FilterSwatch rebuilt: 40 variants`, followed by a JSON array of 40 `{name, id}` pairs. No errors about missing variables. Note the `id` values for the two variants used in Task 3 Step 3 — `Color=brand, Size=sm, Active=true` and `Color=neutral, Size=md, Active=false`.

- [ ] **Step 2: Sanity-check the script's dry run**

If the script failed (missing variable warnings, unexpected count), stop and investigate before proceeding to verification. Do not mutate further.

Expected: console shows 40 variants and no warnings.

---

### Task 3: Verify the rebuild

- [ ] **Step 1: Grid screenshot**

Call `get_screenshot` on node `484:19`. Confirm:
- 10 rows, 4 columns.
- Each row is a distinct palette color (`brand` top, `neutral` bottom).
- Columns 2 and 4 show a 2px blue ring (`action/primary`) on `Active=true` variants.
- Columns 1 and 3 show no ring.
- Columns 1–2 are smaller than columns 3–4 (16 vs. 20 px).

- [ ] **Step 2: Properties panel check**

Instruct the user (or use `get_metadata`) to confirm the ComponentSet exposes exactly three variant properties: `Color`, `Size`, `Active`. The old `Color#484:7` TEXT property must be gone.

Expected: `componentPropertyDefinitions` on `484:19` contains only the three variant axes.

- [ ] **Step 3: Bindings audit on two representative variants**

Use the node ids logged by the rebuild script in Task 2 Step 1. Call `get_variable_defs` (or `get_metadata`) on:

1. `Color=brand, Size=sm, Active=true`:
   - `fills[0]` → bound to `colors/brand-300` (Primitives)
   - `strokes[0]` → bound to `action/primary` (Semantic)
   - `cornerRadius` → bound to `radius/control` (Radius)
   - `width`, `height` → bound to `scale/4` (Spacing)

2. `Color=neutral, Size=md, Active=false`:
   - `fills[0]` → bound to `colors/neutral-300`
   - `strokes` → empty array
   - `cornerRadius` → bound to `radius/control`
   - `width`, `height` → bound to `scale/5`

Expected: no raw hex, no unbound floats on either audited variant. If `width`/`height` are unbound, the dim-binding order in the rebuild script did not take effect — return to Task 2 and debug before proceeding.

- [ ] **Step 4: Storybook parity**

Open `http://localhost:6006/?path=/story/primitives-filterswatch--all-states`. Compare side-by-side with the Figma ComponentSet screenshot:
- Same 10 palette colors in the same order.
- Same active-ring treatment.
- Same relative size of `sm` vs. `md`.

Expected: Figma grid visually mirrors the Storybook `AllStates` story.

- [ ] **Step 5: Dark-mode flip sanity check**

Drop an instance on a scratch frame, toggle Semantic mode `Light → Dark`. Palette fills should stay constant (Primitives is single-mode). The `Active=true` stroke should shift to the Dark-mode value of `action/primary`.

Expected: only the active-ring color changes with the mode flip.

---

## Files touched

- **Figma** (`ZP0lSeT5Nwm1lpWI79qIaf`): `FilterSwatch` ComponentSet (`484:19`) rebuilt in place.
- **Code:** none.

## Not touched

- `components/primitives/FilterSwatch.tsx` — unchanged.
- `components/primitives/FilterSwatch.stories.tsx` — unchanged.
- All other Figma ComponentSets and pages — unchanged.
