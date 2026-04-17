# Navigation Core — Figma Design Spec

**Date:** 2026-04-17
**Components:** Tabs, Sidebar, TopNav
**Figma file:** `ZP0lSeT5Nwm1lpWI79qIaf`
**Storybook:** `http://localhost:6006`

---

## Overview

Build six ComponentSets across three navigation concepts — one atomic item component and one assembled container per concept. Every color is bound to the Semantic variable collection; every spacing/radius value is bound to the Spacing/Radius variable collection. Hardcoded exceptions exist only where no matching variable is available — see the full list in the Hardcoded exceptions section.

---

## Component 1 — Tab (item)

**Figma page:** existing Tabs page
**Source:** `components/navigation/Tabs.tsx`
**Storybook:** `http://localhost:6006/?path=/story/navigation-tabs--default`

### Variants

`State=Active | State=Inactive` — 2 total

### Visual spec

| Property | Active | Inactive |
|---|---|---|
| Bottom border (2px) | `action/primary` | transparent (hardcode) |
| Text color | `action/primary` | `fg/muted` |
| Background | none | none |
| Font | Inter Medium 14px / 20px | same |

### Layout
- `layoutMode = HORIZONTAL`, hug width + hug height (height determined by py-2 padding + 20px line-height text = 36px naturally; no explicit height token)
- `paddingLeft/Right` → `scale/4` (px-4 = 16px)
- `paddingTop/Bottom` → `scale/2` (py-2 = 8px)
- Bottom stroke: 2px, `strokeAlign = OUTSIDE`, color bound per state above
- `marginBottom = -1` to overlap the container border-b (simulate `-mb-px`)

### Hover note
Inactive tabs have a CSS hover sub-state (`hover:text-fg-secondary`) that is not modeled as a separate Figma variant — it's a code-only transition. The Tab ComponentSet has 2 variants (Active, Inactive) only.

### Component properties
- `Label` (TEXT) — default "Tab"

---

## Component 2 — Tabs (bar)

**1 variant** (assembled container)

### Visual spec
- Horizontal row of Tab instances
- Bottom border 1px → `border/default`
- Shows 3 Tab instances: first = Active, remaining = Inactive

### Layout
- `layoutMode = HORIZONTAL`, hug width
- `itemSpacing` → 0px **hardcoded** (tabs are flush; no matching `scale/0` variable exists)
- Bottom stroke: 1px `border/default`, `strokeAlign = INSIDE`

### Component properties
- `Label` (TEXT) propagated to all Tab instances

---

## Component 3 — SidebarItem

**Figma page:** existing Sidebar page
**Source:** `components/navigation/Sidebar.tsx`
**Storybook:** `http://localhost:6006/?path=/story/navigation-sidebar--default`

### Variants

`State=Active | State=Inactive | State=Hover` — 3 total

### Visual spec

| Property | Active | Inactive | Hover |
|---|---|---|---|
| Fill | `bg/surface` | none | `bg/surface` |
| Left stroke (2px) | `action/primary` | none | none |
| Text color | `action/primary` | `fg/secondary` | `fg/secondary` |
| Corner radius | `radius/card` | `radius/card` | `radius/card` |

### Layout
- `layoutMode = HORIZONTAL`, fill width (224px container), hug height
- Active: `paddingLeft` = 10px **hardcoded** (pl-2.5 — accounts for 2px border offset), `paddingRight` → `scale/3` (pr-3 = 12px)
- Inactive/Hover: `paddingLeft/Right` → `scale/3` (px-3 = 12px)
- `paddingTop/Bottom` → `scale/2` (py-2 = 8px)
- Active left stroke: 2px, `strokeAlign = OUTSIDE` on left side only

### Hover note
The Hover state is modeled as a full Figma variant because the background fill change (`bg/surface`) is a visually distinct interactive state worth representing in Figma. The source implements it via CSS `hover:bg-surface` pseudo-class, but unlike the Tab's subtle hover (text-only color shift), the SidebarItem hover produces a visible surface fill that designers need to reference. This is an intentional design decision.

### Component properties
- `Label` (TEXT) — default "Nav item"

---

## Component 4 — Sidebar (container)

**1 variant** (assembled container)

### Visual spec
- Vertical stack of SidebarItem instances
- Background: none (inherits page bg)
- Width: 224px **hardcoded** (w-56 — no matching Spacing variable)

### Layout
- `layoutMode = VERTICAL`, fixed width 224px, hug height
- `itemSpacing` → `scale/1` (gap-1 = 4px)
- Shows 5 SidebarItem instances: first = Active, rest = Inactive

### Component properties
- `Label` (TEXT) propagated to all SidebarItem instances

---

## Component 5 — NavItem

**Figma page:** existing TopNav page
**Source:** `components/navigation/TopNav.tsx`
**Storybook:** `http://localhost:6006/?path=/story/navigation-top-nav--default`

### Variants

`State=Default | State=Active | State=Hover` — 3 total

### Visual spec

