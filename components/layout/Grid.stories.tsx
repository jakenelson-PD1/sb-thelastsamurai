import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = { component: Grid, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Grid>;

export const TwoCol: Story = {
  args: { cols: 2, gap: 4, children: [
    <div key="a" className="bg-surface p-4 rounded">Cell A</div>,
    <div key="b" className="bg-surface p-4 rounded">Cell B</div>,
  ]},
};
