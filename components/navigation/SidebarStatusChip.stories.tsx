import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarStatusChip } from './SidebarStatusChip';

const meta: Meta<typeof SidebarStatusChip> = {
  title: 'Navigation/SidebarStatusChip',
  component: SidebarStatusChip,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof SidebarStatusChip>;

const STATUS_OPTIONS = [
  { value: 'todo',        label: 'To Do',        color: 'neutral' as const },
  { value: 'in-progress', label: 'In Progress',  color: 'yellow'  as const },
  { value: 'done',        label: 'Done',         color: 'green'   as const },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('in-progress');
    return <SidebarStatusChip value={value} options={STATUS_OPTIONS} onChange={setValue} />;
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-4 bg-sidenav-surface" data-theme="dark">
      {(['brand','yellow','green','red','neutral'] as const).map((color) => (
        <SidebarStatusChip
          key={color}
          value={color}
          options={[{ value: color, label: color[0].toUpperCase() + color.slice(1), color }]}
          onChange={() => {}}
        />
      ))}
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('todo');
    return (
      <div>
        <SidebarStatusChip value={value} options={STATUS_OPTIONS} onChange={setValue} />
        <p className="mt-2 text-label-sm text-fg-muted">Current: {value}</p>
      </div>
    );
  },
};
