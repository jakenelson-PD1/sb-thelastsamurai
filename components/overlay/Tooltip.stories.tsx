import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../primitives/Button';

const meta: Meta<typeof Tooltip> = { component: Tooltip, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Helpful text">
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
};
