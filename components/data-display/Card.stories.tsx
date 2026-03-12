import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = { component: Card, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Card>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Card padding="sm"><p className="text-sm text-fg-secondary">Small padding card</p></Card>
      <Card padding="md">
        <h3 className="text-sm font-semibold text-fg-primary mb-1">Order #1042</h3>
        <p className="text-sm text-fg-secondary">Placed on March 10, 2026 · $148.00</p>
      </Card>
      <Card padding="lg">
        <h3 className="text-sm font-semibold text-fg-primary mb-2">Account summary</h3>
        <p className="text-sm text-fg-muted">Large padding for prominent content areas.</p>
      </Card>
    </div>
  ),
};

export const Default: Story = {
  args: { padding: 'md', children: 'Card content goes here.' },
};
