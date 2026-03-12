import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = { component: Skeleton, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text:  Story = { args: { width: '200px', height: '16px' } };
export const Block: Story = { args: { width: '300px', height: '80px' } };
