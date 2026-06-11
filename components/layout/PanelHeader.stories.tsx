import type { Meta, StoryObj } from '@storybook/react';
import { MatrixVerify, type MatrixCellSpec } from "../_decorators/MatrixVerify";
import { PanelHeader } from './PanelHeader';
import { Button } from '../primitives/Button';
import { PlusIcon } from '../primitives/icons/PlusIcon';

const meta: Meta<typeof PanelHeader> = {
  title: 'Layout/PanelHeader',
  component: PanelHeader,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof PanelHeader>;

export const Default: Story = {
  args: { title: 'Panel title' },
};

export const WithSubtitle: Story = {
  args: { title: 'Documents', subtitle: '12 items' },
};

export const WithActions: Story = {
  args: {
    title: 'Requests',
    subtitle: '24 items',
    actions: <Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>,
  },
};

export const Compact: Story = {
  args: { title: 'Notes', subtitle: '3 items', size: 'compact' },
};

export const NoBorder: Story = {
  args: { title: 'Preview', border: false },
};

// ─── Matrix — mirrors Figma "PanelHeader" page (76:41) ───────────────────────
// LAYOUT scaffolding: 2 sizes × 2 border states = 4 variants @ 320 wide.
// Figma ComponentSet 796:44.
const PH_CELLS: MatrixCellSpec[] = [
  { variant: 'Size=compact, Border=true',  x: 40, y: 40,  w: 360, h: 50, expect: { headings: [] } },
  { variant: 'Size=compact, Border=false', x: 40, y: 114, w: 360, h: 50, expect: { headings: [] } },
  { variant: 'Size=default, Border=true',  x: 40, y: 188, w: 360, h: 58, expect: { headings: [] } },
  { variant: 'Size=default, Border=false', x: 40, y: 270, w: 360, h: 58, expect: { headings: [] } },
];

// Matches Figma 76:41 showcase: every cell shows the same "Panel title" /
// "12 items" / "+ Add" content so only the Size × Border variant differs.
export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:41', cells: PH_CELLS } },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 440, height: 360 }}>
      {PH_CELLS.map((c) => {
        const size = /Size=compact/.test(c.variant) ? 'compact' as const : 'default' as const;
        const border = /Border=true/.test(c.variant);
        return (
          <div key={c.variant} className="absolute bg-elevated rounded-control overflow-hidden" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
            <PanelHeader
              title="Panel title"
              subtitle="12 items"
              size={size}
              border={border}
              actions={<Button size="xs" startIcon={<PlusIcon size={12} />}>Add</Button>}
            />
          </div>
        );
      })}
    </div>
  ),
};
