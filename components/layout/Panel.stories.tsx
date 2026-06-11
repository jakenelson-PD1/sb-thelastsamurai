import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { Panel } from './Panel';
import { PanelGroup } from './PanelGroup';
import { ResizeHandle } from './ResizeHandle';

/**
 * `Panel` is a resizable panel built on top of react-resizable-panels.
 * It must always be rendered as a direct child of `PanelGroup`.
 * It supports an optional title header and a closeable button.
 */
const meta: Meta<typeof Panel> = {
  title: 'Layout/Panel',
  component: Panel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px', border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' }}>
        <PanelGroup>
          <Story />
          <ResizeHandle />
          <Panel defaultSize={40}>
            <div className="p-4 text-muted text-body-sm">Adjacent panel</div>
          </Panel>
        </PanelGroup>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    title: 'Layout/Panel',
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-2">
        <p className="text-body-sm text-primary">This is the default panel with a title and some content.</p>
        <p className="text-body-sm text-secondary">
          Panels can contain any React children. They sit inside a PanelGroup and can be resized by dragging the handle.
        </p>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  name: 'No Title',
  args: {
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-2">
        <p className="text-body-sm text-primary">This panel has no title prop set.</p>
        <p className="text-body-sm text-secondary">
          When neither a title nor closeable is provided the header is omitted entirely.
        </p>
      </div>
    ),
  },
};

export const Closeable: Story = {
  args: {
    title: 'Closeable Panel',
    closeable: true,
    onClose: () => console.log('Panel closed'),
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-2">
        <p className="text-body-sm text-primary">This panel has a close button in its header.</p>
        <p className="text-body-sm text-secondary">
          Click the &times; icon in the top-right corner. In this story it logs to the console.
        </p>
      </div>
    ),
  },
};

export const TallContent: Story = {
  name: 'Tall Content (Scroll)',
  args: {
    title: 'Scrollable Panel',
    defaultSize: 60,
    children: (
      <div className="p-4 space-y-3">
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} className="text-body-sm text-secondary">
            Line {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
      </div>
    ),
  },
};

// ─── Matrix — mirrors Figma "Panel" page (76:39) ─────────────────────────────
// LAYOUT scaffolding: 4 header configurations at 320×280 (None/Title/Close/Both).
// Figma ComponentSet 800:26. Wrapped in PanelGroup so Panel renders.
const P_CELLS: MatrixCellSpec[] = [
  { variant: 'Header=None',          x: 40,   y: 40, w: 320, h: 280, expect: { headings: [] } },
  { variant: 'Header=Title',         x: 384,  y: 40, w: 320, h: 280, expect: { headings: [] } },
  { variant: 'Header=Close',         x: 728,  y: 40, w: 320, h: 280, expect: { headings: [] } },
  { variant: 'Header=TitleAndClose', x: 1072, y: 40, w: 320, h: 280, expect: { headings: [] } },
];

// Each cell renders the actual Panel inside a PanelGroup at 100% of the cell,
// configured for the variant's header (None/Title/Close/TitleAndClose).
// Body matches Figma 76:39 showcase: centered "Panel content" placeholder.
const PanelCell = ({ title, closeable }: { title?: string; closeable?: boolean }) => (
  <div className="h-full w-full border border-line rounded-control overflow-hidden bg-elevated">
    <PanelGroup>
      <Panel title={title} closeable={closeable} onClose={() => {}}>
        <div className="flex h-full w-full items-center justify-center text-body-sm text-muted">
          Panel content
        </div>
      </Panel>
    </PanelGroup>
  </div>
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:39', cells: P_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1432, height: 360 }}>
      {P_CELLS.map(c => {
        const hasTitle = /Title/.test(c.variant);
        const hasClose = /Close/.test(c.variant);
        return (
          <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <PanelCell title={hasTitle ? 'Panel Title' : undefined} closeable={hasClose} />
          </div>
        );
      })}
    </div>
  ),
};
