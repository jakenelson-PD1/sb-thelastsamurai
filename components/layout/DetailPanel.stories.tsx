import type { Meta, StoryObj } from '@storybook/react';
import { DetailPanel } from './DetailPanel';
import { PanelHeader } from './PanelHeader';
import { Button } from '../primitives/Button';
import { Inset } from './Inset';
import { PlusIcon } from '../primitives/icons/PlusIcon';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof DetailPanel> = {
  title: 'Layout/DetailPanel',
  component: DetailPanel,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof DetailPanel>;

const mockContent = Array.from({ length: 12 }, (_, i) => (
  <div key={i} className="border-b border-line py-4">
    <div className="text-label-sm font-semibold text-secondary mb-1">Field {i + 1}</div>
    <div className="text-body-sm text-primary">Value for field {i + 1} — some longer text content here</div>
  </div>
));

export const Default: Story = {
  render: () => (
    <div style={{ height: 560 }}>
      <DetailPanel
        header={<PanelHeader title="Tax Return — Acme Corp" subtitle="FY 2025" />}
      >
        <Inset>{mockContent}</Inset>
      </DetailPanel>
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div style={{ height: 560 }}>
      <DetailPanel
        header={<PanelHeader title="Tax Return — Acme Corp" subtitle="FY 2025" />}
        footer={
          <div className="flex justify-end gap-2 p-panel">
            <Button variant="secondary">Cancel</Button>
            <Button>Save changes</Button>
          </div>
        }
      >
        <Inset>{mockContent}</Inset>
      </DetailPanel>
    </div>
  ),
};

// ─── Matrix — mirrors Figma "DetailPanel" page (76:31) ───────────────────────
// LAYOUT scaffolding: cells lock the two-slot grammar (HasFooter=false/true).
// Figma ComponentSet 812:87, 2 variants @ 480×560 — content mirrors the Figma
// showcase exactly: "Panel title" / "12 items" header with "+ Add" action,
// "Field N" / "Value for field N — some longer text content here" rows.
const DP_CELLS: MatrixCellSpec[] = [
  { variant: 'HasFooter=false', x: 40,  y: 40, w: 480, h: 560, expect: { headings: [] } },
  { variant: 'HasFooter=true',  x: 560, y: 40, w: 480, h: 560, expect: { headings: [] } },
];

// Field rows matching Figma's showcase — Field 1..7 with the same long-line
// "Value for field N — some longer text content here" body.
const FieldRows = () => (
  <div>
    {Array.from({ length: 7 }, (_, i) => (
      <div key={i} className="border-b border-line py-3 last:border-b-0">
        <div className="text-body-sm font-semibold text-primary mb-0.5">Field {i + 1}</div>
        <div className="text-body-sm text-secondary">Value for field {i + 1} — some longer text content here</div>
      </div>
    ))}
  </div>
);

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:31', cells: DP_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 1080, height: 640 }}>
      {DP_CELLS.map(c => (
        <div key={c.variant} className="absolute border border-line rounded-control overflow-hidden bg-elevated" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <DetailPanel
            header={
              <PanelHeader
                title="Panel title"
                subtitle="12 items"
                actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>}
              />
            }
            footer={c.variant === 'HasFooter=true' ? (
              <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-line bg-elevated">
                <Button variant="secondary" size="sm">Cancel</Button>
                <Button size="sm">Save changes</Button>
              </div>
            ) : undefined}
          >
            <Inset><FieldRows /></Inset>
          </DetailPanel>
        </div>
      ))}
    </div>
  ),
};
