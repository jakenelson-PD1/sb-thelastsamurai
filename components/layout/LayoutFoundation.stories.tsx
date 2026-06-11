import type { Meta, StoryObj } from '@storybook/react';
import { Grid, ColSpan } from './Grid';
import { Stack } from './Stack';
import { Inset } from './Inset';

const meta: Meta = {
  title: 'Layout/Foundation',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

// ─── Spacing Scale ────────────────────────────────────────────────────────────

export const SpacingScale: Story = {
  name: 'Spacing Scale',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">Spacing Scale (4px base grid)</h2>
      <Stack gap={2}>
        {[
          { token: '1', px: 4 },
          { token: '2', px: 8 },
          { token: '3', px: 12 },
          { token: '4', px: 16 },
          { token: '5', px: 20 },
          { token: '6', px: 24 },
          { token: '8', px: 32 },
          { token: '10', px: 40 },
          { token: '12', px: 48 },
          { token: '16', px: 64 },
        ].map(({ token, px }) => (
          <div key={token} className="flex items-center gap-4">
            <span className="w-12 text-label-sm font-mono text-muted text-right shrink-0">{token}</span>
            <div className="bg-action-primary rounded" style={{ width: px, height: 12 }} />
            <span className="text-label-sm text-secondary">{px}px</span>
          </div>
        ))}
      </Stack>
    </div>
  ),
};

// ─── Semantic Spacing Tokens ──────────────────────────────────────────────────

