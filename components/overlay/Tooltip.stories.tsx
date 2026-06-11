import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../primitives/Button';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Tooltip> = {
  title: 'Overlay/Tooltip', component: Tooltip, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Helpful text">
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip content="This is a much longer tooltip message that provides more detailed context about the action or element being hovered.">
      <Button variant="secondary">Hover for details</Button>
    </Tooltip>
  ),
};

export const MultipleInARow: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="Bold">
        <Button variant="secondary">B</Button>
      </Tooltip>
      <Tooltip content="Italic">
        <Button variant="secondary">I</Button>
      </Tooltip>
      <Tooltip content="Underline">
        <Button variant="secondary">U</Button>
      </Tooltip>
      <Tooltip content="Strike-through">
        <Button variant="secondary">S</Button>
      </Tooltip>
    </div>
  ),
  parameters: { layout: 'centered' },
};

export const BottomSide: Story = {
  name: 'Side: bottom',
  render: () => (
    <Tooltip content="Appears below" side="bottom">
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
  parameters: { layout: 'centered' },
};

export const OnIconButtons: Story = {
  name: 'On icon buttons',
  render: () => (
    <div className="flex items-center gap-1 p-8">
      <Tooltip content="Menu" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Menu"
          startIcon={<span className="text-heading-sm">⋯</span>} />
      </Tooltip>
      <Tooltip content="Team" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Team"
          startIcon={<span className="text-heading-sm">👥</span>} />
      </Tooltip>
      <Tooltip content="Notifications" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Notifications"
          startIcon={<span className="text-heading-sm">🔔</span>} />
      </Tooltip>
      <Tooltip content="Analytics" side="bottom">
        <Button variant="ghost" size="sm" iconOnly aria-label="Analytics"
          startIcon={<span className="text-heading-sm">📊</span>} />
      </Tooltip>
    </div>
  ),
  parameters: { layout: 'centered' },
};

// ─── Matrix — mirrors Figma Tooltip ComponentSet (746:6) ────────────────────
// 2 variants on the `Side` axis (Top / Bottom). Both render an identical
// pill — the `Side` axis carries semantic info about positioning relative to
// a trigger, not a different bubble visual. Cells use absolute positioning at
// Figma's exact (x, y, w, h). Each renders the canonical `Tooltip` in inline
// + no-children mode (standalone bubble at flow position).

const TOOLTIP_CELLS: MatrixCellSpec[] = [
  // x/y mirror the two variants' positions inside set 746:6, normalized so
  // the leftmost variant starts at (0, 0). Figma had Side=Top at x=24 and
  // Side=Bottom at x=138 — the 114px offset is preserved.
  { variant: 'Side=Top',    x: 0,   y: 0, w: 82, h: 25, expect: { headings: [] } },
  { variant: 'Side=Bottom', x: 114, y: 0, w: 82, h: 25, expect: { headings: [] } },
];

const renderCell = (variant: string) => {
  const side = /Side=Bottom/.test(variant) ? 'bottom' : 'top';
  return <Tooltip inline open content="Tooltip text" side={side} />;
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:60', cells: TOOLTIP_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 220, height: 50 }}>
      {TOOLTIP_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          {renderCell(c.variant)}
        </div>
      ))}
    </div>
  ),
};
