import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Avatar } from './Avatar';

const meta: Meta<typeof Badge> = { component: Badge, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Badge>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outlined">Outlined</Badge>
    </div>
  ),
};

export const Default: Story  = { args: { children: 'Default' } };
export const Brand: Story    = { args: { children: 'Info',    variant: 'brand' } };
export const Success: Story  = { args: { children: 'Active',  variant: 'success' } };
export const Warning: Story  = { args: { children: 'Pending', variant: 'warning' } };
export const Danger: Story   = { args: { children: 'Error',   variant: 'danger' } };
export const Outlined: Story = { args: { children: 'Draft',   variant: 'outlined' } };

export const Deletable: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="brand" onDelete={() => alert('delete info')}>React</Badge>
      <Badge variant="success" onDelete={() => alert('delete success')}>TypeScript</Badge>
      <Badge variant="default" onDelete={() => alert('delete default')}>Tag</Badge>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Badge
      variant="default"
      avatar={<Avatar size="sm" initials="JN" className="h-4 w-4 text-[9px]" />}
    >
      Jake Nelson
    </Badge>
  ),
};
