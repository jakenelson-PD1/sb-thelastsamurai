import type { Meta, StoryObj } from '@storybook/react';
import { FilterSwatchGroup } from './FilterSwatchGroup';
import { colors } from '../../tokens/colors';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof FilterSwatchGroup> = {
  title: 'Primitives/FilterSwatchGroup',
  component: FilterSwatchGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof FilterSwatchGroup>;

// ─── Seed palettes ──────────────────────────────────────────────────────────
const STATUS_4 = [
  { color: colors.green[300] },
  { color: colors.yellow[300] },
  { color: colors.orange[300] },
  { color: colors.red[300] },
];

const FULL_PALETTE_10 = [
  { color: colors.brand[300] },
  { color: colors.cerulean[300] },
  { color: colors.green[300] },
  { color: colors.yellow[300] },
  { color: colors.orange[300] },
  { color: colors.red[300] },
  { color: colors.pink[300] },
  { color: colors.eggplant[300] },
  { color: colors.purple[300] },
  { color: colors.neutral[300] },
];

// ─── Stories ────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => <FilterSwatchGroup label="Status" swatches={STATUS_4} />,
};

// ─── Without label ───────────────────────────────────────────────────────────
// `label` is optional — omit it to render bare swatches (no card wrapper,
// no label). With a label and the default `labelPosition="bottom"`, the
// cluster is wrapped in a card (bg + rounded corners + shadow + 4px
// padding). Mirrors the `ShowLabel` BOOLEAN property on the Figma
// FilterSwatchGroup ComponentSet.
export const WithoutLabel: Story = {
  render: () => <FilterSwatchGroup swatches={STATUS_4} />,
};

// ─── Label to the left of the swatches ──────────────────────────────────────
// Horizontal layout — label sits to the left, bare swatches to the right,
// vertically centered. No card wrapper in this orientation. Use for inline
// filter-bar patterns like "Filters: [tiles]".
export const LabelLeft: Story = {
  render: () => (
    <FilterSwatchGroup
      label="Filters:"
      labelPosition="left"
      swatches={STATUS_4}
    />
  ),
};

export const TwoRows: Story = {
  render: () => (
    <FilterSwatchGroup label="Priority palette" swatches={FULL_PALETTE_10} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-start gap-8">
      <FilterSwatchGroup label="Status (sm)" swatches={STATUS_4} size="sm" />
      <FilterSwatchGroup label="Status (md)" swatches={STATUS_4} size="md" />
    </div>
  ),
};

export const WithActiveAndFlagged: Story = {
  render: () => (
    <FilterSwatchGroup
      label="Active + priority demo"
      swatches={[
        { color: colors.brand[300] },
        { color: colors.green[300], selected: true },
        { color: colors.yellow[300], highPriority: true },
        // The combined case — must render both the active outline AND the flag overlay
        { color: colors.red[300], selected: true, highPriority: true },
        { color: colors.neutral[300] },
      ]}
    />
  ),
};

// Bounded matrix: single Size × single Layout (sm × OneRow).
// Shows the four combinations of active × highPriority on a single palette color.
export const AllStates: Story = {
  render: () => (
    <FilterSwatchGroup
      label="brand — states"
      swatches={[
        { color: colors.brand[300] },
        { color: colors.brand[300], selected: true },
        { color: colors.brand[300], highPriority: true },
        { color: colors.brand[300], selected: true, highPriority: true },
      ]}
    />
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma FilterSwatchGroup set (697:232) ──
// 4 variants: Size (sm/md) × LabelPosition (Bottom/Left). Layout axis has only
// `OneRow`. ShowLabel BOOLEAN defaults true on every variant — when false the
// label collapses (source: pass `label={undefined}`).
//
// Cells render the canonical FilterSwatchGroup with the 4 STATUS_4 swatches
// matching the Figma reference (1st selected, 2nd flagged, 3rd plain, 4th selected).

type FSG_Size = 'sm' | 'md';
type FSG_LabelPos = 'bottom' | 'left';

interface FSGCell extends MatrixCellSpec {
  size: FSG_Size;
  labelPosition: FSG_LabelPos;
}

const FSG_SAMPLE = [
  { color: colors.brand[300],  selected: true },
  { color: colors.green[300],  highPriority: true },
  { color: colors.yellow[300] },
  { color: colors.red[300],    selected: true },
];

const FSG_CELLS: FSGCell[] = [
  { variant: 'Size=sm, Layout=OneRow, LabelPosition=Bottom', size: 'sm', labelPosition: 'bottom', x: 40,  y: 40,   w: 84,  h: 49, expect: { headings: [] } },
  { variant: 'Size=md, Layout=OneRow, LabelPosition=Bottom', size: 'md', labelPosition: 'bottom', x: 40,  y: 115,  w: 100, h: 53, expect: { headings: [] } },
  { variant: 'Size=sm, Layout=OneRow, LabelPosition=Left',   size: 'sm', labelPosition: 'left',   x: 189, y: 44,   w: 150, h: 17, expect: { headings: [] } },
  { variant: 'Size=md, Layout=OneRow, LabelPosition=Left',   size: 'md', labelPosition: 'left',   x: 189, y: 119,  w: 166, h: 20, expect: { headings: [] } },
];

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '697:232', cells: FSG_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 400, height: 180 }}>
      {FSG_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <FilterSwatchGroup
            size={c.size}
            labelPosition={c.labelPosition}
            label="Category"
            swatches={FSG_SAMPLE}
          />
        </div>
      ))}
    </div>
  ),
};
