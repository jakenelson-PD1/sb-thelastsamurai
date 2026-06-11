import { Fragment, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { ActionMenu } from './ActionMenu';
import { Button } from '../primitives/Button';
import { ChevronDownIcon } from '../primitives/icons/ChevronDownIcon';
import { Edit01Icon } from '../primitives/icons/Edit01Icon';
import { Copy01Icon } from '../primitives/icons/Copy01Icon';
import { Share01Icon } from '../primitives/icons/Share01Icon';
import { Trash01Icon } from '../primitives/icons/Trash01Icon';
import { MoveIcon } from '../primitives/icons/MoveIcon';
import { Checkbox } from '../forms/Checkbox';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';
import { clsx } from 'clsx';

const meta: Meta<typeof Dropdown> = {
  title: 'Primitives/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-56"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

// ─── Default ─────────────────────────────────────────────────────────────────
// Chevron rotates 180° when the dropdown is open — always wire `open` state
// to the trigger icon so the affordance is clear.

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={
              <ChevronDownIcon
                size="sm"
                className={clsx('transition-transform duration-200', open && 'rotate-180')}
              />
            }
          >
            Open dropdown
          </Button>
        }
      >
        <ActionMenu
          groups={[{
            items: [
              { icon: <Edit01Icon size="sm" />,  label: 'Edit',      shortcut: '⌘E' },
              { icon: <Copy01Icon size="sm" />,  label: 'Duplicate' },
              { icon: <Share01Icon size="sm" />, label: 'Share',     shortcut: '⌘S' },
            ],
          },
          {
            items: [
              { icon: <Trash01Icon size="sm" />, label: 'Delete', shortcut: '⌫', danger: true },
            ],
          }]}
        />
      </Dropdown>
    );
  },
};

// ─── Label left ──────────────────────────────────────────────────────────────

export const LabelLeft: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        label="Sort:"
        labelPosition="left"
        width="auto"
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={
              <ChevronDownIcon
                size="sm"
                className={clsx('transition-transform duration-200', open && 'rotate-180')}
              />
            }
          >
            Due date
          </Button>
        }
      >
        <ActionMenu
          groups={[{
            items: [
              { label: 'Due date',      selected: true, onClick: () => {} },
              { label: 'Priority',      onClick: () => {} },
              { label: 'Created',       onClick: () => {} },
              { label: 'Alphabetical',  onClick: () => {} },
            ],
          }]}
        />
      </Dropdown>
    );
  },
};

// ─── Label top ───────────────────────────────────────────────────────────────

export const LabelTop: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        label="Sort by"
        labelPosition="top"
        trigger={
          <Button
            variant="secondary"
            size="sm"
            endIcon={
              <ChevronDownIcon
                size="sm"
                className={clsx('transition-transform duration-200', open && 'rotate-180')}
              />
            }
          >
            Due date
          </Button>
        }
      >
        <ActionMenu
          groups={[{
            items: [
              { label: 'Due date',      selected: true, onClick: () => {} },
              { label: 'Priority',      onClick: () => {} },
              { label: 'Created',       onClick: () => {} },
              { label: 'Alphabetical',  onClick: () => {} },
            ],
          }]}
        />
      </Dropdown>
    );
  },
};

// ─── Label positions ─────────────────────────────────────────────────────────
// Dropdown accepts `labelPosition='top' | 'left' | 'right' | 'none'`. `'none'`
// hides the label even when the `label` prop is set (matches Figma's
// `LabelPosition=none` variant). Omitting `label` has the same effect.
export const LabelPositions: Story = {
  render: () => {
    const SortTrigger = (
      <Button variant="secondary" size="sm" endIcon={<ChevronDownIcon size="sm" />}>Due date</Button>
    );
    const menu = (
      <ActionMenu groups={[{ items: [{ label: 'Due date', selected: true }, { label: 'Priority' }] }]} />
    );
    return (
      <div className="flex flex-col gap-6 max-w-md">
        <Dropdown label="Top (default)" labelPosition="top"   trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown label="Left"           labelPosition="left"  trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown label="Right"          labelPosition="right" trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown label="Hidden"         labelPosition="none"  trigger={SortTrigger}>{menu}</Dropdown>
        <Dropdown trigger={SortTrigger}>{menu}</Dropdown>
      </div>
    );
  },
};

