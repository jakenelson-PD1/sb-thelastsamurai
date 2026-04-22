# Sidebar & TopNav Revamp — Design Spec

**Date:** 2026-04-22
**Scope:** Evolve `Sidebar` from a fixed-shape items list into a slot-based shell that supports the production engagement-request-navigator pattern (status chips with dropdowns, filter chip sub-menus, accordion sections, rich rows with hover actions and overflow menus). Add Dark + Light theme variant axis. Fix TopNav Figma content to match the already-correct React source.

**Reference screenshots:** production `TopNav` and `Sidebar` supplied by user earlier in this session.

---

## Goal

One compositional Sidebar shell that covers both the current simple nav-list use case and the production engagement-request-navigator use case, with identical primitives — no second sidebar component, no forks, no config-driven renderers. Plus a Figma TopNav content fix so the design library matches source.

## Architecture

**Slot-based compound component.** `Sidebar` becomes an outer shell that renders children freely. Named sub-components (`SidebarHeader`, `SidebarToolbar`, `SidebarSection`, `SidebarRow`, `SidebarFilterChip`, `SidebarStatusChip`) compose inside it. Consumers assemble their navigator from these primitives — same pattern as `DetailPanel` / `ListPanel` / `PanelHeader` already use in the layout layer.

**Theme as a variant axis.** `theme: 'dark' | 'light'`, default `'dark'` (matches production). The prop sets `data-theme` on the Sidebar root; CSS scopes semantic-token overrides accordingly. No component reads the prop for its own styles — everything binds to `nav-*` semantic tokens that flip automatically under the theme selector. In Figma the same `Theme = Dark | Light` axis exists on every new ComponentSet and is wired to the Semantic variable collection's mode switch.

**Rule 6 compliance.** No new primitives are forked. Status chips, filter chips, overflow menus, hover actions, and accordion chevrons all compose existing components (`Badge`, `IconButton`, `Button`, `ActionMenu`, `Dropdown`, icons from the Icons page). In Figma everything is a `createInstance()` of a canonical ComponentSet.

## Tech Stack

- React 19, TypeScript
- Tailwind with the existing semantic token layer (Primitives → Foundations → Semantics)
- Storybook for component coverage (no Jest/Vitest — matches the rest of `components/`)
- Figma plugin scripts via the design system's MCP integration (file key `ZP0lSeT5Nwm1lpWI79qIaf`)

---

## Components

### `Sidebar` (shell)

```tsx
export interface SidebarProps {
  theme?: 'dark' | 'light';        // default 'dark'
  width?: number | string;          // default 320
  ariaLabel?: string;               // default 'Sidebar'
  className?: string;
  children: React.ReactNode;
}
```

- Outer container: `flex flex-col h-full bg-nav-surface`
- Sets `data-theme={theme}` on the root element for CSS token scoping
- `role="navigation"` with `aria-label={ariaLabel ?? 'Sidebar'}`
- No internal structure beyond the flex column — children (Header / Toolbar / Body / Footer) are laid out in order

### `SidebarHeader`

```tsx
export interface SidebarHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;           // leading icon, rendered inside a small rounded square
  backHref?: string;                // renders as <a>
  onBack?: () => void;              // alternative trigger; if both provided, onBack wins
  actions?: React.ReactNode;        // slot for trailing IconButtons
  className?: string;
}
```

- Layout: `flex items-center gap-2 px-3 py-3 border-b border-nav-border`
- Back caret (when `backHref` or `onBack` provided): `IconButton` with `ChevronLeftIcon`, aria-label "Back"
- Icon badge: `h-7 w-7 rounded-card bg-nav-surface-hover flex items-center justify-center shrink-0`
- Title column: `flex-1 min-w-0`
  - title: `text-body-md font-semibold text-nav-fg-primary truncate`
  - subtitle: `text-label-sm text-nav-fg-muted truncate`
- Actions slot: `flex items-center gap-1 shrink-0`

### `SidebarToolbar`

```tsx
export interface SidebarToolbarProps {
  className?: string;
  children: React.ReactNode;
}
```

- Passthrough container: `flex flex-wrap gap-2 px-3 py-2 border-b border-nav-border`
- Typically holds a grid of `SidebarFilterChip`s, but accepts any content

### `SidebarFilterChip`

