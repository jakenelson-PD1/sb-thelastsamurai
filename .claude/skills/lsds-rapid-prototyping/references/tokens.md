# LSDS Semantic Token Reference

Full token table loaded on demand by the lsds-rapid-prototyping skill. Use these Tailwind classes — never raw values. The repo's pre-commit lint blocks anything off-scale.

## Surfaces (page + container backgrounds)

| Class | Use for | Notes |
|---|---|---|
| `bg-surface-canvas` | Page background, app shell | Light gray neutral; the "underneath" surface |
| `bg-surface-elevated` | Cards, modals, panels, dropdowns | One step lighter/whiter than canvas |
| `bg-surface-recessed` | Sunken areas, well-style insets | One step darker than canvas |
| `bg-surface-pressed` | Active/pressed background | Slightly darker for click states |
| `bg-surface-nav-950` | Dark sidenav background | Always-dark, used for `SideNav` |
| `bg-surface-nav-active` | Active row in dark sidenav | Brand-blue accent |
| `bg-surface-header-bg` | Top nav chrome | Matches sidenav dark |
| `bg-hover-overlay` | Row hover, ghost button hover | Semi-transparent darken |
| `bg-scrim` | Modal backdrop | Semi-transparent black |

## Text

| Class | Use for |
|---|---|
| `text-primary-900` | Headings, body text, main content |
| `text-secondary-700` | Supporting copy, secondary labels |
| `text-tertiary-500` | Muted, deemphasized, hints, captions |
| `text-on-accent` | Text on filled action buttons (white in both themes) |
| `text-icon-800` | Default icon glyph color |
| `text-link` | Linked text (matches action/primary) |
| `text-link-hover` | Linked text on hover |

## Action (interactive states)

| Class | Use for |
|---|---|
| `bg-action-primary-500` | Primary button background |
| `hover:bg-action-primary-hover-600` | Primary button hover |
| `bg-action-primary-selected-700` | Selected/pressed primary |
| `bg-action-destructive` | Destructive button (delete, remove) |
| `hover:bg-action-attention-destructive` | Destructive button hover |
| `bg-action-notification` | Notification badge background |
| `bg-action-selected-50` | Subtle selected-row background |

## Accent (status colors — non-RLM, decoration)

Each accent has `-surface` (light bg), `-fg` (text), `-border` (border). Six hues:

| Hue | Use for | Tokens |
|---|---|---|
| green | Success, completed | `bg-accent-green-surface`, `text-accent-green-fg`, `border-accent-green-border` |
| yellow | Warning, attention | `bg-accent-yellow-surface`, `text-accent-yellow-fg`, `border-accent-yellow-border` |
| red | Error, danger | `bg-accent-red-surface`, `text-accent-red-fg`, `border-accent-red-border` |
| orange | Attention, mid-priority | `bg-accent-orange-surface`, `text-accent-orange-fg`, `border-accent-orange-border` |
| purple | Brand, special | `bg-accent-purple-surface`, `text-accent-purple-fg`, `border-accent-purple-border` |
| blue | Info, neutral status | `bg-accent-blue-surface`, `text-accent-blue-fg`, `border-accent-blue-border` |

## Request status (RLM-specific, the canonical request lifecycle)

| Status | Tokens |
|---|---|
| outstanding | `bg-request-status-outstanding-{surface,fg,border}` |
| fulfilled | `bg-request-status-fulfilled-{surface,fg,border}` |
| returned | `bg-request-status-returned-{surface,fg,border}` |
| accepted | `bg-request-status-accepted-{surface,fg,border}` |

These are *the* status colors for request rows, file rows, status chips. Don't substitute generic accent colors.

## Borders

| Class | Use for |
|---|---|
| `border-line` | Default 1px border (light gray) |
| `border-line-strong` | Higher-contrast border |
| `border-line-focus` | Focus ring (brand blue, 2px) |
| `border-line-focus-soft` | Selected-state outer halo (lighter blue) |

## Radius

| Class | Use for | Pixel value |
|---|---|---|
| `rounded-control` | Buttons, inputs, chips, segmented controls | 6px |
| `rounded-card` | Cards, panels, dropdowns | 8px |
| `rounded-modal` | Modal dialogs | 12px |
| `rounded-pill` | Pill-shaped buttons, badges | 9999px (capped) |
| `rounded-full` | Avatars, circular icons | 9999px |

⚠️ Never use Tailwind defaults: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` are all forbidden by the lint.

## Type Scale

| Class | Use for | Spec |
|---|---|---|
| `text-display-lg` | Hero numbers, marketing | 48px / Semibold |
| `text-display` | Page-level display | 32px / Semibold |
| `text-heading-lg` | Page title | 24px / Semibold |
| `text-heading-md` | Section heading | 20px / Semibold |
| `text-heading-sm` | Subsection heading | 18px / Semibold |
| `text-body-md` | Default body text | 14px / Regular |
| `text-body-md-strong` | Body emphasis (cards titles, important rows) | 14px / Semibold |
| `text-body-sm` | Smaller body, descriptions | 13px / Regular |
| `text-label-md` | Form labels, button text | 14px / Medium |
| `text-label-md-bold` | Bold label, prominent CTA | 14px / Bold |
| `text-label-sm` | Tiny labels, meta info | 12px / Medium |
| `text-caption` | Timestamps, footnotes | 11px / Regular |
| `text-caption-bold` | Bold caption | 11px / Semibold |
| `text-code` | Monospace, code blocks | 13px / Mono |

⚠️ Never use Tailwind defaults: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc. All blocked.

## Shadow

| Class | Use for |
|---|---|
| `shadow-card` | Cards, raised panels |
| `shadow-modal` | Modal dialogs, popovers, drawers |
| `shadow-toast` | Toast notifications |

## Spacing

Use only Tailwind's default integer scale: `p-0`, `p-0.5`, `p-1`, `p-1.5`, `p-2`, `p-2.5`, `p-3`, `p-4`, `p-5`, `p-6`, `p-8`, `p-10`, `p-12`.

Same scale for `m-*`, `gap-*`, `space-x-*`, `space-y-*`, `mt-*`, `mb-*`, etc.

⚠️ Never use arbitrary values: `p-[20px]`, `gap-[7px]`, `mt-[16px]` are all blocked. If you need a value not on the scale, that's a signal — propose adding a token or use the nearest scale value.

## Icon sizes

`Icon`, `Avatar`, status icons all support a `size` prop:

- `size="xs"` — 12px (tight inline icons)
- `size="sm"` — 16px (default for buttons, chips)
- `size="md"` — 20px (default for nav rows, list items)
- `size="lg"` — 24px (file icons, headings)
- `size="xl"` — 32px (avatar md, empty states)

Don't use raw `w-4 h-4` etc. on icon containers — use the `size` prop on the canonical component instead.

## Where to find more

- The catalog (`DESIGN_SYSTEM.md`) has every component's full prop interface
- `tokens/semantic.ts` in the repo has the underlying CSS-variable definitions
- `globals.css` shows the `:root` + `.dark` + `[data-theme]` wiring
- The pre-commit lint at `scripts/check-tokens.mjs` is the ground truth for what's blocked
