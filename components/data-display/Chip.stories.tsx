import { Fragment, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { Icon } from '../primitives/Icon';
import { Tag01Icon } from '../primitives/icons/Tag01Icon';
import { XCloseIcon } from '../primitives/icons/XCloseIcon';
import { MatrixVerify, type MatrixCellSpec } from '../_decorators/MatrixVerify';

const meta: Meta<typeof Chip> = {
  title: 'Primitives/FilterChip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { label: 'Chip label' },
};

export const IconLeft: Story = {
  render: () => (
    <Chip label="Chip label" iconLeft={<Icon icon={Tag01Icon} size={12} />} />
  ),
};

export const IconRight: Story = {
  render: () => (
    <Chip label="Chip label" iconRight={<Icon icon={Tag01Icon} size={12} />} />
  ),
};

export const IconBoth: Story = {
  render: () => (
    <Chip
      label="Chip label"
      iconLeft={<Icon icon={Tag01Icon} size={12} />}
      iconRight={<Icon icon={Tag01Icon} size={12} />}
    />
  ),
};

export const IconOnly: Story = {
  render: () => (
    <Chip iconLeft={<Icon icon={Tag01Icon} size={12} />} />
  ),
};

export const Removable: Story = {
  render: () => (
    <Chip
      label="Removable"
      iconRight={
        <button
          type="button"
          aria-label="Remove"
          onClick={() => console.log('removed')}
          className="-mr-1 inline-flex h-4 w-4 items-center justify-center rounded-pill text-secondary hover:bg-recessed hover:text-primary"
        >
          <XCloseIcon size={12} aria-hidden="true" />
        </button>
      }
    />
  ),
};

export const SingleSelected: Story = {
  render: () => <Chip label="Selected" selected="single" />,
};

export const MultiSelected: Story = {
  render: () => <Chip label="Multi selected" selected="multi" />,
};

export const Error: Story = {
  render: () => <Chip label="Error chip" error />,
};

export const Disabled: Story = {
  render: () => <Chip label="Disabled" disabled />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Chip label="Small" size="sm" />
      <Chip label="Regular" size="md" />
    </div>
  ),
};

export const InteractiveMultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set(['a']));
    const items = ['a', 'b', 'c', 'd'];
    const toggle = (key: string) =>
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(key) ? next.delete(key) : next.add(key);
        return next;
      });
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((k) => (
          <Chip
            key={k}
            label={`Item ${k.toUpperCase()}`}
            selected={selected.has(k) ? 'multi' : 'none'}
            onClick={() => toggle(k)}
          />
        ))}
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Chip label="Default" />
        <Chip label="Selected" selected="single" />
        <Chip label="Multi" selected="multi" />
        <Chip label="Error" error />
        <Chip label="Disabled" disabled />
      </div>
      <div className="flex items-center gap-3">
        <Chip label="Icon left"  iconLeft={<Icon icon={Tag01Icon} size={12} />} />
        <Chip label="Icon right" iconRight={<Icon icon={Tag01Icon} size={12} />} />
        <Chip label="Both" iconLeft={<Icon icon={Tag01Icon} size={12} />} iconRight={<Icon icon={Tag01Icon} size={12} />} />
        <Chip iconLeft={<Icon icon={Tag01Icon} size={12} />} />
      </div>
    </div>
  ),
};

// ─── Matrix — pixel-pinned mirror of Figma Chip ComponentSet (1142:410) ─────
// 180 variants on 5 axes:
//   Size (Regular/Small) × Interaction (Default/Focused/Hover) ×
//   Actions (None/Single selected/Multi selected) × Icon (Left/Right/Both/Only/None) ×
//   State (Default/Error)
//
// Figma layout grid:
//   Y rows (Size × Interaction): Regular D=0, F=60, H=120; Small D=180, F=240, H=300
//   X cols (Actions × Icon × State):
//     Actions base: None=0, Single selected=2000, Multi selected=4000
//     Icon offset:  Left=0, Right=400, Both=800, Only=1200, None=1600
//     State offset: Default=0, Error=200
//   Heights: Regular=28, Small=24
//   Widths (Size × Action × Icon):
//     Regular non-Multi: Left/Right=101, Both=125, Only=36, None=81
//     Regular Multi:     Left/Right=97,  Both=121, Only=32, None=77
//     Small (any):       Left/Right=97,  Both=121, Only=32, None=73

type CH_Size = 'Regular' | 'Small';
type CH_Interaction = 'Default' | 'Focused' | 'Hover';
type CH_Action = 'None' | 'Single selected' | 'Multi selected';
type CH_Icon = 'Left' | 'Right' | 'Both' | 'Only' | 'None';
type CH_State = 'Default' | 'Error';

