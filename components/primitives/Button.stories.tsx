import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = { component: Button, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story    = { args: { children: 'Button', variant: 'primary' } };
export const Secondary: Story  = { args: { children: 'Button', variant: 'secondary' } };
export const Ghost: Story      = { args: { children: 'Button', variant: 'ghost' } };
export const Danger: Story     = { args: { children: 'Button', variant: 'danger' } };
export const Small: Story      = { args: { children: 'Button', size: 'sm' } };
export const Large: Story      = { args: { children: 'Button', size: 'lg' } };
