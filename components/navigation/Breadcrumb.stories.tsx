import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = { component: Breadcrumb, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: { items: [{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Sword' }] },
};
