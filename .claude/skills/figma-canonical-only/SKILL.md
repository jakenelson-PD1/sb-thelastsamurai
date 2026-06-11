---
name: figma-canonical-only
description: MANDATORY skill for ALL Figma work in this project. Forces composition entirely from canonical instances of existing design-system components. Blocks the creation of new ComponentSets, new Components, or new component properties unless TWO thorough design-system searches both return nothing AND the user has explicitly approved. Triggers on any task involving the Figma file `ZP0lSeT5Nwm1lpWI79qIaf` — building, editing, swapping, or refactoring any node, frame, instance, ComponentSet, or property.
---

# Figma Canonical-Only Composition

## Why this skill exists

The design system in `ZP0lSeT5Nwm1lpWI79qIaf` already contains every primitive needed for the application UI. Past failures all came from the same pattern: the agent saw a small gap (a custom badge style, a button shape, a chip with an icon swap), proposed/built a new component to fill it, and ended up forking the system. The user's explicit rule, repeated multiple times: **"do not create new components."**

This skill is the gate. It MUST be invoked the moment any Figma work begins in this project, and it MUST block any attempt to create.

## The hard rule

> **Compose ENTIRELY from canonical instances of existing components. Do not create new components, new ComponentSets, or new component properties without exhausting the design system search TWICE and getting explicit user approval.**

## What "creating" means — all of these are blocked by default

- `figma.createComponent()` for any reason
- `figma.combineAsVariants()` to make a new set
- `figma.createComponentFromNode()` to promote a frame
- `set.addComponentProperty(...)` on an existing canonical (BOOLEAN, TEXT, INSTANCE_SWAP, anything)
- Adding a new variant value to an existing variant axis
- Cloning a variant in a set to make a new variant
- Creating ad-hoc TEXT/FRAME/RECTANGLE/VECTOR composites that visually duplicate an existing canonical (a hand-built avatar, button, badge, checkbox, chip, tag, etc.)

What IS allowed without approval:

- `targetVariant.createInstance()` — creating an instance of any existing canonical
- `instance.setProperties({...})` — overriding instance properties
- `instance.swapComponent(otherCanonical)` — swapping nested instance to another canonical
- `instance.children[i].visible = false` — hiding a nested element on an instance
- Setting bound variables (`setBoundVariable`, `setBoundVariableForPaint`) on owned wrapper frames
- Wrapping canonical instances in plain `figma.createFrame()` containers for layout — frames are not components
- Recoloring nested vectors inside an instance via direct fill/stroke override

## The two-search protocol (when the canonical seems missing)

If you cannot solve the task using existing canonicals, do not create. Run the two-search protocol:

### Search 1 — by name

```javascript
const matches = [];
for (const page of figma.root.children) {
  for (const c of page.children) {
    if (c.type === 'COMPONENT_SET' || c.type === 'COMPONENT') {
      if (/<keyword>/i.test(c.name)) matches.push({ page: page.name, id: c.id, name: c.name });
    }
  }
}
```

Run this with at least 3 keyword variations (e.g., for a counter pill: `count`, `badge`, `pill`, `notification`, `number`).

### Search 2 — by structural shape

If the by-name search returns nothing, search by visual/structural intent:

- For a small label-with-color shape → check `Badge`, `CountBadge`, `NotificationBadge`, `FilterSwatch`, status `*-surface` paint usages
- For an icon-only interactive element → check `Button` with `Icon=Only`, `IconButton`, navigation icon variants
- For a text input look → check `Input`, `Search`, `CommentComposer`
- For a colored circle with letter → check `Avatar`
- For a status indicator → check status icons on `Icons` page (`status-outstanding`, `status-fulfilled`, `status-returned`, `status-accepted`)
- For a row/cell pattern → check `NavItem`, `RequestRow`, `CommentRow`, list-item patterns

Document what you searched, what variants exist, and which one is closest. Then propose to the user — do not just create.

## The proposal format (when both searches found nothing)

Only after the two-search protocol returns nothing usable, present the user with this exact structure:

```
I searched the design system twice and could not find a canonical that fits:

**Search 1 (by name)** — keywords: <list>
Result: <what I found, or "no matches">

**Search 2 (by shape/intent)** — checked: <list of canonicals checked>
Result: <closest match: name, why it doesn't fit>

I need to ask permission to either:
(a) Add a property/variant to <closest existing canonical> — what would change: <description>
(b) Create a new canonical called <proposed name> — variants: <list>, properties: <list>

Which do you prefer? (And the answer can also be "neither, leave the gap.")
```

