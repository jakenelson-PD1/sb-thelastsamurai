import type { Meta, StoryObj } from '@storybook/react';
import { HighPriorityFlag } from './HighPriorityFlag';

const meta: Meta<typeof HighPriorityFlag> = {
  title: 'Primitives/HighPriorityFlag',
  component: HighPriorityFlag,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof HighPriorityFlag>;

// ─── Default ─────────────────────────────────────────────────────────────────
// Filled-purple flag pill that marks a request as high priority. Used in
// RequestRow (meta zone) and RequestDetailHeader (title row).
export const Default: Story = {
  render: () => <HighPriorityFlag onClick={() => alert('high priority')} />,
};

// ─── In context (next to a title) ─────────────────────────────────────────────
export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-body-md font-semibold text-primary">CFO Initial Inquiries</span>
      <HighPriorityFlag />
    </div>
  ),
};
