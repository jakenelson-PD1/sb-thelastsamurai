import { Fragment, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch', component: Switch, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = {
  render: () => { const [v, setV] = useState(false); return <Switch checked={v} onChange={setV} label="Enable feature" />; },
};
export const On: Story = {
  render: () => { const [v, setV] = useState(true); return <Switch checked={v} onChange={setV} label="Enable feature" />; },
};
export const DisabledOff: Story = {
  render: () => <Switch checked={false} onChange={() => {}} label="Enable feature" disabled />,
};
export const DisabledOn: Story = {
  render: () => <Switch checked={true} onChange={() => {}} label="Enable feature" disabled />,
};
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Switch checked={true} onChange={() => {}} label="On" />
      <Switch checked={false} onChange={() => {}} label="Off" />
      <Switch checked={true} onChange={() => {}} label="Disabled On" disabled />
      <Switch checked={false} onChange={() => {}} label="Disabled Off" disabled />
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Switch ComponentSet (492:18) ─────
// 12 variants: 2 Size (md/sm) × 2 Checked (Off/On) × 3 State (Default/Focus/Disabled).
// Layout (Figma):
//   X by State: Default=20, Focus=170, Disabled=320
//   Y by (Size, Checked):
//     md-Off=20, md-On=60, sm-Off=100, sm-On=140
//   md cells 126×24; sm cells 110×20.

type SW_Size = 'md' | 'sm';
type SW_Checked = 'Off' | 'On';
type SW_State = 'Default' | 'Disabled' | 'Focus';

interface SwitchCell extends MatrixCellSpec {
  size: SW_Size;
  checked: SW_Checked;
  state: SW_State;
}

const STATE_X: Record<SW_State, number> = { Default: 20, Focus: 170, Disabled: 320 };
const ROW_Y: Record<`${SW_Size}-${SW_Checked}`, number> = {
  'md-Off': 20, 'md-On': 60, 'sm-Off': 100, 'sm-On': 140,
};
// md row: track 44 + gap 8 + "Switch label" text ~74 = 126
// sm row: track 36 + gap 8 + "Switch label" text ~74 = 118
const SIZE_DIM: Record<SW_Size, { w: number; h: number }> = {
  md: { w: 126, h: 24 },
  sm: { w: 118, h: 20 },
};

const SWITCH_CELLS: SwitchCell[] = (['md','sm'] as SW_Size[]).flatMap((size) =>
  (['Off','On'] as SW_Checked[]).flatMap((checked) =>
    (['Default','Focus','Disabled'] as SW_State[]).map((state) => ({
      variant: `Size=${size}, Checked=${checked}, State=${state}`,
      size, checked, state,
      x: STATE_X[state],
      y: ROW_Y[`${size}-${checked}`],
      w: SIZE_DIM[size].w,
      h: SIZE_DIM[size].h,
      expect: { headings: [] },
    })),
  ),
);

function SwitchMatrixCell({ cell }: { cell: SwitchCell }) {
  const focusOverride = '[&_button]:!ring-2 [&_button]:!ring-line-focus/30';
  return (
    <div className={cell.state === 'Focus' ? focusOverride : undefined}>
      <Switch
        size={cell.size}
        checked={cell.checked === 'On'}
        onChange={() => {}}
        label="Switch label"
        disabled={cell.state === 'Disabled'}
      />
    </div>
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '492:18', cells: SWITCH_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 500, height: 180 }}>
      {SWITCH_CELLS.map((c) => (
        <div key={c.variant} className="absolute" data-matrix-cell style={{ left: c.x, top: c.y, width: c.w, height: c.h }}>
          <SwitchMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
