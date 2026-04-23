import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarFilterChip } from './SidebarFilterChip';
import { ActionMenu } from '../overlay/ActionMenu';

const meta: Meta<typeof SidebarFilterChip> = {
  title: 'Navigation/SidebarFilterChip',
  component: SidebarFilterChip,
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface p-4 inline-block">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SidebarFilterChip>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState(false);
    return (
      <SidebarFilterChip
        label="Outstanding"
        color="yellow"
        count={12}
        active={active}
        onToggle={() => setActive((v) => !v)}
      />
    );
  },
};

export const Active: Story = {
  render: () => {
    const [active, setActive] = useState(true);
    return (
      <SidebarFilterChip
        label="Outstanding"
        color="yellow"
        count={12}
        active={active}
        onToggle={() => setActive((v) => !v)}
      />
    );
  },
};

export const WithSubMenu: Story = {
  render: () => {
    const [active, setActive] = useState(false);
    return (
      <SidebarFilterChip
        label="Status"
        color="brand"
        active={active}
        onToggle={() => setActive((v) => !v)}
        subMenu={
          <ActionMenu
            size="sm"
            groups={[{
              items: [
                { label: 'To Do' },
                { label: 'In Progress' },
                { label: 'Done' },
              ],
            }]}
          />
        }
      />
    );
  },
};

export const Grid: Story = {
  render: () => {
    const [states, setStates] = useState<Record<string, boolean>>({});
    const chips = [
      { label: 'Outstanding', color: 'yellow' as const, count: 12 },
      { label: 'Fulfilled',   color: 'green'  as const, count: 48 },
      { label: 'Overdue',     color: 'red'    as const, count: 3  },
      { label: 'All',         color: 'neutral' as const, count: 63 },
    ];
    return (
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <SidebarFilterChip
            key={c.label}
            label={c.label}
            color={c.color}
            count={c.count}
            active={!!states[c.label]}
            onToggle={() => setStates((s) => ({ ...s, [c.label]: !s[c.label] }))}
          />
        ))}
      </div>
    );
  },
};
