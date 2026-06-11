import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { NavItem, type NavItemStatus } from './NavItem';
import { Chip } from '../data-display/Chip';
import { ArrowLeftIcon } from '../primitives/icons/ArrowLeftIcon';
import { ChevronLeftIcon } from '../primitives/icons/ChevronLeftIcon';
import { LayoutAlt04Icon } from '../primitives/icons/LayoutAlt04Icon';
import { StatusOutstandingIcon } from '../primitives/icons/StatusOutstandingIcon';
import { StatusFulfilledIcon } from '../primitives/icons/StatusFulfilledIcon';
import { StatusReturnedIcon } from '../primitives/icons/StatusReturnedIcon';
import { StatusAcceptedIcon } from '../primitives/icons/StatusAcceptedIcon';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/SideNav',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

// ─── Canonical Light Mode definition ────────────────────────────────────────
// This single source of truth mirrors the Figma `SideNav` ComponentSet (1147:213,
// State=Expanded) — the Light Mode definition of the SideNav primitive. Every
// Storybook story below renders this exact structure so the canvas, the
// Matrix, and the app shell agree on one shape: a header → toolbar → waterfall
// sections list → footer, with sections that use the canonical Waterfall row
// containing Type=Group child rows whose statuses cycle deterministically.
//
// Child NavItems pass `indent={false}` — mirrors the per-instance Indent=false
// override on every SideNav child in Figma, so children sit flush against the
// row's left edge (the section header alone carries the hierarchy).

// Section + row content mirrors the Figma `SideNav` 1147:213 Expanded variant
// exactly — each child's Status, Index, and Label are the per-instance overrides
// captured from the canonical.
const SIDEBAR_SECTIONS: {
  title: string;
  rows: { status: NavItemStatus; index: number; title: string }[];
}[] = [
  { title: 'Commissions Testing 2023', rows: [
    { status: 'outstanding', index: 16, title: 'Samples 1-30' },
    { status: 'returned',    index: 17, title: 'Samples 31-60 from VelciTech Solutions' },
    { status: 'fulfilled',   index: 19, title: 'Samples 61-90' },
    { status: 'accepted',    index: 18, title: 'Samples 90-159' },
    { status: 'outstanding', index: 20, title: 'Samples 159-180' },
  ]},
  { title: 'Legal Agreements', rows: [
    { status: 'returned',  index: 55, title: 'Lease agreement' },
    { status: 'fulfilled', index: 55, title: 'Lease agreement addendum' },
  ]},
  { title: 'Opening Balance Procedure', rows: [
    { status: 'fulfilled',   index: 54, title: '54 Cash' },
    { status: 'fulfilled',   index: 55, title: 'Please provide Trial Balance' },
    { status: 'returned',    index: 55, title: 'Commissions Retained' },
    { status: 'returned',    index: 56, title: 'Trip deposits' },
    { status: 'fulfilled',   index: 58, title: 'A/R samples' },
    { status: 'returned',    index: 61, title: 'Child item 6' },
    { status: 'fulfilled',   index: 57, title: 'Child item 7' },
    { status: 'outstanding', index: 60, title: 'Child item 8' },
  ]},
  { title: 'Shareholder Distributions', rows: [
    { status: 'outstanding', index: 55, title: 'Child item 1' },
  ]},
  { title: 'Revenue Testing', rows: [
    { status: 'returned',    index: 72, title: 'Revenue samples - 2…' },
    { status: 'fulfilled',   index: 73, title: 'Revenue samples - 6…' },
    { status: 'outstanding', index: 74, title: 'Revenue samples - 9…' },
  ]},
];

/**
 * Icon-only square button that fills the 40×40 header slot in Figma's
 * SideNav TopRow (BackButton + CockpitButton). Padding 8 + 20×20 icon.
 */
const SideNavIconButton = ({
  ariaLabel, onClick, children,
}: { ariaLabel: string; onClick?: () => void; children: React.ReactNode }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    onClick={onClick}
    className="inline-flex h-10 w-10 items-center justify-center rounded-control text-sidenav-fg-primary hover:bg-sidenav-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus"
  >
    {children}
  </button>
);

/**
 * Multi-select status filter chip used in the SideNav header's 2×2 grid.
 * Mirrors Figma's canonical Chip instance with `Size=Small, Actions=Multi
 * selected, Icon=Left`. The status icon comes from the Icons page.
 */
function SideNavStatusChip({
  label, icon, active, onToggle,
}: { label: string; icon: React.ReactNode; active: boolean; onToggle: () => void }) {
  return (
    <Chip
      size="sm"
      label={label}
      iconLeft={icon}
      selected={active ? 'multi' : 'none'}
      onClick={onToggle}
    />
  );
}

/**
 * Canonical SideNav — mirrors Figma `SideNav` 1147:213 State=Expanded exactly.
 *
 * Structure: outer padding 12/12/8/8, gap 24. Header has TopRow [BackBtn +
 * CockpitBtn] then plain title (16 Semibold, no subtitle). Filter chips render
 * in a 2×2 grid (gap 8 vertical, 4 horizontal) using the canonical Chip
 * primitive. Sections use NavItem type="waterfall" with `indent={false}`
 * Group children.
 */
