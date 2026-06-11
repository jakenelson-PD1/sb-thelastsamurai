import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlusIcon } from './icons/PlusIcon';
import { Trash03Icon } from './icons/Trash03Icon';
import { Settings01Icon } from './icons/Settings01Icon';
import { AtSignIcon } from './icons/AtSignIcon';
import { Download01Icon } from './icons/Download01Icon';
import { ZoomInIcon } from './icons/ZoomInIcon';
import { ZoomOutIcon } from './icons/ZoomOutIcon';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button', component: Button, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Button>;

// ─── All variants ─────────────────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Delete account</Button>
      <Button variant="link">Learn more</Button>
    </div>
  ),
};

// ─── Individual variants ──────────────────────────────────────────────────────
export const Primary: Story   = { args: { children: 'Save changes',   variant: 'primary' } };
export const Secondary: Story = { args: { children: 'Cancel',         variant: 'secondary' } };
export const Ghost: Story     = { args: { children: 'Learn more',     variant: 'ghost' } };
export const Danger: Story    = { args: { children: 'Delete account', variant: 'danger' } };
export const Link: Story      = { args: { children: 'View details',   variant: 'link' } };

// ─── Sizes ───────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="secondary" size="xxs">XXS</Button>
      <Button variant="secondary" size="xs">Extra small</Button>
      <Button variant="secondary" size="sm">Small</Button>
      <Button variant="secondary" size="md">Medium</Button>
    </div>
  ),
};

export const Disabled: Story = { args: { children: 'Disabled', disabled: true } };

