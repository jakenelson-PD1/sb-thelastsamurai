import { Fragment, useEffect, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox', component: Checkbox, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked:     Story = { args: { label: 'Accept terms' } };
export const Checked:       Story = { args: { label: 'Accept terms', defaultChecked: true } };
export const Disabled:      Story = { args: { label: 'Disabled', disabled: true } };
export const DisabledChecked: Story = { args: { label: 'Disabled checked', disabled: true, defaultChecked: true } };
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const Hover: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="[&_input]:border-muted [&_input]:bg-surface">
        <Checkbox label="Hover unchecked" />
      </div>
      <div className="[&_input]:border-action-primary-hover [&_input]:bg-action-primary-hover">
        <Checkbox label="Hover checked" defaultChecked />
      </div>
    </div>
  ),
};

// ─── No label ────────────────────────────────────────────────────────────────
// Omit the `label` prop to render just the box. Used inside rows where the row
// itself provides the label (e.g. multi-select option rows, ActionMenu
// checkbox items, bulk-select row checkboxes in tables).
export const NoLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-label-md text-muted">Small (16px)</span>
        <Checkbox label="Small checkbox" size="sm" />
        <Checkbox label="Small checked" size="sm" defaultChecked />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-label-md text-muted">Large (20px)</span>
        <Checkbox label="Large checkbox" size="lg" />
        <Checkbox label="Large checked" size="lg" defaultChecked />
      </div>
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Checkbox ComponentSet (490:30) ────
// 48 variants on 4 axes: Size × Checked × State × Show Label
// Layout grid:
//   Y rows (Size + Show Label): sm Without=24, sm With=80, lg Without=136, lg With=192
//   X cols (Checked group × State): each Checked group spans 4 State cols at
//   stride 160px; groups are spaced 656px apart.
//     Unchecked group base x=24 (Default), 184 (Hover), 344 (Focus), 504 (Disabled)
//     Checked   group base x=680, 840, 1000, 1160
//     Indeterm. group base x=1336, 1496, 1656, 1816

type CB_State = 'Default' | 'Hover' | 'Focus' | 'Disabled';
type CB_Checked = 'Unchecked' | 'Checked' | 'Indeterminate';
type CB_Size = 'sm' | 'lg';

interface CheckboxCell extends MatrixCellSpec {
  size: CB_Size;
  checked: CB_Checked;
  state: CB_State;
  withLabel: boolean;
}

const STATE_X_OFFSET: Record<CB_State, number> = { Default: 0, Hover: 160, Focus: 320, Disabled: 480 };
const CHECKED_BASE_X: Record<CB_Checked, number> = { Unchecked: 24, Checked: 680, Indeterminate: 1336 };
const ROW_LAYOUT: Record<`${CB_Size}-${'With' | 'Without'}`, { y: number; w: number; h: number }> = {
  'sm-Without': { y: 24,  w: 16,  h: 16 },
  'sm-With':    { y: 80,  w: 125, h: 21 },
  'lg-Without': { y: 136, w: 20,  h: 20 },
  'lg-With':    { y: 192, w: 129, h: 21 },
};

const CHECKBOX_CELLS: CheckboxCell[] = (['sm', 'lg'] as CB_Size[]).flatMap((size) =>
  ([true, false] as const).flatMap((withLabel) => {
    const row = ROW_LAYOUT[`${size}-${withLabel ? 'With' : 'Without'}`];
    return (['Unchecked', 'Checked', 'Indeterminate'] as CB_Checked[]).flatMap((checked) =>
      (['Default', 'Hover', 'Focus', 'Disabled'] as CB_State[]).map((state) => ({
        variant: `Size=${size}, Checked=${checked}, State=${state}, Show Label=${withLabel ? 'With' : 'Without'}`,
        x: CHECKED_BASE_X[checked] + STATE_X_OFFSET[state],
        y: row.y,
        w: row.w,
        h: row.h,
        size, checked, state, withLabel,
        expect: { headings: [] },
      })),
    );
  }),
);

// Wrapper that sets `indeterminate` on the input via DOM (not a React prop).
function CheckboxCellRender({ cell }: { cell: CheckboxCell }) {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const input = wrap.current?.querySelector('input');
    if (input) input.indeterminate = cell.checked === 'Indeterminate';
  }, [cell.checked]);
  return (
    <div ref={wrap}>
      <Checkbox
        size={cell.size}
        label={cell.withLabel ? 'Label' : undefined}
        defaultChecked={cell.checked === 'Checked'}
        disabled={cell.state === 'Disabled'}
        forceHover={cell.state === 'Hover'}
        forceFocus={cell.state === 'Focus'}
      />
    </div>
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '76:23', cells: CHECKBOX_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1977, height: 238 }}>
      {CHECKBOX_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <CheckboxCellRender cell={c} />
        </div>
      ))}
    </div>
  ),
};
