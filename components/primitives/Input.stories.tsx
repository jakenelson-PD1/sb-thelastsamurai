import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = { component: Input, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story    = { args: { label: 'Email', placeholder: 'you@example.com' } };
export const WithError: Story  = { args: { label: 'Email', error: 'Invalid email address' } };
export const Disabled: Story   = { args: { label: 'Email', disabled: true, value: 'readonly' } };
