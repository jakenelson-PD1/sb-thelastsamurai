import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = { component: Tabs, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('tab1');
    return (
      <Tabs
        tabs={[{ label: 'Tab 1', value: 'tab1' }, { label: 'Tab 2', value: 'tab2' }, { label: 'Tab 3', value: 'tab3' }]}
        active={active}
        onChange={setActive}
      />
    );
  },
};
