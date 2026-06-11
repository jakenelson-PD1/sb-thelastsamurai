import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { ThreeColumnLayout } from './ThreeColumnLayout';
import { Button } from '../primitives/Button';

const meta: Meta<typeof ThreeColumnLayout> = {
  title: 'Layout/ThreeColumnLayout',
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
    className={`flex items-center gap-2 rounded-control px-2 py-1.5 text-body-sm cursor-pointer transition-colors ${
      active
        ? 'bg-action-primary/10 text-action-primary font-medium'
        : 'text-secondary hover:bg-elevated hover:text-primary'
    }`}
  >
    <span>{label}</span>
  </div>
);

const SidebarContent = () => (
  <div className="flex flex-col h-full bg-surface border-r border-line">
    <div className="px-3 py-3 border-b border-line">
      <p className="text-label-sm font-semibold uppercase tracking-wider text-muted mb-2">Workspace</p>
      <NavItem label="Dashboard" active />
      <NavItem label="Projects" />
      <NavItem label="Documents" />
      <NavItem label="Tasks" />
    </div>
    <div className="px-3 py-3 flex-1">
      <p className="text-label-sm font-semibold uppercase tracking-wider text-muted mb-2">Recent</p>
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
          <p className="text-label-sm text-muted uppercase tracking-wider mb-1">Documents / Q4 Report</p>
          <h1 className="text-heading-lg font-bold text-primary">Q4 Performance Report</h1>
        </div>
        {onOpenRightPanel && (
          <button
            type="button"
            onClick={onOpenRightPanel}
            className="flex items-center gap-2 rounded-control px-3 py-1.5 text-body-sm font-medium bg-action-primary text-on-accent hover:bg-action-primary/90 transition-colors"
          >
            Open comparison view
          </button>
        )}
      </div>

      <div className="bg-surface rounded-card border border-line p-6 mb-4">
        <h2 className="text-heading-sm font-semibold text-primary mb-3">Executive Summary</h2>
        <p className="text-secondary text-body-sm leading-relaxed mb-3">
          This report covers the key performance metrics for Q4 of the fiscal year. Overall revenue grew by 18% year-over-year,
          driven primarily by expansion in the enterprise segment and strong retention across existing accounts.
        </p>
        <p className="text-secondary text-body-sm leading-relaxed">
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
          <div key={stat.label} className="bg-surface rounded-card border border-line p-4">
            <p className="text-label-sm text-muted mb-1">{stat.label}</p>
            <p className="text-heading-md font-bold text-primary">{stat.value}</p>
            <p className="text-label-sm text-success mt-0.5">{stat.delta} vs last quarter</p>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-card border border-line p-6 mb-4">
        <h2 className="text-heading-sm font-semibold text-primary mb-3">Key Highlights</h2>
        <ul className="space-y-2">
          {[
            'Enterprise segment exceeded quota by 12%, with notable wins in financial services.',
            'Product-led growth initiatives contributed 23% of new ARR, up from 15% last quarter.',
            'Support ticket volume decreased 8% despite 20% growth in user base.',
            'Infrastructure costs reduced by $180K following cloud optimization project.',
          ].map((item) => (
            <li key={item} className="flex gap-2 text-body-sm text-secondary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-action-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-surface rounded-card border border-line p-6">
        <h2 className="text-heading-sm font-semibold text-primary mb-3">Looking Ahead</h2>
        <p className="text-secondary text-body-sm leading-relaxed">
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
      <p className="text-label-sm font-semibold uppercase tracking-wider text-muted mb-3">Document Details</p>
      <dl className="space-y-2">
        {[
          { label: 'Author', value: 'Sarah Chen' },
          { label: 'Last modified', value: 'Mar 17, 2026' },
          { label: 'Status', value: 'Under review' },
          { label: 'Version', value: 'v2.4' },
          { label: 'Word count', value: '3,241' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between text-body-sm">
            <dt className="text-muted">{label}</dt>
            <dd className="text-primary font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>

    <div className="border-t border-line pt-4 mb-5">
      <p className="text-label-sm font-semibold uppercase tracking-wider text-muted mb-3">Prior Quarter (Q3)</p>
      <div className="space-y-2">
        {[
          { label: 'Total Revenue', value: '$3.6M' },
          { label: 'New Customers', value: '108' },
          { label: 'Net Retention', value: '114%' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between text-body-sm">
            <span className="text-muted">{label}</span>
            <span className="text-primary font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-line pt-4">
      <p className="text-label-sm font-semibold uppercase tracking-wider text-muted mb-3">Comments (3)</p>
      <div className="space-y-3">
        {[
          { author: 'Mark T.', time: '2h ago', text: 'Can we add a breakdown by region in the revenue section?' },
          { author: 'Priya S.', time: '5h ago', text: 'The net retention figure looks off — double-check the churned accounts.' },
          { author: 'James L.', time: '1d ago', text: 'Approved the executive summary. Rest LGTM.' },
        ].map(({ author, time, text }) => (
          <div key={author + time} className="rounded-control border border-line bg-elevated p-3">
            <div className="flex justify-between mb-1">
              <span className="text-label-sm font-semibold text-primary">{author}</span>
              <span className="text-label-sm text-muted">{time}</span>
            </div>
            <p className="text-label-sm text-secondary leading-relaxed">{text}</p>
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

// ─── Analysis Workflow ───────────────────────────────────────────────────────
// Demonstrates the responsive 3-column pattern: a collapsible narrow nav rail
// on the left, a wide table-heavy "workflow" middle column, and a settings
// panel on the right at ~1/3 the column width of the inspector pattern.
// Mirrors the Suralink Analysis screen — left nav can collapse to icon-only.

function AnalysisWorkflowStory() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="h-screen">
      <ThreeColumnLayout
        sidebar={<AnalysisNavRail collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />}
        sidebarDefaultSize={18}
        sidebarMinSize={10}
        sidebarCollapsible
        sidebarCollapsedSize={5}
        sidebarCollapsed={collapsed}
        onSidebarCollapsedChange={setCollapsed}
        content={<AnalysisTable />}
        rightPanel={<AnalysisSupportSettings />}
        rightPanelTitle="Support settings"
        rightPanelOpen
        rightPanelDefaultSize={34}
        rightPanelMinSize={28}
      />
    </div>
  );
}

function AnalysisNavRail({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <div className="h-full bg-header-bg text-header-text flex flex-col items-center py-3 gap-2">
      <button
        type="button"
        onClick={onToggle}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className="flex h-10 w-10 items-center justify-center rounded-control hover:bg-header-hover-bg text-body-md"
      >
        {/* simple chevron arrow */}
        <span aria-hidden className="inline-block text-heading-md">{collapsed ? '→' : '←'}</span>
      </button>
      <button
        type="button"
        aria-label="Toggle panel"
        className="flex h-10 w-10 items-center justify-center rounded-control hover:bg-header-hover-bg text-action-primary"
      >
        <span aria-hidden className="inline-block text-heading-md">▭</span>
      </button>
    </div>
  );
}

function AnalysisTable() {
  const rows = Array.from({ length: 31 }, (_, i) => ({
    n: i + 1,
    invoice: ['09182347','2p9834y5','89027345','09871234','9871234','p9283u45','90182734','91827342','09817234','78901234','8901-2341','0981u234','p987123','01238412','09812734','12834123','09871234','123498712','09898234','09817234','09871234','09812347','09877324','123409874','423984725','88713453','098712345','987132452','534958734','0293u4598','098234585'][i],
    date: ['10/21/2025','12/01/2025','04/4/2025','08/16/2025','02/24/2025','02/24/2025','02/21/2025','08/11/2025','03/06/2025','09/15/2025','09/05/2025','10/06/2025','06/07/2025','06/21/2025','12/09/2025','02/14/2025','07/05/2025','12/01/2025','05/19/2025','08/28/2025','08/11/2025','11/03/2025','10/18/2025','04/12/2025','03/21/2025','03/11/2025','12/05/2025','06/28/2025','02/26/2025','07/16/2025','07/08/2025'][i],
    total: ['$36142.93','$623454.03','$81876.00','$6952.97','$8438.11','$8438.11','$108726.51','$8774.48','$9187.63','$25345.87','$1145.71','$31345.60','$44812.43','$11187.61','$32222.77','$8345.40','$72345.59','$82345.90','$772211.51','$32799.28','$6645.76','$61168.48','$32198.14','$98248.23','$99881.64','$76181.22','$9181.00','$981.13','$24144.39','$76432.12','$1546.10'][i],
    memo: ['Payment for Web…','Consulting Fees…','Software Subscri…','Product Order #P…','Graphic Design P…','Graphic Design P…','Marketing Servic…','Payment Receive…','Custom Develop…','Training Worksho…','Licensing Fee –…','E-commerce Ord…','SEO Retainer – D…','Deposit for Event…','Final Payment –…','SaaS Subscriptio…','Affiliate Commiss…','Payment for Cop…','Invoice #C-2025…','Website Mainten…','Product Sales –…','Virtual Assistant…','Payment for Lega…','Event Sponsorshi…','Custom Illustrati…','Event Sponsorshi…','Custom Illustrati…','Payment – Digital…','Revenue Share –…','Invoice #INV-550…','Balance Paid – Pr…'][i],
    to: ['Apex Digital Solu…','Sarah Johnson','NovaTech Industri…','Evergreen Consu…','Dr. Michael Chen…','Dr. Michael Chen…','Harper & Sons C…','Luna Creative Ag…','Thompson Retail…','Pacific Coast Dis…','Emily Rodriguez…','Summit Fitness C…','BlueWave Softwa…','Rivera Law Firm…','GreenLeaf Lands…','Atlas Manufactur…','Olivia Parker Eve…','Sterling Property…','Nexus Marketing…','Carter Veterinary…','Ironclad Security…','Jade Dragon Res…','Horizon Real Esta…','Bennett Accounti…','Global Freight So…','Coastal Brew Co.','Vertex Engineeri…','Amelia Grant Inte…','PrimeCare Medic…','Redstone Capital…','Willow & Oak Bo…'][i],
  }));
  return (
    <div className="h-full bg-canvas flex flex-col overflow-hidden">
      <div className="flex items-center gap-4 border-b border-line bg-elevated px-4 py-2">
        {['Comments', 'Ask Anything', 'Analysis'].map((label, i) => (
          <button
            key={label}
            type="button"
            className={`text-body-sm font-medium ${i === 2 ? 'text-primary border-b-2 border-b-action-primary -mb-2 pb-2' : 'text-secondary hover:text-primary'}`}
          >
            {label}
          </button>
        ))}
        <span className="rounded-control bg-status-purple-surface text-status-purple-fg border border-status-purple-fg text-label-sm px-1.5 py-0.5">BETA</span>
        <div className="ml-auto text-muted">⚙</div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-body-sm border-collapse">
          <thead className="bg-elevated text-muted sticky top-0">
            <tr>
              <th className="text-left font-normal px-3 py-2 w-8"></th>
              <th className="text-left font-normal px-3 py-2">Invoice Number</th>
              <th className="text-left font-normal px-3 py-2">Transaction Date</th>
              <th className="text-left font-normal px-3 py-2">Transaction Total</th>
              <th className="text-left font-normal px-3 py-2">Transaction Me…</th>
              <th className="text-left font-normal px-3 py-2">Deposit To</th>
              <th className="text-left font-normal px-3 py-2">Invoices</th>
              <th className="text-left font-normal px-3 py-2">Contracts</th>
              <th className="text-left font-normal px-3 py-2">Banks statem…</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.n} className="border-b border-line">
                <td className="px-3 py-2 text-muted text-right">{r.n}</td>
                <td className="px-3 py-2 text-primary">{r.invoice}</td>
                <td className="px-3 py-2 text-secondary">{r.date}</td>
                <td className="px-3 py-2 text-secondary">{r.total}</td>
                <td className="px-3 py-2 text-secondary truncate max-w-36">{r.memo}</td>
                <td className="px-3 py-2 text-secondary truncate max-w-36">{r.to}</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AnalysisSupportSettings() {
  const groups = [
    {
      name: 'Invoices',
      cols: [
        { label: 'Transaction ID',    checked: false },
        { label: 'Invoice Number',    checked: true  },
        { label: 'Transaction Date',  checked: true  },
        { label: 'Transaction Total', checked: true  },
        { label: 'Transaction Memo',  checked: false },
        { label: 'Deposit To',        checked: false },
      ],
    },
    {
      name: 'Contracts',
      cols: [
        { label: 'Transaction ID',    checked: false },
        { label: 'Invoice Number',    checked: true  },
        { label: 'Transaction Date',  checked: true  },
        { label: 'Transaction Total', checked: true  },
        { label: 'Transaction Memo',  checked: false },
      ],
    },
    {
      name: 'Bank Statements',
      cols: [
        { label: 'Transaction ID',    checked: false },
        { label: 'Invoice Number',    checked: true  },
        { label: 'Transaction Date',  checked: true  },
        { label: 'Transaction Total', checked: true  },
        { label: 'Transaction Memo',  checked: false },
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col bg-elevated">
      <div className="flex-1 overflow-auto px-4 py-3 space-y-4">
        <button
          type="button"
          className="w-full rounded-card border border-dashed border-line-strong text-body-sm text-secondary py-2 hover:bg-surface"
        >
          + Add support type
        </button>
        {groups.map((g) => (
          <div key={g.name} className="rounded-card bg-surface border border-line p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-body-sm font-medium text-primary">Support Type</div>
              <button type="button" aria-label="Delete" className="text-status-error">×</button>
            </div>
            <div className="rounded-control bg-elevated border border-line px-3 py-2 text-body-sm text-primary mb-3">{g.name}</div>
            <div className="text-label-sm font-medium text-muted mb-1">Select selection columns details</div>
            <div className="flex flex-col gap-1">
              {g.cols.map((c) => (
                <label key={c.label} className="flex items-center gap-2 py-1 text-body-sm text-primary cursor-pointer">
                  <input type="checkbox" defaultChecked={c.checked} className="h-4 w-4 rounded-control" />
                  {c.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line bg-elevated px-4 py-3 flex justify-end">
        <Button size="sm">Save settings</Button>
      </div>
    </div>
  );
}

export const AnalysisWorkflow: Story = {
  render: () => <AnalysisWorkflowStory />,
  parameters: { layout: 'fullscreen' },
};

// ─── Matrix — mirrors Figma "ThreeColumnLayout" page (76:45) ─────────────────
// LAYOUT scaffolding: locks sidebar + content + optional right-panel grammar.
// Figma ComponentSet 823:210, 3 variants @ 1280×720:
//   - State=Default          — sidebar + content (no additive panel)
//   - State=WithRightPanel   — sidebar + Document Details (before-content) + content
//   - State=AnalysisWorkflow — collapsed icon rail + content + Support settings (after-content)
const TCL_CELLS: MatrixCellSpec[] = [
  { variant: 'State=Default',          x: 32,   y: 32, w: 1280, h: 720, expect: { headings: [] } },
  { variant: 'State=WithRightPanel',   x: 1344, y: 32, w: 1280, h: 720, expect: { headings: [] } },
  { variant: 'State=AnalysisWorkflow', x: 2656, y: 32, w: 1280, h: 720, expect: { headings: [] } },
];

// Sidebar mirrors Figma 76:45: WORKSPACE label + active nav block + nav items,
// then RECENT section + recent docs, then footer (Settings / Help & Support).
const TclSidebar = () => (
  <div className="h-full bg-surface border-r border-line flex flex-col overflow-hidden">
    <div className="flex-1 overflow-auto">
      <div className="px-3 py-3">
        <div className="text-label-sm font-medium uppercase tracking-wide text-muted mb-2">Workspace</div>
        <div className="h-6 w-full rounded-control bg-action-primary mb-2" aria-hidden />
        {['Projects', 'Documents', 'Tasks'].map((label) => (
          <div key={label} className="px-2 py-1.5 rounded-control text-body-sm text-secondary hover:bg-surface cursor-pointer">{label}</div>
        ))}
      </div>
      <div className="px-3 py-3 border-t border-line">
        <div className="text-label-sm font-medium uppercase tracking-wide text-muted mb-2">Recent</div>
        {['Q4 Report Draft', 'Design Spec v2', 'Meeting Notes', 'API Reference', 'Roadmap 2026'].map((label) => (
          <div key={label} className="px-2 py-1.5 rounded-control text-body-sm text-secondary hover:bg-surface cursor-pointer">{label}</div>
        ))}
      </div>
    </div>
    <div className="px-3 py-3 border-t border-line">
      {['Settings', 'Help & Support'].map((label) => (
        <div key={label} className="px-2 py-1.5 rounded-control text-body-sm text-secondary hover:bg-surface cursor-pointer">{label}</div>
      ))}
    </div>
  </div>
);

// Q4 Performance Report content — breadcrumb, exec summary, metric cards,
// key highlights, looking ahead. Mirrors Figma 76:45 exactly (using divs styled
// like headings, to keep cells `headings: []` clean for MatrixVerify).
const TclMain = ({ withRightPanel }: { withRightPanel?: boolean }) => (
  <div className="h-full bg-canvas overflow-auto p-6">
    <div className="flex items-start justify-between gap-3 mb-4">
      <div>
        <div className="text-label-sm font-medium uppercase tracking-wide text-muted">Documents / Q4 Report</div>
        <div className="text-heading-lg font-bold text-primary mt-1">Q4 Performance Report</div>
      </div>
      {withRightPanel && (
        <Button size="sm">Open comparison view</Button>
      )}
    </div>
    <div className="rounded-card bg-elevated border border-line p-4 mb-3">
      <div className="text-body-sm font-semibold text-primary mb-2">Executive Summary</div>
      <p className="text-body-sm text-secondary mb-2">This report covers the key performance metrics for Q4 of the fiscal year. Overall revenue grew by 18% year-over-year, driven primarily by expansion in the enterprise segment and strong retention across existing accounts.</p>
      <p className="text-body-sm text-secondary">Operating margins improved to 24.3%, up from 21.1% in the prior quarter, reflecting improved cost discipline and favorable product mix. The team exceeded targets in three of four strategic pillars.</p>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-3">
      {[
        { label: 'Total Revenue',  value: '$4.2M', delta: '+18% vs last quarter' },
        { label: 'New Customers',  value: '142',   delta: '+31% vs last quarter' },
        { label: 'Net Retention',  value: '118%',  delta: '+4pp vs last quarter' },
      ].map((m) => (
        <div key={m.label} className="rounded-card bg-elevated border border-line p-3">
          <div className="text-label-sm text-muted">{m.label}</div>
          <div className="text-heading-md font-semibold text-primary mt-1">{m.value}</div>
          <div className="text-label-sm text-status-success mt-0.5">{m.delta}</div>
        </div>
      ))}
    </div>
    <div className="rounded-card bg-elevated border border-line p-4 mb-3">
      <div className="text-body-sm font-semibold text-primary mb-2">Key Highlights</div>
      <ul className="space-y-1 text-body-sm text-secondary list-disc pl-5">
        <li>Enterprise segment exceeded quota by 12%, with notable wins in financial services.</li>
        <li>Product-led growth initiatives contributed 23% of new ARR, up from 15% last quarter.</li>
        <li>Support ticket volume decreased 8% despite 20% growth in user base.</li>
        <li>Infrastructure costs reduced by $180K following cloud optimization project.</li>
      </ul>
    </div>
    <div className="rounded-card bg-elevated border border-line p-4">
      <div className="text-body-sm font-semibold text-primary mb-2">Looking Ahead</div>
      <p className="text-body-sm text-secondary">Q1 guidance targets 15–20% sequential growth, supported by a strong pipeline and three major product launches scheduled for the first half. Headcount is expected to grow by 12 engineers and 5 go-to-market roles.</p>
    </div>
  </div>
);

// Right panel body — DOCUMENT DETAILS + PRIOR QUARTER (Q3) + COMMENTS (3)
// sections. The outer "Document Details" title bar with close button is
// rendered by ThreeColumnLayout's Panel slot (rightPanelTitle prop).
const TclRight = () => (
  <div className="h-full bg-elevated overflow-auto">
    <div className="px-4 py-3 border-b border-line">
      <div className="text-label-sm font-medium uppercase tracking-wide text-muted mb-2">Document Details</div>
      {[
        { label: 'Author',        value: 'Sarah Chen'   },
        { label: 'Last modified', value: 'Mar 17, 2026' },
        { label: 'Status',        value: 'Under review' },
        { label: 'Version',       value: 'v2.4'         },
        { label: 'Word count',    value: '3,241'        },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between py-1">
          <span className="text-body-sm text-secondary">{row.label}</span>
          <span className="text-body-sm text-primary font-medium">{row.value}</span>
        </div>
      ))}
    </div>
    <div className="px-4 py-3 border-b border-line">
      <div className="text-label-sm font-medium uppercase tracking-wide text-muted mb-2">Prior Quarter (Q3)</div>
      {[
        { label: 'Total Revenue', value: '$3.6M' },
        { label: 'New Customers', value: '108'   },
        { label: 'Net Retention', value: '114%'  },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between py-1">
          <span className="text-body-sm text-secondary">{row.label}</span>
          <span className="text-body-sm text-primary font-medium">{row.value}</span>
        </div>
      ))}
    </div>
    <div className="px-4 py-3">
      <div className="text-label-sm font-medium uppercase tracking-wide text-muted mb-2">Comments (3)</div>
      {[
        { user: 'Mark T.',  time: '2h ago', body: 'Can we add a breakdown by region in the revenue section?' },
        { user: 'Priya S.', time: '5h ago', body: 'The net retention figure looks off — double-check the churned accounts.' },
        { user: 'James L.', time: '1d ago', body: 'Approved the executive summary. Rest LGTM.' },
      ].map((c, i) => (
        <div key={i} className="py-2 border-b border-line last:border-b-0">
          <div className="flex items-center justify-between">
            <div className="text-body-sm font-medium text-primary">{c.user}</div>
            <div className="text-label-sm text-muted">{c.time}</div>
          </div>
          <div className="text-body-sm text-secondary mt-0.5">{c.body}</div>
        </div>
      ))}
    </div>
  </div>
);

// Minimal collapsed icon-rail for the State=AnalysisWorkflow matrix cell.
const TclIconRail = () => (
  <div className="h-full bg-header-bg flex flex-col items-center py-3 gap-2">
    <div className="h-10 w-10 rounded-control bg-header-hover-bg" />
    <div className="h-10 w-10 rounded-control bg-action-primary" />
  </div>
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:45', cells: TCL_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 3968, height: 784 }}>
      {TCL_CELLS.map(c => {
        const withRight    = c.variant === 'State=WithRightPanel';
        const isAnalysis   = c.variant === 'State=AnalysisWorkflow';
        const hasRightPanel = withRight || isAnalysis;
        return (
          <div key={c.variant} className="absolute border border-line rounded-control overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <ThreeColumnLayout
              sidebar={isAnalysis ? <TclIconRail /> : <TclSidebar />}
              content={<TclMain withRightPanel={hasRightPanel} />}
              rightPanel={hasRightPanel ? <TclRight /> : undefined}
              rightPanelTitle={isAnalysis ? 'Support settings' : 'Document Details'}
              rightPanelOpen={hasRightPanel}
              rightPanelPosition={isAnalysis ? 'after-content' : 'before-content'}
              rightPanelDefaultSize={isAnalysis ? 34 : 26}
              rightPanelMinSize={isAnalysis ? 28 : 20}
              sidebarDefaultSize={isAnalysis ? 5 : 18}
              sidebarMinSize={isAnalysis ? 5 : 12}
            />
          </div>
        );
      })}
    </div>
  ),
};
