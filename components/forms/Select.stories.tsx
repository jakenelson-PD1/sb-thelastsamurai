import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = { component: Select, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Select>;

const opts = [{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }];

export const Default:   Story = { args: { label: 'Pick one', options: opts } };
export const WithError: Story = { args: { label: 'Pick one', options: opts, error: 'Required field' } };
