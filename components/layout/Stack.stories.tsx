import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = { component: Stack, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Stack>;

export const Vertical: Story = {
  args: { direction: 'col', gap: 4, children: [
    <div key="a" className="bg-neutral-100 p-3 rounded">Item 1</div>,
    <div key="b" className="bg-neutral-100 p-3 rounded">Item 2</div>,
    <div key="c" className="bg-neutral-100 p-3 rounded">Item 3</div>,
  ]},
};
