import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { MasterDetailLayout, AdditivePanel } from './MasterDetailLayout';

const meta: Meta<typeof MasterDetailLayout> = {
  title: 'Layout/MasterDetailLayout',
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
      <p className="text-label-sm font-semibold uppercase tracking-widest text-muted">Campaigns</p>
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
          <p className="text-body-sm font-medium text-primary truncate">{item.name}</p>
          <p className="text-label-sm text-muted mt-0.5">{item.date}</p>
          <span className={`inline-block mt-1 text-label-sm px-1.5 py-0.5 rounded-control font-medium ${statusColor[item.status]}`}>
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
          <span className={`text-label-sm px-2 py-0.5 rounded-control font-medium ${statusColor[item.status]}`}>
            {item.status}
          </span>
          <span className="text-label-sm text-muted">{item.date}</span>
        </div>
        <h1 className="text-heading-lg font-bold text-primary mt-2 mb-4">{item.name}</h1>
        <div className="bg-surface rounded-card border border-line p-4 mb-4">
          <h2 className="text-body-sm font-semibold text-secondary mb-2">Summary</h2>
          <p className="text-body-sm text-secondary leading-relaxed">
            This campaign represents a pivotal moment in the historical record. Intelligence gathered
            from multiple sources confirms ongoing activity in the region. Strategic analysis suggests
            immediate action may be required to ensure favorable outcomes.
          </p>
        </div>
        <div className="bg-surface rounded-card border border-line p-4 mb-4">
          <h2 className="text-body-sm font-semibold text-secondary mb-3">Key Participants</h2>
          <div className="flex flex-col gap-2">
            {['Commander Takeda', 'Advisor Mori', 'Scout Uesugi'].map((name) => (
              <div key={name} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-action-primary/20 flex items-center justify-center text-label-sm font-bold text-action-primary">
                  {name[0]}
                </div>
                <span className="text-body-sm text-primary">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface rounded-card border border-line p-4">
          <h2 className="text-body-sm font-semibold text-secondary mb-2">Timeline</h2>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Initial report filed', time: '2 days ago' },
              { label: 'Intelligence verified', time: '1 day ago' },
              { label: 'Commander notified', time: '6 hours ago' },
            ].map((entry) => (
              <div key={entry.label} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted shrink-0" />
                <div>
                  <p className="text-body-sm text-primary">{entry.label}</p>
                  <p className="text-label-sm text-muted">{entry.time}</p>
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
    <h2 className="text-body-sm font-semibold text-secondary mb-3">Inspector</h2>
    <div className="flex flex-col gap-3">
      {[
        { label: 'Region', value: 'Kyushu' },
        { label: 'Threat Level', value: 'High' },
        { label: 'Assigned Unit', value: 'Red Battalion' },
        { label: 'Last Updated', value: 'Today, 14:32' },
        { label: 'Priority', value: 'Critical' },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-0.5">
          <span className="text-label-sm text-muted">{label}</span>
          <span className="text-body-sm text-primary font-medium">{value}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 border-t border-line pt-4">
      <h3 className="text-label-sm font-semibold uppercase tracking-wide text-muted mb-2">Tags</h3>
      <div className="flex flex-wrap gap-1">
        {['samurai', 'feudal', 'urgent', 'verified'].map((tag) => (
          <span key={tag} className="text-label-sm px-2 py-0.5 rounded-full bg-elevated text-secondary border border-line">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const MockHistory = () => (
  <div className="h-full bg-surface overflow-auto p-4">
    <h2 className="text-body-sm font-semibold text-secondary mb-3">History</h2>
    <div className="flex flex-col gap-2">
      {[
        { action: 'Status changed to In Progress', user: 'Takeda', time: '1h ago' },
        { action: 'Comment added', user: 'Mori', time: '3h ago' },
        { action: 'Priority escalated', user: 'Uesugi', time: '5h ago' },
        { action: 'Record created', user: 'System', time: '1d ago' },
        { action: 'Initial triage complete', user: 'Takeda', time: '1d ago' },
      ].map((entry, i) => (
        <div key={i} className="flex items-start gap-2 py-2 border-b border-line last:border-0">
          <div className="w-6 h-6 rounded-full bg-elevated border border-line flex items-center justify-center text-label-sm font-bold text-muted shrink-0">
            {entry.user[0]}
          </div>
          <div>
            <p className="text-label-sm text-primary">{entry.action}</p>
            <p className="text-label-sm text-muted">
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
              className="text-label-sm px-3 py-1.5 rounded-control bg-action-primary text-on-accent font-medium shadow"
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
                className="text-label-sm px-3 py-1.5 rounded-control bg-action-primary text-on-accent font-medium shadow capitalize"
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

// ─── Matrix — mirrors Figma "MasterDetailLayout" page (76:38) ────────────────
// LAYOUT scaffolding: locks the master+detail+optional right-panels grammar.
// Figma ComponentSet 818:218, 3 variants @ 1200×720 stacked vertically.
const MDL_CELLS: MatrixCellSpec[] = [
  { variant: 'RightPanels=0', x: 40, y: 40,   w: 1200, h: 720, expect: { headings: [] } },
  { variant: 'RightPanels=1', x: 40, y: 800,  w: 1200, h: 720, expect: { headings: [] } },
  { variant: 'RightPanels=2', x: 40, y: 1560, w: 1200, h: 720, expect: { headings: [] } },
];

// Showcase campaign rows matching Figma exactly — title, date, and a colored
// status bar (green = resolved, blue = in progress, red = escalated).
const MDL_CAMPAIGNS = [
  { name: 'Battle of Sekigahara',    date: 'Oct 21, 1600', barColor: 'bg-status-success', selected: true  },
  { name: 'Siege of Osaka',          date: 'Nov 1614',     barColor: 'bg-action-primary', selected: false },
  { name: 'Shimabara Rebellion',     date: 'Dec 1637',     barColor: 'bg-status-error',   selected: false },
  { name: 'Edo Period Trade Routes', date: 'Jan 1603',     barColor: 'bg-status-success', selected: false },
  { name: 'Satsuma Domain Survey',   date: 'Mar 1871',     barColor: 'bg-action-primary', selected: false },
  { name: 'Meiji Restoration Plan',  date: 'Jan 1868',     barColor: 'bg-status-success', selected: false },
];

const MdlMaster = () => (
  <div className="h-full bg-surface overflow-auto">
    <div className="px-3 py-2 text-label-sm font-medium uppercase tracking-wide text-muted border-b border-line">CAMPAIGNS</div>
    {MDL_CAMPAIGNS.map((it, i) => (
      <div
        key={it.name}
        className={`px-3 py-2 border-b border-line cursor-pointer ${
          it.selected ? 'bg-row-selected border-l-2 border-l-action-primary' : 'hover:bg-surface'
        }`}
      >
        <div className="text-body-sm font-medium text-primary truncate">{it.name}</div>
        <div className="text-label-sm text-muted mb-1.5">{it.date}</div>
        <div className={`h-1.5 w-16 rounded-pill ${it.barColor}`} />
      </div>
    ))}
  </div>
);

// Detail with green date tag, large heading, and two info cards — mirrors
// Figma's showcase layout exactly.
const MdlDetail = () => (
  <div className="h-full bg-canvas p-6 overflow-auto">
    <div className="inline-flex items-center gap-2 mb-2">
      <span className="h-2 w-8 rounded-pill bg-status-success" />
      <span className="text-label-sm text-muted">Oct 21, 1600</span>
    </div>
    <div className="text-heading-lg font-bold text-primary mb-4">Battle of Sekigahara</div>
    <div className="rounded-card bg-surface border border-line p-4 mb-3">
      <div className="text-body-sm font-semibold text-primary mb-1">Summary</div>
      <div className="text-body-sm text-secondary">This campaign represents a pivotal moment in the historical record. Intelligence gathered from multiple sources confirms ongoing activity in the region.</div>
    </div>
    <div className="rounded-card bg-surface border border-line p-4">
      <div className="text-body-sm font-semibold text-primary mb-1">Key Participants</div>
      <div className="text-body-sm text-secondary">Commander Takeda · Advisor Mori · Scout Uesugi</div>
    </div>
  </div>
);

// Inspector panel — labeled field rows mirroring Figma's content.
const MdlInspectorContent = () => (
  <div className="p-3 flex flex-col gap-3">
    {[
      { label: 'Region',        value: 'Kyushu'        },
      { label: 'Threat Level',  value: 'High'          },
      { label: 'Assigned Unit', value: 'Red Battalion' },
      { label: 'Last Updated',  value: 'Today, 14:32'  },
      { label: 'Priority',      value: 'Critical'      },
    ].map((row) => (
      <div key={row.label} className="flex flex-col gap-0.5">
        <div className="text-label-sm text-muted">{row.label}</div>
        <div className="text-body-sm text-primary font-medium">{row.value}</div>
      </div>
    ))}
  </div>
);

// History panel — timestamped activity rows mirroring Figma's content.
const MdlHistoryContent = () => (
  <div className="p-3 flex flex-col gap-3">
    {[
      { action: 'Status changed',    user: 'Takeda', time: '1h ago' },
      { action: 'Comment added',     user: 'Mori',   time: '3h ago' },
      { action: 'Priority escalated',user: 'Uesugi', time: '5h ago' },
      { action: 'Record created',    user: 'System', time: '1d ago' },
      { action: 'Triage complete',   user: 'Takeda', time: '1d ago' },
    ].map((row, i) => (
      <div key={i} className="flex flex-col gap-0.5">
        <div className="text-body-sm font-medium text-primary">{row.action}</div>
        <div className="text-label-sm text-muted">{row.user} · {row.time}</div>
      </div>
    ))}
  </div>
);

const MdlInspector = (): AdditivePanel => ({
  id: 'inspector', title: 'Inspector', content: <MdlInspectorContent />, defaultSize: 22, minSize: 15,
});
const MdlHistory = (): AdditivePanel => ({
  id: 'history',   title: 'History',   content: <MdlHistoryContent />,   defaultSize: 22, minSize: 15,
});

export const Matrix: StoryObj = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:38', cells: MDL_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1280, height: 2320 }}>
      {MDL_CELLS.map(c => {
        const n = c.variant === 'RightPanels=1' ? 1 : c.variant === 'RightPanels=2' ? 2 : 0;
        const rightPanels: AdditivePanel[] = n === 1
          ? [MdlInspector()]
          : n === 2
            ? [MdlInspector(), MdlHistory()]
            : [];
        return (
          <div key={c.variant} className="absolute border border-line rounded-control overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <MasterDetailLayout
              list={<MdlMaster />}
              detail={<MdlDetail />}
              rightPanels={rightPanels}
            />
          </div>
        );
      })}
    </div>
  ),
};
