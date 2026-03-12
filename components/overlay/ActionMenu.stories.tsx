import type { Meta, StoryObj } from '@storybook/react';
import { ActionMenu } from './ActionMenu';
import { UploadCloud01Icon } from '../primitives/icons/UploadCloud01Icon';
import { Copy01Icon } from '../primitives/icons/Copy01Icon';
import { Edit01Icon } from '../primitives/icons/Edit01Icon';
import { Trash01Icon } from '../primitives/icons/Trash01Icon';
import { Share01Icon } from '../primitives/icons/Share01Icon';

const meta: Meta<typeof ActionMenu> = { component: ActionMenu, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ActionMenu>;

export const Default: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <UploadCloud01Icon size={16} />, label: 'Action label', shortcut: '⌘V' },
          { icon: <UploadCloud01Icon size={16} />, label: 'Action label', shortcut: '⌘V' },
        ],
      },
      {
        items: [
          { icon: <UploadCloud01Icon size={16} />, label: 'Action label', shortcut: 'Shift+B' },
          { icon: <UploadCloud01Icon size={16} />, label: 'Action label', shortcut: '⌘V' },
          { icon: <UploadCloud01Icon size={16} />, label: 'Action label', shortcut: '⌘V' },
        ],
      },
    ],
  },
};

export const WithDangerItem: Story = {
  args: {
    groups: [
      {
        items: [
          { icon: <Edit01Icon size={16} />,  label: 'Edit',   shortcut: '⌘E' },
          { icon: <Copy01Icon size={16} />,    label: 'Duplicate' },
          { icon: <Share01Icon size={16} />,   label: 'Share',  shortcut: '⌘S' },
        ],
      },
      {
        items: [
          { icon: <Trash01Icon size={16} />, label: 'Delete', shortcut: '⌫', danger: true },
        ],
      },
    ],
  },
};
