# Last Samurai Design System (LSDS) — Project Knowledge

This is the canonical reference for the Last Samurai Design System. Claude should consult this file whenever working on LSDS components, tokens, prompts, or architecture.

This file lives in two places and they must stay identical:
1. **Claude.ai project knowledge** (this upload) — for planning, prompt drafting, and decision-making sessions
2. **`./last-samurai/CLAUDE.md`** in the repo root — for Claude Code execution sessions

When the file changes, update both locations.

---

## What LSDS Is

A designer-owned design system built in Claude Code, optimized for rapid prototyping with Claude. The goal: designers own frontend components and platform consistency; developers implement from Storybook with zero ambiguity.

**Source-of-truth philosophy:** Code is the single source of truth. Tokens defined in TypeScript flow outward to Tailwind config and Figma Variables. Designers update token files (or ask Claude to), and Figma is kept in sync via the Figma REST API — never the other way around.

---

## Workflow Architecture

LSDS work happens across two Claude surfaces. Each has a distinct role.

| Surface | Role | What lives there |
|---|---|---|
| **Claude.ai project** (this one) | Planning, strategy, prompt drafting, decision capture | Project instructions, this knowledge file, conversation history |
| **Claude Code** (in `./last-samurai/`) | Execution against the repo — building components, running Storybook, syncing Figma | The codebase, `CLAUDE.md`, terminal output |

**The handoff pattern:** draft a paste-ready prompt here → paste into Claude Code → Claude Code executes against the repo with `CLAUDE.md` as its baseline context.

**Keeping the two in sync:** Both surfaces should read identical context. When LSDS changes:
1. Update this `.md` file once
2. Re-upload it to Claude.ai project knowledge
3. Replace the contents of `./last-samurai/CLAUDE.md` with the same content (or commit the file directly)

---

## Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS v3 (utilities only)
- **Component library:** Storybook 8 (Vite builder)
- **Variants:** `class-variance-authority` (cva) + `clsx`
- **Icons:** `lucide-react`
- **Fonts:** System font stack only — no external font imports
- **Figma sync:** Custom Node script using Figma REST API v1

**Project root:** `./last-samurai/`

---

## Directory Structure

```
last-samurai/
├── CLAUDE.md              # mirror of this project knowledge file
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── shadows.ts
│   ├── radii.ts
│   └── index.ts
├── components/
│   ├── primitives/        # Button, Input, Badge, Avatar, Icon
│   ├── layout/            # Container, Grid, Stack, Divider, AppShell
│   ├── feedback/          # Alert, Toast, Skeleton, Spinner
│   ├── navigation/        # Tabs, Breadcrumb, Pagination, Sidebar, Navbar
│   ├── overlay/           # Modal, Drawer, Tooltip, Popover
│   ├── data-display/      # Table, Card, List, Stat
│   └── forms/             # Select, Checkbox, Radio, Switch, DatePicker
├── stories/
├── figma/
│   ├── sync.ts
│   └── diff.ts
├── tailwind.config.ts
├── postcss.config.js
├── .storybook/
│   ├── main.ts
│   └── preview.tsx
└── package.json
```

---

## Conventions (Non-Negotiable)

### Styling

- **Tailwind utility classes only.** No CSS Modules, no styled-components, no custom CSS files for component styles.
- **No hardcoded hex values in components.** Every color must reference a token key (e.g., `colors.brand.500`).
- **Extend Tailwind defaults — never replace them.** The `theme.extend` block in `tailwind.config.ts` is the only place tokens are added.
- **System fonts only.** Sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`.

### Files

- **Components:** PascalCase — `Button.tsx`
- **Stories:** Co-located — `Button.stories.tsx`
- **Every component must ship with a stories file** covering at minimum: default state, all variants, edge cases (long text, empty state, loading, disabled).

### Tokens

- Token naming mirrors Tailwind conventions: `colors.brand.500`, `spacing.4`, `radii.md`.
- Tokens live in `tokens/` as typed TypeScript constants.
- `tokens/index.ts` is the single export consumed by both `tailwind.config.ts` and `figma/sync.ts`.

### TypeScript

- Every component exports its `Props` interface.
- Use `cva` for variant definitions; type-extract variants with `VariantProps<typeof variants>`.
- No `any`. If something is genuinely unknown, use `unknown` and narrow.

### Accessibility

- Focus management is required for all overlays (trap on open, restore on close).
- Keyboard navigation is required for all interactive components.
- ARIA roles, labels, and `aria-*` attributes wired up correctly — verified in Storybook a11y addon.

### Dependencies

- Ask before adding a new dependency. Prefer composition over heavy libs.
- When wrapping a third-party lib (e.g., `react-resizable-panels`), expose only LSDS-named primitives — never leak the underlying lib's API.

### Token compliance (non-negotiable)

**Every value Claude writes for a styling property must come from a design token.** This is checked automatically on every component change. The user should never have to ask "are you using our tokens?" — token compliance is the default.

- **Colors**: only via semantic CSS vars / Tailwind classes (`bg-elevated`, `text-primary`, `border-line-strong`, `text-status-info-fg`, etc.). Never raw hex, rgb, or `colors.*` imports in components.
- **Typography**: only via Type Scale classes (`text-body-md`, `text-body-sm`, `text-heading-md`, `text-label-md`, `text-caption`, etc.). Choose the size that matches the semantic role (e.g. dense tables → `text-body-sm`).
- **Font weights**: only via `font-normal | font-medium | font-semibold | font-bold` AND the chosen `text-*` style + weight must correspond to a real **Type Scale text style** in the Figma file (Body MD Regular, Body MD Strong, Body SM Medium, etc.). If the combination has no Type Scale match, use a different size or weight that does. Never invent a "14 Medium" style — it doesn't exist.
- **Spacing & sizing**: only via spacing-scale classes (`p-1 … p-96`, `gap-2`, `h-9`, `w-11`, etc.) or semantic spacing classes (`p-panel-compact`, `p-panel`, `p-panel-relaxed`, `gap-section-gap`). Never inline `style={{ padding: '12px' }}` for build-time values, never arbitrary `p-[12px]` if a scale class exists. If a Tailwind utility you want to use doesn't generate, the spacing scale in `tokens/spacing.ts` is missing the value — add it instead of using arbitrary values.
- **Radius**: only via `rounded-control | rounded-card | rounded-modal | rounded-pill | rounded-full`. Never `rounded-md`, `rounded-lg`, or arbitrary px.
- **Shadows**: only via `shadow-card | shadow-card-hover | shadow-modal | shadow-popover`. Never raw `box-shadow` strings.

**Symmetric on the Figma side:** every fill/stroke must be bound to a Semantic variable (Rule 1), every text node must be bound to a Type Scale text style, every padding/gap/dimension must be bound to a Spacing or Radius variable (Rule 5). When you build or edit anything in Figma, verify these bindings before reporting the work complete.

**Stop conditions** — if you find yourself writing any of these, halt and switch to the token equivalent:

| If you wrote… | Replace with… |
|---|---|
| `style={{ padding: '12px' }}` | `className="p-3"` (or `p-panel-compact`) |
| `className="text-[14px]"` | `text-body-md` |
| `className="text-sm"` | `text-body-sm` (or whichever Type Scale size matches) |
| `style={{ color: '#666' }}` | `text-secondary` or `text-muted` |
| `className="rounded-md"` | `rounded-control` or `rounded-card` |
| Inline `border-color: rgba(...)` | `border-line` / `border-line-strong` / `border-line-focus` |

### Composition (non-negotiable)

**Always compose from existing primitives.** This is the source-side equivalent of Figma's Rule 6 ("One source of truth per component"). When you build any component, scan the existing primitives first and reuse them.

- If a primitive exists for the visual concept (`Chip`, `Avatar`, `Button`, `Badge`, `Input`, `Search`, etc.), **use it**. Do not rebuild the same visual with raw Tailwind on a `<div>`.
- If the primitive needs adaptation for a specific use case, pass `className` overrides rather than forking the visual: `<Chip className="!bg-transparent">…</Chip>`.
- If the primitive is *almost* right but missing a capability (state, prop, variant), **add the capability to the primitive**, don't reimplement it inline in the consumer.
- This rule applies symmetrically with Figma's Rule 6 — the two surfaces must compose from the same canonical primitives. A consumer that uses `<Chip>` in source must instance the `Chip` ComponentSet in Figma. Drift in composition is a defect (Rule 3).
- Same as Rule 3: do not ask the user "should I refactor to use the primitive?" — refactor it and report.

The corollary: if you find yourself writing `<div className="rounded-pill border bg-...">` and the design system already has a `Chip`, you are violating this rule. Stop, refactor to use the primitive, then continue.

---

## Dark Mode Authoring Rules

This project uses a two-layer token system: a raw color palette (`tokens/colors.ts`) mapped to semantic CSS custom properties (`tokens/semantic.ts`), which are then exposed as Tailwind utility classes. Every component inherits dark mode automatically — as long as you follow these rules.

### Rule 1 — Never import `colors` in a component

`colors.ts` is only for use inside `semantic.ts`. Components must always use a CSS var via a Tailwind class or `var(--color-*)` style prop.

```tsx
// ❌ Wrong — hardcodes a value, bypasses dark mode
import { colors } from '../../tokens/colors';
style={{ backgroundColor: colors.orange[600] }}

