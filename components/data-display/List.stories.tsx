import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof List> = {
  title: 'Primitives/List', component: List, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof List>;

export const WithDescriptions: Story = {
  args: { items: [
    { id: 1, primary: 'Alice Chen',   secondary: 'alice@example.com · Admin' },
    { id: 2, primary: 'Bob Martinez', secondary: 'bob@example.com · Editor' },
    { id: 3, primary: 'Carol Kim',    secondary: 'carol@example.com · Viewer' },
  ]},
};

export const Simple: Story = {
  args: { items: [
    { id: 1, primary: 'Dashboard' },
    { id: 2, primary: 'Orders' },
    { id: 3, primary: 'Settings' },
  ]},
};

export const EmptyState: Story = {
  args: { items: [] },
};

export const SingleItem: Story = {
  args: { items: [
    { id: 1, primary: 'Only Item', secondary: 'This is the sole entry in the list' },
  ]},
};

export const LongList: Story = {
  args: { items: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    primary: `Item ${i + 1}`,
    secondary: `Detail line for item ${i + 1}`,
  }))},
};

// ─── Matrix — pixel-pinned mirror of Figma List ComponentSet (418:22) ───────
// Single State=default variant: 400×189, 3 stacked items (63px each) with the
// Alice / Bob / Carol seed content matching Figma exactly.
const LIST_CELLS: MatrixCellSpec[] = [
  { variant: 'State=default', x: 8, y: 8, w: 400, h: 189, expect: { headings: [] } },
];

const MATRIX_ITEMS = [
  { id: 1, primary: 'Alice Chen',   secondary: 'alice@example.com · Admin' },
  { id: 2, primary: 'Bob Martinez', secondary: 'bob@example.com · Editor' },
  { id: 3, primary: 'Carol Kim',    secondary: 'carol@example.com · Viewer' },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '418:22', cells: LIST_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 416, height: 205 }}>
      {LIST_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <List items={MATRIX_ITEMS} />
        </div>
      ))}
    </div>
  ),
};
