import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MasterDetailLayout, AdditivePanel } from './MasterDetailLayout';

const meta: Meta<typeof MasterDetailLayout> = {
  component: MasterDetailLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof MasterDetailLayout>;

const items = [
  { id: '1', name: 'Battle of Sekigahara', date: 'Oct 21, 1600', status: 'Resolved' },
  { id: '2', name: 'Siege of Osaka', date: 'Nov 1614', status: 'In Progress' },
  { id: '3', name: 'Shimabara Rebellion', date: 'Dec 1637', status: 'Escalated' },
  { id: '4', name: 'Edo Period Trade Routes', date: 'Jan 1603', status: 'Resolved' },
  { id: '5', name: 'Satsuma Domain Survey', date: 'Mar 1871', status: 'In Progress' },
  { id: '6', name: 'Meiji Restoration Plan', date: 'Jan 1868', status: 'Resolved' },
];

const statusColor: Record<string, string> = {
  Resolved: 'text-success bg-success/10',
  'In Progress': 'text-action-primary bg-action-primary/10',
  Escalated: 'text-error bg-error/10',
};

const MockList = ({ selectedId, onSelect }: { selectedId: string; onSelect: (id: string) => void }) => (
  <div className="flex flex-col h-full bg-surface">
    <div className="px-4 py-3 border-b border-line">
      <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted">Campaigns</p>
    </div>
    <div className="flex-1 overflow-auto">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className={[
            'w-full text-left px-4 py-3 border-b border-line transition-colors',
            selectedId === item.id
              ? 'bg-action-primary/10 border-l-2 border-l-action-primary'
              : 'hover:bg-elevated',
          ].join(' ')}
        >
          <p className="text-sm font-medium text-fg-primary truncate">{item.name}</p>
          <p className="text-xs text-fg-muted mt-0.5">{item.date}</p>
          <span className={`inline-block mt-1 text-xs px-1.5 py-0.5 rounded font-medium ${statusColor[item.status]}`}>
            {item.status}
          </span>
        </button>
      ))}
    </div>
  </div>
);