// ✅ Right — inherits dark mode automatically
style={{ backgroundColor: 'var(--color-indicator-attention)' }}
// or
className="bg-indicator-attention"
```

### Rule 2 — Every new token needs both a light and dark value

When adding a token to `semantic.ts`, define it in both `:root` AND `.dark`. Leave no orphans.

```ts
// ✅ In semantic.ts
':root': { '--color-foo': colors.brand[500] },
'.dark': { '--color-foo': '#6098e0' },
// And add the Tailwind alias:
'foo': 'var(--color-foo)',
```

### Rule 3 — Use semantic names, not descriptive ones

Tokens describe *role*, not *color*.

```
✅ --color-surface-row-selected    (role)
❌ --color-light-blue-row          (color description)
```

### Rule 4 — Status surfaces always come in triples

Every status color family needs: `-surface`, `-border`, `-fg`.

```
--color-status-teal-surface
--color-status-teal-border
--color-status-teal-fg
```

### Rule 5 — Inline styles only for dynamic/runtime values

If a color is known at build time, use a Tailwind class. Use `style={{ ... }}` only when the value is computed at runtime (e.g. user-assigned avatar colors).

```tsx
// ✅ Known at build time → Tailwind class
className="bg-status-error"

// ✅ Runtime value → inline style is fine
style={{ backgroundColor: user.color }}
```

---

## Token Quick Reference

Semantic tokens follow a **role-first** architecture: CSS vars use `--color-<group>-<role>` (industry-aligned with M3/Carbon/Primer); Tailwind utility classes use the SHORT role since the utility prefix already implies the group.

| Category (CSS var group) | Tailwind Classes | Use For |
|---|---|---|
| Surfaces (`--color-surface-*`) | `bg-canvas`, `bg-surface`, `bg-elevated`, `bg-recessed`, `bg-pressed`, `bg-hover-overlay`, `bg-row-selected`, `bg-scrollbar`, `bg-notification`, `bg-scrim` | All backgrounds. `bg-surface` doubles as the list-row hover state. |
| Text (`--color-text-*`) | `text-heading`, `text-primary`, `text-secondary`, `text-muted`, `text-link`, `text-on-accent`, `text-tile-flag` | Typography hierarchy + icons |
| Borders (`--color-border-*`) | `border-line`, `border-line-strong`, `border-line-focus`, `border-l-line-row-selected`, `ring-line-focus` | Dividers, inputs, focus rings |
| Action (`--color-action-*`) — **button-state colors** | `bg-action-primary`, `bg-action-primary-hover`, `bg-action-danger`, `bg-action-danger-hover` (and `text-*`/`border-*` variants) | All button base + hover pairs. `action-primary` is THE brand-blue (also covers selected-row accents, unread dots, outstanding icons). `action-danger` aliases to `status/error` for danger button context. |
| Status accents (`--color-status-*`) — **canonical -500 colors (icons + dots)** | `bg-status-success`, `bg-status-warning`, `bg-status-error`, `bg-status-attention`, `bg-status-cerulean`, `bg-status-purple`, `bg-status-pink`, `bg-status-eggplant` (also `text-*`, `border-*`) | Flat color accents only — for status icons AND small status dots. No hover states (those live in action/ — see `action/danger-hover` for the danger button hover). For brand-blue/unread/outstanding use `bg-action-primary`. |
| Swatch (`--color-swatch-*`) | `bg-swatch-not-started`, `bg-swatch-outstanding`, `bg-swatch-fulfilled`, `bg-swatch-overdue` | Large status color fills (FilterSwatch, StatusTile) |
| Status surfaces (`--color-status-<v>-*`) | `border-status-{v}-border`, `text-status-{v}-fg` (+ `bg-status-{v}-surface` for v ≠ info; info uses `bg-row-selected`) | Badges, alerts, callouts (v = success/warning/error/cerulean/orange/pink/eggplant/purple). Info surfaces use `bg-row-selected`. |
| Header (`--color-header-*`) — always-dark | `bg-header-bg`, `bg-header-border`, `bg-header-active-bg`, `bg-header-hover-bg`, `text-header-text` | Top nav / header chrome |

> The previous `sidenav/*` group has been folded into `surface/*` + `text/*` + `border/*`. The sidebar uses the same canonical tokens as the rest of the system. For a dark sidebar inside a light document, wrap the sidebar with `className="dark"` to scope the dark token set.

**Available status surface variants:** `info`, `success`, `warning`, `error`, `cerulean`, `orange`, `pink`, `eggplant`, `purple`

**Naming note.** Borders use the `line` alias (`border-line`, `ring-line-focus`) rather than `border-default` — keeps class names ergonomic without the awkward `border-border-default`. The CSS var still carries the industry-standard `--color-border-default` semantic name.

---

## Layout Component Quick Reference

| Component | Purpose | Key Props |
|---|---|---|
| `AppShell` | Full-viewport wrapper with fixed header | `header`, `headerHeight` |
| `MasterDetailLayout` | 2-col resizable list+detail | `list`, `detail`, `rightPanels` |
| `ThreeColumnLayout` | 3-col with optional right panel | `sidebar`, `content`, `rightPanel` |
| `ListPanel` | Opinionated left panel (header + toolbar + scrollable list) | `header`, `toolbar`, `children` |
| `DetailPanel` | Opinionated right panel (sticky header + scroll + sticky footer) | `header`, `children`, `footer` |
| `PanelHeader` | Standard title bar with actions slot | `title`, `subtitle`, `actions`, `size` |
| `ScrollArea` | Themed scrollable container | `axis` (y/x/both) |
| `Inset` | Semantic padding wrapper | `size` (compact/default/relaxed), `x`, `y` |
| `Grid` | CSS grid — fixed or responsive columns | `cols` (number or `{base,sm,md,lg}`), `gap` |
| `ColSpan` | Grid item spanning N columns | `span` (number or `{base,sm,md,lg}`) |
| `Stack` | Flexbox layout | `direction`, `gap`, `align`, `justify` |
| `Container` | Max-width page wrapper | `maxWidth` |
| `Divider` | Horizontal/vertical separator | `orientation` |

### Semantic Spacing Classes
| Class | Value | Use |
|---|---|---|
| `p-panel-compact` / `px-panel-compact` / `py-panel-compact` | 12px | Toolbars, dense panels |
| `p-panel` / `px-panel` / `py-panel` | 16px | Standard panels (default) |
| `p-panel-relaxed` / `px-panel-relaxed` / `py-panel-relaxed` | 24px | Detail views, forms |
| `gap-section-gap` | 24px | Vertical gap between page sections |

---

## Adding a New Token

1. Add the raw value to both `:root` and `.dark` in `tokens/semantic.ts`
2. Add a Tailwind alias in the `theme.extend.colors` section of the same file
3. Use the Tailwind class in your component — never the raw `colors.*` value

---

## Figma Design System Rules

**File key:** `ZP0lSeT5Nwm1lpWI79qIaf`
**Storybook:** `http://localhost:6006`

These rules apply every time a Figma component is built or modified. No exceptions.

### Rule 1 — Always bind colors to Semantic variables

The Figma file has a `Semantic` variable collection with `Light` and `Dark` modes. Every fill, stroke, and text color in every component must be bound to a Semantic variable using `figma.variables.setBoundVariableForPaint()`. Never hardcode hex values.

```javascript
// ❌ Wrong — hardcodes hex, breaks dark mode
comp.fills = [{type: 'SOLID', color: {r: 0.055, g: 0.353, b: 0.882}}];

// ✅ Right — live reference, updates with Light/Dark mode
const v = varByName['action/primary']; // from Semantic collection
const paint = figma.variables.setBoundVariableForPaint(
  {type: 'SOLID', color: {r: 0, g: 0, b: 0}},
  'color', v
);
comp.fills = [paint];
```

**Semantic variable name → Tailwind class mapping:**
| Variable | Tailwind | Role |
|---|---|---|
| `action/primary` | `bg-action-primary` / `text-action-primary` / `border-action-primary` | **Canonical brand-blue.** Primary button fills, selected-row left-edge stroke, unread indicator dots, outstanding-status icons. |
| `action/primary-hover` | `bg-action-primary-hover` | Primary button hover |
| `action/danger` | `bg-action-danger` | Danger button base (alias to `status/error`) |
| `action/danger-hover` | `bg-action-danger-hover` | Danger button hover |
| `surface/canvas` | `bg-canvas` | Page background |
| `surface/default` | `bg-surface` | Hover surface |
| `surface/elevated` | `bg-elevated` | Card / input bg |
| `surface/recessed` | `bg-recessed` | Recessed / secondary hover |
| `surface/pressed` | `bg-pressed` | Pressed / selected fill |
| `surface/row-hover` | `bg-row-hover` | List-row hover state |
| `surface/row-selected` | `bg-row-selected` | List-row selected state **AND** info-tinted surfaces (alerts, badges, etc.) — single subtle-blue surface across both contexts |
| `surface/notification` | `bg-notification` | Red notification badge bg |
| `text/heading` | `text-heading` | Section headings |
| `text/primary` | `text-primary` | Body text |
| `text/secondary` | `text-secondary` | Secondary text / ghost button text |
| `text/muted` | `text-muted` | Placeholder / muted icons |
| `text/on-accent` | `text-on-accent` | White text on colored buttons |
| `text/link` | `text-link` | Link / upload text |
| `border/default` | `border-line` | Default borders |
| `border/strong` | `border-line-strong` | Input borders |
| `border/focus` | `border-line-focus` (also `ring-line-focus`) | Focus ring |
| `status/error` | `text-status-error` | Danger / error |
| `status/error-hover` | — | Danger hover |
| `status/success` | `text-status-success` | Success |
| `status/warning` | `text-status-warning` | Warning |
| `status/{role}` | `bg-status-{role}` / `text-status-{role}` / `border-status-{role}` | Status accents (-500 hue) — `success/warning/error/error-hover/attention/cerulean/purple/pink/eggplant`. Doubles as the dot color in StatusDot. |
| `swatch/{role}` | `bg-swatch-{role}` | Large status color fills (not-started/outstanding/fulfilled/overdue) — fills FilterSwatch/StatusTile |

### Rule 2 — Always use icons from the Icons page

Never create vectors manually for icons. Always import the icon component from the `Icons` page in the same Figma file. Icon names are **kebab-case** (e.g. `chevron-down`, `dots-horizontal`).

```javascript
// ✅ Always do this
const iconsPage = figma.root.children.find(p => p.name === 'Icons');
const iconSet = iconsPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'chevron-down');
const icon = iconSet.children.find(c => c.variantProperties?.Size === 'Small'); // 16px
const inst = icon.createInstance();
```

**Icon size → Size variant:**
| px | Size variant |
|---|---|
| 16px | `Size=Small` |
| 20px | `Size=Medium` |
| 24px | `Size=Large` |

After creating the instance, bind the stroke/fill to a Semantic variable using `setBoundVariableForPaint` — do not call `fixColor()` with hardcoded hex.

### Rule 3 — Always cross-reference Storybook visually

Before finalizing any Figma component, open the corresponding Storybook story at `http://localhost:6006` and take a screenshot. Compare colors, spacing, typography, border-radius, and interactive states side-by-side. The Figma component must match Storybook exactly.

**Figma ↔ Storybook unification is a non-negotiable invariant.** Drift between the two is a defect, not a design choice. When you discover any visual or structural difference:

1. **Fix both surfaces immediately, in the same session, without asking.** Do not ask the user "should I align them?" or "want me to fix this?" — alignment is the default expected outcome of every change.
2. **Both sides must reflect every change.** A token edit, a state addition, a variant rename, a sizing tweak, a font change — propagate to both Figma and Storybook within the same turn.
3. **When source and Figma disagree:** Source is the source of truth for tokens and prop signatures (Rule 4). But for visual realisation that has already been finalised in Figma, source must be updated to match Figma's intent rather than the other way around. The Decisions Log marks which surface is "more finalized" per component.
4. **Report what was unified, not what could be unified.** Always end a unification turn with a confirmation that both surfaces match — not with a question about whether to proceed.

This rule supersedes any prior tendency to defer alignment to the user. The user owns design decisions; alignment of those decisions across surfaces is mechanical and belongs to Claude.

Story URL pattern: `http://localhost:6006/?path=/story/<section>-<component>--<story>`
Examples:
- `http://localhost:6006/?path=/story/primitives-button--all-variants`
- `http://localhost:6006/?path=/story/primitives-badge--default`
- `http://localhost:6006/?path=/story/forms-checkbox--default`

### Rule 4 — Source of truth order

When building a Figma component, consult in this order:
1. **Component source** (`components/primitives/*.tsx`, `components/forms/*.tsx`, `components/data-display/*.tsx`) — exact class names, sizes, states
2. **Token files** (`tokens/semantic.ts`, `tokens/colors.ts`) — resolve Tailwind class → Semantic variable name
3. **Storybook** (`http://localhost:6006`) — visual reference for final comparison
4. **Reference Figma file** (`oj7Xfmv6CYOLolSslFswvs`) — structural reference only (variant property naming, grid layout)

### Rule 5 — Always bind Spacing and Radius variables

The Figma file has `Spacing` (19 FLOAT vars) and `Radius` (4 FLOAT vars) collections. Every corner radius, padding, gap, and fixed dimension must be bound via `node.setBoundVariable()`. Never hardcode pixel values.

```javascript
// ── Standard setup (add to every script) ─────────────────────────────────
const collections = figma.variables.getLocalVariableCollections();
const spacingColl = collections.find(c => c.name === 'Spacing');
const radiusColl  = collections.find(c => c.name === 'Radius');
const spVars = {}, rVars = {};
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name] = v; }
for (const id of radiusColl.variableIds)  { const v = figma.variables.getVariableById(id); if (v) rVars[v.name] = v; }
function sp(node, prop, name) { const v = spVars[name]; if (v) node.setBoundVariable(prop, v); }
function rx(node, prop, name) { const v = rVars[name]; if (v) node.setBoundVariable(prop, v); }

// ── Usage ─────────────────────────────────────────────────────────────────
rx(frame, 'cornerRadius', 'radius/control');  // rounded-control = 4px
rx(frame, 'cornerRadius', 'radius/card');     // rounded-card = 8px
rx(frame, 'cornerRadius', 'radius/pill');     // rounded-pill / rounded-full
sp(frame, 'paddingLeft',  'scale/3');         // px-3 = 12px
sp(frame, 'paddingRight', 'scale/3');
sp(frame, 'itemSpacing',  'scale/2');         // gap-2 = 8px
sp(frame, 'width',        'scale/4');         // w-4 = 16px (FIXED nodes)
sp(frame, 'height',       'scale/10');        // h-10 = 40px (FIXED nodes)
```

**Spacing variable → Tailwind class mapping:**
| Variable | px | Tailwind classes |
|---|---|---|
| `scale/1` | 4 | `gap-1`, `p-1` |
| `scale/2` | 8 | `gap-2`, `px-2`, `py-2`, `h-2`, `w-2` |
| `scale/3` | 12 | `px-3`, `p-panel-compact` |
| `scale/4` | 16 | `px-4`, `p-panel`, `h-4`, `w-4` |
| `scale/5` | 20 | `h-5`, `w-5` |
| `scale/6` | 24 | `h-6`, `w-6` |
| `scale/7` | 28 | `h-7`, `w-7` |
| `scale/8` | 32 | `h-8`, `w-8` |
| `scale/9` | 36 | `h-9`, `w-9` |
| `scale/10` | 40 | `h-10`, `w-10` |
| `semantic/panel-compact` | 12 | `p-panel-compact` |
| `semantic/panel` | 16 | `p-panel` |
| `semantic/panel-relaxed` | 24 | `p-panel-relaxed` |
| `semantic/section-gap` | 24 | `gap-section-gap` |

**Radius variable → Tailwind class mapping:**
| Variable | px | Tailwind class |
|---|---|---|
| `radius/control` | 4 | `rounded-control` |
| `radius/card` | 8 | `rounded-card` |
| `radius/modal` | 16 | `rounded-modal` |
| `radius/pill` | 9999 | `rounded-pill`, `rounded-full` |

**Hardcode-only exceptions (no matching variable):**
- `py-[2px]` = 2px padding — badge-only exception per source code
- `w-11` = 44px (switch track width) — not in spacing scale

### Rule 6 — One source of truth per component. No forks, no parallel copies.

Every visual concept lives in exactly one component. If a concept already exists (icon, checkbox, button, badge, avatar, etc.), **use it via `createInstance()`** — do not rebuild it inside another component.

This applies in both directions:
- Building component A that contains concept B → import B's ComponentSet and create an instance.
- Concept B doesn't quite fit what A needs → **update B**. Add a variant, add a boolean property, adjust a variable binding. Never fork it into A.

```javascript
// ❌ Wrong — rebuilding a checkbox box inside ActionMenuItem
const box = figma.createFrame();
box.resize(16, 16);
box.fills   = [bindColor({...}, 'action/primary')];
box.strokes = [bindColor({...}, 'action/primary-hover')];
// ...adding a check vector by hand...

// ❌ Wrong — cloning the Checkbox component and renaming it "ActionMenuCheckbox"
const forked = originalCheckbox.clone();
forked.name = 'ActionMenuCheckbox';

// ✅ Right — instance the canonical component
const cb = checkboxSmChecked.createInstance();
cb.setProperties({ [showLabelKey]: false }); // hide label via an added property
```

**When the existing component is missing a capability you need, the fix is in the original, not in the consumer.**
Examples of acceptable edits to the canonical component:
- Add a new variant (e.g. `State=Indeterminate`) to cover a new case
- Add a BOOLEAN property (e.g. `ShowLabel`) wired to a child's `visible` via `componentPropertyReferences`
- Swap a hardcoded vector/value for a bound variable or an icon instance from the Icons page
- Widen the `Size` axis with a new variant that matches a new use-case

**Nested composition rule:**
When a component internally needs another concept (e.g. a checkmark inside a checkbox), it **must** use the canonical icon instance from the Icons page — never a hand-drawn vector. Icons already have their own `Size=Small | Medium | Large` variant axis; bind the colour via `setBoundVariableForPaint` and let the icon component carry the rest.

**How to check before creating:**
1. `figma.root.children` — scan all pages for an existing ComponentSet with a matching name or purpose.
2. If found → `createInstance()` and compose.
3. If it exists but doesn't fit → edit the original (add variants / properties / bindings) and then compose.
4. Only create a new ComponentSet when the concept genuinely does not exist anywhere in the file.

**This rule applies identically to code.** Don't build a second `<Checkbox>` inside `ActionMenu.tsx`; import the existing `Checkbox` from `components/forms/Checkbox.tsx` and add a prop (e.g. `hideLabel`) to the original if needed. Same principle, same reason: drift between parallel copies is the #1 source of design-system rot.

### Rule 7 — Mandatory post-build QA gate

Before reporting any Figma build "done", run every one of these steps. Skipping any step = not done.

1. **Screenshot** — call `get_screenshot` on the ComponentSet node and visually inspect every variant.
2. **Sizing audit** — for every variant, verify `primaryAxisSizingMode` and `counterAxisSizingMode` are what you intend. `combineAsVariants` can silently reset both to `FIXED` — re-assert `AUTO` explicitly if height should hug content. Re-assert `layoutAlign = 'STRETCH'` on children that should fill width. Set `textAutoResize = 'HEIGHT'` on text nodes that should reflow.
3. **Binding audit** — confirm every fill/stroke is bound to a Semantic variable (no raw hex), every padding/gap/width/height is bound to a Spacing variable (except the Rule 5 exceptions), every corner radius is bound to a Radius variable.
4. **Source parity check** — open the corresponding `components/**/*.tsx` and `*.stories.tsx` and compare variant names, dimensions, typography sizes/weights, and colors. If Figma diverges from source, Figma is wrong.
5. **Storybook visual diff** — per Rule 3, compare against `http://localhost:6006` for the matching story.

