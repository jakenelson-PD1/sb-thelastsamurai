import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = { component: Checkbox, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked:     Story = { args: { label: 'Accept terms' } };
export const Checked:       Story = { args: { label: 'Accept terms', defaultChecked: true } };
export const Disabled:      Story = { args: { label: 'Disabled', disabled: true } };
export const DisabledChecked: Story = { args: { label: 'Disabled checked', disabled: true, defaultChecked: true } };
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};