function LightModeSideNav({
  theme = 'light',
  width = 264,
}: {
  theme?: 'dark' | 'light';
  width?: number;
}) {
  const [active, setActive] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    outstanding: true,
    fulfilled:   true,
    returned:    true,
    accepted:    true,
  });
  const toggle = (k: keyof typeof filters) =>
    setFilters((p) => ({ ...p, [k]: !p[k] }));

  return (
    <Sidebar theme={theme} width={width} className="h-full">
      {/* Inner — padding 12/12/8/8 with vertical gap 24 between Header, Chips, Sections */}
      <div className="flex flex-1 flex-col gap-6 px-3 pt-2 pb-2 overflow-y-auto">
        {/* Header — TopRow (back + cockpit) + Title */}
        <header className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <SideNavIconButton ariaLabel="Back" onClick={() => {}}>
              <ArrowLeftIcon size={20} />
            </SideNavIconButton>
            <SideNavIconButton ariaLabel="Toggle workspace">
              <LayoutAlt04Icon size={20} />
            </SideNavIconButton>
          </div>
          <div className="px-2">
            <h2 className="text-body-md font-semibold text-sidenav-fg-primary truncate">
              Gifted Travel Network Inc
            </h2>
          </div>
        </header>

        {/* Filter chips — 2×2 grid, gap 8 vertical / 4 horizontal */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <SideNavStatusChip
              label="Outstanding"
              icon={<StatusOutstandingIcon size={16} />}
              active={filters.outstanding}
              onToggle={() => toggle('outstanding')}
            />
            <SideNavStatusChip
              label="Fulfilled"
              icon={<StatusFulfilledIcon size={16} />}
              active={filters.fulfilled}
              onToggle={() => toggle('fulfilled')}
            />
          </div>
          <div className="flex gap-1">
            <SideNavStatusChip
              label="Returned"
              icon={<StatusReturnedIcon size={16} />}
              active={filters.returned}
              onToggle={() => toggle('returned')}
            />
            <SideNavStatusChip
              label="Accepted"
              icon={<StatusAcceptedIcon size={16} />}
              active={filters.accepted}
              onToggle={() => toggle('accepted')}
            />
          </div>
        </div>

        {/* Sections — Waterfall NavItems with Group children */}
        <div className="flex flex-col gap-6">
          {SIDEBAR_SECTIONS.map((section) => (
            <NavItem
              key={section.title}
              type="waterfall"
              title={section.title}
              defaultExpanded
            >
              {section.rows.map((row, i) => {
                const key = `${section.title}-${i}`;
                return (
                  <NavItem
                    key={key}
                    type="group"
                    status={row.status}
                    index={row.index}
                    title={row.title}
                    active={active === key}
                    onSelect={() => setActive(key)}
                    indent={false}
                  />
                );
              })}
            </NavItem>
          ))}
        </div>
      </div>
    </Sidebar>
  );
}

// ── Stories ─────────────────────────────────────────────────────────────────
// Every story renders the canonical Light Mode SideNav definition. The only
// thing each story varies is the SURROUNDING SHELL (page bg, document area
// scaffold, width, footer copy) — the Sidebar body grammar is identical.

export const Default: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav />
      <div className="flex-1 p-4 text-secondary">
        Document area — Default story renders the canonical Light Mode SideNav definition.
      </div>
    </div>
  ),
};

export const LightTheme: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav theme="light" />
      <div className="flex-1 p-4 text-secondary">
        theme=&ldquo;light&rdquo; — explicit Light Mode definition. Same body grammar as Default.
      </div>
    </div>
  ),
};

export const ProductionReplica: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav theme="light" width={320} />
      <div className="flex-1 p-6 text-secondary">
        <div className="text-heading-md text-primary mb-2">Request detail</div>
        <p>ProductionReplica — full app shell with the canonical SideNav.</p>
      </div>
    </div>
  ),
};

export const Minimal: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <LightModeSideNav />
    </div>
  ),
};

// ─── Matrix — mirrors Figma SideNav ComponentSet (1147:213) ────────────────
// 2 variants on `State` axis:
//   State=Expanded  — 264 × 1039  — full Light Mode SideNav (header + toolbar
//                                   + waterfall sections + footer)
//   State=Collapsed — 64 × 1039   — icon-rail (back button + collapse toggle)
// Both cells render the canonical `LightModeSideNav` body grammar — only
// width and the rail-collapsed inner content differ. Cell (x, y, w, h) values
// mirror Figma 76:50 / 1147:213 exactly.

const SB_CELLS: MatrixCellSpec[] = [
  { variant: 'State=Expanded',  x: 73,  y: 40, w: 264, h: 1039, expect: { headings: [] } },
  { variant: 'State=Collapsed', x: 363, y: 40, w: 64,  h: 1039, expect: { headings: [] } },
];

// Square icon button that fits the 40×40 hit area of the collapsed rail
const RailIconButton = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <button
    type="button"
    aria-label={label}
    className="h-10 w-10 inline-flex items-center justify-center rounded-control text-secondary hover:bg-surface hover:text-primary transition-colors"
  >
    {children}
  </button>
);

function CollapsedSidebar() {
  return (
    <Sidebar theme="light" width={64} className="h-full">
      <div className="flex flex-col items-center gap-1 p-2">
        <RailIconButton label="Back">
          <ArrowLeftIcon size="sm" />
        </RailIconButton>
        <RailIconButton label="Expand sidebar">
          <ChevronLeftIcon size="sm" className="rotate-180" />
        </RailIconButton>
      </div>
    </Sidebar>
  );
}

const renderCell = (variant: string) => {
  if (/State=Expanded/.test(variant))  return <LightModeSideNav />;
  if (/State=Collapsed/.test(variant)) return <CollapsedSidebar />;
  return null;
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:50', cells: SB_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 500, height: 1100 }}>
      {SB_CELLS.map((c) => (
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