// ─── Matrix — pixel-pinned mirror of Figma Dropdown ComponentSet (580:874) ───
// 24 variants: Size (xs/sm/md) × State (Closed/Open) × LabelPosition (top/left/right/none).
// Closed variants pin the trigger row only; Open variants include the menu
// hanging below. LabelPosition controls whether the label is stacked above,
// inline left, inline right, or hidden.

type DD_Size = 'xs' | 'sm' | 'md';
type DD_State = 'Closed' | 'Open';
type DD_LP = 'top' | 'left' | 'right' | 'none';

interface DDCell extends MatrixCellSpec {
  size: DD_Size;
  state: DD_State;
  labelPosition: DD_LP;
}

const DROPDOWN_CELLS: DDCell[] = [
  // ── LabelPosition=top ─────────────────────────────────────────────────────
  { variant: 'Size=xs, State=Closed, LabelPosition=top', size: 'xs', state: 'Closed', labelPosition: 'top', x: 60,  y: 60,   w: 154, h: 53,  expect: { headings: [] } },
  { variant: 'Size=xs, State=Open,   LabelPosition=top', size: 'xs', state: 'Open',   labelPosition: 'top', x: 60,  y: 469,  w: 154, h: 443, expect: { headings: [] } },
  { variant: 'Size=sm, State=Closed, LabelPosition=top', size: 'sm', state: 'Closed', labelPosition: 'top', x: 338, y: 60,   w: 154, h: 57,  expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   LabelPosition=top', size: 'sm', state: 'Open',   labelPosition: 'top', x: 338, y: 469,  w: 154, h: 471, expect: { headings: [] } },
  { variant: 'Size=md, State=Closed, LabelPosition=top', size: 'md', state: 'Closed', labelPosition: 'top', x: 616, y: 60,   w: 162, h: 61,  expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   LabelPosition=top', size: 'md', state: 'Open',   labelPosition: 'top', x: 616, y: 469,  w: 162, h: 499, expect: { headings: [] } },
  // ── LabelPosition=left ────────────────────────────────────────────────────
  { variant: 'Size=xs, State=Closed, LabelPosition=left', size: 'xs', state: 'Closed', labelPosition: 'left', x: 60,  y: 181,  w: 198, h: 28,  expect: { headings: [] } },
  { variant: 'Size=xs, State=Open,   LabelPosition=left', size: 'xs', state: 'Open',   labelPosition: 'left', x: 60,  y: 1007, w: 198, h: 418, expect: { headings: [] } },
  { variant: 'Size=sm, State=Closed, LabelPosition=left', size: 'sm', state: 'Closed', labelPosition: 'left', x: 338, y: 181,  w: 198, h: 32,  expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   LabelPosition=left', size: 'sm', state: 'Open',   labelPosition: 'left', x: 338, y: 1007, w: 198, h: 446, expect: { headings: [] } },
  { variant: 'Size=md, State=Closed, LabelPosition=left', size: 'md', state: 'Closed', labelPosition: 'left', x: 616, y: 181,  w: 206, h: 36,  expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   LabelPosition=left', size: 'md', state: 'Open',   labelPosition: 'left', x: 616, y: 1007, w: 206, h: 474, expect: { headings: [] } },
  // ── LabelPosition=right ───────────────────────────────────────────────────
  { variant: 'Size=xs, State=Closed, LabelPosition=right', size: 'xs', state: 'Closed', labelPosition: 'right', x: 60,  y: 277,  w: 198, h: 28,  expect: { headings: [] } },
  { variant: 'Size=xs, State=Open,   LabelPosition=right', size: 'xs', state: 'Open',   labelPosition: 'right', x: 60,  y: 1504, w: 198, h: 418, expect: { headings: [] } },
  { variant: 'Size=sm, State=Closed, LabelPosition=right', size: 'sm', state: 'Closed', labelPosition: 'right', x: 338, y: 277,  w: 198, h: 32,  expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   LabelPosition=right', size: 'sm', state: 'Open',   labelPosition: 'right', x: 338, y: 1504, w: 198, h: 446, expect: { headings: [] } },
  { variant: 'Size=md, State=Closed, LabelPosition=right', size: 'md', state: 'Closed', labelPosition: 'right', x: 616, y: 277,  w: 206, h: 36,  expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   LabelPosition=right', size: 'md', state: 'Open',   labelPosition: 'right', x: 616, y: 1504, w: 206, h: 474, expect: { headings: [] } },
  // ── LabelPosition=none ────────────────────────────────────────────────────
  { variant: 'Size=xs, State=Closed, LabelPosition=none', size: 'xs', state: 'Closed', labelPosition: 'none', x: 60,  y: 373,  w: 154, h: 28,  expect: { headings: [] } },
  { variant: 'Size=xs, State=Open,   LabelPosition=none', size: 'xs', state: 'Open',   labelPosition: 'none', x: 60,  y: 2017, w: 154, h: 418, expect: { headings: [] } },
  { variant: 'Size=sm, State=Closed, LabelPosition=none', size: 'sm', state: 'Closed', labelPosition: 'none', x: 338, y: 373,  w: 154, h: 32,  expect: { headings: [] } },
  { variant: 'Size=sm, State=Open,   LabelPosition=none', size: 'sm', state: 'Open',   labelPosition: 'none', x: 338, y: 2017, w: 154, h: 446, expect: { headings: [] } },
  { variant: 'Size=md, State=Closed, LabelPosition=none', size: 'md', state: 'Closed', labelPosition: 'none', x: 616, y: 373,  w: 162, h: 36,  expect: { headings: [] } },
  { variant: 'Size=md, State=Open,   LabelPosition=none', size: 'md', state: 'Open',   labelPosition: 'none', x: 616, y: 2017, w: 162, h: 474, expect: { headings: [] } },
];

// Menu content mirrors Figma exactly: 3 groups separated by dividers.
// Group 1: Rename / Duplicate / Move to... (submenu)
// Group 2: Show preview (checkbox unchecked) / Auto-save (checkbox checked, selected)
// Group 3: Delete (danger)
// Every item carries the "user@example.com" description shown in Figma.
const DD_MENU_GROUPS = [
  {
    items: [
      { icon: <Edit01Icon size="sm" />, label: 'Rename',     description: 'user@example.com' },
      { icon: <Copy01Icon size="sm" />, label: 'Duplicate',  description: 'user@example.com' },
      {
        icon: <MoveIcon size="sm" />,
        label: 'Move to...',
        description: 'user@example.com',
        children: [{ items: [{ label: 'Folder A' }, { label: 'Folder B' }] }],
      },
    ],
  },
  {
    items: [
      { icon: <Checkbox size="sm" />,                      label: 'Show preview', description: 'user@example.com' },
      { icon: <Checkbox size="sm" defaultChecked />, selected: true,
                                                            label: 'Auto-save',    description: 'user@example.com' },
    ],
  },
  {
    items: [
      { icon: <Trash01Icon size="sm" />, label: 'Delete', description: 'user@example.com', danger: true },
    ],
  },
];

function DropdownCell({ cell }: { cell: DDCell }) {
  const open = cell.state === 'Open';
  return (
    <Dropdown
      open={open}
      onOpenChange={() => {}}
      label="Label"
      labelPosition={cell.labelPosition}
      trigger={
        <Button
          variant="secondary"
          size={cell.size}
          endIcon={<ChevronDownIcon size="sm" className={clsx('transition-transform', open && 'rotate-180')} />}
        >
          Open dropdown
        </Button>
      }
    >
      <ActionMenu groups={DD_MENU_GROUPS} />
    </Dropdown>
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '580:874', cells: DROPDOWN_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 850, height: 2500 }}>
      {DROPDOWN_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <DropdownCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
