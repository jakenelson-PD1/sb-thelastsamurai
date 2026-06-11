import { Fragment, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Radio> = {
  title: 'Primitives/Radio', component: Radio, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Radio>;

const opts = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState('a');
    return <Radio name="demo" options={opts} value={val} onChange={setVal} />;
  },
};

export const Disabled: Story = {
  render: () => (
    <Radio name="demo-disabled" options={opts} value="a" disabled />
  ),
};
export const DisabledSelected: Story = {
  render: () => (
    <Radio name="demo-disabled-selected" options={opts} value="b" disabled />
  ),
};
export const AllStates: Story = {
  render: () => {
    const [val, setVal] = useState('b');
    return (
      <div className="flex flex-col gap-6">
        <Radio name="all-states-interactive" options={opts} value={val} onChange={setVal} />
        <Radio name="all-states-disabled" options={opts} value="c" disabled />
      </div>
    );
  },
};

// ─── Matrix — pixel-pinned mirror of Figma Radio ComponentSet (491:12) ───────
// 8 variants laid out in a single row at y=20, w=107, h=21 each.
// X coordinates (per Figma):
//   Unchecked Default=20, Checked Default=151, Unchecked Disabled=282,
//   Unchecked Hover=413, Unchecked Focus=544, Checked Hover=675,
//   Checked Focus=806, Checked Disabled=937
// Hover/Focus states are forced via class overrides on the inner input.

type RD_Checked = 'Unchecked' | 'Checked';
type RD_State = 'Default' | 'Hover' | 'Disabled' | 'Focus';

interface RadioCell extends MatrixCellSpec {
  checked: RD_Checked;
  state: RD_State;
}

const RADIO_CELLS: RadioCell[] = [
  { variant: 'Checked=Unchecked, State=Default',  checked: 'Unchecked', state: 'Default',  x: 20,  y: 20, w: 107, h: 21, expect: { headings: [] } },
  { variant: 'Checked=Checked, State=Default',    checked: 'Checked',   state: 'Default',  x: 151, y: 20, w: 107, h: 21, expect: { headings: [] } },
  { variant: 'Checked=Unchecked, State=Disabled', checked: 'Unchecked', state: 'Disabled', x: 282, y: 20, w: 107, h: 21, expect: { headings: [] } },
  { variant: 'Checked=Unchecked, State=Hover',    checked: 'Unchecked', state: 'Hover',    x: 413, y: 20, w: 107, h: 21, expect: { headings: [] } },
  { variant: 'Checked=Unchecked, State=Focus',    checked: 'Unchecked', state: 'Focus',    x: 544, y: 20, w: 107, h: 21, expect: { headings: [] } },
  { variant: 'Checked=Checked, State=Hover',      checked: 'Checked',   state: 'Hover',    x: 675, y: 20, w: 107, h: 21, expect: { headings: [] } },
  { variant: 'Checked=Checked, State=Focus',      checked: 'Checked',   state: 'Focus',    x: 806, y: 20, w: 107, h: 21, expect: { headings: [] } },
  { variant: 'Checked=Checked, State=Disabled',   checked: 'Checked',   state: 'Disabled', x: 937, y: 20, w: 107, h: 21, expect: { headings: [] } },
];

function RadioMatrixCell({ cell, name }: { cell: RadioCell; name: string }) {
  const hoverOverride = '[&_input]:!border-muted';
  const focusOverride = '[&_input]:!ring-2 [&_input]:!ring-line-focus [&_input]:!ring-offset-1';
  const cls =
    cell.state === 'Hover' ? hoverOverride :
    cell.state === 'Focus' ? focusOverride :
    '';
  return (
    <div className={cls}>
      <Radio
        name={name}
        options={[{ label: 'Radio option', value: 'a' }]}
        value={cell.checked === 'Checked' ? 'a' : 'b'}
        disabled={cell.state === 'Disabled'}
      />
    </div>
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '491:12', cells: RADIO_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 1064, height: 61 }}>
      {RADIO_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <RadioMatrixCell cell={c} name={`matrix-${c.checked}-${c.state}`} />
        </div>
      ))}
    </div>
  ),
};
