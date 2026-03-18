import type { Meta, StoryObj } from '@storybook/react';
import { AppShell } from './AppShell';

const meta: Meta<typeof AppShell> = {
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof AppShell>;

const MockNav = () => (
  <div className="flex w-full items-center gap-6">
    <span className="text-fg-primary font-semibold text-lg">LastSamurai</span>
    <nav className="flex gap-4">
      <a href="#" className="text-fg-secondary hover:text-fg-primary text-sm">Dashboard</a>
      <a href="#" className="text-fg-secondary hover:text-fg-primary text-sm">Projects</a>
      <a href="#" className="text-fg-secondary hover:text-fg-primary text-sm">Settings</a>
    </nav>
  </div>
);

const MockContent = () => (
  <div className="flex flex-1 overflow-hidden">
    <aside className="w-56 shrink-0 border-r border-line bg-surface p-4">
      <p className="text-fg-muted text-xs uppercase tracking-wide mb-3">Sidebar</p>
      <div className="flex flex-col gap-2">
        <div className="bg-elevated rounded p-2 text-fg-secondary text-sm">Item A</div>
        <div className="bg-elevated rounded p-2 text-fg-secondary text-sm">Item B</div>
        <div className="bg-elevated rounded p-2 text-fg-secondary text-sm">Item C</div>
      </div>
    </aside>
    <main className="flex-1 overflow-auto bg-canvas p-6">
      <div className="bg-surface rounded shadow-card p-4 mb-4">
        <p className="text-fg-primary font-medium mb-1">Panel Content</p>
        <p className="text-fg-secondary text-sm">This is the main content area. Place a PanelGroup here for resizable panels.</p>
      </div>
      <div className="bg-surface rounded shadow-card p-4">
        <p className="text-fg-muted text-sm">Additional content goes here.</p>
      </div>
    </main>
  </div>
);

export const Default: Story = {
  args: {
    header: <MockNav />,
    children: <MockContent />,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const TallHeader: Story = {
  args: {
    header: <MockNav />,
    children: <MockContent />,
    headerHeight: 72,
  },
  parameters: {
    layout: 'fullscreen',
  },
};
