import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../primitives/Button';

const meta: Meta<typeof Drawer> = { component: Drawer, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Drawer" side="right">
          <p className="text-sm text-fg-muted">Drawer content.</p>
        </Drawer>
      </>
    );
  },
  parameters: { layout: 'centered' },
};
