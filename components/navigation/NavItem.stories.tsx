import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarRow } from './SidebarRow';
import { SidebarStatusChip } from './SidebarStatusChip';
import { Badge } from '../primitives/Badge';
import { Dropdown } from '../overlay/Dropdown';
import { ActionMenu } from '../overlay/ActionMenu';
import { DotsVerticalIcon } from '../primitives/icons/DotsVerticalIcon';
import { MessageChatSquareIcon } from '../primitives/icons/MessageChatSquareIcon';
import { Flag01Icon } from '../primitives/icons/Flag01Icon';

const meta: Meta<typeof SidebarRow> = {
  title: 'Navigation/SidebarRow',
  component: SidebarRow,
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface w-[320px] p-2">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SidebarRow>;

const STATUS_OPTIONS = [
  { value: 'todo',        label: 'To Do',       color: 'neutral' as const },
  { value: 'in-progress', label: 'In Progress', color: 'yellow'  as const },
  { value: 'done',        label: 'Done',        color: 'green'   as const },
];

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

const OverflowMenu = () => (
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
            { label: 'Rename', onClick: () => console.log('rename') },
            { label: 'Duplicate', onClick: () => console.log('duplicate') },
            { label: 'Delete', danger: true, onClick: () => console.log('delete') },
          ],
        },
      ]}
    />
  </Dropdown>
);

export const Minimal: Story = {
  render: () => (
    <SidebarRow
      title="Inspection checklist"
      onSelect={() => console.log('row selected')}
    />
  ),
};

export const WithStatusChip: Story = {
  render: () => {
    const [value, setValue] = useState('in-progress');
    return (
      <SidebarRow
        title="Review Q3 financials"
        onSelect={() => console.log('row selected')}
        leading={
          <SidebarStatusChip
            value={value}
            options={STATUS_OPTIONS}
            onChange={(v) => {
              console.log('chip change', v);
              setValue(v);
            }}
          />
        }
      />
    );
  },
};

export const WithSubtitle: Story = {
  render: () => (
    <SidebarRow
      title="Verify bank reconciliation statements for all accounts"
      subtitle="Due Apr 29 · Assigned to Morgan Allen from Finance"
      onSelect={() => console.log('row selected')}
    />
  ),
};

export const WithHoverActions: Story = {
  render: () => (
    <SidebarRow
      title="Upload supporting documents"
      onSelect={() => console.log('row selected')}
      hoverActions={
        <>
          <Avatar initials="MA" />
          <IconButton label="Comment" onClick={() => console.log('comment')}>
            <MessageChatSquareIcon size={16} />
          </IconButton>
          <IconButton label="Flag" onClick={() => console.log('flag')}>
            <Flag01Icon size={16} />
          </IconButton>
        </>
      }
    />
  ),
};

export const WithOverflowMenu: Story = {
  render: () => (
    <SidebarRow
      title="Update vendor tax forms"
      onSelect={() => console.log('row selected')}
      trailing={<Badge variant="warning">3</Badge>}
      overflowMenu={<OverflowMenu />}
    />
  ),
};

export const FullyLoaded: Story = {
  render: () => {
    const [value, setValue] = useState('in-progress');
    return (
      <SidebarRow
        title="Cross-check GL balances against trial balance"
        subtitle="Due Apr 30 · Morgan Allen"
        index={12}
        onSelect={() => console.log('row selected')}
        leading={
          <SidebarStatusChip
            value={value}
            options={STATUS_OPTIONS}
            onChange={(v) => {
              console.log('chip change', v);
              setValue(v);
            }}
          />
        }
        hoverActions={
          <>
            <Avatar initials="MA" />
            <IconButton label="Comment" onClick={() => console.log('comment')}>
              <MessageChatSquareIcon size={16} />
            </IconButton>
            <IconButton label="Flag" onClick={() => console.log('flag')}>
              <Flag01Icon size={16} />
            </IconButton>
          </>
        }
        trailing={<Badge variant="brand">New</Badge>}
        overflowMenu={<OverflowMenu />}
      />
    );
  },
};

export const ActiveState: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <SidebarRow
        title="Unselected row"
        onSelect={() => console.log('unselected clicked')}
      />
      <SidebarRow
        title="Active row"
        active
        onSelect={() => console.log('active clicked')}
      />
      <SidebarRow
        title="Another unselected row"
        onSelect={() => console.log('other clicked')}
      />
    </div>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <SidebarRow
      title="You cannot select this row"
      disabled
      onSelect={() => console.log('should NOT fire')}
    />
  ),
};
