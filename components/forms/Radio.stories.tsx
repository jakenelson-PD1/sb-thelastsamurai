import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = { component: Radio, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Radio>;

const opts = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState('a');
    return <Radio name="demo" options={opts} value={val} onChange={setVal} />;
  },
};

export const Disabled: Story = {
  render: () => (
    <Radio name="demo-disabled" options={opts} value="a" disabled />
  ),
};
