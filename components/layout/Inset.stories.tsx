import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { Inset } from './Inset';

const meta: Meta<typeof Inset> = {
  title: 'Layout/Inset',
  component: Inset,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Inset>;

const Inner = ({ label }: { label: string }) => (
  <div className="bg-surface border border-dashed border-line-strong rounded-control text-label-sm text-muted text-center py-3">
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset><Inner label="Inset default (16px)" /></Inset>
    </div>
  ),
};

export const Compact: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset size="compact"><Inner label="Inset compact (12px)" /></Inset>
    </div>
  ),
};

export const Relaxed: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset size="relaxed"><Inner label="Inset relaxed (24px)" /></Inset>
    </div>
  ),
};

export const XOnly: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset x><Inner label="Inset x (horizontal only)" /></Inset>
    </div>
  ),
};

export const YOnly: Story = {
  render: () => (
    <div className="bg-recessed rounded-control">
      <Inset y><Inner label="Inset y (vertical only)" /></Inset>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['compact', 'default', 'relaxed'] as const).map((size) => (
        <div key={size} className="bg-recessed rounded-control">
          <Inset size={size}>
            <div className="bg-surface border border-dashed border-line-strong rounded-control p-2 text-center text-label-sm text-muted">
              size="{size}"
            </div>
          </Inset>
        </div>
      ))}
    </div>
  ),
};

// ─── Matrix — mirrors Figma "Inset" page (76:36) ─────────────────────────────
// LAYOUT scaffolding: representative Size × Axis variants from the 9 total.
// Figma ComponentSet 787:21.
const I_CELLS: MatrixCellSpec[] = [
  { variant: 'Size=compact, Axis=all', x: 40, y: 40,  w: 320, h: 96, expect: { headings: [] } },
  { variant: 'Size=default, Axis=all', x: 40, y: 168, w: 320, h: 96, expect: { headings: [] } },
  { variant: 'Size=relaxed, Axis=all', x: 40, y: 296, w: 320, h: 96, expect: { headings: [] } },
];

// Plain placeholder pill matching Figma 76:36 — the inset's padding is the
// showcase. The dashed border on the outer wrapper marks the inset bounds.
const InsetPill = () => <div className="h-10 w-full rounded-control bg-recessed" />;

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:36', cells: I_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 400, height: 432 }}>
      {I_CELLS.map(c => {
        const size = /compact/.test(c.variant) ? 'compact' as const : /relaxed/.test(c.variant) ? 'relaxed' as const : 'default' as const;
        return (
          <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <div className="h-full bg-elevated rounded-control border border-dashed border-line-strong overflow-hidden">
              <Inset size={size}>
                <InsetPill />
              </Inset>
            </div>
          </div>
        );
      })}
    </div>
  ),
};
