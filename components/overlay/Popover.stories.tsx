import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../primitives/Button';
import { Checkbox } from '../forms/Checkbox';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Popover> = {
  title: 'Overlay/Popover', component: Popover, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover trigger={<Button variant="secondary">Open Popover</Button>}>
      <p className="text-body-sm text-secondary">Popover content here.</p>
    </Popover>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Popover trigger={<Button variant="secondary">Account</Button>}>
      <div className="flex flex-col gap-2">
        <div className="border-b border-line pb-2">
          <p className="text-body-md font-semibold text-primary">Jane Smith</p>
          <p className="text-body-sm text-muted">jane@example.com</p>
        </div>
        <button className="text-left text-body-sm text-secondary hover:text-primary">Profile settings</button>
        <button className="text-left text-body-sm text-secondary hover:text-primary">Billing</button>
        <button className="text-left text-body-sm text-status-error">Sign out</button>
      </div>
    </Popover>
  ),
};

export const WithCustomWidth: Story = {
  render: () => (
    <Popover trigger={<Button variant="secondary">Filter</Button>} className="min-w-64">
      <div className="flex flex-col gap-3">
        <p className="text-label-md font-semibold text-primary">Filter options</p>
        <Checkbox defaultChecked label="Active" />
        <Checkbox label="Archived" />
        <Checkbox label="Draft" />
      </div>
    </Popover>
  ),
};

export const OpenByDefault: Story = {
  render: () => (
    <div className="pt-12">
      <Popover trigger={<Button variant="secondary">Open Popover</Button>}>
        <p className="text-body-sm text-secondary">
          Click the trigger above to toggle this popover. It starts closed — click to open it.
        </p>
      </Popover>
    </div>
  ),
  parameters: { layout: 'centered' },
};

// ─── Matrix — mirrors Figma Popover ComponentSet (764:31) ───────────────────
// 3 variants on the `Layout` axis (Default / Info / Filter). Cells use
// absolute positioning at Figma's exact (x, y, w, h). Each renders the
// canonical `Popover` in `inline` mode — no trigger, no scrim — so the panel
// alone occupies the cell. Internal composition uses canonical primitives
// (Checkbox) so the Filter variant matches its Figma instance children.

const POPOVER_CELLS: MatrixCellSpec[] = [
  // x/y mirror the three variants' positions inside set 764:31, normalized so
  // the leftmost variant starts at (0, 0). Figma had variants at x = 32, 256,
  // 480 — preserve the relative offsets (subtract 32 from each).
  { variant: 'Layout=Default', x: 0,   y: 0, w: 192, h: 45,  expect: { headings: [] } },
  { variant: 'Layout=Info',    x: 224, y: 0, w: 192, h: 151, expect: { headings: [] } },
  { variant: 'Layout=Filter',  x: 448, y: 0, w: 256, h: 144, expect: { headings: [] } },
];

const renderCell = (variant: string) => {
  if (variant === 'Layout=Default') {
    return (
      <Popover inline>
        <p className="text-body-sm text-secondary">Popover content here.</p>
      </Popover>
    );
  }
  if (variant === 'Layout=Info') {
    return (
      <Popover inline>
        <div className="flex flex-col gap-2">
          <div className="border-b border-line pb-2">
            <p className="text-body-md font-semibold text-primary">Jane Smith</p>
            <p className="text-body-sm text-muted">jane@example.com</p>
          </div>
          <button className="text-left text-body-sm text-secondary">Profile settings</button>
          <button className="text-left text-body-sm text-secondary">Billing</button>
          <button className="text-left text-body-sm text-status-error">Sign out</button>
        </div>
      </Popover>
    );
  }
  // Layout=Filter
  return (
    <Popover inline>
      <div className="flex flex-col gap-3">
        <p className="text-label-md font-semibold text-primary">Filter options</p>
        <Checkbox defaultChecked label="Active" />
        <Checkbox label="Archived" />
        <Checkbox label="Draft" />
      </div>
    </Popover>
  );
};

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:59', cells: POPOVER_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas min-w-fit p-12">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 720, height: 170 }}>
      {POPOVER_CELLS.map((c) => (
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
