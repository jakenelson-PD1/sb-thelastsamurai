import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = { component: List, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof List>;

export const WithDescriptions: Story = {
  args: { items: [
    { id: 1, primary: 'Alice Chen',   secondary: 'alice@example.com · Admin' },
    { id: 2, primary: 'Bob Martinez', secondary: 'bob@example.com · Editor' },
    { id: 3, primary: 'Carol Kim',    secondary: 'carol@example.com · Viewer' },
  ]},
};

export const Simple: Story = {
  args: { items: [
    { id: 1, primary: 'Dashboard' },
    { id: 2, primary: 'Orders' },
    { id: 3, primary: 'Settings' },
  ]},
};
