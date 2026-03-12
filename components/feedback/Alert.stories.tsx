import type { Meta, StoryObj } from '@storybook/react';
import { Info as InfoIcon, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = { component: Alert, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Alert>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Heads up"     >Your trial expires in 7 days.</Alert>
      <Alert variant="success" title="Saved"        >Your changes have been published.</Alert>
      <Alert variant="warning" title="Attention"    >This action may affect other users.</Alert>
      <Alert variant="danger"  title="Error"        >Failed to save. Please try again.</Alert>
    </div>
  ),
};

export const Info: Story    = { args: { variant: 'info',    title: 'Heads up',  children: 'Your trial expires in 7 days.' } };
export const Success: Story = { args: { variant: 'success', title: 'Saved',     children: 'Your changes have been published.' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Attention', children: 'This action may affect other users.' } };
export const Danger: Story  = { args: { variant: 'danger',  title: 'Error',     children: 'Failed to save. Please try again.' } };

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info"    title="Update available" icon={<InfoIcon size={16} />}          >Version 2.0 is ready to install.</Alert>
      <Alert variant="success" title="Payment received" icon={<CheckCircle size={16} />}   >Invoice #1042 has been paid.</Alert>
      <Alert variant="warning" title="Low storage"      icon={<AlertTriangle size={16} />} >You have 500MB remaining.</Alert>
      <Alert variant="danger"  title="Login failed"     icon={<XCircle size={16} />}       >Incorrect password. 2 attempts left.</Alert>
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'Cookie policy',
    children: 'We use cookies to improve your experience.',
    action: { label: 'Manage settings', onClick: () => alert('manage') },
  },
};

export const WithIconAndAction: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    children: 'You have unsaved changes that will be lost.',
    icon: <AlertTriangle size={16} />,
    action: { label: 'Dismiss', onClick: () => alert('dismiss') },
  },
};
