import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = { component: Divider, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = { args: { orientation: 'horizontal' } };
export const Vertical: Story   = {
  decorators: [(Story) => <div className="h-20">{Story()}</div>],
  args: { orientation: 'vertical' },
};
