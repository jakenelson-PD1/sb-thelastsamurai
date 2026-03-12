import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = { component: DatePicker, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default:   Story = { args: { label: 'Select date' } };
export const WithError: Story = { args: { label: 'Select date', error: 'Date is required' } };
