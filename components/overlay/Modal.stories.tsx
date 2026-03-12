import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../primitives/Button';

const meta: Meta<typeof Modal> = { component: Modal, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="This is a title"
          footer={[
            { label: 'Learn more',    onClick: () => setOpen(false) },
            { label: 'Save changes',  onClick: () => setOpen(false), variant: 'primary' },
          ]}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Modal>
      </>
    );
  },
  parameters: { layout: 'centered' },
};

export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete item</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete message"
          footer={[
            { label: 'Cancel',         onClick: () => setOpen(false) },
            { label: 'Delete message', onClick: () => setOpen(false), variant: 'danger' },
          ]}
        >
          <p>This message will be available in "Restore Files" for 90 days before being permanently deleted.</p>
        </Modal>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
