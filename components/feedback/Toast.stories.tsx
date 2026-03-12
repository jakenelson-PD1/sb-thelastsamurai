import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = { component: Toast, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Toast>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toast message="File saved" variant="default" />
      <Toast message="Success!" description="Your changes were saved." variant="success" />
      <Toast message="Error" description="Something went wrong. Please try again." variant="error" />
    </div>
  ),
};

export const Default: Story = { args: { message: 'File saved', variant: 'default' } };
export const Success: Story = { args: { message: 'Saved!', description: 'Your changes were saved.', variant: 'success' } };
export const Error: Story   = { args: { message: 'Error', description: 'Something went wrong.', variant: 'error' } };
