import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { NavItem, type NavItemStatus } from './NavItem';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';
import { Building01Icon } from '../primitives/icons/Building01Icon';
import { Users01Icon } from '../primitives/icons/Users01Icon';
import { UserCircleIcon } from '../primitives/icons/UserCircleIcon';
import { Briefcase01Icon } from '../primitives/icons/Briefcase01Icon';
import { Send01Icon } from '../primitives/icons/Send01Icon';
import { ChevronRightIcon } from '../primitives/icons/ChevronRightIcon';

const meta: Meta<typeof NavItem> = {
  title: 'Navigation/NavItem',
  component: NavItem,
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface w-72 p-3">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof NavItem>;

// ── Item — icon + text (default variant) ────────────────────────────────────
// Used in two contexts via the `tone` prop:
//   • tone="sidebar" (default) — left-rail nav rows
//   • tone="topnav"            — top header nav items
// Same density and typography across both; only the palette differs.

export const Item: Story = {
  render: () => (
    <NavItem icon={Briefcase01Icon} title="Engagements" onSelect={() => console.log('item selected')} />
  ),
};

export const ItemActive: Story = {
  render: () => (
    <NavItem icon={UserCircleIcon} title="Clients" active onSelect={() => console.log('active item clicked')} />
  ),
};

export const ItemDisabled: Story = {
  render: () => (
    <NavItem icon={Briefcase01Icon} title="Engagements (disabled)" disabled onSelect={() => console.log('should NOT fire')} />
  ),
};

// ── New feature demos: ShowIcon + Slot1/Slot2 ──────────────────────────────
// Mirror the Figma `ShowIcon` BOOLEAN + `Slot1`/`Slot2` INSTANCE_SWAP +
// `ShowSlot1`/`ShowSlot2` BOOLEAN toggles added to the NavItem set.

export const ItemNoIcon: Story = {
  name: 'Item — ShowIcon off',
  render: () => (
    // showIcon={false} hides the leading icon entirely (label-only row).
    <NavItem icon={Briefcase01Icon} showIcon={false} title="No icon label" onSelect={() => {}} />
  ),
};

export const ItemWithSlot: Story = {
  name: 'Item — Slot1 (CountBadge)',
  render: () => (
    // Slot1 = a numbered count chip. Slot2 omitted.
    <NavItem
      icon={Briefcase01Icon}
      title="Inbox"
      slot1={
        <span className="text-label-sm font-medium bg-status-error text-on-accent rounded-pill px-2 py-0.5">
          12
        </span>
      }
      onSelect={() => {}}
    />
  ),
};

export const ItemWithTwoSlots: Story = {
  name: 'Item — Slot1 + Slot2 (Buttons)',
  render: () => (
    // Both slots = ghost icon-only buttons (matches Figma default Slot1/Slot2).
    <NavItem
      icon={Briefcase01Icon}
      title="Engagements"
      slot1={
        <button
          type="button"
          className="inline-flex items-center justify-center h-6 w-6 rounded-control text-secondary hover:bg-hover-overlay"
          aria-label="More"
        >
          <ChevronRightIcon size="sm" />
        </button>
      }
      slot2={
        <button
          type="button"
          className="inline-flex items-center justify-center h-6 w-6 rounded-control text-secondary hover:bg-hover-overlay"
          aria-label="Settings"
        >
          <ChevronRightIcon size="sm" />
        </button>
      }
      onSelect={() => {}}
    />
  ),
};

export const ItemSidebarList: Story = {
  render: () => {
    const [active, setActive] = useState('clients');
    const items = [
      { id: 'firm',        label: 'My firm',             icon: Building01Icon },
      { id: 'team',        label: 'Team',                icon: Users01Icon },
      { id: 'clients',     label: 'Clients',             icon: UserCircleIcon },
      { id: 'engagements', label: 'Engagements',         icon: Briefcase01Icon },
      { id: 'sfs',         label: 'Secure File Sharing', icon: Send01Icon },
    ];
    return (
      <div className="flex flex-col gap-1">
        {items.map((it) => (
          <NavItem key={it.id} icon={it.icon} title={it.label} active={it.id === active} onSelect={() => setActive(it.id)} />
        ))}
      </div>
    );
  },
};

export const ItemTopNavList: Story = {
  decorators: [
    (Story) => (
      <div className="dark bg-header-bg w-full p-3">
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [active, setActive] = useState('engagements');
    const items = [
      { id: 'firm',        label: 'My firm',             icon: Building01Icon },
      { id: 'team',        label: 'Team',                icon: Users01Icon },
      { id: 'clients',     label: 'Clients',             icon: UserCircleIcon },
      { id: 'engagements', label: 'Engagements',         icon: Briefcase01Icon },
      { id: 'sfs',         label: 'Secure File Sharing', icon: Send01Icon },
    ];
    return (
      <nav className="flex items-center gap-1">
        {items.map((it) => (
          <NavItem key={it.id} tone="topnav" icon={it.icon} title={it.label} active={it.id === active} onSelect={() => setActive(it.id)} />
        ))}
      </nav>
    );
  },
};

// ── Group — status dropdown + request number + request title ───────────────
// All 4 statuses share the same state behavior; we show all 4 statuses at
// Default state and reserve Hover/Active/Disabled coverage to Outstanding.

export const GroupOutstanding: Story = {
  render: () => (
    <NavItem type="group" status="outstanding" index={55} title="Please provide Trial Balance" onSelect={() => {}} />
  ),
};

export const GroupActive: Story = {
  render: () => (
    <NavItem type="group" status="outstanding" index={55} title="Please provide Trial Balance" active onSelect={() => {}} />
  ),
};

export const GroupDisabled: Story = {
  render: () => (
    <NavItem type="group" status="outstanding" index={11} title="Cannot be selected" disabled onSelect={() => {}} />
  ),
};

// ── Section heading ─────────────────────────────────────────────────────────

export const SectionHeadingExpanded: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(true);
    return <NavItem type="section" title="Commissions Testing 2023" expanded={expanded} onToggle={() => setExpanded((v) => !v)} />;
  },
};

