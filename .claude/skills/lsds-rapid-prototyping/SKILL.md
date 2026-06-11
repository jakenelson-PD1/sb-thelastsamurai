---
name: lsds-rapid-prototyping
description: Rapid UI prototyping with the Suralink Last Samurai Design System (LSDS). Use this skill whenever a user asks to mock up, prototype, sketch, draft, scaffold, build, or "throw together" any user interface — pages, screens, dashboards, settings panels, flows, forms, modals, layouts, components — for the Suralink RLM (Request List Management) product. Also trigger on direct mentions of LSDS, Last Samurai, Suralink, RequestRow, FileRow, SideNav, RLM Layout, or links to the Figma file ZP0lSeT5Nwm1lpWI79qIaf or the sb-thelastsamurai repo. Even casual asks like "what would a settings page look like" or "give me a quick mock of X" should trigger — the whole point is to compose real LSDS components instead of generic Tailwind, every time. Works for devs scaffolding features, PMs validating flows in code, and product designers prototyping in real components before high-fi mocks.
---

# LSDS Rapid Prototyping

## Why this skill exists

Suralink has a complete design system — 80+ canonical React components, 73 semantic tokens, a pixel-pinned Figma library — and a Storybook deployed at https://jake.nelson2.gitlab.io/sb-thelastsamurai. The fastest path from "build me a settings page" to working code is **composition of these canonical components** with **token-bound styling**, not generic Tailwind invented on the fly.

Without this skill, Claude defaults to writing UI from scratch — guessing class names, picking arbitrary colors, inventing component shapes that don't match what already exists. The result looks plausible but disconnects from the design system entirely. Brand drift, broken dark mode, off-scale spacing.

This skill is the gate. It loads the live LSDS catalog, enforces the four discipline rules from cc2figma (canonical-first, token-binding, brief-before-build, verify-after-write), and gives Claude a structured loop that produces UI matching the design system every time.

## The four hard rules

These are non-negotiable and the user has stated them repeatedly. If a request collides with a rule, name the collision and ask before continuing.

### Rule 1 — Compose from canonical instances. Never invent.

Every component you reach for must be in the LSDS catalog (see "Loading the catalog" below). If a component you want doesn't exist:
- Propose **extending an existing one** (add a variant, add a prop) rather than scaffolding a new primitive
- Surface the gap and let the user decide

The user's exact words, multiple times: *"do not create new components."* Honor that.

### Rule 2 — Bind every visual value to a semantic token. Never hardcode.

No raw hex (`#1f2937`), no arbitrary pixel dimensions (`w-[280px]`, `text-[14px]`, `h-11`), no Tailwind defaults (`text-sm`, `rounded-lg`, `bg-white`, `text-black`). Use the semantic tokens documented in `references/tokens.md` (loaded on demand) and the catalog.

The repo has a pre-commit lint that blocks raw values automatically. If your output would fail that lint, fix it before showing the user. The lint is at `scripts/check-tokens.mjs` if you need to check programmatically.

### Rule 3 — Brief before build.

When the user describes new UI ("build a settings page", drops a screenshot, links a competitor, asks "what would this look like"), do NOT start writing JSX immediately. First output a short structured Design Brief:

```
## Design Brief

**Goal**: one sentence — what is this UI for?

**Sections**:
- Top: …
- Left column: …
- Right column: …

**LSDS components** (one row per section):
- Top: PageHeader (size=lg, with Breadcrumb), Tabs
- Left: AppShell sidebar with NavItem (waterfall variant)
- Right: Card grid, each Card has Avatar + Badge + Button

**Open questions**: anything ambiguous — "is the table sortable?", "do rows have actions?", "is this read-only?"

**Out of scope**: what you're explicitly not covering this turn
```

Wait for the user to confirm or amend. This catches misalignment in 30 seconds instead of an hour of regenerating wrong output.

**Exception**: trivial asks ("just a button labeled Save", "a single Toast") can skip the brief and go straight to code. Use judgment — the brief is for compositions, not one-liners.

### Rule 4 — Verify after every chunk.

After generating each section of JSX, run this self-check pass before moving on:

- [ ] Every component name matches one in the catalog
- [ ] Every import path matches the catalog's import line
- [ ] Every prop is in that component's Props interface
- [ ] Every `variant=` / `size=` value is a documented variant in the catalog
- [ ] Every className uses only semantic tokens (no raw hex/px/Tailwind defaults)
- [ ] When you made a non-obvious choice, cite the catalog row or a Storybook URL

