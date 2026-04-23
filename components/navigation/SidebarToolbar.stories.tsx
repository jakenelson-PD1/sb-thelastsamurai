import type { Meta, StoryObj } from '@storybook/react';
import { SidebarToolbar } from './SidebarToolbar';
import { SidebarFilterChip } from './SidebarFilterChip';

const meta: Meta<typeof SidebarToolbar> = {
  title: 'Navigation/SidebarToolbar',
  component: SidebarToolbar,
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface w-[320px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SidebarToolbar>;

export const Default: Story = {
  render: () => (
    <SidebarToolbar>
      <SidebarFilterChip label="All" color="brand" active onToggle={() => {}} />
      <SidebarFilterChip label="Active" color="brand" active={false} onToggle={() => {}} />
      <SidebarFilterChip label="Archived" color="brand" active={false} onToggle={() => {}} />
    </SidebarToolbar>
  ),
};