// ─── Selected (ghost icon-only toggles) ─────────────────────────────────────
// CANONICAL PATTERN for toggleable ghost icon-only buttons. Mirrors the
// Figma Ghost iconOnly Focus variant verbatim — the canonical visual for
// the toggle/pressed pattern in this design system.
//
//   ┌──────────────────────────────────────────────────────────────────┐
//   │  Layer            Token                Width   Direction          │
//   ├──────────────────────────────────────────────────────────────────┤
//   │  Fill             bg-pressed           —       (neutral-300, mid-gray)│
//   │  Inner stroke     ring-1 ring-inset    1px     INSIDE (action-primary)│
//   │  Outer halo       outline-2            2px     outward (line-focus)  │
//   │  Glyph color      unchanged (default)  —       —                   │
//   └──────────────────────────────────────────────────────────────────┘
//
// Wire it up by passing `selected={isActive}` to a ghost iconOnly Button.
// `aria-pressed` is set automatically. Visual + a11y in one prop.
export const SelectedIconOnly: Story = {
  name: 'Selected — Ghost Icon Only (canonical pattern)',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      {/* Headline pattern — full toolbar showing the three peer states */}
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Toolbar — toggle the @ Mention</h3>
        <p className="text-body-sm text-secondary max-w-prose">
          A document viewer toolbar with five ghost icon-only toggles. Only the
          third button (Mention) is in the selected state — the canonical
          recipe: <code className="font-mono text-body-sm text-primary">bg-pressed</code> fill
          + <code className="font-mono text-body-sm text-primary">ring-1 ring-inset ring-action-primary</code> inner stroke
          + <code className="font-mono text-body-sm text-primary">outline-2 outline-line-focus</code> outer halo.
        </p>
        <div className="inline-flex items-center gap-1 rounded-pill bg-surface p-1 w-max">
          <Button variant="ghost" size="sm" iconOnly aria-label="Zoom in"
            startIcon={<ZoomInIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Zoom out"
            startIcon={<ZoomOutIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Mention" selected
            startIcon={<AtSignIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Download"
            startIcon={<Download01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Settings"
            startIcon={<Settings01Icon size="md" />} />
        </div>
      </section>

      {/* State comparison — idle / hover hint / selected side by side */}
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">State comparison</h3>
        <div className="grid grid-cols-[120px_repeat(3,80px)] gap-x-4 gap-y-2 items-center">
          <span></span>
          <span className="text-label-sm text-secondary text-center">Idle</span>
          <span className="text-label-sm text-secondary text-center">Hover-equivalent</span>
          <span className="text-label-sm text-secondary text-center">Selected</span>

          <span className="font-mono text-label-sm text-muted">@ mention</span>
          <Button variant="ghost" size="sm" iconOnly aria-label="Idle"
            startIcon={<AtSignIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Hover"
            className="!bg-hover-overlay"
            startIcon={<AtSignIcon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Selected" selected
            startIcon={<AtSignIcon size="md" />} />

          <span className="font-mono text-label-sm text-muted">download</span>
          <Button variant="ghost" size="sm" iconOnly aria-label="Idle"
            startIcon={<Download01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Hover"
            className="!bg-hover-overlay"
            startIcon={<Download01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Selected" selected
            startIcon={<Download01Icon size="md" />} />

          <span className="font-mono text-label-sm text-muted">settings</span>
          <Button variant="ghost" size="sm" iconOnly aria-label="Idle"
            startIcon={<Settings01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Hover"
            className="!bg-hover-overlay"
            startIcon={<Settings01Icon size="md" />} />
          <Button variant="ghost" size="sm" iconOnly aria-label="Selected" selected
            startIcon={<Settings01Icon size="md" />} />
        </div>
      </section>

      {/* Size scale — selected pattern at every iconOnly size */}
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Selected at every size</h3>
        <div className="grid grid-cols-[80px_repeat(4,80px)] gap-x-4 gap-y-2 items-center">
          <span></span>
          {(['xxs', 'xs', 'sm', 'md'] as const).map((s) => (
            <span key={s} className="text-label-sm text-secondary text-center">{s}</span>
          ))}
          <span className="font-mono text-label-sm text-muted">selected</span>
          {(['xxs', 'xs', 'sm', 'md'] as const).map((s) => (
            <Button key={s} variant="ghost" size={s} iconOnly selected
              aria-label={`Selected ${s}`}
              startIcon={<AtSignIcon size={s === 'xxs' ? 'sm' : 'md'} />} />
          ))}
        </div>
      </section>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};

// ─── With icons ───────────────────────────────────────────────────────────────
export const WithStartIcon: Story = {
  args: {
    children: 'Add item',
    variant: 'primary',
    startIcon: <PlusIcon size="sm" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Settings',
    variant: 'secondary',
    endIcon: <Settings01Icon size="sm" />,
  },
};

// ─── Icon only ───────────────────────────────────────────────────────────────
export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="ghost"     iconOnly size="xxs" startIcon={<PlusIcon     size="sm" />} aria-label="Add" />
      <Button variant="primary"   iconOnly size="xs"  startIcon={<PlusIcon     size="sm" />} aria-label="Add" />
      <Button variant="primary"   iconOnly size="sm"  startIcon={<PlusIcon     size="sm" />} aria-label="Add" />
      <Button variant="primary"   iconOnly size="md"  startIcon={<PlusIcon     size="md" />} aria-label="Add" />
      <Button variant="secondary" iconOnly size="md"  startIcon={<Settings01Icon size="md" />} aria-label="Settings" />
      <Button variant="ghost"     iconOnly size="md"  startIcon={<Settings01Icon size="md" />} aria-label="Settings" />
      <Button variant="danger"    iconOnly size="md"  startIcon={<Trash03Icon  size="md" />} aria-label="Delete" />
    </div>
  ),
};

// ─── Matrix — 1:1 mirror of Figma Button ComponentSet (480:848) ──────────────
// 432 variants: 5 Type × 4 Size × 4 State × 7 Icon&size (Link has no iconOnly).
// Each cell is absolute-positioned at Figma's exact (x, y) coordinates.

const HOVER_CLASS: Record<string, string> = {
  primary:   '!bg-action-primary-hover',
  secondary: '!bg-recessed',
  ghost:     '!bg-surface',
  danger:    '!bg-action-danger-hover',
  link:      '',
};
const FOCUS_CLASS = '!ring-2 !ring-line-focus !outline-none';

// Raw cell data captured from Figma ComponentSet 480:848.
// Format: Type|Size|State|Icon&size|x|y|w|h
const BUTTON_CELLS_RAW = `Primary|md|Default|None|0|0|76|36
Primary|md|Default|Left|88|0|100|36
Primary|md|Default|Right|216|0|100|36
Primary|md|Default|sm Only|344|0|36|36
Primary|md|Default|md Only|408|0|36|36
Primary|md|Default|lg Only|472|0|36|36
Primary|md|Hover|None|554|0|76|36
Primary|md|Hover|Left|642|0|100|36
Primary|md|Hover|Right|770|0|100|36
Primary|md|Hover|Only|898|0|36|36
Primary|md|Hover|md Only|962|0|36|36
Primary|md|Hover|lg Only|1026|0|36|36
Primary|md|Focus|None|1108|0|76|36
Primary|md|Focus|Left|1196|0|100|36
Primary|md|Focus|Right|1324|0|100|36
Primary|md|Focus|sm Only|1452|0|36|36
Primary|md|Focus|md Only|1516|0|36|36
Primary|md|Focus|lg Only|1580|0|36|36
Primary|md|Disabled|None|1662|0|76|36
Primary|md|Disabled|Left|1750|0|100|36
Primary|md|Disabled|Right|1878|0|100|36
Primary|md|Disabled|Only|2006|0|36|36
Primary|md|Disabled|md Only|2070|0|36|36
Primary|md|Disabled|lg Only|2134|0|36|36
Primary|sm|Default|None|0|44|68|32
Primary|sm|Default|Left|88|44|92|32
Primary|sm|Default|Right|216|44|92|32
Primary|sm|Default|sm Only|344|44|32|32
Primary|sm|Default|md Only|410|44|32|32
Primary|sm|Default|lg Only|474|44|32|32
Primary|sm|Hover|None|554|44|68|32
Primary|sm|Hover|Left|642|44|92|32
Primary|sm|Hover|Right|770|44|92|32
Primary|sm|Hover|Only|898|44|32|32
Primary|sm|Hover|md Only|964|44|32|32
Primary|sm|Hover|lg Only|1028|44|32|32
Primary|sm|Focus|None|1108|44|68|32
Primary|sm|Focus|Left|1196|44|92|32
Primary|sm|Focus|Right|1324|44|92|32
Primary|sm|Focus|sm Only|1452|44|32|32
Primary|sm|Focus|md Only|1518|44|32|32
Primary|sm|Focus|lg Only|1582|44|32|32
Primary|sm|Disabled|None|1662|44|68|32
Primary|sm|Disabled|Left|1750|44|92|32
Primary|sm|Disabled|Right|1878|44|92|32
Primary|sm|Disabled|Only|2006|44|32|32
Primary|sm|Disabled|md Only|2072|44|32|32
Primary|sm|Disabled|lg Only|2136|44|32|32
Primary|xs|Default|None|0|84|68|28
Primary|xs|Default|Left|88|84|92|28
Primary|xs|Default|Right|216|84|92|28
Primary|xs|Default|sm Only|344|84|28|28
Primary|xs|Default|md Only|412|84|28|28
Primary|xs|Default|lg Only|476|84|28|28
Primary|xs|Hover|None|554|84|68|28
Primary|xs|Hover|Left|642|84|92|28
Primary|xs|Hover|Right|770|84|92|28
Primary|xs|Hover|Only|898|84|28|28
Primary|xs|Hover|md Only|966|84|28|28
Primary|xs|Hover|lg Only|1030|84|28|28
Primary|xs|Focus|None|1108|84|68|28
Primary|xs|Focus|Left|1196|84|92|28
Primary|xs|Focus|Right|1324|84|92|28
Primary|xs|Focus|sm Only|1452|84|28|28
Primary|xs|Focus|md Only|1520|84|28|28
Primary|xs|Focus|lg Only|1584|84|28|28
Primary|xs|Disabled|None|1662|84|68|28
Primary|xs|Disabled|Left|1750|84|92|28
Primary|xs|Disabled|Right|1878|84|92|28
Primary|xs|Disabled|Only|2006|84|28|28
Primary|xs|Disabled|md Only|2074|84|28|28
Primary|xs|Disabled|lg Only|2138|84|28|28
Primary|xxs|Default|None|0|120|55|24
Primary|xxs|Default|Left|88|120|75|24
Primary|xxs|Default|Right|216|120|75|24
Primary|xxs|Default|sm Only|344|120|24|24
Primary|xxs|Default|md Only|412|120|24|24
Primary|xxs|Default|lg Only|476|120|24|24
Primary|xxs|Hover|None|554|120|55|24
Primary|xxs|Hover|Left|642|120|75|24
Primary|xxs|Hover|Right|770|120|75|24
Primary|xxs|Hover|Only|898|120|24|24
Primary|xxs|Hover|md Only|966|120|24|24
Primary|xxs|Hover|lg Only|1030|120|24|24
Primary|xxs|Focus|None|1108|120|55|24
Primary|xxs|Focus|Left|1196|120|75|24
Primary|xxs|Focus|Right|1324|120|75|24
Primary|xxs|Focus|sm Only|1452|120|24|24
Primary|xxs|Focus|md Only|1520|120|24|24
Primary|xxs|Focus|lg Only|1584|120|24|24
Primary|xxs|Disabled|None|1662|120|55|24
Primary|xxs|Disabled|Left|1750|120|75|24
Primary|xxs|Disabled|Right|1878|120|75|24
Primary|xxs|Disabled|Only|2006|120|24|24
Primary|xxs|Disabled|md Only|2074|120|24|24
Primary|xxs|Disabled|lg Only|2138|120|24|24
Secondary|md|Default|None|0|171|76|36
Secondary|md|Default|Left|88|171|100|36
Secondary|md|Default|Right|216|171|100|36
Secondary|md|Default|Only|344|171|36|36
Secondary|md|Default|md Only|408|171|36|36
Secondary|md|Default|lg Only|472|171|36|36
Secondary|md|Hover|None|554|171|76|36
Secondary|md|Hover|Left|642|171|100|36
Secondary|md|Hover|Right|770|171|100|36
Secondary|md|Hover|Only|898|171|36|36
Secondary|md|Hover|md Only|962|171|36|36
Secondary|md|Hover|lg Only|1026|171|36|36
Secondary|md|Focus|None|1108|171|76|36
Secondary|md|Focus|Left|1196|171|100|36
Secondary|md|Focus|Right|1324|171|100|36
Secondary|md|Focus|Only|1452|171|36|36
Secondary|md|Focus|md Only|1516|171|36|36
Secondary|md|Focus|lg Only|1580|171|36|36
Secondary|md|Disabled|None|1662|171|76|36
Secondary|md|Disabled|Left|1750|171|100|36
Secondary|md|Disabled|Right|1878|171|100|36
Secondary|md|Disabled|Only|2006|171|36|36
Secondary|md|Disabled|md Only|2070|171|36|36
Secondary|md|Disabled|lg Only|2134|171|36|36
Secondary|sm|Default|None|0|215|68|32
Secondary|sm|Default|Left|88|215|92|32
Secondary|sm|Default|Right|216|215|92|32
Secondary|sm|Default|Only|344|215|32|32
Secondary|sm|Default|md Only|410|215|32|32
Secondary|sm|Default|lg Only|474|215|32|32
Secondary|sm|Hover|None|554|215|68|32
Secondary|sm|Hover|Left|642|215|92|32
Secondary|sm|Hover|Right|770|215|92|32
Secondary|sm|Hover|Only|898|215|32|32
Secondary|sm|Hover|md Only|964|215|32|32
Secondary|sm|Hover|lg Only|1028|215|32|32
Secondary|sm|Focus|None|1108|215|68|32
Secondary|sm|Focus|Left|1196|215|92|32
Secondary|sm|Focus|Right|1324|215|92|32
Secondary|sm|Focus|Only|1452|215|32|32
Secondary|sm|Focus|md Only|1518|215|32|32
Secondary|sm|Focus|lg Only|1582|215|32|32
Secondary|sm|Disabled|None|1662|215|68|32
Secondary|sm|Disabled|Left|1750|215|92|32
Secondary|sm|Disabled|Right|1878|215|92|32
Secondary|sm|Disabled|Only|2006|215|32|32
Secondary|sm|Disabled|md Only|2072|215|32|32
Secondary|sm|Disabled|lg Only|2136|215|32|32
Secondary|xs|Default|None|0|255|68|28
Secondary|xs|Default|Left|88|255|92|28
Secondary|xs|Default|Right|216|255|92|28
Secondary|xs|Default|Only|344|255|28|28
Secondary|xs|Default|md Only|412|255|28|28
Secondary|xs|Default|lg Only|476|255|28|28
Secondary|xs|Hover|None|554|255|68|28
Secondary|xs|Hover|Left|642|255|92|28
Secondary|xs|Hover|Right|770|255|92|28
Secondary|xs|Hover|Only|898|255|28|28
Secondary|xs|Hover|md Only|966|255|28|28
Secondary|xs|Hover|lg Only|1030|255|28|28
Secondary|xs|Focus|None|1108|255|68|28
Secondary|xs|Focus|Left|1196|255|92|28
Secondary|xs|Focus|Right|1324|255|92|28
Secondary|xs|Focus|Only|1452|255|28|28
Secondary|xs|Focus|md Only|1520|255|28|28
Secondary|xs|Focus|lg Only|1584|255|28|28
Secondary|xs|Disabled|None|1662|255|68|28
Secondary|xs|Disabled|Left|1750|255|92|28
Secondary|xs|Disabled|Right|1878|255|92|28
Secondary|xs|Disabled|Only|2006|255|28|28
Secondary|xs|Disabled|md Only|2074|255|28|28
Secondary|xs|Disabled|lg Only|2138|255|28|28
Secondary|xxs|Default|None|0|291|55|24
Secondary|xxs|Default|Left|88|291|75|24
Secondary|xxs|Default|Right|216|291|75|24
Secondary|xxs|Default|Only|344|291|24|24
Secondary|xxs|Default|md Only|412|291|24|24
Secondary|xxs|Default|lg Only|476|291|24|24
Secondary|xxs|Hover|None|554|291|55|24
Secondary|xxs|Hover|Left|642|291|75|24
Secondary|xxs|Hover|Right|770|291|75|24
Secondary|xxs|Hover|Only|898|291|24|24
Secondary|xxs|Hover|md Only|966|291|24|24
Secondary|xxs|Hover|lg Only|1030|291|24|24
Secondary|xxs|Focus|None|1108|291|55|24
Secondary|xxs|Focus|Left|1196|291|75|24
Secondary|xxs|Focus|Right|1324|291|75|24
Secondary|xxs|Focus|Only|1452|291|24|24
Secondary|xxs|Focus|md Only|1520|291|24|24
Secondary|xxs|Focus|lg Only|1584|291|24|24
Secondary|xxs|Disabled|None|1662|291|55|24
Secondary|xxs|Disabled|Left|1750|291|75|24
Secondary|xxs|Disabled|Right|1878|291|75|24
Secondary|xxs|Disabled|Only|2006|291|24|24
Secondary|xxs|Disabled|md Only|2074|291|24|24
Secondary|xxs|Disabled|lg Only|2138|291|24|24
Ghost|md|Default|None|0|358|76|36
Ghost|md|Default|Left|88|358|100|36
Ghost|md|Default|Right|216|358|100|36
Ghost|md|Default|sm Only|344|358|36|36
Ghost|md|Default|md Only|408|358|36|36
Ghost|md|Default|lg Only|472|358|36|36
Ghost|md|Hover|None|554|358|76|36
Ghost|md|Hover|Left|642|358|100|36
Ghost|md|Hover|Right|770|358|100|36
Ghost|md|Hover|Only|898|358|36|36
Ghost|md|Hover|md Only|962|358|36|36
Ghost|md|Hover|lg Only|1026|358|36|36
Ghost|md|Focus|None|1108|358|76|36
Ghost|md|Focus|Left|1196|358|100|36
Ghost|md|Focus|Right|1324|358|100|36
Ghost|md|Focus|sm Only|1452|358|36|36
Ghost|md|Focus|md Only|1516|358|36|36
Ghost|md|Focus|lg Only|1580|358|36|36
Ghost|md|Disabled|None|1662|358|76|36
Ghost|md|Disabled|Left|1750|358|100|36
Ghost|md|Disabled|Right|1878|358|100|36
Ghost|md|Disabled|Only|2006|358|36|36
Ghost|md|Disabled|md Only|2070|358|36|36
Ghost|md|Disabled|lg Only|2134|358|36|36
Ghost|sm|Default|None|0|402|68|32
Ghost|sm|Default|Left|88|402|92|32
Ghost|sm|Default|Right|216|402|92|32
Ghost|sm|Default|Only|344|402|32|32
Ghost|sm|Default|md Only|410|402|32|32
Ghost|sm|Default|lg Only|474|402|32|32
Ghost|sm|Hover|None|554|402|68|32
Ghost|sm|Hover|Left|642|402|92|32
Ghost|sm|Hover|Right|770|402|92|32
Ghost|sm|Hover|Only|898|402|32|32
Ghost|sm|Hover|md Only|964|402|32|32
Ghost|sm|Hover|lg Only|1028|402|32|32
Ghost|sm|Focus|None|1108|402|68|32
Ghost|sm|Focus|Left|1196|402|92|32
Ghost|sm|Focus|Right|1324|402|92|32
Ghost|sm|Focus|Only|1452|402|32|32
Ghost|sm|Focus|md Only|1518|402|32|32
Ghost|sm|Focus|lg Only|1582|402|32|32
Ghost|sm|Disabled|None|1662|402|68|32
Ghost|sm|Disabled|Left|1750|402|92|32
Ghost|sm|Disabled|Right|1878|402|92|32
Ghost|sm|Disabled|Only|2006|402|32|32
Ghost|sm|Disabled|md Only|2072|402|32|32
Ghost|sm|Disabled|lg Only|2136|402|32|32
Ghost|xs|Default|None|0|442|68|28
Ghost|xs|Default|Left|88|442|92|28
Ghost|xs|Default|Right|216|442|92|28
Ghost|xs|Default|Only|344|442|28|28
Ghost|xs|Default|md Only|412|442|28|28
Ghost|xs|Default|lg Only|476|442|28|28
Ghost|xs|Hover|None|554|442|68|28
Ghost|xs|Hover|Left|642|442|92|28
Ghost|xs|Hover|Right|770|442|92|28
Ghost|xs|Hover|Only|898|442|28|28
Ghost|xs|Hover|md Only|966|442|28|28
Ghost|xs|Hover|lg Only|1030|442|28|28
Ghost|xs|Focus|None|1108|442|68|28
Ghost|xs|Focus|Left|1196|442|92|28
Ghost|xs|Focus|Right|1324|442|92|28
Ghost|xs|Focus|Only|1452|442|28|28
Ghost|xs|Focus|md Only|1520|442|28|28
Ghost|xs|Focus|lg Only|1584|442|28|28
Ghost|xs|Disabled|None|1662|442|68|28
Ghost|xs|Disabled|Left|1750|442|92|28
Ghost|xs|Disabled|Right|1878|442|92|28
Ghost|xs|Disabled|Only|2006|442|28|28
Ghost|xs|Disabled|md Only|2074|442|28|28
Ghost|xs|Disabled|lg Only|2138|442|28|28
Ghost|xxs|Default|None|0|478|55|24
Ghost|xxs|Default|Left|88|478|75|24
Ghost|xxs|Default|Right|216|478|75|24
Ghost|xxs|Default|Only|344|478|24|24
Ghost|xxs|Default|md Only|412|478|24|24
Ghost|xxs|Default|lg Only|476|478|24|24
Ghost|xxs|Hover|None|554|478|55|24
Ghost|xxs|Hover|Left|642|478|75|24
Ghost|xxs|Hover|Right|770|478|75|24
Ghost|xxs|Hover|Only|898|478|24|24
Ghost|xxs|Hover|md Only|966|478|24|24
Ghost|xxs|Hover|lg Only|1030|478|24|24
Ghost|xxs|Focus|None|1108|478|55|24
Ghost|xxs|Focus|Left|1196|478|75|24
Ghost|xxs|Focus|Right|1324|478|75|24
Ghost|xxs|Focus|Only|1452|478|24|24
Ghost|xxs|Focus|md Only|1520|478|24|24
Ghost|xxs|Focus|lg Only|1584|478|24|24
Ghost|xxs|Disabled|None|1662|478|55|24
Ghost|xxs|Disabled|Left|1750|478|75|24
Ghost|xxs|Disabled|Right|1878|478|75|24
Ghost|xxs|Disabled|Only|2006|478|24|24
Ghost|xxs|Disabled|md Only|2074|478|24|24
Ghost|xxs|Disabled|lg Only|2138|478|24|24
Danger|md|Default|None|0|556|76|36
Danger|md|Default|Left|88|556|100|36
Danger|md|Default|Right|216|556|100|36
Danger|md|Default|Only|344|556|36|36
Danger|md|Default|md Only|408|556|36|36
Danger|md|Default|lg Only|472|556|36|36
Danger|md|Hover|None|554|556|76|36
Danger|md|Hover|Left|642|556|100|36
Danger|md|Hover|Right|770|556|100|36
Danger|md|Hover|Only|898|556|36|36
Danger|md|Hover|md Only|962|556|36|36
Danger|md|Hover|lg Only|1026|556|36|36
Danger|md|Focus|None|1108|556|76|36
Danger|md|Focus|Left|1196|556|100|36
Danger|md|Focus|Right|1324|556|100|36
Danger|md|Focus|Only|1452|556|36|36
Danger|md|Focus|md Only|1516|556|36|36
Danger|md|Focus|lg Only|1580|556|36|36
Danger|md|Disabled|None|1662|556|76|36
Danger|md|Disabled|Left|1750|556|100|36
Danger|md|Disabled|Right|1878|556|100|36
Danger|md|Disabled|Only|2006|556|36|36
Danger|md|Disabled|md Only|2070|556|36|36
Danger|md|Disabled|lg Only|2134|556|36|36
Danger|sm|Default|None|0|600|68|32
Danger|sm|Default|Left|88|600|92|32
Danger|sm|Default|Right|216|600|92|32
Danger|sm|Default|Only|344|600|32|32
Danger|sm|Default|md Only|410|600|32|32
Danger|sm|Default|lg Only|474|600|32|32
Danger|sm|Hover|None|554|600|68|32
Danger|sm|Hover|Left|642|600|92|32
Danger|sm|Hover|Right|770|600|92|32
Danger|sm|Hover|Only|898|600|32|32
Danger|sm|Hover|md Only|964|600|32|32
Danger|sm|Hover|lg Only|1028|600|32|32
Danger|sm|Focus|None|1108|600|68|32
Danger|sm|Focus|Left|1196|600|92|32
Danger|sm|Focus|Right|1324|600|92|32
Danger|sm|Focus|Only|1452|600|32|32
Danger|sm|Focus|md Only|1518|600|32|32
Danger|sm|Focus|lg Only|1582|600|32|32
Danger|sm|Disabled|None|1662|600|68|32
Danger|sm|Disabled|Left|1750|600|92|32
Danger|sm|Disabled|Right|1878|600|92|32
Danger|sm|Disabled|Only|2006|600|32|32
Danger|sm|Disabled|md Only|2072|600|32|32
Danger|sm|Disabled|lg Only|2136|600|32|32
Danger|xs|Default|None|0|640|68|28
Danger|xs|Default|Left|88|640|92|28
Danger|xs|Default|Right|216|640|92|28
Danger|xs|Default|Only|344|640|28|28
Danger|xs|Default|md Only|412|640|28|28
Danger|xs|Default|lg Only|476|640|28|28
Danger|xs|Hover|None|554|640|68|28
Danger|xs|Hover|Left|642|640|92|28
Danger|xs|Hover|Right|770|640|92|28
Danger|xs|Hover|Only|898|640|28|28
Danger|xs|Hover|md Only|966|640|28|28
Danger|xs|Hover|lg Only|1030|640|28|28
Danger|xs|Focus|None|1108|640|68|28
Danger|xs|Focus|Left|1196|640|92|28
Danger|xs|Focus|Right|1324|640|92|28
Danger|xs|Focus|Only|1452|640|28|28
Danger|xs|Focus|md Only|1520|640|28|28
Danger|xs|Focus|lg Only|1584|640|28|28
Danger|xs|Disabled|None|1662|640|68|28
Danger|xs|Disabled|Left|1750|640|92|28
Danger|xs|Disabled|Right|1878|640|92|28
Danger|xs|Disabled|Only|2006|640|28|28
Danger|xs|Disabled|md Only|2074|640|28|28
Danger|xs|Disabled|lg Only|2138|640|28|28
Danger|xxs|Default|None|0|676|55|24
Danger|xxs|Default|Left|88|676|75|24
Danger|xxs|Default|Right|216|676|75|24
Danger|xxs|Default|Only|344|676|24|24
Danger|xxs|Default|md Only|412|676|24|24
Danger|xxs|Default|lg Only|476|676|24|24
Danger|xxs|Hover|None|554|676|55|24
Danger|xxs|Hover|Left|642|676|75|24
Danger|xxs|Hover|Right|770|676|75|24
Danger|xxs|Hover|Only|898|676|24|24
Danger|xxs|Hover|md Only|966|676|24|24
Danger|xxs|Hover|lg Only|1030|676|24|24
Danger|xxs|Focus|None|1108|676|55|24
Danger|xxs|Focus|Left|1196|676|75|24
Danger|xxs|Focus|Right|1324|676|75|24
Danger|xxs|Focus|Only|1452|676|24|24
Danger|xxs|Focus|md Only|1520|676|24|24
Danger|xxs|Focus|lg Only|1584|676|24|24
Danger|xxs|Disabled|None|1662|676|55|24
Danger|xxs|Disabled|Left|1750|676|75|24
Danger|xxs|Disabled|Right|1878|676|75|24
Danger|xxs|Disabled|Only|2006|676|24|24
Danger|xxs|Disabled|md Only|2074|676|24|24
Danger|xxs|Disabled|lg Only|2138|676|24|24
Link|md|Default|None|0|785|52|28
Link|md|Default|Left|88|785|72|28
Link|md|Default|Right|216|785|72|28
Link|md|Hover|None|554|785|52|28
Link|md|Hover|Left|642|785|72|28
Link|md|Hover|Right|770|785|72|28
Link|md|Focus|None|1108|785|52|28
Link|md|Focus|Left|1196|785|72|28
Link|md|Focus|Right|1324|785|72|28
Link|md|Disabled|None|1662|785|52|28
Link|md|Disabled|Left|1750|785|72|28
Link|md|Disabled|Right|1878|785|72|28
Link|sm|Default|None|0|829|52|28
Link|sm|Default|Left|88|829|72|28
Link|sm|Default|Right|216|829|72|28
Link|sm|Hover|None|554|829|52|28
Link|sm|Hover|Left|642|829|72|28
Link|sm|Hover|Right|770|829|72|28
Link|sm|Focus|None|1108|829|52|28
Link|sm|Focus|Left|1196|829|72|28
Link|sm|Focus|Right|1324|829|72|28
Link|sm|Disabled|None|1662|829|52|28
Link|sm|Disabled|Left|1750|829|72|28
Link|sm|Disabled|Right|1878|829|72|28
Link|xs|Default|None|0|869|52|28
Link|xs|Default|Left|88|869|72|28
Link|xs|Default|Right|216|869|72|28
Link|xs|Hover|None|554|869|52|28
Link|xs|Hover|Left|642|869|72|28
Link|xs|Hover|Right|770|869|72|28
Link|xs|Focus|None|1108|869|52|28
Link|xs|Focus|Left|1196|869|72|28
Link|xs|Focus|Right|1324|869|72|28
Link|xs|Disabled|None|1662|869|52|28
Link|xs|Disabled|Left|1750|869|72|28
Link|xs|Disabled|Right|1878|869|72|28
Link|xxs|Default|None|0|909|47|24
Link|xxs|Default|Left|88|909|67|24
Link|xxs|Default|Right|216|909|67|24
Link|xxs|Hover|None|554|909|47|24
Link|xxs|Hover|Left|642|909|67|24
Link|xxs|Hover|Right|770|909|67|24
Link|xxs|Focus|None|1108|909|47|24
Link|xxs|Focus|Left|1196|909|67|24
Link|xxs|Focus|Right|1324|909|67|24
Link|xxs|Disabled|None|1662|909|47|24
Link|xxs|Disabled|Left|1750|909|67|24
Link|xxs|Disabled|Right|1878|909|67|24`;

type ButtonCell = {
  T: 'Primary' | 'Secondary' | 'Ghost' | 'Danger' | 'Link';
  S: 'xxs' | 'xs' | 'sm' | 'md';
  St: 'Default' | 'Hover' | 'Focus' | 'Disabled';
  I: 'None' | 'Left' | 'Right' | 'Only' | 'sm Only' | 'md Only' | 'lg Only';
  x: number; y: number; w: number; h: number;
};

const BUTTON_CELLS: ButtonCell[] = BUTTON_CELLS_RAW.split('\n').map((line) => {
  const [T, S, St, I, x, y, w, h] = line.split('|');
  return { T: T as any, S: S as any, St: St as any, I: I as any, x: +x, y: +y, w: +w, h: +h };
});

function renderButtonCell(cell: ButtonCell) {
  const variant = cell.T.toLowerCase() as 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
  const isHover = cell.St === 'Hover';
  const isFocus = cell.St === 'Focus';
  const isDisabled = cell.St === 'Disabled';
  const stateClass = [isHover && HOVER_CLASS[variant], isFocus && FOCUS_CLASS].filter(Boolean).join(' ');

  // Decide icon size from Icon&size column
  const iconSize: 'sm' | 'md' | 'lg' = cell.I === 'md Only' ? 'md' : cell.I === 'lg Only' ? 'lg' : 'sm';
  const isIconOnly = /Only$/.test(cell.I);

  if (cell.I === 'None') {
    return <Button variant={variant} size={cell.S} className={stateClass} disabled={isDisabled}>Button</Button>;
  }
  if (cell.I === 'Left') {
    return <Button variant={variant} size={cell.S} className={stateClass} disabled={isDisabled} startIcon={<PlusIcon size="sm" />}>Button</Button>;
  }
  if (cell.I === 'Right') {
    return <Button variant={variant} size={cell.S} className={stateClass} disabled={isDisabled} endIcon={<Settings01Icon size="sm" />}>Button</Button>;
  }
  // iconOnly variants — use appropriate icon size
  return (
    <Button
      variant={variant}
      size={cell.S}
      className={stateClass}
      disabled={isDisabled}
      iconOnly
      startIcon={<PlusIcon size={iconSize} />}
      aria-label="Add"
    />
  );
}

// Generate MatrixVerify cell specs from the same source-of-truth data
const BUTTON_MATRIX_CELLS: MatrixCellSpec[] = BUTTON_CELLS.map((c) => ({
  variant: `Type=${c.T}, Size=${c.S}, State=${c.St}, Icon & size=${c.I}`,
  x: c.x, y: c.y, w: c.w, h: c.h,
  // No content expectation here — Button labels are uniformly "Button" or empty
  // (iconOnly); position + dimensions are the meaningful diff.
}));

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '76:64',
      cells: BUTTON_MATRIX_CELLS,
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 2170, height: 933 }}>
      {BUTTON_CELLS.map((cell, i) => (
        <div
          key={`${cell.T}-${cell.S}-${cell.St}-${cell.I}-${i}`}
          className="absolute flex items-start leading-none"
          data-matrix-cell
          style={{ left: cell.x, top: cell.y, width: cell.w }}
        >
          {renderButtonCell(cell)}
        </div>
      ))}
    </div>
  ),
};

// Legacy three-pane curated matrix kept as a second story for quick scanning.
const TYPES_LEGACY = ['primary', 'secondary', 'ghost', 'danger', 'link'] as const;
const SIZES_LEGACY = ['xxs', 'xs', 'sm', 'md'] as const;

export const MatrixCurated: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-6">
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Type × State (md)</h3>
        <div className="grid grid-cols-[100px_repeat(4,minmax(140px,1fr))] gap-x-4 gap-y-3 items-center text-label-sm text-muted">
          <span></span><span>Default</span><span>Hover</span><span>Focus</span><span>Disabled</span>
          {TYPES_LEGACY.map((t) => (
            <Fragment key={t}>
              <span className="font-mono text-secondary">{t}</span>
              <Button variant={t}>Button</Button>
              <Button variant={t} className={HOVER_CLASS[t]}>Button</Button>
              <Button variant={t} className={FOCUS_CLASS}>Button</Button>
              <Button variant={t} disabled>Button</Button>
            </Fragment>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Type × Size</h3>
        <div className="grid grid-cols-[100px_repeat(4,minmax(120px,1fr))] gap-x-4 gap-y-3 items-center text-label-sm text-muted">
          <span></span>
          {SIZES_LEGACY.map((s) => <span key={s}>{s}</span>)}
          {TYPES_LEGACY.map((t) => (
            <Fragment key={t}>
              <span className="font-mono text-secondary">{t}</span>
              {SIZES_LEGACY.map((s) => (
                <Button key={s} variant={t} size={s}>Button</Button>
              ))}
            </Fragment>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-primary">Type × Icon position (md)</h3>
        <div className="grid grid-cols-[100px_repeat(4,minmax(140px,1fr))] gap-x-4 gap-y-3 items-center text-label-sm text-muted">
          <span></span><span>None</span><span>Left</span><span>Right</span><span>Only</span>
          {TYPES_LEGACY.map((t) => (
            <Fragment key={t}>
              <span className="font-mono text-secondary">{t}</span>
              <Button variant={t}>Button</Button>
              <Button variant={t} startIcon={<PlusIcon size="sm" />}>Button</Button>
              <Button variant={t} endIcon={<Settings01Icon size="sm" />}>Button</Button>
              <Button variant={t} iconOnly startIcon={<PlusIcon size="sm" />} aria-label="Add" />
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  ),
};

