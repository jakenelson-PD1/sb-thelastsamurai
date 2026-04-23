import type { Meta, StoryObj } from '@storybook/react';
import { SidebarHeader } from './SidebarHeader';
import { Briefcase01Icon } from '../primitives/icons/Briefcase01Icon';
import { Settings01Icon } from '../primitives/icons/Settings01Icon';
import { DotsVerticalIcon } from '../primitives/icons/DotsVerticalIcon';

const meta: Meta<typeof SidebarHeader> = {
  title: 'Navigation/SidebarHeader',
  component: SidebarHeader,
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface w-[320px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SidebarHeader>;

export const Default: Story = {
  args: {
    title: 'Clients',
  },
};

export const WithBack: Story = {
  args: {
    title: 'Acme Corp',
    onBack: () => console.log('Back clicked'),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Engagements',
    actions: (
      <>
        <button
          type="button"
          className="inline-flex items-center justify-center p-1.5 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
          aria-label="Settings"
        >
          <Settings01Icon size={16} />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center p-1.5 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
          aria-label="More"
        >
          <DotsVerticalIcon size={16} />
        </button>
      </>
    ),
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Acme Corp · FY2025',
    subtitle: 'Tax Return',
  },
};

export const Full: Story = {
  args: {
    title: 'Acme Corp · FY2025',
    subtitle: 'Tax Return',
    icon: <Briefcase01Icon size={16} />,
    onBack: () => console.log('Back clicked'),
    actions: (
      <>
        <button
          type="button"
          className="inline-flex items-center justify-center p-1.5 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
          aria-label="Settings"
        >
          <Settings01Icon size={16} />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center p-1.5 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary hover:text-sidenav-fg-primary transition-colors"
          aria-label="More"
        >
          <DotsVerticalIcon size={16} />
        </button>
      </>
    ),
  },
};
