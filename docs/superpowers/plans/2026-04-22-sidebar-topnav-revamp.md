# Sidebar & TopNav Revamp — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve `Sidebar` from a fixed items-list into a slot-based compound shell (Header / Toolbar / Section / Row / FilterChip / StatusChip) with a Dark + Light theme axis driven by a new `sidenav-*` semantic token namespace. Then fix the Figma TopNav ComponentSet's content to match its already-correct React source.

**Architecture:** Bottom-up — new semantic tokens first, then leaf components (StatusChip, FilterChip, Toolbar), then structural components (Header, Section), then the complex Row, then the Sidebar shell that ties them together. Each React component ships with its own `.stories.tsx` (our primary regression surface — no Jest/Vitest). Figma work follows: Semantic variables added to both the Light and Dark modes, then 6 new ComponentSets built via `use_figma` plugin scripts using `createInstance()` of existing primitives (Rule 6), finishing with Rule 7 QA per ComponentSet. TopNav content fix is a final standalone chunk.

**Tech Stack:** React 19 + TypeScript, Tailwind with the existing semantic token system (`tokens/semantic.ts`), Storybook at `http://localhost:6006`, Figma Plugin API via the `use_figma` MCP tool.

**Spec:** `docs/superpowers/specs/2026-04-22-sidebar-topnav-revamp-design.md`
**Figma file key:** `ZP0lSeT5Nwm1lpWI79qIaf`
**Target Figma pages:** `NAVIGATION` (for new Sidebar* ComponentSets + existing TopNav fix)

---

## Ground rules for every task in this plan

**CLAUDE.md rules that apply to every task:**

- Rule 1 (React): never import `colors` in a component — always use a Tailwind class or `var(--color-*)` style prop.
- Rule 2 (React): every new token gets both `:root` and `.dark` values in `tokens/semantic.ts`, plus the Tailwind alias in `theme.extend.colors`.
- Rule 6 (Figma + React): never fork an existing primitive. Use `createInstance()` (Figma) or `import` (React) and extend the canonical if it needs to grow.
- Rule 7 (Figma): after every ComponentSet build, run screenshot + sizing audit + binding audit + source parity + Storybook diff. All five or the task is not done.

**Commit discipline:** every task ends with a commit. Never batch multiple tasks into one commit. Commit messages use the project's existing format (`feat(<component>): …`, `refactor(<component>): …`, `docs(<scope>): …`, `chore(tokens): …`).

**Verification loop for React components:** write the `.stories.tsx` first (stories double as the executable spec), implement the component, run `npm run storybook` (or verify the dev server is already at `http://localhost:6006`), visit the story URL, visually confirm the component matches the spec's layout diagram and state table. Screenshot via `get_screenshot` only when there's ambiguity — most components can be eyeballed.

**Standard Figma helper scaffold** — include at the top of every `use_figma` script:

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

## Chunk 1: `sidenav-*` semantic token foundation

Adds 7 new `sidenav-*` tokens to `tokens/semantic.ts` (`:root` + `.dark` + Tailwind alias). This unblocks every subsequent React component.

**Rationale for the naming.** Existing `--color-nav-*` tokens are scoped to the TopNav. The Sidebar chrome needs its own dark-over-light palette that lives independently of the TopNav's "always dark brand navy" treatment. `sidenav-*` names the surface unambiguously.

### Task 1.1 — Add the 7 `sidenav-*` tokens to `tokens/semantic.ts`

**Files:**
- Modify: `tokens/semantic.ts`

- [ ] **Step 1: Read the existing `:root` block to locate the insertion point**

Open `tokens/semantic.ts` and find the `// Navigation (always dark — brand navy in light)` block (around line 66–71). Insert the new `sidenav-*` group immediately below it — keeps all nav-related tokens visually grouped.

- [ ] **Step 2: Add `:root` (light-mode) values**

```ts
// Sidebar chrome — flips by theme attribute, not by .dark class
'--color-sidenav-surface':          '#ffffff',
'--color-sidenav-surface-hover':    colors.neutral[100],
'--color-sidenav-surface-elevated': colors.neutral[200],
'--color-sidenav-border':           colors.neutral[200],
'--color-sidenav-fg-primary':       colors.neutral[900],
'--color-sidenav-fg-secondary':     colors.neutral[700],
'--color-sidenav-fg-muted':         colors.neutral[500],
```

- [ ] **Step 3: Add `.dark` (dark-mode) values**

Derive values from the production screenshot referenced in the spec. Initial placeholder values that match the screenshot's visible palette (iterate in Storybook before committing if any look off):

```ts
// In the .dark block, in the Navigation section
'--color-sidenav-surface':          '#1a1d24',   // main sidebar bg
'--color-sidenav-surface-hover':    'rgba(255,255,255,0.05)',
'--color-sidenav-surface-elevated': 'rgba(255,255,255,0.10)',
'--color-sidenav-border':           'rgba(255,255,255,0.08)',
'--color-sidenav-fg-primary':       '#f4f4f6',
'--color-sidenav-fg-secondary':     '#c5c7d0',
'--color-sidenav-fg-muted':         '#8a8d9b',
```

Acceptance: ΔE00 ≤ 3 vs the production screenshot for each surface; WCAG AA for every `fg-*` on every `surface*` pairing. Use a contrast checker (e.g. the online `contrast-ratio.com` or `npm run build` if the project has a token-contrast CI check — it does not currently). If a value fails, nudge toward the screenshot's reference pixel until both criteria pass.

- [ ] **Step 4: Add Tailwind aliases in the `theme.extend.colors` section**

Find the existing `// Navigation` aliases block (around line 299–304) and add below it:

```ts
// Sidebar chrome
'sidenav-surface':           'var(--color-sidenav-surface)',
'sidenav-surface-hover':     'var(--color-sidenav-surface-hover)',
'sidenav-surface-elevated':  'var(--color-sidenav-surface-elevated)',
'sidenav-border':            'var(--color-sidenav-border)',
'sidenav-fg-primary':        'var(--color-sidenav-fg-primary)',
'sidenav-fg-secondary':      'var(--color-sidenav-fg-secondary)',
'sidenav-fg-muted':          'var(--color-sidenav-fg-muted)',
```

- [ ] **Step 5: Add `[data-theme="..."]` instance-level overrides**

Our existing `.dark` class lives on `<html>`; a Sidebar should be able to override its chrome locally without touching the rest of the page. Add this block to the same `addBase({...})` call in `tokens/semantic.ts`, as a sibling of `:root` and `.dark`:

