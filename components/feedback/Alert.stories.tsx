import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = { component: Alert, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info:    Story = { args: { variant: 'info',    title: 'Heads up',       children: 'This is informational.' } };
export const Success: Story = { args: { variant: 'success', title: 'Success',        children: 'Your changes were saved.' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Warning',        children: 'Check your input.' } };
export const Danger:  Story = { args: { variant: 'danger',  title: 'Error occurred', children: 'Something went wrong.' } };
