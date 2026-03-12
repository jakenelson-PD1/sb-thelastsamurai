import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = { component: Avatar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Avatar>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" initials="JN" />
      <Avatar size="md" initials="JN" />
      <Avatar size="lg" initials="JN" />
    </div>
  ),
};

export const WithInitials: Story = { args: { initials: 'JN', size: 'md' } };
export const Small: Story        = { args: { initials: 'AB', size: 'sm' } };
export const Large: Story        = { args: { initials: 'SK', size: 'lg' } };