Wait for an explicit "yes" or selection. Do not proceed without it.

## When the user shares a reference design

Common pattern: user drops a reference frame and says "rebuild." This is NOT permission to create new components. The instruction is to:

1. Inspect the reference for visual structure and content
2. Replicate the visual using ONLY canonical instances
3. Keep the reference visible alongside your build for comparison
4. Configure properties + per-instance overrides to match the reference
5. If the reference uses a visual element that no canonical can produce, run the two-search protocol and ask before adding anything

If the reference came from another file (remote library import) and contains canonicals from THAT file that don't exist in `ZP0lSeT5Nwm1lpWI79qIaf`, the answer is still NOT to create local equivalents. Either propose importing the remote library or ask the user how to handle the gap.

## When a canonical is "almost right"

Per CLAUDE.md Rule 6, the existing rule is "fix at source" — meaning extending the canonical with a new property/variant IS the right pattern. **However**, this skill overrides Rule 6 in spirit by requiring user approval first.

The decision tree:

```
Need a behavior the canonical doesn't have?
├─ Can you achieve it with setProperties + visibility + overrides? → YES, do that
├─ Would it require adding a new property to the canonical? → STOP, propose to user
├─ Would it require a new variant value? → STOP, propose to user
└─ Would it require a brand-new ComponentSet? → STOP, propose to user (run search protocol first)
```

## Enforcement / self-check before EVERY Figma write

Before calling any `figma.create*` function or any `addComponentProperty` / `combineAsVariants` / `clone` on a canonical, ask yourself in the chain of thought:

1. Did the user explicitly approve creating this?
2. Did I run the two-search protocol?
3. Is there a canonical I'm overlooking?

If any answer is no, do not proceed. Either reach for `createInstance()` instead, or escalate to the user with the proposal format.

## Common existing canonicals (memorize)

- **NavItem** (`1054:294`) — sidebar/topnav rows, includes Section/Group/Item types
- **TopNav** (`528:444`) — top navigation bar
- **SideNav** (on SideNav page) — sidebar mockup
- **Button** (`480:848`) — Type × Size × State × Icon, 144 variants
- **Tab** / **Tabs** (`518:6` / `520:9`) — tabs and tab containers
- **Avatar** (`484:14`) — Variant=client/firm × Size=xs/sm/md, with Initials TEXT
- **Badge** (`485:20`)
- **CountBadge** (on CountBadge page)
- **NotificationBadge** (on NotificationBadge page)
- **FilterSwatch** / **FilterSwatchGroup** — color swatches for filtering
- **Chip** (`1142:410`) — Status × Active variants
- **Checkbox** / **Radio** / **Switch** / **Select** / **Input** / **Search** / **Dropdown**
- **Card** (`375:8`)
- **Accordion** / **List** / **Divider**
- **CommentCard** (`1257:278`) — Type × State variants
- **CommentRow** (`1212:107`) — Variant=Firm/Client, atomic row
- **CommentComposer** (`392:34`) — State=Empty/Has-Text
- **PanelHeader** (`796:44`) — Size × Border, with HasSubtitle/HasActions BOOLEAN
- **Toast** / **Tooltip** / **Modal** / **Drawer** / **Popover**
- **AppShell** / **MasterDetailLayout** / **ThreeColumnLayout** / **PanelGroup** / **ListPanel** / **DetailPanel** / **ResizeHandle** / **ScrollArea** / **Stack** / **Grid** / **Container** / **Inset**
- **Icons** page (`76:67`) — 1177 icon ComponentSets (use `createInstance()` with variant `Size=Small|Medium|Large`)
- **status-outstanding / status-fulfilled / status-returned / status-accepted** — status icons on the Icons page
- **Type Scale text styles** — Display LG / Display / Heading LG/MD/SM / Body MD/SM / Body MD Strong / Label MD/SM / Label MD Bold / Caption / Caption Bold / Code

When unsure, query the file for `figma.root.children` (all pages) before assuming a canonical doesn't exist.

## The phrase that should never appear in your output

> "I'll create a new component for…"
> "Building a new ComponentSet to…"
> "Adding a new variant axis…"
> "Adding a new property to the canonical…"
> "Cloning the variant to make…"

If any of those is on the tip of your tongue, stop, run the two-search protocol, and present the proposal format instead.

## Reference materials

- CLAUDE.md (project root) — Rule 6 "One source of truth per component" + Rule 7 QA gate
- File key: `ZP0lSeT5Nwm1lpWI79qIaf`
- Storybook: `http://localhost:6006`
