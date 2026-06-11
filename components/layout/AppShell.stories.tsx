import type { Meta, StoryObj } from '@storybook/react';
import { AppShell } from './AppShell';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof AppShell> = {
  title: 'Layout/AppShell',
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
    <span className="text-body-md font-semibold text-primary">LastSamurai</span>
    <nav className="flex gap-4">
      <a href="#" className="text-body-sm text-secondary hover:text-primary">Dashboard</a>
      <a href="#" className="text-body-sm text-secondary hover:text-primary">Projects</a>
      <a href="#" className="text-body-sm text-secondary hover:text-primary">Settings</a>
    </nav>
  </div>
);

const MockContent = () => (
  <div className="flex flex-1 overflow-hidden">
    <aside className="w-56 shrink-0 border-r border-line bg-surface p-4">
      <p className="mb-3 text-label-sm uppercase tracking-wide text-muted">Sidebar</p>
      <div className="flex flex-col gap-2">
        <div className="rounded-control bg-elevated p-2 text-body-sm text-secondary">Item A</div>
        <div className="rounded-control bg-elevated p-2 text-body-sm text-secondary">Item B</div>
        <div className="rounded-control bg-elevated p-2 text-body-sm text-secondary">Item C</div>
      </div>
    </aside>
    <main className="flex-1 overflow-auto bg-canvas p-6">
      <div className="mb-4 rounded-card bg-surface p-4 shadow-card">
        <p className="mb-1 text-body-md font-semibold text-primary">Panel Content</p>
        <p className="text-body-sm text-secondary">This is the main content area. Place a PanelGroup here for resizable panels.</p>
      </div>
      <div className="rounded-card bg-surface p-4 shadow-card">
        <p className="text-body-sm text-muted">Additional content goes here.</p>
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

// ─── Matrix — mirrors Figma "AppShell" page (76:29) ──────────────────────────
// The page contains one ComponentSet `AppShell` (815:48) with 2 variants
// (HeaderHeight=56 and HeaderHeight=72), each 1200×800, laid out side-by-side
// with an 80px gap. Both render the same composition (header + body with
// sidebar + main) — only the header height differs.
const AS_CELLS: MatrixCellSpec[] = [
  {
    variant: 'HeaderHeight=56',
    x: 0, y: 0, w: 1200, h: 800,
    expect: { headings: [] },
  },
  {
    variant: 'HeaderHeight=72',
    x: 1280, y: 0, w: 1200, h: 800,
    expect: { headings: [] },
  },
];

// Showcase nav matching Figma 76:29: "LastSamurai" wordmark + Dashboard /
// Projects / Settings nav links. No avatar, no actions — keep the slot grammar
// minimal.
const ShellNav = () => (
  <div className="flex w-full items-center gap-6">
    <span className="text-body-md font-semibold text-primary">LastSamurai</span>
    <nav className="flex gap-4">
      {['Dashboard', 'Projects', 'Settings'].map((label) => (
        <a key={label} href="#" className="text-body-sm text-secondary hover:text-primary">{label}</a>
      ))}
    </nav>
  </div>
);

// Showcase body matching Figma 76:29: sidebar with "SIDEBAR" label + Item A
// (selected) / Item B / Item C, then main column with two stacked placeholder
// cards ("Panel Content" + "Additional content goes here.").
const ShellBody = () => (
  <div className="flex flex-1 overflow-hidden">
    <aside className="w-56 shrink-0 border-r border-line bg-surface p-3">
      <div className="text-label-sm font-medium uppercase tracking-wide text-muted px-2 py-1 mb-1">Sidebar</div>
      {[
        { label: 'Item A', active: true  },
        { label: 'Item B', active: false },
        { label: 'Item C', active: false },
      ].map((it) => (
        <div
          key={it.label}
          className={`px-3 py-2 rounded-control text-body-sm cursor-pointer ${
            it.active
              ? 'bg-elevated text-primary font-medium shadow-card'
              : 'text-secondary hover:bg-surface'
          }`}
        >
          {it.label}
        </div>
      ))}
    </aside>
    <main className="flex-1 overflow-auto bg-canvas p-4 space-y-3">
      <div className="rounded-card bg-elevated border border-line p-4">
        <div className="text-body-sm font-semibold text-primary mb-1">Panel Content</div>
        <div className="text-body-sm text-secondary">This is the main content area. Place a PanelGroup here for resizable panels.</div>
      </div>
      <div className="rounded-card bg-elevated border border-line p-4">
        <div className="text-body-sm text-muted">Additional content goes here.</div>
      </div>
    </main>
  </div>
);

export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: { figmaPageId: '76:29', cells: AS_CELLS },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 2480, height: 800 }}>
      <div className="absolute border border-line rounded-control overflow-hidden" data-matrix-cell style={{ left: 0, top: 0, width: 1200, height: 800 }}>
        <AppShell header={<ShellNav />}>
          <ShellBody />
        </AppShell>
      </div>
      <div className="absolute border border-line rounded-control overflow-hidden" data-matrix-cell style={{ left: 1280, top: 0, width: 1200, height: 800 }}>
        <AppShell header={<ShellNav />} headerHeight={72}>
          <ShellBody />
        </AppShell>
      </div>
    </div>
  ),
};