interface ChipCell extends MatrixCellSpec {
  size: CH_Size;
  interaction: CH_Interaction;
  action: CH_Action;
  icon: CH_Icon;
  state: CH_State;
}

const ACTION_X: Record<CH_Action, number> = { 'None': 0, 'Single selected': 2000, 'Multi selected': 4000 };
const ICON_X:   Record<CH_Icon,   number> = { Left: 0, Right: 400, Both: 800, Only: 1200, None: 1600 };
const STATE_X:  Record<CH_State,  number> = { Default: 0, Error: 200 };
const SIZE_Y:   Record<CH_Size,   number> = { Regular: 0, Small: 180 };
const INT_Y:    Record<CH_Interaction, number> = { Default: 0, Focused: 60, Hover: 120 };

function widthFor(size: CH_Size, action: CH_Action, icon: CH_Icon): number {
  if (size === 'Regular' && action !== 'Multi selected') {
    return { Left: 101, Right: 101, Both: 125, Only: 36, None: 81 }[icon];
  }
  if (size === 'Regular' && action === 'Multi selected') {
    return { Left: 97, Right: 97, Both: 121, Only: 32, None: 77 }[icon];
  }
  return { Left: 97, Right: 97, Both: 121, Only: 32, None: 73 }[icon];
}

const CH_SIZES: CH_Size[] = ['Regular', 'Small'];
const CH_INTERACTIONS: CH_Interaction[] = ['Default', 'Focused', 'Hover'];
const CH_ACTIONS: CH_Action[] = ['None', 'Single selected', 'Multi selected'];
const CH_ICONS: CH_Icon[] = ['Left', 'Right', 'Both', 'Only', 'None'];
const CH_STATES: CH_State[] = ['Default', 'Error'];

const CHIP_CELLS: ChipCell[] = CH_SIZES.flatMap((size) =>
  CH_INTERACTIONS.flatMap((interaction) =>
    CH_ACTIONS.flatMap((action) =>
      CH_ICONS.flatMap((icon) =>
        CH_STATES.map((state) => ({
          variant: `Size=${size}, Interaction=${interaction}, Actions=${action}, Icon=${icon}, State=${state}`,
          size, interaction, action, icon, state,
          x: ACTION_X[action] + ICON_X[icon] + STATE_X[state],
          y: SIZE_Y[size] + INT_Y[interaction],
          w: widthFor(size, action, icon),
          h: size === 'Regular' ? 28 : 24,
          expect: { headings: [] },
        })),
      ),
    ),
  ),
);

const ACTION_TO_SELECTED: Record<CH_Action, 'none' | 'single' | 'multi'> = {
  'None': 'none', 'Single selected': 'single', 'Multi selected': 'multi',
};
const HOVER_CLASS = '!bg-recessed';
const FOCUS_CLASS = '!ring-2 !ring-line-focus !outline-none';
const tagIcon = <Icon icon={Tag01Icon} size={12} />;

function ChipMatrixCell({ cell }: { cell: ChipCell }) {
  const cls =
    cell.interaction === 'Hover' && cell.action === 'None' && cell.state === 'Default'
      ? HOVER_CLASS
      : cell.interaction === 'Focused'
        ? FOCUS_CLASS
        : '';
  return (
    <Chip
      label={cell.icon === 'Only' ? undefined : 'Chip label'}
      size={cell.size === 'Regular' ? 'md' : 'sm'}
      selected={ACTION_TO_SELECTED[cell.action]}
      error={cell.state === 'Error'}
      iconLeft={(cell.icon === 'Left' || cell.icon === 'Both' || cell.icon === 'Only') ? tagIcon : undefined}
      iconRight={(cell.icon === 'Right' || cell.icon === 'Both') ? tagIcon : undefined}
      className={cls}
    />
  );
}

export const Matrix: Story = {
  parameters: { layout: 'fullscreen', matrixSpec: { figmaPageId: '1142:410', cells: CHIP_CELLS } },
  decorators: [
    MatrixVerify,
    (Story) => <div className="bg-canvas p-12 min-w-fit">{Story()}</div>,
  ],
  render: () => (
    <div className="relative" style={{ width: 5900, height: 340 }}>
      {CHIP_CELLS.map((c) => (
        <div
          key={c.variant}
          className="absolute"
          data-matrix-cell
          style={{ left: c.x, top: c.y, width: c.w, height: c.h }}
        >
          <ChipMatrixCell cell={c} />
        </div>
      ))}
    </div>
  ),
};
