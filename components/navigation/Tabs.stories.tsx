import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { CountBadge } from '../primitives/CountBadge';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs', component: Tabs, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('tab1');
    return (
      <Tabs
        tabs={[{ label: 'Tab 1', value: 'tab1' }, { label: 'Tab 2', value: 'tab2' }, { label: 'Tab 3', value: 'tab3' }]}
        active={active}
        onChange={setActive}
      />
    );
  },
};

// ─── With badge label ─────────────────────────────────────────────────────────
// Mirrors how ActivitySection embeds a CountBadge inside a tab label.
export const WithBadgeLabel: Story = {
  render: () => {
    const [active, setActive] = useState('comments');
    return (
      <Tabs
        tabs={[
          {
            label: <span className="flex items-center gap-2">Comments <CountBadge>5</CountBadge></span>,
            value: 'comments',
          },
          {
            label: <span className="flex items-center gap-2">History <CountBadge>12</CountBadge></span>,
            value: 'history',
          },
          { label: 'Attachments', value: 'attachments' },
        ]}
        active={active}
        onChange={setActive}
      />
    );
  },
};

// ─── Many tabs ────────────────────────────────────────────────────────────────
// 6+ tabs to demonstrate overflow / scroll behaviour.
export const ManyTabs: Story = {
  render: () => {
    const [active, setActive] = useState('overview');
    return (
      <Tabs
        tabs={[
          { label: 'Overview',    value: 'overview' },
          { label: 'Documents',   value: 'documents' },
          { label: 'Activity',    value: 'activity' },
          { label: 'Team',        value: 'team' },
          { label: 'Billing',     value: 'billing' },
          { label: 'Compliance',  value: 'compliance' },
          { label: 'Settings',    value: 'settings' },
        ]}
        active={active}
        onChange={setActive}
      />
    );
  },
};

// ─── Matrix — mirrors Figma Tabs page (76:52) ───────────────────────────────
// Two ComponentSets on this page:
//   • `Tabs` (520:9) — container with 3 Tab instances + border-b
//   • `Tab`  (518:6) — atomic Tab with State variants (Active / Inactive /
//                       Hover / Focus)
// All cells render the canonical `Tabs` primitive — atomic cells use a
// single-tab Tabs with className overrides that force the target state
// without forking the button styling. Cell (x, y, w, h) values mirror the
// Figma 76:52 page layout (Tabs container at the top, Tab atoms below).

// State overrides — apply hover/focus styling to the single tab via the
// canonical class names already used by the Tabs source. We override colors
// with `!` so they win over the default Inactive styling.
const HOVER_OVERRIDE = '[&_button]:!text-secondary';
const FOCUS_OVERRIDE =
  '[&_button]:!ring-2 [&_button]:!ring-line-focus [&_button]:!rounded-t-control';
// Hide the Tabs container's 1px bottom border on atomic cells — atoms in
// Figma render standalone (no container line). The active tab's own 2px
// `border-action-primary` still anchors to where the line would be, since
// `-mb-px` on the button overlaps the (now-transparent) container edge.
const HIDE_CONTAINER_BORDER = '!border-b-transparent';

type TabState = 'Active' | 'Inactive' | 'Hover' | 'Focus';

const TAB_CELLS: MatrixCellSpec[] = [
  // ── `Tabs` container (520:9) — 3-tab list, first active ──
  { variant: 'Set=Tabs',                x: 16,  y: 16,  w: 168, h: 37, expect: { headings: [] } },
  // ── `Tab` atom (518:6) — 4 State variants in a single row ──
  { variant: 'Set=Tab, State=Active',   x: 12,  y: 105, w: 56,  h: 37, expect: { headings: [] } },
  { variant: 'Set=Tab, State=Inactive', x: 92,  y: 105, w: 56,  h: 37, expect: { headings: [] } },
  { variant: 'Set=Tab, State=Hover',    x: 172, y: 105, w: 56,  h: 37, expect: { headings: [] } },
  { variant: 'Set=Tab, State=Focus',    x: 252, y: 105, w: 56,  h: 37, expect: { headings: [] } },
];

const renderContainerCell = () => (
  <Tabs
    tabs={[
      { label: 'Tab', value: 'tab1' },
      { label: 'Tab', value: 'tab2' },
      { label: 'Tab', value: 'tab3' },
    ]}
    active="tab1"
    onChange={() => {}}
  />
);

const renderAtomCell = (state: TabState) => {
  // Active is the only state where the rendered button must be selected;
  // every other state targets the inactive styling and layers a forced
  // visual on top.
  const active = state === 'Active' ? 't' : 'other';
  const stateClass =
    state === 'Hover'
      ? HOVER_OVERRIDE
      : state === 'Focus'
        ? FOCUS_OVERRIDE
        : '';
  return (
    <Tabs
      tabs={[{ label: 'Tab', value: 't' }]}
      active={active}
      onChange={() => {}}
      className={`${HIDE_CONTAINER_BORDER} ${stateClass}`.trim()}
    />
  );
};

const renderCell = (variant: string) => {
  if (variant === 'Set=Tabs') return renderContainerCell();
  const state = variant.match(/State=(\w+)/)![1] as TabState;
  return renderAtomCell(state);
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:52', cells: TAB_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 360, height: 170 }}>
      {TAB_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderCell(c.variant)}
        </div>
      ))}
    </div>
  ),
};
