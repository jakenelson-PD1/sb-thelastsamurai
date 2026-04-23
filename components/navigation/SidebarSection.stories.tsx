import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarSection } from './SidebarSection';
import { PlusIcon } from '../primitives/icons/PlusIcon';

const meta: Meta<typeof SidebarSection> = {
  title: 'Navigation/SidebarSection',
  component: SidebarSection,
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-sidenav-surface w-[320px] p-2">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SidebarSection>;

const Row = ({ label }: { label: string }) => (
  <div className="px-3 py-2 text-body-sm text-sidenav-fg-secondary hover:bg-sidenav-surface-hover">
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <SidebarSection title="Open Requests" count={4}>
      <Row label="Request 1" />
      <Row label="Request 2" />
      <Row label="Request 3" />
      <Row label="Request 4" />
    </SidebarSection>
  ),
};

export const Nested: Story = {
  render: () => (
    <SidebarSection title="Projects">
      <Row label="Project Alpha" />
      <SidebarSection title="Archive" count={2}>
        <Row label="2024" />
        <Row label="2025" />
      </SidebarSection>
      <Row label="Project Beta" />
    </SidebarSection>
  ),
};

export const WithActions: Story = {
  render: () => (
    <SidebarSection
      title="Tasks"
      count={3}
      actions={
        <button
          type="button"
          aria-label="Add task"
          onClick={() => {}}
          className="p-1 rounded-control hover:bg-sidenav-surface-hover text-sidenav-fg-secondary"
        >
          <PlusIcon size={14} />
        </button>
      }
    >
      <Row label="Task 1" />
      <Row label="Task 2" />
      <Row label="Task 3" />
    </SidebarSection>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <SidebarSection title="Archive" count={7} defaultOpen={false}>
      <Row label="Hidden row 1" />
      <Row label="Hidden row 2" />
    </SidebarSection>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="self-start rounded-control bg-sidenav-surface-hover px-2 py-1 text-label-sm text-sidenav-fg-primary"
        >
          Toggle ({open ? 'open' : 'closed'})
        </button>
        <SidebarSection title="Controlled" open={open} onOpenChange={setOpen}>
          <Row label="Row A" />
          <Row label="Row B" />
        </SidebarSection>
      </div>
    );
  },
};
