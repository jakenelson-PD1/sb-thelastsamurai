import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Avatar } from '../primitives/Avatar';
import { Badge } from '../primitives/Badge';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Card> = {
  title: 'Overlay/Card', component: Card, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Card>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Card padding="sm"><p className="text-body-sm text-secondary">Small padding card</p></Card>
      <Card padding="md">
        <h3 className="text-body-sm font-semibold text-primary mb-1">Order #1042</h3>
        <p className="text-body-sm text-secondary">Placed on March 10, 2026 · $148.00</p>
      </Card>
      <Card padding="lg">
        <h3 className="text-body-sm font-semibold text-primary mb-2">Account summary</h3>
        <p className="text-body-sm text-muted">Large padding for prominent content areas.</p>
      </Card>
    </div>
  ),
};

export const Default: Story = {
  args: { padding: 'md', children: 'Card content goes here.' },
};

// ─── Padding variants — mirrors Figma Card ComponentSet (Padding axis) ───────
export const Padding_xs: Story = { args: { padding: 'xs', children: 'Card content goes here.' } };
export const Padding_sm: Story = { args: { padding: 'sm', children: 'Card content goes here.' } };
export const Padding_md: Story = { args: { padding: 'md', children: 'Card content goes here.' } };
export const Padding_lg: Story = { args: { padding: 'lg', children: 'Card content goes here.' } };

// ─── Matrix — pixel-pinned mirror of Figma Card ComponentSet (375:8) ────────
// Figma set layout: 4 padding variants in a horizontal row, each 280w,
// positioned at x=0/320/640/960 with the canonical demo composition inside
// (Title + Description + Footer{Avatar + Name + Badge}). Heights vary with
// padding: xs=115 / sm=131 / md=139 / lg=155.
// Compose with canonical Avatar + Badge primitives — no hand-rolled visuals.

const DEMO_TITLE = 'Quarterly Tax Review';
const DEMO_DESCRIPTION = 'Annual review of compliance and risk assessment for Q4 2024.';
const DEMO_NAME = 'Jake Allsop';
const DEMO_BADGE = 'In Review';

const CARD_CELLS: MatrixCellSpec[] = [
  { variant: 'Padding=sm', x: 0,   y: 0, w: 280, h: 131, expect: { headings: [DEMO_TITLE] } },
  { variant: 'Padding=md', x: 320, y: 0, w: 280, h: 139, expect: { headings: [DEMO_TITLE] } },
  { variant: 'Padding=lg', x: 640, y: 0, w: 280, h: 155, expect: { headings: [DEMO_TITLE] } },
  { variant: 'Padding=xs', x: 960, y: 0, w: 280, h: 115, expect: { headings: [DEMO_TITLE] } },
];

function CardDemoContent() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-body-md font-semibold text-primary">{DEMO_TITLE}</h3>
      <p className="text-body-sm text-secondary">{DEMO_DESCRIPTION}</p>
      <div className="flex items-center gap-2 pt-1">
        <Avatar size="sm" variant="firm" initials="J" />
        <span className="text-body-sm text-secondary flex-1">{DEMO_NAME}</span>
        <Badge variant="brand">{DEMO_BADGE}</Badge>
      </div>
    </div>
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:5', cells: CARD_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1240, height: 155 }}>
      {CARD_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <Card padding={c.variant.split('=')[1] as 'xs' | 'sm' | 'md' | 'lg'}>
            <CardDemoContent />
          </Card>
        </div>
      ))}
    </div>
  ),
};
