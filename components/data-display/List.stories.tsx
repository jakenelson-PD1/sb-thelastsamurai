import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = { component: List, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: { items: [
    { id: 1, primary: 'Item One',   secondary: 'Description' },
    { id: 2, primary: 'Item Two',   secondary: 'Description' },
    { id: 3, primary: 'Item Three' },
  ]},
};