```tsx
export interface SidebarFilterChipProps {
  label: string;
  color: 'brand' | 'yellow' | 'green' | 'red' | 'neutral';
  count?: number;                   // rendered after label as " · 12"
  active: boolean;
  onToggle: () => void;
  subMenu?: React.ReactNode;        // typically an ActionMenu; omit for simple toggle
  className?: string;
}
```

- Shape: colored dot + label (+ optional ` · count`) + optional chevron
- Inactive: `bg-transparent text-nav-fg-secondary`; active: `bg-nav-surface-hover text-nav-fg-primary`
- Two click zones when `subMenu` is provided:
  - Click on chip body → `onToggle()`
  - Click on chevron (rendered inline as its own `<button>`, not via `Dropdown`'s built-in chevron slot, so the two click targets stay separable) → opens `subMenu`
- `Dropdown` is still used internally to anchor and portal the sub-menu; we just render our own chevron trigger instead of using its default
- Without `subMenu`: chevron omitted, whole chip is one click target

### `SidebarSection`

```tsx
export interface SidebarSectionProps {
  title: string;
  count?: number;                   // plain muted count; matches production's lighter treatment
  icon?: React.ReactNode;
  actions?: React.ReactNode;        // hover-reveal by default
  defaultOpen?: boolean;            // uncontrolled; default true
  open?: boolean;                   // controlled
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
}
```

- Header row: `flex items-center gap-1.5 px-3 py-1.5 cursor-pointer group rounded-control`
  - Chevron: `ChevronDownIcon`, rotated `-90deg` when closed, `text-nav-fg-muted shrink-0 transition-transform`
  - Icon (optional): `shrink-0`
  - Title: `flex-1 text-label-md font-semibold text-nav-fg-secondary truncate`
  - Count: `text-label-sm text-nav-fg-muted shrink-0` (plain, not a Badge)
  - Actions: `opacity-0 group-hover:opacity-100 transition-opacity`
- Body: wrapped in a div with `max-height` + opacity transition for collapse/expand
- Nesting allowed — sections render sections
- Keyboard: header is `role="button" tabIndex={0}`; Enter/Space toggles. Arrow-key navigation across section bodies is **out of scope** — Tab/Shift-Tab via native focus order is the only traversal contract. (Arrow-key navigation can be added later as a non-breaking enhancement; leaving it out keeps the initial implementation simple and avoids imposing a specific traversal model before consumers ask for one.)

### `SidebarRow`

```tsx
export interface SidebarRowProps {
  title: string;
  onSelect?: () => void;

  // Visual state
  active?: boolean;
  disabled?: boolean;

  // Optional decorations
  leading?: React.ReactNode;        // typically <SidebarStatusChip />
  index?: number;                   // small muted number before title
  subtitle?: string;                // second-row meta line
  trailing?: React.ReactNode;       // typically <Badge /> with a count
  hoverActions?: React.ReactNode;   // fade-in on row hover
  overflowMenu?: React.ReactNode;   // permanently visible ⋯ trigger

  className?: string;
}
```

**Layout**

```
┌────────────────────────────────────────────────────────────┐
│ [chip] 3  Q4 Tax Return         [avt][💬][🏳]  [5]  ⋯     │
│         Due Dec 15 · Assigned to Alex                       │
└────────────────────────────────────────────────────────────┘
```

- Container: `flex flex-col gap-0.5 px-3 py-2 rounded-control group`, `role="button" tabIndex={0}`
- Primary row: `flex items-center gap-2`
  - leading (shrink-0)
  - index (shrink-0, `text-label-sm text-nav-fg-muted w-5 text-right`) — only when `index` provided
  - title: `flex-1 min-w-0 text-body-sm font-medium text-nav-fg-primary truncate`
  - hover-action cluster: `flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity`
  - trailing (shrink-0) — typically a Badge
  - overflow menu trigger: `shrink-0` (always visible per scope decision)
- Subtitle row (only when `subtitle` provided): `ml-[calc(leading-width+gap)] text-label-sm text-nav-fg-muted truncate`

**Click-target split**

Row is the default click target; interactive sub-elements stop propagation.

| Click target | Behavior |
|---|---|
| Row body (including title and any non-interactive zone) | Fires `onSelect()` |
| Leading chip (`SidebarStatusChip`) | Opens its picker. Does **not** fire `onSelect` |
| Any `hoverActions` child | That action fires. Does **not** fire `onSelect` |
| Overflow menu trigger | Opens the menu. Does **not** fire `onSelect` |
| Trailing Badge (display-only) | No action |

Implementation: sub-elements are real `<button>`s that call `e.stopPropagation()` in their handlers. The row itself is `role="button" tabIndex={0}` with `onClick` → `onSelect()` and `onKeyDown` handling Enter/Space.

**States**

| State | Dark | Light |
|---|---|---|
| Default | `bg-transparent text-nav-fg-secondary` | same token names; CSS flips via `data-theme` |
| Hover | `bg-nav-surface-hover` + reveal hover-actions | same |
| Active | `bg-nav-surface-elevated` + 2px `border-l-action-primary` + `text-nav-fg-primary` | same |
| Focus-visible | `ring-2 ring-action-primary` on whichever element has focus | same |
| Disabled | `opacity-40 pointer-events-none` | same |

### `SidebarStatusChip`

```tsx
export interface SidebarStatusChipOption {
  value: string;
  label: string;
  color: SidebarFilterChipProps['color'];
}

export interface SidebarStatusChipProps {
  value: string;                    // controlled current value; must match one of options[].value
  options: SidebarStatusChipOption[];
  onChange: (value: string) => void;
  className?: string;
}
```

- Fully controlled — consumer owns the current value. Label and color are derived from `options.find(o => o.value === value)` so the chip always stays in sync.
- Shape: colored dot + label + chevron, rendered as a `<button>`
- Click → opens an `ActionMenu` (via `Dropdown`) listing `options`; each option renders the same colored-dot + label treatment; the option matching `value` shows a check
- `onChange(value)` fires when user picks an option; closing without selection calls nothing
- Uses only existing primitives internally (Rule 6)

### `Sidebar.Footer` (optional)

A plain passthrough container `px-3 py-2 border-t border-nav-border`. No dedicated export; just a convention documented in stories. If it turns out consumers want a typed wrapper we add one in a follow-up — YAGNI for now.

---

## New semantic tokens (nav-* namespace)

Added to the Semantic collection in both the `last-samurai` Tailwind/CSS layer and Figma variable collection. Both modes bound.

| Token | Purpose | Light mode | Dark mode |
|---|---|---|---|
| `nav-surface` | Sidebar outer background | existing `canvas` | new dark gray (~`#1a1d24`) |
| `nav-surface-hover` | Row / section hover background | existing `surface` | ~`rgba(255,255,255,0.05)` equivalent |
| `nav-surface-elevated` | Active row background | existing `surface` | ~`rgba(255,255,255,0.10)` equivalent |
| `nav-border` | Internal dividers (header, toolbar) | existing `line` | dark-theme divider gray |
| `nav-fg-primary` | Titles | existing `fg-primary` | near-white |
| `nav-fg-secondary` | Subtitle / section headings | existing `fg-secondary` | warm gray |
| `nav-fg-muted` | Counts, chevrons, supplementary text | existing `fg-muted` | cool gray |

**Why a dedicated `nav-*` namespace.** Sidebar chrome uses dark-theme-on-light-app-surface treatments that don't map onto general-purpose surface tokens. The existing `nav-active-bg` / `nav-hover-bg` / `nav-text` tokens used by TopNav already establish this pattern — we're extending it.

**Dark-mode color derivation.** Exact hex values are derived from the production screenshot during the implementation phase (eyedropper on screenshot, tweaked against the rest of the palette). Acceptance criteria:

- Each derived color is within ΔE00 ≤ 3 of the corresponding pixel on the production screenshot (perceptual match)
- The resulting palette passes WCAG AA contrast against `nav-fg-primary` / `nav-fg-secondary` / `nav-fg-muted` on every surface token (`nav-surface`, `nav-surface-hover`, `nav-surface-elevated`)
- Values are committed to the Semantic collection (both Tailwind/CSS source and Figma variables) in the same task that introduces the tokens

---

## TopNav content fix (Figma-only)

No React changes — `components/navigation/TopNav.tsx` source is already correct. Existing TopNav ComponentSet in Figma (current state shows 3 generic labels, no icons) gets rebuilt to match source:

- 5 items in order: **My firm** / **Team** / **Clients** / **Engagements** / **Secure File Sharing**
- Each item uses the correct icon instance from the Icons page: `building-01`, `users-01`, `user-circle`, `briefcase`, `send-01`
- Active item: `nav-active-bg` + `fg-on-accent` tokens (already defined)
- Hover item: `nav-hover-bg` + `fg-on-accent`
- Default item: `nav-text`
- Logo on left, empty right slot reserved for future use
- No variant axis changes — a single variant replacing the current generic content

---

## Figma ComponentSet variant strategy

Six new ComponentSets, plus the TopNav content fix. Variant counts kept pragmatic — common combinations get presets; rare combinations are handled via instance-level show/hide overrides on child layers, not Cartesian variants.

| ComponentSet | Axes | Variants |
|---|---|---|
| `Sidebar` (shell) | `Theme = Dark \| Light` | 2 |
| `SidebarHeader` | `Theme × Variant` where Variant = `Default \| WithBack \| WithActions \| WithBackAndActions` | 8 |
| `SidebarRow` | `Theme × State` where State = `Default \| Hover \| Active \| Disabled` | 8 |
| `SidebarSection` | `Theme × State` where State = `Open \| Closed` | 4 |
| `SidebarFilterChip` | `Theme × Active × SubMenu` (each 2-state) | 8 |
| `SidebarStatusChip` | `Theme` (dot color set via instance-level color style override) | 2 |

**Total:** 32 new variants across 6 new ComponentSets, plus the 1 TopNav content fix.

**Why this shape.** Row and Header get variant presets for their most common layouts. Optional decorations (subtitle, badge, count, hover-actions, icon) live as toggleable child layers inside each variant — designers show/hide via the right-panel properties rather than navigating a huge variant matrix. This mirrors how `Button` handles `Icon = None | Start | End | Only` internally as child-layer visibility.

**Rule 6 compliance (critical).** Every sub-element inside these variants — every chip, icon, button, menu — is a `createInstance()` of a canonical ComponentSet. The plugin scripts will not build any of these from raw rectangles or text nodes.

---

## Click-target & keyboard specification summary

| Element | Primary click | Secondary click | Keyboard |
|---|---|---|---|
| `SidebarRow` body | `onSelect()` | — | Enter/Space fires `onSelect()`; Tab moves to chip → hover actions → overflow (DOM order); Escape closes any open menu |
| `SidebarRow` leading (`SidebarStatusChip`) | Opens status picker | — | Enter/Space opens; arrow keys navigate options; Escape closes |
| `SidebarRow` hover action | That action | — | Reveals via focus-within even without hover; individually Tab-focusable |
| `SidebarRow` overflow ⋯ | Opens ActionMenu | — | Enter/Space opens; arrow keys navigate; Escape closes |
| `SidebarFilterChip` body | `onToggle()` | — | Enter/Space toggles |
| `SidebarFilterChip` chevron | Opens sub-menu | — | Enter/Space opens |
| `SidebarSection` header | Toggles open/closed | — | Enter/Space toggles |

All focusable elements get `ring-2 ring-action-primary` in the focus-visible state.

---

## Migration

Current `<Sidebar items={SidebarItem[]} />` API is a **breaking change** — replaced by the compound API above. Codebase grep (this session) shows no call sites outside `components/navigation/Sidebar.{tsx,stories.tsx}` and `components/navigation/index.ts`, so the rewrite is clean. `Sidebar.stories.tsx` is rewritten alongside the source file in the same commit.

If future call sites emerge before implementation lands, the codemod is trivial: `items.map(i => <SidebarRow title={i.label} onSelect={() => navigate(i.href)} active={i.active} />)`.

Exports from `components/navigation/index.ts` change from `Sidebar, SidebarProps, SidebarItem` to `Sidebar, SidebarProps, SidebarHeader, SidebarHeaderProps, SidebarToolbar, SidebarToolbarProps, SidebarSection, SidebarSectionProps, SidebarRow, SidebarRowProps, SidebarFilterChip, SidebarFilterChipProps, SidebarStatusChip, SidebarStatusChipProps, SidebarStatusChipOption`.

---

## Storybook coverage

New `.stories.tsx` files under `components/navigation/`:

- `Sidebar.stories.tsx` (rewritten)
  - `Default` — realistic mid-size tree: header + toolbar with 4 filter chips + 2 sections with 5–8 rows each
  - `Minimal` — header + body with rows only, no toolbar, no sections
  - `LightTheme` — Default content with `theme="light"`
  - `ProductionReplica` — pixel-for-pixel replica of the production screenshot
- `SidebarRow.stories.tsx` — `Minimal`, `WithStatusChip`, `WithSubtitle`, `WithHoverActions`, `WithOverflowMenu`, `FullyLoaded`, `ActiveState`, `DisabledState`
- `SidebarSection.stories.tsx` — `Default`, `Nested`, `WithActions`, `Collapsed`
- `SidebarFilterChip.stories.tsx` — `Default`, `Active`, `WithSubMenu`, `Grid`
- `SidebarStatusChip.stories.tsx` — `Default`, `AllColors`, `Controlled`
- `SidebarHeader.stories.tsx` — `Default`, `WithBack`, `WithActions`, `WithSubtitle`, `Full`

The `Sidebar.stories.tsx` `Default` story demonstrates the `Sidebar.Footer` convention (plain `<div>` as the last child of `<Sidebar>`) so consumers see the pattern without needing a typed wrapper.
- `TopNav.stories.tsx` — existing; no changes required (source is correct; stories should already reflect it)

No Jest/Vitest tests added — matches the rest of `components/`. Visual coverage via Storybook stories.

---

## Non-goals

- **No v1/v2 parallel API.** Sidebar is rewritten in place. Design system is in active iteration; breaking changes are accepted.
- **No TopNav React changes.** Source matches production; scope is Figma content only.
- **No new primitives for the status-chip dropdown.** Composition of existing `Dropdown` + `ActionMenu` handles it.
- **No theming beyond dark + light.** No high-contrast, print, or reduced-motion variants in this spec. If needed later they layer on via additional `data-theme` values without changing the component API.
- **No Jest/Vitest coverage** for this layer. Storybook is the visual-regression surface.
- **No drag-reorder, inline-rename, multi-select, or section-header action menus** in this spec. User scoped those out of the inline-action selection (`1,2,6,7,9` + implicit A only).

---

## Files touched

### Created

- `components/navigation/SidebarHeader.tsx`
- `components/navigation/SidebarHeader.stories.tsx`
- `components/navigation/SidebarToolbar.tsx`
- `components/navigation/SidebarFilterChip.tsx`
- `components/navigation/SidebarFilterChip.stories.tsx`
- `components/navigation/SidebarSection.tsx`
- `components/navigation/SidebarSection.stories.tsx`
- `components/navigation/SidebarRow.tsx`
- `components/navigation/SidebarRow.stories.tsx`
- `components/navigation/SidebarStatusChip.tsx`
- `components/navigation/SidebarStatusChip.stories.tsx`

### Modified

- `components/navigation/Sidebar.tsx` — full rewrite to compound shell
- `components/navigation/Sidebar.stories.tsx` — full rewrite to new stories list above
- `components/navigation/index.ts` — exports updated
- Semantic token collection (Tailwind/CSS source of truth) — 7 new `nav-*` tokens with dark + light bindings

### Figma (file `ZP0lSeT5Nwm1lpWI79qIaf`)

- New Semantic variables: the 7 `nav-*` tokens with both Dark and Light mode values
- New ComponentSets under the NAVIGATION page: `Sidebar`, `SidebarHeader`, `SidebarToolbar`, `SidebarFilterChip`, `SidebarSection`, `SidebarRow`, `SidebarStatusChip`
- Existing TopNav ComponentSet: content rebuild (5 items + icons)

---

## Open questions deferred to implementation plan

- Exact pixel values for the dark-mode `nav-*` color tokens (derived from production screenshot per the acceptance criteria in the "New semantic tokens" section above)
- Whether `SidebarToolbar` gets a typed `Sidebar.Toolbar` re-export or stays as a top-level import (stylistic — pick during plan writing based on how the rest of the compound APIs are structured in this codebase)
- Whether the collapse animation on `SidebarSection` uses CSS `max-height` transitions or JS-measured height (pick during implementation; prefer pure CSS if it works cleanly)