export const SectionHeadingCollapsed: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);
    return <NavItem type="section" title="Commissions Testing 2023" expanded={expanded} onToggle={() => setExpanded((v) => !v)} />;
  },
};

// ── Waterfall — parent row with indented children ──────────────────────────

export const WaterfallExpanded: Story = {
  render: () => (
    <NavItem type="waterfall" icon={Briefcase01Icon} title="Engagements" defaultExpanded>
      <NavItem icon={UserCircleIcon} title="Acme Corp" />
      <NavItem icon={UserCircleIcon} title="Globex Industries" />
      <NavItem icon={UserCircleIcon} title="Initech" />
    </NavItem>
  ),
};

export const WaterfallCollapsed: Story = {
  render: () => (
    <NavItem type="waterfall" icon={Briefcase01Icon} title="Engagements" defaultExpanded={false}>
      <NavItem icon={UserCircleIcon} title="Acme Corp" />
    </NavItem>
  ),
};

export const WaterfallNested: Story = {
  render: () => (
    <NavItem type="waterfall" icon={Building01Icon} title="My firm" defaultExpanded>
      <NavItem type="waterfall" icon={Briefcase01Icon} title="Engagements" defaultExpanded>
        <NavItem icon={UserCircleIcon} title="Acme Corp" />
        <NavItem icon={UserCircleIcon} title="Globex Industries" active />
      </NavItem>
      <NavItem type="waterfall" icon={Users01Icon} title="Team" defaultExpanded={false}>
        <NavItem icon={UserCircleIcon} title="Hidden until expanded" />
      </NavItem>
    </NavItem>
  ),
};

// ── Composition reference ───────────────────────────────────────────────────

interface DemoGroup {
  status: NavItemStatus;
  index: number;
  title: string;
}

const REQUEST_GROUPS: DemoGroup[] = [
  { status: 'returned',    index: 55, title: 'Please provide Trial Balance' },
  { status: 'outstanding', index: 55, title: 'Please provide Trial Balance' },
  { status: 'accepted',    index: 55, title: 'Please provide Trial Balance' },
];

export const ReferenceReplica: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(true);
    const [active, setActive] = useState(2);
    return (
      <div className="flex flex-col gap-1">
        <NavItem type="section" title="Commissions Testing 2023" expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
        {expanded &&
          REQUEST_GROUPS.map((row, i) => (
            <NavItem
              key={i}
              type="group"
              status={row.status}
              index={row.index}
              title={row.title}
              active={i === active}
              onSelect={() => setActive(i)}
            />
          ))}
      </div>
    );
  },
};