```ts
// Sidebar instance-level theme overrides — flip chrome without affecting the document
'[data-theme="light"]': {
  '--color-sidenav-surface':          '#ffffff',
  '--color-sidenav-surface-hover':    'var(--color-bg-surface)',
  '--color-sidenav-surface-elevated': 'var(--color-bg-recessed)',
  '--color-sidenav-border':           'var(--color-line)',
  '--color-sidenav-fg-primary':       'var(--color-fg-primary)',
  '--color-sidenav-fg-secondary':     'var(--color-fg-secondary)',
  '--color-sidenav-fg-muted':         'var(--color-fg-muted)',
},
'[data-theme="dark"]': {
  '--color-sidenav-surface':          '#1a1d24',
  '--color-sidenav-surface-hover':    'rgba(255,255,255,0.05)',
  '--color-sidenav-surface-elevated': 'rgba(255,255,255,0.10)',
  '--color-sidenav-border':           'rgba(255,255,255,0.08)',
  '--color-sidenav-fg-primary':       '#f4f4f6',
  '--color-sidenav-fg-secondary':     '#c5c7d0',
  '--color-sidenav-fg-muted':         '#8a8d9b',
},
```

The `:root` / `.dark` blocks above remain as document-level defaults (existing `.dark` class on `<html>` still flips everything). These `[data-theme=…]` selectors override locally so `<Sidebar theme="light">` on a dark page gets light chrome, and vice versa. Chunk 2–4 component stories can set `data-theme` on their wrapper div to render in isolation without waiting for the shell rewrite.

- [ ] **Step 6: Verify the token edit didn't break anything**

Run:
```bash
pnpm tsc --noEmit
```

Expected: no errors. Then reload Storybook at `http://localhost:6006` and open an existing story that uses navigation tokens (e.g. `Navigation/TopNav/Default`). Confirm it still renders with no missing-token warnings in the browser console. This is the TDD-equivalent canary for a token change.

- [ ] **Step 7: Commit**

```bash
git add tokens/semantic.ts
git commit -m "feat(tokens): add sidenav-* chrome tokens + [data-theme] overrides"
```

---

## Chunk 2: Leaf components (`SidebarStatusChip`, `SidebarFilterChip`)

These are the two "chip-with-dropdown" primitives that every other component composes. Build bottom-up so the higher-level components can use real chip instances in their stories.

### Task 2.1 — `SidebarStatusChip`

Fully-controlled status chip with a colored dot, label, chevron, and an `ActionMenu` dropdown of options. See spec Section "SidebarStatusChip" for the exact prop shape.

**Files:**
- Create: `components/navigation/SidebarStatusChip.tsx`
- Create: `components/navigation/SidebarStatusChip.stories.tsx`

- [ ] **Step 1: Write `SidebarStatusChip.stories.tsx`**

Three stories: `Default` (value = 'in-progress' across 3-option list), `AllColors` (grid of 5 chips, one per supported color), `Controlled` (uses `useState` to show value-change round-trip).

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarStatusChip } from './SidebarStatusChip';

const meta: Meta<typeof SidebarStatusChip> = {
  title: 'Navigation/SidebarStatusChip',
  component: SidebarStatusChip,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof SidebarStatusChip>;

const STATUS_OPTIONS = [
  { value: 'todo',        label: 'To Do',        color: 'neutral' as const },
  { value: 'in-progress', label: 'In Progress',  color: 'yellow'  as const },
  { value: 'done',        label: 'Done',         color: 'green'   as const },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('in-progress');
    return <SidebarStatusChip value={value} options={STATUS_OPTIONS} onChange={setValue} />;
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-4 bg-sidenav-surface" data-theme="dark">
      {(['brand','yellow','green','red','neutral'] as const).map((color) => (
        <SidebarStatusChip
          key={color}
          value={color}
          options={[{ value: color, label: color[0].toUpperCase() + color.slice(1), color }]}
          onChange={() => {}}
        />
      ))}
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('todo');
    return (
      <div>
        <SidebarStatusChip value={value} options={STATUS_OPTIONS} onChange={setValue} />
        <p className="mt-2 text-label-sm text-fg-muted">Current: {value}</p>
      </div>
    );
  },
};
```

- [ ] **Step 2: Run Storybook and confirm the stories 404 / fail (component doesn't exist yet)**

Open `http://localhost:6006/?path=/story/navigation-sidebarstatuschip--default`. Expected: "Story not found" or build error.

- [ ] **Step 3: Implement `SidebarStatusChip.tsx`**

Compose `Dropdown` + `ActionMenu` from `components/overlay/`. Colored dot uses the existing status-surface palette. Chevron is `ChevronDownIcon` from `components/primitives/icons/`.

```tsx
import { useState } from 'react';
import { clsx } from 'clsx';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';

export type SidebarChipColor = 'brand' | 'yellow' | 'green' | 'red' | 'neutral';

const dotColorClass: Record<SidebarChipColor, string> = {
  brand:   'bg-action-primary',
  yellow:  'bg-status-warning',
  green:   'bg-status-success',
  red:     'bg-status-error',
  neutral: 'bg-fg-muted',
};

export interface SidebarStatusChipOption {
  value: string;
  label: string;
  color: SidebarChipColor;
}

export interface SidebarStatusChipProps {
  value: string;
  options: SidebarStatusChipOption[];
  onChange: (value: string) => void;
  className?: string;
}

export function SidebarStatusChip({ value, options, onChange, className }: SidebarStatusChipProps) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.value === value) ?? options[0];
  if (!current) return null;

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      align="left"
      width="auto"
      trigger={
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
          className={clsx(
            'inline-flex items-center gap-1.5 rounded-pill px-2 py-0.5',
            'text-label-sm font-medium text-sidenav-fg-primary',
            'bg-sidenav-surface-hover hover:bg-sidenav-surface-elevated transition-colors',
            className,
          )}
        >
          <span className={clsx('h-2 w-2 rounded-full shrink-0', dotColorClass[current.color])} />
          <span className="truncate">{current.label}</span>
          <ChevronDownIcon size={12} className="text-sidenav-fg-muted shrink-0" />
        </button>
      }
    >
      <ActionMenu
        size="sm"
        groups={[{
          items: options.map((opt) => ({
            label: opt.label,
            icon: <span className={clsx('h-2 w-2 rounded-full', dotColorClass[opt.color])} />,
            selected: opt.value === value,
            onClick: () => { onChange(opt.value); setOpen(false); },
          })),
        }]}
      />
    </Dropdown>
  );
}
```

- [ ] **Step 4: Verify in Storybook**

Reload `http://localhost:6006/?path=/story/navigation-sidebarstatuschip--default`. Expected:
- Chip renders with yellow dot + "In Progress" label + down-chevron
- Click opens menu with 3 options; the active one shows a check
- Picking a different option closes the menu and updates the label
- `AllColors` shows 5 chips in a dark-theme container, each with a different colored dot
- `Controlled` shows the value readout beneath the chip updating on selection

- [ ] **Step 5: Commit**

```bash
git add components/navigation/SidebarStatusChip.tsx components/navigation/SidebarStatusChip.stories.tsx
git commit -m "feat(navigation): add SidebarStatusChip — controlled status chip w/ dropdown picker"
```

### Task 2.2 — `SidebarFilterChip`

