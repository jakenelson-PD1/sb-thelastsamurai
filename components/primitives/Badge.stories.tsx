import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Avatar } from './Avatar';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge', component: Badge, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Badge>;

// ─── All variants ─────────────────────────────────────────────────────────────
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="cerulean">Cerulean</Badge>
      <Badge variant="purple">High priority</Badge>
      <Badge variant="pink">Thu, Apr 16</Badge>
    </div>
  ),
};

// ─── Individual variants ──────────────────────────────────────────────────────
export const Default: Story   = { args: { children: 'Default' } };
export const Brand: Story     = { args: { children: 'Info',          variant: 'brand' } };
export const Success: Story   = { args: { children: 'Active',        variant: 'success' } };
export const Warning: Story   = { args: { children: 'Pending',       variant: 'warning' } };
export const Danger: Story    = { args: { children: 'Error',         variant: 'danger' } };
export const Outlined: Story  = { args: { children: 'Draft',         variant: 'outlined' } };
export const Cerulean: Story  = { args: { children: 'E-Signature',   variant: 'cerulean' } };

// Purple — used for priority labels (e.g. "High priority" on request headers)
export const Purple: Story    = { args: { children: 'High priority', variant: 'purple' } };

// Pink — used for date labels (e.g. due dates on request headers)
export const Pink: Story      = { args: { children: 'Thu, Apr 16',  variant: 'pink' } };

// ─── Deletable ────────────────────────────────────────────────────────────────
export const Deletable: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="brand"   onDelete={() => alert('removed')}>React</Badge>
      <Badge variant="success" onDelete={() => alert('removed')}>TypeScript</Badge>
      <Badge variant="default" onDelete={() => alert('removed')}>Tag</Badge>
    </div>
  ),
};

// ─── With avatar ──────────────────────────────────────────────────────────────
export const WithAvatar: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge
        variant="default"
        avatar={<Avatar variant="client" size="xs" initials="GS" className="h-4 w-4 text-caption" />}
      >
        Gerardo Sumano
      </Badge>
      <Badge
        variant="default"
        avatar={<Avatar variant="firm" size="xs" initials="AJ" className="h-4 w-4 text-caption" />}
      >
        Amana Johanson
      </Badge>
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Badge ComponentSet (485:20) ──────
// 9 variants laid out in a single row at x = 16/81/146/211/276/341/406/471/536
// (stride 65px), y=16, each 53×21px. Figma Label property defaults to "Badge".

type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'danger' | 'outlined' | 'cerulean' | 'purple' | 'pink';

const BADGE_CELLS: (MatrixCellSpec & { v: BadgeVariant })[] = [
  { variant: 'Variant=Default',  v: 'default',  x: 16,  y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Brand',    v: 'brand',    x: 81,  y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Success',  v: 'success',  x: 146, y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Warning',  v: 'warning',  x: 211, y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Danger',   v: 'danger',   x: 276, y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Outlined', v: 'outlined', x: 341, y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Cerulean', v: 'cerulean', x: 406, y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Purple',   v: 'purple',   x: 471, y: 16, w: 53, h: 21, expect: { headings: [] } },
  { variant: 'Variant=Pink',     v: 'pink',     x: 536, y: 16, w: 53, h: 21, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:63', cells: BADGE_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 605, height: 53 }}>
      {BADGE_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Badge variant={c.v}>Badge</Badge>
        </div>
      ))}
    </div>
  ),
};
