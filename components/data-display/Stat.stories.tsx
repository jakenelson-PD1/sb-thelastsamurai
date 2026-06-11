import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from './Stat';

const meta: Meta<typeof Stat> = {
  title: 'RLM Layout/Stat', component: Stat, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Stat>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-8 flex-wrap">
      <Stat label="Total Revenue" value="$48,295" change="+12% from last month" changeType="positive" />
      <Stat label="Active Users"  value="2,847"   change="+5.2%"               changeType="positive" />
      <Stat label="Churn Rate"    value="2.4%"    change="-0.3%"               changeType="negative" />
      <Stat label="Avg. Response" value="1.8s"    changeType="neutral" />
    </div>
  ),
};

export const Default:  Story = { args: { label: 'Total Revenue', value: '$48,295', change: '+12% from last month', changeType: 'positive' } };
export const Negative: Story = { args: { label: 'Churn Rate',    value: '2.4%',    change: '-0.3%',               changeType: 'negative' } };

export const Positive: Story = { args: { label: 'New Sign-ups',  value: '1,204',   change: '+8.1% this week',     changeType: 'positive' } };
export const Neutral:  Story = { args: { label: 'Avg. Response', value: '1.8s',    changeType: 'neutral' } };

export const WithLargeNumber: Story = { args: { label: 'Lifetime Revenue', value: '$12,847,300', change: '+3.4% vs last year', changeType: 'positive' } };
