import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { ListPanel } from './ListPanel';
import { PanelHeader } from './PanelHeader';
import { Button } from '../primitives/Button';
import { PlusIcon } from '../primitives/icons/PlusIcon';

const meta: Meta<typeof ListPanel> = {
  title: 'Layout/ListPanel',
  component: ListPanel,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof ListPanel>;

const mockRows = Array.from({ length: 30 }, (_, i) => (
  <div key={i} className="flex items-center gap-3 px-panel-compact py-2 border-b border-line text-body-sm text-primary hover:bg-surface cursor-pointer">
    <span className="text-muted w-5 text-right shrink-0">{i + 1}</span>
    <span className="truncate">Request item {i + 1}</span>
  </div>
));

export const Default: Story = {
  render: () => (
    <div style={{ height: 480, width: 320 }}>
      <ListPanel
        header={<PanelHeader title="Requests" subtitle="30 items" actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>} />}
      >
        {mockRows}
      </ListPanel>
    </div>
  ),
};

export const WithToolbar: Story = {
  render: () => (
    <div style={{ height: 480, width: 320 }}>
      <ListPanel
        header={<PanelHeader title="Requests" subtitle="30 items" />}
        toolbar={
          <div className="px-panel-compact py-2 text-label-sm text-muted">
            Search / filter toolbar
          </div>
        }
      >
        {mockRows}
      </ListPanel>
    </div>
  ),
};

// ─── Matrix — mirrors Figma "ListPanel" page (76:37) ─────────────────────────
// LAYOUT scaffolding: locks the header+optional-toolbar+list slot grammar.
// Figma ComponentSet 809:124, 2 variants @ 320×480 — content mirrors the Figma
// showcase exactly: "Panel title" / "12 items" header with "+ Add" action,
// numbered "Request item N" rows, optional "Search / filter toolbar" slot.
const LP_CELLS: MatrixCellSpec[] = [
  { variant: 'HasToolbar=false', x: 40,  y: 40, w: 320, h: 480, expect: { headings: [] } },
  { variant: 'HasToolbar=true',  x: 400, y: 40, w: 320, h: 480, expect: { headings: [] } },
];

// Numbered request-item rows matching Figma's showcase: a small grey numeric
// prefix followed by "Request item N", with a faint selected highlight on the
// first row of the HasToolbar=false variant.
const LpRows = ({ count, selectFirst }: { count: number; selectFirst?: boolean }) => (
  <div>
    {Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={`flex items-center gap-3 px-3 py-2 border-b border-line text-body-sm cursor-pointer ${
          selectFirst && i === 0 ? 'bg-row-selected' : 'hover:bg-surface'
        }`}
      >
        <span className="text-muted w-5 text-right shrink-0">{i + 1}</span>
        <span className="text-primary truncate">Request item {i + 1}</span>
      </div>
    ))}
  </div>
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:37', cells: LP_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 760, height: 560 }}>
      {LP_CELLS.map(c => {
        const hasToolbar = c.variant === 'HasToolbar=true';
        return (
          <div
            key={c.variant}
            className="absolute border border-line rounded-control overflow-hidden bg-elevated"
            data-matrix-cell
            style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
          >
            <ListPanel
              header={
                <PanelHeader
                  title="Panel title"
                  subtitle="12 items"
                  actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>}
                />
              }
              toolbar={hasToolbar ? (
                <div className="flex h-9 items-center border-b border-line bg-surface px-3 text-body-sm text-muted">
                  Search / filter toolbar
                </div>
              ) : undefined}
            >
              <LpRows count={hasToolbar ? 12 : 13} selectFirst={!hasToolbar} />
            </ListPanel>
          </div>
        );
      })}
    </div>
  ),
};
