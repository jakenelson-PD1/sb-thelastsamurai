import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from './Stat';

const meta: Meta<typeof Stat> = { component: Stat, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Stat>;

export const Default:  Story = { args: { label: 'Total Revenue', value: '$12,400',   change: '+8% from last month', changeType: 'positive' } };
export const Negative: Story = { args: { label: 'Churn Rate',    value: '3.2%',      change: '-0.5%',              changeType: 'negative' } };
