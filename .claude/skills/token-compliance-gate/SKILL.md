---
name: token-compliance-gate
description: MANDATORY pre-write gate for every styling change. Auto-invoke before ANY edit to .tsx/.ts/.css files that touches className, style, or any visual property, and before ANY Figma write that creates/edits paints, padding, gap, radius, or dimensions. Blocks raw values that should be design tokens.
---

# Token Compliance Gate

## Why this skill exists

CLAUDE.md says token compliance is the default. It hasn't been. The same violations keep slipping through (raw `bg-white/10`, off-scale `h-11`, unbound Figma sizes) because the rule is documented but not gated. This skill is the gate.

## The hard rule

> **Before any styling write — source OR Figma — confirm every numeric/color value resolves to a documented token. If you find yourself typing a raw value, STOP and look up the token first.**

If the token doesn't exist:
1. Justify why (genuine one-off vs. missing token)
2. If missing — add the token to `tokens/semantic.ts` or `tokens/spacing.ts` FIRST, then use it
3. Never use a raw value as a workaround

## Pre-write checklist — run mentally before EVERY edit

### Source (.tsx / .ts / className strings)

For every class you type:

| Property type | Check |
|---|---|
| Colors (`bg-*`, `text-*`, `border-*`, `divide-*`) | Must match an entry in `tokens/semantic.ts` Tailwind alias section. **Banned**: `bg-white/N`, `bg-black/N`, `text-white`, `text-black`, raw `bg-[#...]`, `text-[#...]`, `border-[rgba(...)]`. |
| Font size | Must be `text-body-md|sm`, `text-heading-lg|md|sm`, `text-label-md|sm|sm-bold|md-bold`, `text-caption|caption-bold`, `text-display|display-lg`. **Banned**: `text-xs/sm/base/lg/xl/2xl/...` (Tailwind defaults), `text-[Npx]`. |
| Font weight | Combination of `text-*` + `font-*` must correspond to a real Type Scale style. Body SM Semibold doesn't exist; Body SM Medium does. If unsure, check `tokens/typography.ts`. |
| Spacing (`p-*`, `m-*`, `gap-*`) | Must be a value in `tokens/spacing.ts` (`scale/0..10/12/15/16/20/24`) OR a semantic class (`p-panel-compact|panel|panel-relaxed`, `gap-section-gap`). **Banned**: `p-[Npx]`, `px-13` (or any number not in scale). |
| Dimensions (`h-*`, `w-*`) | Same spacing scale rules. **Banned**: `h-11`, `w-13`, etc. (44 is not in our scale). Need 44px? Either add `scale/11` to spacing tokens OR use 40 (`scale/10`) or 48 (`scale/12`). |
| Radius | Only `rounded-control|card|modal|pill|full`. **Banned**: `rounded-md`, `rounded-lg`, `rounded-[Npx]`. |
| Shadow | Only `shadow-card|card-hover|modal|popover`. **Banned**: raw `shadow-[...]`. |
| Opacity overlays | Use the named overlay token (`bg-hover-overlay`, `bg-nav-hover-bg`, `bg-scrim`). **Banned**: `bg-white/N`, `bg-black/N`. |

### Figma writes (`use_figma`)

| Property | Rule |
|---|---|
| `fills`, `strokes` | Must call `figma.variables.setBoundVariableForPaint(paint, 'color', semanticVar)`. Never assign raw `{type:'SOLID', color:{r,g,b}}` and stop. |
| `paddingLeft/Right/Top/Bottom`, `itemSpacing` | Must call `node.setBoundVariable(prop, spacingVar)` after setting the value. |
| `width`, `height` (FIXED nodes) | If the size matches a spacing scale value (16/20/24/32/40/48/64/80/96/...), bind to `scale/N`. Free-form widths (panel proportions, content frames) don't bind. |
| `cornerRadius` (and per-corner) | Must `setBoundVariable('cornerRadius', radiusVar)`. |
| Text fonts/sizes | Must match a registered Type Scale text style. Apply via `textStyleId`. |

## Common violations (the things I keep doing)

| Wrong | Why it failed | Right |
|---|---|---|
| `hover:bg-white/10` | No semantic token; doesn't dark-mode swap | `hover:bg-nav-hover-bg` or `hover:bg-hover-overlay` |
| `h-11 w-11` | 44px not in spacing scale | `h-10 w-10` (40px) or `h-12 w-12` (48px); add `scale/11` only if 44 is truly canonical |
| `bg-fg-primary` for a navigation surface | `fg-*` is foreground/text; using it for backgrounds is semantically wrong | `bg-nav-bg` |
| `text-fg-on-accent` for nav icon | Token is for "white text on a colored button", not nav rail text | `text-nav-text` |
| `rounded-md` | Tailwind default, not in our radius scale | `rounded-control` (4) or `rounded-card` (8) |
| `text-sm` | Tailwind default, no Type Scale meaning | `text-body-sm` (or whichever Type Scale role fits) |
| `font-semibold` on `text-body-sm` | Body SM Semibold isn't a Type Scale style | `text-body-sm font-medium` (Body SM Medium is real) |
| `style={{ padding: '12px' }}` | Bypasses Tailwind/tokens entirely | `className="p-3"` (or `p-panel-compact`) |
| `<div className="rounded-pill bg-...">` | Should be the canonical `<Chip>` | Compose from primitive |
| Figma: `comp.fills = [{type:'SOLID', color:{r:0.9, g:0.9, b:0.9}}]` | No variable binding | Use `setBoundVariableForPaint(...)` with the matching Semantic var |

## The token lookup pattern

Before writing a class:

1. **Identify the role**: Is this a foreground? Background? Border? Hover state? Action surface? Navigation surface?
2. **Map role → token**: Use the Token Quick Reference in CLAUDE.md.
3. **Confirm the class exists**: `grep -r "'bg-X'" tokens/semantic.ts` (the Tailwind alias section).
4. **If no token exists for the role** — propose adding one. Don't use raw value as a workaround.

## When the lint fires

A pre-commit lint script at `scripts/check-tokens.mjs` blocks the mechanical violations (raw color/dim/radius classes). If it fires:

1. **Read the violation** — it cites the file/line and the banned pattern.
2. **Map to a token** using the table above.
3. **Replace and re-stage**.

Never `--no-verify` past this lint. If you genuinely need a one-off (rare), add an inline comment `// token-lint-skip: <reason>` so the gap is explicit.

## What this skill does NOT cover

- **Column proportions** in layout primitives (e.g. `sidebarDefaultSize={18}`) are consumer-configurable defaults, not visual tokens.
- **Pixel-precise positions** in Matrix story cells (e.g. `x: 1344`) mirror Figma absolute coords; they're spatial mirrors, not tokens.
- **Story state** (story-only test data like dates, names, totals) — content, not styling.

Everything else is in scope.

## Output gate (always)

After every styling write, before reporting "done":

1. Run `npm run check-tokens` (or `node scripts/check-tokens.mjs <changed-files>`)
2. Confirm zero violations
3. Only THEN report the work complete

Skipping this is the same defect as the lint not existing.
