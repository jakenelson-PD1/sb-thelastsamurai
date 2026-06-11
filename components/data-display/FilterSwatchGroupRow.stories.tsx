import type { Meta, StoryObj } from '@storybook/react';
import { FilterSwatchGroup } from '../primitives/FilterSwatchGroup';
import { MatrixVerify } from '../_decorators/MatrixVerify';

/**
 * FilterSwatchGroupRow — composition pattern from Figma page `1599:80`.
 *
 * This is NOT a separate source component. It's the canonical molecule pattern
 * for rendering a horizontal row of `FilterSwatchGroup` instances — composed
 * directly using the canonical FilterSwatchGroup primitive (no parallel
 * implementation), and every nested swatch uses the canonical FilterSwatch
 * primitive via the same composition.
 *
 * Each group's swatch composition (count, colors, state, highPriority) is
 * captured byte-for-byte from the Figma instances on page 1599:80.
 */
const meta: Meta = {
  title: 'RLM Layout/FilterSwatchGroupRow',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

// Figma's `Color` axis values map to the LSDS tile tokens
const TILE: Record<string, string> = {
  fulfilled:    'var(--color-swatch-fulfilled)',
  outstanding:  'var(--color-swatch-outstanding)',
  overdue:      'var(--color-swatch-overdue)',
  'not-started':'var(--color-swatch-not-started)',
};

type SwatchSpec = { color: keyof typeof TILE; selected?: boolean; highPriority?: boolean };

// Per-instance Figma layout from page 1599:80 — labels + widths + exact swatches
const ROW_GROUPS: Array<{ label: string; x: number; w: number; swatches: SwatchSpec[] }> = [
  {
    label: 'Status', x: 0, w: 124,
    swatches: [
      { color: 'fulfilled' },
      { color: 'outstanding', highPriority: true },
      { color: 'outstanding', selected: true },
      { color: 'fulfilled' },
      { color: 'overdue' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Financial Reporting', x: 140, w: 224,
    swatches: [
      { color: 'fulfilled', highPriority: true },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started', highPriority: true },
      { color: 'fulfilled' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started', highPriority: true },
      { color: 'not-started', highPriority: true },
      { color: 'fulfilled', highPriority: true },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Cash', x: 380, w: 144,
    swatches: [
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'overdue' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'A/R & Sales', x: 540, w: 184,
    swatches: [
      { color: 'not-started' },
      { color: 'outstanding' },
      { color: 'overdue' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Inventory', x: 740, w: 164,
    swatches: [
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'fulfilled' },
      { color: 'fulfilled' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Fixed Assets', x: 920, w: 124,
    swatches: [
      { color: 'not-started' },
      { color: 'fulfilled' },
      { color: 'fulfilled' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Accounts Payable', x: 1060, w: 124,
    swatches: [
      { color: 'overdue' },
      { color: 'outstanding' },
      { color: 'outstanding' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Equity & Long-Term Debt', x: 1200, w: 146,
    swatches: [
      { color: 'not-started' },
      { color: 'outstanding' },
      { color: 'fulfilled' },
      { color: 'not-started' },
      { color: 'overdue', highPriority: true },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Income Taxes', x: 1362, w: 84,
    swatches: [
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started', highPriority: true },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Revenue', x: 1462, w: 144,
    swatches: [
      { color: 'fulfilled' },
      { color: 'outstanding' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'overdue' },
      { color: 'not-started' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Payroll', x: 1622, w: 124,
    swatches: [
      { color: 'fulfilled' },
      { color: 'not-started' },
      { color: 'outstanding' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'overdue', highPriority: true },
    ],
  },
  {
    label: 'IT & Systems', x: 1762, w: 104,
    swatches: [
      { color: 'fulfilled' },
      { color: 'outstanding' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Legal', x: 1882, w: 104,
    swatches: [
      { color: 'not-started', highPriority: true },
      { color: 'overdue', highPriority: true },
      { color: 'not-started' },
      { color: 'fulfilled' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Prepaid', x: 2002, w: 84,
    swatches: [
      { color: 'fulfilled' },
      { color: 'not-started' },
      { color: 'outstanding' },
      { color: 'not-started' },
    ],
  },
  {
    label: 'Accrued Exp.', x: 2102, w: 104,
    swatches: [
      { color: 'outstanding' },
      { color: 'not-started' },
      { color: 'not-started' },
      { color: 'overdue', highPriority: true },
      { color: 'fulfilled' },
    ],
  },
];

// ─── Matrix — 1:1 mirror of Figma FilterSwatchGroupRow page (1599:80) ────────
// Every group's swatches (count, color, selected, highPriority) match Figma byte-for-byte.
// Swatches are rendered via the canonical FilterSwatch (through FilterSwatchGroup) —
// no parallel implementation, no mocks.
export const Matrix: Story = {
  parameters: {
    layout: 'fullscreen',
    matrixSpec: {
      figmaPageId: '1599:80',
      cells: ROW_GROUPS.map((g) => ({
        variant: `${g.label} (${g.swatches.length} swatches)`,
        x: g.x,
        y: 0,
        w: g.w,
        h: 49,
        expect: {
          // FilterSwatchGroup renders each swatch as a <button aria-pressed=...>
          // so swatchCount matches the configured swatch array length.
          buttonLabels: [],
          swatchCount: g.swatches.length,
          headings: [],
        },
      })),
    },
  },
  decorators: [MatrixVerify, (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>],
  render: () => (
    <div className="relative" style={{ width: 2206, height: 49 }}>
      {ROW_GROUPS.map((g) => (
        <div
          key={g.label}
          className="absolute"
          style={{ left: g.x, top: 0, width: g.w }}
        >
          <FilterSwatchGroup
            label={g.label}
            size="sm"
            swatches={g.swatches.map((s) => ({
              color: TILE[s.color],
              selected: s.selected,
              highPriority: s.highPriority,
            }))}
          />
        </div>
      ))}
    </div>
  ),
};
