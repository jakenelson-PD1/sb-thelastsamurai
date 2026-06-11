import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { PanelGroup } from './PanelGroup';
import { Panel } from './Panel';
import { ResizeHandle } from './ResizeHandle';

/**
 * `PanelGroup` is a horizontal resizable container that wraps multiple `Panel`
 * components separated by `ResizeHandle` elements. It delegates to
 * `react-resizable-panels`'s `Group` component with a fixed horizontal orientation.
 *
 * Compose panels and handles as direct children to build resizable split layouts.
 */
const meta: Meta<typeof PanelGroup> = {
  title: 'Layout/PanelGroup',
  component: PanelGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '360px', border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PanelGroup>;

export const Horizontal: Story = {
  name: 'Horizontal (Two Panels)',
  render: (args) => (
    <PanelGroup {...args} id="horizontal-two">
      <Panel defaultSize={50} title="Left Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Left content</p>
          <p className="text-body-sm text-secondary">
            Drag the handle to resize this panel relative to the one on the right.
          </p>
        </div>
      </Panel>
      <ResizeHandle />
      <Panel defaultSize={50} title="Right Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Right content</p>
          <p className="text-body-sm text-secondary">
            Both panels share the available width and can be resized freely.
          </p>
        </div>
      </Panel>
    </PanelGroup>
  ),
};

/**
 * Because `PanelGroup` hardcodes `orientation="horizontal"`, a true vertical
 * stack is achieved by nesting a second `PanelGroup` inside one of the panels
 * and giving the outer group a custom class that sets `flex-col`.
 *
 * This story shows a practical pattern: a wide left panel beside a right column
 * that is itself split into two stacked sub-panels.
 */
export const Vertical: Story = {
  name: 'Vertical (Nested Stack)',
  render: (args) => (
    <PanelGroup {...args} id="vertical-outer" className="flex-col">
      <Panel defaultSize={50} title="Top Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Top content</p>
          <p className="text-body-sm text-secondary">
            A vertical layout is achieved by overriding the flex direction via className.
          </p>
        </div>
      </Panel>
      <ResizeHandle className="h-px w-full" />
      <Panel defaultSize={50} title="Bottom Panel">
        <div className="p-4 space-y-2">
          <p className="text-body-sm text-primary font-medium">Bottom content</p>
          <p className="text-body-sm text-secondary">
            Drag the horizontal divider to redistribute space between the two panels.
          </p>
        </div>
      </Panel>
    </PanelGroup>
  ),
};

export const ThreePanels: Story = {
  name: 'Three Panels',
  render: (args) => (
    <PanelGroup {...args} id="three-panels">
      <Panel defaultSize={25} minSize={15} title="Navigator">
        <div className="p-3 space-y-1">
          {['Overview', 'Assets', 'Logs', 'Settings'].map((item) => (
            <div
              key={item}
              className="rounded-control px-2 py-1.5 text-body-sm text-secondary hover:bg-surface-raised cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </Panel>
      <ResizeHandle />
      <Panel defaultSize={50} minSize={25} title="Main Content">
        <div className="p-4 space-y-3">
          <p className="text-body-sm text-primary font-medium">Primary workspace</p>
          <p className="text-body-sm text-secondary">
            This is the largest panel, occupying half the available space by default.
          </p>
          <div className="rounded-control bg-surface-raised h-32 flex items-center justify-center">
            <span className="text-label-sm text-muted">Content area</span>
          </div>
        </div>
      </Panel>
      <ResizeHandle />
      <Panel defaultSize={25} minSize={15} title="Inspector">
        <div className="p-3 space-y-3">
          <div>
            <p className="text-label-sm font-semibold text-muted uppercase tracking-wider mb-1">Properties</p>
            {['Width', 'Height', 'Opacity', 'Color'].map((prop) => (
              <div key={prop} className="flex justify-between py-1 border-b border-line last:border-0">
                <span className="text-label-sm text-secondary">{prop}</span>
                <span className="text-label-sm text-muted">—</span>
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </PanelGroup>
  ),
};

// ─── Matrix — mirrors Figma "PanelGroup" page (76:40) ────────────────────────
// LAYOUT scaffolding: 3 layouts (2H/3H/2V) at 720×360 stacked.
// Figma ComponentSet 806:48.
const PG_CELLS: MatrixCellSpec[] = [
  { variant: 'Layout=HorizontalTwo',   x: 40, y: 40,  w: 720, h: 360, expect: { headings: [] } },
  { variant: 'Layout=HorizontalThree', x: 40, y: 440, w: 720, h: 360, expect: { headings: [] } },
  { variant: 'Layout=VerticalTwo',     x: 40, y: 840, w: 720, h: 360, expect: { headings: [] } },
];

// Panel body matches Figma 76:40 showcase: every panel has a "Panel Title"
// header and a centered "Panel content" body — the panel composition itself
// is the demo, not what's inside.
const PgPanel = () => (
  <Panel title="Panel Title">
    <div className="flex h-full w-full items-center justify-center text-body-sm text-muted bg-elevated">
      Panel content
    </div>
  </Panel>
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:40', cells: PG_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 800, height: 1240 }}>
      {PG_CELLS.map(c => (
        <div key={c.variant} className="absolute border border-line rounded-control overflow-hidden bg-elevated" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          {c.variant === 'Layout=HorizontalTwo' && (
            <PanelGroup direction="horizontal">
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
            </PanelGroup>
          )}
          {c.variant === 'Layout=HorizontalThree' && (
            <PanelGroup direction="horizontal">
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
            </PanelGroup>
          )}
          {c.variant === 'Layout=VerticalTwo' && (
            <PanelGroup direction="vertical">
              <PgPanel />
              <ResizeHandle />
              <PgPanel />
            </PanelGroup>
          )}
        </div>
      ))}
    </div>
  ),
};
