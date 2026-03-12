import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../primitives/Button';

const meta: Meta<typeof Popover> = { component: Popover, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover trigger={<Button variant="secondary">Open Popover</Button>}>
      <p className="text-sm text-neutral-700">Popover content here.</p>
    </Popover>
  ),
};