If anything fails, fix it before showing the user. If you can't fix it (the variant truly doesn't exist), surface the gap with two options: "(a) use the closest existing variant — here's how; (b) add this variant to the canonical — here's what would change."

## The prototyping loop

```
user describes UI / drops a reference
        |
        v
① fetch the latest catalog (always — the catalog evolves with every component push)
        |
        v
② output Design Brief → wait for user confirmation (skip only for trivial asks)
        |
        v
┌────► ③ pick LSDS components from the catalog (by name, by visual intent, or by Figma page)
│         |
│      ④ compose JSX using only catalog-listed props + variants
│         |
│      ⑤ bind every style to a semantic token (no raw)
│         |
│      ⑥ self-verify against the catalog; cite Storybook/Figma links for non-obvious calls
│         |
└────── next section (loop until brief is fully covered)
        |
        v
final pass: full code + one-line checklist of what was used + what's still open
```

## Loading the catalog

The catalog (DESIGN_SYSTEM.md) is the source of truth. It lives at:

- **GitLab raw** (preferred — always fresh): `https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/DESIGN_SYSTEM.md`
- **GitHub raw** (mirror): `https://raw.githubusercontent.com/jakenelson-PD1/sb-thelastsamurai/main/DESIGN_SYSTEM.md`

**In Claude Code**: if you have a local clone of the repo, the catalog is at `<repo>/DESIGN_SYSTEM.md`. Read it locally — it's ~380 KB, fits easily.

**In Claude.ai**: fetch the public URL at the start of any UI-building conversation. It has every component, every variant, full prop interfaces, and JSX examples.

**Fallback (no network, no repo)**: use `references/tokens.md` (loaded as part of this skill) for the token system. Component catalog can be summarized from this SKILL.md's "Component cheatsheet" section below, but it's a rougher map than the full catalog — fetch the live file when you can.

The catalog is regenerated by `scripts/gen-design-system.mjs` whenever components change. If a teammate just added something new, `git pull && npm run gen-catalog` (in the repo) refreshes it.

## Working with references

When the user shares a screenshot, URL, competitor design, or Figma frame:

1. **Don't pixel-copy.** The reference shows *intent*, not implementation. LSDS components have their own visual language — slavishly cloning a Stripe dashboard with LSDS components produces something that's neither.

2. **Map sections to canonical components.** Out loud:
   - "This top bar maps to `PageHeader` (size=lg) with `Tabs` and a primary `Button`."
   - "This left column is `AppShell`'s sidebar slot with a `SideNav` ComponentSet."
   - "This card grid is `Card` instances arranged in a `Grid` (cols=3 gap=4)."

3. **Surface mismatches.** If the reference has a UI element LSDS doesn't, name it:
   - "The reference shows a multi-step progress indicator — LSDS doesn't have one. Options: (a) `Breadcrumb`-style nav with state indicators, (b) propose adding a `StepIndicator` primitive, (c) skip for now and leave a TODO."

4. **Use the Storybook link as your eyes.** When you're unsure whether a variant exists, cite the Storybook URL pattern: `https://jake.nelson2.gitlab.io/sb-thelastsamurai/?path=/story/<section>-<component>--<story>`. Telling the user "see this story" is a valid hedge when you don't have the catalog handy.

## Component cheatsheet (fallback when catalog isn't loaded)

The catalog has the full detail. This is a quick map of what exists and where. **Always prefer the catalog when you have it.**

### RLM Layout (Suralink-specific composites)
`CommentCard`, `CommentComposer`, `EngagementHeader`, `EngagementLayout`, `FileDropZone`, `FileRow`, `FilterSwatchGroupRow`, `RequestDetail`, `RequestDetailActionBar`, `RequestDetailAssignments`, `RequestDetailHeader`, `RequestRow`, `RequestStatusColorNav`, `ActivitySection`, `ClientFilesSection`, `Stat`, `SubToolbar`

### Layout (structural)
`AppShell`, `Container`, `DetailPanel`, `Grid`, `Inset`, `ListPanel`, `MasterDetailLayout`, `Panel`, `PanelGroup`, `PanelHeader`, `ScrollArea`, `Stack`, `ThreeColumnLayout`

### Navigation
`Breadcrumb`, `NavItem` (incl. Waterfall variant), `PageHeader`, `Pagination`, `SideNav` (the dark sidebar), `Tabs`, `TopNav`

### Overlay (modals, popovers, drawers, alerts, comments)
`Accordion`, `ActionMenu` (+ `ActionMenuItem`), `Alert`, `Card`, `Drawer`, `Dropdown`, `Modal`, `Popover`, `Search`, `Tooltip`

