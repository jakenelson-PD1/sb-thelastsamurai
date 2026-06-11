# FilterSwatch Figma Rebuild

**Date:** 2026-04-20
**Scope:** Figma only. React source is already correct and unchanged.

---

## Goal

Rebuild the `FilterSwatch` ComponentSet (`484:19` on the FilterSwatch page `76:66`) so the full palette is visible as Figma variants, fills are bound to palette tokens, and the active-state outline is bound to `action/primary`.

---

## Problem

The current ComponentSet has four variants (`Size` × `Active`) and a TEXT property `Color#484:7`. All four variants render the same hardcoded blue `#005CE0`:

- **The `Color` TEXT property is unwired.** No `componentPropertyReferences` points to a fill. Setting the text override does nothing — the "knob" is dead.
- **Every fill is raw hex.** Violates CLAUDE.md Rule 1 (never hardcode; always bind to a Semantic or Primitive variable).
- **The ComponentSet grid is useless.** All four variants look identical; there's no visible representation of the palette. The four tiny squares overlap inside a 136×109 frame.
- **The Storybook `AllStates` story shows the full capability** — ten palette colors × two states, each with the action-primary outline on active. The Figma twin shows none of that.

## Non-goals

- **No React changes.** `components/primitives/FilterSwatch.tsx` and the stories stay as-is. Palette colors come from a caller-supplied `color: string` prop, which is already how consumers pass `colors.brand[300]` et al.
- **No usage/demo frame** on the FilterSwatch page. ComponentSet only.
- **No `label` tooltip representation.** Tooltip is a runtime wrapper in React, not a visual state of the swatch itself.

---

## Design

### Variant axes

| Axis | Values | Default |
|---|---|---|
| `Color` | `brand`, `cerulean`, `green`, `yellow`, `orange`, `red`, `pink`, `eggplant`, `purple`, `neutral` | `brand` |
| `Size` | `sm` (16×16), `md` (20×20) | `sm` |
| `Active` | `false`, `true` | `false` |

**Total: 40 variants** = 10 × 2 × 2. `defaultVariant = Color=brand, Size=sm, Active=false`.

### Per-variant node structure

Each variant is a single `COMPONENT` node with no children and no auto-layout — just a colored square.

| Property | Binding | Collection |
|---|---|---|
| `fills[0]` SOLID color | `colors/{Color}-300` | Primitives |
| `cornerRadius` | `radius/control` (4px) | Radius |
| `width` / `height` | `scale/4` (sm=16) or `scale/5` (md=20) | Spacing |
| `strokes[0]` SOLID color *(when Active=true)* | `action/primary` | Semantic |
| `strokeWeight` *(when Active=true)* | 2 | — |
| `strokeAlign` *(when Active=true)* | `OUTSIDE` | — |

`Active=false` variants have `strokes = []` (no stroke at all).

**Hardcode exception:** `strokeWeight = 2` is not bound. No 2px variable exists in the Spacing scale (closest are `scale/1 = 4` and an implicit 1px used for dividers). 2px is a deliberate exception, matching the existing `py-[2px]` exception pattern called out in CLAUDE.md.

### Properties panel

- **Delete** `Color#484:7` TEXT property. Replaced by the `Color` variant axis.
- Result: right panel shows three dropdowns — `Color`, `Size`, `Active`.

### ComponentSet grid

10 rows × 4 cols; outer padding 40, col gap 24, row gap 16.

- **Rows (top → bottom):** `brand, cerulean, green, yellow, orange, red, pink, eggplant, purple, neutral`
- **Columns (left → right):** `sm/Active=false`, `sm/Active=true`, `md/Active=false`, `md/Active=true`

ComponentSet resizes automatically to `max(x+w)+40` by `max(y+h)+40`.

---

## Execution order

1. Back up a screenshot of the current ComponentSet (`484:19`) for regression reference.
2. Delete all four existing variants. The current variants have no downstream overrides worth preserving, and fresh creation is cleaner than patching.
3. Create the 40 `COMPONENT` nodes, each 16×16 or 20×20, with:
   - fill bound to its palette variable,
   - corner radius bound to `radius/control`,
   - stroke bound to `action/primary` if `Active=true`.
4. Combine via `figma.combineAsVariants()` into the existing ComponentSet — or construct directly as children of the set.
5. Rename each component to the standard key: `Color=X, Size=Y, Active=Z`.
6. Remove the `Color#484:7` TEXT property from the ComponentSet via `deleteComponentProperty`.
7. Set `defaultVariant` by reordering: Figma infers the default from `componentSet.children[0]`. Call `setNode.insertChild(0, brandSmInactiveVariant)` to pin it.
8. Position children in the 10×4 grid (first cell at `x=40, y=40`, col gap 24, row gap 16) and resize the ComponentSet to `max(x+w)+40 × max(y+h)+40`.

## Verification

1. **Grid check.** `get_screenshot` the ComponentSet → see a clean 10×4 palette grid. Every row is its palette color; every `Active=true` variant shows a 2px action-primary ring.
2. **Properties panel.** Drag an instance onto a blank frame → right panel shows exactly three dropdowns: `Color / Size / Active`. Toggling each updates fill and stroke live.
3. **Bindings audit.** `Array.from(node.componentPropertyDefinitions)` on the set no longer contains `Color#484:7`. Inspect any variant → every fill/stroke/radius/dimension is a bound variable, not a raw value.
4. **Dark mode flip.** On a test frame, switch Semantic mode Light → Dark → only the active-state outline changes (as `action/primary` shifts). Palette fills remain constant because the `Primitives` collection is single-mode ("Value"), not Light/Dark — this matches the React behaviour where palette colors are the same hex in both modes.
5. **React parity.** Storybook `AllStates` screenshot and Figma ComponentSet screenshot show the same ten colors in the same order with the same active-outline treatment.

---

## Files touched

- **Figma** (`ZP0lSeT5Nwm1lpWI79qIaf`): `FilterSwatch` ComponentSet (`484:19`) rebuilt in place.
- **Code:** none.