Toolbar chip with a colored dot, label, count, and two click zones (body toggles; chevron opens a sub-menu). See spec Section "SidebarFilterChip" for exact prop shape and click-target rules.

**Files:**
- Create: `components/navigation/SidebarFilterChip.tsx`
- Create: `components/navigation/SidebarFilterChip.stories.tsx`

- [ ] **Step 1: Write `SidebarFilterChip.stories.tsx`** with `Default` (inactive, no sub-menu), `Active` (selected, no sub-menu), `WithSubMenu` (inactive + chevron + ActionMenu), `Grid` (4 chips in a toolbar-like row, one per color).

- [ ] **Step 2: Verify stories fail (component missing)**

- [ ] **Step 3: Implement `SidebarFilterChip.tsx`**

Key implementation points:

- Root is a `<div>` (not `<button>`), because it contains two independent buttons (body + chevron)
- Body `<button>` wraps dot + label + count; calls `onToggle()` on click; `stopPropagation()`
- Chevron `<button>` only rendered when `subMenu` is provided; calls `setOpen(true)`; `stopPropagation()`
- `Dropdown` wraps the chevron button as the trigger; the chevron keeps its `<button>` identity so it renders inline next to the body — do this by making `Dropdown`'s `trigger` be the chevron button
- Active vs inactive handled via the class table in the spec

```tsx
// Abbreviated — full file follows spec Section "SidebarFilterChip"
<div className={clsx(
  'inline-flex items-center gap-1 rounded-pill px-2 py-1 transition-colors',
  active
    ? 'bg-sidenav-surface-hover text-sidenav-fg-primary'
    : 'bg-transparent text-sidenav-fg-secondary hover:bg-sidenav-surface-hover/60',
  className,
)}>
  <button type="button" onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className="inline-flex items-center gap-1.5 text-label-sm font-medium">
    <span className={clsx('h-2 w-2 rounded-full', dotColorClass[color])} />
    <span className="truncate">
      {label}{typeof count === 'number' ? <span className="text-sidenav-fg-muted"> · {count}</span> : null}
    </span>
  </button>
  {subMenu && (
    <Dropdown open={open} onOpenChange={setOpen} align="left" width="auto"
      trigger={
        <button type="button" onClick={(e) => { e.stopPropagation(); setOpen(true); }}
                className="p-0.5 text-sidenav-fg-muted hover:text-sidenav-fg-primary">
          <ChevronDownIcon size={12} />
        </button>
      }>
      {subMenu}
    </Dropdown>
  )}
</div>
```

- [ ] **Step 4: Verify in Storybook**

Confirm in `Default`: clicking body toggles `active`. In `WithSubMenu`: clicking body toggles but does **not** open menu; clicking chevron opens menu but does **not** toggle. In `Grid`: 4 chips render in a row on a dark surface.

- [ ] **Step 5: Commit**

```bash
git add components/navigation/SidebarFilterChip.tsx components/navigation/SidebarFilterChip.stories.tsx
git commit -m "feat(navigation): add SidebarFilterChip — toolbar chip w/ toggle + chevron sub-menu split targets"
```

---

## Chunk 3: Structural components (`SidebarToolbar`, `SidebarHeader`, `SidebarSection`)

### Task 3.1 — `SidebarToolbar`

Trivial passthrough. Small file, but still gets its own story so any future regression (e.g. someone removes the border-bottom) has an isolated canary.

**Files:**
- Create: `components/navigation/SidebarToolbar.tsx`
- Create: `components/navigation/SidebarToolbar.stories.tsx`

- [ ] **Step 1: Write `SidebarToolbar.stories.tsx`**

One `Default` story — a dark-theme wrapper containing a `SidebarToolbar` with three `SidebarFilterChip` children. Confirms: wraps/flexes, has a visible bottom border, chips don't overflow.

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarToolbar } from './SidebarToolbar';
import { SidebarFilterChip } from './SidebarFilterChip';

