import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { SidebarHeader } from './SidebarHeader';
import { SidebarToolbar } from './SidebarToolbar';
import { SidebarSection } from './SidebarSection';
import { SidebarRow } from './SidebarRow';
import { SidebarFilterChip } from './SidebarFilterChip';
import { SidebarStatusChip } from './SidebarStatusChip';
import { Badge } from '../primitives/Badge';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { Briefcase01Icon } from '../primitives/icons/Briefcase01Icon';
import { Settings01Icon } from '../primitives/icons/Settings01Icon';
import { DotsHorizontalIcon } from '../primitives/icons/DotsHorizontalIcon';
import { DotsVerticalIcon } from '../primitives/icons/DotsVerticalIcon';
import { MessageChatSquareIcon } from '../primitives/icons/MessageChatSquareIcon';
import { Flag01Icon } from '../primitives/icons/Flag01Icon';

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

const STATUS_OPTIONS = [
  { value: 'todo',        label: 'To Do',       color: 'neutral' as const },
  { value: 'in-progress', label: 'In Progress', color: 'yellow'  as const },
  { value: 'done',        label: 'Done',        color: 'green'   as const },
  { value: 'overdue',     label: 'Overdue',     color: 'red'     as const },
];

// ── Shared helpers ──────────────────────────────────────────────────────────

const Avatar = ({ initials = 'AB' }: { initials?: string }) => (
  <div className="h-6 w-6 rounded-full bg-sidenav-surface-elevated text-label-sm flex items-center justify-center text-sidenav-fg-primary">
    {initials}
  </div>
);

const IconButton = ({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
}) => (
  <button
    type="button"
    aria-label={label}
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
    className="p-1 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
  >
    {children}
  </button>
);

const RowOverflowMenu = () => (
  <Dropdown
    align="right"
    width="auto"
    trigger={
      <button
        type="button"
        aria-label="More actions"
        onClick={(e) => e.stopPropagation()}
        className="p-1 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
      >
        <DotsVerticalIcon size={16} />
      </button>
    }
  >
    <ActionMenu
      size="sm"
      groups={[
        {
          items: [
            { label: 'Rename',     onClick: () => console.log('rename') },
            { label: 'Duplicate',  onClick: () => console.log('duplicate') },
            { label: 'Move to…',   onClick: () => console.log('move') },
            { label: 'Delete', danger: true, onClick: () => console.log('delete') },
          ],
        },
      ]}
    />
  </Dropdown>
);

interface SampleRowProps {
  title: string;
  subtitle?: string;
  status?: string;
  index?: number;
  initials?: string;
  trailing?: React.ReactNode;
  active?: boolean;
}

function SampleRow({
  title,
  subtitle,
  status = 'in-progress',
  index,
  initials = 'MA',
  trailing,
  active,
}: SampleRowProps) {
  const [statusValue, setStatusValue] = useState(status);
  return (
    <SidebarRow
      title={title}
      subtitle={subtitle}
      index={index}
      active={active}
      onSelect={() => console.log('row selected:', title)}
      leading={
        <SidebarStatusChip
          value={statusValue}
          options={STATUS_OPTIONS}
          onChange={(v) => setStatusValue(v)}
        />
      }
      hoverActions={
        <>
          <Avatar initials={initials} />
          <IconButton label="Comment" onClick={() => console.log('comment')}>
            <MessageChatSquareIcon size={16} />
          </IconButton>
          <IconButton label="Flag" onClick={() => console.log('flag')}>
            <Flag01Icon size={16} />
          </IconButton>
        </>
      }
      trailing={trailing}
      overflowMenu={<RowOverflowMenu />}
    />
  );
}

// ── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [inProgress, setInProgress] = useState(true);
    const [outstanding, setOutstanding] = useState(false);
    return (
      <div className="h-screen flex bg-canvas">
        <Sidebar>
          <SidebarHeader
            title="Acme Corp · FY2025"
            subtitle="Tax Return"
            icon={<Briefcase01Icon size={16} />}
            onBack={() => console.log('back')}
          />
          <SidebarToolbar>
            <SidebarFilterChip
              label="In Progress"
              color="brand"
              count={12}
              active={inProgress}
              onToggle={() => setInProgress((v) => !v)}
            />
            <SidebarFilterChip
              label="Outstanding"
              color="yellow"
              count={4}
              active={outstanding}
              onToggle={() => setOutstanding((v) => !v)}
            />
          </SidebarToolbar>
          <div className="flex-1 overflow-y-auto">
            <SidebarSection title="Open Requests" count={4}>
              <SampleRow index={1} title="Bank statements - Q3" subtitle="Due Dec 15 · Alex" status="in-progress" />
              <SampleRow index={2} title="Payroll reconciliation"  subtitle="Due Dec 20 · Sam"  status="todo" />
              <SampleRow index={3} title="AR aging report"          subtitle="Due Dec 22 · Alex" status="overdue" />
              <SampleRow index={4} title="Capex schedule review"    subtitle="Due Dec 28 · Riley" status="in-progress" />
            </SidebarSection>
          </div>
          <div className="px-3 py-2 border-t border-sidenav-border text-label-sm text-sidenav-fg-muted">
            12 open · 4 closed
          </div>
        </Sidebar>
        <div className="flex-1 p-4 text-fg-secondary">
          Document area — any child node can act as a footer (last child in the flex column).
        </div>
      </div>
    );
  },
};

export const Minimal: Story = {
  render: () => (
    <div className="h-screen flex bg-canvas">
      <Sidebar ariaLabel="Main navigation">
        <SidebarRow title="Dashboard" active onSelect={() => console.log('dashboard')} />
        <SidebarRow title="Orders"          onSelect={() => console.log('orders')} />
        <SidebarRow title="Customers"       onSelect={() => console.log('customers')} />
        <SidebarRow title="Products"        onSelect={() => console.log('products')} />
        <SidebarRow title="Settings"        onSelect={() => console.log('settings')} />
      </Sidebar>
      <div className="flex-1 p-4 text-fg-secondary">
        Minimal shell — no header, toolbar, or sections. Verifies Sidebar works as a thin list nav.
      </div>
    </div>
  ),
};

export const LightTheme: Story = {
  render: () => {
    const [inProgress, setInProgress] = useState(true);
    const [outstanding, setOutstanding] = useState(false);
    return (
      <div className="h-screen flex bg-canvas">
        <Sidebar theme="light">
          <SidebarHeader
            title="Acme Corp · FY2025"
            subtitle="Tax Return"
            icon={<Briefcase01Icon size={16} />}
            onBack={() => console.log('back')}
          />
          <SidebarToolbar>
            <SidebarFilterChip
              label="In Progress"
              color="brand"
              count={12}
              active={inProgress}
              onToggle={() => setInProgress((v) => !v)}
            />
            <SidebarFilterChip
              label="Outstanding"
              color="yellow"
              count={4}
              active={outstanding}
              onToggle={() => setOutstanding((v) => !v)}
            />
          </SidebarToolbar>
          <div className="flex-1 overflow-y-auto">
            <SidebarSection title="Open Requests" count={4}>
              <SampleRow index={1} title="Bank statements - Q3" subtitle="Due Dec 15 · Alex" status="in-progress" />
              <SampleRow index={2} title="Payroll reconciliation" subtitle="Due Dec 20 · Sam"  status="todo" />
              <SampleRow index={3} title="AR aging report"         subtitle="Due Dec 22 · Alex" status="overdue" />
              <SampleRow index={4} title="Capex schedule review"   subtitle="Due Dec 28 · Riley" status="in-progress" />
            </SidebarSection>
          </div>
        </Sidebar>
        <div className="flex-1 p-4 text-fg-secondary">
          theme=&ldquo;light&rdquo; — same shape as Default. Verifies tokens flip cleanly.
        </div>
      </div>
    );
  },
};

