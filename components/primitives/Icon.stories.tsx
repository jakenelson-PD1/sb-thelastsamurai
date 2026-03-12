import type { Meta, StoryObj } from '@storybook/react';
import { Star, Bell, Settings } from 'lucide-react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = { component: Icon, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Icon>;

export const StarIcon:     Story = { args: { icon: Star,     size: 20 } };
export const BellIcon:     Story = { args: { icon: Bell,     size: 20 } };
export const SettingsIcon: Story = { args: { icon: Settings, size: 20 } };