// ─── AllStates — story-grid overview (NOT the Figma-mirrored Matrix) ────────
const HOVER_OVERRIDE_SIDEBAR = '[&_a]:!bg-surface [&_button]:!bg-surface';
const HOVER_OVERRIDE_TOPNAV  = '[&_a]:!bg-header-hover-bg [&_button]:!bg-header-hover-bg';

function ItemRow({ tone, state }: { tone: 'sidebar' | 'topnav'; state: 'Default' | 'Hover' | 'Active' | 'Disabled' }) {
  const cls =
    state === 'Hover' && tone === 'sidebar' ? HOVER_OVERRIDE_SIDEBAR :
    state === 'Hover' && tone === 'topnav'  ? HOVER_OVERRIDE_TOPNAV  : '';
  return (
    <div className={cls}>
      <NavItem icon={Briefcase01Icon} title="Engagements" tone={tone} active={state === 'Active'} disabled={state === 'Disabled'} onSelect={() => {}} />
    </div>
  );
}

const ITEM_TONES = ['sidebar', 'topnav'] as const;
const ITEM_STATES = ['Default', 'Hover', 'Active', 'Disabled'] as const;
const GROUP_STATUSES: NavItemStatus[] = ['outstanding', 'fulfilled', 'returned', 'accepted'];
const GROUP_OUTSTANDING_STATES = ['Default', 'Hover', 'Active', 'Disabled'] as const;
const SECTION_STATES = ['Expanded', 'Collapsed'] as const;

