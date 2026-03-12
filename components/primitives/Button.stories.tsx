import type { Meta, StoryObj } from '@storybook/react';
import { Plus, Trash2, Settings } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = { component: Button, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Learn more</Button>
      <Button variant="danger">Delete account</Button>
    </div>
  ),
};

export const Primary: Story    = { args: { children: 'Save changes', variant: 'primary' } };
export const Secondary: Story  = { args: { children: 'Cancel', variant: 'secondary' } };
export const Ghost: Story      = { args: { children: 'Learn more', variant: 'ghost' } };
export const Danger: Story     = { args: { children: 'Delete account', variant: 'danger' } };
export const Small: Story      = { args: { children: 'Small', size: 'sm' } };
export const Large: Story      = { args: { children: 'Large', size: 'lg' } };
export const Disabled: Story   = { args: { children: 'Disabled', disabled: true } };

export const WithStartIcon: Story = {
  args: { children: 'Add item', startIcon: <Plus size={16} /> },
};

export const WithEndIcon: Story = {
  args: { children: 'Settings', endIcon: <Settings size={16} /> },
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="primary" iconOnly size="sm"><Plus size={14} /></Button>
      <Button variant="primary" iconOnly size="md"><Plus size={16} /></Button>
      <Button variant="primary" iconOnly size="lg"><Plus size={18} /></Button>
      <Button variant="secondary" iconOnly size="md"><Settings size={16} /></Button>
      <Button variant="danger" iconOnly size="md"><Trash2 size={16} /></Button>
    </div>
  ),
};
