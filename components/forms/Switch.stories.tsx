import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = { component: Switch, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = {
  render: () => { const [v, setV] = useState(false); return <Switch checked={v} onChange={setV} label="Enable feature" />; },
};
export const On: Story = {
  render: () => { const [v, setV] = useState(true); return <Switch checked={v} onChange={setV} label="Enable feature" />; },
};
