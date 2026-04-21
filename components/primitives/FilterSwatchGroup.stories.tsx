import type { Meta, StoryObj } from '@storybook/react';
import { FilterSwatchGroup } from './FilterSwatchGroup';
import { colors } from '../../tokens/colors';

const meta: Meta<typeof FilterSwatchGroup> = {
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
        { color: colors.green[300], active: true },
        { color: colors.yellow[300], highPriority: true },
        // The combined case — must render both the active outline AND the flag overlay
        { color: colors.red[300], active: true, highPriority: true },
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
        { color: colors.brand[300], active: true },
        { color: colors.brand[300], highPriority: true },
        { color: colors.brand[300], active: true, highPriority: true },
      ]}
    />
  ),
};