Only after steps 1–5 pass, report the build as complete. If any step fails, fix it before moving on — do not hand a broken build to the user.

**For Matrix stories specifically**, the bar is higher and codified in the `figma-page-to-storybook-matrix` skill. Every Matrix story MUST:

- Read the full Figma page (not just the ComponentSet) and capture every cell's exact (x, y, w, h, padding, radius, fills, strokes, typography, text content).
- Render via absolute positioning at Figma's exact (x, y, w) per cell — no CSS Grid for the matrix layout.
- Use only canonical primitives — never mocks. If a primitive can't render in the required state, add a controlled prop (`open?`, `inline?`, `defaultX?`) to the primitive, then use it.
- Pass per-cell `preview_eval` verification: position deltas = 0, width deltas = 0, color/padding/radius values match Figma bindings exactly, height deltas within ±20px (browser font-metric variance).
- Use the `MatrixVerify` decorator at `last-samurai/components/_decorators/MatrixVerify.tsx` so reviewers see deltas inline without running eval scripts.

The phrase "9 cells render — looks good" is NOT acceptable as completion evidence. Numeric per-cell deltas with green/yellow/red classification are the bar.

### Rule 8 — Scan available skills before starting any task

Every task (Figma build, React edit, token change, anything) begins with a skill scan. Before taking a single action:

1. Check the available-skills list (system reminders) for any skill whose description matches the task at hand — even at 1% relevance.
2. Invoke every matching skill via the `Skill` tool before proceeding.
3. If this project has the agents-main plugins installed (`ui-design`, `accessibility-compliance`, `comprehensive-review`, `unit-testing`, `frontend-mobile-development`), their skills are considered mandatory for any prompt whose domain they cover.

A missing skill invocation is treated the same as a missed QA step: the work is not done.

**Project-local skills (loaded from `last-samurai/.claude/skills/`) — auto-invoke when their domain matches:**

| Skill | Triggers on |
|---|---|
| `figma-canonical-only` | Any Figma work in this file. Blocks new ComponentSets, new properties, mocks, and parallel components. |
| `figma-page-to-storybook-matrix` | Any Matrix story creation or modification. Forces full per-cell numeric verification before claiming completion. |

---

## The 8-Phase Build Plan

1. **Init** — scaffold, deps, Tailwind, Storybook bootstrapped ✅
2. **Tokens** — colors, typography, spacing, shadows, radii ✅
3. **Primitives** — Button, Input, Badge, Avatar, Icon ✅
4. **Layout** — Container, Grid, Stack, Divider, AppShell ⬅ *current*
5. **Feedback & Overlay** — Alert, Toast, Modal, Drawer, Tooltip, Popover
6. **Navigation** — Tabs, Breadcrumb, Pagination, Sidebar, Navbar
7. **Figma sync** — `figma/sync.ts` + `figma/diff.ts`, push tokens to Figma Variables
8. **Storybook polish & deploy** — custom manager theme, Design Tokens story, deploy