export const ProductionReplica: Story = {
  render: () => {
    const [inProgress, setInProgress]   = useState(true);
    const [outstanding, setOutstanding] = useState(false);
    const [fulfilled, setFulfilled]     = useState(false);
    const [overdue, setOverdue]         = useState(false);

    const subMenu = (
      <ActionMenu
        size="sm"
        groups={[
          {
            items: [
              { label: 'Only mine',      onClick: () => console.log('only mine') },
              { label: 'Due this week',  onClick: () => console.log('due this week') },
              { label: 'Overdue',        onClick: () => console.log('overdue') },
            ],
          },
        ]}
      />
    );

    return (
      <div className="h-screen flex bg-canvas">
        <Sidebar theme="dark" width={320}>
          <SidebarHeader
            title="Acme Corp · FY2025"
            subtitle="Tax Return"
            icon={<Briefcase01Icon size={16} />}
            onBack={() => console.log('back')}
            actions={
              <>
                <IconButton label="Settings" onClick={() => console.log('settings')}>
                  <Settings01Icon size={16} />
                </IconButton>
                <IconButton label="More actions" onClick={() => console.log('more')}>
                  <DotsHorizontalIcon size={16} />
                </IconButton>
              </>
            }
          />

          <SidebarToolbar>
            <SidebarFilterChip
              label="In Progress"
              color="brand"
              count={12}
              active={inProgress}
              onToggle={() => setInProgress((v) => !v)}
              subMenu={subMenu}
            />
            <SidebarFilterChip
              label="Outstanding"
              color="yellow"
              count={4}
              active={outstanding}
              onToggle={() => setOutstanding((v) => !v)}
            />
            <SidebarFilterChip
              label="Fulfilled"
              color="green"
              count={18}
              active={fulfilled}
              onToggle={() => setFulfilled((v) => !v)}
            />
            <SidebarFilterChip
              label="Overdue"
              color="red"
              count={2}
              active={overdue}
              onToggle={() => setOverdue((v) => !v)}
            />
          </SidebarToolbar>

          <div className="flex-1 overflow-y-auto">
            <SidebarSection title="Open Requests" count={12}>
              <SampleRow
                index={1}
                title="Bank statements - Q3"
                subtitle="Due Dec 15 · Assigned to Alex"
                status="in-progress"
                initials="AL"
                trailing={<Badge variant="warning">3</Badge>}
              />
              <SampleRow
                index={2}
                title="Payroll reconciliation"
                subtitle="Due Dec 20 · Assigned to Sam"
                status="todo"
                initials="SA"
              />
              <SampleRow
                index={3}
                title="AR aging report"
                subtitle="Due Dec 22 · Assigned to Alex"
                status="overdue"
                initials="AL"
                trailing={<Badge variant="brand">New</Badge>}
              />
              <SampleRow
                index={4}
                title="Capex schedule review"
                subtitle="Due Dec 28 · Assigned to Riley"
                status="in-progress"
                initials="RI"
              />
              <SampleRow
                index={5}
                title="Fixed asset roll-forward"
                subtitle="Due Jan 3 · Assigned to Morgan"
                status="todo"
                initials="MO"
                trailing={<Badge variant="warning">5</Badge>}
              />
              <SampleRow
                index={6}
                title="Deferred revenue schedule"
                subtitle="Due Jan 5 · Assigned to Alex"
                status="in-progress"
                initials="AL"
                active
              />
              <SampleRow
                index={7}
                title="Inventory count confirmation"
                subtitle="Due Jan 8 · Assigned to Sam"
                status="overdue"
                initials="SA"
                trailing={<Badge variant="brand">2</Badge>}
              />
              <SampleRow
                index={8}
                title="Tax provision workpaper"
                subtitle="Due Jan 12 · Assigned to Riley"
                status="in-progress"
                initials="RI"
              />
            </SidebarSection>

            <SidebarSection title="Closed" count={4}>
              <SampleRow
                index={1}
                title="Signed engagement letter"
                subtitle="Completed Nov 12 · Alex"
                status="done"
                initials="AL"
                trailing={<Badge variant="success">Done</Badge>}
              />
              <SampleRow
                index={2}
                title="Prior-year adjustments"
                subtitle="Completed Nov 20 · Morgan"
                status="done"
                initials="MO"
              />
              <SampleRow
                index={3}
                title="Trial balance import"
                subtitle="Completed Nov 28 · Sam"
                status="done"
                initials="SA"
                trailing={<Badge variant="success">Done</Badge>}
              />
              <SampleRow
                index={4}
                title="Entity structure diagram"
                subtitle="Completed Dec 2 · Riley"
                status="done"
                initials="RI"
              />
            </SidebarSection>
          </div>

          <div className="px-3 py-2 border-t border-sidenav-border flex items-center justify-between">
            <span className="text-label-sm text-sidenav-fg-muted">36 total</span>
            <span className="text-label-sm text-sidenav-fg-muted">FY2025</span>
          </div>
        </Sidebar>

        <div className="flex-1 p-6 text-fg-secondary">
          <div className="text-heading-md text-fg-primary mb-2">Request detail</div>
          <p>ProductionReplica — full compound layout matches the app shell.</p>
        </div>
      </div>
    );
  },
};