export const SemanticSpacing: Story = {
  name: 'Semantic Spacing Tokens',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">Semantic Spacing</h2>
      <p className="text-body-sm text-secondary">Use these token-based classes for consistent panel padding.</p>
      <div className="flex flex-col gap-4">
        {[
          { name: 'panel-compact', desc: 'Toolbars, dense panels', cls: 'p-panel-compact' },
          { name: 'panel',         desc: 'Standard panels (default)', cls: 'p-panel' },
          { name: 'panel-relaxed', desc: 'Detail views, forms', cls: 'p-panel-relaxed' },
        ].map(({ name, desc, cls }) => (
          <div key={name} className="bg-recessed rounded border border-line">
            <div className={cls}>
              <div className="bg-surface border border-dashed border-line-strong rounded p-3 flex items-center justify-between">
                <span className="text-label-sm font-mono text-primary">{cls}</span>
                <span className="text-label-sm text-muted">{desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── Breakpoints ──────────────────────────────────────────────────────────────

export const Breakpoints: Story = {
  name: 'Breakpoints',
  render: () => (
    <div className="flex flex-col gap-4">
      <h2 className="text-body-md font-semibold text-heading">Breakpoints</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-body-sm border-collapse">
          <thead>
            <tr className="border-b border-line">
              <th className="text-left p-2 text-heading font-semibold">Name</th>
              <th className="text-left p-2 text-heading font-semibold">Min width</th>
              <th className="text-left p-2 text-heading font-semibold">Tailwind prefix</th>
              <th className="text-left p-2 text-heading font-semibold">Typical use</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: '(base)',  width: '–',      prefix: '–',    use: 'Mobile / narrow' },
              { name: 'sm',     width: '768px',  prefix: 'sm:',  use: 'Tablet portrait' },
              { name: 'md',     width: '1024px', prefix: 'md:',  use: 'Laptop' },
              { name: 'lg',     width: '1280px', prefix: 'lg:',  use: 'Desktop' },
              { name: 'xl',     width: '1536px', prefix: 'xl:',  use: 'Large desktop' },
              { name: '2xl',    width: '1800px', prefix: '2xl:', use: 'Wide display' },
            ].map((row) => (
              <tr key={row.name} className="border-b border-line hover:bg-surface">
                <td className="p-2 font-mono text-primary">{row.name}</td>
                <td className="p-2 text-secondary">{row.width}</td>
                <td className="p-2 font-mono text-muted">{row.prefix}</td>
                <td className="p-2 text-secondary">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};

// ─── Grid System ──────────────────────────────────────────────────────────────

export const GridSystem: Story = {
  name: '12-Column Grid',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">12-Column Grid</h2>
      <Stack gap={3}>
        {/* Full-width row */}
        <Grid cols={12} gap={2}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="bg-action-primary/20 border border-action-primary/40 rounded text-center text-label-sm text-secondary py-2">
              {i + 1}
            </div>
          ))}
        </Grid>

        {/* Common span patterns */}
        <Grid cols={12} gap={2}>
          <ColSpan span={6}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">6</div></ColSpan>
          <ColSpan span={6}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">6</div></ColSpan>
        </Grid>

        <Grid cols={12} gap={2}>
          <ColSpan span={8}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">8 — main content</div></ColSpan>
          <ColSpan span={4}><div className="bg-recessed border border-line rounded p-3 text-label-sm text-secondary text-center">4 — sidebar</div></ColSpan>
        </Grid>

        <Grid cols={12} gap={2}>
          <ColSpan span={4}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">4</div></ColSpan>
          <ColSpan span={4}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">4</div></ColSpan>
          <ColSpan span={4}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">4</div></ColSpan>
        </Grid>

        <Grid cols={12} gap={2}>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
          <ColSpan span={3}><div className="bg-surface border border-line rounded p-3 text-label-sm text-secondary text-center">3</div></ColSpan>
        </Grid>
      </Stack>
    </div>
  ),
};

// ─── Surface Hierarchy ────────────────────────────────────────────────────────

export const SurfaceHierarchy: Story = {
  name: 'Surface Hierarchy',
  render: () => (
    <div className="flex flex-col gap-4">
      <h2 className="text-body-md font-semibold text-heading">Background Surface Hierarchy</h2>
      <p className="text-body-sm text-secondary">
        Use these in order — elevated → surface → canvas → recessed — to create visual depth.
      </p>
      <div className="flex flex-col gap-2">
        {[
          { cls: 'bg-elevated', label: 'bg-elevated', desc: 'Headers, modals, dropdowns' },
          { cls: 'bg-surface',  label: 'bg-surface',  desc: 'Cards, panels, list backgrounds' },
          { cls: 'bg-canvas',   label: 'bg-canvas',   desc: 'Page background' },
          { cls: 'bg-recessed', label: 'bg-recessed', desc: 'Inputs, inset areas, code blocks' },
        ].map(({ cls, label, desc }) => (
          <div key={cls} className={`${cls} border border-line rounded p-4 flex items-center justify-between`}>
            <span className="font-mono text-label-sm text-primary">{label}</span>
            <span className="text-label-sm text-muted">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── Layout Compositions ──────────────────────────────────────────────────────

export const LayoutCompositions: Story = {
  name: 'Layout Composition Patterns',
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="text-body-md font-semibold text-heading">Common Layout Patterns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Master-Detail */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">MasterDetailLayout</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex h-full">
              <div className="bg-surface border-r border-line flex flex-col" style={{ width: '32%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">List</div>
                {[1,2,3,4].map(i => <div key={i} className="px-2 py-1.5 border-b border-line text-label-sm text-secondary">Row {i}</div>)}
              </div>
              <div className="bg-canvas flex-1 flex flex-col">
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Detail</div>
                <Inset size="compact"><div className="text-label-sm text-muted">Content area</div></Inset>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">ThreeColumnLayout</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex h-full">
              <div className="bg-surface border-r border-line flex flex-col" style={{ width: '22%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Nav</div>
                {[1,2,3].map(i => <div key={i} className="px-2 py-1 text-label-sm text-secondary">Item {i}</div>)}
              </div>
              <div className="bg-canvas flex-1 flex flex-col border-r border-line">
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Content</div>
                <Inset size="compact"><div className="text-label-sm text-muted">Main content</div></Inset>
              </div>
              <div className="bg-surface flex-col" style={{ width: '30%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">Right</div>
                <Inset size="compact"><div className="text-label-sm text-muted">Panel</div></Inset>
              </div>
            </div>
          </div>
        </div>

        {/* AppShell */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">AppShell</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex flex-col h-full">
              <div className="bg-elevated border-b border-line px-3 py-2 text-label-sm font-semibold text-heading shrink-0">Header (56px)</div>
              <div className="flex flex-1 overflow-hidden">
                <div className="bg-header-bg flex flex-col shrink-0" style={{ width: 40 }}>
                  {[1,2,3].map(i => <div key={i} className="h-8 border-b border-white/10" />)}
                </div>
                <div className="bg-canvas flex-1 p-2 text-label-sm text-muted">Body / PanelGroup</div>
              </div>
            </div>
          </div>
        </div>

        {/* ListPanel + DetailPanel */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-semibold text-secondary">ListPanel + DetailPanel</span>
          <div className="border border-line rounded overflow-hidden" style={{ height: 180 }}>
            <div className="flex h-full">
              <div className="bg-surface border-r border-line flex flex-col" style={{ width: '38%' }}>
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">PanelHeader</div>
                <div className="px-2 py-1 border-b border-line bg-elevated text-label-sm text-muted">toolbar slot</div>
                <div className="flex-1 overflow-y-auto">
                  {[1,2,3,4].map(i => <div key={i} className="px-2 py-1.5 border-b border-line text-label-sm text-secondary">Item {i}</div>)}
                </div>
              </div>
              <div className="bg-canvas flex-1 flex flex-col">
                <div className="bg-elevated border-b border-line px-2 py-1.5 text-label-sm font-semibold text-heading">PanelHeader</div>
                <div className="flex-1 overflow-y-auto p-2 text-label-sm text-muted">ScrollArea body</div>
                <div className="bg-elevated border-t border-line px-2 py-1.5 text-label-sm text-muted">footer slot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