> Update phase status here as work progresses.

### Current Focus

Building `AppShell` in `components/layout/`. The AppShell wraps `react-resizable-panels` and exposes `<AppShell>`, `<Panel>`, `<ResizeHandle>` as LSDS primitives, plus a `usePanels()` hook for opening/closing additive panels from anywhere in the tree. Stories should cover: default layout, collapsed panel, multiple additive panels open.

---

## Architectural Decisions Log

Append a one-line entry for every meaningful call. Newest at the top.

| Date | Decision | Rationale |
|---|---|---|
| 2026-06 | **Accent group renamed to color-name semantics.** Mirrored the user's Figma rename: `accent/success` → `accent/green` (entire family — surface/border/fg), `accent/warning` → `accent/yellow`, `accent/error` → `accent/red`, `accent/attention` → `accent/orange` (the flat -500 now joins the existing orange-surface/border/fg triple). Also `accent/purple-surface-hover` → `accent/purple-border` (purple now follows the standard border-not-surface-hover pattern). Source CSS vars renamed in `:root` + `.dark` blocks, `action/destructive` alias updated to point at `--color-accent-red`. Foundation Semantics catalog section titles updated (GREEN/YELLOW/RED/etc.). Tailwind class names kept stable (`bg-status-success`, `bg-status-warning`, etc.) — only the underlying CSS var path moved. | Aligns the accent group's naming convention with the primitive palette: each accent variant now reads as `accent/{primitive-name}-{role}` instead of mixing emotional role names (success/error/etc.) with neutral color names (cerulean/pink/etc.). One picker entry per primitive color × role makes the mental model uniform. Tailwind alias keys stay on the emotional names since consumer classes (`bg-status-success`) carry intent — only the var resolution moved. |
| 2026-06 | **Source mirrored to user's Figma Semantic reorg.** Group renames: `status/*` → `accent/*` (entire family), `swatch/*` → `request-status/*`. Token-level renames bake the underlying primitive shade into the name (Figma convention): `text/primary` → `text/primary-900`, `text/secondary` → `text/secondary-700`, `text/muted` → `text/tertiary-500`, `text/on-accent` → `text/white-0`, `text/tile-flag` → `text/icon-800`; `action/danger` → `action/destructive` (+ hover); `action/primary` → `action/primary-500`; `action/primary-hover` → `action/primary-hover-600`; `surface/header-bg` → `surface/nav-950`; `surface/header-active-bg` → `surface/nav-active`. Added: `surface/canvas-400/500`, `action/primary-selected-700`, `action/attention-destructive` (+ hover), `border/info-border` (relocated from accent/info-border). Deleted: `text/heading` (folded into primary-900), `surface/header-text` (→ canvas-300), `surface/header-border` (→ canvas-400), `accent/info-fg` (→ action/primary-hover-600), `action/notification` (→ action/attention-destructive). Tailwind class names stay stable (`text-primary`, `bg-action-primary`, `bg-status-success`, etc.) — the alias values redirect to the new CSS vars so consumer code keeps working. Foundation Semantics catalog rewritten to mirror the new group structure (SURFACE, TEXT, BORDER, ACTION, ACCENT, REQUEST-STATUS). | The user's Figma reorg picked a more designer-friendly naming convention: the primitive shade is embedded in the token name (`text/primary-900` instead of `text/primary`) so designers can read the picker entry and immediately know the underlying value. Semantic role groups (`status/` → `accent/`, `swatch/` → `request-status/`) clarify intent — `accent/` reads as "non-primary visual emphasis", `request-status/` is unambiguously about the request workflow rather than a generic swatch palette. The Tailwind class names stay stable to avoid a massive consumer-class refactor; only the underlying var paths moved. |
| 2026-06 | **`surface/selected-50` + `surface/notification` moved to `action/*` group.** Renamed 2 Figma vars (`surface/selected-50` → `action/selected`, `surface/notification` → `action/notification`). Source CSS vars renamed (`--color-action-selected`, `--color-action-notification`). Tailwind alias class names unchanged (`bg-row-selected`, `bg-notification`) — only the var path moved. Foundation Semantics catalog: moved both rows from SURFACES → ACTION. The action/ group now houses every "interactive surface" token (primary/danger button states + the selected-row + notification-badge backgrounds). | The `action/` group is conceptually "interactive surfaces" — button states, selected-row affordance, notification accent. `surface/selected-50` and `surface/notification` were always interactive (they signal selection / attention) rather than passive page-chrome surfaces. Moving them clarifies the picker mental model: backgrounds in `surface/`, anything that signals "this thing is interactive or demands attention" in `action/`. |
| 2026-06 | **Surface group dedup pass — `surface/sidenav-bg` deleted; overlays fixed.** Three changes: (1) `surface/sidenav-bg` was a 1:1 alias of `surface/header-bg` — true duplicate, deleted from both Figma and source. 8 Figma node bindings rebound to `surface/header-bg` directly. Source Tailwind alias `bg-sidenav-surface` now points to `--color-surface-header-bg`, so consumer classes are unchanged. (2) `surface/sidenav-bg-hover` / `-bg-elevated` / `-border` had Light values bound to neutral primitives (n/100, n/200, n/200) and Dark values as white overlays — inconsistent for an always-dark surface. Fixed to be semitransparent white in BOTH modes (rgba(255,255,255,0.05/0.10/0.08)). Eliminates the "same Light value as surface/canvas-N" cousin-duplicate. (3) The `[data-theme]` override blocks shrunk from full sidenav var sets to just `--color-surface-header-bg` (light=brand/950, dark=neutral/950) — the only mode-distinct value. Surface group: 21 → 20 vars; no remaining same-Light-different-Dark cousins. | The "all dupes" sweep. The literal duplicate (`sidenav-bg` aliasing `header-bg`) was deadweight that confused designers about which token to pick. The cousin-dupes existed because I had originally created the sidenav overlay tokens with the wrong Light values (solid neutral primitives instead of overlays) — fixing them removed both the visual inconsistency (the overlay aesthetic was lost in Light mode) AND the false duplicate signal. The `[data-theme]` blocks no longer need to redeclare every sidenav var because the only thing that meaningfully differs by subtree mode is the underlying header-bg value. |
| 2026-06 | **`header/*` group folded into `surface/header-*`.** 5 Figma vars renamed (`header/bg` → `surface/header-bg`, etc.); existing variable-alias bindings (e.g. `surface/sidenav-bg` → `header/bg`) follow automatically since aliases reference by ID. Source CSS vars renamed `--color-header-*` → `--color-surface-header-*`. Tailwind alias keys + class names unchanged (`bg-header-bg`, `text-header-text`, etc.) — only the CSS var name moved, no consumer code touched. Foundation Semantics catalog updated. Group taxonomy comment now lists no `header/` or `sidenav/` standalone groups — both live under `surface/`. | The user kept asking "why isn't this in the surface group?" — both `header/` and `sidenav/` were always-dark surfaces semantically. Filing them under `surface/` puts every background token in one picker location and removes the "where does this live" lookup tax. The `surface/sidenav-bg` alias to `surface/header-bg` survives the rename intact (Figma resolves aliases by ID), so the consolidation was a one-line semantic edit at the var-name level with zero binding rebinds. |
| 2026-06 | **Sidenav tokens consolidated under `surface/sidenav-*` (not merged into surface/text/border).** The previous fold lost the distinct dark sidebar values (`#1a1d24`, `rgba(255,255,255,0.05/0.08/0.10)` overlays, `#f4f4f6` text) by rebinding to surface/canvas-* / text/* / border/* whose dark values differ. Restored as 7 new vars under the surface group: `surface/sidenav-bg`, `surface/sidenav-bg-hover`, `surface/sidenav-bg-elevated`, `surface/sidenav-border`, `surface/sidenav-text-primary`, `surface/sidenav-text-secondary`, `surface/sidenav-text-muted`. Source CSS vars renamed to `--color-surface-sidenav-*` to match the Figma path. Tailwind class names preserved (`bg-sidenav-surface`, `text-sidenav-fg-primary`, etc.) so consumers don't break. Restored the `[data-theme="light"]` and `[data-theme="dark"]` override blocks so the Sidebar's `theme` prop still toggles a subtree-local light/dark scope. 58 Figma nodes rebound back inside the NavItem + SideNav ComponentSets. | Previous fold was too eager — the sidenav dark values are deliberate (off-white text on a near-black sidebar surface, with semitransparent overlays for hover/elevated). Collapsing into surface/text/border lost that intentionality. Filing under the surface group satisfies the original "consolidate" intent (designers see the dark sidebar shades when opening the surface picker) without sacrificing the distinct token values that make the dark sidebar look right. Tailwind alias preservation means no consumer-class churn — only the CSS var name and Figma var name moved. |
| 2026-06 | **`sidenav/*` group folded into `surface/*` + `text/*` + `border/*`.** All 7 sidenav tokens deleted in both source and Figma: `sidenav/surface` → `surface/canvas-0`, `sidenav/surface-hover` → `surface/canvas-100`, `sidenav/surface-elevated` → `surface/canvas-200`, `sidenav/border` → `border/default`, `sidenav/text-primary` → `text/primary`, `sidenav/text-secondary` → `text/secondary`, `sidenav/text-muted` → `text/muted`. Same Light values; mode-aware token resolution now handled by the `.dark` class scope instead of a separate `[data-theme]` override block. 86 Figma node bindings rebound (62 fills + 24 strokes). Source `Sidebar.tsx` switched from `data-theme={theme}` attribute to `className={theme === 'dark' && 'dark'}` so a dark sidebar inside a light document still works via the same `.dark` scope mechanism the rest of the system uses. Sidebar*.stories.tsx wrappers converted from `data-theme="dark"` → `className="dark"`. The `[data-theme="light"]` + `[data-theme="dark"]` override blocks in `tokens/semantic.ts` removed entirely. | Two parallel "dark-text/surface" token sets were a tax on every designer and developer — "is this sidenav-text-primary or text-primary?" with identical Light values and only marginally different Dark hues. Folding into one canonical set removes the picker confusion and the duplicate maintenance burden, while keeping the per-subtree dark-mode capability via the standard `.dark` class scope (which is how dark mode works everywhere else in the system). The sidebar's themeability is preserved — it just routes through the same mechanism as the document-level dark mode toggle. |
| 2026-06 | **Surface CSS vars renamed to `canvas-{shade}` convention to match Figma.** Source `tokens/semantic.ts` surface variables updated: `--color-surface-canvas` → `--color-surface-canvas-50`, `--color-surface-default` → `--color-surface-canvas-100`, `--color-surface-elevated` → `--color-surface-canvas-0`, `--color-surface-recessed` → `--color-surface-canvas-200`, `--color-surface-pressed` → `--color-surface-canvas-300`, `--color-surface-row-selected` → `--color-surface-selected-50`. `--color-surface-scrollbar` deleted — folded into `--color-surface-canvas-300` (both = neutral/300 light). Tailwind ALIAS class names unchanged (`bg-canvas`, `bg-surface`, `bg-elevated`, etc. still work everywhere) — only the underlying CSS var they reference changed. Source TS + token gate stay clean. | The Figma Semantic collection had been manually renamed to `surface/canvas-{shade}` to surface the underlying primitive shade in the variable name (designers can read "canvas-200" and know it's neutral/200). Aligning source CSS vars to match removes the parity drift while preserving consumer ergonomics — `.tsx` files keep using `bg-canvas`/`bg-surface`/etc., they just bind to a renamed CSS var underneath. The scrollbar dark value changes from `#3a3e48` to `#2e2e36` as a minor side-effect — small enough to be invisible on the scrollbar thumb. |
| 2026-06 | **status/error-hover moved to action/danger-hover; action/ becomes the home of all button-state colors.** Previously `status/error-hover` was the only "*-hover" token in the `status/` group — an asymmetry caused by Button.tsx having a `danger` variant but no `success`/`warning`/etc. button variants. Fixed by moving the hover token into the `action/` group (which already housed `primary` + `primary-hover`) and adding `action/danger` as a Figma alias to `status/error` so designers building danger buttons see base + hover side-by-side in one picker location. `status/error` stays where it is for the danger ICON role. 28 Figma node bindings rebound. action/ group: 2 → 4 vars; status/ group: 37 → 36 vars; total: 75 → 76 (net +1 from the action/danger alias). | The `status/` group now contains only flat-color accent tokens (icons + dots) — no hover states. The `action/` group contains all button-state base+hover pairs (primary, danger). Designer mental model: "Building a button?" → look in action/. "Building an icon or dot?" → look in status/. The action/danger alias means designers don't have to "remember" that danger buttons use status/error for their base — both names show up adjacent in the picker. |
| 2026-06 | **`indicator/*` group eliminated; bumped to -500 hue.** Previously, small status dots used `-400` shades (set in task #226 to "lighten" them against the muted source palette), while every status icon, button, and badge used `-500`. This created exactly the picker-confusion problem the user kept flagging: "why is the indicator a different green than the status?" Fixed in one pass: (1) bumped all 9 indicators from -400 → -500. (2) The 4 that now matched existing tokens (brand/success/warning/error) folded into their counterparts (`action/primary`, `status/success`, `status/warning`, `status/error`); 5 Figma node bindings rebound. (3) The remaining 5 (attention/cerulean/purple/pink/eggplant) renamed to `status/*` flat accents — they now live in the same group as success/warning/error. Result: `indicator/` group is gone entirely; every "small status dot" pulls from `action/primary` or a `status/*` flat -500 accent. 79 → 75 Semantic vars. | A designer no longer has to think "is this a dot or an icon?" — they're the same color. The picker now has ONE green for "anything success", ONE red for "anything error", and so on. The StatusDot component's variant names are unchanged (stable API), but its color map points to the canonical status/* tokens internally. The remaining 5 standalone accents (attention, cerulean, purple, pink, eggplant) didn't have status counterparts at -500, so they were promoted into the status/ group as new flat accents — joining success/warning/error/error-hover. The picker for "status accents" is now the single source of truth for all flat-color icons and dots. |
| 2026-06 | **Round 2 consolidation: row-hover → surface/default, tile/* → swatch/*, drop orphan meta-unread.** Three more cleanups: (1) `surface/row-hover` (neutral/100) collapsed into `surface/default` — both were "subtle interactive surface" with identical Light values; 7 Figma node bindings rebound. List rows now hover to `bg-surface`. (2) `tile/*` group renamed to `swatch/*` (Figma rename by user — source synced to match). The name "swatch" is more accurate for FilterSwatch fills than "tile". (3) `text/meta-unread` deleted — had 0 production consumers (the only intended usage in RequestRow ended up using `text-primary` for unread emphasis directly). 81 → 79 Semantic variables. | Continued the "same-Light-different-Dark" cleanup the user requested. surface/row-hover was the duplicate of surface/default for hover treatments; one token now serves both list-row hovers and ghost-button hovers. The tile→swatch rename came from the user (renamed in Figma directly) — it matches what these colors are actually used for: filling FilterSwatch palette swatches. meta-unread was speculative scaffolding that never got adopted. |
| 2026-06 | **Brand-cluster collapse — `action/primary` is the canonical brand-blue token.** Four tokens that all resolved to `brand/500` in Light mode (`action/primary`, `border/row-selected`, `indicator/unread`, `status/outstanding`) collapsed into one — `action/primary`. The token's scopes were broadened to `FRAME_FILL + SHAPE_FILL + STROKE_COLOR + TEXT_FILL` so it can be picked for any role (button fills, row-accent strokes, indicator dots, status icon text). Dark value collapsed to a single `#6098E0` (brand-blue) — previously diverged per role (gray `#C4C7D0` for buttons, muted `#72758A` for row borders, brand-blue `#6098E0` for unread dots, gray `#3A3E48` for outstanding-status). Also collapsed `status/info-surface` → `surface/row-selected` (both `brand/50` Light) — info alerts and selected-row treatments share the subtle-blue surface. 335 Figma node bindings rebound to survivors; 4 vars deleted (85 → 81). | A designer asked "how am I supposed to know to use blue/500 in `action/` vs blue/500 in `status/`?" — they're not, because in Light mode they're identical. The 4-way fork existed solely so Dark mode could express different intent per role, but the per-role Dark divergence was inconsistent (some kept brand-blue, others went gray) and never surfaced as a deliberate visual design choice. Collapsing to one `action/primary` token (with one Dark value) gives designers a single picker entry for "the brand-primary fill/stroke/icon color" regardless of context — which is how they were thinking about it anyway. The scope-broadening means the same token works in any picker (Figma's stroke picker now shows action/primary). The `status/info-surface → surface/row-selected` merge follows the same logic: a subtle-blue surface is a subtle-blue surface, no matter whether it backs an info alert or a selected list row. Trade-off: lose per-role Dark mode variations; gain a much cleaner designer mental model. |
| 2026-06 | **`nav/*` group renamed to `header/*`.** All 5 top-nav-chrome tokens (`nav/bg`, `nav/border`, `nav/active-bg`, `nav/hover-bg`, `nav/text`) renamed to `header/*` to disambiguate from `sidenav/*`. Source CSS vars, Tailwind aliases, and Figma vars all updated; no behavioral change. | The "nav" name collided semantically with `sidenav` — designers had to read carefully to know which was which. `header` is the more universal name for the always-dark top chrome that doesn't change per theme. |
| 2026-06 | **Semantic consolidation pass after rename.** Merged 2 duplicate-purpose token pairs and fixed 1 Figma binding bug: (1) `indicator/info` folded into `indicator/brand` — same Light value (brand/400), both rendered as blue in Dark; only consumer was StatusDot's `info` variant which was dropped (no production consumers used it). (2) `surface/accordion-hover` folded into `surface/pressed` — same Light value (neutral/300); the accordion-hover Dark value had accidentally collapsed to canvas (#111114), making the hover invisible. 38 unique Figma nodes rebound from accordion-hover→pressed. (3) `nav/hover-bg` Light was incorrectly aliased to `neutral/0` (solid white) in Figma — fixed to raw `rgba(255,255,255,0.08)` to match source (semi-transparent overlay over the always-dark nav). Net: 84 → 82 Semantic variables, with cleaner role separation. | The rename pass surfaced redundancies that the old `bg/`-vs-`row/`-vs-`accordion/`-vs-`dot/` taxonomy hid. Once everything lived in role-first groups (`surface/`, `indicator/`, `text/`, `border/`), the duplicates became visually obvious. Folding them preserved every distinct color in both modes while reducing the picker surface area for designers. The `nav/hover-bg` bug was previously masked by the Light-mode raw-hex consolidation pass — when Light values were forced to alias Primitives, this token aliased to `neutral/0` (white) because no `neutral/0-with-8%-alpha` Primitive existed; the fix is to keep the semitransparent Light value as a raw rgba (alpha tokens can't alias flat primitives). |
| 2026-06 | **Semantic tokens reorganized into a universal role-first architecture.** Renamed CSS vars to industry-standard groupings: `--color-bg-*` → `--color-surface-*`, `--color-fg-*` → `--color-text-*`, `--color-line*` → `--color-border-*`, `--color-dot-*` → `--color-indicator-*`, `--color-sidenav-fg-*` → `--color-sidenav-text-*`. Folded former orphan groups (scrollbar, notification, accordion-hover, row-bg/hover/selected, hover-overlay, scrim) into `surface/`. Kept `tile/` separate (large status swatches) but renamed `dot/` → `indicator/` to disambiguate small status indicators from large tiles. Folded `bg/pressed` and `notification/bg` into `surface/`. Tailwind aliases use the SHORT role (utility prefix implies group): `bg-canvas`, `text-primary`, `bg-row-hover`, `bg-indicator-unread`. Borders kept ergonomic with the `line` alias (`border-line`, `ring-line-focus`) instead of `border-default` — avoids the awkward `border-border-default` class. ~17 files touched in source; CLAUDE.md token quick-reference + Figma↔Tailwind mapping tables updated to match. | The previous grouping (`bg/*`, `fg/*`, `line*`, `row/*`, `dot/*`, `notification/*`, `scrollbar/*`, `accordion/*`) accumulated organically over months and mixed organism-specific role names (`accordion-hover`, `row-bg`) with broad architectural categories (`bg/canvas`). Aligning to industry conventions (M3 surface/text/border, Carbon background/border/text, GitHub Primer canvas/fg/border) makes the system legible at a glance and removes the need to remember which token lives in which orphan group. The `indicator` vs `tile` split — borrowed from how the design system actually uses status colors — preserves the meaningful semantic distinction between "small dot at -400 lightness" and "large filled swatch at -300 lightness" without forcing them into an artificial shared group. CSS vars carry the industry-standard semantic names; Tailwind aliases stay terse because they're written hundreds of times across the codebase. |
| 2026-06 | **Select component deleted — consolidated into Dropdown + ActionMenu composition.** The `<Select>` form-control was a thin wrapper around `<Dropdown>` (popover behavior) + `<ActionMenuItemRow>` (option rows) + an input-shaped trigger. Zero source consumers in the codebase. Both source files (`components/forms/Select.tsx`, `Select.stories.tsx`) deleted, removed from `forms/index.ts` barrel, Figma `Select` ComponentSet (539:97) deleted from page 76:26 with the page description updated to point to the Dropdown + ActionMenu composition pattern. | Rule 6 — one source of truth per component. The "form-control" concerns Select added (label / error / value↔text / multi-select checkbox / search bar / group collapse) had no real consumer pulling on them; the canonical popover + canonical menu rows already cover the use cases that actually exist. Anyone needing a form-shaped value picker can compose `<Dropdown trigger={inputButton}><ActionMenu ... /></Dropdown>` directly. Frees us from maintaining two parallel paths to the same visual. |
| 2026-05 | **Figma LAYOUT section is composition scaffolding, not pixel-pinned canonicals.** Pages under the `━━ LAYOUT ━━` divider (`AppShell`, `Container`, `DetailPanel`, `ListPanel`, `MasterDetailLayout`, `PanelGroup`, `PanelHeader`, `ScrollArea`, `ThreeColumnLayout`, `Inset`, `Stack`, `Grid`, `Divider`) exist for **rapid 0-1 prototyping** — they show *where* atoms/molecules sit (slot names, proportions, header/sidebar/main grammar), not the exact pixels of any single instance. **Source** owns the implementation + token compliance. **Figma** owns the slot grammar with placeholder demo content. **Matrix** stories lock the slot dimensions/positions, NOT the placeholder content inside. When reconciling a LAYOUT page, treat content inside slots as illustrative and focus drift checks on slot count / proportions / header-height enums / responsive breakpoints. | Layout primitives are scaffolds: agents (and humans) drop atom/molecule components into them when bootstrapping a new screen. Holding them to the same pixel-pinning bar as `Button` or `RequestRow` is the wrong test — what matters is that the slot grammar (named slots, dimensions, hierarchy) matches between source and Figma so Claude knows "header goes here, sidebar there, main is flex-1." Frees the reconciliation workflow to focus on token compliance + slot fidelity rather than chasing demo-content drift. |
| 2026-05 | **Color + typography audit performed across all components. System-fonts-only rule restored.** Source: 6 violations fixed (`text-sm`→`text-body-md`, `rounded-lg`→`rounded-card`, `text-white`→`text-fg-on-accent`, `bg-black/40`→new `bg-scrim` token). Figma: 277 text nodes auto-converted from Inter (Google webfont) → SF Pro (system font); 531 nodes newly bound to Type Scale styles; 55 paint fills/strokes auto-bound to Semantic variables. Logo brand vectors in `TopNav` (#576FCF, black) deliberately kept hardcoded as fixed brand identity. | The "system fonts only" rule had drifted — many Figma components had been authored in Inter at non-standard sizes (e.g., Checkbox label at 15px). Auto-fix snapped each unmatched text node to the nearest defined Type Scale style, restoring source-of-truth alignment with `tokens/typography.ts`. New `--color-scrim` token added (Light: `rgba(0,0,0,0.40)`, Dark: `rgba(0,0,0,0.60)`) for modal/drawer backdrops. |
| 2026-05 | **Project knowledge and `CLAUDE.md` re-merged into a single canonical document.** Both files now contain the full LSDS context AND the dark-mode + Figma authoring rules. | The two files had drifted: project-knowledge held architectural context, CLAUDE.md held authoring rules. Re-merging restores the original intent ("identical content in both places") so both Claude.ai planning sessions and Claude Code execution sessions start from the same baseline. |
| 2026-05 | **`line-focus` and `action-primary` are split in light mode.** Light: `--color-line-focus` = `brand[300]` (#5B9EF5), `--color-action-primary` = `brand[500]` (#0E5AE1). Dark: already split (`brand[200]` vs near-white gray `#c4c7d0`). | Focus rings (keyboard accessibility) and selected/primary indicators (pressed state) must be visually distinguishable in both modes. They were identical in light mode (both `brand[500]`), causing FilterSwatch Focus and Selected to look the same. The lighter `brand[300]` reads as a softer focus indicator while `brand[500]` keeps its vibrancy for primary actions. |
| 2026-05 | **All interactive primitives ship hover, focus, and disabled Figma variants.** Button gains `Focus`; Input + Search gain `Hover` + `Focus`; FilterSwatch gains `Disabled` + `Focus`. Selected was intentionally excluded from Button/Input/Search since it has no semantic in those primitives' source code. | Earlier the State coverage was uneven across primitives — hard for designers and engineers to grep an interactive state and find a working canonical. Mirroring the React source's actual state vocabulary into Figma keeps the two surfaces aligned (source-of-truth). Display-only primitives (Avatar, Badge, CountBadge, NotificationBadge, Timestamp, Icon) deliberately do not get state variants. |
| 2026-03 | **Project knowledge mirrors `CLAUDE.md` in the repo.** Same file content lives in Claude.ai project knowledge and at `./last-samurai/CLAUDE.md`. | Both surfaces read identical context. New sessions in either Claude.ai or Claude Code start aligned without re-explaining. |
| 2026-03 | **AppShell wraps `react-resizable-panels`** instead of building from scratch (Option B). Expose `<AppShell>`, `<Panel>`, `<ResizeHandle>` as LSDS primitives + a `usePanels()` hook for opening/closing additive panels. | Library handles the hard parts (drag math, min/max constraints, keyboard a11y). LSDS owns the visual API and naming. We are not in the business of building a resize engine. |
| 2026-03 | **System fonts only** — no Google Fonts, no custom WOFF imports. | Fast, no FOIT/FOUT, consistent with native OS rendering, zero licensing concerns. |
| 2026-03 | **Code is the source of truth, Figma is a reflection.** Sync flows code → Figma, never reverse. | Designers can iterate on tokens in TypeScript, Claude rebuilds, `figma:sync` updates Figma. Eliminates the spec-vs-implementation drift problem. |
| 2026-03 | **Tailwind utilities only — no CSS Modules, no styled-components.** | Keeps the surface area small, makes Claude-generated components predictable, leverages Tailwind's built-in design constraints. |
| 2026-03 | **Project name: Last Samurai (LSDS).** | — |

---

## How Claude Should Work on LSDS

When asked to **design or build a component**:
1. Reference tokens, never raw values.
2. Produce both the component file and the stories file.
3. Default to accessibility (focus, ARIA, keyboard).
4. Use `cva` for variants when the component has more than one visual state.
5. Ask before adding a new dependency.

When asked to **generate a Claude Code prompt**:
- Structure as a paste-ready block below a `---` separator.
- State the goal, the files to create, the conventions to follow, and what to print/run when done.
- Reference "LSDS conventions" rather than re-listing them — this doc is the source.
- Tell the user where to paste it (Claude Code, in the `./last-samurai/` directory).

When asked to **make a token change**:
- Update the relevant `tokens/*.ts` file.
- Note that `figma:diff` should be run before `figma:sync` to preview changes.
- Add a row to the Decisions Log if the change reflects a philosophical shift, not just a value tweak.

When asked to **add a decision to the log**:
- Append a row at the top of the Architectural Decisions Log table.
- Tell the user to update both surfaces: re-upload to project knowledge AND update `CLAUDE.md` in the repo.

---

## Session Starters (Paste-Ready)

Copy-paste prompts to kick off new sessions productively.

### Starting a new Claude.ai planning session
```
I'm continuing work on LSDS (Last Samurai Design System). Read the project knowledge file for context. Today I want to: [WHAT YOU WANT TO DO]
```

### Drafting the next component prompt
```
Draft a Claude Code prompt for building [COMPONENT_NAME] in the [FOLDER] category. Follow LSDS conventions. Make it paste-ready below a --- separator.
```

### Making a token change
```
I want to change [TOKEN]. Walk me through:
1. The exact file edit
2. Whether this needs a Decisions Log entry
3. The figma:diff → figma:sync sequence
```

### Logging a new decision
```
Add a Decisions Log entry: [DECISION + RATIONALE]. Then output the updated full file so I can re-upload it and update CLAUDE.md.
```

### Resuming AppShell work
```
Continuing AppShell. Last state: chose Option B (react-resizable-panels wrapper) with <AppShell>, <Panel>, <ResizeHandle>, usePanels() hook. Next step is [WHAT].
```

---

## Figma Sync Contract

- Auth: Personal Access Token in `.env` as `FIGMA_TOKEN`. File ID as `FIGMA_FILE_ID`. Never hardcoded.
- Token → Figma Variable mapping:
  - `colors.*` → COLOR variables in "Colors" collection
  - `typography.*` → STRING variables in "Typography" collection
  - `spacing.*` → FLOAT variables in "Spacing" collection
  - `radii.*` → FLOAT variables in "Radii" collection
- Scripts:
  - `npm run figma:diff` — preview what would change
  - `npm run figma:sync` — push to Figma

---

## Open Questions / TBD

- Brand colors not yet defined — currently using Tailwind defaults. Will revisit after layout phase is complete.
- Whether to publish LSDS to a private npm registry or keep as a workspace package — TBD after Phase 8.
- Dark mode strategy — not yet scoped. Likely class-based (`dark:` variants) once tokens are finalized.

---

## Maintenance Checklist

When this file changes:
- [ ] Save the new version
- [ ] Re-upload to Claude.ai project knowledge (replaces the old one)
- [ ] Copy the same content into `./last-samurai/CLAUDE.md` and commit
- [ ] If a decision was added, double-check it landed in the Decisions Log table
- [ ] If phase status changed, double-check the 8-Phase Build Plan reflects it