### Primitives (atomic UI)
`Avatar`, `Badge`, `Button`, `Checkbox`, `Chip` (a.k.a. FilterChip), `CountBadge`, `DatePicker`, `Divider`, `FilterSwatch`, `FilterSwatchGroup`, `HighPriorityFlag`, `Icon` (1177 icons), `Input`, `List`, `NotificationBadge`, `Radio`, `ResizeHandle`, `Skeleton`, `Spinner`, `StatusDot`, `StatusTile`, `Switch`, `Table` (+ `TableHeaderCell` + `TableCell`), `Timestamp`, `Toast`

### Foundation (catalog only — no React component)
`Colors`, `Radii`, `Semantics`, `Shadows`, `Spacing`, `Typography`, `Icons`

If a UI need doesn't map cleanly to one of these names, that's the moment to check the catalog or surface the gap — don't invent a new component.

## Tokens at a glance

For the full token table (with notes on each), see `references/tokens.md`. Quick reference:

**Surfaces**: `bg-surface-canvas` (page), `bg-surface-elevated` (cards), `bg-surface-recessed` (sunken), `bg-surface-nav-950` (dark sidenav)

**Text**: `text-primary-900` (heading/body), `text-secondary-700` (supporting), `text-tertiary-500` (muted), `text-on-accent` (on filled buttons)

**Action**: `bg-action-primary-500` + `hover:bg-action-primary-hover-600`, `bg-action-destructive` + `hover:bg-action-attention-destructive`

**Accent (status + decoration)**: `bg-accent-{green,yellow,red,orange,purple,blue}-{surface,fg,border}`

**Request status (RLM-specific)**: `bg-request-status-{outstanding,fulfilled,returned,accepted}-{surface,fg,border}`

**Borders**: `border-line`, `border-line-focus`, `border-line-focus-soft`

**Radius**: `rounded-control` (buttons/inputs), `rounded-card`, `rounded-modal`, `rounded-pill`, `rounded-full`

**Type Scale**: `text-display-lg`, `text-display`, `text-heading-{lg,md,sm}`, `text-body-{md,sm}`, `text-body-md-strong`, `text-label-{md,sm}`, `text-label-md-bold`, `text-caption`, `text-code`

**Shadow**: `shadow-card`, `shadow-modal`, `shadow-toast`

**Spacing**: scale only — `p-1` (4px) through `p-12` (48px). No `p-[Npx]`.

## Forbidden patterns (the lint catches these — pre-empt it)

- `bg-white/N`, `bg-black/N` → use `bg-hover-overlay` or `bg-scrim`
- `text-white`, `text-black` → use `text-on-accent` or `text-primary-900`
- `bg-[#abc123]`, `text-[#abc123]` → use a semantic token
- `w-[280px]`, `h-[44px]` → snap to spacing scale or surface a missing token
- `text-sm`, `text-xs` → use Type Scale
- `rounded-lg`, `rounded-md` → use `rounded-control` / `rounded-card`
- Inline `style={{ color, background, margin, padding }}` → use className with the right token

## Phrases that should never appear in your output

These all signal the skill failed:
- "I'll create a new component for…"
- "Let me build a custom X…"
- "Here's a Tailwind div that…" *(without naming an LSDS component)*
- "Use the `text-sm` class…" *(or any Tailwind default)*
- "Set the color to `#…`"
- "Width: `280px`"

If one of those is on the tip of your tongue, stop. Run the prototyping loop from the top.

## When you don't know

- **Catalog ambiguous** → fetch the Storybook story URL for the component
- **Storybook doesn't show what you need** → cite the Figma node-id and ask the user
- **Variant absent** → propose extending an existing component with the smallest delta; do not silently invent
- **Component absent** → name the gap, propose options, do not scaffold

## Reference materials

- `references/tokens.md` — full semantic token table
- **Live catalog**: https://gitlab.com/jake.nelson2/sb-thelastsamurai/-/raw/main/DESIGN_SYSTEM.md
- **Live Storybook**: https://jake.nelson2.gitlab.io/sb-thelastsamurai
- **Figma file**: https://www.figma.com/design/ZP0lSeT5Nwm1lpWI79qIaf/LSDS
- **Source repo (GitLab)**: https://gitlab.com/jake.nelson2/sb-thelastsamurai
- **Source repo (GitHub mirror)**: https://github.com/jakenelson-PD1/sb-thelastsamurai
