import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = { component: Radio, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState('a');
    return (
      <Radio
        name="demo"
        options={[{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }]}
        value={val}
        onChange={setVal}
      />
    );
  },
};
