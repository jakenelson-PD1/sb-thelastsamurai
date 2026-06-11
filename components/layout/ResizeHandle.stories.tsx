import type { Meta, StoryObj } from '@storybook/react';
import { ResizeHandle } from './ResizeHandle';
import { PanelGroup } from './PanelGroup';
import { Panel } from './Panel';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

/**
 * `ResizeHandle` is the draggable divider that sits between `Panel` elements
 * inside a `PanelGroup`. It renders a thin line that lights up on hover or
 * when actively dragged, and shows three dot indicators to communicate
 * interactivity.
 *
 * It must always be placed as a direct sibling of `Panel` components inside a
 * `PanelGroup`; it cannot be used in isolation.
 */
const meta: Meta<typeof ResizeHandle> = {
  title: 'Primitives/ResizeHandle',
  component: ResizeHandle,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' }}>
        <PanelGroup id="resize-handle-decorator">
          <Panel defaultSize={50}>
            <div
              style={{ background: '#f0f4ff' }}  // token-lint-skip: showcase fixed dims for screenshot stability
              className="h-full flex items-center justify-center"
            >
              <span className="text-sm text-secondary">Left panel — hover the handle</span>  // token-lint-skip: showcase fixed dims for screenshot stability
            </div>
          </Panel>
          <Story />
          <Panel defaultSize={50}>
            <div
              style={{ background: '#f0fff4' }}  // token-lint-skip: showcase fixed dims for screenshot stability
              className="h-full flex items-center justify-center"
            >
              <span className="text-sm text-secondary">Right panel — drag to resize</span>  // token-lint-skip: showcase fixed dims for screenshot stability
            </div>
          </Panel>
        </PanelGroup>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ResizeHandle>;

/**
 * The default handle sits between two panels in a horizontal `PanelGroup`.
 * Hover over the thin vertical line to see it highlight, or drag it to
 * redistribute space between the panels.
 */
export const Default: Story = {
  args: {},
};

/**
 * A handle with an explicit `id` applied — useful when you need to persist
 * panel sizes across sessions via `autoSaveId` on the parent `PanelGroup`, or
 * when testing requires a stable DOM target.
 */
export const WithId: Story = {
  name: 'With Explicit ID',
  args: {
    id: 'my-resize-handle',
  },
};

/**
 * Demonstrates a customised appearance via the `className` prop. The handle
 * retains its interactive behaviour while the visual style is overridden.
 */
export const CustomStyle: Story = {
  name: 'Custom Style (Wider Hit Area)',
  args: {
    className: 'w-1 bg-action-primary/30 hover:bg-action-primary',
  },
};

// ─── Matrix — pixel-pinned mirror of Figma ResizeHandle set (802:10) ────────
// 2 variants: State=Default + State=Hover. Each cell is 12×200 — the handle
// itself rendered inside a 12-wide PanelGroup (left + right panels collapsed
// to zero default size so the handle takes the full 12px column).
// Hover state forced via the `!bg-action-primary` class override.

type RH_State = 'Default' | 'Hover';

interface RHCell extends MatrixCellSpec {
  state: RH_State;
}

const RESIZEHANDLE_CELLS: RHCell[] = [
  { variant: 'State=Default', state: 'Default', x: 40, y: 40, w: 12, h: 200, expect: { headings: [] } },
  { variant: 'State=Hover',   state: 'Hover',   x: 76, y: 40, w: 12, h: 200, expect: { headings: [] } },
];

function ResizeHandleMatrixCell({ cell, id }: { cell: RHCell; id: string }) {
  // Hover override: paint the canonical w-px line blue + force the dot indicators
  // visible (they normally appear only on `:hover`). Default needs no override —
  // the canonical renders its 1px bg-line at rest already.
  const handleCls = cell.state === 'Hover'
    ? '!bg-action-primary [&>div]:!opacity-100'
    : undefined;
  return (
    <div className="h-full w-full flex items-stretch justify-center">
      <PanelGroup id={id}>
        <Panel defaultSize={0} minSize={0} />
        <ResizeHandle className={handleCls} />
        <Panel defaultSize={0} minSize={0} />
      </PanelGroup>
    </div>
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '802:10', cells: RESIZEHANDLE_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 128, height: 280 }}>
      {RESIZEHANDLE_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <ResizeHandleMatrixCell cell={c} id={`matrix-${c.state}`} />
        </div>
      ))}
    </div>
  ),
};