const MockDetail = ({ selectedId }: { selectedId: string }) => {
  const item = items.find((i) => i.id === selectedId) ?? items[0];
  return (
    <div className="h-full bg-canvas overflow-auto p-6">
      <div className="max-w-2xl">
        <div className="mb-1 flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded font-medium ${statusColor[item.status]}`}>
            {item.status}
          </span>
          <span className="text-xs text-fg-muted">{item.date}</span>
        </div>
        <h1 className="text-2xl font-bold text-fg-primary mt-2 mb-4">{item.name}</h1>
        <div className="bg-surface rounded-lg border border-line p-4 mb-4">
          <h2 className="text-sm font-semibold text-fg-secondary mb-2">Summary</h2>
          <p className="text-sm text-fg-secondary leading-relaxed">
            This campaign represents a pivotal moment in the historical record. Intelligence gathered
            from multiple sources confirms ongoing activity in the region. Strategic analysis suggests
            immediate action may be required to ensure favorable outcomes.
          </p>
        </div>
        <div className="bg-surface rounded-lg border border-line p-4 mb-4">
          <h2 className="text-sm font-semibold text-fg-secondary mb-3">Key Participants</h2>
          <div className="flex flex-col gap-2">
            {['Commander Takeda', 'Advisor Mori', 'Scout Uesugi'].map((name) => (
              <div key={name} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-action-primary/20 flex items-center justify-center text-xs font-bold text-action-primary">
                  {name[0]}
                </div>
                <span className="text-sm text-fg-primary">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface rounded-lg border border-line p-4">
          <h2 className="text-sm font-semibold text-fg-secondary mb-2">Timeline</h2>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Initial report filed', time: '2 days ago' },
              { label: 'Intelligence verified', time: '1 day ago' },
              { label: 'Commander notified', time: '6 hours ago' },
            ].map((entry) => (
              <div key={entry.label} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-fg-muted shrink-0" />
                <div>
                  <p className="text-sm text-fg-primary">{entry.label}</p>
                  <p className="text-xs text-fg-muted">{entry.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MockInspector = () => (
  <div className="h-full bg-surface overflow-auto p-4">
    <h2 className="text-sm font-semibold text-fg-secondary mb-3">Inspector</h2>
    <div className="flex flex-col gap-3">
      {[
        { label: 'Region', value: 'Kyushu' },
        { label: 'Threat Level', value: 'High' },
        { label: 'Assigned Unit', value: 'Red Battalion' },
        { label: 'Last Updated', value: 'Today, 14:32' },
        { label: 'Priority', value: 'Critical' },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span className="text-xs text-fg-muted">{label}</span>
          <span className="text-sm text-fg-primary font-medium">{value}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 border-t border-line pt-4">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-fg-muted mb-2">Tags</h3>
      <div className="flex flex-wrap gap-1">
        {['samurai', 'feudal', 'urgent', 'verified'].map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-elevated text-fg-secondary border border-line">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const MockHistory = () => (
  <div className="h-full bg-surface overflow-auto p-4">
    <h2 className="text-sm font-semibold text-fg-secondary mb-3">History</h2>
    <div className="flex flex-col gap-2">
      {[
        { action: 'Status changed to In Progress', user: 'Takeda', time: '1h ago' },
        { action: 'Comment added', user: 'Mori', time: '3h ago' },
        { action: 'Priority escalated', user: 'Uesugi', time: '5h ago' },
        { action: 'Record created', user: 'System', time: '1d ago' },
        { action: 'Initial triage complete', user: 'Takeda', time: '1d ago' },
      ].map((entry, i) => (
        <div key={i} className="flex items-start gap-2 py-2 border-b border-line last:border-0">
          <div className="w-6 h-6 rounded-full bg-elevated border border-line flex items-center justify-center text-xs font-bold text-fg-muted shrink-0">
            {entry.user[0]}
          </div>
          <div>
            <p className="text-xs text-fg-primary">{entry.action}</p>
            <p className="text-xs text-fg-muted">
              {entry.user} · {entry.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [selectedId, setSelectedId] = useState('1');
    return (
      <div className="h-screen">
        <MasterDetailLayout
          autoSaveId="master-detail-default"
          list={<MockList selectedId={selectedId} onSelect={setSelectedId} />}
          detail={<MockDetail selectedId={selectedId} />}
        />
      </div>
    );
  },
};

export const WithAdditivePanel: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [selectedId, setSelectedId] = useState('2');
    const [inspectorOpen, setInspectorOpen] = useState(true);

    const rightPanels: AdditivePanel[] = inspectorOpen
      ? [{ id: 'inspector', title: 'Inspector', content: <MockInspector />, defaultSize: 25, minSize: 15 }]
      : [];

    return (
      <div className="h-screen">
        {!inspectorOpen && (
          <div className="absolute top-3 right-3 z-10">
            <button
              type="button"
              onClick={() => setInspectorOpen(true)}
              className="text-xs px-3 py-1.5 rounded bg-action-primary text-white font-medium shadow"
            >
              Open Inspector
            </button>
          </div>
        )}
        <MasterDetailLayout
          autoSaveId="master-detail-additive"
          list={<MockList selectedId={selectedId} onSelect={setSelectedId} />}
          detail={<MockDetail selectedId={selectedId} />}
          rightPanels={rightPanels}
          onClosePanel={() => setInspectorOpen(false)}
        />
      </div>
    );
  },
};

export const WithMultiplePanels: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [selectedId, setSelectedId] = useState('3');
    const [openPanels, setOpenPanels] = useState<string[]>(['inspector', 'history']);

    const closePanel = (id: string) => setOpenPanels((prev) => prev.filter((p) => p !== id));

    const allPanels: AdditivePanel[] = [
      { id: 'inspector', title: 'Inspector', content: <MockInspector />, defaultSize: 22, minSize: 15 },
      { id: 'history', title: 'History', content: <MockHistory />, defaultSize: 22, minSize: 15 },
    ];

    const rightPanels = allPanels.filter((p) => openPanels.includes(p.id));

    const closedPanels = allPanels.filter((p) => !openPanels.includes(p.id));

    return (
      <div className="h-screen">
        {closedPanels.length > 0 && (
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            {closedPanels.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setOpenPanels((prev) => [...prev, p.id])}
                className="text-xs px-3 py-1.5 rounded bg-action-primary text-white font-medium shadow capitalize"
              >
                Open {p.title}
              </button>
            ))}
          </div>
        )}
        <MasterDetailLayout
          autoSaveId="master-detail-multi"
          list={<MockList selectedId={selectedId} onSelect={setSelectedId} />}
          detail={<MockDetail selectedId={selectedId} />}
          rightPanels={rightPanels}
          onClosePanel={closePanel}
        />
      </div>
    );
  },
};