| Property | Default | Active | Hover |
|---|---|---|---|
| Pill fill | none | `nav/active-bg` | `nav/hover-bg` |
| Text color | `nav/text` | `fg/on-accent` | `fg/on-accent` |
| Corner radius | `radius/card` | `radius/card` | `radius/card` |

### Layout
The NavItem has a two-layer structure matching the source:

**Outer frame** (focus/interaction target — `<Tag>` wrapper):
- `layoutMode = HORIZONTAL`, hug width + hug height
- `padding` → `scale/1` (p-1 = 4px, all sides) — transparent, no fill, no radius

**Inner pill frame** (`<span>` with state colors):
- `layoutMode = HORIZONTAL`, hug width + hug height
- `paddingLeft/Right` → `scale/2` (px-2 = 8px) — base viewport size; responsive `md:px-3` is not modeled in Figma
- `paddingTop/Bottom` → `scale/2` (py-2 = 8px)
- `itemSpacing` → `scale/2` (gap-2 = 8px, between icon and label)
- `cornerRadius` → `radius/card`

### Component properties
- `Label` (TEXT) — default "Nav item"
- `Icon` (INSTANCE_SWAP) — default `activity` Size=Small (16px)
- `Show Icon` (BOOLEAN) — default false

---

## Component 6 — TopNav (full bar)

**1 variant** (assembled full-width bar)

### Visual spec
- Full-width navy bar, height 60px
- Three-slot `justify-between` layout: **Left** (wordmark), **Center** (nav items), **Right** (avatar + badge)
- Left: wordmark text placeholder (`fg/on-accent`, Inter Medium 16px)
- Center: 3 NavItem instances in a `gap-1` row (State=Active, Default, Default)
- Right: Avatar (Size=sm, Variant=firm) + NotificationBadge in a `gap-3` stack

| Property | Value | Variable |
|---|---|---|
| Fill | `nav/bg` (dark navy) | Semantic |
| Height | 60px | `scale/15` |
| Horizontal padding | 32px | `scale/8` |
| Item gap (right slot) | 12px | `scale/3` |

### Layout
- `layoutMode = HORIZONTAL`, fill width (set to 1280px as representative width), fixed height 60px
- `primaryAxisAlignItems = SPACE_BETWEEN`
- `paddingLeft/Right` → `scale/8` (px-8 = 32px)
- `counterAxisAlignItems = CENTER`
- Nav items row: horizontal stack, `itemSpacing` → `scale/1` (gap-1 = 4px between NavItem instances)
- Right slot: horizontal stack, `itemSpacing` → `scale/3` (gap-3 = 12px)

---

## Variable Binding Summary

### Semantic (color)
| Token | Usage |
|---|---|
| `action/primary` | Tab active border + text, SidebarItem active border + text |
| `fg/muted` | Tab inactive text |
| `fg/secondary` | SidebarItem inactive/hover text |
| `fg/on-accent` | NavItem active/hover text, TopNav wordmark |
| `bg/surface` | SidebarItem active + hover fill |
| `border/default` | Tabs container bottom border |
| `nav/bg` | TopNav bar fill |
| `nav/active-bg` | NavItem active fill |
| `nav/hover-bg` | NavItem hover fill |
| `nav/text` | NavItem default text |

### Spacing
| Token | px | Usage |
|---|---|---|
| `scale/1` | 4 | Sidebar container gap, TopNav nav items gap, NavItem outer frame padding |
| `scale/2` | 8 | Tab paddingY, SidebarItem paddingY, NavItem paddingX/Y/gap |
| `scale/3` | 12 | SidebarItem paddingX, TopNav right-slot gap |
| `scale/4` | 16 | Tab paddingX |
| `scale/8` | 32 | TopNav paddingX |
| `scale/15` | 60 | TopNav height — confirmed Figma Spacing variable |

### Radius
| Token | Usage |
|---|---|
| `radius/card` | SidebarItem, NavItem pill |

### Hardcoded exceptions
- Tab bottom border: 2px (no variable)
- Tab inactive bottom border: transparent (no variable)
- SidebarItem active paddingLeft: 10px (`pl-2.5` = 10px hardcoded; accounts for 2px left stroke offset from the `scale/3` baseline of 12px)
- SidebarItem left border: 2px (no variable)
- Sidebar container width: 224px (`w-56` — no matching scale value)
- Tabs item spacing: 0px (tabs are flush, no gap)
- Tab `marginBottom`: −1px (simulates `-mb-px` to overlap the container border-b; no matching variable)
- Tabs container bottom stroke: 1px (border width — no matching Spacing variable exists)

---

## Execution Order

1. **Tab** item (2 variants) → verify screenshot vs Storybook
2. **Tabs** bar (1 variant using Tab instances)
3. **SidebarItem** (3 variants) → verify
4. **Sidebar** container (1 variant using SidebarItem instances)
5. **NavItem** (3 variants) → verify
6. **TopNav** bar (1 variant using NavItem + Avatar + NotificationBadge instances)

---

## Verification

After each ComponentSet:
- `get_screenshot` in Figma
- Compare against Storybook story
- Confirm Figma right panel shows variable chips (not raw values) for all fills, strokes, text colors, padding, gap, cornerRadius, and height/width where applicable
