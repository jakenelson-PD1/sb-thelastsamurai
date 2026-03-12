import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { ActivityIcon } from './icons/ActivityIcon';
import { Bell01Icon } from './icons/Bell01Icon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { Settings01Icon } from './icons/Settings01Icon';
import { Trash01Icon } from './icons/Trash01Icon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { SearchLgIcon } from './icons/SearchLgIcon';

const meta: Meta<typeof Icon> = { component: Icon, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Icon>;

export const Activity:    Story = { args: { icon: ActivityIcon,    size: 20 } };
export const Bell:        Story = { args: { icon: Bell01Icon,      size: 20 } };
export const CheckCircle: Story = { args: { icon: CheckCircleIcon, size: 20 } };
export const Settings:    Story = { args: { icon: Settings01Icon,  size: 20 } };
export const Trash:       Story = { args: { icon: Trash01Icon,     size: 20 } };
export const ArrowRight:  Story = { args: { icon: ArrowRightIcon,  size: 20 } };
export const Search:      Story = { args: { icon: SearchLgIcon,    size: 20 } };
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ActivityIcon size={16} className="text-fg-secondary" />
      <ActivityIcon size={20} className="text-fg-secondary" />
      <ActivityIcon size={24} className="text-fg-secondary" />
      <ActivityIcon size={32} className="text-fg-secondary" />
    </div>
  ),
};
