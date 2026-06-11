import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input', component: Input, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story    = { args: { label: 'Email', placeholder: 'you@example.com' } };
export const WithError: Story  = { args: { label: 'Email', error: 'Invalid email address' } };
export const Disabled: Story   = { args: { label: 'Email', disabled: true, value: 'readonly' } };

// ─── Placeholder ──────────────────────────────────────────────────────────────
// Demonstrates a meaningful placeholder without a pre-filled value.
export const WithPlaceholder: Story = {
  args: { label: 'Search', placeholder: 'Search by name, email, or ID…' },
};

// ─── Read-only ────────────────────────────────────────────────────────────────
// readOnly is a standard HTML attribute passed through via ...props.
// The field is focusable and selectable but not editable.
export const ReadOnly: Story = {
  args: { label: 'Account ID', value: 'acct_1A2B3C4D5E', readOnly: true },
};

// ─── Label positions ─────────────────────────────────────────────────────────
// Input accepts `labelPosition='top' | 'left' | 'right' | 'none'`. `'none'`
// hides the label even when the `label` prop is set (matches Figma's
// `LabelPosition=none` variant). Omitting `label` has the same effect.
export const LabelPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Input label="Top (default)" labelPosition="top" placeholder="Stacked above" />
      <Input label="Left" labelPosition="left" placeholder="Inline left" />
      <Input label="Right" labelPosition="right" placeholder="Inline right" />
      <Input label="Hidden" labelPosition="none" placeholder="labelPosition='none' — label hidden" />
      <Input placeholder="No label (label prop omitted)" />
    </div>
  ),
};

// ─── Side-by-side size comparison ────────────────────────────────────────────
// Matches Button's xs / sm / md size scheme so fields and buttons sit flush at the same size.
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input size="xs" label="xs (h-7 / 28px)" placeholder="Extra small" />
      <Input size="sm" label="sm (h-8 / 32px)" placeholder="Small" />
      <Input size="md" label="md (h-9 / 36px)" placeholder="Medium — default" />
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Input ComponentSet (537:41) ──────
// 60 variants: Size (xs/sm/md) × State (Default/Hover/Focus/Error/Disabled) ×
// LabelPosition (top/left/right/none).
// Layout (Figma):
//   X by Size: xs=60, sm=464, md=868
//   Y by (LabelPosition, State):
//     top:   Default=60,   Hover=421,  Focus=782,  Error=1143, Disabled=1592
//     left:  Default=169,  Hover=530,  Focus=891,  Error=1274, Disabled=1701
//     right: Default=253,  Hover=614,  Focus=975,  Error=1380, Disabled=1785
//     none:  Default=337,  Hover=698,  Focus=1059, Error=1486, Disabled=1869
//   Widths: top/none = 280; left/right = 324
//   Heights vary by Size + State (Error rows are taller for the helper line):
//     Size xs: 28 / 53 (top non-error) / 50 (none Error) / 75 (top Error) etc.

type IN_Size = 'xs' | 'sm' | 'md';
type IN_State = 'Default' | 'Hover' | 'Focus' | 'Error' | 'Disabled';
type IN_LP = 'top' | 'left' | 'right' | 'none';

interface InputCell extends MatrixCellSpec {
  size: IN_Size;
  state: IN_State;
  labelPosition: IN_LP;
}

const SIZE_X: Record<IN_Size, number> = { xs: 60, sm: 464, md: 868 };
const LP_STATE_Y: Record<IN_LP, Record<IN_State, number>> = {
  top:   { Default: 60,  Hover: 421, Focus: 782,  Error: 1143, Disabled: 1592 },
  left:  { Default: 169, Hover: 530, Focus: 891,  Error: 1274, Disabled: 1701 },
  right: { Default: 253, Hover: 614, Focus: 975,  Error: 1380, Disabled: 1785 },
  none:  { Default: 337, Hover: 698, Focus: 1059, Error: 1486, Disabled: 1869 },
};
// Width: stacked variants (top/none) = 280; inline variants (left/right) = 324.
const W_BY_LP: Record<IN_LP, number> = { top: 280, left: 324, right: 324, none: 280 };

// Per-Size base heights. Error variants get +22 (top + helper line); none + Error
// is taller by helper only since no label above.
const FIELD_H: Record<IN_Size, number> = { xs: 28, sm: 32, md: 36 };

function heightFor(size: IN_Size, state: IN_State, lp: IN_LP): number {
  const field = FIELD_H[size];
  const isError = state === 'Error';
  const labelExtra = lp === 'top' ? 25 : 0; // label (17) + gap (4) + 4px buffer for Type Scale line
  const errorExtra = isError ? 22 : 0;       // helper text line (17) + gap (4) + buffer (1)
  return field + labelExtra + errorExtra;
}

const IN_SIZES: IN_Size[] = ['xs', 'sm', 'md'];
const IN_STATES: IN_State[] = ['Default', 'Hover', 'Focus', 'Error', 'Disabled'];
const IN_LPS: IN_LP[] = ['top', 'left', 'right', 'none'];

const INPUT_CELLS: InputCell[] = IN_SIZES.flatMap((size) =>
  IN_STATES.flatMap((state) =>
    IN_LPS.map((lp) => ({
      variant: `Size=${size}, State=${state}, LabelPosition=${lp}`,
      size, state, labelPosition: lp,
      x: SIZE_X[size],
      y: LP_STATE_Y[lp][state],
      w: W_BY_LP[lp],
      h: heightFor(size, state, lp),
      expect: { headings: [] },
    })),
  ),
);

// Hover/Focus visual overrides so every state renders at rest.
const HOVER_CLASS = '!bg-surface';
const FOCUS_CLASS = '!border-line-focus !ring-2 !ring-line-focus/20';

function InputMatrixCell({ cell }: { cell: InputCell }) {
  const cls =
    cell.state === 'Hover' ? HOVER_CLASS :
    cell.state === 'Focus' ? FOCUS_CLASS :
    '';
  return (
    <Input
      size={cell.size}
      label="Label"
      labelPosition={cell.labelPosition}
      placeholder="Placeholder"
      error={cell.state === 'Error' ? 'This field is required' : undefined}
      disabled={cell.state === 'Disabled'}
      className={cls}
    />
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '537:41', cells: INPUT_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1250, height: 1950 }}>
      {INPUT_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <InputMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
