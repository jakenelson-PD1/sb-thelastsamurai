import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = { component: Toast, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = { args: { message: 'File saved', variant: 'default' } };
export const Success: Story = { args: { message: 'Success!', description: 'Your changes were saved.', variant: 'success' } };
export const Error:   Story = { args: { message: 'Error', description: 'Something went wrong.', variant: 'error' } };