export const AllStates: Story = {
  decorators: [(Story) => <div data-theme="dark" className="bg-sidenav-surface p-6 w-full"><Story /></div>],
  render: () => (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-sidenav-fg-primary">Type=Item (Tone × State)</h3>
        <div className="grid items-center gap-x-3 gap-y-2 text-label-sm text-sidenav-fg-muted" style={{ gridTemplateColumns: '140px repeat(4, minmax(180px, 1fr))' }}>
          <span />
          {ITEM_STATES.map((s) => <span key={s} className="text-center">{s}</span>)}
          {ITEM_TONES.map((tone) => (
            <Fragment key={tone}>
              <span className="font-mono text-sidenav-fg-muted">Tone={tone}</span>
              {ITEM_STATES.map((state) => <div key={state}><ItemRow tone={tone} state={state} /></div>)}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-sidenav-fg-primary">Type=Group — Status @ Default + Outstanding states</h3>
        <div className="grid items-center gap-x-3 gap-y-2 text-label-sm text-sidenav-fg-muted" style={{ gridTemplateColumns: '160px repeat(4, minmax(220px, 1fr))' }}>
          <span />
          {GROUP_OUTSTANDING_STATES.map((s) => <span key={s} className="text-center">{s}</span>)}
          {/* Outstanding gets all 4 states */}
          <span className="font-mono text-sidenav-fg-muted">Status=outstanding</span>
          {GROUP_OUTSTANDING_STATES.map((state) => (
            <div key={state}>
              <NavItem
                type="group" status="outstanding" index={1} title="Group (outstanding)"
                active={state === 'Active'} disabled={state === 'Disabled'}
                forceHover={state === 'Hover'}
                onSelect={() => {}}
              />
            </div>
          ))}
          {/* Other statuses show Default only */}
          {GROUP_STATUSES.filter((s) => s !== 'outstanding').map((status, idx) => (
            <Fragment key={status}>
              <span className="font-mono text-sidenav-fg-muted">Status={status}</span>
              <div>
                <NavItem type="group" status={status} index={idx + 2} title={`Group (${status})`} onSelect={() => {}} />
              </div>
              <span className="text-sidenav-fg-muted text-center">—</span>
              <span className="text-sidenav-fg-muted text-center">—</span>
              <span className="text-sidenav-fg-muted text-center">—</span>
            </Fragment>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-heading-sm font-semibold text-sidenav-fg-primary">Type=Section (State)</h3>
        <div className="grid items-center gap-x-3 gap-y-2" style={{ gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))' }}>
          {SECTION_STATES.map((state) => (
            <div key={state} className="flex flex-col gap-2">
              <span className="font-mono text-label-sm text-sidenav-fg-muted">State={state}</span>
              <NavItem type="section" title="Section heading" expanded={state === 'Expanded'} onToggle={() => {}} />
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

// ─── Matrix — mirrors user-curated Figma NavItem page (1020:2) ──────────────
// Mirrors every canonical on the NavItem page after the user's manual edits:
//   • NavItem ComponentSet (1054:294) — 12 variants
//       Item Sidebar: Default, Hover (Active/Disabled removed)
//       Item TopNav:  Active, Default, Hover (Disabled removed)
//       Group Outstanding: Default, Hover, Active, Disabled
//       Group Fulfilled / Returned / Accepted: Default only
//       (Section variants removed entirely)
//   • NavItem / Waterfall Row ComponentSet (2629:580) — 4 State variants
//   • NavItem / Waterfall standalone Component (2589:438) — 12-stack composition
//
// Cell (x, y, w, h) values mirror each variant's LOCAL position inside its
// ComponentSet exactly, so MatrixVerify can validate without drift.
type NIState = 'Default' | 'Hover' | 'Active' | 'Disabled' | 'Expanded' | 'Collapsed';

const NI_CELLS: MatrixCellSpec[] = [
  // — NavItem set (1054:294) — Item row (y=27)
  { variant: 'Type=Item, Tone=Sidebar, State=Default',  x: 20,  y: 27,  w: 146, h: 36, expect: { headings: [] } },
  { variant: 'Type=Item, Tone=Sidebar, State=Hover',    x: 260, y: 27,  w: 146, h: 36, expect: { headings: [] } },
  { variant: 'Type=Item, Tone=TopNav, State=Active',    x: 500, y: 27,  w: 146, h: 36, expect: { headings: [] } },
  { variant: 'Type=Item, Tone=TopNav, State=Default',   x: 748, y: 27,  w: 146, h: 36, expect: { headings: [] } },
  { variant: 'Type=Item, Tone=TopNav, State=Hover',     x: 975, y: 27,  w: 146, h: 36, expect: { headings: [] } },
  // — NavItem set — Group Outstanding row (y=114)
  { variant: 'Type=Group, Status=Outstanding, State=Default',  x: 20,  y: 114, w: 210, h: 36, expect: { headings: [] } },
  { variant: 'Type=Group, Status=Outstanding, State=Hover',    x: 260, y: 114, w: 210, h: 36, expect: { headings: [] } },
  { variant: 'Type=Group, Status=Outstanding, State=Active',   x: 500, y: 114, w: 210, h: 36, expect: { headings: [] } },
  { variant: 'Type=Group, Status=Outstanding, State=Disabled', x: 740, y: 114, w: 210, h: 36, expect: { headings: [] } },
  // — NavItem set — Group other statuses (Default only, single column)
  { variant: 'Type=Group, Status=Fulfilled, State=Default', x: 20, y: 166, w: 210, h: 36, expect: { headings: [] } },
  { variant: 'Type=Group, Status=Returned,  State=Default', x: 20, y: 218, w: 210, h: 36, expect: { headings: [] } },
  { variant: 'Type=Group, Status=Accepted,  State=Default', x: 20, y: 270, w: 210, h: 36, expect: { headings: [] } },
  // — NavItem / Waterfall Row set (2629:580) — 4 State variants, below NavItem set
  { variant: 'WaterfallRow, State=Default',  x: 20,  y: 400, w: 143, h: 112, expect: { headings: [] } },
  { variant: 'WaterfallRow, State=Hover',    x: 183, y: 400, w: 143, h: 112, expect: { headings: [] } },
  { variant: 'WaterfallRow, State=Active',   x: 346, y: 400, w: 143, h: 112, expect: { headings: [] } },
  { variant: 'WaterfallRow, State=Disabled', x: 509, y: 400, w: 143, h: 112, expect: { headings: [] } },
  // — NavItem / Waterfall (2589:438) — 12-stack composition
  { variant: 'NavItem/Waterfall, 12-stack', x: 680, y: 400, w: 320, h: 384, expect: { headings: [] } },
];

interface NavItemCellProps {
  type: 'item' | 'group' | 'section';
  tone?: 'sidebar' | 'topnav';
  status?: NavItemStatus;
  state: NIState;
}
const parseVariant = (v: string): NavItemCellProps | null => {
  if (!/^Type=/.test(v)) return null; // non-NavItem-set variants rendered separately
  const type   = v.match(/Type=(\w+)/)![1].toLowerCase() as NavItemCellProps['type'];
  const tone   = v.match(/Tone=(\w+)/)?.[1].toLowerCase() as 'sidebar' | 'topnav' | undefined;
  const statusName = v.match(/Status=(\w+)/)?.[1];
  const status = statusName ? (statusName.toLowerCase() as NavItemStatus) : undefined;
  const state  = v.match(/State=(\w+)/)![1] as NIState;
  return { type, tone, status, state };
};

const renderVariant = (p: NavItemCellProps) => {
  const active = p.state === 'Active';
  const disabled = p.state === 'Disabled';
  const forceHover = p.state === 'Hover';

  if (p.type === 'section') {
    return <NavItem type="section" title="Nav item" expanded={p.state === 'Expanded'} forceHover={forceHover} onToggle={() => {}} />;
  }
  if (p.type === 'group') {
    return (
      <NavItem
        type="group" status={p.status ?? 'outstanding'} index={55} title="Nav item"
        active={active} disabled={disabled} forceHover={forceHover}
        onSelect={() => {}}
      />
    );
  }
  return (
    <NavItem
      type="item" icon={Briefcase01Icon} title="Nav item" tone={p.tone ?? 'sidebar'}
      active={active} disabled={disabled} forceHover={forceHover}
      onSelect={() => {}}
    />
  );
};

// Renderer for `NavItem / Waterfall Row` set State variants (2629:580).
// Single waterfall row with 2 default-visible children — mirrors the Figma
// variant which shows the row at its natural h=112 (parent 36 + slot 76).
const renderWaterfallRow = (variant: string) => {
  const state = variant.match(/State=(\w+)/)![1] as 'Default' | 'Hover' | 'Active' | 'Disabled';
  return (
    <NavItem
      type="waterfall"
      icon={Briefcase01Icon}
      title="Nav item"
      active={state === 'Active'}
      disabled={state === 'Disabled'}
      forceHover={state === 'Hover'}
      defaultExpanded
    >
      <NavItem icon={Briefcase01Icon} title="Child item 1" />
      <NavItem icon={Briefcase01Icon} title="Child item 2" />
    </NavItem>
  );
};

// Renderer for `NavItem / Waterfall` 12-stack composition (2589:438).
// Mirrors the canonical multi-parent stack — 3 expanded parents shown as a
// representative slice (real component supports 12).
const renderWaterfallStack = () => (
  <div className="flex flex-col">
    <NavItem type="waterfall" icon={Building01Icon} title="My firm" defaultExpanded>
      <NavItem icon={UserCircleIcon} title="Acme Corp" />
      <NavItem icon={UserCircleIcon} title="Globex" />
    </NavItem>
    <NavItem type="waterfall" icon={Briefcase01Icon} title="Engagements" defaultExpanded>
      <NavItem icon={UserCircleIcon} title="Q4 Audit" active />
      <NavItem icon={UserCircleIcon} title="Q1 Review" />
    </NavItem>
    <NavItem type="waterfall" icon={Users01Icon} title="Team" defaultExpanded={false}>
      <NavItem icon={UserCircleIcon} title="Hidden" />
    </NavItem>
  </div>
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1020:2', cells: NI_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface min-w-fit p-12">{Story()}</div>
    ),
  ],
  render: () => (
    <div className="relative" style={{ width: 1180, height: 820 }}>
      {NI_CELLS.map((c) => {
        let content: React.ReactNode = null;
        if (c.variant.startsWith('WaterfallRow,')) {
          content = renderWaterfallRow(c.variant);
        } else if (c.variant.startsWith('NavItem/Waterfall,')) {
          content = renderWaterfallStack();
        } else {
          const parsed = parseVariant(c.variant);
          if (parsed) content = renderVariant(parsed);
        }
        return (
          <div
            key={c.variant}
            className="absolute"
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          >
            {content}
          </div>
        );
      })}
    </div>
  ),
};
