import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThreeColumnLayout } from './ThreeColumnLayout';

const meta: Meta<typeof ThreeColumnLayout> = {
  component: ThreeColumnLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof ThreeColumnLayout>;

const NavItem = ({ label, active }: { label: string; active?: boolean }) => (
  <div
    className={`flex items-center gap-2 rounded px-2 py-1.5 text-sm cursor-pointer transition-colors ${
      active
        ? 'bg-action-primary/10 text-action-primary font-medium'
        : 'text-fg-secondary hover:bg-elevated hover:text-fg-primary'
    }`}
  >
    <span>{label}</span>
  </div>
);

const SidebarContent = () => (
  <div className="flex flex-col h-full bg-surface border-r border-line">
    <div className="px-3 py-3 border-b border-line">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">Workspace</p>
      <NavItem label="Dashboard" active />
      <NavItem label="Projects" />
      <NavItem label="Documents" />
      <NavItem label="Tasks" />
    </div>
    <div className="px-3 py-3 flex-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted mb-2">Recent</p>
      <NavItem label="Q4 Report Draft" />
      <NavItem label="Design Spec v2" />
      <NavItem label="Meeting Notes" />
      <NavItem label="API Reference" />
      <NavItem label="Roadmap 2026" />
    </div>
    <div className="px-3 py-3 border-t border-line">
      <NavItem label="Settings" />
      <NavItem label="Help & Support" />
    </div>
  </div>
);

const MainContent = ({ onOpenRightPanel }: { onOpenRightPanel?: () => void }) => (
  <div className="flex flex-col h-full bg-canvas overflow-auto">
    <div className="px-8 py-6 max-w-3xl w-full mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-fg-muted uppercase tracking-wider mb-1">Documents / Q4 Report</p>
          <h1 className="text-2xl font-bold text-fg-primary">Q4 Performance Report</h1>
        </div>
        {onOpenRightPanel && (
          <button
            type="button"
            onClick={onOpenRightPanel}
            className="flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium bg-action-primary text-white hover:bg-action-primary/90 transition-colors"
          >
            Open comparison view
          </button>
        )}
      </div>

      <div className="bg-surface rounded-lg border border-line p-6 mb-4">
        <h2 className="text-lg font-semibold text-fg-primary mb-3">Executive Summary</h2>
        <p className="text-fg-secondary text-sm leading-relaxed mb-3">
          This report covers the key performance metrics for Q4 of the fiscal year. Overall revenue grew by 18% year-over-year,
          driven primarily by expansion in the enterprise segment and strong retention across existing accounts.
        </p>
        <p className="text-fg-secondary text-sm leading-relaxed">
          Operating margins improved to 24.3%, up from 21.1% in the prior quarter, reflecting improved cost discipline and
          favorable product mix. The team exceeded targets in three of four strategic pillars.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Total Revenue', value: '$4.2M', delta: '+18%' },
          { label: 'New Customers', value: '142', delta: '+31%' },
          { label: 'Net Retention', value: '118%', delta: '+4pp' },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface rounded-lg border border-line p-4">
            <p className="text-xs text-fg-muted mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-fg-primary">{stat.value}</p>
            <p className="text-xs text-success mt-0.5">{stat.delta} vs last quarter</p>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-lg border border-line p-6 mb-4">
        <h2 className="text-lg font-semibold text-fg-primary mb-3">Key Highlights</h2>
        <ul className="space-y-2">
          {[
            'Enterprise segment exceeded quota by 12%, with notable wins in financial services.',
            'Product-led growth initiatives contributed 23% of new ARR, up from 15% last quarter.',
            'Support ticket volume decreased 8% despite 20% growth in user base.',
            'Infrastructure costs reduced by $180K following cloud optimization project.',
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm text-fg-secondary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-action-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-surface rounded-lg border border-line p-6">
        <h2 className="text-lg font-semibold text-fg-primary mb-3">Looking Ahead</h2>
        <p className="text-fg-secondary text-sm leading-relaxed">
          Q1 guidance targets 15–20% sequential growth, supported by a strong pipeline and three major product launches
          scheduled for the first half. Headcount is expected to grow by 12 engineers and 5 go-to-market roles.
        </p>
      </div>
    </div>
  </div>
);

const RightPanelContent = () => (
  <div className="p-4 overflow-auto h-full">
    <div className="mb-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted mb-3">Document Details</p>
      <dl className="space-y-2">
        {[
          { label: 'Author', value: 'Sarah Chen' },
          { label: 'Last modified', value: 'Mar 17, 2026' },
          { label: 'Status', value: 'Under review' },
          { label: 'Version', value: 'v2.4' },
          { label: 'Word count', value: '3,241' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between text-sm">
            <dt className="text-fg-muted">{label}</dt>
            <dd className="text-fg-primary font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>

    <div className="border-t border-line pt-4 mb-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted mb-3">Prior Quarter (Q3)</p>
      <div className="space-y-2">
        {[
          { label: 'Total Revenue', value: '$3.6M' },
          { label: 'New Customers', value: '108' },
          { label: 'Net Retention', value: '114%' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-fg-muted">{label}</span>
            <span className="text-fg-primary font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-line pt-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted mb-3">Comments (3)</p>
      <div className="space-y-3">
        {[
          { author: 'Mark T.', time: '2h ago', text: 'Can we add a breakdown by region in the revenue section?' },
          { author: 'Priya S.', time: '5h ago', text: 'The net retention figure looks off — double-check the churned accounts.' },
          { author: 'James L.', time: '1d ago', text: 'Approved the executive summary. Rest LGTM.' },
        ].map(({ author, time, text }) => (
          <div key={author + time} className="rounded border border-line bg-elevated p-3">
            <div className="flex justify-between mb-1">
              <span className="text-xs font-semibold text-fg-primary">{author}</span>
              <span className="text-xs text-fg-muted">{time}</span>
            </div>
            <p className="text-xs text-fg-secondary leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    sidebar: <SidebarContent />,
    content: <MainContent />,
    rightPanelOpen: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithRightPanel: Story = {
  args: {
    sidebar: <SidebarContent />,
    content: <MainContent />,
    rightPanel: <RightPanelContent />,
    rightPanelTitle: 'Document Details',
    rightPanelOpen: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

function InteractiveStory() {
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  return (
    <div className="h-screen w-screen">
      <ThreeColumnLayout
        sidebar={<SidebarContent />}
        content={<MainContent onOpenRightPanel={() => setRightPanelOpen(true)} />}
        rightPanel={<RightPanelContent />}
        rightPanelTitle="Document Details"
        rightPanelOpen={rightPanelOpen}
        onCloseRightPanel={() => setRightPanelOpen(false)}
        autoSaveId="three-col-interactive"
      />
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveStory />,
  parameters: {
    layout: 'fullscreen',
  },
};