const meta: Meta<typeof SidebarToolbar> = {
  title: 'Navigation/SidebarToolbar',
  component: SidebarToolbar,
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface w-[320px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SidebarToolbar>;

export const Default: Story = {
  render: () => (
    <SidebarToolbar>
      <SidebarFilterChip label="All" active />
      <SidebarFilterChip label="Active" />
      <SidebarFilterChip label="Archived" />
    </SidebarToolbar>
  ),
};
```

- [ ] **Step 2: Verify story fails** (component not created yet)

- [ ] **Step 3: Implement**

```tsx
import { clsx } from 'clsx';

export interface SidebarToolbarProps {
  className?: string;
  children: React.ReactNode;
}

export function SidebarToolbar({ className, children }: SidebarToolbarProps) {
  return (
    <div className={clsx(
      'flex flex-wrap gap-2 px-3 py-2 border-b border-sidenav-border',
      className,
    )}>
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Verify in Storybook** — `Default` renders with 3 chips, bottom border visible, chips wrap when container narrows.

- [ ] **Step 5: Commit**

```bash
git add components/navigation/SidebarToolbar.tsx components/navigation/SidebarToolbar.stories.tsx
git commit -m "feat(navigation): add SidebarToolbar passthrough"
```

### Task 3.2 — `SidebarHeader`

See spec Section "SidebarHeader" for prop shape + layout.

**Files:**
- Create: `components/navigation/SidebarHeader.tsx`
- Create: `components/navigation/SidebarHeader.stories.tsx`

- [ ] **Step 1: Write stories** — `Default`, `WithBack`, `WithActions`, `WithSubtitle`, `Full` (all four decorations). Each in a dark-themed container so the tokens render correctly.

- [ ] **Step 2: Verify stories fail**

- [ ] **Step 3: Implement**

```tsx
import { clsx } from 'clsx';
import { IconButton } from '../primitives/IconButton';
import { ChevronLeftIcon } from '../primitives/icons/ChevronLeftIcon';

export interface SidebarHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  backHref?: string;
  onBack?: () => void;
  actions?: React.ReactNode;
  className?: string;
}

export function SidebarHeader({ title, subtitle, icon, backHref, onBack, actions, className }: SidebarHeaderProps) {
  const showBack = !!onBack || !!backHref;
  return (
    <div className={clsx('flex items-center gap-2 px-3 py-3 border-b border-sidenav-border', className)}>
      {showBack && (
        onBack
          ? <IconButton aria-label="Back" icon={<ChevronLeftIcon size={16} />} onClick={onBack} />
          : <a href={backHref} aria-label="Back" className="p-1.5 rounded-control hover:bg-sidenav-surface-hover">
              <ChevronLeftIcon size={16} className="text-sidenav-fg-secondary" />
            </a>
      )}
      {icon && (
        <span className="h-7 w-7 shrink-0 rounded-card bg-sidenav-surface-hover flex items-center justify-center text-sidenav-fg-secondary">
          {icon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-body-md font-semibold text-sidenav-fg-primary truncate">{title}</div>
        {subtitle && <div className="text-label-sm text-sidenav-fg-muted truncate">{subtitle}</div>}
      </div>
      {actions && <div className="flex items-center gap-1 shrink-0">{actions}</div>}
    </div>
  );
}
```

- [ ] **Step 4: Verify in Storybook**

Check that `WithBack` renders the back-caret link, `WithActions` shows two trailing IconButtons, `Full` shows all four decorations together, and long titles truncate rather than wrap.

- [ ] **Step 5: Commit**

```bash
git add components/navigation/SidebarHeader.tsx components/navigation/SidebarHeader.stories.tsx
git commit -m "feat(navigation): add SidebarHeader — title/subtitle/icon/back/actions slot"
```

### Task 3.3 — `SidebarSection`

Collapsible accordion with nesting support. See spec Section "SidebarSection".

**Files:**
- Create: `components/navigation/SidebarSection.tsx`
- Create: `components/navigation/SidebarSection.stories.tsx`

- [ ] **Step 1: Write stories** — `Default` (open, 4 placeholder rows), `Nested` (outer + inner section), `WithActions` (+PlusIcon trailing), `Collapsed` (`defaultOpen={false}`), `Controlled` (controlled `open` + toggle button).

- [ ] **Step 2: Verify stories fail**

- [ ] **Step 3: Implement**

Use CSS `grid-template-rows: 0fr | 1fr` transition for the collapse animation — pure CSS, no JS height measurement. Works reliably for arbitrary content.

```tsx
import { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';

export interface SidebarSectionProps {
  title: string;
  count?: number;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
}

export function SidebarSection({
  title, count, icon, actions, defaultOpen = true,
  open: controlledOpen, onOpenChange, className, children,
}: SidebarSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const toggle = () => {
    const next = !open;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div className={className}>
      <div
        role="button" tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
        className="group flex items-center gap-1.5 px-3 py-1.5 cursor-pointer rounded-control hover:bg-sidenav-surface-hover"
      >
        <ChevronDownIcon size={14} className={clsx(
          'text-sidenav-fg-muted shrink-0 transition-transform',
          !open && '-rotate-90',
        )} />
        {icon && <span className="shrink-0 text-sidenav-fg-secondary">{icon}</span>}
        <span className="flex-1 text-label-md font-semibold text-sidenav-fg-secondary truncate">{title}</span>
        {typeof count === 'number' && <span className="text-label-sm text-sidenav-fg-muted shrink-0">{count}</span>}
        {actions && (
          <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}>
            {actions}
          </span>
        )}
      </div>
      <div className={clsx(
        'grid transition-[grid-template-rows] duration-200 ease-out',
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify in Storybook**

Confirm chevron rotates, body collapses smoothly, nested section toggles independently of outer, Enter/Space toggles via keyboard, clicking actions doesn't toggle the section.

- [ ] **Step 5: Commit**

```bash
git add components/navigation/SidebarSection.tsx components/navigation/SidebarSection.stories.tsx
git commit -m "feat(navigation): add SidebarSection — collapsible accordion w/ nesting + actions slot"
```

---

## Chunk 4: `SidebarRow`

The complex one. See spec Section "SidebarRow" for full prop shape, layout diagram, click-target table, and state table.

**Files:**
- Create: `components/navigation/SidebarRow.tsx`
- Create: `components/navigation/SidebarRow.stories.tsx`

### Task 4.1 — `SidebarRow`

- [ ] **Step 1: Write stories**

Eight stories matching spec's Storybook coverage list: `Minimal`, `WithStatusChip`, `WithSubtitle`, `WithHoverActions`, `WithOverflowMenu`, `FullyLoaded`, `ActiveState`, `DisabledState`.

Key story: `FullyLoaded` — renders every decoration at once (leading status chip, index, title, subtitle, hover actions avatar + comment + flag, trailing badge 5, overflow ActionMenu with rename/duplicate/move-to/delete). Mount inside a 320px-wide dark container so truncation behavior is visible.

- [ ] **Step 2: Verify stories fail**

- [ ] **Step 3: Implement**

Implementation contract:

- Root is `<div role="button" tabIndex={0}>` — not `<button>`, because we nest interactive children
- `onClick` on the root → `onSelect()` when not disabled
- `onKeyDown` on the root → Enter/Space → `onSelect()` (`preventDefault` to avoid space-page-scroll)
- Any interactive sub-element calls `e.stopPropagation()` in its handler to suppress the row-level `onClick`
- `hoverActions` wrapped in `<div onClick={(e) => e.stopPropagation()}>` so individual buttons don't each need to stop propagation
- `overflowMenu` wrapped likewise; its trigger is expected to live inside an `ActionMenu`/`Dropdown`
- `leading` wrapper applies `onClick={(e) => e.stopPropagation()}` as a safety net (in case the consumer forgot — doesn't hurt)
- Active state uses `border-l-2 border-action-primary` — compensate with `pl-[calc(0.75rem-2px)]` on the row body so text doesn't shift

```tsx
import { clsx } from 'clsx';

export interface SidebarRowProps {
  title: string;
  onSelect?: () => void;
  active?: boolean;
  disabled?: boolean;
  leading?: React.ReactNode;
  index?: number;
  subtitle?: string;
  trailing?: React.ReactNode;
  hoverActions?: React.ReactNode;
  overflowMenu?: React.ReactNode;
  className?: string;
}

export function SidebarRow({
  title, onSelect, active, disabled,
  leading, index, subtitle, trailing, hoverActions, overflowMenu, className,
}: SidebarRowProps) {
  const handleActivate = () => { if (!disabled) onSelect?.(); };
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  return (
    <div
      role="button" tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      aria-current={active ? 'page' : undefined}
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleActivate(); }
      }}
      className={clsx(
        'group flex flex-col gap-0.5 rounded-control py-2 pr-3 cursor-pointer transition-colors',
        active
          ? 'bg-sidenav-surface-elevated border-l-2 border-action-primary pl-[calc(0.75rem-2px)]'
          : 'pl-3 hover:bg-sidenav-surface-hover',
        disabled && 'opacity-40 pointer-events-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {leading && <span className="shrink-0" onClick={stop}>{leading}</span>}
        {typeof index === 'number' && (
          <span className="shrink-0 w-5 text-right text-label-sm text-sidenav-fg-muted tabular-nums">
            {index}
          </span>
        )}
        <span className={clsx(
          'flex-1 min-w-0 truncate text-body-sm font-medium',
          active ? 'text-sidenav-fg-primary' : 'text-sidenav-fg-secondary group-hover:text-sidenav-fg-primary',
        )}>
          {title}
        </span>
        {hoverActions && (
          <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity"
                onClick={stop}>
            {hoverActions}
          </span>
        )}
        {trailing && <span className="shrink-0">{trailing}</span>}
        {overflowMenu && <span className="shrink-0" onClick={stop}>{overflowMenu}</span>}
      </div>
      {subtitle && (
        <div className="pl-9 text-label-sm text-sidenav-fg-muted truncate">
          {subtitle}
        </div>
      )}
    </div>
  );
}
```

**Pitfalls to watch for during implementation:**
1. **Row click firing twice** — if an interactive child doesn't stop propagation, clicking it triggers both its own handler and `onSelect`. Use the Storybook `FullyLoaded` story: click each interactive element and verify `onSelect` does NOT fire (via a console log mock in the story).
2. **Focus-visible ring on the wrong element** — keep the ring on the row root; sub-elements get their own focus-visible treatment from their own components.
3. **Subtitle indent** — uses `pl-9` (36px) so the subtitle aligns with where the title starts after the leading chip + gap. The Figma ComponentSet variant spec (Task 7.6) uses the same 36px value, so both surfaces cite the same source-of-truth number. If `leading` isn't present, subtitle still indents by 36px — acceptable visually, and avoids runtime measurement.

- [ ] **Step 4: Verify in Storybook**

For each story:
- `Minimal`: title-only row, clicking calls `onSelect`
- `WithStatusChip`: chip doesn't fire row `onSelect`; changing status updates chip label
- `WithSubtitle`: two-line layout, subtitle truncates
- `WithHoverActions`: actions invisible until hover; Tab reveals via `focus-within`
- `WithOverflowMenu`: ⋯ always visible; opens menu; menu item click fires that action, not `onSelect`
- `FullyLoaded`: all of the above composited into one row without overlap
- `ActiveState`: left border + elevated bg
- `DisabledState`: 40% opacity, no pointer cursor, keyboard Tab skips the row

- [ ] **Step 5: Commit**

```bash
git add components/navigation/SidebarRow.tsx components/navigation/SidebarRow.stories.tsx
git commit -m "feat(navigation): add SidebarRow w/ split click targets, hover actions, overflow menu"
```

---

## Chunk 5: `Sidebar` shell rewrite + index exports + full stories

### Task 5.1 — Rewrite `Sidebar.tsx` as the slot-based shell

**Files:**
- Modify: `components/navigation/Sidebar.tsx` (full rewrite)

- [ ] **Step 1: Replace file contents**

```tsx
import { clsx } from 'clsx';

export interface SidebarProps {
  theme?: 'dark' | 'light';
  width?: number | string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

export function Sidebar({
  theme = 'dark', width = 320, ariaLabel = 'Sidebar', className, children,
}: SidebarProps) {
  return (
    <nav
      role="navigation"
      aria-label={ariaLabel}
      data-theme={theme}
      className={clsx('flex flex-col h-full bg-sidenav-surface overflow-hidden', className)}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
    >
      {children}
    </nav>
  );
}
```

**Theme-attribute hookup.** The `[data-theme="light"]` and `[data-theme="dark"]` CSS overrides were already landed in Task 1.1 Step 5. This shell just sets the `data-theme` attribute on the `<nav>` root — no token work needed in this task.

- [ ] **Step 2: Commit the Sidebar rewrite**

```bash
git add components/navigation/Sidebar.tsx
git commit -m "refactor(navigation): rewrite Sidebar as slot-based shell w/ data-theme attr"
```

### Task 5.2 — Rewrite `Sidebar.stories.tsx`

**Files:**
- Modify: `components/navigation/Sidebar.stories.tsx` (full rewrite)

- [ ] **Step 1: Replace the stories file**

Four stories per spec's Storybook coverage list: `Default`, `Minimal`, `LightTheme`, `ProductionReplica`.

`ProductionReplica` is the crown jewel — it must match the production screenshot pixel-for-pixel. Structure:
- `<Sidebar theme="dark" width={320}>`
  - `<SidebarHeader backHref="/" icon={<Briefcase01Icon />} title="Acme Corp · FY2025" subtitle="Tax Return" actions={<><SettingsIcon/><MoreIcon/></>} />`
  - `<SidebarToolbar>` with 4 `SidebarFilterChip`s (In Progress / Outstanding / Fulfilled / Overdue, each with count, each with its own `subMenu` mimicking "Only mine / Due this week / Overdue")
  - `<SidebarSection title="Open Requests" count={12}>` — 8 rows, each with `SidebarStatusChip` leading, `index`, `title`, `subtitle`, hover actions (Avatar + CommentIcon + FlagIcon), `trailing={<Badge>N</Badge>}`, `overflowMenu={<ActionMenu .../>}`
  - `<SidebarSection title="Closed" count={4}>` — 4 rows with same structure

Include mock data at the top of the file so rows feel real. Use the existing `Badge` primitive for `trailing`, existing `Avatar` for the hover-actions avatar, existing `IconButton` for the comment/flag hover actions.

`Default` is a smaller version of the same shape (~2 filter chips, 1 section, 4 rows) for quick visual scanning.

`Minimal` is `<Sidebar>` + rows only, no header/toolbar/sections — to verify the shell works as a thin nav list (the old API's use case).

`LightTheme` is `Default` with `theme="light"` — verify tokens flip and nothing visually breaks.

Include a `Sidebar.Footer` demo in `Default` as the last child: `<div className="px-3 py-2 border-t border-sidenav-border text-label-sm text-sidenav-fg-muted">v2.1.0</div>` (documents the bare-div convention per spec).

- [ ] **Step 2: Verify stories render**

Visit each story. `ProductionReplica` is the key comparison — screenshot it via browser devtools and side-by-side against the production screenshot from session context. ΔE ≤ 3 per sidenav-* token acceptance criterion.

If colors look off, adjust dark-mode token hex values in `tokens/semantic.ts` Task 1.1 and iterate. Commit token adjustments as a separate `chore(tokens): tune sidenav-* dark values against production screenshot` commit.

- [ ] **Step 3: Commit**

```bash
git add components/navigation/Sidebar.stories.tsx
git commit -m "docs(navigation): rewrite Sidebar stories — Default / Minimal / LightTheme / ProductionReplica"
```

### Task 5.3 — Update `index.ts` exports

**Files:**
- Modify: `components/navigation/index.ts`

- [ ] **Step 1: Replace the Sidebar export block**

Remove `export type { SidebarProps, SidebarItem }` and replace with the full compound export list:

```ts
export { Sidebar } from './Sidebar';
export type { SidebarProps } from './Sidebar';
export { SidebarHeader } from './SidebarHeader';
export type { SidebarHeaderProps } from './SidebarHeader';
export { SidebarToolbar } from './SidebarToolbar';
export type { SidebarToolbarProps } from './SidebarToolbar';
export { SidebarSection } from './SidebarSection';
export type { SidebarSectionProps } from './SidebarSection';
export { SidebarRow } from './SidebarRow';
export type { SidebarRowProps } from './SidebarRow';
export { SidebarFilterChip } from './SidebarFilterChip';
export type { SidebarFilterChipProps, SidebarChipColor } from './SidebarFilterChip';
export { SidebarStatusChip } from './SidebarStatusChip';
export type { SidebarStatusChipProps, SidebarStatusChipOption } from './SidebarStatusChip';
```

- [ ] **Step 2: Grep the codebase for any stale `SidebarItem` import**

```bash
grep -rn "SidebarItem" components/ app/ src/ 2>/dev/null | grep -v node_modules
```

Expected: only the `components/navigation/index.ts` line we just removed. If any consumer references `SidebarItem`, rewrite it to the new compound API in the same commit.

- [ ] **Step 3: Commit**

```bash
git add components/navigation/index.ts
git commit -m "refactor(navigation): update index.ts exports for Sidebar compound API"
```

### Task 5.4 — Full Storybook regression pass

- [ ] **Step 1: Start (or reload) Storybook**

```bash
npm run storybook
```

- [ ] **Step 2: Open every new story and spot-check**

- `Navigation/SidebarStatusChip/Default, AllColors, Controlled`
- `Navigation/SidebarFilterChip/Default, Active, WithSubMenu, Grid`
- `Navigation/SidebarHeader/Default, WithBack, WithActions, WithSubtitle, Full`
- `Navigation/SidebarSection/Default, Nested, WithActions, Collapsed, Controlled`
- `Navigation/SidebarRow/Minimal, WithStatusChip, WithSubtitle, WithHoverActions, WithOverflowMenu, FullyLoaded, ActiveState, DisabledState`
- `Navigation/Sidebar/Default, Minimal, LightTheme, ProductionReplica`

No broken visuals, no console errors, no warnings about missing tokens.

- [ ] **Step 3: No commit — this is a verification-only step.** If any issue is found, fix in a dedicated follow-up commit (`fix(navigation): <what>`).

---

## Chunk 6: Figma Semantic variables — add `sidenav-*` tokens

Mirror the token work from Task 1.1 into the Figma `Semantic` variable collection, with both Light and Dark mode values. This has to happen before Chunk 7 (ComponentSet builds) because the ComponentSets bind to these variables.

### Task 6.1 — Create 7 new Semantic variables

**Files:** none (Figma only).

- [ ] **Step 1: Run the `use_figma` script**

```javascript
const collections = figma.variables.getLocalVariableCollections();
const semantic = collections.find(c => c.name === 'Semantic');
if (!semantic) { console.error('Semantic collection not found'); return; }

// Light mode is semantic.modes[0], Dark is semantic.modes[1] — verify order
const [lightMode, darkMode] = semantic.modes;
console.log('Modes:', semantic.modes.map(m => m.name));

const defs = [
  { name: 'sidenav/surface',          light: { r: 1.00, g: 1.00, b: 1.00 },                         dark: { r: 0.102, g: 0.114, b: 0.141 } },
  { name: 'sidenav/surface-hover',    light: { r: 0.961, g: 0.961, b: 0.969 },                      dark: { r: 1, g: 1, b: 1, a: 0.05 } },
  { name: 'sidenav/surface-elevated', light: { r: 0.898, g: 0.902, b: 0.922 },                      dark: { r: 1, g: 1, b: 1, a: 0.10 } },
  { name: 'sidenav/border',           light: { r: 0.898, g: 0.902, b: 0.922 },                      dark: { r: 1, g: 1, b: 1, a: 0.08 } },
  { name: 'sidenav/fg-primary',       light: { r: 0.094, g: 0.094, b: 0.106 },                      dark: { r: 0.957, g: 0.957, b: 0.965 } },
  { name: 'sidenav/fg-secondary',     light: { r: 0.298, g: 0.298, b: 0.325 },                      dark: { r: 0.773, g: 0.780, b: 0.816 } },
  { name: 'sidenav/fg-muted',         light: { r: 0.478, g: 0.478, b: 0.490 },                      dark: { r: 0.541, g: 0.553, b: 0.608 } },
];

for (const d of defs) {
  const v = figma.variables.createVariable(d.name, semantic, 'COLOR');
  const toPaint = (c) => c.a !== undefined
    ? { r: c.r, g: c.g, b: c.b, a: c.a }
    : { r: c.r, g: c.g, b: c.b };
  v.setValueForMode(lightMode.modeId, toPaint(d.light));
  v.setValueForMode(darkMode.modeId,  toPaint(d.dark));
  console.log('Created:', d.name);
}

console.log('Done. 7 sidenav/* variables added.');
```

**Note:** Figma variables use 0–1 RGB floats and support alpha via the `.a` field. Convert hex to floats before writing. The alpha-channel `rgba(…)` CSS values map to `{ r, g, b, a }` Figma variables.

- [ ] **Step 2: Verify in Figma UI**

Open Figma → Libraries → local variables → `Semantic` collection. Confirm 7 new `sidenav/*` variables appear, each with Light and Dark values. Switch modes and confirm values swap.

- [ ] **Step 3: No commit** — Figma state isn't in git. Save in Figma (auto-saves).

---

## Chunk 7: Figma ComponentSets — 6 new builds

Each ComponentSet follows the same pattern:
1. Locate (or create) the parent page under NAVIGATION
2. Build the variant cells via `createComponent()` + auto-layout
3. Compose existing primitives via `createInstance()` (Rule 6)
4. Bind fills/strokes to Semantic (Rule 1), paddings/gaps/dims to Spacing (Rule 5), corners to Radius (Rule 5)
5. `combineAsVariants` → re-assert sizing modes that `combineAsVariants` may have silently reset (Rule 7 step 2)
6. Screenshot + source parity + Storybook diff (Rule 7 steps 1, 4, 5)

**Build order matters:** `SidebarStatusChip` first because `SidebarRow` and `SidebarFilterChip` reference it; `SidebarRow` last because `Sidebar` (shell) references it.

### Task 7.1 — `SidebarStatusChip` ComponentSet

**Variants:** `Theme = Dark | Light` (2 variants).

**Structure per variant:**
- Auto-layout HORIZONTAL, `primaryAxisSizingMode = AUTO`, `counterAxisSizingMode = AUTO`
- Padding: `px = scale/2` (8px), `py = scale/1` (4px)
- Item spacing: **6px hardcoded** — the React source uses `gap-1.5` and there is no `scale/1.5` variable in the Figma Spacing collection. Per CLAUDE.md Rule 5 "Hardcode-only exceptions" clause, leave this as a raw 6px with a code comment in the plugin script explaining the exception. Do **not** snap to `scale/2` — that would drift 2px from the React render and fail Rule 7 step 4 (source parity).
- Corner radius: `radius/pill` (9999)
- Fill: `sidenav/surface-hover`
- Children: colored dot (8×8 circle, fill bound to `action/primary` for the `brand` default; consumers swap per-instance), label text (Inter Medium 13, `sidenav/fg-primary`), `chevron-down` icon instance (Size=Small, stroke bound to `sidenav/fg-muted`)

- [ ] **Step 1: Locate or create the NAVIGATION > SidebarStatusChip page**

If a page already exists named "SidebarStatusChip", use it. Otherwise create it inside the NAVIGATION divider section.

- [ ] **Step 2: Build the 2 variants via `use_figma`** — follow the standard scaffold + the structure above. Full script omitted here; use the FilterSwatch rebuild plan (`docs/superpowers/plans/2026-04-20-filterswatch-rebuild.md`) as a template for the plugin code shape.

- [ ] **Step 3: `combineAsVariants` with property name `Theme`**, set `defaultVariant` to `Theme=Dark`.

- [ ] **Step 4: Rule 7 QA gate**

Run all 5 steps: screenshot, sizing audit (hug content both axes), binding audit (no raw hex, no hardcoded px), source parity (`components/navigation/SidebarStatusChip.tsx`), Storybook diff against `http://localhost:6006/?path=/story/navigation-sidebarstatuschip--default`.

- [ ] **Step 5: No commit** (Figma state).

### Task 7.2 — `SidebarFilterChip` ComponentSet

**Variants:** `Theme × Active × SubMenu` (2 × 2 × 2 = 8).

**Structure:**
- Same outer shape as StatusChip but with an optional trailing chevron
- `Active=On`: fill `sidenav/surface-hover`, text `sidenav/fg-primary`
- `Active=Off`: transparent fill, text `sidenav/fg-secondary`
- `SubMenu=Yes`: includes `chevron-down` icon instance at the right; `SubMenu=No`: no chevron
- The chevron is a separate auto-layout child so it reads as a distinct click target in design

- [ ] **Step 1: Create page if missing** → NAVIGATION > SidebarFilterChip
- [ ] **Step 2: Build 8 variants**
- [ ] **Step 3: `combineAsVariants` with `Theme`, `Active`, `SubMenu` properties; default = `Theme=Dark, Active=Off, SubMenu=No`**
- [ ] **Step 4: Rule 7 QA gate** — screenshot grid, sizing/binding/parity/Storybook checks.
- [ ] **Step 5: No commit.**

### Task 7.3 — `SidebarHeader` ComponentSet

**Variants:** `Theme × Variant` where Variant = `Default | WithBack | WithActions | WithBackAndActions` (2 × 4 = 8).

**Structure per variant:**
- Auto-layout HORIZONTAL, FIXED width 320, HUG height
- Padding: `px = scale/3` (12px), `py = scale/3` (12px)
- Gap: `scale/2` (8px)
- Bottom border: 1px stroke bound to `sidenav/border`
- Children (conditionally included per variant):
  - Back icon-button instance (only when `WithBack`/`WithBackAndActions`) — instance of existing IconButton w/ chevron-left
  - Icon-square frame: 28×28, `radius/card`, fill `sidenav/surface-hover`, holds an icon instance from Icons page
  - Title column: auto-layout VERTICAL, layoutAlign STRETCH/primary FILL, HUG height — title text + optional subtitle text
  - Trailing actions frame (only when `WithActions`/`WithBackAndActions`) — auto-layout HORIZONTAL, two IconButton instances

- [ ] **Step 1: Create page if missing**
- [ ] **Step 2: Build 8 variants**
- [ ] **Step 3: `combineAsVariants`, default = `Theme=Dark, Variant=Default`**
- [ ] **Step 4: Rule 7 QA gate**
- [ ] **Step 5: No commit.**

### Task 7.4 — `SidebarToolbar` ComponentSet

**Variants:** `Theme` (2 variants).

**Structure:**
- Auto-layout HORIZONTAL, FIXED width 320, HUG height, wrap=YES (Figma supports wrap auto-layout since 2024)
- Padding: `px = scale/3`, `py = scale/2`
- Item spacing: `scale/2` (8px)
- Bottom border: 1px `sidenav/border`
- 4 placeholder `SidebarFilterChip` instances (one of each color) wired with the `Active` / `SubMenu` variants that most resemble the production screenshot

- [ ] **Step 1 – Step 5:** follow the pattern above.

### Task 7.5 — `SidebarSection` ComponentSet

**Variants:** `Theme × State` where State = `Open | Closed` (4 variants).

**Structure per variant:**
- Outer frame: auto-layout VERTICAL, FIXED width 320, HUG height
- Header row: auto-layout HORIZONTAL, px=`scale/3`, py=`scale/2`, gap=`scale/2`, radius `radius/control`
  - Chevron: `chevron-down` icon instance; `State=Closed` rotates it -90° (set via `rotation` property or use a different icon instance `chevron-right`)
  - Title text: Inter Semi Bold 12, `sidenav/fg-secondary`
  - Count text (optional child, hidden by default in the variant): Inter Regular 11, `sidenav/fg-muted`
- Body frame (visible only in `State=Open`): auto-layout VERTICAL, primaryAxis HUG, holds 3 placeholder SidebarRow instances

For `State=Closed`, set the body frame's `visible=false`.

- [ ] **Step 1 – Step 5:** follow the pattern.

### Task 7.6 — `SidebarRow` ComponentSet

**Variants:** `Theme × State` where State = `Default | Hover | Active | Disabled` (8 variants).

**Structure per variant:**
- Outer frame: auto-layout VERTICAL, FIXED width 320, HUG height
- Main row: auto-layout HORIZONTAL, px=`scale/3`, py=`scale/2`, gap=`scale/2`, radius `radius/control`
  - Leading chip: instance of `SidebarStatusChip` (Theme matches outer variant)
  - Index text: Inter Regular 11, `sidenav/fg-muted`, fixed 20px width right-aligned
  - Title text: Inter Medium 13, `sidenav/fg-primary` (Active) / `sidenav/fg-secondary` (others), `flex-1`, truncate via `textTruncation = 'ENDING'`
  - Hover-actions frame: auto-layout HORIZONTAL, three placeholder IconButton instances; `visible=false` in `Default`/`Active`, `visible=true` in `Hover`
  - Trailing badge: instance of existing Badge primitive with value "5"
  - Overflow button: instance of IconButton with `dots-vertical` icon
- Subtitle row: text "Due Dec 15 · Assigned to Alex", Inter Regular 11, `sidenav/fg-muted`, indented 36px from left

**State-specific treatments:**
- `Default`: no fill, no left border, title color `sidenav/fg-secondary`
- `Hover`: fill `sidenav/surface-hover`, title `sidenav/fg-primary`, hover-actions visible
- `Active`: fill `sidenav/surface-elevated`, 2px left stroke `action/primary`, title `sidenav/fg-primary`
- `Disabled`: opacity 0.4 (on the outer frame), no hover treatments

- [ ] **Step 1 – Step 5:** follow the pattern. Particular attention in Step 4 (QA) on source-parity — the Row is the most divergence-prone component.

### Task 7.7 — `Sidebar` (shell) ComponentSet

**Variants:** `Theme` (2 variants).

**Structure per variant:**
- Auto-layout VERTICAL, FIXED width 320, FIXED height 720 (enough to show header + toolbar + 2 sections)
- Fill: `sidenav/surface`
- Children (instances of the ComponentSets built above):
  - `SidebarHeader` (Variant=WithBackAndActions)
  - `SidebarToolbar` (matching Theme)
  - `SidebarSection` (State=Open) with 6 `SidebarRow` instances inside
  - `SidebarSection` (State=Closed) with 3 rows

**Important:** every child here is an **instance**, never a fork. If `SidebarSection`'s body can't hold SidebarRow instances out-of-the-box (Figma ComponentSet instances don't nest other instances by default), wire it via component-property slots — but defer that scaffolding if the simpler approach (just place instances inline under the section body in the variant) works.

- [ ] **Step 1 – Step 5:** follow the pattern.

---

## Chunk 8: TopNav Figma content fix

Existing TopNav ComponentSet in Figma has 3 generic labels + no icons. Source `components/navigation/TopNav.tsx` has the correct 5 items + icons. This chunk brings Figma into parity — no React changes.

### Task 8.1 — Rebuild TopNav variant content

**Files:** none (Figma only).

- [ ] **Step 1: Locate the TopNav ComponentSet**

Use `use_figma` to find it. If more than one TopNav exists (possible artifact of prior builds), note all of their node IDs and reconcile: keep the canonical one under the NAVIGATION page, delete duplicates.

- [ ] **Step 2: Screenshot the pre-fix state**

`get_screenshot` on the canonical TopNav node — regression reference.

- [ ] **Step 3: Rewrite the variant content**

For each variant:
1. Remove the 3 existing generic item groups inside the row
2. Create 5 new item groups, one per spec: My firm / Team / Clients / Engagements / Secure File Sharing
3. Each item group is an auto-layout HORIZONTAL frame: padding `px = scale/3`, `py = scale/2`, gap `scale/2`, radius `radius/control`
4. Each item holds: an icon instance from Icons page (Size=Small, 16px) + text node
5. Icons per item:
   - My firm → `building-01`
   - Team → `users-01`
   - Clients → `user-circle`
   - Engagements → `briefcase` (exact name: check Icons page — might be `briefcase` or `briefcase-01`)
   - Secure File Sharing → `send-01`
6. Icon stroke/fill bound to `nav/text` (existing variable, **not** `sidenav/*` — TopNav is its own surface)
7. Item text: Inter Medium 13, bound to `nav/text`
8. For the "active" variant, the active item's frame fills `nav/active-bg` and its icon + text both flip to `fg/on-accent`; hover variant uses `nav/hover-bg` similarly

- [ ] **Step 4: Rule 7 QA gate**

Screenshot the rebuilt TopNav ComponentSet. Compare side-by-side with:
- `components/navigation/TopNav.tsx` source (label order, icon choice)
- `http://localhost:6006/?path=/story/navigation-topnav--default` Storybook story

Sizing audit: TopNav row is FIXED height, `nav/bg` fill, FILL width. Binding audit: every fill and text is `nav/*`, no raw hex. If any icon is missing from Icons page, add it before finishing (per Rule 2).

- [ ] **Step 5: No commit.**

---

## Chunk 9: Final integration verification

After all React and Figma work is complete.

### Task 9.1 — Run through every new story in Storybook

- [ ] **Step 1: Storybook sidebar view**

Navigate the Storybook left-nav tree. Confirm the Navigation folder contains: Breadcrumb, PageHeader, Pagination, Sidebar, SidebarFilterChip, SidebarHeader, SidebarRow, SidebarSection, SidebarStatusChip, SubToolbar, Tabs, TopNav. No missing entries, no duplicate entries.

- [ ] **Step 2: ProductionReplica vs production screenshot**

Open `Navigation/Sidebar/ProductionReplica`. Screenshot via browser. Overlay against the session's production screenshot in Figma or any side-by-side tool. Accept when: layout structure matches; color treatments within ΔE ≤ 3 per token acceptance; no shifted/missing affordances.

- [ ] **Step 3: Accessibility quick pass**

With keyboard only, for `ProductionReplica`:
- Tab reaches: each filter chip (body; chevron if present), each section header, each row (body; interactive children in order: leading chip, hover actions, overflow)
- Enter/Space on a row: fires `onSelect` (observable via story-level console log)
- Enter/Space on a section header: toggles open/closed
- Escape: closes any open menu
- Disabled rows: Tab skips them

- [ ] **Step 4: Figma library publish check**

From Figma → Libraries panel → publish changes. Confirm all 7 new ComponentSets (6 Sidebar* + TopNav update) and 7 new Semantic variables appear in the publish dialog with green checkmarks.

- [ ] **Step 5: No commit — verification only.** Any issue discovered here triggers a targeted fix commit (`fix(navigation): <what>`).

---

## Files touched summary

### React (in `components/navigation/` unless otherwise noted)

**Created:**
- `SidebarStatusChip.tsx`, `SidebarStatusChip.stories.tsx`
- `SidebarFilterChip.tsx`, `SidebarFilterChip.stories.tsx`
- `SidebarToolbar.tsx`
- `SidebarHeader.tsx`, `SidebarHeader.stories.tsx`
- `SidebarSection.tsx`, `SidebarSection.stories.tsx`
- `SidebarRow.tsx`, `SidebarRow.stories.tsx`

**Modified (full rewrite):**
- `Sidebar.tsx`, `Sidebar.stories.tsx`
- `index.ts` (exports)
- `tokens/semantic.ts` (add 7 `sidenav-*` tokens in `:root`, `.dark`, Tailwind aliases, and `[data-theme="…"]` selectors)

### Figma (`ZP0lSeT5Nwm1lpWI79qIaf`)

**Semantic variables created:** 7 `sidenav/*` variables with Light + Dark mode values.

**ComponentSets created (under NAVIGATION):**
- `SidebarStatusChip` (2 variants)
- `SidebarFilterChip` (8 variants)
- `SidebarHeader` (8 variants)
- `SidebarToolbar` (2 variants)
- `SidebarSection` (4 variants)
- `SidebarRow` (8 variants)
- `Sidebar` shell (2 variants)

**ComponentSet modified:** existing `TopNav` → content rebuilt (5 real items + icons) across its existing variants.

---

## Not touched (explicit non-goals)

- **No React changes to TopNav** — source already matches production.
- **No v1/v2 parallel Sidebar** — single rewrite, breaking change.
- **No Jest/Vitest tests** — Storybook is the visual regression surface (matches the rest of `components/`).
- **No new primitives** — StatusChip, FilterChip, etc. compose existing `Badge`/`IconButton`/`Dropdown`/`ActionMenu`. Nothing forked.
- **No drag-reorder, inline-rename, multi-select, or section-header action menus** — scoped out during brainstorming.
- **No arrow-key navigation in `SidebarSection`** — deferred to future non-breaking enhancement per spec.
